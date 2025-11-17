'use client'

import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Diamond from './Diamond'

interface CrystalDisplayProps {
  isExpanded: boolean
  onToggleExpand: () => void
  onOpen: () => void
  diamonds: number
}

export default function CrystalDisplay({ isExpanded, onToggleExpand, onOpen, diamonds }: CrystalDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 4 slides with different colors
  const slideColors = [
    '#10B981', // Green - Slide 0
    '#3B82F6', // Blue - Slide 1
    '#8B5CF6', // Purple - Slide 2
    '#EF4444', // Red - Slide 3
  ]

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 3))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev < 3 ? prev + 1 : 0))
  }

  const currentColor = slideColors[currentIndex]
  const diamondVariant = currentIndex < 2 ? 1 : 2 // First 2 slides use variant 1, last 2 use variant 2

  return (
    <div className="px-4 py-2">
      {/* Crystal Container */}
      <div className="relative flex items-center justify-center my-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center border border-white/20 active:scale-95 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Crystal Display */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-60"
            style={{
              background: `radial-gradient(circle, ${currentColor}33 0%, ${currentColor}11 50%, transparent 100%)`,
            }}
          ></div>
          
          {/* Single Large Diamond */}
          <div className="relative z-10 crystal-pulse flex items-center justify-center">
            <Diamond 
              size={160} 
              color={currentColor} 
              glow={true} 
              className="drop-shadow-2xl" 
              variant={diamondVariant} 
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center border border-white/20 active:scale-95 transition-transform"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* What's Inside Section */}
      <div className="mt-3">
        <button
          onClick={onToggleExpand}
          className="w-full flex items-center justify-between text-white mb-3"
        >
          <span className="text-base font-medium">What's inside</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        {isExpanded && (
          <div className="bg-game-card rounded-xl p-4 mb-4 border border-white/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">💎</span>
                <span className="text-white/80">Rare Crystal Shards</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">💎</span>
                <span className="text-white/80">Diamond Fragments</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✨</span>
                <span className="text-white/80">Energy Crystals</span>
              </div>
            </div>
          </div>
        )}

        {/* Open Button */}
        <button
          onClick={onOpen}
          disabled={diamonds < 3}
          className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
            diamonds >= 3
              ? 'bg-gradient-purple-blue shadow-glow-purple active:scale-95'
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span>Open for 3</span>
          <div className="relative">
            <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-gradient-to-br from-blue-300 to-blue-500 rounded-sm rotate-45"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

