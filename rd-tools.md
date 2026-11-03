---
---

<link rel="stylesheet" href="assets/css/style.css?v=2">
<link rel="icon" type="image/png" href="assets/images/favicon.png">

<div id="header" data-include="/assets/includes/header.html"></div>

## R&D

This section showcases **EyeIDProject** and **DependencyExplorer**, two technical projects developed throughout my professional and personal career.

The descriptions focus on the problems addressed, the solutions designed, the technologies used, and the value delivered in real-world environments, without disclosing sensitive implementation details.

The projects presented reflect experience in complex systems analysis, automation, data visualization, software engineering, and supporting audit and cybersecurity processes.

# EyeIDProject

## Overview

**EyeIDProject** is a tool developed to make complex data ecosystems easier to understand by automatically visualizing relationships between entities in enterprise databases.

The project was conceived to address one of the most common challenges in large organizations: understanding systems with hundreds of interconnected tables and insufficient or outdated documentation.

Using advanced analysis and visualization techniques, the tool transforms complex relational models into intuitive graphical representations that make it possible to explore dependencies, identify critical components, and gain a faster understanding of the data architecture.

---

<div align="center">
    <video
        autoplay
        loop
        muted
        playsinline
        style="max-width: 900px; width: 100%; border-radius: 12px;"
    >
        <source src="/assets/videos/EyeOne.webm" type="video/webm">
        Your browser does not support HTML5 video.
    </video>
</div>

---

## The Problem

As applications evolve, databases grow in size and complexity.

In many cases, the documentation does not reflect the system's actual state, making it difficult to:

- Understand the impact of changes.
- Onboard new team members.
- Design functional tests.
- Analyze dependencies between modules.
- Identify critical points in the architecture.

When a database contains several hundred tables, gaining an overall view of the system becomes extremely challenging.

---

## The Solution

EyeIDProject automates the discovery and analysis of the relational model to generate a visual representation of the entire database structure.

Its main capabilities include:

- Automatic discovery of tables and relationships.
- Extraction of primary and foreign keys.
- Construction of hierarchical models.
- Interactive graph-based visualization.
- Navigation of dependencies between entities.
- Exploratory analysis of complex data architectures.

The result is an overall view that makes the system easier to understand from both technical and functional perspectives.

---

## Technologies Used

- ASP.NET Core MVC
- C#
- D3.js
- SQL Server
- Azure SQL Database
- Oracle Database
- Azure DevOps
- CI/CD
- Advanced graph visualization

---

## Value Delivered

EyeIDProject helped to:

- Reduce the time required for initial analysis of complex systems.
- Make it easier to create technical documentation for legacy applications.
- Improve understanding of functional dependencies.
- Support testing and quality assurance processes.
- Accelerate ongoing maintenance.
- Facilitate test data generation in complex environments.

---

## Cybersecurity Applications

Although it was conceived as a data architecture analysis tool, its capabilities also have direct applications in security-related activities:

- Identifying sensitive data flows.
- Locating critical elements within the relational model.
- Supporting technical audits.
- Analyzing dependencies for risk assessment.
- Understanding information exposure surfaces.
- Supporting data governance and classification initiatives.

---

## Key Takeaways

Developing the project provided an opportunity to deepen expertise in areas such as:

- Complex systems modeling.
- Advanced data visualization.
- Query optimization across large volumes of data.
- Design of interactive exploration tools.
- Automation of technical documentation processes.
- Architectural analysis of enterprise databases.

---

## Confidentiality

Due to confidentiality and intellectual property protection requirements, the following are not published:

- Source code snippets.
- SQL queries.
- Internal database structures.
- Infrastructure configurations.
- Integration and deployment pipelines.
- Information belonging to third parties.

The information presented is intended solely to showcase the solution's technical approach, the challenges addressed, and the value delivered from an architectural and methodological perspective.

# DependencyExplorer

## Overview

**DependencyExplorer** is a tool developed to identify potential dependencies between SQL objects in legacy systems where relationships are not fully represented by foreign keys.

The project grew out of a practical challenge: when analyzing a legacy database without foreign keys, the schema alone did not provide a clear view of how business logic flowed between stored procedures and other SQL objects.

DependencyExplorer analyzes SQL source files, searches for references to other object names, and exports the inferred dependencies as JSON. The results can be explored on their own or used to extend the graph generated by EyeIDProject.

---

## The Problem

In legacy systems, important dependencies may be expressed in SQL code rather than declared as foreign keys. As a result, the database schema alone may not show how stored procedures and other SQL objects relate to one another.

This can make it harder to:

- Trace potential dependencies between SQL objects.
- Understand how business logic flows through the system.
- Assess which objects may be affected by a change.
- Build a broader view of the system when documentation is incomplete.

---

## The Solution

DependencyExplorer scans SQL files and identifies potential dependencies by searching for references to the names of other SQL objects. It records both dependencies and dependent objects.

The generated data can be explored in two ways:

- **Object-level lookup:** load the results and search for a specific object to inspect its potential dependencies and dependents.
- **Global visualization:** generate a graph-compatible JSON file that EyeIDProject can consume to visualize the broader set of dependencies.

The analysis processes multiple files concurrently, helping it handle larger codebases more efficiently.

---

## Technologies Used

- C#
- .NET 8
- Parallel processing
- Regular expressions
- Newtonsoft.Json
- JSON
- D3.js-compatible data export

---

## Cybersecurity Applications

Mapping potential dependencies between SQL objects can support security analysis by helping to:

- Understand how data-related logic is connected across a legacy system.
- Identify objects and business processes that may warrant closer review.
- Assess the potential reach of changes to SQL code during security remediation.
- Provide architectural context for technical audits and risk assessments.

The results are inferred from textual references in source files; they support investigation but do not replace validation by system owners or security analysts.

---

## Value Delivered

DependencyExplorer complements schema-based analysis by surfacing potential relationships that are not declared as foreign keys. Its JSON output makes those relationships easier to explore visually, while concurrent file processing supports analysis of larger collections of SQL files.

---

## Relationship to EyeIDProject

DependencyExplorer was developed as a companion to EyeIDProject. EyeIDProject visualizes relationships found in the database model, while DependencyExplorer helps identify additional potential dependencies in SQL source files. Together, they provide a broader view of a legacy system's data and code structure.

<div id="footer" data-include="/assets/includes/footer.html"></div>
<script src="assets/js/header.js?v=8"></script>
