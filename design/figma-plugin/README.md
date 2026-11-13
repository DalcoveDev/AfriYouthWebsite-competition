# AfriYouth — Figma design file builder

This folder turns the AfriYouth Innovation Labs website into an editable Figma
file. Figma has no public API for writing `.fig` files from outside Figma, so the
design ships as a **local Figma plugin** that draws the whole document in your
open file: **3 pages**, a cover + design system, six desktop screens (1440) and
the same six mobile screens (390).

Everything is generated from the same tokens and copy used by the Next.js site,
so the file and the live pages stay in step: Dark Purple / Duke Blue / Blue
Steel / Steel Pink, Poppins + Plus Jakarta Sans, the six labs, and the
Incubation → Acceleration → Demo Day model.

## Import it (about 30 seconds)

1. Open the **Figma desktop app** (local plugins need the desktop app).
2. Open any Figma file, then **Plugins → Development → Import plugin from
   manifest…**
3. Select `design/figma-plugin/manifest.json`.
4. Run **Plugins → Development → AfriYouth Design File Builder**.

The plugin builds the three pages, cleans up pages left by earlier runs, and
zooms to the cover when it finishes.

## What you get

| Page | Contents |
| --- | --- |
| `01 · Cover + design system` | Cover (title, version, palette strip, metadata) above the design system: 14 colour tokens, Poppins/Plus Jakarta Sans type scale, buttons, chips, status pills, layout diagrams, radius/spacing tokens |
| `02 · Desktop screens · 1440` | All six desktop screens in one row — Home, About, Our work, Programs, Insights, Contact — each with a visible label above it |
| `03 · Mobile screens · 390` | All six mobile screens in one row, each with a visible label above it |

Every screen label shows its number, name, device and exact frame size (for
example `01 · HOME` / `DESKTOP SCREEN · 1440 × 6120`). Every layer is named
(`Section / Hero`, `Button / …`, `Lab index / …`) and grouped with auto layout.

### About screen sections

The About screen follows the live page section for section:

1. Hero — "A lab built for Africa's next generation."
2. Media pair with captions
3. Manifesto
4. Mission and vision cards + the brand keyword strip
5. Six-labs index (number, lab name, product)
6. Approach — three stages: Incubation, Acceleration, Demo Day
7. Brand kit — the logo mark, its caption and the story behind it
8. Values, the collective, CTA band and footer

### Home screen sections

The Home screen follows the live page section for section:

1. Hero — gradient headline with CTA band
2. Six-lab marquee
3. Mission introduction
4. Incubation → Acceleration → Demo Day model band
5. Six labs showcase
6. Policy Innovation Challenge
7. Impact / 2050 vision + stats
8. Featured accelerator (Innovation Accelerator)
9. Ways in
10. Insights preview
11. Partners
12. CTA band and footer

### Programs screen sections

The Programs screen follows the live page section for section:

1. Hero with gradient accent
2. Filter bar with six programme categories
3. Programme grid (six official products)
4. Apply process steps
5. FAQ

### Insights screen sections

The Insights screen follows the live page section for section:

1. Featured report cover + headline
2. Library of resources
3. CTA band and footer

## Free-plan friendly

Figma free accounts allow **3 pages per file**. This plugin:

- builds exactly 3 pages;
- combines the cover and design system on one page;
- keeps all six desktop screens on one page and all six mobile screens on one page;
- removes pages created by earlier runs of this plugin before rebuilding;
- stops with a clear message if the file already uses its 3 pages for other
  content (delete or empty a page, then run again).

## Design-only material

Some of the file documents the brand itself rather than a page: the colour
palette with usage notes, the signature gradient specimen, logo variants and
clear space, the type scale, and the Plus Jakarta Sans substitution
note. All of that lives on `01 · Cover + design system` — it is not repeated on
the screen pages, which mirror what the website actually shows.

## Design tokens used

Colour

```
ink      #0D0624   body text, dark bands
duke     #0200A7   deep brand blue
blueSteel #0301FF   gradient end, logo detail
pink     #C723DF   signature accent, CTA
white    #FFFFFF   cards, reversed type
paper    #F4F3F8   page background
cream    #FBFAFF   alternating bands
violet   #7A0BF2   gradient mid-point
muted    #5B5574   secondary text
```

Layout

```
Desktop  1440 canvas · 76 gutter · 1288 content · 128 section rhythm
Mobile    390 canvas · 20 gutter ·  350 content
Radius    10 inputs · 20–24 cards · 36 feature cards · 999 pills
```

Type — both fonts are free and available inside Figma.

```
Display  Poppins        H1 104 · H2 66 · H3 30 · italic accents
Body     Plus Jakarta   21 lede · 17 body · 11 eyebrow (bold, tracked)
```

## Photography

Images are represented by labelled placeholder frames named after the real
asset, e.g. `Photo / hero-community.webp`, with the path printed inside the
frame. To use the real photography:

1. Select the placeholder frame.
2. In the Fill panel choose **Image** and pick the file from
   `public/assets/img/` (or drag the file onto the frame).

The portrait/arch treatments, tint and captions are already in place, so the
swap is one step per image.

## Editing and re-running

- Tokens and copy live at the top of `code.js` (`C`, `D`, `M`, `NAV`,
  `DISCIPLINES`, `SERVICES`, `PROGRAMMES`, `RESOURCES`, `VALUES`, `STEPS`, `FAQS`, `APPROACH_STEPS`).
- Each screen is a function (`homeDesktop`, `aboutDesktop`, …) built from small
  helpers (`mkFrame`, `mkText`, `sectionHead`, `ctaBand`, `footerBar`).
- Re-running the plugin removes pages generated by earlier versions (including
  the old `00–03` set) and rebuilds the three-page layout, so the file never
  exceeds the free 3-page limit.
- If Plus Jakarta Sans is missing from your Figma font list, the plugin falls
  back to Inter automatically and keeps building.

## Files

```
design/figma-plugin/
  manifest.json   plugin manifest
  code.js         generator (tokens, components, 3 pages, 12 screens)
  README.md       this file