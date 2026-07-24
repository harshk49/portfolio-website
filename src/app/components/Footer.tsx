"use client";

import React from "react";
import Image from "next/image";
import { CONTACT_LINKS, MARQUEE_IMAGES, PERSONAL_INFO } from "@/constant";



const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="w-full bg-black text-white flex flex-col relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#1F8BFF]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Contact Section ── */}
      <div className="flex-1 flex flex-col justify-center w-full py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Section heading */}
          <div className="mb-12 md:mb-16">
            <h2
              className="mb-3 font-['Clash_Grotesk'] text-4xl font-normal sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: "#1F8BFF" }}
            >
              Contact
            </h2>
          </div>

          {/* CTA line */}
          <p className="text-white/40 text-sm sm:text-base md:text-lg mb-10 md:mb-14 max-w-lg satoshi">
            Have a project in mind or want to collaborate? Let&apos;s connect
            and build something meaningful together.
          </p>

          {/* Contact Links */}
          <div className="space-y-0">
            {CONTACT_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="footer-contact-row group flex items-center justify-between py-4 sm:py-5 md:py-6 border-t border-white/[0.07] transition-all duration-300 hover:border-white/20"
                aria-label={`${link.label}: ${link.value}`}
              >
                {/* Label */}
                <span className="text-white/40 text-sm sm:text-base md:text-lg font-medium font-['Clash_Grotesk'] tracking-wide transition-colors duration-300 group-hover:text-white/60">
                  {String(index + 1).padStart(2, "0")}
                  <span className="mx-2 sm:mx-3 text-white/15">—</span>
                  {link.label}
                </span>

                {/* Value + arrow */}
                <span className="flex items-center gap-2 sm:gap-3">
                  <span className="relative text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium transition-colors duration-300 group-hover:text-[#1F8BFF]">
                    {link.value}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#1F8BFF] transition-all duration-300 group-hover:w-full" />
                  </span>
                  <svg
                    className="w-4 h-4 text-white/0 transition-all duration-300 group-hover:text-[#1F8BFF] group-hover:translate-x-0.5 -translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </span>
              </a>
            ))}
            {/* Bottom border for last item */}
            <div className="border-t border-white/[0.07]" />
          </div>
        </div>
      </div>

      {/* ── When the Work Stops ── */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24 mb-6 md:mb-8">
        <h3
          className="font-['Clash_Grotesk'] text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal"
          style={{ color: "#1F8BFF" }}
        >
          When the Work Stops
        </h3>
        <p className="text-white/30 text-xs sm:text-sm mt-1 satoshi">
          A few things that keep me going outside the terminal.
        </p>
      </div>

      {/* ── Image Marquee ── */}
      <div className="w-full pb-10 sm:pb-12 md:pb-16 overflow-hidden">
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <div className="flex gap-2 sm:gap-3 md:gap-4 animate-marquee">
            {MARQUEE_IMAGES.map((image, index) => (
              <div
                key={`set1-${index}`}
                className="flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden group"
                style={{
                  width: "clamp(130px, 18vw, 200px)",
                  height: "clamp(130px, 18vw, 200px)",
                }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={image}
                  alt={`Life outside work ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 pointer-events-none select-none transition-all duration-500"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div
            className="flex gap-2 sm:gap-3 md:gap-4 animate-marquee"
            aria-hidden="true"
          >
            {MARQUEE_IMAGES.map((image, index) => (
              <div
                key={`set2-${index}`}
                className="flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden group"
                style={{
                  width: "clamp(130px, 18vw, 200px)",
                  height: "clamp(130px, 18vw, 200px)",
                }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={image}
                  alt={`Life outside work ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 pointer-events-none select-none transition-all duration-500"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="w-full border-t border-white/[0.07]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Quote + Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-white/25 text-xs sm:text-sm italic satoshi">
                &quot;{PERSONAL_INFO.footerQuote}&quot;
              </p>
              <span className="hidden sm:block text-white/10">·</span>
              <p className="text-white/20 text-xs satoshi">
                © {currentYear} {PERSONAL_INFO.name}
              </p>
            </div>

            {/* Right: Back to top */}
            <button
              onClick={scrollToTop}
              className="footer-back-to-top group inline-flex items-center gap-2 text-white/30 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:text-white/70 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span className="satoshi">Back to top</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-contact-row {
          will-change: border-color;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
