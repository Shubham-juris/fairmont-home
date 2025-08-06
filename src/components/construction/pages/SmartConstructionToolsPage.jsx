import React from "react";
import laserLevelImg from "../../../assets/construction/tools/laser.jpg";
import roboticTotalStationImg from "../../../assets/construction/tools/robot.png";
import concreteScannerImg from "../../../assets/construction/tools/scaner.jpg";
import powerToolsImg from "../../../assets/construction/tools/power.webp";
import gpsMachineControlImg from "../../../assets/construction/tools/gps.jpg";


export function SmartConstructionToolsPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Header */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4  text-green-600">
          Smart Construction Tools
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto">
          From precision measurement to automated machinery, smart construction tools
          revolutionize how we build—making projects faster, safer, and more accurate.
        </p>
      </section>
      {/* Overview */}
      <section className="px-6 py-12 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2  text-green-600">What Are Smart Construction Tools?</h2>
          <p className="mb-4">
            Smart construction tools use advanced technology like sensors, automation,
            and digital data processing to improve efficiency, accuracy, and safety on
            construction sites. They enable better quality control, reduce manual errors,
            and save significant time and costs.
          </p>
        </div>
      </section>

      {/* Tools with Images */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6  text-green-600">Popular Smart Tools in Construction</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Tool 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={laserLevelImg}
                alt="Laser Level"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2  text-green-600">Laser Levels</h3>
              <p>
                Laser levels project a constant horizontal or vertical beam to ensure
                perfect alignment during construction. They are essential for laying
                foundations, installing walls, or setting tile work with precision.
              </p>
            </div>

            {/* Tool 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={roboticTotalStationImg}
                alt="Robotic Total Station"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2  text-green-600">Robotic Total Stations</h3>
              <p>
                These automated surveying instruments measure angles and distances
                with extreme accuracy. They can be operated remotely, saving time and
                reducing manpower requirements.
              </p>
            </div>

            {/* Tool 3 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={concreteScannerImg}
                alt="Concrete Scanner"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2  text-green-600">Concrete Scanners</h3>
              <p>
                Concrete scanners use ground-penetrating radar (GPR) to detect rebar,
                conduits, and voids inside concrete before cutting or drilling, ensuring
                worker safety and preventing damage.
              </p>
            </div>

            {/* Tool 4 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={powerToolsImg}
                alt="Smart Power Tools"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2  text-green-600">Smart Power Tools</h3>
              <p>
                Cordless drills, impact drivers, and saws with Bluetooth connectivity
                allow for performance tracking, theft protection, and usage analytics
                directly from a mobile app.
              </p>
            </div>

            {/* Tool 5 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={gpsMachineControlImg}
                alt="GPS Machine Control"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2  text-green-600">GPS Machine Control</h3>
              <p>
                Heavy equipment like excavators and graders equipped with GPS machine
                control can automatically adjust blade heights or digging depth, following
                the site plan with minimal manual intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4  text-green-600">Benefits of Smart Tools</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Higher precision in construction tasks</li>
            <li>Reduced human error and rework</li>
            <li>Improved safety for workers</li>
            <li>Faster project completion</li>
            <li>Better tracking and reporting of work progress</li>
          </ul>
        </div>
      </section>

     
    </main>
  );
}
