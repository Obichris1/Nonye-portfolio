import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/company/logo.webp";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1F3A]/95 shadow-[0_1px_0_rgba(201,168,76,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 md:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          {/* Monogram mark — shown when no logo image */}
          <div className="w-9 h-9 border border-[#C9A84C] rounded-md flex items-center justify-center text-[#C9A84C] font-serif font-bold text-base tracking-tight">
            CC
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-[15px] font-serif">
              Chinonye <span className="hidden sm:inline">Chukwunenye</span>
            </span>
            <span className="text-[#C9A84C] text-[9px] font-medium tracking-[2px] uppercase">
              Chartered Accountant
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`relative text-[12px] font-medium tracking-[0.8px] uppercase transition-colors duration-200
                  after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-[#C9A84C] after:transition-all after:duration-200
                  ${active === nav.title
                    ? "text-white after:w-full"
                    : "text-[#9BADC4] hover:text-white after:w-0 hover:after:w-full"
                  }`}
              >
                {nav.title}
              </a>
            </li>
          ))}

          {/* CTA link */}
          <li>
            <a
              href="#contact"
              className="text-[11px] font-semibold tracking-[1.2px] uppercase text-[#C9A84C] border border-[#C9A84C]/40 px-4 py-2 rounded hover:bg-[#C9A84C] hover:text-[#0B1F3A] transition-all duration-200"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile dropdown */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } flex-col p-6 bg-[#0B1F3A] border border-[#C9A84C]/20 absolute top-20 right-4 mx-0 min-w-[180px] z-10 rounded-xl shadow-xl`}
          >
            <ul className="list-none flex flex-col gap-5">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => { setToggle(false); setActive(nav.title); }}
                    className={`text-[13px] font-medium tracking-[0.8px] uppercase transition-colors duration-200 ${
                      active === nav.title ? "text-[#C9A84C]" : "text-[#9BADC4] hover:text-white"
                    }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-[11px] font-semibold tracking-[1.2px] uppercase text-[#C9A84C]"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;