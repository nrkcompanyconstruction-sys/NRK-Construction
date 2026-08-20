'use client'

import React from 'react'
import { ArrowUpRight, Building2, Factory, Route, Zap } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import CursorGrid from './CursorGrid'
import EngineeringVisual from './EngineeringVisual'

function Home1() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
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

  const visualVariants: Variants = {
    hidden: { opacity: 0, scale: 0.97, y: 18 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  const stats = [
    ['38+', 'Major Projects'],
    ['15+', 'Years Experience'],
    ['2', 'Ongoing Projects'],
  ]

  const capabilities = [
    { label: 'Powerhouses', icon: Factory },
    { label: 'Residential Buildings', icon: Building2 },
    { label: 'RCC Roads', icon: Route },
    { label: 'AIS / GIS / GSS', icon: Zap },
  ]

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#f3f6f8] px-3 pb-5 pt-20 sm:px-5 sm:pb-6 sm:pt-24 lg:px-8 lg:pb-8"
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
          maxOpacity={0.26}
          fillOpacity={0.025}
          gridOpacity={0.035}
          cellRadius={4}
          clickPulse
          pulseSpeed={500}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[1780px] overflow-hidden rounded-[28px] border border-white/55 bg-[#06111f] shadow-[0_28px_90px_rgba(6,17,31,0.20)] sm:rounded-[36px] lg:min-h-[calc(100vh-7rem)]"
        variants={visualVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.35 }}
      >
        <EngineeringVisual />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(249,115,22,0.16),transparent_31%),linear-gradient(90deg,rgba(2,6,14,0.94)_0%,rgba(2,6,14,0.80)_38%,rgba(2,6,14,0.30)_68%,rgba(2,6,14,0.18)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute inset-x-5 bottom-5 top-5 rounded-[22px] border border-white/10 sm:inset-x-7 sm:bottom-7 sm:top-7 sm:rounded-[28px]" />

        <motion.div
          className="relative z-10 flex w-full flex-col justify-between px-5 py-6 text-white sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <motion.div
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/78 backdrop-blur-md sm:text-xs sm:tracking-[0.24em]"
              variants={itemVariants}
            >
              <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.95)]" />
              Civil and electrical infrastructure
            </motion.div>

            <motion.div
              className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70 backdrop-blur-md md:block"
              variants={itemVariants}
            >
              AIS / GIS / GSS specialists
            </motion.div>
          </div>

          <div className="grid items-end gap-7 py-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(340px,0.52fr)] lg:py-9 xl:py-12">
            <div className="max-w-4xl">
              <motion.h1
                className="max-w-4xl text-4xl font-bold leading-[1.03] text-white sm:text-5xl md:text-6xl 2xl:text-7xl"
                variants={itemVariants}
              >
                Powering modern infrastructure with precision construction.
              </motion.h1>

              <motion.p
                className="mt-5 max-w-2xl text-base leading-7 text-slate-200/82 sm:text-lg"
                variants={itemVariants}
              >
                NRK Construction Company develops powerhouses, residential buildings, RCC roads, and AIS, GIS, and GSS electrical substations with dependable execution and engineering discipline.
              </motion.p>

              <motion.div
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
                variants={itemVariants}
              >
                <motion.button
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_14px_35px_rgba(255,255,255,0.18)] transition-colors hover:bg-orange-50 sm:px-7"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    const contactForm = document.getElementById('contact-form')
                    contactForm?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  Start project
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>

                <motion.a
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/14 sm:px-7"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  View work
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-3 lg:grid-cols-1 xl:grid-cols-2"
              variants={itemVariants}
            >
              {capabilities.map(({ label, icon: Icon }) => (
                <motion.div
                  key={label}
                  className="group flex min-h-18 items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl sm:min-h-20 sm:gap-4 sm:p-4"
                  whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.14)' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-400/14 text-orange-300 ring-1 ring-orange-300/20 transition-colors group-hover:bg-orange-400/22 sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs leading-5 text-white/86 sm:text-sm">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5"
            variants={itemVariants}
          >
            {stats.map(([value, label]) => (
              <motion.div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-3 backdrop-blur-md sm:px-5 sm:py-4"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <div className="text-2xl font-bold text-white sm:text-4xl">{value}</div>
                <div className="mt-1 text-[11px] leading-4 text-slate-300 sm:text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home1
