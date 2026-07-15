/* ==========================================================================
   PORTFOLIO DATA
   Edit this array to swap in real projects — cards and modal content are
   both generated from here, so the two never drift out of sync.
   `liveUrl` / `repoUrl` are placeholders ("#") — replace with real links.
   ========================================================================== */


const projectData = [
  {
    id: 'northwind',
    title: 'Ace Your Exams with Africa’s Smartest AI',
    tags: ['React', 'TypeScript', 'Bootstrap'],
    thumbColors: ['#E3B341', '#F0C55A'],
    thumbIcon: 'chart',
    summary: 'Built for every African student. Personalized learning, exams- standard practice, and human-like explanations to help you succeed in WAEC, JAMB, NECO & more.',
    description:
      'Designed and developed a responsive educational platform using React and Vite, built for African ' +
      'students to access personalized learning, exam-standard practice, and human-like explanations for ' +
      'WAEC, JAMB, NECO, and other major examinations. Implemented reusable components, intuitive ' +
      'navigation, responsive layouts, and optimized performance to deliver a fast, engaging, and seamless' + 
      'exam preparation more accessible across all devices.',
    impact: '↓ 40% initial load time · adopted by 3 teams',
    liveUrl: 'https://aivana-learn-2alf0b4a3-joshutiks-projects.vercel.app/?#',
    repoUrl: 'https://github.com/joshutik/Aivana-learn/tree/main'
  },
  {
    id: 'fernweh',
    title: 'Save.Invest.Grow.',
    tags: ['Vue 3', 'Pinia', 'PWA'],
    thumbColors: ['#56D4DD', '#7EE787'],
    thumbIcon: 'route',
    summary: 'Easybillz Cooperative is a community designed for individuals and businesses to help them grow and manage their bills and finances easily and effectively.',
    description:
      'Built a modern React + Vite landing page for EasyBilz that highlights the companys services, value ' +
      'proposition, and call-to-action through a clean, responsive design. Focused on component-based' +
      'architecture, fast page performance, intuitive navigation, and mobile-first responsiveness to create a ' +
      'professional online presence.',
    impact: '15k+ installs · 4.7★ average rating',
    liveUrl: 'https://easybilz-mainpage-git-main-joshutiks-projects.vercel.app/',
    repoUrl: 'https://github.com/joshutik/Easybilz-main'
  },
  {
    id: 'pixelkit',
    title: 'Trendlaw — Responsive WordPress Site',
    tags: ['React', 'Storybook', 'TypeScript'],
    thumbColors: ['#F293C9', '#E3B341'],
    thumbIcon: 'grid',
    summary: 'An open-source, accessible React component library with full Storybook documentation.',
    description:
      'Designed and built a professional WordPress website for Trenlaw that showcases the firms legal services,' +
      'practice areas, and contact information through a clean, responsive interface. Customized the theme, ' +
      'structured content for easy navigation, optimized performance and SEO, and implemented responsive' +
      'layouts to ensure a seamless user experience across desktop and mobile devices.',
    impact: '35% increase in client inquiries · reducing page load times by 40%.',
    liveUrl: 'https://trendlawfirm.com/',
    repoUrl: '#'
  }
  // {
  //   id: 'beacon',
  //   title: 'Beacon — Accessibility Auditor',
  //   tags: ['JavaScript', 'React', 'HTML5', 'React Bootstrap'],
  //   thumbColors: ['#7EE787', '#56D4DD'],
  //   thumbIcon: 'shield',
  //   summary: 'A browser extension that scans any page for WCAG violations and generates a shareable report.',
  //   description:
  //     'Built a Chrome extension for a digital agency that runs automated WCAG 2.1 checks on any page, ' +
  //     'highlights violations directly in the DOM, and exports a client-ready PDF report. Written in ' +
  //     'vanilla JavaScript to keep the extension lightweight and dependency-free.',
  //   impact: '↓ 60% audit time · used on 100+ client sites',
  //   liveUrl: '#',
  //   repoUrl: '#'
  // }
];

/* Small inline-icon paths keyed by thumbIcon name, drawn on top of each
   project's gradient thumbnail so every card gets a distinct, on-theme visual
   without needing real screenshot assets. */
