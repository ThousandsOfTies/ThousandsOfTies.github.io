/* global React */
const { useState, useEffect, useRef } = React;

// ============================================================
// HEADER
// ============================================================
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "color-mix(in oklab, var(--paper) 88%, transparent)" : "transparent",
      backdropFilter: scrolled ? "blur(14px) saturate(1.1)" : "none",
      borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
      transition: "all .25s ease",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "16px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <window.KnotMark size={34} />
          <div>
            <div className="mincho" style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)", lineHeight: 1 }}>
              ThousandsOfTies
            </div>
            <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-mute)", letterSpacing: 2, marginTop: 2 }}>
              YURUFUWA APP STUDIO
            </div>
          </div>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 14 }}>
          <a href="#apps" style={{ color: "var(--ink-soft)" }}>Apps</a>
          <a href="#about" style={{ color: "var(--ink-soft)" }}>About</a>
          <a href="#news" style={{ color: "var(--ink-soft)" }}>News</a>
          <a href="#faq" style={{ color: "var(--ink-soft)" }}>FAQ</a>
          <a href="https://thousandsofties.github.io/TutoTuto/" style={{
            background: "var(--ink)", color: "var(--paper)",
            padding: "9px 18px", borderRadius: 999, fontSize: 13, fontWeight: 500,
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            TutoTutoを開く
            <span style={{ fontSize: 11 }}>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
window.Header = Header;

// ============================================================
// HERO
// ============================================================
function Hero() {
  return (
    <section id="top" style={{
      maxWidth: 1200, margin: "0 auto",
      padding: "72px 32px 80px",
      position: "relative",
    }}>
      {/* Decorative scribbles */}
      <svg width="120" height="120" viewBox="0 0 120 120" style={{
        position: "absolute", top: 40, right: 60, opacity: 0.6, pointerEvents: "none",
      }} aria-hidden="true">
        <path d="M 10 60 Q 30 20, 60 60 T 110 60" stroke="var(--honey)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="20" r="4" fill="var(--terra)" />
        <path d="M 80 90 L 95 105 M 95 90 L 80 105" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div style={{
        display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56, alignItems: "center",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <window.Pill color="green">EST. 2026</window.Pill>
            <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: 2 }}>
              YURUFUWA · APP · STUDIO
            </span>
          </div>
          <h1 className="mincho" style={{
            fontSize: "clamp(40px, 5.5vw, 76px)",
            lineHeight: 1.12, fontWeight: 900, margin: "0 0 28px",
            letterSpacing: "-0.01em",
          }}>
            家庭の学びを、<br />
            <span style={{
              fontStyle: "italic", color: "var(--green)",
              position: "relative", display: "inline-block",
            }}>
              ゆるく
              <span style={{ position: "absolute", left: -2, right: -2, bottom: -6 }}>
                <window.Squiggle width={140} color="var(--honey)" />
              </span>
            </span>
            支える道具。
          </h1>
          <p style={{
            fontSize: 17, lineHeight: 1.85, color: "var(--ink-soft)",
            margin: "0 0 36px", maxWidth: 540,
          }}>
            <strong style={{ color: "var(--ink)" }}>ThousandsOfTies</strong> は、
            親と子の小さな"結び目"のために生まれた、ゆるふわアプリ工房です。
            手書き × AI採点の <em className="mincho">TutoTuto</em> を中心に、
            家庭学習を助ける道具を少しずつ作っています。
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#apps" style={{
              background: "var(--green)", color: "var(--paper)",
              padding: "16px 28px", borderRadius: 999,
              fontSize: 15, fontWeight: 500,
              display: "inline-flex", alignItems: "center", gap: 10,
              boxShadow: "0 10px 24px -12px var(--green-deep)",
            }}>
              アプリを見る <span>↓</span>
            </a>
            <a href="https://thousandsofties.github.io/TutoTuto/" style={{
              padding: "16px 28px", borderRadius: 999,
              fontSize: 15, fontWeight: 500,
              border: "1.5px solid var(--ink)", color: "var(--ink)",
              display: "inline-flex", alignItems: "center", gap: 10,
            }}>
              TutoTutoを起動 <span>→</span>
            </a>
          </div>
          <div style={{
            display: "flex", gap: 32, marginTop: 48,
            paddingTop: 28, borderTop: "1px solid var(--rule)",
          }}>
            <Stat n="3" label="公開中アプリ" />
            <Stat n="1" label="開発中" />
            <Stat n="∞" label="家庭の平和を" />
          </div>
        </div>
        <div>
          <window.GateMark />
          <p className="mincho" style={{
            fontSize: 13, color: "var(--ink-mute)",
            textAlign: "center", margin: "16px 0 0", fontStyle: "italic",
          }}>
            ―― ドリルを通れば、その先は自由。
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div className="mincho" style={{ fontSize: 32, fontWeight: 700, color: "var(--green)", lineHeight: 1 }}>{n}</div>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: 1.5, color: "var(--ink-mute)", marginTop: 6 }}>
        {label}
      </div>
    </div>
  );
}
window.Hero = Hero;

