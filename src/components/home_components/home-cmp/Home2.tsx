import React from 'react'

function Home2() {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto relative">
        {/* Orange tab */}
        <div className="absolute -top-3 sm:-top-4 lg:-top-6 left-2 sm:left-4 lg:left-8 z-10">
          <span className="inline-block bg-white text-orange-500 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-5 shadow-sm">
            About us
          </span>
        </div>

        {/* Rounded panel */}
        <div className="mt-6 sm:mt-8 lg:mt-6 bg-gray-50 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-6 sm:p-8 lg:p-12 xl:p-16 shadow-sm pb-16 sm:pb-8 lg:pb-12 xl:pb-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 leading-tight sm:leading-snug md:leading-snug text-justify">
              With over 20 years of experience, Elite Builders Inc. is a premier
              commercial construction company, known for delivering high-quality,
              innovative, and sustainable projects. From office spaces to large-scale
              commercial developments, we ensure excellence in every build.
            </p>
          </div>
        </div>

        {/* Floating button at bottom-right */}
        <div className="absolute right-2 sm:right-0 lg:right-0 bottom-2 sm:bottom-4 lg:bottom-6 transform translate-x-0 sm:translate-x-2 lg:translate-x-6">
          <button
            aria-label="open"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-md bg-black text-white flex items-center justify-center border-2 sm:border-4 border-white shadow-md hover:bg-gray-800 transition-colors"
          >
            <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M13 5L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 5H13V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home2