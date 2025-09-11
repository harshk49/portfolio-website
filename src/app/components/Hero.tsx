"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const nameRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
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
    // Set initial states for all animated elements
    if (nameRef.current) {
      gsap.set(nameRef.current, {
        y: 200,
        opacity: 0,
      });
    }

    if (logoRef.current) {
      gsap.set(logoRef.current, {
        x: -100,
        opacity: 0,
      });
    }

    if (timeLocationRef.current) {
      gsap.set(timeLocationRef.current, {
        x: 100,
        opacity: 0,
      });
    }

    // Create timeline for coordinated animations
    const tl = gsap.timeline({ delay: 0.3 });

    // Animate logo from left
    tl.to(
      logoRef.current,
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      0
    )
      // Animate time/location from right
      .to(
        timeLocationRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0.1
      ) // Slight delay after logo
      // Animate name text from bottom
      .to(
        nameRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        0.5
      ); // Delay after header elements
  }, []);

  return (
    <section className="h-screen relative p-8 flex flex-col overflow-hidden">
      {/* Full-page background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/portfolio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Logo and Time/Location for Hero page */}
      <div ref={logoRef} className="absolute top-8 left-8 z-20">
        <Image
          src="/hk_logo.svg"
          alt="Harsh Kardile Logo"
          width={50}
          height={50}
          className="w-12 h-12 cursor-pointer"
        />
      </div>

      <div ref={timeLocationRef} className="absolute top-8 right-8 z-20">
        <div className="text-right">
          <div className="text-white text-sm font-medium">Indore, India</div>
          <div className="text-white text-lg font-medium">{currentTime}</div>
        </div>
      </div>

      {/* Hero content goes here */}
      <div className="flex-1 flex items-center justify-center z-20"></div>

      {/* Large name text at bottom */}
      <div className="w-full z-20">
        <h1
          ref={nameRef}
          className="text-[14rem] font-normal text-white font-clash text-center leading-none -mb-8"
        >
          Harsh Kardile
        </h1>
      </div>
    </section>
  );
};

export default Hero;
