'use client'

import { useState } from 'react'
import TopBar from '@/components/TopBar'
import WinsSection from '@/components/WinsSection'
import CrystalDisplay from '@/components/CrystalDisplay'
import NavigationBar from '@/components/NavigationBar'

// Diamond values for each navigation tab
const DIAMOND_VALUES: Record<string, number> = {
  home: 0,
  document: 150,
  star: 320,
  crown: 500,
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [diamonds, setDiamonds] = useState(DIAMOND_VALUES[activeTab])
  const [bats, setBats] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setDiamonds(DIAMOND_VALUES[tab] || 0)
  }

  const handleAddDiamonds = () => {
    setDiamonds(prev => prev + 10)
  }

  const handleOpenCrystal = () => {
    if (diamonds >= 3) {
      setDiamonds(prev => prev - 3)
      // Add opening animation/effect here
      alert('Crystal opened! You received rewards!')
    } else {
      alert('Not enough diamonds!')
    }
  }

  return (
    <main className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
        {/* Stars */}
        {[...Array(50)].map((_, i) => {
          const left = Math.random() * 100
          const top = Math.random() * 100
          const opacity = Math.random() * 0.8 + 0.2
          const duration = Math.random() * 3 + 2
          const delay = Math.random() * 2
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full star-twinkle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                opacity: opacity,
                animation: `twinkle ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          )
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Bar */}
        <TopBar 
          diamonds={diamonds} 
          bats={bats}
          onAddDiamonds={handleAddDiamonds}
        />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-20">
          {/* Wins Section */}
          <WinsSection />

          {/* Crystal Display */}
          <CrystalDisplay 
            isExpanded={isExpanded}
            onToggleExpand={() => setIsExpanded(!isExpanded)}
            onOpen={handleOpenCrystal}
            diamonds={diamonds}
          />
        </div>

        {/* Bottom Navigation */}
        <NavigationBar 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
        />
      </div>
    </main>
  )
}

