'use client'

interface DiamondProps {
  size?: number
  color?: string
  className?: string
  glow?: boolean
  variant?: 1 | 2 // 1 for first diamond, 2 for second diamond
}

// Helper function to lighten/darken colors for the diamond facets
const adjustColor = (color: string, amount: number) => {
  const hex = color.replace('#', '')
  const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount))
  const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount))
  const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount))
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

export default function Diamond({ 
  size = 24, 
  color = '#3B82F6', 
  className = '',
  glow = false,
  variant = 1
}: DiamondProps) {
  // Generate color variations for the diamond facets
  const lightColor = adjustColor(color, 40) // Lighter for top facets
  const mediumColor = adjustColor(color, 20) // Medium for side facets
  const darkColor = adjustColor(color, -30) // Darker for bottom facets

  // Variant 1: Original diamond (blue style)
  if (variant === 1) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        className={className}
        style={{
          filter: glow ? `drop-shadow(0 0 ${size / 4}px ${color})` : 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top facet - lightest */}
        <polygon 
          points="512,192 256,462.222 0,192 113.778,49.778 398.222,49.778" 
          fill={lightColor}
        />
        {/* Right side facet */}
        <polygon 
          points="398.222,49.778 256,49.778 256,462.222 512,192" 
          fill={mediumColor}
        />
        {/* Center vertical facet */}
        <polygon 
          points="277.333,192 234.667,192 234.667,439.704 256,462.222 277.333,439.704" 
          fill={darkColor}
        />
        {/* Top edge facets */}
        <polygon 
          points="307.503,170.667 411.631,66.539 398.222,49.778 368.053,49.778 256,161.83 143.947,49.778 113.778,49.778 100.369,66.539 204.497,170.667 17.067,170.667 0,192 20.21,213.333 491.79,213.333 512,192 494.933,170.667" 
          fill={mediumColor}
        />
        {/* Right top facet */}
        <polygon 
          points="494.933,170.667 307.503,170.667 411.631,66.539 398.222,49.778 368.053,49.778 256,161.83 256,213.333 491.79,213.333 512,192" 
          fill={lightColor}
        />
      </svg>
    )
  }

  // Variant 2: Second diamond (red/orange style)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 504 504"
      className={className}
      style={{
        filter: glow ? `drop-shadow(0 0 ${size / 4}px ${color})` : 'none',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <polygon style={{fill: adjustColor(color, 30)}} points="407.2,172 504,270.4 252,492.8 0,270.4 96.8,172"/>
        <polygon style={{fill: adjustColor(color, 30)}} points="407.2,172 504,270.4 252,492.8 0,270.4 96.8,172"/>
      </g>
      <polyline style={{fill: adjustColor(color, 10)}} points="504,269.6 252,492.8 0,269.6"/>
      <polygon style={{fill: adjustColor(color, 30)}} points="407.2,172 400,270.4 252,492.8 112,270.4 96.8,172"/>
      <polygon style={{fill: adjustColor(color, -10)}} points="407.2,172 400,270.4 252,172 112,270.4 96.8,172"/>
      <polyline style={{fill: adjustColor(color, -20)}} points="400,269.6 252,492.8 112,269.6"/>
      <polyline style={{fill: adjustColor(color, 50)}} points="50.4,269.6 252,492.8 0,270.4 96.8,172"/>
      <polyline style={{fill: adjustColor(color, -20)}} points="453.6,269.6 252,492.8 503.2,269.6 407.2,172"/>
      <polyline style={{fill: adjustColor(color, 10)}} points="216,106.4 252.8,11.2 288,106.4"/>
      <polyline style={{fill: adjustColor(color, -20)}} points="248.8,106.4 252.8,11.2 288,106.4"/>
      <polyline style={{fill: adjustColor(color, 10)}} points="114.4,150.4 95.2,50.4 175.2,112"/>
      <polyline style={{fill: adjustColor(color, -20)}} points="142.4,132.8 95.2,50.4 175.2,112"/>
      <polyline style={{fill: adjustColor(color, 10)}} points="389.6,150.4 408.8,50.4 328.8,112"/>
      <polyline style={{fill: adjustColor(color, -20)}} points="361.6,132.8 408.8,50.4 328.8,112"/>
    </svg>
  )
}

