"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Home7() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div id="contact-form" className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6 mb-8 lg:mb-0"
            variants={leftContentVariants}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Let&apos;s build reliable<br />
              power infrastructure together!
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
              Get in touch with us for a consultation or quote on your next substation project.
            </p>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div 
            className="bg-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <motion.div variants={inputVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Michael Carter"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={inputVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="michaelcarter@gmail.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                />
              </motion.div>

              {/* Phone Field */}
              <motion.div variants={inputVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 650 213 7379"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={inputVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project needs..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none text-sm sm:text-base"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-black text-white py-3 sm:py-4 px-6 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center space-x-2"
                variants={inputVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Submit</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home7