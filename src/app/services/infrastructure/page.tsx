'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'
import { ArrowUpRight } from 'lucide-react'

export default function InfrastructurePage() {
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
            Infrastructure Development
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300/90 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
          >
            Complete infrastructure solutions for modern substation facilities
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
            <h2 className="text-3xl font-bold text-slate-950 mb-6">Comprehensive Solutions</h2>
            <div className="space-y-6 text-slate-600 text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              <p className="leading-relaxed">
                NRK offers end-to-end infrastructure development services for electrical substations, 
                including roads, drainage systems, earthwork, and building construction. Our integrated 
                approach ensures all infrastructure elements work harmoniously.
              </p>
              <p className="leading-relaxed">
                We understand that a substation requires more than just electrical infrastructure. From 
                access roads to staff facilities, we deliver complete solutions that support operational 
                efficiency and personnel comfort.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[36px] p-8 sm:p-12 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-950 mb-6">Our Services</h2>
            <ul className="space-y-4 text-slate-600 text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              {[
                "Internal road construction",
                "Drainage and water management",
                "Earthfilling and cutting works",
                "Boundary walls and fencing",
                "Staff quarters and facilities",
                "Administrative buildings"
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

        {/* Service Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white rounded-[40px] p-10 sm:p-16 mb-20 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-12 text-center">Infrastructure Categories</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#f3f6f8] rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Civil Works</h3>
              <p className="text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Complete site preparation, grading, earthwork, and foundation work for various 
                infrastructure elements.
              </p>
              <ul className="space-y-3 text-slate-600 text-sm font-medium uppercase tracking-wider" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Site leveling & grading</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Excavation & backfilling</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Soil compaction</li>
              </ul>
            </div>
            
            <div className="bg-[#f3f6f8] rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Roads & Drainage</h3>
              <p className="text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Internal road networks, parking areas, and comprehensive drainage systems for 
                rainwater management.
              </p>
              <ul className="space-y-3 text-slate-600 text-sm font-medium uppercase tracking-wider" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Concrete/asphalt roads</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Storm water drains</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Culverts & channels</li>
              </ul>
            </div>
            
            <div className="bg-[#f3f6f8] rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Buildings</h3>
              <p className="text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Construction of all building facilities including control rooms, staff quarters, 
                and amenity blocks.
              </p>
              <ul className="space-y-3 text-slate-600 text-sm font-medium uppercase tracking-wider" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> RCC structures</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> MEP installations</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Interior finishing</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Detailed Services */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-10 text-center">Detailed Service Offerings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Roads */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Road Construction</h3>
              <div className="grid gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Internal Roads</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    We construct durable internal roads using concrete or 
                    asphalt, designed to handle heavy equipment movement.
                  </p>
                  <ul className="space-y-2 text-slate-500 text-sm" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    <li>• Heavy-duty pavement design</li>
                    <li>• Proper sub-base preparation</li>
                    <li>• Road marking and signage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Access & Service Roads</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    Connection roads from main highways to substations, including turning circles 
                    and parking areas.
                  </p>
                  <ul className="space-y-2 text-slate-500 text-sm" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    <li>• All-weather access</li>
                    <li>• Adequate load-bearing capacity</li>
                    <li>• Proper drainage integration</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Drainage */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Drainage Systems</h3>
              <div className="grid gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Storm Water Management</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    Comprehensive storm water drainage systems to protect electrical equipment and 
                    infrastructure.
                  </p>
                  <ul className="space-y-2 text-slate-500 text-sm" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    <li>• Surface drainage channels</li>
                    <li>• Underground drainage pipes</li>
                    <li>• Catch basins and manholes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Oil & Water Separation</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    Specialized drainage for transformer oil containment and separation, ensuring 
                    environmental compliance.
                  </p>
                  <ul className="space-y-2 text-slate-500 text-sm" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    <li>• Oil containment pits</li>
                    <li>• Soak pits and separators</li>
                    <li>• Drainage to treatment facilities</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Earthwork */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col h-full md:col-span-2"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Earthwork & Land Development</h3>
              <p className="text-slate-600 mb-10 max-w-3xl leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Site preparation is critical for substation construction. We handle all aspects of 
                earthwork to create a level, stable platform for infrastructure.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-6 rounded-[24px]">
                  <h4 className="font-bold text-slate-900 mb-3">Earthfilling</h4>
                  <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    Controlled filling operations using approved materials with proper compaction 
                    to achieve required levels.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-[24px]">
                  <h4 className="font-bold text-slate-900 mb-3">Earthcutting</h4>
                  <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    Precise excavation and cutting work to achieve design grades, with proper 
                    slope stabilization measures.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-[24px]">
                  <h4 className="font-bold text-slate-900 mb-3">Compaction</h4>
                  <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    Layer-by-layer compaction testing and quality assurance to meet specified 
                    density requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Security Infrastructure */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-10 text-center">Security & Perimeter Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-[#071320] text-white rounded-[32px] p-8 sm:p-12 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition-all duration-700 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Boundary Walls</h3>
                <p className="text-slate-300 mb-8 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                  Robust perimeter walls with adequate height and strength to ensure security and safety 
                  of the substation facility.
                </p>
                <ul className="space-y-4 text-slate-200" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> RCC/Masonry construction</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Security fencing on top</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Proper foundation depth</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Gates and access control</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#071320] text-white rounded-[32px] p-8 sm:p-12 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 blur-[80px] rounded-full group-hover:bg-sky-500/20 transition-all duration-700 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Security Features</h3>
                <p className="text-slate-300 mb-8 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                  Integrated security infrastructure including guard rooms, CCTV mounting structures, 
                  and lighting installations.
                </p>
                <ul className="space-y-4 text-slate-200" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Security cabin construction</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> CCTV pole foundations</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Perimeter lighting</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Vehicle barrier systems</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose NRK */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-10 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Integrated Planning", desc: "We coordinate all infrastructure elements from the design stage to ensure optimal layout, functionality, and cost-effectiveness." },
              { title: "Quality Materials", desc: "Only approved, tested materials are used in construction, ensuring durability and minimal maintenance requirements." },
              { title: "Timely Execution", desc: "Our experienced project teams ensure all infrastructure work is completed on schedule without compromising quality." },
              { title: "Sustainable Solutions", desc: "We incorporate environmental considerations, rainwater harvesting, and energy-efficient designs wherever possible." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Build Complete Infrastructure Solutions</h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              Partner with us for comprehensive substation infrastructure development
            </p>
            <Link 
              href="/#contact-form" 
              className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white group"
            >
              Discuss Your Project
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
