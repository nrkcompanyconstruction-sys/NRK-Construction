"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="w-full flex items-center justify-between px-4 md:px-8 py-1 
       bg-white/30 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm"
      >
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/nrk_logo.png" 
            alt="Logo"
            width={80}
            height={80}
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
          />
        </div>

        {/* Center: Desktop Menu */}
        <div
          className="hidden lg:flex space-x-6 xl:space-x-8 text-sm xl:text-base font-medium"
          style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
        >
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            About
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            Services
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            Projects
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            Locations
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            Blog
          </a>
        </div>

        {/* Right: Search + Contact Button + Mobile Menu Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search Button */}
          <button className="p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Search size={14} className="sm:w-4 sm:h-4" />
          </button>
          
          {/* Contact Button - Hidden on small screens */}
          <button className="hidden sm:block bg-black text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
            Contact
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={14} className="sm:w-4 sm:h-4" /> : <Menu size={14} className="sm:w-4 sm:h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleMenu}>
          <div 
            className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-2">
                <Image src="/nrk_logo.png" alt="Logo" width={32} height={32} className="h-8 w-8" />
                <span className="font-semibold text-lg">NRK Construction</span>
              </div>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col py-6">
              <a 
                href="#" 
                className="px-6 py-3 text-black hover:bg-gray-50 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#" 
                className="px-6 py-3 text-black hover:bg-gray-50 transition-colors font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#" 
                className="px-6 py-3 text-black hover:bg-gray-50 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#" 
                className="px-6 py-3 text-black hover:bg-gray-50 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a 
                href="#" 
                className="px-6 py-3 text-black hover:bg-gray-50 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Locations
              </a>
              <a 
                href="#" 
                className="px-6 py-3 text-black hover:bg-gray-50 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Blog
              </a>
              
              {/* Mobile Contact Button */}
              <div className="px-6 pt-4">
                <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
