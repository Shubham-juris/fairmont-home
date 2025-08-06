import React, { useState } from 'react';

const faqs = [
  { q: 'How long does the build take?', a: 'Typical builds take 4-6 months depending on customization.' },
  { q: 'Can I customize floor plans?', a: 'Yes, you can choose preset upgrades or fully customize your layout.' },
  { q: 'What warranty is provided?', a: 'We offer a standard 2-year warranty with upgrade options.' },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-600">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((f, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 bg-white shadow-sm cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center font-semibold text-lg">
                {f.q}
                <svg
                  className={`w-5 h-5 text-green-600 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeIndex === index && (
                <div className="mt-3 text-green-600 transition-all duration-300">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
