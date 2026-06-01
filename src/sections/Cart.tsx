import { LIZARDS } from '../data';
import { LizardPortrait } from '../components/LizardPortrait';

export function Cart() {
  const items = [LIZARDS[0], LIZARDS[1]];
  const subtotal = items.reduce((a, b) => a + b.price, 0);

  return (
    <section className="section" id="cart">
      <div className="container">
        <div className="eyebrow-row"><span className="t-eyebrow">08 · Cart & checkout</span></div>
        <h2 className="t-h1" style={{ margin: "0 0 var(--s-6) 0", maxWidth: "22ch" }}>
          A small basket. A short walk. Out the door.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "var(--s-5)", alignItems: "start" }}>
          <div className="card" style={{
            padding: "var(--s-5)", minHeight: "480px",
            background: "linear-gradient(180deg, var(--paper) 0%, var(--cream) 100%)",
            position: "relative", overflow: "hidden",
          }}>
            <div className="motif-dots" style={{ position: "absolute", inset: 0, color: "var(--coral)", opacity: 0.10 }} />
            <div style={{ position: "relative" }}>
              <div className="t-eyebrow" style={{ marginBottom: "var(--s-2)" }}>You were looking at...</div>
              <h3 className="t-h2" style={{ margin: "0 0 var(--s-4) 0", maxWidth: "14ch" }}>
                <span style={{ fontStyle: "italic", color: "var(--primary)" }}>Olwen</span>, of the rose robe
              </h3>
              <p className="t-body" style={{ maxWidth: "42ch", color: "var(--ink-2)" }}>
                The cart slides in from the right — backdrop-blur over whatever you were doing,
                stays warm-cream so the page doesn't feel cold.
              </p>
            </div>
          </div>

          <aside style={{
            background: "var(--bone)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-md)",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
          }}>
            <div style={{
              padding: "var(--s-4) var(--s-5)", borderBottom: "1px solid var(--border)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <h4 className="t-h4" style={{ margin: 0 }}>Your basket · {items.length}</h4>
              <button className="btn btn-soft btn-icon" aria-label="close" style={{ width: 32, height: 32, fontSize: 14 }}>✕</button>
            </div>

            <div style={{ padding: "var(--s-3) var(--s-4)" }}>
              {items.map(l => (
                <div key={l.num} style={{
                  display: "flex", gap: "var(--s-3)", padding: "var(--s-3) 0",
                  borderBottom: "1px solid var(--border)",
                }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "var(--r-sm)", overflow: "hidden",
                    background: `linear-gradient(180deg, ${l.swatch.bgTop} 0%, ${l.swatch.bgBottom} 100%)`,
                    display: "flex", alignItems: "flex-end", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <LizardPortrait hat={l.hat} accent={l.accent} robe={l.robe} pattern={l.robePattern} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontWeight: 700 }}>{l.name}</span>
                      <span style={{ fontWeight: 700 }}>€{l.price}</span>
                    </div>
                    <div className="t-mono" style={{ color: "var(--ink-3)", fontSize: 11 }}>№{l.num} · 1 of 1</div>
                    <div className="t-hand" style={{ fontSize: 18, color: "var(--ink-2)", marginTop: 2 }}>held until midnight</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: "var(--s-4) var(--s-5)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--s-2)" }}>
                <span className="t-small">Subtotal</span>
                <span style={{ fontWeight: 700 }}>€{subtotal}.00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--s-2)" }}>
                <span className="t-small">Shipping</span>
                <span className="t-small">tucked into newsprint · €6</span>
              </div>
              <div style={{
                display: "flex", justifyContent: "space-between",
                padding: "var(--s-3) 0", borderTop: "1px solid var(--border)", marginTop: "var(--s-2)",
              }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700 }}>Total</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700 }}>€{subtotal + 6}</span>
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center", marginTop: "var(--s-3)" }}>
                Checkout · Shopify ✦
              </button>
              <div className="t-small" style={{ textAlign: "center", marginTop: "var(--s-3)", color: "var(--ink-3)" }}>
                or <a href="#" style={{ color: "var(--ink)" }}>pay with Stripe Link</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
