import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'game-bg': '#0A0A0A',
        'game-card': '#1A1A1A',
        'game-purple': '#8B5CF6',
        'game-blue': '#3B82F6',
        'game-green': '#10B981',
        'game-gold': '#FBBF24',
      },
      backgroundImage: {
        'gradient-purple-blue': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
        'gradient-crystal': 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(16, 185, 129, 0.5)',
        'glow-gold': '0 0 20px rgba(251, 191, 36, 0.4)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config

