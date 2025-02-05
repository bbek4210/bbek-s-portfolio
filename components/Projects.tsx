"use client";
import React from "react";

import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center my-20 text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS?.map((proj, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center gap-6"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={proj?.link}>
                <img
                  className="mb-6 rounded"
                  width={350}
                  height={350}
                  src={proj?.image}
                  alt={proj?.title}
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{proj?.title}</h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {proj?.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {" "}
                {proj?.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700 "
                    key={index}
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
