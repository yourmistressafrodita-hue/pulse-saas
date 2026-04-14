/* ============================================================
   PULSE — app.js
   SPA Router · Dark Mode · Scroll Reveal · Counter Animations
   Accordion · Mobile Nav
   ============================================================ */

/* ==================== DARK MODE TOGGLE ==================== */
(function () {
  const root = document.documentElement;
  let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', currentTheme);

  function updateToggleIcon(toggle, theme) {
    if (!toggle) return;
    if (theme === 'dark') {
      toggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
      toggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      toggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      toggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  window.initThemeToggle = function () {
    const toggle = document.querySelector('[data-theme-toggle]');
    updateToggleIcon(toggle, currentTheme);
    if (toggle) {
      toggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', currentTheme);
        updateToggleIcon(toggle, currentTheme);
      });
    }
  };
})();

/* ==================== SPA ROUTER ==================== */
(function () {
  const PAGES = ['home', 'features', 'pricing', 'about'];
  const DEFAULT_PAGE = 'home';

  function getPage() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return PAGES.includes(hash) ? hash : DEFAULT_PAGE;
  }

  function navigate(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Show target page
    const target = document.getElementById('page-' + pageName);
    if (target) target.classList.add('active');
    // Update nav active state
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + pageName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Trigger reveals for the new page
    setTimeout(initRevealObserver, 50);
    // Trigger counters if stats section is visible
    setTimeout(initCounters, 100);
    // Close mobile nav
    closeMobileNav();
  }

  window.addEventListener('hashchange', () => navigate(getPage()));
  window.addEventListener('DOMContentLoaded', () => navigate(getPage()));
})();

/* ==================== SCROLL HEADER ==================== */
(function () {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
})();

/* ==================== MOBILE NAV ==================== */
function closeMobileNav() {
  const nav = document.querySelector('.mobile-nav');
  const hamburger = document.querySelector('.hamburger');
  if (nav) nav.classList.remove('open');
  if (hamburger) hamburger.classList.remove('open');
}

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      const header = document.querySelector('.site-header');
      const nav = document.querySelector('.mobile-nav');
      if (nav && nav.classList.contains('open')) {
        if (!header.contains(e.target) && !nav.contains(e.target)) {
          closeMobileNav();
        }
      }
    });
  });
})();

/* ==================== SCROLL REVEAL ==================== */
function initRevealObserver() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  if (!reveals.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', initRevealObserver);

/* ==================== ANIMATED COUNTERS ==================== */
function animateCounter(el) {
  if (el.dataset.animated) return;
  el.dataset.animated = 'true';

  const target = parseFloat(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
  const duration = 2000;
  const start = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const current = eased * target;

    let display;
    if (decimals > 0) {
      display = current.toFixed(decimals);
    } else if (target >= 1000) {
      display = Math.round(current).toLocaleString();
    } else {
      display = Math.round(current);
    }

    el.textContent = prefix + display + suffix;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]:not([data-animated])');
  if (!counters.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', initCounters);

/* ==================== FAQ ACCORDION ==================== */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        // Open clicked if was closed
        if (!isOpen) item.classList.add('open');
        // Update aria
        btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });
    });
  });
})();

/* ==================== INIT THEME TOGGLE ==================== */
document.addEventListener('DOMContentLoaded', () => {
  if (window.initThemeToggle) window.initThemeToggle();
});
