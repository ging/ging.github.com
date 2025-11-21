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
      "action-button": "Ver líneas de investigación",
    section1Title: "Sobre nosotros",
      "section1Description": "Nuestros principales intereses de investigación se centran en tecnologías de espacios de datos, IA generativa, e-Learning y sistemas de videoconferencia. Tenemos una amplia experiencia en diseño de protocolos y especificaciones así como en el desarrollo de componentes software y casos de uso en estas áreas. Participamos en proyectos de investigación competitivos de financiación pública a nivel nacional y europeo y en convenios de colaboración con empresas.",
    section1Subtitle: "Principios del proyecto",
       statistics: {
      papers: "publicaciones",
      citations: "citas",
      projects: "proyectos",
    },
    // latestPublicationsTitle: "Últimas publicaciones",
    // latestPublicationsButton: "Ver todas las publicaciones",
    ResearchLines: {
      sectionTitle: "Líneas de investigación",
       "button": "Ver proyectos",
      ResearchLine1: {
        ResearchLineTitle: "Datos",
        ResearchLineBody:
          "Esta línea aborda el estudio y desarrollo de tecnologías avanzadas para el procesamiento, gestión y análisis de datos, incluyendo espacios de datos y gemelos digitales.",
      },
      ResearchLine2: {
        ResearchLineTitle: "Tecnología educativa",
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
        "patent":"Patente",
        "thesis":"Tesis",
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
      "patent":"Patente",
      "thesis":"Tesis",
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
      "other": "Otros",
      "all": "Todo",
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
      button: "Ver herramienta"
    },
  },
  courses: {
    title: "Cursos",
    description:
      "Aquí puedes ver nuestros MOOCs y cursos online",
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
