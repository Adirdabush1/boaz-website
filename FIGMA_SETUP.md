# Figma Setup Blueprint for BuyForce MVP

Use this guide to mirror the provided code system inside an editable Figma file.

## Page structure

1. **Design System**
   - Color styles: Create named tokens (`bf/bg`, `bf/gray/50`, etc.) using the palette in `css/tokens.css`.
   - Text styles: H1 (28/36 Bold), H2 (22/30 Semibold), Body (16/24 Regular), Small (14/20 Regular), Caption (12/16 Regular).
   - Effects: `bf/shadow/xs`, `bf/shadow/sm`, `bf/shadow/md` using the rgba values from `tokens.css`.
   - Grid tokens: 4pt base grid, 8pt padding, auto layout margins 16/24/32.

2. **Components**
   - Create frames for each component listed below, apply auto layout, and publish them as variants with the naming pattern `bf/<group>/<component>`.

3. **Mobile Screens**
   - Base frame size 390×844, plus device variants 360×800 and 428×926. Duplicate each screen across breakpoints using constraints.

4. **Desktop Screens (optional)**
   - Expand Home, Product, and My Groups to 1440×900 using the same components.

5. **User Flows**
   - Link the mobile screens to document Flows A–I. Add numbered annotations for micro-interactions.

6. **Exports**
   - Stage slices for icons (SVG) and hero imagery (2× PNG).

## Component checklist (create as Figma components + variants)

| Name | Variants | Notes |
| --- | --- | --- |
| `bf/nav/bottom` | default, active, with-badge | Auto layout row, icon+label. Add `aria-label` note in description. |
| `bf/header/global` | transparent, solid | Use component properties for `isSolid` to toggle background and drop shadow. |
| `bf/card/product` | default, joined, sold-out, closed | Include slots for badges, price block, progress, countdown, CTA overlay. |
| `bf/progress` | 0/25/50/75/95/100 | Wrap the track, set progress via boolean props or 6 variants. Highlight 95% with accent gradient. |
| `bf/button` | primary, secondary, ghost × (default, hover, pressed, disabled, loading) | Component property: `type`, `state`. Include focus ring as variant property. |
| `bf/icon/heart` | outline, filled, success-snackbar | Add component set for animation (scale). Document snackbar trigger variant. |
| `bf/skeleton/card` | default | Use grey rectangles with animated gradient (Prototype → smart animate). |
| `bf/modal/payment` | loading, success, error | Provide header, body, CTA slot. Duplicate for confirm + error modals. |
| `bf/carousel/hero` | slide-1..3 | Include indicator component.

## Screen inventory

1. `bf/page/home`: Header, hero carousel, Near Goal horizontal list, Recommended grid, Top Discounts list, sticky nav.
2. `bf/page/categories`: Header, sort dropdown, filter chips, grid, skeleton state overlay.
3. `bf/page/product`: Gallery carousel, price stack, discount badge, progress, countdown, description, delivery, sticky CTA, wishlist icon.
4. `bf/page/payment-modal`: Centered overlay, card selector, summary chips; states for loading/success/error.
5. `bf/page/join-success`: Full-screen confirmation with icon, headline, subcopy, CTA buttons.
6. `bf/page/my-groups`: Tabs, list rows with thumbnail, status badge, progress, CTA.
7. `bf/page/wishlist`: Grid of product cards, empty state component.
8. `bf/page/notifications`: List with icon column, timestamp, unread pill.
9. `bf/page/search`: Fullscreen overlay with input, trending chips, typeahead list, results grid, empty state.
10. `bf/page/auth`: Onboarding carousel (3 slides), Register, Login, Forgot password forms (reusing button + input components).

## Prototype links

- Flow A: `Home` card hotspot → `Product` → `Join for 1₪` button → `Modal (loading)` → `Modal (success)` → `Join success` screen → CTA back to `Home`. Add failure branch from `Modal (loading)` to `Modal (error)` with Retry CTA.
- Flow B: Wishlist heart interaction toggles the `bf/icon/heart` component variant and opens the snackbar component (overlay). Use Smart Animate scale 0.95 → 1.05 → 1.
- Flow C: Categories sort dropdown toggles between two component sets to simulate reordering.
- Flow F: My Groups list item auto-animates progress (duplicate frame with progress property going from 50 → 75 to show motion).
- Flow I: Notifications card click → jump to relevant Product or My Group screen (set as “Scroll To” interactions).

## Export settings

- Icons: Set each `bf/icon/*` component to export SVG (1×) + PDF fallback. Use “Outline stroke” before export to keep thin-line consistency.
- Photography: Export hero and card imagery at 2× PNG (draggable). Name assets `bf-hero-01.png`, etc.
- Provide Inspect documentation by naming layers with their CSS class counterpart (e.g., `bf-card__price-group`).

## Component inventory table

See `build/component-inventory.csv` for a ready-to-import spreadsheet. Link it via Figma widgets or FigJam for stakeholders.
