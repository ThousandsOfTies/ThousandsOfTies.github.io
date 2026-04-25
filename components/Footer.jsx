/* global React */
const { useState } = React;

// ============================================================
// ABOUT
// ============================================================
function About() {
  return (
    <section id="about" style={{
      maxWidth: 1200, margin: "0 auto", padding: "96px 32px",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 100 }}>
          <window.Rule label="02 — About" />
          <h2 className="mincho" style={{
            fontSize: "clamp(32px, 3.6vw, 48px)", margin: 0, fontWeight: 700,
            letterSpacing: "-0.01em", lineHeight: 1.2,
          }}>
            千の結び目を、<br />家庭にひとつずつ。
          </h2>
          <div style={{ marginTop: 24 }}>
            <window.Squiggle width={180} color="var(--terra)" />
          </div>
        </div>
        <div>
          <p style={{ fontSize: 17, lineHeight: 1.95, color: "var(--ink-2)", margin: "0 0 28px" }}>
            <strong className="mincho">ThousandsOfTies</strong> ―― 千のつながり、千の結び目。<br />
            親と子、勉強と遊び、紙とデジタル、AIと人間。<br />
            一見すると相反するものたちを、ゆるく結び直す道具を作っています。
          </p>
          <div style={{
            background: "var(--cream-2)",
            border: "1px solid var(--rule)",
            borderRadius: 18, padding: "32px 36px",
            margin: "32px 0", position: "relative",
            transform: "rotate(-0.3deg)",
          }}>
            <span className="mincho" style={{
              position: "absolute", top: -16, left: 28,
              fontSize: 64, color: "var(--green)", lineHeight: 1, fontStyle: "italic",
            }}>“</span>
            <p className="mincho" style={{ fontSize: 18, lineHeight: 1.85, color: "var(--ink)", margin: 0, fontStyle: "italic" }}>
              人間のプロ家庭教師には勝てません。<br />
              でも、AIは文句を言わず、いつでも付き合ってくれる。<br />
              紙の温かみを残しながら、丸付け待ちの時間をゼロに。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 40 }}>
            <Principle n="01" title="ゆるく、しかし手堅く" body="毎日続けられる、無理のない学習リズムをつくる。" />
            <Principle n="02" title="アナログ × デジタル" body="手書きの脳科学的効果と、デジタルの即応性をあわせる。" />
            <Principle n="03" title="家庭の平和のために" body="親が叱らず、子が安心して遊べる時間をつくる。" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Principle({ n, title, body }) {
  return (
    <div style={{ borderTop: "1px solid var(--ink)", paddingTop: 16 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: "var(--green)", marginBottom: 10 }}>
        {n}
      </div>
      <h4 className="mincho" style={{ fontSize: 17, margin: "0 0 8px", fontWeight: 700, color: "var(--ink)" }}>
        {title}
      </h4>
      <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>
        {body}
      </p>
    </div>
  );
}
window.About = About;

