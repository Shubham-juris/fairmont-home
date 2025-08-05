import React from "react";

export function DroneMonitoringPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Header */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4  text-green-600">
          Drone Monitoring in Construction
        </h1>
        <p className="text-center text-lg max-w-2xl mx-auto">
          Track site progress in real time, enhance safety, and make faster
          decisions with drone monitoring.
        </p>
      </section>

      {/* Overview */}
      <section className="px-6 py-12 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2  text-green-600">
            What is Drone Monitoring?
          </h2>
          <p className="mb-4">
            Drone monitoring involves using drones at construction sites to
            capture aerial data, imagery, and 3D maps. This makes surveying,
            progress tracking, safety inspections, and site analysis more
            accurate, faster, and cost-effective.
          </p>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6  text-green-600">Key Capabilities</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2  text-green-600">Progress Tracking</h3>
              <p className="mb-2">
                Regular drone flights allow comparison of current site progress
                against the plan. Overlays and time-lapse videos created from
                previous drone data make changes visible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2  text-green-600">Site Surveying & Mapping</h3>
              <p className="mb-2">
                High-resolution aerial imagery is used to create accurate
                topographic maps and 3D models, essential for planning and
                earthwork.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2  text-green-600">Safety Inspections</h3>
              <p className="mb-2">
                Drones can inspect hazardous or hard-to-reach areas, identifying
                safety risks without putting workers in danger.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2  text-green-600">Volume Calculations</h3>
              <p className="mb-2">
                Accurately measure stockpile or excavation volumes using 3D
                point clouds and photogrammetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4  text-green-600">
            Typical Drone Monitoring Workflow
          </h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Planning & Flight Path:</strong> Analyze the site to
              determine flight route and altitude.
            </li>
            <li>
              <strong>Automated Drone Flight:</strong> Pre-programmed drones
              capture imagery and LiDAR data.
            </li>
            <li>
              <strong>Data Processing:</strong> Use photogrammetry or point
              cloud generation to produce 2D/3D outputs.
            </li>
            <li>
              <strong>Analysis & Comparison:</strong> Compare with previous data
              to assess progress or deviations, and create reports.
            </li>
            <li>
              <strong>Stakeholder Review:</strong> Share insights via visual
              dashboards or overlays.
            </li>
          </ol>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4  text-green-600">
            Popular Tools & Platforms
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold  text-green-600">DJI Drones</h3>
              <p className="mb-1">
                Enterprise-grade drones like DJI Phantom 4 RTK and Mavic 3
                Enterprise are widely used for high-precision mapping.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold  text-green-600">Pix4D / DroneDeploy</h3>
              <p className="mb-1">
                Photogrammetry platforms that generate orthomosaics, 3D models,
                and volume reports from aerial images.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold  text-green-600">
                Reality Capture & BIM Integration
              </h3>
              <p className="mb-1">
                Integrating drone data into BIM workflows improves construction
                coordination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold  text-green-600">Analytics Dashboards</h3>
              <p className="mb-1">
                Custom dashboards display progress tracking, deviation alerts,
                and historical comparisons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center  text-green-600">
            Video Demonstrations
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-bold  text-green-600">Drone Monitoring Overview</h3>
              <p className="text-sm text-gray-600">
                How drones track construction sites in real time and convert
                data into actionable insights.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  title="Drone Monitoring Construction"
                  src="https://www.youtube.com/embed/_Z9KyJH3F-c"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md shadow"
                ></iframe>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold  text-green-600">Mapping & Progress with Drones</h3>
              <p className="text-sm text-gray-600">
                Practical site mapping and progress comparison using
                photogrammetry.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  title="Drone Site Mapping"
                  src="https://www.youtube.com/embed/1G7hIu0G2b8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md shadow"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4  text-green-600">
            Benefits of Drone Monitoring
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Fast and frequent data capture without site disruption.</li>
            <li>Real progress comparison using time-lapse and overlays.</li>
            <li>Remote safety inspections without risking personnel.</li>
            <li>Accurate volume calculations and earthwork validation.</li>
            <li>
              Easy to share visual reports and alerts with stakeholders.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6  text-green-600">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold  text-green-600">
                How often should drone monitoring be done?
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                Typically weekly or during major milestones, but daily flights
                may be conducted on high-risk or fast-paced sites.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold  text-green-600">
                Can drone images create 3D models?
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                Yes, photogrammetry software (such as Pix4D or DroneDeploy)
                generates accurate 3D point clouds and orthomosaics from
                multiple overlapping images.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold  text-green-600">
                Is drone monitoring expensive?
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                There is an initial investment, but compared to manual surveys,
                it saves time and reduces errors, making it cost-effective in
                the long run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-gradient-to-r from-green-600 to-green-400 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2  text-green-600">
            Monitor Your Site with Drones
          </h2>
          <p className="mb-6">
            View progress in real time, reduce risks, and make better decisions.
            Contact us today for our drone monitoring services.
          </p>
          <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-md shadow hover:opacity-90">
            Free Site Assessment
          </button>
        </div>
      </section>
    </main>
  );
}
