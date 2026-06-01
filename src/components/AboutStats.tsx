const ABOUT_STATS = [
  { n: 'Est.', sub: '2022' },
  { n: 'SF/CA', sub: 'USA' },
  { n: '1×', sub: 'coven / month' },
] as const;

interface AboutStatsProps {
  animated?: boolean;
}

export function AboutStats({ animated = false }: AboutStatsProps) {
  return (
    <div className={`hp-about-stats${animated ? ' hp-anim hp-d5' : ''}`}>
      {ABOUT_STATS.map(s => (
        <div className="hp-about-stat" key={s.n}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 26,
              color: 'var(--marigold)',
              lineHeight: 1,
            }}
          >
            {s.n}
          </span>
          <span className="t-small" style={{ color: 'rgba(255,248,232,0.55)' }}>
            {s.sub}
          </span>
        </div>
      ))}
    </div>
  );
}
