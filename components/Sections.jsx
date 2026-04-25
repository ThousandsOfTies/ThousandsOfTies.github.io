/* global React */
const { useState, useEffect, useRef } = React;

// ============================================================
// APP DATA (updated)
// ============================================================
const APPS = [
  {
    id: "tutotuto",
    name: "TutoTuto",
    kana: "トゥトトゥト",
    en: "AI Drill Tutor",
    tag: "AI採点ドリル・有料メインアプリ",
    desc: "紙のドリルをペンで解いて、AIが数秒で丸付け。家庭学習の主軸となる、ゆるふわ工房のフラッグシップ。",
    href: "https://thousandsofties.github.io/TutoTuto/",
    badge: "FLAGSHIP",
    accent: "green",
    status: "v1.0",
    icon: "tt",
    pricing: "Stripe / 月額",
  },
  {
    id: "doridori",
    name: "DoriDori",
    kana: "ドリドリ",
    en: "Free Drill Library",
    tag: "無料PDFドリル配布",
    desc: "印刷して使える、ゆるふわ工房オリジナルの無料ドリル集。家庭でも教室でも自由に。",
    href: "https://thousandsofties.github.io/doridori/",
    badge: "WIP",
    accent: "honey",
    status: "開発中",
    icon: "dd",
    pricing: "FREE",
  },
  {
    id: "ailivetalk",
    name: "AI-LiveTalk",
    kana: "エーアイ ライブトーク",
    en: "Conversational Practice",
    tag: "AI会話練習",
    desc: "AIと声で対話して、生きた英語/日本語を練習する。間違いを恐れずに話せる、忍耐強いパートナー。",
    href: "https://thousandsofties.github.io/ai-livetalk/",
    badge: "BETA",
    accent: "terra",
    status: "公開中",
    icon: "lt",
    pricing: "FREE β",
  },
  {
    id: "eigo-nou",
    name: "日本語でマスターする英語脳",
    kana: "Eigo-Nou",
    en: "Coming Soon",
    tag: "新規開発予定",
    desc: "日本語の語感を起点に、英語の感覚を組み立て直す。ゆるふわ工房の次の挑戦。",
    href: "#",
    badge: "SOON",
    accent: "moss",
    status: "構想中",
    icon: "en",
    pricing: "—",
    locked: true,
  },
];

const NEWS = [
  { date: "2026.04.20", text: "AI-LiveTalk のベータ版を公開しました。" },
  { date: "2026.03.15", text: "DoriDori の開発を開始しました。" },
  { date: "2026.02.01", text: "TutoTuto を Stripe 課金型に移行しました。" },
  { date: "2026.01.12", text: "ポータルサイトをリニューアル。ThousandsOfTies 始動。" },
];

const FAQS = [
  { q: "「ゆるふわアプリ工房」とは？", a: "個人開発の小さな工房です。家庭の学びをゆるく、しかし手堅く支える道具を、少しずつ作っています。" },
  { q: "アプリは無料で使えますか？", a: "DoriDori と AI-LiveTalk は無料で使えます。TutoTuto は Stripe による月額課金制です。" },
  { q: "教育機関での利用は可能ですか？", a: "もちろんです。学校・塾・学習支援団体での利用、内容のフィードバックも歓迎します。お問い合わせフォームからご連絡ください。" },
  { q: "開発者です。コラボや貢献はできますか？", a: "歓迎します。一部はOSSとして公開しています。お問い合わせフォームから一言いただければ。" },
  { q: "今後どんなアプリが増えますか？", a: "「日本語でマスターする英語脳」を構想中です。家庭学習・親子のコミュニケーションを助ける小さな道具を、ゆっくり増やしていきます。" },
];

window.APPS = APPS;
window.NEWS = NEWS;
window.FAQS = FAQS;

