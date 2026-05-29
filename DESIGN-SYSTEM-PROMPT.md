# JAMIESSHOESS — Design System Brief

Use everything below to produce a complete, professional design system document for JAMIESSHOESS — a sneaker and vintage clothing resale boutique in Springfield, MO. Output a single, well-organized Markdown document with all sections listed at the bottom of this brief.

---

## BRAND OVERVIEW

- **Brand name:** JAMIESSHOESS
- **Abbreviations in use:** JS, JMSSHS, JMS SHS
- **Business type:** Sneaker + vintage clothing resale boutique, owner-operated
- **Location:** Springfield, Missouri — ZIP 65804 (used in brand assets as "SGF · MO" and "LOCATION: 65804")
- **Taglines:** "Shop Vintage & Sneakers" / "SHOP VNTG"
- **Tone:** Street-forward, energetic, approachable, Springfield local — not a luxury or hype-exclusive brand. Think Journeys meets graffiti culture.
- **Design direction:** Dark canvas base (near-black) with neon accents dominating. High contrast, bold, youthful. NOT a minimalist white site — this brand lives in the dark with neon popping off it.

---

## COLOR PALETTE

Five named brand colors pulled directly from official brand swatches:

| Name     | Hex       | Role                                      |
|----------|-----------|-------------------------------------------|
| SOLE     | #FFFFFF   | White — used for type on dark backgrounds, outlines, clean space |
| MINTED   | #00ECF1   | Cyan — primary brand accent, dominant neon |
| CASH     | #5AE131   | Lime green — secondary accent, energy/price/action |
| FLASH    | #F322B3   | Hot pink/magenta — secondary accent, hype/highlights |
| LEATHER  | #080A09   | Near-black — primary background, footer, dark surfaces |

### Usage Patterns Observed
- Dark background (LEATHER) is the primary canvas
- MINTED is the most-used neon — appears in logo drip, outlines, character fills, badges
- FLASH appears in banners, shoes, star accents, and contrast pop moments
- CASH appears in star/badge accents and price/deal callouts
- SOLE (white) used for type, outlines, and negative space relief

---

## TYPOGRAPHY

### Display / Headline Fonts (from brand type specimen)

| Font Name              | Style               | Use Case                          |
|------------------------|---------------------|-----------------------------------|
| Monta Stella Heavy Turbo | Italic condensed, bold | Primary display headlines, hero text |
| Monte Stella Bold Turbo  | Italic condensed       | Subheadings, section headers      |
| Termina                  | Bold condensed sans    | Utility labels, caps, badges, UI  |
| Carlson Script           | Flowing cursive script | "Shop Vintage & Sneakers" tagline, soft accents |
| Kabisat Demo             | Italic script          | Secondary decorative/accent use   |

### Typography Direction
- ALL CAPS is standard for display and UI text
- Italic condensed (Monta Stella family) at large sizes = the core brand voice
- Script (Carlson) used only for the tagline lockup, never for body copy
- Termina handles clean badge/label work — structured, geometric
- No serifs anywhere in the system

---

## LOGO & BRAND MARK SYSTEM

The brand has a rich multi-logo system. All variants observed:

### Primary Logomarks
1. **Graffiti Drip Wordmark** — "JAMIES" in cyan drip/tag lettering over a hot-pink ribbon banner reading "SHOESS". This is the most iconic primary mark. Used on dark backgrounds. Stars flank the banner.
2. **Arch Wordmark** — "JAMIESSHOESS" in arched Carlson Script style over a street/graffiti graphic with crown. Subtext: "Shop Vintage and Sneakers / Springfield, Missouri"
3. **Retro Terminal Badge** — Pixel/8-bit window UI frame. Cyan border + lime fill. Text: "SHOP VINTAGE & SNEAKERS" header, "JAMIESSHOESS!" in pink on black screen, "LOCATION: 65804" bottom-left, "SHOP" and "VNTG" buttons bottom-right.
4. **Block Badge** — "JAMIES / SHOESS" in bold block inline type with color-fill treatment (pink/cyan gradient feel)
5. **JS Monogram Badge** — "JS" in shield/badge format. Two variants: lime fill with cyan outline, and cyan fill. "SHOP VNTG" text on shield.
6. **JMSSHS Oval** — "Jmsshoess / Shop Vintage & Sneakers!" in oval stamp lockup. Retro sports badge feel.
7. **Circle Seal** — Large circular badge. Outer ring reads "SHOP VINTAGE · & SNEAKERS ·" in cyan on black. Center: walking figure in pink/magenta with lime stars. Bottom arc: "JAMIESSHOESS" written on the character's sneakers.
8. **JMS SHO Bubble Monogram** — Bold bubble lettering "JMS SHO" — two colorways: white with cyan outline + pink sparkles; solid cyan with black outline.
9. **Italic Script Wordmark** — "Jamiesshoess" in flowing italic script, white on black. Clean/minimal variant.
10. **Pink Terminal Box** — "JAMIESSHOESS!" in pink on black, boxed, with cursor.

