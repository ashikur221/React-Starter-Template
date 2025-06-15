"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const images = Array.from(
  { length: 10 },
  (_, i) => `https://placekitten.com/50${i}/300`
);

export default function HorizontalImageScroll() {
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const imageWidth = 550;
  const gap = 20;
  const totalImages = images.length;

  useEffect(() => {
    function updateScrollWidth() {
      const viewportWidth = window.innerWidth;
      const totalContentWidth = (imageWidth + gap) * totalImages;
      const totalScrollDistance =
        totalContentWidth - viewportWidth + imageWidth;
      setScrollWidth(totalScrollDistance);
    }
    updateScrollWidth();
    window.addEventListener("resize", updateScrollWidth);
    return () => window.removeEventListener("resize", updateScrollWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scrollYProgress [0,1] to x position [0, -scrollWidth]
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  // Smooth the rawX with a spring
  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  return (
    <div ref={containerRef} className="min-h-[250vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-5 px-10">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Kitten ${i + 1}`}
              className="w-[500px] h-[300px] object-cover rounded-lg shadow-lg"
              draggable={false}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
