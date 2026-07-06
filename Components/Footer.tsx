'use client'
import { ArrowUpRight, TrendingUp, Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

const services = [
  'SEO Optimization',
  'Social Media Marketing',
  'Web Development',
  'Graphic Design',
  'Performance Marketing',
  'Content Writing',
]

const company = [
  'About Us',
  'Our Process',
  'Portfolio'
  // 'Case Studies',
  // 'Blog',
  // 'Careers',
  // 'Privacy Policy',
]

const socials = [
  {
    href: '#', label: 'Instagram',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>
  },
  {
    href: '#', label: 'Facebook',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  },
  {
    href: '#', label: 'LinkedIn',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  },
  {
    href: '#', label: 'YouTube',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
  },
]

const stats = [
  { value: '340+', label: 'Brands Scaled'    },
  { value: '8.2x', label: 'Average ROAS'     },
  { value: '97%',  label: 'Client Retention' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#080808] overflow-hidden">

      {/* ── top glow line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,160,0.35) 50%, transparent)' }}
      />

      {/* ── background radial ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(0,229,160,0.05) 0%, transparent 65%)' }}
      />

      {/* ── CTA banner ── */}
    
      {/* ── Main footer grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-12 pb-12 border-b border-white/[0.06]">

          {/* Brand col */}
          <div>
            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
              >
                <TrendingUp size={15} strokeWidth={2.5} className="text-[#080808]" />
              </div>
              <span className="font-['',sans-serif] text-[19px] font-[800] tracking-[-0.3px] text-white">
                Growth<span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg,#00e5a0,#00b8ff)' }}
                >Nest</span>
              </span>
            </a>

            <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/40 leading-[1.8] max-w-[260px] mb-7">
              Performance-first digital agency for ambitious brands. Strategy-led, creativity-driven, results-obsessed.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5">
              {socials.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/[0.06] transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-7 inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] rounded-full px-4 py-2">
              <div className="flex -space-x-1.5">
                {['#00e5a0','#00b8ff','#a78bfa','#fb923c'].map((c, i) => (
                  <div key={i} className="w-5 h-5 rounded-full border border-[#080808]" style={{ background: c }} />
                ))}
              </div>
              <span className="text-[11.5px] text-white/40 font-['DM_Sans',sans-serif]">
                Trusted by <span className="text-white/70">340+</span> brands
              </span>
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4 className="font-['Syne',sans-serif] text-[11px] font-[700] tracking-[3px] uppercase text-white/50 mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map(s => (
                <li key={s}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-1.5 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight size={11} className="text-emerald-400/0 group-hover:text-emerald-400/80 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <h4 className="font-['Syne',sans-serif] text-[11px] font-[700] tracking-[3px] uppercase text-white/50 mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {company.map(s => (
                <li key={s}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1.5 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight size={11} className="text-emerald-400/0 group-hover:text-emerald-400/80 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="font-['Syne',sans-serif] text-[11px] font-[700] tracking-[3px] uppercase text-white/50 mb-6">
              Get In Touch
            </h4>

            <ul className="flex flex-col gap-4 mb-7">
              <li>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/[0.06] transition-all duration-200">
                    <Phone size={12} className="text-emerald-400" />
                  </div>
                  <span className="pt-1.5">+91 6264745500</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@growthnext.in"
                  className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/[0.06] transition-all duration-200">
                    <Mail size={12} className="text-emerald-400" />
                  </div>
                  <span className="pt-1.5">hello@growthnext.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0">
                    <MapPin size={12} className="text-emerald-400" />
                  </div>
                  <span className="pt-1.5">Your City, India</span>
                </div>
              </li>
            </ul>

            
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['DM_Sans',sans-serif] text-[12px] text-white/25">
            © {year} Growth Nest Digital. All rights reserved.
          </p>

          <div className="flex items-center gap-1 font-['DM_Sans',sans-serif] text-[12px] text-white/20">
            {/* <span>Built with </span>
            <span className="text-white/40 mx-1">Next.js · Tailwind CSS</span>
            <span>·</span>
            <span
              className="bg-clip-text text-transparent ml-1"
              style={{ backgroundImage: 'linear-gradient(90deg,#00e5a0,#00b8ff)' }}
            >
              Made in India 🇮🇳
            </span> */}
          </div>

          <div className="flex gap-5">
            {['Terms', 'Privacy', 'Cookies'].map(item => (
              <a
                key={item}
                href="#"
                className="font-['DM_Sans',sans-serif] text-[12px] text-white/25 hover:text-white/60 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}