export function Colors() {
  const glazes = [
    { name: "Coral",       hex: "#E84A3F", token: "--coral",       role: "primary · ctas · hat brims", ink: "var(--bone)" },
    { name: "Marigold",    hex: "#F4B82A", token: "--marigold",    role: "highlights · stripes",        ink: "var(--ink)" },
    { name: "Terracotta",  hex: "#C9683B", token: "--terracotta",  role: "warm earth · feet",           ink: "var(--bone)" },
    { name: "Sage",        hex: "#7B8B5C", token: "--sage",        role: "frog skin · success",         ink: "var(--bone)" },
    { name: "Sky teal",    hex: "#4FB5C7", token: "--teal",        role: "robe blue · info",            ink: "var(--ink)" },
    { name: "Wizard rose", hex: "#F0A6BB", token: "--rose",        role: "hat dots · softness",         ink: "var(--ink)" },
  ];
  const neutrals = [
    { name: "Cream", hex: "#F6E7CD", token: "--cream", note: "page background" },
    { name: "Paper", hex: "#FBF1DC", token: "--paper", note: "section surface" },
    { name: "Bone",  hex: "#FFF8E8", token: "--bone",  note: "card surface" },
    { name: "Ink",   hex: "#251A12", token: "--ink",   note: "text" },
  ];

  return (
    <section className="section" id="colors" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="eyebrow-row"><span className="t-eyebrow">02 · Color</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-6)", alignItems: "end", marginBottom: "var(--s-6)" }}>
          <h2 className="t-h1" style={{ margin: 0, maxWidth: "18ch" }}>
            Six glazes, one warm cream, and a fired-clay ink.
          </h2>
          <p className="t-body-lg" style={{ margin: 0, color: "var(--ink-2)", maxWidth: "42ch" }}>
            Pulled directly from the lizards. The palette is maximalist — pair coral against sage,
            sage against rose, rose against marigold. Cream is always the floor.
          </p>
        </div>

        <div className="grid grid-3">
          {glazes.map(g => (
            <div key={g.name} className="card" style={{ padding: 0, borderRadius: "var(--r-md)", overflow: "hidden" }}>
              <div style={{
                background: g.hex, color: g.ink,
                padding: "var(--s-5)", aspectRatio: "3/2",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div className="t-mono" style={{ opacity: 0.85 }}>{g.hex.toUpperCase()}</div>
                <div className="t-display" style={{ fontSize: "40px", fontWeight: 700, letterSpacing: "-0.02em" }}>{g.name}</div>
              </div>
              <div style={{ padding: "var(--s-4) var(--s-5)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--s-3)" }}>
                <span className="t-mono" style={{ color: "var(--ink-3)" }}>{g.token}</span>
                <span className="t-small" style={{ textAlign: "right" }}>{g.role}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="t-h3" style={{ margin: "var(--s-7) 0 var(--s-4) 0" }}>Neutrals — the kiln floor</h3>
        <div className="grid grid-4">
          {neutrals.map(n => (
            <div key={n.name} style={{
              display: "flex", gap: "var(--s-3)", alignItems: "center",
              padding: "var(--s-3)", background: "var(--bone)",
              borderRadius: "var(--r-md)", border: "1px solid var(--border)",
            }}>
              <div style={{ width: 54, height: 54, borderRadius: "var(--r-sm)", background: n.hex, border: "1px solid var(--border)", flexShrink: 0 }}/>
              <div>
                <div style={{ fontWeight: 700 }}>{n.name}</div>
                <div className="t-mono" style={{ color: "var(--ink-3)", fontSize: 11 }}>{n.token}</div>
                <div className="t-small" style={{ marginTop: 2 }}>{n.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "var(--s-7)" }}>
          <div className="t-eyebrow" style={{ marginBottom: "var(--s-3)" }}>Suggested pairings</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--s-3)" }}>
            {[
              ["var(--coral)", "var(--marigold)"],
              ["var(--sage)", "var(--rose)"],
              ["var(--teal)", "var(--terracotta)"],
              ["var(--ink)", "var(--marigold)"],
            ].map((p, i) => (
              <div key={i} style={{
                height: 84, borderRadius: "var(--r-md)", overflow: "hidden",
                display: "grid", gridTemplateColumns: "1.4fr 1fr",
                border: "1px solid var(--border)",
              }}>
                <div style={{ background: p[0] }}/>
                <div style={{ background: p[1] }}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
