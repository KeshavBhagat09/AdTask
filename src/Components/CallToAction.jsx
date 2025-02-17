import React from "react";
import ParticleButton3 from "./ParticleButton3";
import ParticleButton4 from "./ParticleButton4";

const CallToAction = () => {
  return (
    <section className="bg-[#0d0f19] text-white py-16 px-6 flex flex-col items-center">
      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Are you ready to boost <br />
          <span className="text-blue-400">your Digital Presence?</span>
        </h2>
        <ParticleButton3 />
        <ParticleButton4 />
      </div>

      {/* Footer Section */}
      <footer className="mt-16 w-full max-w-6xl border-t border-gray-700 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          {/* Logo & Contact */}
          <div>
            <h2 className="text-3xl font-bold">
              ad<span className="text-blue-400">Task</span>.ai
            </h2>
            <div className="mt-4 space-y-2">
              <p className="text-sm">📧 contact@adtask.ai</p>
              <p className="text-sm">📍 San Francisco Bay Area</p>
            </div>
          </div>

          {/* Utilities */}
          <div>
            <h3 className="text-lg font-semibold text-white">Utilities</h3>
            <ul className="mt-2 space-y-1">
              <li>Home</li>
              <li>Products</li>
              <li>Tools</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white">Socials</h3>
            <ul className="mt-2 space-y-1">
              <li>X</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm mt-8">
          All rights reserved © 2025 adTask
        </p>
      </footer>
    </section>
  );
};

export default CallToAction;