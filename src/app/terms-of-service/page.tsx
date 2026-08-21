import React from 'react'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#f3f6f8] pt-32 pb-24 px-5 sm:px-8 lg:px-12" style={{ fontFamily: 'Inter-24pt-Medium, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-600 mb-10 transition-colors font-medium text-sm tracking-wide uppercase">
          <HiArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-[36px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 p-8 sm:p-12 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>Terms of Service</h1>
          <p className="text-slate-500 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="space-y-10 text-slate-600 leading-relaxed text-lg">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>1. Agreement to Terms</h2>
              <p>
                By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on NRK Construction's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on NRK Construction's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by NRK Construction at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>3. Disclaimer</h2>
              <p>
                The materials on NRK Construction's website are provided on an 'as is' basis. NRK Construction makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>4. Limitations</h2>
              <p>
                In no event shall NRK Construction or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NRK Construction's website, even if NRK Construction or a NRK Construction authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold, sans-serif' }}>5. Revisions and Errata</h2>
              <p>
                The materials appearing on NRK Construction's website could include technical, typographical, or photographic errors. NRK Construction does not warrant that any of the materials on its website are accurate, complete, or current. NRK Construction may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
