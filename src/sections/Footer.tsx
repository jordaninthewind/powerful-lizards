import { WizardMark } from '../components/WizardMark';

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--bone)", padding: "var(--s-9) var(--s-6) var(--s-6)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: "var(--s-6)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", marginBottom: "var(--s-3)" }}>
              <WizardMark size={42} primary="var(--marigold)" accent="var(--coral)"/>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em" }}>
                Powerful Lizards
              </div>
            </div>
            <p className="t-body" style={{ color: "rgba(255,248,232,0.75)", maxWidth: "34ch" }}>
              Tiny ceramic sorcerers, hand-thrown and fired in Barcelona. One coven a month, until the
              clay runs out.
            </p>
          </div>

          {[
            { h: "Shop",   links: ["The May coven", "Past drops", "Reserved & holds", "Gift a lizard"] },
            { h: "Studio", links: ["About", "Field notes", "Visit the kiln", "Wholesale"] },
          ].map(c => (
            <div key={c.h}>
              <div className="t-eyebrow" style={{ color: "var(--marigold)", marginBottom: "var(--s-3)" }}>{c.h}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {c.links.map(l => (
                  <li key={l}><a href="#" style={{ color: "var(--bone)", textDecoration: "none", opacity: 0.85 }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="t-eyebrow" style={{ color: "var(--marigold)", marginBottom: "var(--s-3)" }}>Be summoned</div>
            <p className="t-small" style={{ color: "rgba(255,248,232,0.7)" }}>
              One quiet email when the next coven is ready to leave the studio.
            </p>
            <div style={{ display: "flex", gap: "var(--s-2)", marginTop: "var(--s-3)" }}>
              <input
                className="input"
                placeholder="you@your-cave.com"
                style={{ background: "rgba(255,248,232,0.08)", color: "var(--bone)", borderColor: "rgba(255,248,232,0.16)" }}
              />
              <button className="btn btn-primary">→</button>
            </div>
          </div>
        </div>

        <hr className="divider" style={{ margin: "var(--s-7) 0 var(--s-4) 0", background: "rgba(255,248,232,0.14)" }}/>
        <div style={{
          display: "flex", justifyContent: "space-between",
          color: "rgba(255,248,232,0.55)", fontSize: 13,
          flexWrap: "wrap", gap: "var(--s-3)",
        }}>
          <div>© 2026 Powerful Lizards · BCN · made with clay and patience</div>
          <div>privacy · returns · the small print</div>
        </div>
      </div>
    </footer>
  );
}
