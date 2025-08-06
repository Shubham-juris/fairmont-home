import React from "react";
import cedar from "../../../assets/home/cedar.jpg";
import { motion } from "framer-motion";

export function CedarModernPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Animated & Centered Image */}
      <section className="w-full py-8">
        <div className="max-w-4xl mx-auto px-4">
          <motion.img
            src={cedar}
            alt="Cedar Modern Home in Banff"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Animated & Centered Content */}
      <motion.section
        className="px-6 py-12 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-green-600 mb-4">Cedar Modern</h1>
        <p className="text-lg text-gray-600 mb-6">
          Nestled in Banff, AB, the Cedar Modern is designed for those who
          appreciate contemporary aesthetics with a natural touch. The sleek
          architecture blends perfectly with the surrounding landscapes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-green-600 mb-3">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left inline-block mx-auto">
          <li>3 bedrooms and 2 bathrooms</li>
          <li>Floor-to-ceiling glass walls with mountain views</li>
          <li>Energy-efficient heating and cooling systems</li>
          <li>Open-plan kitchen and living space</li>
          <li>Private outdoor deck</li>
        </ul>
      </motion.section>
    </main>
  );
}
