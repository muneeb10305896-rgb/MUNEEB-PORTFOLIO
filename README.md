# Muneeb Ahmed Butt — Portfolio Website

A fast, modern personal portfolio website with interactive 3D elements, bilingual (EN/FI) support, and a custom physics engine for the lanyard ID card.

## Features

- ✨ **Holographic 3D card animations** with Verlet-physics lanyard rope
- 🎨 **Particle network** with adaptive frame-skip and page-idle connection culling
- 🎯 **Custom glowing cursor** with smooth spring-based tracking
- ⌨️ **Typewriter effect** cycling through roles
- 📜 **Velocity-based scroll marquees** that respond to scroll speed
- 🎪 **3D card tilt effects** with convergence detection via WeakMap
- 🌍 **Bilingual (EN / FI)** — client-side translation with 500+ keys
- 🌗 **Light/Dark theme** with View Transitions API and localStorage persistence
- 🎭 **Spring physics** for magnetic card glow
- 📱 **Responsive** — mobile, tablet, 4K, landscape, accessibility (WCAG)
- ⚡ **Adaptive perf-lite** — auto-detects slow machines and disables decorative animations

## 📁 File Structure

```
muneeb-portfolio/
├── index.html          ← Main HTML with all sections
├── style.css           ← Complete stylesheet (themes, animations, responsive)
├── script.js           ← All JS (i18n, physics, canvas, animations, form)
├── vercel.json         ← Vercel deployment config with cache headers
├── sitemap.xml         ← SEO sitemap with hreflang (EN/FI)
├── robots.txt          ← SEO robots directive
├── assets/
│   ├── muneeb.webp              ← Profile photo (WebP, 56KB)
│   ├── muneeb-440.jpg           ← Profile photo fallback (JPG, 58KB)
│   ├── muneeb.jpg               ← Full-res for social previews (JPG, 308KB)
│   ├── favicon.svg              ← Vector favicon
│   ├── NORDASH-PORTAL.webp      ← NORDASH project preview
│   ├── Muneeb_Ahmed_Butt_CV.pdf ← Resume (102KB)
│   └── Aspire_Leaders_2024_Certificate.pdf ← Harvard cert (411KB)
└── README.md           ← This file
```

## 🚀 Deployment

