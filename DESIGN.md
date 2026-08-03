---
name: Jan Maverick Alqueza — Portfolio
description: A modern single-page portfolio for a UX/UI designer and web developer, built to convert freelance visitors
colors:
  accent: "#C63A0F"
  accent-negative: "#E14A1C"
  ink: "#131517"
  ink-2: "#5C6169"
  ink-3: "#8B9098"
  bg: "#FBFFFA"
  surface: "#FFFFFF"
  surface-2: "#F4F4F2"
  line: "#E5E6E8"
  accent-soft: "#FBE7E3"
  bg-negative: "#0F1113"
  surface-negative: "#16181C"
  surface-2-negative: "#1C1F24"
  ink-negative: "#F1F2F3"
  ink-2-negative: "#A6ABB3"
  line-negative: "#292D33"
  accent-soft-negative: "#2B1710"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    lineHeight: 1.6
  lede:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    lineHeight: 1.55
  label:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "0.72-0.78rem"
    letterSpacing: "0.08-0.14em"
    textTransform: "uppercase"
rounded:
  sm: "8px"
  md: "12px"
  lg: "18px"
  pill: "999px"
components:
  button-primary:
    background: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "13px 22px"
  button-primary-hover:
    background: "{colors.ink}"
    textColor: "{colors.bg}"
  card:
    background: "{colors.surface}"
    border: "1px solid {colors.line}"
    rounded: "{colors.lg}"
    shadow: "0 1px 2px rgba(19,21,23,0.05)"
  card-hover:
    border: "color-mix(accent 45%, line)"
    shadow: "0 14px 40px -16px rgba(19,21,23,0.18)"
    translateY: "-4px"
  chip:
    background: "{colors.surface}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
---

# Design System: Jan Maverick Alqueza — Portfolio

## Overview

**Creative North Star: "Design and the code that ships it — one person, one thread."**

The site is a single scrolling portfolio page for a freelance UX/UI designer and web
developer. It is built to answer the one question a potential client asks first:
*"Can this person do both the design and the build?"* The answer is the page itself —
five sections that move from identity (hero) to capability (what I do, what I use)
to collaboration (how I work) to the ask (contact). The register is calm, confident,
and practical: a working tool for evaluation, not a themed showreel.

Confirmed rejections: no print-guideline staging (no registration marks, stamps,
folio chapters, hard-trim corners, or full-viewport snap deck), no gradient hero,
no glassmorphism-as-decoration, no serif display face, no stock illustration.

**Key Characteristics:**
- One accent (burnt orange-red) against a near-black-on-off-white ink system, in
  both paper (light) and negative (dark) modes. The accent is the only hue.
- Space Grotesk carries every sentence; Space Mono carries every label, number,
  and technical string — the same spec-vs-sentence split as before, kept.
- Soft, consistent rounding (8 / 12 / 18px, pills for chips) and subtle tinted
  shadows replace the old hard-trim/flat look.
- Fixed glass nav (backdrop blur) with wordmark, section links, and the paper/negative
  toggle; scroll-spy highlights the active section.
- Purposeful motion only: scroll-reveal on entry, hover lift on cards/chips,
  active press on buttons — all disabled under `prefers-reduced-motion`.

## Colors

One-ink system: near-black ink on an off-white ground, with a single spot accent
reserved for emphasis, active states, and the CTA.

