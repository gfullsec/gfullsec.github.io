<link rel="stylesheet" href="../assets/css/style.css">

<header class="hero-banner">
  <img src="..assets/images/banner-gfullsec-es.png" alt="Cybersecurity Portfolio — by Guillermo R.S." />
</header>

<nav class="navbar">
  <div class="nav-left">
    <a href="index.html">Inicio</a>
    <a href="about.html">Sobre mí</a>
    <a href="journey.html">Trayectoria</a>
    <a href="suite.html">Suite</a>
    <a href="contact.html">Contacto</a>
  </div>
  <div class="nav-right">
    <button id="theme-toggle" aria-label="Toggle theme">🌙</button>
    <a href="../index.html" title="Change language to English">
      <img src="https://flagcdn.com/w20/gb.png" alt="English">
    </a>
  </div>
</nav>

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

