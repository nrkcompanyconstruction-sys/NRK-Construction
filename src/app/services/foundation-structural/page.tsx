'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'
import { ArrowUpRight } from 'lucide-react'

export default function FoundationStructuralPage() {
  return (
    <div className="min-h-screen bg-[#f3f6f8] pb-16" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#06111f] text-white pt-32 pb-24 px-5 sm:px-8 lg:px-12 rounded-b-[40px] shadow-[0_28px_90px_rgba(6,17,31,0.15)] mb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(249,115,22,0.16),transparent_31%),linear-gradient(90deg,rgba(2,6,14,0.94)_0%,rgba(2,6,14,0.80)_38%,rgba(2,6,14,0.30)_68%,rgba(2,6,14,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="relative z-10 max-w-[1780px] mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-10 transition-colors font-medium text-sm tracking-wide uppercase" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
            <HiArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 max-w-4xl leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Foundation & Structural Works
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300/90 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
          >
            Precision-engineered foundation and structural solutions for power infrastructure
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1780px] mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-[36px] p-8 sm:p-12 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-950 mb-6">Our Expertise</h2>
            <div className="space-y-6 text-slate-600 text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              <p className="leading-relaxed">
                NRK provides comprehensive foundation and structural engineering services for power 
                transmission and distribution infrastructure. Our team specializes in designing and 
                constructing robust foundations that ensure the stability and longevity of critical 
                electrical infrastructure.
              </p>
              <p className="leading-relaxed">
                With precision engineering and adherence to the highest safety standards, we deliver 
                structural solutions that withstand the test of time and environmental challenges.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[36px] p-8 sm:p-12 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-950 mb-6">Core Services</h2>
            <ul className="space-y-4 text-slate-600 text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              {[
                "Transmission tower foundations",
                "Equipment mounting structures",
                "Control room construction",
                "Cable trenches and ducts",
                "Gantry and support structures",
                "Reinforced concrete structures"
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Specialized Works */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white rounded-[40px] p-10 sm:p-16 mb-20 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-12 text-center">Specialized Structural Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#f3f6f8] rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tower Foundations</h3>
              <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Design and construction of foundations for transmission towers, including stub 
                setting and chimney foundations with soil testing and analysis.
              </p>
            </div>
            <div className="bg-[#f3f6f8] rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Equipment Foundations</h3>
              <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Specialized foundations for transformers, circuit breakers, isolators, and other 
                heavy electrical equipment with vibration isolation.
              </p>
            </div>
            <div className="bg-[#f3f6f8] rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Building Structures</h3>
              <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Complete structural works for control rooms, relay rooms, battery rooms, and 
                administrative buildings within substations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cable Management */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-10 text-center">Cable Management Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)]"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Cable Trenches</h3>
              <p className="text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                We construct comprehensive cable trench systems with proper depth, width, and routing 
                to accommodate current and future cable requirements.
              </p>
              <ul className="space-y-3 text-slate-600" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                {["Reinforced concrete trenches", "Proper drainage systems", "Cable support and laying"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)]"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Duct Banks</h3>
              <p className="text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Installation of underground duct banks for power and control cables with proper 
                spacing and protection measures.
              </p>
              <ul className="space-y-3 text-slate-600" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                {["PVC/HDPE duct installation", "Manholes and hand holes", "Cable pulling systems"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Quality & Standards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-10 text-center">Quality & Engineering Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Design Excellence", desc: "Our structural designs comply with IS codes, IEC standards, and client specifications, ensuring optimal load-bearing capacity and durability." },
              { title: "Material Quality", desc: "We use high-grade concrete, reinforcement steel, and other materials that meet or exceed specified standards for long-lasting structures." },
              { title: "Soil Investigation", desc: "Comprehensive geotechnical surveys and soil testing to determine optimal foundation design and construction methodology." },
              { title: "Construction Precision", desc: "Advanced construction techniques and quality control measures ensure dimensional accuracy and structural integrity." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-lg hover:border-slate-200 transition-all flex gap-6"
              >
                <div className="w-1.5 h-full bg-orange-500 rounded-full shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 sm:px-8 lg:px-12 max-w-[1780px] mx-auto pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative bg-[#071320] rounded-[40px] overflow-hidden px-8 py-20 text-center shadow-2xl"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Foundation & Structural Solutions?</h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              Let&apos;s discuss how we can support your infrastructure project
            </p>
            <Link 
              href="/#contact-form" 
              className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white group"
            >
              Contact Our Team
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
