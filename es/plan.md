---
---

<link rel="stylesheet" href="../assets/css/style.css?v=2">
<link rel="icon" type="image/png" href="../assets/images/favicon.png">

<div id="header" data-include="../assets/includes/header-es.html"></div>

## Transición a la Ciberseguridad

La transición hacia una carrera en ciberseguridad no se basa únicamente en formación teórica, sino también en práctica, documentación y aprendizaje continuo.


Esta página recoge los módulos, proyectos, herramientas y experiencias que forman parte de mi proceso de desarrollo profesional, incluyendo tanto los resultados obtenidos como el trabajo realizado durante cada etapa.


---

### Progreso General

- ✅ Módulo 1: Auditoría de Red y Automatización

- ✅ Módulo 2: Vulnerabilidades y Análisis de CVEs

- ✅ Módulo 3: Hardening de Sistemas e Inicio del Portafolio

- 🔄 Módulo 4: Laboratorio Profesional

- 🔄 Módulo 5: Scripting para Seguridad

- ⏳ Módulo 6: SOC y Análisis de Logs

- ⏳ Módulo 7: DevSecOps Básico

- ⏳ Módulo 8: Finalización del Portafolio

**Progreso actual:** 2 módulos completados y 1 módulo en desarrollo.

---

### Tecnologías y Herramientas Trabajadas

#### Sistemas Operativos

- Ubuntu 26.04 LTS
- Windows 11
- Kali Linux

#### Seguridad

- OpenVAS
- Nmap
- arp-scan
- Lynis

#### Desarrollo y Automatización

- Python
- Bash
- Git
- GitHub

#### OSINT e Inteligencia

- Shodan
- FOFA
- NVD
- Exploit Database

#### Documentación

- Markdown
- Mermaid
- GitHub Pages

---

## Módulo 1

### Auditoría de Red y Automatización

**Estado:** ✅ Completado

#### Objetivos

- Preparar el entorno de trabajo.
- Realizar una auditoría completa de la red doméstica.

#### Trabajo realizado

- Auditoría completa de la red doméstica.
- Desarrollo de la herramienta network-audit.
- Implementación de reporting en CSV y JSON.
- Generación automática de diagramas Mermaid.
- Sistema de alertas y comparativa histórica.

#### Herramientas utilizadas

- Ubuntu 26.04 LTS
- Nmap
- arp-scan
- Bash
- jq
- Git
- Mermaid

#### Resultado

El proyecto evolucionó desde un script básico hasta una herramienta modular de auditoría de red preparada para ejecuciones repetidas y análisis comparativos.

#### Proceso y desarrollo

El módulo comenzó con la preparación del entorno de trabajo sobre Ubuntu 26.04 LTS, incluyendo la configuración del sistema, las herramientas base y la estructura de directorios utilizada durante el resto del roadmap.

Una vez preparado el entorno, se realizó una auditoría completa de la red doméstica mediante descubrimiento de dispositivos, identificación de servicios y análisis de puertos. Durante esta fase se utilizaron herramientas como Nmap y arp-scan para generar un inventario preciso de la infraestructura.

A medida que avanzaba la auditoría surgió la necesidad de automatizar tareas repetitivas. Lo que inicialmente iba a ser un script Bash sencillo evolucionó progresivamente hacia una herramienta modular capaz de realizar descubrimiento de red, identificación de fabricantes, generación de informes en distintos formatos, creación de diagramas Mermaid y comparación entre auditorías sucesivas.

El proyecto se diseñó con una estructura orientada a reutilización y mantenimiento, incorporando generación automática de resultados, normalización de datos y mecanismos de alerta. Paralelamente se documentó la arquitectura, el flujo de trabajo y las consideraciones técnicas necesarias para que terceros pudieran comprender y ejecutar la herramienta.

El resultado final fue la creación de una solución de auditoría de red más completa de lo previsto inicialmente, acompañada de documentación técnica y preparada para futuras ampliaciones.

Repositorio relacionado:

- <a href="https://github.com/GFullSec/network-audit" target="_blank" rel="noopener noreferrer">https://github.com/GFullSec/network-audit</a>

---

## Módulo 2

### Vulnerabilidades y Análisis de CVEs

**Estado:** ✅ Completado

#### Objetivos

- Demostrar capacidad de análisis técnico.

#### Trabajo realizado

- Desarrollo y mejora de la herramienta CVE-Hunter.
- Integración con Shodan y FOFA.
- Análisis dirigido del router WRT54G mediante OpenVAS.
- Auditoría Full Network del entorno doméstico mediante OpenVAS.
- Investigación específica de la Smart TV.
- Correlación de vulnerabilidades y análisis contextualizado del riesgo.

#### Herramientas utilizadas

- OpenVAS
- CVE-Hunter
- Shodan
- FOFA
- NVD
- Exploit Database
- Python
- Git

#### Resultado

Se construyó una metodología completa de análisis de vulnerabilidades orientada a contexto real y toma de decisiones.

#### Proceso y desarrollo

El segundo módulo se centró en el análisis de vulnerabilidades y en la comprensión práctica del ciclo de gestión de CVEs. Antes de abordar los escaneos, se dedicó tiempo al desarrollo y mejora de CVE-Hunter, una herramienta orientada a la correlación de vulnerabilidades e integración de fuentes externas de información.

La evolución de la herramienta permitió trabajar con servicios como Shodan y FOFA, además de reforzar el conocimiento sobre APIs de seguridad, bases de datos de vulnerabilidades y procesos de correlación. Esta fase sirvió para comprender mejor el funcionamiento interno de los motores de análisis antes de utilizar herramientas de escaneo automatizado.

Posteriormente se realizaron análisis dirigidos mediante OpenVAS sobre distintos activos de la red doméstica. El primer caso se centró en un router WRT54G, utilizado como ejercicio de análisis específico sobre un único activo. Durante esta fase se desarrolló una metodología de documentación basada en observaciones, análisis, conclusiones y acciones futuras.

Una vez validada la metodología, se llevó a cabo una auditoría completa de la red doméstica mediante OpenVAS. Los resultados obtenidos permitieron generar una visión global del entorno, identificar dispositivos con mayor exposición y establecer una línea base de seguridad.

El trabajo no se limitó a recopilar vulnerabilidades. Cada hallazgo fue contextualizado según el entorno analizado, evaluando impacto, probabilidad de explotación y riesgo real. Este enfoque permitió priorizar acciones, distinguir entre problemas relevantes y ruido operativo, y justificar técnicamente las decisiones adoptadas.

La documentación generada durante este módulo consolidó una estructura de trabajo modular y reutilizable, que posteriormente se convirtió en la base para el resto de proyectos y para la construcción del portafolio profesional.

Repositorios relacionados:

- <a href="https://github.com/GFullSec/CVE-Hunter" target="_blank" rel="noopener noreferrer">https://github.com/GFullSec/CVE-Hunter</a>

- <a href="https://github.com/gfullsec/security-analysis-suite/tree/main/openvas" target="_blank" rel="noopener noreferrer">https://github.com/gfullsec/security-analysis-suite/tree/main/openvas</a>



---

## Módulo 3

### Hardening de Sistemas e Inicio del Portafolio

**Estado:** ✅ Completado

#### Objetivos

- Demostrar capacidades de hardening y seguridad defensiva.
- Construir la base del portafolio profesional.
- Diseñar y documentar un laboratorio reproducible para actividades de seguridad.
- Aplicar metodologías de evaluación, remediación y validación sobre sistemas Windows y Linux.
- Resolver un caso real de reducción de superficie de ataque y continuidad operativa.

#### Trabajo realizado

- Desarrollo inicial del portafolio profesional.
- Diseño de la estructura de navegación bilingüe.
- Creación y organización de la documentación pública del roadmap.
- Construcción y documentación del laboratorio de trabajo en VirtualBox.
- Creación y validación de máquinas virtuales Windows 11 y Ubuntu.
- Documentación de procedimientos de despliegue y configuración.
- Proyecto de modernización y reducción de superficie de ataque sobre una estación de trabajo profesional Windows 10 utilizada en un entorno real de producción gráfica.
- Evaluación y hardening documentado de Ubuntu 26.04.1 LTS mediante Lynis.
- Evaluación y hardening documentado de Windows 11 utilizando controles nativos de seguridad.
- Desarrollo de una metodología basada en Assessment, Implementation y Validation.
- Generación y conservación de evidencias y artefactos técnicos.

#### Herramientas utilizadas

