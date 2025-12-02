"use client";

import React, { useState, useEffect } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Page = () => {
  const [loading, setLoading] = useState(true);

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
          <Navbar />
          <Hero />
        </div>
      )}
    </div>
  );
};

export default Page;
