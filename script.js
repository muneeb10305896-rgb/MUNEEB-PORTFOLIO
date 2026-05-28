/* ============================================
   MUNEEB AHMED BUTT — PORTFOLIO JAVASCRIPT
   ============================================ */

/* —— PRELOADER —— */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
  }, 1400);
});

/* —— CUSTOM CURSOR —— */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});
setInterval(() => {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
}, 16);

const hoverables = 'a, button, .badge, .skill-pill, .exp-tag, .contact-link, .id-card';
document.querySelectorAll(hoverables).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '20px'; cursor.style.height = '20px';
    ring.style.width    = '50px'; ring.style.height   = '50px';
    ring.style.borderColor = 'rgba(124,109,250,.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '12px'; cursor.style.height = '12px';
    ring.style.width    = '36px'; ring.style.height   = '36px';
    ring.style.borderColor = 'rgba(124,109,250,.5)';
  });
});

/* —— SCROLL PROGRESS + NAV + BACK TO TOP + ACTIVE LINKS —— */
const scrollProgress = document.getElementById('scroll-progress');
const nav            = document.getElementById('main-nav');
const backToTop      = document.getElementById('backToTop');
const sections       = document.querySelectorAll('section[id]');
const navLinks       = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (scrollTop / docHeight * 100) + '%';

  nav.classList.toggle('scrolled', scrollTop > 60);
  backToTop.classList.toggle('show', scrollTop > 600);

  // active nav link
  let current = '';
  sections.forEach(sec => {
    if (scrollTop >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

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
const pCanvas = document.getElementById('particle-canvas');
const pCtx    = pCanvas.getContext('2d');
function resizeParticles() { pCanvas.width = window.innerWidth; pCanvas.height = window.innerHeight; }
resizeParticles();
window.addEventListener('resize', resizeParticles);

const particles = Array.from({ length: 90 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  r: Math.random() * 1.5 + 0.3,
  vx: (Math.random() - 0.5) * 0.3,
  vy: (Math.random() - 0.5) * 0.3,
  o: Math.random() * 0.5 + 0.1
}));
function drawParticles() {
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = pCanvas.width;  if (p.x > pCanvas.width)  p.x = 0;
    if (p.y < 0) p.y = pCanvas.height; if (p.y > pCanvas.height) p.y = 0;
    pCtx.beginPath();
    pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    pCtx.fillStyle = `rgba(124,109,250,${p.o})`;
    pCtx.fill();
  });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        pCtx.beginPath();
        pCtx.moveTo(particles[i].x, particles[i].y);
        pCtx.lineTo(particles[j].x, particles[j].y);
        pCtx.strokeStyle = `rgba(124,109,250,${0.09 * (1 - dist / 130)})`;
        pCtx.lineWidth = 0.5;
        pCtx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

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
});
const track1 = document.getElementById('track1');
const track2 = document.getElementById('track2');
let t1 = 0, t2 = 0;
setInterval(() => {
  const speed = 1.5 + Math.abs(scrollVel) * 0.18;
  t1 -= speed; t2 += speed;
  scrollVel *= 0.92;
  if (Math.abs(t1) >= track1.scrollWidth / 2) t1 = 0;
  if (Math.abs(t2) >= track2.scrollWidth / 2) t2 = 0;
  track1.style.transform = `translateX(${t1}px)`;
  track2.style.transform = `translateX(${t2}px)`;
}, 16);

/* —— SCROLL REVEAL + COUNTER —— */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // animate counters inside
      e.target.querySelectorAll('[data-count]').forEach(animateCounter);
      if (e.target.hasAttribute('data-count')) animateCounter(e.target);
    } else {
      // replay the reveal each time it re-enters the viewport
      e.target.classList.remove('visible');
    }
  });
}, { threshold: 0.12 });
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
// also observe the hero stat counter directly
document.querySelectorAll('.hero-stats [data-count]').forEach(el => {
  const heroObs = new IntersectionObserver(ents => {
    ents.forEach(en => { if (en.isIntersecting) animateCounter(el); });
  }, { threshold: 0.5 });
  heroObs.observe(el);
});

/* ============================================
   DRAGGABLE LANYARD — VERLET PHYSICS
   ============================================ */
