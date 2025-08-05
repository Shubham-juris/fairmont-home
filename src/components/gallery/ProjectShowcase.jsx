import React from "react";
import img from "../../assets/gallery/img1.jpg";

const ProjectShowcase = () => {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Featured Home Projects
        </h2>
        <p className="text-lg mb-8">
          Explore our premium home construction projects built with precision
          and care by <span className="font-semibold text-green-800">Fairmont Homes</span>.
        </p>
        <div className="overflow-hidden rounded-xl shadow-lg border border-green-200">
          <img
            src={img}
            alt="Fairmont Home Project"
            className="w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
