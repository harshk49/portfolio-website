export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  email: string;
  description: string;
  availability: string;
  footerQuote: string;
  cvPath: string;
  logoBlackPath: string;
  logoSvgPath: string;
  audioPath: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Harsh Kardile",
  firstName: "HARSH",
  lastName: "KARDILE",
  role: "Creative Developer & Designer",
  location: "Bengaluru, India",
  email: "[EMAIL_ADDRESS]",
  description:
    "I design and build digital experiences that are minimal, functional, and crafted with intention.",
  availability: "Available for work",
  footerQuote: "If you know quality, you know where to find it.",
  cvPath: "/cv_harsh_kardile.pdf",
  logoBlackPath: "/hk_logo_black.png",
  logoSvgPath: "/hk_logo.svg",
  audioPath: "/song.mp3",
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Works", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/harshk49" },
  { name: "LinkedIn", href: "https://linkedin.com/in/harsh-kardile" },
  { name: "Medium", href: "https://medium.com/@harshkardile" },
  { name: "Instagram", href: "https://instagram.com/harsh_kardile49" },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    value: "harshkardile49@gmail.com",
    href: "mailto:harshkardile49@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/harsh-kardile",
    href: "https://linkedin.com/in/harsh-kardile",
    external: true,
  },
  {
    label: "Medium",
    value: "@harshkardile",
    href: "https://medium.com/@harshkardile",
    external: true,
  },
  {
    label: "GitHub",
    value: "harshk49",
    href: "https://github.com/harshk49",
    external: true,
  },
  {
    label: "Instagram",
    value: "harsh_kardile49",
    href: "https://instagram.com/harsh_kardile49",
    external: true,
  },
];

