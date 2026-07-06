'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Star, TrendingUp, Users, Award, Zap, Target, Sparkles } from 'lucide-react'

// replace when client shares real numbers (traffic %, leads/month, review count etc.)
const stats = [
  { value: 'Custom',  label: 'Strategies Built for You', icon: TrendingUp },
  { value: 'Data',    label: 'Driven Decisions',          icon: Zap        },
  { value: 'SEO',     label: '& Performance Focused',     icon: Star       },
  { value: 'AI',      label: 'Powered Marketing Tools',   icon: Award      },
]

const marqueeItems = [
  'Social Media Marketing', 'SEO', 'Content Marketing',
  'Blog Writing', 'Paid Advertising', 'Content Planning',
]

// placeholder cards — swap "value" for real client metrics once available (traffic %, leads/month, review score)
const floatingCards = [
  {
    icon: Target,
    label: 'Our Focus',
    value: 'ROI-First',
    sub: 'every campaign',
    color: 'from-emerald-500/20 to-emerald-400/5',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    pos: 'top-[18%] right-[4%]',
    delay: '0s',
  },
  {
    icon: Users,
    label: 'Approach',
    value: 'Custom',
    sub: 'strategy per client',
    color: 'from-cyan-500/20 to-cyan-400/5',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    pos: 'bottom-[28%] right-[6%]',
    delay: '0.4s',
  },
  {
    icon: Sparkles,
    label: 'Consultation',
    value: 'Free',
    sub: 'no obligation',
    color: 'from-amber-500/20 to-amber-400/5',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
    pos: 'top-[40%] left-[2%]',
    delay: '0.8s',
  },
]

export default function Hero() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  /* ── particle grid ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COLS = 28, ROWS = 14
    const dots = Array.from({ length: COLS * ROWS }, (_, i) => ({
      x: (i % COLS) / (COLS - 1),
      y: Math.floor(i / COLS) / (ROWS - 1),
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.6,
    }))

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.008
      dots.forEach(d => {
        const pulse = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * d.speed + d.phase))
        const cx = d.x * canvas.width
        const cy = d.y * canvas.height
        const dx = d.x - 0.5, dy = d.y - 0.5
        const dist = Math.sqrt(dx * dx + dy * dy)
        const alpha = pulse * (1 - dist * 1.4) * 0.45
        if (alpha <= 0) return
        ctx.beginPath()
        ctx.arc(cx, cy, 1.1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,229,160,${alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    setTimeout(() => setReady(true), 80)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#080808] overflow-hidden flex flex-col"
    >

      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,229,160,0.07) 0%, transparent 65%)' }} />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,184,255,0.05) 0%, transparent 60%)' }} />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,229,160,0.04) 0%, transparent 60%)' }} />
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,160,0.4) 50%, transparent)' }} />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">

        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* LEFT — copy */}
          <div>

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.05s' }}
            >
              <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.09] rounded-full px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[12px] font-medium text-white/60 tracking-wide">
                  Now accepting new clients
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className={` font-[800] text-[clamp(42px,5.5vw,80px)] leading-[1.04] tracking-[-2px] text-white mb-6 transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.15s' }}
            >
              Grow{' '}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #00e5a0 0%, #00b8ff 60%, #a78bfa 100%)' }}
                >
                  Smarter.
                </span>
                {/* underline squiggle */}
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                  <path d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4"
                    stroke="url(#sg)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="sg" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%"   stopColor="#00e5a0" />
                      <stop offset="100%" stopColor="#00b8ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {' '}Market{' '}
              <br className="hidden sm:block" />
              <span className="text-white/25">Better.</span>
            </h1>

            {/* Sub */}
            <p
              className={`text-[17px] text-white/45 leading-[1.75] max-w-[500px] mb-10 font-['DM_Sans',sans-serif] transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.25s' }}
            >
              Growth Next helps businesses establish a strong digital presence
              through innovative, results-driven marketing strategies — Social
              Media, SEO, Content Marketing, Blogging, Paid Advertising, and
              Content Planning, all customized to your goals and industry.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap items-center gap-4 mb-14 transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.35s' }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 font-['DM_Sans',sans-serif] font-semibold text-[14.5px] text-[#080808] px-7 py-3.5 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(0,229,160,0.35)]"
                style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
              >
                Book Your Free Consultation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] font-medium text-[14px] text-white/50 hover:text-white transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/35 transition-colors">
                  <ArrowRight size={13} className="rotate-[45deg] group-hover:rotate-0 transition-transform duration-300" />
                </span>
                See Our Services
              </a>
            </div>

            {/* Stats row */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.45s' }}
            >
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex flex-col gap-1 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-200">
                  <Icon size={14} className="text-emerald-400 mb-1 opacity-80" />
                  <div className="font-['Syne',sans-serif] font-[700] text-[22px] text-white leading-none tracking-tight">{value}</div>
                  <div className="text-[11.5px] text-white/35 font-['DM_Sans',sans-serif] leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — visual card stack */}
          <div
            className={`hidden lg:block relative h-[520px] transition-all duration-1000 ${ready ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            {/* Central glowing orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[280px] h-[280px]">
                <div className="absolute inset-0 rounded-full border border-emerald-400/10 animate-[spin_18s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-cyan-400/10 animate-[spin_12s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(0,229,160,0.18) 0%, rgba(0,184,255,0.08) 50%, transparent 70%)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,rgba(0,229,160,0.15),rgba(0,184,255,0.1))', border: '1px solid rgba(0,229,160,0.25)' }}>
                    <TrendingUp size={36} strokeWidth={1.5} className="text-emerald-400" />
                  </div>
                </div>
                {[0, 72, 144, 216, 288].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-emerald-400/50"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${deg}deg) translateX(130px) translateY(-50%)`,
                      animation: `pulse ${1.5 + i * 0.3}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map(({ icon: Icon, label, value, sub, color, border, iconColor, pos, delay }) => (
              <div
                key={label}
                className={`absolute ${pos} w-[175px] rounded-2xl p-4 bg-gradient-to-br ${color} border ${border} backdrop-blur-sm`}
                style={{
                  animation: `float 5s ease-in-out infinite`,
                  animationDelay: delay,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={13} className={iconColor} />
                  <span className="text-[11px] text-white/50 font-['DM_Sans',sans-serif]">{label}</span>
                </div>
                <div className="font-['Syne',sans-serif] font-[700] text-[22px] text-white leading-none mb-1">{value}</div>
                <div className="text-[11px] text-white/35 font-['DM_Sans',sans-serif]">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee strip ── */}
      <div
        className={`relative z-10 border-t border-white/[0.06] py-4 overflow-hidden transition-all duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '0.7s' }}
      >
        <div className="flex gap-0 animate-[marquee_28s_linear_infinite] whitespace-nowrap w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-[12.5px] font-medium text-white/25 tracking-widest uppercase font-['DM_Sans',sans-serif]">
              {item}
              <span className="w-1 h-1 rounded-full bg-emerald-400/40 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Keyframes injected via style tag ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-10px); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}