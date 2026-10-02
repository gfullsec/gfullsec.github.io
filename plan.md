---
---

<link rel="stylesheet" href="assets/css/style.css?v=2">
<link rel="icon" type="image/png" href="assets/images/favicon.png">

<div id="header" data-include="/assets/includes/header.html"></div>

# Development Plan

This roadmap outlines the modules I am completing as part of my transition into professional cybersecurity.

Each module combines theoretical learning, hands-on projects, technical documentation, and real evidence of progress.

---

## Overall Progress

- ✅ Module 1: Network Auditing and Automation

- ✅ Module 2: Vulnerabilities and CVE Analysis

- 🔄 Module 3: System Hardening and Portfolio Development

- ⏳ Module 4: Professional Lab

- ⏳ Module 5: Security Scripting

- ⏳ Module 6: SOC and Log Analysis

- ⏳ Module 7: Basic DevSecOps

- ⏳ Module 8: Portfolio Finalization

**Current progress:** 2 modules completed and 1 module in progress.

---

## Technologies and Tools Used

### Operating Systems

- Ubuntu 26.04 LTS
- Windows 11

### Security

- OpenVAS
- Nmap
- arp-scan
- Lynis

### Development and Automation

- Python
- Bash
- Git
- GitHub

### OSINT and Intelligence

- Shodan
- FOFA
- NVD
- Exploit Database

### Documentation

- Markdown
- Mermaid
- GitHub Pages

---

# Module 1

## Network Auditing and Automation

**Status:** ✅ Completed

### Objectives

- Prepare the working environment.
- Perform a complete audit of the home network.

### Work Completed

- Full audit of the home network.
- Development of the network-audit tool.
- Implementation of CSV and JSON reporting.
- Automatic generation of Mermaid diagrams.
- Alert system and historical comparison functionality.

### Tools Used

- Ubuntu 26.04 LTS
- Nmap
- arp-scan
- Bash
- jq
- Git
- Mermaid

### Result

The project evolved from a basic script into a modular network auditing tool designed for repeated executions and comparative analysis.

### Process and Development

The module began with the preparation of the working environment on Ubuntu 26.04 LTS, including system configuration, installation of core tools, and the directory structure used throughout the roadmap.

Once the environment was ready, a complete audit of the home network was carried out through device discovery, service identification, and port analysis. During this phase, tools such as Nmap and arp-scan were used to build an accurate inventory of the infrastructure.

As the audit progressed, the need to automate repetitive tasks became apparent. What initially started as a simple Bash script gradually evolved into a modular tool capable of network discovery, vendor identification, report generation in multiple formats, Mermaid diagram creation, and comparison between successive audits.

The project was designed with reusability and maintainability in mind, incorporating automated result generation, data normalization, and alerting mechanisms. At the same time, the architecture, workflow, and technical considerations were documented to ensure that third parties could understand and execute the tool.

The final result was the creation of a network auditing solution that exceeded the original scope, supported by technical documentation and prepared for future enhancements.

Related repository:

- <a href="https://github.com/GFullSec/network-audit" target="_blank" rel="noopener noreferrer">https://github.com/GFullSec/network-audit</a>

---

# Module 2

## Vulnerabilities and CVE Analysis

**Status:** ✅ Completed

### Objectives

- Demonstrate technical analysis capabilities.

### Work Completed

- Development and improvement of the CVE-Hunter tool.
- Integration with Shodan and FOFA.
- Targeted analysis of the WRT54G router using OpenVAS.
- Full Network audit of the home environment using OpenVAS.
- Specific investigation of the Smart TV.
- Vulnerability correlation and contextualized risk analysis.

### Tools Used

- OpenVAS
- CVE-Hunter
- Shodan
- FOFA
- NVD
- Exploit Database
- Python
- Git

### Result

A complete vulnerability analysis methodology was developed, focused on real-world context and decision-making.

