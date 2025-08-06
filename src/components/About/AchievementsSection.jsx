import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    number: "50+",
    label: "Projects Completed",
  },
  {
    number: "10+",
    label: "Years of Experience",
  },
  {
    number: "40+",
    label: "Happy Clients",
  },
  {
    number: "50+",
    label: "Team Members",
  },
];

const AchievementsSection = () => {
  return (
    <section className="bg-green-700 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <p className="text-4xl font-bold">{item.number}</p>
              <p className="text-lg mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
