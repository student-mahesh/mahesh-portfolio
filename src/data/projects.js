export const FEATURED_PROJECT = {
  title: 'AI-Powered Employee Leave Management System',
  description:
    'A full-stack, AI-powered employee leave management system streamlining leave-related administrative workflows with role-aware employee, manager, and administrator access, MySQL persistence, and an intelligent Spring AI/Ollama policy assistant.',
  tech: ['Java 21', 'Spring Boot', 'Spring AI', 'React.js', 'MySQL', 'RAG', 'Docker'],
  features: [
    'Role-aware workflows for employees, managers, and administrators',
    'Leave requests, balances, approvals, and audit records in MySQL',
    'AI assistant providing cited policy answers via ChromaDB and Ollama',
    'Working-day calculation with weekend and holiday awareness',
    'Docker containerization for application deployment',
  ],
  architecture:
    'React client communicates with a Spring Boot REST API secured with JWT. MySQL serves as operational source of truth, while ChromaDB stores policy vectors and Ollama provides local embedding and chat completion.',
  challenges: [
    'Preventing hallucinations in HR policy Q&A without direct policy citations',
    'Ensuring strict manager authorization for direct reports only',
    'Transaction-safe leave balance accounting and idempotent approvals',
  ],
  solutions: [
    'Evidence-constrained Spring AI prompts with ChromaDB vector similarity search',
    'Role-based access control with JWT and Spring Security authorization',
    'Database transactions with optimistic locking and ledger audit records',
  ],
  links: {
    github: 'https://github.com/student-mahesh/ai-powered-employee-leave-management-system',
  },
}

export const PROJECTS = [
  {
    id: 'ai-leave-management',
    title: 'AI-Powered Employee Leave Management System',
    description:
      'Full-stack leave management system streamlining leave requests, balances, and administrative workflows, featuring role-aware operations and a RAG-based AI policy assistant.',
    tech: ['Java 21', 'Spring Boot', 'Spring AI', 'React.js', 'MySQL', 'RAG', 'Docker'],
    github: 'https://github.com/student-mahesh/ai-powered-employee-leave-management-system',
    demo: null,
    featured: true,
    highlights: [
      'Developed an AI-powered employee leave management system focused on streamlining leave-related administrative workflows.',
      'Designed the application around employee leave requests, leave information, and management of leave records.',
      'Worked on incorporating AI capabilities into the leave management process using Spring AI, Ollama, and ChromaDB.',
    ],
  },
  {
    id: 'ecommerce-frontend',
    title: 'E-Commerce Frontend Application',
    description:
      'Responsive frontend e-commerce application featuring dynamic product listings, search, category filtering, cart management, and Redux Toolkit state persistence.',
    tech: ['React.js', 'Redux Toolkit', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    github: 'https://github.com/student-mahesh/ShopVibe-E-commerce-',
    demo: null,
    featured: false,
    highlights: [
      'Developed a responsive E-Commerce frontend application featuring product listings and interactive product browsing using React.js.',
      'Integrated DummyJSON REST APIs to fetch and display product data, including product details, images, prices, and categories.',
      'Implemented Redux Toolkit for centralized state management and created reusable React components for a maintainable application structure.',
    ],
  },
]

export const ALL_TECH_FILTERS = [
  'All',
  ...Array.from(new Set(PROJECTS.flatMap((p) => p.tech))),
]
