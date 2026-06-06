// Mobile menu toggle
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {

  // Typed.js
  if (typeof Typed !== 'undefined' && document.getElementById('typed-el')) {
    new Typed('#typed-el', {
      strings: ['Web Developer.', 'PHP Developer.', 'Laravel Expert.', 'Freelancer.', 'Full-Stack Dev.'],
      typeSpeed: 65,
      backSpeed: 35,
      loop: true
    });
  }

  // Skill bars animate on scroll
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          const target = bar.getAttribute('data-width');
          if (target) bar.style.width = target;
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

  // Nav active link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      const href = a.getAttribute('href');
      a.style.color = href === '#' + current ? 'var(--accent)' : '';
    });
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('open');
    });
  });

});
