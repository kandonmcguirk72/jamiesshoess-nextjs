# Handoff: JAMIESSHOESS — Storefront Website

## Overview
Full e-commerce storefront redesign for **JAMIESSHOESS** — a vintage clothing & sneaker store at 302 Park Central East, Downtown Springfield, MO. The store does in-store trades and selective buying, carries vintage clothing (primary), sneakers, merch, collabs, and Pokémon cards. Wide demographic. Social handle: **@jamiesshoess** (IG/TikTok).

## About the Design Files
The files in this bundle are **high-fidelity HTML design references** created as interactive prototypes. They show the intended look, layout, interactions, and copy — but are **not production code to ship directly**. Your task is to recreate these designs in your actual codebase (Next.js, React, Shopify Liquid, etc.) using the framework's established patterns and components.

## Fidelity
**HIGH-FIDELITY.** Colors, typography, spacing, component states, interactions, and copy are all final. Recreate pixel-accurately using the token values in this document.

---

## Design Files in This Package

| File | What it shows |
|---|---|
| `storefront/index.html` | Full interactive storefront — hero, product grid, cart, trade section, footer |
| `storefront/Header.jsx` | Sticky nav component (announcement bar + 3-col grid nav) |
| `storefront/ProductCard.jsx` | Product card + QuickView modal + PRODUCTS mock data |
| `storefront/CartDrawer.jsx` | Slide-out cart drawer |
| `storefront/Footer.jsx` | Footer with hours, location, social links |
| `social/index.html` | Social media post templates (drop, hours, story, collab, trade) |
| `assets/` | All brand logos, mascots, illustrations (PNG) |

---

## Design Tokens

### Colors — Official Brand Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--js-sole` | Sole | `#FFFFFF` | Text on dark, highlights |
| `--js-minted` | Minted | `#00ECF1` | **Primary** — logo text, CTAs, links, price display, glow rings |
| `--js-flash` | Flash | `#F322B3` | **Accent** — announcement bar, drop alerts, sale badges, secondary CTAs |
| `--js-leather` | Leather | `#080A09` | **Background** — page, nav, footer, all dark surfaces |
| `--js-leather-2` | — | `#111312` | Slightly lifted surface (nav bg, card hover) |
| `--js-dark-card` | — | `#1B1D1C` | Product card background (NOT white — dark grey on black) |
| Sale/Alert | — | `#FF2D2D` | Sold-out, error states only |

