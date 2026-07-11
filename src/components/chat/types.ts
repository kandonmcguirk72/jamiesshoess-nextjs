export interface KbEmbeddings {
  model: string;
  dim: number;
  intentIds: string[];
  phrases: string[];
  vectors: number[][];
}

export interface MatchResult {
  intentId: string;
  phrase: string;
  score: number;
}

export interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
  ts: number;
}

/** Messages sent to the embedding worker. */
export type WorkerRequest =
  | { type: 'init' }
  | { type: 'embed'; id: number; texts: string[] };

/** Messages received from the embedding worker. */
export type WorkerResponse =
  | { type: 'ready' }
  | { type: 'init-error'; error: string }
  | { type: 'embedded'; id: number; vectors: number[][] }
  | { type: 'embed-error'; id: number; error: string };
