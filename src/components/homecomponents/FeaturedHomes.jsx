import React from 'react';
import { Link } from 'react-router-dom';
import maple from '../../assets/home/mapel.jpg';
import pine from '../../assets/home/pine.jpg';
import cedar from '../../assets/home/cedar.jpg';

const homes = [
  { name: 'Maple Classic', location: 'Calgary, AB', image: maple, path: '/maple' },
  { name: 'Pine Signature', location: 'Edmonton, AB', image: pine, path: '/pine' },
  { name: 'Cedar Modern', location: 'Banff, AB', image: cedar, path: '/cedar' },
];

export function FeaturedHomes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-600">Featured Homes</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Explore some of our most popular models—customizable, energy efficient, and built to last.
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {homes.map((h) => (
            <div
              key={h.name}
              className="border rounded-xl overflow-hidden shadow-md flex flex-col transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <img
                  src={h.image}
                  alt={`${h.name} in ${h.location}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-xl font-semibold">{h.name}</div>
                <div className="text-sm text-gray-500">{h.location}</div>
                <Link
                  to={h.path}
                  className="mt-auto w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
