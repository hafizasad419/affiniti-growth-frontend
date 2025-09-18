import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Brain, Target, Users, Zap, CheckCircle, TrendingUp } from 'lucide-react'

const DeepTrustOS = () => {
  const capabilities = [
    {
      icon: <Target className="w-8 h-8 text-cyan-500" />,
      title: "100-1000 Executive Referrals Annually",
      description: "Systematic referral generation without cold outreach or existing client base requirements"
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: "AI-Qualified Decision Makers",
      description: "Custom-trained AI that speaks Executive language and understands your unique value proposition"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Relationship-Driven Approach",
      description: "Enhances and scales relationship-driven sales, doesn't replace human connection"
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: "Predictable Deal Flow",
      description: "Eliminates revenue unpredictability and removes dependency on manual prospecting"
    }
  ]

  const results = [
    "Generate 100-1000 executive referrals per year",
    "Secure 6, 7, and 8-figure deals consistently", 
    "Eliminate revenue unpredictability",
    "Scale without dependency on manual prospecting",
    "Increase Enterprise Value/Multiple beyond market averages",
    "Position firm for $50M+ exit within 3-5 years"
  ]

  const credentials = [
    "Worked directly with over 300 firms",
    "Set over 100,000 executive meetings",
    "Generated over 3 million email responses from executives", 
    "Sent over 86 million executive-to-executive emails",
    "Made more than 3 million executive-focused cold calls",
    "Years of research on thousands of organizations"
  ]

  return (
    <div className="min-h-screen py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            🤖 AI-Powered Deal Sourcing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            DeepTrust OS + AI
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 mb-8">
            The Science of Generating High-Value Referrals at Scale
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Our proprietary AI-driven executive referral system that sources 100-1000 qualified prospects annually, 
            feeding our Enterprise Sales Division with needle-moving opportunities.
          </p>
        </div>

        {/* Key Quote */}
        <div className="bg-slate-900 text-white p-12 rounded-xl mb-16">
          <blockquote className="text-2xl italic text-center mb-6">
            "AI isn't replacing relationship-driven sales in professional services—it's enhancing and scaling it. 
            The future belongs to firms that leverage AI to automate referrals, nurture high-value prospects, 
            and qualify decision-makers before the first conversation."
          </blockquote>
          <p className="text-cyan-400 font-semibold text-center text-lg">— Nate Kievman, Founder</p>
        </div>

        {/* System Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Comprehensive Referral Operating System
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              The DeepTrust Operating System (OS) is a comprehensive referral generating system supported by AI-solutions. 
              Designed to help organizations remove sales bottlenecks, scale deal flow predictably, and position their firm for a $50M+ exit.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              By combining our OS with an AI-driven executive referral management, monitoring, and recommendation agent—
              custom trained on Executive Speak and your organization's USP—we ensure scaled referrals for years to come.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-4">No Cold Outreach Required</h4>
              <p className="text-slate-600">
                This system doesn't require cold email, cold prospecting, or even an existing client base. 
                It's built on relationship-driven referrals that convert at enterprise scale.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="mb-4">{capability.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{capability.title}</h4>
                <p className="text-slate-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white p-12 rounded-xl shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-8">
            What DeepTrust OS + AI Delivers
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-700">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nate's Credentials */}
        <div className="bg-slate-800 text-white p-12 rounded-xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Battle-Tested Experience</h3>
            <p className="text-xl text-slate-300">
              Nate Kievman has spent years in the trenches, studying and refining what truly works to scale firms beyond the founder's ceiling.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">{credential}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-slate-300">
              "After all of this—the research, the hands-on execution, the failures, the wins—I knew there was a better way. 
              The DeepTrust OS+AI is the summation of everything I've learned, built, and refined."
            </p>
          </div>
        </div>

        {/* Integration with Enterprise Sales Division */}
        <div className="bg-cyan-50 p-12 rounded-xl mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Complete System Integration
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">DeepTrust OS + AI</h4>
              <p className="text-slate-600">Sources 100-1000 qualified executive referrals annually</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Enterprise Sales Division</h4>
              <p className="text-slate-600">Closes needle-moving deals worth $5M-$100M each</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Guaranteed Results</h4>
              <p className="text-slate-600">10x+ ROI and $50M+ exit positioning within 18 months</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-12 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Ready for Systematic Deal Flow?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            The DeepTrust OS + AI system is exclusively available to qualified firms through our Enterprise Sales Division as a Service. 
            Apply to see if you meet our standards for this complete solution.
          </p>
          <Link to="/application-form">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              👉 Apply for Complete System Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DeepTrustOS

