"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  const marqueeImages = [
    "/goku.jpeg",
    "/Harsh.jpeg",
    "/beng.jpeg",
    "/book.jpeg",
    "/kaach.jpeg",
    "/plane.jpeg",
    "/tajmahal.jpeg",
    "https://i.pinimg.com/736x/05/4a/64/054a642a0ef827e6be57fe66e3e75459.jpg",
    "https://i.pinimg.com/736x/b3/3e/99/b33e99df33e57bec6d9d3f896497a2e5.jpg",
    "https://i.pinimg.com/736x/1a/03/ff/1a03fff18fbb548ab5afecb428467acb.jpg",
    "https://i.pinimg.com/736x/c0/8d/e0/c08de0f057c174f95a9c0a86713483e4.jpg",
    "https://i.pinimg.com/736x/d1/bd/98/d1bd98ac3d49e5c3bcae13ab1e2a5ed3.jpg",
    "https://i.pinimg.com/1200x/22/e6/80/22e680e6936b7ab1a22f2c7f85416cbc.jpg",
    "https://i.pinimg.com/736x/f7/9d/ee/f79deee1fec6d20e03887257661ecfa6.jpg",
  ];

  return (
    <footer
      id="contact"
      className="h-screen w-full bg-black text-white flex flex-col relative overflow-hidden"
    >
      {/* Main Content Container */}
      <div className="flex-1 flex flex-col justify-center w-full">
        {/* Contact Section - Centered */}
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">
          <h2
            className="mb-6 font-['Clash_Grotesk'] text-5xl font-normal md:text-6xl lg:text-7xl"
            style={{ color: "#D72631" }}
          >
            Contact
          </h2>

          <div className="grid grid-cols-2 gap-y-6 text-xl lg:text-2xl">
            <div className="text-white/60">Email</div>
            <a
              href="mailto:harshkardile49@gmail.com"
              className="text-white text-right hover:text-white/70 transition-colors"
            >
              harshkardile49@gmail.com
            </a>

            <div className="text-white/60">LinkedIn</div>
            <a
              href="https://linkedin.com/in/harsh-kardile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-right hover:text-white/70 transition-colors"
            >
              in/harsh-kardile
            </a>

            <div className="text-white/60">Medium</div>
            <a
              href="https://medium.com/@harshkardile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-right hover:text-white/70 transition-colors"
            >
              @harshkardile
            </a>

            <div className="text-white/60">GitHub</div>
            <a
              href="https://github.com/harshk49"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-right hover:text-white/70 transition-colors"
            >
              harshk49
            </a>

            <div className="text-white/60">Instagram</div>
            <a
              href="https://instagram.com/harsh_kardile49"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-right hover:text-white/70 transition-colors"
            >
              harsh_kardile49
            </a>
          </div>
        </div>
      </div>

      {/* When the Work Stops Section - Centered */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24 mb-12">
        <h2
          className="text-xl lg:text-3xl font-normal"
          style={{ color: "#D72631" }}
        >
          When the Work Stops
        </h2>
      </div>

      {/* Continuous Marquee Slider with Images */}
      <div className="w-full pb-16 overflow-hidden">
        <div className="flex gap-4">
          <div className="flex gap-4 animate-marquee">
            {marqueeImages.map((image, index) => (
              <div
                key={`set1-${index}`}
                className="flex-shrink-0 rounded-2xl overflow-hidden group"
                style={{ width: "280px", height: "280px" }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={image}
                  alt={`Portfolio image ${index + 1}`}
                  width={280}
                  height={280}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 pointer-events-none select-none transition-all duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4 animate-marquee" aria-hidden="true">
            {marqueeImages.map((image, index) => (
              <div
                key={`set2-${index}`}
                className="flex-shrink-0 rounded-2xl overflow-hidden group"
                style={{ width: "280px", height: "280px" }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={image}
                  alt={`Portfolio image ${index + 1}`}
                  width={280}
                  height={280}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 pointer-events-none select-none transition-all duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-full px-6 md:px-8 pb-6">
        <p
          className="text-xl lg:text-2xl font-medium italic text-center"
          style={{ color: "#FFF" }}
        >
          &quot;If you know quality, you know where to find it.&quot;
        </p>
      </div>

      {/* Decorative Element - Subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
