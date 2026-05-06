"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen md:h-screen flex flex-col relative text-center md:flex-row max-w-7xl px-10 py-12 md:py-0 justify-start md:justify-evenly items-center gap-8 md:gap-0 mx-auto"
    >
      <h3 className="tracking-[20px] text-gray-500 text-2xl mb-6 md:mb-0 md:absolute md:top-28">
        ABOUT
      </h3>
      <motion.img
        src={urlFor(pageInfo.profilePic).url()}
        alt="About image"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="md:-mb-20 flex-shrink-0 w-56 h-56 rounded-3xl object-cover md:w-80 md:h-64 xl:w-96 xl:h-80"
      />
      <div className="space-y-6 md:space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#F7AB0A]">Bit</span> About My
          Background
        </h4>
        <p>{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
