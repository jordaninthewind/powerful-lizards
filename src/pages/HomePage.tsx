import { useEffect, useRef, useState } from 'react';
import '../App.css';
import './HomePage.css';

import { LIZARDS } from '../data';
import { LizardCard } from '../components/LizardCard';
import { LizardPortrait } from '../components/LizardPortrait';
import { WizardMark } from '../components/WizardMark';
import { Star4 } from '../components/Glyphs';

const SECTIONS = ['Hero', 'About', 'Shop', 'Contact'] as const;

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Apply default design tokens on mount
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', '#E84A3F');
    root.style.setProperty('--primary-deep', '#B83227');
    root.style.setProperty('--primary-soft', '#F8C7B6');
    root.style.setProperty('--font-display', '"Bricolage Grotesque", serif');
    root.style.setProperty('--font-sans', '"Plus Jakarta Sans", sans-serif');
    document.body.dataset.texture = 'on';
  }, []);

  // IntersectionObserver — toggle data-visible on each section, track active dot
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
      { root: container, threshold: 0.55 }
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

  const availableCount = LIZARDS.filter(l => l.status === 'available' || l.status === 'new').length;

  return (
    <div className="hp-root" ref={rootRef}>

      {/* Desktop nav dots — right side */}
      <nav className="hp-nav" aria-label="Page sections">
        {SECTIONS.map((label, i) => (
          <button
            key={label}
            className={`hp-nav-dot${activeIdx === i ? ' active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={label}
            title={label}
          />
        ))}
      </nav>

      {/* Mobile nav dots — bottom */}
      <nav className="hp-mobile-nav" aria-label="Page sections">
        {SECTIONS.map((label, i) => (
          <button
            key={label}
            className={`hp-nav-dot${activeIdx === i ? ' active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={label}
            title={label}
          />
        ))}
      </nav>

      {/* ─────────────────── SECTION 1: HERO ─────────────────── */}
      <section className="hp-section hp-section--hero" aria-label="Hero">
        <div className="hp-bg hp-bg--cream">
          <div className="hp-bg-fx hp-bg-fx--dots" />
        </div>

        <div className="hp-section-inner hp-hero-layout">
          {/* Left: headline + CTAs */}
          <div className="hp-hero-text">
            <div className="hp-anim hp-d1">
              <div className="eyebrow-row">
                <span className="t-eyebrow">Ceramic studio · BCN · Since 2022</span>
              </div>
            </div>

            <h1 className="t-display t-display-1 hp-anim hp-d2" style={{ margin: '0 0 var(--s-4) 0' }}>
              Powerful<br />
              <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Lizards</span>
              <span className="sparkle" style={{ fontSize: '0.55em', marginLeft: '0.06em' }}>✦</span>
            </h1>

            <p className="t-body-lg hp-anim hp-d3"
              style={{ maxWidth: '52ch', margin: '0 0 var(--s-5) 0', color: 'var(--ink-2)' }}>
              Tiny, chunky, hand-thrown sorcerers — each one glazed with intent and
              blessed with a slightly different opinion. One of one. Always.
            </p>

            <div className="hp-anim hp-d4" style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => scrollTo(2)}>
                Meet the coven →
              </button>
              <button className="btn btn-ghost btn-lg" onClick={() => scrollTo(1)}>
                Our story
              </button>
            </div>

            <div className="hp-stats hp-anim hp-d5">
              {([
                { n: '1/1',  label: 'Every piece unique' },
                { n: '6+',   label: 'Glazes in rotation' },
                { n: '∞',    label: 'Tiny opinions held' },
              ] as const).map(s => (
                <div className="hp-stat" key={s.n}>
                  <span className="hp-stat-n">{s.n}</span>
                  <span className="t-small">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: featured lizard portrait */}
          <div className="hp-showcase hp-anim hp-anim--scale hp-d3">
            <div className="hp-lizard-frame">
              <div className="hp-lizard-frame-inner"
                style={{ background: 'linear-gradient(180deg, #BCE3E8 0%, #4FB5C7 100%)' }}>
                <div className="motif-dots"
                  style={{ position: 'absolute', inset: 0, color: 'rgba(240,166,187,0.4)', opacity: 0.55 }} />
                <LizardPortrait hat="#F0A6BB" accent="#E84A3F" robe="#4FB5C7" pattern="dots" />
              </div>
              <div className="hp-badge-bcn">hand-fired in BCN ✦</div>
              <div className="hp-badge-new">new<br />drop</div>
              <div style={{ position: 'absolute', top: '38%', left: '-34px', color: 'var(--primary)' }}>
                <Star4 size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hp-scroll-hint" aria-hidden="true">
          <span className="t-small" style={{ color: 'var(--ink-3)', fontSize: 11 }}>scroll</span>
          <div className="hp-scroll-line" />
        </div>
      </section>

      {/* ─────────────────── SECTION 2: ABOUT ─────────────────── */}
      <section className="hp-section hp-section--about" aria-label="About the artist">
        <div className="hp-bg hp-bg--ink">
          <div className="hp-bg-fx hp-bg-fx--stars" />
        </div>

        <div className="hp-section-inner hp-about-layout">
          {/* Left: image with floating quote */}
          <div className="hp-about-img-col hp-anim hp-anim--from-left hp-d2">
            <div className="hp-studio-frame">
              <img src="/assets/lizard-flower.jpeg" alt="Ceramic lizard wizard" />
              <div className="hp-studio-overlay" />
            </div>
            <div className="hp-quote-card">
              <div className="t-hand" style={{ color: 'var(--bone)', fontSize: 20, lineHeight: 1.3 }}>
                "every lizard has a different opinion about Tuesday"
              </div>
            </div>
          </div>

          {/* Right: bio text */}
          <div className="hp-about-text">
            <div className="hp-anim hp-d1">
              <div className="eyebrow-row">
                <span className="t-eyebrow" style={{ color: 'var(--marigold)' }}>The Artist</span>
              </div>
            </div>

            <h2 className="t-h1 hp-anim hp-d2"
              style={{ color: 'var(--bone)', margin: '0 0 var(--s-5) 0' }}>
              Made by one<br />pair of hands.
            </h2>

            <p className="t-body-lg hp-anim hp-d3"
              style={{ color: 'rgba(255,248,232,0.75)', marginBottom: 'var(--s-4)', maxWidth: '48ch' }}>
              I'm a ceramicist based in Barcelona, throwing small ceramic sorcerers out of my
              studio in the Poble Sec neighbourhood. I make one coven a month — usually six lizards,
              always different, never repeated.
            </p>

            <p className="t-body hp-anim hp-d4"
              style={{ color: 'rgba(255,248,232,0.6)', marginBottom: 0, maxWidth: '48ch' }}>
              The glazes come from a small palette of oxides and stains I've built up over three years
              of experiments. Each lizard is kiln-fired twice — bisque, then glaze — and no two
              come out quite the same from the kiln.
            </p>

            <div className="hp-about-stats hp-anim hp-d5">
              {([
                { n: 'Est.', sub: '2022' },
                { n: 'BCN',  sub: 'Spain' },
                { n: '1×',   sub: 'coven / month' },
              ] as const).map(s => (
                <div className="hp-about-stat" key={s.n}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: 26, color: 'var(--marigold)', lineHeight: 1,
                  }}>{s.n}</span>
                  <span className="t-small" style={{ color: 'rgba(255,248,232,0.55)' }}>{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── SECTION 3: INVENTORY ─────────────────── */}
      <section className="hp-section hp-section--inventory" aria-label="Recent inventory">
        <div className="hp-bg hp-bg--paper">
          <div className="hp-bg-fx hp-bg-fx--dots-soft" />
        </div>

        <div className="hp-section-inner hp-inventory-layout">
          <div className="hp-inventory-header hp-anim hp-d1">
            <div className="eyebrow-row">
              <span className="t-eyebrow">Recent Inventory</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--s-4)', flexWrap: 'wrap' }}>
              <h2 className="t-h1" style={{ margin: 0 }}>
                Meet the<br />May coven.
              </h2>
              <span className="badge badge-available dot" style={{ alignSelf: 'center' }}>
                {availableCount} available
              </span>
            </div>
          </div>

          <div className="hp-inventory-grid hp-anim hp-d3">
            {LIZARDS.map(lizard => (
              <LizardCard key={lizard.num} lizard={lizard} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── SECTION 4: CONTACT ─────────────────── */}
      <section className="hp-section hp-section--contact" aria-label="Contact and info">
        <div className="hp-bg hp-bg--deep">
          <div className="hp-bg-fx hp-bg-fx--zigzag" />
        </div>

        <div className="hp-section-inner hp-contact-layout">
          {/* Brand mark */}
          <div className="hp-contact-brand hp-anim hp-d1">
            <WizardMark size={44} primary="var(--marigold)" accent="var(--coral)" />
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 28, color: 'var(--bone)', letterSpacing: '-0.02em',
            }}>
              Powerful Lizards
            </div>
          </div>

          {/* Contact grid */}
          <div className="hp-contact-grid">
            {/* Studio address */}
            <div className="hp-anim hp-d2">
              <div className="t-eyebrow" style={{ color: 'var(--marigold)', marginBottom: 'var(--s-3)' }}>
                Find us
              </div>
              <address style={{ fontStyle: 'normal' }}>
                <p className="t-body" style={{ color: 'var(--bone)', margin: '0 0 var(--s-2) 0' }}>
                  Carrer del Parlament, 24<br />
                  Poble Sec, Barcelona 08015<br />
                  Spain
                </p>
              </address>
              <a href="mailto:hello@powerfulizards.com"
                style={{ color: 'var(--marigold)', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 14 }}>
                hello@powerfulizards.com
              </a>
            </div>

            {/* Nav links */}
            <div className="hp-anim hp-d3">
              <div className="t-eyebrow" style={{ color: 'var(--marigold)', marginBottom: 'var(--s-3)' }}>
                Explore
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                {['The May coven', 'Past drops', 'Reserved & holds', 'Visit the kiln', 'Wholesale'].map(l => (
                  <li key={l}>
                    <a href="#" style={{
                      color: 'var(--bone)', textDecoration: 'none',
                      opacity: 0.8, fontSize: 15,
                      transition: 'opacity 180ms var(--ease)',
                    }}
                      onMouseEnter={e => ((e.target as HTMLElement).style.opacity = '1')}
                      onMouseLeave={e => ((e.target as HTMLElement).style.opacity = '0.8')}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="hp-anim hp-d4">
              <div className="t-eyebrow" style={{ color: 'var(--marigold)', marginBottom: 'var(--s-3)' }}>
                Follow
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                {['@powerfulizards', 'Instagram', 'Field notes', 'Studio newsletter'].map(l => (
                  <li key={l}>
                    <a href="#" style={{
                      color: 'var(--bone)', textDecoration: 'none',
                      opacity: 0.8, fontSize: 15,
                    }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="hp-anim hp-d5">
              <div className="t-eyebrow" style={{ color: 'var(--marigold)', marginBottom: 'var(--s-3)' }}>
                Be summoned
              </div>
              <p className="t-small" style={{ color: 'rgba(255,248,232,0.65)', marginBottom: 'var(--s-3)', maxWidth: '28ch' }}>
                One quiet email when the next coven is ready to leave the studio.
              </p>
              <div style={{ display: 'flex', gap: 'var(--s-2)' }}>
                <input
                  className="input"
                  type="email"
                  placeholder="you@your-cave.com"
                  style={{
                    background: 'rgba(255,248,232,0.07)',
                    color: 'var(--bone)',
                    borderColor: 'rgba(255,248,232,0.15)',
                    flex: 1,
                  }}
                />
                <button className="btn btn-primary" aria-label="Subscribe">→</button>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="hp-contact-footer">
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              color: 'rgba(255,248,232,0.45)', fontSize: 13,
              flexWrap: 'wrap', gap: 'var(--s-3)',
            }}>
              <div>© 2026 Powerful Lizards · BCN · made with clay and patience</div>
              <div style={{ display: 'flex', gap: 'var(--s-4)' }}>
                <a href="/design-system"
                  style={{ color: 'rgba(255,248,232,0.35)', textDecoration: 'none', fontSize: 13 }}>
                  Design System
                </a>
                <span>privacy · returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
