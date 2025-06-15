import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef } from "react";

const Word2 = () => {
  const targetRef = useRef(null);
  const { scrollX, scrollY, scrollXProgress, scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "start 0.2"],
  });

  const value =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint maxime soluta, a enim natus obcaecati perspiciatis, minus qui reiciendis vitae dolorem corporis commodi ab dolores autem voluptas earum possimus deleniti omnis temporibus dicta? Aaccusantium velit harum, enim incidunt perspiciatis?";

  const words = value.split(" ");


  return (
    <p
      ref={targetRef}
      className=" flex leading-[80px] flex-wrap gap-4 text-[50px] max-w-[1280px] p-10"
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <WrodData key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </WrodData>
        );
      })}
    </p>
  );
};

export default Word2;

const WrodData = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className=" absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
