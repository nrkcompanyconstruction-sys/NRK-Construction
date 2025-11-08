'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'

export default function FoundationStructuralPage() {
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
            Foundation & Structural Works
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Precision-engineered foundation and structural solutions for power infrastructure
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
              <div className="space-y-4 text-gray-700">
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
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Services</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Transmission tower foundations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Equipment mounting structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Control room construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Cable trenches and ducts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Gantry and support structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Reinforced concrete structures</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Specialized Works */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialized Structural Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Tower Foundations</h3>
                <p className="text-gray-700">
                  Design and construction of foundations for transmission towers, including stub 
                  setting and chimney foundations with soil testing and analysis.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Equipment Foundations</h3>
                <p className="text-gray-700">
                  Specialized foundations for transformers, circuit breakers, isolators, and other 
                  heavy electrical equipment with vibration isolation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Building Structures</h3>
                <p className="text-gray-700">
                  Complete structural works for control rooms, relay rooms, battery rooms, and 
                  administrative buildings within substations.
                </p>
              </div>
            </div>
          </div>

          {/* Cable Management */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cable Management Infrastructure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cable Trenches</h3>
                <p className="text-gray-700 mb-4">
                  We construct comprehensive cable trench systems with proper depth, width, and routing 
                  to accommodate current and future cable requirements.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Reinforced concrete trenches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Proper drainage systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Cable support and laying</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Duct Banks</h3>
                <p className="text-gray-700 mb-4">
                  Installation of underground duct banks for power and control cables with proper 
                  spacing and protection measures.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>PVC/HDPE duct installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Manholes and hand holes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Cable pulling systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality & Standards */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Quality & Engineering Standards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design Excellence</h3>
                <p className="text-gray-700">
                  Our structural designs comply with IS codes, IEC standards, and client specifications, 
                  ensuring optimal load-bearing capacity and durability.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Material Quality</h3>
                <p className="text-gray-700">
                  We use high-grade concrete, reinforcement steel, and other materials that meet or 
                  exceed specified standards for long-lasting structures.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Soil Investigation</h3>
                <p className="text-gray-700">
                  Comprehensive geotechnical surveys and soil testing to determine optimal foundation 
                  design and construction methodology.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Precision</h3>
                <p className="text-gray-700">
                  Advanced construction techniques and quality control measures ensure dimensional 
                  accuracy and structural integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Foundation & Structural Solutions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how we can support your infrastructure project
          </p>
          <Link 
            href="/#contact-form" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}
