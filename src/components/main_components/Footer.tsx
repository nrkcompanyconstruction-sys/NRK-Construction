import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Youtube, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="relative mx-3 sm:mx-5 lg:mx-8 mb-5 sm:mb-8 mt-16 sm:mt-20">
      {/* Main Footer */}
      <footer className="relative overflow-hidden bg-[#06111f] text-white rounded-[28px] sm:rounded-[40px] border border-white/10 shadow-[0_28px_90px_rgba(6,17,31,0.20)] px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24 lg:py-28">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(249,115,22,0.12),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.08),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        
        {/* Huge Watermark */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] sm:text-[14rem] md:text-[22rem] lg:text-[28rem] xl:text-[34rem] font-bold text-white/[0.02] pointer-events-none select-none z-0 leading-none whitespace-nowrap"
          style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
        >
          NRK
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-0">
          
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col space-y-8 max-w-xl">
            <div className="flex items-center space-x-4">
              <Image src="/nrk_logo.png" alt="Logo" width={64} height={64} className="h-12 w-12 sm:h-16 sm:w-16" />
              <span className="font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
                NRK Construction
              </span>
            </div>
            <p className="text-slate-300/85 text-base sm:text-lg lg:text-xl leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              Powering modern infrastructure with precision construction. Dependable execution for high-voltage infrastructure across the nation.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-5 pt-4">
              <a href="#" className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <Youtube size={24} className="text-white/80" />
              </a>
              <a href="#" className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <Instagram size={24} className="text-white/80" />
              </a>
              <a href="#" className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <Twitter size={24} className="text-white/80" />
              </a>
            </div>
          </div>

          {/* Right: Links */}
          <div className="grid grid-cols-2 gap-12 sm:gap-20 md:gap-24 lg:pl-16">
            {/* Column 1 */}
            <div className="flex flex-col space-y-5">
              <h4 className="text-white/90 font-bold tracking-widest text-base sm:text-lg uppercase mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Company</h4>
              <Link href="/about" className="text-slate-400 hover:text-orange-400 transition-colors text-base sm:text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>About Us</Link>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-base sm:text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Services</a>
              <Link href="/projects" className="text-slate-400 hover:text-orange-400 transition-colors text-base sm:text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Projects</Link>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col space-y-5">
              <h4 className="text-white/90 font-bold tracking-widest text-base sm:text-lg uppercase mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Resources</h4>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-base sm:text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Tools & Info</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-base sm:text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Blog</a>
              <Link href="/#contact-form" className="text-slate-400 hover:text-orange-400 transition-colors text-base sm:text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="relative z-10 mt-20 sm:mt-28 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400/70 text-sm sm:text-base text-center md:text-left" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
            © {new Date().getFullYear()} NRK Construction Company. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-slate-400/70 text-sm sm:text-base" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
