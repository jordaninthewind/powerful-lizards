export function ContactFooter() {
  return (
    <div className="hp-contact-footer">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: 'rgba(255,248,232,0.45)',
          fontSize: 13,
          flexWrap: 'wrap',
          gap: 'var(--s-3)',
        }}
      >
        <div>© 2026 Powerful Lizards · SF/CA · made with clay and patience</div>
        <div style={{ display: 'flex', gap: 'var(--s-4)' }}>
          <a
            href="/design-system"
            style={{ color: 'rgba(255,248,232,0.35)', textDecoration: 'none', fontSize: 13 }}
          >
            Design System
          </a>
          <span>privacy · returns</span>
        </div>
      </div>
    </div>
  );
}
