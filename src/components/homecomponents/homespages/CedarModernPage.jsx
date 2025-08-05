import React from "react";
import cedar from "../../../assets/home/cedar.jpg";

export function CedarModernPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="w-full h-[400px] md:h-[500px]">
        <img
          src={cedar}
          alt="Cedar Modern Home in Banff"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold  text-green-600 mb-4">Cedar Modern</h1>
        <p className="text-lg text-gray-600 mb-6">
          Nestled in Banff, AB, the Cedar Modern is designed for those who
          appreciate contemporary aesthetics with a natural touch. The sleek
          architecture blends perfectly with the surrounding landscapes.
        </p>

        <h2 className="text-2xl font-semibold mt-8  text-green-600 mb-3">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>3 bedrooms and 2 bathrooms</li>
          <li>Floor-to-ceiling glass walls with mountain views</li>
          <li>Energy-efficient heating and cooling systems</li>
          <li>Open-plan kitchen and living space</li>
          <li>Private outdoor deck</li>
        </ul>

       
      </section>
    </main>
  );
}
