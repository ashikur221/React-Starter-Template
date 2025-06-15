import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";

const Word1 = () => {
  const targetRef = useRef(null);
  const { scrollX, scrollY, scrollXProgress, scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "start 0.25"],
  });

  return (
    <motion.p
      style={{
        opacity: scrollYProgress,
      }}
      ref={targetRef}
      className=" text-[50px] max-w-[1280px] p-10"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint maxime
      soluta, a enim natus obcaecati perspiciatis, minus qui reiciendis vitae
      dolorem corporis commodi ab dolores autem voluptas earum possimus deleniti
      omnis temporibus dicta? Alias accusantium velit harum, enim incidunt
      perspiciatis?
    </motion.p>
  );
};

export default Word1;
