import React from "react";
// import { FaBullseye, FaChartLine, FaSearch, FaGlobe, FaHandPointer, FaBullhorn } from "react-icons/fa";
import ServicesCard from "../assets/ServicesCard.png"; // Replace with actual service image

const Services = () => {
  return (
    <section className="bg-[#0d0f19] text-white py-16 px-6">
      {/* Section Header */}
      <div className="text-center">
        <span className="px-4 py-1 text-sm font-semibold rounded-full bg-gray-800 text-gray-300">
          SERVICES
        </span>
        <img 
          src={ServicesCard} 
          alt="Service" 
          className="block mx-auto mt-4 max-w-full"
        />
      </div>

    </section>
  );
};

export default Services;