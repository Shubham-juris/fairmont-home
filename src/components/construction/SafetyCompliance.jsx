import React from "react";
import { motion } from "framer-motion";

export function SafetyCompliance() {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-green-600"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Safety & Compliance
        </motion.h2>

        <motion.p
          className="mt-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our team follows strict safety protocols and complies with all building codes to ensure a safe and legal build.
        </motion.p>

        <motion.ul
          className="mt-8 space-y-3 text-left max-w-lg mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "✔ OSHA-certified safety practices",
            "✔ Regular site inspections",
            "✔ Licensed and insured professionals",
            "✔ Environmentally responsible disposal",
          ].map((item, index) => (
            <motion.li key={index} variants={fadeUp}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
