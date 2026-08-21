'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowUpRight, Building2, CircuitBoard, MapPin, Route, Zap } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import CursorGrid from './CursorGrid'

function Home4() {
  const projects = [
    {
      id: 1,
      name: '400 kV Substation',
      type: 'AIS Substation',
      description: 'Complete civil construction for a high-voltage AIS substation with advanced equipment foundations and site infrastructure.',
      icon: Zap,
      image: '/buildings.jpg',
    },
    {
      id: 2,
      name: '220 kV GIS Substation',
      type: 'GIS Facility',
      description: 'Modern GIS substation works with control facilities, cable routes, foundations, and engineered construction sequencing.',
      icon: CircuitBoard,
      image: '/buildings.jpg',
    },
    {
      id: 3,
      name: '132 kV GSS Project',
      type: 'Grid Substation',
      description: 'Grid substation civil works including RCC roads, drainage, boundary wall packages, and operational buildings.',
      icon: Building2,
      image: '/buildings.jpg',
    },
    {
      id: 4,
      name: 'Tower Foundation Works',
      type: 'Foundation Package',
      description: 'Specialized tower foundation construction with accurate alignment, reinforcement discipline, and quality concrete works.',
      icon: Route,
      image: '/buildings.jpg',
    },
    {
      id: 5,
      name: '33 kV Substation Expansion',
      type: 'Expansion Works',
      description: 'Expansion and modification of an existing substation with upgraded infrastructure and controlled site execution.',
      icon: Zap,
      image: '/buildings.jpg',
    },
    {
      id: 6,
      name: 'Control Room Complex',
      type: 'Building Works',
      description: 'Control room and equipment foundation construction with integrated cable trenching and service coordination.',
      icon: Building2,
      image: '/buildings.jpg',
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="relative overflow-hidden bg-[#f3f6f8] px-3 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
      <motion.div
        className="relative mx-auto max-w-[1780px] overflow-hidden rounded-[28px] bg-[#071320] px-5 py-10 text-white shadow-[0_28px_90px_rgba(7,19,32,0.22)] sm:rounded-[36px] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
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
            maxOpacity={0.13}
            fillOpacity={0.03}
            gridOpacity={0.045}
            cellRadius={4}
            clickPulse
            pulseSpeed={500}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_18%_72%,rgba(249,115,22,0.18),transparent_30%)]" />

        <div className="relative z-10">
          <motion.div className="mb-8 flex flex-col justify-between gap-5 lg:mb-12 lg:flex-row lg:items-end" variants={itemVariants}>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
                <MapPin className="h-4 w-4 text-orange-300" />
                Project portfolio
              </div>
              <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Proven execution across substations, roads, and structures.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
              A focused track record of civil packages for electrical infrastructure, from foundations to complete substation environments.
            </p>
          </motion.div>

          <motion.div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]" variants={itemVariants}>
            <article className="group relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-white/8">
              <Image
                src={projects[0].image}
                alt={projects[0].name}
                fill
                className="object-cover opacity-56 transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,7,18,0.92)_0%,rgba(3,7,18,0.46)_48%,rgba(3,7,18,0.24)_100%)]" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                <span className="rounded-full bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/78 backdrop-blur-md">
                  Featured
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-400/18 text-orange-200 ring-1 ring-orange-300/25 backdrop-blur-md">
                  <Zap className="h-5 w-5" />
                </span>
              </div>
              <div className="absolute inset-x-6 bottom-6">
                <div className="text-sm uppercase tracking-[0.18em] text-orange-200">{projects[0].type}</div>
                <h3 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">{projects[0].name}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
                  {projects[0].description}
                </p>
              </div>
            </article>

            <div className="grid gap-4">
              {projects.slice(1, 3).map((project) => {
                const Icon = project.icon
                return (
                  <article key={project.id} className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.13),transparent_30%)] opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative flex gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-orange-300 ring-1 ring-white/10">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-sky-200/70">{project.type}</div>
                        <h3 className="mt-2 text-xl font-bold text-white">{project.name}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-300" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </motion.div>

          <motion.div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={containerVariants}>
            {projects.slice(3).map((project) => {
              const Icon = project.icon
              return (
                <motion.article
                  key={project.id}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md"
                  variants={itemVariants}
                  whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.11)' }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-400/14 text-orange-300 ring-1 ring-orange-300/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/46 transition-colors group-hover:text-orange-200" />
                  </div>
                  <div className="mt-6 text-xs uppercase tracking-[0.16em] text-sky-200/70">{project.type}</div>
                  <h3 className="mt-2 text-xl font-bold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
                    {project.description}
                  </p>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home4
