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


# Security Analysis Suite — Portfolio by Guillermo R.S.

Welcome to my cybersecurity portfolio.  
This site documents my **8‑Week Accelerated Plan for Transitioning into Cybersecurity**, a structured and intensive project designed to demonstrate real defensive security skills through practical, fully documented modules.

Each week of the plan includes:

- clear objectives  
- technical tasks  
- professional deliverables  
- complete documentation  
- associated repositories  
- real learning progression  

During Week 2, I also introduced an additional module: **CVE‑Hunter**, a custom tool for CVE correlation and vulnerability analysis.

---

## What You Will Find Here

- Home network audit (Week 1)  
- Vulnerability analysis with OpenVAS (Week 2)  
- CVE correlation tooling (Week 2 — CVE‑Hunter)  
- Linux and Windows hardening (Week 3)  
- Professional security lab with VMs (Week 4)  
- Security scripting in Bash and Python (Week 5)  
- SOC and log analysis (Week 6)  
- Basic DevSecOps pipeline (Week 7)  
- Portfolio completion and job applications (Week 8)

---

## The 8‑Week Accelerated Plan

### Week 1 — Installation and Network Audit
- Installation of **Ubuntu 26.04 LTS**  
- BIOS configuration (Secure Boot, AHCI)  
- Base tools setup  
- Full Nmap audit of the home network  
- Bash audit script  
- Professional network report  
- **Additional module:** WRT54G analysis

### Week 2 — Vulnerabilities and CVEs
- Installation and configuration of OpenVAS  
- Scanning home network devices  
- CVE correlation (NVD, CVE Details, ExploitDB)  
- Impact‑based vulnerability classification  
- Professional vulnerability report  
- **Additional module:** CVE‑Hunter

### Week 3 — System Hardening
- Hardening Ubuntu with Lynis  
- Hardening Windows 11  
- Professional security checklist  
- **Start of portfolio construction (GitHub + GitHub Pages)**

### Week 4 — Professional Security Lab
- Creation of VMs (Kali, Ubuntu Server, Windows 11)  
- Installation of Metasploitable and OWASP Juice Shop  
- Internal network configuration  
- Full lab documentation

### Week 5 — Security Scripting
- Bash scripts for scans and port analysis  
- Python scripts for CVEs, logs, and traffic  
- Technical documentation for each script

### Week 6 — SOC and Log Analysis
- Analysis of syslog, auth.log, firewall logs, DNS  
- Detection of anomalies  
- Incident simulation  
- Complete SOC report

### Week 7 — Basic DevSecOps
- Pipeline with SAST + DAST  
- Dependency scanning  
- Container scanning  
- Pipeline documentation

### Week 8 — Portfolio and Job Applications
- **Complete technical portfolio (GitHub + GitHub Pages)**  
- CV adapted to security roles  
- Job applications  
- Technical interview preparation

---

## Security Analysis Suite — Modules

- Network Audit (Week 1)  
- WRT54G (Week 1 — additional module)  
- Full Network Scan (Week 2)  
- CVE‑Hunter (Week 2 — additional module)  
- Hardening (Week 3)  
- Security Lab (Week 4)  
- Scripting (Week 5)  
- SOC (Week 6)  
- DevSecOps (Week 7)

---

## About Me

I am Guillermo R.S., a developer transitioning into cybersecurity with a strong focus on Blue Team defensive analysis, vulnerability assessment, OSINT tooling, and structured documentation.

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
