import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, DollarSign, Percent, TrendingUp } from 'lucide-react'

const Offering = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Engagement Model
          </h1>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Base Fee</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">$1M–$5M</p>
              <p className="text-slate-700">per year</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <Percent className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Commission</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">5–10%</p>
              <p className="text-slate-700">of top-line revenue from new enterprise accounts</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Equity Kickers</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">Performance</p>
              <p className="text-slate-700">milestones tied to revenue and valuation</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Our Promise</h2>
            <p className="text-xl mb-8 leading-relaxed">
              We deliver 2–5 enterprise deals annually worth $5M–$100M each. 
              That's <span className="font-bold text-yellow-300">$20M–$100M+ in annual revenue lift</span> plus valuation growth.
            </p>
            <a href="https://calendly.com/d/ctc5-s98-6rv/affiniti-growth-enterprise-sales-divsion-discovery-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                👉 Schedule a Growth Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offering

