'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'

export default function AboutPage() {
  const handleContactClick = () => {
    // Navigate to home page with hash
    window.location.href = '/#contact-form'
  }

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors">
            <HiArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About NRK
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building the backbone of India&apos;s power infrastructure with excellence and reliability
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  NRK Construction has been at the forefront of electrical substation civil construction 
                  in India, delivering world-class infrastructure projects that power the nation&apos;s growth. 
                  With years of experience and unwavering commitment to excellence, we have established 
                  ourselves as a trusted partner in the power sector.
                </p>
                <p>
                  Our journey began with a vision to contribute to India&apos;s power infrastructure development 
                  by providing high-quality civil construction services for electrical substations. Today, 
                  we are proud to have completed numerous projects across various voltage levels, from 
                  33 kV to 440 kV, serving utilities and industrial clients nationwide.
                </p>
                <p>
                  What sets us apart is our dedication to quality, safety, and timely project delivery. 
                  We combine technical expertise with modern construction methodologies to ensure that 
                  every project meets the highest standards of excellence.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 md:p-12"
            >
              <div className="space-y-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">15+</div>
                  <div className="text-gray-700 font-medium">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">200+</div>
                  <div className="text-gray-700 font-medium">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">98%</div>
                  <div className="text-gray-700 font-medium">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-gray-700 font-medium">Skilled Professionals</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver exceptional civil construction services for electrical substations that 
                meet the highest standards of quality, safety, and reliability. We are committed to 
                powering India&apos;s infrastructure growth by building robust foundations for the nation&apos;s 
                energy transmission network, while maintaining environmental sustainability and 
                fostering long-term partnerships with our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred partner for electrical substation civil 
                construction in India and beyond. We envision becoming a benchmark for quality, 
                innovation, and sustainable construction practices in the power sector, contributing 
                significantly to the development of resilient and future-ready energy infrastructure 
                that supports economic growth and improves lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
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
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-300 group"
              >
                <div className="text-orange-500 group-hover:text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NRK</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              What makes us the preferred partner for substation construction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Track Record",
                description: "Successfully completed 200+ projects across India, establishing us as a reliable partner in the power infrastructure sector."
              },
              {
                title: "Technical Expertise",
                description: "Our team of experienced engineers and construction professionals brings deep domain knowledge to every project."
              },
              {
                title: "Quality Assurance",
                description: "Stringent quality control processes and adherence to international standards ensure superior project outcomes."
              },
              {
                title: "Timely Delivery",
                description: "Strong project management capabilities and efficient execution ensure on-time project completion."
              },
              {
                title: "Safety Culture",
                description: "Zero-compromise approach to safety with comprehensive training programs and strict safety protocols."
              },
              {
                title: "Client Partnership",
                description: "Building long-term relationships through transparent communication, reliability, and exceptional service."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-4 border-orange-500 pl-6"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Strength</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A team of dedicated professionals committed to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Engineering Team",
                count: "50+",
                description: "Experienced civil and structural engineers with expertise in power infrastructure"
              },
              {
                title: "Project Managers",
                count: "30+",
                description: "Certified professionals ensuring seamless project execution and timely delivery"
              },
              {
                title: "Skilled Workforce",
                count: "500+",
                description: "Trained technicians and construction workers committed to quality and safety"
              }
            ].map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg"
              >
                <div className="text-5xl font-bold text-orange-600 mb-2">{team.count}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{team.title}</h3>
                <p className="text-gray-600 leading-relaxed">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Committed to maintaining the highest industry standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="bg-white rounded-2xl p-6 text-center shadow-md"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-white/90 mb-8">
            Partner with us for your next substation construction project
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}
