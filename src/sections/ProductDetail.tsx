import { useState, Fragment } from 'react';
import { LIZARDS } from '../data';
import { LizardImage } from '../components/LizardImage';
import { Star4, Droplet, Moon } from '../components/Glyphs';

export function ProductDetail() {
  const liz = LIZARDS[2]; // Mossward
  const [photo, setPhoto] = useState(0);
  const swatches = [
    { bgTop: "#C9D2A8", bgBottom: "#7B8B5C" },
    { bgTop: "#FBE3A1", bgBottom: "#F4B82A" },
    { bgTop: "#BCE3E8", bgBottom: "#4FB5C7" },
    { bgTop: "#FAD2DD", bgBottom: "#F0A6BB" },
  ];

  return (
    <section className="section" id="product">
      <div className="container">
        <div className="eyebrow-row"><span className="t-eyebrow">07 · Product detail</span></div>
        <h2 className="t-h1" style={{ margin: "0 0 var(--s-6) 0", maxWidth: "22ch" }}>
          Each lizard gets their own page, like a passport.
        </h2>

        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{
            padding: "var(--s-3) var(--s-5)", borderBottom: "1px solid var(--border)",
            display: "flex", gap: "var(--s-3)", alignItems: "center",
          }}>
            <a href="#" style={{ color: "var(--ink-3)", textDecoration: "none" }}>The coven</a>
            <span style={{ color: "var(--ink-3)" }}>·</span>
            <a href="#" style={{ color: "var(--ink-3)", textDecoration: "none" }}>May drop</a>
            <span style={{ color: "var(--ink-3)" }}>·</span>
            <span style={{ fontWeight: 700 }}>Mossward №{liz.num}</span>
            <button className="btn btn-soft btn-sm" style={{ marginLeft: "auto" }}>← previous lizard</button>
            <button className="btn btn-soft btn-sm">next lizard →</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 0 }}>
            <div style={{ padding: "var(--s-6)", background: "var(--paper)", borderRight: "1px solid var(--border)" }}>
              <div style={{
                aspectRatio: "1/1",
                background: `linear-gradient(180deg, ${swatches[photo].bgTop} 0%, ${swatches[photo].bgBottom} 100%)`,
                borderRadius: "var(--r-md)", overflow: "hidden", position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid var(--border)",
              }}>
                <div className="motif-stars" style={{ position: "absolute", inset: 0, opacity: 0.4 }}/>
                <div style={{ position: 'relative', zIndex: 1, width: '88%', height: '88%' }}>
                  <LizardImage species={liz.species} alt={`${liz.name} ceramic lizard wizard`} />
                </div>
                <div style={{ position: "absolute", top: 18, left: 18 }}>
                  <span className="badge badge-available">Available</span>
                </div>
                <div style={{
                  position: "absolute", bottom: 18, right: 18,
                  background: "rgba(255,248,232,0.85)", backdropFilter: "blur(8px)",
                  padding: "6px 12px", borderRadius: "var(--r-pill)",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <Star4 size={14} style={{ color: "var(--primary)" }}/>
                  <span className="t-small" style={{ color: "var(--ink)", fontWeight: 600 }}>1 of 1</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--s-2)", marginTop: "var(--s-3)" }}>
                {swatches.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setPhoto(i)}
                    style={{
                      aspectRatio: "1/1", border: 0, cursor: "pointer",
                      background: `linear-gradient(180deg, ${s.bgTop} 0%, ${s.bgBottom} 100%)`,
                      borderRadius: "var(--r-sm)",
                      boxShadow: photo === i ? "0 0 0 2.5px var(--ink)" : "0 0 0 1px var(--border)",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ padding: "var(--s-6)" }}>
              <div className="t-mono" style={{ color: "var(--ink-3)" }}>MWD-{liz.num} · the may coven</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(48px, 5vw, 72px)",
                lineHeight: 0.95, margin: "var(--s-2) 0 var(--s-4) 0",
                letterSpacing: "-0.02em", fontWeight: 700,
              }}>
                Mossward, of <span style={{ fontStyle: "italic", color: "var(--primary)" }}>the pond</span>
              </h3>
              <div className="t-hand" style={{ color: "var(--ink-2)", marginBottom: "var(--s-4)" }}>
                "thinking, mostly. about the pond."
              </div>
              <p className="t-body-lg" style={{ margin: "0 0 var(--s-5) 0", color: "var(--ink-2)" }}>
                Hand-pinched from a sage-glazed body with a marigold robe and a pink cone hat striped
                red. Mossward is the contemplative one — he believes in the pond more than he believes
                in most things, and he would like a windowsill that gets morning light.
              </p>

              <dl style={{ margin: "0 0 var(--s-5) 0", display: "grid", gridTemplateColumns: "max-content 1fr", gap: "6px 24px" }}>
                {[
                  ["Height", "6.4 cm"],
                  ["Weight", "78 g"],
                  ["Body", "red earthenware"],
                  ["Glazes", "sage · marigold · rose · coral"],
                  ["Fired", "cone 06, oxidation"],
                  ["Born", "11 May 2026"],
                ].map(([k, v]) => (
                  <Fragment key={k}>
                    <dt className="t-small" style={{ color: "var(--ink-3)", fontWeight: 600 }}>{k}</dt>
                    <dd style={{ margin: 0, fontWeight: 600 }}>{v}</dd>
                  </Fragment>
                ))}
              </dl>

              <div style={{
                display: "flex", alignItems: "baseline", justifyContent: "space-between",
                gap: "var(--s-3)", marginBottom: "var(--s-4)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, letterSpacing: "-0.02em" }}>€{liz.price}</div>
                <div className="t-small" style={{ textAlign: "right" }}>
                  Free shipping over €80 ·<br/>ships in 5–7 days, wrapped in newsprint
                </div>
              </div>

              <div style={{ display: "flex", gap: "var(--s-3)" }}>
                <button className="btn btn-primary btn-lg" style={{ flex: 1, justifyContent: "center" }}>
                  Take Mossward home →
                </button>
                <button className="btn btn-ghost btn-icon" aria-label="save">
                  <Droplet size={22}/>
                </button>
              </div>

              <div style={{
                marginTop: "var(--s-5)",
                padding: "var(--s-4)",
                background: "var(--rose-soft)",
                borderRadius: "var(--r-md)",
                display: "flex", gap: "var(--s-3)", alignItems: "flex-start",
              }}>
                <Moon size={22} style={{ color: "#7B2C49", flexShrink: 0, marginTop: 2 }}/>
                <div className="t-small" style={{ color: "#7B2C49" }}>
                  <b>Care:</b> wipe with a soft, damp cloth. Don't bathe him. He's a wizard, not a teacup.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
