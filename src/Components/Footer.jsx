import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { navLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071628] border-t border-[#C9A84C]/15">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-14">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#C9A84C]/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 border border-[#C9A84C] rounded-md flex items-center justify-center text-[#C9A84C] font-serif font-bold text-base">
                CC
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold font-serif text-[15px]">
                  Chinonye Chukwunenye
                </span>
                <span className="text-[#C9A84C] text-[9px] font-medium tracking-[2px] uppercase">
                  Chartered Accountant
                </span>
              </div>
            </div>
            <p className="text-[#9BADC4] text-sm leading-relaxed max-w-[240px]">
              Delivering precise, independent financial expertise to businesses and individuals across Africa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[2.5px] uppercase text-[#C9A84C] mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className="text-[13px] text-[#9BADC4] hover:text-white transition-colors duration-200"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[2.5px] uppercase text-[#C9A84C] mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:chinonye.chukwunenye@email.com"
                  className="flex items-center gap-3 text-[13px] text-[#9BADC4] hover:text-white transition-colors duration-200"
                >
                  <AiOutlineMail className="text-[#C9A84C] flex-shrink-0" />
                  chinonye.chukwunenye@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348000000000"
                  className="flex items-center gap-3 text-[13px] text-[#9BADC4] hover:text-white transition-colors duration-200"
                >
                  <AiOutlinePhone className="text-[#C9A84C] flex-shrink-0" />
                  +234 800 000 0000
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/chinonye-chukwunenye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[13px] text-[#9BADC4] hover:text-white transition-colors duration-200"
                >
                  <AiOutlineLinkedin className="text-[#C9A84C] flex-shrink-0" />
                  LinkedIn Profile
                </a>
              </li>
            </ul>

            {/* Credentials */}
            <div className="mt-6 flex gap-2">
              {["ICAN", "ACCA", "ACA"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[#C9A84C] border border-[#C9A84C]/30 px-2.5 py-1 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-[11px] text-[#4A6080]">
            © {currentYear} Chinonye Chukwunenye. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <p className="text-[11px] text-[#4A6080]">
              Designed by oxris solutions
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;