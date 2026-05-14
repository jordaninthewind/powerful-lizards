import { Star4, Lightning, Moon, Eye, Spiral, Droplet } from '../components/Glyphs';

export function MotifSection() {
  const glyphs = [
    { name: "4-star",   el: <Star4 size={36}/>,    color: "var(--coral)" },
    { name: "bolt",     el: <Lightning size={36}/>, color: "var(--marigold)" },
    { name: "moon",     el: <Moon size={36}/>,      color: "var(--rose)" },
    { name: "eye",      el: <Eye size={36}/>,       color: "var(--teal)" },
    { name: "spiral",   el: <Spiral size={36}/>,    color: "var(--sage)" },
    { name: "droplet",  el: <Droplet size={36}/>,   color: "var(--terracotta)" },
  ];

  return (
    <section className="section" id="motifs" style={{ background: "var(--ink)", color: "var(--bone)" }}>
      <div className="container">
        <div className="eyebrow-row" style={{ color: "var(--bone)" }}>
          <span className="t-eyebrow" style={{ color: "var(--marigold)" }}>04 · Motifs & glyphs</span>
        </div>
        <h2 className="t-h1" style={{ margin: "0 0 var(--s-6) 0", maxWidth: "22ch", color: "var(--bone)" }}>
          The lizards <span style={{ color: "var(--marigold)", fontStyle: "italic" }}>paint themselves</span> —
          we just borrow the patterns.
        </h2>

        <div className="grid grid-3" style={{ marginBottom: "var(--s-6)" }}>
          {[
            { name: "Polka",  motif: "motif-dots",    color: "var(--rose)" },
            { name: "Stripe", motif: "motif-stripes",  color: "var(--coral)" },
            { name: "Zigzag", motif: "motif-zigzag",   color: "var(--teal)" },
          ].map(m => (
            <div key={m.name} style={{ borderRadius: "var(--r-md)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className={m.motif} style={{ height: 140, color: m.color, background: "var(--ink-2)" }}/>
              <div style={{ padding: "var(--s-3) var(--s-4)", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700 }}>{m.name}</span>
                <span className="t-mono" style={{ color: "rgba(255,248,232,0.5)" }}>.motif-{m.name.toLowerCase()}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-6" style={{ gap: "var(--s-3)" }}>
          {glyphs.map((g, i) => (
            <div key={i} style={{
              background: "var(--ink-2)",
              borderRadius: "var(--r-md)",
              padding: "var(--s-5) var(--s-3) var(--s-3)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--s-3)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ color: g.color }}>{g.el}</div>
              <span className="t-mono" style={{ color: "rgba(255,248,232,0.6)", fontSize: 11 }}>{g.name}</span>
            </div>
          ))}
        </div>

        <p className="t-body" style={{ maxWidth: "55ch", marginTop: "var(--s-6)", color: "rgba(255,248,232,0.75)" }}>
          The 4-pointed star <span style={{ color: "var(--marigold)" }}>✦</span> is our verified mark.
          Patterns appear on packaging, hover states, and empty cards. Use them at 6–12% opacity for
          backgrounds; full saturation for accents.
        </p>
      </div>
    </section>
  );
}
