---
---

<link rel="stylesheet" href="assets/css/style.css?v=2">
<link rel="icon" type="image/png" href="assets/images/favicon.png">

<div id="header" data-include="/assets/includes/header.html"></div>

# Plan de Desarrollo

Este roadmap recoge los módulos que estoy completando como parte de mi transición hacia la ciberseguridad profesional.

Cada módulo combina formación teórica, proyectos prácticos, documentación técnica y evidencias reales de aprendizaje.

---

## Progreso General

- ✅ Módulo 1: Auditoría de Red y Automatización

- ✅ Módulo 2: Vulnerabilidades y Análisis de CVEs

- 🔄 Módulo 3: Hardening de Sistemas e Inicio del Portafolio

- ⏳ Módulo 4: Laboratorio Profesional

- ⏳ Módulo 5: Scripting para Seguridad

- ⏳ Módulo 6: SOC y Análisis de Logs

- ⏳ Módulo 7: DevSecOps Básico

- ⏳ Módulo 8: Finalización del Portafolio

**Progreso actual:** 2 módulos completados y 1 módulo en desarrollo.

---

## Tecnologías y Herramientas Trabajadas

### Sistemas Operativos

- Ubuntu 26.04 LTS
- Windows 11

### Seguridad

- OpenVAS
- Nmap
- arp-scan
- Lynis

### Desarrollo y Automatización

- Python
- Bash
- Git
- GitHub

### OSINT e Inteligencia

- Shodan
- FOFA
- NVD
- Exploit Database

### Documentación

- Markdown
- Mermaid
- GitHub Pages

---

# Módulo 1

## Auditoría de Red y Automatización

**Estado:** ✅ Completado

### Objetivos

- Preparar el entorno de trabajo.
- Realizar una auditoría completa de la red doméstica.

### Trabajo realizado

- Auditoría completa de la red doméstica.
- Desarrollo de la herramienta network-audit.
- Implementación de reporting en CSV y JSON.
- Generación automática de diagramas Mermaid.
- Sistema de alertas y comparativa histórica.

### Herramientas utilizadas

- Ubuntu 26.04 LTS
- Nmap
- arp-scan
- Bash
- jq
- Git
- Mermaid

### Resultado

El proyecto evolucionó desde un script básico hasta una herramienta modular de auditoría de red preparada para ejecuciones repetidas y análisis comparativos.

### Proceso y desarrollo

El módulo comenzó con la preparación del entorno de trabajo sobre Ubuntu 26.04 LTS, incluyendo la configuración del sistema, las herramientas base y la estructura de directorios utilizada durante el resto del roadmap.

Una vez preparado el entorno, se realizó una auditoría completa de la red doméstica mediante descubrimiento de dispositivos, identificación de servicios y análisis de puertos. Durante esta fase se utilizaron herramientas como Nmap y arp-scan para generar un inventario preciso de la infraestructura.

A medida que avanzaba la auditoría surgió la necesidad de automatizar tareas repetitivas. Lo que inicialmente iba a ser un script Bash sencillo evolucionó progresivamente hacia una herramienta modular capaz de realizar descubrimiento de red, identificación de fabricantes, generación de informes en distintos formatos, creación de diagramas Mermaid y comparación entre auditorías sucesivas.

El proyecto se diseñó con una estructura orientada a reutilización y mantenimiento, incorporando generación automática de resultados, normalización de datos y mecanismos de alerta. Paralelamente se documentó la arquitectura, el flujo de trabajo y las consideraciones técnicas necesarias para que terceros pudieran comprender y ejecutar la herramienta.

El resultado final fue la creación de una solución de auditoría de red más completa de lo previsto inicialmente, acompañada de documentación técnica y preparada para futuras ampliaciones.

Repositorio relacionado:

- <a href="https://github.com/GFullSec/network-audit" target="_blank" rel="noopener noreferrer">https://github.com/GFullSec/network-audit</a>

---

# Módulo 2

## Vulnerabilidades y Análisis de CVEs

**Estado:** ✅ Completado

### Objetivos

- Demostrar capacidad de análisis técnico.

### Trabajo realizado

- Desarrollo y mejora de la herramienta CVE-Hunter.
- Integración con Shodan y FOFA.
- Análisis dirigido del router WRT54G mediante OpenVAS.
- Auditoría Full Network del entorno doméstico mediante OpenVAS.
- Investigación específica de la Smart TV.
- Correlación de vulnerabilidades y análisis contextualizado del riesgo.

### Herramientas utilizadas

- OpenVAS
- CVE-Hunter
- Shodan
- FOFA
- NVD
- Exploit Database
- Python
- Git

### Resultado

Se construyó una metodología completa de análisis de vulnerabilidades orientada a contexto real y toma de decisiones.

### Proceso y desarrollo

El segundo módulo se centró en el análisis de vulnerabilidades y en la comprensión práctica del ciclo de gestión de CVEs. Antes de abordar los escaneos, se dedicó tiempo al desarrollo y mejora de CVE-Hunter, una herramienta orientada a la correlación de vulnerabilidades e integración de fuentes externas de información.

