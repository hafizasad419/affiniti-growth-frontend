import React from 'react'
import { Building, Globe, MapPin, Calendar, Briefcase } from 'lucide-react'

const CompanyOverview = ({ formData, formErrors, onInputChange, touchedFields }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
          <Building className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Company Overview</h2>
        <p className="text-slate-600">Tell us about your company and its background</p>
      </div>

      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Building className="w-4 h-4 mr-2 text-slate-500" />
            Company Name *
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
              ${formErrors.companyName 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-blue-500'
              }
            `}
            placeholder="Your company name"
          />
          {formErrors.companyName && touchedFields.companyName && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.companyName}
            </p>
          )}
        </div>

        {/* Website */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Globe className="w-4 h-4 mr-2 text-slate-500" />
            Website *
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
              ${formErrors.website 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-blue-500'
              }
            `}
            placeholder="https://www.yourcompany.com"
          />
          {formErrors.website && touchedFields.website && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.website}
            </p>
          )}
        </div>

        {/* Industry */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Briefcase className="w-4 h-4 mr-2 text-slate-500" />
            Industry *
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
              ${formErrors.industry 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-blue-500'
              }
            `}
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
          {formErrors.industry && touchedFields.industry && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.industry}
            </p>
          )}
        </div>

        {/* Year Founded */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Calendar className="w-4 h-4 mr-2 text-slate-500" />
            Year Founded *
          </label>
          <input
            type="number"
            name="yearFounded"
            value={formData.yearFounded}
            onChange={onInputChange}
            min="1900"
            max="2024"
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
              ${formErrors.yearFounded 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-blue-500'
              }
            `}
            placeholder="2020"
          />
          {formErrors.yearFounded && touchedFields.yearFounded && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.yearFounded}
            </p>
          )}
        </div>

        {/* Headquarters */}
        <div className="md:col-span-2 space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <MapPin className="w-4 h-4 mr-2 text-slate-500" />
            Headquarters Location *
          </label>
          <input
            type="text"
            name="headquarters"
            value={formData.headquarters}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
              ${formErrors.headquarters 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-blue-500'
              }
            `}
            placeholder="City, State, Country"
          />
          {formErrors.headquarters && touchedFields.headquarters && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.headquarters}
            </p>
          )}
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <p className="text-indigo-800 text-sm">
          <strong>Company Information:</strong> This information helps us understand your business context and tailor our approach to your specific industry and market.
        </p>
      </div>
    </div>
  )
}

export default CompanyOverview
