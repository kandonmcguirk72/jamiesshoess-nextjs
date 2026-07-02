# shop.jamiesshoes.com — Deploy Checklist (2026-07-01)

The Squarespace side can only be changed from the admin dashboard. Everything code
can do is in **`exports/squarespace-code-injection-v2.html`** (6,581 chars — well
under the 9,800 limit). Steps, in order:

## 1. Paste the code injection (5 min)
Squarespace admin → **Settings → Advanced → Code Injection → Header**.
Delete whatever is in the field, paste the full contents of
`squarespace-code-injection-v2.html`, save.

What it does:
- Hides the native Squarespace header/announcement bar; injects a fixed dark header
  matching jamiesshoes.com — cyan JAMIESSHOESS wordmark (links back to the main
  site), SHOP / VINTAGE / SELL / ABOUT / CART links, live cart count.
- Forces `#080A09` background everywhere with a MutationObserver that re-kills
  Squarespace's runtime white-background injection.
- Barlow Condensed 900 italic uppercase on all headings/product titles; cyan
  prices; cyan glow buttons; dark quantity inputs/selects/cart page.
- Hides the "Login Account" link.
- Runtime-patches the malformed YouTube link and any `/shopp` hrefs, and points
  "Continue Shopping"/"Back to Home" links at https://www.jamiesshoes.com.

## 2. Fix the two broken links at the source (2 min) — the injection patches them at runtime, but fix them properly:
- **Settings → Social Links**: YouTube is `http://http:/YOUTUBE.COM/JAMIESSHOESS`
  → change to `https://www.youtube.com/@Jamiesshoess417`. (Twitter link also exists —
  delete it if there's no active Twitter/X account.)
- **Pages / Navigation**: the "Shop" nav item points to `/shopp` (typo). Point it
  at the store page (`/`) or rename the page slug.

## 3. Checkout appearance (3 min)
The injection cannot run on the hosted checkout page. To keep checkout from
flashing white: **Design → Checkout Page** (or Commerce → Checkout → Styles) and
set the background/button colors to `#080A09` / `#00ECF1` as closely as the editor
allows. Squarespace checkout is intentionally minimal — matching the accent color
is enough; do not attempt anything beyond its native styling options.

## 4. Product photo order (ongoing)
Any product whose first photo is a tag/label instead of the front of the garment:
open the product in Commerce → drag the front photo to position 1. This cannot be
done by code.

## 5. Verify (5 min)
- Load shop.jamiesshoes.com → dark instantly, custom header, no "Login Account".
- Click a product → dark product page, cyan ADD TO CART, dark quantity selector.
- Add to cart → CART count updates in the injected header → cart page dark →
  checkout completes.
- Click the JAMIESSHOESS wordmark → lands on https://www.jamiesshoes.com.
- Footer YouTube icon → https://www.youtube.com/@Jamiesshoess417.
