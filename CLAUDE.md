# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual (EN/DE) personal-brand portfolio for Hammad Ahmad Riaz — a single-page Next.js 15 (App Router) + React 19 + TypeScript site, Tailwind CSS v4, Framer Motion, next-themes.

## Commands

```bash
npm run dev          # dev server → http://localhost:3000
npm run build        # production build (static export of all routes)
npm run start        # serve the production build
npm run lint         # next lint
npx tsc --noEmit     # type-check — the primary correctness gate; run after edits
```

There is **no test framework** in this repo. "Verification" = `npx tsc --noEmit` + `npm run build`.

Path alias: `@/*` → `src/*`.

### Build-cache gotcha
Do **not** run `next build` and `next dev` against this project at the same time, and avoid force-killing a server mid-build. It corrupts `.next` and produces `TypeError: e[o] is not a function` (webpack-runtime) at request time. Fix: `rm -rf .next && npm run dev`.

## Content & i18n architecture (read this before editing any copy)

All site content is data-driven, not hardcoded in components.

- **`src/data/site.ts`** — the English source of truth. Every string, project, skill, metric, and the `ui` chrome strings live here as `export const` objects (`profile`, `brand`, `bio`, `stats`, `projects`, `currentProject`, `research`, `education`, `services`, `navLinks`, `ui`, …).
- **`src/data/site.de.ts`** — the German bundle. It `import`s the English exports and reuses non-translatable fields via spread (e.g. `{ ...cp, status: "…" }`), then exports a single `de` object cast `as unknown as SiteBundle`.
- **`src/lib/i18n.tsx`** — builds the `en` bundle object from the `site.ts` exports, defines `SiteBundle = typeof en`, and provides `LocaleProvider`, `useLocale()`, and `useSite()`. Locale persists in `localStorage["locale"]` + a `NEXT_LOCALE` cookie and sets `document.documentElement.lang`.

**Components never import `site.ts` for display text** — they call `const { ...slices, ui } = useSite()`. (Server files like `layout.tsx`/`sitemap.ts` import `site.ts` directly since they run outside the client provider.)

### Adding/changing content — the three-file rule
1. Edit `src/data/site.ts` (English).
2. Mirror the change in `src/data/site.de.ts` (German). Reuse `...spread` for fields that don't translate.
3. If you added a **new top-level export** to `site.ts`, register it in the `en = { … }` object in `src/lib/i18n.tsx` (and add it to the `de` export object in `site.de.ts`). Adding a field to an existing object needs no i18n.tsx change.
4. `npx tsc --noEmit` — the `SiteBundle` type catches EN/DE shape mismatches.

### Translatable headlines
Gradient headlines use a **title-as-array** pattern: `title: [pre, gradientMid, post]`, rendered as `{t[0]}<span className="text-brand-gradient">{t[1]}</span>{t[2]}`.

## Animation convention (important)

The app is wrapped in `MotionProvider` (`src/components/motion-provider.tsx` = Framer Motion `LazyMotion` with `domAnimation`) in `layout.tsx`. Therefore:

- **Import `m`, not `motion`, from `framer-motion`** in any component (`<m.div>` not `<motion.div>`). Using the full `motion` component re-bloats the bundle and defeats the lazy feature split. Imperative hooks (`useScroll`, `useSpring`, `useMotionValue`, `useInView`, `animate`, `AnimatePresence`) are imported normally.
- Shared scroll-reveal primitives live in `src/components/ui/reveal.tsx`: `Reveal`, `Stagger`, `StaggerItem` (default `viewport={{ once: true }}`). Prefer these over hand-rolled `whileInView`.

## Styling

Tailwind v4, **CSS-first config in `src/app/globals.css`** (no `tailwind.config`). Brand tokens, color palette, and custom utilities (`.text-brand-gradient`, `.glass`, `.card-shadow`, `.bg-grid`, aurora keyframes) are defined there. Dark mode is class-based via next-themes (`@custom-variant dark`). Default theme is **dark**.

`globals.css` contains a deliberate **mobile performance block** (`@media (max-width: 768px)`) that disables `backdrop-filter`, tames large blurs, and stops the aurora animation — because those repaint per scroll frame on phones. Keep heavy visual effects behind this guard when adding them.

## Page composition

`src/app/page.tsx` composes the ordered sections (`Hero → Trust → About → Skills → Experience → Projects → CurrentProject → Research → Education → Visa → Services → Contact`) inside `<main id="main">`, with `Navbar`, `Footer`, `PageLoader`, and a global `CookieConsent`. Each section is a `"use client"` component in `src/components/sections/`.

## SEO / metadata / legal

- `src/app/layout.tsx` holds `metadata`, `viewport`, and the JSON-LD `@graph` (`Person` + `WebSite`). A `SITE_URL` constant is **duplicated** in `layout.tsx`, `sitemap.ts`, and `robots.ts` — update all three together when the domain changes.
- `app/opengraph-image.tsx` auto-generates the 1200×630 social image; `sitemap.ts`, `robots.ts`, `manifest.ts` are route handlers.
- **Legal pages** (`app/imprint`, `app/privacy`) are `"use client"` pages rendered via `components/layout/legal-shell.tsx` (so they're i18n-aware through `useSite()`). Because client pages can't export `metadata`, each has a sibling `layout.tsx` that exports the page title/description. Cookie consent (`components/layout/cookie-consent.tsx`) stores the choice in `localStorage["cookie-consent"]`.

## Practical notes

- **Contact form** (`sections/contact.tsx`) has no backend — it composes a `mailto:` link. Swap `handleSubmit` for a route handler (Resend/Formspree) to capture real submissions.
- **Brand mark**: the "HR" monogram/wordmark (`components/ui/monogram.tsx`) is used in navbar, footer, loader, and `app/icon.svg` — intentionally a mark, not a photo.
- **Project visuals**: projects render inside a browser-frame mockup (`ui/browser-frame.tsx` + `ui/product-mockup.tsx`) rather than real screenshots; swap for `<Image>` + real `public/projects/<name>.png` when available.
- Before going live, search for remaining `PLACEHOLDER` values and set the real `SITE_URL`/domain.
