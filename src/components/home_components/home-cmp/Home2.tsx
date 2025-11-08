'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

function Home2() {
  const router = useRouter()

  const handleAboutClick = () => {
    router.push('/about')
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const tabVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.8 },
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

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        type: "spring" as const,
        stiffness: 200
      }
    }
  }

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Orange tab */}
        <motion.div 
          className="absolute -top-3 sm:-top-4 lg:-top-6 left-2 sm:left-4 lg:left-8 z-10"
          variants={tabVariants}
        >
          <span className="inline-block bg-white text-orange-500 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-5 shadow-sm">
            About us
          </span>
        </motion.div>

        {/* Rounded panel */}
        <motion.div 
          className="mt-6 sm:mt-8 lg:mt-6 bg-gray-50 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-6 sm:p-8 lg:p-12 xl:p-16 shadow-sm pb-16 sm:pb-8 lg:pb-12 xl:pb-16"
          variants={panelVariants}
        >
          <div className="max-w-5xl mx-auto">
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 leading-tight sm:leading-snug md:leading-snug text-justify"
              variants={textVariants}
            >
              NRK Construction Company specializes in civil construction works for power substations. 
              With nearly 20 years of experience in executing substation projects of various capacities, 
              we deliver reliable and high-quality construction for AIS, GIS, and GSS substations ranging 
              from 33 kV to 440 kV, making us a trusted partner in the power infrastructure sector.
            </motion.p>
          </div>
        </motion.div>

        {/* Floating button at bottom-right */}
        <motion.div 
          className="absolute right-2 sm:right-0 lg:right-0 bottom-2 sm:bottom-4 lg:bottom-6 transform translate-x-0 sm:translate-x-2 lg:translate-x-6"
          variants={buttonVariants}
        >
          <motion.button
            onClick={handleAboutClick}
            aria-label="Go to About Us page"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-md bg-black text-white flex items-center justify-center border-2 sm:border-4 border-white shadow-md hover:bg-gray-800 transition-colors cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M13 5L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 5H13V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home2