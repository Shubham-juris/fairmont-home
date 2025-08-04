import React from 'react';

const reviews = [
  { name: 'Emily R.', role: 'Homeowner', text: 'Fairmont made building easy. Communication was clear and timeline was kept.' },
  { name: 'Mark T.', role: 'Investor', text: 'Quality construction and excellent customer support. Highly recommend.' },
  { name: 'Sara K.', role: 'Family', text: 'Our customizations came out even better than we imagined.' },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="border rounded-xl p-6 shadow">
              <p className="text-green-700">“{r.text}”</p>
              <div className="mt-4 font-semibold">{r.name}</div>
              <div className="text-sm text-gray-500">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
