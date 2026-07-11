/**
 * QA harness: embeds test queries with the same model/config as the browser
 * and reports which intent each routes to at which confidence tier.
 * Run: npx tsx scripts/test-chat-routing.ts
 */
import { pipeline } from '@huggingface/transformers';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

interface Kb {
  intentIds: string[];
  phrases: string[];
  vectors: number[][];
}

const kb = JSON.parse(
  readFileSync(
    join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'chat', 'kb-embeddings.json'),
    'utf8',
  ),
) as Kb;

const TESTS: { query: string; expect: string[] }[] = [
  { query: 'yall open sunday?', expect: ['hours-sunday', 'hours'] },
  { query: 'where u located', expect: ['location'] },
  { query: 'do you buy shoes', expect: ['sell-to-us'] },
  { query: "when's the next drop", expect: ['drops-restocks'] },
  { query: 'can i return something', expect: ['returns'] },
  { query: 'u got any jordans size 11', expect: ['inventory-specific', 'inventory-general'] },
  { query: 'is this stuff legit', expect: ['legit-check'] },
  { query: 'wya', expect: ['location'] },
  { query: 'do u buy kicks', expect: ['sell-to-us'] },
  { query: 'yall open rn', expect: ['hours'] },
  { query: 'what about saturday', expect: ['hours-saturday'] },
  { query: 'how much wood could a woodchuck chuck', expect: ['<fallback>'] },
  // Paraphrases NOT in the KB — true semantic tests.
  { query: 'are yall open on the weekend', expect: ['hours-saturday', 'hours', 'hours-sunday'] },
  { query: 'im tryna sell some sneakers i got', expect: ['sell-to-us'] },
  { query: 'do you guys check if the shoes are fake', expect: ['legit-check', 'legit-check-service'] },
  { query: 'whats the move for sending back an order', expect: ['returns'] },
  { query: 'any nike dunk lows in a mens 9', expect: ['inventory-specific', 'inventory-general'] },
  { query: 'yall open monday', expect: ['hours-monday', 'hours'] },
  { query: 'can i swing by on tuesday', expect: ['hours-monday', 'hours'] },
];

async function main(): Promise<void> {
  const embed = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', { dtype: 'q8' });
  let failures = 0;
  for (const t of TESTS) {
    const out = await embed(t.query, { pooling: 'mean', normalize: true });
    const q = out.data as Float32Array;
    let best = -1;
    let bestIdx = 0;
    for (let i = 0; i < kb.vectors.length; i++) {
      let s = 0;
      const v = kb.vectors[i];
      for (let j = 0; j < v.length; j++) s += q[j] * v[j];
      if (s > best) {
        best = s;
        bestIdx = i;
      }
    }
    const tier = best >= 0.62 ? 'CONFIDENT' : best >= 0.45 ? 'HEDGED' : 'FALLBACK';
    const routed = tier === 'FALLBACK' ? '<fallback>' : kb.intentIds[bestIdx];
    const ok = t.expect.includes(routed);
    if (!ok) failures++;
    console.log(
      `${ok ? 'PASS' : 'FAIL'}  "${t.query}" -> ${routed} (${best.toFixed(3)}, ${tier})` +
        `  via "${kb.phrases[bestIdx]}"`,
    );
  }
  if (failures > 0) {
    console.error(`\n${failures} failure(s)`);
    process.exit(1);
  }
  console.log('\nAll routing tests passed.');
}

main().catch((e: unknown) => {
  console.error(e);
  process.exit(1);
});
