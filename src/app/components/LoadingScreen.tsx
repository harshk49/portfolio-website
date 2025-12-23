import React, { useState, useEffect } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    const fastDuration = 2200; // Fast countdown for 2.2 seconds (slightly slower)
    const interval = 40; // Update every 40ms for smooth but slightly slower animation
    const totalSteps = fastDuration / interval; // Total steps for countdown
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

    // After fast countdown, pause at 1% for the remaining time
    setTimeout(() => {
      setPercentage(1);
    }, fastDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden will-change-transform">
      {/* Centered Content Container */}
      <div className="mx-auto w-full max-w-7xl h-full relative px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Top left - Logo */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 flex items-center text-gray-400 text-base sm:text-lg md:text-xl font-light will-change-transform z-10">
          <Image
            src="/hk_logo.svg"
            alt="HK Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mr-2 sm:mr-3"
          />
        </div>

        {/* Percentage display - Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider transition-all duration-300 ease-out z-10">
          {Math.round(percentage)}
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-70">
            %
          </span>
        </div>

        {/* Loading text at bottom right */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 text-gray-400 text-sm sm:text-base md:text-lg font-light z-10">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
