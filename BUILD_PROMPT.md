# AfriYouth Innovation Labs — Full Website Build Prompt

> **How to use this file**
>
> Paste this entire brief into a coding agent (Claude Code, Codex, Cursor, OpenCode, etc.) and ask it to build the site from scratch. The brief is self-contained: it contains the exact page copy, design tokens, layout rules, interactions, metadata and content data. If an image or font file is missing, create a clearly named placeholder with the correct dimensions and continue — do not replace the design with generic stock styling.

**Contents:** [0. Role](#0-role-and-objective) · [1. Setup](#1-stack-and-project-setup) · [2. Design system](#2-design-system) · [3. Shared patterns](#3-shared-page-patterns-and-interactions) · [4. Home](#4-home-page-) · [5. About](#5-about-page-about) · [6. Work](#6-work-page-work) · [7. Programs](#7-programs-page-programs) · [8. Insights](#8-insights-page-insights) · [9. Contact](#9-contact-page-contact) · [10. SEO](#10-seo-metadata-and-document-shell) · [11. Responsive](#11-responsive-composition) · [12. Build sequence](#12-build-sequence) · [13. QA](#13-quality-checklist) · [14. Tone](#14-tone-and-content-rules) · [15. Deliverable](#15-final-deliverable)

---

## 0. Role and objective

You are a senior product designer and front-end engineer. Build a complete, production-ready six-page website for **AfriYouth Innovation Labs**, a youth-centred research, policy and innovation lab based in Kigali, Rwanda, working across Africa.

The site must feel like an **editorial field journal for systems change**: warm paper, deep green ink, coral accents, a lime highlighter, expressive serif headlines, calm sans-serif body text, generous whitespace, asymmetrical editorial grids, thin rules, archival annotations (field notes, coordinates, issue numbers), and restrained motion. It must feel designed by a human studio — not generated from a SaaS template.

Build the real thing: working navigation, filters, accordions, native dialogs, form handling, responsive layouts, focus states, reduced-motion support and SEO. Do not deliver a static mockup or a collection of screenshots.

### Non-negotiables

- Six routes: `/`, `/about`, `/work`, `/programs`, `/insights`, `/contact`.
- Every word of copy in this brief must appear on the matching page. Preserve curly apostrophes, em dashes and arrows.
- Use the exact design tokens, fonts and visual language described below.
- No Tailwind, no CSS-in-JS, no UI component library, no animation library, no icon package.
- No generic gradients, glassmorphism, purple/blue palettes, emoji icons, fake dashboards, cookie banners or newsletter popups.
- Mobile, tablet and desktop must all look intentionally composed — not merely "not broken".
- Respect `prefers-reduced-motion`; all interactive elements need visible keyboard focus.
- The only images are the provided field photography. Do not add illustrations, 3D blobs or stock doodles. Custom SVG marks are allowed and specified.

### Definition of done

A production build that runs with `npm run dev`, passes `npm run build`, has no console errors, and matches the copy, structure and interaction spec below.

---

## 1. Stack and project setup

Use:

- **Next.js 15** with the **App Router**.
- **React 19**.
- Plain **CSS** files imported per route (global tokens in `styles/styles.css`).
- `next/image` for photography.
- `next/font/local` for the two brand typefaces, or `next/font/google` if local files are unavailable.
- Native browser APIs: `<dialog>`, `<details>`, `IntersectionObserver`, `matchMedia`, `FormData`, `navigator.clipboard`.
- JavaScript only (`.jsx`, `.js`) — no TypeScript required.

Do **not** add dependencies beyond `next`, `react` and `react-dom`.

### Suggested structure

```text
app/
  layout.jsx
  page.jsx                  → home
  about/page.jsx
  work/page.jsx
  programs/page.jsx
  insights/page.jsx
  contact/page.jsx
  sitemap.js
  robots.js
  fonts/
    fraunces-roman.woff2
    fraunces-italic.woff2
    instrument-sans.woff2
    instrument-sans-italic.woff2
components/
  SiteHeader.jsx
  SiteFooter.jsx
  SiteScripts.jsx
  pages/
    HomeContent.jsx
    AboutContent.jsx
    WorkContent.jsx
    ProgramsContent.jsx
    InsightsContent.jsx
    ContactContent.jsx
lib/
  metadata.js
  site-interactions.js
styles/
  styles.css                → tokens, base, header, footer, shared UI
  home.css                  → home page only
  inner.css                 → page heroes, about + work
  hub.css                   → programs, insights, contact, modals
public/
  favicon.svg
  assets/img/*.webp|jpg
```

Import global CSS in `app/layout.jsx`. Import page-specific CSS in each route's `page.jsx` (for example `import "@/styles/home.css";`). Use the `@/*` path alias.

### package.json

```json
{
  "name": "afriyouth-innovation-labs",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 4173"
  },
  "dependencies": {
    "next": "^15.5.28",
    "react": "^19.3.1",
    "react-dom": "^19.3.1"
  }
}
```

### Fonts

- **Display:** Fraunces, variable weight 300–700, roman + italic. Fallback: Georgia, serif.
- **Body:** Instrument Sans, variable weight 400–700, roman + italic. Fallback: Helvetica Neue, sans-serif.

If you do not have the `.woff2` files, load both families from Google Fonts and expose them as CSS variables `--font-fraunces` and `--font-instrument`. Keep `display: swap`.

### Image assets

Use these files (or generate placeholders with the same names and aspect ratios). Never substitute unrelated stock imagery.

| File | Intended size | Usage | Alt text |
|---|---:|---|---|
| `hero-community.webp` | 900 × 1125 | Home hero main portrait | A group of young African creatives laughing together outdoors |
| `portrait.webp` | 700 × 740 | Home hero inset portrait | A young African woman smiling in a bright workspace |
| `collaboration.webp` | 1400 × 934 | About hero, left | Three colleagues in conversation around a table with laptops |
| `design.webp` | 1400 × 900 | About hero right; Work design section; Work case card | A hands-on creative workshop with young people painting and making together |
| `programme.webp` | 1400 × 900 | Home feature card; About collective | Young professionals collaborating around a table during an AfriYouth workshop |
| `research.webp` | 1400 × 900 | Work research; Work case card | A facilitated group discussion around a table |
| `policy.webp` | 1400 × 900 | Work policy | A young woman speaking at a conference with a microphone |
| `enterprise.webp` | 1400 × 900 | Work enterprise | A confident young entrepreneur in a bright orange blazer |
| `foresight.webp` | 1400 × 900 | Work foresight; Work case card | Two young women in conversation at a futures workshop |
| `insight.webp` | 1400 × 900 | Home insight feature; Work learning | A diverse group of young people in conversation around a table |
| `og-afriyouth.jpg` | 1200 × 630 | Social sharing card | Young African creatives laughing together outdoors |
| `favicon.svg` | 48 × 48 | Favicon | — |

The favicon, logo mark and report cover use the four-part circular mark described in section 2.7.

---

## 2. Design system

### 2.1 Colour tokens

Define these exact values on `:root`:

```css
--ink: #0d251d;          /* deep green-black, primary text */
--forest: #173d2e;       /* secondary green */
--deep: #081a14;         /* footer / darkest surfaces */
--paper: #f2ede2;        /* page background */
--cream: #fbf8f0;        /* raised surfaces, light text */
--white: #fffdf7;        /* brightest surface */
--coral: #e9592e;        /* primary accent */
--coral-deep: #bc3b19;   /* hover / secondary accent */
--lime: #dff06a;         /* highlighter */
--lime-soft: #edf4b9;
--sky: #b9d8e6;
--mint: #c7dfce;
--clay: #e7bd94;
--muted: #55645a;        /* secondary text */
--line: rgba(13, 37, 29, 0.18);
--line-light: rgba(251, 248, 240, 0.22);
--shadow: 0 24px 70px rgba(13, 37, 29, 0.12);
```

Backgrounds alternate between `--paper` (default), `--cream` (soft contrast sections), `--ink` (dark sections) and `--deep` (footer). Coral is used for small marks, eyebrows, numbers and hover states — never as a large flat page background. Lime is a highlighter, not a button colour.

### 2.2 Typography

```css
--font-display: var(--font-fraunces), "Fraunces", Georgia, serif;
--font-body: var(--font-instrument), "Instrument Sans", "Helvetica Neue", sans-serif;
```

- Body: Instrument Sans, 400–650 weight, 16px base, line-height 1.6.
- Display: Fraunces, weight 430 (not bold), tight tracking, line-height below 1.
- `.h1`: `clamp(3.35rem, 7.1vw, 7.4rem)`, line-height 0.9, letter-spacing -0.045em.
- `.h2`: `clamp(2.4rem, 4.7vw, 4.9rem)`, line-height 0.96, letter-spacing -0.035em.
- `.h3`: `clamp(1.8rem, 2.8vw, 2.7rem)`, line-height 1.02.
- `.h4`: `clamp(1.3rem, 1.7vw, 1.65rem)`, line-height 1.12.
- `.lede`: `clamp(1.08rem, 1.45vw, 1.28rem)`, line-height 1.55, colour `--muted`, max-width 39rem.
- `.eyebrow`: uppercase, 0.7rem, weight 700, letter-spacing 0.13em, with a 0.45rem coral dot before it.
- `.micro`: uppercase, 0.72rem, weight 650, letter-spacing 0.105em.
- `.note`: Fraunces italic, 1rem, muted.
- Italic emphasis inside headlines uses Fraunces italic at weight 350–360; it often appears in coral.
- `.highlight`: inline lime highlighter created with a linear-gradient background (transparent 63%, lime 63–92%, transparent 92%).
- Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs.

Do not use all-caps for long headings. Do not use more than one display weight per screen.

### 2.3 Spacing and layout

```css
--gutter: clamp(1.25rem, 4.6vw, 4.75rem);
--section: clamp(5rem, 9vw, 9.5rem);
--radius: 1.5rem;
--radius-lg: 2.25rem;
--ease: cubic-bezier(0.22, 1, 0.36, 1);
```

- `.wrap`: `width: min(100%, 90rem); margin-inline: auto; padding-inline: var(--gutter);`
- `.wrap--wide`: full width with `clamp(1rem, 2.6vw, 2.75rem)` side padding.
- `.section`: vertical padding `var(--section)`.
- `.section--tight`: `clamp(3.5rem, 6vw, 6rem)`.
- `.section--cream`: cream background.
- `.section--ink`: ink background, cream text.
- `.section-rule`: 1px top rule in `--line`.
- Maximum readable text width: 39rem for ledes, 51rem for section-head copy.
- Section headers use a two-column flex layout: headline left (max 14ch for the h2), supporting paragraph + link right (max 22rem), aligned to the baseline of the headline. On mobile they stack.
- Use thin 1px rules to separate editorial rows. Do not put every card in a shadowed box; prefer rules, numbering and generous negative space.

### 2.4 Buttons and links

`.btn` is an inline-flex pill/rounded rectangle, min-height 3.25rem, padding 0.72rem 1.35rem, 1px border, 999px radius, 0.78rem uppercase-ish label (weight 650, letter-spacing 0.02em), with an arrow icon that rotates 45° on hover.

Variants:

- `.btn--primary`: ink background, cream text, ink border.
- `.btn--coral`: coral background, ink text.
- `.btn--light`: cream background, ink text.
- `.btn--outline`: transparent, ink text, `--line` border.
- `.btn--outline-light`: transparent, cream text, light border.
- `.btn--sm`: smaller min-height (2.75rem), tighter padding.

Hover: darken/lighten slightly, lift with a soft shadow, rotate the trailing arrow 45°. Focus-visible: 2px coral outline offset 3px.

`.text-link`: inline-flex, bottom border, 0.9rem, weight 650; automatically appends `↗` via `::after`. On hover the gap widens and colour shifts to `--coral-deep`. `.text-link--light` hovers to lime.

Arrow rule: the copy below shows the intended trailing arrow for readability. In implementation, render **exactly one** trailing arrow per button/link — either the CSS pseudo-element or an inline span, never both. Use `↗` for actions and external-style links, `→` for onward navigation where the copy explicitly asks for it.

`.chip`: small bordered pill, 0.68rem uppercase, letter-spacing 0.07em, transparent or cream background, used for meta labels.

### 2.5 Shared surfaces

- Cards use either 1px `--line` borders and transparent/cream fills, or full colour blocks (ink, coral, lime, sky, paper) with generous internal padding (2–3rem) and large corner radii (1.5–2.25rem).
- Dark sections use cream text, with muted cream (`rgba(251,248,240,0.64)`) for supporting copy.
- Numbers are editorial: Fraunces, coral, 0.8–1rem, often `01`, `02`, `03`.
- Tiny meta rows are uppercase 0.64–0.72rem with wide tracking.
- Custom SVG line marks are 40–120px, 1–1.5px strokes, geometric and abstract (circles, crosses, orbits, arcs). No icon fonts.

### 2.6 Motion

- Smooth scrolling globally (disabled under reduced motion).
- Scroll reveal: elements with `.reveal` start at `opacity: 0; transform: translateY(1.8rem)` and transition over 0.85s with `--ease`; `.is-visible` removes the transform. Stagger with inline `--delay` values (0.05–0.25s).
- If JS is unavailable, `.no-js .reveal` must remain visible. Use `document.documentElement.classList.replace("no-js", "js")` before paint.
- Marquee: continuous horizontal ticker, duplicated content, 38–50s linear loop; pause on hover; disable animation under reduced motion.
- Hover transitions: 0.2–0.35s; arrow rotations 45°; card lifts 2–6px maximum.
- Under `prefers-reduced-motion: reduce`, all animation/transition durations collapse to 0.01ms and reveals are visible immediately.
- Never animate layout properties that cause jank; prefer transform and opacity.

### 2.7 Brand mark

The mark is a 48×48 rounded square containing four quarter-circle segments around a central dot — a circular, four-part “compass” suggesting research, policy, design and enterprise. Build it as inline SVG:

```svg
<svg viewBox="0 0 48 48" aria-hidden="true">
  <rect width="48" height="48" rx="14" fill="#0d251d"/>
  <path d="M24 7c9.39 0 17 7.61 17 17h-9.5c0-4.14-3.36-7.5-7.5-7.5V7Z" fill="#dff06a"/>
  <path d="M41 24c0 9.39-7.61 17-17 17v-9.5c4.14 0 7.5-3.36 7.5-7.5H41Z" fill="#e9592e"/>
  <path d="M24 41c-9.39 0-17-7.61-17-17h9.5c0 4.14 3.36 7.5 7.5 7.5V41Z" fill="#faf7ef"/>
  <path d="M7 24C7 14.61 14.61 7 24 7v9.5c-4.14 0-7.5 3.36-7.5 7.5H7Z" fill="#b9d8e6"/>
  <circle cx="24" cy="24" r="4.5" fill="#0d251d"/>
</svg>
```

In the footer, use the same mark with a cream square background and deep green/lime/coral/sky segments. The wordmark is two lines: **AfriYouth** (display, 1.1rem, 600) and **Innovation Labs** (0.58rem, uppercase, tracked, muted).

### 2.8 Announcement bar

Full-width ink strip above the header:

- 0.7rem uppercase text, letter-spacing 0.08em, cream at 80%.
- Lime dot at left.
- Copy: “Applications open for the AfriYouth Research Fellowship, Cohort 01” with “for the” in muted cream.
- Right link “Explore ↗” to `/programs#programmes`, underlined on hover.
- On mobile, hide the “for the” phrase and shorten spacing; do not wrap to three lines.

### 2.9 Header

Sticky, paper background, 1px transparent bottom border; after 10px scroll add `.is-scrolled` → translucent paper, border `--line`, subtle shadow, 14px backdrop blur.

- Three-column grid: brand left, primary nav centre, actions right; min-height 5.1rem.
- Nav links: About, Our work, Programs, Insights. 0.85rem, weight 560, underline grows from left on hover/current; current page weight 700.
- Right CTA: “Let's collaborate ↗” → `/contact` (primary, small). On desktop show this; on ≤1120px hide it and show the hamburger.
- Hamburger: 3rem circle, 1px border, three 1.1rem lines; animated to an X when `body.menu-open`.
- Mobile nav: full-width panel below the header, paper background, stacked links at 1.5rem display size, then a primary CTA. Animate open/close; lock body scroll. Escape closes and returns focus to the toggle; focus is trapped inside the header while open; clicking a link closes it; resizing above 1120px closes it.
- Include a skip link (“Skip to content” → `#main`) visible on focus.

### 2.10 Footer

Deep green-black (`--deep`) with cream text.

Top grid (1.15fr / 0.85fr, gap up to 9rem):

- Left: brand lockup, then h2 “The future is a team sport.” (max 12ch), paragraph “We’re building a connected home for young people who refuse to accept the way things are — and the partners who want to back them.”, and a large italic Fraunces email link `hello@afriyouthlabs.org`.
- Right: two link columns — **Explore** (About AfriYouth, Our work, Programs & opportunities, Insights & resources) and **Connect** (Join a program, Partner with us, Commission our work, Media & speaking). Then address: “AfriYouth Innovation Labs / Kigali, Rwanda / Working across Africa and beyond”.
- Bottom bar: “© 2026 AfriYouth Innovation Labs. A digital concept built for the AfriYouth Web Design Challenge.” and “Back to top ↑” linking to `#main`.
- Thin light rules; link hover shifts to lime; 1px underline offset.

### 2.11 Toast

Fixed bottom-centre (or bottom-right on wide screens), ink background, cream text, small radius, 0.8rem; hidden by default; `.is-visible` slides/fades in. Used for copy-email and form feedback. Auto-hide after 4.2s.

### 2.12 Accessibility and focus

- One `<h1>` per page; logical heading order.
- Landmarks: `<header>`, `<nav aria-label="Primary navigation">`, `<main id="main">`, `<footer>`.
- All decorative SVG `aria-hidden="true"` and `focusable="false"` where relevant.
- All interactive controls reachable by keyboard with visible focus.
- Use `aria-pressed` on filter buttons, `aria-expanded` on the menu, `aria-current="page"` on nav.
- Native `<dialog>` for modals with `showModal()`, Escape support, backdrop click close, focus on close button, restore focus to the opener on close.
- Form labels are explicit; required fields marked in text; errors announced with `role="alert"`.
- Colour contrast: ink on paper, cream on ink, ink on coral/lime all pass AA for body sizes.
- Respect reduced motion and do not rely on colour alone.

---

## 3. Shared page patterns and interactions

### 3.1 Inner-page hero

Used on About, Work, Programs, Insights and Contact. Structure:

```jsx
<section className="page-hero" aria-labelledby="page-title">
  <div className="wrap">
    <div className="page-hero__grid">
      <div className="page-hero__copy">
        <p className="eyebrow reveal">Eyebrow</p>
        <h1 className="h1 reveal" id="page-title">Headline with <em>italic accent.</em></h1>
      </div>
      <div className="page-hero__aside reveal">
        <p className="lede">Supporting paragraph.</p>
        <div className="page-hero__meta">
          <span className="chip">Meta one</span>
          <span className="chip">Meta two</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- Two columns: headline left (wider), lede + chips right (about 25rem), aligned toward the bottom; large top/bottom padding (clamp 4rem–8rem).
- Thin rules or floating orbital circle lines may sit behind the hero, but keep them subtle (opacity 0.5–0.6).
- `<em>` inside the h1 is Fraunces italic, coral, weight 350.
- Programs uses a special note block instead of chips: a bordered cream box with “Four opportunities are currently open or rolling.” and a small list line.
- Work adds a bottom row of six discipline labels separated by coral dots, above a top rule.

### 3.2 CTA band

Reused at the bottom of every page.

- Full-bleed lime (`--lime`) background, ink text; large padding (clamp 4rem–7rem).
- Two-column layout: left eyebrow + h2 + paragraph; right actions (primary + outline).
- Decorative oversized ring at bottom-right (three concentric 1.5px ink circles at low opacity) and a 64px four-point star SVG at top-right.
- Buttons use ink primary and outline-on-lime variants.
- On mobile stack actions below copy.

### 3.3 FAQ accordion

- Two-column layout: left intro (eyebrow, h2, lede, text-link), right list of native `<details>` items.
- Each item has a top and bottom 1px rule, 1.1–1.35rem vertical padding.
- Summary is a flex row: question at 1rem/650, plus a `+` that rotates to `×` when open.
- Answer is muted, max-width 40rem, 0.9rem, line-height 1.65, with padding-bottom.
- Only one open at a time is not required; native details behaviour is fine.
- On mobile the two columns stack.

### 3.4 Filter bars

Used on Programs and Insights.

- Flex-wrap row of pill buttons with 1px `--line` borders, 2.5rem min-height, 0.75rem/580 labels.
- Counts inside program pills appear in muted small text.
- Active pill: ink background, cream text, ink border; `aria-pressed="true"`.
- At the right end (or below on small screens) a live count: “Showing 6 opportunities” / “Showing 6 resources”.
- Filtering hides cards with the `hidden` attribute and adds `.is-visible`; the count updates grammatically; an empty-state paragraph appears if nothing matches.
- Program filters: `all`, `open`, `fellowship`, `lab`, `organisation` — matching either `data-state` or `data-type`.
- Insight filters: `all`, `research`, `policy`, `design`, `enterprise`, `foresight`, `impact` — matching `data-category`.

### 3.5 Native dialog pattern

Two dialogs exist: `#programme-modal` on Programs and `#insight-modal` on Insights. Both:

- Use `<dialog class="modal">` with a scroll container, top bar, close button, body and footer.
- Open with `showModal()`, set `document.body.style.overflow = "hidden"`, focus the close button.
- Close on close button, Escape (native), backdrop click (`event.target === dialog`), restore body overflow and focus to the opener.
- Max width about 58rem, cream background, 1.5rem radius, large shadow, backdrop `rgba(8,26,20,0.7)` with 4px blur, entrance animation 0.35s.
- Modal top bar: tiny uppercase label left and circular close button right.
- Meta row of chips, h2 title, lede, then a two-column grid of sections on desktop (stack on mobile).
- Programme modal sections: “What you’ll do” (tick list), “Who it’s for” (paragraph), “Key details” (tick list), “What you’ll leave with” (paragraph). Footer: primary apply button + note “Applications are read by people, not filters. Questions are welcome before you apply.”
- Insight modal: meta chips, h2, lede, article body paragraphs, footer primary “Discuss this with us ↗” + note “Field notes are working ideas. Read them, test them, push back.”
- Tick-list items use a small coral check/arrow marker, 0.9rem, 1.5 line-height.

### 3.6 Floating work preview (home only)

On devices with `(hover: hover) and (pointer: fine)`:

- Six service rows each carry `data-preview="/assets/img/....webp"`.
- A fixed-position 400×300 preview card follows the pointer inside the service list, clamped to the viewport, using `requestAnimationFrame`.
- It fades/scales in on row hover and hides on list leave or keyboard focus.
- On touch devices the preview is never shown.
- The preview has a slight rotation (-3deg) and a cream border/shadow, like a pinned photograph.

### 3.7 Programme modal data

The modal content must be data-driven from an object keyed by `fellowship`, `policy`, `venture`, `design`, `futures`, `mel`. Each entry has `title`, `tags`, `lead`, `do[]`, `who`, `details[]`, `gain`, `applyLabel`, `applyHref`. Full copy is in section 7.6.

### 3.8 Insight reader data

The insight modal is data-driven from an object keyed by `state`, `future-work`, `evidence-policy`, `design-with`, `youth-research`, `scale`, `measurement`. Each entry has `category`, `read`, `title`, `lead`, `body[]`. Full copy is in section 8.5. The featured report button and all six resource cards open this dialog.

### 3.9 Contact form behaviour

- Form action is `mailto:hello@afriyouthlabs.org`, method `post`, `encType="text/plain"`, but JS intercepts submit.
- Validate with `checkValidity()` / `reportValidity()`; show the inline error paragraph if invalid.
- Build a subject `[Programme enquiry] from Name` (map topics to Programme / Partnership / Commission / Network / Media & speaking / General enquiry).
- Body lines: Name, Email, Organisation (if present), Country (if present), Enquiry type, blank line, message.
- Show success panel, focus it, show toast “Your email app is opening. Press send to reach us.”, then set `window.location.href` to the encoded mailto after 250ms.
- On any input, hide the error and success panels.
- Read `?topic=` from the URL and preselect the matching option. Read `?programme=` and prefill the message with “I’d like to learn more about the {Readable Programme Name}.” followed by two newlines if the message is empty.
- Sidebar shortcut buttons set the select value, smooth-scroll the form into view (unless reduced motion), then focus the select.
- “Copy email” writes `hello@afriyouthlabs.org` to the clipboard (with a `document.execCommand` fallback), changes the label to “Copied” for 2.5s, and shows a toast.

### 3.10 URL hash details

On Work and Programs, when the URL has a hash pointing to a `<details>` element, open it automatically on load and on `hashchange` (e.g. `/work#policy`, `/programs#fellowship`).

### 3.11 Reveal and JS flag

- The root `<html>` starts with `no-js`; a beforeInteractive inline script replaces it with `js`.
- `.js .reveal` is hidden until `.is-visible`; without JS everything remains visible.
- IntersectionObserver threshold 0.08, rootMargin `0px 0px -6% 0px`; unobserve after reveal.
- If reduced motion or no IntersectionObserver, reveal everything immediately.

### 3.12 Responsive breakpoints

Use these breakpoints consistently:

- **1120px** — header switches to hamburger; desktop CTA hides; nav panel becomes mobile.
- **1180px** — home hero tightens; floating preview disabled below 960px.
- **1080px** — multi-column editorial grids reduce to two columns; contact layout stacks; service detail grids tighten.
- **960px** — major two-column sections stack; hero grids become single column; footer stacks; process rows simplify.
- **900px** — section heads stack; footer top becomes one column; program grid becomes two columns.
- **680/640px** — single-column cards, smaller display type, reduced padding, stacked buttons, simplified marquee, full-width form fields.
- Never allow horizontal scrolling. Test at 360, 390, 768, 1024, 1440 and 1920px.

---

## 4. Home page (`/`)

Page metadata title: **“AfriYouth Innovation Labs — Evidence in motion. Youth in the lead.”**
Description: “AfriYouth Innovation Labs connects research, policy, human-centred design, entrepreneurship and foresight to turn young people's ideas into systems-level change across Africa.”

### 4.1 Hero

Two-column editorial hero on paper. Behind it, two enormous thin ink circles bleed off the top-right corner (58vw and 29vw, opacity 0.5–0.6). The right column is a photographic collage, not a square card.

**Left column copy (in order):**

- Eyebrow: `Research · Policy · Design · Enterprise`
- H1: `Africa’s next chapter is <em>youth-written.</em>` — the italic phrase is coral, with a thin ink underline drawn beneath it. Max width 11.5ch, display size clamp(3.7rem, 7.7vw, 8.1rem), line-height 0.87.
- Lede: `We connect evidence, policy, human-centred design and enterprise to turn young people’s ideas into <strong>lasting systems change.</strong>` (strong in ink)
- Buttons:
  - Primary: `Find your next opportunity ↗` → `/programs`
  - Outline: `See how we work` → `/work`
- Note: `A lab for <span>young changemakers, partners and institutions</span>` preceded by a 1.65rem rule.

**Right column media collage:**

- Coordinate caption above: `Kigali, Rwanda · Field note 001` (tiny uppercase, with a short rule).
- Main image: `hero-community.webp` in an arch shape — top corners 47% round, bottom corners 1.5rem (organic “portal” crop), 4:5 aspect, 88% width, aligned right; subtle bottom gradient.
- Inset portrait: `portrait.webp` bottom-left, 43% width, 1:1.06 aspect, cream border, slight shadow, overlaps the main image.
- Rotating seal at top-right (8.1rem): ink circle with cream circular text “EVIDENCE · POLICY · DESIGN · ENTERPRISE ·” and a lime four-point star in the centre; slow 32s rotation.
- Annotation bottom-right: coral dot + “Open for collaboration” in a small cream pill.
- Entrance animation: copy rises in staggered 0.95s; media fades/scales in 1.15s.

**Hero bottom facts (three columns, top rule):**

- `06` connected disciplines
- `01` shared agenda: young people shaping systems
- `∞` possible collaborations

Numbers are Fraunces italic, ink; labels muted small caps-ish.

### 4.2 Discipline marquee

Full-width ink strip, 1.1rem vertical padding, cream text, lime four-point stars between items. Infinite horizontal loop, 38s, pauses on hover.

Items in order, duplicated for the loop:

1. Research & evidence
2. Policy & systems
3. Human-centred design
4. Entrepreneurship
5. Strategic foresight
6. Impact & learning

### 4.3 Intro — “Who we are”

Two-column grid: sticky left rail (0.5fr) + main body (1.5fr), gap up to 9rem.

**Left rail:**

- Large italic `01` in coral (2.7rem).
- Micro copy: `A lab, not a lane` / `Kigali · Pan-African` (line break between).
- Short 3.5rem rule.

**Right body:**

- Eyebrow: `Who we are`
- H2: `A lab for the questions that <span class="highlight">shape tomorrow.</span>` (lime highlighter)
- Lede: `AfriYouth Innovation Labs exists to empower Africa’s youth to generate evidence, shape policy and build innovative solutions to the challenges that matter most. We bring research, design, entrepreneurship and foresight into the same room — and keep them there long enough for change to take root.`

**Three principles** (three columns separated by vertical rules, top rule above):

1. `i.` **Youth at the centre** — “Young people are not the audience. They are researchers, designers, founders and decision-makers.”
2. `ii.` **Evidence with context** — “We start with lived experience and local knowledge — not imported answers.”
3. `iii.` **Systems over silos** — “We work beyond the pilot, connecting ideas to the institutions and incentives that can scale them.”

Then text link: `Meet AfriYouth →` → `/about` (note: the component appends a second arrow via CSS; render one visible arrow total).

### 4.4 What we do — six disciplines

Section with top/bottom rules. Section head:

- Eyebrow `What we do`
- H2 `Six disciplines. One connected practice.`
- Side paragraph: “From the first question to the final system, we build the connective tissue between evidence, people and action.”
- Text link: `Explore our work →` → `/work`

**Interactive service list.** Six full-row links, each with number, title, description, tag list and circular arrow. Rows reveal a paper background and shift right on hover; arrow inverts to ink and rotates 45°. On hover-capable devices a floating photo preview follows the cursor.

1. **01 · Research & evidence** → `/work#research`
   Description: “Rigorous, locally grounded knowledge that makes complex problems legible — and actionable.”
   Tags: Applied research · Evidence synthesis · Data stories
   Preview: `research.webp`
2. **02 · Policy & systems** → `/work#policy`
   Description: “Practical policy options, coalitions and implementation pathways that move evidence into public decisions.”
   Tags: Policy analysis · Systems mapping · Coalitions
   Preview: `policy.webp`
3. **03 · Human-centred design** → `/work#design`
   Description: “Services, programmes and products co-designed with the people who use them — and the people who deliver them.”
   Tags: Co-design · Service design · Prototyping
   Preview: `design.webp`
4. **04 · Entrepreneurship & ventures** → `/work#enterprise`
   Description: “Support for young founders to test, build and scale ventures that solve real problems with durable models.”
   Tags: Venture design · Validation · Growth support
   Preview: `enterprise.webp`
5. **05 · Strategic foresight** → `/work#foresight`
   Description: “Structured ways to anticipate change, navigate uncertainty and make better long-term decisions.”
   Tags: Scenario building · Trend analysis · Visioning
   Preview: `foresight.webp`
6. **06 · Impact & learning** → `/work#learning`
   Description: “Measurement and learning systems that help organisations understand what changed, for whom and why.”
   Tags: MEL design · Learning loops · Capability
   Preview: `insight.webp`

### 4.5 Impact — dark section

Ink background with a faint 18px dot grid at 27% opacity. A huge ghost word `systems` sits at the bottom-right in cream at 4% opacity (11–25rem display). Top/bottom generous padding.

**Left copy:**

- Eyebrow (light): `The change we want`
- H2 (cream): `We don’t just ask what works. We ask who it works for.`
- Lede (muted cream): “Our measure of success is not a packed room or a polished report. It is evidence that is used, young people with real influence, and systems that work better for the next generation.”
- Pill tag: `Our 2030 ambition` with lime dot.

**Right stats** — 2×2 grid with light rules, each cell min-height 11.5rem:

- **1,000** — “Young changemakers equipped to lead change” — `2030 ambition`
- **100** — “Cross-sector collaborations brokered” — `2030 ambition`
- **30** — “Youth-led ventures supported to grow” — `2030 ambition`
- **06** — “Disciplines connected in every engagement” — `By design`

Large numbers are lime Fraunces, 3–5rem, weight 350.

**Throughline row** below (top rule): `Listen` → `Frame` → `Prototype` → `Influence` → `Learn`, separated by coral arrows.

### 4.6 Featured programme

Section head:

- Eyebrow `Opportunities`
- H2 `Your next move starts here.`
- Side: “Fellowships, labs and learning spaces for young people ready to turn curiosity into capability.”
- Text link: `Browse all programs →` → `/programs`

**Feature card** — large two-column forest-green card, 2.25rem radius, image left (31rem min-height) and body right:

- Image `programme.webp`, bottom gradient, labels at bottom: `Cohort 01 · 2027` and `Kigali / Hybrid`.
- Body: giant ghost `01` top-right, lime eyebrow `Applications are open`, H2 `Turn evidence into influence.`, paragraph “The AfriYouth Research Fellowship is a 12-week, practice-led programme for early-career researchers ready to move beyond the report — into policy, programmes and public conversation.”
- Four fact cells: `Format` / Hybrid · Kigali; `Duration` / 12 weeks; `Who it's for` / Ages 18–30; `Commitment` / 8–10 hrs / week.
- Footer: deadline “Applications close 30 January 2027” with coral dot; light button `Explore the fellowship ↗` → `/programs#fellowship`.

Hover: image scales to 1.035 over 1.2s.

### 4.7 Ways in

Cream background, top rule. Section head:

- Eyebrow `Ways in`
- H2 `There’s more than one way in.`
- Side: “Whether you’re building your practice, looking for a research partner or commissioning expertise, the door starts here.”

**Three equal cards** in a ruled grid (1px lines, no gaps). Each card has a 0.38rem top accent bar that scales in on hover, number, circular arrow, custom 40px line icon, title, paragraph and uppercase link line. Cards tint on hover (peach, pale lime, pale sky).

1. **01 · For young changemakers** → `/programs`
   “Build your practice, find your people and take an idea further through fellowships, labs and learning spaces.”
   Link: `Explore programs →`
   Accent: coral; tint `#f8e6dd`.
   Icon: concentric orbit with central dot.
2. **02 · For partners** → `/contact?topic=partner`
   “Co-create research, programmes and ventures with a youth-centred lab that connects disciplines and networks.”
   Link: `Start a partnership →`
   Accent: lime; tint `#f1f4d7`.
   Icon: two overlapping people/arcs.
3. **03 · For institutions** → `/contact?topic=commission`
   “Commission evidence, facilitation and systems support built around your mandate and the people you serve.”
   Link: `Commission our expertise →`
   Accent: sky; tint `#e8f0f3`.
   Icon: classical building/institution line drawing.

### 4.8 Insights preview

Section head:

- Eyebrow `Insights`
- H2 `Thinking out loud. Working in the open.`
- Side: “Ideas, evidence and provocations from the edge of research, policy and design.”
- Text link: `Visit the library →` → `/insights`

**Layout:** left featured insight card (1.1fr), right list (0.9fr).

Featured card (white, 1px border, 1.5rem radius):

- Image `insight.webp` with lime `Featured` badge.
- Meta: `Foresight` · `9 min read` · `Field note`.
- H3: `Why the future of work needs youth at the design table.`
- Paragraph: “The jobs young Africans will hold in 2035 don’t exist yet. We explore what it takes to design for work — not just train for it.”
- Footer link: `Read the field note` + circular arrow.

Right list, head `More from the field`:

1. **01** — `From evidence to a seat at the table` — `Policy · 6 min read`
2. **02** — `Designing with, not for` — `Human-centred design · 5 min read`
3. **03** — `Measuring what matters` — `Impact & learning · 7 min read`

All link to `/insights`; arrows nudge up-right on hover.

### 4.9 Partner band

Cream band with top/bottom rules. Two columns:

- Left: eyebrow `Partnerships`, H3 `Built for the people who build with us.`
- Right: paragraph “We work with organisations that are serious about shifting systems — not just funding another pilot. Bring us a question, a mandate or a knotty challenge.”
- Sector chips/text list: Development partners · Public institutions · Universities & research networks · Foundations & funders · Youth networks · Private sector.
- Text link: `Start a partnership conversation →` → `/contact?topic=partner`.

### 4.10 CTA band

Use the shared lime CTA band (section 3.2):

- Eyebrow `Let’s make it move`
- H2 `Have a problem worth solving?`
- Paragraph “Tell us what you’re working on. We’ll come with questions, a multidisciplinary lens and a practical way forward.”
- Primary `Start a conversation ↗` → `/contact`
- Outline `Find a program` → `/programs`

---

## 5. About page (`/about`)

Metadata title: **“About”** → rendered as “About — AfriYouth Innovation Labs”.
Description: “AfriYouth Innovation Labs is a youth-centred research, policy and innovation lab connecting evidence, design, entrepreneurship and foresight across Africa.”

### 5.1 Page hero — `page-hero page-hero--about`

- Eyebrow: `About AfriYouth`
- H1: `We connect the dots that <em>change systems.</em>`
- Right lede: “A youth-centred research, policy and innovation lab working to make evidence useful, institutions more responsive and young people impossible to ignore.”
- Chips: `Kigali · Rwanda`, `Pan-African outlook`, `Youth-led`.
- Hero copy max-width 58rem.

**Two-image media strip below** (asymmetric, 2 columns, top rule and generous gap):

- Left (wider, 1400×934): `collaboration.webp`; caption row below: `The work is collective` / `Field note / 02`.
- Right (1400×900): `design.webp`; caption row: `Make room for the new` / `Kigali`.
- Captions are tiny uppercase, muted, separated by a rule, with a small coral dot before the first label. Images have 1rem radius and a subtle hover scale.

### 5.2 Manifesto — “Why we exist”

Paper background, two-column grid: left aside (eyebrow, note, rule) + right statement.

- Left eyebrow: `Why we exist`
- Note (Fraunces italic): `A different kind of institution for a different kind of challenge.`
- Short vertical rule or 3.5rem horizontal rule.
- Statement (large display, roughly 2.6–4.6rem, max-width 18ch): “Africa doesn’t need another pipeline of ideas that stop at the pilot. It needs <em>the infrastructure</em> to move good ideas into policy, practice and enterprise.” The italic phrase is coral.
- Foot: two short paragraphs, muted, separated:
  - “Too often, research sits on shelves, young people are consulted but not entrusted, and promising innovations never reach the systems they were built to change. We exist to close those gaps.”
  - “Our work begins where disciplines end.”

### 5.3 Mission and vision

Two large cards side by side, equal height, 1px border, 1.5–2rem radius. One paper/cream, one ink.

**Card 01 / Mission** (light):

- Number: `01 / Mission`
- H3: “Empower Africa’s youth to generate evidence, shape policy and build solutions that matter.”
- Paragraph: “We do this through research, human-centred design and entrepreneurship — creating the conditions for young people to lead change, not simply inherit it.”
- Oversized abstract compass SVG mark in the bottom-right, low-opacity ink.

**Card 02 / Vision** (ink, cream text):

- Number: `02 / Vision`
- H3: “An Africa where young people shape the systems they live in.”
- Paragraph: “We work toward a continent where evidence, innovation and entrepreneurship are used by empowered young people to address complex challenges and drive inclusive, sustainable transformation.”
- Orbital circle/cross SVG mark in the bottom-right, low-opacity cream.

Cards stagger 0.1s on reveal; hover lifts 3px.

### 5.4 Our approach — dark section

Ink background, cream text.

Head: left eyebrow `Our approach` + H2 `Change is not a straight line. Neither are we.`; right lede “We combine the rigour of research, the empathy of design and the momentum of enterprise — moving between them as the question demands.”

**Five-step path** in one row on desktop, connected by a thin horizontal/zig-zag line with coral nodes; stacks vertically with a left rule on mobile:

1. **01 · Listen** — “We start with the people closest to the problem and the evidence around it.”
2. **02 · Frame** — “We turn messy questions into a shared, useful definition of the challenge.”
3. **03 · Prototype** — “We test services, policies and ventures in small, honest ways.”
4. **04 · Influence** — “We connect evidence and people to decisions, institutions and resources.”
5. **05 · Learn** — “We measure what changes, adapt and build the capability to sustain it.”

Step titles in cream Fraunces 1.4–1.8rem; body muted cream; numbers coral.

### 5.5 Values — “What we hold close”

Section head:

- Eyebrow `What we hold close`
- H2 `Principles before polish.`
- Side: “These are not wall posters. They are the tests we use when the work gets difficult.”

**Six value cards** in a 3×2 ruled grid (1px lines, no gaps; 2 columns at 1080px, 1 at 960px). Each card has a top row with number and a small coral dot, then an h3 and paragraph, generous padding. Hover: paper tint and a 2px top accent.

1. **01 · Youth empowerment** — “Young people are co-authors of the work, not the subjects of it.”
2. **02 · Human-centred design** — “We design with the people who live the consequences.”
3. **03 · Innovation with intent** — “New approaches need rigour, imagination and the courage to be wrong in public.”
4. **04 · Leadership that multiplies** — “We grow the confidence, judgement and networks of the next generation.”
5. **05 · Sustainability by design** — “We build for the long term — in the environment, the institutions and the team.”
6. **06 · Global impact, local roots** — “Local questions, continental relevance, global ambition.”

### 5.6 How we’re built — collective

Two columns: image left (programme.webp), copy right. Image has a circular stamp overlay at the bottom-left reading `Made of / many minds` in tiny uppercase cream text on ink, slightly rotated.

Copy:

- Eyebrow `How we’re built`
- H2 `Small core. Wide network.`
- Lede: “AfriYouth brings together researchers, policy actors, designers, entrepreneurs and foresight practitioners. Some sit in the core team; many join through projects, fellowships and partnerships.”
- **Role list** — six rows with a label left and a discipline right, separated by rules:
  - Researchers & data storytellers — Evidence
  - Policy & systems thinkers — Influence
  - Designers & facilitators — Experience
  - Entrepreneurs & venture builders — Enterprise
  - Foresight & learning specialists — Anticipation
  - Youth leaders & community organisers — Leadership
- Text link: `Join our network →` → `/contact?topic=network`.

### 5.7 CTA band

- Eyebrow `Work with us`
- H2 `We’re looking for questions, partners and people who want to move.`
- Paragraph “If you share our belief that Africa’s next chapter will be shaped by its young people, let’s find the right way to work together.”
- Primary `Start a conversation ↗` → `/contact`
- Outline `Explore our work` → `/work`

---

## 6. Work page (`/work`)

Metadata title: **“Our work”** → “Our work — AfriYouth Innovation Labs”.
Description: “Research, policy, human-centred design, entrepreneurship, strategic foresight and impact learning — connected in one youth-centred lab.”

### 6.1 Page hero — `page-hero page-hero--work`

- Eyebrow: `Our work`
- H1: `One lab. <em>Six ways in.</em>`
- Right lede: “Whether you have a question that needs evidence, a service that needs redesign or a system that needs to move — we bring the right mix of disciplines to the table.”
- Chips: `For partners`, `For institutions`, `For funders`.
- Below the grid, a top-ruled discipline row: Research & evidence · Policy & systems · Human-centred design · Entrepreneurship · Strategic foresight · Impact & learning, each preceded by a coral dot, tiny uppercase.

### 6.2 Services — expandable discipline list

Section head:

- Eyebrow `What we bring`
- H2 `No off-the-shelf answers.`
- Side: “Every engagement is designed around the question, the context and the people who need to act on it. Expand a discipline to see how we can help.”
- Text link: `Commission our expertise →` → `/contact?topic=commission`

Six native `<details>` elements, one open by default (Research). Each summary is a grid: number (3rem), title block (title + tagline), short description, circular arrow that rotates to a × and inverts when open. Titles 1.9–2.6rem Fraunces; tagline tiny uppercase coral/muted; short description muted. Content opens into a two-column body (paragraph + chips + CTA on the left, “What it can look like” list on the right) plus a full-width 16:9 image with caption. Rules between items; IDs match the home deep links.

#### 01 · Research & evidence — `id="research"` (open)

- Tagline: `Knowledge with a purpose`
- Short: “Rigorous, locally grounded knowledge that makes complex problems legible — and actionable.”
- Body: “We generate rigorous, locally grounded evidence that helps decision-makers see a problem clearly and act on it with confidence. Our work is participatory by default: young people help shape the questions, collect the data and make sense of what it means.”
- Chips: Development partners · Public agencies · Foundations · Universities.
- CTA: `Talk to us about research →` → `/contact?topic=commission`.
- List title `What it can look like`:
  - Applied and participatory research
  - Evidence reviews and synthesis
  - Youth-led data collection and sense-making
  - Insight reports and data storytelling
- Image: `research.webp`; caption `Evidence is a conversation`.

#### 02 · Policy & systems — `id="policy"`

- Tagline: `From evidence to influence`
- Short: “Practical policy options, coalitions and implementation pathways that move evidence into public decisions.”
- Body: “We turn evidence into practical policy options, coalitions and implementation pathways. We work with the people who make decisions — and the people affected by them — to design policies that can survive contact with reality.”
- Chips: Government · Regional bodies · Civil society · Funders.
- CTA: `Talk to us about policy →` → `/contact?topic=commission`.
- List:
  - Policy analysis and options development
  - Systems and stakeholder mapping
  - Coalition building and convening
  - Implementation and governance design
- Image: `policy.webp`; caption `Make the case impossible to ignore`.

#### 03 · Human-centred design — `id="design"`

- Tagline: `Build with people, not for them`
- Short: “Services, programmes and products co-designed with the people who use them — and the people who deliver them.”
- Body: “We co-design services, programmes and products with the people who use them. From discovery to prototyping, we make complex journeys visible and test better ways forward before committing to scale.”
- Chips: Public services · Nonprofits · Social enterprises · Programme teams.
- CTA: `Talk to us about design →` → `/contact?topic=commission`.
- List:
  - Qualitative discovery and immersion
  - Co-design workshops and facilitation
  - Service blueprints and journey design
  - Rapid prototyping and user testing
- Image: `design.webp`; caption `Prototype early, learn quickly`.

#### 04 · Entrepreneurship & ventures — `id="enterprise"`

- Tagline: `Ideas that can stand on their own`
- Short: “Support for young founders to test, build and scale ventures that solve real problems with durable models.”
- Body: “We help young founders move from a promising idea to a tested, investable venture. Our support blends venture design, market validation, mentorship and access to networks that open real doors.”
- Chips: Early-stage founders · Incubators · Funders · Corporate innovators.
- CTA: `Talk to us about ventures →` → `/contact?topic=commission`.
- List:
  - Venture design sprints
  - Customer and market validation
  - Founder coaching and mentorship
  - Demo days and investor readiness
- Image: `enterprise.webp`; caption `Build something that lasts`.

#### 05 · Strategic foresight — `id="foresight"`

- Tagline: `Practise the future`
- Short: “Structured ways to anticipate change, navigate uncertainty and make better long-term decisions.”
- Body: “We help organisations anticipate change rather than react to it. Using scenarios, trend analysis and participatory visioning, we make uncertainty something teams can work with — not fear.”
- Chips: Strategy teams · Policy units · Foundations · Alliances.
- CTA: `Talk to us about foresight →` → `/contact?topic=commission`.
- List:
  - Horizon scanning and trend analysis
  - Scenario development and stress-testing
  - Youth futures panels
  - Strategy and visioning workshops
- Image: `foresight.webp`; caption `Look further than the next cycle`.

#### 06 · Impact & learning — `id="learning"`

- Tagline: `Know what changed — and why`
- Short: “Measurement and learning systems that help organisations understand what changed, for whom and why.”
- Body: “We design monitoring, evaluation and learning systems that generate useful insight, not just compliance reports. We build capability so teams can keep learning after the engagement ends.”
- Chips: Programme teams · Funders · Networks · Public institutions.
- CTA: `Talk to us about impact →` → `/contact?topic=commission`.
- List:
  - MEL frameworks and theories of change
  - Developmental and participatory evaluation
  - Learning reviews and after-action processes
  - Capability building for teams
- Image: `insight.webp`; caption `Measure what matters`.

### 6.3 How we work — dark process section

Ink background. Head: eyebrow `How we work`, H2 `A practical, participatory way forward.`; right lede “No mystery process. We define the question, work in the open and leave behind capability, not dependency.”

**Five ruled rows**, each a grid: number, title, description, arrow. On hover the row lightens slightly and arrow shifts. Titles cream 1.8–2.4rem; body muted cream.

1. **01 · Listen** — “We begin with people, context and the evidence that already exists. No assumptions smuggled in as facts.”
2. **02 · Frame** — “We agree on the real question, the decision it needs to inform and the measures of progress.”
3. **03 · Prototype** — “We test options with users and decision-makers, learning quickly before investing at scale.”
4. **04 · Influence** — “We translate findings into tools, relationships and moments that can move a decision.”
5. **05 · Learn** — “We build feedback loops and capability so the work keeps improving after we leave.”

### 6.4 Case formats — “Where it comes together”

Section head:

- Eyebrow `Where it comes together`
- H2 `Three ways the work comes together.`
- Side: “Illustrative engagement formats that show how our disciplines combine. Every project starts from the partner’s real question.”

**Three cards**, image top (16:9), body below, 1px border, cream/white fill, 1.5rem radius, hover lift 4px. Each image has a category tag pill top-left. Meta row at the bottom with disciplines separated by rules.

1. **Research + Policy** — image `research.webp`
   H3 “A youth evidence agenda for the future of work.”
   Paragraph “A participatory study with young people, employers and policymakers to surface what decent work means now — and what should change.”
   Meta: Evidence · Policy · Coalition
2. **Design + Enterprise** — image `design.webp`
   H3 “A better front door to youth finance.”
   Paragraph “A service redesign and prototype sprint with young customers and financial providers to make access simpler, fairer and more trusted.”
   Meta: Service design · Prototyping · Access
3. **Foresight + Impact** — image `foresight.webp`
   H3 “A 2035 learning agenda for a changing region.”
   Paragraph “Scenarios, youth futures panels and a shared measurement agenda to help a coalition plan beyond the electoral cycle.”
   Meta: Scenarios · Learning · Strategy

Stagger cards 0.08s.

### 6.5 CTA band

- Eyebrow `Bring us your hardest question`
- H2 `Good work starts with a better conversation.`
- Paragraph “Tell us what you’re trying to change. We’ll help you find the right mix of evidence, design and action.”
- Primary `Commission our work ↗` → `/contact?topic=commission`
- Outline `Partner with us` → `/contact?topic=partner`

---

## 7. Programs page (`/programs`)

Metadata title: **“Programs & opportunities”** → “Programs & opportunities — AfriYouth Innovation Labs”.
Description: “Explore AfriYouth fellowships, labs, design sprints and learning programmes for young researchers, policy actors, designers and founders across Africa.”

### 7.1 Page hero

- Eyebrow: `Programs & opportunities`
- H1: `Your next move starts <em>here.</em>`
- Right lede: “Fellowships, labs and learning spaces for young people ready to turn curiosity into capability — and capability into change.”
- Note box instead of chips: coral left rule or bordered cream panel with “Four opportunities are currently open or rolling.” and below it `Research Fellowship · Policy Lab · Design Sprint · MEL Clinic` in tiny uppercase.

### 7.2 Opportunities section

Section head:

- Eyebrow `Find your fit`
- H2 `Open doors, not hoops.`
- Side: “Our selection process is human. We look for potential, lived experience and a real question — not just perfect credentials.”

**Filter bar:**

- `All programmes` (06), active
- `Open now` (04)
- `Fellowships` (02)
- `Labs & studios` (03)
- `For organisations` (01)
- Live count at right: `Showing 6 opportunities`

**Six programme cards** in a 2-column grid (1 column below 900px; 2 at 900–1080; 2 wide on desktop). Each card is a full colour block with 2rem radius, large padding, status pill, index number, a custom 120px abstract SVG, type micro-label, h2 title, description, 3-item meta list, footer deadline + button. Hover lifts 4px and reveals a subtle sheen. Cards have equal height; descriptions flex.

1. **AfriYouth Research Fellowship** — dark ink card
   - Status: `Applications open` (lime pill)
   - Index `01`
   - Type: `Fellowship · Cohort 01`
   - Description: “A 12-week learning lab for early-career researchers ready to turn evidence into policy, practice and public conversation.”
   - Meta: Duration / 12 weeks; Format / Hybrid · Kigali; Who / Ages 18–30.
   - Deadline: **30 January 2027** — Application deadline
   - Button: `Programme details` → opens modal key `fellowship`
   - Data state: `open`, type `fellowship`, id `fellowship`.
   - SVG: orbital circle with cross axes and solid centre (viewBox 120).
2. **Policy Innovation Lab** — coral card
   - Status `Applications open`; index `02`
   - Type: `Policy Lab · Cohort 01`
   - Description: “An eight-week lab for young policy actors working on a live public challenge alongside mentors and decision-makers.”
   - Meta: 8 weeks / Hybrid / Ages 18–32.
   - Deadline: **15 February 2027** — Application deadline
   - Button: `Programme details` → modal `policy`
   - State `open`, type `lab`.
   - SVG: concentric dashed orbit with satellites.
3. **Youth Venture Studio** — lime card
   - Status `Coming soon`; index `03`
   - Type: `Venture Studio · Cohort 01`
   - Description: “A 16-week studio for young founders building solutions in climate, agriculture, health and education.”
   - Meta: 16 weeks / Kigali / Ages 18–35.
   - Deadline: **Applications soon** — Join the interest list
   - Button: `Preview the studio` → modal `venture`
   - State `coming`, type `lab`.
   - SVG: sprouting plant line drawing.
4. **HCD Design Sprint** — sky card
   - Status `Rolling intake`; index `04`
   - Type: `Design Sprint · Rolling`
   - Description: “A six-week sprint to understand a service challenge, prototype with users and leave with a tested solution.”
   - Meta: 6 weeks / Remote + Kigali / Project teams.
   - Deadline: **March 2027** — Next cohort
   - Button: `Programme details` → modal `design`
   - State `open`, type `lab`.
   - SVG: four rounded squares, one filled.
5. **Futures Academy** — paper card (1px ink border)
   - Status `Waitlist open`; index `05`
   - Type: `Futures Academy · Cohort 01`
   - Description: “A four-week introduction to strategic foresight for young thinkers who want to shape what comes next.”
   - Meta: 4 weeks / Online / Ages 18–30.
   - Deadline: **Waitlist open** — First cohort announced soon
   - Button: `Programme details` → modal `futures`
   - State `waitlist`, type `fellowship`.
   - SVG: four-point star/orbit.
6. **MEL for Impact Clinic** — cream/white card, 1px border
   - Status `Open for enquiries`; index `06`
   - Type: `For organisations · Clinic`
   - Description: “A practical four-day clinic for teams who want measurement to inform decisions, not just satisfy reporting.”
   - Meta: 4 days / Tailored / Teams.
   - Deadline: **Enquire anytime** — Designed with your team
   - Button: `Clinic details` → modal `mel`
   - State `open`, type `organisation`.
   - SVG: layered arc lines and centre dot.

Empty state (hidden by default): “No programmes match this filter right now. Try “All programmes” or [tell us what you’re looking for].” Link → `/contact?topic=programme`.

### 7.3 How it works — apply process

Tight cream section, top rule.

- Eyebrow `How it works`
- H2 `From interest to impact.`
- Side: “A clear, human process from first question to first session. We’ll tell you exactly where you stand at every stage.”

**Four numbered steps** in a row on desktop, connected by a line, stacking on mobile:

1. **01 · Explore** — “Find the programme that fits where you are now. Not sure? Ask us — we’ll point you clearly.”
2. **02 · Apply** — “Tell us about your experience, your question and what you want to change. No perfect CV required.”
3. **03 · Talk** — “Shortlisted applicants have a conversation with our team — a two-way exchange, not an interrogation.”
4. **04 · Begin** — “Accepted participants receive a full pack, a cohort welcome and a clear plan for the weeks ahead.”

### 7.4 FAQ — “Before you apply.”

Two-column FAQ layout (intro left, accordion right):

- Eyebrow `Questions`
- H2 `Before you apply.`
- Lede “The things people most often ask us about programmes, eligibility and getting started.”
- Text link `Ask us anything →` → `/contact?topic=programme`

Questions and answers:

1. **Do I need a university degree to apply?**
   “For most programmes, no. We care more about how you think, what you’ve done and the question you want to explore than the certificate you hold. Specific requirements are listed in each programme’s details.”
2. **Is there a participation fee?**
   “No. Our open programmes are free to participate in. Where a programme includes a stipend, travel support or a fee for organisations, this is stated clearly in the programme details.”
3. **Can I apply if I don’t live in Rwanda?**
   “Yes. We work across Africa. Most of our programmes are hybrid or online, with in-person residencies or workshops where travel support is provided. Check the format on each programme.”
4. **Can I apply to more than one programme?**
   “You can, but we recommend choosing the one closest to where you are now. If you’re unsure, start a conversation with us and we’ll help you find the best fit.”
5. **Do you offer accessibility or care accommodations?**
   “Yes. If you need adjustments during the application process or to participate fully, tell us in your application or email us. We’ll work with you to make it possible.”
6. **Can our organisation co-design a programme?**
   “Yes. We design custom labs, clinics and learning experiences with partners. Visit our [partnership page] or start a conversation with our team.” Link → `/contact?topic=partner`.

### 7.5 CTA band

- Eyebrow `Not sure where you fit?`
- H2 `Start with a conversation.`
- Paragraph “Tell us where you are and what you want to move. We’ll help you find the right programme, partner or next step.”
- Primary `Talk to our team ↗` → `/contact?topic=programme`
- Outline `Explore partnership` → `/contact?topic=partner`

### 7.6 Programme modal data

Use this exact object for `#programme-modal`.

```js
const programmes = {
  fellowship: {
    title: "AfriYouth Research Fellowship",
    tags: ["Fellowship", "Cohort 01 · 2027", "Applications open"],
    lead: "A 12-week, practice-led fellowship for early-career researchers who want to move beyond the report — into policy, programmes and public conversation.",
    do: [
      "Frame a research question with real decision-making value",
      "Learn participatory methods and evidence synthesis",
      "Work with a mentor on a live policy or programme challenge",
      "Turn your findings into a brief, a story and a practical ask"
    ],
    who: "Early-career researchers, recent graduates, youth researchers and practitioners aged 18–30 who are curious about how evidence can influence public decisions.",
    details: [
      "Duration · 12 weeks",
      "Format · Hybrid, Kigali",
      "Commitment · 8–10 hours per week",
      "Cost · Free to participate",
      "Cohort begins · April 2027"
    ],
    gain: "A stronger research practice, a public-facing evidence product, a peer network and a clearer route from evidence to influence.",
    applyLabel: "Start your application",
    applyHref: "/contact?topic=programme&programme=research-fellowship"
  },
  policy: {
    title: "Policy Innovation Lab",
    tags: ["Policy lab", "Cohort 01 · 2027", "Applications open"],
    lead: "An eight-week lab for young policy actors working on a live public challenge, with mentorship, systems tools and direct access to decision-makers.",
    do: [
      "Work in a small team on a real policy challenge",
      "Map the system, stakeholders and decision points",
      "Develop a practical policy option with users",
      "Present recommendations in a decision-maker forum"
    ],
    who: "Young policy analysts, civil servants, advocates and civic technologists aged 18–32 who want to move from critique to practical influence.",
    details: [
      "Duration · 8 weeks",
      "Format · Hybrid",
      "Commitment · 6–8 hours per week",
      "Cost · Free to participate",
      "Cohort begins · May 2027"
    ],
    gain: "Hands-on policy design experience, a stronger systems lens, a network across sectors and a practical policy product to take forward.",
    applyLabel: "Apply to the policy lab",
    applyHref: "/contact?topic=programme&programme=policy-lab"
  },
  venture: {
    title: "Youth Venture Studio",
    tags: ["Venture studio", "Cohort 01", "Coming soon"],
    lead: "A 16-week studio for young founders building solutions in climate, agriculture, health and education. We help good ideas become durable ventures.",
    do: [
      "Stress-test your problem, customer and business model",
      "Prototype with real users and early partners",
      "Work with founders, operators and sector mentors",
      "Prepare for a public demo and follow-on support"
    ],
    who: "Early-stage founders and founding teams aged 18–35, with an idea or working prototype and a clear problem they are committed to solving.",
    details: [
      "Duration · 16 weeks",
      "Format · Kigali, with online sessions",
      "Team · 2–4 founders",
      "Stage · Idea to early traction",
      "Applications · Opening soon"
    ],
    gain: "A tested model, a sharper pitch, a founder community and a route to mentors, partners and potential funders.",
    applyLabel: "Join the interest list",
    applyHref: "/contact?topic=programme&programme=venture-studio"
  },
  design: {
    title: "HCD Design Sprint",
    tags: ["Design sprint", "Rolling intake", "Remote + Kigali"],
    lead: "A six-week sprint to understand a service challenge, prototype with the people who use it and leave with a tested solution and a clear path forward.",
    do: [
      "Run discovery and synthesis with real users",
      "Create a service blueprint of the current experience",
      "Co-design and test two or three prototypes",
      "Leave with a tested solution and a scale plan"
    ],
    who: "Project teams, social enterprises, programme teams and young designers or researchers who want practical experience applying human-centred design.",
    details: [
      "Duration · 6 weeks",
      "Format · Remote + Kigali",
      "Intake · Rolling, with the next cohort in March 2027",
      "Team · Small multidisciplinary teams",
      "Cost · Free for selected teams"
    ],
    gain: "A tangible prototype, user evidence, a design toolkit and the confidence to keep designing with people rather than guessing for them.",
    applyLabel: "Register your interest",
    applyHref: "/contact?topic=programme&programme=design-sprint"
  },
  futures: {
    title: "Futures Academy",
    tags: ["Futures learning", "Cohort 01", "Waitlist open"],
    lead: "A four-week introduction to strategic foresight for young thinkers who want to see further, challenge assumptions and shape what comes next.",
    do: [
      "Explore signals, trends and drivers of change",
      "Build scenarios for a challenge you care about",
      "Facilitate a youth futures conversation",
      "Translate foresight into a practical agenda"
    ],
    who: "Curious young people, organisers, researchers, designers and policy actors aged 18–30 who want a structured way to think about long-term change.",
    details: [
      "Duration · 4 weeks",
      "Format · Online",
      "Time · Two sessions per week",
      "Cost · Free to participate",
      "First cohort · 2027"
    ],
    gain: "Foresight methods you can use immediately, a futures project, and a community of peers thinking beyond the next news cycle.",
    applyLabel: "Join the waitlist",
    applyHref: "/contact?topic=programme&programme=futures-academy"
  },
  mel: {
    title: "MEL for Impact Clinic",
    tags: ["For organisations", "Tailored clinic", "Open for enquiries"],
    lead: "A practical four-day clinic for teams who want monitoring, evaluation and learning to inform real decisions — not just satisfy a reporting requirement.",
    do: [
      "Interrogate the questions your measurement should answer",
      "Map your current data and learning loops",
      "Design a lean, useful MEL framework",
      "Build a practical learning rhythm for your team"
    ],
    who: "Programme teams, funders, networks and public institutions who want a stronger link between what they measure and the decisions they make.",
    details: [
      "Duration · 4 days",
      "Format · Tailored, on-site or virtual",
      "Group · Up to 18 participants",
      "Cost · Quoted per engagement",
      "Timing · Enquire anytime"
    ],
    gain: "A fit-for-purpose learning framework, shared clarity across the team and practical habits for using evidence as the work unfolds.",
    applyLabel: "Enquire about the clinic",
    applyHref: "/contact?topic=commission&service=mel-clinic"
  }
};
```

---

## 8. Insights page (`/insights`)

Metadata title: **“Insights & resources”** → “Insights & resources — AfriYouth Innovation Labs”.
Description: “Research, field notes and practical resources on youth innovation, evidence-informed policy, human-centred design, entrepreneurship and foresight in Africa.”

### 8.1 Page hero

- Eyebrow: `Insights & resources`
- H1: `Ideas for the work <em>ahead.</em>`
- Right lede: “Research, field notes and practical provocations from the edge of evidence, policy, design and enterprise.”
- Chips: `Read in the open`, `Use what works`.

### 8.2 Featured report

A large dark ink feature panel with 2.25rem radius, two columns: report cover left (about 0.85fr) and copy right (1.15fr). Add a faint large circular/orbital line pattern behind the cover.

**Report cover** (cream paper object inside the dark panel, 2:3-ish portrait, 1.5rem radius, shadow, slight rotation -1.5°):

- Top row: tiny uppercase `AfriYouth field report · 01` and the 48px four-part brand mark.
- Large title: `The state of youth innovation <em>Africa 2026</em>` — second line italic coral.
- Footer: `Evidence · Practice · Futures` and `№ 01`.
- Ghost `01` at bottom-right, huge and pale.
- Cover sits on a cream/soft gradient with a subtle coral circle bleeding off the bottom-right.

**Right copy:**

- Lime eyebrow: `Featured report`
- H2 (cream): `The state of youth innovation in Africa.`
- Paragraph: “A field scan of the ideas, barriers and bright spots shaping how young people build solutions across the continent — and what funders, policymakers and institutions should do next.”
- Buttons: light `Read the executive summary ↗` (opens insight modal key `state`); outline-light `Browse the library` → `#library`.
- Note: `12 min read · Published November 2026` with a lime dot.

### 8.3 The library

Section head:

- Eyebrow `The library`
- H2 `Useful, not just impressive.`
- Side: “Read, borrow, challenge. If something here is useful to your work, we’d love to know.”

**Filter bar:**

- `All` (06), active
- `Research`
- `Policy`
- `Design`
- `Enterprise`
- `Foresight`
- `Impact`
- Live count: `Showing 6 resources`

**Six resource cards** in a 3-column grid (2 at 1080px, 1 below 680px), each a min-height 22rem cream/white card with 1px border, 1.25rem radius, category dot, index, h3 title (max 17ch), paragraph, footer meta + circular arrow. Each category has its own dot colour via `--cat-color`. Hover lifts 4px, arrow inverts/rotates. Cards are `<button>` elements that open the insight dialog.

1. **Foresight** — 01 — `Why the future of work needs youth at the design table.`
   “The jobs young Africans will hold in 2035 don’t exist yet. What changes if we design for work — not just train for it?”
   `Field note · 9 min read` · colour `#e9592e` · key `future-work`.
2. **Policy** — 02 — `From evidence to a seat at the table.`
   “Good research rarely changes a decision on its own. A practical look at the relational work of evidence-informed policy.”
   `Practice brief · 6 min read` · colour `#173d2e` · key `evidence-policy`.
3. **Design** — 03 — `Designing with, not for.`
   “Participation is not a workshop. Three shifts that turn co-design from a photo opportunity into shared decision-making.”
   `Field note · 5 min read` · colour `#bc3b19` · key `design-with`.
4. **Research** — 04 — `The case for youth-led research.`
   “What becomes visible when young people hold the research questions — and what institutions gain when they listen.”
   `Perspective · 7 min read` · colour `#4f7c68` · key `youth-research`.
5. **Enterprise** — 05 — `Beyond the pilot: routes to scale.`
   “Why so many promising youth-led ventures stall after the first grant — and the capabilities that help them grow.”
   `Practice brief · 8 min read` · colour `#bc3b19` · key `scale`.
6. **Impact** — 06 — `Measuring what matters.`
   “Five questions that help a learning system inform decisions instead of producing another report nobody reads.”
   `Toolkit · 6 min read` · colour `#4f7c68` · key `measurement`.

Empty state (hidden): “Nothing in this category yet. Try another filter or [suggest a resource].” → `/contact?topic=media`.

### 8.4 CTA band

- Eyebrow `Have something worth sharing?`
- H2 `Let’s make the thinking useful.`
- Paragraph “If you’re working on a question that belongs in public, we’d like to hear about it. Research, tools and uncomfortable questions are all welcome.”
- Primary `Talk to us ↗` → `/contact?topic=media`
- Outline `Partner on research` → `/contact?topic=partner`

### 8.5 Insight modal data

Use this exact object for `#insight-modal`.

```js
const insights = {
  state: {
    category: "Field report",
    read: "12 min read",
    title: "The state of youth innovation in Africa",
    lead: "A snapshot of where youth innovation stands in Africa — and where the next openings lie for young people, partners and institutions.",
    body: [
      "This field scan brings together desk research, conversations and signals from across the continent. It does not claim to be exhaustive. It is a starting point for better questions.",
      "The strongest signal is not a shortage of ideas. It is a shortage of infrastructure to help those ideas survive contact with institutions. Young innovators are building in the gaps — often with resourcefulness that formal systems struggle to recognise.",
      "Three openings stand out. First, make youth-led research a normal part of programme design. Second, shift funding from one-off pilots toward patient, flexible capital. Third, give young people real governance power, not only advisory roles.",
      "The opportunity for partners is clear: move earlier, share risk and invest in the connective tissue between evidence, policy, design and enterprise. That is where durable change is built."
    ]
  },
  "future-work": {
    category: "Foresight",
    read: "9 min read",
    title: "Why the future of work needs youth at the design table",
    lead: "The jobs young Africans will hold in 2035 don’t exist yet. What changes if we design for work — not just train for it?",
    body: [
      "Most conversations about the future of work begin with a skills gap. Very few begin with a design question: what kind of work do we want young people to be able to do?",
      "Across the continent, young people are already improvising the answer. They are building platforms, cooperatives and new services in the gaps left by formal systems. Too often, these innovations are treated as side projects rather than evidence of how work itself is changing.",
      "A youth-centred approach asks young people to help define the problem, not just prepare for the solution. It means involving them in the design of training, enterprise support and labour policy — with real authority, not a seat at the edge of the table.",
      "The practical shift is modest but consequential: fund youth-led research on working lives; put young people on the governance of skills programmes; and measure whether work is not only available, but decent, secure and meaningful."
    ]
  },
  "evidence-policy": {
    category: "Policy",
    read: "6 min read",
    title: "From evidence to a seat at the table",
    lead: "Good research rarely changes a decision on its own. A practical look at the relational work of evidence-informed policy.",
    body: [
      "The research-to-policy pipeline is a useful metaphor and a misleading one. Evidence does not travel neatly from a report into a decision. It moves through relationships, timing and the questions decision-makers are already asking.",
      "That means the work of influence begins earlier than the final report. It starts with agreeing on the question, understanding the decision calendar and identifying the people who will have to defend the choice.",
      "Young researchers are often excluded from this relational layer. They are asked to collect data, not to hold the relationships that make data useful. Changing that is one of the most direct ways to strengthen both the evidence and the decision.",
      "A practical test: for every research project, name the decision it is meant to inform, the person who owns that decision and the moment it will be made. If those are unclear, the report is not the problem."
    ]
  },
  "design-with": {
    category: "Human-centred design",
    read: "5 min read",
    title: "Designing with, not for",
    lead: "Participation is not a workshop. Three shifts that turn co-design from a photo opportunity into shared decision-making.",
    body: [
      "Co-design is in danger of becoming a ritual. A room is booked, sticky notes are distributed, a photograph is taken. Later, the real decisions are made somewhere else.",
      "The first shift is power: decide up front what participants can actually influence. If the answer is nothing, do not call it co-design.",
      "The second shift is incentives: compensate people for their time, make sessions accessible and go to where people already are. Convenience for the organisation is not the same as inclusion.",
      "The third shift is time: keep people involved beyond the workshop. Co-design is not an event; it is a relationship that continues through prototyping, testing and delivery."
    ]
  },
  "youth-research": {
    category: "Research",
    read: "7 min read",
    title: "The case for youth-led research",
    lead: "What becomes visible when young people hold the research questions — and what institutions gain when they listen.",
    body: [
      "Youth-led research is often framed as a capacity-building activity. That framing undersells it. Young researchers can see dynamics that outsiders miss, ask questions that adults do not think to ask and access spaces that are closed to formal institutions.",
      "Proximity is not the same as rigour. Youth-led research still needs method, supervision and ethical care. But rigour improves when the people closest to a problem help define what counts as evidence.",
      "The biggest barrier is not capability. It is trust, payment and time. Institutions often expect young researchers to work for exposure, on short timelines, with little decision-making power.",
      "The upside is worth the redesign: stronger data, more credible recommendations and a generation of researchers who know how to move evidence into the spaces where decisions happen."
    ]
  },
  scale: {
    category: "Enterprise",
    read: "8 min read",
    title: "Beyond the pilot: routes to scale",
    lead: "Why so many promising youth-led ventures stall after the first grant — and the capabilities that help them grow.",
    body: [
      "The pilot is a comfortable place to hide. It is small enough to look successful, short enough to avoid structural problems and often funded in a way that masks how thin the business model really is.",
      "Moving beyond it requires three forms of clarity: a value proposition people will pay for, an operating model that does not depend on heroic effort, and a partnership strategy that can reach more people without losing quality.",
      "Youth-led ventures often face an additional barrier: funders reward novelty and storytelling, while growth requires boring things like procurement, data systems and governance. Both matter.",
      "The best support does not just write a cheque. It connects founders to customers, helps them negotiate contracts and creates the accountability that lets them make better decisions under pressure."
    ]
  },
  measurement: {
    category: "Impact & learning",
    read: "6 min read",
    title: "Measuring what matters",
    lead: "Five questions that help a learning system inform decisions instead of producing another report nobody reads.",
    body: [
      "Measurement is not the same as counting. A useful learning system begins with the decision it needs to inform, not the indicator that is easiest to collect.",
      "Question one: who will use this evidence, and when? Question two: what would change our mind? Question three: what are we assuming? Question four: what will different levels of progress look like? Question five: who is missing from this picture?",
      "The answers will not fit neatly into a funder’s template. That is fine. Create the simple shared dashboard first, then adapt the reporting around it rather than the other way round.",
      "Most importantly, build a rhythm: short check-ins, honest conversations and the authority to act on what you learn. Learning without permission to change is just documentation."
    ]
  }
};
```

---

## 9. Contact page (`/contact`)

Metadata title: **“Contact”** → “Contact — AfriYouth Innovation Labs”.
Description: “Start a conversation with AfriYouth Innovation Labs about a programme, partnership, research commission, media request or joining our network.”

### 9.1 Page hero

- Eyebrow: `Contact`
- H1: `Bring us the question. <em>We’ll bring the lab.</em>`
- Right lede: “Whether you’re looking for your next opportunity or a partner for a problem that matters, this is the place to start.”
- Chips: `Programs`, `Partnerships`, `Commissions`.

### 9.2 Contact layout

Two columns on desktop: form (1.22fr) + sticky sidebar (0.78fr); stack on ≤1080px. Section padding is generous; a thin rule may separate the hero.

#### Form card

Cream background, 1px border, 1.5rem radius, padding clamp(1.35rem, 3vw, 2.5rem).

- H2/h3: `Tell us what you’re working on.`
- Paragraph: “Share a little context and we’ll route your message to the right person. No forms for the sake of forms.”
- Hidden success panel (role status, tabindex -1): **“Your email is ready to send.”** “We’ve opened your email app with your message. Press send there and we’ll take it from here.”

**Fields** (2-column grid; full width for topic + message):

1. `Your name (required)` — text — placeholder `Full name` — autocomplete name.
2. `Email address (required)` — email — placeholder `you@example.org` — autocomplete email.
3. `Organisation (optional)` — text — placeholder `Where you work or study` — autocomplete organization.
4. `Country (optional)` — text — placeholder `Where you’re based` — autocomplete country-name.
5. `What brings you here? (required)` — select with placeholder option `Choose a pathway` and values:
   - Join a programme (`programme`)
   - Partner on a project (`partner`)
   - Commission research or advisory (`commission`)
   - Join the network or work with us (`network`)
   - Media or speaking (`media`)
   - Something else (`other`)
6. `What are you hoping to explore? (required)` — textarea, placeholder `A few sentences about the question, opportunity or collaboration on your mind.`

Consent checkbox: “I’m happy for AfriYouth Innovation Labs to use these details to respond to my enquiry.” Required.

Hidden error (role alert): “Please complete the required fields before sending.”

Submit row:

- Primary button: `Send message ↗`.
- Privacy note: “This opens your email app with the message ready to send. Prefer email? Write to [hello@afriyouthlabs.org].”

Style: inputs 3rem min-height, 1px `--line` border, transparent/cream fill, 0.55rem radius; focus border forest + 3px soft forest ring; labels 0.72rem/650; placeholders #8c958d; textarea min-height 8.5rem; select custom chevron via two small CSS gradients.

#### Sidebar — dark contact panel

Sticky at 7rem, ink/forest background, cream text, 1.5rem radius, overflow hidden.

**Top block:**

- Eyebrow (lime): `Direct line`
- Large Fraunces italic email: `hello@afriyouthlabs.org`
- Row: `Kigali, Rwanda / Working across Africa` and a small outlined button `Copy email` (`data-copy-email="hello@afriyouthlabs.org"`).

**Paths block:**

- Heading `Choose your path` in tiny faded uppercase.
- Four full-width rows with arrow right; each sets the form topic and scrolls/focuses the select:
  - Programmes & applications → `programme`
  - Partnerships → `partner`
  - Research & advisory → `commission`
  - Media & speaking → `media`

**Below panel:** a small side note:
**“We read every message.”**
“We aim to respond within 3–5 working days. For programme-specific questions, include the programme name so we can help you faster.”

### 9.3 Contact FAQ — cream section

`section--cream`, two-column FAQ layout.

- Eyebrow `Before you write`
- H2 `A few useful answers.`
- Lede “Short answers to the questions that usually land in our inbox.”
- Text link `Email us directly →` → `mailto:hello@afriyouthlabs.org`

Questions:

1. **How quickly will I hear back?**
   “We aim to respond within 3–5 working days. If your enquiry is time-sensitive, say so in the subject line or in your message and we’ll do our best to prioritise it.”
2. **I’m interested in a programme. What should I include?**
   “Tell us which programme you’re interested in, where you are in your journey and any access needs. If you’re unsure which programme fits, describe what you want to learn and change — we’ll help you find the right one.”
3. **Can we co-design a programme or research project?**
   “Yes. We work with development partners, public institutions, foundations, universities and businesses on tailored research, labs and learning experiences. Select “Commission research or advisory” in the form and tell us about your mandate.”
4. **Do you accept proposals from young researchers?**
   “We welcome them. Send a short note with your research question, why it matters and the experience you bring. We can’t fund every idea, but we do read them and will point you toward useful openings where we can.”
5. **Are you available for media interviews or speaking?**
   “Yes, when the subject fits our work. Select “Media or speaking” and include your outlet, deadline, topic and format. We’ll come back to you with availability and the right spokesperson.”
6. **Where are you based?**
   “Our home base is Kigali, Rwanda, and our work reaches across the continent. Many of our programmes and partnerships are hybrid or remote, with in-person moments where they add value.”

### 9.4 CTA band

- Eyebrow `Still exploring?`
- H2 `Find the right next step.`
- Paragraph “Browse open opportunities or see how our six disciplines connect to the change you want to make.”
- Primary `Explore programs ↗` → `/programs`
- Outline `See our work` → `/work`

---

## 10. SEO, metadata and document shell

### 10.1 Root layout

`app/layout.jsx` must:

- Set `<html lang="en">` with `no-js` plus the two font variable classes.
- Include a beforeInteractive script that replaces `no-js` with `js`.
- Render a skip link, `<SiteHeader />`, `{children}`, `<SiteFooter />`, a toast `<div role="status" aria-live="polite" data-toast>`, and `<SiteScripts />`.
- Inject Organization JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AfriYouth Innovation Labs",
  "url": "https://afriyouthlabs.org",
  "logo": "https://afriyouthlabs.org/assets/img/og-afriyouth.jpg",
  "email": "hello@afriyouthlabs.org",
  "description": "A youth-centred research, policy and innovation lab connecting evidence, design, entrepreneurship and foresight across Africa.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kigali",
    "addressCountry": "RW"
  },
  "areaServed": "Africa"
}
```

- Export `viewport` with `themeColor: "#f2ede2"`, `width: "device-width"`, `initialScale: 1`.

Global metadata:

- `metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://afriyouthlabs.org")`
- Default title: `AfriYouth Innovation Labs — Evidence in motion. Youth in the lead.`
- Title template: `%s — AfriYouth Innovation Labs`
- Default description as in section 0.
- `applicationName`, `authors`, canonical `/`, favicon `/favicon.svg`.
- Open Graph: type website, siteName AfriYouth Innovation Labs, locale en_GB, url `/`, title/description, 1200×630 image `/assets/img/og-afriyouth.jpg`.
- Twitter: `summary_large_image` with the same image.
- Home page uses an absolute title override: `AfriYouth Innovation Labs — Evidence in motion. Youth in the lead.`

