"use client";

import { useEffect } from "react";

export default function Favicon() {
  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = () => {
      document
        .querySelectorAll("link[rel='icon']")
        .forEach((el) => el.remove()); // Remove old favicon

      const newFavicon = document.createElement("link");
      newFavicon.setAttribute("rel", "icon");
      newFavicon.setAttribute("type", "image/png");

      // **Force favicon refresh by appending a timestamp**
      const timeStamp = new Date().getTime();
      const faviconURL = matchDark.matches
        ? `/hk_logo.svg?t=${timeStamp}` // Dark theme favicon
        : `/hk_logo_black.png?t=${timeStamp}`; // Light theme favicon

      newFavicon.setAttribute("href", faviconURL);
      document.head.appendChild(newFavicon);

      console.log(`Favicon updated: ${faviconURL}`); // Debugging
    };

    updateFavicon(); // Set favicon on initial load
    matchDark.addEventListener("change", updateFavicon); // Listen for theme changes

    return () => matchDark.removeEventListener("change", updateFavicon); // Cleanup
  }, []);

  return null;
}
