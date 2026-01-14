// Schema.org Structured Data para SEO semántico
// https://schema.org/

export const baseOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Boiler',
  'url': 'https://ging.github.io/boiler/', //(URL example: https://endgameproject.github.io)
  'logo': 'https://ging.github.io/boiler/assets/logo_boiler.svg',
  'description': 'Customizable website template for research groups and other projects. See documentation at the link below to use the template.',
  'sameAs': [ //SEO Description is the same for social media
    'https://x.com/...',
    'https://www.instagram.com/...'
  ],
  'foundingDate': '2024',
  
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
  'name': '... - Home',
  'url': 'https://...',
  'description': '//',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};

export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About ...',
  'url': 'https://.../about',
  'description': 'Learn about ... project, our mission and partners.',
  'mainEntity': baseOrganizationSchema
};

export const teamPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'TeamPage',
  'name': 'Team',
  'url': 'https://.../team',
  'description': 'Meet our team, working currently in .....',
  'mainEntity': baseOrganizationSchema
};

export const researchPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Research Publications - ....',
  'url': 'https://.../research',
  'description': 'Explore ... research publications and scientific contributions',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};
export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact us - ....',
  'url': 'https://.../contact',
  'description': 'Contact us ...',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};


export const eventsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  'name': '... Events and Workshops',
  'url': 'https://.../events',
  'description': 'Discover ... workshops and participatory design activities across Europe',
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

