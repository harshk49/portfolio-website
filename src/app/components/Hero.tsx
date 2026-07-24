"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constant";

interface HeroProps {
  navbarRef: React.RefObject<HTMLDivElement | null>;
}


const Hero = ({ navbarRef }: HeroProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isWavePlaying, setIsWavePlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeLocationRef = useRef<HTMLDivElement>(null);

  // Content animation refs
  const badgeRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLDivElement>(null);
  const lastNameRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Initialize and handle audio
  useEffect(() => {
    audioRef.current = new Audio("/song.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    audioRef.current.play().catch(() => setIsWavePlaying(false));

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isWavePlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsWavePlaying(!isWavePlaying);
  };

  // GSAP animations after loading screen
  useEffect(() => {
    if (!timeLocationRef.current) return;

    // Set initial hidden state for top bar elements
    gsap.set(timeLocationRef.current, {
      x: 100,
      opacity: 0,
      visibility: "hidden",
    });

    const navbarElement = navbarRef?.current;
    if (navbarElement) {
      gsap.set(navbarElement, {
        y: -100,
        opacity: 0,
        visibility: "hidden",
      });
    }

    // Set initial hidden states for hero content
    const slideUpElements = [
      badgeRef.current,
      firstNameRef.current,
      lastNameRef.current,
      roleRef.current,
      descRef.current,
      ctaRef.current,
      socialRef.current,
    ];

    slideUpElements.forEach((el) => {
      if (el) gsap.set(el, { y: 50, opacity: 0, visibility: "hidden" });
    });

    if (dividerRef.current) {
      gsap.set(dividerRef.current, {
        scaleX: 0,
        opacity: 0,
        visibility: "hidden",
        transformOrigin: "left center",
      });
    }

    // Start animations after loading screen completes (4.7s)
    const timer = setTimeout(() => {
      const tl = gsap.timeline();

      // Animate navbar
      if (navbarElement) {
        navbarElement.classList.remove("invisible", "opacity-0");
        tl.set(navbarElement, { visibility: "visible" }).to(
          navbarElement,
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0
        );
      }

      // Animate time/location
      timeLocationRef.current?.classList.remove("invisible", "opacity-0");
      tl.set(timeLocationRef.current, { visibility: "visible" }, 0.15).to(
        timeLocationRef.current,
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0.15
      );

      // Availability badge
      if (badgeRef.current) {
        tl.set(badgeRef.current, { visibility: "visible" }, 0.1).to(
          badgeRef.current,
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          0.1
        );
      }

      // First name
      if (firstNameRef.current) {
        tl.set(firstNameRef.current, { visibility: "visible" }, 0.2).to(
          firstNameRef.current,
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          0.2
        );
      }

      // Last name
      if (lastNameRef.current) {
        tl.set(lastNameRef.current, { visibility: "visible" }, 0.3).to(
          lastNameRef.current,
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          0.3
        );
      }

      // Divider line
      if (dividerRef.current) {
        tl.set(dividerRef.current, { visibility: "visible" }, 0.5).to(
          dividerRef.current,
          { scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
          0.5
        );
      }

      // Role
      if (roleRef.current) {
        tl.set(roleRef.current, { visibility: "visible" }, 0.55).to(
          roleRef.current,
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          0.55
        );
      }

      // Description
      if (descRef.current) {
        tl.set(descRef.current, { visibility: "visible" }, 0.65).to(
          descRef.current,
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          0.65
        );
      }

      // CTAs
      if (ctaRef.current) {
        tl.set(ctaRef.current, { visibility: "visible" }, 0.75).to(
          ctaRef.current,
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          0.75
        );
      }

      // Social links
      if (socialRef.current) {
        tl.set(socialRef.current, { visibility: "visible" }, 0.9).to(
          socialRef.current,
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          0.9
        );
      }
    }, 4700);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col overflow-hidden bg-[#F2F0EB] sticky top-0"
    >
      {/* Subtle background glow */}
      <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#0B5ED7]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#0B5ED7]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Centered Content Container */}
      <div className="mx-auto w-full max-w-7xl h-full relative px-6 py-6 md:px-8 md:py-8">
        {/* Top left - Logo and Sound Wave Button */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 md:gap-4 text-black text-xl font-light z-20">
          <Image
            src={PERSONAL_INFO.logoBlackPath}
            alt={`${PERSONAL_INFO.name} Logo`}
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10"
          />

          {/* Sound Wave Button */}
          <button
            onClick={toggleAudio}
            className="relative group w-10 h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Toggle background music"
          >
            {/* Neon red glow effect */}
            <div
              className={`absolute inset-0 rounded-full bg-[#FF3B30] blur-xl transition-opacity duration-300 ${
                isWavePlaying
                  ? "opacity-60 group-hover:opacity-90 animate-pulse"
                  : "opacity-30"
              }`}
            ></div>

            {/* Button surface */}
            <div className="relative z-10 w-full h-full rounded-full bg-black border border-gray-800 flex items-center justify-center">
              {/* Animated horizontal sound wave */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                className="text-white"
              >
                <path
                  d="M6 16 Q 12 16, 16 16 T 26 16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={isWavePlaying ? "animate-wave-horizontal" : ""}
                  style={{ transition: "d 0.3s ease-out" }}
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Time/Location in top right corner */}
        <div
          ref={timeLocationRef}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-20 invisible opacity-0"
        >
          <div className="text-right">
            <div className="text-black/60 text-xs md:text-sm font-medium tracking-wide uppercase">
              {PERSONAL_INFO.location}
            </div>
            <div className="text-black text-base md:text-lg font-medium">
              {currentTime}
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="flex flex-col justify-center h-full pt-16 md:pt-20 pb-6 md:pb-8">
          <div className="max-w-4xl">
            {/* Availability Badge */}
            <div
              ref={badgeRef}
              className="invisible opacity-0 mb-6 md:mb-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs md:text-sm font-medium text-black/70 tracking-wide">
                  {PERSONAL_INFO.availability}
                </span>
              </div>
            </div>

            {/* Name - H1 for SEO */}
            <h1 className="font-['Clash_Grotesk'] leading-[0.9] tracking-tight mb-4 md:mb-5">
              <div
                ref={firstNameRef}
                className="invisible opacity-0 text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] font-semibold text-black"
              >
                {PERSONAL_INFO.firstName}
              </div>
              <div
                ref={lastNameRef}
                className="invisible opacity-0 text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] font-semibold text-black"
              >
                {PERSONAL_INFO.lastName}
                <span style={{ color: "#0B5ED7" }}>.</span>
              </div>
            </h1>

            {/* Divider Line */}
            <div
              ref={dividerRef}
              className="invisible opacity-0 w-16 md:w-20 h-[2px] bg-black/20 mb-5 md:mb-6"
            />

            {/* Role */}
            <div
              ref={roleRef}
              className="invisible opacity-0 mb-3 md:mb-4"
            >
              <p className="font-['Clash_Grotesk'] text-lg sm:text-xl md:text-2xl font-medium text-black/80">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Description */}
            <p
              ref={descRef}
              className="invisible opacity-0 text-sm sm:text-base md:text-lg text-black/50 leading-relaxed max-w-lg mb-8 md:mb-10 satoshi"
            >
              {PERSONAL_INFO.description}
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="invisible opacity-0 flex flex-wrap items-center gap-3 md:gap-4 mb-10 md:mb-14"
            >
              {/* Primary CTA */}
              <a
                href="#work"
                className="hero-cta-primary group inline-flex items-center gap-2.5 px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-black text-white text-sm md:text-base font-medium transition-all duration-400 hover:bg-[#0B5ED7] hover:shadow-[0_8px_30px_rgba(11,94,215,0.3)]"
              >
                <span>View My Work</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Secondary CTA */}
              <a
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-secondary group inline-flex items-center gap-2.5 px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-black/20 text-black/70 text-sm md:text-base font-medium transition-all duration-300 hover:border-black/50 hover:text-black hover:bg-black/[0.03]"
              >
                <span>Download CV</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16"
                  />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div
              ref={socialRef}
              className="invisible opacity-0 flex items-center gap-2"
            >
              <div className="w-8 md:w-10 h-[1px] bg-black/20 mr-1 md:mr-2" />
              {SOCIAL_LINKS.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-link text-xs md:text-sm text-black/40 font-medium tracking-wide transition-all duration-300 hover:text-[#0B5ED7] relative group"
                    aria-label={`Visit ${link.name} profile`}
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#0B5ED7] transition-all duration-300 group-hover:w-full" />
                  </a>
                  {index < SOCIAL_LINKS.length - 1 && (
                    <span className="text-black/15 text-xs mx-1 md:mx-2">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-cta-primary {
          will-change: transform, box-shadow;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-cta-primary:hover {
          transform: translateY(-2px);
        }

        .hero-cta-primary:active {
          transform: translateY(0);
        }

        .hero-cta-secondary {
          will-change: transform;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-cta-secondary:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
