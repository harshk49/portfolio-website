"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const targetId = event.currentTarget.getAttribute("href");

    if (targetId && targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const topOffset = 70; // Adjust this value if you have a fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth", // Smooth scrolling
        });
      }
    }
  };

  return (
    <div className="relative">
      {/* Logo container - stays at the top */}
      <div className="flex items-center justify-between px-4 py-5">
        <Image
          src="/hk_logo.svg"
          alt="Logo"
          width={40} // Set appropriate width
          height={40} // Set appropriate height
          className="w-10 h-10 mr-8 cursor-pointer"
          onClick={toggleNavbar}
        />
        {/* Navigation links - only visible on larger screens */}
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300 ease-in-out hidden md:block ${
            isNavbarVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <nav>
            <div className="px-6 py-2 bg-white rounded-full shadow-lg bg-opacity-20 backdrop-blur-md">
              <ul className="flex gap-8">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Technologies", href: "#technologies" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleScroll}
                      className="tracking-tight text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFBCB3] bg-clip-text transition-colors hover:text-cyan-500"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
