import React from 'react';

const faqs = [
  { q: 'How long does the build take?', a: 'Typical builds take 4-6 months depending on customization.' },
  { q: 'Can I customize floor plans?', a: 'Yes, you can choose preset upgrades or fully customize your layout.' },
  { q: 'What warranty is provided?', a: 'We offer a standard 2-year warranty with upgrade options.' },
];

export function FAQ() {
  return (
    <section className="py-15 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border rounded-lg p-5 bg-white shadow-sm">
              <div className="font-semibold ">{f.q}</div>
              <div className="mt-2 text-green-600">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
