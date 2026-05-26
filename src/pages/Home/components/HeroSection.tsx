import { Button } from '../../../components/Button';
import { EyebrowRow } from '../../../components/EyebrowRow';
import { HeroShowcase } from './HeroShowcase';
import { HeroStats } from './HeroStats';
import { ScrollHint } from './ScrollHint';
import { SectionBackground } from './SectionBackground';

interface HeroSectionProps {
  onScrollTo: (idx: number) => void;
}

export function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section className="hp-section hp-section--hero" aria-label="Hero">
      <SectionBackground tone="cream" fx="dots" />

      <div className="hp-section-inner hp-hero-layout">
        <div className="hp-hero-text">
          <div className="hp-anim hp-d1">
            <EyebrowRow>Ceramic studio · SF/CA · Since 2022</EyebrowRow>
          </div>

          <h1 className="t-display t-display-1 hp-anim hp-d2" style={{ margin: '0 0 var(--s-4) 0' }}>
            Powerful
            <br />
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Lizards</span>
            <span className="sparkle" style={{ fontSize: '0.55em', marginLeft: '0.06em' }}>
              ✦
            </span>
          </h1>

          <p
            className="t-body-lg hp-anim hp-d3"
            style={{ maxWidth: '52ch', margin: '0 0 var(--s-5) 0', color: 'var(--ink-2)' }}
          >
            Tiny, chunky, hand-thrown sorcerers — each one glazed with intent and blessed with a
            slightly different opinion. One of one. Always.
          </p>

          <div
            className="hp-anim hp-d4"
            style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap' }}
          >
            <Button size="lg" onClick={() => onScrollTo(2)}>
              Meet the coven →
            </Button>
            <Button variant="ghost" size="lg" onClick={() => onScrollTo(1)}>
              Our story
            </Button>
          </div>

          <HeroStats />
        </div>

        <HeroShowcase />
      </div>

      <ScrollHint />
    </section>
  );
}
