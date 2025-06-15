import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";

const VerticalScroll = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      bg: "bg-blue-50",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      bg: "bg-green-50",
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      bg: "bg-yellow-50",
    },
    {
      title: "Card 4",
      description: "This is the description for card 4.",
      bg: "bg-pink-50",
    },
  ];

  const targetRef = useRef(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const cardTimeLine = cards.map((card, index) => {
    const start = 2700 + index * 350;
    const end = 2700 + (index + 1) * 350;
    return [start, end];
  });

  const timeline = [[2500, 2700], ...cardTimeLine];

  console.log(timeline); // Log the timeline array to the cons

  const animation = timeline.map((data) => ({
    scale: useTransform(scrollY, data, [1, 0.8]),
    opacity: useTransform(scrollY, data, [1, 0]),
  }));

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("scrollYProgress:", latest);
  });

  return (
    <div
      ref={targetRef}
      className="flex flex-col gap-6 relative p-6 h-[200vh] bg-gray-50"
    >
      <motion.div
        style={{
          scale: animation[0].scale,
          opacity: animation[0].opacity,
        }}
        className="text-[70px] h-72 font-bold sticky top-20 border-2 bg-white flex items-center justify-center"
      >
        Our Services
      </motion.div>

      {cards.map((card, index) => (
        <motion.div
          key={index}
          style={{
            scale: animation[index + 1].scale,
            opacity: animation[index + 1].opacity,
          }}
          className={`${card.bg} shadow-sm p-6 rounded-2xl w-full h-72 sticky top-24 border border-gray-200`}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {card.title}
          </h2>
          <p className="text-gray-600">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default VerticalScroll;
