---
---

<link rel="stylesheet" href="../assets/css/style.css?v=2">
<link rel="icon" type="image/png" href="../assets/images/favicon.png">

<div id="header" data-include="../assets/includes/header-es.html"></div>


## I+D

Esta sección presenta **EyeIDProject** y **DependencyExplorer**, dos proyectos técnicos desarrollados a lo largo de mi trayectoria profesional y personal.

Las descripciones se centran en los problemas abordados, las soluciones diseñadas, las tecnologías utilizadas y el valor aportado en entornos reales, sin revelar detalles sensibles de implementación.

Los proyectos presentados reflejan experiencia en análisis de sistemas complejos, automatización, visualización de datos, ingeniería de software y apoyo a procesos de auditoría y ciberseguridad.

# EyeIDProject

## Visión General

**EyeIDProject** es una herramienta desarrollada para facilitar la comprensión de ecosistemas de datos complejos mediante la visualización automática de relaciones entre entidades de bases de datos empresariales.

El proyecto fue concebido para abordar uno de los desafíos más frecuentes en grandes organizaciones: comprender sistemas con cientos de tablas interconectadas y documentación insuficiente o desactualizada.

Mediante técnicas avanzadas de análisis y visualización, la herramienta transforma modelos relacionales complejos en representaciones gráficas intuitivas que permiten explorar dependencias, identificar componentes críticos y acelerar el entendimiento de la arquitectura de datos.

---

<div align="center">
    <video
        autoplay
        loop
        muted
        playsinline
        style="max-width: 900px; width: 100%; border-radius: 12px;"
    >
        <source src="../assets/videos/EyeOne.webm" type="video/webm">
        Tu navegador no soporta vídeos HTML5.
    </video>
</div>

---

## El Problema

A medida que las aplicaciones evolucionan, las bases de datos crecen en tamaño y complejidad.

En muchos casos, la documentación no refleja el estado real del sistema, lo que dificulta:

- Comprender el impacto de los cambios.
- Incorporar nuevos miembros al equipo.
- Diseñar pruebas funcionales.
- Analizar dependencias entre módulos.
- Detectar puntos críticos de la arquitectura.

Cuando una base de datos supera varios cientos de tablas, obtener una visión global del sistema se convierte en una tarea extremadamente compleja.

---

## La Solución

EyeIDProject automatiza el descubrimiento y análisis del modelo relacional para generar una representación visual de la estructura completa de la base de datos.

Sus principales capacidades incluyen:

- Descubrimiento automático de tablas y relaciones.
- Extracción de claves primarias y foráneas.
- Construcción de modelos jerárquicos.
- Visualización interactiva mediante grafos.
- Navegación por dependencias entre entidades.
- Análisis exploratorio de arquitecturas de datos complejas.

El resultado es una visión global que facilita la comprensión técnica y funcional del sistema.

---

## Tecnologías Utilizadas

- ASP.NET Core MVC
- C#
- D3.js
- SQL Server
- Azure SQL Database
- Oracle Database
- Azure DevOps
- CI/CD
- Visualización avanzada de grafos

---

## Valor Aportado

EyeIDProject permitió:

- Reducir los tiempos de análisis inicial de sistemas complejos.
- Facilitar la documentación técnica de aplicaciones heredadas.
- Mejorar la comprensión de dependencias funcionales.
- Apoyar procesos de pruebas y aseguramiento de calidad.
- Acelerar tareas de mantenimiento evolutivo.
- Facilitar la generación de datos de prueba en entornos complejos.

---

## Aplicación en Ciberseguridad

Aunque fue concebido como una herramienta de análisis de arquitectura de datos, sus capacidades también tienen aplicación directa en actividades relacionadas con la seguridad:

- Identificación de flujos de datos sensibles.
- Localización de elementos críticos dentro del modelo relacional.
- Apoyo a auditorías técnicas.
- Análisis de dependencias para evaluación de riesgos.
- Comprensión de superficies de exposición de la información.
- Soporte para iniciativas de gobernanza y clasificación de datos.

---

## Principales Aprendizajes

Durante el desarrollo del proyecto se profundizó en áreas como:

- Modelado de sistemas complejos.
- Visualización avanzada de datos.
- Optimización de consultas sobre grandes volúmenes de información.
- Diseño de herramientas de exploración interactiva.
- Automatización de procesos de documentación técnica.
- Análisis arquitectónico de bases de datos empresariales.

