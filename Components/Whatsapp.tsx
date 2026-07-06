'use client'
import { useState } from 'react'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  const phone   = '91XXXXXXXXXX'          // ← replace with real number
  const message = 'Hi! I found you on your website and would like to know more about your services.'
  const url     = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3 group"
      style={{ filter: hovered ? 'drop-shadow(0 8px 24px rgba(37,211,102,0.5))' : 'drop-shadow(0 4px 12px rgba(37,211,102,0.25))', transition: 'filter 0.3s ease' }}
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
        💬 Chat with us
      </div>

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
        style={{
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {/* ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />

        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 relative z-10"
          fill="white"
        >
          <path d="M16.002 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.636 4.607 1.84 6.587L2.667 29.333l6.933-1.813A13.27 13.27 0 0 0 16.002 29.333C23.365 29.333 29.333 23.363 29.333 16S23.365 2.667 16.002 2.667zm0 24.267a11 11 0 0 1-5.613-1.533l-.4-.24-4.12 1.08 1.1-4-.267-.413A10.987 10.987 0 0 1 5.02 16c0-6.053 4.927-10.98 10.98-10.98S26.98 9.947 26.98 16 22.053 26.934 16 26.934zm6.027-8.213c-.333-.167-1.96-.967-2.267-1.08-.306-.107-.527-.16-.747.16-.22.32-.853 1.08-1.047 1.307-.193.22-.387.247-.72.08-.333-.167-1.4-.52-2.667-1.653-.987-.88-1.653-1.967-1.847-2.3-.193-.333-.02-.513.147-.68.153-.147.333-.387.5-.58.167-.193.22-.333.333-.553.107-.22.053-.413-.027-.58-.08-.167-.747-1.8-1.02-2.467-.267-.64-.547-.553-.747-.56-.193-.007-.413-.007-.633-.007a1.22 1.22 0 0 0-.88.413c-.307.333-1.16 1.133-1.16 2.767s1.187 3.207 1.353 3.427c.167.22 2.333 3.56 5.653 4.993.793.34 1.413.547 1.893.7.793.253 1.517.22 2.087.133.637-.093 1.96-.8 2.24-1.573.28-.773.28-1.433.193-1.573-.08-.147-.307-.22-.64-.387z" />
        </svg>
      </div>
    </a>
  )
}