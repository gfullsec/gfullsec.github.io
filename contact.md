<link rel="stylesheet" href="assets/css/style.css">

<title>Cybersecurity Portfolio — Guillermo R.S.</title>

<header class="hero-banner">
  <img src="assets/images/banner-gfullsec.png" alt="Cybersecurity Portfolio — by Guillermo R.S." />
</header>

<nav class="navbar">
  <div class="nav-left">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="journey.html">Journey</a>
    <a href="suite.html">Suite</a>
    <a href="contact.html">Contact</a>
  </div>
  <div class="nav-right">
    <button id="theme-toggle" aria-label="Toggle theme">🌙</button>
    <a href="es/index.html" title="Change language to Spanish">
      <img src="https://flagcdn.com/w20/es.png" alt="Español">
    </a>
  </div>
</nav>

# Contact

You can reach me through GitHub:

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