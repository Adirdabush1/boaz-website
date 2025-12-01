# BuyForce MVP · Design System + Code Handoff

This repo packages the BuyForce MVP UI kit: design tokens, reusable components, page templates, SVG assets, and guidance for mirroring the system inside Figma.

> **Figma handoff**: Use `FIGMA_SETUP.md` to recreate the same structure inside your Figma file (pages, color/text styles, components, and prototype wiring). Once you paste the provided component descriptions and property tables, share the generated URL as the official deliverable.

## Repository layout

```
css/
  tokens.css        # Color/typography/spacing/radii/animation vars
  components.css    # bf/* reusable components + states
  pages.css         # Page-specific layouts (home, product, etc.)
figma-export/
  icons/*.svg       # Editable thin-outline icons used in UI
html/
  *.html            # Screen templates (mobile-first)
build/
  component-inventory.csv   # Mapping of components → variants → pages
  buyforce-hand-off.zip     # Packaged assets (generated later)
README.md
FIGMA_SETUP.md
```

## Running the HTML preview locally

1. Clone/download this repo.
2. Open any file from `html/` directly in a browser (files already link to the CSS bundle).
3. For live reload, run a static server (e.g., `npx serve html`). All templates are mobile-first but include tablet/desktop breakpoints.

## Component mapping (Figma → CSS class)

| Figma component | HTML/CSS hook |
| --- | --- |
| `bf/nav/bottom` | `.bf-nav`, `.bf-nav__item`, modifier `--active`, `.bf-nav__badge` |
| `bf/header/global` | `.bf-header`, modifier `.bf-header--solid`, `.bf-header__icon-btn` |
| `bf/card/product` | `.bf-card`, modifiers `.bf-card--joined`, `.bf-card--sold`, `.bf-card--closed` |
| `bf/progress` | `.bf-progress[data-value="*"]` + `.bf-progress--near`/`--complete` |
| `bf/button/*` | `.bf-button`, modifiers `--primary`, `--secondary`, `--ghost`, `--loading`, `--disabled` |
| `bf/icon/heart` | `.bf-icon-heart` + `aria-pressed` state |
| `bf/skeleton/card` | `.bf-skeleton` |
| `bf/modal/*` | `.bf-modal__backdrop`, `.bf-modal`, `.bf-modal__header`, `.bf-modal__close` |
| `bf/carousel/hero` | `.bf-carousel`, `.bf-carousel__item`, `.bf-carousel__dot` |

See `build/component-inventory.csv` for the full set with variant notes and page references.

## Fonts & assets

- Font: `Inter` via Google Fonts (no local install required, SIL Open Font License).
- Icons: Thin-outline custom SVGs under `figma-export/icons/` (CC0 from this repo).
- Photography: Unsplash placeholders already have `?auto=format` parameters for fast loading; replace with production CDN before launch.

## Prototype guidance

Key flows are documented in `FIGMA_SETUP.md`:
- Flow A: Home card → Product → Join CTA → Payment modal → Join success.
- Wishlist toggles and snackbar interactions.
- Categories sort/filter variant swaps.
- My Groups real-time progress simulation.
- Notifications deep-link frames.

When recreating inside Figma, enable Inspect so devs can pull CSS snippets that match this code bundle.
