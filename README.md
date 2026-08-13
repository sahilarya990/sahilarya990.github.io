# Sahil Das — Portfolio

Personal portfolio for **Sahil Das** — UI/UX Designer · Product Designer · Frontend Developer.
Built with plain **HTML, CSS and vanilla JavaScript**. No frameworks, no build step, no dependencies.

Live: **https://sahilarya990.github.io/**

---

## Structure

```
sahilarya990.github.io/
├── index.html                  # All markup — semantic sections
├── style.css                   # Design system + every layout (17 commented sections)
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

Hero (centred, atmospheric) → Selected Work (Vidyapeeth360 · HelpRevX · HealthPulse · Nexus AI) →
Also Designed (rail) → About → Design × Code + Design→Code flow → Experience (+ HelpRevX
highlight) → Process → Certifications → Currently Exploring → Contact

## Design system

Dark violet / cinematic. Purple appears only as light — glow, gradients, borders and
interactive states — never as a flat fill.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#08050f` | Primary background |
| `--bg-2` `--bg-3` | `#0d0818` `#140b24` | Secondary / dark purple surfaces |
| `--violet` | `#21103a` | Deep violet panels |
| `--acc` `--acc-2` `--acc-3` | `#8b5cf6` `#a855f7` `#c084fc` | Primary / secondary / electric purple |
| `--indigo` | `#6366f1` | Soft blue-violet |
| `--text` `--text-2` `--text-3` | `#f5f3ff` `#a8a0b8` `#8b829e` | Body / secondary / metadata |
| `--line` | `rgba(255,255,255,.08)` | Borders |
| `--glass` | `rgba(255,255,255,.035)` | Glass fill (+ `blur(16px)`) |
| `--font` | Plus Jakarta Sans | One family, weights 200–800 |
| `--wrap` / `--wrap-wide` | 1400px / 1560px | Text column / project visuals |
| `--pad` | 24 / 40 / 64px | Gutter at mobile / tablet / desktop |
| `--sy` | 72 → 180px | Section rhythm |

Type scale: hero `clamp(48px,7vw,110px)` · section `clamp(40px,5vw,80px)` ·
project `clamp(32px,4vw,64px)` · body 16–19px · metadata 11–13px.

All tokens live in one `:root` block at the top of `style.css`. Change the accent there
and it updates everywhere.

## Interactions

1.2s intro (SAHIL DAS → DESIGN × CODE) · masked line reveal on the hero headline ·
scroll reveal via `IntersectionObserver` · custom cursor with a circular **VIEW** state over
projects · magnetic buttons · navbar compaction, blur and scroll spy · live section ticker ·
scroll progress bar · hero light parallax · discipline marquee · transform-only parallax ·
image scale + overlay + badge on project hover · drag-to-scroll rails (work + process) ·
hover-expanding Design/Code panels · animated Design→Code flow · animated experience rules ·
case-study slide-over · certificate lightbox · live IST clock.

Everything is CSS transforms/opacity or `IntersectionObserver` — no animation libraries,
no dependencies. All motion respects `prefers-reduced-motion`.

## Editing content

| What | Where |
|---|---|
| Case-study copy (all 9 projects) | `CASE_STUDIES` object at the top of `script.js` |
| Project cards, experience, certifications, all page copy | `index.html` |
| Colours, type, spacing, motion | `:root` in `style.css` |
| Project images | `images/` — see [the image guide](assets/projects/README.md) |

### Adding a project to the horizontal rail

1. Copy a `<li class="rail-card">` block in `index.html` and edit the text.
2. Point the `<img src>` at a new folder in `assets/projects/`.
3. Give the **View Project** button a `data-project="your-slug"`.
4. Add a matching `'your-slug': { … }` entry to `CASE_STUDIES` in `script.js`.

## Responsive

Designed intentionally at **375–430px**, **768px**, **1440px** and **1920px** — mobile is a
distinct layout, not a squeezed desktop. The custom cursor and parallax disable below 1024px;
the skills split stacks; the process row becomes swipeable; no horizontal overflow anywhere.

## Accessibility

Semantic landmarks · skip link · keyboard-navigable dialogs with focus trap and focus return ·
visible focus rings · alt text on every image · `aria-expanded` on the menu · dialogs closed
with `Escape` · full `prefers-reduced-motion` support.

## Before you publish

1. **LinkedIn URL** — `index.html` contact section has a `TODO` placeholder.
2. **Responsive Multi-Page Website** — still using a placeholder image.
3. **Vidyapeeth360 image** — only 480×309; re-export at ~1600px wide, it's the lead card.
4. **Certificate** — replace `assets/certificates/helprevx-certificate.svg`.
5. **Email** — currently `founder@helprevx.com` in the contact button.

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
