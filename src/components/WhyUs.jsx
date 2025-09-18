import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, CheckCircle, X } from 'lucide-react'

const WhyUs = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Standards for Partnership
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            We only work with exceptional firms that meet our rigorous criteria. 
            Most applicants don't qualify for our enterprise sales division.
          </p>
        </div>
        
        {/* Qualification Requirements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">✅ You MUST Have:</h2>
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">$25M+ Annual Revenue</h3>
                    <p className="text-slate-700">Proven scale and market presence required</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Capacity</h3>
                    <p className="text-slate-700">Ability to cover $1M-$5M annual investment + commission structure</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Exceptional Product/Service Quality</h3>
                    <p className="text-slate-700">We only represent firms we're proud to associate with</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Executive Commitment</h3>
                    <p className="text-slate-700">CEO/founder must be personally involved in the process</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise Ambition</h3>
                    <p className="text-slate-700">Genuine desire to land $25M-$100M+ accounts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">❌ Automatic Disqualifiers:</h2>
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Under $25M Revenue</h3>
                    <p className="text-slate-700">Not ready for enterprise-scale investment</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Poor Service Quality</h3>
                    <p className="text-slate-700">We won't risk our reputation on subpar delivery</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Constraints</h3>
                    <p className="text-slate-700">Cannot afford our investment requirements</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Unrealistic Expectations</h3>
                    <p className="text-slate-700">Expecting overnight results or unwilling to invest properly</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Lack of Executive Buy-in</h3>
                    <p className="text-slate-700">Leadership not fully committed to the process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Selection Process */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-12 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Rigorous Selection Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Initial Application</h3>
              <p className="text-slate-700">Submit your firm's details and financial capacity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quality Assessment</h3>
              <p className="text-slate-700">We evaluate your service quality and market reputation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Verification</h3>
              <p className="text-slate-700">Confirm ability to invest in enterprise sales division</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Acceptance Decision</h3>
              <p className="text-slate-700">Final approval for our enterprise sales division</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Think You Meet Our Standards?
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            If you believe your firm meets our qualification criteria, submit your application. 
            We'll conduct a thorough evaluation and let you know if you're accepted.
          </p>
          
          <Link to="/application-form">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg">
              👉 Submit Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WhyUs

