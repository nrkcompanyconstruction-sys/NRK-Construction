"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Home5() {
  const [expandedCard, setExpandedCard] = useState<number | null>(1) // Default to first card expanded

  const trustPoints = [
    {
      id: 1,
      title: "Nearly 20 years of team experience",
      content: {
        title: "Proven expertise since 2004",
        description: "Our team brings nearly 20 years of experience in executing substation projects, starting from tower foundation works in 2004 and expanding to complete civil works."
      }
    },
    {
      id: 2,
      title: "Specialized in power infrastructure",
      content: {
        title: "Complete substation solutions",
        description: "We specialize in AIS, GIS, and GSS substations from 33 kV to 440 kV, delivering reliable and high-quality construction for all types of substation requirements."
      }
    },
    {
      id: 3,
      title: "On-time delivery & quality standards",
      content: {
        title: "Trusted partner in power sector",
        description: "Established reputation for delivering projects on time with strong technical expertise and consistently adhering to safety and quality standards."
      }
    }
  ]

  const toggleCard = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
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

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const expandedContentVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto" as const,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <div className="bg-gray-50 my-10 sm:my-16 lg:my-20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            variants={leftContentVariants}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
                Why power companies trust NRK Construction?
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                With nearly 20 years of team experience in substation construction, we deliver 
                high-quality, reliable infrastructure for power substations. Our expertise spans 
                AIS, GIS, and GSS substations from 33 kV to 440 kV, ensuring excellence in every project.
              </p>
              <motion.button 
                onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  contactForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Start your project</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Expandable Cards */}
          <div className="space-y-3 sm:space-y-4">
            {trustPoints.map((point, index) => (
              <motion.div 
                key={point.id} 
                className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden"
                variants={cardVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                {/* Card Header */}
                <button
                  onClick={() => toggleCard(point.id)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-black pr-3 sm:pr-4 leading-snug">
                    {point.title}
                  </span>
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center">
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transform transition-transform ${expandedCard === point.id ? 'rotate-45' : 'rotate-0'} sm:w-4 sm:h-4`}
                      >
                        <path d="M8 1V15M1 8H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedCard === point.id && (
                    <motion.div 
                      className="text-white p-4 sm:p-6 relative" 
                      style={{ backgroundColor: '#F9773B' }}
                      variants={expandedContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                    {/* Close button */}
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 pr-8 sm:pr-10">
                      {point.content.title}
                    </h3>
                      <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                        {point.content.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home5