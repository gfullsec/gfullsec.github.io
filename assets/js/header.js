const resetScroll = () => window.scrollTo(0, 0);
const languagePreferenceKey = 'language';
const currentPath = window.location.pathname.replace(/\/$/, '/index.html');
const isEnglishHome = currentPath === '/index.html';
const savedLanguage = localStorage.getItem(languagePreferenceKey);
const browserLanguage = (navigator.languages?.[0] || navigator.language || '').toLowerCase();

const shouldOpenSpanish = savedLanguage === 'es'
  || (!savedLanguage && browserLanguage.startsWith('es'));

if (isEnglishHome && shouldOpenSpanish) {
  window.location.replace('/es/');
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('pageshow', resetScroll);
window.addEventListener('load', resetScroll);
setTimeout(resetScroll, 100);
resetScroll();

const header = document.getElementById('header');

const generatedTitle = document.querySelector(
  'h1 a[href="https://gfullsec.github.io/"], h1 a[href="https://gfullsec.github.io"]'
);

if (generatedTitle) {
  generatedTitle.closest('h1').classList.add('site-title-hidden');
}

if (header) {
  fetch(`${header.dataset.include}?v=7`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Unable to load header: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      header.innerHTML = data;

      const root = document.documentElement;
      const navbar = header.querySelector('.navbar');
      const button = navbar.querySelector('#theme-toggle');
      const menuToggle = navbar.querySelector('.menu-toggle');
      const languageLink = navbar.querySelector('.nav-right > a');
      const isSpanish = currentPath === '/es/index.html' || currentPath.startsWith('/es/');
      const pageName = currentPath.replace(/^\/es\//, '').replace(/^\//, '');
      const stored = localStorage.getItem('theme');
      const initial = stored || 'dark';

      header.after(navbar);

      root.dataset.theme = initial;

      languageLink.href = isSpanish
        ? pageName === 'index.html' ? '/' : `/${pageName}`
        : pageName === 'index.html' ? '/es/index.html' : `/es/${pageName}`;

      languageLink.addEventListener('click', () => {
        localStorage.setItem(languagePreferenceKey, isSpanish ? 'en' : 'es');
      });

      navbar.querySelectorAll('.nav-left a').forEach(link => {
        const linkPath = new URL(link.href, window.location.href).pathname.replace(/\/$/, '/index.html');

        if (linkPath === currentPath) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
      });

      button.onclick = () => {
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        localStorage.setItem('theme', next);
      };

      menuToggle.onclick = () => {
        const isOpen = navbar.classList.toggle('menu-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute(
          'aria-label',
          isOpen ? menuToggle.dataset.closeLabel : menuToggle.dataset.openLabel
        );
      };

      navbar.querySelectorAll('.nav-left a').forEach(link => {
        link.onclick = () => {
          navbar.classList.remove('menu-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        };
      });
    })
    .catch(error => console.error(error));
}