### Character / Mascot System
1. **Spray Can Skater** — Anthropomorphic cyan spray can with attitude face, riding a skateboard. Hot pink spray shoes. Two colorways: full color (white body + cyan + pink) and mono cyan outline. Used with "Shop Vintage & Sneakers / Springfield, Missouri" text below. Stars flank.
2. **Hooded Figure (JMS SHS)** — Hooded youth character, arms crossed, head down. Cyan hoodie/fill with "JMS SHS" on chest. Pink cap/sneakers in full-color version. Two colorways: line-art + color, and solid cyan.
3. **Walker with Stars** — Tall walking figure in cyan pants and white jacket, stars (pink + cyan) surrounding. Text on sneakers: "JAMIES" / "SHOESS". Two colorways.
4. **Standing Sign Holder** — Character holding a "SHOP VNTG" sign, with banner beneath reading "SHOESS" in cyan. Pink sneakers. "SGF · MO" callout bubble. Two colorways.

---

## ICONOGRAPHY & DECORATIVE ELEMENTS

Recurring graphic motifs across all brand assets:

- **Stars** — 4-pointed sparkle stars (not 5-point traditional). Used in pink and cyan. Appear in badges, around characters, in logo lockups.
- **Crown** — Small crown above arch wordmark. Royalty/premium signal.
- **Drips** — Paint/ink drip effect on graffiti wordmark. Key differentiator.
- **Spray can nozzle** — Appears on Spray Can Skater mascot.
- **Cursor** — Pixel arrow cursor in terminal/retro digital badge. Nod to Y2K/online culture.
- **Stars (5-point)** — Lime green stars in the circular seal badge.
- **Outline/sticker effect** — Characters and logos frequently have thick white outlines, giving a sticker/patch aesthetic.
- **Halftone/grain texture** — Subtle texture on some badge elements (FLASH ribbon on primary graffiti logo).

---

## TECH STACK (for implementation context)

- Next.js 16, App Router, TypeScript
- Tailwind v4 — design tokens in `globals.css` `@theme {}` block. No `tailwind.config.ts`. Token names auto-generate utilities (e.g., `--color-minted` → `bg-minted`, `text-minted`).
- Framer Motion for animations
- @vercel/analytics
- All routes statically generated

### Current CSS Token Set
```css
@theme {
  --color-minted: #00ECF1;
  --color-flash: #F322B3;
  --color-cash: #5AE131;
  --color-canvas: #FFFFFF;
  --color-surface: #F8F8F6;
  --color-ink: #0F0F0E;
  --color-ink2: #3D3D3C;
  --color-ink3: #6B6B6B;
  --color-line: #E8E8E6;
  --color-line2: #D4D4D1;
  --font-display: var(--font-bebas), sans-serif;
  --font-sans: var(--font-jakarta), sans-serif;
  --text-display-2xl: clamp(4rem, 12vw, 10rem);
  --text-display-2xl--line-height: 0.9;
  --shadow-card: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-card-hover: 0 8px 24px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
  --animate-ticker: ticker 35s linear infinite;
  --animate-marquee: marquee 28s linear infinite;
}
```

> NOTE: The CSS tokens above reflect the current white-canvas site implementation. The brand visuals shown in this brief suggest the TRUE brand direction is dark/neon. The design system document should call out this tension and provide token recommendations for both a "light retail" mode and a "dark brand" mode, with guidance on when each is used.

---

## DESIGN SYSTEM DOCUMENT — REQUIRED SECTIONS

Using all of the above, produce a complete, professional design system document with these sections:

1. **Brand Identity Overview** — voice, personality, references, do's/don'ts
2. **Color System** — full palette with tokens, usage rules, dark vs light mode guidance, accessibility notes (contrast ratios against LEATHER and SOLE backgrounds)
3. **Typography System** — full type scale, font pairing rules, usage guidelines, size tokens, weight/style rules
4. **Logo & Mark System** — catalog of all logo variants with usage context (which mark for which surface/size)
5. **Mascot & Character Guidelines** — character usage rules, colorway selection, sizing, placement
6. **Iconography & Decorative Element Library** — stars, crowns, drips, outlines, textures
7. **Spacing & Grid System** — Tailwind-based, responsive grid, section rhythm
8. **Component Patterns** — with Tailwind v4 syntax examples: AnnouncementBar, Nav, Hero, Badge, Card, Button variants, Footer
9. **Motion & Animation Guidelines** — Framer Motion patterns, CSS keyframes, timing values
10. **Do's and Don'ts** — concrete rules for staying on-brand vs going off-brand

Format as a clean, professional Markdown document suitable for a design handoff, Storybook docs page, or brand standards PDF.
