import React, { useEffect, useRef } from 'react';

const ParticleButton2 = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const createParticle = () => {
      const particle = document.createElement('span');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      button.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    const intervalId = setInterval(createParticle, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <button ref={buttonRef} className="particle-button">
        Scedule Your Call
      </button>
      <style>
        {`
          .particle-button {
            position: relative;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #0d0f19; /* Same as background color */
            border: 2px solid white; /* Add border */
            border-radius: 50px; /* Make it rounded */
            cursor: pointer;
            overflow: hidden;
          }

          .particle-button .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background-color: white;
            border-radius: 50%;
            pointer-events: none;
            animation: particle-animation 1s linear forwards;
          }

          @keyframes particle-animation {
            0% {
              top: 0%;
              opacity: 1;
            }
            100% {
              top: 100%;
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ParticleButton2;