import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Experienced Team",
    description: "Our skilled engineers and architects bring years of hands-on experience to every project.",
  },
  {
    title: "Timely Delivery",
    description: "We are known for completing projects within deadlines without compromising quality.",
  },
  {
    title: "Modern Designs",
    description: "We blend creativity with functionality to deliver beautifully designed spaces.",
  },
  {
    title: "Affordable Pricing",
    description: "We offer premium quality construction at competitive rates to suit all budgets.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
          Why Choose Fairmont Homes
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-gray-100 p-6 rounded-xl shadow-md"
            >
              <div className="w-3 h-3 mt-2 bg-green-600 rounded-full shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-green-800">{reason.title}</h3>
                <p className="text-base">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
