export const navItems = ["About", "Skills", "Projects", "Blog", "GitHub", "Contact"];

export const typingWords = [
  "Java Developer",
  "Spring Boot Developer",
  "React Developer",
  "MERN Developer",
  "Problem Solver"
];

export const skills = [
  { group: "Programming Languages", items: [["Java", 88], ["JavaScript", 84], ["Python", 74], ["C", 68]] },
  { group: "Frontend", items: [["React", 86], ["HTML5", 92], ["CSS3", 88], ["Responsive UI", 82]] },
  { group: "Backend", items: [["Spring Boot", 78], ["REST API Fundamentals", 86], ["Node.js", 76], ["Express.js", 74]] },
  { group: "Database", items: [["MySQL", 82], ["PostgreSQL", 76], ["MongoDB", 74]] },
  { group: "Tools", items: [["Git", 84], ["GitHub", 85], ["Postman", 88], ["Agile Practices", 76]] }
] as const;

export const projects = [
  {
    name: "BookNest",
    subtitle: "Full Stack MERN Web Application",
    description:
      "A book enthusiast platform for exploring books and managing reading lists, built collaboratively in a 5-member team with secure authentication, admin/user dashboards, and responsive UI.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    accent: "from-rose-500 to-amber-300",
    features: ["Secure Auth", "Admin Dashboard", "User Dashboard", "Reading Lists"],
    actions: ["Live Demo", "GitHub"]
  },
  {
    name: "Planora",
    subtitle: "Project Management Platform",
    description:
      "A planned full stack project management platform concept for Kanban workflows, sprint planning, timelines, task ownership, and team collaboration.",
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "REST APIs"],
    accent: "from-sky-500 to-emerald-400",
    features: ["Kanban Board", "Sprint Planning", "Timeline Tracking", "Team Workflows"],
    actions: ["Case Study"]
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
  recentEvents: 30
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

export const githubActivity = [
  "Pushed updates to personal-portifolio---sinthu",
  "Merged pull request #290 in axzellinnovations/project_management_app",
  "Opened responsive-mobile-kanban pull request work",
  "Created responsive branch for portfolio improvements"
];

export const timelineItems = [
  ["2024", "Frontend Development Certification", "Built a polished foundation in responsive user interfaces."],
  ["2025", "SQL Career Track, HackerRank SQL, and Postman API Fundamental", "Strengthened database querying, SQL problem solving, and API testing workflows."],
  ["2028", "Expected Graduation", "BSc (Hons) in Information Technology at University of Moratuwa, Sri Lanka."],
  ["Current", "Seeking a Software Engineering Internship", "Ready to contribute to high-impact development teams with full-stack project experience."]
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
