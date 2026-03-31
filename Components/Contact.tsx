'use client'
import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle2, TrendingUp } from 'lucide-react'

const services = [
  'SEO Optimization',
  'Social Media Marketing',
  'Web Development',
  'Performance Marketing',
  'Graphic Design & Branding',
  'Content Writing',
]

const budgets = [
  '< ₹10,000 / mo',
  '₹10K – ₹25K / mo',
  '₹25K – ₹50K / mo',
  '₹50K+ / mo',
]

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 XXXXX XXXXX',
    sub: 'Mon–Sat, 10am – 7pm',
    href: 'tel:+91XXXXXXXXXX',
    accent: '#00e5a0',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@growthnext.in',
    sub: 'We reply within 4 hours',
    href: 'mailto:hello@growthnext.in',
    accent: '#00b8ff',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Your City, India',
    sub: 'By appointment only',
    href: '#',
    accent: '#a78bfa',
  },
]

type FormState = {
  name: string
  email: string
  phone: string
  business: string
  services: string[]
  budget: string
  message: string
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [form, setForm]           = useState<FormState>({
    name: '', email: '', phone: '', business: '',
    services: [], budget: '', message: '',
  })

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const toggleService = (s: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = `
    w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-3.5
    font-['DM_Sans',sans-serif] text-[14px] text-white placeholder:text-white/25
    outline-none focus:border-emerald-400/40 focus:bg-white/[0.06]
    transition-all duration-200
  `

  return (
    <section id="contact" ref={ref} className="relative bg-[#080808] py-28 px-6 overflow-hidden">

      {/* bg glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(0,229,160,0.07) 0%, transparent 60%)' }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 100% 0%, rgba(0,184,255,0.05) 0%, transparent 60%)' }}
      />

      {/* top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,160,0.3) 50%, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div
          className="reveal text-center mb-16"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-6 h-px bg-emerald-400/60" />
            <span className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[3px] uppercase text-emerald-400">
              Get In Touch
            </span>
            <div className="w-6 h-px bg-emerald-400/60" />
          </div>
          <h2 className=" font-[800] text-[clamp(36px,5vw,72px)] leading-[1.05] tracking-[-2px] text-white mb-4">
            Let's Grow Your{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
            >
              Brand Together.
            </span>
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[16px] text-white/40 max-w-xl mx-auto leading-relaxed">
            Fill in the form and our team will get back to you within 4 hours with a custom strategy outline — completely free.
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">

          {/* ── Form ── */}
          <div
            className="reveal"
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'all 0.7s ease 0.1s' }}
          >
            <div
              className="rounded-3xl border border-white/[0.07] p-8"
              style={{ background: 'linear-gradient(145deg, rgba(0,229,160,0.04) 0%, rgba(255,255,255,0.02) 100%)' }}
            >
              {submitted ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: 'rgba(0,229,160,0.15)', border: '1px solid rgba(0,229,160,0.3)' }}
                  >
                    <CheckCircle2 size={32} className="text-emerald-400" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-['Syne',sans-serif] font-[800] text-[28px] text-white mb-3">
                    You're All Set!
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] text-[15px] text-white/45 max-w-sm leading-relaxed mb-8">
                    We've received your message. Our team will reach out within 4 hours with a personalised growth strategy.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-['DM_Sans',sans-serif] text-[13px] text-white/40 hover:text-white transition-colors underline underline-offset-4"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Row 1 — name + email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Rahul Sharma"
                        className={inputClass}
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="rahul@company.com"
                        className={inputClass}
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  {/* Row 2 — phone + business */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                        Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Brand Pvt. Ltd."
                        className={inputClass}
                        value={form.business}
                        onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                      />
                    </div>
                  </div>

                  {/* Services multi-select */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                      Services You Need
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map(s => {
                        const active = form.services.includes(s)
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className="font-['DM_Sans',sans-serif] text-[12.5px] font-[500] px-4 py-2 rounded-full border transition-all duration-200"
                            style={{
                              background: active ? 'rgba(0,229,160,0.12)' : 'rgba(255,255,255,0.03)',
                              borderColor: active ? 'rgba(0,229,160,0.35)' : 'rgba(255,255,255,0.08)',
                              color: active ? '#00e5a0' : 'rgba(255,255,255,0.4)',
                            }}
                          >
                            {active && <span className="mr-1">✓</span>}
                            {s}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                      Monthly Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map(b => {
                        const active = form.budget === b
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setForm(f => ({ ...f, budget: b }))}
                            className="font-['DM_Sans',sans-serif] text-[12.5px] font-[500] px-4 py-2 rounded-full border transition-all duration-200"
                            style={{
                              background: active ? 'rgba(0,184,255,0.12)' : 'rgba(255,255,255,0.03)',
                              borderColor: active ? 'rgba(0,184,255,0.35)' : 'rgba(255,255,255,0.08)',
                              color: active ? '#00b8ff' : 'rgba(255,255,255,0.4)',
                            }}
                          >
                            {b}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your business and what you want to achieve..."
                      className={`${inputClass} resize-none`}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex items-center justify-center gap-2.5 font-['DM_Sans',sans-serif] font-[600] text-[15px] text-[#080808] py-4 rounded-2xl transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(0,229,160,0.3)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                    style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#080808]/40 border-t-[#080808] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                      </>
                    )}
                  </button>

                  <p className="font-['DM_Sans',sans-serif] text-[11.5px] text-white/25 text-center">
                    🔒 Your information is 100% confidential. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <div
            className="reveal flex flex-col gap-4"
            style={{ opacity: 0, transform: 'translateX(28px)', transition: 'all 0.8s ease 0.25s' }}
          >

            {/* Contact info cards */}
            {contactInfo.map(({ icon: Icon, label, value, sub, href, accent }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] p-5 hover:border-white/[0.13] transition-all duration-300 overflow-hidden relative"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 50%, ${accent}0a, transparent 60%)` }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}
                >
                  <Icon size={18} strokeWidth={1.8} style={{ color: accent }} />
                </div>
                <div className="relative z-10">
                  <p className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[2px] uppercase text-white/35 mb-0.5">{label}</p>
                  <p className="font-['DM_Sans',sans-serif] text-[14.5px] font-[500] text-white">{value}</p>
                  <p className="font-['DM_Sans',sans-serif] text-[12px] text-white/35">{sub}</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-white/20 group-hover:text-white/60 transition-colors duration-200 relative z-10" />
              </a>
            ))}

            {/* Why us card */}
            <div
              className="rounded-2xl border border-white/[0.07] p-6"
              style={{ background: 'linear-gradient(145deg, rgba(0,229,160,0.05) 0%, rgba(0,184,255,0.03) 100%)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(0,229,160,0.12)', border: '1px solid rgba(0,229,160,0.25)' }}
                >
                  <TrendingUp size={13} className="text-emerald-400" />
                </div>
                <span className="font-['Syne',sans-serif] font-[700] text-[14px] text-white">
                  Why Growth Next?
                </span>
              </div>
              {[
                'Free strategy audit — no strings attached',
                'Dedicated account manager from day 1',
                'Weekly performance reports',
                'Cancel anytime — no lock-in contracts',
              ].map(item => (
                <div key={item} className="flex items-start gap-2.5 mb-3 last:mb-0">
                  <CheckCircle2 size={13} className="text-emerald-400 mt-[3px] flex-shrink-0" strokeWidth={2} />
                  <span className="font-['DM_Sans',sans-serif] text-[13px] text-white/50 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div
              className="rounded-2xl border border-white/[0.06] p-5 flex items-center gap-4"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-['Syne',sans-serif] font-[800] text-[13px] text-[#080808]"
                  style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}>
                  4h
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#080808]">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                </span>
              </div>
              <div>
                <p className="font-['DM_Sans',sans-serif] text-[13.5px] font-[500] text-white">Average response time</p>
                <p className="font-['DM_Sans',sans-serif] text-[12px] text-white/35">Our team is online Mon–Sat, 10am–7pm IST</p>
              </div>
            </div>
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