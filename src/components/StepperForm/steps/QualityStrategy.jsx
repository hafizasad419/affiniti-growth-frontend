import React from 'react'
import { CheckCircle, Award, Target, TrendingUp, Clock, Users, MessageSquare, Star } from 'lucide-react'

const QualityStrategy = ({ formData, formErrors, onInputChange, touchedFields }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Quality & Strategy</h2>
        <p className="text-slate-600">Tell us about your services, competitive advantage, and strategic goals</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Service Description */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <CheckCircle className="w-4 h-4 mr-2 text-slate-500" />
            Describe your core services/products *
          </label>
          <textarea
            name="serviceDescription"
            value={formData.serviceDescription}
            onChange={onInputChange}
            rows="4"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none
              ${formErrors.serviceDescription 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-green-500'
              }
            `}
            placeholder="What do you deliver to clients? What makes your offering unique?"
          />
          {formErrors.serviceDescription && touchedFields.serviceDescription && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.serviceDescription}
            </p>
          )}
        </div>

        {/* Competitive Advantage */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Award className="w-4 h-4 mr-2 text-slate-500" />
            What is your competitive advantage? *
          </label>
          <textarea
            name="competitiveAdvantage"
            value={formData.competitiveAdvantage}
            onChange={onInputChange}
            rows="3"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none
              ${formErrors.competitiveAdvantage 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-green-500'
              }
            `}
            placeholder="Why do clients choose you over competitors?"
          />
          {formErrors.competitiveAdvantage && touchedFields.competitiveAdvantage && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.competitiveAdvantage}
            </p>
          )}
        </div>

        {/* Client Retention Rate */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Target className="w-4 h-4 mr-2 text-slate-500" />
            Client Retention Rate *
          </label>
          <select
            name="clientRetentionRate"
            value={formData.clientRetentionRate}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200
              ${formErrors.clientRetentionRate 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-green-500'
              }
            `}
          >
            <option value="">Select Retention Rate</option>
            <option value="Over 95%">Over 95%</option>
            <option value="90-95%">90-95%</option>
            <option value="80-90%">80-90%</option>
            <option value="70-80%">70-80%</option>
            <option value="Under 70%">Under 70%</option>
          </select>
          {formErrors.clientRetentionRate && touchedFields.clientRetentionRate && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.clientRetentionRate}
            </p>
          )}
        </div>

        {/* Awards and Recognition */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Star className="w-4 h-4 mr-2 text-slate-500" />
            Industry Awards/Recognition
          </label>
          <input
            type="text"
            name="awards"
            value={formData.awards}
            onChange={onInputChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-slate-400"
            placeholder="List any relevant awards or recognition"
          />
        </div>

        {/* Reference Clients */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Users className="w-4 h-4 mr-2 text-slate-500" />
            Reference Clients (Optional)
          </label>
          <textarea
            name="referenceClients"
            value={formData.referenceClients}
            onChange={onInputChange}
            rows="3"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none hover:border-slate-400"
            placeholder="List 2-3 notable clients who could serve as references (company names only)"
          />
        </div>

        {/* Growth Goals */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <TrendingUp className="w-4 h-4 mr-2 text-slate-500" />
            What are your growth goals for the next 3 years? *
          </label>
          <textarea
            name="growthGoals"
            value={formData.growthGoals}
            onChange={onInputChange}
            rows="3"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none
              ${formErrors.growthGoals 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-green-500'
              }
            `}
            placeholder="Revenue targets, market expansion, new services, etc."
          />
          {formErrors.growthGoals && touchedFields.growthGoals && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.growthGoals}
            </p>
          )}
        </div>

        {/* Timeframe and Commitment */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-slate-700">
              <Clock className="w-4 h-4 mr-2 text-slate-500" />
              Desired Timeframe for Results *
            </label>
            <select
              name="timeframe"
              value={formData.timeframe}
              onChange={onInputChange}
              className={`
                w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200
                ${formErrors.timeframe 
                  ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                  : 'border-slate-300 hover:border-slate-400 focus:border-green-500'
                }
              `}
            >
              <option value="">Select Timeframe</option>
              <option value="6 months">6 months</option>
              <option value="12 months">12 months</option>
              <option value="18 months">18 months</option>
              <option value="24 months">24 months</option>
              <option value="3+ years">3+ years</option>
            </select>
            {formErrors.timeframe && touchedFields.timeframe && (
              <p className="text-red-600 text-sm flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {formErrors.timeframe}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-slate-700">
              <Users className="w-4 h-4 mr-2 text-slate-500" />
              Executive Commitment Level *
            </label>
            <select
              name="executiveCommitment"
              value={formData.executiveCommitment}
              onChange={onInputChange}
              className={`
                w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200
                ${formErrors.executiveCommitment 
                  ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                  : 'border-slate-300 hover:border-slate-400 focus:border-green-500'
                }
              `}
            >
              <option value="">Select Commitment Level</option>
              <option value="CEO/Founder fully committed">CEO/Founder fully committed</option>
              <option value="Senior leadership aligned">Senior leadership aligned</option>
              <option value="Some leadership buy-in">Some leadership buy-in</option>
              <option value="Exploring options">Exploring options</option>
            </select>
            {formErrors.executiveCommitment && touchedFields.executiveCommitment && (
              <p className="text-red-600 text-sm flex items-center">
                <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                {formErrors.executiveCommitment}
              </p>
            )}
          </div>
        </div>

        {/* Previous Consulting Experience */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <MessageSquare className="w-4 h-4 mr-2 text-slate-500" />
            Previous consulting/sales improvement experience *
          </label>
          <textarea
            name="previousConsulting"
            value={formData.previousConsulting}
            onChange={onInputChange}
            rows="3"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none
              ${formErrors.previousConsulting 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-green-500'
              }
            `}
            placeholder="Have you worked with sales consultants before? What were the results?"
          />
          {formErrors.previousConsulting && touchedFields.previousConsulting && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.previousConsulting}
            </p>
          )}
        </div>

        {/* Expectations */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Target className="w-4 h-4 mr-2 text-slate-500" />
            What are your expectations from Affiniti? *
          </label>
          <textarea
            name="expectations"
            value={formData.expectations}
            onChange={onInputChange}
            rows="3"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none
              ${formErrors.expectations 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-green-500'
              }
            `}
            placeholder="What specific outcomes are you looking for?"
          />
          {formErrors.expectations && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.expectations}
            </p>
          )}
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <p className="text-green-800 text-sm">
          <strong>Quality & Strategy Assessment:</strong> This information helps us understand your service quality, competitive positioning, and strategic alignment for a successful partnership.
        </p>
      </div>
    </div>
  )
}

export default QualityStrategy
