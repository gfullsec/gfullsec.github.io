<link rel="stylesheet" href="assets/css/style.css">

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

<header class="hero-banner">
  <img src="assets/images/banner-gfullsec.png" alt="Cybersecurity Portfolio — by Guillermo R.S." />
</header>

# The 8‑Week Journey

This page documents the full progression of the 8‑Week Accelerated Plan for Transitioning into Cybersecurity.

---

## Week 1 — Installation and Network Audit
- Ubuntu 26.04 installation  
- BIOS configuration  
- Base tools setup  
- Full Nmap audit  
- Bash audit script  
- Professional network report  
- Additional module: WRT54G

---

## Week 2 — Vulnerabilities and CVEs
- OpenVAS installation  
- Network vulnerability scanning  
- CVE correlation  
- Vulnerability classification  
- Professional vulnerability report  
- Additional module: CVE‑Hunter

---

## Week 3 — System Hardening
- Hardening Ubuntu with Lynis  
- Hardening Windows 11  
- Security checklist  
- Start of portfolio construction

---

## Week 4 — Professional Security Lab
- VM creation  
- Metasploitable + Juice Shop  
- Internal network  
- Lab documentation

---

## Week 5 — Security Scripting
- Bash scripts  
- Python scripts  
- Documentation

---

## Week 6 — SOC and Log Analysis
- Log analysis  
- Anomaly detection  
- Incident simulation  
- SOC report

---

## Week 7 — Basic DevSecOps
- SAST + DAST  
- Dependency scanning  
- Container scanning  
- Pipeline documentation

---

## Week 8 — Portfolio and Job Applications
- Complete portfolio  
- CV adaptation  
- Job applications  
- Interview preparation

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
