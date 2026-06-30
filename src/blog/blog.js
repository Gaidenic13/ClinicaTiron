/**
 * BLOG ENGINE – Clinica Tiron
 * ================================
 * Handles both:
 *   - blog.html         (data-page="listing")
 *   - blog-post.html    (data-page="post")
 *
 * Imports gsap + ScrollTrigger for scroll reveals (same pattern as main.js).
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ARTICLES,
  CATEGORIES,
  getArticle,
  getArticlesByCategory,
  getCategoryLabel,
  getCategoryIcon,
} from './articles-data.js';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────
   UTILITIES
────────────────────────────────────────────── */
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name) || '';
}

function categoryBadge(key) {
  const icon = getCategoryIcon(key);
  const label = getCategoryLabel(key);
  return `<span class="blog-category-chip">
    <iconify-icon icon="${icon}" width="11" height="11"></iconify-icon>
    ${label}
  </span>`;
}

/* ──────────────────────────────────────────────
   REVEAL ANIMATIONS (same pattern as main.js)
────────────────────────────────────────────── */
function initReveals() {
  ScrollTrigger.batch('.reveal', {
    onEnter: els => gsap.fromTo(els,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
    ),
    start: 'top 92%',
    once: true,
  });

  // Stagger for blog cards
  ScrollTrigger.batch('.blog-card', {
    onEnter: els => gsap.fromTo(els,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' }
    ),
    start: 'top 94%',
    once: true,
  });
}

/* ──────────────────────────────────────────────
   LISTING PAGE
────────────────────────────────────────────── */
function initListing() {
  const activeCategory = getParam('category') || 'all';

  renderFilterPills(activeCategory);
  renderArticleGrid(activeCategory);

  // After DOM update, re-init reveals
  setTimeout(initReveals, 50);
}

function renderFilterPills(activeCategory) {
  const container = document.getElementById('blog-filter-pills');
  if (!container) return;

  let html = `<button class="blog-filter-chip ${activeCategory === 'all' ? 'active' : ''}"
    onclick="window.__blogFilter('all')">Toate articolele</button>`;

  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const count = ARTICLES.filter(a => a.category === key).length;
    if (!count) return;
    html += `<button class="blog-filter-chip ${activeCategory === key ? 'active' : ''}"
      onclick="window.__blogFilter('${key}')">
      <iconify-icon icon="${cat.icon}" width="12" height="12"></iconify-icon>
      ${cat.label}
      <span class="blog-filter-count">${count}</span>
    </button>`;
  });

  container.innerHTML = html;
}

window.__blogFilter = function(cat) {
  const url = new URL(window.location.href);
  if (cat === 'all') {
    url.searchParams.delete('category');
  } else {
    url.searchParams.set('category', cat);
  }
  window.history.pushState({}, '', url);
  initListing();
};

function renderArticleGrid(activeCategory) {
  const container  = document.getElementById('blog-article-grid');
  const countEl    = document.getElementById('blog-article-count');
  if (!container) return;

  const articles = getArticlesByCategory(activeCategory);

  if (countEl) {
    const label = activeCategory === 'all'
      ? 'toate categoriile'
      : getCategoryLabel(activeCategory);
    countEl.textContent = `${articles.length} articol${articles.length !== 1 ? 'e' : ''} — ${label}`;
  }

  if (!articles.length) {
    container.innerHTML = `<div class="blog-no-results">
      <iconify-icon icon="solar:magnifer-linear" width="32" height="32" style="color:var(--tertiary);margin-bottom:12px"></iconify-icon>
      <p>Niciun articol găsit pentru această categorie.</p>
    </div>`;
    return;
  }

  container.innerHTML = articles.map((article, i) => {
    const isFeatured = i === 0 && activeCategory === 'all' && article.isFeatured;
    return renderCard(article, isFeatured);
  }).join('');
}

function renderCard(article, featured = false) {
  const img = article.featuredImage
    ? `<div class="blog-card-img"><img src="${article.featuredImage}" alt="${article.featuredImageAlt}" loading="lazy"></div>`
    : '';

  return `
<a href="/blog-post.html?slug=${article.slug}" class="blog-card${featured ? ' blog-card--featured' : ''} reveal">
  ${img}
  <div class="blog-card-body">
    ${categoryBadge(article.category)}
    <h2 class="blog-card-title">${article.title}</h2>
    <p class="blog-card-excerpt">${article.shortDesc}</p>
    <div class="blog-card-meta">
      <span class="blog-card-author">
        <iconify-icon icon="solar:user-circle-linear" width="13" height="13"></iconify-icon>
        ${article.author}
      </span>
      <span class="blog-card-reading">
        <iconify-icon icon="solar:clock-circle-linear" width="13" height="13"></iconify-icon>
        ${article.readingTime} min
      </span>
    </div>
  </div>
</a>`;
}

