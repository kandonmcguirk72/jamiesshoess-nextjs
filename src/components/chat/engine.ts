/**
 * Chat matching engine. Two paths:
 *  - semantic: embed the query in the worker, dot-product against the
 *    precomputed KB vectors (both normalized, so dot == cosine)
 *  - fallback: Fuse.js fuzzy keyword match against the same phrases when the
 *    model can't load (old browser, blocked WASM, offline)
 *
 * Thresholds: >=0.62 confident, 0.45–0.62 hedged, <0.45 refuse to guess.
 */
import Fuse from 'fuse.js';
import {
  CHAT_KB,
  FALLBACK_RESPONSES,
  HEDGE_SUFFIXES,
  type ChatIntent,
} from '@/data/chat-kb';
import type { KbEmbeddings, MatchResult, WorkerRequest, WorkerResponse } from './types';

export const CONFIDENT_THRESHOLD = 0.62;
export const HEDGE_THRESHOLD = 0.45;

const INTENTS_BY_ID = new Map<string, ChatIntent>(CHAT_KB.map((i) => [i.id, i]));

function pick(arr: readonly string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function buildReply(match: MatchResult | null): string {
  if (!match || match.score < HEDGE_THRESHOLD) {
    return pick(FALLBACK_RESPONSES);
  }
  const intent = INTENTS_BY_ID.get(match.intentId);
  if (!intent) return pick(FALLBACK_RESPONSES);
  const answer = pick(intent.responses);
  if (match.score < CONFIDENT_THRESHOLD) {
    return answer + pick(HEDGE_SUFFIXES);
  }
  return answer;
}

/** Direct intent lookup for quick-reply chips (no model needed). */
export function replyForIntent(intentId: string): string {
  const intent = INTENTS_BY_ID.get(intentId);
  return intent ? pick(intent.responses) : pick(FALLBACK_RESPONSES);
}

function dot(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
  return sum;
}

export function bestMatch(query: number[], kb: KbEmbeddings): MatchResult {
  let best = -1;
  let bestIdx = 0;
  for (let i = 0; i < kb.vectors.length; i++) {
    const s = dot(query, kb.vectors[i]);
    if (s > best) {
      best = s;
      bestIdx = i;
    }
  }
  return { intentId: kb.intentIds[bestIdx], phrase: kb.phrases[bestIdx], score: best };
}

// ---------- Fuse.js fallback ----------

interface FusePhrase {
  intentId: string;
  phrase: string;
}

let fuse: Fuse<FusePhrase> | null = null;

function getFuse(): Fuse<FusePhrase> {
  if (!fuse) {
    const docs: FusePhrase[] = [];
    for (const intent of CHAT_KB) {
      for (const phrase of intent.phrases) docs.push({ intentId: intent.id, phrase });
    }
    fuse = new Fuse(docs, {
      keys: ['phrase'],
      includeScore: true,
      threshold: 0.55,
      ignoreLocation: true,
    });
  }
  return fuse;
}

export function fuzzyMatch(query: string): MatchResult | null {
  const results = getFuse().search(query, { limit: 1 });
  const top = results[0];
  if (!top || top.score === undefined) return null;
  // Fuse score: 0 = perfect. Map into our similarity space so the same
  // thresholds apply (rough but serviceable for a fallback).
  const similarity = 1 - top.score;
  return { intentId: top.item.intentId, phrase: top.item.phrase, score: similarity };
}

// ---------- Semantic engine (worker + precomputed vectors) ----------

export class SemanticEngine {
  private worker: Worker | null = null;
  private kb: KbEmbeddings | null = null;
  private nextId = 1;
  private pending = new Map<
    number,
    { resolve: (v: number[][]) => void; reject: (e: Error) => void }
  >();
  private readyPromise: Promise<void> | null = null;

  /** Kicks off worker + model + KB download. Resolves when free-text is usable. */
  init(): Promise<void> {
    this.readyPromise ??= this.doInit();
    return this.readyPromise;
  }

  private async doInit(): Promise<void> {
    if (typeof Worker === 'undefined') throw new Error('no worker support');

    const kbPromise = fetch('/chat/kb-embeddings.json').then(
      async (res): Promise<KbEmbeddings> => {
        if (!res.ok) throw new Error(`kb fetch failed: ${res.status}`);
        return (await res.json()) as KbEmbeddings;
      },
    );

    const worker = new Worker(new URL('./embed.worker.ts', import.meta.url));
    this.worker = worker;

    const workerReady = new Promise<void>((resolve, reject) => {
      const onMessage = (event: MessageEvent<WorkerResponse>): void => {
        const msg = event.data;
        if (msg.type === 'ready') resolve();
        else if (msg.type === 'init-error') reject(new Error(msg.error));
        else if (msg.type === 'embedded') this.pending.get(msg.id)?.resolve(msg.vectors);
        else if (msg.type === 'embed-error')
          this.pending.get(msg.id)?.reject(new Error(msg.error));
        if (msg.type === 'embedded' || msg.type === 'embed-error') {
          this.pending.delete(msg.id);
        }
      };
      worker.addEventListener('message', onMessage);
      worker.addEventListener('error', (e) => reject(new Error(e.message || 'worker error')));
      const initMsg: WorkerRequest = { type: 'init' };
      worker.postMessage(initMsg);
    });

    const [kb] = await Promise.all([kbPromise, workerReady]);
    this.kb = kb;
  }

  private embed(texts: string[]): Promise<number[][]> {
    const worker = this.worker;
    if (!worker) return Promise.reject(new Error('engine not initialized'));
    const id = this.nextId++;
    return new Promise<number[][]>((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      const msg: WorkerRequest = { type: 'embed', id, texts };
      worker.postMessage(msg);
    });
  }

  /**
   * Match a query. Also embeds `previous + query` when a previous user
   * message exists, so follow-ups like "what about saturday" resolve
   * against the prior topic — best score wins.
   */
  async match(query: string, previousUserMessage?: string): Promise<MatchResult> {
    if (!this.kb) throw new Error('engine not initialized');
    const texts = [query];
    if (previousUserMessage) texts.push(`${previousUserMessage} ${query}`);
    const vectors = await this.embed(texts);
    let best: MatchResult | null = null;
    for (const vec of vectors) {
      const m = bestMatch(vec, this.kb);
      if (!best || m.score > best.score) best = m;
    }
    if (!best) throw new Error('no match produced');
    return best;
  }

  dispose(): void {
    this.worker?.terminate();
    this.worker = null;
  }
}