### 10.2 Per-page metadata helper

Create `lib/metadata.js`:

```js
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afriyouthlabs.org";

export function createMetadata({ title, description, openGraphDescription, path }) {
  const ogDescription = openGraphDescription || description;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: ogDescription,
      url: path,
      siteName: "AfriYouth Innovation Labs",
      locale: "en_GB",
      type: "website",
      images: [{
        url: "/assets/img/og-afriyouth.jpg",
        width: 1200,
        height: 630,
        alt: "Young African creatives laughing together outdoors"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: ["/assets/img/og-afriyouth.jpg"]
    }
  };
}

export { SITE_URL };
```

Use page-specific OG descriptions:

- About: “A youth-centred research, policy and innovation lab connecting evidence, design, entrepreneurship and foresight across Africa.”
- Work: “Six connected disciplines for turning evidence into influence, and ideas into systems-level change.”
- Programs: “Fellowships, labs and learning spaces for young people ready to turn curiosity into capability.”
- Insights: “Research, field notes and practical resources for the work ahead.”
- Contact: “Bring us the question. We'll bring the lab. Start a conversation about a programme, partnership, commission or media request.”

### 10.3 Sitemap and robots

`app/sitemap.js`: routes `""`, `/about`, `/work`, `/programs`, `/insights`, `/contact`; `lastModified: new Date()`, `changeFrequency: "monthly"`, priority 1 for home and 0.8 for the rest, using `SITE_URL`.

