import React from "react";
import img from "../../assets/carrer/hero.jpg";

const CareersHero = () => (
  <section
    className="relative text-white h-150"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32 sm:py-40 animate-fadeIn">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Build Your Future with <span className="text-green-400">Fairmont Homes</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg">
        We’re shaping communities with passion and precision. Discover a career that builds more than just homes.
      </p>
     
    </div>
  </section>
);

export default CareersHero;
