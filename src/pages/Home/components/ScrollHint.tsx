export function ScrollHint() {
  return (
    <div className="hp-scroll-hint" aria-hidden="true">
      <span className="t-small" style={{ color: 'var(--ink-3)', fontSize: 11 }}>
        scroll
      </span>
      <div className="hp-scroll-line" />
    </div>
  );
}
