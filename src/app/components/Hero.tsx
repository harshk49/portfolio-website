"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface HeroProps {
  navbarRef: React.RefObject<HTMLDivElement | null>;
}

const Hero = ({ navbarRef }: HeroProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const timeLocationRef = useRef<HTMLDivElement>(null);

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
        visibility: 'hidden'
      });
    }

    // Set initial state for navbar - completely hidden above viewport
    const navbarElement = navbarRef?.current;
    if (navbarElement) {
      gsap.set(navbarElement, {
        y: -100,
        opacity: 0,
        visibility: 'hidden'
      });
    }

    // Delay to ensure loading screen is completely gone
    const animationTimer = setTimeout(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline();

      // Animate navbar sliding down from top
      if (navbarElement) {
        tl.set(navbarElement, { visibility: 'visible' })
          .to(
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
      tl.set(timeLocationRef.current, { visibility: 'visible' }, navbarElement ? 0.2 : 0)
        .to(
          timeLocationRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          navbarElement ? 0.2 : 0
        );
    }, 100); // Small delay to ensure loading screen transition is complete

    return () => {
      clearTimeout(animationTimer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  return (
    <section
      id="home"
      className="h-screen relative p-8 flex flex-col overflow-hidden bg-black"
    >
      {/* Top left - Logo and Tech Explorer */}
      <div className="absolute top-8 left-8 flex items-center text-white text-xl font-light">
        <Image
          src="/hk_logo.svg"
          alt="HK Logo"
          width={40}
          height={40}
          className="w-10 h-10 mr-3"
        />
      </div>

      {/* Time/Location in top right corner */}
      <div ref={timeLocationRef} className="absolute top-8 right-8 z-20">
        <div className="text-right">
          <div className="text-white text-sm font-medium">Indore, India</div>
          <div className="text-white text-lg font-medium">{currentTime}</div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          {/* Profile Image - Centered */}
          <div className="relative mx-auto mb-8">
            <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/hk_profile.jpeg"
                alt="Harsh Kardile"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Gradient glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Name at bottom covering full width */}
      <div className="absolute bottom-8 left-0 right-0">
        <h1 className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-light text-white text-center leading-none tracking-normal whitespace-nowrap">
          Harsh Kardile
        </h1>
      </div>
    </section>
  );
};

export default Hero;
