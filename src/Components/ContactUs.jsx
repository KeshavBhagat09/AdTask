import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-[#0d0f19] text-white py-16 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <span className="px-4 py-1 text-sm font-semibold rounded-full bg-gray-800 text-gray-300">
            CONTACT US
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Ask whatever you have <br />
            <span className="text-blue-400">in your mind now</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Whether you have questions or are ready to discuss your business,
            we’re here to help. Reach out today.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-400" />
              <a href="mailto:contact@adtask.ai" className="text-gray-300 hover:text-blue-400">
                contact@adtask.ai
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-400" />
              <p className="text-gray-300">(969) 819-8061</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-400" />
              <p className="text-gray-300">San Francisco Bay Area</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#161a2b] p-6 rounded-xl shadow-lg border border-gray-700">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-300">Message</label>
              <textarea
                rows="4"
                className="w-full mt-1 p-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 hover:bg-blue-500 hover:text-white transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
