import {
  TrendingUp,
  Target,
  Megaphone,
  Search,
  Rocket,
  BarChart3,
  Hash,
  Sparkles,
} from "lucide-react";

/**
 * Global site-wide ambient background.
 * - Fixed, full-viewport, sits behind everything (z-[-1], pointer-events-none)
 * - Soft moving gradient mesh (brand colors: emerald / cyan / violet)
 * - Digital-marketing themed icons drifting slowly upward on loop
 *
 * Positions/timings are hardcoded (not Math.random()) so server and client
 * markup always match — no hydration warnings.
 */

const icons = [
  { Icon: TrendingUp, left: "6%",  size: 22, duration: 22, delay: 0,  opacity: 0.10 },
  { Icon: Target,     left: "16%", size: 16, duration: 26, delay: 4,  opacity: 0.08 },
  { Icon: Megaphone,  left: "27%", size: 20, duration: 19, delay: 8,  opacity: 0.09 },
  { Icon: Search,     left: "38%", size: 15, duration: 24, delay: 2,  opacity: 0.07 },
  { Icon: BarChart3,  left: "50%", size: 18, duration: 21, delay: 12, opacity: 0.09 },
  { Icon: Rocket,     left: "61%", size: 20, duration: 27, delay: 6,  opacity: 0.08 },
  { Icon: Hash,       left: "72%", size: 14, duration: 20, delay: 14, opacity: 0.07 },
  { Icon: Sparkles,   left: "83%", size: 16, duration: 25, delay: 9,  opacity: 0.08 },
  { Icon: TrendingUp, left: "92%", size: 19, duration: 23, delay: 3,  opacity: 0.09 },
  { Icon: Target,     left: "45%", size: 13, duration: 29, delay: 17, opacity: 0.06 },
];

export default function SiteAmbience() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#080808]"
    >
      {/* moving gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 20% 20%, rgba(0,229,160,0.06), transparent 60%), radial-gradient(ellipse 600px 500px at 80% 70%, rgba(0,184,255,0.05), transparent 60%), radial-gradient(ellipse 500px 400px at 50% 100%, rgba(167,139,250,0.04), transparent 60%)",
          backgroundSize: "160% 160%",
          animation: "meshDrift 26s ease-in-out infinite",
        }}
      />

      {/* faint grid texture for a "data / analytics" feel */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,160,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* drifting marketing icons */}
      {icons.map(({ Icon, left, size, duration, delay, opacity }, i) => (
        <span
          key={i}
          className="absolute text-emerald-400"
          style={{
            left,
            bottom: "-10%",
            opacity,
            animation: `iconDrift ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon size={size} strokeWidth={1.4} />
        </span>
      ))}

      <style>{`
        @keyframes iconDrift {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) translateX(24px) rotate(12deg);
            opacity: 0;
          }
        }
        @keyframes meshDrift {
          0%, 100% {
            background-position: 0% 0%, 100% 100%, 50% 100%;
          }
          50% {
            background-position: 10% 8%, 90% 92%, 55% 92%;
          }
        }
      `}</style>
    </div>
  );
}