import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isScrolled
          ? "bg-[#0F172A]/80 backdrop-blur-sm shadow-md border-b border-cyan-500/10"
          : "bg-[#0F172A] shadow-md border-b border-cyan-500/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-extrabold text-cyan-400 drop-shadow-[0_1px_5px_rgba(0,255,255,0.3)]">
          <svg className="w-7 h-7 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L2 7h16L10 2z" />
          </svg>
          AceRGPV
        </div>

        <ul className="flex gap-8 text-cyan-100 font-semibold text-md">
          <li>
            <Link to="/" className="hover:text-cyan-400 hover:underline underline-offset-4 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400 hover:underline underline-offset-4 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to= "/books" className="hover:text-cyan-400 hover:underline underline-offset-4 transition duration-200">
              Books
            </Link>
          </li>
          <li>
            <Link to="/pyq" className="hover:text-cyan-400 hover:underline underline-offset-4 transition duration-200">
              PYQs
            </Link>
          </li>
          <li>
            <Link to="/lectures" className="hover:text-cyan-400 hover:underline underline-offset-4 transition duration-200">
              Lectures
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
