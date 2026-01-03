import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* Name */}
        <h2 className="text-xl font-semibold tracking-wide">
          Erdenetugs • Portfolio
        </h2>

        {/* Social icons */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/e.erdenetugs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram size={26} />
          </a>

          <a
            href="https://www.facebook.com/batuka.batka.10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaFacebook size={26} />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition transform hover:scale-110"
          >
            <FaYoutube size={26} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gray-600"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Erdenetugs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
