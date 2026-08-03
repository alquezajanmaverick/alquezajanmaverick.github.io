# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Potential freelance clients evaluating Jan Maverick Alqueza for hire on a project/contract basis. Secondary: general visitors landing on the personal site.

## Product Purpose

Personal landing page / portfolio for Jan Maverick Alqueza, a UX/UI Designer, to establish credibility and generate freelance leads.

## Positioning

Undecided — no confirmed differentiator yet versus other candidates with a similar tool list. Do not invent one.

## Operating Context

Static site built with Vue 3 + Vite + vanilla CSS (design tokens as CSS custom properties). Deployed to GitHub Pages by the GitHub Actions workflow `.github/workflows/deployment.yaml` on every push to `master` (builds `dist` and uploads it via `upload-pages-artifact`). Single page composed of a fixed nav plus five sections: Hero, Capabilities, Skill Set, How I Work, Contact.

## Capabilities and Constraints

- Site currently has no case studies, project gallery, contact form, or blog — a single-page portfolio of hero + capabilities + grouped skill chips + working principles + contact.
- Tech stack (Vue 3 + Vite + vanilla CSS) is not a locked constraint and may change in future work.
- No CMS or backend.

## Brand Commitments

- Real identity/location facts must stay factual and unembellished: name Jan Maverick Alqueza, born in the Philippines, living in Zambales, raised in the 90s, UX/UI Designer, working since 2019-06-01 (experience counter computed live via dayjs `toNow`).
- Dark/light theme toggle (the paper/negative switch in the fixed nav) must be preserved through any redesign.
- Wordmark: "Maverick" (desktop) / "Mavs" (mobile) stays as the short-form name used in copy/lockup. The Great Vibes script rendering is retired with the old visual world; the new world sets its own typeface for it.

## Evidence on Hand

- Skill/tool icons present in the incumbent build: HTML5, JavaScript, CSS3, PHP, Python, Java, Laravel, Sass, Figma, Angular, Vue, React, Node, Git, Shopify, WordPress (Font Awesome brand icons).
- No testimonials, case studies, client logos, press, or metrics on hand. Future work must not fabricate these.

## Product Principles

1. Every identity and experience claim shown must stay factually accurate — no invented achievements, testimonials, or metrics.
2. Serve freelance-client evaluation as the primary job: make skill fit and credibility scannable fast.
3. Preserve the dark/light toggle as a durable feature across redesigns.
4. Keep the site a simple static build deployable to GitHub Pages without a backend.
