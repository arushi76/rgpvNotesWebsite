import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/abstract-animation.json";

function Herosection() {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.2);
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-black via-[#0F172A] to-black text-white overflow-hidden py-46 px-6 flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-60">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop
          style={{
            width: "1300px", // Slightly smaller width
            height: "1000px", // Slightly smaller height
            transform: "rotate(90deg)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 drop-shadow-[0_0_25px_rgba(0,200,255,0.6)]">
          Ace Your RGPV Journey with us.
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          A dedicated platform for RGPV students to access organized notes, exam-focused PYQs, and helpful lectures — all in one click.
        </p>
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Herosection;