`app/robots.js`: allow all user agents, sitemap at `${SITE_URL}/sitemap.xml`.

### 10.4 Semantic HTML and links

- Use `<main id="main">` in every page component.
- One `<h1>` per route; section titles use `<h2>`; card titles use `<h3>`.
- Cards that are links should be `<Link>`; cards that open dialogs should be `<button type="button">`.
- Do not use `<a href="#">`; every link must resolve.
- Preserve the exact spelling in copy: “Programs” in navigation/buttons, “programmes” in body copy; “human-centred” with a hyphen; curly apostrophes in contractions.
- Use `aria-label` on icon-only buttons, `aria-hidden="true"` on decorative arrows and stars.
- Images: meaningful `alt`; empty alt only for purely decorative preview images.

### 10.5 Legacy redirects

Add these permanent redirects in `next.config.mjs`:

`/index.html` → `/`, `/about.html` → `/about`, `/work.html` → `/work`, `/programs.html` → `/programs`, `/insights.html` → `/insights`, `/contact.html` → `/contact`.

---

## 11. Responsive composition

These rules are part of the design, not cleanup:

- **Hero (≤1180px):** reduce title size and column gap; seal shrinks; collage remains on the right until 960px.
- **Hero (≤960px):** single column; copy first, media below at max-width 34rem, centred; facts become a 3-column row still, then stack at 680px.
- **Header (≤1120px):** hide desktop CTA and centre nav; show circular hamburger. Mobile panel is full-width, paper, with large links; CTA at the bottom.
- **Section heads:** stack below 900px; side paragraph drops below the headline with a 1.5rem gap.
- **Home disciplines:** at ≤960px, hide the fourth column (arrow) and reduce to `2.2rem 1fr`; description moves under the title if needed; at ≤680px hide tags and use 2 columns.
- **Impact:** single column below 960px; stats stay 2×2 until 640px, then 1 column if cramped. Throughline wraps.
- **Feature card:** single column below 1080px; image becomes 18rem tall; body padding reduces.
- **Ways in:** 3 columns → 1 column below 900px, with rules between instead of vertical borders.
- **Insights preview:** two columns → one below 1080px; side list moves below feature.
- **Work service details:** summary becomes `1.5rem 1fr 2.5rem` below 640px; short description hides or wraps under title; content body becomes one column; image full width.
- **About hero media:** two images side by side → single column below 960px; second image can be hidden only if necessary, but prefer stacking.
- **Programs grid:** 2 columns, then 1 below 900px. Programme meta stays 3 columns until 380px.
- **Library grid:** 3 → 2 → 1 at 1080/680px.
- **Contact:** two columns → one below 1080px; sidebar becomes non-sticky and appears after the form (or before on mobile if better reading order).
- **Footer:** two columns → one below 900px; link columns remain 2-up until 480px; bottom bar stacks.
- **Dialog:** width `min(58rem, calc(100vw - 2rem))`; body grid 2 columns → 1 below 720px; scroll inside.
- **Tap targets:** minimum 44×44px for nav toggle, close buttons, filter pills and arrows.
- **No horizontal scroll at any width.** Test 320px as a stress case even if the design targets 360px+.

