import React from 'react'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f3f6f8] pt-32 pb-24 px-5 sm:px-8 lg:px-12" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-600 mb-10 transition-colors font-medium text-sm tracking-wide uppercase">
          <HiArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-[36px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 p-8 sm:p-12 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Privacy Policy</h1>
          <p className="text-slate-500 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="space-y-10 text-slate-600 leading-relaxed text-lg">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>1. Introduction</h2>
              <p>
                Welcome to NRK Construction ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>2. Data We Collect</h2>
              <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us through the contact form on our website.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
