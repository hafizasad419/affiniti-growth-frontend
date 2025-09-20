import React from 'react'
import { Target, DollarSign, TrendingUp, Settings, Database } from 'lucide-react'

const BusinessAssessment = ({ formData, formErrors, onInputChange, touchedFields }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full mb-4">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Business Assessment</h2>
        <p className="text-slate-600">Help us understand your current business challenges and sales process</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Current Challenges */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Target className="w-4 h-4 mr-2 text-slate-500" />
            What are your biggest growth challenges? *
          </label>
          <textarea
            name="currentChallenges"
            value={formData.currentChallenges}
            onChange={onInputChange}
            rows="4"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none
              ${formErrors.currentChallenges 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-purple-500'
              }
            `}
            placeholder="Describe your current sales challenges, pipeline issues, or growth obstacles..."
          />
          {formErrors.currentChallenges && touchedFields.currentChallenges && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.currentChallenges}
            </p>
          )}
        </div>

        {/* Deal Size Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-slate-700">
              <DollarSign className="w-4 h-4 mr-2 text-slate-500" />
              Target Deal Size for Enterprise Accounts *
            </label>
            <select
              name="targetDealSize"
              value={formData.targetDealSize}
              onChange={onInputChange}
              className={`
                w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200
                ${formErrors.targetDealSize 
                  ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                  : 'border-slate-300 hover:border-slate-400 focus:border-purple-500'
                }
              `}
            >
              <option value="">Select Target Deal Size</option>
              <option value="$1M - $5M">$1M - $5M</option>
              <option value="$5M - $10M">$5M - $10M</option>
              <option value="$10M - $25M">$10M - $25M</option>
              <option value="$25M - $50M">$25M - $50M</option>
              <option value="$50M - $100M">$50M - $100M</option>
              <option value="Over $100M">Over $100M</option>
            </select>
            {formErrors.targetDealSize && touchedFields.targetDealSize && (
              <p className="text-red-600 text-sm flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {formErrors.targetDealSize}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-slate-700">
              <TrendingUp className="w-4 h-4 mr-2 text-slate-500" />
              Current Largest Deal Size *
            </label>
            <select
              name="currentLargestDeal"
              value={formData.currentLargestDeal}
              onChange={onInputChange}
              className={`
                w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200
                ${formErrors.currentLargestDeal 
                  ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                  : 'border-slate-300 hover:border-slate-400 focus:border-purple-500'
                }
              `}
            >
              <option value="">Select Current Largest Deal</option>
              <option value="Under $500K">Under $500K</option>
              <option value="$500K - $1M">$500K - $1M</option>
              <option value="$1M - $5M">$1M - $5M</option>
              <option value="$5M - $10M">$5M - $10M</option>
              <option value="$10M - $25M">$10M - $25M</option>
              <option value="Over $25M">Over $25M</option>
            </select>
            {formErrors.currentLargestDeal && touchedFields.currentLargestDeal && (
              <p className="text-red-600 text-sm flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {formErrors.currentLargestDeal}
              </p>
            )}
          </div>
        </div>

        {/* Sales Process */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Settings className="w-4 h-4 mr-2 text-slate-500" />
            Describe your current sales process *
          </label>
          <textarea
            name="salesProcess"
            value={formData.salesProcess}
            onChange={onInputChange}
            rows="3"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none
              ${formErrors.salesProcess 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-purple-500'
              }
            `}
            placeholder="How do you currently generate leads, qualify prospects, and close deals?"
          />
          {formErrors.salesProcess && touchedFields.salesProcess && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.salesProcess}
            </p>
          )}
        </div>

        {/* CRM System */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Database className="w-4 h-4 mr-2 text-slate-500" />
            Current CRM/Sales Technology *
          </label>
          <input
            type="text"
            name="crmSystem"
            value={formData.crmSystem}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200
              ${formErrors.crmSystem 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-purple-500'
              }
            `}
            placeholder="Salesforce, HubSpot, Pipedrive, etc."
          />
          {formErrors.crmSystem && touchedFields.crmSystem && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.crmSystem}
            </p>
          )}
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <p className="text-purple-800 text-sm">
          <strong>Business Assessment:</strong> Understanding your current challenges and sales process helps us identify the most effective strategies for your enterprise sales division.
        </p>
      </div>
    </div>
  )
}

export default BusinessAssessment
