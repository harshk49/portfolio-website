"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Disable scrolling when loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

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
          scaleX: 1,
        });
      }
    }, 3000); // Start animation after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Main Content - Always rendered so it appears behind loading screen */}
      <div className="relative">
        <Navbar ref={navbarRef} />
        <Hero navbarRef={navbarRef} />
        <Work />
        <About />

        <Experience />
        <Blog />
        <Footer />
      </div>

      {/* Loading Screen - slides up to reveal content */}
      {loading && (
        <div
          ref={loadingRef}
          className="fixed inset-0 z-50 overflow-hidden w-screen"
          style={{ willChange: "transform, border-radius" }}
        >
          <LoadingScreen />
        </div>
      )}
    </div>
  );
};

export default Page;
