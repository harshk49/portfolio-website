"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRINCIPLES } from "@/constant";

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
            style={{ color: "#3B82F6" }}
          >
            The Brief
          </h2>

          {/* Principles Section */}
          <div className="mt-20">
            <h3
              className="text-3xl md:text-4xl lg:text-5xl font-normal font-['Clash_Grotesk'] mb-8"
              style={{ color: "#3B82F6" }}
            >
              Principles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.number}
                  className="principle-card group relative bg-gradient-to-br from-[#0A0A0A] to-[#141414] border border-white/10 rounded-2xl p-8 min-h-[280px] flex flex-col transition-all duration-500 hover:border-[#3B82F6]/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/0 to-[#3B82F6]/0 group-hover:from-[#3B82F6]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <span className="principle-number-modern inline-block text-5xl font-bold font-['Clash_Grotesk'] mb-6 transition-transform duration-500 group-hover:scale-110">
                      {principle.number}
                    </span>
                    <h4 className="text-xl font-semibold font-['Clash_Grotesk'] mb-4 text-white transition-colors duration-300 group-hover:text-[#3B82F6]">
                      {principle.title}
                    </h4>
                    <p className="text-gray-400 satoshi text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                      {principle.description}
                    </p>
                  </div>

                  {/* Bottom right decorative element */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#3B82F6]/5 rounded-full blur-2xl group-hover:bg-[#3B82F6]/10 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tech Stack Section */}
          <div ref={expertiseContainerRef} className="mt-20">
            <h3
              ref={skillsHeadingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-normal font-['Clash_Grotesk'] mb-8"
              style={{ color: "#3B82F6" }}
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
        .principle-number-modern {
          background: linear-gradient(135deg, #3B82F6 0%, #60a5fa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .principle-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(31, 139, 255, 0.1),
            transparent
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .principle-card:hover::before {
          opacity: 1;
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
