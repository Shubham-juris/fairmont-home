import React from "react";

export function DroneMonitoringPage () {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Header */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Drone Monitoring in Construction</h1>
        <p className="text-center text-lg max-w-2xl mx-auto">
          निर्माण साइट पर प्रगति को वास्तविक समय में ट्रैक करें, सुरक्षा बढ़ाएं, और निर्णय तेजी से लें—ड्रोन मॉनिटरिंग से। 
        </p>
      </section>

      {/* Overview */}
      <section className="px-6 py-12 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">ड्रोन मॉनिटरिंग क्या है?</h2>
          <p className="mb-4">
            ड्रोन मॉनिटरिंग में निर्माण साइट पर ड्रोन का इस्तेमाल करके ऊँचाई से डेटा, इमेजरी, और 3D मैप्स एकत्र किए जाते हैं। 
            यह surveying, progress tracking, safety inspection, और site analysis को अधिक सटीक, तेज़ और cost-effective बनाता है।
          </p>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">मुख्य क्षमताएं</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="mb-2">
                नियमित उड़ानों से साइट की प्रगति का तुलना करके यह देखा जाता है कि कार्य योजनानुसार चल रहा है या नहीं। 
                पिछले ड्रोन डेटा के साथ overlays और time-lapse बनाकर बदलाव स्पष्ट दिखते हैं।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Site Surveying & Mapping</h3>
              <p className="mb-2">
                उच्च-रिज़ॉल्यूशन aerial imagery से accurate topographic maps और 3D models बनते हैं, जो planning और earthwork के लिए आवश्यक हैं।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Safety Inspections</h3>
              <p className="mb-2">
                भारी या जोखिम वाले इलाके में इंसानी जांच के बजाय ड्रोन से inspection करके सुरक्षा खतरे जल्दी पकड़े जाते हैं।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Volume Calculations</h3>
              <p className="mb-2">
                Stockpile या excavation की volume को accurately मापा जाता है 3D point clouds और photogrammetry से।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Typical Drone Monitoring Workflow</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li><strong>Planning & Flight Path:</strong> साइट का विश्लेषण करके flight route और altitude तय करना।</li>
            <li><strong>Automated Drone Flight:</strong> प्री-प्रोग्राम्ड ड्रोन उड़ानें लेते हैं और imagery/ LiDAR डेटा कैप्चर करते हैं।</li>
            <li><strong>Data Processing:</strong> Photogrammetry या point cloud generation से 2D/3D output तैयार किया जाता है।</li>
            <li><strong>Analysis & Comparison:</strong> पिछले डेटा से तुलना (progress, deviations) और रिपोर्ट्स बनाना।</li>
            <li><strong>Stakeholder Review:</strong> visual dashboards या overlays दिखाकर टीम को insights देना।</li>
          </ol>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Popular Tools & Platforms</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold">DJI Drones</h3>
              <p className="mb-1">
                Enterprise-grade ड्रोन जैसे DJI Phantom 4 RTK, Mavic 3 Enterprise जो high-precision mapping के लिए use होते हैं।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold">Pix4D / DroneDeploy</h3>
              <p className="mb-1">
                Photogrammetry platforms जो aerial images से orthomosaics, 3D models, और volume reports generate करते हैं।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold">Reality Capture & BIM Integration</h3>
              <p className="mb-1">
                ड्रोन से मिला data BIM workflows में integrate करके construction coordination बेहतर बनते हैं।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold">Analytics Dashboards</h3>
              <p className="mb-1">
                Custom dashboards से progress tracking, deviation alerts और historical comparisons दिखाए जाते हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Video Demonstrations</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-bold">Drone Monitoring Overview</h3>
              <p className="text-sm text-gray-600">
                कैसे ड्रोन real-time में construction sites को ट्रैक करते हैं और data को actionable insights में बदलते हैं।
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
              <h3 className="font-bold">Mapping & Progress with Drones</h3>
              <p className="text-sm text-gray-600">
                Site mapping और progress comparison का عملی तरीका photogrammetry के साथ।
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
          <h2 className="text-2xl font-semibold mb-4">ड्रोन मॉनिटरिंग के फायदे</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>तेज़ और बार-बार डेटा कैप्चर बिना साइट disruption के।</li>
            <li>साइट प्रगति की वास्तविक तुलना (time-lapse और overlays)।</li>
            <li>सुरक्षा निरीक्षण दूर से बिना जोखिम में डाले।</li>
            <li>सटीक volume calculation और earthwork validation।</li>
            <li>Stakeholders को visual रिपोर्ट्स और alerts देना आसान।</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold">ड्रोन मॉनिटरिंग कितनी बार की जानी चाहिए?</h4>
              <p className="mt-1 text-sm text-gray-700">
                आम तौर पर weekly या major milestones के समय, लेकिन high-risk या fast-moving sites पर daily flights भी होती हैं।
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold">क्या ड्रोन से ली गई इमेज से 3D मॉडल बनता है?</h4>
              <p className="mt-1 text-sm text-gray-700">
                हाँ, photogrammetry software (जैसे Pix4D या DroneDeploy) multiple overlapping images से accurate 3D point clouds और orthomosaics बनाते हैं।
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold">क्या ड्रोन मॉनिटरिंग महँगी होती है?</h4>
              <p className="mt-1 text-sm text-gray-700">
                शुरुआत में investment होता है, लेकिन manual surveys की तुलना में समय और गलती दोनों कम होने से लंबी अवधि में cost-effective होती है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-gradient-to-r from-green-600 to-green-400 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">अपनी साइट को ड्रोन से मॉनिटर करें</h2>
          <p className="mb-6">
            प्रगति को real-time में देखें, जोखिम कम करें और बेहतर निर्णय लें। हमारी ड्रोन मॉनिटरिंग सर्विस के लिए अभी संपर्क करें।
          </p>
          <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-md shadow hover:opacity-90">
            Free Site Assessment
          </button>
        </div>
      </section>
    </main>
  );
}