export const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Clarity over cleverness",
    description:
      "Code is read far more than it's written. If it's impressive but confusing, it's wrong.",
  },
  {
    number: "02",
    title: "Build for change, not perfection",
    description:
      "Requirements evolve. Good systems expect it instead of fighting it.",
  },
  {
    number: "03",
    title: "Details decide outcomes",
    description:
      "Edge cases, naming, and structure are where quality actually lives.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    company: "IBM",
    role: "Application Developer ",
    period: "Jun 2026 - Present",
    location: "Bengaluru, Karnataka, India",
    description:
      "Working as an Application Developer at IBM for client Airbus, building enterprise application solutions and robust digital systems.",
    responsibilities: [
      "Architect and develop enterprise web application solutions for client Airbus",
      "Collaborate with cross-functional global teams to deliver mission-critical software",
      "Optimize frontend performance, modular codebase architecture, and system integrations",
      "Ensure compliance with enterprise-grade quality, performance, and security benchmarks",
    ],
    technologies: [
      "Application Development",
      "Enterprise Systems",
      "React",
      "TypeScript",
      "Spring Boot",
      "Cloud Native",
    ],
  },
  {
    id: 2,
    company: "TapOnn™",
    role: "Jr. MERN Stack Developer",
    period: "Jan 2025 - Aug 2025",
    location: "Indore, Madhya Pradesh, India",
    description:
      "Full-stack MERN developer internship focused on developing responsive web applications and managing project workflows via JIRA.",
    responsibilities: [
      "Built and maintained full-stack applications using MongoDB, Express.js, React, and Node.js",
      "Managed project milestones, task tracking, and sprint items using JIRA",
      "Designed and integrated RESTful APIs with dynamic, interactive UI components",
      "Partnered with senior developers to optimize code performance and maintainability",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JIRA",
      "Full-Stack Development",
    ],
  },
  {
    id: 3,
    company: "Edunet Foundation",
    role: "Cyber Security Intern",
    period: "Jan 2025 - Feb 2025",
    location: "Remote",
    description:
      "Cyber security internship involving threat analysis, vulnerability assessments, and security compliance research.",
    responsibilities: [
      "Analyzed web and system security vulnerabilities using industry audit tools",
      "Assessed threat landscapes and produced detailed security mitigation reports",
      "Applied foundational cyber security principles and safe deployment standards",
    ],
    technologies: [
      "Cyber Security",
      "Network Security",
      "Vulnerability Assessment",
      "Linux",
      "Security Auditing",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project One",
    description:
      "A modern web application built with Next.js and TypeScript, featuring real-time data synchronization and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    image: "/projects/project1.jpg",
    link: "https://project1.com",
    github: "https://github.com/username/project1",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "An innovative mobile-first platform with advanced animations and seamless user experience.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "/projects/project2.jpg",
    link: "https://project2.com",
    github: "https://github.com/username/project2",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A full-stack e-commerce solution with secure payment integration and inventory management.",
    tags: ["React", "Redux", "Firebase", "Stripe"],
    image: "/projects/project3.jpg",
    link: "https://project3.com",
    github: "https://github.com/username/project3",
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "An AI-powered analytics dashboard with real-time insights and data visualization.",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    image: "/projects/project4.jpg",
    link: "https://project4.com",
    github: "https://github.com/username/project4",
  },
  {
    id: 5,
    title: "Project Five",
    description:
      "A collaborative workspace tool with video conferencing and document sharing.",
    tags: ["WebRTC", "Socket.io", "Vue.js", "PostgreSQL"],
    image: "/projects/project5.jpg",
    link: "https://project5.com",
    github: "https://github.com/username/project5",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Explore the best practices and patterns for creating performant, scalable web applications using Next.js 14 and React Server Components.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    slug: "building-scalable-web-apps-nextjs",
  },
  {
    id: 2,
    title: "Mastering GSAP Animations in React",
    excerpt:
      "A comprehensive guide to creating smooth, performant animations in React applications using GSAP and modern best practices.",
    date: "Dec 8, 2024",
    readTime: "12 min read",
    category: "Animation",
    slug: "mastering-gsap-animations-react",
  },
  {
    id: 3,
    title: "The Power of TypeScript in Modern Development",
    excerpt:
      "Discover how TypeScript enhances code quality, improves developer experience, and catches bugs before they reach production.",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    category: "TypeScript",
    slug: "power-of-typescript-modern-dev",
  },
  {
    id: 4,
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt:
      "Learn practical techniques to optimize your React applications, from memo and useMemo to code splitting and lazy loading.",
    date: "Nov 20, 2024",
    readTime: "15 min read",
    category: "Performance",
    slug: "optimizing-react-performance",
  },
  {
    id: 5,
    title: "Tailwind CSS: Utility-First Design Philosophy",
    excerpt:
      "Understanding the utility-first approach to styling and how Tailwind CSS can speed up your development workflow.",
    date: "Nov 12, 2024",
    readTime: "7 min read",
    category: "CSS",
    slug: "tailwind-utility-first-design",
  },
  {
    id: 6,
    title: "State Management in React: A Comprehensive Guide",
    excerpt:
      "Compare different state management solutions for React applications, from Context API to Zustand and beyond.",
    date: "Nov 5, 2024",
    readTime: "14 min read",
    category: "React",
    slug: "state-management-react-guide",
  },
];

export const MARQUEE_IMAGES: string[] = [
  "/goku.jpeg",
  "/Harsh.jpeg",
  "/beng.jpeg",
  "/book.jpeg",
  "/kaach.jpeg",
  "/plane.jpeg",
  "/tajmahal.jpeg",
  "https://i.pinimg.com/736x/05/4a/64/054a642a0ef827e6be57fe66e3e75459.jpg",
  "https://i.pinimg.com/736x/b3/3e/99/b33e99df33e57bec6d9d3f896497a2e5.jpg",
  "https://i.pinimg.com/736x/1a/03/ff/1a03fff18fbb548ab5afecb428467acb.jpg",
  "https://i.pinimg.com/736x/c0/8d/e0/c08de0f057c174f95a9c0a86713483e4.jpg",
  "https://i.pinimg.com/736x/d1/bd/98/d1bd98ac3d49e5c3bcae13ab1e2a5ed3.jpg",
  "https://i.pinimg.com/1200x/22/e6/80/22e680e6936b7ab1a22f2c7f85416cbc.jpg",
  "https://i.pinimg.com/736x/f7/9d/ee/f79deee1fec6d20e03887257661ecfa6.jpg",
];
