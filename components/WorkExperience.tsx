"use client";

import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    // Scroll by approximately one card width
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen md:h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-4 sm:px-10 md:px-16 py-8 md:py-0 justify-center mx-auto items-center">
      <h3 className="tracking-[20px] text-gray-500 text-2xl mb-4 md:mb-0 md:absolute md:top-24">
        EXPERIENCE
      </h3>

      {/* Scroll area with arrows - mobile: overlaid, desktop: side-by-side */}
      <div className="w-full max-w-[90%] lg:max-w-[75%] xl:max-w-[65%] relative flex items-center justify-center">
        {experiences.length > 1 && (
          <button
            onClick={() => scroll("left")}
            aria-label="Previous experience"
            className="absolute left-1 md:relative md:left-0 z-30 p-2 md:p-3 rounded-full bg-[#292929]/95 border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black focus-visible:bg-[#F7AB0A] focus-visible:text-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7AB0A] transition-colors duration-200 flex items-center justify-center shadow-lg flex-shrink-0"
          >
            <ChevronLeftIcon className="h-5 w-5 md:h-7 md:w-7" />
          </button>
        )}
        <div
          ref={scrollRef}
          className="no-scrollbar w-full flex space-x-5 overflow-x-scroll py-10 px-0 md:px-4 scroll-smooth"
        >
          {experiences && experiences.length > 0 ? (
            experiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))
          ) : (
            <p className="text-gray-500 text-center py-10 w-full">No experience added yet.</p>
          )}
        </div>
        {experiences.length > 1 && (
          <button
            onClick={() => scroll("right")}
            aria-label="Next experience"
            className="absolute right-1 md:relative md:right-0 z-30 p-2 md:p-3 rounded-full bg-[#292929]/95 border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black focus-visible:bg-[#F7AB0A] focus-visible:text-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7AB0A] transition-colors duration-200 flex items-center justify-center shadow-lg flex-shrink-0"
          >
            <ChevronRightIcon className="h-5 w-5 md:h-7 md:w-7" />
          </button>
        )}
      </div>
    </div>
  );
}

export default WorkExperience;
