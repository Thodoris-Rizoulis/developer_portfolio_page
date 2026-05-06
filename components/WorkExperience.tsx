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
    const cardWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen md:h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 py-12 md:py-0 justify-start md:justify-evenly mx-auto items-center">
      <h3 className="tracking-[20px] text-gray-500 text-2xl mb-6 md:mb-0 md:absolute md:top-24">
        EXPERIENCE
      </h3>

      {/* Left arrow */}
      {experiences.length > 1 && (
        <button
          onClick={() => scroll("left")}
          aria-label="Previous experience"
          className="absolute left-2 md:left-4 z-30 p-1.5 md:p-2 rounded-full bg-[#292929]/90 border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black transition-colors duration-200 flex items-center justify-center"
        >
          <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="no-scrollbar w-full flex space-x-5 overflow-x-scroll px-[7.5vw] py-10 sm:p-10 snap-x snap-mandatory"
      >
        {experiences && experiences.length > 0 ? (
          experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        ) : (
          <p className="text-gray-500 text-center py-10">No experience added yet.</p>
        )}
      </div>

      {/* Right arrow */}
      {experiences.length > 1 && (
        <button
          onClick={() => scroll("right")}
          aria-label="Next experience"
          className="absolute right-2 md:right-4 z-30 p-1.5 md:p-2 rounded-full bg-[#292929]/90 border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black transition-colors duration-200 flex items-center justify-center"
        >
          <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}
    </div>
  );
}

export default WorkExperience;
