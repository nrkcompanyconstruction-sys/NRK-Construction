'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, Clock3, Gauge, ShieldCheck } from 'lucide-react'
import CursorGrid from './CursorGrid'

function Home5() {
  const [expandedCard, setExpandedCard] = useState<number | null>(1)

  const trustPoints = [
    {
      id: 1,
      icon: Clock3,
      title: 'Nearly 20 years of team experience',
      content: {
        title: 'Proven expertise since 2004',
        description: 'Our team brings nearly 20 years of experience in executing substation projects, starting from tower foundation works and expanding into complete civil construction packages.',
      },
    },
    {
      id: 2,
      icon: Gauge,
      title: 'Specialized in power infrastructure',
      content: {
        title: 'Complete substation solutions',
        description: 'We specialize in AIS, GIS, and GSS substations from 33 kV to 765 kV, delivering reliable construction for demanding electrical infrastructure requirements.',
      },
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'On-time delivery & quality standards',
      content: {
        title: 'Trusted partner in the power sector',
        description: 'Our work is shaped by technical planning, safety discipline, quality checks, and delivery commitments that keep critical infrastructure moving.',
      },
    },
  ]

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
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  const expandedContentVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-white px-3 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <CursorGrid
          cellSize={64}
          color="#111827"
          radius={170}
          falloff="smooth"
          holdTime={500}
          fadeDuration={900}
          lineWidth={1}
          maxOpacity={0.18}
          fillOpacity={0.02}
          gridOpacity={0.035}
          cellRadius={4}
          clickPulse
          pulseSpeed={500}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1780px] gap-5 lg:grid-cols-[0.92fr_1.08fr]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
      >
        <motion.div
          className="relative overflow-hidden rounded-[28px] bg-[#071320] p-6 text-white shadow-[0_24px_80px_rgba(7,19,32,0.18)] sm:p-8 lg:p-10"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(249,115,22,0.20),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(56,189,248,0.16),transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
              <BadgeCheck className="h-4 w-4 text-orange-300" />
              Why NRK
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Trusted where precision and reliability cannot slip.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
              Power infrastructure work leaves no room for casual execution. NRK brings civil construction experience, disciplined site coordination, and a focus on durable, maintainable infrastructure.
            </p>

            <button
              onClick={() => {
                const contactForm = document.getElementById('contact-form')
                contactForm?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-orange-50 sm:w-auto"
            >
              Start your project
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <motion.div className="grid gap-4" variants={containerVariants}>
          {trustPoints.map((point) => {
            const Icon = point.icon
            const isExpanded = expandedCard === point.id

            return (
              <motion.article
                key={point.id}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-[#f6f8fb] shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : point.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isExpanded}
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-orange-500 ring-1 ring-slate-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-lg font-bold leading-snug text-slate-950 sm:text-xl">{point.title}</span>
                  </span>

                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                    isExpanded ? 'bg-orange-500 text-white' : 'bg-slate-950 text-white'
                  }`}>
                    <ArrowUpRight className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-45' : ''}`} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      className="overflow-hidden"
                      variants={expandedContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div className="mx-5 mb-5 rounded-2xl bg-white p-5 ring-1 ring-slate-200 sm:mx-6 sm:mb-6 sm:p-6">
                        <h3 className="text-xl font-bold text-slate-950">{point.content.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
                          {point.content.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home5
