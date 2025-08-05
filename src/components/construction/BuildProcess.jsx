import React from "react";
import { motion } from "framer-motion";

const steps = [
  { step: "1", title: "Planning & Design", desc: "We work closely with you to finalize floor plans and features." },
  { step: "2", title: "Site Preparation", desc: "Clearing, leveling, and preparing the land for construction." },
  { step: "3", title: "Foundation & Framing", desc: "Building a strong foundation and structural framing." },
  { step: "4", title: "Interior & Exterior", desc: "Walls, roofing, insulation, and exterior finishes." },
  { step: "5", title: "Final Touch & Handover", desc: "Quality checks, cleaning, and your keys in hand." },
];

export function BuildProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600">Step-by-Step Process</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition"
              animate={{
                y: [0, i % 2 === 0 ? -15 : 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              <div className="text-green-600 font-bold text-3xl">{s.step}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
