import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Mail, Phone, Linkedin } from 'lucide-react'

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Offering', href: '/offering' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    // { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Affiniti Growth Solutions
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Selective Enterprise Sales Division — By Application Only. We only work with exceptional firms 
              that meet our strict qualification standards.
            </p>
            <Link to="/application-form">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-400" />
                <a 
                  href="mailto:info@affinitygrowth.com" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  info@affinitygrowth.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <a 
                  href="tel:+1-555-123-4567" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-slate-400" />
                <a 
                  href="https://linkedin.com/company/affiniti-growth" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Affiniti Growth Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

