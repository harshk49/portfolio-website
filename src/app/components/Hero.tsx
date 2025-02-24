"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_CONTENT } from "@/constants/index";

const container = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero: React.FC = () => {
  return (
    <div className="pb-20 border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Section - Name & Details */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              harsh kardile
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl tracking-tight text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text"
            >
              software engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 my-2 font-normal tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex justify-center w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Image
              src="/profile_pic_1.jpg"
              alt="Harsh Kardile"
              width={220}
              height={220}
              className="block mt-6 shadow-lg rounded-2xl lg:w-auto lg:h-auto lg:hidden shadow-black"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Image Containers */}
      <motion.div
        variants={container(1.5)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-white top-2 right-16 rounded-xl lg:block shadow-white"
      >
        <Image
          src="/cricket.jpg"
          alt="Cricket pic"
          width={192}
          height={192}
          className="object-cover w-full h-full rounded-xl grayscale"
        />
      </motion.div>

      <motion.div
        variants={container(2)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-white top-56 right-16 rounded-xl lg:block shadow-white"
      >
        <Image
          src="/spotify.jpg"
          alt="Laptop Spotify"
          width={192}
          height={192}
          className="object-cover w-full h-full rounded-xl grayscale"
        />
      </motion.div>

      <motion.div
        variants={container(2.5)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-white top-[440px] right-16 rounded-xl lg:block shadow-white"
      >
        <Image
          src="/tajmahal.jpg"
          alt="Taj Mahal"
          width={192}
          height={192}
          className="object-cover w-full h-full rounded-xl"
        />
      </motion.div>

      <motion.div
        variants={container(3)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-72 h-72 -mt-8 -mr-4 bg-transparent border-2 border-white top-32 right-[300px] rounded-xl lg:block shadow-white"
      >
        <Image
          src="/profile_pic_1.jpg"
          alt="Profile Picture"
          width={288}
          height={288}
          className="object-cover w-full h-full rounded-xl"
        />
      </motion.div>

      <motion.div
        variants={container(3.5)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-white -top-24 right-[300px] rounded-xl lg:block shadow-white"
      >
        {/* Empty Container */}
      </motion.div>

      <motion.div
        variants={container(4)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-white top-[440px] right-[300px] rounded-xl lg:block shadow-white"
      >
        <Image
          src="/shelf.jpg"
          alt="Book Shelf"
          width={192}
          height={192}
          className="object-cover w-full h-full rounded-xl grayscale"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
