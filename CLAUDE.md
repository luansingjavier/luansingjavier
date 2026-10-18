# CLAUDE.md

Personal portfolio site for Javier Luansing (https://luansingjavier.info), deployed on Vercel.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000 (redirects to /en-US)
npm run build   # production build; also runs lint and type checks
npm run lint    # ESLint (next lint)
npx tsc --noEmit
```

There is no test suite. Verify changes with `npm run build` and by viewing the page in a browser.

## Stack

- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS 3 (`tailwind.config.js`, `src/app/globals.css`)
- framer-motion (only used for the Calendly embed fade-in)
- EmailJS (`@emailjs/browser`) for the contact form, `react-calendly` for booking

## Layout

- `src/app/layout.tsx`: root layout, site-wide SEO metadata, JSON-LD, and fonts (Geist + Habibi via `next/font`).
- `src/app/{en-US,en-GB,es,fr,de}/page.tsx`: one page per locale. Each renders `<Portfolio />` and differs only in `metadata`.
- `src/app/components/Portfolio.tsx` puts the page together: `Navbar` (fixed top menu), `Sidebar` (profile card), then a centered content column with `Hero`, `About`, `Experience`, `Education`, `Skills`, `Contact` (Calendly booking and the email form) and `Footer`. Add or reorder sections here.
- `src/app/components/profile.ts`: content shared across sections (email, social links, work history). Edit jobs here, not in `Experience.tsx`. Jobs are listed in display order, newest first; `type` (e.g. Contract) and `location` are optional and show next to the company name. The first three jobs' initials also appear on the hero's "View Experience" button.
- `src/app/components/Icons.tsx`: inline SVG icons.
- `src/app/page.tsx` redirects `/` to `/en-US`. `src/middleware.ts` redirects any path without a locale prefix, using the `Accept-Language` header and `src/app/i18n-config.ts`.
- `pages/_document.tsx` is a leftover from the Pages Router. The App Router does not use it.
- SEO files live in `public/` (`robots.txt`, `sitemap.xml`).
- Site icons use Next.js file conventions in `src/app/`: `icon1.png` (32px, used for browser tabs), `icon2.png` (512px) and `apple-icon.png` (180px). Next.js links them with a content hash in the URL, so browsers pick up changes instead of showing a cached icon. `public/favicon.ico` (16/32/48px) only serves browsers that request `/favicon.ico` directly; it isn't linked from the page, so don't move it back into `src/app/`. The icons are circular crops of `public/profile.jpg` (the Apple icon is square, since iOS rounds its corners). The 16 and 32px sizes use a tighter crop on the face so it stays recognizable.

Page copy is hardcoded in English inside the components. The locale routes don't translate the content yet.

## Theme

A warm, minimal resume layout inspired by kozoriz.com.

- Layout: from 1024px up, the `Sidebar` is fixed on the left (`--side-width: 360px`) and the content column is `--content-width: 640px`. Below 1024px the sidebar stacks above the content (as a row on tablets), and below 640px the menu collapses into a toggle. These variables live in `:root` in `globals.css`.
- Colors are CSS variables in `globals.css`, exposed as Tailwind colors: `bg`, `ink`, `ink-80`, `ink-60` (muted text), `ink-10` (borders), `ink-5` (fills), `accent` (`#e55639`), `success`, `error`. Use these tokens, not raw Tailwind palette colors like `gray-400`.
- Fonts: `font-serif` (Habibi) for headings, `font-sans` (Geist) for everything else.
- Shared classes in `globals.css` under `@layer components`: `h1`, `h2`, `h3`, `display`, `content`, `section`, `btn`, `btn-small`, `chip`, `field`, `muted-link`.
- Content sections use `<section id="..." className="section gap-N">` with an `h2` heading. The `id` must match the menu links in `Navbar.tsx`.
- Corners are square throughout. The only round elements are the `JL` logo and the company badges on the hero's "View Experience" button.
- The hero illustration, `public/hero-illustration.svg`, is an original line drawing made for this site (a developer in headphones coding on a laptop, with floating icons) in the accent color (#e55639) with cream (#fbf5ef) fills. `public/contact-illustration.svg` (a fist bump, below the contact form) is drawn the same way. If the palette changes, update those two colors in both SVGs too.
- The site is light only. There is no dark mode.
- Calendly ignores the `pageSettings` colors in `CalendlyEmbed.tsx` on free plans, and its iframe can't be styled from here. Instead the iframe uses `mix-blend-mode: multiply` over a `bg-bg` wrapper, which turns its white background into the theme cream. Don't put a fill color on the containers around it, or the blend picks that color up.

## Environment

`.env.local` (gitignored) holds:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: without these, the contact form shows a "not configured" message instead of sending.
- `NEXT_PUBLIC_CALENDLY_URL` (optional): defaults to `https://calendly.com/luansingjavier`, with `/30min` appended.

## Content notes

- Years of experience is currently **10+**. It's written out in the Hero, Sidebar, About, `layout.tsx` (metadata and JSON-LD) and the metadata of every locale page, including the translated de/es/fr descriptions ("über 10 Jahre", "más de 10 años", "plus de 10 ans"). Change all of them together; `grep -rnE "10\+? ?(years|Jahre|años|ans)" src` finds every one. The README still says 9+.
- The site links LinkedIn `/in/javier-luansing-958628a4/` (from `profile.ts`). An older `/in/luansingjavier/` URL was used on the previous Contact section; confirm which one is current.
