'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

function Home1() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, x: -50, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.5
      }
    }
  }

  const arrowVariants = {
    hidden: { opacity: 0, x: 50, rotate: 10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.6
      }
    }
  }

  const statsVariants = {
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

  return (
    <div className="min-h-screen bg-white flex items-center pt-20 sm:pt-16 lg:pt-0" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
      <div className="max-w-7xl mx-auto mt-4 sm:mt-8 lg:mt-25 px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight" 
              style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Powering infrastructure
              </motion.span>
              <br />
              <motion.span 
                className="text-black"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                With reliable construction
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-gray-600 text-base sm:text-lg max-w-md leading-relaxed" 
              style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
              variants={itemVariants}
            >
              NRK Construction Company specializes in civil construction works for power substations, delivering excellence with nearly 20 years of experience.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <motion.button 
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base" 
                style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  contactForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Start project
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
              
            </motion.div>
            
            {/* Statistics */}
            <motion.div 
              className="flex flex-col xs:flex-row sm:flex-row gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8"
              variants={statsVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="text-center xs:text-left"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black" 
                  style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  38+
                </motion.div>
                <div className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Major Projects</div>
              </motion.div>
              <motion.div 
                className="text-center xs:text-left"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black" 
                  style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  15+
                </motion.div>
                <div className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center xs:text-left"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black" 
                  style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  2
                </motion.div>
                <div className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Ongoing Projects</div>
              </motion.div>
            </motion.div>
          </motion.div>


          {/* Right Content - Image and Elements */}
          <motion.div 
            className="relative flex justify-center mt-8 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Main Image Container with rounded corners */}
              <motion.div 
                className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden aspect-[3/4] bg-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/man.webp"
                  alt="Construction worker"
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* NRK Badge - positioned outside top-left */}
              <motion.div 
                className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-orange-500 text-white px-3 sm:px-5 py-2 sm:py-4 rounded-[15px] sm:rounded-[20px] shadow-lg"
                variants={badgeVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-lg sm:text-xl font-bold leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>NRK</div>
                <div className="text-xs sm:text-sm font-semibold leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Construction</div>
                <div className="text-xs sm:text-sm font-semibold leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Company</div>
              </motion.div>
              
              {/* Arrow Button - positioned outside bottom-right */}
              <motion.div 
                className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-black text-white p-3 sm:p-4 rounded-[15px] sm:rounded-[20px] hover:bg-gray-800 transition-colors cursor-pointer shadow-lg"
                variants={arrowVariants}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home1