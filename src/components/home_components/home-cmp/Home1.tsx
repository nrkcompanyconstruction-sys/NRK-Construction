import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

function Home1() {
  return (
    <div className="min-h-screen bg-white flex items-center pt-20 sm:pt-16 lg:pt-0" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
      <div className="max-w-7xl mx-auto mt-4 sm:mt-8 lg:mt-25 px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
              Building excellence<br />
              <span className="text-black">One project at a time</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-md leading-relaxed" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
              Elite Builders, delivers top tier commercial construction services across Miami, turning blueprints into reality with precision and expertise.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
                Start project
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="text-black font-medium hover:text-gray-700 transition-colors underline text-center text-sm sm:text-base py-2" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
                Get a free consultation
              </button>
            </div>
            
            {/* Statistics */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
              <div className="text-center xs:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>500+</div>
                <div className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Project completed</div>
              </div>
              <div className="text-center xs:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>100+</div>
                <div className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Professionals</div>
              </div>
              <div className="text-center xs:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>2M+</div>
                <div className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Sq Ft built</div>
              </div>
            </div>
          </div>


          {/* Right Content - Image and Elements */}
          <div className="relative flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Main Image Container with rounded corners */}
              <div className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden aspect-[3/4] bg-gray-100">
                <Image
                  src="/man.webp"
                  alt="Construction worker"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Elite Builders Badge - positioned outside top-left */}
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-orange-500 text-white px-3 sm:px-5 py-2 sm:py-4 rounded-[15px] sm:rounded-[20px] shadow-lg">
                <div className="text-xs sm:text-sm font-semibold leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Elite</div>
                <div className="text-xs sm:text-sm font-semibold leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Builders</div>
                <div className="text-lg sm:text-xl font-bold leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Inc.</div>
              </div>
              
              {/* Arrow Button - positioned outside bottom-right */}
              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-black text-white p-3 sm:p-4 rounded-[15px] sm:rounded-[20px] hover:bg-gray-800 transition-colors cursor-pointer shadow-lg">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home1