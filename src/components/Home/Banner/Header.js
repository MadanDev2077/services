"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["About Us", "Product", "Services", "Resources"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const updateBodyOverflow = () => {
      document.body.style.overflowY = isOpen ? "hidden" : "auto";
    };

    document.addEventListener("mousedown", handleClickOutside);
    updateBodyOverflow();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <header className="w-full  py-4 sm:py-5 md:py-6 lg:py-8 xl:py-12 relative z-50 px-2  sm:px-5 lg:px-9 xl:px-14">
      <div className="mx-auto flex items-center justify-between">
        {/* Brand (can be replaced or removed) */}
        <div className="text-white font-bold text-xl flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <span className="text-lime-400 text-2xl font-extrabold">⚡</span>
          </div>
          Urit
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-16">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className=" text-sm font-medium text-[#ffffff82] transition-all duration-300 ease-in hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center"></div>

        {/* Burger Menu */}
        <div className="md:hidden flex items-center ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={` cursor-pointer text-white relative z-50`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 w-3/4 h-screen bg-[#252529] shadow-lg flex flex-col items-start gap-6 px-6 pt-20 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="text-white text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
