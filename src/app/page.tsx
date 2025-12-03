"use client";

import React, { useState, useEffect, useRef } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loading screen will show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-50">
          <LoadingScreen />
        </div>
      )}

      {/* Main Content After Loading */}
      {!loading && (
        <div className="relative">
          <Navbar ref={navbarRef} />
          <Hero navbarRef={navbarRef} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Page;
