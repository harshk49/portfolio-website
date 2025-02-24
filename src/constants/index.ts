// src/constants/constants.ts

// Define a type for projects
export type Project = {
  title: string;
  image: string; // Image path as a string
  description: string;
  technologies: string[];
};

// Define a type for contact information
export type ContactInfo = {
  address: string;
  phoneNo: string;
  email: string;
};

// Hero content
export const HERO_CONTENT: string = `
     I don’t just write code—I create web experiences that are fast, seamless, and built to last. From intuitive frontends to powerful backends, I focus on clean code, the latest tech, and solutions that actually work. Because a great website isn’t just about looking good—it’s about performing at its best.
  
     You have a vision? Let’s bring it to life. Because “the only time success comes before work is in the dictionary.” And I’m here to put in the work to make sure your web presence stands out.
  `;

// Projects array with image paths from the public folder
export const PROJECTS: Project[] = [
  {
    title: "Cipher Vault",
    image: "/projects/project-1.svg", // Direct path from the public folder
    description:
      "Cipher Vault is a web app for encrypting and decrypting text using ciphers like Caesar, Vigenère, and Atbash etc.",
    technologies: ["C++"],
  },
  {
    title: "Notes App",
    image: "/projects/project-2.svg",
    description:
      "The Notes App is a user-friendly MERN stack application that lets users create, edit, delete, and manage notes with a responsive interface designed using Tailwind CSS.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "CricScorer",
    image: "/projects/project-3.jpg",
    description:
      "A cricket scoring application that allows users to keep track of match scores, player statistics, and team standings.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Airbnb Clone",
    image: "/projects/project-4.jpg",
    description:
      "A web application that replicates Airbnb's core features, including property listings, booking management, user authentication, and guest reviews.",
    technologies: ["Next.js", "Tailwind", "TypeScript", "Node.js", "Prisma"],
  },
];

// Contact information
export const CONTACT: ContactInfo = {
  address: "Indore, India",
  phoneNo: "Phone: +91 7974980140",
  email: "Email: harshkardile49@gmail.com",
};
