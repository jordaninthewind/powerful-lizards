import { Star4 } from '../../../components/Glyphs';
import { LizardPortrait } from '../../../components/LizardPortrait';

export function HeroShowcase() {
  return (
    <div className="hp-showcase hp-anim hp-anim--scale hp-d3">
      <div className="hp-lizard-frame">
        <div
          className="hp-lizard-frame-inner"
          style={{ background: 'linear-gradient(180deg, #BCE3E8 0%, #4FB5C7 100%)' }}
        >
          <div
            className="motif-dots"
            style={{
              position: 'absolute',
              inset: 0,
              color: 'rgba(240,166,187,0.4)',
              opacity: 0.55,
            }}
          />
          <LizardPortrait hat="#F0A6BB" accent="#E84A3F" robe="#4FB5C7" pattern="dots" />
        </div>
        <div className="hp-badge-sfca">hand-fired in SF/CA ✦</div>
        <div className="hp-badge-new">
          new
          <br />
          drop
        </div>
        <div style={{ position: 'absolute', top: '38%', left: '-34px', color: 'var(--primary)' }}>
          <Star4 size={20} />
        </div>
      </div>
    </div>
  );
}
