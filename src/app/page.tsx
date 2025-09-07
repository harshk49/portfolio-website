"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [showHero, setShowHero] = useState(false);
  const loadingRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Start transition animation
      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false);
        },
      });

      // Animate loading screen up and hero section up from bottom
      tl.set(heroRef.current, { y: "100%" })
        .add(() => setShowHero(true))
        .to(loadingRef.current, {
          y: "-100%",
          duration: 0.8,
          ease: "power2.inOut",
        })
        .to(
          heroRef.current,
          {
            y: "0%",
            duration: 0.8,
            ease: "power2.out",
          },
          "<" // Start at the same time as previous animation
        );
    }, 3000); // Loading screen will show for 3 seconds to complete all animations

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Loading Screen */}
      {(loading || showHero) && (
        <div ref={loadingRef} className="fixed inset-0 z-50">
          <LoadingScreen />
        </div>
      )}

      {/* Hero Section */}
      {showHero && (
        <div ref={heroRef} className="fixed inset-0 z-40">
          <Hero />
        </div>
      )}

      {/* Fallback Hero (after animation completes) */}
      {!loading && !showHero && (
        <div className="min-h-screen">
          <Hero />
        </div>
      )}
    </div>
  );
};

export default Page;
