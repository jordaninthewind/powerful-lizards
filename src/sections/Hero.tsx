import { Star4 } from '../components/Glyphs';

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: 700, lineHeight: 1, color: "var(--ink)" }}>{n}</div>
      <div className="t-small" style={{ marginTop: 4, maxWidth: "16ch" }}>{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="section" id="hero" style={{ paddingTop: "var(--s-6)", paddingBottom: "var(--s-7)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "var(--s-7)", alignItems: "end" }}>
          <div>
            <div className="eyebrow-row">
              <span className="t-eyebrow">A whimsy system · v1.0 · fired May 2026</span>
            </div>
            <h1 className="t-display t-display-1" style={{ margin: "0 0 var(--s-4) 0" }}>
              Powerful<br/>
              <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Lizards</span>
              <span className="sparkle" style={{ fontSize: "0.6em", marginLeft: "0.1em" }}>✦</span>
            </h1>
            <p className="t-body-lg" style={{ maxWidth: "56ch", margin: "0 0 var(--s-5) 0", color: "var(--ink-2)" }}>
              A ceramic studio of tiny, chunky, hand-thrown sorcerers. Each lizard is one of one —
              kiln-fired, glazed with intent, blessed with a slightly different opinion. This is the
              visual language that holds them.
            </p>
            <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap" }}>
              <a href="#shop" className="btn btn-primary btn-lg">Meet the coven →</a>
              <a href="#components" className="btn btn-ghost btn-lg">The system</a>
            </div>
            <div style={{ marginTop: "var(--s-6)", display: "flex", gap: "var(--s-5)", flexWrap: "wrap", alignItems: "center" }}>
              <Stat n="1/1" label="Every piece, one of one"/>
              <Stat n="6" label="Glazes in rotation"/>
              <Stat n="∞" label="Tiny opinions held"/>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{
              aspectRatio: "4/5",
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              transform: "rotate(2deg)",
              border: "1px solid var(--border)",
            }}>
              <img src="/assets/lizard-trio.jpeg" alt="Three ceramic lizard wizards on a rooftop"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
            </div>
            <div style={{
              position: "absolute", bottom: "-18px", left: "-24px",
              background: "var(--marigold)", color: "var(--ink)",
              padding: "10px 18px", borderRadius: "var(--r-pill)",
              boxShadow: "var(--shadow-md)",
              transform: "rotate(-5deg)",
              fontFamily: "var(--font-hand)", fontSize: "24px", lineHeight: 1,
            }}>
              hand-fired in BCN ✦
            </div>
            <div style={{
              position: "absolute", top: "-20px", right: "-10px",
              width: "72px", height: "72px",
              background: "var(--teal)", color: "var(--bone)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              transform: "rotate(8deg)",
              boxShadow: "var(--shadow-md)",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px",
              textAlign: "center", lineHeight: 1.1,
            }}>
              new<br/>drop
            </div>
            <div style={{
              position: "absolute", top: "40%", left: "-32px",
              color: "var(--primary)",
            }}>
              <Star4 size={20}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
