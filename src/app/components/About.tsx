"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ABOUT_TEXT = (
  <>
    <motion.p
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mb-4 text-justify"
    >
      I am a driven programmer in my 4th year of studying Computer Science, with
      a specialization in Information and Cyber Security. I don’t just write
      code; I create solutions that elevate user experiences and drive
      innovation.
    </motion.p>
    <motion.p
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-4 text-justify"
    >
      My hands-on experience includes projects like the Notes App and the Airbnb
      Clone, where I harnessed the power of React, Node.js, and various
      databases to deliver seamless functionalities. Currently, I&apos;m
      developing the IMC portal, honing my skills in project management and team
      collaboration—because in this field, excellence is a team sport.
    </motion.p>
    <motion.p
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mb-4 text-justify"
    >
      I thrive in dynamic team environments and relish complex challenges,
      always pushing for innovative solutions. Beyond technology, I&apos;m
      passionate about cricket and outdoor activities that fuel my competitive
      spirit. My enthusiasm for entrepreneurship and emerging tech trends keeps
      me on the pulse of innovation, ready to seize opportunities that define
      the future.
    </motion.p>
  </>
);

const About: React.FC = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <div className="text-center">
        <div className="flex justify-center">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="animate-text-gradient bg-gradient-to-r from-black via-[#FAB12F] to-[#FA812F] bg-[200%_auto] bg-clip-text text-4xl lg:text-5xl text-transparent pb-2 my-20"
            style={{ whiteSpace: "nowrap" }}
          >
            About Me
          </motion.h2>
        </div>
      </div>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <Image
              src="/about.jpg"
              alt="About"
              className="shadow-lg rounded-2xl shadow-black"
              width={500} // Adjust width as needed
              height={500} // Adjust height as needed
              priority // Ensures fast loading
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-xl py-6 my-2">{ABOUT_TEXT}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
