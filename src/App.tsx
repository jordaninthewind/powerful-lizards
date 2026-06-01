import { useState, useEffect } from 'react';
import './App.css';

import { PALETTES, PAIRINGS, SWAP_FONTS_HREF } from './data';
import { TweaksPanel, TweakSection, TweakRadio, TweakToggle } from './components/TweaksPanel';
import { Hero } from './sections/Hero';
import { Voice } from './sections/Voice';
import { Colors } from './sections/Colors';
import { TypographySection } from './sections/TypographySection';
import { MotifSection } from './sections/MotifSection';
import { ComponentsSection } from './sections/ComponentsSection';
import { Shop } from './sections/Shop';
import { ProductDetail } from './sections/ProductDetail';
import { Cart } from './sections/Cart';
import { Footer } from './sections/Footer';

const TOC_SECTIONS = [
  ["hero",       "Cover"],
  ["voice",      "Voice"],
  ["colors",     "Color"],
  ["type",       "Type"],
  ["motifs",     "Motifs"],
  ["components", "Components"],
  ["shop",       "Shop"],
  ["product",    "Product"],
  ["cart",       "Cart"],
] as const;

export default function App() {
  const [palette, setPalette] = useState("coral");
  const [typePairing, setTypePairing] = useState("bricolage");
  const [texture, setTexture] = useState(true);
  const [active, setActive] = useState("hero");

  const pal = PALETTES[palette] ?? PALETTES.coral;
  const pair = PAIRINGS[typePairing] ?? PAIRINGS.bricolage;

  // Preload swap fonts once
  useEffect(() => {
    if (document.getElementById("pl-swap-fonts")) return;
    const link = document.createElement("link");
    link.id = "pl-swap-fonts"; link.rel = "stylesheet"; link.href = SWAP_FONTS_HREF;
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary", pal.primary);
    root.style.setProperty("--primary-deep", pal.deep);
    root.style.setProperty("--primary-soft", pal.soft);
    root.style.setProperty("--font-display", pair.display);
    root.style.setProperty("--font-sans", pair.sans);
    document.body.dataset.texture = texture ? "on" : "off";
  }, [pal, pair, texture]);

  // Intersection observer for TOC active section
  useEffect(() => {
    const ids = TOC_SECTIONS.map(([id]) => id);
    const io = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Left-side dot TOC */}
      <nav className="pl-toc" aria-label="Sections">
        {TOC_SECTIONS.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            data-active={active === id ? "" : undefined}
            aria-label={label}
          >
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <main id="hero">
        <Hero/>
      </main>
      <Voice/>
      <Colors/>
      <TypographySection/>
      <MotifSection/>
      <ComponentsSection/>
      <Shop/>
      <ProductDetail/>
      <Cart/>
      <Footer/>

      <TweaksPanel title="Tweaks ✦">
        <TweakSection label="Palette"/>
        <TweakRadio
          label="Primary color"
          value={palette}
          options={Object.keys(PALETTES)}
          onChange={setPalette}
        />
        <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
          {Object.entries(PALETTES).map(([k, p]) => (
            <button
              key={k}
              onClick={() => setPalette(k)}
              title={p.name}
              style={{
                flex: 1, height: 34, borderRadius: 7,
                background: p.primary,
                border: palette === k ? "2px solid #29261b" : "0.5px solid rgba(0,0,0,0.12)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <TweakSection label="Typography"/>
        <TweakRadio
          label="Pairing"
          value={typePairing}
          options={Object.keys(PAIRINGS)}
          onChange={setTypePairing}
        />
        <div style={{
          padding: "8px 10px", background: "rgba(0,0,0,0.04)", borderRadius: 7,
          fontFamily: pair.display, fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em",
        }}>
          Powerful Lizards
        </div>

        <TweakSection label="Surface"/>
        <TweakToggle label="Paper texture" value={texture} onChange={setTexture}/>
      </TweaksPanel>
    </>
  );
}
