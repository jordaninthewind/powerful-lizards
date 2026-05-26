import { Button } from '../../../components/Button';

export function NewsletterSignup() {
  return (
    <div className="hp-anim hp-d5">
      <div className="t-eyebrow" style={{ color: 'var(--marigold)', marginBottom: 'var(--s-3)' }}>
        Be summoned
      </div>
      <p
        className="t-small"
        style={{ color: 'rgba(255,248,232,0.65)', marginBottom: 'var(--s-3)', maxWidth: '28ch' }}
      >
        One quiet email when the next coven is ready to leave the studio.
      </p>
      <div style={{ display: 'flex', gap: 'var(--s-2)' }}>
        <input
          className="input"
          type="email"
          placeholder="you@your-cave.com"
          style={{
            background: 'rgba(255,248,232,0.07)',
            color: 'var(--bone)',
            borderColor: 'rgba(255,248,232,0.15)',
            flex: 1,
          }}
        />
        <Button aria-label="Subscribe">→</Button>
      </div>
    </div>
  );
}
