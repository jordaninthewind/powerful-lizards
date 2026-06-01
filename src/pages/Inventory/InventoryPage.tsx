import { Link } from 'react-router';
import { LIZARDS } from '../../data';
import { LizardPortrait } from '../../components/LizardPortrait';
import '../../App.css';
import './InventoryPage.css';

const AVAILABLE_COLORS = [
  { name: 'Maroon',            hex: '#722040' },
  { name: 'Dark Navy',         hex: '#1B2A4A' },
  { name: 'Medium Blue',       hex: '#3B6BB5' },
  { name: 'White',             hex: '#FFFFFF' },
  { name: 'Black',             hex: '#1A1A1A' },
  { name: 'Turquoise',         hex: '#00979D' },
  { name: 'Light Blue',        hex: '#87CEEB' },
  { name: 'Pink',              hex: '#FFB6C1' },
  { name: 'Wisteria',          hex: '#C9A0DC' },
  { name: 'Gray',              hex: '#A9A9A9' },
  { name: 'Chartreuse',        hex: '#AACC00' },
  { name: 'Dark Green',        hex: '#1A5C2A' },
  { name: 'Mint Green',        hex: '#90EED4' },
  { name: 'Burnt Orange',      hex: '#CC5500' },
  { name: 'Canary Yellow',     hex: '#FFD700' },
  { name: 'Deep Purple',       hex: '#5B2C6F' },
  { name: 'Red',               hex: '#CC2200' },
  { name: 'Chiffon Yellow',    hex: '#FAF0A0' },
  { name: 'Key Lime Green',    hex: '#CCE870' },
  { name: 'Periwinkle',        hex: '#8B9DC3' },
  { name: 'Cantaloupe',        hex: '#F5A623' },
  { name: 'Salmon Pink',       hex: '#FA8072' },
  { name: 'Vanilla',           hex: '#F5E6C8' },
  { name: 'Dark Celadon',      hex: '#3A7D65' },
  { name: 'Tangerine Sherbet', hex: '#FFA07A' },
];

const SPECIES = [
  { name: 'Green Lizard',   accent: '#5C8A2C' },
  { name: 'Red Newt',       accent: '#CC2200' },
  { name: 'Bearded Dragon', accent: '#8D6E63' },
];

function LizardSketch({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 160 230" style={{ width: '72%' }}>
      {/* Robe */}
      <path
        d="M80 52 C 88 56, 95 68, 99 86 C 107 120, 120 170, 134 200 Q 80 216, 26 200 C 40 170, 53 120, 61 86 C 65 68, 72 56, 80 52 Z"
        fill="white" stroke="#333" strokeWidth={2.2} strokeLinejoin="round"
      />
      {/* Hem band */}
      <path
        d="M26 200 Q 80 216, 134 200 L 134 208 Q 80 224, 26 208 Z"
        fill="white" stroke="#333" strokeWidth={1.5}
      />
      {/* Collar – species color */}
      <ellipse cx="80" cy="78" rx="24" ry="11" fill={accent} stroke="#333" strokeWidth={1.5}/>
      {/* Head */}
      <ellipse cx="80" cy="63" rx="19" ry="15" fill="white" stroke="#333" strokeWidth={2}/>
      {/* Eyes */}
      <circle cx="73" cy="61" r="2.5" fill="#333"/>
      <circle cx="87" cy="61" r="2.5" fill="#333"/>
      {/* Smile */}
      <path d="M75 69 Q 80 74 85 69" stroke="#333" strokeWidth={1.5} fill="none" strokeLinecap="round"/>
      {/* Hat */}
      <path d="M80 -6 L61 50 L99 50 Z" fill="white" stroke="#333" strokeWidth={2} strokeLinejoin="round"/>
      {/* Hat brim */}
      <path d="M61 50 L99 50 L101 57 L59 57 Z" fill="white" stroke="#333" strokeWidth={1.5}/>
      {/* Arms */}
      <ellipse cx="54" cy="142" rx="7" ry="5" fill="white" stroke="#333" strokeWidth={1.5}/>
      <ellipse cx="106" cy="144" rx="7" ry="5" fill="white" stroke="#333" strokeWidth={1.5}/>
    </svg>
  );
}

