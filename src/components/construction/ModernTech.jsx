import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import modelingImg from "../../assets/construction/modeling.jpg";
import droneImg from "../../assets/construction/drone.jpg";
import smartToolsImg from "../../assets/construction/tools.jpg";

const techs = [
  {
    name: "3D Modeling",
    desc: "Visualize your home before we break ground.",
    image: modelingImg,
    alt: "3D modeling visualization",
    path: "/3d",
  },
  {
    name: "Drone Monitoring",
    desc: "Track progress from anywhere with aerial views.",
    image: droneImg,
    alt: "Drone flying over construction site",
    path: "/drone",
  },
  {
    name: "Smart Tools",
    desc: "Precision construction with cutting-edge equipment.",
    image: smartToolsImg,
    alt: "Smart construction tools",
    path: "/tools",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ModernTech() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Modern Technology
        </h2>
        <p className="mt-2 text-center">
          We integrate technology to enhance accuracy, efficiency, and quality.
        </p>

        <motion.div
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techs.map((t) => {
            const isDrone = t.name === "Drone Monitoring";

            return (
              <motion.div
                key={t.name}
                variants={cardVariants}
                className={`border rounded-lg shadow overflow-hidden hover:shadow-lg transition transform hover:scale-[1.03] flex flex-col ${
                  isDrone ? "bg-green-500" : "bg-white"
                }`}
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className={`text-lg font-semibold ${
                      isDrone ? "text-black" : "text-green-600"
                    }`}
                  >
                    {t.name}
                  </h3>
                  <p className={`mt-2 flex-1 ${isDrone ? "text-black" : "text-gray-600"}`}>
                    {t.desc}
                  </p>
                  <div className="mt-4">
                    <Link
                      to={t.path}
                      className={`text-sm font-medium ${
                        isDrone ? "text-black" : "text-green-600"
                      } hover:underline`}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ModernTech;
