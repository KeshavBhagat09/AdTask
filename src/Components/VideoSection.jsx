import React from "react";

const VideoSection = () => {
  return (
    <section className="flex justify-center py-10 bg-black">
      <div className="w-full max-w-7xl border border-gray-600 rounded-lg p-6">
        <div className="relative w-full h-[600px] bg-gray-900 flex justify-center items-center">
          <button className="bg-red-600 p-4 rounded-full">
            <span className="text-white text-xl">▶</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;