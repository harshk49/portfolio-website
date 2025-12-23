"use client";

import React, { useState, forwardRef } from "react";

const Navbar = forwardRef<HTMLDivElement>((props, ref) => {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { name: "Works", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={ref}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 invisible opacity-0"
    >
      <div className=" px-6 py-3">
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-white ${
                  activeItem === item.name
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
