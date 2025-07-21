import React from 'react';

const About = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-[#0F172A] to-black text-white overflow-hidden py-32 px-6 flex justify-center">
      <div className="relative z-10 max-w-4xl space-y-8">

        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 drop-shadow-[0_0_25px_rgba(0,200,255,0.6)] text-center">
          Behind Ace RGPV: Why We Built This 
        </h2>
        <p className="text-lg text-gray-300">
          Remember the night before exams, when you're hunting PDFs, bugging seniors, or praying someone sends you the right notes?
          <br />
          Yeah, we've been there too.
        </p>

        <p className="text-lg text-gray-300">
          That’s why we created <span className="font-semibold text-cyan-300">Ace RGPV</span> — a simple, no-nonsense platform where all your academic resources actually live in one place.
          No drama. No dead links. Just pure help.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4 text-purple-300">What We Offer 🚀</h2>
        <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
          <li>📘 Year-wise Notes that actually make sense</li>
          <li>📄 PYQs, sorted & searchable — no Drive chaos</li>
          <li>📚 Book lists your toppers secretly use 😉</li>
          <li>🎥 Video lectures that aren’t buried in Telegram</li>
          <li>🤖 An AI chatbot friend (coming soon!)</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-4 text-pink-300">Meet the Humans Behind It 👩‍💻</h2>
        <p className="text-base text-gray-300">
          We’re <span className="font-medium text-white">Arushi Mishra</span> and <span className="font-medium text-white">Minakshi Chaturvedi</span>,
          Computer Science (AI) students at <span className="text-cyan-300">Technocrats Institute of Technology, Bhopal</span>.
          <br /><br />
          Like most RGPV students, we’ve faced the struggle — late-night hunts for reliable notes, missing PYQs, and broken Drive links.
          That chaos inspired us to build something better.
        </p>

        <p className="text-base text-gray-300 mt-4">
          <span className="font-medium text-white">Ace RGPV</span> is not just a project — it’s our way of giving back to the student community.
          Every page, every note here was built with the hope that you won’t have to go through what we did.
        </p>

        <p className="text-base text-gray-300 mt-4">
          If this platform helped you, that’s the best reward we could ask for. And if you’ve got ideas or better resources — let’s connect and improve this together!
        </p>
        



        <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-300">Wanna Say Hi? 💌</h2>
        <p className="text-gray-300">
          Mail us at: <span className="text-cyan-300 underline">acergpv@gmail.com</span>
        </p>

        <p className="text-sm text-gray-500 mt-10 border-t pt-4">
          Disclaimer: We don’t own the content — we just organize and share what’s already floating around, to make your life easier 🫶
        </p>
      </div>
    </section>
  );
};

export default About;