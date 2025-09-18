import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import CaseStudies from './components/CaseStudies'
import Offering from './components/Offering'
import About from './components/About'
import Insights from './components/Insights'
import Contact from './components/Contact'
import GrowthCallLanding from './components/GrowthCallLanding'
import Application from './components/Application'
import Schedule from './components/Schedule'
import Confirmation from './components/Confirmation'
import ApplicationForm from './components/ApplicationForm'
import ApplicationThankYou from './components/ApplicationThankYou'
import DeepTrustOS from './components/DeepTrustOS'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/offering" element={<Offering />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/deeptrust-os" element={<DeepTrustOS />} />
            <Route path="/growth-call" element={<GrowthCallLanding />} />
            <Route path="/application" element={<Application />} />
            <Route path="/application-form" element={<ApplicationForm />} />
            <Route path="/application-thank-you" element={<ApplicationThankYou />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

