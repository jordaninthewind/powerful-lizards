interface LizardPortraitProps {
  hat: string;
  accent: string;
  robe: string;
  pattern: 'dots' | 'stars' | 'stripes' | 'splotch';
}

export function LizardPortrait({ hat, accent, robe, pattern }: LizardPortraitProps) {
  const patternEl = (() => {
    if (pattern === 'dots') {
      const dots = [];
      for (let i = 0; i < 14; i++) {
        const x = 50 + Math.sin(i * 2.3) * 50;
        const y = 130 + (i % 5) * 22;
        dots.push(<circle key={i} cx={x} cy={y} r={3.6} fill={accent}/>);
      }
      return dots;
    }
    if (pattern === 'stars') {
      const stars = [];
      for (let i = 0; i < 9; i++) {
        const x = 32 + (i % 3) * 30;
        const y = 120 + Math.floor(i / 3) * 30;
        stars.push(
          <path key={i} d={`M${x} ${y-5} L${x+1.5} ${y-1.5} L${x+5} ${y} L${x+1.5} ${y+1.5} L${x} ${y+5} L${x-1.5} ${y+1.5} L${x-5} ${y} L${x-1.5} ${y-1.5} Z`} fill={accent}/>
        );
      }
      return stars;
    }
    if (pattern === 'stripes') {
      return [
        <path key="s" d="M30 200 L40 192 L50 200 L60 192 L70 200 L80 192 L90 200 L100 192 L110 200 L120 192 L130 200 Z" fill={accent}/>
      ];
    }
    if (pattern === 'splotch') {
      return [
        <ellipse key="1" cx="60" cy="140" rx="14" ry="9" fill={accent} opacity="0.9"/>,
        <ellipse key="2" cx="100" cy="170" rx="12" ry="7" fill={accent} opacity="0.85"/>,
        <ellipse key="3" cx="78" cy="190" rx="10" ry="6" fill={accent} opacity="0.9"/>,
      ];
    }
    return null;
  })();

  return (
    <svg viewBox="0 0 160 220" width="78%" style={{ filter: "drop-shadow(0 8px 20px rgba(74,55,42,0.18))" }}>
      <ellipse cx="80" cy="212" rx="55" ry="6" fill="rgba(37,26,18,0.18)"/>
      <path
        d="M80 32 C 90 38, 96 50, 100 70 C 108 110, 124 170, 140 200 Q 80 218, 20 200 C 36 170, 52 110, 60 70 C 64 50, 70 38, 80 32 Z"
        fill={robe}
      />
      <path d="M20 200 Q 80 218, 140 200 L 140 208 Q 80 226, 20 208 Z" fill={accent} opacity="0.85"/>
      {patternEl}
      <ellipse cx="80" cy="60" rx="20" ry="14" fill={robe} stroke="rgba(37,26,18,0.18)" strokeWidth="1"/>
      <circle cx="72" cy="58" r="2.4" fill="#251A12"/>
      <circle cx="88" cy="58" r="2.4" fill="#251A12"/>
      <path d="M74 66 Q 80 70 86 66" stroke="#251A12" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M80 -6 L62 50 L98 50 Z" fill={hat}/>
      <path d="M62 50 L98 50 L100 56 L60 56 Z" fill={accent}/>
      <path d="M80 22 L82.5 30 L90 32 L82.5 34 L80 42 L77.5 34 L70 32 L77.5 30 Z" fill="#FFF8E8"/>
      <ellipse cx="55" cy="140" rx="7" ry="5" fill={hat}/>
      <ellipse cx="105" cy="142" rx="7" ry="5" fill={hat}/>
    </svg>
  );
}
