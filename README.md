# Hammad Ahmed Riaz — Personal Brand & Portfolio

Premium, production-ready personal brand website for a Full Stack Engineer & AI Application Developer.

## Tech stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (CSS-first config in `globals.css`)
- **Framer Motion** (scroll reveals, counters, parallax, micro-interactions)
- **shadcn-style primitives** (Button + Radix Slot, Badge) · **lucide-react** icons
- **next-themes** (dark/light, default dark)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Folder structure

```
src/
├─ app/
│  ├─ layout.tsx            # fonts, SEO metadata, JSON-LD, theme provider
│  ├─ page.tsx              # composes all sections
│  ├─ globals.css           # Tailwind v4 theme tokens + utilities + animations
│  ├─ icon.svg              # favicon (gradient "HR" mark)
│  ├─ opengraph-image.tsx   # auto-generated OG/social image (1200×630)
│  ├─ sitemap.ts · robots.ts · manifest.ts
├─ components/
│  ├─ layout/   navbar · footer · page-loader
│  ├─ sections/ hero · trust · about · skills · experience · projects ·
│  │            current-project · education · visa · testimonials · services · contact
│  ├─ ui/       button · badge · section · reveal · counter · spotlight-card ·
│  │            magnetic · aurora-background · theme-toggle
│  └─ theme-provider.tsx
├─ data/site.ts             # SINGLE SOURCE OF TRUTH — all content lives here
└─ lib/utils.ts             # cn() helper
```

## Editing content

All copy, skills, projects, experience, etc. live in **`src/data/site.ts`**.
Change content there — components read from it automatically.

## Placeholders to replace before going live

Search the codebase for `PLACEHOLDER`. Key items:

| Item | Where |
|---|---|
| GitHub URL | `data/site.ts → profile.links.github` |
| WhatsApp number | `data/site.ts → profile.whatsapp` |
| Calendly link | `data/site.ts → profile.links.calendly` |
| Resume PDF | drop `public/Hammad-Ahmad-Riaz-CV.pdf` |
| Profile photo | see **Portrait** below |
| Project demo/repo links | `data/site.ts → projects[].links` |
| Project screenshots | see **Project visuals** below |
| Testimonials | `data/site.ts → testimonials` (marked placeholder) |
| Production domain | `SITE_URL` in `layout.tsx`, `sitemap.ts`, `robots.ts` |

## Brand & logo

The logo is a crafted **HR monogram + wordmark** (`components/ui/monogram.tsx`), used in
the navbar, footer, loader, and favicon (`app/icon.svg`). A photo is intentionally **not**
used as the logo — a face doesn't scale to a favicon or read as a brand mark.

## Portrait (theme-aware)

`components/ui/portrait.tsx` serves a different image per theme and applies a premium
treatment (ambient glow, gradient ring, theme-colored bottom fade that melts the photo
into the page). For best results, export **transparent PNGs** and drop them at:

- `public/profile-dark.png`  — a dark / rim-lit cutout (looks best on the dark theme)
- `public/profile-light.png` — a bright, clean cutout (looks best on the light theme)

Then set the paths in `sections/hero.tsx`: `<Portrait srcDark="/profile-dark.png" srcLight="/profile-light.png" />`.
Until then both fall back to `public/profile.jpg`. To remove a background quickly, use
remove.bg, Photoroom, or Photoshop — true background removal isn't done in-repo.

## Project visuals

Each project renders inside a real **browser-window mockup** (`components/ui/browser-frame.tsx`)
with a recreated, design-consistent product scene (`components/ui/product-mockup.tsx`:
`chat` / `telehealth` / `lms`). These are tasteful *representations* — the live sites
aren't publicly reachable, so no authentic screenshots could be captured.

To use real screenshots: capture each product, save to `public/projects/<name>.png`
(16:10), and in `sections/projects.tsx` replace `<ProductMockup … />` with
`<Image src="/projects/<name>.png" fill className="object-cover" />`. Set the real
`previewUrl` and `links` in `data/site.ts`.

## Contact form

The form in `sections/contact.tsx` composes a `mailto:` link (no backend).
For real submissions, swap the `handleSubmit` for a route handler (e.g. Resend / Formspree).

## Features

- Mobile-first, fully responsive, dark/light mode
- SEO: metadata, keywords, Open Graph, Twitter cards, JSON-LD `Person` schema, sitemap, robots, manifest
- Accessibility: skip-link, semantic landmarks, focus states, `prefers-reduced-motion` honored
- Performance: static generation, font `display: swap`, `optimizePackageImports`, GPU-friendly CSS animations
```
