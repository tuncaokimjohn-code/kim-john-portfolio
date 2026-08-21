const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll('.service-card, .project-card, .skill-group, .about-copy, .section-heading');
revealTargets.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('visible'));
}
