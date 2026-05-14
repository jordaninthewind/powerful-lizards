import { useState } from 'react';
import { LIZARDS } from '../data';
import { LizardCard } from '../components/LizardCard';
import { NavMock } from '../components/NavMock';

export function Shop() {
  const filters = ["All 24", "New drop", "Available", "Reserved", "Adopted"];
  const [active, setActive] = useState(0);

  return (
    <section className="section" id="shop" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="eyebrow-row"><span className="t-eyebrow">06 · The shop, in use</span></div>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          flexWrap: "wrap", gap: "var(--s-4)", marginBottom: "var(--s-5)",
        }}>
          <h2 className="t-h1" style={{ margin: 0, maxWidth: "22ch" }}>
            <span style={{ fontStyle: "italic", color: "var(--primary)" }}>The May</span> coven
          </h2>
          <p className="t-body-lg" style={{ margin: 0, maxWidth: "38ch", color: "var(--ink-2)" }}>
            Six just out of the kiln. Each one is one of one — when they're gone, they're gone home.
          </p>
        </div>

        <div style={{ marginBottom: "var(--s-5)" }}><NavMock/></div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2)", marginBottom: "var(--s-5)" }}>
          {filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActive(i)}
              className="btn btn-sm"
              style={{
                background: active === i ? "var(--ink)" : "var(--bone)",
                color: active === i ? "var(--bone)" : "var(--ink)",
                border: active === i ? "0" : "1px solid var(--border)",
                fontWeight: 600,
                boxShadow: "none",
              }}
            >
              {f}
            </button>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", gap: "var(--s-2)", alignItems: "center" }}>
            <span className="t-small">Sort by</span>
            <button className="btn btn-soft btn-sm">Freshest first ↓</button>
          </div>
        </div>

        <div className="grid grid-3">
          {LIZARDS.map(l => <LizardCard key={l.num} lizard={l}/>)}
        </div>

        <div className="t-hand" style={{ textAlign: "center", marginTop: "var(--s-6)", color: "var(--ink-2)" }}>
          next firing — friday at sundown
        </div>
      </div>
    </section>
  );
}
