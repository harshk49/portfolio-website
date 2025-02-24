"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Technologies from "@/app/components/Technologies";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar"; // Navbar included as in App.jsx

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden antialiased text-neutral-100 selection:bg-cyan-300 selection:text-cyan-900">
      {loading ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/hk_logo.svg"
            alt="Loading Logo"
            width={128}
            height={128}
            className="animate-bounce"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="fixed top-0 w-full h-full -z-10 bg-black"></div>
          <div className="container px-8 mx-auto">
            <Navbar />
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="technologies">
              <Technologies />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </div>
        </motion.div>
      )}
    </div>
  );
}
