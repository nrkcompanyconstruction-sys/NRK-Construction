"use client"
import React, { useState } from 'react'

function Home5() {
  const [expandedCard, setExpandedCard] = useState<number | null>(1) // Default to first card expanded

  const trustPoints = [
    {
      id: 1,
      title: "20+ Years of construction experience",
      content: {
        title: "On-time & budget-friendly execution",
        description: "We prioritize efficient planning and cost-effective solutions to meet deadlines without exceeding budgets."
      }
    },
    {
      id: 2,
      title: "Licensed, insured, and industry-certified",
      content: {
        title: "Professional certifications & insurance",
        description: "Our team holds all necessary licenses and certifications, backed by comprehensive insurance coverage for your peace of mind."
      }
    },
    {
      id: 3,
      title: "Sustainable & modern building practices",
      content: {
        title: "Eco-friendly construction methods",
        description: "We employ cutting-edge sustainable technologies and modern building practices to create environmentally responsible structures."
      }
    }
  ]

  const toggleCard = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <div className="bg-gray-50 my-10 sm:my-16 lg:my-20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
                Why businesses trust elite builders Inc.?
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                With 20+ years of industry experience, we deliver high-quality, on-time, 
                and cost-effective construction solutions. Our team is licensed, insured, 
                and committed to excellence, ensuring every project meets the highest 
                standards of safety and craftsmanship.
              </p>
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start">
                <span style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Start your project</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Expandable Cards */}
          <div className="space-y-3 sm:space-y-4">
            {trustPoints.map((point) => (
              <div key={point.id} className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
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
                {expandedCard === point.id && (
                  <div className="text-white p-4 sm:p-6 relative" style={{ backgroundColor: '#F9773B' }}>
                    {/* Close button */}
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 pr-8 sm:pr-10">
                      {point.content.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                      {point.content.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home5