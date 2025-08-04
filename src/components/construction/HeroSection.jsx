import React from "react";
import image from "../../assets/construction/hero1.jpg";

export function HeroSection() {
  return (
    <section
      aria-label="Hero section"
      className="relative text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-6xl mx-auto px-6 py-32 sm:py-40 lg:py-52 text-center min-h-[600px] flex flex-col justify-center">
        <h1 className="text-5xl font-extrabold">Our  <span className="text-green-400">Construction Process</span></h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          From blueprint to your doorstep, we ensure precision, quality, and transparency at every stage of construction.
        </p>
      </div>
    </section>
  );
}
