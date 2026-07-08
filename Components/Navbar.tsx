"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Search,
  PenTool,
  FileText,
  Megaphone,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const services = [
  { label: "Social Media Marketing", icon: Megaphone, color: "text-pink-400" },
  { label: "SEO", icon: Search, color: "text-emerald-400" },
  { label: "Content Marketing", icon: PenTool, color: "text-blue-400" },
  { label: "Blog Writing", icon: FileText, color: "text-orange-400" },
  { label: "Paid Advertising", icon: TrendingUp, color: "text-yellow-400" },
  { label: "Content Planning", icon: CalendarDays, color: "text-purple-400" },
];

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#0a0a0a]/85 backdrop-blur-2xl border-b border-white/[0.06]"
          : "py-5 bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Growth Next Home"
        >
          {/* Circular logo frame with gradient ring + glow, matches theme */}
          <div className="relative flex-shrink-0">
            {/* soft glow behind the circle */}
            <div
              className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg,#00e5a0,#00b8ff)" }}
            />
            {/* gradient ring */}
            <div
              className="relative w-11 h-11 rounded-full p-[2px] transition-transform duration-300 group-hover:scale-105"
              style={{ background: "linear-gradient(135deg,#00e5a0,#00b8ff)" }}
            >
              {/* inner dark backdrop so the logo sits on a clean circle */}
              <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/GrowthNext_logo.png"
                  alt="Growth Next"
                  width={40}
                  height={40}
                  priority
                  className="w-[70%] h-[70%] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Wordmark next to the circle */}
          <span className="hidden sm:block font-sans text-[19px] font-[800] tracking-[-0.3px] text-white leading-none">
            Growth
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next
            </span>
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((link) =>
            link.hasDropdown ? (
              /* Services with dropdown */
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 text-[13.5px] font-medium text-white/60 hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.06] transition-all duration-200"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-[calc(100%+8px)] left-0 w-[230px] bg-[#141414] border border-white/10 rounded-2xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-200 ${
                    dropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                  role="menu"
                >
                  {services.map(({ label, icon: Icon, color }) => (
                    <a
                      key={label}
                      href="#services"
                      role="menuitem"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/55 hover:text-white hover:bg-white/[0.06] transition-all duration-150 group"
                    >
                      <div className="w-7 h-7 rounded-[7px] bg-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.09] transition-colors">
                        <Icon size={13} className={color} />
                      </div>
                      <span className="text-[13px] font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </li>
            ) : (
              /* Regular link */
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative text-[13.5px] font-medium text-white/60 hover:text-white px-4 py-2 rounded-lg hover:bg-white/[0.06] transition-all duration-200 block group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-emerald-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              </li>
            ),
          )}
        </ul>

        {/* ── Right: Phone + CTA ── */}
        <div className="hidden md:flex items-center gap-4">
          {/* Live pulse + phone */}
          <a
            href="tel:+916264745500"
            className="flex items-center gap-2 text-[12.5px] text-white/40 hover:text-white/75 transition-colors duration-200"
            aria-label="Call Growth Next"
          >
            <span className="relative flex h-[7px] w-[7px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-emerald-400" />
            </span>
            +91 6264745500
          </a>

          {/* CTA */}
          <a
            href="#contact"
            className="relative flex items-center gap-1.5 text-[13px] font-semibold text-[#0a0a0a] px-5 py-2.5 rounded-full overflow-hidden group transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(0,229,160,0.3)]"
            style={{ background: "linear-gradient(135deg,#00e5a0,#00b8ff)" }}
          >
            Free Consultation
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0f0f0f] border-t border-white/[0.07] px-6 py-6 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white font-medium text-[14px] px-3 py-3 rounded-xl hover:bg-white/[0.05] transition-all duration-150"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-3 pt-4 border-t border-white/[0.07] flex flex-col gap-3">
            <a
              href="tel:+916264745500"
              className="flex items-center gap-2 text-white/40 text-[13px] px-3"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-emerald-400 flex-shrink-0" />
              +91 62647 45500
            </a>
            <a
              href="#contact"
              className="text-[#0a0a0a] font-semibold text-[14px] px-6 py-3 rounded-full text-center"
              style={{ background: "linear-gradient(135deg,#00e5a0,#00b8ff)" }}
              onClick={() => setMenuOpen(false)}
            >
              Free Consultation →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}