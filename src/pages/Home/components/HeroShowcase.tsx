import { Star4 } from '../../../components/Glyphs';
import { LizardImage } from '../../../components/LizardImage';

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
          <div style={{ position: 'relative', zIndex: 1, width: '88%', height: '88%' }}>
            <LizardImage species="lizard" />
          </div>
        </div>
        <div className="hp-badge-sfca">hand-fired in SF/CA ✦</div>
        <div className="hp-badge-new">
          new
          <br />
          drop
        </div>
        <div className="hp-deco-star" style={{ position: 'absolute', top: '38%', left: '-34px', color: 'var(--primary)' }}>
          <Star4 size={20} />
        </div>
      </div>
    </div>
  );
}