- Ubuntu 26.04 LTS
- Windows 11 Pro
- Windows 10
- Oracle VirtualBox
- Lynis
- Microsoft Defender
- BitLocker
- PowerShell
- Git
- GitHub
- GitHub Pages
- Markdown

#### Resultado

Se desarrolló una metodología práctica de hardening orientada a entornos Windows y Linux, documentando tanto la evaluación inicial como las medidas implementadas y su validación posterior. Paralelamente se diseñó una estrategia de continuidad operativa para un entorno profesional dependiente de software legacy, utilizando virtualización, aislamiento y transición progresiva hacia soluciones más seguras y sostenibles.

#### Proceso y desarrollo

El módulo comenzó con la creación del portafolio profesional y la definición de la estructura documental que servirá como base para el resto de proyectos del roadmap. Durante esta fase se desarrollaron las páginas iniciales, la navegación bilingüe y la organización de contenidos orientada a la publicación de evidencias técnicas y documentación reproducible.

Paralelamente se inició la construcción del laboratorio de trabajo sobre Oracle VirtualBox. Se desplegaron y documentaron las máquinas virtuales necesarias para las futuras actividades de análisis y hardening, incluyendo sistemas Ubuntu y Windows 11 preparados para pruebas de seguridad, validación de configuraciones y documentación de procedimientos.

Uno de los proyectos más relevantes del módulo consistió en el análisis y modernización de una estación de trabajo profesional utilizada diariamente en un taller de serigrafía. El sistema, desplegado originalmente en 2012, continuaba siendo funcional para las necesidades del usuario, pero dependía de Windows 10, aplicaciones Adobe legacy y periféricos críticos para la actividad del negocio.

El proyecto comenzó con un análisis técnico completo del hardware, software, almacenamiento, periféricos y flujo de trabajo del usuario. Posteriormente se realizó una evaluación de riesgos centrada en la obsolescencia del sistema operativo, la dependencia de software sin soporte y la continuidad operativa del entorno.

A partir de los resultados obtenidos se diseñó una arquitectura objetivo basada en Ubuntu 26.04 LTS como sistema anfitrión y Windows 10 virtualizado para mantener las aplicaciones Adobe imprescindibles. Esta estrategia permitía aislar un sistema operativo sin soporte, reducir significativamente la superficie de ataque, prolongar la vida útil del hardware existente y facilitar una transición progresiva hacia herramientas abiertas como GIMP, Inkscape y Scribus.

La parte principal del módulo se centró en el hardening documentado de sistemas operativos. Sobre Ubuntu 26.04.1 LTS se realizó una evaluación inicial mediante Lynis, seguida del análisis de hallazgos, clasificación de recomendaciones, implementación de medidas de mejora y validación final. El proceso permitió aumentar el Hardening Index y establecer una metodología reproducible de endurecimiento basada en evaluación, implementación y validación.

En Windows 11 se aplicó un enfoque equivalente utilizando controles nativos de seguridad. El proceso incluyó la evaluación de Microsoft Defender, BitLocker, políticas de PowerShell, configuración de auditoría avanzada y protección frente a ransomware. Posteriormente se implementaron mejoras específicas, se validaron los cambios realizados y se documentaron todas las evidencias obtenidas durante el proyecto.

Toda la documentación generada durante el módulo fue incorporada al repositorio principal, estableciendo una metodología homogénea basada en evidencias, trazabilidad de cambios, análisis de riesgos y validación de resultados.

#### Repositorios relacionados

##### Workstation Hardening Project

Proyecto de continuidad operativa, reducción de superficie de ataque y modernización tecnológica de una estación de trabajo profesional basada en Windows 10.

- Evaluación de riesgos.
- Análisis de compatibilidad hardware y software.
- Diseño de arquitectura basada en virtualización.
- Estrategia de transición hacia Linux y software libre.
- Continuidad operativa para un entorno real de producción gráfica.

- <a href="https://github.com/gfullsec/security-analysis-suite/tree/main/hardening/workstation-hardening-project" target="_blank" rel="noopener noreferrer">https://github.com/gfullsec/security-analysis-suite/tree/main/hardening/workstation-hardening-project</a>

##### Linux Hardening Project

Proyecto de hardening documentado sobre Ubuntu 26.04.1 LTS utilizando Lynis como herramienta principal de evaluación.

