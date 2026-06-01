import { AboutArtistContent } from '../../../components/AboutArtistContent';
import { SectionBackground } from './SectionBackground';

export function AboutSection() {
  return (
    <section className="hp-section hp-section--about" aria-label="About the artist">
      <SectionBackground tone="ink" fx="stars" />

      <div className="hp-section-inner hp-about-layout">
        <AboutArtistContent animated />
      </div>
    </section>
  );
}
