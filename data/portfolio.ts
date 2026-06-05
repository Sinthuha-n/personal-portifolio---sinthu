export const navItems = ["About", "Skills", "Building", "Projects", "Blog", "GitHub", "Contact"];

export const typingWords = [
  "Java Developer",
  "Spring Boot Developer",
  "React Developer",
  "MERN Developer",
  "Problem Solver"
];

export const skillSystems = [
  {
    group: "Product Frontend",
    focus: "Interfaces, dashboards, responsive product flows",
    tools: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    group: "Backend Engineering",
    focus: "APIs, authentication, service logic, team workflows",
    tools: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "Postman"]
  },
  {
    group: "Data & Persistence",
    focus: "Relational models, CRUD systems, query fundamentals",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Database Design"]
  },
  {
    group: "Engineering Workflow",
    focus: "Version control, collaboration, testing, delivery habits",
    tools: ["Git", "GitHub", "Agile Practices", "Pull Requests", "API Testing", "VS Code"]
  }
] as const;

export const featuredProject = {
  name: "Planora",
  subtitle: "Full Stack Project Management Platform",
  status: "Hero Project",
  summary:
    "A product management workspace designed around the workflows software teams use every day: Kanban planning, task execution, timeline visibility, and mobile access.",
  problem:
    "Student and startup teams often manage work across scattered chats, spreadsheets, and issue lists. Planora brings planning, task ownership, board status, and mobile updates into one product flow.",
  achievements: [
    "Designed Kanban-first workflow for task visibility and team coordination",
    "Structured board management around backlog, active work, review, and completion",
    "Mapped timeline tracking for progress reviews and delivery planning",
    "Planned Spring Boot REST architecture with PostgreSQL-backed data models",
    "Included React Native mobile app direction for on-the-go project updates"
  ],
  challenges: [
    "Keeping task state consistent across board, priority, and timeline views",
    "Designing a clean API boundary between product UI and backend workflow logic",
    "Making dense project information scannable for repeated daily use"
  ],
  metrics: [
    ["4", "Core modules"],
    ["3", "Client surfaces"],
    ["REST", "API architecture"],
    ["PostgreSQL", "Primary database"]
  ],
  tech: ["Spring Boot", "Next.js", "React Native", "PostgreSQL", "REST APIs", "GitHub"],
  links: {
    github: "https://github.com/Sinthuha-n/project_management_app",
    demo: "https://github.com/Sinthuha-n/project_management_app",
    caseStudy: "https://github.com/Sinthuha-n/project_management_app"
  }
} as const;

export const supportingProjects = [
  {
    name: "BookNest",
    subtitle: "Full Stack MERN Web Application",
    description:
      "A book enthusiast platform for exploring books and managing reading lists, built collaboratively in a 5-member team with secure authentication, admin/user dashboards, and responsive UI.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    features: ["Secure authentication", "Admin/user dashboards", "Responsive reading-list UI", "Team-based delivery"],
    impact: "Practiced full-stack collaboration, modular MERN architecture, and Git-based team workflow.",
    github: "https://github.com/Sinthuha-n"
  },
  {
    name: "Student Management System",
    subtitle: "Java CRUD Application",
    description:
      "A focused Java project for practicing create, read, update, and delete workflows with a simple student-record domain.",
    tech: ["Java", "CRUD", "OOP", "Database Basics"],
    features: ["Entity modeling", "Record management", "OOP practice", "Data operations"],
    impact: "Strengthened backend fundamentals before moving into larger Spring Boot systems.",
    github: "https://github.com/Sinthuha-n/Student_Managemant"
  }
] as const;

export const buildFocus = [
  {
    title: "Planora product system",
    detail: "Turning project management workflows into a polished full-stack product with web, mobile, and API layers.",
    stack: ["Next.js", "Spring Boot", "React Native", "PostgreSQL"]
  },
  {
    title: "Engineering writing",
    detail: "Publishing practical notes on Git, software development, AI-assisted coding, and technology habits.",
    stack: ["Medium", "Git", "Software Engineering"]
  },
  {
    title: "Backend depth",
    detail: "Building stronger foundations in REST design, SQL modeling, API testing, and production-ready Java services.",
    stack: ["Java", "Spring Boot", "Postman", "SQL"]
  }
] as const;

