/// <reference lib="webworker" />
/**
 * Web Worker that hosts the MiniLM embedding model so the UI thread never
 * blocks. Downloads the quantized model (~25MB, cached by the browser after
 * first load) on 'init' and embeds query text on demand.
 */
import { pipeline, env, type FeatureExtractionPipeline } from '@huggingface/transformers';
import type { WorkerRequest, WorkerResponse } from './types';

// Only fetch models from the HF hub; never look for local model files.
env.allowLocalModels = false;

const MODEL_ID = 'Xenova/all-MiniLM-L6-v2';

let embedderPromise: Promise<FeatureExtractionPipeline> | null = null;

function getEmbedder(): Promise<FeatureExtractionPipeline> {
  embedderPromise ??= pipeline('feature-extraction', MODEL_ID, { dtype: 'q8' });
  return embedderPromise;
}

function post(msg: WorkerResponse): void {
  self.postMessage(msg);
}

self.addEventListener('message', (event: MessageEvent<WorkerRequest>) => {
  const msg = event.data;
  if (msg.type === 'init') {
    getEmbedder()
      .then(() => post({ type: 'ready' }))
      .catch((err: unknown) => {
        post({ type: 'init-error', error: err instanceof Error ? err.message : String(err) });
      });
  } else {
    getEmbedder()
      .then(async (embed) => {
        const output = await embed(msg.texts, { pooling: 'mean', normalize: true });
        const [count, dim] = output.dims as [number, number];
        const data = output.data as Float32Array;
        const vectors: number[][] = [];
        for (let i = 0; i < count; i++) {
          vectors.push(Array.from(data.subarray(i * dim, (i + 1) * dim)));
        }
        post({ type: 'embedded', id: msg.id, vectors });
      })
      .catch((err: unknown) => {
        post({
          type: 'embed-error',
          id: msg.id,
          error: err instanceof Error ? err.message : String(err),
        });
      });
  }
});
