import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyWorkWithUs = () => {
  const items = [
    {
      title: "Career Growth",
      text: "Opportunities to develop your skills and grow with the company.",
    },
    {
      title: "Supportive Culture",
      text: "Collaborative and respectful work environment.",
    },
    {
      title: "Meaningful Work",
      text: "Your work contributes to building communities that matter.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-green-700 mb-6"
        >
          Why Work With Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          At Fairmont Homes, you’re not just building houses—you’re building futures. We believe in integrity, collaboration, and craftsmanship.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
