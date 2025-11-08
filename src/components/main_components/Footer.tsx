import React from "react";
import Image from "next/image";
import { Youtube, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="relative mx-2 sm:mx-4 my-4 sm:my-6">
      {/* Main Footer */}
      <footer className="bg-black text-white rounded-2xl sm:rounded-3xl px-4 sm:px-8 md:px-12 lg:px-13 py-6 sm:py-8 md:py-10 lg:py-13">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-start lg:items-center h-full">
          
          {/* Left: Tagline + Logo */}
          <div className="flex flex-col justify-between space-y-4 md:space-y-8 lg:space-y-12 order-2 md:order-1">
            <p className="text-white text-xs sm:text-sm font-normal">
              Powering infrastructure with reliable construction
            </p>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image src="/nrk_logo.png" alt="Logo" width={32} height={32} className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="font-bold text-lg sm:text-xl">NRK Construction</span>
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-wrap justify-center sm:justify-start md:justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-white text-xs sm:text-sm font-medium order-1 md:order-2">
            <a href="#" className="hover:text-gray-300 transition-colors whitespace-nowrap">About</a>
            <a href="#" className="hover:text-gray-300 transition-colors whitespace-nowrap">Services</a>
            <a href="#" className="hover:text-gray-300 transition-colors whitespace-nowrap">Projects</a>
            <a href="#" className="hover:text-gray-300 transition-colors whitespace-nowrap">Tools & resources</a>
            <a href="#" className="hover:text-gray-300 transition-colors whitespace-nowrap">Contact</a>
          </div>

          {/* Right: Copyright */}
          <div className="text-white text-xs sm:text-sm font-normal text-center md:text-right order-3 md:order-3 max-w-full md:max-w-xs lg:max-w-none">
            <span className="hidden sm:inline">Copyright © 2019 NRK Construction Company | All Rights Reserved</span>
            <span className="sm:hidden">© 2019 NRK Construction</span>
          </div>
        </div>
      </footer>

      {/* Social Icons - Outside the black footer */}
      <div className="absolute -bottom-3 sm:-bottom-4 right-4 sm:right-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
        <a
          href="#"
          className="p-2 sm:p-3 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
        >
          <Youtube size={16} className="sm:w-5 sm:h-5 text-black" />
        </a>
        <a
          href="#"
          className="p-2 sm:p-3 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
        >
          <Instagram size={16} className="sm:w-5 sm:h-5 text-black" />
        </a>
        <a
          href="#"
          className="p-2 sm:p-3 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
        >
          <Twitter size={16} className="sm:w-5 sm:h-5 text-black" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
