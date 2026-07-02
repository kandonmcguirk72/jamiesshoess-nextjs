# JAMIESSHOESS Final Build — Phase 1 Audit Findings (2026-07-01)

## Headline finding
**The live jamiesshoes.com is running a 14-day-old deploy that predates the current
working-tree code.** The served HTML contains no "Shop the Floor" section, no
`#products` anchor, and the old wrong-domain og:image — while the local working tree
already has the dynamic product pipeline and correct metadata. GitHub (`master`,
e91b424) is in sync with local commits, but ~750 lines of working-tree changes
(dynamic Squarespace fetch replacing hardcoded product data) were never committed
or deployed. **Root cause of the "no product grid" issue = stale deploy, not a
missing API key.** There is no `SQUARESPACE_API_KEY` and none is needed — the site
reads the public `shop.jamiesshoes.com/home?format=json` feed, which was verified
live just now: **HTTP 200, 51 products, prices in `variants[0].price`, 4+ images
each, `unlimited` stock flags.** The local mapping code handles all of it correctly.

## jamiesshoes.com (Next.js / Vercel)
| # | Item | Status |
|---|------|--------|
| 1 | Product grid | **BROKEN live** (section absent from deployed HTML). Local code works against live feed. Fix = commit + deploy. Vercel env has only `RESEND_API_KEY`; no Squarespace key needed. |
| 2 | Filter tabs | Local code is a reactive client filter (VINTAGE/MERCH/NEW/HEADWEAR) — will work once grid ships. Live: dead anchors to a nonexistent `#products`. |
| 3 | OG image domain | Live og:image = `https://jamiesshoess.com/...` (wrong). Local `layout.tsx` is fixed via `metadataBase` but **`src/lib/schema.ts:6-8` still has 3 wrong-domain URLs** (url/logo/image). Also apex `jamiesshoes.com` 308-redirects to `www.` — metadataBase should be `https://www.jamiesshoes.com`. |
| 4 | SMS "Notify Me" | Local `EmailCapture.tsx` HAS a phone input but the submit is **fake** (sets state, sends nothing). Fix: wire to a real `/api/notify` route using the existing Resend key (emails the number to Kandon, same pattern as `/api/sell`). |
| 5 | /sell nav | Uses the shared root layout Nav — consistent. OK. |
| 6 | Links | Instagram/TikTok/Facebook/YouTube/Maps hrefs all correct in constants + Footer. Footer copyright says **© 2025** (it's 2026). |
| — | Extra findings | (a) GA4 script loads placeholder ID `G-XXXXXXXXXX` — dead request on every page; gate behind env var. (b) `sitemap.ts` baseUrl is `jamiesshoess-nextjs.vercel.app` — wrong canonical. (c) Product cards route to internal `/product/[id]` instead of straight to the Squarespace product (brief requires direct routing). |

## shop.jamiesshoes.com (Squarespace)
| # | Item | Status |
|---|------|--------|
| 7 | Code Injection state | **Not deployed** — live shop is stock white Squarespace theme, native nav, "Login Account" visible. (Field contents can't be read without admin login; visual evidence is conclusive.) Local `exports/squarespace-code-injection.html` is **11,269 chars — over the 9,800 limit** and hides the native product list (wrong approach for current site structure). Needs rebuild. |
| 8 | YouTube footer link | **CONFIRMED broken**: `http://http:/YOUTUBE.COM/JAMIESSHOESS`. Admin fix (Settings → Social Links) → `https://youtube.com/@jamiesshoess`. |
| 9 | `/shopp` nav typo | **CONFIRMED** — nav folder link points to `/shopp`. Admin fix in Pages/Navigation. |
| 10 | Native commerce | Category pages live: /shoes /clothing /hats /bags /accessories /kids /vintage-items /pokemon-cards. Cart/checkout native Squarespace — untouched. |
| 11 | Product photo order | Cannot be fixed via injection; per-product admin task. Flag list in admin checklist. |

## Plan of record
- **Phase 2**: fix schema.ts domains, metadataBase → www, sitemap baseUrl, GA gating,
  real `/api/notify` SMS intake via Resend, product cards → direct Squarespace links,
  © 2026. Build, commit, push, deploy to Vercel, verify live HTML.
- **Phase 3**: rebuild injection from scratch: ≤9,800 chars, custom header matching
  Next.js nav, MutationObserver dark enforcement, Barlow Condensed 900 italic headings,
  restyle native product grid/cart/checkout/quantity, JS-patch the YouTube link and
  `/shopp` nav href at runtime (belt) + admin checklist (suspenders).
- **Phase 4**: cart-cookie note (native SQS, scoped to shop subdomain; cross-domain
  nav cannot clear it — verified logic, manual test on deploy).
- **Phase 5**: full QA sweep against live.