(function initLanyard() {
  const stage  = document.getElementById('lanyardStage');
  const canvas = document.getElementById('ropeCanvas');
  const card   = document.getElementById('idCard');
  if (!stage || !canvas || !card) return;
  const ctx = canvas.getContext('2d');

  function sizeCanvas() { canvas.width = stage.clientWidth; canvas.height = stage.clientHeight; }
  sizeCanvas();

  const SEGMENTS = 18;
  const SEG_LEN  = 9;
  const GRAVITY  = 0.85;
  const FRICTION = 0.99;
  const STIFFNESS = 18;

  let anchorX = stage.clientWidth / 2;
  let anchorY = 0;

  const points = [];
  for (let i = 0; i < SEGMENTS; i++) {
    const y = anchorY + i * SEG_LEN;
    points.push({ x: anchorX, y: y, ox: anchorX, oy: y, pinned: i === 0 });
  }
  const last = points[SEGMENTS - 1];

  let dragging = false, dragX = 0, dragY = 0;

  function pointerXY(e) {
    const r = stage.getBoundingClientRect();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: cx - r.left, y: cy - r.top };
  }

  card.addEventListener('pointerdown', e => {
    dragging = true; last.pinned = true;
    stage.style.cursor = 'grabbing';
    const p = pointerXY(e); dragX = p.x; dragY = p.y;
    e.preventDefault();
  });
  window.addEventListener('pointermove', e => {
    if (!dragging) return;
    const p = pointerXY(e); dragX = p.x; dragY = p.y;
  });
  window.addEventListener('pointerup', () => {
    if (dragging) { dragging = false; last.pinned = false; stage.style.cursor = 'grab'; }
  });

  window.addEventListener('resize', () => { sizeCanvas(); anchorX = stage.clientWidth / 2; });

  function simulate() {
    for (const p of points) {
      if (p.pinned) continue;
      const vx = (p.x - p.ox) * FRICTION;
      const vy = (p.y - p.oy) * FRICTION;
      p.ox = p.x; p.oy = p.y;
      p.x += vx; p.y += vy + GRAVITY;
    }
    if (dragging) { last.x = dragX; last.y = dragY; last.ox = dragX; last.oy = dragY; }
    for (let k = 0; k < STIFFNESS; k++) {
      for (let i = 0; i < points.length - 1; i++) {
        const a = points[i], b = points[i + 1];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || 0.001;
        const diff = (SEG_LEN - d) / d;
        const ox = dx * diff * 0.5, oy = dy * diff * 0.5;
        if (!a.pinned) { a.x -= ox; a.y -= oy; }
        if (!b.pinned) { b.x += ox; b.y += oy; }
      }
      points[0].x = anchorX; points[0].y = anchorY;
      if (dragging) { last.x = dragX; last.y = dragY; }
    }
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#7c6dfa'); grad.addColorStop(1, '#4fc3f7');
    ctx.strokeStyle = grad; ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();
    // highlight strip
    ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();
    // anchor knob
    ctx.fillStyle = '#9b8df8';
    ctx.beginPath(); ctx.arc(anchorX, anchorY + 2, 5, 0, Math.PI * 2); ctx.fill();

    const secondLast = points[SEGMENTS - 2];
    const angle = Math.atan2(last.y - secondLast.y, last.x - secondLast.x) - Math.PI / 2;
    card.style.left = last.x + 'px';
    card.style.top  = last.y + 'px';
    card.style.transform = `translate(-50%, 0) rotate(${angle}rad)`;
    const holo = card.querySelector('.id-holo');
    if (holo) holo.style.transform = `rotate(${angle * 30}deg)`;
  }

  (function loop() { simulate(); render(); requestAnimationFrame(loop); })();

  // little nudge so visitors notice it swings
  setTimeout(() => { last.x += 80; }, 1600);
})();

/* —— EXP CARD MOUSE GLOW —— */
document.querySelectorAll('.exp-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const glow = card.querySelector('.exp-glow');
    if (glow) {
      glow.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      glow.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    }
  });
});

/* —— 3D SKILL CARD TILT —— */
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `perspective(600px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) translateZ(8px)`;
    card.style.boxShadow = `${-x * 15}px ${-y * 15}px 30px rgba(124,109,250,.15)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; card.style.boxShadow = ''; });
});

/* —— EDU / CERT CARD TILT —— */
document.querySelectorAll('.edu-card, .cert-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `translateY(-3px) perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});
