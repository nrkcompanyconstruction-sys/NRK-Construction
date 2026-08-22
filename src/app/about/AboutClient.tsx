'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'
import { ArrowUpRight } from 'lucide-react'
import CursorGrid from '@/components/home_components/home-cmp/CursorGrid'

export default function AboutPage() {
  const handleContactClick = () => {
    window.location.href = '/#contact-form'
  }

  return (
    <div className="relative min-h-screen bg-[#f3f6f8] pb-12" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
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
      <section className="relative overflow-hidden bg-[#06111f] text-white pt-32 pb-20 px-5 sm:px-8 lg:px-12 rounded-b-[40px] shadow-[0_28px_90px_rgba(6,17,31,0.15)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(249,115,22,0.16),transparent_31%),linear-gradient(90deg,rgba(2,6,14,0.94)_0%,rgba(2,6,14,0.80)_38%,rgba(2,6,14,0.30)_68%,rgba(2,6,14,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="relative z-10 max-w-[1780px] mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-10 transition-colors font-medium text-sm tracking-wide uppercase" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
            <HiArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 max-w-4xl leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About NRK Construction
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300/90 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
          >
            Building the backbone of India&apos;s power infrastructure with precision, discipline, and uncompromising reliability.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pt-16 pb-8 px-4 sm:px-8">
        <div className="max-w-[1780px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 items-stretch">
            
            {/* Our Story Card — dot-grid + corner glow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden bg-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-[0_22px_70px_rgba(15,23,42,0.06)] border border-slate-100/50"
            >
              {/* Dot-grid */}
              <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(15,23,42,0.075)_1px,transparent_1px)] [background-size:24px_24px]" />
              {/* Corner circle accent top-right */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange-400/[0.09] blur-3xl" />
              {/* Corner circle accent bottom-left */}
              <div className="pointer-events-none absolute -bottom-14 -left-14 h-48 w-48 rounded-full bg-sky-400/[0.07] blur-2xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-orange-600 mb-8">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-8 leading-tight">Forging a legacy in high-voltage infrastructure.</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                  <p>
                    NRK Construction has been at the forefront of electrical substation civil construction 
                    in India, delivering world-class infrastructure projects that power the nation&apos;s growth. 
                    With nearly two decades of field experience and an unwavering commitment to excellence, we have established 
                    ourselves as a trusted partner in the power sector.
                  </p>
                  <p>
                    Our journey began with a vision to contribute to India&apos;s power infrastructure development 
                    by providing high-quality civil construction services for electrical substations. Today, 
                    we are proud to have successfully executed numerous complex projects across various voltage levels, from 
                    33 kV to 765 kV, serving major utilities and industrial clients nationwide.
                  </p>
                  <p>
                    What sets us apart is our dedication to quality, safety, and rigorous execution. 
                    We combine technical expertise with modern construction methodologies to ensure that 
                    every foundation, powerhouse, and substation meets the absolute highest standards of endurance.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden bg-[#071320] text-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-[0_24px_90px_rgba(7,19,32,0.22)] border border-white/10 flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.20),transparent_32%),radial-gradient(circle_at_22%_80%,rgba(249,115,22,0.18),transparent_30%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
              
              <div className="relative z-10 grid grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">15<span className="text-orange-400">+</span></div>
                  <div className="text-slate-300 font-medium text-sm tracking-wide uppercase" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">31<span className="text-orange-400">+</span></div>
                  <div className="text-slate-300 font-medium text-sm tracking-wide uppercase" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">98<span className="text-orange-400">%</span></div>
                  <div className="text-slate-300 font-medium text-sm tracking-wide uppercase" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">500<span className="text-orange-400">+</span></div>
                  <div className="text-slate-300 font-medium text-sm tracking-wide uppercase" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Skilled Professionals</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 px-4 sm:px-8">
        <div className="max-w-[1780px] mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission Card — diagonal line pattern + top-right orange glow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-white rounded-[36px] p-8 sm:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.04)] border border-slate-100"
          >
            {/* Diagonal stripe pattern */}
            <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(135deg,rgba(15,23,42,0.04)_0px,rgba(15,23,42,0.04)_1px,transparent_1px,transparent_18px)]" />
            {/* Glow accent */}
            <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-orange-400/[0.10] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-sky-300/[0.06] blur-2xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 border border-orange-100">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                To deliver exceptional civil construction services for electrical substations that 
                meet the highest standards of quality, safety, and reliability. We are committed to 
                powering India&apos;s infrastructure growth by building robust foundations for the nation&apos;s 
                energy transmission network, while maintaining environmental sustainability and 
                fostering long-term partnerships with our clients.
              </p>
            </div>
          </motion.div>

          {/* Vision Card — dot-grid + blue glow accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden bg-white rounded-[36px] p-8 sm:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.04)] border border-slate-100"
          >
            {/* Dot-grid */}
            <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:20px_20px]" />
            {/* Glow accents */}
            <div className="pointer-events-none absolute -top-12 -left-12 h-44 w-44 rounded-full bg-sky-400/[0.09] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-orange-300/[0.07] blur-2xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 border border-orange-100">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                To be the most trusted and preferred partner for electrical substation civil 
                construction in India and beyond. We envision becoming a benchmark for quality, 
                innovation, and sustainable construction practices in the power sector, contributing 
                significantly to the development of resilient and future-ready energy infrastructure 
                that supports economic growth and improves lives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-[1780px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-orange-600 mb-6">
              Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
              The principles that guide everything we do in the field and in the office.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Quality Excellence",
                description: "Uncompromising commitment to delivering superior quality in every project we undertake."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Safety First",
                description: "Prioritizing the safety of our workforce, clients, and communities in all operations."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Integrity",
                description: "Maintaining the highest ethical standards and transparency in all our business dealings."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Innovation",
                description: "Embracing new technologies and methodologies to deliver cutting-edge solutions."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden bg-white rounded-[28px] p-8 border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Alternating pattern: even = dot-grid, odd = diagonal lines */}
                {index % 2 === 0 ? (
                  <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
                ) : (
                  <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(135deg,rgba(15,23,42,0.04)_0px,rgba(15,23,42,0.04)_1px,transparent_1px,transparent_16px)]" />
                )}
                {/* Corner glow — alternating orange/sky */}
                <div className={`pointer-events-none absolute rounded-full blur-2xl ${index % 2 === 0 ? '-top-10 -right-10 h-32 w-32 bg-orange-400/[0.09]' : '-top-10 -left-10 h-32 w-32 bg-sky-400/[0.09]'}`} />
                <div className={`pointer-events-none absolute rounded-full blur-xl ${index % 2 === 0 ? '-bottom-6 -left-6 h-24 w-24 bg-sky-300/[0.06]' : '-bottom-6 -right-6 h-24 w-24 bg-orange-300/[0.06]'}`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500 flex items-center justify-center mb-6 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-950">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Our Team */}
      <section className="py-8 px-4 sm:px-8">
        <div className="max-w-[1780px] mx-auto grid lg:grid-cols-[1fr_1fr] gap-8">
          
          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#06111f] text-white rounded-[36px] p-8 sm:p-12 shadow-[0_24px_90px_rgba(6,17,31,0.22)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_22%_80%,rgba(249,115,22,0.12),transparent_30%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose NRK</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Proven Track Record", desc: "Successfully completed 200+ projects across India." },
                  { title: "Technical Expertise", desc: "Deep domain knowledge for complex engineering tasks." },
                  { title: "Quality Assurance", desc: "Stringent quality control adhering to international standards." },
                  { title: "Timely Delivery", desc: "Strong project management ensuring on-time completion." }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-orange-500/50 pl-5">
                    <h3 className="text-lg font-bold mb-2 text-white/90">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Our Strength — dot-grid + corner glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden bg-white rounded-[36px] p-8 sm:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.04)] border border-slate-100"
          >
            {/* Dot-grid */}
            <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
            {/* Corner glow */}
            <div className="pointer-events-none absolute -top-14 -right-14 h-48 w-48 rounded-full bg-orange-400/[0.09] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-sky-400/[0.07] blur-2xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-8">Our Strength</h2>
              <div className="grid gap-6">
                {[
                  { title: "Engineering Team", count: "50+", desc: "Experienced civil and structural engineers with expertise in power infrastructure" },
                  { title: "Project Managers", count: "30+", desc: "Certified professionals ensuring seamless project execution" },
                  { title: "Skilled Workforce", count: "500+", desc: "Trained technicians and construction workers committed to quality" }
                ].map((team, index) => (
                  <div key={index} className="flex items-center gap-6 p-5 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <div className="text-3xl sm:text-4xl font-bold text-orange-500 min-w-[80px]">{team.count}</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 mb-1">{team.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>{team.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-[1780px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Certifications & Compliance</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              "ISO 9001:2015 Certified",
              "ISO 14001:2015 Environmental",
              "OHSAS 18001:2007 Safety",
              "Industry Compliance"
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden bg-white rounded-[24px] p-6 text-center border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
              >
                {/* Dot-grid */}
                <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(15,23,42,0.07)_1px,transparent_1px)] [background-size:16px_16px]" />
                {/* Centred top glow */}
                <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-orange-400/[0.10] blur-2xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange-100">
                    <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{cert}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 sm:px-8">
        <div className="max-w-[1780px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#071320] text-white rounded-[36px] py-16 px-8 text-center relative overflow-hidden shadow-[0_24px_90px_rgba(7,19,32,0.22)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ready to Work Together?</h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                Partner with us for your next substation construction project. Let&apos;s build the future, together.
              </p>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors shadow-[0_14px_35px_rgba(255,255,255,0.18)]"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  )
}
