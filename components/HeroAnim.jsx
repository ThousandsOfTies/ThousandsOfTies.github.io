/* global React */
const { useEffect, useState, useRef } = React;

// === Animated hero glyph: a "knot" of ties weaving together ===
function KnotMark({ size = 120, stroke = "var(--green)", accent = "var(--terra)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs>
        <filter id="knot-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>
      {/* Three interlocking arcs = "thousands of ties" */}
      <g filter="url(#knot-soft)" strokeWidth="3" strokeLinecap="round" fill="none">
        <circle cx="44" cy="50" r="22" stroke={stroke} />
        <circle cx="76" cy="50" r="22" stroke={stroke} />
        <circle cx="60" cy="76" r="22" stroke={accent} />
      </g>
      {/* Tiny tie-dot in center */}
      <circle cx="60" cy="60" r="2.5" fill={stroke} />
    </svg>
  );
}

// === The "gate" mark: pen → gate → play ===
function GateMark() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhase(p => (p + 1) % 4), 1800);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{
      width: "100%", aspectRatio: "1.4 / 1",
      position: "relative",
      borderRadius: 18,
      background: "var(--cream-2)",
      overflow: "hidden",
      border: "1px solid var(--rule)",
    }}>
      {/* Subtle paper grid */}
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
        <defs>
          <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke="var(--rule)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <svg viewBox="0 0 280 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {/* The gate: two posts + lintel */}
        <g stroke="var(--green)" strokeWidth="3" strokeLinecap="round" fill="none">
          <line x1="100" y1="60" x2="180" y2="60" />
          <line x1="100" y1="60" x2="100" y2="150" />
          <line x1="180" y1="60" x2="180" y2="150" />
        </g>
        {/* Drill paper appears at gate */}
        <g style={{
          opacity: phase === 0 || phase === 1 ? 1 : 0,
          transition: "opacity .5s ease, transform .5s ease",
          transform: phase === 0 ? "translateY(8px)" : "translateY(0)",
          transformOrigin: "140px 105px",
        }}>
          <rect x="118" y="80" width="44" height="56" rx="2" fill="var(--paper)" stroke="var(--ink-soft)" strokeWidth="1.2" />
          <line x1="124" y1="92" x2="156" y2="92" stroke="var(--ink-mute)" strokeWidth="1" />
          <line x1="124" y1="100" x2="150" y2="100" stroke="var(--ink-mute)" strokeWidth="1" />
          <line x1="124" y1="108" x2="156" y2="108" stroke="var(--ink-mute)" strokeWidth="1" />
          <line x1="124" y1="116" x2="144" y2="116" stroke="var(--ink-mute)" strokeWidth="1" />
          {/* Check mark on drill */}
          <path d="M 130 124 L 136 130 L 152 118"
                stroke="var(--terra)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"
                style={{
                  strokeDasharray: 40,
                  strokeDashoffset: phase === 1 ? 0 : 40,
                  transition: "stroke-dashoffset .8s ease",
                }} />
        </g>
        {/* Free-play burst after gate */}
        <g style={{
          opacity: phase === 2 || phase === 3 ? 1 : 0,
          transition: "opacity .5s ease",
        }}>
          <circle cx="140" cy="108" r={phase === 3 ? 38 : 6} fill="none" stroke="var(--terra)" strokeWidth="1.4"
                  style={{ transition: "r .9s cubic-bezier(.2,.7,.2,1)" }} />
          <circle cx="140" cy="108" r={phase === 3 ? 24 : 3} fill="none" stroke="var(--honey)" strokeWidth="1.2"
                  style={{ transition: "r .9s cubic-bezier(.2,.7,.2,1) .1s" }} />
          {/* Play triangle */}
          <path d="M 134 100 L 134 116 L 148 108 Z" fill="var(--green)" />
        </g>
        {/* Captions */}
        <text x="140" y="42" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-soft)" letterSpacing="2">
          {phase < 2 ? "STEP 1 · 解く" : "STEP 2 · 自由"}
        </text>
        <text x="140" y="178" textAnchor="middle" fontFamily="Zen Old Mincho, serif" fontSize="13" fill="var(--ink-2)" fontStyle="italic">
          {phase < 2 ? "通過ゲート" : "あとは堂々と、遊んでいい。"}
        </text>
      </svg>
    </div>
  );
}

window.KnotMark = KnotMark;
window.GateMark = GateMark;
