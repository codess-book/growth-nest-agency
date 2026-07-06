'use client'
import { useEffect, useRef } from 'react'
import {
  ArrowUpRight, CheckCircle2, Sparkles, BarChart3, PenTool, TrendingUp,
  MessageCircle, Wallet, Cpu, Target, Search, ClipboardList, Rocket, LineChart, FileBarChart,
} from 'lucide-react'
import FounderCard from './Foundercard'
const values = [
  { icon: Sparkles,     title: 'Customized Marketing Strategies', desc: 'No one-size-fits-all playbooks — every strategy is built around your specific business goals and audience.', accent: '#00e5a0' },
  { icon: BarChart3,    title: 'Data-Driven Decision Making',      desc: 'Every recommendation is backed by data, not guesswork.', accent: '#00b8ff' },
  { icon: PenTool,      title: 'Creative Content That Converts',   desc: 'Content designed to engage first, and convert visitors into customers.', accent: '#a78bfa' },
  { icon: TrendingUp,   title: 'SEO & Performance Focused',        desc: 'Every campaign is built with visibility and measurable performance in mind.', accent: '#00e5a0' },
  { icon: MessageCircle,title: 'Transparent Communication',        desc: 'Clear reporting and honest updates — no jargon, no black boxes.', accent: '#00b8ff' },
  { icon: Wallet,       title: 'Affordable Solutions',             desc: 'Effective digital marketing that fits businesses of every size.', accent: '#a78bfa' },
  { icon: Cpu,          title: 'Latest AI & Marketing Tools',      desc: 'We use modern tools to work faster and smarter for your brand.', accent: '#00e5a0' },
  { icon: Target,       title: 'Long-Term Growth Focus',           desc: 'We build for sustainable growth, not one-off wins.', accent: '#00b8ff' },
]

const process = [
  { step: '01', title: 'Business Discovery',                     desc: 'We begin by understanding your business, industry, target audience, competitors, and marketing goals. This helps us create a strategy tailored to your unique needs.', accent: '#00e5a0', icon: Search },
  { step: '02', title: 'Strategy Planning',                       desc: 'Our team develops a customized digital marketing plan that includes content strategy, SEO, social media, and advertising recommendations designed to achieve your business objectives.', accent: '#00b8ff', icon: ClipboardList },
  { step: '03', title: 'Content Creation & Campaign Execution',    desc: 'We create engaging content, optimize your digital assets, and launch marketing campaigns across the most effective platforms to maximize visibility and lead generation.', accent: '#a78bfa', icon: Rocket },
  { step: '04', title: 'Performance Monitoring & Optimization',    desc: 'Using advanced analytics tools, we continuously monitor campaign performance, identify opportunities for improvement, and optimize strategies to achieve better results.', accent: '#fb923c', icon: LineChart },
  { step: '05', title: 'Reporting & Growth',                       desc: 'Transparency is important to us. We provide detailed performance reports, actionable insights, and strategic recommendations to ensure continuous business growth and long-term success.', accent: '#00e5a0', icon: FileBarChart },
]

// pulled directly from client's "Why Choose Us" — no invented numbers
const highlights = [
  'Customized marketing strategies for every client',
  'Data-driven decision making',
  'SEO & performance-focused execution',
  'Transparent communication, always',
  'Affordable digital marketing solutions',
  'Latest AI & marketing tools',
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
              We're Not Just an Agency.{' '}
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
              At Growth Next, we help businesses establish a strong digital presence through
              innovative and results-driven marketing strategies. Our goal is to help brands
              attract the right audience, generate quality leads, and achieve measurable
              business growth — whether you're a startup, local business, or growing brand.
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
              Book Your Free Consultation
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Right — real founder photo, replaces the old abstract stat card */}
          <div
            className="reveal relative"
            style={{ opacity: 0, transform: 'translateX(32px)', transition: 'all 0.9s ease 0.3s' }}
          >
            <FounderCard />
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
              Why Choose Growth Next?
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
              Our Work Process
            </h2>
            <p className="font-['DM_Sans',sans-serif] text-[15px] text-white/40 max-w-lg mx-auto leading-relaxed">
              From first call to full-scale growth — here's exactly how we work with you.
            </p>
          </div>

          {/* Process cards */}
          <div
            className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'all 0.7s ease 0.15s' }}
          >
            {process.map(({ step, title, desc, accent, icon: Icon }, i) => (
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

                {/* step number */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center font-['Syne',sans-serif] font-[800] text-[14px]"
                    style={{ background: `${accent}15`, border: `1px solid ${accent}30`, color: accent }}
                  >
                    {step}
                  </div>
                  <Icon size={16} style={{ color: accent }} strokeWidth={1.8} />
                </div>

                {/* ghost big step */}
                <div
                  className="absolute top-4 right-5 font-['Syne',sans-serif] font-[800] text-[64px] leading-none select-none pointer-events-none"
                  style={{ color: `${accent}07` }}
                >
                  {step}
                </div>

                <div className="relative z-10 flex flex-col flex-1">
                  <h3 className="font-['Syne',sans-serif] font-[700] text-[15px] text-white mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] text-[12.5px] text-white/40 leading-[1.7] flex-1">
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
                Ready to grow your business?
              </p>
              <p className="font-['DM_Sans',sans-serif] text-[13.5px] text-white/40">
                Book your free consultation today and start your growth journey with Growth Next.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 group inline-flex items-center gap-2 font-['DM_Sans',sans-serif] font-[600] text-[13.5px] text-[#080808] px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(0,229,160,0.28)] whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
            >
              Book Your Free Consultation
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