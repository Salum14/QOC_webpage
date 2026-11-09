// Hero slideshow: auto-advances every 6s, arrows reset the timer
(function () {
  const slides = document.querySelectorAll('.hero .slide');
  if (!slides.length) return;
  let current = 0;
  let timer;

  function show(i) {
    slides[current].classList.remove('is-active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('is-active');
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => show(current + 1), 6000);
  }

  document.querySelector('.hero .prev').addEventListener('click', () => { show(current - 1); restart(); });
  document.querySelector('.hero .next').addEventListener('click', () => { show(current + 1); restart(); });
  restart();
})();

// Services carousel: arrows scroll one card at a time
(function () {
  const track = document.querySelector('.service-track');
  if (!track) return;
  const step = () => track.querySelector('.service-card').offsetWidth + 24;
  document.querySelector('.carousel-arrows .prev').addEventListener('click', () => track.scrollBy({ left: -step() }));
  document.querySelector('.carousel-arrows .next').addEventListener('click', () => track.scrollBy({ left: step() }));
})();

// Mobile menu toggle and submenu expansion
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  const mobile = window.matchMedia('(max-width: 900px)');

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  menu.querySelectorAll('.has-sub > a').forEach(link => {
    link.addEventListener('click', e => {
      if (!mobile.matches) return;
      e.preventDefault();
      link.parentElement.classList.toggle('expanded');
    });
  });
})();

// Search box slides open from the icon
(function () {
  const form = document.querySelector('.search');
  const input = form.querySelector('input');
  form.querySelector('.search-toggle').addEventListener('click', () => {
    form.classList.toggle('open');
    if (form.classList.contains('open')) input.focus();
  });
  form.addEventListener('submit', e => e.preventDefault());
})();

// Fade sections in as they scroll into view
(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

// Contact form: validate required fields; not wired to a backend yet
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const note = document.getElementById('form-note');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach(el => {
      const bad = el.type === 'radio'
        ? !form.querySelector(`[name="${el.name}"]:checked`)
        : !el.checkValidity();
      el.classList.toggle('invalid', bad && el.type !== 'radio');
      if (bad) ok = false;
    });
    note.hidden = false;
    note.textContent = ok
      ? 'Thanks! This form is not connected to a server yet, so nothing was sent. Please call (301) 658-7141.'
      : 'Please fill in all required fields.';
    if (ok) form.reset();
  });
})();

document.getElementById('year').textContent = new Date().getFullYear();
