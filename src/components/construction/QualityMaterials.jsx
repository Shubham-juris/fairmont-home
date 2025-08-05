import React from "react";
import { motion } from "framer-motion";

const materials = [
  {
    name: "Eco-Friendly Cement",
    desc: "Durable and sustainable for long-lasting foundations.",
  },
  {
    name: "Premium Lumber",
    desc: "High-quality wood for strong and secure framing.",
  },
  {
    name: "Energy-Efficient Windows",
    desc: "Keeps your home comfortable all year round.",
  },
];

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function QualityMaterials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Quality Materials
        </h2>
        <p className="mt-2 text-center text-gray-600">
          We source only the finest materials to ensure durability, safety, and sustainability.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m, index) => (
            <motion.div
              key={m.name}
              className={`p-6 border rounded-lg shadow hover:shadow-lg transition ${
                m.name === "Premium Lumber"
                  ? "bg-green-500 text-white"
                  : "bg-white"
              }`}
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: index * 0.4 }}
            >
              <h3
                className={`text-lg font-semibold ${
                  m.name === "Premium Lumber"
                    ? "text-black"
                    : "text-green-600"
                }`}
              >
                {m.name}
              </h3>
              <p
                className={`mt-2 ${
                  m.name === "Premium Lumber"
                    ? "text-black"
                    : "text-gray-600"
                }`}
              >
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
