// ---- Star Canvas ----
(function initStars() {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  const COUNT = 210;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;
    generateStars();
  }

  function generateStars() {
    stars = [];
    for (let i = 0; i < COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.5 + 0.08,
        speed: Math.random() * 0.0008 + 0.0003,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      const flicker = Math.sin(t * s.speed * 1000 + s.phase) * 0.15 + 0.85;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(237,232,223,${s.a * flicker})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  requestAnimationFrame(draw);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });
})();


// ---- Navigation Scroll ----
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}


// ---- Mobile Menu ----
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}


// ---- Scroll Reveal ----
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObs.observe(el));


// ---- Anatomy Arc Animation ----
const anatomySvg = document.getElementById('anatomySvg');
if (anatomySvg) {
  const arcObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        anatomySvg.querySelectorAll('.anatomy-line').forEach(l => l.classList.add('drawn'));
        const fill = anatomySvg.querySelector('.anatomy-fill-path');
        if (fill) fill.classList.add('drawn');
        document.querySelectorAll('.anatomy-phase').forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), 600 + i * 180);
        });
        arcObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });
  arcObs.observe(anatomySvg);
}

// ---- Anatomy phase hover linking (dots ⇄ cards) ----
(function initAnatomyHoverLink() {
  const dots = document.querySelectorAll('.anatomy-dot[data-phase]');
  const cards = document.querySelectorAll('.anatomy-phase[data-phase]');
  const halos = document.querySelectorAll('.anatomy-halo[data-phase]');
  if (!dots.length && !cards.length) return;

  const setActive = (phase, isActive) => {
    if (!phase) return;
    document
      .querySelectorAll(`[data-phase="${phase}"]`)
      .forEach(el => el.classList.toggle('is-active', isActive));
  };

  const bind = (el) => {
    const phase = el.getAttribute('data-phase');
    if (!phase) return;
    el.addEventListener('mouseenter', () => setActive(phase, true));
    el.addEventListener('mouseleave', () => setActive(phase, false));
    el.addEventListener('focusin', () => setActive(phase, true));
    el.addEventListener('focusout', () => setActive(phase, false));
  };

  dots.forEach(bind);
  cards.forEach(bind);
  halos.forEach(bind);
})();


// ---- Newsletter Subscribe ----
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function handleSubscribe(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const input = form.querySelector('input[type="email"]');
  const status = form.parentElement.querySelector('.loop__status');
  const email = input.value.trim();

  const setStatus = (tone, message) => {
    if (!status) return;
    status.textContent = message;
    status.dataset.tone = tone;
  };

  if (!email) {
    setStatus('error', 'Please enter your email address.');
    input.focus();
    return;
  }
  if (!EMAIL_RE.test(email)) {
    setStatus('error', "That doesn't look like a valid email address.");
    input.focus();
    return;
  }

  const originalLabel = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Joining…';
  setStatus('pending', '');

  try {
    const res = await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    let data = {};
    try { data = await res.json(); } catch { /* ignore */ }

    if (res.ok) {
      btn.textContent = 'Subscribed ✓';
      input.value = '';
      setStatus(
        'success',
        data.message === 'Already subscribed'
          ? "You're already on the list — thanks!"
          : "You're on the list. Talk soon."
      );
      return;
    }

    btn.disabled = false;
    btn.textContent = originalLabel;
    setStatus('error', data.error || "Something went wrong. Please try again.");
  } catch {
    btn.disabled = false;
    btn.textContent = originalLabel;
    setStatus('error', "Network error. Please check your connection and try again.");
  }
}


// ---- Smooth anchor clicks ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
