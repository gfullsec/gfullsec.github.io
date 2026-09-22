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


# Security Analysis Suite

The Security Analysis Suite is a collection of modules developed throughout the 8‑Week Accelerated Plan. Each module includes documentation, analysis, and practical deliverables.

---

## Modules

### Network Audit (Week 1)
Full Nmap audit + Bash automation + professional report.

### WRT54G Analysis (Week 1)
Device‑specific vulnerability assessment.

### Full Network Scan (Week 2)
OpenVAS scanning and vulnerability classification.

### CVE‑Hunter (Week 2)
Custom CVE correlation tool.

### System Hardening (Week 3)
Linux + Windows hardening and security checklist.

### Security Lab (Week 4)
Professional VM‑based lab environment.

### Scripting (Week 5)
Bash + Python tooling for security automation.

### SOC (Week 6)
Log analysis, anomaly detection, incident simulation.

### DevSecOps (Week 7)
Basic CI/CD security pipeline.

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
