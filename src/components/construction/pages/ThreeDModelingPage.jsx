import React from "react";

export function ThreeDModelingPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4  text-green-600">
          Complete Guide to 3D Modeling
        </h1>
        <p className="text-center text-lg max-w-2xl mx-auto">
          Learn what 3D modeling is, how it works, the techniques used, the best
          tools available, and how it is applied in construction projects.
        </p>
      </section>

      {/* Overview */}
      <section className="px-6 py-12 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2  text-green-600">What is 3D Modeling?</h2>
          <p className="mb-4">
            3D modeling is a computer-based process of creating a
            three-dimensional representation of an object’s surface. It is made
            using polygonal meshes, curves, or sculpting techniques. This
            technology is widely used in architecture, construction, gaming,
            product design, and many other industries.
          </p>
        </div>
      </section>

      {/* Techniques */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6  text-green-600">
            Key 3D Modeling Techniques
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2  text-green-600">Polygonal Modeling</h3>
              <p className="mb-2">
                The most common method where vertices, edges, and faces are
                connected to form a mesh. Models are built from quads and
                triangles, with operations like extrude, subdivide, bevel, and
                boolean.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2  text-green-600">Box Modeling</h3>
              <p className="mb-2">
                Starts with a primitive (such as a cube) and gradually shapes
                it using subdivision and extrusion to add detail. This method is
                beginner-friendly and common in early modeling workflows.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2  text-green-600">Procedural Modeling</h3>
              <p className="mb-2">
                Models are generated based on rules and algorithmic logic, such
                as landscapes, plants, or large architectural scenes. It is
                used to create dynamic and easily adjustable models.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2  text-green-600">Digital Sculpting</h3>
              <p className="mb-2">
                Like working with clay, digital sculpting allows you to push,
                pull, and smooth digital geometry to create organic and
                high-detail models. It’s especially useful for characters or
                detailed surfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4  text-green-600">
            Typical 3D Modeling Workflow
          </h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Concept & Reference:</strong> Define the idea using
              sketches, photos, or blueprints.
            </li>
            <li>
              <strong>Blocking / Base Shape:</strong> Create a basic form from
              primitives (box modeling or rough mesh).
            </li>
            <li>
              <strong>Refinement:</strong> Add details to geometry using
              extrude, bevel, subdivision, sculpting, etc.
            </li>
            <li>
              <strong>Topology Optimization:</strong> Clean the mesh for smooth
              rendering and deformation.
            </li>
            <li>
              <strong>UV Unwrapping:</strong> Flatten the surface into 2D for
              texturing.
            </li>
            <li>
              <strong>Texturing & Materials:</strong> Apply colors, surface
              properties, and maps.
            </li>
            <li>
              <strong>Lighting & Rendering:</strong> Set up scene lighting and
              render the final output.
            </li>
            <li>
              <strong>Review & Iterate:</strong> Make improvements based on
              feedback and finalize.
            </li>
          </ol>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4  text-green-600">
            Popular Tools / Software
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold  text-green-600">Blender</h3>
              <p className="mb-1">
                Open-source, versatile software for modeling, sculpting,
                rendering, and animation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold  text-green-600">Fusion 360</h3>
              <p className="mb-1">
                Ideal for parametric and CAD-focused modeling, especially for
                engineering and construction components.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold  text-green-600">
                Construction-specific 3D Workflows
              </h3>
              <p className="mb-1">
                Integrated with BIM and architectural visualization for site
                planning and coordination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold  text-green-600">Other Tools</h3>
              <p className="mb-1">
                Autodesk Maya, 3ds Max, SketchUp, Adobe Dimension, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Benefits */}
      <section className="px-6 py-12 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4  text-green-600">
            Benefits of 3D Modeling in Construction
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Visualize the design before construction starts.</li>
            <li>Accurate measurements and detailed planning.</li>
            <li>Faster client approvals with clear visual representation.</li>
            <li>Material optimization and reduced waste.</li>
            <li>Seamless integration with BIM and site coordination.</li>
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
              <h4 className="font-semibold  text-green-600">Where can I learn 3D modeling?</h4>
              <p className="mt-1 text-sm text-gray-700">
                Start with Blender’s official documentation, YouTube tutorials
                (such as the 11-minute guide above), and free online courses.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold  text-green-600">
                Do I need coding skills for 3D modeling?
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                Most modeling tools offer a graphical interface, but scripting
                (like Python in Blender) is useful for procedural modeling.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow">
              <h4 className="font-semibold  text-green-600">
                What’s the biggest advantage of 3D modeling in construction?
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                The ability to visualize and detect potential issues before
                construction starts, reducing costly mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
}
