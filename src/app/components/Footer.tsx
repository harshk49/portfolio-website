"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/10 py-8 px-2">
      <div className="max-w-full mx-4">
        <div className="flex items-center justify-between">
          {/* Left side - Quote */}
          <div className="flex-1 pr-4">
            <blockquote className="text-xl md:text-2xl font-light text-black leading-relaxed">
              &quot;If you recognize quality when you see it, you already know
              exactly where to reach me.&quot;
            </blockquote>
          </div>

          {/* Right side - Link */}
          <div className="flex-1 flex justify-end pl-4">
            <div className="group">
              <div className="bg-black/8 backdrop-blur-md border border-black/15 rounded-3xl p-8 min-w-[320px] transition-all duration-500 hover:bg-black/15 hover:border-black/25 hover:scale-[1.02] hover:shadow-2xl">
                <div className="text-center space-y-4">
                  <a
                    href="https://taponn.me/harshkardile49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-black text-2xl font-medium hover:text-gray-700 transition-colors duration-300 tracking-tight"
                  >
                    taponn.me/harshkardile49
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
