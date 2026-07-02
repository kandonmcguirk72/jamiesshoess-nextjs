# JAMIESSHOESS — Squarespace Setup Guide
# Do these steps in order. Each one takes 1–3 minutes.

---

## WHAT'S ALREADY DONE (no action needed)
- 6 products imported, named, tagged, and set to VISIBLE
- CSS file ready to paste
- Code injection ready to paste
- All page copy ready to paste

---

## STEP 1 — Change the site title (2 min)

1. Go to: https://trout-gold-rwr6.squarespace.com/config/
2. Click **Settings** (gear icon, left sidebar)
3. Click **Website**
4. Click **Site Information** (first option)
5. Clear the "Site Title" field — type: **JAMIESSHOESS**
6. In "Site Tagline" type: **Vintage Clothing & Sneakers · Springfield, MO**
7. Click **Save**

---

## STEP 2 — Apply dark theme CSS (3 min)

1. Go to: https://trout-gold-rwr6.squarespace.com/config/design/
2. Click **Custom CSS** (bottom of the Design menu)
3. DELETE everything in the box
4. Open this file and copy everything: `exports/squarespace-custom-css.css`
5. Paste into the Custom CSS box
6. Click **Save**

---

## STEP 3 — Inject fonts + mobile bar + structured data (2 min)

1. Go to: https://trout-gold-rwr6.squarespace.com/config/settings/
2. Click **Advanced**
3. Click **Code Injection**
4. In the **HEADER** box — paste the entire contents of: `exports/squarespace-code-injection.html`
5. Click **Save**

---

## STEP 4 — Add the Announcement Bar (2 min)

1. Go to: https://trout-gold-rwr6.squarespace.com/config/pages/
2. At the bottom of the left sidebar — click **Announcement Bar**
3. Toggle it ON
4. Paste this text:
   ```
   NEW DROP EVERY WEEKEND · FOLLOW @JAMIESSHOESS FOR UPDATES · 📍 302 PARK CENTRAL EAST, SPRINGFIELD MO · WED–THU 12–6  FRI–SAT 12–7 · FREE LOCAL PICKUP AT THE STORE
   ```
5. Set background color to: `#000000`
6. Set text color to: `#FFFFFF`
7. Click **Save**

---

## STEP 5 — Fix the navigation (5 min)

1. Go to: https://trout-gold-rwr6.squarespace.com/config/pages/
2. In **Main Navigation** — delete these pages (click gear → Delete):
   - Services
   - Gallery
   - Story
   - Contact
3. Rename **Store** → **Shop** (click gear → Settings → change Name)
4. Click **+** to add new pages:
   - Page: **Sell** (URL: /sell)
   - Page: **About** (URL: /about)
5. Drag to reorder: Shop / Sell / About
6. Move **Home** from "Not Linked" up to Main Navigation (drag it to the top)

---

## STEP 6 — Build the Home page (20–30 min)

Go to: https://trout-gold-rwr6.squarespace.com/config/pages/
Click **Home** → Click **Edit**

**Delete all existing sections** (hover each section → click X to remove)

Then add sections from top to bottom:

### Hero Section (Section 1)
- Click **+** to add section
- Choose a **Full Bleed** or **Banner** layout
- Set background: **solid color #080A09**
- Add a **Text Block**:
  - Heading: `Vintage Clothing & Sneakers`
  - Body: `Hand-picked vintage clothing, authenticated sneakers, and in-house merch — all in one store.`
- Add a **Button Block** (two buttons):
  - Button 1: Label `Browse the Store` → Link `/store` → Style: Solid, Color #00E5FF, text #080A09
  - Button 2: Label `@JAMIESSHOESS ↗` → Link `https://instagram.com/jamiesshoess` → Style: Outline
- Add a **Text Block** (small text below buttons):
  - `Open Wed–Thu 12–6 PM · Fri–Sat 12–7 PM · Free Local Pickup`

### Stats Row (Section 2)
- Add section → choose **3-column** layout
- Background: #080A09
- Column 1: Heading `6,100+` / Body `Instagram Followers`
- Column 2: Heading `Weekly` / Body `New Drops`
- Column 3: Heading `100%` / Body `Authenticated`

### Features Bar (Section 3)
- Add section → **4-column** layout
- Background: #111311
- Column 1: Icon ↔ / Title `In-Store Trades` / Text `Bring your pieces — we trade`
- Column 2: Icon ✦ / Title `Selective Buying` / Text `We purchase quality items`
- Column 3: Icon ◎ / Title `Free Local Pickup` / Text `302 Park Central East`
- Column 4: Icon ◈ / Title `Wide Selection` / Text `Vintage, sneakers & more`

### Shop Section (Section 4)
- Add section → choose **Products** block (or link to /store)
- Set heading: `Shop the Floor`
- Display your store products in a grid

