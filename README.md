# Sahil Das — Portfolio

Personal portfolio for **Sahil Das** — UI/UX Designer.
Built with plain **HTML, CSS and vanilla JavaScript**. No frameworks, no build step, no dependencies.

Live: **https://sahilarya990.github.io/**

---

## Structure

```
sahilarya990.github.io/
├── index.html                  # All markup — six sections, nothing more
├── style.css                   # Design system + every layout (16 commented sections)
├── script.js                   # Case-study content + all behaviour (12 modules)
├── 404.html                    # Themed not-found page
├── images/                     # Real project exports + portrait (source of truth)
├── assets/
│   ├── favicon.svg
│   ├── og-cover.svg            # Social share image
│   ├── certificates/
│   │   └── helprevx-certificate.svg
│   └── projects/               # Remaining placeholders — see its README
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## Sections

```
Hero  →  01 Selected work  →  02 About  →  03 Skills  →  04 Experience  →  05 Contact
             4 case studies                 Design/Code    + Recognition
             + 4 explorations
```

Six sections, in that order. The page shows the short version of everything; the detail lives
in the case-study panel behind **View case study**. If a block can't earn its place at that
altitude, it belongs in the panel — not on the page.

## Design system

Almost-black ground, off-white text, **purple as an accent** — interaction, active state,
primary CTA, and the ambient light. It is never a flat section background. The one gradient
heading on the page is the hero's `.hl` span; every heading below it stays plain.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#08050f` | Page background — almost black |
| `--bg-2` `--bg-3` | `#0d0818` `#120b20` | Media and panel surfaces |
| `--acc` `--acc-2` `--acc-3` | `#8b5cf6` `#a855f7` `#c084fc` | Primary / secondary / electric purple |
| `--indigo` | `#6366f1` | Soft blue-violet (ambient light only) |
| `--text` `--text-2` `--text-3` | `#f5f3ff` `#a8a0b8` `#8b829e` | Primary / secondary / metadata |
| `--line` | `rgba(255,255,255,.08)` | Borders and section rules |
| `--glass` | `rgba(255,255,255,.035)` | Glass fill |
| `--font` | Plus Jakarta Sans | One family, weights 300–700 |
| `--content` / `--content-wide` | 1360px / 1480px | Content column / project visuals |
| `--page-gutter` | `clamp(20px, 4.4vw, 80px)` | Fluid page gutter — no breakpoint steps |
| `--bleed` | `max(gutter, (100% − content)/2)` | Viewport edge → content column, for full-bleed rules |
| `--sy` / `--py` | 80 → 160px / 64 → 144px | Section rhythm / gap between projects |

### Type

| Level | Size | Notes |
|---|---|---|
| Hero | 40 → 72px | Two lines, left-aligned |
| Section | 32 → 52px | `--fs-sec` |
| Project | 28 → 36px | `--fs-proj` |
| Body | 15 → 17px | `--fs-body` |
| Metadata | 11 → 13px | `--fs-meta` |

Below the hero, headings are **straight**: weight 600, `-0.02em` tracking, no gradient fill,
no italics, no forced line breaks. Uppercase and letter-spacing are reserved for one label per
section (the eyebrow) and small metadata — never for headings or body copy.

The hero keeps its original treatment: centred, 38 → 76px, the travelling-light badge, and a
gradient `.hl` span. It's the one loud moment; the rest of the page stays quiet.

All tokens live in one `:root` block at the top of `style.css`. Change the accent there
and it updates everywhere.

## Work compositions

Projects alternate between two shapes so the section never reads as a card grid:

- `.case--stack` — number + title + one line, then a full-width visual, then tags and the link
- `.case--split` — visual beside the copy; `.case--flip` mirrors it and swaps the column widths

Each project shows only: number, name, one-line description, categories, visual, and
**View case study →**. Everything else — role, tools, problem, approach, outcome — is
progressive disclosure inside the panel.

## Interactions

1s intro · masked line reveal on the hero headline · a light travelling around the hero badge ·
layered hero light that drifts with the pointer · drifting ambient orbs and sparse dust ·
scroll reveal via `IntersectionObserver` · custom cursor with a circular **VIEW** state over
projects · magnetic buttons · nav that compacts on scroll and **hides going down, returns
going up** · scroll spy · scroll progress bar · transform-only parallax on the two large
visuals · image scale on project hover · hover-expanding Design/Code panels · case-study
slide-over · certificate lightbox · live IST clock.

Everything is CSS transforms/opacity or `IntersectionObserver` — no animation libraries,
no dependencies. All motion respects `prefers-reduced-motion`.

## Editing content

| What | Where |
|---|---|
| Case-study copy (all 8 projects) | `CASE_STUDIES` object at the top of `script.js` |
| Project cards, experience, recognition, all page copy | `index.html` |
| Colours, type, spacing, motion | `:root` in `style.css` |
| Project images | `images/` — see [the image guide](assets/projects/README.md) |

### Adding an exploration

1. Copy an `<li class="expl__i">` block in `index.html` and edit the text.
2. Point the `<img src>` at your image.
3. Give the `<li>` a `data-project="your-slug"`.
4. Add a matching `'your-slug': { … }` entry to `CASE_STUDIES` in `script.js`.

Keep Explorations to four. Beyond that it stops reading as a selection.

## Responsive

Designed at **375–430px**, **768px**, **1440px** and **1920px** — mobile is a distinct layout,
not a squeezed desktop. The custom cursor disables below 1024px; splits stack; the skills
panels stack; Explorations goes 4 → 2 → 1; no horizontal overflow anywhere.

## Accessibility

Semantic landmarks · skip link · keyboard-navigable dialogs with focus trap and focus return ·
visible focus rings · alt text on every image · `aria-expanded` on the menu · dialogs closed
with `Escape` · full `prefers-reduced-motion` support.

## Before you publish

1. **LinkedIn URL** — `index.html` contact section has a `TODO` placeholder.
2. **Resume** — drop a PDF at `assets/sahil-das-resume.pdf` and uncomment the nav link.
3. **Vidyapeeth360 image** — only 480×309; re-export at ~1600px wide, it's the lead visual.
4. **Certificate** — replace `assets/certificates/helprevx-certificate.svg`.
5. **Email** — currently `founder@helprevx.com` in the nav and contact buttons.

## Run locally

Open `index.html` directly, or serve it:

```bash
python -m http.server 8000     # http://localhost:8000
```

## Deploy

```bash
git add -A
git commit -m "Portfolio"
git push origin main
```

GitHub Pages serves `main` at `https://sahilarya990.github.io/`.

---

© 2026 Sahil Das
