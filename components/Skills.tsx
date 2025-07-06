"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "@/typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        SKILLS
      </h3>
      <h4 className="absolute top-36 uppercase tracking=[5px]  text-gray-500 text-sm">
        Hover a skill for current proficiency.
      </h4>
      <div className="grid grid-cols-4 gap-5">
        {skills?.map((skill, i) => {
          return [
            <Skill key={skill._id} directionLeft={i % 2 == 0} skill={skill} />,
          ];
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
