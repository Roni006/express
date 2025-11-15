// ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full">

      {/* Banner Section */}
      <section className="relative w-full h-[300px] flex items-center justify-center bg-gray-800">
        <img
          src="https://picsum.photos/1600/300?grayscale" // Banner image
          alt="Contact Us Banner"
          className="absolute w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="md:flex md:gap-10">
          {/* Form */}
          <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-4">
              <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info@example.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +123 456 7890
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dummy Map Section */}
      <section className="w-full h-64">
        <iframe
          title="Location Map"
          src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
        ></iframe>
      </section>

    </div>
  );
};

export default ContactUs;
