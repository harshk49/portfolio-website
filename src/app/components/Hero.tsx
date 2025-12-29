"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface HeroProps {
  navbarRef: React.RefObject<HTMLDivElement | null>;
}

const Hero = ({ navbarRef }: HeroProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isWavePlaying, setIsWavePlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeLocationRef = useRef<HTMLDivElement>(null);

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

    // Set initial hidden state
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

    // Start animations after loading screen completes (4.7s)
    const timer = setTimeout(() => {
      const tl = gsap.timeline();

      // Animate navbar
      if (navbarElement) {
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

      // Animate time/location
      timeLocationRef.current?.classList.remove("invisible", "opacity-0");
      tl.set(timeLocationRef.current, { visibility: "visible" }, 0.2).to(
        timeLocationRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0.2
      );
    }, 4700);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col overflow-hidden bg-[#F2F0EB] sticky top-0"
    >
      {/* Centered Content Container */}
      <div className="mx-auto w-full max-w-7xl h-full relative p-8">
        {/* Top left - Logo and Sound Wave Button */}
        <div className="absolute top-8 left-8 flex items-center gap-4 text-black text-xl font-light">
          <Image
            src="/hk_logo_black.png"
            alt="HK Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />

          {/* Sound Wave Button */}
          <button
            onClick={toggleAudio}
            className="relative group w-12 h-12 rounded-full bg-black flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Toggle sound wave animation"
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
          className="absolute top-8 right-8 z-20 invisible opacity-0"
        >
          <div className="text-right">
            <div className="text-black text-sm font-medium">Indore, India</div>
            <div className="text-black text-lg font-medium">{currentTime}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
