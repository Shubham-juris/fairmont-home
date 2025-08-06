import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Trust & Integrity",
    description: "We believe in transparency and honesty in every project we undertake.",
  },
  {
    title: "Quality Craftsmanship",
    description: "We use top-grade materials and skilled professionals to deliver unmatched quality.",
  },
  {
    title: "Customer Satisfaction",
    description: "We prioritize our clients’ needs and exceed expectations every time.",
  },
  {
    title: "Sustainable Building",
    description: "We implement eco-friendly practices and build for a better tomorrow.",
  },
];

const OurValuesSection = () => {
  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 text-left"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
