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

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      let start = 0;
      const speed = 0.5; // Adjust speed (higher = faster)

      const scroll = () => {
        start -= speed;
        if (start <= -container.scrollWidth / 2) {
          start = 0; // Reset position for seamless looping
        }
        container.style.transform = `translateX(${start}px)`;
        requestAnimationFrame(scroll);
      };

      scroll();
    }
  }, []);

  return (
    <div className="bg-black py-6 overflow-hidden flex justify-center">
      <div
        ref={containerRef}
        className="flex items-center space-x-16 min-w-max"
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
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
    </div>
  );
};

export default BrandLogos;
