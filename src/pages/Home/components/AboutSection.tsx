import { EyebrowRow } from '../../../components/EyebrowRow';
import { AboutQuoteCard } from './AboutQuoteCard';
import { AboutStats } from './AboutStats';
import { SectionBackground } from './SectionBackground';

export function AboutSection() {
  return (
    <section className="hp-section hp-section--about" aria-label="About the artist">
      <SectionBackground tone="ink" fx="stars" />

      <div className="hp-section-inner hp-about-layout">
        <div className="hp-about-img-col hp-anim hp-anim--from-left hp-d2">
          <div className="hp-studio-frame">
            <img src="/assets/lizard-flower.jpeg" alt="Ceramic lizard wizard" />
            <div className="hp-studio-overlay" />
          </div>
          <AboutQuoteCard />
        </div>

        <div className="hp-about-text">
          <div className="hp-anim hp-d1">
            <EyebrowRow style={{ color: 'var(--marigold)' }}>The Artist</EyebrowRow>
          </div>

          <h2 className="t-h1 hp-anim hp-d2" style={{ color: 'var(--bone)', margin: '0 0 var(--s-5) 0' }}>
            Made by one
            <br />
            pair of hands.
          </h2>

          <p
            className="t-body-lg hp-anim hp-d3"
            style={{ color: 'rgba(255,248,232,0.75)', marginBottom: 'var(--s-4)', maxWidth: '48ch' }}
          >
            I'm a ceramicist based in San Francisco, throwing small ceramic sorcerers out of my studio
            in the Outer Richmond neighborhood. I make one coven a month — usually six lizards, always
            different, never repeated.
          </p>

          <p
            className="t-body hp-anim hp-d4"
            style={{ color: 'rgba(255,248,232,0.6)', marginBottom: 0, maxWidth: '48ch' }}
          >
            The glazes come from a small palette of oxides and stains I've built up over three years of
            experiments. Each lizard is kiln-fired twice — bisque, then glaze — and no two come out quite
            the same from the kiln.
          </p>

          <AboutStats />
        </div>
      </div>
    </section>
  );
}
