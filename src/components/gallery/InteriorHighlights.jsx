import React from "react";
import img from "../../assets/gallery/img2.webp"

const InteriorHighlights = () => {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Interior Highlights
        </h2>
        <p className=" text-lg mb-8">
          Our interiors reflect <span className="font-semibold text-green-700">modern elegance</span> and <span className="font-semibold text-green-700">functional design</span> for everyday living.
        </p>
        <div className="overflow-hidden rounded-xl shadow-lg border border-green-200">
          <img
            src={img}
            alt="Modern interior"
            className="w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default InteriorHighlights;
