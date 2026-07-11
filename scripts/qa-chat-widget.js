/**
 * E2E QA for the chat widget against a running server (default :3000).
 * Verifies: zero model/KB bytes before open, lazy load on open, chip replies,
 * free-text semantic answers, and the inventory non-claim rule.
 * Run: node scripts/qa-chat-widget.js
 */
const { chromium } = require('playwright');

const BASE = process.env.QA_BASE || 'http://localhost:3000';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const requests = [];
  page.on('request', (r) => requests.push(r.url()));

  const isModelReq = (u) =>
    u.includes('huggingface') || u.includes('kb-embeddings') || u.includes('onnx');

  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000); // launcher waits for idle

  const preOpen = requests.filter(isModelReq);
  console.log(preOpen.length === 0 ? 'PASS' : 'FAIL', `— ${preOpen.length} model/KB requests before open`);

  const launcher = page.getByRole('button', { name: 'Open chat' });
  await launcher.waitFor({ state: 'visible', timeout: 10000 });
  console.log('PASS — launcher visible after idle');

  await launcher.click();
  await page.getByRole('dialog', { name: 'JAMIESSHOESS chat' }).waitFor({ timeout: 10000 });
  console.log('PASS — panel opens');

  // Chips work immediately, before the model is ready.
  await page.getByRole('button', { name: 'Hours & location' }).click();
  await page.waitForTimeout(1500);
  const bodyText = await page.getByRole('dialog').innerText();
  console.log(
    /Wed|Wednesday/i.test(bodyText) && /302 Park Central/i.test(bodyText) ? 'PASS' : 'FAIL',
    '— chip answered hours + location instantly',
  );

  // Model/KB should be loading now.
  await page.waitForFunction(
    () => !document.querySelector('input[aria-label="Type your message"]')?.disabled,
    null,
    { timeout: 120000 },
  );
  const postOpen = requests.filter(isModelReq);
  console.log(postOpen.length > 0 ? 'PASS' : 'FAIL', `— ${postOpen.length} model/KB requests after open`);
  console.log('PASS — free-text input enabled (model ready)');

  const ask = async (q) => {
    await page.fill('input[aria-label="Type your message"]', q);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2500);
    const msgs = await page.$$eval('[role="dialog"] .whitespace-pre-wrap', (els) =>
      els.map((e) => e.innerText),
    );
    return msgs[msgs.length - 1];
  };

  let a = await ask('yall open sunday?');
  console.log(/closed/i.test(a) ? 'PASS' : 'FAIL', `— sunday: "${a.slice(0, 80)}..."`);

  a = await ask('u got any jordans size 11');
  const noClaim = !/yes we (have|got)|in stock right now/i.test(a) && /shop\.jamiesshoes\.com|JAMIESSHOESS/i.test(a);
  console.log(noClaim ? 'PASS' : 'FAIL', `— inventory routes to shop/IG, no claims: "${a.slice(0, 90)}..."`);

  a = await ask('do you buy shoes');
  console.log(/buy|DM|pull up|bring/i.test(a) ? 'PASS' : 'FAIL', `— sell-to-us: "${a.slice(0, 80)}..."`);

  a = await ask('is this stuff legit');
  console.log(/authentic|real|reps/i.test(a) ? 'PASS' : 'FAIL', `— legit: "${a.slice(0, 80)}..."`);

  // sessionStorage persistence
  const stored = await page.evaluate(() => sessionStorage.getItem('jamies-chat-v1'));
  console.log(stored && JSON.parse(stored).length > 5 ? 'PASS' : 'FAIL', '— conversation persisted to sessionStorage');

  await page.screenshot({ path: 'scripts/qa-chat-widget.png' });
  await browser.close();
})().catch((e) => {
  console.error('QA FAILED:', e);
  process.exit(1);
});
