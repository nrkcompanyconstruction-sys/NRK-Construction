'use client'

import React, { useState } from 'react'
import { ArrowUpRight, Building2, Mail, Phone, Route, Zap, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import CursorGrid from './CursorGrid'

function Home7() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const data = await response.json()
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to connect to the server. Please try again later.')
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  const projectTypes = [
    { icon: Zap, label: 'Substations' },
    { icon: Building2, label: 'Buildings' },
    { icon: Route, label: 'RCC roads' },
  ]

  const inputClass = 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 disabled:opacity-50 disabled:bg-slate-50'

  return (
    <section id="contact-form" className="relative overflow-hidden bg-white px-3 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
      <motion.div
        className="relative mx-auto max-w-[1780px] overflow-hidden rounded-[28px] bg-[#071320] p-5 text-white shadow-[0_28px_90px_rgba(7,19,32,0.22)] sm:rounded-[36px] sm:p-8 lg:p-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
      >
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <CursorGrid
            cellSize={64}
            color="#ffffff"
            radius={170}
            falloff="smooth"
            holdTime={500}
            fadeDuration={900}
            lineWidth={1}
            maxOpacity={0.14}
            fillOpacity={0.03}
            gridOpacity={0.045}
            cellRadius={4}
            clickPulse
            pulseSpeed={500}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(249,115,22,0.20),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="relative z-10 grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div className="py-2 lg:py-6" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
              <Mail className="h-4 w-4 text-orange-300" />
              Project intake
            </div>

            <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build reliable power infrastructure together.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
              Share the basic project details and our team can discuss substation works, powerhouse construction, residential buildings, RCC roads, or complete civil infrastructure packages.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {projectTypes.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <Icon className="h-5 w-5 text-orange-300" />
                  <div className="mt-4 text-sm text-white/86">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-[28px] border border-white/70 bg-white p-5 text-slate-950 shadow-[0_22px_70px_rgba(0,0,0,0.14)] sm:p-7 lg:p-8"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Michael Carter"
                    className={inputClass}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="michael@example.com"
                  className={inputClass}
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about location, voltage level, scope, timeline, and construction requirements..."
                  className={`${inputClass} resize-none`}
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 text-sm font-medium bg-red-50 p-4 rounded-xl border border-red-100">
                  <AlertCircle className="w-5 h-5" />
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium bg-green-50 p-4 rounded-xl border border-green-100">
                  <CheckCircle2 className="w-5 h-5" />
                  Thank you! Your project enquiry has been sent successfully. We will get back to you shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-base font-bold text-white transition-colors hover:bg-orange-500 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Enquiry...
                  </span>
                ) : (
                  <>
                    Submit project enquiry
                    <ArrowUpRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home7
