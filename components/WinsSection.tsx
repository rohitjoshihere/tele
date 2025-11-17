'use client'

export default function WinsSection() {
  const wins = [
    {
      id: 1,
      user: 'R Rubin',
      title: 'Win Westside Sign',
      icon: '✌️',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      id: 2,
      user: 'MAX',
      title: 'Win Snoop City',
      icon: '🎯',
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      id: 3,
      user: 'Alex',
      title: 'Win Gold Chain',
      icon: '⛓️',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      id: 4,
      user: 'Sarah',
      title: 'Win Diamond Pendant',
      icon: '💎',
      gradient: 'from-blue-400 to-cyan-600',
    },
  ]

  return (
    <div className="px-4 py-2">
      <h2 className="text-white text-lg font-semibold mb-2">Wins</h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
        {wins.map((win) => (
          <div
            key={win.id}
            className={`flex-shrink-0 w-48 h-16 rounded-xl bg-gradient-to-br ${win.gradient} p-3 flex flex-row items-center gap-3 shadow-lg relative overflow-hidden border border-white/10`}
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${win.gradient} opacity-30 blur-xl`}></div>
            
            {/* Icon on Left */}
            <div className="relative z-10 flex-shrink-0">
              <div className="text-3xl filter drop-shadow-lg">{win.icon}</div>
            </div>
            
            {/* Text on Right */}
            <div className="relative z-10 flex flex-col flex-1 min-w-0">
              <p className="text-white font-bold text-xs drop-shadow-md truncate">{win.user}</p>
              <p className="text-white/95 text-xs mt-0.5 font-medium drop-shadow-sm truncate">{win.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

