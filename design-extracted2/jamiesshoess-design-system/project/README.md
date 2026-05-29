# JAMIESSHOESS — Design System

**Sneakers & Vintage · Downtown Springfield, MO (the 417)**
Graffiti-streetwear resale shop. Sneakers, vintage tees, hats, bags, accessories,
kids, vintage items, Pokémon cards, plus an in-house merch line (hoodies, crews,
tees) and one-off collabs (Carhartt × Jamiesshoess, John Deere × Jamiesshoess).

> *"In a world of opportunity, it's your obligation to take action and create
> something for yourself."* — JAMIESSHOESS

This folder is a brand + UI design system: brand voice, visual foundations,
color & type tokens, real logo assets, and high-fidelity UI kits so a design
agent can produce on-brand JAMIESSHOESS work (storefront screens, social drops,
mockups) without re-deriving the brand each time.

---

## Brand facts

| | |
|---|---|
| **Name** | JAMIESSHOESS (one word, double-S ending — *"jamiesshoess"*) |
| **What** | Sneakers & vintage resale + in-house merch |
| **Where** | 302 Park Central East, Downtown Springfield, MO |
| **Hours** | Wed–Thu 12–6 · Fri–Sat 12–7 · Closed Sun/Mon/Tue |
| **Online** | Squarespace shop · local pickup offered |
| **Socials** | IG **@jamiesshoess** (~6.1k) · TikTok **@jamiesshoess417** · FB · Twitter/X · YouTube |
| **Ethos** | Vintage = less waste. *"Thank you for saving the earth & shopping with us."* |
| **Region** | "the 417" (Springfield area code) is a point of local pride |

### Sources used to build this system
The user provided no codebase or Figma. This system was reverse-engineered from
the brand's live public presence (May 2026):
- **Storefront:** `https://jamiesshoess.squarespace.com` (home, about) — product
  catalog, copy, nav structure pulled from here.
- **Logos:** circular badge (`assets/logo-original.jpg`) and graffiti wordmark
  (`assets/footer-mark.png`) downloaded from the Squarespace CDN. A cleaned,
  transparent-background wordmark is saved at `assets/wordmark-graffiti.png`.
- **Social handles** above (Instagram / TikTok / Facebook) — referenced for
  voice & cadence; individual posts were not scraped.
- **Colors** were pixel-sampled directly from the two logo files (see Colors).

---

## CONTENT FUNDAMENTALS — how JAMIESSHOESS talks

The voice is **loud, hyped, grateful, and local**. It reads like a sneakerhead
texting a drop alert to the group chat — not a corporate retailer.

- **CASE:** Default to **ALL CAPS** for announcements, headlines, product titles,
  and CTAs. Sentence case is fine for longer body copy on the website, but the
  energy lives in the caps.
- **Emoji are part of the voice — use them.** Signature set: 📍 (location),
  🚨 (alert / new drop), 👟 (shoes), 🔥, ✅. They punctuate announcements, not
  every sentence. Example: `🚨 NEW DROP 🚨 ... FOLLOW US ON INSTAGRAM FOR MORE 👟`.
- **Person:** Direct second person to the customer ("FOLLOW US," "COME SHOP,"
  "THANK YOU FOR SHOPPING"). First-person-plural for the shop ("we," "us").
- **Recurring phrases / motifs:**
  - `STAY BLESSED` (sign-off)
  - `THANK YOU FOR SHOPPING!` / `THANK YOU FOR SAVING THE EARTH & SHOPPING WITH US!`
  - `COME SHOP` · `NEW DROP` · `OPEN NOW` · `FOLLOW US ON INSTAGRAM FOR MORE UPDATES`
  - `SELECT LOCAL PICKUP FOR FREE PICKUP AT THE STORE!`
  - Location stamp: `📍302 PARK CENTRAL EAST, SPRINGFIELD MO`
  - Hours stamp: `WED–THUR 12–6 // FRI–SAT 12–7`
