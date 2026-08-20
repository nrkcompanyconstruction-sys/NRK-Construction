"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Building2, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  client: string;
  location: string;
  scopeOfWork: string;
  startDate: string;
  completionDate: string;
  status: "completed" | "ongoing";
  scale: "large" | "medium" | "small";
}

const projects: Project[] = [
  {
    name: "132/33KV Substation",
    client: "UPPTCL",
    location: "Sounkh, Mathura",
    scopeOfWork: "Total Civil work at 132/33 kV substation, including CRB, B/W, Trench, Auxiliary foundations, Road, etc.",
    startDate: "21/01/2019",
    completionDate: "15/12/2019",
    status: "completed",
    scale: "medium"
  },
  {
    name: "132/33KV Substation",
    client: "UPPTCL",
    location: "Fatehpur Sikri",
    scopeOfWork: "Total Civil work at 132/33 kV substation, including CRB, B/W, Trench, Auxiliary foundations, Road, etc.",
    startDate: "20/05/2019",
    completionDate: "17/03/2020",
    status: "completed",
    scale: "medium"
  },
  {
    name: "220/132/33KV Substation",
    client: "UPPTCL",
    location: "Mallawan, Hardoi",
    scopeOfWork: "Total Civil work at 220/132/33 kV substation, including CRB, B/W, Trench, Auxiliary foundations, Road, etc.",
    startDate: "15/03/2020",
    completionDate: "10/04/2021",
    status: "completed",
    scale: "large"
  },
  {
    name: "132/33KV Substation",
    client: "UPPTCL",
    location: "Gharighat, Gonda",
    scopeOfWork: "Total Civil work at 132/33 kV substation, including CRB, B/W, Trench, Auxiliary foundations, Road, etc.",
    startDate: "03/11/2021",
    completionDate: "15/09/2022",
    status: "completed",
    scale: "small"
  },
  {
    name: "220/132/33kV Railway Substation",
    client: "UPPTCL",
    location: "Bhogaon, Mainpuri",
    scopeOfWork: "Total Civil work at 220/132/33 kV substation, including CRB, B/W, Trench, Auxiliary foundations, Road, etc.",
    startDate: "23/06/2021",
    completionDate: "08/02/2023",
    status: "completed",
    scale: "medium"
  },
  {
    name: "220/132/33KV Substation",
    client: "HVPNL",
    location: "Petwar, Hisar",
    scopeOfWork: "Total Civil work at 220/132/33 kV substation, including CRB, B/W, Trench, Auxiliary foundations, Road, etc.",
    startDate: "16/02/2025",
    completionDate: "Ongoing",
    status: "ongoing",
    scale: "large"
  },
  {
    name: "132/33 KV GSS Substation",
    client: "BSPTCL",
    location: "Maithi, Muzaffarpur",
    scopeOfWork: "Total Civil work at 132/33 kV substation, including CRB, B/W, Trench, Auxiliary foundations, earthfilling, etc.",
    startDate: "11/09/2025",
    completionDate: "Ongoing",
    status: "ongoing",
    scale: "large"
  }
];

function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">("all");

  const filteredProjects = projects.filter(project => 
    filter === "all" ? true : project.status === filter
  );

  const getScaleBadge = (scale: string) => {
    const colors = {
      large: "bg-sky-50 text-sky-600 border-sky-100",
      medium: "bg-indigo-50 text-indigo-600 border-indigo-100",
      small: "bg-slate-100 text-slate-600 border-slate-200"
    };
    return colors[scale as keyof typeof colors] || colors.medium;
  };

  const getScaleLabel = (scale: string) => {
    return scale.charAt(0).toUpperCase() + scale.slice(1) + " Scale";
  };

  return (
    <div className="min-h-screen bg-[#f3f6f8] pb-16" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#06111f] text-white pt-32 pb-20 px-5 sm:px-8 lg:px-12 rounded-b-[40px] shadow-[0_28px_90px_rgba(6,17,31,0.15)] mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(249,115,22,0.16),transparent_31%),linear-gradient(90deg,rgba(2,6,14,0.94)_0%,rgba(2,6,14,0.80)_38%,rgba(2,6,14,0.30)_68%,rgba(2,6,14,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="relative z-10 max-w-[1780px] mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Major Projects
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}
          >
            Delivering excellence in power infrastructure development across India
          </motion.p>
        </div>
      </section>

      <div className="max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="bg-white rounded-[28px] p-8 text-center border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)]"
          >
            <div className="text-4xl md:text-5xl font-bold text-slate-950 mb-2">{projects.length}</div>
            <div className="text-slate-500 font-medium text-sm tracking-wide uppercase" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Total Projects</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[28px] p-8 text-center border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)]"
          >
            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">{projects.filter(p => p.status === "completed").length}</div>
            <div className="text-slate-500 font-medium text-sm tracking-wide uppercase" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Completed</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[28px] p-8 text-center border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)]"
          >
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{projects.filter(p => p.status === "ongoing").length}</div>
            <div className="text-slate-500 font-medium text-sm tracking-wide uppercase" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>Ongoing</div>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
          <button
            onClick={() => setFilter("all")}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              filter === "all"
                ? "bg-slate-950 text-white shadow-lg scale-105"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              filter === "completed"
                ? "bg-slate-950 text-white shadow-lg scale-105"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("ongoing")}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              filter === "ongoing"
                ? "bg-slate-950 text-white shadow-lg scale-105"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Ongoing
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.04)] border border-slate-100 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <h3 className="text-2xl font-bold text-slate-950 mb-3 leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <Building2 size={16} />
                    </div>
                    <span className="text-sm font-bold tracking-wide" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>{project.client}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 items-end shrink-0" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                      project.status === "completed"
                        ? "bg-green-50 text-green-600 border-green-200"
                        : "bg-orange-50 text-orange-600 border-orange-200"
                    }`}
                  >
                    {project.status === "completed" ? (
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 size={14} />
                        Completed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        Ongoing
                      </span>
                    )}
                  </span>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${getScaleBadge(project.scale)}`}>
                    {getScaleLabel(project.scale)}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 mb-6 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 text-slate-700" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-slate-400" />
                <span className="text-sm font-medium">{project.location}</span>
              </div>

              {/* Scope of Work */}
              <div className="mb-8 flex-grow">
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Scope of Work</h4>
                <p className="text-base text-slate-600 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                  {project.scopeOfWork}
                </p>
              </div>

              {/* Timeline */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-100" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Start Date</div>
                    <div className="text-sm font-semibold text-slate-900">{project.startDate}</div>
                  </div>
                </div>
                
                <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      {project.status === "ongoing" ? "Expected Completion" : "Completion Date"}
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{project.completionDate}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[32px] border border-slate-100 shadow-sm mt-8">
            <p className="text-slate-500 text-lg font-medium" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
