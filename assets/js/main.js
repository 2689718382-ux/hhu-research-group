const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

function closeMenu() {
  if (!navMenu || !menuToggle) return;
  navMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks = Array.from(document.querySelectorAll('.nav-menu a'));

function updateHeaderState() {
  const scrolled = window.scrollY > 10;
  if (header) header.classList.toggle('scrolled', scrolled);
  if (backToTop) backToTop.classList.toggle('show', window.scrollY > 520);
}

function updateActiveNav() {
  const current = sections
    .filter((section) => section.getBoundingClientRect().top <= 150)
    .pop();

  if (!current) return;
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${current.id}`;
    link.classList.toggle('active', isActive);
  });
}

window.addEventListener('scroll', () => {
  updateHeaderState();
  updateActiveNav();
}, { passive: true });

updateHeaderState();
updateActiveNav();

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.querySelectorAll('[data-scroll-target]').forEach((button) => {
  button.addEventListener('click', () => {
    const selector = button.getAttribute('data-scroll-target');
    const direction = Number(button.getAttribute('data-scroll-dir') || 1);
    const track = document.querySelector(selector);
    if (!track) return;

    const card = track.querySelector('article');
    const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  });
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}
