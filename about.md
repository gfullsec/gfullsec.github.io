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


# About Me

I am Guillermo R.S., a developer transitioning into cybersecurity with a strong focus on defensive security, vulnerability assessment, OSINT tooling, and structured documentation.

My professional approach is based on:

- clear methodology  
- reproducible analysis  
- detailed reporting  
- continuous improvement  
- practical, hands‑on learning  

This portfolio reflects my progression through an 8‑week accelerated plan designed to build real‑world defensive security skills.

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