const THUMB_ICONS = {
  chart: '<path d="M20 70 L20 50 M40 70 L40 35 M60 70 L60 45 M80 70 L80 25" stroke="rgba(13,17,23,0.75)" stroke-width="7" stroke-linecap="round"/>',
  route: '<circle cx="18" cy="60" r="6" fill="rgba(13,17,23,0.75)"/><circle cx="82" cy="30" r="6" fill="rgba(13,17,23,0.75)"/><path d="M18 60 Q 50 20 82 30" stroke="rgba(13,17,23,0.75)" stroke-width="5" fill="none" stroke-dasharray="2 10" stroke-linecap="round"/>',
  grid: '<rect x="18" y="20" width="26" height="26" rx="4" fill="rgba(13,17,23,0.75)"/><rect x="56" y="20" width="26" height="26" rx="4" fill="rgba(13,17,23,0.5)"/><rect x="18" y="54" width="26" height="26" rx="4" fill="rgba(13,17,23,0.5)"/><rect x="56" y="54" width="26" height="26" rx="4" fill="rgba(13,17,23,0.75)"/>',
  shield: '<path d="M50 18 L78 28 V52 C78 68 66 78 50 84 C34 78 22 68 22 52 V28 Z" fill="none" stroke="rgba(13,17,23,0.75)" stroke-width="5"/><path d="M38 52 L47 61 L64 40" stroke="rgba(13,17,23,0.75)" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
};

/**
 * Builds a small gradient SVG thumbnail for a project so every card has a
 * distinct visual without requiring uploaded screenshots. Swap this for a
 * real <img> tag pointing at a screenshot whenever one is available.
 */
function buildThumbSVG(project) {
  const [c1, c2] = project.thumbColors;
  const icon = THUMB_ICONS[project.thumbIcon] || '';
  return `
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${project.title} preview">
      <defs>
        <linearGradient id="grad-${project.id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#grad-${project.id})"/>
      ${icon}
    </svg>
  `;
}

/* ==========================================================================
   RENDER PROJECT CARDS
   ========================================================================== */
function renderProjects() {
  const grid = document.getElementById('project-grid');
  const frag = document.createDocumentFragment();

  projectData.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${index * 70}ms`;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${project.title}`);
    card.dataset.projectId = project.id;

    card.innerHTML = `
      <div class="project-thumb">${buildThumbSVG(project)}</div>
      <div class="project-body">
        <div class="project-tags">
          ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.summary}</p>
        <div class="project-footer">
          <span class="project-impact">${project.impact}</span>
          <span class="project-more">Details →</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(project.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(project.id);
      }
    });

    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

/* ==========================================================================
   PROJECT DETAIL MODAL
   ========================================================================== */
const overlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalCloseBtn = document.getElementById('modal-close');
let lastFocusedEl = null;

function openModal(projectId) {
  const project = projectData.find(p => p.id === projectId);
  if (!project) return;

  lastFocusedEl = document.activeElement;

  modalContent.innerHTML = `
    <div class="modal-thumb">${buildThumbSVG(project)}</div>
    <h3 id="modal-title">${project.title}</h3>
    <p class="modal-role">${project.tags.join(' · ')}</p>
    <p>${project.description}</p>
    <p class="modal-section-label">Impact</p>
    <p>${project.impact}</p>
    <div class="modal-links">
      <a class="btn btn-primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live site</a>
      <a class="btn btn-ghost" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">View code</a>
    </div>
  `;

  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  modalCloseBtn.focus();
}

function closeModal() {
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
  if (lastFocusedEl) lastFocusedEl.focus();
}

modalCloseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
});

/* ==========================================================================
   MOBILE NAV TOGGLE
   ========================================================================== */
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ==========================================================================
   HEADER STATE + ACTIVE NAV LINK ON SCROLL
   ========================================================================== */
const header = document.getElementById('site-header');
const sections = ['hero', 'skills', 'projects', 'contact'].map(id => document.getElementById(id));
const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
const backToTop = document.getElementById('back-to-top');

function onScroll() {
  const scrollY = window.scrollY;

  header.style.borderColor = scrollY > 10 ? 'var(--border)' : 'var(--border-soft)';
  backToTop.classList.toggle('is-visible', scrollY > 600);

  let currentId = sections[0].id;
  const scrollPos = scrollY + window.innerHeight * 0.3;
  sections.forEach(section => {
    if (section && scrollPos >= section.offsetTop) currentId = section.id;
  });

  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active-link', isActive);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==========================================================================
   SCROLL-REVEAL ANIMATIONS
   ========================================================================== */
function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
}

/* ==========================================================================
   MARK REVEAL TARGETS THAT AREN'T PROJECT CARDS (skill cards, section blocks)
   ========================================================================== */
function markRevealTargets() {
  document.querySelectorAll('.skill-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 60}ms`;
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  markRevealTargets();
  initReveal();
  onScroll();
  document.getElementById('year').textContent = new Date().getFullYear();
});
