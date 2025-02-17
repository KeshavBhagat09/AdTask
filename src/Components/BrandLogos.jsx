import React, { useEffect, useRef } from "react";
import Workday from "../assets/Workday.png";
import Google from "../assets/Google.png";
import SalesForce from "../assets/SalesForce.png";
import Amazon from "../assets/Amazon.png";
import Sony from "../assets/Sony.png";
import CocaCola from "../assets/CocaCola.png";
import Intel from "../assets/Intel.png";

const BrandLogos = () => {
  const logos = [
    { src: Workday, alt: "Workday" },
    { src: Google, alt: "Google" },
    { src: SalesForce, alt: "SalesForce" },
    { src: Amazon, alt: "Amazon" },
    { src: Sony, alt: "Sony" },
    { src: CocaCola, alt: "CocaCola" },
    { src: Intel, alt: "Intel" },
  ];

  return (
    <div className="bg-black py-6 overflow-hidden flex justify-center">
      <div className="logos-container flex items-center space-x-16 min-w-max">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`grayscale hover:grayscale-0 transition duration-300
              ${["CocaCola", "Intel", "Workday", "Amazon"].includes(logo.alt) ? "h-[50px] w-auto" : "h-[68px] w-auto"}
            `}
          />
        ))}
      </div>
      <style>
        {`
          .logos-container {
            display: flex;
            white-space: nowrap;
            animation: scroll 20s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default BrandLogos;