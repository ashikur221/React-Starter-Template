// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const ScrollSection = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Bigger zoom effect: 0.3x to 2x
//   const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2]);

//   return (
//     <section className="relative  mt-44">
//       <div className="sticky top-0 h-screen flex   justify-center">
//         <motion.div ref={ref} style={{ scale }} className="text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             viewport={{ once: false }}
//             className="text-6xl font-bold text-gray-800"
//           >
//             Zoom + Fade In on Scroll
//           </motion.h2>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ScrollSection;
"use client";
import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const ScrollSection = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      console.log(latest);
    });
    
  },[])
  return <div className=" h-[200vh]">Scroll Progress: x</div>;
};

export default ScrollSection;
