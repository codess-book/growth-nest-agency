// components/Logo.tsx
// Usage: <Logo variant="color" className="h-9" />
// variant: 'color' | 'white' | 'black'  |  iconOnly: true for just the mark (e.g. mobile navbar)

type LogoProps = {
  variant?: 'color' | 'white' | 'black'
  iconOnly?: boolean
  className?: string
}

export default function Logo({ variant = 'color', iconOnly = false, className = '' }: LogoProps) {
  const strokeColor = variant === 'white' ? '#ffffff' : variant === 'black' ? '#111111' : 'url(#gnGrad)'
  const textColor = variant === 'white' ? '#ffffff' : variant === 'black' ? '#111111' : '#111111'

  if (iconOnly) {
    return (
      <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
        {variant === 'color' && (
          <defs>
            <linearGradient id="gnGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#00e5a0" />
              <stop offset="60%" stopColor="#00b8ff" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        )}
        <path d="M8 46 L24 26 L36 36 L56 8" fill="none" stroke={strokeColor} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 8 L56 8 L56 22" fill="none" stroke={strokeColor} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 340 90" className={className} xmlns="http://www.w3.org/2000/svg">
      {variant === 'color' && (
        <defs>
          <linearGradient id="gnGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#00e5a0" />
            <stop offset="60%" stopColor="#00b8ff" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      )}
      <g transform="translate(0,10)">
        <path d="M0 46 L14 24 L26 34 L44 4" fill="none" stroke={strokeColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 4 L44 4 L44 16" fill="none" stroke={strokeColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="62" y="52" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="34" fill={textColor}>
        Growth{variant === 'color' ? <tspan fill="url(#gnGrad)">Next</tspan> : 'Next'}
      </text>
      <text x="63" y="72" fontFamily="Arial, Helvetica, sans-serif" fontWeight="500" fontSize="10.5" letterSpacing="1.5" fill={variant === 'white' ? '#cfcfcf' : '#6b6b6b'}>
        GROW SMARTER. MARKET BETTER.
      </text>
    </svg>
  )
}