### Process and Development

The second module focused on vulnerability analysis and the practical understanding of the CVE management lifecycle. Before performing scans, time was dedicated to the development and improvement of CVE-Hunter, a tool designed for vulnerability correlation and the integration of external intelligence sources.

The evolution of the tool enabled integration with services such as Shodan and FOFA, while also strengthening knowledge of security APIs, vulnerability databases, and correlation processes. This phase provided a deeper understanding of how analysis engines work before using automated scanning tools.

Targeted analyses were then performed using OpenVAS against different assets within the home network. The first case focused on a WRT54G router and served as an exercise in the assessment of a single asset. During this phase, a documentation methodology based on observations, analysis, conclusions, and future actions was established.

Once this methodology was validated, a full audit of the home network was conducted using OpenVAS. The results provided a comprehensive view of the environment, helped identify the most exposed devices, and established a security baseline.

The work extended beyond simply collecting vulnerabilities. Each finding was contextualized according to the environment, considering impact, likelihood of exploitation, and actual risk. This approach made it possible to prioritize actions, separate relevant issues from operational noise, and technically justify the decisions taken.

The documentation generated during this module consolidated a modular and reusable working structure, which later became the foundation for subsequent projects and the development of the professional portfolio.

Related repository:

- <a href="https://github.com/GFullSec/CVE-Hunter" target="_blank" rel="noopener noreferrer">https://github.com/GFullSec/CVE-Hunter</a>

---

# Module 3

## System Hardening and Portfolio Development

**Status:** 🔄 In Progress

### Objectives

- Demonstrate defensive security capabilities.

### Work Completed

- Started development of the professional portfolio.
- Designed the navigation structure.
- Created informational pages.
- Organized content in Spanish and English.
- Prepared the space where future modules will be documented.

### Tools Used

- Ubuntu 26.04 LTS
- GitHub Pages
- Markdown
- Git
- Jekyll

### Expected Result

Build a solid foundation for publicly and professionally showcasing the knowledge, projects, and evidence developed throughout the rest of the roadmap.

---

# Module 4

## Professional Lab

**Status:** ⏳ Pending

### Objectives

- Build a testing environment for SOC, DevSecOps, and AppSec.

### Planned Tasks

- Create VMs: Kali, Ubuntu Server, and Windows 11.
- Install Metasploitable and OWASP Juice Shop.
- Configure an internal network.
- Document the lab architecture.

### Deliverables

- Lab documentation.

---

# Module 5

## Security Scripting

**Status:** ⏳ Pending

### Objectives

- Automate tasks like a real security analyst.

### Planned Tasks

- Create Bash scripts for scans and port analysis.
- Create Python scripts for CVEs, logs, and traffic analysis.
- Document each script.

### Deliverables

- Bash and Python scripts.

---

# Module 6

## SOC and Log Analysis

**Status:** ⏳ Pending

### Objectives

- Demonstrate threat detection capabilities.

### Planned Tasks

- Analyze logs: syslog, auth.log, firewall, and DNS.
- Detect anomalies: scans, repeated connections, and suspicious DNS activity.
- Simulate an incident.
- Produce a SOC report.

### Deliverables

- SOC report (detection, analysis, and mitigation).

---

# Module 7

## Basic DevSecOps

**Status:** ⏳ Pending

### Objectives

- Demonstrate CI/CD security practices.

### Planned Tasks

- Create a pipeline with SAST and DAST.
- Dependency scanning.
- Container scanning.
- Document the pipeline.

### Deliverables

- Documented mini DevSecOps project.

### Relationship with the Portfolio

The projects, results, and evidence generated during this module will be incorporated into the portfolio initiated in Module 3.

---

# Module 8

## Portfolio Finalization

**Status:** ⏳ Pending

### Objectives

<div id="footer" data-include="/assets/includes/footer.html"></div>
<script src="assets/js/header.js?v=8"></script>

