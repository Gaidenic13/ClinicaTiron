/**
 * Clinica Tiron — Main Entry Point
 */

import './styles/globals.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import initWebGL from './webgl/background.js';

gsap.registerPlugin(ScrollTrigger);

// ── DOM Ready ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveals();
  initConditionSearch();
  initBookingForm();
  initWebGL();
});

// ── Mobile menu ────────────────────────────────────────────────────────────
function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', openMenu);
  mobileClose?.addEventListener('click', closeMenu);

  function openMenu() {
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Expose globally for inline onclick in HTML
  window.closeMobile = closeMenu;

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
  });
}

// ── GSAP ScrollTrigger section reveals ────────────────────────────────────
function initScrollReveals() {
  // Batch single .reveal elements
  ScrollTrigger.batch('.reveal', {
    onEnter: (els) => {
      gsap.to(els, {
        opacity:  1,
        y:        0,
        duration: 0.65,
        ease:     'cubic-bezier(0.4, 0, 0.2, 1)',
        stagger:  0.07,
      });
    },
    start:  'top 88%',
    once:   true,
  });

  // Path cards — stagger from grid
  gsap.utils.toArray('.path-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 18 },
      {
        opacity:  1,
        y:        0,
        duration: 0.5,
        ease:     'cubic-bezier(0.4, 0, 0.2, 1)',
        delay:    i * 0.06,
        scrollTrigger: {
          trigger: '.path-grid',
          start:   'top 85%',
          once:    true,
        },
      }
    );
  });

  // Steps — stagger
  gsap.utils.toArray('.step').forEach((step, i) => {
    gsap.fromTo(step,
      { opacity: 0, y: 14 },
      {
        opacity:  1,
        y:        0,
        duration: 0.45,
        ease:     'cubic-bezier(0.4, 0, 0.2, 1)',
        delay:    i * 0.07,
        scrollTrigger: {
          trigger: '.steps',
          start:   'top 85%',
          once:    true,
        },
      }
    );
  });

  // Condition cards
  gsap.utils.toArray('.condition-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 18 },
      {
        opacity:  1,
        y:        0,
        duration: 0.5,
        ease:     'cubic-bezier(0.4, 0, 0.2, 1)',
        delay:    i * 0.07,
        scrollTrigger: {
          trigger: '.conditions-grid',
          start:   'top 85%',
          once:    true,
        },
      }
    );
  });

  // Trust cards
  gsap.utils.toArray('.trust-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 18 },
      {
        opacity:  1,
        y:        0,
        duration: 0.5,
        ease:     'cubic-bezier(0.4, 0, 0.2, 1)',
        delay:    i * 0.07,
        scrollTrigger: {
          trigger: '.trust-grid',
          start:   'top 85%',
          once:    true,
        },
      }
    );
  });

  // Tech items
  gsap.utils.toArray('.tech-item').forEach((item, i) => {
    gsap.fromTo(item,
      { opacity: 0, x: 12 },
      {
        opacity:  1,
        x:        0,
        duration: 0.45,
        ease:     'cubic-bezier(0.4, 0, 0.2, 1)',
        delay:    i * 0.08,
        scrollTrigger: {
          trigger: '.tech-items',
          start:   'top 85%',
          once:    true,
        },
      }
    );
  });
}

// ── Condition search filter ────────────────────────────────────────────────
function initConditionSearch() {
  const input = document.getElementById('conditionSearch');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.condition-card').forEach((card) => {
      const match = card.textContent.toLowerCase().includes(q);
      card.style.display = match ? '' : 'none';
    });
  });
}

// ── Booking form ───────────────────────────────────────────────────────────
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name  = form.querySelector('#name').value.trim();
    const phone = form.querySelector('#phone').value.trim();

    if (!name || !phone) {
      // Inline error — no alert
      [{ id: 'name', val: name }, { id: 'phone', val: phone }].forEach(({ id, val }) => {
        const input = form.querySelector(`#${id}`);
        if (!val) {
          input.style.borderColor = 'rgba(239,68,68,.6)';
          input.addEventListener('input', () => {
            input.style.borderColor = '';
          }, { once: true });
        }
      });
      return;
    }

    const btn = form.querySelector('.form-submit');
    const orig = btn.innerHTML;

    btn.innerHTML = `
      <iconify-icon icon="solar:check-circle-linear" width="16" height="16"></iconify-icon>
      Cerere trimisă cu succes!
    `;
    btn.style.background = '#059669';
    btn.disabled = true;

    // TODO: replace with real API call
    // fetch('/api/booking', { method: 'POST', body: new FormData(form) })

    setTimeout(() => {
      form.reset();
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  });
}
