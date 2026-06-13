# Muneeb Ahmed Butt — Portfolio Website

A fast, modern personal portfolio website featuring:
- ✨ **Holographic 3D card animations** with interactive light effects
- 🎨 **Particle network** with optimized rendering
- 🎯 **Custom glowing cursor** with smooth tracking
- ⌨️ **Typewriter effect** cycling through your roles
- 📜 **Scroll reveal animations** with staggered timing
- 🚀 **Velocity-based scroll banner** that responds to scroll speed
- 🎪 **3D card tilt effects** on interaction
- ✍️ **Gradient animated blobs** for visual depth

**Fully Optimized Performance** — Smooth 60fps interactions with debounced event handlers and GPU-accelerated transforms.

## 📁 File Structure

```
muneeb-portfolio/
├── index.html       ← Main HTML file
├── style.css        ← All styles & animations
├── script.js        ← All JavaScript & interactions
├── assets/
│   └── muneeb.jpg   ← Your profile photo
└── README.md        ← This file
```

## 🚀 How to Deploy (Free — GitHub Pages)

### Step 1: Your repo is ready
The repository is already created at: https://github.com/muneeb10305896-rgb/MUNEEB-PORTFOLIO

### Step 2: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → **/ (root)**
4. Click **Save**

### Step 3: Your site is live!
After ~2 minutes your portfolio will be live at:
`https://muneeb10305896-rgb.github.io/MUNEEB-PORTFOLIO/`

---

## ✏️ How to Update Content

### Change your name/info
Open `index.html` in any text editor (VS Code, Notepad) and search for the text you want to change.

### Change your photo
Replace `assets/muneeb.jpg` with a new photo. Keep the same filename or update references in HTML.

### Change colors
Open `style.css` and edit the `:root` variables at the top:
```css
:root {
  --bg:      #07070f;      /* background */
  --accent:  #7c6dfa;      /* main purple */
  --accent2: #4fc3f7;      /* cyan blue */
  --accent3: #ff6b9d;      /* pink */
  --text:    #f0eef8;      /* text color */
}
```

### Update work experience, education, skills
Edit the respective sections in `index.html`. Find sections with class names like `.exp-card`, `.edu-card`, `.skill-card`.

---

## 🌐 Animations Included

- **Holographic profile card** — 3D tilt + rainbow shine on mouse move
- **Particle network** — animated floating dots
- **Custom cursor** — glowing dot + lagging ring
- **Typewriter effect** — cycles through your roles
- **Velocity scroll banner** — speeds up when scrolling
- **3D skill card tilt** — perspective tilt on hover
- **Exp card glow** — radial glow follows cursor
- **Scroll reveal** — staggered fade/slide animations per section
- **Animated gradient blobs** — floating background elements
- **Line-by-line hero text** reveal on load
- **Nav shrinks** on scroll

---

## ⚡ Performance Optimizations

This portfolio is **highly optimized** for smooth 60fps performance:

### Rendering Optimizations
- **Particle count reduced** from 90 → 40 particles (-56%)
- **Removed O(n²) connection calculations** that were CPU-intensive
- **Canvas opacity reduced** (0.45 → 0.2) for lighter rendering
- **Slower blob animations** (8-12s → 12-18s) to reduce compute

### Event Handling
- **Debounced mousemove listeners** using RequestAnimationFrame
  - Custom cursor updates
  - Skill card 3D tilts
  - Holographic card calculations
  - Experience card glows
  - Education card tilts
- **Velocity scroll** converted from setInterval to RAF

### CSS Optimization
- **GPU-accelerated transforms** via will-change hints
- **Lazy loading** for images
- **Hardware acceleration** for 3D perspectives
- **Reduced blur filters** on background effects

### Result
✅ Significantly improved responsiveness
✅ Reduced frame jank on scroll/mousemove
✅ Better mobile performance
✅ Maintained visual quality with lower overhead

---

## 🔧 Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Modern features: Grid, Flexbox, CSS Variables, Animations, Gradients
- **Vanilla JavaScript** — No dependencies, optimized for performance
- **Canvas API** — Particle animation engine

---

Built with ❤️ · Kuopio, Finland 🇫🇮

---

## Changelog — June 2026 maintenance pass

