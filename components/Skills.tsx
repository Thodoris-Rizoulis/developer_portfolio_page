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
      className="min-h-screen md:h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 py-12 md:py-0 justify-start md:justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-4 md:mb-0 md:absolute md:top-24">
        SKILLS
      </h3>
      <h4 className="uppercase tracking-[5px] text-gray-500 text-sm mb-8 md:mb-0 md:absolute md:top-36">
        <span className="md:hidden">Current proficiency shown below</span>
        <span className="hidden md:inline">Hover for current proficiency</span>
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skills?.length > 0 ? skills.map((skill, i) => {
          return [
            <Skill key={skill._id} directionLeft={i % 2 == 0} skill={skill} />,
          ];
        }) : (
          <p className="col-span-full text-gray-500 text-center py-10">No skills added yet.</p>
        )}
      </div>
    </motion.div>
  );
}

export default Skills;
