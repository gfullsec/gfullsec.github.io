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


# La Trayectoria de 8 Semanas

Esta página documenta el progreso completo del Plan Acelerado de 8 Semanas para la Transición a Ciberseguridad.

---

## Semana 1 — Instalación y Auditoría de Red
- Instalación de Ubuntu 26.04  
- Configuración de BIOS  
- Instalación de herramientas base  
- Auditoría completa con Nmap  
- Script Bash de auditoría  
- Informe profesional de red  
- Módulo adicional: WRT54G

---

## Semana 2 — Vulnerabilidades y CVEs
- Instalación de OpenVAS  
- Escaneo de vulnerabilidades  
- Correlación de CVEs  
- Clasificación de vulnerabilidades  
- Informe profesional  
- Módulo adicional: CVE‑Hunter

---

## Semana 3 — Hardening de Sistemas
- Hardening de Ubuntu con Lynis  
- Hardening de Windows 11  
- Checklist de seguridad  
- Inicio del portfolio

---

## Semana 4 — Laboratorio Profesional
- Creación de máquinas virtuales  
- Metasploitable + Juice Shop  
- Red interna  
- Documentación del laboratorio

---

## Semana 5 — Scripting de Seguridad
- Scripts Bash  
- Scripts Python  
- Documentación

---

## Semana 6 — SOC y Análisis de Logs
- Análisis de logs  
- Detección de anomalías  
- Simulación de incidente  
- Informe SOC

---

## Semana 7 — DevSecOps Básico
- SAST + DAST  
- Escaneo de dependencias  
- Escaneo de contenedores  
- Documentación del pipeline

---

## Semana 8 — Portfolio y Aplicación a Empresas
- Portfolio completo  
- Adaptación del CV  
- Aplicación a empresas  
- Preparación de entrevistas

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

