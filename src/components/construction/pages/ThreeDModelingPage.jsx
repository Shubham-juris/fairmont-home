import React from "react";

export function ThreeDModelingPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Complete Guide to 3D Modeling</h1>
          <p className="text-center text-lg max-w-2xl mx-auto">
            जानें 3D मॉडलिंग क्या है, कैसे काम करती है, कौन से तरीके इस्तेमाल होते हैं, कौन से टूल्स बेहतर हैं, और
            इसका निर्माण/कंस्ट्रक्शन में कैसे उपयोग होता है।
          </p>
        </section>

        {/* Overview */}
        <section className="px-6 py-12 border-t">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">क्या है 3D Modeling?</h2>
            <p className="mb-4">
              3D मॉडलिंग एक कंप्यूटरीकृत प्रक्रिया है जिसमें किसी ऑब्जेक्ट की त्रि-आयामी (three-dimensional) सतह का
              गणितीय प्रतिनिधित्व बनाया जाता है। इसे polygonal meshes, curves, या sculpting techniques से तैयार किया जाता है। यह वास्तुकला, निर्माण, गेमिंग, उत्पाद डिज़ाइन, और बहुत से क्षेत्रों में इस्तेमाल होती है। :contentReference[oaicite:0]{index=0}
            </p>
          </div>
        </section>

        {/* Techniques */}
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">मुख्य 3D Modeling Techniques</h2>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Polygonal Modeling</h3>
                <p className="mb-2">
                  यह सबसे सामान्य तरीका है जिसमें वर्टिसेस, एजेस और फेसेज़ को जोड़कर mesh बनाया जाता है। Quads और
                  triangles से models तैयार होते हैं, और इनके ऊपर operations जैसे extrude, subdivide, bevel, boolean आदि होते हैं। :contentReference[oaicite:1]{index=1}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Box Modeling</h3>
                <p className="mb-2">
                  एक primitive (जैसे cube) से शुरू करके धीरे-धीरे उसे shape दी जाती है—subdivision और extrusion से
                  detail जोड़ी जाती है। यह तेज़ सीखने के लिए अच्छा है और शुरुआती modeling workflows में common है। :contentReference[oaicite:2]{index=2}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Procedural Modeling</h3>
                <p className="mb-2">
                  नियमों (rules) और algorithmic logic के आधार पर मॉडल्स generate होते हैं, जैसे landscapes, plants, या
                  बड़े architectural scenes। इसे dynamic और easily adjustable models बनाने के लिए इस्तेमाल किया जाता है। :contentReference[oaicite:3]{index=3}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Digital Sculpting</h3>
                <p className="mb-2">
                  Clay की तरह डिजिटल geometry को push/pull/smooth करके organic और high-detail मॉडल बनाए जाते हैं।
                  यह विशेष रूप से characters या detailed surfaces के लिए उपयोगी है। :contentReference[oaicite:4]{index=4}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="px-6 py-12 bg-green-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Typical 3D Modeling Workflow</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li><strong>Concept & Reference:</strong> Idea को sketches, photos या blueprints से define करना.</li>
              <li><strong>Blocking / Base Shape:</strong> Primitive से basic form तैयार करना (box modeling या rough mesh).</li>
              <li><strong>Refinement:</strong> Geometry में detail जोड़ना — extrude, bevel, subdivision, sculpting आदि.</li>
              <li><strong>Topology Optimization:</strong> Mesh clean करना ताकि rendering और deformation smooth हो.</li>
              <li><strong>UV Unwrapping:</strong> Textures के लिए surface को 2D में फैलाया जाता है.</li>
              <li><strong>Texturing & Materials:</strong> रंग, surface properties और maps apply किये जाते हैं.</li>
              <li><strong>Lighting & Rendering:</strong> Scene lighting setup करके final image या visualization निकाली जाती है.</li>
              <li><strong>Review & Iterate:</strong> Feedback के आधार पर सुधार और final delivery.</li>
            </ol>
          </div>
        </section>

        {/* Tools */}
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Popular Tools / Software</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold">Blender</h3>
                <p className="mb-1">
                  Open-source, बहुत versatile tool है modeling, sculpting, rendering, और animation के लिए.
                </p>
                <p className="text-sm text-gray-600">
                  (Beginner-friendly tutorials से शुरू कर सकते हैं.) :contentReference[oaicite:5]{index=5}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold">Fusion 360</h3>
                <p className="mb-1">
                  Parametric और CAD-focused modeling के लिए अच्छा, especially engineering और construction parts के लिए.
                </p>
                <p className="text-sm text-gray-600">
                  Beginners guide available. :contentReference[oaicite:6]{index=6}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold">Construction-specific 3D Workflows</h3>
                <p className="mb-1">
                  BIM, architectural visualization में modeling, site planning के साथ integrate होती है। :contentReference[oaicite:7]{index=7}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold">Other Tools</h3>
                <p className="mb-1">
                  Autodesk Maya, 3ds Max, SketchUp (architecture), Adobe Dimension (presentation) आदि। :contentReference[oaicite:8]{index=8}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="px-6 py-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Video Tutorials</h2>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-bold">Quick 3D Modeling Process (11 minutes)</h3>
                <p className="text-sm text-gray-600">
                  किसी भी चीज़ को तेज़ी से 3D में मॉडल करने का saral तरीका. :contentReference[oaicite:9]{index=9}
                </p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    title="Learn How to 3D Model Anything in 11 Minutes"
                    src="https://www.youtube.com/embed/pycr3rijnzQ"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-md shadow"
                  ></iframe>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">3D in Construction Overview</h3>
                <p className="text-sm text-gray-600">
                  3D तकनीकें निर्माण में कैसे इस्तेमाल होती हैं और workflows क्या होते हैं. :contentReference[oaicite:10]{index=10}
                </p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    title="3D in Construction"
                    src="https://www.youtube.com/embed/dlVyDPvA5N0"
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
            <h2 className="text-2xl font-semibold mb-4">Benefits of 3D Modeling in Construction</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Visualization before build — errors पहले पकड़ो.</li>
              <li>Accurate measurements और planning.</li>
              <li>Client approvals तेज़ और समझने में आसान.</li>
              <li>Material optimization और waste reduction.</li>
              <li>Integration with BIM और site coordination.</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold">मैं 3D modeling कहाँ से सीखूं?</h4>
                <p className="mt-1 text-sm text-gray-700">
                  Blender का official documentation, YouTube tutorials (जैसे ऊपर वाला 11-minute guide), और free courses से शुरू करें।
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold">क्या मुझे coding चाहिए 3D models के लिए?</h4>
                <p className="mt-1 text-sm text-gray-700">
                  ज़्यादातर modeling tools drag-and-drop या graphical interface देते हैं; लेकिन procedural modeling में scripting काम आती है (जैसे Blender में Python)। :contentReference[oaicite:11]{index=11}
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold">Construction में 3D modeling का सबसे बड़ा फ़ायदा क्या है?</h4>
                <p className="mt-1 text-sm text-gray-700">
                  Reality से पहले visualization और clash detection, जिससे costly mistakes कम होते हैं। :contentReference[oaicite:12]{index=12}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="px-6 py-16 bg-gradient-to-r from-green-600 to-green-400 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Ready to Visualize Your Project?</h2>
            <p className="mb-6">
              हमारी 3D modeling services से पहले से ही design देखें, revise करें और build confidence के साथ आगे बढ़ें।
            </p>
            <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-md shadow hover:opacity-90">
              Get a Free 3D Consultation
            </button>
          </div>
        </section>
    </main>
  );
}
