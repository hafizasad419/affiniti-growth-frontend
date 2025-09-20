import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'DeepTrust OS', href: '/deeptrust-os' },
    { name: 'Offering', href: '/offering' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    // { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-slate-800 shadow-lg border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="fle-shrink">
            <Link to="/" className="flex flex-col items-center">
              <div className="text-2xl font-bold text-white">
                Affiniti Growth
              </div>
              <div className="ml-2 text-sm text-cyan-400 font-medium">
                Enterprise Sales as a service
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${location.pathname === item.href
                    ? 'bg-cyan-500 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link to="/application-form">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-slate-800 border-t border-slate-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 ${location.pathname === item.href
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Link to="/application-form">
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