export const blogs = [
  {
    category: "Software Engineering",
    title: "Why Version Control Is the Backbone of Software Development?",
    read: "8 min read",
    date: "May 27, 2026",
    url: "https://medium.com/linkit-intecs/why-version-control-is-the-backbone-of-software-development-8ef3e09fb90a"
  },
  {
    category: "Technology",
    title: "Social Media:Behind the Screen",
    read: "9 min read",
    date: "May 14, 2026",
    url: "https://medium.com/@sinthuhanadesan/social-media-behind-the-screen-f8f443c20ccd"
  },
  {
    category: "Artificial Intelligence",
    title: "When Code Gets a Vibe: Is AI About to Steal Your Keyboard?",
    read: "7 min read",
    date: "Dec 3, 2025",
    url: "https://medium.com/@sinthuhanadesan/when-code-gets-a-vibe-is-ai-about-to-steal-your-keyboard-25cd83f596bc"
  }
] as const;

export const blogCategories = ["All", "Software Engineering", "Technology", "Artificial Intelligence"];

export const githubProfile = {
  name: "Sinthuha Nadesan",
  username: "Sinthuha-n",
  url: "https://github.com/Sinthuha-n",
  avatar: "https://avatars.githubusercontent.com/u/208053821?v=4",
  bio: "IT undergraduate at University of Moratuwa, passionate about coding and innovation. Exploring the tech world.",
  company: "University of Moratuwa",
  location: "Colombo, Sri Lanka",
  repositories: 15,
  followers: 7,
  following: 15,
  recentEvents: 30,
  totalContributions: "30+"
};

export const linkedinUrl = "https://www.linkedin.com/in/sinthuha-nadesan-16nn11";
export const mediumUrl = "https://medium.com/@sinthuhanadesan";

export const githubRepos = [
  {
    name: "personal-portifolio---sinthu",
    description: "Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    language: "TypeScript",
    updated: "Updated Jun 5, 2026",
    url: "https://github.com/Sinthuha-n/personal-portifolio---sinthu"
  },
  {
    name: "project_management_app",
    description: "Project management application work connected to responsive Kanban and app workflow improvements.",
    language: "TypeScript",
    updated: "Updated May 10, 2026",
    url: "https://github.com/Sinthuha-n/project_management_app"
  },
  {
    name: "SpringBoot",
    description: "Learning and practicing Spring Boot fundamentals for backend development.",
    language: "Java",
    updated: "Updated Dec 3, 2025",
    url: "https://github.com/Sinthuha-n/SpringBoot"
  },
  {
    name: "Student_Managemant",
    description: "A simple student management system built using CRUD operations.",
    language: "Java",
    updated: "Updated Dec 1, 2025",
    url: "https://github.com/Sinthuha-n/Student_Managemant"
  }
] as const;

export const pinnedRepositories = githubRepos.slice(0, 4);

export const githubActivity = [
  "Pushed updates to personal-portifolio---sinthu",
  "Merged pull request #290 in axzellinnovations/project_management_app",
  "Opened responsive-mobile-kanban pull request work",
  "Created responsive branch for portfolio improvements"
];

export const timelineItems = [
  ["Dec 2024", "Frontend Development Certification", "Built a foundation in responsive interfaces and web application structure."],
  ["Jan 2025", "SQL Career Track", "Strengthened relational querying, schema thinking, and database problem solving."],
  ["Sep 2025", "Postman API Fundamental", "Improved API testing habits for REST endpoints and backend integration work."],
  ["2025 - 2026", "University Projects", "Applied OOP, DBMS, data structures, software engineering, and web development coursework."],
  ["Current", "Software Engineering Journey", "Building full-stack projects and preparing for internship teams that value learning velocity and execution."]
] as const;

export const coursework = [
  "Object-Oriented Programming",
  "Database Management Systems",
  "Data Structures & Algorithms",
  "Software Engineering",
  "Web Application Development",
  "Team-Based MERN Project"
];

export const certifications = [
  "Frontend Web Development - University of Moratuwa (Dec 2024)",
  "SQL Career Track - DataCamp (Jan 2025)",
  "HackerRank SQL (Feb 2025)",
  "Postman API Fundamental - Postman (Sep 2025)"
];

export const testimonialRoles = ["Lecturer", "Mentor", "Team Member", "Manager"];
