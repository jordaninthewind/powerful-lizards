const HERO_STATS = [
  { n: '1/1', label: 'Every piece unique' },
  { n: '6+', label: 'Glazes in rotation' },
  { n: '∞', label: 'Tiny opinions held' },
] as const;

export function HeroStats() {
  return (
    <div className="hp-stats hp-anim hp-d5">
      {HERO_STATS.map(s => (
        <div className="hp-stat" key={s.n}>
          <span className="hp-stat-n">{s.n}</span>
          <span className="t-small">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
