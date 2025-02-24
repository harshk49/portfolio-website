"use client";

import { CONTACT } from "@/constants/index";
import { motion } from "framer-motion";
import {
  InstagramLogo,
  LinkedinLogo,
  ThreadsLogo,
  XLogo,
} from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-20 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="animate-text-gradient bg-gradient-to-r from-black via-[#FAB12F] to-[#FA812F] bg-[200%_auto] bg-clip-text text-4xl lg:text-5xl text-transparent pb-2 my-20 text-center"
        style={{ whiteSpace: "nowrap" }}
      >
        Let&apos;s Connect
      </motion.h2>
      <div className="w-full max-w-md px-4 mx-auto tracking-tighter text-center">
        {/* Email Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-4"
        >
          <a href={`mailto:${CONTACT.email.split(": ")[1]}`}>
            {CONTACT.email.split(": ")[1]}
          </a>
        </motion.div>

        {/* Phone Number Section */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a href={`tel:${CONTACT.phoneNo}`}>{CONTACT.phoneNo}</a>
        </motion.p>

        {/* Download CV Button */}
        <motion.button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1J8HMHkPSCqVc3l21FPtnl7jrBeYt9BHb/view?usp=sharing"
            )
          }
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#FFD700_50%,#ffffff_100%)]" />
          <span className="inline-flex items-center justify-center w-full h-full px-8 py-1 text-sm font-medium rounded-full cursor-pointer bg-gray-950 text-gray-50 backdrop-blur-3xl">
            Download CV
          </span>
        </motion.button>

        {/* Address Section (Optional) */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        {/* Social Icons Section */}
        <motion.div className="flex flex-wrap justify-center gap-4 mx-auto mt-8">
          <motion.a
            href="https://www.linkedin.com/in/harsh-kardile-887b16215/"
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl text-white md:text-2xl place-self-center"
          >
            <LinkedinLogo />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/harsh_kardile49?igsh=djJ0dGd0NHdyb3Ex"
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl text-white md:text-2xl place-self-center"
          >
            <InstagramLogo />
          </motion.a>

          <motion.a
            href="https://x.com/justharsh49"
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl text-white md:text-2xl place-self-center"
          >
            <XLogo />
          </motion.a>
          <motion.a
            href="https://www.threads.net/@harsh_kardile49?invite=0"
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl text-white md:text-2xl place-self-center"
          >
            <ThreadsLogo />
          </motion.a>
          <motion.a
            href="https://github.com/harshk49"
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.7 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl text-white md:text-2xl place-self-center"
          >
            <GithubLogo />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
