import { Button } from '../../../components/Button';
import { EyebrowRow } from '../../../components/EyebrowRow';
import { HOME_SECTIONS } from '../constants';

interface HeroSectionProps {
  onScrollTo: (idx: number) => void;
  activeIdx: number;
}

export function HeroSection({ onScrollTo, activeIdx }: HeroSectionProps) {
  return (
    <section className="hp-section hp-section--hero" aria-label="Hero">
      <div className="hp-hero-bg" aria-hidden="true">
        <img
          src="/assets/lizard-trio.jpeg"
          alt=""
          className="hp-hero-bg-img"
        />
        <div className="hp-hero-overlay" />
      </div>

      <div className="hp-hero-content">
        <div className="hp-anim hp-d1">
          <EyebrowRow style={{ color: 'rgba(255,248,232,0.7)', letterSpacing: '0.08em' }}>
            Ceramic studio · SF/CA · Since 2022
          </EyebrowRow>
        </div>

        <h1
          className="t-display t-display-1 hp-anim hp-d2"
          style={{ margin: '0 0 var(--s-3) 0', color: 'var(--bone)' }}
        >
          Powerful
          <br />
          <span style={{ color: 'var(--marigold)', fontStyle: 'italic' }}>Lizards</span>
          <span className="sparkle" style={{ fontSize: '0.55em', marginLeft: '0.06em' }}>
            ✦
          </span>
        </h1>

        <p
          className="t-body-lg hp-anim hp-d3"
          style={{ maxWidth: '48ch', margin: '0 0 var(--s-5) 0', color: 'rgba(255,248,232,0.82)' }}
        >
          Tiny, chunky, hand-thrown sorcerers — each one glazed with intent and blessed with a
          slightly different opinion. One of one. Always.
        </p>

        <div className="hp-anim hp-d4" style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap' }}>
          <Button size="lg" onClick={() => onScrollTo(2)}>
            Choose your sage →
          </Button>
          <Button variant="soft" size="lg" onClick={() => onScrollTo(1)}>
            Our story
          </Button>
        </div>
      </div>

      <nav className="hp-hero-dots" aria-label="Navigate sections">
        {HOME_SECTIONS.map((label, i) => (
          <button
            key={label}
            className={`hp-hero-dot${activeIdx === i ? ' active' : ''}`}
            onClick={() => onScrollTo(i)}
            aria-label={`Go to ${label}`}
            title={label}
          />
        ))}
      </nav>
    </section>
  );
}
