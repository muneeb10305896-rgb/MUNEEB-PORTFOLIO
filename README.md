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

### Step 1: Create a GitHub account
Go to https://github.com and sign up if you don't have an account.

### Step 2: Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `muneeb-portfolio` (or your GitHub username: `username.github.io`)
3. Set to **Public**
4. Click **Create repository**

### Step 3: Upload the files
1. Click **uploading an existing file**
2. Drag and drop ALL files including the `assets/` folder
3. Click **Commit changes**

### Step 4: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → **/ (root)**
4. Click **Save**

### Step 5: Your site is live!
After ~2 minutes your portfolio will be live at:
`https://yourusername.github.io/muneeb-portfolio/`

---

## ✏️ How to Update Content

### Change your name/info
Open `index.html` in any text editor (Notepad, VS Code) and search for the text you want to change.

### Change your photo
Replace `assets/muneeb.jpg` with a new photo. Keep the same filename.

### Change colors
Open `style.css` and edit the `:root` variables at the top:
```css
:root {
  --accent:  #7c6dfa;  /* main purple */
  --accent2: #4fc3f7;  /* cyan blue */
  --accent3: #ff6b9d;  /* pink */
}
```

### Add the contact form (real emails)
Sign up at https://formspree.io for free.
Replace the contact section in index.html with a form pointing to your Formspree endpoint.

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
