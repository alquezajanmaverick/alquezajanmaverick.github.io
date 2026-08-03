---
name: Jan Maverick Alqueza — Brand Guidelines
description: A personal landing page staged as its own brand guideline manual
colors:
  proof-red: "#C63A0F"
  proof-red-negative: "#E14A1C"
  plate-black: "#14161A"
  negative-white: "#F5F5F2"
  stock-white: "#FAFAF9"
  card-white: "#FFFFFF"
  negative-black: "#121316"
  card-white-negative: "#1B1D21"
  proof-gray: "#6B6E76"
  proof-gray-negative: "#A7AAB2"
  registration-gray: "#D8D9DC"
  registration-gray-negative: "#3A3C42"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.05
  lede:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
  detail:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  swatch-card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.plate-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "24px"
  mark-cell:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.plate-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px"
  mark-cell-hover:
    backgroundColor: "{colors.proof-red}"
    textColor: "{colors.card-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px"
  button-primary:
    backgroundColor: "{colors.proof-red}"
    textColor: "{colors.card-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.plate-black}"
    textColor: "{colors.card-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
---

# Design System: Jan Maverick Alqueza — Brand Guidelines

## Overview

**Creative North Star: "The Personal Brand Guideline Book"**

The site is not a portfolio describing a designer's brand; it is that brand's own guideline manual, rendered as five numbered spreads a visitor scrolls through like turning pages: cover, palette, marks, usage, sign-off. Every section borrows a real convention from print brand-guideline documents — spec-sheet callouts, clear-space diagrams, logo-on-color usage grids, approval stamps — and applies that convention honestly to a single person's identity and skill set. The register is calm, considered, and confident rather than decorative: this is a working document a client could believe was actually issued to a print shop, not a themed skin over a generic hero-plus-icon-grid template.

Confirmed rejections: no script/cursive display face, no rounded corners, no drop shadows, no gradient hero, no stock illustration, no cream/ivory paper tone.

**Key Characteristics:**
- Numbered spreads (01–05) read as pages of a real guideline book, not sections of a webpage.
- One spot ink (Proof Red) carries every accent; everything else is plate-black ink on stock-white paper.
- Space Mono renders every spec callout, stamp, and folio number; Space Grotesk carries every reading sentence.
- Registration marks (a small crosshair-in-circle) recur at spread corners as the system's one decorative signature.
- Dark mode is the book's own film-negative proof sheet, not a bolted-on theme swap.

## Colors

A one-ink print system: stock-white paper, plate-black body ink, and a single spot red reserved for accents, stamps, and active state.

