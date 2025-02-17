import React from "react";
import Feature from "../assets/Feature.png"; // Replace with actual feature images
import Cards1 from "../assets/Cards1.png";
import Cards2 from "../assets/Cards2.png";
import Cards3 from "../assets/Cards3.png";
import Cards4 from "../assets/Cards4.png";

const featureImages = [Cards1, Cards2, Cards3, Cards4];

const Pentogrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-900 text-white min-h-screen">
      {/* First and Last Feature - Larger Grid Items */}
      <div className="row-span-2 flex items-center justify-center bg-gray-800 rounded-lg p-2">
        <img src={featureImages[0]} alt="Feature 1" className="w-full h-auto rounded-lg" />
      </div>
      
      {/* Middle Two Features Placed Up and Down */}
      <div className="grid grid-rows-2 gap-6">
        <div className="bg-gray-800 rounded-lg flex items-center justify-center p-2">
          <img src={featureImages[1]} alt="Feature 2" className="w-full h-auto rounded-lg" />
        </div>
        <div className="bg-gray-800 rounded-lg flex items-center justify-center p-2">
          <img src={featureImages[2]} alt="Feature 3" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      
      <div className="row-span-2 flex items-center justify-center bg-gray-800 rounded-lg p-2">
        <img src={featureImages[3]} alt="Feature 4" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

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

      {/* Grid Section */}
      <Pentogrid />
    </section>
  );
};

export default Features;
