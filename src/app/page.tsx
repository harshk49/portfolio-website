"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial position for smoother animation
    if (loadingRef.current) {
      gsap.set(loadingRef.current, {
        y: 0,
        borderRadius: "0px",
      });
    }

    const timer = setTimeout(() => {
      // Animate loading screen with circular arc bottom
      if (loadingRef.current) {
        const tl = gsap.timeline({
          onComplete: () => {
            setLoading(false);
          },
        });

        tl.to(loadingRef.current, {
          y: "-100%",
          borderRadius: "0px 0px 50% 50%",
          duration: 1.5,
          ease: "expo.inOut",
          force3D: true,
          transformOrigin: "center top",
        });
      }
    }, 3000); // Start animation after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Main Content - Always rendered so it appears behind loading screen */}
      <div className="relative">
        <Navbar ref={navbarRef} />
        <Hero navbarRef={navbarRef} />
        <Footer />
      </div>

      {/* Loading Screen - slides up to reveal content */}
      {loading && (
        <div
          ref={loadingRef}
          className="fixed inset-0 z-50 overflow-hidden"
          style={{ willChange: "transform, border-radius" }}
        >
          <LoadingScreen />
        </div>
      )}
    </div>
  );
};

export default Page;