- **Product naming convention (verbatim house style):**
  - Vintage prefix: `VTG` → e.g. `VTG NASCAR AOP (SIZE L)`, `VTG 1998 JERRY RICE 9ERS TEE (SIZE M)`
  - Era tags: `Y2K`, `SINGLE STITCH`, year of make (`1985`, `2007`)
  - Fit in parens: `(SIZE M)`, `(FITS S-M)`, `(SIZE S-3XL)`
  - One-of-one items tagged `1/1`
  - Collabs use `X`: `CARHARTT X JAMIESSHOESS`, `JAMIESSHOESS X JOHN DEERE`
  - Sold items keep the listing and add **Sold out**
- **Tone:** entrepreneurial / hustle ("create something for yourself"), faith-tinged
  ("stay blessed"), community + sustainability, never snobby. Hype without arrogance.
- **Don'ts:** no corporate filler, no long paragraphs on product, no formal
  punctuation fussiness. Spelling is casual and that's on-brand — keep it human.

---

## VISUAL FOUNDATIONS

The look is **graffiti + thrift + sneaker hype**: heavy black outlines, a bold
electric blue, an acid lime→teal graffiti gradient, white "bubble" highlights,
and a warm vintage-paper ground. It should feel hand-stickered and loud, not
clean-SaaS.

### Color
Sampled from the brand assets:
- **Electric Blue `#0038FD`** — *the* brand color (badge field). Primary buttons,
  links, dark-section accents, the JS badge.
- **Graffiti gradient** — `#C8F900` lime → `#3CF24B` green → `#00EC96` teal.
  Used as energy: fills behind headlines, highlight bars, "drop" flags, hover
  sweeps. High-impact — use in moderation against ink + paper.
- **Ink `#0E0E0E`** — near-black for type and the signature heavy outline.
- **Paper `#F4F1EA`** — warm bone background (vintage feel) is the default ground;
  pure **White `#FFFFFF`** for product cards / imagery panels.
- **Sale Red `#FF2D2D`** — sale prices, sold-out, hazard/alert.
- Warm neutral ramp (`--js-n-100…900`) biased toward paper, never cold grey.

### Type
*(Substitute pairing — flagged below. The logo lettering is bespoke art.)*
- **Display — `Anton`**: tall, heavy, all-caps poster face. Headlines, prices,
  drop callouts, hero throw-ups. Tight leading (~0.92).
- **Text — `Archivo`**: grotesque companion for nav, body, product info. Weights
  400–900; lean on 600–800 for the bold streetwear tone.
- **Mono — `Spline Sans Mono`**: price tags, sizes, SKUs, `1/1`, store hours —
  the "receipt / price-tag" texture. Uppercase, wide tracking (~0.14em).

### Backgrounds
Mostly **flat color blocks** — warm paper, ink, or electric blue — not gradients
(the only gradient is the graffiti acid sweep, used as an accent, never a page
wash). Photography is **full-bleed** product/lifestyle on white or paper. No soft
hero gradients, no glassmorphism, no purple SaaS gradients.

### Borders, cards & elevation
- **Heavy black outline** is the defining device: `2–4px` solid `--js-ink` on
  cards, buttons, tags, image frames. Think sticker / sharpie outline.
- **Cards:** white fill, heavy ink border, mostly **square corners** (`0–10px`).
  Sneaker/product cards are crisp rectangles.
- **Elevation = offset "sticker" shadow**, not soft blur: `4px 4px 0 #0E0E0E`
  (`--sh-sticker`). Reserve soft blurred shadows for floating UI (cart drawer,
  modal) via `--sh-card`.
- **Radii:** hard-edged brand. `--r-sm 4px` default, `--r-md 10px` for softer
  UI, `--r-pill` for chips/tags, `--r-badge 50%` only for the round JS badge.

### Motion
Snappy and physical, not floaty. **Fast** transitions (120–180ms), ease-out.
Hover = a small **lift + offset-shadow grow** or a graffiti-gradient sweep.
Press = **shrink** to ~0.97 and shadow collapses (the sticker "presses down").
A tiny **rotate (−2°/+2°)** on tags/stickers adds the hand-placed feel. No long
fades, no parallax, no bouncing easings beyond a subtle pop.

### Hover / press states
- **Buttons (solid blue):** hover → `--js-blue-deep` + shadow grows; press → translate
  down into the shadow (shrink offset to `2px 2px`).
- **Cards:** hover → lift `translateY(-3px)`, offset shadow appears; "Quick View"
  reveals.
- **Links:** ink → blue, or a lime underline-sweep.

