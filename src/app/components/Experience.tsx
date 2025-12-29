"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Tech Company Inc.",
    role: "Senior Frontend Developer",
    period: "Jan 2023 - Present",
    location: "San Francisco, CA",
    description:
      "Leading frontend development initiatives and mentoring junior developers in modern web technologies.",
    responsibilities: [
      "Architected and developed responsive web applications using React and Next.js",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Implemented performance optimizations resulting in 40% faster load times",
      "Mentored team of 5 junior developers in best practices and code reviews",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Node.js",
    ],
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    role: "Full Stack Developer",
    period: "Jun 2021 - Dec 2022",
    location: "New York, NY",
    description:
      "Developed and maintained full-stack applications for enterprise clients.",
    responsibilities: [
      "Built scalable REST APIs using Node.js and Express",
      "Designed and implemented database schemas in MongoDB and PostgreSQL",
      "Created reusable component libraries for consistent UI/UX",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: 3,
    company: "Startup Ventures",
    role: "Frontend Developer",
    period: "Jan 2020 - May 2021",
    location: "Austin, TX",
    description:
      "Contributed to the development of innovative web applications in a fast-paced startup environment.",
    responsibilities: [
      "Developed responsive user interfaces using React and Redux",
      "Integrated third-party APIs and services",
      "Collaborated with designers to implement pixel-perfect designs",
      "Wrote unit and integration tests to ensure code quality",
    ],
    technologies: ["React", "Redux", "JavaScript", "CSS3", "Jest", "Git"],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const experienceRefs = useRef<HTMLDivElement[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      // Animate timeline line
      if (timelineRef.current) {
        gsap.from(timelineRef.current, {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Animate each experience card
      experienceRefs.current.forEach((experience, index) => {
        if (experience) {
          gsap.from(experience, {
            x: index % 2 === 0 ? -80 : 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: experience,
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
    if (el && !experienceRefs.current.includes(el)) {
      experienceRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen px-6 py-20 md:px-12 lg:px-24 bg-black"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-20">
          <h2
            ref={headingRef}
            className="mb-4 font-['Clash_Grotesk'] text-5xl font-normal md:text-6xl lg:text-7xl"
            style={{ color: "#1F8BFF" }}
          >
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#1F8BFF] to-transparent rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            className="absolute left-4 top-0 hidden h-full w-[2px] md:left-1/2 md:block bg-gradient-to-b from-[#1F8BFF] via-[#1F8BFF]/60 to-[#1F8BFF]/20 shadow-[0_0_10px_rgba(31,139,255,0.5)]"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                ref={addToRefs}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                {/* Timeline Dot */}
                <div className="absolute left-4 hidden h-5 w-5 -translate-x-1/2 transform md:left-1/2 md:top-8 md:block">
                  <div className="h-full w-full rounded-full border-[3px] border-[#1F8BFF] bg-black shadow-[0_0_15px_rgba(31,139,255,0.8)]">
                    <div className="h-full w-full animate-ping rounded-full bg-[#1F8BFF] opacity-20" />
                  </div>
                </div>
                {/* Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="experience-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A0A0A] to-[#141414] p-6 shadow-lg transition-all duration-500 hover:border-[#1F8BFF]/50 hover:shadow-[0_8px_50px_rgba(31,139,255,0.2)] md:p-8">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F8BFF]/0 via-[#1F8BFF]/0 to-[#1F8BFF]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-[#1F8BFF]/5 group-hover:via-transparent group-hover:to-transparent" />

                    {/* Top accent line */}
                    <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#1F8BFF] to-[#60A5FA] transition-all duration-500 group-hover:w-full" />

                    {/* Decorative blur element */}
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#1F8BFF]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="mb-2 font-['Clash_Grotesk'] text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#1F8BFF] md:text-3xl">
                          {experience.role}
                        </h3>
                        <p className="mb-3 font-['Clash_Grotesk'] text-lg font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                          {experience.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#1F8BFF]/10 group-hover:text-gray-300">
                            <svg
                              className="h-3.5 w-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {experience.period}
                          </span>
                          <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#1F8BFF]/10 group-hover:text-gray-300">
                            <svg
                              className="h-3.5 w-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {experience.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-6 leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300 satoshi">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="mb-3 font-['Clash_Grotesk'] text-sm font-semibold uppercase tracking-wider text-[#1F8BFF]">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                          {experience.responsibilities.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-300 satoshi"
                            >
                              <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1F8BFF] shadow-[0_0_8px_rgba(31,139,255,0.6)]" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="mb-3 font-['Clash_Grotesk'] text-sm font-semibold uppercase tracking-wider text-[#1F8BFF]">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-[#1F8BFF]/50 hover:bg-[#1F8BFF]/10 hover:text-white hover:shadow-[0_0_15px_rgba(31,139,255,0.3)] satoshi"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
