'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'

export default function AisGisGssPage() {
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
            AIS, GIS & GSS Substations
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Complete civil construction works for high-voltage substations from 33 kV to 440 kV
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  NRK specializes in comprehensive civil construction works for Air Insulated Substations (AIS), 
                  Gas Insulated Substations (GIS), and Gas Insulated Switchgear Substations (GSS), handling 
                  voltage levels from 33 kV to 440 kV.
                </p>
                <p className="leading-relaxed">
                  Our expertise ensures the highest standards of reliability, safety, and efficiency in power 
                  transmission and distribution infrastructure.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Services</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Complete site preparation and earthwork</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Equipment foundation construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Control room and relay room construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Cable trenches and ducts installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Switchyard civil works</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Fire protection systems installation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">AIS Substations</h3>
                <p className="text-gray-700">
                  Air Insulated Substations with conventional equipment layout, suitable for 
                  areas with adequate space availability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">GIS Substations</h3>
                <p className="text-gray-700">
                  Gas Insulated Substations for space-constrained urban areas, offering compact 
                  and reliable solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">GSS Substations</h3>
                <p className="text-gray-700">
                  Gas Insulated Switchgear Substations combining the benefits of both AIS and GIS 
                  technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose NRK</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Team</h3>
                <p className="text-gray-700">
                  Our team of engineers and construction professionals brings decades of combined 
                  experience in high-voltage substation construction.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Standards</h3>
                <p className="text-gray-700">
                  We adhere to international quality standards and follow stringent safety protocols 
                  throughout the construction process.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
                <p className="text-gray-700">
                  Our project management expertise ensures on-time completion without compromising 
                  on quality or safety.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Solutions</h3>
                <p className="text-gray-700">
                  From planning to execution and commissioning support, we provide comprehensive 
                  solutions for your substation needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your substation construction requirements
          </p>
          <Link 
            href="/#contact-form" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
