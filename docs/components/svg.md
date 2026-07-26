# SVG / graphics components

All static/decorative SVG graphics in this repo — the actual shapes, not page-varying text — live as `.svg` files under `src/assets/svg/`, imported as React components via SVGR. Hand-written inline `<svg>` JSX is reserved for the rare case where the markup itself must vary (per-instance text, per-instance geometry) — see "Hybrid" below.

## The default: imported `.svg` file via SVGR

For any self-contained graphic — an icon, a logo, a diagram, an export from a design tool. SVGR is configured in `next.config.ts` (both the `turbopack.rules` and `webpack` blocks — Turbopack is the default bundler for `next dev`/`next build`, the webpack rule is a fallback for `--webpack`) plus the ambient module declaration in `src/types/svg.d.ts`. Importing a `.svg` file gives you a React component:

```tsx
import Logo from "@/assets/svg/logo.svg";

<Logo width={32} height={32} className="text-accent" />;
```

Don't add a general icon package (`lucide-react`, `heroicons`, etc.) for one-off icons — bring in the specific `.svg` file instead. Source `.svg` files meant to be imported this way live under `src/assets/svg/`; that's distinct from `src/components/media/`, which holds the *components* that render them (see [`AbstractSystemVisual`](../../src/components/media/abstract-system-visual.tsx) importing [`system-diagram.svg`](../../src/assets/svg/system-diagram.svg) as the reference example).

There's currently no `?url` (raw string URL) import variant configured — only component imports. If a real need for a literal URL string comes up (rare; `next/image` and `<link rel="icon">` usually just reference a path under `public/` directly, no import needed), extend the SVGR config rather than reaching for a different mechanism.

The `.svg` files under `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) are unused `create-next-app` scaffold leftovers, not part of the design system — don't reference them.

**Duplicate `id`s across instances:** SVGO (which SVGR runs by default) rewrites internal `id`s (`<pattern id="...">`, `<clipPath id="...">`, etc.) to be unique *per source file*, not per render — so if the same imported SVG component is used twice on one page (as `AbstractSystemVisual` is, on the homepage), both instances emit the same `id` into the DOM. That's harmless for defs only ever referenced by `url(#id)` inside their own file (both instances have identical `<defs>` content, so it resolves correctly either way), but don't rely on an SVG file's internal `id`s for anything that must be unique per instance on the page (e.g. `aria-labelledby` pointing at a `<title>`) — pass an accessible name as a prop instead.

## Hybrid: imported graphic + JSX overlay for varying content

When a visual is mostly a static graphic but needs a piece of content that varies per usage (page-specific caption text, for example), don't bake that variation into the `.svg` file — a static asset can't take props. Instead: import the static graphic for the shapes, and layer the varying piece on top as ordinary JSX using the same design tokens/components as everywhere else. `AbstractSystemVisual` does exactly this: the diagram (grid, panels, connection lines, nodes, corner marks) is `system-diagram.svg`, and the `label` prop renders as an absolutely-positioned [`MicroLabel`](../../src/components/ui/micro-label.tsx) on top of it — which also means the label is styled with ordinary Tailwind classes rather than raw SVG `fontSize`/`letterSpacing` attributes.

## Colors: always design tokens, never hardcoded hex

**Single-color icons/logos:** author the source `.svg` with `fill="currentColor"` (or `stroke="currentColor"`) wherever the color should be controllable, then set color from the consuming component via a Tailwind text-color class (`className="text-accent"`) or inline `color`. This is Tailwind's normal way of driving SVG color and is the preferred approach whenever a graphic only needs one color.

**Multi-color diagrams** (more than one color live at once, like `system-diagram.svg`'s accent + ivory elements): `currentColor` can't represent two colors simultaneously, so fall back to literal CSS custom properties in the file instead — `fill="var(--color-accent)"`, `stroke="var(--color-ivory)"`, etc., matching the tokens defined in the `@theme inline` block in `src/app/globals.css`. Never hardcode a hex value either way. Control transparency with `fill-opacity`/`stroke-opacity` on top of the token color rather than baking a translucent color in directly, so every visual stays in sync if a token value changes.

## Structure (authoring a new `.svg` file)

- Set `viewBox` to a clean round coordinate space (e.g. `0 0 400 400`) and `fill="none"` on the root `<svg>`, then let each child shape set its own `fill`/`stroke`.
- Use `<defs>`/`<pattern>` for repeating backgrounds (grids, textures) instead of drawing many individual lines.
- A source file is static XML, not JSX — repeated elements (corner marks, nodes, ticks) just get written out by hand rather than mapped over an array; keep them visually/structurally identical to each other so it's obvious they're a repeated group.
- Don't set `width`/`height` on the root `<svg>`; let the consuming component size it via `className` (`h-full w-full`, a fixed size, etc.) on a wrapping container that controls layout (`relative aspect-square w-full`, etc.).

## Accessibility

Purely decorative SVGs (diagrams, background graphics, anything not conveying unique content) get `aria-hidden="true"` on the wrapping element — no `<title>`/`<desc>` needed. If a future SVG conveys actual information (a real chart, a meaningful icon with no adjacent text label), give it an accessible name instead of hiding it.

## When *not* to build a new SVG placeholder

If the need is a stand-in for a future photo/screenshot (not an abstract diagram), don't build a new SVG for it — use the existing `imageSrc`-swap pattern instead: [`EditorialPhotoPlaceholder`](../../src/components/media/editorial-photo-placeholder.tsx) or [`CaseStudyVisual`](../../src/components/media/case-study-visual.tsx). Both already render a placeholder state and accept `imageSrc`/`alt` to drop in the real asset later without touching layout.

## Where new SVG assets live

- Source `.svg` files meant to be imported via SVGR go in `src/assets/svg/`.
- The React component wrapping one (handling layout, props, any JSX overlay) goes in `src/components/media/` for a page-specific illustrative visual, matching the existing pattern — or `src/components/ui/` only if it's a genuinely reusable icon primitive rather than a page-specific visual.
