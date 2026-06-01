import { useEffect, useRef, useState } from 'react';

import '../../App.css';
import './HomePage.css';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { InventorySection } from './components/InventorySection';

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll<HTMLElement>('.hp-section'));

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target as HTMLElement;
          const idx = sections.indexOf(el);
          if (entry.isIntersecting) {
            el.dataset.visible = 'true';
            if (idx >= 0) setActiveIdx(idx);
          } else {
            delete el.dataset.visible;
          }
        });
      },
      { root: null, threshold: 0.35 }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scrollTo = (idx: number) => {
    const container = rootRef.current;
    if (!container) return;
    const sections = container.querySelectorAll<HTMLElement>('.hp-section');
    sections[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hp-root" ref={rootRef}>
      <HeroSection onScrollTo={scrollTo} activeIdx={activeIdx} />
      <AboutSection />
      <InventorySection />
      <ContactSection />
    </div>
  );
}
