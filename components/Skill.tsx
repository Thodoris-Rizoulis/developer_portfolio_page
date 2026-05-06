"use client";

import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "@/typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex flex-col items-center cursor-pointer">
      <motion.img
        src={urlFor(skill.image).url()}
        initial={{
          x: directionLeft ? -160 : 160,
          opacity: 0,
        }}
        transition={{ duration: 0.9 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      {/* Hover overlay — desktop only */}
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 hidden md:flex flex-col items-center justify-center">
        <p className="text-3xl font-bold text-black">
          {skill.progress}%
        </p>
        <p className="text-xs font-semibold text-gray-600 text-center leading-tight px-1">
          {skill.title}
        </p>
      </div>

      {/* Static label — mobile only */}
      <div className="md:hidden mt-2 flex flex-col items-center">
        <p className="text-sm font-bold text-[#F7AB0A]">{skill.progress}%</p>
        <p className="text-xs text-gray-400 text-center leading-tight">{skill.title}</p>
      </div>
    </div>
  );
}

export default Skill;
