import React from "react";
import YouTubeLogo from "../assets/YouTubeLogo.svg"; // Adjust the path if necessary

const VideoSection = () => {
  return (
    <section className="flex justify-center py-10 bg-black">
      <div className="relative w-full max-w-7xl rounded-lg overflow-hidden">
        {/* Animated Rotating Border */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)] animate-rotate"></div>

        {/* Content with border inside */}
        <div className="relative w-full h-[600px] bg-gray-900 flex justify-center items-center rounded-lg border border-gray-600">
          {/* Text behind the logo */}
          <div className="absolute text-gray-500 text-6xl font-bold opacity-20">
            adTask.ai
          </div>
          <img src={YouTubeLogo} alt="YouTube Logo" className="z-10 w-16 h-16" />
        </div>
      </div>

      {/* Tailwind Animation Styles */}
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          .animate-rotate {
            animation: rotate 6s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default VideoSection;
