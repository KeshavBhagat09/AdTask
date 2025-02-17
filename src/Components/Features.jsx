import React from "react";
import Feature from "../assets/Feature.png"; // Replace with actual feature images
import Cards from "../assets/Cards.png"; // Replace with actual feature cards
const Features = () => {
  return (
    <section className="bg-[#0d0f19] text-white py-16 px-6">
      {/* Header Section with Image */}
      <div className="text-center">
        <span className="px-4 py-1 text-sm font-semibold rounded-full bg-gray-800 text-gray-300">
          FEATURES
        </span>

        {/* Image instead of Heading */}
        <div className="flex justify-center mt-4">
          <img src={Feature} alt="Features Heading" className="max-w-full h-auto" />
        </div>

        <p className="text-gray-400 mt-4">
          Experience Intelligent Features to optimize your marketing efforts.
        </p>
      </div>

      {/* Feature Cards (Now Images) */}
      <div className="flex justify-center items-center mt-12">
  <img 
    src={Cards} 
    alt="Reach Target Audience" 
    className="rounded-2xl shadow-lg w-[1120px] h-[597px] max-w-full"
  />
</div>

    </section>
  );
};

export default Features;
