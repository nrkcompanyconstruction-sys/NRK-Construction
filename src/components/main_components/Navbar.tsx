"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsServicesOpen(false); // reset accordion when closing menu
  };

  return (
    <>
      <nav
        className="w-full flex items-center justify-between px-4 md:px-8 py-3 
       bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 shadow-[0_4px_30px_rgba(15,23,42,0.08)] border-b border-white/70 transition-all duration-300"
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/nrk_logo.png" 
            alt="Logo"
            width={56}
            height={56}
            className="h-10 w-10 sm:h-12 sm:w-12 transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:block text-slate-950 font-bold text-lg tracking-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
            NRK Construction
          </span>
        </Link>

        {/* Center: Desktop Menu */}
        <div
          className="hidden lg:flex items-center space-x-8 text-sm font-medium"
          style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
        >
          <Link href="/" className="text-slate-600 hover:text-orange-600 transition-colors py-2">
            Home
          </Link>
          <Link href="/about" className="text-slate-600 hover:text-orange-600 transition-colors py-2">
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-600 hover:text-orange-600 transition-colors py-2">
              Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.12)] border border-slate-100 p-2 flex flex-col gap-1">
                <Link href="/services/ais-gis-gss" className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium">
                  AIS, GIS & GSS Substations
                </Link>
                <Link href="/services/foundation-structural" className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium">
                  Foundation & Structural
                </Link>
                <Link href="/services/infrastructure" className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium">
                  Infrastructure Development
                </Link>
              </div>
            </div>
          </div>

          <Link href="/projects" className="text-slate-600 hover:text-orange-600 transition-colors py-2">
            Projects
          </Link>
          {/* <a href="#" className="text-slate-600 hover:text-orange-600 transition-colors py-2">
            Locations
          </a>
          <a href="#" className="text-slate-600 hover:text-orange-600 transition-colors py-2">
            Blog
          </a> */}
        </div>

        {/* Right: Search + Contact Button + Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Search Button */}
          {/* <button className="p-2 sm:p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">
            <Search size={16} className="sm:w-4 sm:h-4" />
          </button> */}
          
          {/* Contact Button - Hidden on small screens */}
          <Link 
            href="/#contact-form" 
            className="hidden sm:flex items-center gap-2 bg-slate-950 text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full font-bold text-sm hover:bg-slate-800 transition-colors shadow-[0_4px_14px_rgba(15,23,42,0.18)]"
            style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
          >
            Contact
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 sm:p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={16} className="sm:w-4 sm:h-4" /> : <Menu size={16} className="sm:w-4 sm:h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm" onClick={toggleMenu}>
          <div 
            className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-white/70 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-slate-100 bg-white/80 backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <Image src="/nrk_logo.png" alt="Logo" width={40} height={40} className="h-10 w-10" />
                <span className="font-bold text-lg text-slate-950" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>NRK</span>
              </div>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col py-6 px-4 space-y-1 pb-20" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              <Link 
                href="/" 
                className="px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pl-6 pr-4 py-2 flex flex-col gap-1 border-l-2 border-orange-100 ml-6 my-1">
                    <Link href="/services/ais-gis-gss" className="block py-2.5 px-3 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium" onClick={toggleMenu}>
                      AIS, GIS & GSS
                    </Link>
                    <Link href="/services/foundation-structural" className="block py-2.5 px-3 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium" onClick={toggleMenu}>
                      Foundation & Structural
                    </Link>
                    <Link href="/services/infrastructure" className="block py-2.5 px-3 rounded-lg text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium" onClick={toggleMenu}>
                      Infrastructure
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                href="/projects" 
                className="px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              {/* <a 
                href="#" 
                className="px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Locations
              </a>
              <a 
                href="#" 
                className="px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Blog
              </a> */}
              
              {/* Mobile Contact Button */}
              <div className="pt-6 mt-2 border-t border-slate-100">
                <Link 
                  href="/#contact-form" 
                  className="flex items-center justify-center gap-2 w-full bg-slate-950 text-white py-3.5 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-md"
                  onClick={toggleMenu}
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
