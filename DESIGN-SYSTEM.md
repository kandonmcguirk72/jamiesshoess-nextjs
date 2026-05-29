# JAMIESSHOESS Design System
### Version 1.0 — Springfield, MO

---

## Table of Contents

1. [Brand Identity Overview](#1-brand-identity-overview)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Logo & Mark System](#4-logo--mark-system)
5. [Mascot & Character Guidelines](#5-mascot--character-guidelines)
6. [Iconography & Decorative Elements](#6-iconography--decorative-elements)
7. [Spacing & Grid System](#7-spacing--grid-system)
8. [Component Patterns](#8-component-patterns)
9. [Motion & Animation Guidelines](#9-motion--animation-guidelines)
10. [Do's and Don'ts](#10-dos-and-donts)

---

## 1. Brand Identity Overview

### Who We Are

JAMIESSHOESS is a sneaker and vintage clothing resale boutique based in Springfield, Missouri (ZIP 65804). Owner-operated, locally rooted, and built for people who care about kicks and culture — not just hype.

We are **not** a luxury brand. We are **not** an exclusive drop-only site. We are Springfield's shop — approachable, energetic, and real.

### Voice & Personality

| Trait | What it sounds like |
|-------|---------------------|
| **Energetic** | "Fresh drops, real prices, Springfield's own." |
| **Street-forward** | Graffiti roots, skate culture, neon — not corporate clean |
| **Local proud** | SGF · MO is a badge, not a limitation |
| **Direct** | No fluff. Price. Style. Where to find it. |
| **Approachable** | Not gatekeeping. Everyone's welcome here. |

### Design Personality

The brand lives at the intersection of **90s streetwear**, **graffiti art**, and **Y2K digital culture**. Think:

- Spray paint drips and thick outlines
- Neon on dark — not dark on white
- Characters with attitude (not cuteness)
- Retro tech (pixel UIs, terminal prompts, cursor glyphs)
- Sports badge heritage (oval stamps, circle seals, shield crests)

### Reference Points

- Journeys, Foot Locker — retail clarity and shoppability
- PacSun — approachable youth streetwear energy
- Supreme, Stussy — graphic boldness (without the exclusivity)
- Early 2000s skate/graffiti zine culture — texture, rawness, character

### The Light vs. Dark Tension

The live website currently uses a **white-canvas retail mode** (--color-canvas: #FFFFFF). The brand assets, logos, and mascots are all designed for **dark backgrounds** (LEATHER: #080A09). 

**Resolution:** Use dark mode for brand-heavy moments (hero, headers, featured sections, landing pages). Use light mode for commerce-heavy moments (product listings, checkout, FAQs). Both are on-brand when used intentionally.

---

## 2. Color System

### Core Palette

| Token | Name | Hex | RGB |
|-------|------|-----|-----|
| `--color-leather` | LEATHER | `#080A09` | 8, 10, 9 |
| `--color-minted` | MINTED | `#00ECF1` | 0, 236, 241 |
| `--color-cash` | CASH | `#5AE131` | 90, 225, 49 |
| `--color-flash` | FLASH | `#F322B3` | 243, 34, 179 |
| `--color-sole` | SOLE | `#FFFFFF` | 255, 255, 255 |

### Extended Neutrals (retail/UI layer)

| Token | Hex | Role |
|-------|-----|------|
| `--color-surface` | `#F8F8F6` | Light card/section background |
| `--color-ink` | `#0F0F0E` | Primary text on light backgrounds |
| `--color-ink2` | `#3D3D3C` | Secondary text |
| `--color-ink3` | `#6B6B6B` | Muted/caption text |
| `--color-line` | `#E8E8E6` | Light borders |
| `--color-line2` | `#D4D4D1` | Medium borders |

### Color Roles & Usage

**LEATHER** — The brand's true home. Use as the primary page background for any brand-first surface: hero sections, announcement bars, full-bleed feature blocks, the footer. Never use LEATHER as a button color.

**MINTED** — The primary brand neon. First choice for accents, highlights, active states, borders, icon fills, and CTA underlines. When in doubt, reach for MINTED.

**FLASH** — Energy and action. Use for sale badges, price callouts, "new arrival" tags, hover states on dark backgrounds, and the ribbon/banner element in logo lockups. Not for large background fills.

**CASH** — Supporting neon. Stars, secondary badges, "deal" signals, and confirmation states (e.g., "Added to cart"). Also the color of the lime green stars in the circle seal.

**SOLE** — Pure white. The relief color. Used for all body copy on dark surfaces, character outlines, logo on dark, and clean breathing space.

### Contrast Reference

| Foreground | Background | Ratio | Passes AA |
|------------|------------|-------|-----------|
| SOLE #FFF | LEATHER #080A09 | ~19.5:1 | ✅ AAA |
| MINTED #00ECF1 | LEATHER #080A09 | ~14.2:1 | ✅ AAA |
| FLASH #F322B3 | LEATHER #080A09 | ~5.8:1 | ✅ AA |
| CASH #5AE131 | LEATHER #080A09 | ~9.1:1 | ✅ AAA |
| LEATHER #080A09 | SOLE #FFFFFF | ~19.5:1 | ✅ AAA |
| INK #0F0F0E | SURFACE #F8F8F6 | ~18.7:1 | ✅ AAA |

> FLASH on SOLE (white) fails AA at body sizes — never use FLASH as text on white backgrounds. Use FLASH as a fill color with LEATHER or SOLE text on top.

### Neon Usage Rules

- Never use all three neons simultaneously at equal weight — pick one as dominant per surface
- Never use neons as body text color
- Never use neons on white/light backgrounds as text — contrast fails
- Neons as fills with LEATHER or SOLE text on top = always valid
- Maximum neon density: two neons visible at once, one dominant

### Tailwind v4 Tokens (globals.css)

```css
@theme {
  --color-leather: #080A09;
  --color-minted: #00ECF1;
  --color-cash: #5AE131;
  --color-flash: #F322B3;
  --color-sole: #FFFFFF;
  --color-surface: #F8F8F6;
  --color-ink: #0F0F0E;
  --color-ink2: #3D3D3C;
  --color-ink3: #6B6B6B;
  --color-line: #E8E8E6;
  --color-line2: #D4D4D1;
}
```

---

## 3. Typography System

### Font Stack

| Variable | Font | Style | Source |
|----------|------|-------|--------|
| `--font-display` | Monta Stella Heavy Turbo | Italic condensed, heavy weight | Custom / brand font |
| `--font-display-alt` | Monte Stella Bold Turbo | Italic condensed, bold | Custom / brand font |
| `--font-badge` | Termina | Bold condensed sans-serif | Custom / Google |
| `--font-script` | Carlson Script | Flowing cursive | Custom / brand font |
| `--font-body` | Plus Jakarta Sans | Variable sans | Google Fonts |

> If Monta Stella is unavailable for web, substitute: **Barlow Condensed Italic** (Heavy/Bold weights) from Google Fonts — nearest geometric condensed italic match.

### Type Scale

| Token | Size | Line Height | Use |
|-------|------|-------------|-----|
| `--text-display-2xl` | `clamp(4rem, 12vw, 10rem)` | 0.9 | Hero headline, page-defining moment |
| `--text-display-xl` | `clamp(2.5rem, 7vw, 6rem)` | 0.92 | Section headers |
| `--text-display-lg` | `clamp(2rem, 5vw, 4rem)` | 0.95 | Sub-section headers |
| `--text-display-md` | `clamp(1.5rem, 3vw, 2.5rem)` | 1.0 | Card headlines, feature titles |
| `--text-badge` | `0.75rem` | 1.2 | Badges, labels, tags |
| `--text-body` | `1rem` | 1.6 | Body copy |
| `--text-sm` | `0.875rem` | 1.5 | Captions, fine print |

### Font Pairing Rules

**Monta Stella + Plus Jakarta Sans** is the core pairing:
- Monta Stella handles anything that needs to own the screen — hero text, section titles, pull quotes
- Plus Jakarta Sans handles everything else — body, price, product info, nav links, buttons, labels

**Carlson Script** is reserved exclusively for the tagline "Shop Vintage & Sneakers" — it is a wordmark element, not a UI font. Never use it at sizes below 24px or for any text other than the tagline.

**Termina** is the badge/utility font. All caps, tracked out, geometric. Used for: badge text, announcement bars, stat callouts, and nav category labels.

### Typography Rules

- Display type is ALWAYS uppercase and letter-spaced (`tracking-wide` or wider)
- Body text is mixed case, normal tracking
- Never set Monta Stella below 24px
- Never use Carlson Script for navigation, buttons, or body copy
- Prices use Termina or Plus Jakarta Sans Bold — never the display font
- Line height on display sizes: tight (0.9–1.0). Line height on body: loose (1.5–1.6)

### Tailwind v4 Tokens

```css
@theme {
  --font-display: var(--font-monta-stella), 'Barlow Condensed', sans-serif;
  --font-badge: var(--font-termina), 'Barlow', sans-serif;
  --font-script: var(--font-carlson), cursive;
  --font-body: var(--font-jakarta), sans-serif;

  --text-display-2xl: clamp(4rem, 12vw, 10rem);
  --text-display-2xl--line-height: 0.9;
  --text-display-xl: clamp(2.5rem, 7vw, 6rem);
  --text-display-xl--line-height: 0.92;
  --text-display-lg: clamp(2rem, 5vw, 4rem);
  --text-display-lg--line-height: 0.95;
}
```

---

## 4. Logo & Mark System

### Logo Variants Catalog

#### Tier 1 — Primary Marks (most versatile, highest usage)

**1. Graffiti Drip Wordmark**
- "JAMIES" in cyan drip/tag graffiti lettering — uppercase, loose, energy-forward
- Below: hot-pink ribbon/banner reading "SHOESS" with 4-point stars flanking
- Use on: dark backgrounds only, hero sections, merchandise, stickers
- Minimum size: 120px wide
- Clear space: 1× the height of the banner element on all sides

**2. Arch Script Wordmark**
- "JAMIESSHOESS" in arched Carlson Script with crown above
- Subtext: "Shop Vintage and Sneakers / Springfield, Missouri"
- Use on: merchandise, print, apparel, letterhead
- Best on dark. Can work on light with ink colorway.
- Minimum size: 200px wide (script detail requires space)

**3. Retro Terminal Badge**
- Cyan outer border, lime fill field, black screen area
- Header: "SHOP VINTAGE & SNEAKERS" in Termina
- Screen: "JAMIESSHOESS!" in FLASH on black
- Footer: "LOCATION: 65804" + "SHOP" / "VNTG" pixel buttons
- Use on: digital-first moments, website hero callouts, social posts, Y2K-themed campaigns
- Never scale below 180px wide (pixel detail)

#### Tier 2 — Supporting Marks (specific use contexts)

**4. Block Badge Wordmark**
- Bold block inline "JAMIES / SHOESS" stacked, color fill treatment
- Use on: apparel tags, small print, co-brand scenarios
- Works on dark or light

**5. JS Shield Monogram**
- "JS" in shield form — two colorways: lime/cyan, cyan/black
- "SHOP VNTG" text on shield face
- Use on: small placements, favicons, watermarks, embroidery, hang tags
- Minimum size: 32px (shield form) / 16px (monogram only)

**6. JMSSHS Oval Stamp**
- "Jmsshoess / Shop Vintage & Sneakers!" in oval retro badge
- Use on: receipts, packaging, print collateral, social media stamps

**7. Circle Seal**
- Outer ring: "SHOP VINTAGE · & SNEAKERS ·" in cyan on black
- Center: walking figure (pink + lime stars)
- Sneaker text: "JAMIES / SHOESS"
- Use on: large print, stickers, patches, brand story moments
- Minimum size: 120px (detail-heavy — never go smaller)

**8. JMS SHO Bubble Monogram**
- Bubble/throw-up letter style
- Two colorways: white + cyan outline + pink sparkles; solid cyan
- Use on: social avatars, profile images, large format print
- Never use at small sizes — bubble forms require room

**9. Italic Script Wordmark**
- "Jamiesshoess" lowercase italic script, white on dark
- Use on: minimalist/clean contexts where the graffiti primary feels too heavy

**10. Pink Terminal Box**
- "JAMIESSHOESS!" in FLASH on black, boxed with cursor
- Use on: digital/tech-themed social posts, loading screens, error pages

### Logo Usage Rules

- **On dark backgrounds:** All primary marks work. Preferred home.
- **On light backgrounds:** Use Italic Script, Block Badge, or JS Monogram only. Graffiti Drip and Circle Seal lose impact on white.
- **Never:** Recolor logos outside the defined palette. No gradients on logo marks. No drop shadows on the graffiti wordmark (it already has drips — adding shadows muddies it).
- **Never:** Stretch, skew, or rotate logo marks.
- **Clearance:** Maintain at minimum 0.5× the logo height as padding on all sides.

---

## 5. Mascot & Character Guidelines

### Character Roster

**1. Spray Can Skater**
- A cyan spray can with an attitude face, riding a skateboard. Pink spray-paint shoes.
- Personality: Bold, rebellious, creative. The face of the brand's street credibility.
- Two colorways:
  - **Full color:** White linework body, cyan fill, pink shoes/spray. Use on dark backgrounds.
  - **Mono cyan:** Cyan outline on dark. Use for watermarks, subtle callouts.
- Usage: Hero sections, About page, merchandise, stickers, social media
- Never use below 80px tall (face detail is key)
- Paired text: "Shop Vintage & Sneakers / Springfield, Missouri"

**2. Hooded Figure (JMS SHS)**
- Youth in oversized hoodie, arms crossed, head down — classic "I don't care" stance.
- "JMS SHS" written on the chest.
- Two colorways:
  - **Full color:** Line-art body, cyan hoodie/fill, pink cap and sneakers. Use on dark.
  - **Mono cyan:** Solid cyan fill. Use for tonal moments.
- Usage: Apparel prints, stickers, social posts, brand story moments

**3. Walker with Stars**
- Tall figure walking forward in cyan pants and white jacket, surrounded by 4-point and 5-point stars in pink and cyan.
- "JAMIES / SHOESS" written on the sneakers.
- Two colorways: full color, mono cyan
- Usage: Fashion/style editorial moments, hero sections, apparel

**4. Sign Holder**
- Character holding a "SHOP VNTG" sign above head, with "SHOESS" banner beneath.
- Pink sneakers, "SGF · MO" speech bubble.
- Two colorways: full color, mono cyan
- Usage: Sale announcements, "shop now" CTAs, location pages, in-store signage

### Character Rules

- Characters always face **left or forward** — never flip horizontally to face right (changes the feel of the stance)
- Always pair characters with the brand color palette — no custom recolors
- On light backgrounds: use mono cyan outline variant only — full color characters are for dark surfaces
- Characters should breathe — give them at least 1× their width in clear space
- Never crop a character's feet — shoes are part of the brand identity
- Never use characters in body copy or at icon sizes — they are feature-level graphics

---

## 6. Iconography & Decorative Elements

### Core Motifs

**4-Point Sparkle Star**
- The primary decorative star. Used in pink and cyan. Appears in logo lockups, near characters, on badges.
- Use at: 12px–40px depending on context
- Use for: accents, separators, emphasis, bullet point alternatives

**5-Point Star**
- Supporting star. Lime green in the Circle Seal. Used for emphasis moments.
- Use at: 16px–32px
- Never mix 4-point and 5-point stars in the same cluster

**Crown**
- Small crown above the arch wordmark. Indicates premium positioning / ownership pride.
- Use only as part of logo lockup — never as a standalone decorative element in UI

**Drip / Paint Drop**
- The signature treatment on the Graffiti Drip Wordmark.
- Not used as a standalone UI element — it's intrinsic to that specific logo mark.
- Can be referenced in custom heading treatments for special campaign moments.

**Pixel/Retro Cursor**
- Arrow cursor glyph from the Terminal Badge
- Use for: Y2K/retro-digital themed moments, interactive hover effects, 404 pages
- Colors: SOLE on dark, LEATHER on light

**Sticker/Outline Effect**
- Thick white outline (2–4px at normal size, scaled) around characters and some logo marks
- Creates the "sticker on dark background" effect that is central to brand identity
- When placing characters or badge marks on non-dark backgrounds, this outline is mandatory

**Halftone/Grain Texture**
- Subtle grain seen on the FLASH ribbon in the primary logo
- For use in special treatment moments — not a universal background texture
- Adds tactility and print-heritage feel

### Icon System (UI)

For functional UI icons (nav, shopping cart, search, social, etc.):

- Style: **Outline icons, 1.5px stroke, rounded caps** — consistent with Plus Jakarta Sans's geometric warmth
- Size: 20px (nav/UI), 24px (feature), 16px (inline)
- Color: Ink on light surfaces, Sole on dark surfaces
- Active/hover: Switch stroke color to MINTED
- Never use filled/solid icons alongside outline icons in the same context

---

## 7. Spacing & Grid System

### Base Unit

The entire system is built on a **4px base grid** (Tailwind default: 0.25rem = 4px).

### Page Layout

```
Max content width: max-w-7xl (1280px)
Horizontal padding: px-4 (mobile) → px-6 (md) → px-8 (lg)
```

### Vertical Rhythm

| Context | Spacing |
|---------|---------|
| Section padding | `py-16 md:py-24` (64px → 96px) |
| Section gap (between stacked sections) | `gap-16 md:gap-24` |
| Component inner padding | `p-4` (16px) to `p-6` (24px) |
| Inline element gap | `gap-2` to `gap-4` |
| Typography stack (heading → body) | `mt-4` to `mt-6` |

### Grid System

**3-column base** for most content grids:

```html
<!-- Category grid -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<!-- Feature grid (2-up on mobile, 3-up on desktop) -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Hero (55/45 split) -->
<div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16">
```

### Spacing Tokens

```css
@theme {
  --spacing-section: 6rem;        /* 96px — section padding */
  --spacing-section-sm: 4rem;     /* 64px — mobile section padding */
  --spacing-component: 1.5rem;    /* 24px — component inner padding */
  --spacing-gap: 1rem;            /* 16px — grid gap */
}
```

---

## 8. Component Patterns

### AnnouncementBar

Full-width banner above Nav. Ticker/scroll text. Dark brand surface.

```tsx
// Dark brand mode (true to brand)
<div className="w-full bg-leather py-2 overflow-hidden">
  <div className="flex animate-ticker whitespace-nowrap">
    <span className="text-minted font-badge text-xs tracking-widest uppercase px-8">
      Shop Vintage & Sneakers · Springfield, MO · Free local pickup · 
    </span>
    {/* repeat for seamless loop */}
  </div>
</div>
```

### Nav

Sticky. Dark on brand pages, white on retail pages. Logo left, links center, CTA right.

```tsx
// Dark variant
<nav className="sticky top-0 z-50 bg-leather border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
    <Logo className="text-sole" />
    <NavLinks className="text-sole/80 hover:text-minted font-badge text-sm tracking-wider uppercase" />
    <Button variant="minted">Shop Now</Button>
  </div>
</nav>

// Light variant
<nav className="sticky top-0 z-50 bg-sole border-b border-line">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
    <Logo className="text-ink" />
    <NavLinks className="text-ink2 hover:text-minted font-badge text-sm tracking-wider uppercase" />
    <Button variant="leather">Shop Now</Button>
  </div>
</nav>
```

### Button Variants

```tsx
// Primary — Minted CTA
<button className="bg-minted text-leather font-badge text-sm tracking-widest uppercase px-6 py-3 hover:bg-minted/90 transition-colors">
  Shop Now
</button>

// Secondary — Flash accent
<button className="bg-flash text-sole font-badge text-sm tracking-widest uppercase px-6 py-3 hover:bg-flash/90 transition-colors">
  View Drop
</button>

// Ghost — Outline on dark
<button className="border border-minted text-minted font-badge text-sm tracking-widest uppercase px-6 py-3 hover:bg-minted hover:text-leather transition-colors">
  Learn More
</button>

// Ghost — Outline on light
<button className="border border-ink text-ink font-badge text-sm tracking-widest uppercase px-6 py-3 hover:bg-ink hover:text-sole transition-colors">
  Learn More
</button>
```

### Product Card

```tsx
<div className="group bg-surface rounded-sm shadow-card hover:shadow-card-hover transition-shadow">
  <div className="aspect-square bg-line overflow-hidden">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
  </div>
  <div className="p-4">
    <p className="font-badge text-xs text-ink3 tracking-widest uppercase mb-1">Brand</p>
    <h3 className="font-display text-ink text-xl uppercase leading-tight mb-2">Product Name</h3>
    <div className="flex items-center justify-between">
      <span className="font-body font-bold text-ink text-lg">$89</span>
      <span className="bg-cash text-leather font-badge text-xs px-2 py-0.5 tracking-wider uppercase">Size 10</span>
    </div>
  </div>
</div>
```

### Badge

```tsx
// Sale badge
<span className="bg-flash text-sole font-badge text-xs px-3 py-1 tracking-widest uppercase">Sale</span>

// New badge
<span className="bg-minted text-leather font-badge text-xs px-3 py-1 tracking-widest uppercase">New</span>

// Brand badge
<span className="border border-minted text-minted font-badge text-xs px-3 py-1 tracking-widest uppercase">Vintage</span>
```

### Hero Section

```tsx
<section className="bg-leather min-h-[90vh] flex items-center">
  <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 py-16 md:py-24">
    <div className="flex flex-col justify-center">
      <p className="font-badge text-minted text-sm tracking-widest uppercase mb-4">Springfield, MO</p>
      <h1 className="font-display text-sole uppercase" style={{ fontSize: 'var(--text-display-2xl)', lineHeight: '0.9' }}>
        Shop Vintage<br />& Sneakers
      </h1>
      <p className="font-body text-sole/70 text-lg mt-6 mb-8 max-w-md">
        Fresh kicks and vintage finds, right here in Springfield.
      </p>
      <div className="flex gap-4">
        <Button variant="minted">Shop Now</Button>
        <Button variant="ghost-dark">Our Story</Button>
      </div>
    </div>
    <div className="relative">
      {/* Hero image / character */}
    </div>
  </div>
</section>
```

### ColorStrip

Three-segment neon band. Used as a visual break between dark sections and lighter content.

```tsx
<div className="w-full grid grid-cols-3 h-3">
  <div className="bg-minted" />
  <div className="bg-flash" />
  <div className="bg-cash" />
</div>
```

### Footer

```tsx
<footer className="bg-leather border-t border-white/10">
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <Logo className="text-sole mb-4" />
      <p className="font-body text-sole/50 text-sm">Shop Vintage & Sneakers<br />Springfield, MO</p>
    </div>
    {/* Link columns */}
  </div>
  <div className="border-t border-white/10 py-4 text-center">
    <p className="font-badge text-sole/30 text-xs tracking-widest uppercase">
      © 2024 JAMIESSHOESS · SGF · MO
    </p>
  </div>
</footer>
```

### Shadow Tokens

```css
@theme {
  --shadow-card: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
}
```

---

## 9. Motion & Animation Guidelines

### Principles

- Motion should feel like the brand: **quick, confident, a little aggressive** — not floaty or precious
- Entrance animations: fast in, no over-easing. 200–300ms.
- Hover states: immediate response, 150ms max
- Loops: smooth, continuous. No stuttering starts.

### CSS Keyframe Animations

```css
@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@theme {
  --animate-ticker: ticker 35s linear infinite;
  --animate-marquee: marquee 28s linear infinite;
}
```

**Ticker** (AnnouncementBar): 35s cycle — slow enough to read, fast enough to feel alive.  
**Marquee** (brand logo strip): 28s cycle — slightly faster for visual energy.

### Framer Motion Patterns

**Page FadeIn (scroll-triggered)**
```tsx
// FadeIn wrapper — IntersectionObserver-based
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }
}
```

**Nav Mobile Drawer**
```tsx
const drawerVariants = {
  closed: { x: '100%' },
  open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }
}
```

**Card Hover Lift**  
Handled in CSS via `shadow-card` → `shadow-card-hover` transition + `scale-[1.02]` transform:
```tsx
<div className="transition-all duration-200 hover:shadow-card-hover hover:scale-[1.02]">
```

**Stagger Children (stat sections, category grids)**
```tsx
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}
```

### Timing Reference

| Action | Duration | Easing |
|--------|----------|--------|
| Hover color/border | 150ms | ease |
| Card lift | 200ms | ease-out |
| Element entrance | 300–400ms | cubic-bezier(0.25, 0.1, 0.25, 1) |
| Page transition | 400ms | ease-in-out |
| Drawer spring | spring(300, 30) | Framer spring |
| Ticker/Marquee | 28–35s | linear |

---

## 10. Do's and Don'ts

### Colors

| Do | Don't |
|----|-------|
| Use MINTED as the primary accent on dark surfaces | Use neons as full section backgrounds (except AnnouncementBar) |
| Pair any neon with LEATHER for maximum impact | Put FLASH or CASH text on white — contrast fails |
| Use two neons maximum per visible screen area | Use all three neons at equal weight simultaneously |
| Use SOLE for all body text on dark backgrounds | Use gray for text on dark — it feels flat and off-brand |

### Typography

| Do | Don't |
|----|-------|
| Set display headlines in ALL CAPS with wide tracking | Mix display font with body font at similar sizes |
| Use Termina for badges, labels, and UI copy | Use Carlson Script for anything other than the tagline |
| Keep display type tight (line-height 0.9–1.0) | Set Monta Stella at small sizes (below 24px) |
| Use Plus Jakarta Sans for all UI and body copy | Apply letter-spacing to body text |

### Logo

| Do | Don't |
|----|-------|
| Use the Graffiti Drip Wordmark on dark backgrounds | Place the Graffiti Drip on white or light backgrounds |
| Maintain clear space equal to 0.5× the logo height | Recolor logos outside the brand palette |
| Use the JS Shield at small sizes (icon contexts) | Stretch, skew, or rotate any mark |
| Match colorway to background — full color on dark, ink/outline on light | Add drop shadows or glows to logo marks |

### Characters & Mascots

| Do | Don't |
|----|-------|
| Give characters breathing room — they need space | Crop a character's feet |
| Use full-color variants on dark backgrounds | Use characters as small icons or inline elements |
| Use mono cyan variants on light backgrounds | Flip characters horizontally |
| Pair characters with the star decorative motifs | Recolor characters or add effects not in the original |

### Layout & Components

| Do | Don't |
|----|-------|
| Use dark sections (LEATHER) for brand-forward moments | Make the entire site dark — use both modes intentionally |
| Use the ColorStrip (3-neon band) as a section divider | Use the ColorStrip as a full-height section |
| Use Termina ALL CAPS for button text and labels | Use sentence-case or lowercase for buttons |
| Apply shadow-card-hover on interactive card hover | Use heavy shadows on dark backgrounds |

### General Brand

| Do | Don't |
|----|-------|
| Lean into graffiti, skate, and Y2K visual references | Use soft/pastel color treatments |
| Keep the brand local — Springfield pride is real | Make it feel like a national chain or luxury brand |
| Be bold — thick outlines, big type, bright neons | Be subtle — this brand is not a minimalist brand |
| Use the sticker/outline effect for characters and badge marks | Use thin hairline treatments or light delicate type |

---

*JAMIESSHOESS Design System v1.0 — Springfield, MO*  
*SGF · MO · SHOP VNTG · EST. 65804*
