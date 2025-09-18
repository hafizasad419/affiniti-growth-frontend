import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, Calendar, Clock, Mail, Phone, Download, ArrowRight } from 'lucide-react'

const Confirmation = () => {
  const [applicationData, setApplicationData] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)

  useEffect(() => {
    // Get data from localStorage
    const appData = localStorage.getItem('applicationData')
    const slotData = localStorage.getItem('selectedSlot')
    
    if (appData) setApplicationData(JSON.parse(appData))
    if (slotData) setSelectedSlot(JSON.parse(slotData))
  }, [])

  const handleDownloadPrep = () => {
    // In production, this would download the actual PDF
    alert('Prep guide download would start here. In production, this would be a real PDF download.')
  }

  if (!applicationData || !selectedSlot) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Loading confirmation...</h2>
          <p className="text-slate-600">If this persists, please contact support.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen section-light py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Congratulations, {applicationData.fullName.split(' ')[0]}!
          </h1>
          
          <p className="text-xl text-slate-600 mb-8">
            You've taken the first step toward securing predictable $25M+ deals. 
            Your Growth Strategy Call is confirmed.
          </p>
        </div>

        {/* Confirmation Details */}
        <div className="bg-white rounded-xl card-shadow-lg border border-emerald-200 p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Meeting Details */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-emerald-600 mr-3" />
                Meeting Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">
                      {selectedSlot.date} at {selectedSlot.time}
                    </div>
                    <div className="text-sm text-slate-600">30-minute Growth Strategy Call</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Calendar Invitation Sent</div>
                    <div className="text-sm text-slate-600">Check {applicationData.email} for meeting link</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Backup Contact</div>
                    <div className="text-sm text-slate-600">+1 (555) 123-4567 for any issues</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                What Happens Next
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Immediate</div>
                    <div className="text-sm text-slate-600">Calendar invite and prep materials sent to your email</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">24 Hours Before</div>
                    <div className="text-sm text-slate-600">Reminder email with final prep questions</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">During Call</div>
                    <div className="text-sm text-slate-600">Custom growth strategy presentation for {applicationData.companyName}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">After Call</div>
                    <div className="text-sm text-slate-600">Clear next steps to start landing $25M+ enterprise deals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prep Materials */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Pre-Call Preparation Guide
              </h3>
              <p className="text-slate-600">
                Download our exclusive guide: "Top 5 Enterprise Growth Challenges for Professional Services Firms"
              </p>
            </div>
            <Button 
              onClick={handleDownloadPrep}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Guide
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>5 most common growth plateaus and their solutions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Enterprise sales framework overview</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Self-assessment checklist for your firm</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Come Prepared to Discuss:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Your current largest deal size and frequency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Biggest obstacles to enterprise growth</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Timeline and goals for the next 24 months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Reminders */}
        <div className="bg-white rounded-xl card-shadow border border-slate-200 p-8 mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Important Reminders</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3 text-emerald-600">✓ What We Will Cover:</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Custom growth strategy for {applicationData.companyName}</li>
                <li>• Specific tactics for your revenue range ({applicationData.companyRevenue})</li>
                <li>• Solutions for your challenge: {applicationData.growthChallenge}</li>
                <li>• Clear roadmap to achieve: {applicationData.goal24Months}</li>
                <li>• Next steps and potential partnership discussion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3 text-slate-600">ℹ️ Please Note:</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• We only work with firms $25M–$750M in revenue</li>
                <li>• This is a strategy session, not a sales pitch</li>
                <li>• Come prepared with specific questions about your growth</li>
                <li>• We'll provide actionable insights regardless of fit</li>
                <li>• No obligation to move forward after the call</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Need to Reschedule */}
        <div className="text-center bg-slate-50 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Need to Reschedule?</h3>
          <p className="text-slate-600 mb-4">
            No problem. Use the link in your calendar invitation or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:info@affinitygrowth.com" 
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              info@affinitygrowth.com
            </a>
            <span className="hidden sm:inline text-slate-400">•</span>
            <a 
              href="tel:+15551234567" 
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* Return to Site */}
        <div className="text-center mt-12">
          <Link to="/">
            <Button variant="outline" className="font-semibold px-6 py-3">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Confirmation