- Baseline assessment.
- Findings analysis.
- Hardening implementation.
- Validation and comparison of results.
- Gestión de evidencias y artefactos técnicos.

- <a href="https://github.com/gfullsec/security-analysis-suite/tree/main/hardening/linux/lynis" target="_blank" rel="noopener noreferrer">https://github.com/gfullsec/security-analysis-suite/tree/main/hardening/linux/lynis</a>

##### Windows 11 Hardening Project

Proyecto de hardening documentado sobre Windows 11 Pro utilizando controles nativos de Microsoft.

- Security baseline assessment.
- BitLocker protection enablement.
- Microsoft Defender hardening.
- PowerShell security controls.
- Audit policy enhancement.
- Validation of implemented controls.

- <a href="https://github.com/gfullsec/security-analysis-suite/tree/main/hardening/windows" target="_blank" rel="noopener noreferrer">https://github.com/gfullsec/security-analysis-suite/tree/main/hardening/windows</a>

##### Professional Portfolio

Portfolio profesional desarrollado para documentar proyectos, laboratorios, herramientas y actividades relacionadas con la transición hacia ciberseguridad.

- Sitio bilingüe (ES/EN).
- Documentación de proyectos y evidencias.
- Seguimiento del roadmap profesional.
- Publicación mediante GitHub Pages.

- <a href="https://github.com/gfullsec/gfullsec.github.io" target="_blank" rel="noopener noreferrer">https://github.com/gfullsec/gfullsec.github.io</a>

---

## Módulo 4

### Laboratorio Profesional

**Estado:** ⏳ Pendiente

#### Objetivos

- Montar entorno de pruebas para SOC, DevSecOps y AppSec.

#### Tareas previstas

- Crear VMs: Kali, Ubuntu Server y Windows 11.
- Instalar Metasploitable y OWASP Juice Shop.
- Configurar red interna.
- Documentar la arquitectura del laboratorio.

#### Entregables

- Documentación del laboratorio.

---

## Módulo 5

### Scripting para Seguridad

**Estado:** ⏳ Pendiente

#### Objetivos

- Automatizar tareas como un analista real.

#### Tareas previstas

- Crear scripts Bash para escaneos y análisis de puertos.
- Crear scripts Python para CVEs, logs y tráfico.
- Documentar cada script.

#### Entregables

- Scripts en Bash y Python.

---

## Módulo 6

### SOC y Análisis de Logs

**Estado:** ⏳ Pendiente

#### Objetivos

- Demostrar detección de amenazas.

#### Tareas previstas

- Analizar logs: syslog, auth.log, firewall y DNS.
- Detectar anomalías: escaneos, conexiones repetidas y DNS sospechosos.
- Simular un incidente.
- Elaborar informe SOC.

#### Entregables

- Informe SOC (detección, análisis y mitigación).

---

## Módulo 7

### DevSecOps Básico

**Estado:** ⏳ Pendiente

#### Objetivos

- Demostrar seguridad en CI/CD.

#### Tareas previstas

- Crear pipeline con SAST y DAST.
- Escaneo de dependencias.
- Escaneo de contenedores.
- Documentar el pipeline.

#### Entregables

- Mini proyecto DevSecOps documentado.

#### Relación con el portafolio

Los proyectos, resultados y evidencias generados durante este módulo se incorporarán al portafolio iniciado en el Módulo 3.

---

## Módulo 8

### Finalización del Portafolio

**Estado:** ⏳ Pendiente

#### Objetivos

- Finalización del portafolio profesional.

#### Resultado esperado

Disponer de un portafolio completo y estructurado que reúna los proyectos, laboratorios, investigaciones y evidencias desarrolladas durante todo el proceso de transición.

---

## Resultado Final Esperado

Al completar el proceso de transición se dispondrá de:

- Portafolio técnico completo.
- Herramientas desarrolladas en Bash y Python.
- Informes profesionales de auditoría, vulnerabilidades y SOC.
- Laboratorio de seguridad documentado.
- Pipeline DevSecOps funcional.
- Evidencias prácticas de aprendizaje y evolución profesional.


---

Última actualización: Octubre de 2026

<div id="footer" data-include="../assets/includes/footer-es.html"></div>
<script src="../assets/js/header.js?v=8"></script>


