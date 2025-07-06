"use client";

import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl">
        EXPERIENCE
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {experiences &&
          experiences.map((experience) => {
            return (
              <ExperienceCard key={experience._id} experience={experience} />
            );
          })}
      </div>
    </div>
  );
}

export default WorkExperience;
