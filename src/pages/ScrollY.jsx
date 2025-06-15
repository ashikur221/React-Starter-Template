
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollY = () => {
  const sectionRef = useRef(null);

  // Get scroll progress of the wrapper (not the sticky div!)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // scrollYProgress goes from 0 → 1
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  return (
    <div className="h-[200vh] bg-gray-100 flex items-start justify-center pt-[50vh]">
      <div ref={sectionRef} className="h-[150vh] w-full relative">
        <motion.div
          style={{ opacity, scale }}
          className="sticky top-[200px] w-[200px] h-[200px] mx-auto bg-blue-500 rounded-lg shadow-2xl flex items-center justify-center text-white text-2xl font-bold"
        >
          Scroll Me
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollY;

