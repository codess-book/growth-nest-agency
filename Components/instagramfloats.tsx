'use client'
import { useState } from 'react'

export default function InstagramFloat() {
  const [hovered, setHovered] = useState(false)

  const handle = 'digitalmarketer.jivika'   // Growth Next — real Instagram handle
  const url    = `https://instagram.com/${handle}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-24 right-6 z-[999] flex items-center gap-3 group"
      style={{ filter: hovered ? 'drop-shadow(0 8px 24px rgba(214,49,132,0.5))' : 'drop-shadow(0 4px 12px rgba(214,49,132,0.25))', transition: 'filter 0.3s ease' }}
    >
      {/* Tooltip */}
      <div
        className="font-['DM_Sans',sans-serif] text-[13px] font-[500] text-white px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300"
        style={{
          background: 'rgba(15,15,15,0.92)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0) scale(1)' : 'translateX(8px) scale(0.95)',
          pointerEvents: 'none',
        }}
      >
        Follow us
      </div>

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
        style={{
          background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {/* ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#dd2a7b] animate-ping opacity-30" />

        {/* Instagram SVG icon */}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 relative z-10"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.2" cy="6.8" r="1" fill="white" stroke="none" />
        </svg>
      </div>
    </a>
  )
}