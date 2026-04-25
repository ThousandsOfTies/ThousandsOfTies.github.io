/* global React, ReactDOM */
const { useState, useEffect } = React;

// ============================================================
// FULL PAGE WRAPPER (used inside artboard)
// ============================================================
function FullPage({ layout = "A", theme = "default" }) {
  return (
    <div data-theme={theme === "default" ? undefined : theme} style={{
      background: "var(--paper)", color: "var(--ink)",
      minHeight: 100,
    }}>
      <window.Header />
      <window.Hero />
      <window.AppsSection layout={layout} />
      <window.About />
      <window.News />
      <window.FAQ />
      <window.Footer />
    </div>
  );
}

// ============================================================
// MAIN APP — Design canvas with 3 layout variations
// ============================================================
function App() {
  const TWEAKS = /*EDITMODE-BEGIN*/{
    "layout": "A",
    "theme": "default",
    "showCanvas": false
  }/*EDITMODE-END*/;
  const [tweaks, setTweaks] = window.useTweaks ? window.useTweaks(TWEAKS) : [TWEAKS, () => {}];

  // If "showCanvas" is off → render single full page based on tweaks
  if (!tweaks.showCanvas) {
    return (
      <>
        <FullPage layout={tweaks.layout} theme={tweaks.theme} />
        <MyTweaks tweaks={tweaks} setTweaks={setTweaks} />
      </>
    );
  }

  // Otherwise → show design canvas with 3 layout variations
  const { DesignCanvas, DCSection, DCArtboard } = window;
  return (
    <>
      <DesignCanvas
        title="ThousandsOfTies — Launch Page"
        subtitle="ゆるふわアプリ工房ポータル · 3 layout variations for the apps grid"
      >
        <DCSection id="layouts" title="Apps Grid Layouts">
          <DCArtboard id="layout-a" label="A · Editorial（フラッグシップ強調）" width={1280} height={3400}>
            <div data-theme={tweaks.theme === "default" ? undefined : tweaks.theme}>
              <FullPage layout="A" theme={tweaks.theme} />
            </div>
          </DCArtboard>
          <DCArtboard id="layout-b" label="B · Catalog（2x2 均等グリッド · ホバープレビュー）" width={1280} height={3400}>
            <div data-theme={tweaks.theme === "default" ? undefined : tweaks.theme}>
              <FullPage layout="B" theme={tweaks.theme} />
            </div>
          </DCArtboard>
          <DCArtboard id="layout-c" label="C · Index（タイポ重視リスト · ライブプレビュー）" width={1280} height={3400}>
            <div data-theme={tweaks.theme === "default" ? undefined : tweaks.theme}>
              <FullPage layout="C" theme={tweaks.theme} />
            </div>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>
      <MyTweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

// ============================================================
// TWEAKS PANEL
// ============================================================
function MyTweaks({ tweaks, setTweaks }) {
  if (!window.TweaksPanel) return null;
  const { TweaksPanel: Panel, TweakSection, TweakRadio, TweakSelect, TweakToggle } = window;
  return (
    <Panel title="Tweaks">
      <TweakSection title="View">
        <TweakToggle
          label="Design canvas (3案を比較)"
          value={tweaks.showCanvas}
          onChange={(v) => setTweaks({ showCanvas: v })}
        />
      </TweakSection>
      {!tweaks.showCanvas && (
        <TweakSection title="Apps grid layout">
          <TweakRadio
            value={tweaks.layout}
            onChange={(v) => setTweaks({ layout: v })}
            options={[
              { value: "A", label: "A · Editorial" },
              { value: "B", label: "B · Catalog (2×2)" },
              { value: "C", label: "C · Index list" },
            ]}
          />
        </TweakSection>
      )}
      <TweakSection title="Theme">
        <TweakRadio
          value={tweaks.theme}
          onChange={(v) => setTweaks({ theme: v })}
          options={[
            { value: "default", label: "Cream × Deep Green（標準）" },
            { value: "dark",    label: "Dark × Cream Accent" },
            { value: "forest",  label: "Forest（深緑ベース）" },
            { value: "paper",   label: "和紙 × 朱（和モダン）" },
          ]}
        />
      </TweakSection>
    </Panel>
  );
}

// ============================================================
// MOUNT
// ============================================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
