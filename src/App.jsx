import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import StatsSection from './StatsSection'
import BoldApproaches from './BoldApproaches'
import SustainingChange from './SustainingChange'
import DigitSection from './DigitSection'
import LatestAtEGov from './LatestAtEGov'
import Footer from './Footer'

function App() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <Navbar />
      <Hero />
      <StatsSection />
      <BoldApproaches />
      <SustainingChange />
      <DigitSection />
      <LatestAtEGov />
      <Footer />
    </div>
  )
}

export default App
