import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] animate-ping" />
      <div className="absolute border border-[#F7AB0A] rounded-full h-[460px] w-[460px] md:h-[650px] md:w-[650px] animate-pulse opacity-20" />
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
