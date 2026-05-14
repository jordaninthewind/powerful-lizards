import type { ReactNode } from 'react';
import { Star4, Droplet, Moon } from '../components/Glyphs';

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="card" style={{ padding: "var(--s-5)" }}>
      <div className="t-eyebrow" style={{ marginBottom: "var(--s-4)" }}>{label}</div>
      {children}
    </div>
  );
}

export function ComponentsSection() {
  return (
    <section className="section" id="components">
      <div className="container">
        <div className="eyebrow-row"><span className="t-eyebrow">05 · Components</span></div>
        <h2 className="t-h1" style={{ margin: "0 0 var(--s-6) 0", maxWidth: "22ch" }}>
          Building blocks, glazed and ready.
        </h2>

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--s-5)" }}>
          <Block label="Buttons">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3)", alignItems: "center" }}>
              <button className="btn btn-primary">Add to cart</button>
              <button className="btn btn-ghost">View piece</button>
              <button className="btn btn-soft">Save for later</button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3)", alignItems: "center", marginTop: "var(--s-3)" }}>
              <button className="btn btn-primary btn-lg">Take this one home →</button>
              <button className="btn btn-primary btn-sm">Quick add</button>
              <button className="btn btn-soft btn-icon" aria-label="heart">
                <Droplet size={20}/>
              </button>
              <button className="btn btn-ghost btn-icon" aria-label="share">
                <Star4 size={20}/>
              </button>
            </div>
            <div className="t-small" style={{ marginTop: "var(--s-3)" }}>
              Primary uses <span className="t-mono">--primary</span>. Pill shape, generous padding,
              press scales to 0.97 with a 180ms warm ease.
            </div>
          </Block>

          <Block label="Status badges">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2)", alignItems: "center" }}>
              <span className="badge badge-available dot">Available</span>
              <span className="badge badge-new dot">New drop</span>
              <span className="badge badge-reserved dot">Reserved</span>
              <span className="badge badge-sold">Sold ✦ adopted</span>
              <span className="badge badge-ooak">1 of 1</span>
            </div>
            <div className="t-small" style={{ marginTop: "var(--s-3)" }}>
              Always pill-shaped, uppercase, 0.12em tracking. <b>Sold</b> uses ink so a fresh drop
              stays the colorful one. Adoption language over commerce language.
            </div>
          </Block>

          <Block label="Form fields">
            <label className="t-eyebrow" style={{ display: "block", marginBottom: "var(--s-2)" }}>Your email</label>
            <input className="input" placeholder="you@your-cave.com"/>
            <div style={{ display: "flex", gap: "var(--s-3)", marginTop: "var(--s-3)" }}>
              <input className="input" placeholder="Ship-to city"/>
              <button className="btn btn-primary">Notify me</button>
            </div>
            <label style={{ display: "flex", gap: 10, alignItems: "center", marginTop: "var(--s-3)", cursor: "pointer" }}>
              <span style={{
                width: 22, height: 22, borderRadius: 7, background: "var(--coral)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: "var(--bone)", fontWeight: 700, fontSize: 14,
              }}>✓</span>
              <span className="t-small" style={{ color: "var(--ink)" }}>Tell me when the next coven is fired</span>
            </label>
          </Block>

          <Block label="Toast & banner">
            <div style={{
              display: "flex", alignItems: "center", gap: "var(--s-3)",
              padding: "var(--s-3) var(--s-4)", borderRadius: "var(--r-md)",
              background: "var(--ink)", color: "var(--bone)", boxShadow: "var(--shadow-md)",
            }}>
              <span style={{
                width: 32, height: 32, borderRadius: "50%", background: "var(--coral)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Star4 size={18} style={{ color: "var(--bone)" }}/>
              </span>
              <div>
                <div style={{ fontWeight: 700 }}>Held for you, until midnight.</div>
                <div className="t-small" style={{ color: "rgba(255,248,232,0.7)" }}>Nim is in your cart. Checkout when ready.</div>
              </div>
            </div>
            <div style={{
              marginTop: "var(--s-3)",
              display: "flex", alignItems: "center", gap: "var(--s-3)",
              padding: "var(--s-3) var(--s-4)", borderRadius: "var(--r-md)",
              background: "var(--marigold-soft)", color: "#7A5A12",
              border: "1px solid rgba(122,90,18,0.18)",
            }}>
              <Moon size={20}/>
              <div className="t-body" style={{ fontWeight: 600 }}>Studio resting · next drop on Friday at sundown.</div>
            </div>
          </Block>
        </div>
      </div>
    </section>
  );
}