// ============================================================
// APPS GRID — 3 LAYOUT VARIATIONS
// ============================================================

// LAYOUT A: "Editorial" — featured hero card + 3-up grid below
function AppsGridA() {
  const [hovered, setHovered] = useState(null);
  return (
    <div>
      <FeaturedCard app={window.APPS[0]} />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 16, marginTop: 16,
      }}>
        {window.APPS.slice(1).map((app) => (
          <AppCardEditorial
            key={app.id} app={app}
            isHovered={hovered === app.id}
            onEnter={() => setHovered(app.id)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>
    </div>
  );
}

// LAYOUT B: "Catalog" — uniform 2x2 grid, all equal weight, hover expands preview
function AppsGridB() {
  const [hovered, setHovered] = useState(null);
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 20,
    }}>
      {window.APPS.map((app) => (
        <AppCardCatalog
          key={app.id} app={app}
          isHovered={hovered === app.id}
          onEnter={() => setHovered(app.id)}
          onLeave={() => setHovered(null)}
        />
      ))}
    </div>
  );
}

// LAYOUT C: "Index list" — quiet typographic list with hover preview on right
function AppsGridC() {
  const [hovered, setHovered] = useState(window.APPS[0].id);
  const current = window.APPS.find(a => a.id === hovered) || window.APPS[0];
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48,
      alignItems: "start",
    }}>
      <div>
        {window.APPS.map((app, i) => (
          <a
            key={app.id} href={app.locked ? "#" : app.href}
            onMouseEnter={() => setHovered(app.id)}
            style={{
              display: "grid", gridTemplateColumns: "40px 1fr auto",
              gap: 20, alignItems: "center",
              padding: "24px 0",
              borderTop: "1px solid var(--rule)",
              borderBottom: i === window.APPS.length - 1 ? "1px solid var(--rule)" : "none",
              cursor: app.locked ? "default" : "pointer",
              transition: "background .2s ease, padding .25s ease",
              background: hovered === app.id ? "color-mix(in oklab, var(--cream-2) 60%, transparent)" : "transparent",
              paddingLeft: hovered === app.id ? 16 : 0,
              borderRadius: hovered === app.id ? 12 : 0,
            }}
          >
            <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: 1 }}>
              0{i + 1}
            </span>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <h3 className="mincho" style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "var(--ink)" }}>
                  {app.name}
                </h3>
                <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: 1.5 }}>
                  {app.en}
                </span>
              </div>
              <p style={{ margin: "6px 0 0", fontSize: 13.5, color: "var(--ink-soft)" }}>{app.tag}</p>
            </div>
            <window.Pill color={app.accent}>{app.badge}</window.Pill>
          </a>
        ))}
      </div>
      {/* Live preview pane */}
      <div style={{
        position: "sticky", top: 100,
        background: "var(--cream-2)",
        border: "1px solid var(--rule)",
        borderRadius: 18, padding: 28,
        minHeight: 360,
        transform: "rotate(0.4deg)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <window.AppIcon kind={current.icon} accent={current.accent} size={64} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
            <window.Pill color={current.accent}>{current.badge}</window.Pill>
            <window.Pill color="ink" bordered>{current.pricing}</window.Pill>
          </div>
        </div>
        <h3 className="mincho" style={{ fontSize: 26, margin: "0 0 8px", fontWeight: 700, lineHeight: 1.3 }}>
          {current.name}
        </h3>
        <p className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: 2, margin: "0 0 16px" }}>
          {current.kana} · {current.en}
        </p>
        <p style={{ fontSize: 14.5, lineHeight: 1.85, color: "var(--ink-soft)", margin: "0 0 24px" }}>
          {current.desc}
        </p>
        {!current.locked && (
          <a href={current.href} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 20px", borderRadius: 999,
            background: "var(--ink)", color: "var(--paper)",
            fontSize: 13, fontWeight: 500,
          }}>
            アプリを開く →
          </a>
        )}
      </div>
    </div>
  );
}

