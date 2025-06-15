// import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonial = () => {
  const { scrollYProgress } = useScroll();
  
  // Animation values based on scroll progress
  const card1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1]);
  const card1Y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  
  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 1]);
  const card2Y = useTransform(scrollYProgress, [0.25, 0.35], [100, 0]);
  
  const card3Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 1]);
  const card3Y = useTransform(scrollYProgress, [0.4, 0.5], [100, 0]);

  const testimonials = [
    {
      id: 1,
      quote: "This product completely transformed my workflow. The ease of use and powerful features saved me hours of work every week.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      opacity: card1Opacity,
      y: card1Y
    },
    {
      id: 2,
      quote: "I've tried many similar tools, but none come close to the quality and support provided by this team. Truly exceptional service.",
      author: "Michael Chen",
      role: "CTO, TechStart",
      opacity: card2Opacity,
      y: card2Y
    },
    {
      id: 3,
      quote: "As a small business owner, finding affordable yet powerful solutions is challenging. This exceeded all my expectations.",
      author: "Emma Rodriguez",
      role: "Founder, Bloom Boutique",
      opacity: card3Opacity,
      y: card3Y
    }
  ];

  return (
    <section className="min-h-[300vh] relative flex flex-col lg:flex-row bg-gray-50">
      {/* Fixed left side */}
      <div className="lg:sticky lg:top-0 lg:h-screen w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-md">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Testimonials</h2>
          <p className="text-lg lg:text-xl opacity-90">
            Hear what our customers say about their experience with our products and services.
          </p>
          <div className="mt-8 flex items-center">
            <div className="w-12 h-1 bg-white mr-4"></div>
            <span className="text-sm uppercase tracking-wider">Trusted by thousands</span>
          </div>
        </div>
      </div>

      {/* Scrollable right side */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center  h-auto py-32 px-4 sm:px-8 lg:px-12">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            style={{ opacity: testimonial.opacity, y: testimonial.y }}
            className="w-full max-w-lg mb-32 last:mb-0"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-6 -left-6 text-6xl text-gray-200 font-serif">"</div>
              <p className="text-lg lg:text-xl text-gray-700 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;