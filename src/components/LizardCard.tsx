import type { Lizard } from '../types';
import { Droplet } from './Glyphs';
import { LizardPortrait } from './LizardPortrait';

interface LizardCardProps {
  lizard: Lizard;
}

export function LizardCard({ lizard }: LizardCardProps) {
  const { name, num, price, status, swatch, hat, accent, robe, traits, motif, hand } = lizard;
  return (
    <article
      className="card"
      style={{ padding: 0, transition: "transform 220ms var(--ease), box-shadow 220ms var(--ease)" }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      <div style={{
        position: "relative",
        aspectRatio: "1/1",
        background: `linear-gradient(180deg, ${swatch.bgTop} 0%, ${swatch.bgBottom} 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <div
          className={`motif-${motif}`}
          style={{ position: "absolute", inset: 0, color: swatch.motif, opacity: 0.55 }}
        />
        <LizardPortrait hat={hat} accent={accent} robe={robe} pattern={lizard.robePattern}/>
        <div style={{ position: "absolute", top: 14, left: 14 }}>
          <span className={`badge badge-${status}`}>
            {status === "available" && "Available"}
            {status === "sold" && "✦ adopted"}
            {status === "reserved" && "On hold"}
            {status === "new" && "New drop"}
          </span>
        </div>
        <button
          aria-label="save"
          style={{
            position: "absolute", top: 14, right: 14,
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(255, 248, 232, 0.85)",
            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            border: 0, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--ink)",
          }}
        >
          <Droplet size={18}/>
        </button>
        {hand && (
          <div style={{
            position: "absolute", bottom: 14, left: 14,
            fontFamily: "var(--font-hand)", fontSize: 24, lineHeight: 1,
            color: swatch.motif, transform: "rotate(-3deg)",
          }}>
            {hand}
          </div>
        )}
      </div>
      <div style={{ padding: "var(--s-4) var(--s-5) var(--s-5)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--s-3)" }}>
          <h3 className="t-h3" style={{ margin: 0 }}>{name}</h3>
          <span className="t-mono" style={{ color: "var(--ink-3)" }}>№{num}</span>
        </div>
        <div className="t-small" style={{ marginTop: 6, marginBottom: "var(--s-3)" }}>{traits}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="t-h4" style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 24 }}>€{price}</div>
          <button
            className={`btn ${status === "sold" ? "btn-soft" : "btn-primary"} btn-sm`}
            disabled={status === "sold"}
          >
            {status === "sold" ? "Gone home" : status === "reserved" ? "Waitlist" : "Take home →"}
          </button>
        </div>
      </div>
    </article>
  );
}
