"use client";

import React, { use } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Welcome!",
      `The Name's ${pageInfo.name}.`,
      "Guy Who Loves Coding.",
      "Lets Build Your Idea!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden ">
        {/* <BackgroundCircles /> */}
        <Image
          src={urlFor(pageInfo.heroImage).url()}
          alt="profile image"
          width={140}
          height={140}
          className="relative rounded-full mx-auto object-cover border"
          priority
        />

        <div className="z-20">
          <h2 className="text-sm text-gray-500 pb-2 tracking-[15px] uppercase">
            {pageInfo.role}
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5">
            <Link href={"#about"}>
              <button className="heroButton">About</button>
            </Link>
            <Link href={"#experience"}>
              <button className="heroButton">Experience</button>
            </Link>
            <Link href={"#skills"}>
              <button className="heroButton">Skills</button>
            </Link>
            <Link href={"#projects"}>
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
