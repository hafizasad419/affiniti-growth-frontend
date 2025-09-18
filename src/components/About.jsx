import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Target, Award, TrendingUp } from 'lucide-react'
import executiveProfileAbstract from '../assets/executive-profile-abstract.png'
import leadershipTeamAbstract from '../assets/leadership-team-abstract.png'

const About = () => {
  const stats = [
    { number: '100,000+', label: 'C-suite meetings delivered' },
    { number: '$3B+', label: 'Enterprise revenue generated' },
    { number: '100+', label: 'Successful exits guided' },
    { number: '25+', label: 'Years of combined experience' }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Affiniti Growth Solutions was founded to solve the #1 problem for professional services firms: 
            landing consistent enterprise accounts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={leadershipTeamAbstract} 
              alt="Leadership team and business strategy"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Built by Enterprise Sales Veterans
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Our founders have delivered 100,000+ C-suite meetings, $3B+ in enterprise revenue, 
              and guided firms to exits worth hundreds of millions.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              We know how to source, manage, and close $1mill to $100m+ deals - and now we do it for you!
            </p>
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-cyan-600" />
              <span className="text-lg font-semibold text-slate-900">
                Proven track record of enterprise success
              </span>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Impact by the Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.number}</div>
                <div className="text-slate-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Scale Your Enterprise Sales?
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            Join the growing list of professional services firms that have transformed their growth trajectory with Affiniti.
          </p>
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

export default About

