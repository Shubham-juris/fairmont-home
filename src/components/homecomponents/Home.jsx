import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hero from "../../assets/about/hero2.jpg";

export function Hero() {
  return (
    <section
      aria-label="Hero section"
      className="relative text-white w-full"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 flex items-center justify-center min-h-[600px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Build Your Dream Home with{' '}
            <span className="text-green-400">Fairmont</span>
          </h1>
          <p className="mt-4 text-lg text-gray-100">
            Choose a model, customize it, and track progress—all in one place.
            Explore available homes and get started today.
          </p>

          {/* Input Field */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
           
            <Link
              to="/gallery"
              className="px-6 py-3 bg-white text-green-700 font-semibold rounded-full text-center hover:bg-green-100 transition"
              aria-label="Get Started"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
