# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

ByteDash ("BYTE DASH") company website (bytedash.net) — a marketing/content site for a Bangkok-based digital product studio (mobile, web, UX/UI). Multi-page site, no auth/database/CMS; content is static and lives in code.

- **Product requirements, brand positioning, sitemap:** see [`product-requirement.md`](product-requirement.md).
- **Full page copy, SEO metadata, nav structure:** see [`content-system.md`](content-system.md).
- Don't duplicate that content here — read those files directly when working on product/content decisions. This file covers stack, architecture, and dev conventions only.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next`)

There is no test runner configured in this repo.

## Stack

- **Next.js 16 App Router**, React 19, TypeScript (strict).
- **Tailwind CSS v4** is the primary styling approach — utility classes inline in components, no CSS modules. Design tokens (color palette, font variables) are defined via `@theme inline` in `src/app/globals.css`, not `tailwind.config.*` (v4 uses CSS-based config).
- **Framer Motion** is the animation library going forward, for new components/interactions. It is not yet installed — add it (`npm install framer-motion`) when the first animation that needs it is built.
  - The existing reveal-on-scroll effect (`src/hooks/use-in-view.ts` + `src/components/ui/reveal.tsx` + the `[data-reveal]` CSS in `globals.css`) is a hand-rolled `IntersectionObserver` implementation predating this decision. Leave it as-is — don't migrate it to Framer Motion unless asked to.
  - Respect `prefers-reduced-motion` in any new animation, matching the pattern already in `globals.css`.

## Architecture

- Path alias `@/*` maps to `src/*` (see `tsconfig.json`).
- Routes live under `src/app/` (e.g. `src/app/about/page.tsx`, `src/app/contact/page.tsx`). `src/app/api/contact/route.ts` is the one API route (contact form submission).
- `src/app/layout.tsx` defines the root `<html>`/`<body>`, loads fonts via `next/font/google`, sets site-wide `metadata` (with a title template), and wraps pages with `SiteHeader`/`SiteFooter`.
- `src/components/` is organized by role, not by page:
  - `layout/` — header, footer
  - `sections/` — page-level content blocks (hero, services, process, etc.), composed into pages
  - `ui/` — small reusable primitives (buttons, cards, labels, the `Reveal` wrapper)
  - `media/` — visual/illustration components
- `src/content/` holds typed content modules (e.g. `services.ts`, `work.ts`, `site.ts`) — page components import structured data from here rather than hardcoding copy inline, matching the PRD's static-content-in-code approach.
- `src/hooks/` — shared hooks (currently just `use-in-view.ts`).

## Component development

Before creating a new reusable component, or working on a specific kind of component (forms, inputs, maps, etc.), read [`docs/COMPONENT.md`](docs/COMPONENT.md) first — it indexes any component-specific conventions under `docs/components/` and must be followed when a relevant guide exists.

## Development workflow

See [`docs/WORKFLOW.md`](docs/WORKFLOW.md) for commit message conventions, branching, and rules Claude must follow (ask before committing, recommend commit points, maintain `docs/changelogs/`). Follow it for every change.
