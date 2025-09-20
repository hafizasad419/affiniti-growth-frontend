import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Award } from 'lucide-react'
import heroEnterpriseGrowth from '../assets/hero-enterprise-growth.png'
import enterpriseSalesSystem from '../assets/enterprise-sales-system.png'
import growthMetricsDashboard from '../assets/growth-metrics-dashboard.png'
import enterpriseBuildingAbstract from '../assets/enterprise-building-abstract.png'

const Homepage = () => {
  const caseStudies = [
    {
      company: 'Terakeet',
      problem: 'Too many small deals',
      outcome: 'Revenue grew from $70M → $130M in 18 months',
    },
    {
      company: 'Cambria',
      problem: 'No systematic prospecting',
      outcome: 'Revenue grew from $18M → $30M in 1 year; expanded into 3 states',
    },
    {
      company: 'Praxis',
      problem: 'Stuck with small projects',
      outcome: '10x deal size growth, exited at $67M valuation in 3 years',
    },
    {
      company: 'Gov Contractor',
      problem: 'Stalled growth',
      outcome: 'Scaled from $12M-$15M → $25M by breaking into new defense divisions',
    },
    {
      company: 'Crown Partners',
      problem: '18 months of shrinking sales, losing to larger competitors',
      outcome: 'Landed $25M in new contracts, doubled average deal size, reached $60M in sales volume',
    },
    {
      company: 'number8',
      problem: 'No sales process, inconsistent messaging, unclear pipeline',
      outcome: 'Closed 3 deals worth $3M+ each in 9 months, shifted to larger consistent deals',
    },
    {
      company: 'BMWC Construction',
      problem: 'Undefined sales process, poor vetting, unpredictable pipeline',
      outcome: 'Increased project size from $1M → $20M, became recognized national player',
    },
    {
      company: 'JP Cullen',
      problem: 'Faced tough competition from major contractors, not lowest-cost option',
      outcome: 'Won $71M University of Wisconsin contract against larger competitors',
    },
  ]

  const metrics = [
    { value: '30-50%', label: 'Higher Conversion', sublabel: 'vs traditional outreach', color: 'metric-card-blue' },
    { value: '25-40%', label: 'Shorter Sales Cycles', sublabel: 'Faster revenue realization', color: 'metric-card-cyan' },
    { value: '40-60%', label: 'Lower Acquisition Costs', sublabel: 'Maximum ROI efficiency', color: 'metric-card-green' },
    { value: '100-1000+', label: 'Annual Referrals', sublabel: 'Systematic generation', color: 'metric-card-purple' },
  ]

  const whyChooseUs = [
    'Decades of enterprise sales leadership',
    'Proprietary AI-driven sales infrastructure',
    'Hands-on operators, not consultants',
    'Proven results: $3B+ in enterprise revenue delivered'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                Apply to See if You <span className="text-cyan-400">Qualify for Our Enterprise Sales Division</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                Whether you're a $10M firm or a $1B organization, moving the needle requires deals that are 
                10-50% of your annual revenue. We install the system that wins these deals consistently.
              </p>
              
              <p className="text-lg text-gray-400 mb-8">
                We only work with exceptional firms that meet our strict standards: $25M+ revenue, 
                proven quality, and financial capacity. Most applicants don't qualify.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/application-form">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                    Apply to See if You Qualify
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/why-us">
                  <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-slate-800 font-bold px-8 py-4 text-lg rounded-full transition-all duration-300">
                    See Our Standards
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroEnterpriseGrowth} 
                alt="Enterprise growth and sales transformation" 
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-sm font-medium bg-black/50 rounded-lg px-4 py-2">
                  See how Enterprise Sales+AI transforms your sales results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Needle-Moving Challenge */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Consistency Challenge
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Whether you're a $10M firm or a $1B organization, moving the needle requires deals that are 10-50% of your annual revenue. 
              The real challenge? Winning these deals consistently, 2-3 times per year, year after year.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-16 items-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Scale Reality</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">$10M Company</h4>
                  <p className="text-lg text-slate-700 mb-2">Needle-moving deals: <span className="font-bold text-cyan-600">$1M - $5M</span></p>
                  <p className="text-slate-600">10-50% of annual revenue per deal</p>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">$100M Company</h4>
                  <p className="text-lg text-slate-700 mb-2">Needle-moving deals: <span className="font-bold text-cyan-600">$10M - $50M</span></p>
                  <p className="text-slate-600">10-50% of annual revenue per deal</p>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">$1B Organization</h4>
                  <p className="text-lg text-slate-700 mb-2">Needle-moving deals: <span className="font-bold text-cyan-600">$100M - $500M</span></p>
                  <p className="text-slate-600">10-50% of annual revenue per deal</p>
                </div>
              </div>
              
              <div className="bg-slate-100 p-8 rounded-lg mt-12 text-center">
                <p className="text-2xl font-bold text-slate-900 mb-4">
                  You can spend the next 5 years figuring this out...
                </p>
                <p className="text-lg text-slate-600">
                  Or simply install the system that wins these deals consistently
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 text-white p-12 rounded-xl text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-white">Or Simply Install the System</h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Our Enterprise Sales as a Service division is your immediate install. We become your dedicated large account 
              acquisition team, fully operational in 2-3 months, winning you deals consistently within 6-18 months 
              depending on your market's buy cycles.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">2-3 MONTHS</div>
                <p className="text-slate-200">Fully operational enterprise sales division</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">6-18 MONTHS</div>
                <p className="text-slate-200">First needle-moving deals closed</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">GUARANTEED</div>
                <p className="text-slate-200">We guarantee the results</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 text-white p-12 rounded-xl">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4 text-white">The Investment & Return</h3>
              <p className="text-xl max-w-4xl mx-auto">
                If you apply and we select you as a qualified company, you will invest between $1M to $15M per year 
                in our team to gain 10x+ that in top-line revenue consistently within the next 18 months.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="bg-white/10 p-8 rounded-lg">
                <h4 className="text-2xl font-bold mb-4 text-white">Your Investment</h4>
                <div className="text-4xl font-bold mb-2">$1M - $15M</div>
                <p className="text-slate-200">Annual investment in our enterprise sales team</p>
              </div>
              <div className="bg-white/10 p-8 rounded-lg">
                <h4 className="text-2xl font-bold mb-4 text-white">Your Return</h4>
                <div className="text-4xl font-bold mb-2">10x+</div>
                <p className="text-slate-200">Top-line revenue increase within 18 months</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-cyan-500 text-white p-4 rounded-lg inline-block">
                <p className="text-xl font-bold">We Guarantee It!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DeepTrust OS + AI: Deal Sourcing Engine */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              How We Source Your Needle-Moving Deals
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Our Enterprise Sales Division doesn't just close deals—we source them systematically using our proprietary DeepTrust OS + AI system.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">DeepTrust OS + AI</h3>
              <p className="text-lg text-slate-300 mb-6">
                Our AI-driven executive referral system generates 100-1000 qualified executive referrals per year, 
                custom-trained on Executive Speak and your organization's unique value proposition.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">100-1000 Executive Referrals Annually</p>
                    <p className="text-slate-400">Systematic referral generation without cold outreach</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">AI-Qualified Decision Makers</p>
                    <p className="text-slate-400">Pre-qualified prospects ready for enterprise conversations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Custom Executive Speak Training</p>
                    <p className="text-slate-400">AI trained on your USP and executive communication patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">No Cold Outreach Required</p>
                    <p className="text-slate-400">Relationship-driven referrals, not cold prospecting</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-xl">
              <h4 className="text-2xl font-bold mb-4 text-white">The Complete System</h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">DeepTrust OS + AI</p>
                    <p className="text-slate-300">Sources qualified executive referrals</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Enterprise Sales Division</p>
                    <p className="text-slate-300">Closes needle-moving deals</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Guaranteed Results</p>
                    <p className="text-slate-300">10x+ ROI within 18 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-slate-800 p-8 rounded-xl max-w-4xl mx-auto mb-8">
              <blockquote className="text-xl italic text-slate-300 mb-4">
                "AI isn't replacing relationship-driven sales in professional services—it's enhancing and scaling it. 
                The firms that master AI-driven sales and marketing won't just grow faster—they'll dominate their market, 
                secure larger deals, and position themselves for significantly higher exits."
              </blockquote>
              <p className="text-cyan-400 font-semibold">— Nate Kievman, Founder</p>
            </div>
            
            <Link to="/deeptrust-os">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                Learn More About DeepTrust OS + AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Companies We've Accepted & Transformed */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Complete System Success Stories
            </h2>
            <p className="text-xl text-slate-600">
              These firms experienced the full power of our DeepTrust OS + AI sourcing combined with our Enterprise Sales Division closing:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-cyan-500" />
                  <h3 className="text-2xl font-bold text-slate-900">{study.company}</h3>
                </div>
                <p className="text-slate-600 mb-4">Challenge: {study.problem}</p>
                <p className="text-lg font-semibold text-slate-900">
                  Result: {study.outcome}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/case-studies">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                👉 See All Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Qualification Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Do You Meet Our Standards?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We maintain strict criteria to ensure mutual success. Only qualified firms proceed to our enterprise sales division.
          </p>
          
          <Link to="/application-form">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Apply for Qualification Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Proven Performance Metrics */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Proven Performance Metrics
            </h2>
            <p className="text-xl text-slate-600">
              Real results from enterprise implementations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className={`${metric.color} p-8 rounded-xl text-center`}>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-slate-800 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-slate-600">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Settle Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why settle for declining performance when systematic enterprise deals are proven to work?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-4xl mx-auto">
            Join forward-thinking executives discovering the systematic approach to generating $25M-$100M+ 
            qualified enterprise deals annually without cold outreach.
          </p>
          
          <a href="https://calendly.com/d/ctc5-s98-6rv/affiniti-growth-enterprise-sales-divsion-discovery-call" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Schedule a Growth Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          
          <p className="text-sm text-slate-500 mt-4">
            Beta program • Limited availability
          </p>
        </div>
      </section>

      {/* Aligned for Growth */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            Aligned for Growth
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Base Fee</h3>
              <div className="text-3xl font-bold text-slate-900 mb-2">$1M-$5M</div>
              <p className="text-slate-600">per year</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Commission</h3>
              <div className="text-3xl font-bold text-slate-900 mb-2">5-10%</div>
              <p className="text-slate-600">of top-line revenue from new enterprise accounts</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Equity Kickers</h3>
              <div className="text-3xl font-bold text-slate-900 mb-2">Performance</div>
              <p className="text-slate-600">milestones tied to revenue and valuation</p>
            </div>
          </div>
          
          <div className="bg-slate-800 text-white p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Promise</h3>
            <p className="text-lg mb-6">
              We deliver 2-5 enterprise deals annually, each worth $5M-$100M, resulting in{' '}
              <span className="font-bold">$20M-$100M+ annual revenue growth</span>.
            </p>
            <Link to="/application-form">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                👉 Apply to See if You Qualify
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Firms Choose Affiniti */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">
                Why Firms Choose Affiniti Growth Solutions
              </h2>
              
              <div className="space-y-4 mb-8">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-300">{reason}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-cyan-500/20 p-6 rounded-xl border border-cyan-400/30">
                <p className="text-xl font-semibold text-cyan-300 mb-2">
                  Affiniti Growth is the fastest path from "stuck at 5%" to "scaling toward $1B."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={enterpriseBuildingAbstract} 
                alt="Enterprise business growth" 
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-purple py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Think You Have What It Takes?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Submit your application for our enterprise sales division. We'll evaluate your firm's 
            qualifications and determine if you meet our standards for partnership.
          </p>
          
          <Link to="/application-form">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Submit Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Homepage