### Bug fixes
- **Touch devices / tablets**: custom cursor was hidden only below 700px width, so iPads and touch laptops showed a stuck cursor dot at the corner. Now gated by `(hover: hover) and (pointer: fine)` instead of screen width.
- **Contact form**: `novalidate` disabled native validation but JS never checked validity, so empty forms could be submitted to Formspree. Now runs `checkValidity()`/`reportValidity()` before sending. Added a honeypot field (`_gotcha`) to cut spam.
- **Velocity marquee**: track widths were measured once 100 ms after script load — before fonts finished loading and never after rotation/resize — causing wrong wrap points. Widths now re-measure on `load` and `resize`.
- **Preloader**: could trap the user forever if any resource hung. Added a 4-second failsafe.
- **Anchor links**: sections were hidden under the fixed navbar when jumped to. Added `scroll-padding-top`.
- **Scroll progress**: guarded against division by zero on short viewports.

### Performance
- Magnetic/3D spring cards now stop writing `style.transform`/`box-shadow` once settled (previously every card was restyled every frame, forever) and are disabled entirely on touch devices.
- Lanyard rope physics + full-viewport canvas rendering now pause and the layer hides when the hero is scrolled well out of view.
- Cursor listeners aren't attached on touch devices.

### Accessibility
- Skip-to-content link, `<main>` landmark, section titles converted from `<div>` to real `<h2>` headings.
- Visible `:focus-visible` outlines (the site hides the native cursor, so keyboard users previously had no focus indication beyond browser defaults).
- Hamburger button: `aria-expanded` + `aria-controls`; mobile menu closes on Escape and outside click.
- Typewriter line is `aria-hidden` with a static screen-reader equivalent.
- `prefers-reduced-motion` now also stops the JS-driven animations (particles, marquee, typewriter, card swing-in), not just CSS ones.

### SEO
- Canonical URL, JSON-LD `Person` structured data, intrinsic image dimensions on the ID-card photo (prevents layout shift).

### Light theme — "Nordic Daylight" (added)
Not a flat white swap. The light mode keeps the site's identity:
- Tinted ice-lavender paper background (`#f3f2fb`) with the same drifting aurora, in pastel
- Subtle indigo grid lines, frosted-light navbar and mobile menu
- Cards become frosted white with soft colored shadows instead of neon glow
- The lanyard ID card **intentionally stays dark** — like a real physical badge
- Particles deepen slightly for contrast; cursor blend mode switches to `multiply`
- Toggle in the navbar (sun/moon), persisted in `localStorage`, defaults to the visitor's OS preference, zero flash-of-wrong-theme on load (inline bootstrap script), smooth 450ms cross-fade on switch

### June 2026 — round 2
- **Light-mode bug**: contact GitHub icon was hardcoded near-white (`#f0eef8`) — invisible on white cards. Now `currentColor`, adapts to both themes.
- **Certifications**: added HackerRank Python (Basic), HackerRank JavaScript (Basic), and IBM AI Literacy — each with a "Verify credential" link to HackerRank/Credly. Harvard Aspire moved to last position.
- **Performance**: hero photo compressed 300KB JPG → 54KB WebP (440px @2x retina) with 56KB optimized JPG fallback via `<picture>`. Preload updated. Original kept for og:image social previews.
- **Aspire certificate**: official completion certificate (signed by Tarun Khanna & Karim Lakhani) added at `assets/Aspire_Leaders_2024_Certificate.pdf`, linked from the Aspire card as "View certificate".

### Device coverage pass
- **Tablets (700–950px)**: full nav links overflowed at this width — nav now collapses to hamburger at 880px instead of 700px.
- **iOS Safari**: `min-height: 100svh` on hero prevents the URL-bar resize jump.
- **Small phones (≤380px)**: tuned type scale, paddings, stat sizes, marquee, lanyard height.
- **Landscape phones (≤520px tall)**: hero releases its 100vh lock, lanyard shrinks, scroll indicator hidden.
- **TV / 4K (≥1800px / ≥2500px)**: root font scales up, content containers widen so the page doesn't look like a postage stamp.
- **Windows High Contrast (forced-colors)**: cards/buttons get system borders; decorative cursor + particles removed.
- **Rotation**: particle count and connection-line cost now re-evaluate on resize/orientation change instead of being fixed at load.
