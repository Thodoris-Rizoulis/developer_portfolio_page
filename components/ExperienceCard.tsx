"use client";

import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-full min-w-[280px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl bg-[#292929] p-4 sm:p-6 md:p-10 opacity-100 md:opacity-40 md:hover:opacity-100 transition-opacity duration-200 overflow-hidden snap-center"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-48 xl:h-48 object-cover"
        src={urlFor(experience.companyImage).url()}
        alt={`${experience.company} logo`}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((technology) => {
            return (
              <img
                key={technology._id}
                className="h-10 w-10 rounded-full"
                src={urlFor(technology.image).url()}
              />
            );
          })}
        </div>
        <p className="text-gray-300 py-5">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentWork
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-5 ml-5 text-lg">
          {experience.points &&
            experience.points.map((point, i) => {
              return <li key={i}>{point}</li>;
            })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
