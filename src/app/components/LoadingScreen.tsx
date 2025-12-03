import React, { useState, useEffect } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    const duration = 3000; // 3 seconds to match the timer in page.tsx
    const interval = 100; // Update every 100ms for balanced smoothness
    const totalSteps = duration / interval; // Total number of updates (30 steps)
    const decrement = 99 / totalSteps; // Calculate decrement to go from 100 to 1

    const timer = setInterval(() => {
      setPercentage((prev) => {
        const newValue = prev - decrement;
        if (newValue <= 1) {
          clearInterval(timer);
          return 1;
        }
        return newValue;
      });
    }, interval);

    // Ensure it ends at exactly 1% after 3 seconds
    setTimeout(() => {
      setPercentage(1);
    }, duration - 50); // Set to 1% just before the main timer ends

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Top left - Logo and Tech Explorer */}
      <div className="absolute top-8 left-8 flex items-center text-gray-400 text-xl font-light">
        <Image
          src="/hk_logo.svg"
          alt="HK Logo"
          width={40}
          height={40}
          className="w-10 h-10 mr-3"
        />
      </div>

      {/* Percentage display - Centered */}
      <div className="text-white text-4xl md:text-5xl font-light tracking-wider transition-all duration-300 ease-out">
        {Math.round(percentage)}
        <span className="text-3xl md:text-4xl opacity-70">%</span>
      </div>

      {/* Loading text at bottom right */}
      <div className="absolute bottom-8 right-8 text-gray-400 text-lg font-light">
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;