> **NO lime green (#5AE131) in UI.** Green is NOT part of the website palette — MINTED + FLASH only.

### Neon Glow Shadows (dark surfaces only)
```css
--sh-glow-minted: 0 0 18px rgba(0,236,241,.55), 0 0 40px rgba(0,236,241,.25);
--sh-glow-flash:  0 0 18px rgba(243,34,179,.55), 0 0 40px rgba(243,34,179,.25);
--sh-sticker:     4px 4px 0 #080A09;
--sh-card:        0 2px 0 rgba(255,255,255,.06), 0 12px 32px -8px rgba(0,0,0,.7);
```

### Typography

> ⚠️ **Font Substitutes in Use** — the brand owns these proprietary fonts; Google Font substitutes are used in the prototypes. Swap in real files when available.

| Role | Brand Font | Substitute (in prototypes) | Usage |
|---|---|---|---|
| Display / Hero | Monte Stella Heavy Turbo | `Barlow Condensed 900 Italic` | Headlines, prices, CTAs, drop callouts |
| Sub-heading | Monte Stella Bold Turbo | `Barlow Condensed 800 Italic` | Section heads, card names |
| Script | Carlson Script | `Pacifico` | Script wordmark, decorative moments |
| UI / Body | Termina | `Rajdhani 700/600` | Nav links, tags, body copy, product names |
| Graffiti | Kabisaf Demo | *(no substitute — use as image only)* | Only in brand illustrations |

**Font stacks:**
```css
--font-display: 'Monte Stella Heavy Turbo', 'Barlow Condensed', Arial Narrow, sans-serif;
--font-ui:      'Termina', 'Rajdhani', system-ui, sans-serif;
--font-script:  'Carlson Script', 'Pacifico', cursive;
```

**Type scale:**
```
Hero:   clamp(64px, 12vw, 160px) — Barlow Condensed 900 Italic, uppercase, lh 0.90
H1:     clamp(42px, 7vw, 96px)   — same
H2:     clamp(28px, 4vw, 52px)   — Barlow Condensed 800 Italic
H3:     24px                     — Termina/Rajdhani 700, uppercase, tracking 0.08em
Body:   16px                     — Rajdhani 500/600, lh 1.55
Tag:    11px                     — Rajdhani 700, uppercase, tracking 0.16em
Price:  Barlow Condensed 800 Italic — same scale as surrounding display text
```

### Spacing (4px base grid)
```
s-1: 4px   s-2: 8px   s-3: 12px  s-4: 16px
s-5: 24px  s-6: 32px  s-7: 48px  s-8: 64px  s-9: 96px
```

### Border Radius
```
0px (hard edge, default)  |  4px (sm)  |  8px (md)  |  16px (lg)  |  999px (pill/chip)  |  50% (circle badge only)
```

---

## Screens / Views

### 1. Announcement Bar
- **Background:** `#F322B3` (Flash)
- **Text:** `#FFFFFF`, Rajdhani 700, 10px, uppercase, tracking 0.16em
- **Content:** `NEW DROP EVERY WEEKEND — FOLLOW @JAMIESSHOESS FOR UPDATES`  
  Marquee animation: `translateX(0 → -50%)`, 30s linear infinite
- **Height:** 28px

### 2. Sticky Navigation
**Layout:** 3-column CSS grid (`1fr auto 1fr`) — ensures logo is **always perfectly centered**
- **Background:** `#111312`
- **Height:** 62px
- **Border-bottom:** `1px solid rgba(255,255,255,.08)`
- **Backdrop-blur:** `blur(8px)` when scrolled
- **Left column:** Nav links (SHOP, SNEAKERS, VINTAGE) — Rajdhani 700, 11px, uppercase, tracking 0.14em, `rgba(255,255,255,.55)` → `#00ECF1` on active/hover
- **Center column:** Circle badge logo (`logo-circle-badge-transparent.png`, 44×44px) inside glow ring: `border: 1.5px solid rgba(0,236,241,.55)`, `box-shadow: 0 0 12px rgba(0,236,241,.35)`, `border-radius: 50%`
- **Right column:** Nav links (MERCH, COLLAB) + search + cart icons — same style. Cart shows badge count in `#F322B3`

> ⚠️ Logo image: use `logo-circle-badge-transparent.png` (transparent background, 582×582px). Do NOT use `logo-circle-badge-main.png` (has black bg).

### 3. Hero Section
**Layout:** Full-width, flex column, `align-items: center`, `text-align: center`
- **Background:** `#080A09`
- **Padding:** `clamp(32px,5vw,56px) 0`
- **Max content width:** 720px, centered

**Logo glow ring:**
- Container: `200×200px`, `border-radius: 50%`, `border: 2px solid rgba(0,236,241,.55)`
- `box-shadow: 0 0 28px rgba(0,236,241,.45), 0 0 64px rgba(0,236,241,.2)`
- Image: `logo-circle-badge-transparent.png`, `width: 100%`, `object-fit: contain`

**Headline:** `SHOP VINTAGE & SNEAKERS`
- Font: Barlow Condensed 900 Italic, 40px, uppercase, `color: #fff`
- "VINTAGE" span: `color: #00ECF1`
- `line-height: 1.05`, `text-align: center`

**Subline:** `SPRINGFIELD, MO · THE 417`
- Rajdhani 700, 11px, uppercase, tracking 0.20em, `rgba(255,255,255,.35)`

**Body copy:** Rajdhani 500, 13px, uppercase, tracking 0.06em, `rgba(255,255,255,.45)`, `max-width: 480px`

**CTAs:**
- Primary: `background: #00ECF1`, `color: #080A09`, Barlow Condensed 900 Italic 18px, `border-radius: 4px`, padding `13px 40px`, `box-shadow: 0 0 24px rgba(0,236,241,.35)`
- Ghost: `background: transparent`, `color: #fff`, `border: 2px solid rgba(255,255,255,.25)`, same type

### 4. Features Bar
4-column grid, `background: #0E1010`
- `border-top/bottom: 1px solid rgba(255,255,255,.07)`
- Each cell: icon (◈ ◉ ◎ ◆ in `#00ECF1`) + label (Rajdhani 700, 12px, uppercase, `rgba(255,255,255,.8)`) + desc (Rajdhani 500, 11px, `rgba(255,255,255,.3)`)
- Copy: IN-STORE TRADES · SELECTIVE BUYING · LOCAL PICKUP · WIDE SELECTION

### 5. Product Grid
- **Background:** `#080A09` (dark — NOT white/light)
- **Section padding:** `48px clamp(16px,4vw,52px)`
- **Filter tabs:** ALL / SNEAKERS / VINTAGE / MERCH / COLLAB (Rajdhani 700, 11px, uppercase, tracking 0.14em)
  - Default: `color: #555`, `border: 1px solid rgba(8,10,9,.15)`
  - Active: `background: #080A09`, `color: #00ECF1`, `border-color: #080A09`
- **Grid:** `repeat(auto-fill, minmax(220px, 1fr))`, `gap: 16px`

**Product Card:**
- `background: #1B1D1C` (dark grey — NOT white)
- `border: 1px solid rgba(255,255,255,.09)`
- `border-radius: 6px`
- Hover: `border-color: rgba(0,236,241,.35)`, `box-shadow: 0 0 20px rgba(0,236,241,.1)`
- **Image area:** `aspect-ratio: 1`, `background: #222624` — placeholder, replace with real product photos
- **Badge (corner):** Barlow Condensed 900 Italic, 11px — VTG=`#00ECF1`/`#080A09` text, COLLAB/SALE=`#F322B3`/`#fff` text, 1/1=`#00ECF1`/`#080A09`
- **Tags row:** pill chips — MINTED tint for VTG/1/1, FLASH tint for SALE/COLLAB, neutral for SINGLE STITCH/SOLD OUT
- **Name:** Rajdhani 700, 13px, uppercase, tracking 0.05em, `rgba(255,255,255,.85)`
- **Price:** Barlow Condensed 900 Italic, 20px — normal: `#00ECF1`, sale: `#F322B3`
- **Size:** Rajdhani 600, 9px, uppercase, tracking 0.12em, `rgba(255,255,255,.28)`
- **Quick View button** (hover only): `background: rgba(0,236,241,.1)`, `color: #00ECF1`, `border: 1px solid rgba(0,236,241,.35)`

**Product naming convention (exact):**
- `VTG [BRAND/DESCRIPTION] ([SIZE])` — e.g. `VTG NASCAR AOP (SIZE L)`
- `VTG [YEAR] [PLAYER] [TEAM] TEE (SIZE M)` — e.g. `VTG 1998 JERRY RICE 49ERS TEE (SIZE M)`
- Collabs: `BRAND × JAMIESSHOESS [ITEM]` — e.g. `CARHARTT × JAMIESSHOESS HOODIE`

### 6. Quick View Modal
- `background: #fff` on a `rgba(8,10,9,.75)` backdrop with `backdrop-filter: blur(4px)`
- Max width: 700px, flex row (image left, info right)
- Header bar: `#080A09` background, `JAMIESSHOESS` in `#00ECF1` Barlow Condensed 900 Italic
- Image pane: `background: #F8F5F2`
- CTA: `background: #00ECF1`, `color: #080A09`, full-width, `box-shadow: 0 0 18px rgba(0,236,241,.35)`
- Footer note: "📍 Pick up at 302 Park Central East · We also accept trades — ask in store!"

### 7. Cart Drawer
- Slides from right: `width: 380px`, `background: #080A09`
- `box-shadow: -8px 0 40px rgba(0,0,0,.7)`
- Transition: `transform .28s cubic-bezier(.4,0,.2,1)`
- Item rows: emoji placeholder + name (Rajdhani 700, uppercase) + price (Barlow Condensed 900 Italic, `#fff`) + remove ×
- Checkout CTA: `background: #00ECF1`, `color: #080A09`, `box-shadow: 0 0 20px rgba(0,236,241,.35)`
- Footer: "Select LOCAL PICKUP for free pickup at 302 Park Central East"

### 8. Trade & Buy Section
2-column grid, `background: #080A09`
- **WE TRADE card:** MINTED accent line, MINTED ghost CTA button
- **WE BUY card:** CASH green accent line (this is the ONE exception where green is used), CASH ghost CTA
- Both: `background: rgba(255,255,255,.03)`, `border: 1px solid rgba(255,255,255,.08)`, `border-radius: 6px`

### 9. Footer
- `background: #080A09`, `border-top: 1px solid rgba(255,255,255,.07)`
- 3-column grid: Brand | Shop links | Visit/Hours
- **Logo text:** Barlow Condensed 900 Italic, 26px, `#00ECF1`, uppercase
- **Store hours:** WED–THU 12–6 PM · FRI–SAT 12–7 PM · SUN–TUE CLOSED
- **Location:** 302 Park Central East, Springfield, MO 65804
- **Trade note:** `color: rgba(0,236,241,.5)` — "We buy & trade — ask in store"
- Social links: Instagram · TikTok · Facebook · YouTube

---

## Interactions & Behavior

| Interaction | Spec |
|---|---|
| Nav: scroll | `box-shadow: 0 4px 32px rgba(0,0,0,.85)` + `backdrop-filter: blur(8px)` |
| Product card hover | Border → `rgba(0,236,241,.35)`, glow shadow, Quick View button appears |
| Cart icon click | Cart drawer slides in from right |
| Quick View click | Modal overlays with blur backdrop |
| Filter tab click | Product grid re-filters client-side |
| Primary button hover | Background darkens to `#00B8BF` |
| Primary button press | `transform: scale(0.97)`, shadow collapses |
| Announcement bar | Marquee: `translateX(0 → -50%)`, 30s linear infinite |

---

## Assets

All assets are in the `assets/` folder of this package:

| File | Description | Use |
|---|---|---|
| `logo-circle-badge-transparent.png` | **PRIMARY MARK** — 582×582px, transparent bg | Nav (44px), hero (200px), social |
| `logo-circle-badge-main.png` | Source with black bg — DO NOT USE on dark backgrounds | Source only |
| `logo-graffiti-teal-magenta.png` | Graffiti wordmark — **SOCIAL/PRINT ONLY, NOT for website** | Social posts, merch |
| `logo-racing-speed.png` | Racing/speed mark | Social, campaigns |
| `logo-pixel-retro.png` | Pixel retro window mark | Social, TikTok |
| `mascot-figure-stars.png` | Streetwear figure (2 colorways) | Marketing, social |
| `mascot-shopvntg-banner.png` | SHOP VNTG banner mascot (2 colorways) | Social, in-store |
| `mascot-jmsshs-spray-skate.png` | Spray can skater (2 colorways) | Social, merch |
| `mascot-jmsshs-hoodie.png` | Hoodie character (2 colorways) | Social, merch |
| `logo-jmsshs-bubble.png` | JMSSHS bubble graffiti mark | Social |
| `logo-circle-badge-green.png` | Circle badge variant (green stars) | Social |
| `brand-logos-sheet.png` | Full logo system reference | Design reference |
| `brand-fonts-sheet.png` | Brand font reference | Dev reference |
| `brand-palette.png` | Official color palette | Dev reference |
| `wordmark-graffiti.png` | Transparent graffiti wordmark | Social/print |

---

## Copy & Voice Guidelines

- **ALL CAPS** for all product names, headlines, CTAs, tags
- **No emoji** in website UI (emoji are for social media only)
- Product format: `VTG [DESCRIPTION] (SIZE [X])` or `BRAND × JAMIESSHOESS [ITEM]`
- Recurring phrases: "STAY BLESSED", "THANK YOU FOR SHOPPING", "SELECT LOCAL PICKUP", "WE BUY & TRADE"
- Signed as: JAMIESSHOESS (one word, double-S at end)
- Location stamp: 302 PARK CENTRAL EAST, SPRINGFIELD MO

---

## Font Installation

⚠️ **Action required before shipping:** The prototype uses Google Font substitutes. Swap in the actual brand fonts:

1. Place font files in `public/fonts/` (or equivalent)
2. Add `@font-face` declarations:
```css
@font-face {
  font-family: 'Monte Stella Heavy Turbo';
  src: url('/fonts/MonteStellaHeavyTurbo.woff2') format('woff2');
  font-style: italic;
  font-weight: 900;
}
@font-face {
  font-family: 'Monte Stella Bold Turbo';
  src: url('/fonts/MonteStellaBoldTurbo.woff2') format('woff2');
  font-style: italic;
  font-weight: 700;
}
@font-face {
  font-family: 'Carlson Script';
  src: url('/fonts/CarlsonScript.woff2') format('woff2');
}
@font-face {
  font-family: 'Termina';
  src: url('/fonts/Termina-Bold.woff2') format('woff2');
  font-weight: 700;
}
```
3. Update `--font-display`, `--font-ui`, `--font-script` in `colors_and_type.css`

---

## Colors CSS File
See `colors_and_type.css` — import this file everywhere for all tokens.
