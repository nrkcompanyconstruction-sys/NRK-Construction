'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'
import { ArrowUpRight } from 'lucide-react'
import CursorGrid from '@/components/home_components/home-cmp/CursorGrid'

export default function AisGisGssPage() {
  return (
    <div className="relative min-h-screen bg-[#f3f6f8] pb-16" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
      {/* Full-page CursorGrid background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <CursorGrid
          cellSize={64}
          color="#111827"
          radius={170}
          falloff="smooth"
          holdTime={500}
          fadeDuration={900}
          lineWidth={1}
          maxOpacity={0.22}
          fillOpacity={0.025}
          gridOpacity={0.035}
          cellRadius={4}
          clickPulse={false}
          pulseSpeed={500}
        />
      </div>
      
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
            AIS, GIS & GSS Substations
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300/90 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
          >
            Complete civil construction works for high-voltage substations from 33 kV to 400 kV
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
            <h2 className="text-3xl font-bold text-slate-950 mb-6">What We Offer</h2>
            <div className="space-y-6 text-slate-600 text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              <p className="leading-relaxed">
                NRK specializes in comprehensive civil construction works for Air Insulated Substations (AIS), 
                Gas Insulated Substations (GIS), and Gas Insulated Switchgear Substations (GSS), handling 
                voltage levels from 33 kV to 400 kV.
              </p>
              <p className="leading-relaxed">
                Our expertise ensures the highest standards of reliability, safety, and efficiency in power 
                transmission and distribution infrastructure.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[36px] p-8 sm:p-12 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-950 mb-6">Key Services</h2>
            <ul className="space-y-4 text-slate-600 text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              {[
                "Complete site preparation and earthwork",
                "Equipment foundation construction",
                "Control room and relay room construction",
                "Cable trenches and ducts installation",
                "Switchyard civil works",
                "Fire protection systems installation"
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

        {/* Technical Specifications */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white rounded-[40px] p-10 sm:p-16 mb-20 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-12 text-center">Technical Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#f3f6f8] rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AIS Substations</h3>
              <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Air Insulated Substations with conventional equipment layout, suitable for 
                areas with adequate space availability.
              </p>
            </div>
            <div className="bg-[#f3f6f8] rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">GIS Substations</h3>
              <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Gas Insulated Substations for space-constrained urban areas, offering compact 
                and reliable solutions.
              </p>
            </div>
            <div className="bg-[#f3f6f8] rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">GSS Substations</h3>
              <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Gas Insulated Switchgear Substations combining the benefits of both AIS and GIS 
                technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-10 text-center">Why Choose NRK</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Experienced Team", desc: "Our team of engineers and construction professionals brings decades of combined experience in high-voltage substation construction." },
              { title: "Quality Standards", desc: "We adhere to international quality standards and follow stringent safety protocols throughout the construction process." },
              { title: "Timely Delivery", desc: "Our project management expertise ensures on-time completion without compromising on quality or safety." },
              { title: "End-to-End Solutions", desc: "From planning to execution and commissioning support, we provide comprehensive solutions for your substation needs." }
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
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              Contact us today to discuss your substation construction requirements
            </p>
            <Link 
              href="/#contact-form" 
              className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white group"
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
