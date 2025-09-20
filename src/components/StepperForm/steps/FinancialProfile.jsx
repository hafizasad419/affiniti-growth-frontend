import React from 'react'
import { DollarSign, TrendingUp, Target, Users, Building } from 'lucide-react'

const FinancialProfile = ({ formData, formErrors, onInputChange, touchedFields }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mb-4">
          <DollarSign className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Financial Profile</h2>
        <p className="text-slate-600">Help us understand your financial capacity and growth trajectory</p>
      </div>

      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Annual Revenue */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <DollarSign className="w-4 h-4 mr-2 text-slate-500" />
            Annual Revenue *
          </label>
          <select
            name="annualRevenue"
            value={formData.annualRevenue}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200
              ${formErrors.annualRevenue 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-emerald-500'
              }
            `}
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
          {formErrors.annualRevenue && touchedFields.annualRevenue && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.annualRevenue}
            </p>
          )}
        </div>

        {/* Revenue Growth Rate */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <TrendingUp className="w-4 h-4 mr-2 text-slate-500" />
            Revenue Growth Rate (Last 3 Years) *
          </label>
          <select
            name="revenueGrowthRate"
            value={formData.revenueGrowthRate}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200
              ${formErrors.revenueGrowthRate 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-emerald-500'
              }
            `}
          >
            <option value="">Select Growth Rate</option>
            <option value="Declining">Declining</option>
            <option value="0-5%">0-5%</option>
            <option value="5-15%">5-15%</option>
            <option value="15-25%">15-25%</option>
            <option value="25-50%">25-50%</option>
            <option value="Over 50%">Over 50%</option>
          </select>
          {formErrors.revenueGrowthRate && touchedFields.revenueGrowthRate && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.revenueGrowthRate}
            </p>
          )}
        </div>

        {/* Profitability Status */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Target className="w-4 h-4 mr-2 text-slate-500" />
            Profitability Status *
          </label>
          <select
            name="profitability"
            value={formData.profitability}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200
              ${formErrors.profitability 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-emerald-500'
              }
            `}
          >
            <option value="">Select Status</option>
            <option value="Highly Profitable (>20% margins)">Highly Profitable (&gt;20% margins)</option>
            <option value="Profitable (10-20% margins)">Profitable (10-20% margins)</option>
            <option value="Marginally Profitable (5-10% margins)">Marginally Profitable (5-10% margins)</option>
            <option value="Break-even">Break-even</option>
            <option value="Unprofitable">Unprofitable</option>
          </select>
          {formErrors.profitability && touchedFields.profitability && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.profitability}
            </p>
          )}
        </div>

        {/* Investment Capacity */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Building className="w-4 h-4 mr-2 text-slate-500" />
            Investment Capacity for Enterprise Sales Division *
          </label>
          <select
            name="investmentCapacity"
            value={formData.investmentCapacity}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200
              ${formErrors.investmentCapacity 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-emerald-500'
              }
            `}
          >
            <option value="">Select Investment Range</option>
            <option value="Under $500K">Under $500K</option>
            <option value="$500K - $1M">$500K - $1M</option>
            <option value="$1M - $2M">$1M - $2M</option>
            <option value="$2M - $5M">$2M - $5M</option>
            <option value="Over $5M">Over $5M</option>
          </select>
          {formErrors.investmentCapacity && touchedFields.investmentCapacity && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.investmentCapacity}
            </p>
          )}
        </div>

        {/* Sales Team Size */}
        <div className="md:col-span-2 space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Users className="w-4 h-4 mr-2 text-slate-500" />
            Current Sales Team Size *
          </label>
          <input
            type="number"
            name="currentSalesTeamSize"
            value={formData.currentSalesTeamSize}
            onChange={onInputChange}
            min="0"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200
              ${formErrors.currentSalesTeamSize 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-emerald-500'
              }
            `}
            placeholder="Number of sales team members"
          />
          {formErrors.currentSalesTeamSize && touchedFields.currentSalesTeamSize && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.currentSalesTeamSize}
            </p>
          )}
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <p className="text-emerald-800 text-sm">
          <strong>Financial Qualification:</strong> This information helps us assess your capacity to invest in and sustain an enterprise sales division. All financial information is kept strictly confidential.
        </p>
      </div>
    </div>
  )
}

export default FinancialProfile
