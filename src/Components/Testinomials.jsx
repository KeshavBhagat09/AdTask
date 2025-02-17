import React from "react";
import Testinomial from "../assets/Testinomial.png"; // Replace with actual testinomial image

const testinomials = [
  {
    quote:
      "We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.",
    author: "Brand Director at a Tech Startup",
  },
  {
    quote:
      "adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!",
    author: "Head of Growth at Tech Startup",
  },
  {
    quote:
      "We’ve tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!",
    author: "Ecommerce Manager at Home Décor Brand",
  },
  {
    quote:
      "What impressed me most was the real-time optimization. adTask’s intelligent agents just keep refining our campaigns—our ad spend has never worked harder!",
    author: "Digital Strategist at SaaS Company",
  },
  {
    quote:
      "adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.",
    author: "Social Media Lead at Non-Profit Organization",
  },
  {
    quote:
      "We’ve seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!",
    author: "Social Media Manager at a Fitness Brand",
  },
];

const Testinomials = () => {
  return (
    <section className="bg-[#0d0f19] text-white py-16 px-6">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center">
        <span className="px-4 py-1 text-sm font-semibold rounded-full bg-gray-800 text-gray-300">
          TESTIMONIALS
        </span>
        <img src={Testinomial} alt="Testimonials" className="mx-auto mt-4" />
        <p className="text-gray-400 mt-2">
          Discover how we’ve driven growth and innovation.
        </p>
      </div>

      {/* Testinomials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {testinomials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#161a2b] p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <p className="text-gray-300 italic">“{testimonial.quote}”</p>
            <p className="text-blue-400 mt-4 font-semibold">
              — {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testinomials;
