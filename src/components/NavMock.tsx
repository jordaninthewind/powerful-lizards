import { WizardMark } from './WizardMark';

export function NavMock() {
  return (
    <div className="card" style={{ padding: "var(--s-3) var(--s-5)", display: "flex", alignItems: "center", gap: "var(--s-5)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
        <WizardMark size={36}/>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>
          Powerful Lizards<span className="sparkle"> ✦</span>
        </div>
      </div>
      <nav style={{ display: "flex", gap: "var(--s-4)", marginLeft: "auto" }}>
        {["Shop", "The coven", "Field notes", "About"].map(s => (
          <a key={s} href="#" style={{ color: "var(--ink)", textDecoration: "none", fontWeight: 600 }}>{s}</a>
        ))}
      </nav>
      <button className="btn btn-soft btn-sm">Cart · 2</button>
    </div>
  );
}