### Transparency / blur
Used sparingly. A near-opaque ink scrim (`rgba(14,14,14,.6)`) behind modal/cart
overlays; light backdrop-blur only on the sticky header when scrolled. Imagery
is never tinted — products show true color, bright and punchy.

### Imagery vibe
Bright, true-color, high-contrast product shots on white/paper. Vintage tees and
sneakers photographed flat or on simple grounds. Energetic and clean, NOT washed
out, NOT b&w, NOT heavy-grain (a touch of paper texture in backgrounds is enough).

### Layout rules
- Max content width ~`1240px`; generous gutters.
- **Grid everything** (flex/grid + `gap`) — product grids 2/3/4-up responsive.
- Sticky header with announcement bar above it. Fixed cart drawer from the right.
- Loud > tidy: oversized display headlines can bleed/overlap blocks; tags can
  rotate; the graffiti gradient can run edge-to-edge as a divider.

---

## ICONOGRAPHY

JAMIESSHOESS has **no proprietary icon set** — the brand's "icons" are **emoji**
(📍🚨👟🔥✅) used inline in copy, and its logos. For UI chrome (cart, search,
menu, arrows, socials) this system standardizes on **Lucide** (`lucide.dev`),
loaded from CDN — a clean, even-stroke open-source set whose `~2px` stroke sits
well next to the brand's heavy outlines.

- **Emoji:** YES — part of the brand voice. Use the signature set in marketing
  copy and social templates. Don't use emoji as functional UI controls.
- **UI icons:** Lucide via CDN (`https://unpkg.com/lucide@latest`). Stroke-style,
  rounded caps. Use `--js-ink` at `2–2.5px`. Set icons in ink, never gradient.
- **Social glyphs:** Instagram / TikTok / Facebook / YouTube / X — use Lucide's
  brand-adjacent icons or simple monoline marks; keep them ink-on-paper.
- **Logos:** the circular **JS badge** and the **graffiti wordmark** are the only
  bespoke marks. They are raster art (`/assets`) — place them as images; never
  redraw them as SVG or try to set them in a font.

> Substitution flag: Lucide is a substitute (the brand ships no icon font).
> It is a safe, neutral choice; swap if the shop adopts an official set.

---

## VISUAL ASSETS (`/assets`)

| File | What |
|---|---|
| `logo-original.jpg` | Circular **JS badge** — electric blue field, chiseled 3D white "JS", "@jamiesshoess" curved at the bottom. Primary mark. |
| `footer-mark.png` | Graffiti **wordmark** "JAMIESSHOESS" — lime→teal gradient, heavy black outline, white bubble highlights (on white). |
| `wordmark-graffiti.png` | Same wordmark, **transparent background**, trimmed — use over color blocks. |

---

## INDEX — what's in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file — brand context, voice, visual foundations, iconography. |
| `colors_and_type.css` | All design tokens: colors, gradient, type families + scale, radii, borders, sticker shadows, spacing. Import this everywhere. |
| `SKILL.md` | Agent-Skill entry point (Claude Code compatible). |
| `assets/` | Logo files (badge, wordmark, transparent wordmark). |
| `preview/` | Small HTML cards that populate the Design System tab (colors, type, components, brand). |
| `ui_kits/storefront/` | High-fidelity recreation of the Squarespace shop: header, product grid, product card, quick-view, cart drawer, footer. `index.html` is an interactive click-through. |
| `ui_kits/social/` | On-brand social/marketing templates (drop announcement post, store-hours post, new-arrival story). `index.html` shows them as a feed. |

---

## CAVEATS / SUBSTITUTIONS
- **Fonts are substitutes.** The brand has no published type system; `Anton`
  (display), `Archivo` (text), `Spline Sans Mono` (tags) are chosen to match the
  loud street energy. The **logo lettering is bespoke** — use the PNGs, don't
  set it in a font. *Ask the user for their actual brand font if one exists.*
- **Icons** use Lucide (substitute — no official set ships with the brand).
- **Colors are pixel-sampled** from the logos and are accurate to those files;
  print/Pantone equivalents are not defined.
- Product imagery in the UI kits uses **placeholders** (no rights to scrape the
  shop's photography) — drop real product shots in to finalize.