// ============================================================
// SHARED PRIMITIVES
// ============================================================
function Pill({ children, color = "ink", bordered = false }) {
  const map = {
    ink:    { bg: "var(--ink)",    fg: "var(--paper)" },
    green:  { bg: "var(--green)",  fg: "var(--paper)" },
    terra:  { bg: "var(--terra)",  fg: "var(--paper)" },
    honey:  { bg: "var(--honey)",  fg: "var(--ink)" },
    moss:   { bg: "var(--moss)",   fg: "var(--paper)" },
    paper:  { bg: "var(--paper)",  fg: "var(--ink)" },
  };
  const c = map[color] || map.ink;
  return (
    <span className="mono" style={{
      display: "inline-block",
      padding: bordered ? "2px 8px" : "3px 9px",
      borderRadius: 999,
      background: bordered ? "transparent" : c.bg,
      color: bordered ? c.bg : c.fg,
      border: bordered ? `1px solid ${c.bg}` : "none",
      fontSize: 10, letterSpacing: 1.4, fontWeight: 500,
    }}>{children}</span>
  );
}
window.Pill = Pill;

function Rule({ label, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 28px" }}>
      <span className="mono" style={{
        fontSize: 11, letterSpacing: 3, color: color || "var(--ink-mute)",
        textTransform: "uppercase",
      }}>{label}</span>
      <span style={{ flex: 1, height: 1, background: "var(--rule)" }} />
    </div>
  );
}
window.Rule = Rule;

