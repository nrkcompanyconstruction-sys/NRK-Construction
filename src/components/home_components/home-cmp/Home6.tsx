'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import CursorGrid from './CursorGrid'

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
      title: 'Exceptional technical expertise',
      quote: 'NRK Construction delivered our substation project with outstanding quality and precision. Their experience in power infrastructure is truly remarkable.',
      author: 'Sumaja Electroinfra Pvt Ltd',
      position: 'Client Partner',
      projectType: 'Substation civil package',
      projectImage: '/buildings.jpg',
    },
    {
      id: 2,
      rating: 5,
      title: 'On-time and quality focused',
      quote: 'The team&apos;s commitment to safety standards and timely delivery made our substation project a complete success. Highly professional work.',
      author: 'Mangal Electrical Industries Pvt Ltd',
      position: 'Client Partner',
      projectType: 'Power infrastructure works',
      projectImage: '/buildings.jpg',
    },
    {
      id: 3,
      rating: 5,
      title: 'Trusted partner for infrastructure',
      quote: 'With nearly 20 years of experience, NRK Construction has proven to be our most reliable partner for substation civil works.',
      author: 'Powertech Electroinfra Pvt Ltd',
      position: 'Client Partner',
      projectType: 'GSS construction works',
      projectImage: '/buildings.jpg',
    },
    {
      id: 4,
      rating: 5,
      title: 'Reliable and professional service',
      quote: 'Outstanding execution and dedication to quality. NRK Construction consistently delivers excellent results on our power infrastructure projects.',
      author: 'Bhanwaria Infra Projects Pvt Ltd',
      position: 'Client Partner',
      projectType: 'Electrical infrastructure',
      projectImage: '/buildings.jpg',
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isDragging, testimonials.length])

  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    setTranslateX(clientX - startX)
  }

  const handleEnd = () => {
    if (!isDragging) return

    const threshold = window.innerWidth < 640 ? 50 : 100
    if (translateX > threshold) {
      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    } else if (translateX < -threshold) {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    setIsDragging(false)
    setTranslateX(0)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="relative overflow-hidden bg-[#f3f6f8] px-3 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
      <motion.div
        className="relative mx-auto max-w-[1780px] overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.09)] backdrop-blur-md sm:rounded-[36px] sm:p-8 lg:p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
      >
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <CursorGrid
            cellSize={64}
            color="#111827"
            radius={170}
            falloff="smooth"
            holdTime={500}
            fadeDuration={900}
            lineWidth={1}
            maxOpacity={0.17}
            fillOpacity={0.02}
            gridOpacity={0.035}
            cellRadius={4}
            clickPulse
            pulseSpeed={500}
          />
        </div>

        <div className="relative z-10">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-600">
                <Quote className="h-4 w-4 text-orange-500" />
                Client confidence
              </div>
              <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Partners who count on disciplined infrastructure delivery.
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevious}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 transition-colors hover:bg-slate-950 hover:text-white"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goToNext}
                className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-white transition-colors hover:bg-orange-500"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

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
                transform: `translateX(calc(-${currentSlide * 100}% + ${isDragging ? translateX : 0}px))`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full min-w-full flex-shrink-0 px-3 sm:px-4">
                  <div className="block">
                    <div className="relative overflow-hidden rounded-[28px] bg-[#071320] p-6 text-white sm:p-8 lg:p-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_18%_80%,rgba(249,115,22,0.18),transparent_30%)]" />
                      <div className="relative">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                            <Star key={starIndex} className="h-5 w-5 fill-orange-400 text-orange-400" />
                          ))}
                        </div>

                        <h3 className="mt-7 text-2xl font-bold leading-tight text-white sm:text-4xl">{testimonial.title}</h3>
                        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
                          {testimonial.quote}
                        </p>

                        <div className="mt-8 border-t border-white/10 pt-6">
                          <h4 className="text-lg font-bold text-white">{testimonial.author}</h4>
                          <p className="mt-1 text-sm text-slate-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index ? 'w-9 bg-orange-500' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home6
