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
