import React from "react";
import img from "../../assets/gallery/img5.jpg"
import img1 from "../../assets/gallery/img6.jpg"


const BeforeAfter = () => {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Before & After Transformations
        </h2>
        <p className=" text-lg mb-8">
          Witness the transformation of raw plots into beautiful living spaces built by <span className="text-green-900 font-semibold">Fairmont Homes</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-xl shadow-lg border border-green-200">
            <img
              src={img}
              alt="Before Construction"
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg border border-green-200">
            <img
              src={img1}
              alt="After Construction"
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
