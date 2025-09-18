import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    revenueRange: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const revenueRanges = [
    'Under $5M',
    '$5M - $25M',
    '$25M - $50M',
    '$50M - $100M',
    '$100M+'
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Land Enterprise Accounts?
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Let's build your enterprise sales division and secure your next $25M deal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Schedule a Growth Call</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="revenueRange" className="block text-sm font-medium text-slate-700 mb-2">
                  Revenue Range *
                </label>
                <select
                  id="revenueRange"
                  name="revenueRange"
                  required
                  value={formData.revenueRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select revenue range</option>
                  {revenueRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your growth goals and challenges..."
                ></textarea>
              </div>

              <a href="https://calendly.com/d/ctc5-s98-6rv/affiniti-growth-enterprise-sales-divsion-discovery-call" target="_blank" rel="noopener noreferrer">
                <Button type="button" size="lg" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 text-lg">
                  👉 Schedule a Growth Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <a href="mailto:info@affinitygrowth.com" className="text-blue-600 hover:text-blue-700">
                      info@affinitygrowth.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <a href="tel:+1-555-123-4567" className="text-blue-600 hover:text-blue-700">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/company/affiniti-growth" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      /company/affiniti-growth
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p>30-minute discovery call to understand your growth challenges</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p>Custom growth strategy presentation for your specific situation</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p>Clear next steps to start landing $25M+ enterprise deals</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

