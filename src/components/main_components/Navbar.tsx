"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsServicesOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 left-0 right-0 mx-auto transition-all duration-300 ${
          scrolled 
            ? "top-4 max-w-[1780px] px-4" 
            : "top-0 w-full max-w-none px-0"
        }`}
      >
        <div
          className={`w-full flex items-center justify-between transition-all duration-300 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,5,12,0.55)] ${
          scrolled 
            ? "px-5 sm:px-6 lg:px-8 py-3.5 rounded-[28px] border border-white/10" 
            : "px-5 sm:px-8 lg:px-12 py-4 rounded-none border-b border-white/10"
          }`}
          style={{
            background:
              "linear-gradient(110deg, rgba(1, 6, 14, 0.98) 0%, rgba(3, 13, 24, 0.97) 52%, rgba(7, 25, 36, 0.95) 100%)",
          }}
        >
          {/* Left: Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/navbar_logo.jpg"
              alt="NRK Construction Company"
              width={280}
              height={102}
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Center: Desktop Menu */}
          <div
            className="hidden lg:flex items-center space-x-9 text-sm font-medium"
            style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
          >
            <Link href="/" className="text-slate-300 hover:text-white transition-colors py-2 relative group">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors py-2 relative group">
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-2 group-hover:text-white">
                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-orange-400" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#020912]/98 backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.55)] border border-white/10 p-2.5 flex flex-col gap-1.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.1),transparent_50%)] pointer-events-none" />
                  <Link href="/services/ais-gis-gss" className="relative z-10 block px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all font-medium">
                    AIS, GIS & GSS Substations
                  </Link>
                  <Link href="/services/foundation-structural" className="relative z-10 block px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all font-medium">
                    Foundation & Structural
                  </Link>
                  <Link href="/services/infrastructure" className="relative z-10 block px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all font-medium">
                    Infrastructure Development
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/projects" className="text-slate-300 hover:text-white transition-colors py-2 relative group">
              Projects
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </Link>
          </div>

          {/* Right: Contact Button + Mobile Menu Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Contact Button - Hidden on small screens */}
            <Link 
              href="/#contact-form" 
              className="hidden sm:flex items-center gap-2 bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-600 transition-all hover:scale-105 shadow-[0_4px_14px_rgba(249,115,22,0.4)]"
              style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
            >
              Contact Us
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/5"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-md" 
            onClick={toggleMenu}
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[280px] sm:w-[340px] bg-[#020912] shadow-2xl border-l border-white/10 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(249,115,22,0.1),transparent_50%)] pointer-events-none" />

              {/* Mobile Menu Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-[#020912]/95 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/navbar_logo.jpg"
                    alt="NRK Construction Company"
                    width={280}
                    height={102}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <button 
                  onClick={toggleMenu}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="relative z-10 flex flex-col py-8 px-5 space-y-2 pb-20" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                <Link 
                  href="/" 
                  className="px-4 py-3.5 rounded-2xl text-slate-300 hover:bg-white/10 hover:text-white transition-colors font-medium text-lg"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="px-4 py-3.5 rounded-2xl text-slate-300 hover:bg-white/10 hover:text-white transition-colors font-medium text-lg"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                
                {/* Mobile Services Accordion */}
                <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-slate-300 hover:text-white transition-colors font-medium text-lg"
                  >
                    Services
                    <ChevronDown size={18} className={`transition-transform duration-300 text-orange-400 ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isServicesOpen ? "max-h-60 opacity-100 mb-2" : "max-h-0 opacity-0"}`}>
                    <div className="pl-6 pr-4 py-2 flex flex-col gap-2 border-l border-white/10 ml-6 my-1">
                      <Link href="/services/ais-gis-gss" className="block py-2.5 px-3 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-colors font-medium" onClick={toggleMenu}>
                        AIS, GIS & GSS
                      </Link>
                      <Link href="/services/foundation-structural" className="block py-2.5 px-3 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-colors font-medium" onClick={toggleMenu}>
                        Foundation & Structural
                      </Link>
                      <Link href="/services/infrastructure" className="block py-2.5 px-3 rounded-xl text-slate-400 hover:bg-white/10 hover:text-white transition-colors font-medium" onClick={toggleMenu}>
                        Infrastructure
                      </Link>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/projects" 
                  className="px-4 py-3.5 rounded-2xl text-slate-300 hover:bg-white/10 hover:text-white transition-colors font-medium text-lg mt-2"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                
                {/* Mobile Contact Button */}
                <div className="pt-8 mt-4 border-t border-white/10">
                  <Link 
                    href="/#contact-form" 
                    className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-[0_4px_20px_rgba(249,115,22,0.3)]"
                    onClick={toggleMenu}
                  >
                    Contact Us
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
