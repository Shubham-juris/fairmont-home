import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Select Model', desc: 'Choose from our curated home designs.' },
  { title: 'Customize', desc: 'Tailor finishes and layout to your lifestyle.' },
  { title: 'Approve & Build', desc: 'We break ground and keep you updated.' },
  { title: 'Move In', desc: 'Final walkthrough and welcome home.' },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function BuildProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600">Our Build Process</h2>
        <p className="mt-2 text-center">
          Transparent, predictable, and tailored to you—step-by-step.
        </p>

        <motion.div
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              className="flex flex-col items-start gap-3 bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl font-extrabold text-green-600">{i + 1}</div>
              <div className="font-semibold text-lg">{s.title}</div>
              <div className="text-gray-600">{s.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
