"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-2 flex justify-between px-4 sm:px-6 max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
              className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7AB0A] rounded-full"
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          url="#contact"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7AB0A] rounded-full"
        />
        <Link href="#contact">
          <p className="hidden md:inline-flex text-sm text-gray-400 hover:text-[#F7AB0A] focus-visible:text-[#F7AB0A] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F7AB0A] rounded px-2 py-1 transition-colors">
            CONTACT ME
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