window.AppsGridA = AppsGridA;
window.AppsGridB = AppsGridB;
window.AppsGridC = AppsGridC;

// ============================================================
// CARD VARIANTS
// ============================================================
function FeaturedCard({ app }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={app.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        background: "var(--green)",
        borderRadius: 24, padding: 0, overflow: "hidden",
        position: "relative",
        boxShadow: hover ? "0 24px 48px -16px var(--green-deep)" : "0 8px 20px -10px var(--green-deep)",
        transform: hover ? "translateY(-3px) rotate(-0.2deg)" : "translateY(0)",
        transition: "all .35s cubic-bezier(.2,.7,.2,1)",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", minHeight: 320 }}>
        <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "var(--paper)" }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              <window.Pill color="paper">{app.badge}</window.Pill>
              <window.Pill color="paper">{app.status}</window.Pill>
              <window.Pill color="paper">{app.pricing}</window.Pill>
            </div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 2, opacity: 0.7, marginBottom: 8 }}>
              {app.kana.toUpperCase()} · {app.en?.toUpperCase()}
            </div>
            <h3 className="mincho" style={{ fontSize: 52, margin: "0 0 14px", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.05 }}>
              {app.name}
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.92, margin: "0 0 8px", maxWidth: 460 }}>
              {app.desc}
            </p>
          </div>
          <div style={{ marginTop: 32 }}>
            <span style={{
              padding: "12px 22px",
              background: "var(--paper)", color: "var(--green)",
              borderRadius: 999, fontSize: 14, fontWeight: 500,
              display: "inline-flex", alignItems: "center", gap: 10,
              transform: hover ? "translateX(4px)" : "translateX(0)",
              transition: "transform .3s ease",
            }}>
              アプリを開く →
            </span>
          </div>
        </div>
        <div style={{
          background: "var(--green-deep)", position: "relative",
          display: "grid", placeItems: "center", padding: 32,
        }}>
          <window.FeaturedIllustration />
        </div>
      </div>
    </a>
  );
}

