/**
 * Academic Portfolio Site-Wide Logic
 * Dr. Sresha Yadav — IIIT Naya Raipur
 */

// --- Citations Database ---
const citations = {
  "pub-1": {
    title: "Team-member exchange and innovative work behaviour",
    apa: "Ghosh, V., Bharadwaja, M., Yadav, S., & Kabra, G. (2021). Team-member exchange and innovative work behaviour: The role of psychological empowerment and creative self-efficacy. International Journal of Innovation Science, 13(4), 481-499.",
    bibtex: `@article{ghosh2021teammember,
  title={Team-member exchange and innovative work behaviour: The role of psychological empowerment and creative self-efficacy},
  author={Ghosh, Vinit and Bharadwaja, Manaswita and Yadav, Sresha and Kabra, Gaurav},
  journal={International Journal of Innovation Science},
  volume={13},
  number={4},
  pages={481--499},
  year={2021},
  publisher={Emerald Publishing Limited},
  doi={10.1108/IJIS-09-2020-0164}
}`
  },
  "pub-2": {
    title: "Innovative Pedagogical Apparatus (Patent No. 473301)",
    apa: "Ojha, M., & Yadav, S. (2023). Innovative Pedagogical Apparatus / Assistive Learning Device (Indian Patent No. 473301). Indian Patent Office.",
    bibtex: `@misc{ojha2023patent,
  title={Innovative Pedagogical Apparatus / Assistive Learning Device},
  author={Ojha, M. and Yadav, Sresha},
  year={2023},
  note={Indian Patent No. 473301, Application No. 202221041826}
}`
  },
  "pub-3": {
    title: "Impact of Perceived Stress on General Health",
    apa: "Ghosh, S., Ghosh, V., & Kumar, I. (2018). Impact of Perceived Stress on General Health: A Study on Engineering Students. PEOPLE: International Journal of Social Sciences, 4(2), 1084-1096.",
    bibtex: `@article{ghosh2018stress,
  title={Impact of Perceived Stress on General Health: A Study on Engineering Students},
  author={Ghosh, Sresha and Ghosh, Vinit and Kumar, I.},
  journal={PEOPLE: International Journal of Social Sciences},
  volume={4},
  number={2},
  pages={1084--1096},
  year={2018},
  doi={10.20319/pijss.2018.42.10841096}
}`
  },
  "pub-4": {
    title: "Eye-Tracking Technology & Font Types Reading Efficiency",
    apa: "Tripathi, D., Raj, Y., Singh, A., & Yadav, S. (2023). Using Eye-Tracking Technology to Study the Impact of Font Types on Online Reading Efficiency. HCI & Digital Pedagogies Colloquium.",
    bibtex: `@inproceedings{tripathi2023eyetracking,
  title={Using Eye-Tracking Technology to Study the Impact of Font Types on Online Reading Efficiency},
  author={Tripathi, Dhyanendra and Raj, Yash and Singh, Anurag and Yadav, Sresha},
  booktitle={HCI \\& Digital Pedagogies Colloquium},
  year={2023}
}`
  },
  "pub-5": {
    title: "Influence Tactics Used by Entrepreneurs",
    apa: "Singh, L., & Yadav, S. (2020). A Study of Influence Tactics Used by Entrepreneurs. AMC Indian Journal of Entrepreneurship, 5(2), 24-38.",
    bibtex: `@article{singh2020influence,
  title={A Study of Influence Tactics Used by Entrepreneurs},
  author={Singh, Lakshaya and Yadav, Sresha},
  journal={AMC Indian Journal of Entrepreneurship},
  volume={5},
  number={2},
  pages={24--38},
  year={2020},
  doi={10.17010/amcije/2020/v5i2/152918}
}`
  },
  "pub-6": {
    title: "Emancipation of Women in Tagore's The Wife's Letter",
    apa: "Ghosh, S. (2017). Emancipation of Women in Tagore's The Wife's Letter (Streer Patra). Journal of Teaching and Research in English Literature, 9(2), 14-22.",
    bibtex: `@article{ghosh2017tagore,
  title={Emancipation of Women in Tagore's The Wife's Letter (Streer Patra)},
  author={Ghosh, Sresha},
  journal={Journal of Teaching and Research in English Literature},
  volume={9},
  number={2},
  pages={14--22},
  year={2017}
}`
  },
  "pub-7": {
    title: "An Ecocritical Reading of Ruskin Bond's Our Trees Still Grow in Dehra",
    apa: "Ghosh, S. (2016). An Ecocritical Reading of Ruskin Bond's Our Trees Still Grow in Dehra. Gnosis: International Journal of English Language and Literature, 1(3), 45-56.",
    bibtex: `@article{ghosh2016bond,
  title={An Ecocritical Reading of Ruskin Bond's Our Trees Still Grow in Dehra},
  author={Ghosh, Sresha},
  journal={Gnosis: International Journal of English Language and Literature},
  volume={1},
  number={3},
  pages={45--56},
  year={2016}
}`
  }
};

