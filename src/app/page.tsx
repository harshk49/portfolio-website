"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import LoadingScreen from "./components/LoadingScreen";
import About from "./components/About";
import Hero from "./components/Hero";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simple transition from loading to About page
      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false);
        },
      });

      // Animate loading screen up
      tl.to(loadingRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power2.inOut",
      });
    }, 3000); // Loading screen will show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Loading Screen */}
      {loading && (
        <div ref={loadingRef} className="fixed inset-0 z-50">
          <LoadingScreen />
        </div>
      )}

      {/* Main Content After Loading */}
      {!loading && (
        <div className="relative">
          <Hero />
          <About />
        </div>
      )}
    </div>
  );
};

export default Page;
