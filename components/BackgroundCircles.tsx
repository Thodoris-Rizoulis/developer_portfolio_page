import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
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
      {/* Smallest circle, always visible, responsive size */}
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] animate-ping" />
      {/* Next circle, visible from sm up */}
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] animate-ping" />
      {/* Middle circle, visible from sm up */}
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px] animate-ping" />
      {/* Accent circle, responsive, scales up on md, now much larger */}
      <div className="absolute border border-[#F7AB0A] rounded-full h-[400px] w-[400px] sm:h-[580px] sm:w-[580px] md:h-[640px] md:w-[640px] lg:h-[800px] lg:w-[800px] animate-pulse opacity-20" />
      {/* Largest circle, hidden on small screens */}
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] md:h-[800px] md:w-[800px] animate-ping hidden sm:block" />
    </motion.div>
  );
}

export default BackgroundCircles;
