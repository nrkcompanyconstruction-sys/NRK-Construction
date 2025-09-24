import React from 'react'

function Home3() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left">
          Our expertise in<br />
          commercial construction
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {/* General contracting */}
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 relative transition-all duration-300 ease-in-out h-full flex flex-col text-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex flex-col h-full">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-current stroke-2 group-hover:stroke-white" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-1.414-.586H14l-2.293-2.293a1 1 0 0 0-.707-.293H8a1 1 0 0 0-.707.293L5 11.414A2 2 0 0 0 4.586 12.828L1.5 15.914"/>
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">General contracting</h3>
              
              <p className="text-sm sm:text-base md:text-base leading-relaxed mb-auto opacity-90 group-hover:opacity-95">
                We manage the entire construction process, ensuring every project is 
                completed on time, within budget, and to the highest standards.
              </p>
              
              <div className="flex items-center justify-between mt-4 sm:mt-6 md:mt-8 pt-2">
                <a href="#" className="text-sm sm:text-base md:text-base font-semibold transition-opacity duration-300 hover:opacity-80">Learn more</a>
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-black rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-gray-800">
                  <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 stroke-white stroke-2" viewBox="0 0 24 24" fill="none">
                    <path d="m7 17 10-10"/>
                    <path d="m17 7 0 10"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Design & build */}
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 relative transition-all duration-300 ease-in-out h-full flex flex-col text-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex flex-col h-full">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-current stroke-2 group-hover:stroke-white" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                  <path d="M3 6h18"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">Design & build</h3>
              
              <p className="text-sm sm:text-base md:text-base leading-relaxed mb-auto opacity-90 group-hover:opacity-95">
                Our integrated design & build approach streamlines construction by handling 
                architectural planning and a smooth workflow from concept to completion.
              </p>
              
              <div className="flex items-center justify-between mt-4 sm:mt-6 md:mt-8 pt-2">
                <a href="#" className="text-sm sm:text-base md:text-base font-semibold transition-opacity duration-300 hover:opacity-80">Learn more</a>
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-black rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-gray-800">
                  <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 stroke-white stroke-2" viewBox="0 0 24 24" fill="none">
                    <path d="m7 17 10-10"/>
                    <path d="m17 7 0 10"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project management */}
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 relative transition-all duration-300 ease-in-out h-full flex flex-col text-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex flex-col h-full">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-current stroke-2 group-hover:stroke-white" viewBox="0 0 24 24" fill="none">
                  <path d="M8 6v6"/>
                  <path d="M15 6v6"/>
                  <path d="M2 12h19.6"/>
                  <path d="M18 18h3s-.9-1.5-3-1.5-3 1.5-3 1.5"/>
                  <path d="M12 18h3s-.9-1.5-3-1.5-3 1.5-3 1.5"/>
                  <path d="M6 18h3s-.9-1.5-3-1.5-3 1.5-3 1.5"/>
                </svg>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">Project management</h3>
              
              <p className="text-sm sm:text-base md:text-base leading-relaxed mb-auto opacity-90 group-hover:opacity-95">
                We take charge of every detail, from budgeting and scheduling to risk 
                management and quality control.
              </p>
              
              <div className="flex items-center justify-between mt-4 sm:mt-6 md:mt-8 pt-2">
                <a href="#" className="text-sm sm:text-base md:text-base font-semibold transition-opacity duration-300 hover:opacity-80">Learn more</a>
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-black rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-gray-800">
                  <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 stroke-white stroke-2" viewBox="0 0 24 24" fill="none">
                    <path d="m7 17 10-10"/>
                    <path d="m17 7 0 10"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home3