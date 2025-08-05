import React from "react";
import img from "../../assets/gallery/img3.jpg"

const ArchitectureDesigns = () => {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Architectural Designs
        </h2>
        <p className=" text-lg mb-8">
          We blend <span className="font-semibold text-green-900">creativity</span> and <span className="font-semibold text-green-900">engineering</span> to design timeless architecture for your dream home.
        </p>
        <div className="overflow-hidden rounded-xl shadow-lg border border-green-200">
          <img
            src={img}
            alt="Architectural design"
            className="w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDesigns;
