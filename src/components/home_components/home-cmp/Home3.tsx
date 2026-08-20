'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Cable, Construction, Layers3, ShieldCheck } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import CursorGrid from './CursorGrid'

function Home3() {
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

  const services = [
    {
      icon: Cable,
      label: 'High Voltage',
      title: 'AIS, GIS & GSS Substations',
      href: '/services/ais-gis-gss',
      description: 'Complete civil construction works for substations from 33 kV to 440 kV, built for reliability, clear coordination, and long operating life.',
      specs: ['33 kV - 440 kV', 'AIS / GIS / GSS', 'Power-grid civil works'],
    },
    {
      icon: Layers3,
      label: 'Structural Works',
      title: 'Foundation & Structural Works',
      href: '/services/foundation-structural',
      description: 'Tower foundations, equipment foundations, control rooms, cable trenches, and structural packages engineered with precision.',
      specs: ['Tower foundations', 'Cable trenches', 'Control rooms'],
    },
    {
      icon: Construction,
      label: 'Site Development',
      title: 'Infrastructure Development',
      href: '/services/infrastructure',
      description: 'RCC roads, drainage systems, earthfilling and cutting, boundary walls, staff quarters, and complete site infrastructure.',
      specs: ['RCC roads', 'Drainage systems', 'Building works'],
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white px-3 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
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
        className="relative z-10 mx-auto max-w-[1780px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="mb-8 flex flex-col justify-between gap-5 lg:mb-12 lg:flex-row lg:items-end" variants={itemVariants}>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-600">
              <ShieldCheck className="h-4 w-4 text-orange-500" />
              Engineering services
            </div>
            <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Integrated construction for power and civil infrastructure.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
            Each service is planned around durability, site safety, electrical clearances, and dependable delivery.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                className={`group relative overflow-hidden rounded-[28px] border p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-colors sm:p-7 lg:p-8 ${
                  index === 0
                    ? 'border-slate-800 bg-[#071320] text-white'
                    : 'border-slate-200 bg-[#f6f8fb] text-slate-950'
                }`}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  index === 0
                    ? 'bg-[radial-gradient(circle_at_78%_16%,rgba(249,115,22,0.22),transparent_30%)]'
                    : 'bg-[radial-gradient(circle_at_78%_16%,rgba(56,189,248,0.14),transparent_32%)]'
                }`} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:38px_38px] opacity-50" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className={`grid h-13 w-13 place-items-center rounded-2xl ${
                      index === 0 ? 'bg-orange-400/14 text-orange-300 ring-1 ring-orange-300/20' : 'bg-white text-orange-500 ring-1 ring-slate-200'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className={`rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] ${
                      index === 0 ? 'bg-white/10 text-slate-300' : 'bg-white text-slate-500 ring-1 ring-slate-200'
                    }`}>
                      {service.label}
                    </span>
                  </div>

                  <h3 className="mt-8 min-h-[88px] text-2xl font-bold leading-tight sm:text-3xl">{service.title}</h3>
                  <p className={`mt-4 min-h-[112px] text-sm leading-7 sm:text-base ${
                    index === 0 ? 'text-slate-300' : 'text-slate-600'
                  }`} style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-2">
                    {service.specs.map((spec) => (
                      <div key={spec} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs ${
                        index === 0 ? 'bg-white/8 text-slate-300' : 'bg-white text-slate-600 ring-1 ring-slate-200'
                      }`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors ${
                      index === 0 ? 'bg-white text-slate-950 hover:bg-orange-50' : 'bg-slate-950 text-white hover:bg-slate-800'
                    }`}
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Home3
