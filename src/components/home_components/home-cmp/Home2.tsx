'use client'

import React from 'react'
import { ArrowUpRight, BadgeCheck, HardHat, Landmark, Zap } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import { useRouter } from 'next/navigation'
import CursorGrid from './CursorGrid'

function Home2() {
  const router = useRouter()

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

  const capabilities = [
    { icon: Zap, label: 'AIS, GIS and GSS substation civil works' },
    { icon: Landmark, label: 'Powerhouse and control-room development' },
    { icon: HardHat, label: 'Roads, foundations, trenches and structures' },
  ]

  return (
    <section className="relative overflow-hidden bg-[#f3f6f8] px-3 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <CursorGrid
          cellSize={64}
          color="#111827"
          radius={170}
          falloff="smooth"
          holdTime={500}
          fadeDuration={900}
          lineWidth={1}
          maxOpacity={0.22}
          fillOpacity={0.025}
          gridOpacity={0.035}
          cellRadius={4}
          clickPulse
          pulseSpeed={500}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1780px] gap-5 lg:grid-cols-[0.86fr_1.14fr]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}
      >
        <motion.div
          className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-8 lg:p-10"
          variants={itemVariants}
        >
          {/* Dot-grid pattern */}
          <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(15,23,42,0.09)_1px,transparent_1px)] [background-size:22px_22px]" />
          {/* Soft corner glow accents */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-orange-400/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-400/[0.07] blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-orange-600">
              <BadgeCheck className="h-4 w-4" />
              About NRK
            </div>

            <h2 className="mt-8 max-w-xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Built for demanding power infrastructure environments.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
              NRK Construction Company specializes in civil construction works for power substations, combining field discipline, technical coordination, and dependable delivery for high-voltage infrastructure.
            </p>

            <button
              onClick={() => router.push('/about')}
              aria-label="Go to About Us page"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-slate-800 sm:w-auto"
            >
              Know our story
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#071320] p-6 text-white shadow-[0_24px_90px_rgba(7,19,32,0.22)] sm:p-8 lg:p-10"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.20),transparent_32%),radial-gradient(circle_at_22%_80%,rgba(249,115,22,0.18),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

          <div className="relative grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-sky-200/70">Execution range</div>
              <p className="mt-5 text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                Nearly 20 years of team experience across 33 kV to 400 kV substation projects.
              </p>
            </div>

            <div className="grid gap-3">
              {capabilities.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                  whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.14)' }}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-400/14 text-orange-300 ring-1 ring-orange-300/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm leading-5 text-white/84">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {[
              ['38+', 'Projects'],
              ['400 kV', 'Capacity'],
              ['20 yrs', 'Team exp.'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/[0.07] px-4 py-4 ring-1 ring-white/10">
                <div className="text-2xl font-bold text-white sm:text-3xl">{value}</div>
                <div className="mt-1 text-xs text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home2
