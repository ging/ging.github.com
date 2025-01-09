"use client";

export const es = {
  nav: {
    home: "Home",
    about: "Sobre [proyecto]",
    team: "Equipo",
    research: "Publicaciones",
    contact: "Contacto",
    designSystem: "Sistema de diseño",
    documentation: "Documentación",
    projects: "Proyectos",
  },
  header: {
    publicationstab: "Publicaciones",
  },
  front: {
    title: "Grupo de Internet de Nueva Generación",
    description:
      "Un grupo de investigación del Departamento de Ingeniería Telemática (DIT) de la Universidad Politécnica de Madrid (UPM)",
    "action-button": "Nuestras líneas de investigación",
    section1Title: "Sobre nosotros",
  "section1Description": "Nuestros principales intereses de investigación se centran en las últimas tecnologías de Internet y la WWW, como HTML5. Tenemos una amplia experiencia en sistemas de videoconferencia, espacios de datos, IA generativa y e-Learning. Nuestra última participación en proyectos de investigación incluye proyectos en curso financiados por la UE y nacionales como Eunomia y FIWARE.",
    section1Subtitle: "Principios del proyecto",
    latestPublicationsTitle: "Últimas publicaciones",
    latestPublicationsButton: "Ver todas las publicaciones",
    ResearchLines: {
      sectionTitle: "Líneas de investigación",
       "button": "Ver proyectos",
      ResearchLine1: {
        ResearchLineTitle: "Datos",
        ResearchLineBody:
          "Esta línea aborda el estudio y desarrollo de tecnologías avanzadas para el procesamiento, gestión y análisis de datos, incluyendo espacios de datos y gemelos digitales.",
      },
      ResearchLine2: {
        ResearchLineTitle: "E-Learning",
        ResearchLineBody:
          "Esta línea se centra en el diseño y desarrollo de tecnologías educativas avanzadas, incluyendo plataformas de aprendizaje, herramientas de autor, ia en educación y escape rooms educativas.",
      },
      ResearchLine3: {
        ResearchLineTitle: "Inteligencia Artificial",
        ResearchLineBody:
          "Esta línea se enfoca en la investigación y desarrollo de aplicaciones basadas en inteligencia artificial, incluyendo la evaluación de modelos de lenguaje de gran escala (LLMs), ajuste fino (fine-tuning), recuperación aumentada por generación (RAG).",
      },
      ResearchLine4: {
        ResearchLineTitle: "Videoconferencia",
        ResearchLineBody:
          "Esta línea se centra en el desarrollo de herramientas y plataformas de videoconferencia, como Isabel y Licode, así como en la aplicación de estas tecnologías a la interpretación y la educación.",
      },
      ResearchLine5: {
        ResearchLineTitle: "Computación Fiable",
        ResearchLineBody: "Esta línea se enfoca en el desarrollo de sistemas de computación fiables, abordando la tolerancia a fallos, seguridad, alta disponibilidad y rendimiento en arquitecturas distribuidas.",
    },
    },
  },
  research: {
    title: "Publicaciones",
    description:
      "Esta sección recopila las publicaciones del GING relacionadas con nuestras líneas de investigación. Puedes filtrar las publicaciones por texto, fecha, línea de investigación, o tipo de publicación.",
    publicationCards: {
      categories: {
        "article-journal": "Artículo de revista",
        "paper-conference": "Acta de congreso",
        book: "Libro",
        chapter: "Capítulo",
      },
    },
    "action-button": "Leer publicación",
    filter: {
      fieldTitle1: "Buscar",
      fieldTitle2: "Tipo de publicación",
      fieldTitle3: "Año",
      "article-journal":"Artículos de revista",
      "paper-conference":"Actas de congreso",
      "book":"Libro",
      "chapter":"Capítulo",
      "document":"Documento",
      "all":"Todos",      
      text: "Resultados",
    },
    button: "Leer publicación",
    button2: "Ver más",
  },

  projects: {
    title: "Proyectos",
    description :"En esta sección puedes explorar los proyectos en los que estamos trabajando actualmente y proyectos pasados. Si lo deseas, puedes filtrar los proyectos según sus líneas de investigación o acceder a las páginas específicas de los proyectos.",
    button: "Detalles",
    researchLines: {
      "data": "Datos",
      "ai": "Inteligencia Artificial",
      "e-learning": "E-learning",
      "videoconference": "Videoconferencia",
      "computing": "Computación Fiable",
      other: "Otros",
      all: "Todo",
    },
    "filter": {
      "fieldTitle1":"Búsqueda por nombre",
      "fieldTitle2":"Tipo de proyecto",
      "all":"Todo",
      "national-project":"Proyecto nacional",
      "european-project":"Proyecto europeo",
      "private-project":"Proyecto privado",
  },
    "card": {
      "toggleMore": "Ver más",
      "toggleLess": "Ver menos",
      "button": "Publicaciones relacionadas"
  },
  "type": {
    "european-project": "Proyecto europeo",
    "national-project": "Proyecto nacional",
    "private-project": "Proyecto privado"
}
  },
  team: {
    title: "Equipo",
    professorCards: {
    "roles":{
                "professor":"Profesor Titular de Universidad",
                "associate":"Profesor Contratado Doctor",
                "phd":"Candidato de Doctorado",
                "fulltec":"Técnico a Tiempo Completo",
                "fullprofessor":"Catedrático de Universidad", // Full Professor
                "assistant":"Profesor Ayudante Doctor", 
                "researcher":"Investigador",
                "external":"Personal Externo"
            },
    },
  },
  contact: {
    title: "Contacto",

    buttonDownload: "Descargar Presentación del Ging",
    "contactmail": {
      "ai": "Inteligencia Artificial ",
      "e-learning": "E-Learning",
      "data": "Espacios de datos",
      "videoconference": "Videoconferencia y WebRTC",
      "computing": "Computación Fiable",
      "general": "General"
    
  },
    body: "Si tienes alguna duda o consulta relacionada con nuestras líneas de investigación, proyectos y publicaciones, o si deseas explorar posibilidades de colaboración, contáctanos a través de nuestro teléfono o los correos electrónicos indicados a continuación. ",
    email: "Dirección de correo",
    phone: " Teléfono",
    fax: " Fax",
    location: " Localización",
    direction1: "E.T.S. DE INGENIEROS DE TELECOMUNICACIÓN",
    direction2: "Av. Complutense, 30, Edificio B",
    direction3: "28040 Madrid",
  },

  tools: {
    title: "Herramientas",
    description: "Estas son algunas de las herramientas que hemos desarrollado. Si estás interesado en alguna herramienta, ya sea para utilizarla o personalizarla puedes ponerte en contacto con nosotros.",

    toolCards: {
      description: {
        1: "SGAME es una plataforma gratuita diseñada para toda la comunidad educativa, que permite a los usuarios crear con facilidad juegos web educativos integrando recursos educativos a juegos ya existentes. ",
        2: "El propósito de este proyecto es fomentar y facilitar la realización de escape rooms educacionales en asignaturas de UPM. Para lograr esto, se ha desarrollado una plataforma que facilita la administración de la actividad desarrollada. En esta plataforma, el profesor puede crear una instancia de escape room la cual los estudiantes pueden acceder y que recolecta automáticamente el progreso y los datos de logros de los estudiantes una vez ha sido completada. Además de esto, se ha desarrollado una guía metodológica para importar el concepto de la escape room en la formación universitaria. ",
        3: "Este convertidor de quiz facilita la conversión entre los diferentes formatos: Moodle XML, Aiken y JSON",
        4: "Esta web permite a los usuarios personalizar sus propias aplicaciones de quiz y generar un paquete SCORM listo para subir a su LMS de preferencia. Este proyecto se desarrolló usando RESCORM.",
        5: "Editor web-based para crear ejercicios auto calificados de HTML y Javascript ",
        6: "LOEP (Learning Object Evaluation Platform) es una plataforma web-based de código abierto desarrollada usando Ruby on Rails que pretende facilitar la evaluación de pequeños recursos web educacionales autocontenidos, conocidos como Learning Objects, en diferentes escenarios y contextos educacionales. Se ha diseñado para proporcionar evaluación sistemática de los Learning Objects y generar calificaciones de calidad para sistemas de e-Learning de acuerdi con múltiples modelos de evaluación y métricas de calidad. LOEP proporciona gran cantidad de características incluyendo la administración de usuario y Learning Object, herramientas de evaluación de Learning Objects, revisión de tareas, interoperabilidad con sistemas de e-Learning, y estadísticas. ",
        7: "Un sistema recomendador híbrido de Learning Objects basado en Europeana ",
        8: "RESCORM es un boilerplate para crear aplicaciones de React que cumplan con SCORM cuya finalidad es facilitar a los desarrolladores la creación de recursos de aprendizaje SCORM.",
      },
      button: "Ver herramienta",
    },
  },
  footer: {
    title1: "Secciones",
    title2: "Síguenos en:",
    title3: "Colaboran",
    logoSub:
      "Redes Futuras para Centros de Datos y Empresas de Telecomunicaciones",
    titleRight: "Departamento de Ingeniería de sistemas telemáticos",
    titleRight2: "ETSI telecomunicación",
    email: "Correo de contacto:",
  },
};
