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
    <motion.div className="min-h-screen md:h-screen relative flex flex-col overflow-hidden md:flex-row text-left max-w-full py-12 md:py-0 justify-center mx-auto items-center z-0">
      <h3 className="tracking-[20px] text-gray-500 text-2xl mb-4 md:mb-0 md:absolute md:top-24">
        PROJECTS
      </h3>

      {/* Scroll area with arrows - always overlaid */}
      <div className="w-full relative flex items-center justify-center">
        {projects.length > 1 && (
          <button
            onClick={() => scroll("left")}
            aria-label="Previous project"
            className="absolute left-2 md:left-4 z-30 p-2 md:p-3 rounded-full bg-[#292929] border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black focus-visible:bg-[#F7AB0A] focus-visible:text-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7AB0A] transition-colors duration-200 flex items-center justify-center shadow-lg flex-shrink-0"
          >
            <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        )}
          <div
            ref={scrollRef}
            className="no-scrollbar flex-1 md:flex-none md:w-full flex overflow-x-scroll overflow-y-hidden z-20 scroll-smooth snap-x snap-mandatory"
          >          {projects.length > 0 ? projects.map((project, i) => (
            <div
              key={i}
              className="w-screen flex-shrink-0 snap-center flex items-center justify-center px-4 sm:px-8 min-h-screen"
            >
              {/* Content container with max-width */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full max-w-6xl mx-auto">
              {/* Image */}
              <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt={project?.title}
                className="max-h-64 md:max-h-80 lg:max-h-96 w-auto object-contain rounded-xl flex-shrink-0"
              />

              {/* Text block */}
              <div className="flex flex-col space-y-5 max-w-xl lg:max-w-2xl text-center md:text-left px-6 md:px-0">
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
                      className="w-8 h-8 rounded-full object-cover"
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
            </div>
          )) : (
            <div className="w-screen flex-shrink-0 flex items-center justify-center h-screen">
              <p className="text-gray-500 text-center py-10">No projects added yet.</p>
            </div>
          )}
        </div>

        {projects.length > 1 && (
          <button
            onClick={() => scroll("right")}
            aria-label="Next project"
            className="absolute right-2 md:right-4 z-30 p-2 md:p-3 rounded-full bg-[#292929] border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black focus-visible:bg-[#F7AB0A] focus-visible:text-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7AB0A] transition-colors duration-200 flex items-center justify-center shadow-lg flex-shrink-0"
          >
            <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        )}
      </div>



      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
