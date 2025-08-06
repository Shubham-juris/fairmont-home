import React from "react";
import about from "../../assets/about/about.jpg";
import { motion } from "framer-motion";

const CompanyOverviewSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Fairmont Homes is a trusted name in construction, known for delivering high-quality
            residential and commercial buildings for over a decade. Our skilled team ensures
            every project is executed with precision and care.
          </p>
          <p className="text-lg leading-relaxed">
            Our mission is to create strong, sustainable, and beautiful structures that stand
            the test of time. We are committed to building more than just homes — we build
            dreams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={about}
            alt="Fairmont Homes Overview"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
