import React from 'react'
import { FileText, Heart, MessageSquare, CheckCircle } from 'lucide-react'

const FinalDetails = ({ formData, formErrors, onInputChange }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full mb-4">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Final Details</h2>
        <p className="text-slate-600">Tell us why you're interested in working with Affiniti and any additional information</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Why Affiniti */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Heart className="w-4 h-4 mr-2 text-slate-500" />
            Why are you interested in working with Affiniti specifically? *
          </label>
          <textarea
            name="whyAffiniti"
            value={formData.whyAffiniti}
            onChange={onInputChange}
            rows="4"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-none
              ${formErrors.whyAffiniti 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-slate-500'
              }
            `}
            placeholder="What attracted you to our approach? What specific aspects of our methodology interest you?"
          />
          {formErrors.whyAffiniti && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.whyAffiniti}
            </p>
          )}
        </div>

        {/* Additional Information */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <MessageSquare className="w-4 h-4 mr-2 text-slate-500" />
            Additional Information
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={onInputChange}
            rows="4"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-none hover:border-slate-400"
            placeholder="Anything else you'd like us to know about your firm or situation? Any specific questions or concerns?"
          />
        </div>
      </div>

      {/* Application Summary */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 text-slate-600" />
          Application Summary
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
          <div>
            <p><strong>Contact:</strong> {formData.firstName} {formData.lastName}</p>
            <p><strong>Company:</strong> {formData.companyName}</p>
            <p><strong>Industry:</strong> {formData.industry}</p>
            <p><strong>Revenue:</strong> {formData.annualRevenue}</p>
          </div>
          <div>
            <p><strong>Investment Capacity:</strong> {formData.investmentCapacity}</p>
            <p><strong>Target Deal Size:</strong> {formData.targetDealSize}</p>
            <p><strong>Timeframe:</strong> {formData.timeframe}</p>
            <p><strong>Commitment:</strong> {formData.executiveCommitment}</p>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Terms & Conditions</h3>
        <div className="space-y-3 text-sm text-blue-800">
          <p>
            <strong>Confidentiality:</strong> All information provided in this application will be kept strictly confidential and used only for evaluation purposes.
          </p>
          <p>
            <strong>Review Process:</strong> We will review your application and contact you within 5 business days with our initial assessment.
          </p>
          <p>
            <strong>Next Steps:</strong> If qualified, we will schedule an initial assessment call to discuss your specific needs and our approach.
          </p>
          <p>
            <strong>Partnership:</strong> This application does not guarantee partnership. All partnerships are subject to mutual agreement and successful qualification.
          </p>
        </div>
      </div>

      {/* Final Confirmation */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
        <div className="flex items-start">
          <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-emerald-900 mb-2">Ready to Submit?</h3>
            <p className="text-emerald-800 text-sm">
              By submitting this application, you acknowledge that all information provided is accurate and complete. 
              You understand that this is a qualification process and that partnership is subject to mutual agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalDetails
