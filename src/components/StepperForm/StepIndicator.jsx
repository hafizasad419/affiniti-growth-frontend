import React from 'react'
import { CheckCircle, Circle, Users, Building, DollarSign, Target, CheckCircle2, FileText } from 'lucide-react'

const StepIndicator = ({ steps, currentStep, completedSteps, onStepClick }) => {
  const getStepIcon = (stepId, iconName) => {
    const iconProps = { className: "w-5 h-5" }
    
    if (completedSteps.includes(stepId)) {
      return <CheckCircle {...iconProps} />
    }
    
    if (stepId === currentStep) {
      return <Circle {...iconProps} />
    }
    
    // Return appropriate icon based on step
    switch (iconName) {
      case 'Users': return <Users {...iconProps} />
      case 'Building': return <Building {...iconProps} />
      case 'DollarSign': return <DollarSign {...iconProps} />
      case 'Target': return <Target {...iconProps} />
      case 'CheckCircle': return <CheckCircle2 {...iconProps} />
      case 'FileText': return <FileText {...iconProps} />
      default: return <Circle {...iconProps} />
    }
  }

  const getStepStatus = (stepId) => {
    if (completedSteps.includes(stepId)) return 'completed'
    if (stepId === currentStep) return 'current'
    if (stepId < currentStep) return 'available'
    return 'upcoming'
  }

  return (
    <div className="bg-white/50 backdrop-blur-sm border-b border-slate-200">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto relative">
          {/* Background connector line */}
          <div className="absolute top-6 left-12 right-12 h-0.5 bg-slate-200"></div>
          
          {steps.map((step, index) => {
            const status = getStepStatus(step.id)
            const isClickable = completedSteps.includes(step.id) || step.id < currentStep
            
            return (
              <div key={step.id} className="flex flex-col items-center group relative z-10">
                {/* Step Circle */}
                <button
                  onClick={() => isClickable && onStepClick(step.id)}
                  disabled={!isClickable}
                  className={`
                    relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${status === 'completed' 
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg hover:shadow-xl' 
                      : status === 'current'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg ring-4 ring-cyan-200'
                      : status === 'available'
                      ? 'bg-slate-200 text-slate-600 hover:bg-slate-300 cursor-pointer'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }
                    ${isClickable ? 'hover:scale-105' : ''}
                  `}
                >
                  {getStepIcon(step.id, step.icon)}
                  
                  {/* Step Number */}
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-700 shadow-md">
                    {step.id}
                  </span>
                </button>

                {/* Step Title */}
                <div className="mt-3 text-center">
                  <div className={`
                    text-sm font-medium transition-colors duration-200
                    ${status === 'completed' || status === 'current'
                      ? 'text-slate-900' 
                      : status === 'available'
                      ? 'text-slate-600 group-hover:text-slate-900'
                      : 'text-slate-400'
                    }
                  `}>
                    {step.title}
                  </div>
                  
                  {/* Step Status Indicator */}
                  <div className="mt-1">
                    {status === 'completed' && (
                      <div className="flex items-center justify-center text-emerald-600">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                    {status === 'current' && (
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mx-auto animate-pulse" />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StepIndicator
