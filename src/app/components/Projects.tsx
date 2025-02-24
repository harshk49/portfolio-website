"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/index";

// Define the structure of a Project object
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      {/* Title Section */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="animate-text-gradient bg-gradient-to-r from-black via-[#FAB12F] to-[#FA812F] bg-[200%_auto] bg-clip-text text-4xl lg:text-5xl text-transparent pb-2 my-20 text-center"
        style={{ whiteSpace: "nowrap" }}
      >
        Projects
      </motion.h2>

      {/* Projects List */}
      <div>
        {PROJECTS.map((project: Project, index: number) => (
          <div
            key={index}
            className="flex flex-col flex-wrap mb-8 lg:flex-row lg:justify-center"
          >
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex justify-center w-full lg:w-1/4"
            >
              <Image
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            {/* Text and Technologies Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-lg font-semibold lg:text-xl">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-medium text-white bg-black rounded sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
