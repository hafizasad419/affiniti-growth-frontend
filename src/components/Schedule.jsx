import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, CheckCircle, User, Building, Target } from 'lucide-react'

const Schedule = () => {
  const navigate = useNavigate()
  const [applicationData, setApplicationData] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)

  useEffect(() => {
    // Get application data from localStorage
    const data = localStorage.getItem('applicationData')
    if (data) {
      setApplicationData(JSON.parse(data))
    } else {
      // Redirect to application if no data found
      navigate('/application')
    }
  }, [navigate])

  // Mock calendar slots - in production, this would integrate with Calendly/HubSpot/Chili Piper
  const availableSlots = [
    { id: 1, date: 'Today', time: '2:00 PM EST', datetime: '2024-09-11T14:00:00' },
    { id: 2, date: 'Today', time: '4:30 PM EST', datetime: '2024-09-11T16:30:00' },
    { id: 3, date: 'Tomorrow', time: '10:00 AM EST', datetime: '2024-09-12T10:00:00' },
    { id: 4, date: 'Tomorrow', time: '1:00 PM EST', datetime: '2024-09-12T13:00:00' },
    { id: 5, date: 'Tomorrow', time: '3:30 PM EST', datetime: '2024-09-12T15:30:00' },
    { id: 6, date: 'Friday', time: '9:00 AM EST', datetime: '2024-09-13T09:00:00' },
    { id: 7, date: 'Friday', time: '11:30 AM EST', datetime: '2024-09-13T11:30:00' },
    { id: 8, date: 'Friday', time: '2:00 PM EST', datetime: '2024-09-13T14:00:00' },
  ]

  const handleSchedule = () => {
    if (selectedSlot) {
      // Store the selected slot
      localStorage.setItem('selectedSlot', JSON.stringify(selectedSlot))
      // Navigate to confirmation
      navigate('/confirmation')
    }
  }

  if (!applicationData) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen section-light py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Application Approved • Ready to Schedule
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Schedule Your Growth Strategy Call
          </h1>
          
          <p className="text-xl text-slate-600 mb-8">
            Choose your preferred time for a 30-minute consultation with our enterprise growth specialists.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Application Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl card-shadow-lg border border-slate-200 p-6 sticky top-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Your Application Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <User className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">{applicationData.fullName}</div>
                    <div className="text-sm text-slate-600">{applicationData.email}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">{applicationData.companyName}</div>
                    <div className="text-sm text-slate-600">{applicationData.companyRevenue} revenue</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Primary Challenge:</div>
                    <div className="font-medium text-slate-900">{applicationData.growthChallenge}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-slate-600 mb-1">24-Month Goal:</div>
                    <div className="font-medium text-slate-900">{applicationData.goal24Months}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">What to Expect:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>30-minute strategic consultation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Custom growth strategy insights</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Clear next steps for $25M+ deals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>No obligation or pressure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Calendar Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl card-shadow-lg border border-slate-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-cyan-500" />
                <h3 className="text-2xl font-bold text-slate-900">Available Time Slots</h3>
              </div>
              
              <p className="text-slate-600 mb-8">
                All times are Eastern Standard Time. Select the slot that works best for your schedule.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {availableSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedSlot?.id === slot.id
                        ? 'border-cyan-500 bg-cyan-50 shadow-md'
                        : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="font-semibold text-slate-900">{slot.date}</div>
                    <div className="text-slate-600">{slot.time}</div>
                    {selectedSlot?.id === slot.id && (
                      <div className="mt-2 flex items-center space-x-2 text-cyan-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Selected</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {selectedSlot && (
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 mb-6">
                  <h4 className="font-bold text-slate-900 mb-2">Selected Time Slot:</h4>
                  <p className="text-slate-700">
                    <span className="font-semibold">{selectedSlot.date}</span> at{' '}
                    <span className="font-semibold">{selectedSlot.time}</span>
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    You'll receive a calendar invitation and prep materials via email.
                  </p>
                </div>
              )}
              
              <div className="text-center">
                <Button
                  onClick={handleSchedule}
                  disabled={!selectedSlot}
                  size="lg"
                  className={`font-bold px-8 py-4 text-lg rounded-full shadow-xl transition-all duration-300 ${
                    selectedSlot
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-2xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Confirm My Growth Strategy Call
                </Button>
                
                {!selectedSlot && (
                  <p className="text-sm text-slate-500 mt-3">
                    Please select a time slot to continue
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl card-shadow border border-slate-200 p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Before Your Call</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">You'll Receive:</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Calendar invitation with Zoom/Teams link</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>"Top 5 Enterprise Growth Challenges" prep guide</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Pre-call questionnaire (optional)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Direct contact for rescheduling if needed</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Come Prepared to Discuss:</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Current revenue and growth trajectory</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Biggest obstacles to landing enterprise deals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Ideal client profile and target market</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Timeline for growth initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule

