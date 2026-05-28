/* ============================================
   MUNEEB AHMED BUTT — PORTFOLIO JAVASCRIPT
   ============================================ */

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

// Update coordinates using pageX/pageY to account for scrolling
document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
}, { passive: true });

// Ultra-smooth GPU-accelerated cursor animation at 240fps
function renderCursor() {
  // Main cursor - instant position update with GPU-accelerated transform
  if (cursor) {
    cursor.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;
  }

  // Ring cursor - smooth easing with faster response
  if (ring) {
    ringX += (mouseX - ringX) * 0.15;  // Faster easing for smoother follow
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
  }

  requestAnimationFrame(renderCursor);
}
renderCursor();

const hoverables = 'a, button, .badge, .skill-pill, .exp-tag, .contact-link, .pc-contact-btn';
document.querySelectorAll(hoverables).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    ring.style.width = '50px';
    ring.style.height = '50px';
    ring.style.borderColor = 'rgba(124,109,250,.8)';
  }, { passive: true });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderColor = 'rgba(124,109,250,.5)';
  }, { passive: true });
});

/* ── NAV SCROLL SHRINK ── */
let ticking = false;
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  if (!ticking) {
    ticking = requestAnimationFrame(() => {
      document.getElementById('main-nav').classList.toggle('scrolled', lastScrollY > 60);
      ticking = false;
    });
  }
}, { passive: true });

/* ── MOBILE MENU ── */
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

/* ── PARTICLE CANVAS ── */
const canvas = document.getElementById('particle-canvas');
const ctx    = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = Array.from({ length: 20 }, () => ({
  x:  Math.random() * window.innerWidth,
  y:  Math.random() * window.innerHeight,
  r:  Math.random() * 1.2 + 0.2,
  vx: (Math.random() - 0.5) * 0.15,
  vy: (Math.random() - 0.5) * 0.15,
  o:  Math.random() * 0.2 + 0.05
}));

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;  if (p.x > canvas.width)  p.x = 0;
    if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(124,109,250,${p.o})`;
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ── TYPEWRITER EFFECT ── */
const phrases = [
  'IT Student at UEF, Finland 🇫🇮',
  'IT Developer at DEVSiNC',
  'Harvard Aspire 2024 Alumni',
  'ESN Savo Board Member',
  'Web Developer & Problem Solver'
];
let pi = 0, ci = 0, typing = true;
const tw = document.getElementById('typewriter');

function typeStep() {
  if (typing) {
    if (ci <= phrases[pi].length) {
      tw.textContent = phrases[pi].slice(0, ci++);
      setTimeout(typeStep, 55);
    } else {
      typing = false;
      setTimeout(typeStep, 1800);
    }
  } else {
    if (ci > 0) {
      tw.textContent = phrases[pi].slice(0, --ci);
      setTimeout(typeStep, 28);
    } else {
      typing = true;
      pi = (pi + 1) % phrases.length;
      setTimeout(typeStep, 300);
    }
  }
}
typeStep();

/* ── VELOCITY SCROLL ── */
let scrollVelocity = 0;
window.addEventListener('scroll', () => {
  scrollVelocity = window.scrollY - lastScrollY;
  lastScrollY = window.scrollY;
}, { passive: true });

const track1 = document.getElementById('track1');
const track2 = document.getElementById('track2');
let t1pos = 0, t2pos = 0;

// Calculate track widths
let half1 = 0, half2 = 0;
setTimeout(() => {
  if (track1) {
    half1 = track1.scrollWidth / 2;
  }
  if (track2) {
    half2 = track2.scrollWidth / 2;
    // CRITICAL FIX: Start the right-moving track shifted to the left 
    // so it doesn't immediately show an empty gap!
    t2pos = -half2; 
  }
}, 100);

function updateVelocityTracks() {
  const speed = 1 + Math.abs(scrollVelocity) * 0.05;

  // Track 1: Moving Left
  if (half1 > 0 && track1) {
    t1pos -= speed; 
    if (t1pos <= -half1) {
      t1pos += half1; // Wrap seamlessly when half the track is hidden
    }
    track1.style.transform = `translateX(${t1pos}px)`;
  }

  // Track 2: Moving Right
  if (half2 > 0 && track2) {
    t2pos += speed; 
    if (t2pos >= 0) {
      t2pos -= half2; // Wrap seamlessly back to the left
    }
    track2.style.transform = `translateX(${t2pos}px)`;
  }

  scrollVelocity *= 0.9;
  requestAnimationFrame(updateVelocityTracks);
}
updateVelocityTracks();

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.05 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
  revealObserver.observe(el);
});

/* ── HOLOGRAPHIC PROFILE CARD ── */
const pcWrap = document.getElementById('pcWrap');
const pcCard = document.getElementById('pcCard');

if (pcWrap && pcCard) {
  const clamp   = (v, mn = 0, mx = 100) => Math.min(Math.max(v, mn), mx);
  const round   = (v, p = 3) => parseFloat(v.toFixed(p));
  const adjust  = (v, fmn, fmx, tmn, tmx) => round(tmn + ((tmx - tmn) * (v - fmn)) / (fmx - fmn));
  const easeInOutCubic = x => x < 0.5 ? 4*x*x*x : 1 - Math.pow(-2*x+2, 3) / 2;
  let pcRaf = null;

  function setCardProps(ox, oy) {
    const w = pcCard.clientWidth, h = pcCard.clientHeight;
    const px = clamp((100 / w) * ox), py = clamp((100 / h) * oy);
    const cx = px - 50, cy = py - 50;
    const props = {
      '--pointer-x':           `${px}%`,
      '--pointer-y':           `${py}%`,
      '--background-x':        `${adjust(px, 0, 100, 35, 65)}%`,
      '--background-y':        `${adjust(py, 0, 100, 35, 65)}%`,
      '--pointer-from-center': `${clamp(Math.hypot(py-50, px-50) / 50, 0, 1)}`,
      '--pointer-from-top':    `${py / 100}`,
      '--pointer-from-left':   `${px / 100}`,
      '--rotate-x':            `${round(-(cx / 5))}deg`,
      '--rotate-y':            `${round(cy / 4)}deg`,
      '--card-opacity':        '1'
    };
    Object.entries(props).forEach(([k, v]) => pcWrap.style.setProperty(k, v));
  }

  function smoothTo(dur, sx, sy) {
    const st = performance.now();
    const tx = pcWrap.clientWidth / 2, ty = pcWrap.clientHeight / 2;
    function loop(now) {
      const prog = clamp((now - st) / dur, 0, 1);
      const ep   = easeInOutCubic(prog);
      setCardProps(adjust(ep, 0, 1, sx, tx), adjust(ep, 0, 1, sy, ty));
      if (prog < 1) pcRaf = requestAnimationFrame(loop);
    }
    pcRaf = requestAnimationFrame(loop);
  }

  let pcMx = 0, pcMy = 0, pcMoveRaf = null;
  pcCard.addEventListener('pointermove', e => {
    const r = pcCard.getBoundingClientRect();
    pcMx = e.clientX - r.left;
    pcMy = e.clientY - r.top;
    if (!pcMoveRaf) {
      pcMoveRaf = requestAnimationFrame(() => {
        setCardProps(pcMx, pcMy);
        pcMoveRaf = null;
      });
    }
  });
  pcCard.addEventListener('pointerenter', () => {
    if (pcRaf) cancelAnimationFrame(pcRaf);
    pcWrap.classList.add('pc-active');
    pcCard.classList.add('pc-active');
  });
  pcCard.addEventListener('pointerleave', e => {
    smoothTo(600, e.offsetX, e.offsetY);
    pcWrap.classList.remove('pc-active');
    pcCard.classList.remove('pc-active');
  });

  // Initial animation
  setTimeout(() => {
    const ix = pcWrap.clientWidth - 70, iy = 60;
    setCardProps(ix, iy);
    smoothTo(1500, ix, iy);
  }, 500);
}

/* ── 3D SKILL CARD TILT ── */
document.querySelectorAll('.skill-card').forEach(card => {
  let mx = 0, my = 0, raf = null;
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    mx = (e.clientX - r.left) / r.width - 0.5;
    my = (e.clientY - r.top) / r.height - 0.5;
    if (!raf) {
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(600px) rotateX(${-my * 12}deg) rotateY(${mx * 12}deg) translateZ(8px)`;
        card.style.boxShadow = `${-mx*15}px ${-my*15}px 30px rgba(124,109,250,.15)`;
        raf = null;
      });
    }
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
    if (raf) cancelAnimationFrame(raf);
  });
});

/* ── EXP CARD MOUSE GLOW ── */
document.querySelectorAll('.exp-card').forEach(card => {
  const glow = card.querySelector('.exp-glow');
  let gmx = 50, gmy = 50, gRaf = null;
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    gmx = ((e.clientX - r.left) / r.width * 100);
    gmy = ((e.clientY - r.top) / r.height * 100);
    if (!gRaf && glow) {
      gRaf = requestAnimationFrame(() => {
        glow.style.setProperty('--mx', gmx + '%');
        glow.style.setProperty('--my', gmy + '%');
        gRaf = null;
      });
    }
  });
});

/* ── EDU CARD TILT ── */
document.querySelectorAll('.edu-card, .cert-card').forEach(card => {
  let ex = 0, ey = 0, eRaf = null;
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    ex = (e.clientX - r.left) / r.width - 0.5;
    ey = (e.clientY - r.top) / r.height - 0.5;
    if (!eRaf) {
      eRaf = requestAnimationFrame(() => {
        card.style.transform = `translateY(-3px) perspective(800px) rotateX(${-ey*4}deg) rotateY(${ex*4}deg)`;
        eRaf = null;
      });
    }
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    if (eRaf) cancelAnimationFrame(eRaf);
  });
});

/* ── CONTACT LINK HOVER GLOW ── */
document.querySelectorAll('.contact-link').forEach(link => {
  let cmx = 0, cmy = 0, cRaf = null;
  link.addEventListener('mousemove', e => {
    const r = link.getBoundingClientRect();
    cmx = ((e.clientX - r.left) / r.width * 100);
    cmy = ((e.clientY - r.top) / r.height * 100);
    if (!cRaf) {
      cRaf = requestAnimationFrame(() => {
        link.style.setProperty('--mx', cmx + '%');
        link.style.setProperty('--my', cmy + '%');
        cRaf = null;
      });
    }
  });
  link.addEventListener('mouseleave', () => {
    link.style.setProperty('--mx', '100%');
    link.style.setProperty('--my', '100%');
    if (cRaf) cancelAnimationFrame(cRaf);
  });
});

/* ── DRAGGABLE RIBBON CARD ── */
const rContainer = document.getElementById('ribbonContainer');
const rCanvas = document.getElementById('ribbon-canvas');
const rCard = document.getElementById('ribbonCard');
const rCtx = rCanvas.getContext('2d');

if (rContainer && rCard && rCanvas) {
  rCanvas.width = rContainer.clientWidth;
  rCanvas.height = rContainer.clientHeight;

  const ribbon = {
    x: rCanvas.width / 2,
    y: 80,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    friction: 0.92,
    gravity: 0.15,
    springStrength: 0.08
  };

  const homeX = rCanvas.width / 2;
  const homeY = 80;

  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  rCard.addEventListener('pointerdown', (e) => {
    isDragging = true;
    const rect = rCard.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left - 60;
    dragOffsetY = e.clientY - rect.top - 70;
  });

  document.addEventListener('pointermove', (e) => {
    if (isDragging) {
      ribbon.x = e.clientX - dragOffsetX;
      ribbon.y = e.clientY - dragOffsetY;
      ribbon.vx = 0;
      ribbon.vy = 0;
    }
  });

  document.addEventListener('pointerup', () => {
    isDragging = false;
  });

  function drawRibbon() {
    rCtx.clearRect(0, 0, rCanvas.width, rCanvas.height);

    const anchorX = rCanvas.width / 2;
    const anchorY = 40;

    rCtx.strokeStyle = 'rgba(124,109,250,0.6)';
    rCtx.lineWidth = 3;
    rCtx.lineCap = 'round';
    rCtx.lineJoin = 'round';

    const cp1x = anchorX + (ribbon.x - anchorX) * 0.3;
    const cp1y = anchorY + (ribbon.y - anchorY) * 0.2;
    const cp2x = anchorX + (ribbon.x - anchorX) * 0.7;
    const cp2y = anchorY + (ribbon.y - anchorY) * 0.8;

    rCtx.beginPath();
    rCtx.moveTo(anchorX, anchorY);
    rCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ribbon.x, ribbon.y);
    rCtx.stroke();

    rCtx.strokeStyle = 'rgba(79,195,247,0.4)';
    rCtx.lineWidth = 1.5;
    rCtx.beginPath();
    rCtx.moveTo(anchorX, anchorY);
    rCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ribbon.x, ribbon.y);
    rCtx.stroke();
  }

  function updatePhysics() {
    if (!isDragging) {
      const dx = homeX - ribbon.x;
      const dy = homeY - ribbon.y;
      ribbon.ax = dx * ribbon.springStrength;
      ribbon.ay = dy * ribbon.springStrength + ribbon.gravity;

      ribbon.vx += ribbon.ax;
      ribbon.vy += ribbon.ay;
      ribbon.vx *= ribbon.friction;
      ribbon.vy *= ribbon.friction;

      ribbon.x += ribbon.vx;
      ribbon.y += ribbon.vy;

      const dist = Math.hypot(dx, dy);
      if (dist < 0.5 && Math.hypot(ribbon.vx, ribbon.vy) < 0.5) {
        ribbon.x = homeX;
        ribbon.y = homeY;
        ribbon.vx = 0;
        ribbon.vy = 0;
      }
    }

    rCard.style.transform = `translate3d(${ribbon.x - 60}px, ${ribbon.y - 70}px, 0)`;

    const angle = Math.atan2(ribbon.vy, ribbon.vx);
    rCard.style.filter = `drop-shadow(${Math.cos(angle) * 8}px ${Math.sin(angle) * 8}px 12px rgba(124,109,250,0.3))`;
  }

  function animate() {
    drawRibbon();
    updatePhysics();
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    rCanvas.width = rContainer.clientWidth;
    rCanvas.height = rContainer.clientHeight;
  });
}