function makeDownloadSVG(accent: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 230" width="480" height="690">
  <rect width="160" height="230" fill="white"/>
  <path d="M80 52 C 88 56, 95 68, 99 86 C 107 120, 120 170, 134 200 Q 80 216, 26 200 C 40 170, 53 120, 61 86 C 65 68, 72 56, 80 52 Z" fill="white" stroke="#333" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M26 200 Q 80 216, 134 200 L 134 208 Q 80 224, 26 208 Z" fill="white" stroke="#333" stroke-width="1.5"/>
  <ellipse cx="80" cy="78" rx="24" ry="11" fill="${accent}" stroke="#333" stroke-width="1.5"/>
  <ellipse cx="80" cy="63" rx="19" ry="15" fill="white" stroke="#333" stroke-width="2"/>
  <circle cx="73" cy="61" r="2.5" fill="#333"/>
  <circle cx="87" cy="61" r="2.5" fill="#333"/>
  <path d="M75 69 Q 80 74 85 69" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M80 -6 L61 50 L99 50 Z" fill="white" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
  <path d="M61 50 L99 50 L101 57 L59 57 Z" fill="white" stroke="#333" stroke-width="1.5"/>
  <ellipse cx="54" cy="142" rx="7" ry="5" fill="white" stroke="#333" stroke-width="1.5"/>
  <ellipse cx="106" cy="144" rx="7" ry="5" fill="white" stroke="#333" stroke-width="1.5"/>
</svg>`;
}

function downloadSpecies(name: string, accent: string) {
  const svg = makeDownloadSVG(accent);
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name.toLowerCase().replace(/\s+/g, '-')}-reference.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function InventoryPage() {
  return (
    <main className="inv-page">
      <header className="inv-header">
        <h1 className="inv-title">Meet the Coven!</h1>
      </header>

      <div className="inv-list">
        {LIZARDS.map((lizard, i) => (
          <div key={lizard.num} className="inv-row" data-flip={i % 2 === 1 ? '' : undefined}>
            <div
              className="inv-portrait"
              style={{
                background: `linear-gradient(180deg, ${lizard.swatch.bgTop} 0%, ${lizard.swatch.bgBottom} 100%)`,
              }}
            >
              <div
                className={`motif-${lizard.motif} inv-motif`}
                style={{ color: lizard.swatch.motif }}
              />
              <LizardPortrait
                hat={lizard.hat}
                accent={lizard.accent}
                robe={lizard.robe}
                pattern={lizard.robePattern}
              />
              <span className={`badge badge-${lizard.status} inv-status-badge`}>
                {lizard.status === 'available' && 'Available'}
                {lizard.status === 'sold' && '✦ adopted'}
                {lizard.status === 'reserved' && 'On hold'}
                {lizard.status === 'new' && 'New drop'}
              </span>
              {lizard.hand && (
                <span className="inv-hand-label" style={{ color: lizard.swatch.motif }}>
                  {lizard.hand}
                </span>
              )}
            </div>

            <div className="inv-text">
              <span className="t-mono inv-num">№{lizard.num}</span>
              <h2 className="inv-name">{lizard.name}</h2>
              <p className="inv-traits">{lizard.traits}</p>
              <div className="inv-cta">
                <span className="inv-price">€{lizard.price}</span>
                {lizard.status === 'sold' ? (
                  <button className="btn btn-soft btn-sm" disabled>Gone home</button>
                ) : (
                  <Link to={`/products/${lizard.num}`} className="btn btn-primary btn-sm">
                    {lizard.status === 'reserved' ? 'Waitlist' : 'Take home →'}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Color Section ── */}
      <section className="inv-colors">
        <div className="inv-colors-inner">
          <h2 className="inv-colors-title">Available Colors</h2>

          <div className="inv-swatch-frame">
            {AVAILABLE_COLORS.map(({ name, hex }) => (
              <div key={name} className="inv-swatch">
                <div
                  className="inv-swatch-chip"
                  style={{ background: hex }}
                  title={name}
                />
                <span className="inv-swatch-name">{name}</span>
              </div>
            ))}
          </div>

          <p className="inv-download-note">
            If you'd like, download one of the images below to write notes&nbsp;/
            describe what you'd like!
          </p>

          <div className="inv-species-grid">
            {SPECIES.map(({ name, accent }) => (
              <div key={name} className="inv-species-card">
                <div className="inv-species-sketch">
                  <LizardSketch accent={accent} />
                </div>
                <span className="inv-species-name">{name}</span>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => downloadSpecies(name, accent)}
                >
                  Download ↓
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
