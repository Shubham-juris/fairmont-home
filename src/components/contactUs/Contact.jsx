import React from "react";
import img from "../../assets/contact/img.jpeg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row mt-15">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
        <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Send us a Message
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div
        className="flex-1 bg-cover bg-center rounded-4xl flex flex-col items-center justify-center text-white p-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.80), rgba(0,0,0,0.55)), url(${img})`,
        }}
      >
        <div className="p-6 rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <p className="mb-2">
            📍 <strong>Location:</strong> 123 Green Street, New Delhi, India
          </p>
          <p className="mb-2">
            📧 <strong>Email:</strong> info@example.com
          </p>
          <p className="mb-2">
            📞 <strong>Phone:</strong> +91 98765 43210
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
