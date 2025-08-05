import React from "react";
import img from "../../assets/gallery/img4.jpg"


const RecentDevelopments = () => {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Recent Developments
        </h2>
        <p className=" text-lg mb-8">
          Stay updated with our latest projects and newly completed homes, crafted with care and excellence.
        </p>
        <div className="overflow-hidden rounded-xl shadow-lg border border-green-200">
          <img
            src={img}
            alt="Recent Development"
            className="w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentDevelopments;
