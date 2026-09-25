"use client";
import { useState } from "react";
import Image from "next/image";
import { Sparkles, BadgeCheck, ArrowUpRight } from "lucide-react";

export default function FounderCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    setTilt({ x, y });
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative rounded-3xl p-8 border border-white/[0.08] overflow-hidden transition-transform duration-300 ease-out"
        style={{
          background:
            "linear-gradient(145deg, rgba(0,229,160,0.06) 0%, rgba(0,184,255,0.04) 100%)",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* ambient glow blobs */}
        <div
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,160,0.15) 0%, transparent 70%)",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full pointer-events-none animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(0,184,255,0.1) 0%, transparent 70%)",
            animationDuration: "5s",
            animationDelay: "1s",
          }}
        />

        <div
          className="relative z-10 flex flex-col items-center text-center"
          style={{ transform: "translateZ(30px)" }}
        >
          <span className="font-['DM_Sans',sans-serif] text-[11px] font-[600] tracking-[3px] uppercase text-white/30 mb-6">
            Meet the Founder
          </span>

          {/* photo with animated gradient ring */}
          <div className="relative w-[180px] h-[180px] mb-6">
            <div
              className="absolute -inset-[6px] rounded-full opacity-90"
              style={{
                background:
                  "conic-gradient(from 0deg, #00e5a0, #00b8ff, #a78bfa, #00e5a0)",
                animation: "spin 6s linear infinite",
              }}
            />
            <div className="absolute inset-[3px] rounded-full bg-[#0a0a0a]" />
            <div className="absolute inset-[6px] rounded-full overflow-hidden">
              <Image
                src="/founder-yukta.png"
                alt="Yukta Daswani, Founder of Growth Next"
                fill
                className="object-cover scale-[1.35]"
                sizes="180px"
              />
            </div>
            {/* verified-style badge */}
            <div
              className="absolute bottom-1 right-1 w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]"
              style={{ background: "linear-gradient(135deg,#00e5a0,#00b8ff)" }}
            >
              <BadgeCheck
                size={16}
                className="text-[#080808]"
                strokeWidth={2.5}
              />
            </div>
          </div>

          <h3 className="font-['Syne',sans-serif] font-[700] text-[20px] text-white mb-1">
            Yukta Daswani
          </h3>
          <p className="font-['DM_Sans',sans-serif] text-[13px] text-emerald-400 font-[500] mb-5">
            Founder, Growth Next
          </p>

          {/* <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {["SEO", "Social Media", "Paid Ads", "Content Strategy"].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-['DM_Sans',sans-serif] text-[11px] font-[500] px-3 py-1.5 rounded-full text-white/50 border border-white/[0.08]"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  {tag}
                </span>
              ),
            )}
          </div> */}

          <div className="border-t border-white/[0.07] pt-6 w-full">
         
              <a
                href="#contact"
                className="reveal group inline-flex items-center gap-2 font-['DM_Sans',sans-serif] font-[600] text-[14px] text-[#080808] px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(0,229,160,0.3)]"
                style={{
                  background: "linear-gradient(135deg,#00e5a0,#00b8ff)",
                  opacity: 0,
                  transform: "translateY(24px)",
                  transition:
                    "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s, box-shadow 0.3s",
                }}
              >
                Book Your Free Consultation
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
