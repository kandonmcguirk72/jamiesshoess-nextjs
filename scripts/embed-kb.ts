/**
 * Build-time KB embedder.
 *
 * Embeds every example phrase in src/data/chat-kb.ts with the same model the
 * browser uses (Xenova/all-MiniLM-L6-v2, quantized) and writes normalized
 * vectors to public/chat/kb-embeddings.json. At runtime the browser only
 * embeds the user's query and does dot products against these.
 *
 * Run: npm run embed-kb   (re-run whenever chat-kb.ts changes)
 */
import { pipeline } from '@huggingface/transformers';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CHAT_KB } from '../src/data/chat-kb';

const MODEL_ID = 'Xenova/all-MiniLM-L6-v2';
const OUT_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'public',
  'chat',
  'kb-embeddings.json',
);

interface KbEmbeddingsFile {
  model: string;
  dim: number;
  /** Parallel arrays: entry i is phrase i of some intent. */
  intentIds: string[];
  phrases: string[];
  /** Normalized vectors, rounded to 5 decimals to keep the file small. */
  vectors: number[][];
}

async function main(): Promise<void> {
  console.log(`Loading ${MODEL_ID}...`);
  const embed = await pipeline('feature-extraction', MODEL_ID, {
    dtype: 'q8',
  });

  const intentIds: string[] = [];
  const phrases: string[] = [];
  for (const intent of CHAT_KB) {
    for (const phrase of intent.phrases) {
      intentIds.push(intent.id);
      phrases.push(phrase);
    }
  }

  console.log(`Embedding ${phrases.length} phrases from ${CHAT_KB.length} intents...`);
  const output = await embed(phrases, { pooling: 'mean', normalize: true });
  const [count, dim] = output.dims as [number, number];
  if (count !== phrases.length) {
    throw new Error(`Expected ${phrases.length} vectors, got ${count}`);
  }

  const data = output.data as Float32Array;
  const vectors: number[][] = [];
  for (let i = 0; i < count; i++) {
    const row: number[] = new Array<number>(dim);
    for (let j = 0; j < dim; j++) {
      row[j] = Math.round(data[i * dim + j] * 1e5) / 1e5;
    }
    vectors.push(row);
  }

  const file: KbEmbeddingsFile = { model: MODEL_ID, dim, intentIds, phrases, vectors };
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(file));
  console.log(`Wrote ${vectors.length} x ${dim} vectors to ${OUT_PATH}`);
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