La evolución de la herramienta permitió trabajar con servicios como Shodan y FOFA, además de reforzar el conocimiento sobre APIs de seguridad, bases de datos de vulnerabilidades y procesos de correlación. Esta fase sirvió para comprender mejor el funcionamiento interno de los motores de análisis antes de utilizar herramientas de escaneo automatizado.

Posteriormente se realizaron análisis dirigidos mediante OpenVAS sobre distintos activos de la red doméstica. El primer caso se centró en un router WRT54G, utilizado como ejercicio de análisis específico sobre un único activo. Durante esta fase se desarrolló una metodología de documentación basada en observaciones, análisis, conclusiones y acciones futuras.

Una vez validada la metodología, se llevó a cabo una auditoría completa de la red doméstica mediante OpenVAS. Los resultados obtenidos permitieron generar una visión global del entorno, identificar dispositivos con mayor exposición y establecer una línea base de seguridad.

El trabajo no se limitó a recopilar vulnerabilidades. Cada hallazgo fue contextualizado según el entorno analizado, evaluando impacto, probabilidad de explotación y riesgo real. Este enfoque permitió priorizar acciones, distinguir entre problemas relevantes y ruido operativo, y justificar técnicamente las decisiones adoptadas.

La documentación generada durante este módulo consolidó una estructura de trabajo modular y reutilizable, que posteriormente se convirtió en la base para el resto de proyectos y para la construcción del portafolio profesional.

Repositorio relacionado:

- <a href="https://github.com/GFullSec/CVE-Hunter" target="_blank" rel="noopener noreferrer">https://github.com/GFullSec/CVE-Hunter</a>

---

# Módulo 3

## Hardening de Sistemas e Inicio del Portafolio

**Estado:** 🔄 En progreso

### Objetivos

- Demostrar seguridad defensiva.

### Trabajo realizado

- Inicio del desarrollo del portafolio profesional.
- Diseño de la estructura de navegación.
- Creación de páginas informativas.
- Organización de contenidos en español e inglés.
- Preparación del espacio donde se documentarán los módulos posteriores.

### Herramientas utilizadas

- Ubuntu 26.04 LTS
- GitHub Pages
- Markdown
- Git
- Jekyll

### Resultado esperado

Construir una base sólida para exponer de forma pública y estructurada los conocimientos, proyectos y evidencias que se desarrollarán durante el resto del roadmap.

---

# Módulo 4

## Laboratorio Profesional

**Estado:** ⏳ Pendiente

### Objetivos

- Montar entorno de pruebas para SOC, DevSecOps y AppSec.

### Tareas previstas

- Crear VMs: Kali, Ubuntu Server y Windows 11.
- Instalar Metasploitable y OWASP Juice Shop.
- Configurar red interna.
- Documentar la arquitectura del laboratorio.

### Entregables

- Documentación del laboratorio.

---

# Módulo 5

## Scripting para Seguridad

**Estado:** ⏳ Pendiente

### Objetivos

- Automatizar tareas como un analista real.

### Tareas previstas

- Crear scripts Bash para escaneos y análisis de puertos.
- Crear scripts Python para CVEs, logs y tráfico.
- Documentar cada script.

### Entregables

- Scripts en Bash y Python.

---

# Módulo 6

## SOC y Análisis de Logs

**Estado:** ⏳ Pendiente

### Objetivos

- Demostrar detección de amenazas.

### Tareas previstas

- Analizar logs: syslog, auth.log, firewall y DNS.
- Detectar anomalías: escaneos, conexiones repetidas y DNS sospechosos.
- Simular un incidente.
- Elaborar informe SOC.

### Entregables

- Informe SOC (detección, análisis y mitigación).

---

# Módulo 7

## DevSecOps Básico

**Estado:** ⏳ Pendiente

### Objetivos

- Demostrar seguridad en CI/CD.

### Tareas previstas

- Crear pipeline con SAST y DAST.
- Escaneo de dependencias.
- Escaneo de contenedores.
- Documentar el pipeline.

### Entregables

- Mini proyecto DevSecOps documentado.

### Relación con el portafolio

Los proyectos, resultados y evidencias generados durante este módulo se incorporarán al portafolio iniciado en el Módulo 3.

---

# Módulo 8

## Finalización del Portafolio

**Estado:** ⏳ Pendiente

### Objetivos

- Finalización del portafolio profesional.

### Resultado esperado

Disponer de un portafolio completo y estructurado que reúna los proyectos, laboratorios, investigaciones y evidencias desarrolladas durante todo el roadmap.

---

## Resultado Final Esperado

Al completar el roadmap se dispondrá de:

- Portafolio técnico completo.
- Herramientas desarrolladas en Bash y Python.
- Informes profesionales de auditoría, vulnerabilidades y SOC.
- Laboratorio de seguridad documentado.
- Pipeline DevSecOps funcional.
- Evidencias prácticas de aprendizaje y evolución profesional.
- Preparación para procesos de selección en ciberseguridad defensiva.

---

Última actualización: Octubre de 2026

<div id="footer" data-include="/assets/includes/footer.html"></div>
<script src="assets/js/header.js?v=8"></script>

