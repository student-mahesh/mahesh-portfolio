export const FEATURED_PROJECT = {
  title: 'AI Expense Tracker',
  description:
    'A full-stack, AI-assisted personal finance web app that helps users track income and expenses, set monthly budgets, and understand their spending habits through smart insights and interactive charts.',
  image: '/projects/expense-tracker-hero.svg',
  tech: ['React', 'Java', 'Spring Boot', 'Hibernate', 'MySQL', 'JWT'],
  features: [
    'Expense & income management with category tagging',
    'Monthly budget planning with over-spend alerts',
    'Interactive analytics dashboard with charts',
    'AI-generated spending insights and summaries',
    'Secure authentication with JWT and role-based access',
  ],
  architecture:
    'React SPA communicates with a Spring Boot REST API secured by JWT. Hibernate/JPA maps domain entities (User, Expense, Income, Budget) to a MySQL schema. A dedicated insights service aggregates monthly transactions and produces natural-language summaries.',
  challenges: [
    'Designing a schema flexible enough for custom categories per user',
    'Keeping dashboard charts performant with large transaction history',
    'Securing REST endpoints without adding friction to the UX',
  ],
  solutions: [
    'Normalized category/tag tables with user-scoped foreign keys',
    'Server-side aggregation endpoints instead of client-side crunching',
    'Stateless JWT auth with short-lived access + refresh token rotation',
  ],
  links: {
    demo: '#',
    github: 'https://github.com/kalpana23019/AI-Expense-Tracker-',
    caseStudy: '#',
  },
}

export const PROJECTS = [
  {
    id: 'expense-tracker',
    title: 'AI Expense Tracker',
    description:
      'Full-stack expense & budget manager with AI-driven insights, charts, and secure JWT auth.',
    image: '/projects/expense-tracker.svg',
    tech: ['React', 'Spring Boot', 'Hibernate', 'MySQL', 'JWT'],
    github: 'https://github.com/kalpana23019/AI-Expense-Tracker-',
    demo: '#',
    featured: true,
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    description:
      'Java Servlets + JSP application to manage student records, attendance, and grades with role-based access.',
    image: '/projects/student-management.svg',
    tech: ['Java', 'Servlets', 'JSP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/kalpana23019/student-management-system',
    demo: '#',
    featured: false,
  },
  {
    id: 'ecommerce',
    title: 'K-shop E-Commerce Application',
    description:
      'Spring Boot & React storefront with product catalog, cart, order management, and admin panel.',
    image: '/projects/ecommerce.svg',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    github: 'https://github.com/kalpana23019/K-Shop-Ecommerce-Application',
    demo: '#',
    featured: false,
  },
  {
    id: 'social-media',
    title: 'Social Media Platform',
    description:
      'Real-time posts, comments, and notifications platform — currently in active development.',
    image: '/projects/social-media.svg',
    tech: ['React', 'Spring Boot', 'MySQL', 'WebSocket'],
    github: '#',
    demo: '#',
    featured: false,
    comingSoon: true,
  },
]

export const ALL_TECH_FILTERS = [
  'All',
  ...Array.from(new Set(PROJECTS.flatMap((p) => p.tech))),
]
