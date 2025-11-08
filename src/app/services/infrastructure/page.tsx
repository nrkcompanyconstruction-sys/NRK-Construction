'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors">
            <HiArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Infrastructure Development
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Complete infrastructure solutions for modern substation facilities
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Solutions</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  NRK offers end-to-end infrastructure development services for electrical substations, 
                  including roads, drainage systems, earthwork, and building construction. Our integrated 
                  approach ensures all infrastructure elements work harmoniously.
                </p>
                <p className="leading-relaxed">
                  We understand that a substation requires more than just electrical infrastructure. From 
                  access roads to staff facilities, we deliver complete solutions that support operational 
                  efficiency and personnel comfort.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Internal road construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Drainage and water management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Earthfilling and cutting works</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Boundary walls and fencing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Staff quarters and facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Administrative buildings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Categories */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Infrastructure Categories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Civil Works</h3>
                <p className="text-gray-700 mb-4">
                  Complete site preparation, grading, earthwork, and foundation work for various 
                  infrastructure elements.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Site leveling & grading</li>
                  <li>• Excavation & backfilling</li>
                  <li>• Soil compaction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Roads & Drainage</h3>
                <p className="text-gray-700 mb-4">
                  Internal road networks, parking areas, and comprehensive drainage systems for 
                  rainwater management.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Concrete/asphalt roads</li>
                  <li>• Storm water drains</li>
                  <li>• Culverts & channels</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">Buildings</h3>
                <p className="text-gray-700 mb-4">
                  Construction of all building facilities including control rooms, staff quarters, 
                  and amenity blocks.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• RCC structures</li>
                  <li>• MEP installations</li>
                  <li>• Interior finishing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Service Offerings</h2>
            <div className="space-y-8">
              {/* Roads */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Road Construction</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Internal Roads</h4>
                    <p className="text-gray-700 mb-3">
                      We construct durable internal roads within substation premises using concrete or 
                      asphalt, designed to handle heavy equipment movement and regular maintenance traffic.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Heavy-duty pavement design</li>
                      <li>• Proper sub-base preparation</li>
                      <li>• Road marking and signage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Access & Service Roads</h4>
                    <p className="text-gray-700 mb-3">
                      Connection roads from main highways to substations, including turning circles, 
                      parking areas, and service vehicle access routes.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• All-weather access</li>
                      <li>• Adequate load-bearing capacity</li>
                      <li>• Proper drainage integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Drainage */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Drainage Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Storm Water Management</h4>
                    <p className="text-gray-700 mb-3">
                      Comprehensive storm water drainage systems to protect electrical equipment and 
                      infrastructure from water damage during monsoon seasons.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Surface drainage channels</li>
                      <li>• Underground drainage pipes</li>
                      <li>• Catch basins and manholes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Oil & Water Separation</h4>
                    <p className="text-gray-700 mb-3">
                      Specialized drainage for transformer oil containment and separation, ensuring 
                      environmental compliance and safety.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Oil containment pits</li>
                      <li>• Soak pits and separators</li>
                      <li>• Drainage to treatment facilities</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Earthwork */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Earthwork & Land Development</h3>
                <p className="text-gray-700 mb-4">
                  Site preparation is critical for substation construction. We handle all aspects of 
                  earthwork to create a level, stable platform for infrastructure.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Earthfilling</h4>
                    <p className="text-sm text-gray-700">
                      Controlled filling operations using approved materials with proper compaction 
                      to achieve required levels and load-bearing capacity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Earthcutting</h4>
                    <p className="text-sm text-gray-700">
                      Precise excavation and cutting work to achieve design grades, with proper 
                      slope stabilization measures.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Compaction</h4>
                    <p className="text-sm text-gray-700">
                      Layer-by-layer compaction testing and quality assurance to meet specified 
                      density requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buildings */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Construction</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Operational Buildings</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">→</span>
                        <div>
                          <span className="font-semibold">Control Rooms:</span> Climate-controlled spaces 
                          with raised flooring for control equipment
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">→</span>
                        <div>
                          <span className="font-semibold">Relay Rooms:</span> Dedicated spaces for 
                          protection and automation equipment
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">→</span>
                        <div>
                          <span className="font-semibold">Battery Rooms:</span> Ventilated spaces with 
                          acid-resistant flooring
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Staff Facilities</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">→</span>
                        <div>
                          <span className="font-semibold">Staff Quarters:</span> Comfortable residential 
                          units for operational staff
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">→</span>
                        <div>
                          <span className="font-semibold">Office Spaces:</span> Administrative buildings 
                          with modern amenities
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">→</span>
                        <div>
                          <span className="font-semibold">Amenity Blocks:</span> Restrooms, pantries, and 
                          common areas
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Infrastructure */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Security & Perimeter Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Boundary Walls</h3>
                <p className="text-gray-700 mb-4">
                  Robust perimeter walls with adequate height and strength to ensure security and safety 
                  of the substation facility.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• RCC/Masonry construction</li>
                  <li>• Security fencing on top</li>
                  <li>• Proper foundation depth</li>
                  <li>• Gates and access control</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Features</h3>
                <p className="text-gray-700 mb-4">
                  Integrated security infrastructure including guard rooms, CCTV mounting structures, 
                  and lighting installations.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Security cabin construction</li>
                  <li>• CCTV pole foundations</li>
                  <li>• Perimeter lighting</li>
                  <li>• Vehicle barrier systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose NRK */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated Planning</h3>
                <p className="text-gray-700">
                  We coordinate all infrastructure elements from the design stage to ensure optimal 
                  layout, functionality, and cost-effectiveness.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Materials</h3>
                <p className="text-gray-700">
                  Only approved, tested materials are used in construction, ensuring durability and 
                  minimal maintenance requirements.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Execution</h3>
                <p className="text-gray-700">
                  Our experienced project teams ensure all infrastructure work is completed on schedule 
                  without compromising quality.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Solutions</h3>
                <p className="text-gray-700">
                  We incorporate environmental considerations, rainwater harvesting, and energy-efficient 
                  designs wherever possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Complete Infrastructure Solutions</h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with us for comprehensive substation infrastructure development
          </p>
          <Link 
            href="/#contact-form" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
