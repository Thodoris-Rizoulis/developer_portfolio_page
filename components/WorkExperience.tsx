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
    // Get the first card to calculate its width including margin
    const firstCard = scrollRef.current.firstElementChild as HTMLElement;
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth;
    const gap = 20; // space-x-5 = 1.25rem = 20px
    const scrollAmount = cardWidth + gap;
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

      {/* Scroll area with arrows - always overlaid */}
      <div className="w-full max-w-[95%] lg:max-w-[88%] xl:max-w-[85%] relative flex items-center justify-center">
        {experiences.length > 1 && (
          <button
            onClick={() => scroll("left")}
            aria-label="Previous experience"
            className="absolute -left-2 md:left-2 lg:left-4 z-30 p-2 md:p-3 rounded-full bg-[#292929] border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black focus-visible:bg-[#F7AB0A] focus-visible:text-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7AB0A] transition-colors duration-200 flex items-center justify-center shadow-lg flex-shrink-0"
          >
            <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        )}
        <div
          ref={scrollRef}
          className="no-scrollbar w-full flex space-x-5 overflow-x-scroll py-10 px-0 md:px-4 scroll-smooth snap-x snap-mandatory"
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
            className="absolute -right-2 md:right-2 lg:right-4 z-30 p-2 md:p-3 rounded-full bg-[#292929] border border-gray-700 text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black focus-visible:bg-[#F7AB0A] focus-visible:text-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7AB0A] transition-colors duration-200 flex items-center justify-center shadow-lg flex-shrink-0"
          >
            <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        )}
      </div>
    </div>
  );
}

export default WorkExperience;
