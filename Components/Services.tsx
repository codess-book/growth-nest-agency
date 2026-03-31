'use client'
import { useEffect, useRef } from 'react'
import { ArrowUpRight, TrendingUp, Share2, Globe, Zap, Palette, PenTool } from 'lucide-react'

const services = [
  {
    Icon: TrendingUp,
    title: 'Search Engine Optimization',
    desc: 'Page 1 rankings that bring qualified buyers to your door. Technical, on-page & off-page authority — we handle every layer of the SEO stack.',
    tag: 'Most Popular',
    accent: '#00e5a0',
    size: 'large',
  },
  {
    Icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Scroll-stopping content that builds communities and converts followers into loyal customers.',
    tag: 'High ROI',
    accent: '#00b8ff',
    size: 'small',
  },
  {
    Icon: Globe,
    title: 'Web Design & Development',
    desc: 'Fast, beautiful, conversion-optimized websites built for the modern web.',
    tag: 'SEO-Ready',
    accent: '#a78bfa',
    size: 'small',
  },
  {
    Icon: Zap,
    title: 'Performance Marketing',
    desc: 'Google Ads & Meta campaigns engineered to generate leads, not just impressions.',
    tag: 'Data-Driven',
    accent: '#00e5a0',
    size: 'small',
  },
  {
    Icon: Palette,
    title: 'Graphic Design & Branding',
    desc: 'Visual identity that makes your brand instantly recognizable and impossible to forget.',
    tag: 'Creative',
    accent: '#00b8ff',
    size: 'small',
  },
  {
    Icon: PenTool,
    title: 'Content Writing',
    desc: 'SEO-driven content that ranks, engages, and builds lasting authority in your niche.',
    tag: 'Authority',
    accent: '#a78bfa',
    size: 'small',
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="relative py-28 px-6 bg-[#080808] overflow-hidden">

      {/* subtle bg grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,229,160,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>

          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-emerald-400/60" />
              <span
                className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[3px] uppercase"
                style={{ color: '#00e5a0' }}
              >
                What We Do
              </span>
            </div>
            <h2 className=" font-[800] text-[clamp(40px,5vw,72px)] leading-[1.02] tracking-[-2px] text-white">
              Services That<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg,#00e5a0 0%,#00b8ff 50%,#a78bfa 100%)' }}
              >
                Actually Work.
              </span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="font-['DM_Sans',sans-serif] text-[14.5px] text-white/40 leading-[1.8]">
              Full-suite digital marketing under one roof. Every service is designed to compound — the more you stack, the stronger the results.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 mt-5 font-['DM_Sans',sans-serif] text-[13px] font-[600] text-white/60 hover:text-white transition-colors duration-200"
            >
              See all case studies
              <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-3"
          style={{ opacity: 0, transform: 'translateY(32px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>

          {/* ── Large card (SEO) ── */}
          <div className="md:col-span-1 md:row-span-2 relative rounded-3xl p-8 flex flex-col justify-between min-h-[340px] group cursor-pointer overflow-hidden border border-white/[0.07] hover:border-emerald-400/25 transition-all duration-500"
            style={{ background: 'linear-gradient(145deg, rgba(0,229,160,0.06) 0%, rgba(255,255,255,0.02) 100%)' }}>

            {/* hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at 20% 20%, rgba(0,229,160,0.09), transparent 60%)' }}
            />

            {/* number */}
            <div
              className="absolute top-7 right-7 font-['Syne',sans-serif] font-[800] text-[80px] leading-none select-none pointer-events-none"
              style={{ color: 'rgba(0,229,160,0.06)' }}
            >
              01
            </div>

            <div className="relative z-10">
              {/* icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(0,229,160,0.12)', border: '1px solid rgba(0,229,160,0.2)' }}
              >
                <TrendingUp size={22} strokeWidth={1.8} style={{ color: '#00e5a0' }} />
              </div>

              {/* tag */}
              <span
                className="inline-block font-['DM_Sans',sans-serif] text-[10.5px] font-[700] tracking-[2.5px] uppercase px-3 py-1.5 rounded-full mb-5"
                style={{ color: '#00e5a0', background: 'rgba(0,229,160,0.1)', border: '1px solid rgba(0,229,160,0.2)' }}
              >
                {services[0].tag}
              </span>

              <h3 className="font-['Syne',sans-serif] font-[700] text-[26px] leading-[1.2] tracking-[-0.5px] text-white mb-4">
                {services[0].title}
              </h3>
            </div>

            <div className="relative z-10">
              <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/45 leading-[1.75] mb-7">
                {services[0].desc}
              </p>
              <div
                className="inline-flex items-center gap-2 font-['DM_Sans',sans-serif] text-[13px] font-[600] group-hover:gap-3 transition-all duration-300"
                style={{ color: '#00e5a0' }}
              >
                Learn more
                <ArrowUpRight size={14} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* ── Small cards ── */}
          {services.slice(1).map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl p-6 flex flex-col justify-between min-h-[155px] group cursor-pointer overflow-hidden border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500"
              style={{
                background: 'rgba(255,255,255,0.02)',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* hover radial */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 0%, ${s.accent}10, transparent 60%)` }}
              />

              {/* bg number */}
              <div
                className="absolute bottom-4 right-5 font-['Syne',sans-serif] font-[800] text-[52px] leading-none select-none pointer-events-none"
                style={{ color: `${s.accent}08` }}
              >
                {String(i + 2).padStart(2, '0')}
              </div>

              <div className="relative z-10 flex items-start justify-between mb-4">
                {/* icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.accent}12`, border: `1px solid ${s.accent}25` }}
                >
                  <s.Icon size={16} strokeWidth={1.8} style={{ color: s.accent }} />
                </div>

                {/* tag */}
                <span
                  className="font-['DM_Sans',sans-serif] text-[10px] font-[700] tracking-[2px] uppercase px-2.5 py-1 rounded-full"
                  style={{ color: s.accent, background: `${s.accent}10`, border: `1px solid ${s.accent}25` }}
                >
                  {s.tag}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-['Syne',sans-serif] font-[600] text-[15px] text-white mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="font-['DM_Sans',sans-serif] text-[12.5px] text-white/38 leading-[1.7]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          className="reveal mt-6 rounded-3xl border border-white/[0.07] p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,160,0.04) 0%, rgba(0,184,255,0.04) 100%)',
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
          }}
        >
          <div>
            <p className="font-['Syne',sans-serif] font-[700] text-[20px] text-white mb-1">
              Not sure which service you need?
            </p>
            <p className="font-['DM_Sans',sans-serif] text-[13.5px] text-white/40">
              Book a free 30-min strategy call — we'll map out exactly what will move the needle for you.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 group inline-flex items-center gap-2 font-['DM_Sans',sans-serif] font-[600] text-[13.5px] text-[#080808] px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(0,229,160,0.28)] whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
          >
            Book Free Strategy Call
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* reveal animation injected globally */}
      <style>{`
        .reveal.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
