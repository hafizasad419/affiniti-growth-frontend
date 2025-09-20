import React from 'react'
import { Users, User, Mail, Phone, Briefcase } from 'lucide-react'

const ContactInfo = ({ formData, formErrors, onInputChange, touchedFields }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact Information</h2>
        <p className="text-slate-600">Tell us about yourself and how we can reach you</p>
      </div>

      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <User className="w-4 h-4 mr-2 text-slate-500" />
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200
              ${formErrors.firstName 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-cyan-500'
              }
            `}
            placeholder="Enter your first name"
          />
          {formErrors.firstName && touchedFields.firstName && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <User className="w-4 h-4 mr-2 text-slate-500" />
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200
              ${formErrors.lastName 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-cyan-500'
              }
            `}
            placeholder="Enter your last name"
          />
          {formErrors.lastName && touchedFields.lastName && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.lastName}
            </p>
          )}
        </div>

        {/* Title/Position */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Briefcase className="w-4 h-4 mr-2 text-slate-500" />
            Title/Position *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200
              ${formErrors.title 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-cyan-500'
              }
            `}
            placeholder="e.g., CEO, VP Sales, Founder"
          />
          {formErrors.title && touchedFields.title && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.title}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Mail className="w-4 h-4 mr-2 text-slate-500" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200
              ${formErrors.email 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-cyan-500'
              }
            `}
            placeholder="your.email@company.com"
          />
          {formErrors.email && touchedFields.email && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="md:col-span-2 space-y-2">
          <label className="flex items-center text-sm font-semibold text-slate-700">
            <Phone className="w-4 h-4 mr-2 text-slate-500" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onInputChange}
            className={`
              w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200
              ${formErrors.phone 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-slate-300 hover:border-slate-400 focus:border-cyan-500'
              }
            `}
            placeholder="+1 (555) 123-4567"
          />
          {formErrors.phone && touchedFields.phone && (
            <p className="text-red-600 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
              {formErrors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-blue-800 text-sm">
          <strong>Privacy Note:</strong> Your contact information will be kept strictly confidential and used only for application processing and follow-up communication.
        </p>
      </div>
    </div>
  )
}

export default ContactInfo
