'use client'

import { Home, FileText, Star, Crown } from 'lucide-react'

interface NavigationBarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'document', icon: FileText, label: 'Docs' },
    { id: 'star', icon: Star, label: 'Star' },
    { id: 'crown', icon: Crown, label: 'Crown' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-900 px-4 py-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 py-2 px-4 transition-all ${
                isActive ? 'text-white' : 'text-gray-500'
              }`}
            >
              <Icon
                className={`w-6 h-6 transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
                fill={isActive ? 'currentColor' : 'none'}
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}