// === Hand-drawn underline (wavy) ===
function Squiggle({ width = 200, color = "var(--honey)" }) {
  return (
    <svg width={width} height="14" viewBox={`0 0 ${width} 14`} style={{ display: "block" }}>
      <path
        d={`M 4 9 Q ${width*0.15} 1, ${width*0.3} 8 T ${width*0.6} 8 T ${width-4} 8`}
        stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
window.Squiggle = Squiggle;

// === App icons (hand-drawn feel) ===
function AppIcon({ kind, accent, size = 56 }) {
  const colors = {
    green: "var(--green)",
    honey: "var(--honey)",
    terra: "var(--terra)",
    moss: "var(--moss)",
  };
  const c = colors[accent] || "var(--green)";
  return (
    <div style={{
      width: size, height: size, borderRadius: 14,
      background: "var(--paper)",
      border: `1.5px solid ${c}`,
      display: "grid", placeItems: "center",
      flexShrink: 0,
      transform: "rotate(-1.5deg)",
      boxShadow: `2px 3px 0 ${c}22`,
    }}>
      {kind === "tt" && (
        <svg width={size*0.6} height={size*0.6} viewBox="0 0 32 32" fill="none">
          <rect x="6" y="5" width="20" height="22" rx="2" stroke={c} strokeWidth="1.6" transform="rotate(-2 16 16)" />
          <line x1="10" y1="11" x2="22" y2="11" stroke={c} strokeWidth="1.4" />
          <line x1="10" y1="15" x2="20" y2="15" stroke={c} strokeWidth="1.4" />
          <path d="M 11 20 L 14 23 L 22 16" stroke="var(--terra)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )}
      {kind === "dd" && (
        <svg width={size*0.6} height={size*0.6} viewBox="0 0 32 32" fill="none">
          <rect x="7" y="4" width="16" height="22" rx="1.5" stroke={c} strokeWidth="1.6" />
          <rect x="10" y="7" width="16" height="22" rx="1.5" fill="var(--paper)" stroke={c} strokeWidth="1.6" />
          <line x1="13" y1="13" x2="22" y2="13" stroke={c} strokeWidth="1.2" />
          <line x1="13" y1="17" x2="22" y2="17" stroke={c} strokeWidth="1.2" />
          <line x1="13" y1="21" x2="19" y2="21" stroke={c} strokeWidth="1.2" />
        </svg>
      )}
      {kind === "lt" && (
        <svg width={size*0.6} height={size*0.6} viewBox="0 0 32 32" fill="none">
          <path d="M 4 8 Q 4 5 7 5 L 22 5 Q 25 5 25 8 L 25 17 Q 25 20 22 20 L 14 20 L 9 25 L 9 20 L 7 20 Q 4 20 4 17 Z"
                stroke={c} strokeWidth="1.6" fill="none" strokeLinejoin="round" />
          <circle cx="11" cy="13" r="1.3" fill={c} />
          <circle cx="15" cy="13" r="1.3" fill={c} />
          <circle cx="19" cy="13" r="1.3" fill={c} />
        </svg>
      )}
      {kind === "en" && (
        <svg width={size*0.6} height={size*0.6} viewBox="0 0 32 32" fill="none">
          <text x="6" y="20" fontFamily="serif" fontSize="14" fontWeight="700" fill={c}>あ</text>
          <text x="18" y="22" fontFamily="serif" fontSize="16" fontWeight="700" fill={c} fontStyle="italic">A</text>
          <path d="M 4 26 Q 16 30 28 26" stroke={c} strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}
window.AppIcon = AppIcon;

// === Featured tablet illustration ===
function FeaturedIllustration({ light = false }) {
  return (
    <svg viewBox="0 0 280 240" style={{ width: "100%", maxWidth: 320 }}>
      <rect x="40" y="30" width="200" height="180" rx="12" fill={light ? "var(--cream)" : "var(--paper)"} />
      <rect x="48" y="38" width="184" height="164" rx="6" fill="var(--cream)" />
      <text x="60" y="64" fontFamily="Zen Old Mincho, serif" fontSize="16" fontWeight="700" fill="var(--ink)">問1.</text>
      <text x="60" y="92" fontFamily="Zen Kaku Gothic New, sans-serif" fontSize="14" fill="var(--ink-soft)">12 + 35 =</text>
      <text x="135" y="93" fontFamily="cursive" fontSize="20" fill="var(--terra)" fontWeight="700" fontStyle="italic">47</text>
      <circle cx="200" cy="86" r="14" fill="none" stroke="var(--green-soft)" strokeWidth="2.5" />
      <text x="60" y="124" fontFamily="Zen Old Mincho, serif" fontSize="16" fontWeight="700" fill="var(--ink)">問2.</text>
      <text x="60" y="152" fontFamily="Zen Kaku Gothic New, sans-serif" fontSize="14" fill="var(--ink-soft)">8 × 7 =</text>
      <text x="120" y="153" fontFamily="cursive" fontSize="20" fill="var(--terra)" fontWeight="700" fontStyle="italic">54</text>
      <g stroke="var(--terra)" strokeWidth="2.5" strokeLinecap="round">
        <line x1="190" y1="142" x2="210" y2="162" />
        <line x1="210" y1="142" x2="190" y2="162" />
      </g>
      <g transform="translate(58, 178)">
        <rect x="0" y="0" width="74" height="20" rx="10" fill="var(--green)" />
        <text x="37" y="14" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="500" fill="var(--paper)" letterSpacing="1">AI採点 ✓</text>
      </g>
      <g transform="translate(180, 170) rotate(-30)">
        <rect x="0" y="0" width="6" height="40" rx="1" fill="var(--ink)" />
        <polygon points="0,40 6,40 3,48" fill="var(--terra)" />
        <rect x="0" y="0" width="6" height="6" fill="var(--honey)" />
      </g>
    </svg>
  );
}
window.FeaturedIllustration = FeaturedIllustration;

// === Hover preview popover for app cards ===
function CardPreview({ app, visible }) {
  if (!app) return null;
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: `var(--${app.accent === "honey" ? "honey" : app.accent === "terra" ? "terra" : app.accent === "moss" ? "moss" : "green"})`,
      borderRadius: 18,
      padding: 20,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      color: "var(--paper)",
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
      transition: "opacity .25s ease",
    }}>
      <div className="mono" style={{ fontSize: 10, letterSpacing: 2, opacity: 0.85 }}>
        PREVIEW · {app.en?.toUpperCase()}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        {app.locked ? (
          <span className="mincho" style={{ fontStyle: "italic", fontSize: 16 }}>
            「日本語の語感から、英語の感覚を組み立て直す」
          </span>
        ) : (
          <>
            <div className="mincho" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
              {app.name}
            </div>
            <div style={{ opacity: 0.92 }}>{app.tag} · {app.pricing}</div>
          </>
        )}
      </div>
      <div className="mono" style={{
        fontSize: 11, fontWeight: 500, alignSelf: "flex-end",
        display: "flex", alignItems: "center", gap: 6,
      }}>
        {app.locked ? "COMING SOON" : "OPEN →"}
      </div>
    </div>
  );
}
window.CardPreview = CardPreview;
