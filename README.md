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
| `--bg` | `#070410` | Page background — almost black |
| `--bg-2` `--bg-3` | `#0c0716` `#110a1e` | Media and panel surfaces |
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

## Work composition

One slide shape for all four projects — copy left, large visual right — so the pinned
crossfade reads as the *image transforming*, not the layout jumping. Each project shows
only: number, name, one-line description, categories, visual, and **View case study →**.
Everything else — role, tools, problem, approach, outcome — is progressive disclosure
inside the panel.

## The vortex background

A persistent ambient layer, fixed to the viewport (`#vortex` in `index.html`, `Vortex` in
`script.js`) — it never moves with the page and never resets between sections, deliberately
independent of the scroll system below. A canvas paints a central glow with the tools I work
with (Figma, FigJam, HTML, CSS, JavaScript, GitHub, Photoshop, Framer, Claude, GPT) orbiting
and slowly falling in, each on its own randomised timer so the cycle never looks synchronised
or like a looping slideshow — consumed at the centre, reappears at the rim after a delay.

It sits behind the atmosphere (`.amb`) and every section, `aria-hidden` and
`pointer-events: none` throughout, and stays deliberately dim: since it's fixed, whatever
section is on screen may end up in front of it, so its brightest element (the centre) is
tuned faint enough that it never competes with the text it happens to land behind. A soft
cursor reaction nudges the whole field a few pixels and biases rotation speed on fine-pointer
devices only.

Perf: one glow sprite is pre-rendered once and reused via `drawImage` for every particle/icon
every frame — never a per-item gradient. Orbit radius is a 0–1 fraction of the stage, so the
responsive tiers (fewer particles and icons below 1024px/640px) need no special-casing beyond
rebuilding the counts. The render loop uses delta-time (clamped, so it can't jump after the
tab was hidden), pauses entirely on `visibilitychange`, and paints a single static frame under
`prefers-reduced-motion` instead of looping.

## The scroll experience

Motion is a hierarchy, not a coat of paint — the strongest interaction belongs to the work:

| Section | Behaviour |
|---|---|
| Hero | Entrance reveal, then a cinematic exit: content drifts up and dims as you scroll away |
| **Selected work** | **The pinned showcase** — the viewport pins for ~4.7 screens and the four projects crossfade into each other as one continuous story, with a `01 ━ 02 ━ 03 ━ 04` progress strip (numbers are jump links) |
| About | The statement's words brighten progressively with scroll |
| Skills | Panels reveal once; on hover the chosen side expands and the other mutes |
| Experience | A scrolling timeline — a thin line fills with progress and the row nearest centre is bright |
| Explorations / Contact | Simple reveals — deliberately calm |

Everything is driven by one rAF-throttled scroll subscription mapping scroll position to
`transform`/`opacity` (plus `IntersectionObserver` for one-shot reveals). No animation
libraries, no scroll hijacking — the browser scrollbar stays honest. The scroll-linked values
are lerped (a persistent rAF loop trailing the true scroll-derived target) rather than snapped
straight to `scrollY`, so the motion flows instead of jumping between scroll samples.

The pinned showcase is a progressive enhancement: the base layout is a plain stacked flow,
and JS adds `.wstage--on` only on desktop with motion allowed. Mobile, no-JS and
`prefers-reduced-motion` all get the static version.

## Other interactions

1s intro · masked line reveal on the hero headline · a light travelling around the hero badge ·
layered hero light that drifts with the pointer · drifting ambient orbs and sparse dust ·
custom cursor with a circular **VIEW** state over projects · magnetic buttons · nav that
compacts on scroll and **hides going down, returns going up** · scroll spy · scroll progress
bar · case-study slide-over · certificate lightbox · live IST clock.

Everything is CSS transforms/opacity or `IntersectionObserver` — no animation libraries,
no dependencies. All motion respects `prefers-reduced-motion`.

## Editing content

| What | Where |
|---|---|
| Case-study copy (all 8 projects) | `CASE_STUDIES` object at the top of `script.js` |
| Project cards, experience, recognition, all page copy | `index.html` |
| Colours, type, spacing, motion | `:root` in `style.css` |
| Project images | `images/` — see [the image guide](assets/projects/README.md) |
| Vortex tool list | `TOOLS_ALL` / `TOOLS_SMALL` at the top of `Vortex` in `script.js` |

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
