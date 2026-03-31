'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, TrendingUp, Users, Eye } from 'lucide-react'

const filters = ['All', 'SEO', 'Social Media', 'Web Dev', 'Performance', 'Branding']

const projects = [
  {
    title: 'FreshCart Grocery',
    category: 'SEO',
    tag: 'SEO',
    desc: 'Took a local grocery brand from page 4 to position #1 for 38 high-intent keywords in 4 months.',
    metrics: [
      { icon: TrendingUp, label: 'Organic Traffic', value: '+312%' },
      { icon: Eye,        label: 'Impressions',     value: '2.1M'  },
    ],
    accent: '#00e5a0',
    size: 'large',
    industry: 'E-Commerce',
  },
  {
    title: 'Velox Fitness',
    category: 'Social Media',
    tag: 'Social Media',
    desc: 'Built a loyal fitness community of 80K+ from scratch with viral reels and strategic content.',
    metrics: [
      { icon: Users,      label: 'Followers Gained', value: '80K+' },
      { icon: TrendingUp, label: 'Engagement Rate',  value: '7.4%' },
    ],
    accent: '#00b8ff',
    size: 'small',
    industry: 'Health & Fitness',
  },
  {
    title: 'Aurra Jewels',
    category: 'Branding',
    tag: 'Branding',
    desc: 'Full brand identity — logo, palette, typography, packaging — for a luxury jewellery D2C brand.',
    metrics: [
      { icon: Eye,        label: 'Brand Recall',  value: '+68%' },
      { icon: TrendingUp, label: 'Sales Uplift',  value: '+44%' },
    ],
    accent: '#fb923c',
    size: 'small',
    industry: 'Luxury / D2C',
  },
  {
    title: 'NexaHomes Realty',
    category: 'Performance',
    tag: 'Performance',
    desc: 'Meta & Google Ads campaign generated 1,200+ qualified property leads at ₹180 cost-per-lead.',
    metrics: [
      { icon: Users,      label: 'Leads Generated', value: '1,240' },
      { icon: TrendingUp, label: 'ROAS',             value: '9.1x'  },
    ],
    accent: '#a78bfa',
    size: 'small',
    industry: 'Real Estate',
  },
  {
    title: 'Brewnest Cafe',
    category: 'Web Dev',
    tag: 'Web Dev',
    desc: 'Custom Next.js website with online ordering, SEO optimisation, and 98/100 PageSpeed score.',
    metrics: [
      { icon: TrendingUp, label: 'PageSpeed Score', value: '98/100' },
      { icon: Eye,        label: 'Monthly Visits',  value: '14K+'   },
    ],
    accent: '#f472b6',
    size: 'small',
    industry: 'F&B',
  },
  {
    title: 'Zephyr Apparel',
    category: 'Social Media',
    tag: 'Social Media',
    desc: 'Content strategy and paid social for a D2C fashion brand — scaling from ₹0 to ₹40L/month in 6 months.',
    metrics: [
      { icon: TrendingUp, label: 'Revenue Growth', value: '₹40L/mo' },
      { icon: Users,      label: 'ROAS',           value: '6.8x'    },
    ],
    accent: '#00e5a0',
    size: 'large',
    industry: 'Fashion / D2C',
  },
]

export default function Portfolio() {
  const ref            = useRef<HTMLElement>(null)
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active)

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
                Our Work
              </span>
            </div>
            <h2 className=" font-[800] text-[clamp(36px,4.5vw,64px)] leading-[1.05] tracking-[-1.5px] text-white">
              Results We've{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg,#00e5a0 0%,#00b8ff 50%,#a78bfa 100%)' }}
              >
                Delivered.
              </span>
            </h2>
          </div>
          <p className="font-['DM_Sans',sans-serif] text-[14.5px] text-white/40 leading-[1.8] max-w-sm">
            Real brands, real numbers. No fluff — just the results we've driven for businesses like yours.
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
          {filtered.map(({ title, tag, desc, metrics, accent, size, industry }, i) => (
            <div
              key={title}
              className={`group relative rounded-3xl p-7 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer ${
                size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                background: 'rgba(255,255,255,0.02)',
                minHeight: size === 'large' ? '280px' : '220px',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* hover radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(circle at 10% 10%, ${accent}10, transparent 60%)` }}
              />

              {/* ghost number */}
              <div
                className="absolute -bottom-3 -right-2 font-['Syne',sans-serif] font-[800] text-[80px] leading-none select-none pointer-events-none"
                style={{ color: `${accent}06` }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* top row */}
              <div className="relative z-10 flex items-start justify-between mb-5">
                <div className="flex flex-col gap-2">
                  {/* industry pill */}
                  <span
                    className="inline-block font-['DM_Sans',sans-serif] text-[10.5px] font-[600] tracking-[1.5px] uppercase px-3 py-1 rounded-full w-fit"
                    style={{ color: accent, background: `${accent}12`, border: `1px solid ${accent}25` }}
                  >
                    {industry}
                  </span>
                  <h3 className="font-['Syne',sans-serif] font-[700] text-[20px] text-white leading-snug">
                    {title}
                  </h3>
                </div>

                {/* arrow */}
                <div
                  className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/30 group-hover:text-white group-hover:border-white/20 transition-all duration-300 flex-shrink-0 mt-1"
                >
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>

              {/* desc */}
              <p className="relative z-10 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 leading-[1.75] mb-6 flex-1">
                {desc}
              </p>

              {/* metrics */}
              <div className="relative z-10 flex items-center gap-3 flex-wrap">
                {metrics.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: `${accent}0d`, border: `1px solid ${accent}20` }}
                  >
                    <Icon size={12} style={{ color: accent }} />
                    <div>
                      <div className="font-['Syne',sans-serif] font-[700] text-[14px] text-white leading-none">{value}</div>
                      <div className="font-['DM_Sans',sans-serif] text-[10px] text-white/35 mt-0.5">{label}</div>
                    </div>
                  </div>
                ))}

                {/* tag badge */}
                <span
                  className="ml-auto font-['DM_Sans',sans-serif] text-[10.5px] font-[600] tracking-[1px] uppercase px-2.5 py-1.5 rounded-lg"
                  style={{ color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="reveal mt-6 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-white/[0.07] px-8 py-7"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,160,0.04), rgba(0,184,255,0.04))',
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'all 0.7s ease 0.35s',
          }}
        >
          <div>
            <p className="font-['Syne',sans-serif] font-[700] text-[20px] text-white mb-1">
              Want results like these for your brand?
            </p>
            <p className="font-['DM_Sans',sans-serif] text-[13.5px] text-white/40">
              Let's talk about what growth looks like for you.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 group inline-flex items-center gap-2 font-['DM_Sans',sans-serif] font-[600] text-[13.5px] text-[#080808] px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(0,229,160,0.28)] whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
          >
            Start Your Project
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