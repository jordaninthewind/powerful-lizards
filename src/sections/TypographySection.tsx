export function TypographySection() {
  const scale = [
    { label: "Display 1", cls: "t-display t-display-1", sample: "Powerful Lizards",               size: "clamp 64-156" },
    { label: "Display 2", cls: "t-display t-display-2", sample: "Meet the coven",                  size: "clamp 48-96" },
    { label: "H1",        cls: "t-h1",                  sample: "Nim, of the marigold robe",        size: "clamp 40-72" },
    { label: "H2",        cls: "t-h2",                  sample: "How to summon one",                size: "clamp 32-48" },
    { label: "H3",        cls: "t-h3",                  sample: "Glaze notes",                      size: "28" },
    { label: "Body Lg",   cls: "t-body-lg",             sample: "He was thrown on a wet Tuesday and refuses to discuss it.", size: "18" },
    { label: "Body",      cls: "t-body",                sample: "Sage glaze over red clay. Polka dots applied by a steady hand.", size: "16" },
    { label: "Small",     cls: "t-small",               sample: "Ships in 5–7 days, wrapped in newsprint and a lot of love.", size: "13.5" },
    { label: "Mono",      cls: "t-mono",                sample: "NIM-0042 · 6.2cm · 73g",           size: "12.5" },
  ];

  return (
    <section className="section" id="type">
      <div className="container">
        <div className="eyebrow-row"><span className="t-eyebrow">03 · Typography</span></div>
        <h2 className="t-h1" style={{ margin: "0 0 var(--s-6) 0", maxWidth: "22ch" }}>
          A chunky display serif, a friendly sans, and a handwritten aside.
        </h2>

        <div className="card" style={{ padding: "var(--s-6)", marginBottom: "var(--s-4)" }}>
          <div className="t-eyebrow" style={{ marginBottom: "var(--s-2)" }}>Display · Bricolage Grotesque</div>
          <div className="t-display t-display-2" style={{ margin: 0 }}>
            Tiny wizards.<br/>
            <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Big energy.</span>
          </div>
          <div className="t-small" style={{ marginTop: "var(--s-4)", color: "var(--ink-3)" }}>
            Used for hero titles, product names, section headers. Tight tracking, generous size, set italic for emphasis.
          </div>
        </div>

        <div className="grid grid-2">
          <div className="card" style={{ padding: "var(--s-5)" }}>
            <div className="t-eyebrow" style={{ marginBottom: "var(--s-2)" }}>Sans · Plus Jakarta Sans</div>
            <p className="t-body-lg" style={{ margin: "0 0 var(--s-3) 0" }}>
              <b>The body face.</b> Friendly, humanist, slightly rounded. Used for everything you read,
              tap, or fill out. 16–18px for body, 700 for emphasis, 13.5px for the small print.
            </p>
            <div className="t-small">ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789</div>
          </div>
          <div className="card" style={{ padding: "var(--s-5)", background: "var(--marigold-soft)", borderColor: "transparent" }}>
            <div className="t-eyebrow" style={{ marginBottom: "var(--s-2)" }}>Hand · Caveat</div>
            <div className="t-hand" style={{ fontSize: "40px", margin: "var(--s-2) 0" }}>
              "this one's a worrier"
            </div>
            <div className="t-small">Only for asides, scribbled notes on shipping labels, and the lizard's own opinions about themselves. Never for UI.</div>
          </div>
        </div>

        <div className="card" style={{ padding: "var(--s-5)", marginTop: "var(--s-4)" }}>
          <div className="t-eyebrow" style={{ marginBottom: "var(--s-4)" }}>The scale</div>
          {scale.map((r, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "110px 70px 1fr",
              gap: "var(--s-4)", alignItems: "baseline",
              padding: "var(--s-3) 0",
              borderTop: i === 0 ? "none" : "1px solid var(--border)",
            }}>
              <div className="t-eyebrow">{r.label}</div>
              <div className="t-mono" style={{ color: "var(--ink-3)" }}>{r.size}px</div>
              <div className={r.cls} style={{ margin: 0 }}>{r.sample}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