---

## Confidencialidad

Por motivos de confidencialidad y protección de la propiedad intelectual, no se publican:

- Fragmentos de código fuente.
- Consultas SQL.
- Estructuras internas de bases de datos.
- Configuraciones de infraestructura.
- Pipelines de integración y despliegue.
- Información perteneciente a terceros.

La información presentada tiene como único objetivo mostrar el enfoque técnico, los desafíos abordados y el valor aportado por la solución desde una perspectiva arquitectónica y metodológica.

# DependencyExplorer

## Visión general

**DependencyExplorer** es una herramienta desarrollada para identificar posibles dependencias entre objetos SQL en sistemas legacy cuyas relaciones no están completamente representadas mediante claves foráneas.

El proyecto surgió ante un problema práctico: al analizar una base de datos legacy sin claves foráneas, el esquema por sí solo no permitía comprender con claridad cómo fluía la lógica de negocio entre los procedimientos almacenados y otros objetos SQL.

DependencyExplorer analiza archivos de código SQL, busca referencias a los nombres de otros objetos y exporta las dependencias inferidas en formato JSON. Los resultados pueden consultarse de forma independiente o utilizarse para ampliar el grafo generado por EyeIDProject.

---

## El problema

En sistemas legacy, algunas dependencias importantes pueden estar expresadas en el código SQL en lugar de declararse mediante claves foráneas. Por ello, el esquema de la base de datos puede no mostrar cómo se relacionan los procedimientos almacenados y otros objetos SQL.

Esto puede dificultar:

- Seguir las posibles dependencias entre objetos SQL.
- Comprender cómo fluye la lógica de negocio por el sistema.
- Evaluar qué objetos podrían verse afectados por un cambio.
- Obtener una visión más amplia del sistema cuando la documentación es incompleta.

---

## La solución

DependencyExplorer analiza archivos SQL e identifica posibles dependencias buscando referencias a los nombres de otros objetos SQL. Registra tanto las dependencias como los objetos dependientes.

Los datos generados pueden explorarse de dos formas:

- **Consulta de un objeto:** cargar los resultados y buscar un objeto concreto para consultar sus posibles dependencias y los objetos que dependen de él.
- **Visualización global:** generar un archivo JSON compatible con el grafo que EyeIDProject puede consumir para visualizar el conjunto de dependencias.

El análisis procesa varios archivos de forma concurrente, lo que ayuda a trabajar con bases de código de mayor tamaño de forma más eficiente.

---

## Tecnologías utilizadas

- C#
- .NET 8
- Procesamiento en paralelo
- Expresiones regulares
- Newtonsoft.Json
- JSON
- Exportación de datos compatible con D3.js

---

## Aplicaciones en ciberseguridad

El mapeo de posibles dependencias entre objetos SQL puede apoyar el análisis de seguridad y ayudar a:

- Comprender cómo se conecta la lógica relacionada con los datos en un sistema legacy.
- Identificar objetos y procesos de negocio que podrían requerir una revisión más detallada.
- Evaluar el posible alcance de cambios en código SQL durante una remediación de seguridad.
- Aportar contexto arquitectónico a auditorías técnicas y evaluaciones de riesgos.

Los resultados se infieren a partir de referencias textuales en los archivos fuente; sirven como apoyo a la investigación y no sustituyen la validación por parte de los responsables del sistema o de un analista de seguridad.

---

## Valor aportado

DependencyExplorer complementa el análisis del esquema al revelar posibles relaciones que no están declaradas como claves foráneas. La exportación a JSON facilita explorar visualmente estas relaciones, mientras que el procesamiento concurrente permite analizar colecciones más amplias de archivos SQL.

---

## Relación con EyeIDProject

DependencyExplorer se desarrolló como complemento de EyeIDProject. EyeIDProject visualiza las relaciones presentes en el modelo de datos, mientras que DependencyExplorer ayuda a identificar posibles dependencias adicionales en los archivos SQL. Juntos ofrecen una visión más amplia de la estructura de datos y código de un sistema legacy.

<div id="footer" data-include="../assets/includes/footer-es.html"></div>
<script src="../assets/js/header.js?v=8"></script>