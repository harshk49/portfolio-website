"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LoadingScreen = () => {
  const curiousRef = useRef<HTMLDivElement>(null);
  const drivenRef = useRef<HTMLDivElement>(null);
  const innovativeRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const dot1Ref = useRef<HTMLDivElement>(null);
  const dot2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial state - all words invisible
    gsap.set([curiousRef.current, drivenRef.current, innovativeRef.current], {
      opacity: 0,
      y: 30,
    });

    // Set initial state for dots
    gsap.set([dot1Ref.current, dot2Ref.current], {
      opacity: 0,
      y: 30,
    });

    // Set initial state for progress bar
    gsap.set(progressBarRef.current, {
      width: "0%",
    });

    // Create timeline for sequential animations
    const tl = gsap.timeline();

    // Animate progress bar throughout the entire duration
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2.7, // Total duration of word animations
      ease: "power2.inOut",
    });

    // Animate words one by one with fade in effect
    tl.to(
      curiousRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      0 // Start immediately
    )
      .to(
        dot1Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        0.7 // Start slightly before "Driven" appears
      )
      .to(
        drivenRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0.9 // Start at 0.9 seconds
      )
      .to(
        dot2Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        1.6 // Start slightly before "Innovative" appears
      )
      .to(
        innovativeRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        1.8 // Start at 1.8 seconds
      );

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black">
      {/* Main content with words - centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center justify-center space-x-6 md:space-x-12">
          <div
            ref={curiousRef}
            className="text-2xl md:text-4xl font-bold text-white"
          >
            Curious
          </div>

          {/* First dot */}
          <div
            ref={dot1Ref}
            className="w-3 h-3 bg-orange-500 rounded-full"
            style={{
              boxShadow: "0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316",
              filter: "brightness(1.2)",
            }}
          ></div>

          <div
            ref={drivenRef}
            className="text-2xl md:text-4xl font-bold text-white"
          >
            Driven
          </div>

          {/* Second dot */}
          <div
            ref={dot2Ref}
            className="w-3 h-3 bg-orange-500 rounded-full"
            style={{
              boxShadow: "0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316",
              filter: "brightness(1.2)",
            }}
          ></div>

          <div
            ref={innovativeRef}
            className="text-2xl md:text-4xl font-bold text-white"
          >
            Innovative
          </div>
        </div>
      </div>

      {/* Loading section - at the bottom */}
      <div className="flex flex-col items-center pb-12 space-y-3">
        {/* Loading text */}
        <p className="text-white text-xs italic font-light">/ / loading</p>

        {/* Progress bar container */}
        <div className="w-48 h-px bg-gray-700 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-white rounded-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
