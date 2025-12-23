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
      {/* Top left - Logo and Tech Explorer */}
      <div className="absolute top-8 left-8 flex items-center text-gray-400 text-xl font-light will-change-transform">
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