function AppCardEditorial({ app, isHovered, onEnter, onLeave }) {
  return (
    <a
      href={app.locked ? "#" : app.href}
      onMouseEnter={onEnter} onMouseLeave={onLeave}
      style={{
        display: "block",
        background: "var(--paper)",
        border: "1px solid var(--rule)",
        borderRadius: 18, padding: 28,
        position: "relative", overflow: "hidden",
        transition: "all .3s cubic-bezier(.2,.7,.2,1)",
        transform: isHovered ? "translateY(-4px) rotate(-0.3deg)" : "translateY(0)",
        boxShadow: isHovered ? "0 20px 32px -16px rgba(22, 50, 37, 0.18)" : "0 2px 0 var(--rule-soft)",
        cursor: app.locked ? "default" : "pointer",
        opacity: app.locked ? 0.85 : 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
        <window.AppIcon kind={app.icon} accent={app.accent} />
        <window.Pill color={app.accent}>{app.badge}</window.Pill>
      </div>
      <div className="mono" style={{ fontSize: 10, letterSpacing: 2, color: "var(--ink-mute)", marginBottom: 6 }}>
        {app.en?.toUpperCase()}
      </div>
      <h3 className="mincho" style={{ fontSize: 22, fontWeight: 700, margin: "0 0 10px", color: "var(--ink)" }}>
        {app.name}
      </h3>
      <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "var(--ink-soft)", margin: "0 0 24px", minHeight: 70 }}>
        {app.desc}
      </p>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, color: "var(--ink-mute)",
      }}>
        <span className="mono" style={{ letterSpacing: 1 }}>{app.pricing}</span>
        <span style={{ color: "var(--ink)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
          {app.locked ? "Coming soon" : "開く"}
          {!app.locked && (
            <span style={{
              transform: isHovered ? "translateX(6px)" : "translateX(0)",
              transition: "transform .3s ease", display: "inline-block",
            }}>→</span>
          )}
        </span>
      </div>
    </a>
  );
}

function AppCardCatalog({ app, isHovered, onEnter, onLeave }) {
  return (
    <a
      href={app.locked ? "#" : app.href}
      onMouseEnter={onEnter} onMouseLeave={onLeave}
      style={{
        display: "block", position: "relative",
        background: "var(--paper)",
        border: "1px solid var(--rule)",
        borderRadius: 20,
        padding: 32, minHeight: 220,
        overflow: "hidden",
        transition: "all .35s cubic-bezier(.2,.7,.2,1)",
        boxShadow: isHovered ? "0 24px 40px -20px rgba(22, 50, 37, 0.25)" : "0 2px 0 var(--rule-soft)",
        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
        cursor: app.locked ? "default" : "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
        <window.AppIcon kind={app.icon} accent={app.accent} size={64} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
            <window.Pill color={app.accent}>{app.badge}</window.Pill>
            <window.Pill color="ink" bordered>{app.pricing}</window.Pill>
          </div>
          <h3 className="mincho" style={{ fontSize: 24, fontWeight: 700, margin: "0 0 4px", color: "var(--ink)" }}>
            {app.name}
          </h3>
          <p className="mono" style={{ fontSize: 10.5, color: "var(--ink-mute)", letterSpacing: 2, margin: "0 0 14px" }}>
            {app.en?.toUpperCase()}
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--ink-soft)", margin: 0 }}>
            {app.desc}
          </p>
        </div>
      </div>
      <window.CardPreview app={app} visible={isHovered} />
    </a>
  );
}

// ============================================================
// APPS WRAPPER WITH LAYOUT SWITCH
// ============================================================
function AppsSection({ layout = "A" }) {
  return (
    <section id="apps" style={{
      background: "var(--cream)", padding: "96px 32px",
      borderTop: "1px solid var(--rule)",
      borderBottom: "1px solid var(--rule)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <window.Rule label="01 — Apps & Tools" />
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16,
        }}>
          <h2 className="mincho" style={{
            fontSize: "clamp(32px, 3.6vw, 48px)", margin: 0, fontWeight: 700,
            letterSpacing: "-0.01em", lineHeight: 1.2,
          }}>
            つくっているもの。
          </h2>
          <p style={{ color: "var(--ink-mute)", margin: 0, maxWidth: 380, fontSize: 14 }}>
            それぞれ独立して使えて、組み合わせるとちょっと楽しい。<br />全部、ブラウザだけで動きます。
          </p>
        </div>
        {layout === "A" && <AppsGridA />}
        {layout === "B" && <AppsGridB />}
        {layout === "C" && <AppsGridC />}
      </div>
    </section>
  );
}
window.AppsSection = AppsSection;
