import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react'

const Application = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    companyRevenue: '',
    growthChallenge: '',
    goal24Months: '',
    openToEngagement: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Store form data in localStorage for the scheduling page
    localStorage.setItem('applicationData', JSON.stringify(formData))
    // Navigate to scheduling page
    navigate('/schedule')
  }

  const revenueOptions = [
    '$25M - $100M',
    '$100M - $250M', 
    '$250M - $500M',
    '$500M - $750M',
    '$750M+'
  ]

  const challengeOptions = [
    'Inconsistent large deals',
    'Plateaued growth',
    'Sales team maxed out',
    'Limited enterprise access',
    'Unpredictable pipeline',
    'Other'
  ]

  const goalOptions = [
    'Land 2-5 enterprise accounts annually',
    'Grow company valuation for exit',
    'Expand to new markets/regions',
    'Build predictable $25M+ pipeline',
    'Scale beyond current capacity',
    'Other'
  ]

  return (
    <div className="min-h-screen section-light py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Confidential Application • Secure Processing
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Enterprise Growth Application
          </h1>
          
          <p className="text-xl text-slate-600 mb-8">
            Help us understand your growth objectives so we can provide the most relevant insights during your strategy call.
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>5 minutes to complete</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Immediate scheduling access</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl card-shadow-lg border border-slate-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@company.com"
                />
              </div>
            </div>

            {/* Company Information */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-slate-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="companyRevenue" className="block text-sm font-semibold text-slate-700 mb-2">
                Annual Company Revenue *
              </label>
              <select
                id="companyRevenue"
                name="companyRevenue"
                required
                value={formData.companyRevenue}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select revenue range</option>
                {revenueOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Growth Challenges */}
            <div>
              <label htmlFor="growthChallenge" className="block text-sm font-semibold text-slate-700 mb-2">
                Biggest Growth Challenge *
              </label>
              <select
                id="growthChallenge"
                name="growthChallenge"
                required
                value={formData.growthChallenge}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select your primary challenge</option>
                {challengeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="goal24Months" className="block text-sm font-semibold text-slate-700 mb-2">
                Primary Goal for Next 24 Months *
              </label>
              <select
                id="goal24Months"
                name="goal24Months"
                required
                value={formData.goal24Months}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select your primary goal</option>
                {goalOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Engagement Model */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-4">
                Are you open to a base fee + commission + equity-aligned engagement model? *
              </label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="openToEngagement"
                    value="yes"
                    checked={formData.openToEngagement === 'yes'}
                    onChange={handleChange}
                    className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"
                    required
                  />
                  <span className="text-slate-700">Yes, I'm interested in performance-aligned partnerships</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="openToEngagement"
                    value="no"
                    checked={formData.openToEngagement === 'no'}
                    onChange={handleChange}
                    className="w-4 h-4 text-cyan-500 focus:ring-cyan-500"
                    required
                  />
                  <span className="text-slate-700">No, I prefer traditional fee structures only</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-200">
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  👉 Proceed to Schedule
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-sm text-slate-500 mt-4">
                  Next: Choose your preferred time for a 30-minute strategy call
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg card-shadow border border-slate-200">
              <div className="text-2xl font-bold text-cyan-600 mb-2">$3B+</div>
              <div className="text-sm text-slate-600">Enterprise Revenue Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-lg card-shadow border border-slate-200">
              <div className="text-2xl font-bold text-emerald-600 mb-2">100K+</div>
              <div className="text-sm text-slate-600">C-Suite Meetings Facilitated</div>
            </div>
            <div className="bg-white p-6 rounded-lg card-shadow border border-slate-200">
              <div className="text-2xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-slate-600">Years Combined Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Application

