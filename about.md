<link rel="stylesheet" href="assets/css/style.css">

<div style="float:right;">
  <button id="theme-toggle" aria-label="Toggle theme">🌙</button>
  <a href="es/about.html" title="Change language to Spanish">
    <img src="https://flagcdn.com/w20/es.png" alt="Español">
  </a>
</div>

[Home](index.html) | [About](about.html) | [Journey](journey.html) | [Suite](suite.html) | [Contact](contact.html)


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
