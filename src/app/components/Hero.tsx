"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

interface HeroProps {
  navbarRef: React.RefObject<HTMLDivElement | null>;
}

const Hero = ({ navbarRef }: HeroProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const timeLocationRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const scrollDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeString);
    };

    // Update time immediately
    updateTime();

    // Update time every minute
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Set initial state for time/location element - completely hidden
    if (timeLocationRef.current) {
      gsap.set(timeLocationRef.current, {
        x: 100,
        opacity: 0,
        visibility: "hidden",
      });
    }

    // Set initial state for navbar - completely hidden above viewport
    const navbarElement = navbarRef?.current;
    if (navbarElement) {
      gsap.set(navbarElement, {
        y: -100,
        opacity: 0,
        visibility: "hidden",
      });
    }

    // Set initial state for hero text
    if (heroTextRef.current) {
      gsap.set(heroTextRef.current, {
        y: 30,
        opacity: 0,
        visibility: "hidden",
      });
    }

    // Set initial state for images
    if (image1Ref.current) {
      gsap.set(image1Ref.current, {
        scale: 0.9,
        opacity: 0,
        visibility: "hidden",
      });
    }

    if (image2Ref.current) {
      gsap.set(image2Ref.current, {
        scale: 0.9,
        opacity: 0,
        visibility: "hidden",
      });
    }

    // Set initial state for social icons
    if (socialIconsRef.current) {
      gsap.set(socialIconsRef.current, {
        y: 50,
        opacity: 0,
        visibility: "hidden",
      });
    }

    // Set initial state for scroll down text
    if (scrollDownRef.current) {
      gsap.set(scrollDownRef.current, {
        opacity: 0,
        visibility: "hidden",
      });
    }

    // Wait for loading screen slide-up animation to complete before starting Hero animations
    const animationTimer = setTimeout(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline();

      // Animate navbar sliding down from top
      if (navbarElement) {
        // Remove CSS classes and set GSAP properties
        navbarElement.classList.remove("invisible", "opacity-0");
        tl.set(navbarElement, { visibility: "visible" }).to(
          navbarElement,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0
        );
      }

      // Animate time/location from right
      if (timeLocationRef.current) {
        // Remove CSS classes and set GSAP properties
        timeLocationRef.current.classList.remove("invisible", "opacity-0");
        tl.set(
          timeLocationRef.current,
          { visibility: "visible" },
          navbarElement ? 0.2 : 0
        ).to(
          timeLocationRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          navbarElement ? 0.2 : 0
        );
      }

      // Animate social icons from bottom
      if (socialIconsRef.current) {
        socialIconsRef.current.classList.remove("invisible", "opacity-0");
        tl.set(
          socialIconsRef.current,
          { visibility: "visible" },
          navbarElement ? 0.2 : 0
        ).to(
          socialIconsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          navbarElement ? 0.2 : 0
        );
      }

      // Animate hero text
      if (heroTextRef.current) {
        heroTextRef.current.classList.remove("invisible", "opacity-0");
        tl.set(heroTextRef.current, { visibility: "visible" }, 0.4).to(
          heroTextRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          0.4
        );
      }

      // Animate image 1
      if (image1Ref.current) {
        image1Ref.current.classList.remove("invisible", "opacity-0");
        tl.set(image1Ref.current, { visibility: "visible" }, 0.6).to(
          image1Ref.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.6
        );
      }

      // Animate image 2
      if (image2Ref.current) {
        image2Ref.current.classList.remove("invisible", "opacity-0");
        tl.set(image2Ref.current, { visibility: "visible" }, 0.8).to(
          image2Ref.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.8
        );
      }

      // Animate scroll down text with delay
      if (scrollDownRef.current) {
        scrollDownRef.current.classList.remove("invisible", "opacity-0");
        tl.set(scrollDownRef.current, { visibility: "visible" }, 1.2).to(
          scrollDownRef.current,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          1.2
        );
      }
    }, 4700); // Wait for loading screen (3s) + slide animation (1.5s) + small buffer (200ms)

    return () => {
      clearTimeout(animationTimer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      id="home"
      className="h-screen relative p-8 flex flex-col overflow-hidden bg-[#F2F0EB]"
    >
      {/* Top left - Logo and Tech Explorer */}
      <div className="absolute top-8 left-8 flex items-center text-black text-xl font-light">
        <Image
          src="/hk_logo_black.png"
          alt="HK Logo"
          width={40}
          height={40}
          className="w-10 h-10 mr-3"
        />
      </div>

      {/* Time/Location in top right corner */}
      <div
        ref={timeLocationRef}
        className="absolute top-8 right-8 z-20 invisible opacity-0"
      >
        <div className="text-right">
          <div className="text-black text-sm font-medium">Indore, India</div>
          <div className="text-black text-lg font-medium">{currentTime}</div>
        </div>
      </div>

      {/* Scroll Down text at bottom center */}
      <div
        ref={scrollDownRef}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 invisible opacity-0 select-none pointer-events-none"
      >
        <div className="text-black text-sm font-light tracking-wider">
          SCROLL DOWN
        </div>
      </div>

      {/* Social Icons - Bottom Left */}
      <div
        ref={socialIconsRef}
        className="absolute bottom-8 left-[52px] flex flex-col gap-8 -translate-x-1/2 invisible opacity-0"
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition-colors duration-300"
        >
          <BsLinkedin size={20} />
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition-colors duration-300"
        >
          <BsWhatsapp size={20} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
      </div>

      {/* Hero Content */}
    </section>
  );
};

export default Hero;
