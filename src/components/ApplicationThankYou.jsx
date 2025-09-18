import React from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, Phone, Mail, MessageCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const ApplicationThankYou = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Application Submitted Successfully
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Thank you for your interest in Affiniti Growth Solutions. Your application has been received 
            and is being reviewed by our team.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">What Happens Next?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Application Review</h3>
              <p className="text-slate-700">Our team will thoroughly review your application and assess your firm's qualifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Initial Response</h3>
              <p className="text-slate-700">You'll receive an initial response within 5 business days regarding your application status</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Next Steps</h3>
              <p className="text-slate-700">If qualified, we'll schedule a detailed discussion about your enterprise sales division</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Have Questions Now?</h2>
          <p className="text-lg text-slate-700 text-center mb-8">
            If you have immediate questions about your application or our process, 
            you can contact our team directly:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nate Kievman */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">NK</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Nate Kievman</h3>
                <p className="text-blue-600 font-medium">Application Review Lead</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a href="tel:3307779055" className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                    330.777.9055
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <a href="sms:3307779055" className="text-blue-600 hover:text-blue-800">
                    Text Available
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:nate@affinitisolutions.com" className="text-blue-600 hover:text-blue-800">
                    nate@affinitisolutions.com
                  </a>
                </div>
              </div>
            </div>

            {/* Tom Searcy */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">TS</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Tom Searcy</h3>
                <p className="text-green-600 font-medium">Strategic Partnerships</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <a href="tel:3174144911" className="text-lg font-semibold text-green-600 hover:text-green-800">
                    317.414.4911
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <a href="sms:3174144911" className="text-green-600 hover:text-green-800">
                    Text Available
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Available via phone/text</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-800 font-bold text-sm">!</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
              <p className="text-yellow-700">
                Due to our selective qualification process, we can only accept a limited number of new clients each quarter. 
                Applications are reviewed in the order they are received. We appreciate your patience during our thorough evaluation process.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="border-gray-300 text-slate-700 hover:bg-gray-50 px-8 py-3">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApplicationThankYou

