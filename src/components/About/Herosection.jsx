import React from "react";
import img from "../../assets/about/hero3.jpg";
import { motion } from "framer-motion";

const AboutHeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 bg-opacity-70"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-green-400">Fairmont Homes</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Building Trust. Crafting Quality. Creating Homes that Last.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;
