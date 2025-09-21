import React from "react";
import FirstYear from "../components/firstYear";
import SecondYear from "../components/secondYear";
import ThirdYear from "../components/thirdYear";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Books() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-black via-[#0F172A] to-black text-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 py-16 pb-0 mb-1 px-6 md:px-20 text-center">
        {/* Heading */}
        <h3 className="mt-20 text-3xl md:text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 drop-shadow-[0_0_25px_rgba(0,200,255,0.6)]">
          Books : because guessing in exams isn't a sustainable strategy.
        </h3>

        {/* 👇 Tumhari animation exactly yahan */}
        <div className="flex justify-center mt-0 mb-0">
          <DotLottieReact
            src="https://lottie.host/fcd12745-2997-4182-b7fd-0539bab14750/6X1gHdkNnT.lottie"
            loop
            autoplay
            style={{ width: 300, height: 300 }}
          />
        </div>

        {/* "Tired of messy drives..." text */}
        <p className="text-lg md:text-xl text-gray-300 mt-0">
          Tired of messy drives, outdated books, and endless searching?
          We’ve done the work for you. <br />
          Scroll down to explore semester-wise handpicked books trusted by toppers — all at your fingertips.
        </p>

        <p className="text-lg text-cyan-400 font-medium mt-10 animate-pulse">
          🔍 Scroll to explore → Choose your semester → Start learning smarter.
        </p>

        <p className="text-sm text-gray-400 mt-10 mb-0 italic leading-none">
          Consistency + Right Resources = Your 10 SGPA starts here.
        </p>

        <p className="mt-10 mb-0 text-md font-semibold text-cyan-400 drop-shadow-lg animate-bounce">
  📚 Curated books, semester-wise, branch-wise — study smarter, not harder!
</p>


      </div>

      {/* Year-wise Book Sections */}
      <section className="mb-1 mt-0 relative z-10">
        <FirstYear />
      </section>

      <section className="mb-1 relative z-10">
        <SecondYear />
      </section>

      <section className="mb-20 relative z-10">
        <ThirdYear />
      </section>
    </div>
  );
}

export default Books;
