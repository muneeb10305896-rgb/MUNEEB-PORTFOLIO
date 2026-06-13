# Muneeb Ahmed Butt — Portfolio

**Live:** [muneeb-ahmed-butt.vercel.app](https://muneeb-ahmed-butt.vercel.app)

A fast, fully hand-coded personal portfolio. No frameworks, no build tools, no dependencies — pure HTML, CSS, and Vanilla JavaScript. Designed and built from scratch.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌗 Light / Dark theme | Nordic Daylight light mode · OS preference detected · zero FOUC |
| 🃏 Holographic ID card | 3D tilt + rainbow shine · physically accurate lanyard with rope physics |
| 🌐 Particle network | Canvas-rendered · pauses when off-screen to save CPU |
| 🖱️ Custom cursor | Glowing dot + lagging ring · disabled on touch devices |
| ⌨️ Typewriter | Cycles through roles · screen-reader safe |
| 🚀 Velocity marquee | Scroll-speed-reactive banner |
| 🗺️ Embedded map | Lazy-loaded · only renders when near the viewport |
| 🔵 Section dot nav | Fixed right-side scroll indicator · active dot tracks current section |
| 📜 Scroll reveal | Staggered fade/slide per section |
| 🌍 EN / FI | Full Finnish translation toggle |
| 📱 Fully responsive | 380px phones → 4K displays · iOS Safari · Windows High Contrast |

---

## 📁 File Structure

```
muneeb-portfolio/
├── index.html              ← All content & markup
├── style.css               ← All styles, animations, themes
├── style.min.css           ← Minified (served by default)
├── script.js               ← All JS & interactions
├── script.min.js           ← Minified (loaded by HTML)
├── vercel.json             ← Vercel config (headers, redirects)
├── robots.txt
├── sitemap.xml
└── assets/
    ├── muneeb.jpg          ← Profile photo (JPG fallback)
    ├── muneeb.webp         ← Profile photo (WebP optimized)
    ├── muneeb-440.jpg      ← Retina @2x compressed
    ├── favicon.svg
    ├── Muneeb_Ahmed_Butt_CV.pdf
    ├── Aspire_Leaders_2024_Certificate.pdf
    └── NORDASH-PORTAL.webp
```

---

## 🚀 Deployment

Deployed on **Vercel** via GitHub integration. Every push to `main` auto-deploys.

```bash
# Clone
git clone https://github.com/muneeb10305896-rgb/MUNEEB-PORTFOLIO.git
cd MUNEEB-PORTFOLIO

# No install needed — open index.html directly in a browser
# Or use a local server for accurate behaviour:
npx serve .
```

To deploy your own fork:
1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Leave all settings default → **Deploy**

---

## ✏️ Editing Content

### Personal info, experience, projects
Open `index.html` in VS Code. All content is in semantic HTML — search for the text you want to change.

### Colors
CSS custom properties at the top of `style.css`:

```css
:root {
  --bg:      #07070f;   /* dark background */
  --accent:  #7c6dfa;   /* primary purple */
  --accent2: #4fc3f7;   /* cyan */
  --accent3: #ff6b9d;   /* pink */
  --text:    #f0eef8;   /* body text */
}
```

### Profile photo
Replace `assets/muneeb.webp` and `assets/muneeb.jpg` with your own images. Keep the same filenames or update the `<picture>` tag in `index.html`.

### CV
Replace `assets/Muneeb_Ahmed_Butt_CV.pdf` with your updated CV. Filename can stay the same.

### After any JS changes
The HTML loads `script.min.js` — bump the version query string to bust cache:
```html
<!-- in index.html, change v=11 to v=12 etc. -->
<script src="script.min.js?v=12"></script>
```

---

## ⚡ Performance

- **No frameworks or npm packages** — zero JS bundle overhead
- **WebP images** with JPG fallback via `<picture>`
- **Canvas animations pause** when scrolled out of view
- **rAF-throttled** scroll, mousemove, and resize handlers
- **3D/spring card physics stop** writing to the DOM once settled
- **Lazy map load** — OpenStreetMap only initialises when near the viewport
- **`prefers-reduced-motion`** disables all JS-driven animations, not just CSS ones
- **Minified CSS + JS** served in production

---

## ♿ Accessibility

- Skip-to-content link
- All sections use real `<h2>` headings
- `aria-expanded` / `aria-controls` on hamburger menu · closes on Escape
- Typewriter is `aria-hidden` with a static screen-reader equivalent
- Visible `:focus-visible` outlines
- Windows High Contrast mode supported

---

## 🔧 Tech Stack

- **HTML5** — semantic markup, JSON-LD structured data
- **CSS3** — custom properties, Grid, Flexbox, `@media`, `@keyframes`
- **Vanilla JavaScript** — no dependencies
- **Canvas API** — particles, rope physics
- **Vercel** — hosting, edge CDN

---

## 📋 Changelog

### June 2026 — v3 (scroll nav fix)
- **Section dot nav bug fixed**: `buildSectionOffsets()` was measuring section positions before images and fonts loaded, causing the active dot to track incorrect positions. Now rebuilds on `window.load` and after a 1500ms timeout for web fonts, then re-runs `onScrollFrame()` to immediately correct the active state.
- Script cache-busted to `?v=11`.

### June 2026 — v2 (device & cert pass)
- Tablets (700–950px): nav now collapses to hamburger at 880px.
- iOS Safari: `min-height: 100svh` on hero prevents URL-bar resize jump.
- Small phones (≤380px): tuned type scale, paddings, stats, marquee, lanyard height.
- Landscape phones (≤520px tall): hero releases 100vh lock, lanyard shrinks.
- TV / 4K (≥1800px): root font scales up, containers widen.
- Windows High Contrast: decorative cursor + particles removed.
- Certifications section: HackerRank Python (Basic), HackerRank JavaScript (Basic), IBM AI Literacy added with verify links.
- Hero photo: compressed 300KB JPG → 54KB WebP with `<picture>` + preload.
- Aspire certificate PDF linked from education card.
- Light-mode fix: GitHub icon in contact was hardcoded near-white, now `currentColor`.

### June 2026 — v1 (initial public build)
- Light theme "Nordic Daylight" added.
- Touch device bug: custom cursor now gated by `(hover: hover) and (pointer: fine)` instead of screen width.
- Contact form: JS validation + honeypot field added.
- Velocity marquee: track widths re-measured on `load` and `resize`.
- Preloader: 4-second failsafe added.
- Scroll progress: division-by-zero guard.
- Lanyard canvas pauses when hero is out of view.
- `aria-expanded`, skip link, `<main>` landmark, focus outlines.
- Canonical URL, JSON-LD `Person` schema, intrinsic image dimensions.

---

Built by **Muneeb Ahmed Butt** · University of Eastern Finland · Kuopio 🇫🇮

### June 2026 — v5 (mobile card photo fix)
- **Profile photo showing as oval on mobile**: the `aspect-ratio: 1/1` property on `.id-photo` wasn't reliably enforcing equal dimensions inside a flex column on iOS Safari and some Android browsers. Replaced with explicit `width`, `height`, `min-width`, `min-height` (100×100px), and re-declared `border-radius: 50%`, `overflow: hidden` directly on the mobile rule — plus matching explicit sizes on the inner `picture` and `img` elements. Photo is now a perfect circle on all devices, matching desktop.
- CSS cache-busted to `?v=8`.

### June 2026 — v6 (Instagram in-app browser encoding fix)
- **Garbage characters (â€", Â·) and a broken flag in Instagram/Facebook in-app browsers**: root cause was a byte-level corruption in the minified `script.min.js` — it had been double-encoded, turning valid UTF-8 (Finnish ä/ö, em dash, middle dot, flag emoji) into mojibake. In-app browsers are stricter than Chrome/Safari and showed the raw garbage.
- **Fix**:
  1. Regenerated `script.min.js` cleanly from the UTF-8 source so no corrupted bytes remain.
  2. Rewrote the typewriter to iterate by Unicode code point (`Array.from`) so the Finland flag emoji 🇫🇮 types as one whole glyph instead of a split surrogate pair, and uses the real emoji (via `\uD83C\uDDEB\uD83C\uDDEE` escape — pure ASCII in source, real flag at runtime).
  3. Kept `data-i18n` (innerHTML) strings as HTML entities where appropriate, but reverted all `textContent`-bound strings (form status, screen-reader text) to real Unicode, since `textContent` shows entities literally.
  4. Added explicit `Content-Type: …; charset=utf-8` headers in `vercel.json` for HTML/JS/CSS so every browser — including in-app ones — is told to decode as UTF-8.
- All served files verified as clean, valid UTF-8 with zero mojibake.
- Script cache-busted to `?v=14`.
