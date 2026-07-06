'use client'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight, Search, Megaphone, PenTool, FileText, TrendingUp, CalendarDays, Sparkles,
} from 'lucide-react'

const filters = ['All', 'SEO', 'Social Media', 'Content', 'Paid Ads']

const approaches = [
  {
    title: 'Local & E-Commerce Brands',
    tag: 'SEO',
    icon: Search,
    desc: 'Keyword research, technical audits, and on-page + local SEO to help you rank for the searches your customers are already making.',
    bullets: ['Keyword & competitor research', 'On-page + technical SEO', 'Local SEO for map visibility'],
    accent: '#00e5a0',
    size: 'large',
    industry: 'Local Business',
  },
  {
    title: 'Fitness & Wellness Brands',
    tag: 'Social Media',
    icon: Megaphone,
    desc: 'Content built to build community first — reels, carousels, and campaigns that turn followers into regulars.',
    bullets: ['Content calendar & pillars', 'Reels & short-form strategy', 'Community engagement'],
    accent: '#00b8ff',
    size: 'small',
    industry: 'Health & Fitness',
  },
  {
    title: 'D2C & Retail Brands',
    tag: 'Content',
    icon: PenTool,
    desc: 'Brand storytelling and content that builds trust before it asks for a sale.',
    bullets: ['Brand voice & messaging', 'Product-led content', 'Customer trust content'],
    accent: '#a78bfa',
    size: 'small',
    industry: 'D2C / Retail',
  },
  {
    title: 'Real Estate & Services',
    tag: 'Paid Ads',
    icon: TrendingUp,
    desc: 'Meta & Google Ads campaigns designed around qualified leads, not just impressions.',
    bullets: ['Meta & Google Ads setup', 'Lead-focused targeting', 'ROI tracking & reporting'],
    accent: '#fb923c',
    size: 'small',
    industry: 'Real Estate',
  },
  {
    title: 'Cafes & F&B Brands',
    tag: 'Content',
    icon: FileText,
    desc: 'Blog and content plans that bring in local search traffic and keep your brand top-of-mind.',
    bullets: ['SEO blog writing', 'Local content strategy', 'Menu & offer promotion'],
    accent: '#f472b6',
    size: 'small',
    industry: 'F&B',
  },
  {
    title: 'Fashion & Lifestyle Brands',
    tag: 'Social Media',
    icon: CalendarDays,
    desc: 'Monthly content calendars aligned to drops, campaigns, and seasonal moments that matter to your audience.',
    bullets: ['Monthly content calendar', 'Paid + organic social mix', 'Campaign planning'],
    accent: '#00e5a0',
    size: 'large',
    industry: 'Fashion / Lifestyle',
  },
]

export default function Portfolio() {
  const ref            = useRef<HTMLElement>(null)
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? approaches : approaches.filter(p => p.tag === active)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={ref} className="relative bg-[#080808] py-28 px-6 overflow-hidden">

      {/* bg glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,184,255,0.06) 0%, transparent 70%)' }}
      />

      {/* subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-emerald-400/60" />
              <span className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[3px] uppercase text-emerald-400">
                Our Approach
              </span>
            </div>
            <h2 className=" font-[800] text-[clamp(36px,4.5vw,64px)] leading-[1.05] tracking-[-1.5px] text-white">
              How We'd Grow{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg,#00e5a0 0%,#00b8ff 50%,#a78bfa 100%)' }}
              >
                Your Business.
              </span>
            </h2>
          </div>
          <p className="font-['DM_Sans',sans-serif] text-[14.5px] text-white/40 leading-[1.8] max-w-sm">
            Every industry needs a different playbook. Here's how our strategy adapts to brands like yours.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div
          className="reveal flex flex-wrap gap-2 mb-10"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.7s ease 0.1s' }}
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="font-['DM_Sans',sans-serif] text-[13px] font-[500] px-5 py-2 rounded-full border transition-all duration-200"
              style={{
                background: active === f ? 'linear-gradient(135deg,#00e5a0,#00b8ff)' : 'rgba(255,255,255,0.03)',
                borderColor: active === f ? 'transparent' : 'rgba(255,255,255,0.08)',
                color: active === f ? '#080808' : 'rgba(255,255,255,0.45)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Bento grid ── */}
        <div
          className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ opacity: 0, transform: 'translateY(28px)', transition: 'all 0.7s ease 0.2s' }}
        >
          {filtered.map(({ title, tag, icon: Icon, desc, bullets, accent, size, industry }, i) => (
            <div
              key={title}
              className={`group relative rounded-3xl p-7 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1 ${
                size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                background: 'rgba(255,255,255,0.02)',
                minHeight: size === 'large' ? '300px' : '260px',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* hover radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(circle at 10% 10%, ${accent}12, transparent 60%)` }}
              />

              {/* ghost icon watermark */}
              <div
                className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-[8deg] pointer-events-none"
                style={{ color: `${accent}10` }}
              >
                <Icon size={110} strokeWidth={1} />
              </div>

              {/* top row */}
              <div className="relative z-10 flex items-start justify-between mb-5">
                <div className="flex flex-col gap-3">
                  {/* icon badge */}
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${accent}14`, border: `1px solid ${accent}28` }}
                  >
                    <Icon size={19} strokeWidth={1.8} style={{ color: accent }} />
                  </div>
                  {/* industry pill */}
                  <span
                    className="inline-block font-['DM_Sans',sans-serif] text-[10.5px] font-[600] tracking-[1.5px] uppercase px-3 py-1 rounded-full w-fit"
                    style={{ color: accent, background: `${accent}12`, border: `1px solid ${accent}25` }}
                  >
                    {industry}
                  </span>
                  <h3 className="font-['Syne',sans-serif] font-[700] text-[19px] text-white leading-snug">
                    {title}
                  </h3>
                </div>

                {/* arrow */}
                <div
                  className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/30 group-hover:text-white group-hover:border-white/20 transition-all duration-300 flex-shrink-0"
                >
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>

              {/* desc */}
              <p className="relative z-10 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 leading-[1.75] mb-5">
                {desc}
              </p>

              {/* bullets instead of fake metrics */}
              <div className="relative z-10 flex flex-col gap-2 mt-auto">
                {bullets.map(b => (
                  <div key={b} className="flex items-center gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                      style={{ background: accent }}
                    />
                    <span className="font-['DM_Sans',sans-serif] text-[12.5px] text-white/50">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="reveal mt-6 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-white/[0.07] px-8 py-7 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,160,0.04), rgba(0,184,255,0.04))',
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'all 0.7s ease 0.35s',
          }}
        >
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none opacity-60"
            style={{ background: 'radial-gradient(circle, rgba(0,229,160,0.12), transparent 70%)' }}
          />
          <div className="relative z-10 flex items-center gap-3">
            <Sparkles size={18} className="text-emerald-400 flex-shrink-0" />
            <div>
              <p className="font-['Syne',sans-serif] font-[700] text-[20px] text-white mb-1">
                Not sure which path fits your brand?
              </p>
              <p className="font-['DM_Sans',sans-serif] text-[13.5px] text-white/40">
                Book your free consultation — we'll map it out together.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="relative z-10 flex-shrink-0 group inline-flex items-center gap-2 font-['DM_Sans',sans-serif] font-[600] text-[13.5px] text-[#080808] px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(0,229,160,0.28)] whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
          >
            Book Your Free Consultation
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <style>{`
        .reveal.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}