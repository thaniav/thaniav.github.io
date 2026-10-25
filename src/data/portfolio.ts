export const experiences = [
  {
    company: "HubSpot",
    role: "Senior Software Engineer",
    summary:
      "Building marketing automation workflows and AI-powered campaign summaries with TypeScript and React.",
    date: "SEPT 2024 — PRESENT",
    location: null,
    illustration: "workflow",
    details: [
      {
        title: "Product work",
        description:
          "Built multi-step workflows with triggers, delays, filters, and customer-data actions. Delivered AI-powered summaries that help marketers understand campaign results.",
      },
      {
        title: "Customer impact",
        description:
          "Designed and shipped a tracking-code validation tool that ran 2,861 tests across 1,746 URLs from 1,097 customer accounts.",
      },
      {
        title: "Team & community",
        description:
          "Mentored an intern and covered tech lead responsibilities. As an in-office community lead, I organize culture events that bring colleagues together.",
      },
    ],
  },
  {
    company: "Morgan Stanley",
    role: "Java Developer",
    summary:
      "Developed Spring Boot microservices for financial systems serving hedge fund clients.",
    date: "JAN 2021 — AUG 2022",
    location: "Mumbai, India",
    illustration: "finance",
    details: [
      {
        title: "Backend systems",
        description:
          "Developed and maintained Java services for Wire, Titan, and Billing using Spring Boot and IBM DB2.",
      },
      {
        title: "Performance & reliability",
        description:
          "Improved system efficiency by 83% through indexing, hashing, and optimized data handling. Followed test-driven development to support availability and fault tolerance.",
      },
    ],
  },
] as const;

export const projects = [
  {
    title: "Bird sighting web application",
    description:
      "Built an application to record and explore bird sightings, using the DBpedia knowledge graph to identify species.",
    technologies: "Node.js · JavaScript · MongoDB · DBpedia",
    date: "Jan – Apr 2023",
  },
  {
    title: "Event detection in social media streams",
    description:
      "For my MSc dissertation, analyzed Twitter data using text representations, clustering, and topic modeling to identify events and extract insights.",
    technologies: "Python · TF-IDF · Word2Vec · KMeans · LDA/NMF",
    date: "Jun – Sept 2023",
  },
] as const;

export const skills = [
  {
    title: "Languages",
    items: "TypeScript · JavaScript · Python · Java · SQL",
  },
  {
    title: "Frontend & design",
    items: "React · Vue.js · HTML · CSS · UI/UX Design",
  },
  {
    title: "Backend & data",
    items:
      "Node.js · Spring Boot · Flask · MySQL · Oracle DB · IBM DB2 · MongoDB · Firebase",
  },
  {
    title: "Tools & engineering",
    items: "Docker · Kubernetes · Git · Jira · Swagger · JUnit · Mockito",
  },
  {
    title: "AI-assisted development",
    items: "Cursor · Claude Code",
  },
] as const;
