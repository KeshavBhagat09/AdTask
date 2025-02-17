import React from "react";
import { FaBullseye, FaChartLine, FaSearch, FaGlobe, FaHandPointer, FaBullhorn } from "react-icons/fa";
import Service from "../assets/Service.png"; // Replace with actual service image
import Gradient1 from "../assets/Gradient1.png"; // Replace with actual Gradient background image

const services = [
  {
    icon: <FaBullseye size={40} />,
    title: "Smart Ad Targeting",
    description: "AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Performance Analytics",
    description: "Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies.",
  },
  {
    icon: <FaSearch size={40} />,
    title: "SEO Automation",
    description: "Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort.",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "Social Media Marketing",
    description: "AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real-time for maximum impact.",
  },
  {
    icon: <FaHandPointer size={40} />,
    title: "Conversion Optimization",
    description: "AI-driven A/B testing and automated tweaks to landing pages and funnels help you consistently improve conversion rates.",
  },
  {
    icon: <FaBullhorn size={40} />,
    title: "Campaign Automation",
    description: "Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#0d0f19] text-white py-16 px-6">
      {/* Section Header */}
      <div className="text-center">
        <span className="px-4 py-1 text-sm font-semibold rounded-full bg-gray-800 text-gray-300">
          SERVICES
        </span>
        <img 
          src={Service} 
          alt="Service" 
          className="block mx-auto mt-4 max-w-full"
        />
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-[#161a2b] p-6 rounded-2xl shadow-lg text-center border border-gray-800 bg-cover bg-center" 
            style={{ backgroundImage: `url(${Gradient1})` }}
          >
            <div className="flex justify-center text-blue-400 mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;