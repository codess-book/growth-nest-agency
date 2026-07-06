'use client'
import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'

export default function PrivacyPolicyModal() {
  const [visible, setVisible] = useState(false)   // mounted in DOM
  const [animateIn, setAnimateIn] = useState(false) // driving the enter/exit transition

  const open = useCallback(() => {
    setVisible(true)
    // next frame, so the initial (closed) styles paint before transitioning in
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimateIn(true)))
  }, [])

  const close = useCallback(() => {
    setAnimateIn(false)
    setTimeout(() => setVisible(false), 300) // matches transition duration below
  }, [])

  useEffect(() => {
    if (!visible) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [visible, close])

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="font-['DM_Sans',sans-serif] text-[12px] text-white/25 hover:text-white/60 transition-colors duration-200"
      >
        Privacy Policy
      </button>

      {visible && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-policy-title"
        >
          {/* Backdrop */}
          <div
            onClick={close}
            className="absolute inset-0 transition-opacity duration-300 ease-out"
            style={{
              background: 'rgba(4,4,4,0.75)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              opacity: animateIn ? 1 : 0,
            }}
          />

          {/* Panel */}
          <div
            className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl border border-white/[0.08] overflow-hidden flex flex-col transition-all duration-300 ease-out"
            style={{
              background: '#0b0b0b',
              boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.02)',
              opacity: animateIn ? 1 : 0,
              transform: animateIn
                ? 'translateY(0) scale(1)'
                : 'translateY(16px) scale(0.96)',
            }}
          >
            {/* top glow line, matches site accent */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,160,0.35) 50%, transparent)' }}
            />
            <div
              className="absolute -top-20 right-0 w-[300px] h-[300px] pointer-events-none"
              style={{ background: 'radial-gradient(circle at 100% 0%, rgba(0,184,255,0.06) 0%, transparent 60%)' }}
            />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-4 px-7 pt-7 pb-5 border-b border-white/[0.06] flex-shrink-0">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-5 h-px bg-emerald-400/60" />
                  <span className="font-['DM_Sans',sans-serif] text-[10.5px] font-[600] tracking-[3px] uppercase text-emerald-400">
                    Growth Next
                  </span>
                </div>
                <h2 id="privacy-policy-title" className="font-[800] text-[24px] sm:text-[28px] leading-[1.1] tracking-[-0.5px] text-white">
                  Privacy Policy
                </h2>
                <p className="font-['DM_Sans',sans-serif] text-[12.5px] text-white/35 mt-1.5">
                  Last updated: July 2026
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close privacy policy"
                className="flex-shrink-0 w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="relative overflow-y-auto px-7 py-6 flex flex-col gap-8 font-['DM_Sans',sans-serif] text-[14px] leading-[1.75] text-white/55">

              <div>
                <h3 className="font-['Syne',sans-serif] font-[700] text-[16px] text-white mb-2.5">
                  Who we are
                </h3>
                <p>
                  Growth Next ("we," "us") operates this website. If you have any
                  questions about this policy or how your information is handled, you
                  can reach us at{' '}
                  <a href="mailto:daswaniyukta020@gmail.com" className="text-emerald-400 hover:underline">
                    daswaniyukta020@gmail.com
                  </a>{' '}
                  or{' '}
                  <a href="tel:+916264745500" className="text-emerald-400 hover:underline">
                    +91 62647 45500
                  </a>.
                </p>
              </div>

              <div>
                <h3 className="font-['Syne',sans-serif] font-[700] text-[16px] text-white mb-2.5">
                  What information we collect
                </h3>
                <p className="mb-2.5">
                  When you fill out the contact form on this site, we collect the
                  details you choose to submit:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1.5">
                  <li>Your name and email address</li>
                  <li>Your phone number, if provided</li>
                  <li>Your business name, if provided</li>
                  <li>The services you're interested in and your budget range, if selected</li>
                  <li>Any message you write in the form</li>
                </ul>
                <p className="mt-2.5">
                  We do not use cookies, analytics, or advertising trackers on this
                  site at this time.
                </p>
              </div>

              <div>
                <h3 className="font-['Syne',sans-serif] font-[700] text-[16px] text-white mb-2.5">
                  How we use it, and who sees it
                </h3>
                <p>
                  When you submit the contact form, your details are sent directly to
                  our business inbox by email, and a WhatsApp message pre-filled with
                  the same details is opened so we can follow up with you there. We
                  use this information only to respond to your enquiry and discuss
                  our services with you — it is not sold, rented, or shared with any
                  third party for marketing purposes.
                </p>
              </div>

              <div>
                <h3 className="font-['Syne',sans-serif] font-[700] text-[16px] text-white mb-2.5">
                  How long we keep it
                </h3>
                <p>
                  We retain enquiry information for as long as needed to respond to
                  you and maintain a record of our business communications. You can
                  ask us to delete your information at any time by emailing us at the
                  address above.
                </p>
              </div>

              <div>
                <h3 className="font-['Syne',sans-serif] font-[700] text-[16px] text-white mb-2.5">
                  Your choices
                </h3>
                <p>
                  You're always in control of what you share with us — none of the
                  form fields except name and email are required. If you'd like your
                  information corrected or removed from our records, just reach out
                  and we'll take care of it.
                </p>
              </div>

              <div>
                <h3 className="font-['Syne',sans-serif] font-[700] text-[16px] text-white mb-2.5">
                  Changes to this policy
                </h3>
                <p>
                  As Growth Next grows, this policy may be updated to reflect new
                  tools or practices (for example, if we start using analytics or
                  running ads). Any changes will be posted here.
                </p>
              </div>
            </div>

            {/* Footer bar */}
            <div className="relative flex-shrink-0 px-7 py-5 border-t border-white/[0.06] flex justify-end">
              <button
                type="button"
                onClick={close}
                className="font-['DM_Sans',sans-serif] font-[600] text-[13.5px] text-[#080808] px-6 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-[1px]"
                style={{ background: 'linear-gradient(135deg,#00e5a0,#00b8ff)' }}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}