export const en = {
  nav: {
    home: "Home",
    about: "About",
    team: "Team",
    research: "Research",
    contact: "Contact",
    designSystem: "Design system",
    documentation: "Documentation",
    projects: "Projects",
  },
  header: {
    publicationstab: "Publications",
  },
  front: {
    title: "Next Generation Internet Group",
    description:
      "A research group from the Telematics Engineering Department (DIT) at Universidad Politécnica de Madrid (UPM)",
    "action-button": "Our researchlines",
    section1Title: "About us",
    section1Description:
      "Our main research interests are focused on the last technologies in Internet and the WWW, such as HTML5. We have extensive experience in video-conferencing systems, Data Spaces, GenerativeAI and e-Learning. Our latest participation in research projects include ongoing EU-founded and national projects such as Eunomia and FIWARE.",
    latestPublicationsTitle: "Latest publications",
    latestPublicationsButton: "See all publications",
    ResearchLines: {
      sectionTitle: "Research lines",
      button: "See projetcs",
      ResearchLine1: {
        ResearchLineTitle: "Data",
        ResearchLineBody:
          "This line addresses the study and development of advanced technologies for data processing, management, and analysis, including data spaces and digital twins.",
      },
      ResearchLine2: {
        ResearchLineTitle: "Tecnología educativa",
        ResearchLineBody:
          "This line focuses on the design and development of advanced educational technologies, including learning platforms, authoring tools, ia in education and educational escape rooms.",
      },
      ResearchLine3: {
        ResearchLineTitle: "Artificial Intelligence",
        ResearchLineBody:
          "This line focuses on the research and development of artificial intelligence-based applications, including the evaluation of large-scale language models (LLMs), fine-tuning, and retrieval augmented generation (RAG).",
      },
      ResearchLine4: {
        ResearchLineTitle: "Videoconference",
        ResearchLineBody:
          "This line focuses on the development of videoconferencing tools and platforms, such as Isabel and Licode, as well as the application of these technologies to interpretation and multimedia communication, improving the quality, scalability and accessibility of videoconferencing services in professional and educational environments.",
      },
      ResearchLine5: {
        ResearchLineTitle: "Dependable Computing",
        ResearchLineBody:
          "This line focuses on the development of reliable computing systems, addressing fault tolerance, security, high availability and performance in distributed architectures.",
      },
    },
  },

  research: {
    title: "Publications",
    description:
      "This section compiles the group's publications related to our research lines. You can filter the publications by text, date, research line, or type of publication.",
    publicationCards: {
      categories: {
        "article-journal": "Article Journal",
        "paper-conference": "Paper Conference",
        book: "Book",
        chapter: "Chapter",
      },
    },
    "action-button": "Read publication",
    filter: {
      fieldTitle1: "Search",
      fieldTitle2: "Publication type",
      fieldTitle3: "Year",
      "article-journal": "Article Journal",
      "paper-conference": "Conference proceedings",
      book: "Book",
      chapter: "Chapter",
      document: "Document",
      all: "All",
      text: "Results",
    },
    button: "Read publication",
    button2: "Load more",
  },

  projects: {
    title: "Projects",
    description:
      "In this section, you can explore the projects we are currently working on as well as past projects. If you wish, you can filter the projects by their research lines or access specific project pages.",
    filterTitle1: "All",
    filterTitle2: "Projects - individual",
    filterTitle3: "Educational Research Group (GIE/ERG)",
    filterTitle4: "Other",
    button: "Details",
    researchLines: {
      data: "Data",
      ai: "Artificial Intelligence ",
      "e-learning": "E-learning",
      videoconference: "Video Conference",
      computing: "Dependable Computing",
      other: "Other",
      all: "All",
    },
    filter: {
      fieldTitle1: "Name search",
      fieldTitle2: "Project type",
      all: "All",
      "national-project": "National Project",
      "european-project": "European Project",
      "private-project": "Private Project",
    },
    card: {
      toggleMore: "See more",
      toggleLess: "See less",
      button: "Related papers",
    },
    type: {
      "european-project": "European Project",
      "national-project": "National Project",
      "private-project": "Private Project",
    },
  },
  team: {
    title: "Team",
    professorCards: {
      roles: {
        1: "Full Professor", // Catedrático de Universidad
        2: "Associate Professor", // Profesor contratado doctor
        3: "PhD candidate", // Estudiante de doctorado
        4: "Full-Time Technician",
        5: "Professor", // Profesor Titular de Universidad
        6: "Assistant Professor",
        7: "Researcher",
        8: "External colaborator",
      },
    },
  },
  contact: {
    title: "Contact",

    buttonDownload: "Download GING presentation",
    contactmail: {
      ai: "Artificial Intelligence",
      "e-learning": "E-Learning",
      data: "Data Spaces",
      videoconference: "Videoconferencing and WebRTC",
      computing: "Dependable Computing",
      general: "General",
    },
    body: "If you have any questions or inquiries related to our research lines, projects and publications, or want to explore collaboration opportunities, feel free to contact us via our phone or the email addresses listed below. ",
    email: " Email address",
    phone: " Telephone",
    fax: "Fax",
    location: " Location",
    direction1: "E.T.S. DE INGENIEROS DE TELECOMUNICACIÓN",
    direction2: "Av. Complutense, 30, Building B",
    direction3: "28040 Madrid",
  },

  tools: {
    title: "Tools",
    description:
      "These are some of the tools we have developed. If you are interested in any of our tools, whether it's to use or customize it, you can get in touch with us. ",
    toolCards: {
      description: {
        1: "SGAME is a free web platform meant for the entire educational community that allows users to easily create educational web games by integrating educational resources into existing games.",
        2: "The purpose of this project is to encourage and facilitate the completion of educational escape rooms in UPM subjects. To accomplish this, a platform that facilitates the management of the activity has been developed. In this platform, the teacher can create an escape room instance where the students can access and that once the activity has been completed, it automatically collects the progress and achievement data of the students. In addition, a methodological guide has been developed to import the concept of escape room into university education using the platform developed. ",
        3: "This quiz converter facilitates the conversion between different formats: Moodle XML, Aiken and JSON.",
        4: "This website allows users to customize their very own quiz application and generate a SCORM package ready to upload to their preferred LMS. This project was developed using RESCORM.",
        5: "Web-based editor to create self-graded HTML and JavaScript exercises.",
        6: "LOEP (Learning Object Evaluation Platform) is an open source web-based platform developed using Ruby on Rails that aims to facilitate the evaluation of small and self-contained web educational resources, known as Learning Objects, in different scenarios and educational contexts. It has been designed to provide systematic evaluation of Learning Objects and generation of quality scores to e-Learning systems according to multiple evaluation models and quality metrics. LOEP provides several features including user and Learning Object management, Learning Object evaluations tools, review assignments, interoperability with e-Learning systems, and statistics. ",
        7: "A Hybrid Learning Object Recommender System based on Europeana. ",
        8: "RESCORM is a boilerplate for creating SCORM-compliant React applications that aims to facilitate developers the creation of SCORM-compliant learning resources.",
      },
      button: "See tool",
    },
  },
  footer: {
    title1: "Sections",
    title2: "Follow us!",
    title3: "Partners",
    logoSub: "Future Networks for Datacenters and Telcos",
    titleRight:
      "Future Networks for Datacenters and Telcos (FuN4DaTe)  © 2024. All rights reserved.",
    titleRight2: "",
    email: "Contact Email:",
  },
};
