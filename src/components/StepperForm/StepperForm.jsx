import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react'
import * as Yup from 'yup'
import ProgressBar from './ProgressBar'
import StepIndicator from './StepIndicator'
import ContactInfo from './steps/ContactInfo'
import CompanyOverview from './steps/CompanyOverview'
import FinancialProfile from './steps/FinancialProfile'
import BusinessAssessment from './steps/BusinessAssessment'
import QualityStrategy from './steps/QualityStrategy'
import FinalDetails from './steps/FinalDetails'

const StepperForm = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState([])
  const [formErrors, setFormErrors] = useState({})
  const [touchedFields, setTouchedFields] = useState({})
  const [isStepValid, setIsStepValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    
    // Company Information
    companyName: '',
    website: '',
    industry: '',
    yearFounded: '',
    headquarters: '',
    
    // Financial Qualification
    annualRevenue: '',
    revenueGrowthRate: '',
    profitability: '',
    investmentCapacity: '',
    currentSalesTeamSize: '',
    
    // Business Qualification
    currentChallenges: '',
    targetDealSize: '',
    currentLargestDeal: '',
    salesProcess: '',
    crmSystem: '',
    
    // Quality Assessment
    serviceDescription: '',
    competitiveAdvantage: '',
    clientRetentionRate: '',
    referenceClients: '',
    awards: '',
    
    // Strategic Alignment
    growthGoals: '',
    timeframe: '',
    executiveCommitment: '',
    previousConsulting: '',
    expectations: '',
    
    // Final Questions
    whyAffiniti: '',
    additionalInfo: ''
  })

  // Yup validation schemas for each step
  const validationSchemas = {
    1: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      title: Yup.string().required('Title is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone is required')
    }),
    2: Yup.object({
      companyName: Yup.string().required('Company name is required'),
      website: Yup.string().url('Invalid website URL').required('Website is required'),
      industry: Yup.string().required('Industry is required'),
      yearFounded: Yup.number().min(1900, 'Invalid year').max(2024, 'Invalid year').required('Year founded is required'),
      headquarters: Yup.string().required('Headquarters is required')
    }),
    3: Yup.object({
      annualRevenue: Yup.string().required('Annual revenue is required'),
      revenueGrowthRate: Yup.string().required('Revenue growth rate is required'),
      profitability: Yup.string().required('Profitability status is required'),
      investmentCapacity: Yup.string().required('Investment capacity is required'),
      currentSalesTeamSize: Yup.number().min(0, 'Must be 0 or greater').required('Sales team size is required')
    }),
    4: Yup.object({
      currentChallenges: Yup.string().required('Current challenges are required'),
      targetDealSize: Yup.string().required('Target deal size is required'),
      currentLargestDeal: Yup.string().required('Current largest deal is required'),
      salesProcess: Yup.string().required('Sales process is required'),
      crmSystem: Yup.string().required('CRM system is required')
    }),
    5: Yup.object({
      serviceDescription: Yup.string().required('Service description is required'),
      competitiveAdvantage: Yup.string().required('Competitive advantage is required'),
      clientRetentionRate: Yup.string().required('Client retention rate is required'),
      growthGoals: Yup.string().required('Growth goals are required'),
      timeframe: Yup.string().required('Timeframe is required'),
      executiveCommitment: Yup.string().required('Executive commitment is required'),
      previousConsulting: Yup.string().required('Previous consulting experience is required'),
      expectations: Yup.string().required('Expectations are required')
    }),
    6: Yup.object({
      whyAffiniti: Yup.string().required('Why Affiniti is required')
    })
  }

  const steps = [
    { id: 1, title: 'Contact Information', component: ContactInfo, icon: 'Users' },
    { id: 2, title: 'Company Overview', component: CompanyOverview, icon: 'Building' },
    { id: 3, title: 'Financial Profile', component: FinancialProfile, icon: 'DollarSign' },
    { id: 4, title: 'Business Assessment', component: BusinessAssessment, icon: 'Target' },
    { id: 5, title: 'Quality & Strategy', component: QualityStrategy, icon: 'CheckCircle' },
    { id: 6, title: 'Final Details', component: FinalDetails, icon: 'FileText' }
  ]

  // Auto-validate current step when formData changes (only for touched fields)
  useEffect(() => {
    if (Object.keys(touchedFields).length > 0) {
      validateStep(currentStep, false) // Don't show errors automatically
    }
  }, [formData, currentStep, touchedFields])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Mark field as touched
    setTouchedFields(prev => ({
      ...prev,
      [name]: true
    }))
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateStep = async (stepNumber, showErrors = false) => {
    const schema = validationSchemas[stepNumber]
    if (!schema) return true

    try {
      await schema.validate(formData, { abortEarly: false })
      setFormErrors({})
      setIsStepValid(true)
      return true
    } catch (error) {
      const errors = {}
      if (error.inner) {
        error.inner.forEach(err => {
          if (showErrors || touchedFields[err.path]) {
            errors[err.path] = err.message
          }
        })
      }
      setFormErrors(errors)
      setIsStepValid(false)
      return false
    }
  }

  const handleNext = async () => {
    const isValid = await validateStep(currentStep, true) // Show errors when trying to proceed
    if (isValid) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps(prev => [...prev, currentStep])
      }
      
      if (currentStep < steps.length) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentStep(prev => prev + 1)
          setIsTransitioning(false)
        }, 300)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep(prev => prev - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handleStepClick = (stepNumber) => {
    if (completedSteps.includes(stepNumber) || stepNumber < currentStep) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep(stepNumber)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format the application data for email
      const applicationData = {
        ...formData,
        submissionDate: new Date().toISOString(),
        submissionTime: new Date().toLocaleString()
      }

      // Create email content
      const emailContent = `
NEW ENTERPRISE SALES DIVISION APPLICATION

Submission Date: ${applicationData.submissionTime}

=== CONTACT INFORMATION ===
Name: ${formData.firstName} ${formData.lastName}
Title: ${formData.title}
Email: ${formData.email}
Phone: ${formData.phone}

=== COMPANY INFORMATION ===
Company: ${formData.companyName}
Website: ${formData.website}
Industry: ${formData.industry}
Founded: ${formData.yearFounded}
Headquarters: ${formData.headquarters}

=== FINANCIAL QUALIFICATION ===
Annual Revenue: ${formData.annualRevenue}
Growth Rate: ${formData.revenueGrowthRate}
Profitability: ${formData.profitability}
Investment Capacity: ${formData.investmentCapacity}
Sales Team Size: ${formData.currentSalesTeamSize}

=== BUSINESS QUALIFICATION ===
Current Challenges: ${formData.currentChallenges}
Target Deal Size: ${formData.targetDealSize}
Current Largest Deal: ${formData.currentLargestDeal}
Sales Process: ${formData.salesProcess}
CRM System: ${formData.crmSystem}

=== QUALITY ASSESSMENT ===
Service Description: ${formData.serviceDescription}
Competitive Advantage: ${formData.competitiveAdvantage}
Client Retention Rate: ${formData.clientRetentionRate}
Reference Clients: ${formData.referenceClients || 'Not provided'}
Awards: ${formData.awards || 'Not provided'}

=== STRATEGIC ALIGNMENT ===
Growth Goals: ${formData.growthGoals}
Timeframe: ${formData.timeframe}
Executive Commitment: ${formData.executiveCommitment}
Previous Consulting: ${formData.previousConsulting}
Expectations: ${formData.expectations}

=== FINAL QUESTIONS ===
Why Affiniti: ${formData.whyAffiniti}
Additional Info: ${formData.additionalInfo || 'Not provided'}

=== NEXT STEPS ===
1. Review application for qualification criteria
2. Conduct initial assessment call if qualified  
3. Schedule detailed discovery session
4. Present proposal if mutual fit
      `

      // Send email using a simple mailto approach as fallback
      const subject = `New Enterprise Sales Division Application - ${formData.companyName}`
      const mailtoLink = `mailto:nate@affinitisolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`
      
      // For demonstration, we'll log the data and simulate success
      console.log('Application Data:', applicationData)
      console.log('Email Content:', emailContent)
      console.log('Mailto Link:', mailtoLink)

      // Redirect to thank you page
      navigate('/application-thank-you')
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentStepData = steps.find(step => step.id === currentStep)
  const CurrentStepComponent = currentStepData?.component

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230891b2' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-100 text-red-600 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide mb-6 shadow-lg">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Qualification Required
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Enterprise Sales Division Application
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Complete this comprehensive application to determine if your firm meets our standards for partnership. 
              All information will be kept strictly confidential.
            </p>
          </div>

          {/* Main Stepper Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Progress Bar */}
            <ProgressBar 
              currentStep={currentStep} 
              totalSteps={steps.length} 
              completedSteps={completedSteps}
            />

            {/* Step Indicators */}
            <StepIndicator 
              steps={steps}
              currentStep={currentStep}
              completedSteps={completedSteps}
              onStepClick={handleStepClick}
            />

            {/* Step Content */}
            <div className="p-8 md:p-12">
              <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
                {CurrentStepComponent && (
                  <CurrentStepComponent
                    formData={formData}
                    formErrors={formErrors}
                    touchedFields={touchedFields}
                    onInputChange={handleInputChange}
                  />
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center px-6 py-3 text-slate-600 border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex items-center space-x-4">
                  {Object.keys(formErrors).length > 0 && (
                    <div className="flex items-center text-red-600 text-sm">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      Please fix errors to continue
                    </div>
                  )}
                  
                  {currentStep < steps.length ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid}
                      className="flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting || !isStepValid}
                      className="flex items-center px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <CheckCircle className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepperForm
