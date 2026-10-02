---
---

<link rel="stylesheet" href="assets/css/style.css?v=2">
<link rel="icon" type="image/png" href="assets/images/favicon.png">

<div id="header" data-include="/assets/includes/header.html"></div>

## Transition to Cybersecurity

The transition toward a career in cybersecurity is not based solely on theoretical training, but also on practice, documentation, and continuous learning.

This document gathers the modules, projects, tools, and experiences that are part of my professional development process, including both the results obtained and the work carried out during each stage.

---

### Overall Progress

- ✅ Module 1: Network Auditing and Automation

- ✅ Module 2: Vulnerabilities and CVE Analysis

- 🔄 Module 3: System Hardening and Portfolio Start

- ⏳ Module 4: Professional Laboratory

- ⏳ Module 5: Security Scripting

- ⏳ Module 6: SOC and Log Analysis

- ⏳ Module 7: Basic DevSecOps

- ⏳ Module 8: Portfolio Finalization

**Current progress:** 2 modules completed and 1 module in development.

---

### Technologies and Tools Worked With

#### Operating Systems

- Ubuntu 26.04 LTS
- Windows 11

#### Security

- OpenVAS
- Nmap
- arp-scan
- Lynis

#### Development and Automation

- Python
- Bash
- Git
- GitHub

#### OSINT and Intelligence

- Shodan
- FOFA
- NVD
- Exploit Database

#### Documentation

- Markdown
- Mermaid
- GitHub Pages

---

## Module 1

### Network Auditing and Automation

**Status:** ✅ Completed

#### Objectives

- Prepare the working environment.
- Conduct a complete audit of the home network.

#### Work performed

- Complete audit of the home network.
- Development of the network-audit tool.
- CSV and JSON reporting implementation.
- Automatic Mermaid diagram generation.
- Alert system and historical comparison.

#### Tools used

- Ubuntu 26.04 LTS
- Nmap
- arp-scan
- Bash
- jq
- Git
- Mermaid

#### Result

The project evolved from a basic script to a modular network auditing tool prepared for repeated executions and comparative analysis.

#### Process and development

The module began with preparing the working environment on Ubuntu 26.04 LTS, including system configuration, base tools, and the directory structure used throughout the rest of the roadmap.

Once the environment was prepared, a complete audit of the home network was carried out using device discovery, service identification, and port analysis. During this phase, tools such as Nmap and arp-scan were used to generate a precise inventory of the infrastructure.

As the audit progressed, the need to automate repetitive tasks became apparent. What initially was planned as a simple Bash script gradually evolved into a modular tool capable of network discovery, manufacturer identification, report generation in different formats, Mermaid diagram creation, and comparison between successive audits.

The project was designed with a structure oriented toward reuse and maintenance, incorporating automatic result generation, data normalization, and alert mechanisms. At the same time, the architecture, workflow, and technical considerations necessary for others to understand and run the tool were documented.

The final result was the creation of a more complete network auditing solution than originally planned, accompanied by technical documentation and prepared for future expansions.

Related repository:

- <a href="https://github.com/GFullSec/network-audit" target="_blank" rel="noopener noreferrer">https://github.com/GFullSec/network-audit</a>

---

## Module 2

### Vulnerabilities and CVE Analysis

**Status:** ✅ Completed

#### Objectives

- Demonstrate technical analysis capability.

#### Work performed

- Development and improvement of the CVE-Hunter tool.
- Integration with Shodan and FOFA.
- Targeted analysis of the WRT54G router using OpenVAS.
- Full Network audit of the home environment using OpenVAS.
- Specific investigation of the Smart TV.
- Vulnerability correlation and contextual risk analysis.

#### Tools used

- OpenVAS
- CVE-Hunter
- Shodan
- FOFA
- NVD
- Exploit Database
- Python
- Git

#### Result

A complete vulnerability analysis methodology was built, oriented toward real context and decision-making.

#### Process and development

The second module focused on vulnerability analysis and practical understanding of the CVE management lifecycle. Before addressing scans, time was dedicated to the development and improvement of CVE-Hunter, a tool focused on vulnerability correlation and integration with external information sources.

