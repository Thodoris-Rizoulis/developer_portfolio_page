"use client";

import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/typings";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <motion.div className="min-h-screen md:h-screen relative flex flex-col overflow-hidden md:flex-row text-left max-w-full py-12 md:py-0 justify-start md:justify-evenly mx-auto items-center z-0">
      <h3 className="tracking-[20px] text-gray-500 text-2xl mb-6 md:mb-0 md:absolute md:top-24">
        PROJECTS
      </h3>

      {/* Left arrow */}
      {projects.length > 1 && (
        <button
          onClick={() => scroll("left")}
          aria-label="Previous project"
          className="absolute left-2 md:left-4 z-30 p-1.5 md:p-2 rounded-full bg-[#292929]/90 border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black transition-colors duration-200 flex items-center justify-center"
        >
          <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}

      <div ref={scrollRef} className="no-scrollbar relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.length > 0 ? projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col md:flex-row items-center gap-10 justify-center px-10 md:px-20 h-screen"
          >
            {/* Image */}
            <motion.img
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={project?.title}
              className="max-h-52 w-auto object-contain rounded-xl flex-shrink-0"
            />

            {/* Text block */}
            <div className="flex flex-col space-y-5 max-w-xl text-center md:text-left">
              {/* Counter */}
              <p className="text-xs tracking-[8px] text-gray-500 uppercase">
                Project {i + 1} / {projects.length}
              </p>

              {/* Title */}
              <h4 className="text-3xl xl:text-4xl font-semibold">
                {project?.linkToBuild ? (
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F7AB0A] transition-colors underline decoration-[#F7AB0A]/50"
                  >
                    {project?.title}
                  </a>
                ) : (
                  <span className="underline decoration-[#F7AB0A]/50">{project?.title}</span>
                )}
              </h4>

              {/* Tech icons */}
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                {project?.technologies?.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    className="w-8 h-8 rounded-full"
                    alt={technology.title}
                  />
                ))}
              </div>

              {/* Summary */}
              <p className="text-base text-gray-300 leading-relaxed">
                {project.summary}
              </p>

              {/* CTA */}
              {project?.linkToBuild && (
                <div className="flex justify-center md:justify-start">
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#F7AB0A] border border-[#F7AB0A]/40 rounded-full px-5 py-2 text-sm tracking-widest hover:bg-[#F7AB0A] hover:text-black transition-all duration-200"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </div>
          </div>
        )) : (
          <div className="w-screen flex-shrink-0 flex items-center justify-center h-screen">
            <p className="text-gray-500 text-center py-10">No projects added yet.</p>
          </div>
        )}
      </div>

      {/* Right arrow */}
      {projects.length > 1 && (
        <button
          onClick={() => scroll("right")}
          aria-label="Next project"
          className="absolute right-2 md:right-4 z-30 p-1.5 md:p-2 rounded-full bg-[#292929]/90 border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black transition-colors duration-200 flex items-center justify-center"
        >
          <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
