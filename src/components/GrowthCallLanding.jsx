import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react'
import enterpriseSalesSystem from '../assets/enterprise-sales-system.png'

const GrowthCallLanding = () => {
  const highlights = [
    'Revenue grew from $70M → $130M in 18 months',
    'Revenue grew from $18M → $30M; expanded into 3 states', 
    '10x deal size growth, exited at $67M valuation',
    'Scaled from $12M–$15M → $25M breaking into new divisions'
  ]

  const benefits = [
    'Secure 2–5 enterprise accounts annually',
    'Shift from mid-size projects to $25M+ contracts',
    'Build predictable, repeatable deal flow',
    'Free leadership to focus on delivery and exit planning'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Limited Availability - We Only Take On Select Clients Each Quarter
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Next <span className="text-cyan-400">$25M Deal</span> Starts Here
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Schedule a private consultation to see how Affiniti Growth Solutions can install 
              an enterprise sales division into your firm.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/application">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  Start My Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-sm text-gray-400">
                30-minute strategy call • No obligation • Immediate insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Real Results from Enterprise Implementations
            </h2>
            <p className="text-lg text-slate-600">
              See how we've transformed professional services firms like yours
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl card-shadow border border-slate-200">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-medium">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What You'll Achieve in the Next 24 Months
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-lg text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-lg font-bold text-slate-900">Expected Outcome</h3>
                </div>
                <p className="text-slate-700 font-medium">
                  <span className="text-cyan-600 font-bold">$20M–$100M+</span> in additional annual revenue 
                  through systematic enterprise deal generation
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={enterpriseSalesSystem} 
                alt="Enterprise sales system and AI technology"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Preview */}
      <section className="section-purple py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Growth Trajectory?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our application process ensures we're the right fit for your enterprise growth goals. 
            We work exclusively with professional services firms generating $25M–$750M in revenue.
          </p>
          
          <div className="bg-white p-8 rounded-xl card-shadow-lg border border-purple-200 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What Happens Next:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Quick Application</h4>
                  <p className="text-sm text-slate-600">5-minute qualification form</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Strategy Call</h4>
                  <p className="text-sm text-slate-600">30-minute consultation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Custom Plan</h4>
                  <p className="text-sm text-slate-600">Tailored growth strategy</p>
                </div>
              </div>
            </div>
          </div>
          
          <Link to="/application">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Start My Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <p className="text-sm text-slate-500 mt-4">
            Exclusive opportunity • Limited availability • No obligation
          </p>
        </div>
      </section>
    </div>
  )
}

export default GrowthCallLanding

