import Gradient from "../assets/Gradient1.png"; // Adjust the path if necessary
import ParticleButton from "./ParticleButton";

const Hero = () => {
  return (
    <section
      className="text-center text-white p-10 relative bg-cover bg-center w-50px h-50px"
      style={{
        backgroundImage: `url(${Gradient})`,
      }}
    >
      {/* Box around the text */}
      <div className="inline-block bg-gray-900/80 px-6 py-3 rounded-xl border border-gray-700 shadow-lg relative overflow-hidden">
        <h2 className="text-2xl font-semibold relative text-white moving-light">
          Transform Your Digital Presence with AI Agents
        </h2>
      </div>

      {/* Centered adTask.ai text with opacity and glow on hover */}
      <div className="flex justify-center items-center mt-20">
        <p className="text-gray-400 opacity-40 transition duration-300 hover:opacity-100 hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] text-[88px] w-[468px] h-[95.96px]">
          adTask.ai
        </p>
      </div>

      <p className="mt-28 text-lg text-gray-300" style={{ fontSize: "16px" }}>
        Stop struggling with marketing decisions. Our AI assistant analyzes your business,
        creates personalized strategies, and helps you execute them – all in real-time.
      </p>

      {/* Fully Rounded Button */}
      <ParticleButton/>
      <p style={{ fontSize: "10px" }}>Try AdTask AI for 30 days</p>

      {/* Styles */}
      <style>
        {`
          .moving-light::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 5%;
            height: 100%;
            background: linear-gradient(-120deg, transparent, rgba(255, 255, 255, 1), transparent);
            animation: slide-light 5s infinite linear;
          }

          @keyframes slide-light {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
