# JAMIESSHOESS — Squarespace Admin Checklist

Things that cannot be fixed with code injection. Work through this list in Squarespace dashboard.

---

## Priority 1 — Do This Before Testing the New Code

- [ ] **Paste the new code injection.**
  Go to `jamiesshoess.squarespace.com` → Settings → search "code injection" → Header field.
  Select all existing content, delete it, paste the contents of `exports/squarespace-code-injection.html`.
  Save. Then hard-refresh `shop.jamiesshoes.com` (Ctrl+Shift+R or Cmd+Shift+R).

- [ ] **Fix the broken YouTube link.**
  The current value is `http://http:/YOUTUBE.COM/JAMIESSHOESS` (typo).
  Go to Settings → Social Links (or Marketing → Connected Accounts).
  Replace with: `https://youtube.com/@jamiesshoess`
  The new code injection hides Squarespace's broken social list and injects corrected links via JS,
  but fix it in the admin too so it's clean.

- [ ] **Test a full purchase in a private/incognito window.**
  Home → click a product → Add to Cart → cart drawer → Checkout.
  If anything looks broken on cart or checkout, the CSS is being too aggressive.
  Report which element is broken and it can be scoped out.

---

## Priority 2 — Product Images

- [ ] **Reorder product images so the front-of-item photo is first.**
  Currently some products show the tag or back of the item as the primary image.
  Commerce → Products → click each affected product → Images tab → drag the front photo to position #1.
  There's no CSS or JS fix for this — it's a data issue in the product record.

---

## Priority 3 — Category Pages

The pages `/shoes`, `/clothing`, `/hats`, `/bags`, `/accessories`, `/kids`, `/vintage-items`, `/pokemon-cards`
are empty because all 51 products live on `/home` and are not tagged into category folders.

- [ ] **Tag products into category folders.**
  Commerce → Products → select multiple products (bulk edit) → assign Categories.
  Each product should be in at least one category. Suggested mapping:
  - Sneakers / athletic shoes → Shoes
  - Hoodies, tees, jackets → Clothing
  - Baseball caps, beanies → Hats
  - Bags, backpacks → Bags
  - Belts, jewelry, accessories → Accessories
  - Kids sizes → Kids
  - General vintage → Vintage Items
  - Pokémon cards → Pokémon Cards

---

## Priority 4 — Nav & Social

- [ ] **Add TikTok to social links.**
  Settings → Social Links → add: `https://www.tiktok.com/@jamiesshoess417`

- [ ] **Add Facebook to social links.**
  Settings → Social Links → add: `https://www.facebook.com/p/jamiesshoess-100080011887058/`

- [ ] **Decide on the "Login Account" nav item.**
  If customers have accounts, keep it and verify the link is correct.
  If not using customer accounts, remove it from Pages → Navigation.

- [ ] **Verify the favicon is the JAMIESSHOESS badge.**
  Design → Browser Icon. If it shows the default Squarespace square, upload the circular badge logo.

---

## Priority 5 — Verification

- [ ] **SSL still valid on `shop.jamiesshoes.com`.**
  Settings → Domains → confirm HTTPS is active and the CNAME still points correctly.

- [ ] **Mobile test at 375px width (iPhone SE).**
  Open DevTools → device toolbar → iPhone SE. Scroll through home, click a product, add to cart.
  Verify no horizontal scroll, hero not cut off at top, all text readable.

---

## Optional — Marquee Strip

The main `jamiesshoes.com` site has a scrolling announcement strip.
If you want the same on the shop subdomain, use Squarespace's native Announcement Bar:
Settings → Announcement Bar → enable → text: `NEW DROP EVERY WEEKEND · FOLLOW @JAMIESSHOESS FOR UPDATES · 302 PARK CENTRAL EAST, SPRINGFIELD MO`
The code injection already styles `.sqs-announcement-bar` to match the dark theme.
