import React from "react";
import { Link } from "react-router-dom";
import modelingImg from "../../assets/construction/modeling.jpg";
import droneImg from "../../assets/construction/drone.jpg";
import smartToolsImg from "../../assets/construction/tools.jpg";

const techs = [
  {
    name: "3D Modeling",
    desc: "Visualize your home before we break ground.",
    image: modelingImg,
    alt: "3D modeling visualization",
    path: "/technology/3d-modeling",
  },
  {
    name: "Drone Monitoring",
    desc: "Track progress from anywhere with aerial views.",
    image: droneImg,
    alt: "Drone flying over construction site",
    path: "/technology/drone-monitoring",
  },
  {
    name: "Smart Tools",
    desc: "Precision construction with cutting-edge equipment.",
    image: smartToolsImg,
    alt: "Smart construction tools",
    path: "/technology/smart-tools",
  },
];

export function ModernTech() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Modern Technology</h2>
        <p className="mt-2 text-center text-gray-600">
          We integrate technology to enhance accuracy, efficiency, and quality.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techs.map((t) => (
            <div
              key={t.name}
              className="border rounded-lg shadow overflow-hidden hover:shadow-lg transition flex flex-col"
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
                <h3 className="text-lg font-semibold text-green-600">{t.name}</h3>
                <p className="mt-2 text-gray-600 flex-1">{t.desc}</p>
                <div className="mt-4">
                  <Link
                    to={t.path}
                    className="text-sm font-medium text-green-600 hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