/* ──────────────────────────────────────────────
   POST PAGE
────────────────────────────────────────────── */
function initPost() {
  const slug    = getParam('slug');
  const article = slug ? getArticle(slug) : null;

  if (!article) {
    renderPostError(slug);
    return;
  }

  // ── Document meta ──
  document.title = `${article.title} | Clinica Tiron – Ozonoterapie București`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = article.shortDesc;

  // OG tags
  setMeta('og:title',       article.title + ' | Clinica Tiron');
  setMeta('og:description', article.shortDesc);
  setMeta('og:type',        'article');
  if (article.featuredImage) setMeta('og:image', article.featuredImage);

  // Keywords meta
  if (article.keywords?.length) {
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) {
      kw = document.createElement('meta');
      kw.name = 'keywords';
      document.head.appendChild(kw);
    }
    kw.content = article.keywords.join(', ');
  }

  // ── JSON-LD Article schema ──
  injectSchema({
    "@context":       "https://schema.org",
    "@type":          "MedicalWebPage",
    "headline":       article.title,
    "description":    article.shortDesc,
    "url":            window.location.href,
    "inLanguage":     "ro",
    "datePublished":  "2024-01-01",
    "dateModified":   "2024-01-01",
    "image":          article.featuredImage || "",
    "author": {
      "@type": "Physician",
      "name":  article.author,
      "url":   "https://clinicatiron.ro/#doctor"
    },
    "publisher": {
      "@type":  "MedicalBusiness",
      "name":   "Clinica Tiron",
      "url":    "https://clinicatiron.ro",
      "logo": {
        "@type": "ImageObject",
        "url":   "https://clinicatiron.ro/favicon.svg"
      },
      "address": {
        "@type":           "PostalAddress",
        "streetAddress":   "Str. Știrbei Vodă 94",
        "addressLocality": "București",
        "addressCountry":  "RO"
      }
    },
    "about": {
      "@type": "MedicalCondition",
      "name":  getCategoryLabel(article.category)
    }
  });

  // ── Breadcrumb ──
  const bc = document.getElementById('post-breadcrumb-title');
  if (bc) bc.textContent = article.title;

  // ── Hero ──
  const catEl   = document.getElementById('post-category-badge');
  const titleEl = document.getElementById('post-title');
  const descEl  = document.getElementById('post-desc');

  if (catEl) {
    catEl.innerHTML = `
      <iconify-icon icon="${getCategoryIcon(article.category)}" width="13" height="13"></iconify-icon>
      ${getCategoryLabel(article.category)}`;
  }
  if (titleEl) titleEl.textContent = article.title;
  if (descEl)  descEl.textContent  = article.shortDesc;

  // ── Meta bar ──
  const authorEl = document.getElementById('post-author');
  const rtEl     = document.getElementById('post-reading-time');
  if (authorEl) authorEl.innerHTML = `
    <iconify-icon icon="solar:user-circle-bold-duotone" width="15" height="15" style="color:var(--tertiary)"></iconify-icon>
    ${article.author}`;
  if (rtEl) rtEl.innerHTML = `
    <iconify-icon icon="solar:clock-circle-linear" width="15" height="15" style="color:var(--tertiary)"></iconify-icon>
    ${article.readingTime} min citire`;

  // ── Featured image ──
  const imgEl = document.getElementById('post-featured-image');
  if (imgEl) {
    if (article.featuredImage) {
      imgEl.innerHTML = `<img src="${article.featuredImage}" alt="${article.featuredImageAlt}" style="width:100%;height:100%;object-fit:cover">`;
      imgEl.style.display = 'block';
    } else {
      imgEl.style.display = 'none';
    }
  }

  // ── Body ──
  const bodyEl = document.getElementById('post-body');
  if (bodyEl) {
    if (article.bodyContent) {
      bodyEl.innerHTML = article.bodyContent;
    } else {
      bodyEl.innerHTML = `
        <div class="info-box">
          <p>Conținutul complet al acestui articol este în curs de pregătire.
          Reveniți curând sau contactați-ne direct pentru informații despre
          <strong>${article.title}</strong>.</p>
        </div>
        <p style="margin-top:20px;color:#6B7280;font-size:14px">
          Sursă originală:
          <a href="${article.sourceUrl}" target="_blank" rel="noopener"
             style="color:var(--secondary)">${article.sourceUrl}</a>
        </p>`;
    }
  }

  // ── Related ──
  renderRelated(article);

  setTimeout(initReveals, 80);
}

function renderRelated(current) {
  const container = document.getElementById('related-grid');
  const section   = document.getElementById('related-section');
  if (!container) return;

  const related = ARTICLES
    .filter(a => a.category === current.category && a.slug !== current.slug)
    .slice(0, 3);

  if (!related.length) {
    if (section) section.style.display = 'none';
    return;
  }

  container.innerHTML = related.map(a => renderCard(a, false)).join('');
}

function renderPostError(slug) {
  const titleEl = document.getElementById('post-title');
  const bodyEl  = document.getElementById('post-body');
  if (titleEl) titleEl.textContent = 'Articol negăsit';
  if (bodyEl) bodyEl.innerHTML = `
    <div class="warning-box">
      <p>⚠️ Articolul cu identificatorul „${slug || 'necunoscut'}" nu a fost găsit.</p>
    </div>
    <p style="margin-top:20px"><a href="/blog.html" style="color:var(--secondary)">
      ← Înapoi la lista de articole
    </a></p>`;
}

/* ──────────────────────────────────────────────
   HELPERS
────────────────────────────────────────────── */
function setMeta(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function injectSchema(obj) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(obj, null, 2);
  document.head.appendChild(script);
}

/* ──────────────────────────────────────────────
   INIT
────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'listing') initListing();
  if (page === 'post')    initPost();
});
