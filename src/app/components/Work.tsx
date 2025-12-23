"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
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
];

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate each project card
      projectsRef.current.forEach((project, index) => {
        if (project) {
          gsap.from(project, {
            y: 80,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative min-h-screen px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2
          ref={headingRef}
          className="mb-16 clash-grotesk text-5xl font-semibold md:text-6xl lg:text-7xl"
        >
          Selected Work
        </h2>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={addToRefs}
              className="group grid gap-8 md:grid-cols-2 md:gap-12"
            >
              {/* Project Image */}
              <div
                className={`relative aspect-video overflow-hidden rounded-2xl bg-gray-200 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">Project Image</p>
                </div>
                {/* Uncomment when you have project images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                /> */}
              </div>

              {/* Project Info */}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <h3 className="mb-4 clash-grotesk text-3xl font-semibold md:text-4xl">
                  {project.title}
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-gray-300 px-4 py-1 text-sm transition-colors hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white transition-transform hover:scale-105"
                    >
                      View Project
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-gray-900 px-6 py-3 transition-colors hover:bg-gray-900 hover:text-white"
                    >
                      GitHub
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
