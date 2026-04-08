export const metadataByPage = {
  home: {
    en: {
      title: "GING - Next Generation Internet Group",
      description: "New Generation Internet Research Group, focused on educational innovation, data spaces, networks, videoconferencing, and Artificial Intelligence.",
      keywords: "Research Group, Research Team, UPM, ETSIT, Artificial Intelligence, Networks, Videoconferencing, Data Spaces, Educational Innovation, publications, projects, collaboration",
    },
    es: {
      title: "GING - Grupo de Internet de Nueva Generación",
      description: "Grupo de Investigación de Internet de Nueva Generación, centrado en innovación educativa, espacios de datos, redes, videoconferencia e Inteligencia Artificial.",
      keywords: "Grupo Investigación, Grupo de investigación, UPM, ETSIT, Inteligencia Artificial, Redes, Videoconferencia, Espacios de Datos, Innovación Educativa, publicaciones, proyectos, colaboración",
    },
  },
 
  team: {
    en: {
      title: "Team - Next Generation Internet Group",
      description: "Meet our team, working currently in the following research lines: educational innovation, data spaces, networks, videoconferencing, and Artificial Intelligence. The group is made up of professors, associate and assistant professors, PhD candidates, designers, interns and other researchers.",
      keywords: "team, professors, associate professors, assistant professor, PhD Candidate, researchers"
    },
    es: {
      title: "Equipo - Grupo de Internet de Nueva Generación",
      description: "Conoce a nuestro equipo, que actualmente trabaja en las siguientes líneas de investigación: innovación educativa, espacios de datos, redes, videoconferencias e inteligencia artificial. El grupo está formado por profesores, profesores asociados y adjuntos, doctorandos, diseñadores, becarios y otros investigadores. ",
      keywords: "equipo, profesores, profesores ayudantes, profesor titular, candidato a doctorado, investigadores",
    },
  },
  research: {
    en: {
      title: "Research - Next Generation Internet Group",
      description: "Explore our compilation of research publications and scientific contributions. You can filter the publications by text, date, research line, or type of publication.",
      keywords: "research, papers, publications, educational innovation, data spaces, networks, videoconferencing, and Artificial Intelligence"
    },
    es: {
      title: "Investigación - Grupo de Internet de Nueva Generación",
      description: "Explora nuestra recopilación de publicaciones de investigación y contribuciones científicas. Puedes filtrar las publicaciones por texto, fecha, línea de investigación o tipo de publicación.",
      keywords: "publicaciones, papers, investigación, innovación educativa, los espacios de datos, las redes, las videoconferencias y la inteligencia artificial",
    },
  },
  events: {
    en: {
      title: "Events and news - Next Generation Internet Group",
      description: "Discover our current and past events, workshops and news.",
      keywords: "events, news, workshops, presentations",
    },
    es: {
      title: "Eventos y noticias - Grupo de Internet de Nueva Generación",
      description: "Descubre nuestros eventos, talleres y novedades actuales y pasados.",
			keywords: "eventos, noticias, workshop, presentaciones",
    },
  },
  contact: {
    en: {
      title: "Contact us - Next Generation Internet Group",
      description: "If you have any questions or inquiries related to our research lines, projects and publications, get in touch!",
      keywords: "contact, inquiries, possible collaboration, institutional collaboration",
    },
    es: {
      title: "Contacto - Grupo de Internet de Nueva Generación",
      description: "Contacta con nosotros para cualquier duda o consulta relacionada con nuestras líneas de investigación, proyectos y publicaciones",
      keywords: "contacto, consultas, posible colaborción, colaboración institucional",
    },
  },
  projects: {
    en: {
      title: "Projects - Next Generation Internet Group",
      description: "Explore our current and past projects in the fields of educational innovation, data spaces, networks, videoconferencing, and Artificial Intelligence. We lead European, national, and private projects, driving advanced and collaborative technological solutions.",
      keywords: "Networks, Videoconferencing, Data Spaces, Educational Innovation, institutional collaboration, national projects, european projects, technology projects, technology research projects, telematics research projects, education research projects ",
    },
    es: {
      title: "Proyectos - Grupo de Internet de Nueva Generación",
      description: "Explora nuestros proyectos actuales y anteriores en los ámbitos de la innovación educativa, los espacios de datos, las redes, la videoconferencia y la Inteligencia Artificial. Lideramos proyectos europeos, nacionales y privados, impulsando soluciones tecnológicas avanzadas y colaborativas.",
      keywords: "Redes, videoconferencias, espacios de datos, innovación educativa, colaboración institucional, proyectos nacionales, proyectos europeos, proyectos tecnológicos, proyectos de investigación tecnológica, proyectos de investigación telemática, proyectos de investigación educativa",
    },
  },
};

// Función helper para obtener metadata por página e idioma
export function getPageMetadata(page, lang = "en") {
  return (
    metadataByPage[page]?.[lang] ||
    metadataByPage[page]?.en || {
      title: "GING - Next Generation Internet Group",
      description: "New Generation Internet Research Group, focused on educational innovation, data spaces, networks, videoconferencing, and Artificial Intelligence.",
      keywords: "Research Group, Research Team, UPM, ETSIT, Artificial Intelligence, Networks, Videoconferencing, Data Spaces, Educational Innovation, publications, projects, collaboration",
    }
  );
}
