'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'

function Home3() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Our expertise in<br />
          substation construction
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* AIS/GIS/GSS Substations */}
          <motion.div 
            className="bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 relative transition-all duration-300 ease-in-out h-full flex flex-col text-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white hover:-translate-y-1 hover:shadow-xl group"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-current stroke-2 group-hover:stroke-white" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <path d="M12 8v8"/>
                  <path d="M8 12h8"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">AIS, GIS & GSS Substations</h3>
              
              <p className="text-sm sm:text-base md:text-base leading-relaxed mb-auto opacity-90 group-hover:opacity-95">
                Complete civil construction works for AIS, GIS, and GSS substations 
                from 33 kV to 440 kV, ensuring reliable and high-quality infrastructure.
              </p>
              
              <div className="mt-4 sm:mt-6 md:mt-8 pt-2">
                <Link href="/services/ais-gis-gss">
                  <motion.span 
                    className="flex items-center gap-2 text-sm sm:text-base md:text-base font-semibold transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more
                    <HiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Foundation & Structural Works */}
          <motion.div 
            className="bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 relative transition-all duration-300 ease-in-out h-full flex flex-col text-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white hover:-translate-y-1 hover:shadow-xl group"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-current stroke-2 group-hover:stroke-white" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20h18"/>
                  <path d="M12 3v14"/>
                  <path d="M8 7l4-4 4 4"/>
                  <rect x="6" y="14" width="12" height="6"/>
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">Foundation & Structural Works</h3>
              
              <p className="text-sm sm:text-base md:text-base leading-relaxed mb-auto opacity-90 group-hover:opacity-95">
                Tower foundation construction, equipment foundations, control rooms, 
                cable trenches, and related structural works with precision engineering.
              </p>
              
              <div className="mt-4 sm:mt-6 md:mt-8 pt-2">
                <Link href="/services/foundation-structural">
                  <motion.span 
                    className="flex items-center gap-2 text-sm sm:text-base md:text-base font-semibold transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more
                    <HiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Infrastructure Development */}
          <motion.div 
            className="bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 relative transition-all duration-300 ease-in-out h-full flex flex-col text-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white hover:-translate-y-1 hover:shadow-xl group"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-current stroke-2 group-hover:stroke-white" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12h18"/>
                  <path d="M3 6h18"/>
                  <path d="M3 18h18"/>
                  <circle cx="6" cy="12" r="1"/>
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="18" cy="12" r="1"/>
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">Infrastructure Development</h3>
              
              <p className="text-sm sm:text-base md:text-base leading-relaxed mb-auto opacity-90 group-hover:opacity-95">
                Roads, drainage systems, earthfilling & cutting, boundary walls, 
                staff quarters, and complete building works within substation premises.
              </p>
              
              <div className="mt-4 sm:mt-6 md:mt-8 pt-2">
                <Link href="/services/infrastructure">
                  <motion.span 
                    className="flex items-center gap-2 text-sm sm:text-base md:text-base font-semibold transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more
                    <HiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home3