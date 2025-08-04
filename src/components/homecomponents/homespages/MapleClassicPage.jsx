import React from "react";
import maple from "../../../assets/home/mapel.jpg";

export function MapleClassicPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Full-width Image */}
      <section className="w-full h-[400px] md:h-[500px]">
        <img
          src={maple}
          alt="Maple Classic Home in Calgary"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Maple Classic</h1>
        <p className="text-lg text-gray-600 mb-6">
          Located in the heart of Calgary, AB, the Maple Classic is a timeless
          design that blends comfort and elegance. Perfect for families, this
          home combines energy efficiency with high-end craftsmanship to create
          a residence that will last for generations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>3 spacious bedrooms and 2.5 bathrooms</li>
          <li>Open-concept living and dining area</li>
          <li>Energy-efficient windows and insulation</li>
          <li>Premium hardwood flooring and granite countertops</li>
          <li>Attached 2-car garage</li>
        </ul>

      

      
      </section>
    </main>
  );
}
