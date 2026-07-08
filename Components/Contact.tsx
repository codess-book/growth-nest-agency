"use client";
import { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

// ⚠️ TODO BEFORE LAUNCH: This key still points to a Web3Forms account, but the
// original one in this file (72a91354-...) was tied to kuldeepsinghchouhan224@gmail.com,
// NOT the client. Go to web3forms.com, sign up with daswaniyukta020@gmail.com,
// confirm the email, and paste the new key below. Every lead goes wherever this key points.
const WEB3FORMS_KEY = "023c9418-05f1-4505-a5b2-59e48c656ea2";
const OWNER_WHATSAPP = "916264745500"; // 91 + client's real number
// ─────────────────────────────────────────

const services = [
  "Social Media Marketing",
  "SEO",
  "Content Marketing",
  "Blog Writing",
  "Paid Advertising",
  "Content Planning",
  "Other"
];

const budgets = [
  "< ₹10,000 / mo",
  "₹10K – ₹25K / mo",
  "₹25K – ₹50K / mo",
  "₹50K+ / mo",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 62647 45500",
    sub: "Mon–Sat, 10am – 7pm",
    href: "tel:+916264745500",
    accent: "#00e5a0",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "daswaniyukta020@gmail.com",
    sub: "We'll get back to you soon",
    href: "mailto:daswaniyukta020@gmail.com",
    accent: "#00b8ff",
  },
  // {
  //   icon: MapPin,
  //   label: 'Visit Us',
  //   value: 'Your City, India',
  //   sub: 'By appointment only',
  //   href: '#',
  //   accent: '#a78bfa',
  // },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  business: string;
  services: string[];
  budget: string;
  message: string;
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    business: "",
    services: [],
    budget: "",
    message: "",
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // ── STEP 1: Send email via Web3Forms to daswaniyukta020@gmail.com ──
      const emailRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `🚀 New Lead: ${form.name} — Growth Next Website`,
          from_name: "Growth Next Website",
          replyto: form.email,
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          business: form.business || "Not provided",
          services: form.services.join(", ") || "Not selected",
          budget: form.budget || "Not selected",
          message: form.message || "No message",
        }),
      });

      if (!emailRes.ok) throw new Error("Email send failed");

      // ── STEP 2: Open WhatsApp with full lead details ──
      const waMessage = `🚀 *New Lead — Growth Next*

👤 *Name:* ${form.name}
📧 *Email:* ${form.email}
📞 *Phone:* ${form.phone || "Not provided"}
🏢 *Business:* ${form.business || "Not provided"}
🛠 *Services:* ${form.services.join(", ") || "Not selected"}
💰 *Budget:* ${form.budget || "Not selected"}
💬 *Message:* ${form.message || "No message"}`;

      setTimeout(() => {
        window.open(
          `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(waMessage)}`,
          "_blank",
        );
      }, 500);

      setSubmitted(true);
    } catch (err) {
      setError(
        "Something went wrong. Please WhatsApp us directly or email daswaniyukta020@gmail.com",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `
    w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-3.5
    font-['DM_Sans',sans-serif] text-[14px] text-white placeholder:text-white/25
    outline-none focus:border-emerald-400/40 focus:bg-white/[0.06]
    transition-all duration-200
  `;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[#080808] py-28 px-6 overflow-hidden"
    >
      {/* bg glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(0,229,160,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(0,184,255,0.05) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,229,160,0.3) 50%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div
          className="reveal text-center mb-16"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-6 h-px bg-emerald-400/60" />
            <span className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[3px] uppercase text-emerald-400">
              Get In Touch
            </span>
            <div className="w-6 h-px bg-emerald-400/60" />
          </div>
          <h2 className=" font-[800] text-[clamp(36px,5vw,72px)] leading-[1.05] tracking-[-2px] text-white mb-4">
            Let's Grow Your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg,#00e5a0,#00b8ff)",
              }}
            >
              Brand Together.
            </span>
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[16px] text-white/40 max-w-xl mx-auto leading-relaxed">
            Fill in the form and our team will get back to you with a custom
            strategy outline — completely free.
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
          {/* ── Form ── */}
          <div
            className="reveal"
            style={{
              opacity: 0,
              transform: "translateY(28px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            <div
              className="rounded-3xl border border-white/[0.07] p-8"
              style={{
                background:
                  "linear-gradient(145deg, rgba(0,229,160,0.04) 0%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(0,229,160,0.15)",
                      border: "1px solid rgba(0,229,160,0.3)",
                    }}
                  >
                    <CheckCircle2
                      size={32}
                      className="text-emerald-400"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="font-['Syne',sans-serif] font-[800] text-[28px] text-white mb-3">
                    You're All Set! 🎉
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] text-[15px] text-white/45 max-w-sm leading-relaxed mb-3">
                    We've sent your details to our team via{" "}
                    <span className="text-white/70">Email</span> and{" "}
                    <span className="text-emerald-400">WhatsApp</span>. We'll be
                    in touch soon!
                  </p>
                  <p className="font-['DM_Sans',sans-serif] text-[13px] text-white/30 mb-8">
                    (Check your WhatsApp — a confirmation window may have
                    opened)
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        business: "",
                        services: [],
                        budget: "",
                        message: "",
                      });
                    }}
                    className="font-['DM_Sans',sans-serif] text-[13px] text-white/40 hover:text-white transition-colors underline underline-offset-4"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        className={inputClass}
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        className={inputClass}
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
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
                        onChange={(e) =>
                          setForm((f) => ({ ...f, phone: e.target.value }))
                        }
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
                        onChange={(e) =>
                          setForm((f) => ({ ...f, business: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                      Services You Need
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => {
                        const active = form.services.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className="font-['DM_Sans',sans-serif] text-[12.5px] font-[500] px-4 py-2 rounded-full border transition-all duration-200"
                            style={{
                              background: active
                                ? "rgba(0,229,160,0.12)"
                                : "rgba(255,255,255,0.03)",
                              borderColor: active
                                ? "rgba(0,229,160,0.35)"
                                : "rgba(255,255,255,0.08)",
                              color: active
                                ? "#00e5a0"
                                : "rgba(255,255,255,0.4)",
                            }}
                          >
                            {active && <span className="mr-1">✓</span>}
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-3">
                    <label className="font-['DM_Sans',sans-serif] text-[12px] font-[500] tracking-wide text-white/40 uppercase">
                      Monthly Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => {
                        const active = form.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() =>
                              setForm((f) => ({ ...f, budget: b }))
                            }
                            className="font-['DM_Sans',sans-serif] text-[12.5px] font-[500] px-4 py-2 rounded-full border transition-all duration-200"
                            style={{
                              background: active
                                ? "rgba(0,184,255,0.12)"
                                : "rgba(255,255,255,0.03)",
                              borderColor: active
                                ? "rgba(0,184,255,0.35)"
                                : "rgba(255,255,255,0.08)",
                              color: active
                                ? "#00b8ff"
                                : "rgba(255,255,255,0.4)",
                            }}
                          >
                            {b}
                          </button>
                        );
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
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="font-['DM_Sans',sans-serif] text-[13px] text-red-400 text-center bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-2.5 font-['DM_Sans',sans-serif] font-[600] text-[15px] text-[#080808] py-4 rounded-2xl transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(0,229,160,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg,#00e5a0,#00b8ff)",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#080808]/40 border-t-[#080808] rounded-full animate-spin" />
                        Sending via Email & WhatsApp...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={15}
                          className="group-hover:translate-x-0.5 transition-transform duration-200"
                        />
                      </>
                    )}
                  </button>

                  {/* Dual notification note */}
                  <div className="flex items-center justify-center gap-3 font-['DM_Sans',sans-serif] text-[11.5px] text-white/25">
                    <span>📧 Email</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>💬 WhatsApp</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>🔒 100% Confidential</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <div
            className="reveal flex flex-col gap-4"
            style={{
              opacity: 0,
              transform: "translateX(28px)",
              transition: "all 0.8s ease 0.25s",
            }}
          >
            {contactInfo.map(
              ({ icon: Icon, label, value, sub, href, accent }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] p-5 hover:border-white/[0.13] transition-all duration-300 overflow-hidden relative"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 0% 50%, ${accent}0a, transparent 60%)`,
                    }}
                  />
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${accent}12`,
                      border: `1px solid ${accent}25`,
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      style={{ color: accent }}
                    />
                  </div>
                  <div className="relative z-10 min-w-0">
                    <p className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[2px] uppercase text-white/35 mb-0.5">
                      {label}
                    </p>
                    <p className="font-['DM_Sans',sans-serif] text-[13.5px] font-[500] text-white truncate">
                      {value}
                    </p>
                    <p className="font-['DM_Sans',sans-serif] text-[12px] text-white/35">
                      {sub}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-white/20 group-hover:text-white/60 transition-colors duration-200 relative z-10 flex-shrink-0"
                  />
                </a>
              ),
            )}

            {/* Why us */}
            <div
              className="rounded-2xl border border-white/[0.07] p-6"
              style={{
                background:
                  "linear-gradient(145deg, rgba(0,229,160,0.05) 0%, rgba(0,184,255,0.03) 100%)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(0,229,160,0.12)",
                    border: "1px solid rgba(0,229,160,0.25)",
                  }}
                >
                  <TrendingUp size={13} className="text-emerald-400" />
                </div>
                <span className="font-['Syne',sans-serif] font-[700] text-[14px] text-white">
                  Why Growth Next?
                </span>
              </div>
              {["Free strategy audit — no strings attached"].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 mb-3 last:mb-0"
                >
                  <CheckCircle2
                    size={13}
                    className="text-emerald-400 mt-[3px] flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-['DM_Sans',sans-serif] text-[13px] text-white/50 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div
              className="rounded-2xl border border-white/[0.06] p-5 flex items-center gap-4"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="relative flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-['Syne',sans-serif] font-[800] text-[18px] text-[#080808]"
                  style={{
                    background: "linear-gradient(135deg,#00e5a0,#00b8ff)",
                  }}
                >
                  👋
                </div>
              </div>
              <div>
                <p className="font-['DM_Sans',sans-serif] text-[13.5px] font-[500] text-white">
                  We're here to help
                </p>
                <p className="font-['DM_Sans',sans-serif] text-[12px] text-white/35">
                  Mon–Sat, 10am–7pm IST
                </p>
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
  );
}
