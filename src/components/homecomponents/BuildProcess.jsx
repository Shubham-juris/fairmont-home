import React from 'react';

const steps = [
  { title: 'Select Model', desc: 'Choose from our curated home designs.' },
  { title: 'Customize', desc: 'Tailor finishes and layout to your lifestyle.' },
  { title: 'Approve & Build', desc: 'We break ground and keep you updated.' },
  { title: 'Move In', desc: 'Final walkthrough and welcome home.' },
];

export function BuildProcess() {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Build Process</h2>
        <p className="mt-2 text-center text-gray-600">
          Transparent, predictable, and tailored to you—step-by-step.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col items-start gap-3">
              <div className="text-4xl font-extrabold text-green-600">{i + 1}</div>
              <div className="font-semibold text-lg">{s.title}</div>
              <div className="text-gray-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