// --- DOM Elements ---
const themeToggle = document.getElementById('themeToggle');
const citationDialog = document.getElementById('citationDialog');
const citeDialogTitle = document.getElementById('citeDialogTitle');
const citationCodeBlock = document.getElementById('citationCodeBlock');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const copyCiteBtn = document.getElementById('copyCiteBtn');
const tabBtns = document.querySelectorAll('.dialog-tabs .tab-btn');
const toast = document.getElementById('toast');
const heroBanner = document.getElementById('heroBanner');

let currentPubId = null;
let currentFormat = 'bibtex';

// --- Theme Logic ---
function initTheme() {
  const savedTheme = localStorage.getItem('minimal-theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle?.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme');
    const target = active === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('minimal-theme', target);
  });
}

// --- Citation Dialog Logic ---
function initCitations() {
  document.querySelectorAll('.cite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pubId = e.currentTarget.getAttribute('data-id');
      const pub = citations[pubId];
      if (!pub) return;

      currentPubId = pubId;
      currentFormat = 'bibtex';
      citeDialogTitle.textContent = `Cite: ${pub.title}`;
      
      tabBtns.forEach(t => t.classList.toggle('active', t.getAttribute('data-format') === 'bibtex'));
      citationCodeBlock.textContent = pub.bibtex;

      citationDialog.showModal();
    });
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentFormat = e.currentTarget.getAttribute('data-format');

      if (currentPubId && citations[currentPubId]) {
        citationCodeBlock.textContent = citations[currentPubId][currentFormat] || citations[currentPubId].bibtex;
      }
    });
  });

  copyCiteBtn?.addEventListener('click', () => {
    const text = citationCodeBlock.textContent;
    navigator.clipboard.writeText(text).then(() => {
      showToast('Citation copied to clipboard');
      citationDialog.close();
    });
  });

  closeDialogBtn?.addEventListener('click', () => {
    citationDialog.close();
  });

  citationDialog?.addEventListener('click', (e) => {
    const rect = citationDialog.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      citationDialog.close();
    }
  });

  // --- Single-Section Tabbed View Switching Logic ---
  const sections = document.querySelectorAll('.academic-section');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  function scrollToContentIfMobile() {
    if (window.innerWidth <= 860) {
      const contentMain = document.querySelector('.content-main');
      if (contentMain) {
        const navHeight = document.querySelector('.academic-navbar')?.offsetHeight || 60;
        const targetTop = contentMain.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });
      }
    }
  }

  function switchSection(targetId, userInitiated = false) {
    if (!targetId) targetId = 'about';

    // Hide all sections, show active section
    let found = false;
    sections.forEach(section => {
      const isMatch = section.getAttribute('id') === targetId;
      section.classList.toggle('active-section', isMatch);
      if (isMatch) found = true;
    });

    // Fallback to about if not found
    if (!found) {
      targetId = 'about';
      const aboutSec = document.getElementById('about');
      if (aboutSec) aboutSec.classList.add('active-section');
    }

    // Update active nav links (both desktop and mobile)
    desktopNavLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === targetId);
    });

    mobileNavLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === targetId);
    });

    // Close mobile drawer on selection
    closeMobileDrawer();

    // Trigger smooth cascading reveals for the activated section
    refreshActiveReveals();

    // On mobile, automatically and smoothly scroll down to content when user selects a menu option
    if (userInitiated) {
      setTimeout(() => {
        scrollToContentIfMobile();
      }, 50);
    }
  }

  // Mobile Drawer Toggle Handlers
  function toggleMobileDrawer() {
    const isOpen = mobileNavDrawer?.classList.contains('is-open');
    if (isOpen) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  }

  function openMobileDrawer() {
    mobileNavDrawer?.classList.add('is-open');
    mobileMenuToggle?.classList.add('is-active');
    mobileMenuToggle?.setAttribute('aria-expanded', 'true');
    mobileNavDrawer?.setAttribute('aria-hidden', 'false');
  }

  function closeMobileDrawer() {
    mobileNavDrawer?.classList.remove('is-open');
    mobileMenuToggle?.classList.remove('is-active');
    mobileMenuToggle?.setAttribute('aria-expanded', 'false');
    mobileNavDrawer?.setAttribute('aria-hidden', 'true');
  }

  // --- Left Contact Drawer Logic (Mobile) ---
  const mobileContactBtn = document.getElementById('mobileContactBtn');
  const mobileContactDrawerOverlay = document.getElementById('mobileContactDrawerOverlay');
  const mobileContactDrawerPanel = document.getElementById('mobileContactDrawerPanel');
  const closeContactDrawerBtn = document.getElementById('closeContactDrawerBtn');

  function openLeftContactDrawer() {
    mobileContactDrawerOverlay?.classList.add('is-open');
    mobileContactDrawerOverlay?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLeftContactDrawer() {
    mobileContactDrawerOverlay?.classList.remove('is-open');
    mobileContactDrawerOverlay?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  mobileContactBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    openLeftContactDrawer();
  });

  closeContactDrawerBtn?.addEventListener('click', () => {
    closeLeftContactDrawer();
  });

  mobileContactDrawerOverlay?.addEventListener('click', (e) => {
    if (mobileContactDrawerPanel && !mobileContactDrawerPanel.contains(e.target)) {
      closeLeftContactDrawer();
    }
  });

  // Close left contact drawer on esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLeftContactDrawer();
      closeMobileDrawer();
    }
  });

  // If clicking section link inside left contact drawer
  document.querySelectorAll('.drawer-section-link').forEach(link => {
    link.addEventListener('click', () => {
      closeLeftContactDrawer();
    });
  });

  mobileMenuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileDrawer();
  });

  // Close drawer on click outside
  document.addEventListener('click', (e) => {
    if (mobileNavDrawer?.classList.contains('is-open')) {
      if (!mobileNavDrawer.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        closeMobileDrawer();
      }
    }
  });

  // Listen to all anchor clicks targeting sections (brand logo, desktop/mobile nav links + inline links)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement && targetElement.classList.contains('academic-section')) {
          e.preventDefault();
          history.pushState(null, '', href);
          switchSection(targetId, true);
        }
      }
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'about';
    switchSection(hash);
  });

  // Initial section load
  const initialHash = window.location.hash.replace('#', '') || 'about';
  switchSection(initialHash);
}

