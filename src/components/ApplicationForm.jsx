import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, CheckCircle, Building, DollarSign, Users, Target } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ApplicationForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    
    // Company Information
    companyName: '',
    website: '',
    industry: '',
    yearFounded: '',
    headquarters: '',
    
    // Financial Qualification
    annualRevenue: '',
    revenueGrowthRate: '',
    profitability: '',
    investmentCapacity: '',
    currentSalesTeamSize: '',
    
    // Business Qualification
    currentChallenges: '',
    targetDealSize: '',
    currentLargestDeal: '',
    salesProcess: '',
    crmSystem: '',
    
    // Quality Assessment
    serviceDescription: '',
    competitiveAdvantage: '',
    clientRetentionRate: '',
    referenceClients: '',
    awards: '',
    
    // Strategic Alignment
    growthGoals: '',
    timeframe: '',
    executiveCommitment: '',
    previousConsulting: '',
    expectations: '',
    
    // Final Questions
    whyAffiniti: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format the application data for email
      const applicationData = {
        ...formData,
        submissionDate: new Date().toISOString(),
        submissionTime: new Date().toLocaleString()
      }

      // Create email content
      const emailContent = `
NEW ENTERPRISE SALES DIVISION APPLICATION

Submission Date: ${applicationData.submissionTime}

=== CONTACT INFORMATION ===
Name: ${formData.firstName} ${formData.lastName}
Title: ${formData.title}
Email: ${formData.email}
Phone: ${formData.phone}

=== COMPANY INFORMATION ===
Company: ${formData.companyName}
Website: ${formData.website}
Industry: ${formData.industry}
Founded: ${formData.yearFounded}
Headquarters: ${formData.headquarters}

=== FINANCIAL QUALIFICATION ===
Annual Revenue: ${formData.annualRevenue}
Growth Rate: ${formData.revenueGrowthRate}
Profitability: ${formData.profitability}
Investment Capacity: ${formData.investmentCapacity}
Sales Team Size: ${formData.currentSalesTeamSize}

=== BUSINESS QUALIFICATION ===
Current Challenges: ${formData.currentChallenges}
Target Deal Size: ${formData.targetDealSize}
Current Largest Deal: ${formData.currentLargestDeal}
Sales Process: ${formData.salesProcess}
CRM System: ${formData.crmSystem}

=== QUALITY ASSESSMENT ===
Service Description: ${formData.serviceDescription}
Competitive Advantage: ${formData.competitiveAdvantage}
Client Retention Rate: ${formData.clientRetentionRate}
Reference Clients: ${formData.referenceClients || 'Not provided'}
Awards: ${formData.awards || 'Not provided'}

=== STRATEGIC ALIGNMENT ===
Growth Goals: ${formData.growthGoals}
Timeframe: ${formData.timeframe}
Executive Commitment: ${formData.executiveCommitment}
Previous Consulting: ${formData.previousConsulting}
Expectations: ${formData.expectations}

=== FINAL QUESTIONS ===
Why Affiniti: ${formData.whyAffiniti}
Additional Info: ${formData.additionalInfo || 'Not provided'}

=== NEXT STEPS ===
1. Review application for qualification criteria
2. Conduct initial assessment call if qualified  
3. Schedule detailed discovery session
4. Present proposal if mutual fit
      `

      // Send email using a simple mailto approach as fallback
      // In production, you would use EmailJS, SendGrid, or similar service
      const subject = `New Enterprise Sales Division Application - ${formData.companyName}`
      const mailtoLink = `mailto:nate@affinitisolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`
      
      // For demonstration, we'll log the data and simulate success
      console.log('Application Data:', applicationData)
      console.log('Email Content:', emailContent)
      console.log('Mailto Link:', mailtoLink)
      
      // In a real implementation, you would send this via EmailJS or backend API
      // For now, we'll simulate the email sending and redirect
      
      // Redirect to thank you page
      navigate('/application-thank-you')
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Qualification Required
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Enterprise Sales Division Application
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Complete this comprehensive application to determine if your firm meets our standards for partnership. 
            All information will be kept strictly confidential.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Contact Information */}
            <section>
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Title/Position *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Company Information */}
            <section>
              <div className="flex items-center mb-6">
                <Building className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Company Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Website *</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Industry *</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Industry</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Technology/Software">Technology/Software</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Construction">Construction</option>
                    <option value="Financial Services">Financial Services</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Legal">Legal</option>
                    <option value="Marketing/Advertising">Marketing/Advertising</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Year Founded *</label>
                  <input
                    type="number"
                    name="yearFounded"
                    value={formData.yearFounded}
                    onChange={handleInputChange}
                    required
                    min="1900"
                    max="2024"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Headquarters Location *</label>
                  <input
                    type="text"
                    name="headquarters"
                    value={formData.headquarters}
                    onChange={handleInputChange}
                    required
                    placeholder="City, State, Country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Financial Qualification */}
            <section>
              <div className="flex items-center mb-6">
                <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Financial Qualification</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Annual Revenue *</label>
                  <select
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Revenue Range</option>
                    <option value="Under $25M">Under $25M</option>
                    <option value="$25M - $50M">$25M - $50M</option>
                    <option value="$50M - $100M">$50M - $100M</option>
                    <option value="$100M - $250M">$100M - $250M</option>
                    <option value="$250M - $500M">$250M - $500M</option>
                    <option value="$500M - $750M">$500M - $750M</option>
                    <option value="Over $750M">Over $750M</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Revenue Growth Rate (Last 3 Years) *</label>
                  <select
                    name="revenueGrowthRate"
                    value={formData.revenueGrowthRate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Growth Rate</option>
                    <option value="Declining">Declining</option>
                    <option value="0-5%">0-5%</option>
                    <option value="5-15%">5-15%</option>
                    <option value="15-25%">15-25%</option>
                    <option value="25-50%">25-50%</option>
                    <option value="Over 50%">Over 50%</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Profitability Status *</label>
                  <select
                    name="profitability"
                    value={formData.profitability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Status</option>
                      <option value="Highly Profitable (>20% margins)">Highly Profitable (&gt;20% margins)</option>
                    <option value="Profitable (10-20% margins)">Profitable (10-20% margins)</option>
                    <option value="Marginally Profitable (5-10% margins)">Marginally Profitable (5-10% margins)</option>
                    <option value="Break-even">Break-even</option>
                    <option value="Unprofitable">Unprofitable</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Investment Capacity for Enterprise Sales Division *</label>
                  <select
                    name="investmentCapacity"
                    value={formData.investmentCapacity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Investment Range</option>
                    <option value="Under $500K">Under $500K</option>
                    <option value="$500K - $1M">$500K - $1M</option>
                    <option value="$1M - $2M">$1M - $2M</option>
                    <option value="$2M - $5M">$2M - $5M</option>
                    <option value="Over $5M">Over $5M</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Sales Team Size *</label>
                  <input
                    type="number"
                    name="currentSalesTeamSize"
                    value={formData.currentSalesTeamSize}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Business Qualification */}
            <section>
              <div className="flex items-center mb-6">
                <Target className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Business Qualification</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">What are your biggest growth challenges? *</label>
                  <textarea
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your current sales challenges, pipeline issues, or growth obstacles..."
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Target Deal Size for Enterprise Accounts *</label>
                    <select
                      name="targetDealSize"
                      value={formData.targetDealSize}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Target Deal Size</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $10M">$5M - $10M</option>
                      <option value="$10M - $25M">$10M - $25M</option>
                      <option value="$25M - $50M">$25M - $50M</option>
                      <option value="$50M - $100M">$50M - $100M</option>
                      <option value="Over $100M">Over $100M</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Largest Deal Size *</label>
                    <select
                      name="currentLargestDeal"
                      value={formData.currentLargestDeal}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Current Largest Deal</option>
                      <option value="Under $500K">Under $500K</option>
                      <option value="$500K - $1M">$500K - $1M</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $10M">$5M - $10M</option>
                      <option value="$10M - $25M">$10M - $25M</option>
                      <option value="Over $25M">Over $25M</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Describe your current sales process *</label>
                  <textarea
                    name="salesProcess"
                    value={formData.salesProcess}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How do you currently generate leads, qualify prospects, and close deals?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current CRM/Sales Technology *</label>
                  <input
                    type="text"
                    name="crmSystem"
                    value={formData.crmSystem}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Salesforce, HubSpot, Pipedrive, etc."
                  />
                </div>
              </div>
            </section>

            {/* Quality Assessment */}
            <section>
              <div className="flex items-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Quality Assessment</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Describe your core services/products *</label>
                  <textarea
                    name="serviceDescription"
                    value={formData.serviceDescription}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What do you deliver to clients? What makes your offering unique?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">What is your competitive advantage? *</label>
                  <textarea
                    name="competitiveAdvantage"
                    value={formData.competitiveAdvantage}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Why do clients choose you over competitors?"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Client Retention Rate *</label>
                    <select
                      name="clientRetentionRate"
                      value={formData.clientRetentionRate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Retention Rate</option>
                      <option value="Over 95%">Over 95%</option>
                      <option value="90-95%">90-95%</option>
                      <option value="80-90%">80-90%</option>
                      <option value="70-80%">70-80%</option>
                      <option value="Under 70%">Under 70%</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Industry Awards/Recognition</label>
                    <input
                      type="text"
                      name="awards"
                      value={formData.awards}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="List any relevant awards or recognition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Reference Clients (Optional)</label>
                  <textarea
                    name="referenceClients"
                    value={formData.referenceClients}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="List 2-3 notable clients who could serve as references (company names only)"
                  />
                </div>
              </div>
            </section>

            {/* Strategic Alignment */}
            <section>
              <div className="flex items-center mb-6">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Strategic Alignment</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">What are your growth goals for the next 3 years? *</label>
                  <textarea
                    name="growthGoals"
                    value={formData.growthGoals}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Revenue targets, market expansion, new services, etc."
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Desired Timeframe for Results *</label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Timeframe</option>
                      <option value="6 months">6 months</option>
                      <option value="12 months">12 months</option>
                      <option value="18 months">18 months</option>
                      <option value="24 months">24 months</option>
                      <option value="3+ years">3+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Executive Commitment Level *</label>
                    <select
                      name="executiveCommitment"
                      value={formData.executiveCommitment}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Commitment Level</option>
                      <option value="CEO/Founder fully committed">CEO/Founder fully committed</option>
                      <option value="Senior leadership aligned">Senior leadership aligned</option>
                      <option value="Some leadership buy-in">Some leadership buy-in</option>
                      <option value="Exploring options">Exploring options</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Previous consulting/sales improvement experience *</label>
                  <textarea
                    name="previousConsulting"
                    value={formData.previousConsulting}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Have you worked with sales consultants before? What were the results?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">What are your expectations from Affiniti? *</label>
                  <textarea
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What specific outcomes are you looking for?"
                  />
                </div>
              </div>
            </section>

            {/* Final Questions */}
            <section>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Why are you interested in working with Affiniti specifically? *</label>
                  <textarea
                    name="whyAffiniti"
                    value={formData.whyAffiniti}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What attracted you to our approach?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Anything else you'd like us to know about your firm or situation?"
                  />
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-slate-700 mb-6">
                By submitting this application, you acknowledge that all information provided is accurate and complete. 
                We will review your application and contact you within 5 business days.
              </p>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-4 text-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm

