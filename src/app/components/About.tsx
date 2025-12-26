"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsHeadingRef = useRef<HTMLHeadingElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const expertiseContainerRef = useRef<HTMLDivElement>(null);

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

      // Horizontal scroll animation
      if (horizontalScrollRef.current && expertiseContainerRef.current) {
        const scrollWidth = horizontalScrollRef.current.scrollWidth;
        const containerWidth = horizontalScrollRef.current.offsetWidth;
        const scrollDistance = scrollWidth - containerWidth;

        gsap.to(horizontalScrollRef.current, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: expertiseContainerRef.current,
            start: "top 10%",
            end: () => `+=${scrollDistance * 3}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl w-full">
          <h2
            ref={headingRef}
            className="mb-16 font-['Clash_Grotesk'] text-5xl font-normal md:text-6xl lg:text-7xl"
            style={{ color: "#1F8BFF" }}
          >
            The Brief
          </h2>

          <div ref={contentRef} className="space-y-6">
            <p className="text-xl md:text-2xl text-white satoshi leading-relaxed">
              I&apos;m a passionate developer who loves creating beautiful and
              functional web experiences. With a focus on modern technologies
              and clean design, I bring ideas to life through code.
            </p>

            <p className="text-xl md:text-2xl text-white satoshi leading-relaxed">
              My expertise spans across frontend development, with a particular
              interest in creating smooth animations and intuitive user
              interfaces that make a lasting impression.
            </p>
          </div>

          {/* Principles Section */}
          <div className="mt-20">
            <h3
              className="text-3xl md:text-4xl lg:text-5xl font-normal font-['Clash_Grotesk'] mb-8"
              style={{ color: "#1F8BFF" }}
            >
              Principles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  number: 1,
                  title: "Clarity over cleverness",
                  description:
                    "Code is read far more than it's written. If it's impressive but confusing, it's wrong.",
                },
                {
                  number: 2,
                  title: "Build for change, not perfection",
                  description:
                    "Requirements evolve. Good systems expect it instead of fighting it.",
                },
                {
                  number: 3,
                  title: "Details decide outcomes",
                  description:
                    "Edge cases, naming, and structure are where quality actually lives.",
                },
              ].map((principle) => (
                <div
                  key={principle.number}
                  className="bg-white border border-gray-200 rounded-lg p-8 min-h-[200px] flex flex-col"
                >
                  <span className="principle-number text-9xl font-semibold font-['Clash_Grotesk'] relative leading-none mb-4">
                    {principle.number}
                  </span>
                  <h4 className="text-xl font-semibold font-['Clash_Grotesk'] mb-3 text-black">
                    {principle.title}
                  </h4>
                  <p className="text-gray-600 satoshi text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tech Stack Section */}
          <div ref={expertiseContainerRef} className="mt-20">
            <h3
              ref={skillsHeadingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-normal font-['Clash_Grotesk'] mb-8"
              style={{ color: "#1F8BFF" }}
            >
              Expertise
            </h3>

            <div className="overflow-hidden">
              <div
                ref={horizontalScrollRef}
                className="flex gap-0 whitespace-nowrap"
              >
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="border border-white p-8 w-[450px] h-[450px] flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-2xl font-medium font-['Clash_Grotesk'] text-white">
                      Box {num}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .principle-number {
          -webkit-text-stroke: 2px #1f8bff;
          -webkit-text-fill-color: transparent;
          color: transparent;
          position: relative;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 6px,
            #1f8bff 6px,
            #1f8bff 8px
          );
          -webkit-background-clip: text;
          background-clip: text;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default About;
