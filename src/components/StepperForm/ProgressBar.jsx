import React from 'react'

const ProgressBar = ({ currentStep, totalSteps, completedSteps }) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100
  const completedPercentage = (completedSteps.length / totalSteps) * 100

  return (
    <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-2 relative overflow-hidden">
      {/* Background Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out"
        style={{ width: `${completedPercentage}%` }}
      />
      
      {/* Current Step Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700 ease-out"
        style={{ width: `${progressPercentage}%` }}
      />
      
      {/* Animated Shimmer Effect */}
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
    </div>
  )
}

export default ProgressBar