// ============================================================
// NEWS
// ============================================================
function News() {
  return (
    <section id="news" style={{
      background: "var(--ink)", color: "var(--paper)",
      padding: "80px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: 3, opacity: 0.6 }}>03 — NEWS</span>
              <span style={{ flex: 1, height: 1, background: "var(--ink-soft)", opacity: 0.4 }} />
            </div>
            <h2 className="mincho" style={{ fontSize: 36, margin: 0, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              お知らせ
            </h2>
            <p style={{ color: "var(--moss)", marginTop: 12, fontSize: 14 }}>
              更新は不定期、ゆっくりです。
            </p>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {window.NEWS.map((n, i) => (
              <li key={i} style={{
                display: "grid", gridTemplateColumns: "120px 1fr", gap: 24,
                padding: "18px 0",
                borderTop: i === 0 ? "1px solid color-mix(in oklab, var(--paper) 20%, transparent)" : "none",
                borderBottom: "1px solid color-mix(in oklab, var(--paper) 20%, transparent)",
              }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--moss)", letterSpacing: 1, paddingTop: 2 }}>
                  {n.date}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.7 }}>{n.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
window.News = News;

// ============================================================
// FAQ
// ============================================================
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ maxWidth: 1000, margin: "0 auto", padding: "96px 32px" }}>
      <window.Rule label="04 — FAQ" />
      <h2 className="mincho" style={{
        fontSize: "clamp(32px, 3.6vw, 48px)", margin: "0 0 48px", fontWeight: 700,
        letterSpacing: "-0.01em", lineHeight: 1.2,
      }}>
        よくある質問。
      </h2>
      <div>
        {window.FAQS.map((f, i) => (
          <div key={i} style={{ borderTop: "1px solid var(--rule)" }}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                width: "100%", textAlign: "left",
                background: "transparent", border: "none",
                padding: "24px 0",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                cursor: "pointer", fontFamily: "inherit", color: "var(--ink)",
              }}
            >
              <span className="mincho" style={{ fontSize: 18, fontWeight: 700 }}>
                <span style={{ color: "var(--green)", marginRight: 14 }}>Q.</span>
                {f.q}
              </span>
              <span style={{
                fontSize: 22, color: "var(--ink-mute)",
                transform: open === i ? "rotate(45deg)" : "rotate(0)",
                transition: "transform .3s ease",
              }}>+</span>
            </button>
            <div style={{
              maxHeight: open === i ? 240 : 0,
              overflow: "hidden", transition: "max-height .35s ease",
            }}>
              <p style={{
                margin: 0, padding: "0 0 24px 36px",
                color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.85,
              }}>
                <span className="mincho" style={{ color: "var(--terra)", marginLeft: -28, marginRight: 14, fontWeight: 700 }}>A.</span>
                {f.a}
              </p>
            </div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid var(--rule)" }} />
      </div>
    </section>
  );
}
window.FAQ = FAQ;

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer style={{
      background: "var(--cream)",
      borderTop: "1px solid var(--rule)",
      padding: "64px 32px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <window.KnotMark size={36} />
              <div className="mincho" style={{ fontSize: 20, fontWeight: 700 }}>ThousandsOfTies</div>
            </div>
            <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.8, margin: 0, maxWidth: 360 }}>
              ゆるふわアプリ工房。家庭の小さな結び目に、AIの少しの手助けを。
            </p>
          </div>
          <FooterCol title="Apps" links={[
            ["TutoTuto", "https://thousandsofties.github.io/TutoTuto/"],
            ["DoriDori", "https://thousandsofties.github.io/doridori/"],
            ["AI-LiveTalk", "https://thousandsofties.github.io/ai-livetalk/"],
          ]} />
          <FooterCol title="Pages" links={[
            ["About", "#about"],
            ["News", "#news"],
            ["FAQ", "#faq"],
          ]} />
          <FooterCol title="Info" links={[
            ["プライバシー", "https://thousandsofties.github.io/privacy-policy.html"],
            ["利用規約", "https://thousandsofties.github.io/terms.html"],
            ["特商法", "https://thousandsofties.github.io/tokushoho.html"],
            ["お問い合わせ", "https://forms.gle/8zbWfhw4T6zL9dMq6"],
          ]} />
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          paddingTop: 24, borderTop: "1px solid var(--rule)",
          fontSize: 12, color: "var(--ink-mute)", flexWrap: "wrap", gap: 12,
        }}>
          <span className="mono">© 2026 YURUFUWA APP STUDIO</span>
          <span className="mono">THOUSANDSOFTIES.GITHUB.IO</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: 2, color: "var(--ink-mute)", marginBottom: 14 }}>
        {title.toUpperCase()}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {links.map(([label, href]) => (
          <li key={label} style={{ marginBottom: 9 }}>
            <a href={href} style={{ fontSize: 13.5, color: "var(--ink-2)" }}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
window.Footer = Footer;
