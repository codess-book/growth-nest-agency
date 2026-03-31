'use client'
import { useEffect, useRef } from 'react'
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, Award, Clock } from 'lucide-react'

const values = [
  {
    icon: TrendingUp,
    title: 'Performance First',
    desc: "Every decision we make is backed by data. If it doesn't move the needle, we don't do it.",
    accent: '#00e5a0',
  },
  {
    icon: Users,
    title: 'Client Obsessed',
    desc: "Your growth is our growth. We treat every brand like it's our own — with full ownership and urgency.",
    accent: '#00b8ff',
  },
  {
    icon: Award,
    title: 'Quality Without Compromise',
    desc: 'Premium work at every touchpoint. From strategy decks to final deliverables — nothing ships average.',
    accent: '#a78bfa',
  },
  {
    icon: Clock,
    title: 'Always Ahead',
    desc: "Digital moves fast. We stay ahead of algorithm changes, trends, and tools so you never fall behind.",
    accent: '#00e5a0',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'We start with a deep-dive into your business — goals, audience, competitors, and current gaps. No templates, just real questions that matter.',
    accent: '#00e5a0',
    duration: '30 mins',
  },
  {
    step: '02',
    title: 'Strategy Blueprint',
    desc: 'Our team crafts a custom growth roadmap tailored to your brand. Channels, timelines, KPIs — all mapped out clearly before we touch anything.',
    accent: '#00b8ff',
    duration: '3–5 days',
  },
  {
    step: '03',
    title: 'Creative Execution',
    desc: 'We build, design, write, and launch — with obsessive attention to quality. Every asset is built to perform, not just look good.',
    accent: '#a78bfa',
    duration: 'Ongoing',
  },
  {
    step: '04',
    title: 'Launch & Optimise',
    desc: 'We go live and enter continuous improvement mode. Weekly reports, A/B tests, and real-time pivots keep results compounding month after month.',
    accent: '#fb923c',
    duration: 'Monthly',
  },
]

const highlights = [
  '340+ brands scaled across India',
  'Average 8.2x ROAS on paid campaigns',
  '97% client retention rate',
  'Specialists across 6 digital verticals',
  '₹50Cr+ revenue generated for clients',
  'ISO-standard quality processes',
]

