import React from "react";
import pine from "../../../assets/home/pine.jpg";
import { motion } from "framer-motion";

export function PineSignaturePage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Animated & Centered Image */}
      <section className="w-full py-8">
        <div className="max-w-4xl mx-auto px-4">
          <motion.img
            src={pine}
            alt="Pine Signature Home in Edmonton"
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
        <h1 className="text-4xl font-bold mb-4 text-green-600">Pine Signature</h1>
        <p className="text-lg text-gray-600 mb-6">
          The Pine Signature in Edmonton, AB, is a luxurious blend of modern
          design and functional living. Built with precision, it offers open
          spaces, natural light, and the perfect balance of style and comfort.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-600">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left inline-block mx-auto">
          <li>4 bedrooms and 3 bathrooms</li>
          <li>Modern kitchen with stainless steel appliances</li>
          <li>High ceilings with large windows</li>
          <li>Smart home technology integration</li>
          <li>Spacious backyard with patio</li>
        </ul>
      </motion.section>
    </main>
  );
}
