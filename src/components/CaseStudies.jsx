import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, TrendingUp } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      company: 'Terakeet',
      industry: 'Digital Marketing & SEO',
      problem: 'Too many small deals.',
      solution: 'Installed enterprise sales division.',
      outcome: 'Revenue from $70M → $130M in 18 months.',
      growth: '+86%'
    },
    {
      company: 'Cambria',
      industry: 'Professional Services',
      problem: 'No systematic prospecting.',
      solution: 'Built new account acquisition strategy.',
      outcome: 'Revenue from $18M → $30M; expanded into 3 states.',
      growth: '+67%'
    },
    {
      company: 'Praxis',
      industry: 'Insurance Technology',
      problem: 'Stuck with small projects.',
      solution: 'Targeted enterprise insurers.',
      outcome: '10x deal size growth; exit at $67M valuation.',
      growth: '10x'
    },
    {
      company: 'Crown Partners',
      industry: 'Enterprise Information Management',
      problem: '18 months of shrinking sales, losing to larger competitors.',
      solution: 'Company-wide culture shift in sales, marketing, and account management.',
      outcome: 'Landed $25M in new contracts, doubled average deal size, reached $60M in sales volume.',
      growth: '+150%'
    },
    {
      company: 'number8',
      industry: 'Software Development Consulting',
      problem: 'No sales process, inconsistent messaging, unclear pipeline.',
      solution: 'Implemented Hunt Big Sales system with defined account targets and transparent dashboards.',
      outcome: 'Closed 3 deals worth $3M+ each in 9 months, shifted to larger consistent deals.',
      growth: '300%'
    },
    {
      company: 'BMWC Construction',
      industry: 'Construction & Engineering',
      problem: 'Undefined sales process, poor vetting, unpredictable pipeline.',
      solution: 'Implemented replicable Hunt Big Sales system with clear value proposition and leadership development.',
      outcome: 'Increased project size from $1M → $20M, became recognized national player.',
      growth: '2000%'
    },
    {
      company: 'JP Cullen',
      industry: 'General Contracting',
      problem: 'Faced tough competition from major contractors, not lowest-cost option.',
      solution: 'Used Hunt Big Sales process to redirect decision criteria and improve presentation tools.',
      outcome: 'Won $71M University of Wisconsin contract against larger competitors.',
      growth: '$71M'
    },
    {
      company: 'Foth Engineering',
      industry: 'Engineering Solutions',
      problem: 'Historically focused on incremental growth, lacked structured sales process.',
      solution: 'Implemented Big Sale Factory system with stage-gate process and peer-to-peer SME training.',
      outcome: 'Closed $35M engineering contract, 15x larger than average first contracts.',
      growth: '1500%'
    },
    {
      company: 'Military Logistics Contractor',
      industry: 'GovTech & Software Development',
      problem: 'Revenue volatility, short cycles, reliance on few contacts.',
      solution: 'Built Hunt Big Sales process for government & commercial contracts with RFI → RFP → RFQ roadmap.',
      outcome: 'Landed 2 commercial contracts worth $3M+ each, added $600K in recurring agency contracts.',
      growth: '+200%'
    }
  ]

  return (
    <div className="min-h-screen py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            ✅ Accepted Firms Only
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Companies We've Accepted & Transformed
          </h1>
          <p className="text-xl text-slate-600">
            These exceptional companies qualified for our enterprise sales division and achieved needle-moving results
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{study.company}</h3>
                <div className="flex items-center space-x-2 bg-cyan-100 px-3 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4 text-cyan-600" />
                  <span className="text-cyan-600 font-bold">{study.growth}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                  {study.industry}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Challenge:</h4>
                  <p className="text-slate-600">{study.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Solution:</h4>
                  <p className="text-slate-600">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Result:</h4>
                  <p className="text-slate-900 font-semibold">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-12 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Do You Meet Our Standards?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            These firms all went through our rigorous qualification process. 
            Submit your application to see if you qualify for our enterprise sales division.
          </p>
          <Link to="/application-form">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              👉 Apply to See if You Qualify
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies

