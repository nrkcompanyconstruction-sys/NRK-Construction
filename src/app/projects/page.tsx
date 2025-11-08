"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Building2, CheckCircle2, Clock } from "lucide-react";

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
      large: "bg-purple-100 text-purple-700 border-purple-200",
      medium: "bg-blue-100 text-blue-700 border-blue-200",
      small: "bg-green-100 text-green-700 border-green-200"
    };
    return colors[scale as keyof typeof colors] || colors.medium;
  };

  const getScaleLabel = (scale: string) => {
    return scale.charAt(0).toUpperCase() + scale.slice(1) + " Scale";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 py-20 px-4">
            Our Major Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering excellence in power infrastructure development across India
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {projects.length}
            </div>
            <div className="text-gray-600 font-medium">Total Projects</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {projects.filter(p => p.status === "completed").length}
            </div>
            <div className="text-gray-600 font-medium">Completed</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              {projects.filter(p => p.status === "ongoing").length}
            </div>
            <div className="text-gray-600 font-medium">Ongoing</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === "all"
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === "completed"
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("ongoing")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === "ongoing"
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Ongoing
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Building2 size={16} />
                      <span className="text-sm font-medium">{project.client}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "completed"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-orange-100 text-orange-700 border border-orange-200"
                      }`}
                    >
                      {project.status === "completed" ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle2 size={12} />
                          Completed
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          Ongoing
                        </span>
                      )}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getScaleBadge(project.scale)}`}>
                      {getScaleLabel(project.scale)}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 mb-4 text-gray-700">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Scope of Work */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Scope of Work:</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.scopeOfWork}
                  </p>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <div className="text-xs">
                      <div className="font-semibold text-gray-900">Start Date</div>
                      <div>{project.startDate}</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <div className="text-xs">
                      <div className="font-semibold text-gray-900">
                        {project.status === "ongoing" ? "Expected Completion" : "Completion Date"}
                      </div>
                      <div>{project.completionDate}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
