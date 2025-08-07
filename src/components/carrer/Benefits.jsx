import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Health & Insurance",
  "On-site Training",
  "Flexible Work Hours",
  "Performance Bonuses",
  "Safe Working Environment",
  "Team Outings & Retreats",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Benefits = () => (
  <section className="py-16 px-6 bg-white text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-green-700 mb-8"
    >
      Perks & Benefits
    </motion.h2>

    <motion.div
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {benefits.map((benefit, i) => (
        <motion.div
          key={i}
          className="border p-4 rounded-md shadow hover:shadow-md transition bg-green-50"
          variants={itemVariants}
        >
          <p className="font-medium text-gray-700">{benefit}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Benefits;
