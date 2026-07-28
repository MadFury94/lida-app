# Orixo Design System Reference

> Extracted from: Orixo - Digital Agency Portfolio HTML Template (ThemeForest)
> Applied to: Lida Digital client website

---

## Color Palette (CSS Variables)

| Token | Value | Usage |
|---|---|---|
| `--body` | `#101010` | Page background (dark) |
| `--black` | `#000000` | Pure black |
| `--white` | `#ffffff` | White text / light elements |
| `--theme` | `#FF471C` | Primary accent / CTA color (orange-red) |
| `--header` | `#ffffff` | Heading text color |
| `--text` | `#B1B1B1` | Body / paragraph text |
| `--border` | `#FCFCFC` | Border color |
| `--bg` | `#272727` | Card / section background |
| `--box-shadow` | `0px 1px 14px 0px rgba(0,0,0,0.13)` | Shadow |

---

## Typography

### Fonts
- **Headings / Body:** `Urbanist` (Google Fonts) — weights 100–900
- **Accent / Serif:** `Instrument Serif` (Google Fonts) — italic variant used for stylistic headings
- **Icons:** Font Awesome 6 Pro

### Font Sizes (Desktop → Mobile)
| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| `h1` | 120px | 80px | 45px |
| `h2` | 65px | 40px | 36px |
| `h3` | 30px | 30px | 22px |
| `h4` | 18px | — | — |
| `body` | 20px | 16px | 16px |

### Font Weights
- Headings: 600 (h1, h2), 500 (h3), 400/700 (h4–h6)
- Body: 500

### Line Heights
- h1: 92%
- h2: 117%
- h3: 150%
- body: 28px

---

## Design Principles

- **Dark theme by default** — `#101010` background, white headings, `#B1B1B1` body text
- **Accent color** `#FF471C` (vibrant orange-red) used for CTAs, highlights, active states
- **Cards/sections** use `#272727` background to create depth on dark bg
- **Smooth scroll** — uses GSAP ScrollSmoother
- **Animations** — WOW.js + Animate.css + GSAP for entrance animations
- **Preloader** — bracket-style SVG ring loader

---

## Page Structure / Sections (from index.html)

1. Preloader
2. Header (sticky, desktop navbar + mobile menu + offcanvas)
3. Hero section
4. About section
5. Features section
6. Services section
7. Marquee / ticker
8. Testimonials
9. Pricing
10. Portfolio / Projects
11. Team
12. Blog / News
13. Brand logos (client logos)
14. FAQ
15. CTA
16. Contact
17. Footer

---

## Navigation Structure

- Home
- About Us
- Services (Service Page, Service Details)
- Pages
  - Portfolio (Portfolio page, Portfolio Details)
  - Team (Team page, Team Details)
  - Pricing
  - FAQ
  - 404
- Blog (Grid, Standard, Details)
- Contact

---

## Button Style

- Class: `.theme-btn`
- Style: filled with `--theme` color (`#FF471C`), pill/rounded
- Arrow icon: `fa-arrow-up-right`

---

## Implementation Notes for React

- Use Tailwind CSS v4 with custom CSS variables matching Orixo tokens
- Import `Urbanist` and `Instrument Serif` from Google Fonts in `index.html`
- Copy `assets/css/main.css` as reference — do NOT use Bootstrap, use Tailwind instead
- Template assets (images, webfonts) live in `public/themeforest-.../Main files/assets/`
- Reference images using `/themeforest-.../Main files/assets/img/...` paths from public
