# Project images

## Where images live now

Your real exports are in **`/images/`** at the repo root — that folder is the source
of truth. This `assets/projects/` folder only still supplies the placeholder for the
one project that has no image yet.

| Project | Image in use |
|---|---|
| Vidyapeeth360 | `images/vidyapeeth-landingpage.jpg` |
| HelpRevX (cover) | `images/helprevx-design-system.png` |
| HelpRevX (gallery) | `images/HelpRevX-logo.jpg` |
| HealthPulse | `images/healthplus-fitness-app.jpg` |
| Nexus AI | `images/nexusai.jpg` |
| Grocery App | `images/grocery-app.png.avif` |
| EdTech Landing Page | `images/edtech-landingpage.avif` |
| Ecommerce Seller Dashboard | `images/Ecommerce Seller Dashboard.avif` |
| Responsive Salon Website | `images/saloon-responsive.avif` |
| Portrait (About) | `images/sahil-profile.avif` |
| **Responsive Multi-Page Website** | ⚠️ **still a placeholder** — `assets/projects/responsive-website/cover.svg` |

The remaining folders in `assets/projects/` are unused leftovers and can be deleted
whenever you like.

## Adding or swapping an image

1. Drop the file in `/images/`.
2. Point at it in **two** places:
   - `index.html` — the `<img src="…">` on the project card (also update `width`/`height`
     to the real pixel size so the layout doesn't shift while loading).
   - `script.js` — the `cover` / `gallery` paths inside `CASE_STUDIES`.

### Filenames with spaces
`Ecommerce Seller Dashboard.avif` is referenced as
`images/Ecommerce%20Seller%20Dashboard.avif` — a space must be written as `%20` in a URL.
Renaming it to `ecommerce-seller-dashboard.avif` (and updating both references) avoids
that entirely.

## How images are displayed

Your exports range from 0.56 to 1.55 in aspect ratio, so every project image is shown
**framed, not cropped** — `object-fit: contain` inside a padded panel. Nothing gets cut
off regardless of shape, and mixed ratios still line up in a grid.

Because of that you don't have to match any particular aspect ratio. You **do** want
resolution: export at roughly **1600px on the long edge**. `vidyapeeth-landingpage.jpg`
is currently only 480×309, which will look soft on the large lead card — worth
re-exporting.

## Formats

AVIF, PNG, JPG and WebP all work. AVIF is supported by every current browser and gives
the smallest files. Every image on the site is lazy-loaded.

## Certificate

`assets/certificates/helprevx-certificate.svg` is still a placeholder — replace it with
your real HelpRevX certificate (update the `src` in `index.html` if the extension changes).
It appears in the Certifications section and opens in a lightbox.
