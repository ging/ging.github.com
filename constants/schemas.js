// Schema.org Structured Data para SEO semántico
// https://schema.org/

export const baseOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'GING - Next Generation Internet Group',
  'url': 'https://ging.github.io/', //(URL example: https://endgameproject.github.io)
  'logo': 'https://ging.github.io/boiler/assets/ging_logo.png',
  'description': 'A research group from the Telematics Engineering Department (DIT) at Universidad Politécnica de Madrid (UPM).We are focused on educational innovation, data spaces, networks, videoconferencing, and Artificial Intelligence.',
  'sameAs': [ //SEO Description is the same for social media
    'https://x.com/GING_UPM',
    'https://github.com/ging',
    'https://www.youtube.com/user/FirefoxOSHTML5/featured',
    'https://www.researchgate.net/lab/Next-Generation-Internet-Group-Juan-Quemada'
  ],
  'foundingDate': '2015',
  
  // keywords example
  'knowsAbout': [
    'Boiler',
    'Website',
    'GING',
    'Next Generation Internet Group'
  ]
};

export const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'GING - Next Generation Internet Group',
  'url': 'https://ging.github.io/',
  'description': 'A research group from the Telematics Engineering Department (DIT) at Universidad Politécnica de Madrid (UPM). We are focused on educational innovation, data spaces, networks, videoconferencing, and Artificial Intelligence.',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};

export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About Next Generation Internet Group',
  'url': 'https://ging.github.io/about',
  'description': 'Learn about GING Next Generation Internet Group, our mission and partners.',
  'mainEntity': baseOrganizationSchema
};

export const teamPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'TeamPage',
  'name': 'Team - Next Generation Internet Group',
  'url': 'https://ging.github.io/team',
  'description': 'Meet our team, working currently in the following research lines: educational innovation, data spaces, networks, videoconferencing, and Artificial Intelligence. The group is made up of professors, associate and assistant professors, PhD candidates, designers, interns and other researchers. Next Generation Internet Group',
  'mainEntity': baseOrganizationSchema
};

export const researchPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Research Publications - Next Generation Internet Group',
  'url': 'https://ging.github.io/research',
  'description': 'Explore our compilation of research publications and scientific contributions. You can filter the publications by text, date, research line, or type of publication.',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};
export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact us - Next Generation Internet Group',
  'url': 'https://ging.github.io/contact',
  'description': 'Get in touch with us for any questions or inquiries related to our research lines, projects and publications.',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};

export const projectsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProjectsPage',
  'name': 'Projects - Next Generation Internet Group',
  'url': 'https://ging.github.io/events',
'description': "Explore our current and past projects in the fields of educational innovation, data spaces, networks, videoconferencing, and Artificial Intelligence. We lead European, national, and private projects, driving advanced and collaborative technological solutions.",
  'organizer': baseOrganizationSchema
};

export const eventsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  'name': 'Events and Workshops - Next Generation Internet Group',
  'url': 'https://ging.github.io/events',
  'description': 'Discover our current and past events, workshops and news.',
  'organizer': baseOrganizationSchema
};

// Breadcrumb List Schema
export function createBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

// Event Schema para un evento específico
export function createEventSchema(event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': event.name,
    'description': event.description,
    'url': event.url,
    'startDate': event.startDate,
    'endDate': event.endDate,
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode',
    'location': {
      '@type': 'Place',
      'name': event.location,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': event.country
      }
    },
    'organizer': baseOrganizationSchema
  };
}

// Article Schema para publicaciones
export function createArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    'headline': article.title,
    'description': article.abstract || article.description,
    'url': article.url,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'datePublished': article.publishDate,
    'dateModified': article.modifiedDate || article.publishDate,
    'keywords': article.keywords,
    'publisher': baseOrganizationSchema
  };
}

