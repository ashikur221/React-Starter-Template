import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef } from "react";

const Word3 = () => {
  const targetRef = useRef(null);
  const { scrollX, scrollY, scrollXProgress, scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "start start"],
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

export default Word3;

const WrodData = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className=" ">
      {characters.map((char, index) => {
        const start = range[0] + index * step;
        const end = range[0] + (index + 1) * step;
        return (
          <Character
            key={index}
            char={char}
            range={[start, end]}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

const Character = ({ char, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className=" absolute opacity-30">{char}</span>
      <motion.span style={{ opacity }}>{char}</motion.span>
    </span>
  );
};
