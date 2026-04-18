// ---- Star Canvas ----
(function initStars() {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  const COUNT = 130;

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
        r: Math.random() * 0.9 + 0.25,
        a: Math.random() * 0.32 + 0.05,
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
        // Animate the main line
        const line = anatomySvg.querySelector('.anatomy-line');
        if (line) line.classList.add('drawn');
        // Animate the fill
        const fill = anatomySvg.querySelector('.anatomy-fill-path');
        if (fill) fill.classList.add('drawn');
        // Animate phase cards
        document.querySelectorAll('.anatomy-phase').forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), 600 + i * 180);
        });
        arcObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });
  arcObs.observe(anatomySvg);
}


// ---- Newsletter Subscribe ----
async function handleSubscribe(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const input = form.querySelector('input[type="email"]');
  const email = input.value.trim();

  btn.disabled = true;
  btn.textContent = 'Joining…';

  try {
    const res = await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      btn.textContent = 'Thank you ✓';
      input.value = '';
    } else {
      btn.textContent = 'Try again';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = 'Try again';
    btn.disabled = false;
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
