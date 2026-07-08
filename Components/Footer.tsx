"use client";
import { TrendingUp, Mail, Phone, ChevronRight } from "lucide-react";
import PrivacyPolicyModal from "./privacy-policy";
``;
const InstagramIcon = ({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const services = [
  "Social Media Marketing",
  "SEO",
  "Content Marketing",
  "Blog Writing",
  "Paid Advertising",
  "Content Planning",
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
];

// ⚠️ Only Instagram was confirmed by the client. Removed Facebook/LinkedIn/YouTube
// since they all pointed to '#' — add them back once she gives real profile links.
const socials = [
  {
    href: "https://instagram.com/digitalmarketer.jivika",
    label: "Instagram",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[14px] h-[14px]"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] overflow-hidden">
      {/* ── top glow line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,229,160,0.35) 50%, transparent)",
        }}
      />

      {/* ── background radial ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(0,229,160,0.05) 0%, transparent 65%)",
        }}
      />

      {/* ── Main footer grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand col */}
          <div>
            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#00e5a0,#00b8ff)",
                }}
              >
                <TrendingUp
                  size={15}
                  strokeWidth={2.5}
                  className="text-[#080808]"
                />
              </div>
              <span className="font-['',sans-serif] text-[19px] font-[800] tracking-[-0.3px] text-white">
                Growth
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg,#00e5a0,#00b8ff)",
                  }}
                >
                  Next
                </span>
              </span>
            </a>

            <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/40 leading-[1.8] max-w-[260px] mb-7">
              Grow Smarter. Market Better. Customized digital marketing
              strategies that drive real, measurable results.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5">
              {socials.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/[0.06] transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4 className="font-['Syne',sans-serif] text-[11px] font-[700] tracking-[3px] uppercase text-white/50 mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-1.5 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight
                      size={11}
                      className="text-emerald-400/0 group-hover:text-emerald-400/80 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
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
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight
                      size={11}
                      className="text-emerald-400/0 group-hover:text-emerald-400/80 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {item.label}
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
                  href="tel:+916264745500"
                  className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/[0.06] transition-all duration-200">
                    <Phone size={12} className="text-emerald-400" />
                  </div>
                  <span className="pt-1.5">+91 62647 45500</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:daswaniyukta020@gmail.com"
                  className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/[0.06] transition-all duration-200">
                    <Mail size={12} className="text-emerald-400" />
                  </div>
                  <span className="pt-1.5">daswaniyukta020@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/digitalmarketer.jivika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[13.5px] text-white/40 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/[0.06] transition-all duration-200">
                    <InstagramIcon size={12} className="text-emerald-400" />
                  </div>
                  <span className="pt-1.5">@digitalmarketer.jivika</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="font-['DM_Sans',sans-serif] text-[12px] text-white/25">
              © {year} Growth Next. All rights reserved.
            </p>

            <p className="font-['DM_Sans',sans-serif] text-[12px] text-white/25">
              Designed & developed by{" "}
              <a
                href="https://instagram.com/codes.book"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 hover:text-emerald-400 transition-colors duration-200"
              >
                codes.book
              </a>
            </p>
          </div>

          <div className="flex gap-5">
            <PrivacyPolicyModal />
          </div>
        </div>
      </div>
    </footer>
  );
}
