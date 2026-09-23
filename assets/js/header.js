const header = document.getElementById('header');

const generatedTitle = document.querySelector(
  'h1 a[href="https://gfullsec.github.io/"], h1 a[href="https://gfullsec.github.io"]'
);

if (generatedTitle) {
  generatedTitle.closest('h1').classList.add('site-title-hidden');
}

if (header) {
  fetch(header.dataset.include)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Unable to load header: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      header.innerHTML = data;

      const root = document.documentElement;
      const button = header.querySelector('#theme-toggle');
      const menuToggle = header.querySelector('.menu-toggle');
      const navbar = header.querySelector('.navbar');
      const currentPath = window.location.pathname.replace(/\/$/, '/index.html');
      const stored = localStorage.getItem('theme');
      const initial = stored || 'dark';

      root.dataset.theme = initial;
      button.textContent = initial === 'dark' ? '☀️' : '🌙';

      header.querySelectorAll('.nav-left a').forEach(link => {
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
        button.textContent = next === 'dark' ? '☀️' : '🌙';
      };

      menuToggle.onclick = () => {
        const isOpen = navbar.classList.toggle('menu-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute(
          'aria-label',
          isOpen ? menuToggle.dataset.closeLabel : menuToggle.dataset.openLabel
        );
      };

      header.querySelectorAll('.nav-left a').forEach(link => {
        link.onclick = () => {
          navbar.classList.remove('menu-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        };
      });
    })
    .catch(error => console.error(error));
}
