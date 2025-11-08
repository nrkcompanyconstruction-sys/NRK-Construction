"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Home6() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      rating: 5,
      title: "Exceptional Technical Expertise!",
      quote: "NRK Construction delivered our substation project with outstanding quality and precision. Their experience in power infrastructure is truly remarkable.",
      author: "Sumaja Electroinfra Pvt Ltd",
      position: "Client Partner",
      avatar: "/buildings.jpg",
      projectImage: "/buildings.jpg"
    },
    {
      id: 2,
      rating: 5,
      title: "On-Time & Quality Focused!",
      quote: "The team's commitment to safety standards and timely delivery made our substation project a complete success. Highly professional work!",
      author: "Mangal Electrical Industries Pvt Ltd",
      position: "Client Partner",
      avatar: "/buildings.jpg",
      projectImage: "/buildings.jpg"
    },
    {
      id: 3,
      rating: 5,
      title: "Trusted Partner for Infrastructure!",
      quote: "With nearly 20 years of experience, NRK Construction has proven to be our most reliable partner for substation civil works. Excellence guaranteed!",
      author: "Powertech Electroinfra Pvt Ltd",
      position: "Client Partner",
      avatar: "/buildings.jpg",
      projectImage: "/buildings.jpg"
    },
    {
      id: 4,
      rating: 5,
      title: "Reliable & Professional Service!",
      quote: "Outstanding execution and dedication to quality. NRK Construction consistently delivers excellent results on our power infrastructure projects.",
      author: "Bhanwaria Infra Projects Pvt Ltd",
      position: "Client Partner",
      avatar: "/buildings.jpg",
      projectImage: "/buildings.jpg"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isDragging, testimonials.length])

  // Touch/Mouse drag handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleEnd = () => {
    if (!isDragging) return
    
    const threshold = window.innerWidth < 640 ? 50 : 100 // Smaller threshold for mobile
    if (translateX > threshold) {
      // Swipe right - go to previous
      setCurrentSlide((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)
    } else if (translateX < -threshold) {
      // Swipe left - go to next
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }
    
    setIsDragging(false)
    setTranslateX(0)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={i < rating ? "#F9773B" : "#E5E7EB"}
        className="inline-block sm:w-5 sm:h-5"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ))
  }

  return (
    <div className="bg-gray-50 mx-4 sm:mx-8 lg:mx-15 rounded-2xl sm:rounded-3xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div 
          ref={slideRef}
          className="relative overflow-hidden"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(calc(-${currentSlide * 100}% + ${isDragging ? translateX : 0}px))`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 min-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center px-2 sm:px-4">
                  {/* Left side - Building Image */}
                  <div className="relative order-2 lg:order-1">
                    <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-200">
                      <Image
                        src={testimonial.projectImage}
                        alt="Construction project"
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Right side - Testimonial Content */}
                  <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                    {/* Slide indicator */}
                    <div className="text-left sm:text-right">
                      <span className="text-gray-400 text-base sm:text-lg font-light">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight">
                      {testimonial.title}
                    </h3>

                    {/* Quote */}
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {testimonial.quote}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black text-base sm:text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8 sm:mt-10 lg:mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              style={{ backgroundColor: currentSlide === index ? '#F9773B' : undefined }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Home6