export default function About() {
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
    <section id="about" ref={ref} className="relative bg-[#080808] overflow-hidden">

      {/* ── 1. INTRO SPLIT ── */}
      <div className="relative border-b border-white/[0.06]">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 100% 0%, rgba(0,184,255,0.07) 0%, transparent 60%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div
              className="reveal inline-flex items-center gap-2 mb-6"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <div className="w-6 h-px bg-emerald-400/60" />
              <span className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[3px] uppercase text-emerald-400">
                Who We Are
              </span>
            </div>

            <h2
              className="reveal  font-[800] text-[clamp(36px,4.5vw,64px)] leading-[1.05] tracking-[-1.5px] text-white mb-6"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease 0.1s' }}
            >
              We're Not an Agency.{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
              >
                We're Your Growth Partner.
              </span>
            </h2>

            <p
              className="reveal font-['DM_Sans',sans-serif] text-[16px] text-white/45 leading-[1.85] mb-8 max-w-[500px]"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease 0.2s' }}
            >
              Growth Next was built on a simple belief — most agencies focus on activity, not outcomes.
              We do the opposite. Every strategy, every campaign, every creative is engineered
              to produce measurable, compounding growth for your business.
            </p>

            <div
              className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease 0.3s' }}
            >
              {highlights.map(h => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-400 mt-[3px] flex-shrink-0" strokeWidth={2} />
                  <span className="font-['DM_Sans',sans-serif] text-[13px] text-white/55 leading-snug">{h}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="reveal group inline-flex items-center gap-2 font-['DM_Sans',sans-serif] font-[600] text-[14px] text-[#080808] px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(0,229,160,0.3)]"
              style={{
                background: 'linear-gradient(135deg,#00e5a0,#00b8ff)',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s, box-shadow 0.3s',
              }}
            >
              Work With Us
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Right — stat card */}
          <div
            className="reveal relative"
            style={{ opacity: 0, transform: 'translateX(32px)', transition: 'all 0.9s ease 0.3s' }}
          >
            <div
              className="relative rounded-3xl p-8 border border-white/[0.08] overflow-hidden"
              style={{ background: 'linear-gradient(145deg, rgba(0,229,160,0.06) 0%, rgba(0,184,255,0.04) 100%)' }}
            >
              <div
                className="absolute -top-4 -right-4 font-['Syne',sans-serif] font-[800] text-[120px] leading-none select-none pointer-events-none"
                style={{ color: 'rgba(0,229,160,0.04)' }}
              >
                GN
              </div>

              <div className="relative z-10">
                <p className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[3px] uppercase text-white/30 mb-6">
                  Since 2019
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { v: '5+',   l: 'Years in Business' },
                    { v: '340+', l: 'Brands Scaled'     },
                    { v: '8.2x', l: 'Average ROAS'      },
                    { v: '97%',  l: 'Retention Rate'    },
                  ].map(({ v, l }) => (
                    <div
                      key={l}
                      className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4 hover:border-white/[0.12] transition-colors duration-200"
                    >
                      <div className="font-['Syne',sans-serif] font-[800] text-[30px] leading-none text-white mb-1">{v}</div>
                      <div className="font-['DM_Sans',sans-serif] text-[11.5px] text-white/35">{l}</div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/[0.07] pt-6">
                  <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/50 leading-[1.8] italic mb-4">
                    "We don't measure success in impressions or followers. We measure it in
                    revenue generated, leads closed, and brands that dominate their market."
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-['Syne',sans-serif] font-[700] text-[13px] text-[#080808]"
                      style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
                    >
                      YD
                    </div>
                    <div>
                      <div className="font-['DM_Sans',sans-serif] text-[13px] font-[500] text-white">yukta Daswani</div>
                      <div className="font-['DM_Sans',sans-serif] text-[11px] text-white/35">Founder, Growth Next</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. VALUES ── */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div
            className="reveal text-center mb-14"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
          >
            <span className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[3px] uppercase text-emerald-400 block mb-3">
              Our DNA
            </span>
            <h2 className="font-[800] text-[clamp(32px,4vw,52px)] leading-[1.1] tracking-[-1px] text-white">
              What We Stand For
            </h2>
          </div>

          <div
            className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'all 0.7s ease 0.15s' }}
          >
            {values.map(({ icon: Icon, title, desc, accent }, i) => (
              <div
                key={title}
                className="group relative rounded-3xl p-6 border border-white/[0.06] hover:border-white/[0.13] transition-all duration-500 overflow-hidden cursor-default"
                style={{ background: 'rgba(255,255,255,0.02)', transitionDelay: `${i * 70}ms` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${accent}0d, transparent 65%)` }}
                />
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}
                >
                  <Icon size={20} strokeWidth={1.8} style={{ color: accent }} />
                </div>
                <h3 className="font-['Syne',sans-serif] font-[700] text-[16px] text-white mb-3">{title}</h3>
                <p className="font-['DM_Sans',sans-serif] text-[13px] text-white/40 leading-[1.75]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. PROCESS ── */}
      <div className="relative border-b border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(0,229,160,0.05) 0%, transparent 60%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div
            className="reveal text-center mb-16"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
          >
            <span className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[3px] uppercase text-emerald-400 block mb-3">
              How We Work
            </span>
            <h2 className=" font-[800] text-[clamp(32px,4vw,52px)] leading-[1.1] tracking-[-1px] text-white mb-4">
              Our Process,{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
              >
                Simplified.
              </span>
            </h2>
            <p className="font-['DM_Sans',sans-serif] text-[15px] text-white/40 max-w-lg mx-auto leading-relaxed">
              From first call to full-scale growth — here's exactly how we turn your brand into a market leader.
            </p>
          </div>

          {/* Process cards */}
          <div
            className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'all 0.7s ease 0.15s' }}
          >
            {process.map(({ step, title, desc, accent, duration }, i) => (
              <div
                key={step}
                className="group relative rounded-3xl p-6 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500 overflow-hidden flex flex-col"
                style={{ background: 'rgba(255,255,255,0.02)', transitionDelay: `${i * 80}ms` }}
              >
                {/* hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${accent}10, transparent 65%)` }}
                />

                {/* connector line (desktop) */}
                {i < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-[44px] -right-2 w-4 h-px z-20"
                    style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }}
                  />
                )}

                {/* step number */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-['Syne',sans-serif] font-[800] text-[14px]"
                    style={{ background: `${accent}15`, border: `1px solid ${accent}30`, color: accent }}
                  >
                    {step}
                  </div>
                  <span
                    className="font-['DM_Sans',sans-serif] text-[10.5px] font-[600] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full"
                    style={{ color: accent, background: `${accent}10`, border: `1px solid ${accent}20` }}
                  >
                    {duration}
                  </span>
                </div>

                {/* ghost big step */}
                <div
                  className="absolute top-4 right-5 font-['Syne',sans-serif] font-[800] text-[64px] leading-none select-none pointer-events-none"
                  style={{ color: `${accent}07` }}
                >
                  {step}
                </div>

                <div className="relative z-10 flex flex-col flex-1">
                  <h3 className="font-['Syne',sans-serif] font-[700] text-[17px] text-white mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] text-[13px] text-white/40 leading-[1.75] flex-1">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* bottom CTA */}
          <div
            className="reveal mt-6 rounded-3xl border border-white/[0.07] p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: 'linear-gradient(135deg, rgba(0,229,160,0.04) 0%, rgba(0,184,255,0.04) 100%)',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'all 0.7s ease 0.4s',
            }}
          >
            <div>
              <p className="font-['Syne',sans-serif] font-[700] text-[20px] text-white mb-1">
                Ready to start your growth journey?
              </p>
              <p className="font-['DM_Sans',sans-serif] text-[13.5px] text-white/40">
                Book a free discovery call — step 01 is on us.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 group inline-flex items-center gap-2 font-['DM_Sans',sans-serif] font-[600] text-[13.5px] text-[#080808] px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(0,229,160,0.28)] whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
            >
              Book Free Discovery Call
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .reveal.visible {
          opacity: 1 !important;
          transform: translate(0) !important;
        }
      `}</style>
    </section>
  )
}