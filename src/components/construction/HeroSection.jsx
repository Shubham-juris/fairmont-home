import React from "react";
import image from "../../assets/construction/hero1.jpg";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      aria-label="Hero section"
      className="relative text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px] sm:min-h-[600px] flex flex-col justify-center items-center text-center py-28 sm:py-32 md:py-40">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Our <span className="text-green-400">Construction Process</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-white"
        >
          From blueprint to your doorstep, we ensure precision, quality, and transparency at every stage of construction.
        </motion.p>
      </div>
    </section>
  );
}
