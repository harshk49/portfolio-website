"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
import { PROJECTS, Project } from "@/constant";

gsap.registerPlugin(ScrollTrigger);


const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const listItemsRef = useRef<HTMLDivElement[]>([]);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

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

      // Animate subheading
      gsap.from(subheadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate each list item
      listItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.4 + index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 70%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobile) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseEnter = (project: Project) => {
    if (!isMobile) {
      setHoveredProject(project);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredProject(null);
    }
  };

  const handleTap = (projectId: number) => {
    if (isMobile) {
      setActiveProject(activeProject === projectId ? null : projectId);
    }
  };

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative min-h-screen px-6 py-20 md:px-12 lg:px-24 bg-white z-10 rounded-t-[50px]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2
          ref={headingRef}
          className="mb-6 font-['Clash_Grotesk'] text-5xl font-normal md:text-6xl lg:text-7xl"
          style={{ color: "#0B5ED7" }}
        >
          Selected Work
        </h2>
        <p
          ref={subheadingRef}
          className="mb-16 text-xl text-gray-600 md:text-2xl"
        >
          A curated selection of work that speaks for itself.
        </p>

        {/* Projects List */}
        <div className="space-y-0">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              ref={addToRefs}
              className="group relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleTap(project.id)}
            >
              {/* List Item */}
              <div className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-8 transition-all duration-300 hover:border-gray-900 md:py-10">
                {/* Serial Number */}
                <span
                  className="font-['Clash_Grotesk'] text-4xl font-light transition-all duration-300 md:text-5xl lg:text-6xl"
                  style={{ color: "#0B5ED7" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Project Title */}
                <h3 className="font-['Clash_Grotesk'] text-4xl font-normal italic transition-all duration-300 group-hover:translate-x-4 md:text-5xl lg:text-6xl">
                  {project.title}
                </h3>
              </div>

              {/* Mobile Preview (Tap to Show) */}
              {isMobile && activeProject === project.id && (
                <div className="mb-6 overflow-hidden rounded-lg bg-gray-100 p-4 transition-all duration-300">
                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-sm text-gray-400">Project Preview</p>
                    </div>
                    {/* Uncomment when you have images */}
                    {/* <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Bottom Border */}
          <div className="border-t border-gray-300"></div>
        </div>

        {/* Hover Preview (Desktop) */}
        {!isMobile && hoveredProject && (
          <div
            className="pointer-events-none fixed z-50 hidden md:block"
            style={{
              left: `${mousePosition.x + 20}px`,
              top: `${mousePosition.y + 20}px`,
              transform: "translate(0, 0)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <div className="w-80 overflow-hidden rounded-lg bg-white shadow-2xl">
              {/* Image Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm text-gray-400">Project Preview</p>
                </div>
                {/* Uncomment when you have images */}
                {/* <Image
                  src={hoveredProject.image}
                  alt={hoveredProject.title}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="mb-2 font-['Clash_Grotesk'] text-lg font-semibold text-gray-900">
                  {hoveredProject.title}
                </h4>
                <p className="mb-3 text-sm leading-relaxed text-gray-700">
                  {hoveredProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {hoveredProject.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
