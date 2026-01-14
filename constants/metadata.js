export const metadataByPage = {
  home: {
    en: {
      title: "Boiler EN",
      description: "Boiler description EN",
      keywords: "Boiler keywords EN",
    },
    es: {
      title: "Boiler ES",
      description: "Descripción Boiler ES",
      keywords: "Palabras clave Boiler ES",
    },
  },
  about: {
    en: {
      title: "About Boiler",
      description: "Learn about ... project, our mission and partners.",
      keywords: "about",
    },
    es: {
      title: "Sobre el Boiler",
      description: "Conoce el proyecto ... nuestra misión y nuestros partners",
      keywords: "Sobre nosotros",
    },
  },
  team: {
    en: {
      title: "Team - Boiler",
      description: "Meet our team ... currently working on the ...",
      keywords: "team"
    },
    es: {
      title: "Equipo - Boiler",
      description: "Conoce a nuestro equipo, que trabaja actualmente en el proyecto...",
      keywords: "equipo",
    },
  },
  research: {
    en: {
      title: "Research - Boiler",
      description: "Explore ... research publications and scientific contributions",
      keywords: "research, publications"
    },
    es: {
      title: "Investigación - Boiler",
      description: "Explora ... nuestras publicaciones y contribuciones científicas",
      keywords: "publicaciones ,investigación",
    },
  },
  events: {
    en: {
      title: "Events and news - Boiler",
      description: "Discover ... workshops and participatory design activities across Europe",
      keywords: "events,news",
    },
    es: {
      title: "Eventos y noticias - Boiler",
      description: "Descubre ... talleres, eventos y noticias ....",
			keywords: "eventos, noticias",
    },
  },
  contact: {
    en: {
      title: "Contact us - Boiler",
      description: "Contact us ...",
      keywords: "contact",
    },
    es: {
      title: "Contacto - Boiler",
      description: "Contacta con nosotros ...",
      keywords: "contacto",
    },
  },
};

// Función helper para obtener metadata por página e idioma
export function getPageMetadata(page, lang = "en") {
  return (
    metadataByPage[page]?.[lang] ||
    metadataByPage[page]?.en || {
     title: "Boiler EN",
      description: "Boiler description EN",
      keywords: "Boiler keywords EN",
    }
  );
}
