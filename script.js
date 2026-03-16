/* =====================================================
   SITI PER TUTTI — Script v2
   ===================================================== */

// ── Video testimonianze ──
function playVideo(cardId) {
  const card    = document.getElementById(cardId);
  const video   = card.querySelector('video');
  const overlay = card.querySelector('.video-overlay');
  overlay.classList.add('hidden');
  video.controls = true;
  video.play();
}

// ── Scroll progress bar ──
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
  const scrollTop = document.documentElement.scrollTop;
  const docHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (docHeight > 0) {
    scrollProgress.style.width = (scrollTop / docHeight * 100) + '%';
  }
}

// ── Nav: effetto scroll + parallax hero bg ──
const nav    = document.getElementById('nav');
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 30);
  updateScrollProgress();

  // Parallax — solo su viewport larghi per evitare problemi mobile
  if (heroBg && window.innerWidth > 768) {
    heroBg.style.transform = `translateY(${y * 0.22}px)`;
  }
}, { passive: true });

// ── Nav: menu mobile ──
const toggle   = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Staggered reveal con IntersectionObserver ──
const revealEls = document.querySelectorAll(
  '.service-card, .why-item, .contact-form, .contact-aside, .section-header, .why-header'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

let staggerIdx = 0;
revealEls.forEach((el) => {
  el.classList.add('reveal');
  el.style.setProperty('--i', String(staggerIdx % 4));
  staggerIdx++;
  revealObserver.observe(el);
});


// ── Form: feedback invio ──
const form      = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.textContent = 'Invio in corso...';
    submitBtn.disabled    = true;

    try {
      const response = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        formSuccess.style.display = 'block';
        submitBtn.style.display   = 'none';
      } else {
        submitBtn.textContent = 'Errore — riprova';
        submitBtn.disabled    = false;
      }
    } catch {
      submitBtn.textContent = 'Invia richiesta';
      submitBtn.disabled    = false;
      alert('Configura prima Formspree nell\'attributo action del form (vedi istruzioni in index.html).');
    }
  });
}