### Primary
- **Proof Red** (#C63A0F): the one spot ink. Owns the primary CTA, active folio number, stamp rings, mark-cell hover fill, and the large palette-spread swatch. Never used for body text at small sizes outside these roles.
- **Proof Red — Negative** (#E14A1C): the same ink lifted slightly for legibility against the negative-black ground in dark mode.

### Neutral
- **Plate Black** (#14161A): primary text ink, hairline rules, registration mark strokes, icon fills. Not pure black — a warm-neutral near-black that reads as ink on paper.
- **Proof Gray** (#6B6E76): secondary/caption text, inactive folio numbers.
- **Registration Gray** (#D8D9DC): hairline borders, spread frame, mark-cell dividers.
- **Stock White** (#FAFAF9): page background. A true paper white, deliberately not cream or ivory.
- **Card White** (#FFFFFF): swatch cards, mark cells, and stamp surfaces sit one step brighter than the page to read as objects placed on the page.
- **Negative Black** (#121316): dark-mode page background (the "film negative" proof-sheet variant).
- **Negative White** (#F5F5F2): dark-mode primary ink.
- **Card White — Negative** (#1B1D21): dark-mode's one-step-brighter card surface, replacing Card White so cards still read as objects sitting on the negative-black page.
- **Proof Gray — Negative** (#A7AAB2): dark-mode secondary/caption text, replacing Proof Gray for AA contrast against Negative Black.
- **Registration Gray — Negative** (#3A3C42): dark-mode hairlines.

### Named Rules
**The One Ink Rule.** Exactly one spot color exists at base-palette scale, in both paper and negative modes — no other hue is introduced anywhere in the system.

## Typography

**Display Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Body Font:** Space Grotesk (same family, regular weight — one grotesk voice throughout)
**Label/Mono Font:** Space Mono (with ui-monospace fallback)

**Character:** A confident, slightly technical grotesk for everything meant to be read as a sentence, and a fixed-width mono for everything meant to be read as a spec — the same split a real Pantone card or guideline PDF makes between its cover line and its callout numbers.

### Hierarchy
- **Display** (700, clamp(2.75rem, 6vw, 5.5rem), 0.98): cover wordmark lockup and spread section titles.
- **Headline** (500, clamp(1.75rem, 3.2vw, 2.75rem), 1.05): spread subheads.
- **Lede** (400, 1.25rem, 1.5): a single emphasis sentence, used once per spread at most (sign-off's closing line).
- **Body** (400, 1.0625rem, 1.5): running copy, usage-rule sentences. Max ~68ch line length.
- **Caption** (400, 0.8125rem, 1.4): secondary reading text inside a spec/fact card (palette spread's hex/usage values and identity-fact values).
- **Label** (400, 0.75rem, letter-spacing 0.08em, uppercase): spec callouts, folio numbers, mark-cell captions, hex/date/version strings, primary button text.
- **Detail** (400, 0.8rem, mono, normal case, no letter-spacing beyond 0.02em): sentence-case mono values that must stay copy-legible rather than shout — currently only the sign-off contact email.

### Named Rules
**The Fit-Driven Stamp Rule.** Stamp text is Label set smaller to fit its own circle rather than a new hierarchy step: 0.65rem inside the cover's 96px stamp, 0.8rem inside the sign-off's 128px stamp. Mark-cell captions are Label set to 0.625rem for grid density. Both are documented component exceptions, not general-purpose sizes — don't reach for 0.65rem/0.8rem/0.625rem outside these two components.

**The Two-Voice Rule.** A block of copy is either a sentence (Space Grotesk) or a spec (Space Mono uppercase). Never mix the two families inside one line.

## Layout

Five full-height numbered spreads (`01`–`05`) in a CSS scroll-snap-y container, each snapping to the viewport like a page turn. Each spread is framed by a thin registration border inset from the viewport edge, with a small crosshair-in-circle registration mark at each of its four corners — the recurring signature motif that stands in for a logo. Content sits in a centered column, max-width ~1200px, with generous edge margins that read as the page's bleed/trim area. Spacing scale: 8 / 16 / 24 / 48 / 96px, used so a dense spread (marks grid) is always followed by a quieter one (usage/sign-off). A fixed folio indicator (current spread number over total, e.g. `03 / 05`) sits in a bottom corner across all spreads. Mobile: spreads keep their full-height snap behavior; multi-column grids (palette specimens, marks grid) collapse to fewer columns, never below 2.

## Elevation & Depth

Flat by construction — no box-shadows anywhere. Depth between the page and an object on it (swatch card, mark cell, stamp) is conveyed by a one-step brightness lift (Card White on Stock White) plus a 1px hairline border, the way printed material stays flat but a card visibly sits on a desk.

### Named Rules
**The No-Shadow Rule.** Depth comes from ink, paper-white delta, and hairline borders only. A shadow anywhere is a bug.

## Shapes

Hard, trimmed edges everywhere — swatch cards, mark cells, buttons, the spread frame itself. No border-radius exists in the system.

### Named Rules
**The Cut-Line Rule.** border-radius is 0 on every element without exception, as if every shape were trimmed on a paper cutter.

## Components

### Buttons
- **Shape:** hard corners (0px), 1px plate-black or proof-red border depending on variant.
- **Primary:** Proof Red background, Card White label text (Space Mono, uppercase, 16px/32px padding). Used once, for the sign-off contact CTA.
- **Hover/Focus:** inverts to Plate Black background; focus-visible adds a 2px Proof Red outline offset 2px.

### Swatch / Spec Cards (signature component)
- **Shape:** hard corners, 1px Registration Gray border, Card White fill.
- **Anatomy:** a color/content block on top, a Space Mono spec-label block below it (mimics a real Pantone chip: name, code, value).
- **Used for:** the palette spread's identity facts, each staged as its own annotated specimen chip.

### Mark Cells (signature component)
- **Shape:** square, hard corners, 1px Registration Gray border, icon centered, Space Mono caption below.
- **State:** default is Plate Black icon on Card White; hover/focus inverts to Card White icon on Proof Red — a literal "logo reversed out of color" usage example from the marks spread.

### Stamps
- **Shape:** circular double-ring border in Proof Red, Space Mono uppercase text following the ring's curve or set straight inside it, rotated -6deg.
- **Used for:** "STATUS: AVAILABLE" on the cover, "APPROVED FOR USE" on the sign-off spread.

### Navigation / Folio
- **Style:** fixed corner folio counter (`03 / 05`) in Space Mono, Proof Gray with the current number in Plate Black; the paper/negative toggle sits beside it as a small text switch, not an icon button.

## Do's and Don'ts

### Do:
- **Do** keep Proof Red as the only base-palette accent; every other color is ink, paper, or gray.
- **Do** render every spec, label, stamp, and folio number in Space Mono, uppercase, letter-spaced.
- **Do** keep every corner hard (0px) and every surface flat (no shadows).
- **Do** treat dark mode as the book's own film-negative proof sheet (inverted ground, same ink logic), not a separate skin.

### Don't:
- **Don't** introduce a second accent hue at base-palette scale.
- **Don't** round any corner or add any box-shadow.
- **Don't** use a script/cursive face anywhere in the new system.
- **Don't** invent testimonials, client names, metrics, or pricing to fill the usage spread.
