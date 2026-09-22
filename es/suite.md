<link rel="stylesheet" href="../assets/css/style.css">

<header class="hero-banner">
  <img src="assets/images/banner-gfullsec-es.png" alt="Cybersecurity Portfolio — by Guillermo R.S." />
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


# Security Analysis Suite

La Security Analysis Suite es una colección de módulos desarrollados a lo largo del Plan Acelerado de 8 Semanas. Cada módulo incluye documentación, análisis y entregables prácticos.

---

## Módulos

### Auditoría de Red (Semana 1)
Auditoría completa con Nmap + automatización en Bash + informe profesional.

### Análisis WRT54G (Semana 1)
Evaluación de vulnerabilidades específica del dispositivo.

### Escaneo Completo de Red (Semana 2)
Escaneo con OpenVAS y clasificación de vulnerabilidades.

### CVE‑Hunter (Semana 2)
Herramienta propia de correlación de CVEs.

### Hardening de Sistemas (Semana 3)
Hardening de Linux + Windows y checklist de seguridad.

### Laboratorio de Seguridad (Semana 4)
Entorno profesional basado en máquinas virtuales.

### Scripting (Semana 5)
Herramientas Bash + Python para automatización de seguridad.

### SOC (Semana 6)
Análisis de logs, detección de anomalías, simulación de incidente.

### DevSecOps (Semana 7)
Pipeline básico de CI/CD con seguridad integrada.

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

