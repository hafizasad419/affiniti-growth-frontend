import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'ICP Validation',
      description: 'Define your enterprise targets ($25M–$100M accounts).'
    },
    {
      number: '02',
      title: 'Division Installation',
      description: 'We embed a full enterprise sales division inside your firm.'
    },
    {
      number: '03',
      title: 'DeepTrust AI Activation',
      description: 'Unlock relationship intelligence to access the C-suite.'
    },
    {
      number: '04',
      title: 'Execution & Pursuit',
      description: 'Our team runs the enterprise playbook end-to-end.'
    },
    {
      number: '05',
      title: 'Deal Flow & Growth',
      description: 'Land 2–5 enterprise deals annually, $20M–$100M growth.'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Enterprise Sales Division as a Service
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Here's how we deliver needle-moving deals.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-lg text-slate-700">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-px h-24 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://calendly.com/d/ctc5-s98-6rv/affiniti-growth-enterprise-sales-divsion-discovery-call" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg">
            👉 Schedule a Growth Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

