import React from "react";
import maple from "../../../assets/home/mapel.jpg";
import { motion } from "framer-motion";

export function MapleClassicPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Animated & Centered Image */}
      <section className="w-full py-8">
        <div className="max-w-4xl mx-auto px-4">
          <motion.img
            src={maple}
            alt="Maple Classic Home in Calgary"
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
        <h1 className="text-4xl font-bold mb-4 text-green-600">Maple Classic</h1>
        <p className="text-lg text-gray-600 mb-6">
          Located in the heart of Calgary, AB, the Maple Classic is a timeless
          design that blends comfort and elegance. Perfect for families, this
          home combines energy efficiency with high-end craftsmanship to create
          a residence that will last for generations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-600">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left inline-block mx-auto">
          <li>3 spacious bedrooms and 2.5 bathrooms</li>
          <li>Open-concept living and dining area</li>
          <li>Energy-efficient windows and insulation</li>
          <li>Premium hardwood flooring and granite countertops</li>
          <li>Attached 2-car garage</li>
        </ul>
      </motion.section>
    </main>
  );
}
