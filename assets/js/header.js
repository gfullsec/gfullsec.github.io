const header = document.getElementById('header');

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
