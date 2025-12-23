"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  category: string;
  level: number;
}

const skills: Skill[] = [
  { name: "React", category: "Frontend", level: 95 },
  { name: "Next.js", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "JavaScript", category: "Frontend", level: 95 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "GSAP", category: "Animation", level: 85 },
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express", category: "Backend", level: 80 },
  { name: "MongoDB", category: "Database", level: 75 },
  { name: "PostgreSQL", category: "Database", level: 75 },
  { name: "Git", category: "Tools", level: 90 },
  { name: "Docker", category: "Tools", level: 70 },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsHeadingRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

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

      // Animate content
      gsap.from(contentRef.current, {
        y: 50,
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

      // Animate skills heading
      gsap.from(skillsHeadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsHeadingRef.current,
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate each skill card
      skillsRef.current.forEach((skill, index) => {
        if (skill) {
          gsap.from(skill, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skill,
              start: "top 90%",
              end: "top 70%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white text-black flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <h2
          ref={headingRef}
          className="text-5xl md:text-7xl font-bold mb-12 clash-grotesk"
        >
          About Me
        </h2>

        <div ref={contentRef} className="space-y-6">
          <p className="text-xl md:text-2xl text-gray-700 satoshi leading-relaxed">
            I'm a passionate developer who loves creating beautiful and
            functional web experiences. With a focus on modern technologies and
            clean design, I bring ideas to life through code.
          </p>

          <p className="text-xl md:text-2xl text-gray-700 satoshi leading-relaxed">
            My expertise spans across frontend development, with a particular
            interest in creating smooth animations and intuitive user interfaces
            that make a lasting impression.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="border border-gray-300 p-6 rounded-lg hover:border-gray-500 transition-colors">
              <h3 className="text-2xl font-bold clash-grotesk mb-2">5+</h3>
              <p className="text-gray-600 satoshi">Years Experience</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg hover:border-gray-500 transition-colors">
              <h3 className="text-2xl font-bold clash-grotesk mb-2">50+</h3>
              <p className="text-gray-600 satoshi">Projects Completed</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg hover:border-gray-500 transition-colors">
              <h3 className="text-2xl font-bold clash-grotesk mb-2">30+</h3>
              <p className="text-gray-600 satoshi">Happy Clients</p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg hover:border-gray-500 transition-colors">
              <h3 className="text-2xl font-bold clash-grotesk mb-2">10+</h3>
              <p className="text-gray-600 satoshi">Technologies</p>
            </div>
          </div>
        </div>

        {/* Skills & Tech Stack Section */}
        <div className="mt-20">
          <h3
            ref={skillsHeadingRef}
            className="text-3xl md:text-5xl font-bold mb-8 clash-grotesk"
          >
            Skills & Technologies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="group relative border border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-all hover:shadow-md"
              >
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-1 satoshi">
                    {skill.category}
                  </span>
                  <span className="text-lg font-semibold clash-grotesk mb-2">
                    {skill.name}
                  </span>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-900 transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />
                  </div>

                  <span className="text-xs text-gray-500 mt-1 text-right satoshi">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Categories */}
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {["Frontend", "Backend", "Database", "Animation", "Tools"].map(
              (category) => (
                <span
                  key={category}
                  className="px-4 py-2 border border-gray-300 rounded-full text-sm satoshi hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors cursor-default"
                >
                  {category}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