### Primary
- **Accent** (#C63A0F): owns the CTA, active nav, status dot, section markers, icon
  tiles, and hover borders. Never used for body text at small sizes.
- **Accent — Negative** (#E14A1C): the same ink lifted for legibility against the
  negative ground.

### Neutral
- **Ink** (#131517): primary text. **Ink-2** (#5C6169): secondary copy.
  **Ink-3** (#8B9098): captions, meta labels, dead states.
- **BG** (#FBFFFA): page ground. **Surface** (#FFFFFF): cards, nav, chips.
  **Surface-2** (#F4F4F2): tonal fills. **Line** (#E5E6E8): hairlines.
- **Accent-soft** (#FBE7E3): icon-tile fills — the accent at 12% strength, never a
  second hue.
- Negative mode inverts the same roles: BG #0F1113, Surface #16181C, Ink #F1F2F3,
  Line #292D33, Accent-soft #2B1710.

### Named Rules
**The One Ink Rule.** Exactly one accent hue exists in both modes. Accent-soft is a
tint of that hue, not a new color.

## Typography

**Display & Body:** Space Grotesk (with system-ui fallback).
**Label/Mono:** Space Mono (with ui-monospace fallback).

**Character:** A confident grotesk for everything read as a sentence; a fixed-width
mono for everything read as a spec — section markers (`02 / CAPABILITIES`), meta
labels, tags, the email, the footer.

### Hierarchy
- **Display** (700, clamp(3–6.5rem), 0.95): the hero name.
- **Title** (700, clamp(1.9–2.75rem), 1.05): section headings.
- **Lede** (400, 1.25rem): the hero lede and section subheads.
- **Body** (400, 1.0625rem, 1.6): running copy, max ~65ch.
- **Label** (mono, uppercase, 0.72–0.78rem): markers, nav links, buttons, tags,
  meta labels, footer.

### Named Rules
**The Two-Voice Rule.** A block is either a sentence (Space Grotesk) or a spec
(Space Mono, uppercase). Never mix families inside one line.

## Layout

A fluid single page, max-width 1120px, no scroll-snap. Fixed glass nav (64px) on
top; `scroll-padding-top` keeps anchors clear of it. Sections: Hero, Capabilities,
Skill Set, How I Work, Contact — each `clamp(4.5rem, 9vw, 7rem)` vertical rhythm,
alternating layouts (split hero → card grid → chip groups → split lists → centered
card). Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px. Mobile: every
grid collapses to one column; the nav shows wordmark + theme toggle only.

## Elevation & Depth

Soft material depth: cards sit on the page with a 1px hairline border, a subtle
tinted shadow, and an 18px radius. Hover lifts a card 4px and deepens the shadow;
chips lift 2px. Shadows are tinted to the ground (never pure black in light mode).

### Named Rules
**The Tinted-Shadow Rule.** Shadow colors are derived from ink, not pure black, and
cards never float without a hairline border.

## Shapes

One radius scale, used everywhere: 8px (small tiles), 12px (buttons, icon tiles),
18px (cards), 999px (chips, nav toggle). No mixed systems — buttons and cards share
the soft family.

### Named Rules
**The Soft-Cut Rule.** Every radius comes from the scale above; 0px radius exists
nowhere in the system.

## Components

### Nav (fixed)
- **Shape:** 64px bar, `backdrop-filter: blur(14px) saturate(1.4)` over an 82%
  ground fill, 1px bottom hairline.
- **Anatomy:** wordmark `Mavs.` (accent dot), section links (mono, uppercase,
  active state = accent + 2px underline), pill theme toggle with sun/moon icon.
- **Mobile:** links hidden below 820px.

### Buttons
- **Primary:** Accent fill, mono uppercase label, 12px radius. Hover inverts to Ink
  fill on the ground color; active presses down 1px. Used once per intent — "Start
  a project" appears in the hero and contact, both same label.
- **Ghost:** hairline border, ink label; hover fills the border.

### Capability Cards (signature component)
- **Shape:** Surface fill, 1px hairline, 18px radius, subtle shadow, 24–32px padding.
- **Anatomy:** accent-soft icon tile (44px, 12px radius) → title → body copy → mono
  tag line. Hover: 4px lift, accent-tinted border, deeper shadow.
- **Used for:** the four capabilities (Design, Frontend, Backend & APIs,
  E-commerce & CMS) — each grounded in the documented skill list, never fabricated.

### Skill Chips
- **Shape:** pill, surface fill, 1px hairline, icon + name. Hover: 2px lift, accent
  border, accent icon.
- **Layout:** grouped by discipline (Frontend / Backend / Design /
  Web Platforms & Tools), two columns on desktop, wrapped single column on mobile.

### Process Lists
- **Shape:** card with a mono column header ("Always" / "Off the table") and a
  `divide-y` list; each row has a mono index and one line of copy. Check/x icons
  reinforce the column intent.

### Contact Card
- **Shape:** centered card, large title, subhead, primary CTA, mono email, and a
  hairline footer with the copyright line.

## Motion

`MOTION_INTENSITY` is low by design — the page earns attention through hierarchy and
craft, not choreography.

- **Scroll reveal:** sections and cards fade + rise 22px on entry (IntersectionObserver,
  `cubic-bezier(0.16,1,0.3,1)`, ~0.7s), staggered within grids. Triggers once.
- **Hover:** card/chip lift, button color inversion, nav link accent.
- **Active:** buttons press down 1px.
- **Reduced motion:** all reveals become static, all transitions collapse, and
  smooth-scroll is disabled under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep the accent as the only hue; every other color is ink, gray, or an
  accent tint.
- **Do** render every label, marker, tag, and technical string in Space Mono.
- **Do** use the documented radius scale (8/12/18/pill) and tinted shadows.
- **Do** treat dark mode as a true film-negative (inverted ground, same ink logic).
- **Do** keep every identity and skill claim grounded in the documented facts.

### Don't:
- **Don't** introduce a second accent hue, a serif display face, or gradient heroes.
- **Don't** animate layout properties (top/left/width/height) — transform/opacity only.
- **Don't** ship a section without its mobile fallback declared.
- **Don't** invent testimonials, client names, metrics, pricing, or skill ratings.