### Instagram CTA (Section 5)
- Add section → full-width, dark background
- Heading: `New drops every weekend.`
- Body: `Follow @jamiesshoess on Instagram for first access to new inventory, drop alerts, and behind-the-scenes from the shop.`
- Text: `6,100+ Followers · @jamiesshoess`
- Button: `Follow on Instagram →` → `https://instagram.com/jamiesshoess`

### Review CTA (Section 6)
- Add section
- Heading: `Enjoyed Shopping With Us?`
- Subhead: `Drop us a 5-star review`
- Text: `Takes 30 seconds · Helps us grow in Springfield`
- Button: `Leave a Review →` → your Google Maps review link

### Email Capture (Section 7)
- Add section
- Heading: `Be First On The Drop`
- Body: `Get texted when new inventory hits. No spam, ever.`
- Add a **Newsletter Block** → button text: `Notify Me`
- Text below: `DM @JAMIESSHOESS on Instagram to get on the SMS list.`

Click **Save** when done.

---

## STEP 7 — Build the About page (10 min)

Go to Pages → About → Edit

Add sections with this content (from `exports/squarespace-page-content.md`):

**Section 1:** Full-width heading
`Our Story`
Subhead: `From a small town dream to Springfield's favorite find.`

**Section 2:** Text block (paste the full "Who We Are" paragraph from the content file)

**Section 3:** Pull quote
`"I always knew I wanted to build something real. I just had to be brave enough to go get it."`

**Section 4:** 2×2 stats grid
- Founded: 10+ Years in the resale market
- Location: Springfield, MO · 302 Park Central East
- Hours: Wed–Sat · 12PM–6/7PM
- Services: Buy · Trade · Sell · Vintage & sneakers

**Section 5:** Core values (3 columns)
◈ Handpicked, always / ✦ Local & proud / ◎ Style without rules

**Section 6:** Two buttons
[Follow on Instagram] [Get Directions]

---

## STEP 8 — Build the Sell page (8 min)

Pages → Sell → Edit

**Section 1:** Heading
`Sell or Trade Your Pieces`
Body: `Got vintage pieces, rare finds, or fresh kicks? Bring them in or send photos ahead of time. We evaluate on the spot — no hassle.`

**Section 2:** Checklist (use bullet list or icon list)
✓ Bring your items in-store Wed–Sat, 12PM–7PM
✓ We evaluate on the spot — cash or store credit
✓ We buy vintage tees, sneakers, streetwear & more

**Section 3:** Two buttons
[Get Directions] → https://maps.google.com/?q=302+Park+Central+East+Springfield+MO
[@JAMIESSHOESS] → https://instagram.com/jamiesshoess

**Section 4:** Form block "Send Photos First"
Fields: Name, Email or Phone, What Are You Selling?, Asking Price (Optional), Photo upload, Checkbox

---

## STEP 9 — SEO per page (5 min)

For each page (Home, About, Sell):
1. In Pages panel — click the gear icon next to the page name
2. Click **SEO** tab
3. Set the title and description:

**Home:**
- Title: `JAMIESSHOESS | Vintage Clothing & Sneakers · Springfield MO`
- Description: `Hand-picked vintage tees, authenticated sneakers, and in-house merch in downtown Springfield MO. 302 Park Central East. Open Wed–Sat.`

**About:**
- Title: `About JAMIESSHOESS | Springfield MO Vintage Store`
- Description: `JAMIESSHOESS is Springfield's destination for vintage clothing, authenticated sneakers, and in-house merch at 302 Park Central East.`

**Sell:**
- Title: `Sell or Trade Sneakers & Vintage | JAMIESSHOESS Springfield MO`
- Description: `Bring your vintage tees, sneakers, and streetwear to JAMIESSHOESS. We buy on the spot — cash or store credit. 302 Park Central East, Springfield MO.`

---

## STEP 10 — Publish the site (1 min)

1. Go to: https://trout-gold-rwr6.squarespace.com/config/
2. Click **PUBLISH YOUR SITE** (blue button at the top)
3. Choose a plan (minimum **Basic Commerce** for the store to work — $36/mo or $27/mo annual)
4. Click Publish

---

## STEP 11 — Add real products (ongoing)

When you're ready to list actual inventory:
1. Go to **Commerce → Products → +**
2. Fill in: Name, Photos, Price, Size (as variant), Tags (VTG / NEW / MERCH etc.)
3. Set stock to 1 for one-of-one items
4. Click Publish

---

## WHAT THE API CANNOT DO (Squarespace limitation)
These all require the visual editor above:
- Page content / sections / text blocks
- Navigation structure
- Announcement bar content
- Custom CSS
- Code injection (fonts, schema, mobile bar)
- SEO titles and descriptions
- Site title
- Footer content
- Publishing

---

## YOUR SITE URLS
- Dashboard: https://trout-gold-rwr6.squarespace.com/config/
- Live site: https://www.jamiesshoes.com (after publishing)
- Store: https://www.jamiesshoes.com/store
