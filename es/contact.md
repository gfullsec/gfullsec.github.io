<link rel="stylesheet" href="../assets/css/style.css">

<div style="float:right;">
  <button id="theme-toggle" aria-label="Toggle theme">🌙</button>
  <a href="../index.html" title="Cambiar idioma a inglés">
    <img src="https://flagcdn.com/w20/gb.png" alt="English">
  </a>
</div>

[Inicio](index.html) | [Sobre mí](about.html) | [Trayectoria](journey.html) | [Suite](suite.html) | [Contacto](contact.html)


# Contacto

Puedes contactar conmigo a través de GitHub:

**https://github.com/gfullsec**

<script>
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  const stored = localStorage.getItem('theme');
  const initial = stored || 'dark';
  root.dataset.theme = initial;
  btn.textContent = initial === 'dark' ? '☀️' : '🌙';

  btn.onclick = () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  };
</script>

