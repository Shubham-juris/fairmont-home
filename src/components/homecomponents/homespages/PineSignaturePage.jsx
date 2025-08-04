import React from "react";
import pine from "../../../assets/home/pine.jpg";

export function PineSignaturePage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="w-full h-[400px] md:h-[500px]">
        <img
          src={pine}
          alt="Pine Signature Home in Edmonton"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Pine Signature</h1>
        <p className="text-lg text-gray-600 mb-6">
          The Pine Signature in Edmonton, AB, is a luxurious blend of modern
          design and functional living. Built with precision, it offers open
          spaces, natural light, and the perfect balance of style and comfort.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>4 bedrooms and 3 bathrooms</li>
          <li>Modern kitchen with stainless steel appliances</li>
          <li>High ceilings with large windows</li>
          <li>Smart home technology integration</li>
          <li>Spacious backyard with patio</li>
        </ul>

        

       
      </section>
    </main>
  );
}
