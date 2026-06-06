/* ============================================
   MUNEEB AHMED BUTT — PORTFOLIO JAVASCRIPT
   ============================================ */

/* —— PRELOADER —— */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('preloader').classList.add('done'), 1400);
});

/* —— CUSTOM CURSOR (transform-based — no layout reflow on mousemove) —— */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
let cHalf = 6, rHalf = 18; // half-sizes for centring each element

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - cHalf}px,${mouseY - cHalf}px)`;
}, { passive: true });

const hoverables = 'a, button, .badge, .skill-pill, .exp-tag, .contact-link, .id-card';
document.querySelectorAll(hoverables).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px'; cursor.style.height = '20px'; cHalf = 10;
    cursor.style.transform = `translate(${mouseX - cHalf}px,${mouseY - cHalf}px)`;
    ring.style.width = '50px'; ring.style.height = '50px'; rHalf = 25;
    ring.style.borderColor = 'rgba(124,109,250,.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px'; cursor.style.height = '12px'; cHalf = 6;
    cursor.style.transform = `translate(${mouseX - cHalf}px,${mouseY - cHalf}px)`;
    ring.style.width = '36px'; ring.style.height = '36px'; rHalf = 18;
    ring.style.borderColor = 'rgba(124,109,250,.5)';
  });
});

/* —— SCROLL PROGRESS + NAV + BACK TO TOP + ACTIVE LINKS —— */
const scrollProgress = document.getElementById('scroll-progress');
const nav            = document.getElementById('main-nav');
const backToTop      = document.getElementById('backToTop');
const sections       = document.querySelectorAll('section[id]');
const navLinks       = document.querySelectorAll('.nav-link');
const sectionDots    = document.querySelectorAll('.section-dot');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (scrollTop / docHeight * 100) + '%';
  nav.classList.toggle('scrolled', scrollTop > 60);
  backToTop.classList.toggle('show', scrollTop > 600);

  let current = '';
  sections.forEach(sec => {
    if (scrollTop >= sec.offsetTop - 180) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
  sectionDots.forEach(dot => dot.classList.toggle('active', dot.dataset.section === current));
}, { passive: true });

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* —— MOBILE MENU —— */
const hamburger  = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

/* —— PARTICLE CANVAS —— */
const pCanvas  = document.getElementById('particle-canvas');
const pCtx     = pCanvas.getContext('2d');
const isMobile = window.matchMedia('(max-width: 700px)').matches;
const PARTICLE_COUNT = isMobile ? 40 : 90;
const CONNECT_DIST   = isMobile ? 0 : 130; // skip O(n²) connection lines on mobile

function resizeParticles() { pCanvas.width = window.innerWidth; pCanvas.height = window.innerHeight; }
resizeParticles();
window.addEventListener('resize', resizeParticles, { passive: true });

const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  r: Math.random() * 1.5 + 0.3,
  vx: (Math.random() - 0.5) * 0.3,
  vy: (Math.random() - 0.5) * 0.3,
  o: Math.random() * 0.5 + 0.1
}));

function tickParticles() {
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
  for (const p of particles) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = pCanvas.width;  else if (p.x > pCanvas.width)  p.x = 0;
    if (p.y < 0) p.y = pCanvas.height; else if (p.y > pCanvas.height) p.y = 0;
    pCtx.beginPath();
    pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    pCtx.fillStyle = `rgba(124,109,250,${p.o})`;
    pCtx.fill();
  }
  if (CONNECT_DIST > 0) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          pCtx.beginPath();
          pCtx.moveTo(particles[i].x, particles[i].y);
          pCtx.lineTo(particles[j].x, particles[j].y);
          pCtx.strokeStyle = `rgba(124,109,250,${0.09 * (1 - dist / CONNECT_DIST)})`;
          pCtx.lineWidth = 0.5;
          pCtx.stroke();
        }
      }
    }
  }
}

/* —— TYPEWRITER —— */
const phrases = [
  'IT Student at UEF, Finland 🇫🇮',
  'IT Developer at DEVSiNC',
  'Harvard Aspire 2024 Alumni',
  'ESN Savo Board Member',
  'Web Developer & Problem Solver'
];
let phraseIdx = 0, charIdx = 0, isTyping = true;
const twEl = document.getElementById('typewriter');
function typeStep() {
  if (isTyping) {
    if (charIdx <= phrases[phraseIdx].length) {
      twEl.textContent = phrases[phraseIdx].slice(0, charIdx++);
      setTimeout(typeStep, 55);
    } else { isTyping = false; setTimeout(typeStep, 1800); }
  } else {
    if (charIdx > 0) {
      twEl.textContent = phrases[phraseIdx].slice(0, --charIdx);
      setTimeout(typeStep, 28);
    } else {
      isTyping = true;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeStep, 300);
    }
  }
}
typeStep();

/* —— VELOCITY SCROLL —— */
let scrollVel = 0, lastScrollY = 0;
window.addEventListener('scroll', () => {
  scrollVel = window.scrollY - lastScrollY;
  lastScrollY = window.scrollY;
}, { passive: true });

const track1 = document.getElementById('track1');
const track2 = document.getElementById('track2');
let t1pos = 0, t2pos = 0, half1 = 0, half2 = 0;
setTimeout(() => {
  if (track1) half1 = track1.scrollWidth / 2;
  if (track2) { half2 = track2.scrollWidth / 2; t2pos = -half2; }
}, 100);

function tickVelocity() {
  const speed = 1.5 + Math.abs(scrollVel) * 0.18;
  if (half1 > 0 && track1) {
    t1pos -= speed;
    if (t1pos <= -half1) t1pos += half1;
    track1.style.transform = `translateX(${t1pos}px)`;
  }
  if (half2 > 0 && track2) {
    t2pos += speed;
    if (t2pos >= 0) t2pos -= half2;
    track2.style.transform = `translateX(${t2pos}px)`;
  }
  scrollVel *= 0.92;
}

/* —— SCROLL REVEAL + COUNTER —— */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.classList.remove('from-top', 'from-bottom');
      e.target.querySelectorAll('[data-count]').forEach(animateCounter);
      if (e.target.hasAttribute('data-count')) animateCounter(e.target);
    } else {
      e.target.classList.remove('visible');
      const aboveViewport = e.boundingClientRect.top < 0;
      e.target.classList.toggle('from-top', aboveViewport);
      e.target.classList.toggle('from-bottom', !aboveViewport);
    }
  });
}, { threshold: 0.12, rootMargin: '-5% 0px -5% 0px' });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => revealObserver.observe(el));

function animateCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  let cur = 0;
  const step = Math.max(1, Math.floor(target / 30));
  const timer = setInterval(() => {
    cur += step;
    if (cur >= target) { cur = target; clearInterval(timer); }
    el.textContent = cur + suffix;
  }, 30);
}
document.querySelectorAll('.hero-stats [data-count]').forEach(el => {
  const heroObs = new IntersectionObserver(ents => {
    ents.forEach(en => { if (en.isIntersecting) animateCounter(el); });
  }, { threshold: 0.5 });
  heroObs.observe(el);
});

/* —— DRAGGABLE LANYARD —— */
let tickLanyard = () => {};
(function initLanyard() {
  const stage  = document.getElementById('lanyardStage');
  const canvas = document.getElementById('ropeCanvas');
  const card   = document.getElementById('idCard');
  if (!stage || !canvas || !card) return;

  const ctx  = canvas.getContext('2d');
  const holo = card.querySelector('.id-holo');

  /* ---- ROPE LAYER: wrapper keeps canvas + card in the same stacking context ---- */
  const layer = document.createElement('div');
  layer.id = 'ropeLayer';
  document.body.appendChild(layer);
  layer.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:50;';

  // move both canvas and card into the layer
  layer.appendChild(canvas);
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';

  layer.appendChild(card);
  card.style.position      = 'absolute';  // same positioning context as canvas
  card.style.pointerEvents = 'auto';
  card.style.touchAction   = 'none';
  card.style.zIndex        = '1';         // above canvas (default 0) within the layer

  /* ---- physics constants ---- */
  const SEGMENTS = 18, SEG_LEN = 9, GRAVITY = 0.75, FRICTION = 0.96, STIFFNESS = 40;
  let anchorX = 0, anchorY = 0;
  const points = [];
  for (let i = 0; i < SEGMENTS; i++) points.push({ x: 0, y: 0, ox: 0, oy: 0, pinned: i === 0 });
  const last = points[SEGMENTS - 1];

  /* ---- position helpers ---- */
  function resetToAnchor() {
    const sr = stage.getBoundingClientRect();
    anchorX = sr.left + sr.width / 2;
    anchorY = sr.top;
    for (let i = 0; i < SEGMENTS; i++) {
      const y = anchorY + i * SEG_LEN;
      points[i].x = anchorX; points[i].y = y;
      points[i].ox = anchorX; points[i].oy = y;
    }
  }
  resetToAnchor();
  card.style.left = last.x + 'px';
  card.style.top  = last.y + 'px';
  // subtle fade-in so the card doesn't flash in (it's no longer inside the animated stage)
  card.style.opacity = '0';
  requestAnimationFrame(() => {
    card.style.transition = 'opacity 0.7s ease 0.3s';
    card.style.opacity = '1';
  });

  function sizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function buildGradient() {
    const g = ctx.createLinearGradient(0, 0, 0, canvas.height);
    g.addColorStop(0, '#7c6dfa');
    g.addColorStop(1, '#4fc3f7');
    return g;
  }
  let ropeGrad = buildGradient();
  sizeCanvas();

  window.addEventListener('resize', () => {
    sizeCanvas();
    ropeGrad = buildGradient();
    const sr = stage.getBoundingClientRect();
    anchorX = sr.left + sr.width / 2;
    anchorY = sr.top;
    points[0].x = anchorX; points[0].y = anchorY;
    points[0].ox = anchorX; points[0].oy = anchorY;
    // if card is way off-screen after resize, reset it
    if (last.x < -300 || last.x > window.innerWidth + 300 ||
        last.y < -300 || last.y > window.innerHeight + 300) {
      resetToAnchor();
      card.style.left = last.x + 'px';
      card.style.top  = last.y + 'px';
    }
  }, { passive: true });

  /* ---- drag interaction ---- */
  let dragging = false, dragX = 0, dragY = 0;
  function pointerXY(e) {
    return e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
  }

  card.addEventListener('pointerdown', e => {
    dragging = true; last.pinned = true;
    const p = pointerXY(e); dragX = p.x; dragY = p.y;
    e.preventDefault();
  });

  window.addEventListener('pointermove', e => {
    if (!dragging) return;
    const p = pointerXY(e);
    dragX = Math.max(60, Math.min(window.innerWidth  - 60, p.x));
    dragY = Math.max(30, Math.min(window.innerHeight - 30, p.y));
  });

  function endDrag() {
    if (dragging) { dragging = false; last.pinned = false; }
  }
  window.addEventListener('pointerup',     endDrag);
  window.addEventListener('pointercancel', endDrag);
  window.addEventListener('blur',          endDrag);   // window loses focus → end drag

  card.addEventListener('dblclick', () => {
    resetToAnchor();
    card.style.left = last.x + 'px';
    card.style.top  = last.y + 'px';
  });

  /* ---- physics tick ---- */
  tickLanyard = function() {
    const sr = stage.getBoundingClientRect();
    anchorX = sr.left + sr.width / 2;
    anchorY = sr.top;

    // Verlet integration
    for (const p of points) {
      if (p.pinned) continue;
      const vx = (p.x - p.ox) * FRICTION;
      const vy = (p.y - p.oy) * FRICTION;
      p.ox = p.x; p.oy = p.y;
      p.x += vx; p.y += vy + GRAVITY;
    }
    if (dragging) { last.x = dragX; last.y = dragY; last.ox = dragX; last.oy = dragY; }

    // constraint solving
    for (let k = 0; k < STIFFNESS; k++) {
      for (let i = 0; i < SEGMENTS - 1; i++) {
        const a = points[i], b = points[i + 1];
        let dx = b.x - a.x, dy = b.y - a.y;
        let d = Math.hypot(dx, dy);
        if (d < 0.001) { dx = 0.01; dy = -0.01; d = Math.hypot(dx, dy); }
        const diff = (SEG_LEN - d) / d;
        const ox = dx * diff * 0.5, oy = dy * diff * 0.5;
        if (!a.pinned) { a.x -= ox; a.y -= oy; }
        if (!b.pinned) { b.x += ox; b.y += oy; }
      }
      points[0].x = anchorX; points[0].y = anchorY;
      if (dragging) { last.x = dragX; last.y = dragY; }
    }

    // render rope
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';

    ctx.strokeStyle = ropeGrad; ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < SEGMENTS; i++) ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < SEGMENTS; i++) ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();

    ctx.fillStyle = '#9b8df8';
    ctx.beginPath(); ctx.arc(anchorX, anchorY + 2, 5, 0, Math.PI * 2); ctx.fill();

    // position card — viewport coords because the layer is position:fixed inset:0
    const sl = points[SEGMENTS - 2];
    const angle = Math.atan2(last.y - sl.y, last.x - sl.x) - Math.PI / 2;
    card.style.left      = last.x + 'px';
    card.style.top       = last.y + 'px';
    card.style.transform = `translate(-50%,0) rotate(${angle}rad)`;
    if (holo) holo.style.transform = `rotate(${angle * 30}deg)`;
  };

  // initial swing-in
  setTimeout(() => {
    if (Math.abs(last.x - anchorX) < 10) last.x += 80;
  }, 1600);
})();

/* —— EXP CARD MOUSE GLOW —— */
document.querySelectorAll('.exp-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r    = card.getBoundingClientRect();
    const glow = card.querySelector('.exp-glow');
    if (glow) {
      glow.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100) + '%');
      glow.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
    }
  });
});

/* —— MAGNETIC + 3D SPRING CARDS —— */
let mouseGX = -99999, mouseGY = -99999;
window.addEventListener('mousemove', e => { mouseGX = e.clientX; mouseGY = e.clientY; }, { passive: true });
window.addEventListener('mouseout',  e => { if (!e.relatedTarget) { mouseGX = -99999; mouseGY = -99999; } });

const springCards = [];
function registerCards(selector, cfg) {
  document.querySelectorAll(selector).forEach(el => {
    el.style.transformStyle = 'preserve-3d';
    el.style.willChange     = 'transform, box-shadow';
    springCards.push({
      el, cfg,
      mx:0, my:0, rx:0, ry:0, sc:1, gz:0,
      vmx:0, vmy:0, vrx:0, vry:0, vsc:0, vgz:0,
      tmx:0, tmy:0, trx:0, try_:0, tsc:1, tgz:0,
      glow:0, vglow:0, tglow:0
    });
  });
}
registerCards('.skill-card',   { radius:230, pull:.32, maxPull:30, tilt:24, lift:1.07,  depth:48 });
registerCards('.exp-card',     { radius:280, pull:.26, maxPull:34, tilt:9,  lift:1.025, depth:0  });
registerCards('.edu-card',     { radius:250, pull:.30, maxPull:30, tilt:13, lift:1.035, depth:30 });
registerCards('.cert-card',    { radius:250, pull:.30, maxPull:30, tilt:13, lift:1.035, depth:30 });
registerCards('.info-card',    { radius:210, pull:.30, maxPull:26, tilt:11, lift:1.04,  depth:0  });
registerCards('.contact-link', { radius:210, pull:.42, maxPull:28, tilt:8,  lift:1.04,  depth:0  });

const clampV = (v, m) => Math.max(-m, Math.min(m, v));
const STIFF = 0.11, DAMP = 0.76;
function stepSpring(pos, vel, target) {
  vel = (vel + (target - pos) * STIFF) * DAMP;
  return [pos + vel, vel];
}

function tickSpring() {
  const vh = window.innerHeight;
  for (const c of springCards) {
    const r = c.el.getBoundingClientRect();
    if (r.bottom < -120 || r.top > vh + 120) {
      c.tmx = c.tmy = c.trx = c.try_ = c.tgz = c.tglow = 0; c.tsc = 1;
    } else {
      const cx = r.left + r.width  / 2 - c.mx;
      const cy = r.top  + r.height / 2 - c.my;
      const dx = mouseGX - cx, dy = mouseGY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < c.cfg.radius) {
        const f    = 1 - dist / c.cfg.radius;
        const ease = f * f * (3 - 2 * f);
        c.tmx  = clampV(dx * c.cfg.pull, c.cfg.maxPull) * ease;
        c.tmy  = clampV(dy * c.cfg.pull, c.cfg.maxPull) * ease;
        c.try_ = (dx  / (r.width  / 2)) * c.cfg.tilt * ease;
        c.trx  = (-dy / (r.height / 2)) * c.cfg.tilt * ease;
        c.tsc  = 1 + (c.cfg.lift - 1) * ease;
        c.tgz  = c.cfg.depth * ease;
        c.tglow = ease;
      } else {
        c.tmx = c.tmy = c.trx = c.try_ = c.tgz = c.tglow = 0; c.tsc = 1;
      }
    }
    [c.mx,   c.vmx]   = stepSpring(c.mx,   c.vmx,   c.tmx);
    [c.my,   c.vmy]   = stepSpring(c.my,   c.vmy,   c.tmy);
    [c.rx,   c.vrx]   = stepSpring(c.rx,   c.vrx,   c.trx);
    [c.ry,   c.vry]   = stepSpring(c.ry,   c.vry,   c.try_);
    [c.sc,   c.vsc]   = stepSpring(c.sc,   c.vsc,   c.tsc);
    [c.gz,   c.vgz]   = stepSpring(c.gz,   c.vgz,   c.tgz);
    [c.glow, c.vglow] = stepSpring(c.glow, c.vglow, c.tglow);

    c.el.style.transform =
      `perspective(820px) translate3d(${c.mx.toFixed(2)}px,${c.my.toFixed(2)}px,${c.gz.toFixed(2)}px) ` +
      `rotateX(${c.rx.toFixed(2)}deg) rotateY(${c.ry.toFixed(2)}deg) scale(${c.sc.toFixed(3)})`;
    if (c.glow > 0.003) {
      const g = c.glow;
      c.el.style.boxShadow =
        `${(-c.ry * 1.6).toFixed(1)}px ${(c.rx * 1.6 + 14 * g).toFixed(1)}px ${(40 * g).toFixed(0)}px rgba(124,109,250,${(0.38 * g).toFixed(3)}),` +
        `0 0 0 1px rgba(124,109,250,${(0.4 * g).toFixed(3)})`;
    } else {
      c.el.style.boxShadow = '';
    }
  }
}

/* —— PARALLAX FLOATING SHAPES ON SCROLL —— */
const floatShapes = document.querySelectorAll('.floating-shape');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  floatShapes.forEach((s, i) => {
    const depth = (i % 3 + 1) * 0.12;
    s.style.transform = `translateY(${y * depth}px) rotate(${y * 0.04 * (i + 1)}deg)`;
  });
}, { passive: true });

/* —— SKILL BARS —— */
const sbarObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.sbar-fill').forEach(bar => { bar.style.width = bar.dataset.width + '%'; });
      sbarObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });
document.querySelectorAll('.skills-bars').forEach(el => sbarObserver.observe(el));

/* —— CONTACT FORM (Formspree) —— */
const contactForm = document.getElementById('contactForm');
const cfStatus    = document.getElementById('cfStatus');
const cfSubmit    = document.getElementById('cfSubmit');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btnText = cfSubmit.querySelector('.cf-btn-text');
    cfSubmit.disabled = true; cfSubmit.classList.add('loading');
    btnText.textContent = 'Sending…';
    cfStatus.className = 'cf-status'; cfStatus.textContent = '';
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        contactForm.reset();
        cfStatus.className = 'cf-status success';
        cfStatus.textContent = '✓ Message sent! I\'ll get back to you as soon as possible.';
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Server error');
      }
    } catch {
      cfStatus.className = 'cf-status error';
      cfStatus.textContent = '✗ Something went wrong. Please email me directly at muneeb10305896@gmail.com';
    }
    cfSubmit.disabled = false; cfSubmit.classList.remove('loading');
    btnText.textContent = 'Send Message';
  });
}

/* ============================================
   MASTER ANIMATION LOOP — single rAF instead
   of 5 separate loops fighting each other
   ============================================ */
function tickCursorRing() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  ring.style.transform = `translate(${ringX - rHalf}px,${ringY - rHalf}px)`;
}

let rafPaused = false;
document.addEventListener('visibilitychange', () => {
  rafPaused = document.hidden;
  if (!rafPaused) requestAnimationFrame(masterTick);
});

function masterTick() {
  if (rafPaused) return;
  tickCursorRing();
  tickParticles();
  tickVelocity();
  tickLanyard();
  tickSpring();
  requestAnimationFrame(masterTick);
}
requestAnimationFrame(masterTick);
