"use client";

import { FaGitAlt } from "react-icons/fa6";
import {
  RiJavascriptFill,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb, SiMui, SiPostman } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

import { motion } from "framer-motion";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const boxSize = "w-24 h-24"; // Uniform size for all boxes

const Technologies: React.FC = () => {
  return (
    <div className="px-4 pb-24 border-b border-neutral-800 sm:px-0">
      {/* Title Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="animate-text-gradient bg-gradient-to-r from-black via-[#FAB12F] to-[#FA812F] bg-[200%_auto] bg-clip-text text-4xl lg:text-5xl text-transparent pb-2 my-20 text-center"
        style={{ whiteSpace: "nowrap" }}
      >
        <div className="mt-8">
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Technologies
          </motion.h2>
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Known
          </motion.h2>
        </div>
      </motion.div>

      {/* First Row */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {[
          {
            icon: <RiJavascriptFill className="text-5xl text-yellow-500" />,
            delay: 2.5,
          },
          {
            icon: <BiLogoTypescript className="text-5xl text-blue-400" />,
            delay: 3,
          },
          {
            icon: <RiReactjsLine className="text-5xl text-blue-400" />,
            delay: 5,
          },
          {
            icon: <RiNodejsLine className="text-5xl text-green-700" />,
            delay: 2,
          },
          {
            icon: <RiTailwindCssFill className="text-5xl text-blue-500" />,
            delay: 2.5,
          },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.delay)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 border-neutral-500 p-4 flex items-center justify-center ${boxSize}`}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-8"
      >
        {[
          { icon: <SiMongodb className="text-5xl text-green-600" />, delay: 4 },
          { icon: <FaGitAlt className="text-5xl text-red-600" />, delay: 3.5 },
          {
            icon: <SiPostman className="text-5xl text-orange-500" />,
            delay: 1.5,
          },
          { icon: <SiMui className="text-5xl text-blue-500" />, delay: 4 },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.delay)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 border-neutral-500 p-4 flex items-center justify-center ${boxSize}`}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
