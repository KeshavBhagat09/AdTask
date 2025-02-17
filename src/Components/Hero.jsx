const Hero = () => {
  return (
    <section className="text-center text-white p-10 bg-black relative">
      {/* Box around the text */}
      <div className="inline-block bg-gray-900/80 px-6 py-3 rounded-xl border border-gray-700 shadow-lg relative overflow-hidden">
        <h2 className="text-2xl font-semibold relative text-white moving-light">
          Transform Your Digital Presence with AI Agents
        </h2>
      </div>

      {/* Centered adTask.ai text */}
      <div className="flex justify-center items-center mt-20" style={{ height: '88px' }}>
        <p className="text-gray-400" style={{ fontSize: '88px', width: '422.4px' }}>adTask.ai</p>
      </div>

      <p className="mt-28 text-lg" style={{fontSize:'16px'}}>
        Stop struggling with marketing decisions. Our AI assistant analyzes your business,
        creates personalized strategies, and helps you execute them – all in real-time.
      </p>

      {/* Fully Rounded Button */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition">
        Start Free Trial
      </button>
      <p style={{fontSize:'10px'}}>Try AdTask AI for 30 days</p>

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