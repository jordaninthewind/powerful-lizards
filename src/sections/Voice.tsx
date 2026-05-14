export function Voice() {
  const lines = [
    { pre: "Voice", body: "A potter who's seen things. Warm, specific, slightly weird. Never bossy, never wellness-y.", color: "var(--coral-soft)" },
    { pre: "Sentence shape", body: "Short. Specific. A little incantatory. \"Held for you, until midnight.\"", color: "var(--marigold-soft)" },
    { pre: "What we don't say", body: "\"Curated\", \"artisan\", \"luxe\", \"elevate\". The lizards would not like it.", color: "var(--teal-soft)" },
  ];
  return (
    <section className="section section-tight" id="voice">
      <div className="container">
        <div className="eyebrow-row"><span className="t-eyebrow">01 · Voice & tone</span></div>
        <h2 className="t-h1" style={{ margin: "0 0 var(--s-6) 0", maxWidth: "18ch" }}>
          We write like a <span style={{ fontStyle: "italic", color: "var(--primary)" }}>kind</span>, slightly
          eccentric ceramicist.
        </h2>
        <div className="grid grid-3">
          {lines.map((l, i) => (
            <div key={i} className="card" style={{ padding: "var(--s-5)", background: l.color, borderColor: "transparent" }}>
              <div className="t-eyebrow" style={{ marginBottom: "var(--s-2)" }}>{l.pre}</div>
              <p className="t-body-lg" style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "22px", lineHeight: 1.25, fontWeight: 600 }}>
                {l.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
