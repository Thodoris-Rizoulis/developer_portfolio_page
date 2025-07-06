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
    <header className="sticky top-2 flex justify-around max-w-7xl mx-auto z-20">
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
        />
        <Link href="#contact">
          <p className="hidden md:inline-flex text-sm text-gray-400">
            CONTACT ME
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
