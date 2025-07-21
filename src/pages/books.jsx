import React from "react";
import FirstYear from "../components/firstYear";
import SecondYear from "../components/secondYear";
import ThirdYear from "../components/thirdYear";
// import FourthYear from "../components/FourthYear"; // Optional

const Books = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-[#0F172A] to-black text-white py-16 px-6 md:px-20">
      
      {/* Top Introduction Section */}
      <div className="text-center mb-16">
        <h3 className=" mt-30 text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 drop-shadow-[0_0_25px_rgba(0,200,255,0.6)]">
         Books : because guessing in exams isn't a sustainable strategy.
        </h3>

        <p className="text-lg md:text-xl text-gray-300 mt-9">
          Tired of messy drives, outdated books, and endless searching?
          We’ve done the work for you. <br />
          Scroll down to explore semester-wise handpicked books trusted by toppers — all at your fingertips.
        </p>

        <p className="text-md text-cyan-400 font-medium mt-6 animate-pulse">
          🔍 Scroll to explore → Choose your semester → Start learning smarter.
        </p>

        <p className="text-sm text-gray-400 mt-2 italic">
          Consistency + Right Resources = Your 10 SGPA starts here.
        </p>
      </div>

      {/* Year-wise Book Sections */}
      <section className="mb-16">
        <FirstYear />
      </section>

      <section className="mb-16">
        <SecondYear />
      </section>

      <section className="mb-16">
        <ThirdYear />
      </section>

      {/* <section className="mb-16">
        <FourthYear />
      </section> */}
    </div>
  );
};

export default Books;