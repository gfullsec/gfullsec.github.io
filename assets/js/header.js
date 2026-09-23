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
      const stored = localStorage.getItem('theme');
      const initial = stored || 'dark';

      root.dataset.theme = initial;
      button.textContent = initial === 'dark' ? '☀️' : '🌙';

      button.onclick = () => {
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        localStorage.setItem('theme', next);
        button.textContent = next === 'dark' ? '☀️' : '🌙';
      };
    })
    .catch(error => console.error(error));
}
