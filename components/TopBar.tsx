'use client'

import { Plus } from 'lucide-react'

interface TopBarProps {
  diamonds: number
  bats: number
  onAddDiamonds: () => void
}

export default function TopBar({ diamonds, bats, onAddDiamonds }: TopBarProps) {
  return (
    <div className="w-full px-4 py-3 bg-black border-b border-gray-900 flex items-center justify-between">
      {/* Left: Diamonds */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm rotate-45 flex items-center justify-center shadow-glow-purple">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-300 to-blue-500 rounded-sm rotate-45"></div>
          </div>
        </div>
        <span className="text-white text-lg font-semibold">{diamonds.toLocaleString()}</span>
        <button
          onClick={onAddDiamonds}
          className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center active:scale-95 transition-transform"
        >
          <Plus className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Right: Bats */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-purple-500"
          >
            {/* Bat body */}
            <path
              d="M12 4C10 4 8.5 5.5 8.5 7.5C8.5 9.5 10 11 12 11C14 11 15.5 9.5 15.5 7.5C15.5 5.5 14 4 12 4Z"
              fill="currentColor"
            />
            {/* Left wing */}
            <path
              d="M6 8C5 8 4 9 4 10C4 11 5 12 6 12C7 12 8 11 8 10C8 9 7 8 6 8Z"
              fill="currentColor"
            />
            {/* Right wing */}
            <path
              d="M18 8C17 8 16 9 16 10C16 11 17 12 18 12C19 12 20 11 20 10C20 9 19 8 18 8Z"
              fill="currentColor"
            />
            {/* Ears */}
            <path
              d="M10 2L11 4L10 6L9 4L10 2Z"
              fill="currentColor"
            />
            <path
              d="M14 2L15 4L14 6L13 4L14 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="text-white text-lg font-semibold">{bats.toLocaleString()}</span>
      </div>
    </div>
  )
}