---

## 12. Build sequence

1. Create the Next.js app, CSS files, font variables and global tokens.
2. Build `SiteHeader`, `SiteFooter`, `SiteScripts` and the root layout.
3. Build shared primitives: buttons, eyebrow, section-head, CTA band, FAQ, page hero, toast.
4. Build the home page and its CSS; verify the hero collage and discipline rows first.
5. Build About and Work; verify `<details>` deep links.
6. Build Programs with filters + dialog + modal data.
7. Build Insights with filters + report cover + dialog data.
8. Build Contact with mailto form, topic shortcuts, copy email and FAQ.
9. Add metadata, sitemap, robots, redirects and JSON-LD.
10. Test responsive layouts, keyboard flow, reduced motion and production build.

Aim for a deliberate rhythm: paper → dark → cream → paper. Do not put two dark full-bleed sections back to back on the same page unless specified.

---

## 13. Quality checklist

Before declaring the work complete, verify:

- [ ] `npm run build` succeeds with no errors.
- [ ] All six routes render without console errors or hydration warnings.
- [ ] Every piece of copy in sections 4–9 appears exactly once in the right place (except intentional repeats such as CTA bands and nav links).
- [ ] All navigation links work, including footer links and topic-specific contact links.
- [ ] Mobile menu opens, closes on Escape/link/resize, and traps focus.
- [ ] Header gains its scrolled state after 10px.
- [ ] Reveal animations fire once per element; content is visible without JS.
- [ ] Marquee loops seamlessly and pauses on hover; disabled under reduced motion.
- [ ] Home service preview follows the pointer only on hover-capable devices and never blocks clicks.
- [ ] Work deep links (`/work#research` etc.) open the matching `<details>`.
- [ ] Program filters show correct counts and empty states; all six modal datasets open the right content.
- [ ] Insight filters show correct counts and empty states; all seven modal datasets open the right content.
- [ ] Dialog close button, Escape and backdrop click all close; focus returns to the opener.
- [ ] Contact form validates, builds a correct mailto, shows success + toast, and preselects `?topic=`.
- [ ] `?programme=` prefill reads naturally (“I’d like to learn more about the Research Fellowship.”).
- [ ] Copy-email works and shows the “Copied” state.
- [ ] All focus states are visible on paper, cream, ink and lime backgrounds.
- [ ] No image is stretched or cropped badly; all `next/image` sizes are set.
- [ ] No layout shift from late-loading fonts; fallbacks are close.
- [ ] Canonical URLs, OG tags, sitemap and robots are correct.
- [ ] 360px, 768px, 1024px and 1440px screenshots look composed.
- [ ] Print styles are not required, but the page must not break if printed.

---

## 14. Tone and content rules

- Write like a confident, warm human studio. Short sentences. Concrete nouns. No corporate filler.
- The point of view is youth-centred but not paternalistic: young people are researchers, designers, founders and decision-makers — not “beneficiaries”.
- Prefer “evidence”, “systems”, “practice”, “public decisions”, “durable models”.
- Avoid “empowering youth” clichés beyond the copy provided; avoid “unlock potential”, “game-changing”, “revolutionary”, “seamless”.
- Keep the editorial annotations: field notes, coordinates, issue numbers, “Cohort 01”, “Kigali · Rwanda”, “№ 01”.
- Use arrows `↗` and `→` as functional typographic marks, not emoji.
- Keep the design adult and institutional: no cartoons, no playful blobs, no rainbow palettes.

---

## 15. Final deliverable

Return a working repository with:

- All six routes implemented.
- The exact design system and copy above.
- Local fonts and images (or documented placeholders).
- A short `README.md` covering `npm install`, `npm run dev`, `npm run build`, the route list, where to replace images, and how the contact mailto works.

Do not return a code excerpt, a single HTML file, or a description of what you would build. Build the site, run it, and verify it in a browser at desktop and mobile widths.

<!-- END -->