// --- Minimal Toast ---
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// --- Modern Torch / Spotlight Hover Effect ---
function initTorchHover() {
  const spotlightTargets = document.querySelectorAll('.credentials-strip, .editorial-entry, .teaching-record, .biography-card');
  spotlightTargets.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', `-999px`);
      card.style.setProperty('--mouse-y', `-999px`);
    });
  });
}

// --- Expert Scroll Progress & Kinetic Back-to-Top Engine ---
function initScrollProgressAndBackToTop() {
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const progressRingCircle = document.getElementById('progressRingCircle');
  const circumference = 113.1; // 2 * PI * 18

  let ticking = false;

  function updateScrollMetrics() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;

    // 1. Update Header Hairline Progress Bar
    if (scrollProgressBar) {
      scrollProgressBar.style.transform = `scaleX(${scrollPercent})`;
    }

    // 2. Update Back to Top Floating Ring & Visibility
    if (backToTopBtn && progressRingCircle) {
      const offset = circumference - (scrollPercent * circumference);
      progressRingCircle.style.strokeDashoffset = offset;
      backToTopBtn.classList.toggle('is-visible', scrollTop > 280);
    }

    // 3. Cinematic Desktop Parallax on Hero Banner
    const bannerImage = document.querySelector('.banner-image');
    if (bannerImage && window.innerWidth > 860 && scrollTop < 450) {
      bannerImage.style.transform = `translateY(${scrollTop * 0.18}px) scale(${1 + scrollTop * 0.00015})`;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollMetrics);
      ticking = true;
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// --- Smooth Intersection Scroll Reveal Engine ---
let revealObserver = null;
function initScrollRevealObserver() {
  const revealTargets = document.querySelectorAll(
    '.editorial-entry, .teaching-record, .scholarly-entry, .credentials-strip, .biography-card, .contact-content-block, .lead-about-grid'
  );

  if ('IntersectionObserver' in window) {
    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealTargets.forEach(el => {
      el.classList.add('scroll-reveal');
      revealObserver.observe(el);
    });
  } else {
    revealTargets.forEach(el => el.classList.add('is-revealed'));
  }
}

// Retrigger reveals when switching tabs
function refreshActiveReveals() {
  setTimeout(() => {
    const activeSection = document.querySelector('.academic-section.active-section');
    if (activeSection) {
      const targets = activeSection.querySelectorAll('.editorial-entry, .teaching-record, .scholarly-entry, .credentials-strip, .biography-card, .contact-content-block, .lead-about-grid');
      targets.forEach((el, index) => {
        el.classList.add('scroll-reveal');
        setTimeout(() => {
          el.classList.add('is-revealed');
        }, index * 60);
      });
    }
  }, 60);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCitations();
  initTorchHover();
  initScrollProgressAndBackToTop();
  initScrollRevealObserver();
});