### Vercel (primary)
The site is deployed on Vercel at: [https://muneeb10305896-rgb.github.io/MUNEEB-PORTFOLIO/](https://muneeb10305896-rgb.github.io/MUNEEB-PORTFOLIO/)

`vercel.json` configures cache headers:
- `/assets/*` — 7 days
- `*.js`, `*.css` — 1 day
- `sitemap.xml`, `robots.txt` — 1 day

### GitHub Pages (fallback)
The repository can also be served via GitHub Pages. Enable in **Settings → Pages** → Deploy from branch **main** → root folder.

## 🌐 Internationalization

- **English** (default) — full translation set
- **Finnish** — complete translation set
- Language selected by `?lang=fi` URL parameter or browser preference
- Screen reader text translated in both languages

## 🛠 Tech Stack

- **HTML5** — Semantic markup, JSON-LD structured data, Open Graph / Twitter cards
- **CSS3** — Grid, Flexbox, Custom Properties, `@property`, `mask-composite`, `content-visibility`, `scroll-padding`
- **Vanilla JavaScript** — Zero dependencies, single `rAF` master loop
- **Canvas API** — Particle network animation
- **Formspree** — Contact form backend
- **OpenStreetMap** — Lazy-loaded via IntersectionObserver

## ⚡ Performance

- Single `requestAnimationFrame` master loop (no competing loops)
- Adaptive `perf-lite` mode: auto-detects slow machines, persists in `localStorage`
- Page-idle frame rate drops to ~5fps (CPU/GPU near-zero)
- Idle connection skipping in particle network
- Dirty-rect rendering for Verlet physics canvas
- `content-visibility: auto` for below-fold sections
- IntersectionObserver for lazy map loading and skill bar animation
- Debounced scroll handler via rAF

## ♿ Accessibility

- Skip-to-content link
- Semantic headings (`<h1>`, `<h2>`) throughout
- `aria-label`, `aria-expanded`, `aria-controls` on interactive elements
- Visible `:focus-visible` outlines
- `prefers-reduced-motion` disables all JS/CSS animations
- Typewriter is `aria-hidden` with static screen-reader text
- Windows High Contrast (`forced-colors`) support
- Keyboard-navigable mobile menu (Escape closes)

## 🔧 How to Update

### Content
Edit `index.html` for section text. Most text has `data-i18n` attributes — update the corresponding EN/FI key in `script.js` for bilingual changes.

### Colors
Edit CSS custom properties in `style.css` `:root` block:
```css
:root {
  --bg:      #07070f;      /* background */
  --accent:  #7c6dfa;      /* main purple */
  --accent2: #4fc3f7;      /* cyan */
  --accent3: #ff6b9d;      /* pink */
  --text:    #f0eef8;      /* text color */
}
```

### Resume
Replace `assets/Muneeb_Ahmed_Butt_CV.pdf` with an updated version.

## 📜 Changelog

### June 2026 — round 3
- **Bug fix**: `measureDocHeight()` now called before initial `onScrollFrame()` so scroll progress bar is accurate on page load
- **SEO**: `vercel.json` cache headers added for `sitemap.xml` and `robots.txt`
- **i18n**: HTML fallback text aligned with EN translations; added `skills.prof.fullstack` key for Full-Stack skill bar; added `data-i18n` to missing skill bar item
- **Form UX**: visual `:invalid`/`:valid` border styling on contact form fields (dark + light theme) — no more bare browser tooltips
- **Cleanup**: removed orphaned `NORDASH-PORTAL.png` (1MB, unused — WebP used instead)
- **Documentation**: README updated with current file structure and Vercel deployment info

### June 2026 — round 2
- **Light-mode bug**: contact GitHub icon was hardcoded near-white — invisible on white cards. Now `currentColor`, adapts to both themes.
- **Certifications**: added HackerRank Python (Basic), HackerRank JavaScript (Basic), and IBM AI Literacy — each with "Verify credential" link. Harvard Aspire moved to last position.
- **Performance**: hero photo compressed 300KB JPG → 54KB WebP (440px @2x retina) with 56KB optimized JPG fallback via `<picture>`. Preload updated. Original kept for og:image social previews.
- **Aspire certificate**: official completion certificate added, linked from the Aspire card.

### June 2026 — round 1
- **Touch/tablet fix**: custom cursor gated by `(hover: hover) and (pointer: fine)` instead of screen width
- **Contact form**: `novalidate` disabled native validation but JS never checked — fixed with manual `checkValidity()`, added honeypot for spam
- **Velocity marquee**: width re-measured on `load` and `resize` (not once 100ms after script load)
- **Preloader**: 4-second failsafe prevents infinite trap
- **Anchor links**: added `scroll-padding-top` for fixed navbar
- **Scroll progress**: division-by-zero guard for short viewports
- **Spring cards**: stop DOM writes once settled; disabled on touch devices
- **Lanyard + canvas**: pause when hero is scrolled out of view
- **Accessibility**: skip-link, `<main>` landmark, real `<h2>` headings, `:focus-visible`, aria attributes, reduced-motion support
- **SEO**: canonical URL, JSON-LD Person schema, intrinsic image dimensions
- **Light theme**: added "Nordic Daylight" theme with toggle, persistence, zero-flash
- **Device coverage**: tablets, iOS Safari, small phones, landscape phones, 4K, forced-colors, rotation

## License

© 2026 Muneeb Ahmed Butt. All rights reserved.

Built with ❤️ · Kuopio, Finland 🇫🇮
