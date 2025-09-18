import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Download, Calendar } from 'lucide-react'

const Insights = () => {
  const articles = [
    {
      title: 'Why Referrals Alone Will Kill Your Growth',
      excerpt: 'Discover why relying solely on referrals is a dangerous growth strategy and what enterprise-focused firms should do instead.',
      readTime: '8 min read',
      category: 'Strategy'
    },
    {
      title: 'The 5 Mistakes Firms Make When Chasing Enterprise Deals',
      excerpt: 'Learn the common pitfalls that prevent professional services firms from landing $25M+ accounts and how to avoid them.',
      readTime: '12 min read',
      category: 'Sales'
    },
    {
      title: 'Building Predictable Pipeline in Unpredictable Markets',
      excerpt: 'How to create consistent deal flow even when market conditions are volatile and uncertain.',
      readTime: '10 min read',
      category: 'Growth'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Thought Leadership for Growth Leaders
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Enterprise sales insights, strategies, and tools for professional services CEOs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{article.title}</h3>
              <p className="text-slate-700 mb-6">{article.excerpt}</p>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Article
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-xl text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Free Resource</h2>
          <h3 className="text-2xl font-semibold mb-6">Enterprise Sales Playbook</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get our comprehensive guide to landing $25M+ deals. Includes templates, frameworks, 
            and proven strategies used by our most successful clients.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
            <Download className="w-5 h-5 mr-2" />
            Download Free Playbook
          </Button>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Sales Results?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Let's discuss how we can help you land your next $25M deal.
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

export default Insights

