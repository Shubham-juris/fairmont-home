import React from "react";


const ApplicationForm = () => (
  <section className="bg-gray-100 py-16 px-6">
    <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Apply Now</h2>
    <form className="max-w-3xl mx-auto space-y-4 bg-white p-6 rounded shadow">
      <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
      <input type="text" placeholder="Position Applied For" className="w-full p-2 border rounded" />
      <input type="file" className="w-full p-2 border rounded" />
      <textarea rows="4" placeholder="Message (optional)" className="w-full p-2 border rounded"></textarea>
      <button type="submit" className="px-6 py-2 bg-green-700 text-white rounded-md">Submit Application</button>
    </form>
  </section>
);
export default ApplicationForm;