The evolution of the tool enabled work with services such as Shodan and FOFA, while also strengthening knowledge of security APIs, vulnerability databases, and correlation processes. This phase helped to better understand the internal operation of analysis engines before using automated scanning tools.

Subsequently, targeted analyses were conducted using OpenVAS on different assets in the home network. The first case focused on a WRT54G router, used as an exercise in analysis of a single asset. During this phase, a documentation methodology based on observations, analysis, conclusions, and future actions was developed.

Once the methodology was validated, a complete audit of the home network was carried out using OpenVAS. The results allowed for a global view of the environment, identification of devices with greater exposure, and establishment of a security baseline.

The work was not limited to collecting vulnerabilities. Each finding was contextualized according to the analyzed environment, evaluating impact, probability of exploitation, and actual risk. This approach allowed prioritization of actions, distinction between relevant issues and operational noise, and technical justification of the decisions made.

The documentation generated during this module consolidated a modular and reusable working structure, which later became the foundation for the rest of the projects and for the construction of the professional portfolio.

Related repository:

- <a href="https://github.com/GFullSec/CVE-Hunter" target="_blank" rel="noopener noreferrer">https://github.com/GFullSec/CVE-Hunter</a>

---

## Module 3

### System Hardening and Portfolio Start

**Status:** 🔄 In progress

#### Objectives

- Demonstrate defensive security.

#### Work performed

- Start of professional portfolio development.
- Navigation structure design.
- Creation of informational pages.
- Organization of content in Spanish and English.
- Preparation of the space where subsequent modules will be documented.

#### Tools used

- Ubuntu 26.04 LTS
- GitHub Pages
- Markdown
- Git
- Jekyll

#### Expected result

Build a solid foundation to publicly and structurally present the knowledge, projects, and evidence that will be developed during the rest of the roadmap.

---

## Module 4

### Professional Laboratory

**Status:** ⏳ Pending

#### Objectives

- Set up a testing environment for SOC, DevSecOps, and AppSec.

#### Planned tasks

- Create VMs: Kali, Ubuntu Server, and Windows 11.
- Install Metasploitable and OWASP Juice Shop.
- Configure internal network.
- Document the laboratory architecture.

#### Deliverables

- Laboratory documentation.

---

## Module 5

### Security Scripting

**Status:** ⏳ Pending

#### Objectives

- Automate tasks like a real analyst.

#### Planned tasks

- Create Bash scripts for scanning and port analysis.
- Create Python scripts for CVEs, logs, and traffic.
- Document each script.

#### Deliverables

- Bash and Python scripts.

---

## Module 6

### SOC and Log Analysis

**Status:** ⏳ Pending

#### Objectives

- Demonstrate threat detection.

#### Planned tasks

- Analyze logs: syslog, auth.log, firewall, and DNS.
- Detect anomalies: scans, repeated connections, and suspicious DNS.
- Simulate an incident.
- Prepare SOC report.

#### Deliverables

- SOC report (detection, analysis, and mitigation).

---

## Module 7

### Basic DevSecOps

**Status:** ⏳ Pending

#### Objectives

- Demonstrate security in CI/CD.

#### Planned tasks

- Create a pipeline with SAST and DAST.
- Dependency scanning.
- Container scanning.
- Document the pipeline.

#### Deliverables

- Documented mini DevSecOps project.

#### Relationship with the portfolio

The projects, results, and evidence generated during this module will be incorporated into the portfolio started in Module 3.

---

## Module 8

### Portfolio Finalization

**Status:** ⏳ Pending

#### Objectives

- Finalize the professional portfolio.

#### Expected result

Have a complete and structured portfolio that brings together the projects, laboratories, research, and evidence developed throughout the entire transition process.

---

## Expected Final Result

Upon completing the transition process, the following will be available:

- Complete technical portfolio.
- Tools developed in Bash and Python.
- Professional reports on auditing, vulnerabilities, and SOC.
- Documented security laboratory.
- Functional DevSecOps pipeline.
- Practical evidence of learning and professional growth.


---

Last updated: October 2026

<div id="footer" data-include="/assets/includes/footer.html"></div>
<script src="assets/js/header.js?v=8"></script>

