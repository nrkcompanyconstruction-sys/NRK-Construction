import React from 'react'
import Image from 'next/image'

function Home4() {
  const projects = [
    {
      id: 1,
      name: "440 kV Substation",
      description: "Complete civil construction for high-voltage AIS substation with advanced equipment foundations.",
      image: "/buildings.jpg"
    },
    {
      id: 2,
      name: "220 kV GIS Substation",
      description: "Modern GIS substation project with comprehensive infrastructure and control facilities.",
      image: "/buildings.jpg"
    },
    {
      id: 3,
      name: "132 kV GSS Project",
      description: "Grid substation with complete civil works including roads, drainage, and boundary walls.",
      image: "/buildings.jpg"
    },
    {
      id: 4,
      name: "Tower Foundation Works",
      description: "Specialized tower foundation construction with precision engineering and quality materials.",
      image: "/buildings.jpg"
    },
    {
      id: 5,
      name: "33 kV Substation Expansion",
      description: "Expansion and modification of existing substation with enhanced infrastructure facilities.",
      image: "/buildings.jpg"
    },
    {
      id: 6,
      name: "Control Room Complex",
      description: "State-of-the-art control room and equipment foundation construction with cable trenching.",
      image: "/buildings.jpg"
    }
  ]

  return (
    <div className="bg-black mx-4 sm:mx-6 md:mx-8 lg:mx-8 rounded-2xl sm:rounded-3xl text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
          Proven results in<br />
          power substation construction
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>{project.name}</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-sm mb-4 sm:mb-5 md:mb-6 leading-relaxed" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-white text-xs sm:text-sm md:text-sm font-medium hover:text-orange-400 transition-colors" style={{ fontFamily: "Inter-24pt-Medium, sans-serif" }}>
                    Learn more
                  </button>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-400 transition-colors">
                    <svg width="10" height="10" className="sm:w-3 sm:h-3 md:w-3 md:h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home4