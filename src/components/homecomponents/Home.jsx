import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../assets/home/hero.avif';

export function Hero() {
  return (
    <section
      aria-label="Hero section"
      className="relative text-white"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Build Your Dream Home with{' '}
            <span className="text-green-400">Fairmont</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            Choose a model, customize it, and track progress—all in one place.
            Explore available homes and get started today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <label htmlFor="location" className="sr-only">
          
            </label>
            <input
              id="location"
              placeholder=""
              className="flex-1 px-5 py-4 rounded-full focus:outline-none text-black"
              type="text"
              aria-label="City or Zip Code"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              className="px-6 py-3 bg-white text-green-700 font-semibold rounded-md"
              aria-label="Get Started"
            >
              Get Started
            </button>
            <button
              className="px-6 py-3 border border-white rounded-md"
              aria-label="View Floor Plans"
            >
              View Floor Plans
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
