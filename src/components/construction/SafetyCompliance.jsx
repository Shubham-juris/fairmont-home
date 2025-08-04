import React from "react";

export function SafetyCompliance() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Safety & Compliance</h2>
        <p className="mt-4 text-gray-600">
          Our team follows strict safety protocols and complies with all building codes to ensure a safe and legal build.
        </p>
        <ul className="mt-8 space-y-3 text-left max-w-lg mx-auto">
          <li>✔ OSHA-certified safety practices</li>
          <li>✔ Regular site inspections</li>
          <li>✔ Licensed and insured professionals</li>
          <li>✔ Environmentally responsible disposal</li>
        </ul>
      </div>
    </section>
  );
}
