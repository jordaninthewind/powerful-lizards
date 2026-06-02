import { GLAZE_COLORS, LIZARDS } from '../../data';
import { LizardImage } from '../../components/LizardImage';
import { SiteNav } from '../../components/SiteNav';
import { SageCustomizeForm } from './components/SageCustomizeForm';
import '../../App.css';
import './InventoryPage.css';

const SPECIES = [
  { name: 'Lizard', image: '/assets/species-green-lizard.png' },
  { name: 'Newt', image: '/assets/species-red-newt.png' },
  { name: 'Bearded Dragon', image: '/assets/species-bearded-dragon.png' },
];

function downloadSpecies(name: string, imageSrc: string) {
  const a = document.createElement('a');
  a.href = imageSrc;
  a.download = `${name.toLowerCase().replace(/\s+/g, '-')}-reference.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function InventoryPage() {
  return (
    <>
      <SiteNav />
      <main className="inv-page">
        <section className="inv-intro" aria-labelledby="inv-intro-title">
          <div className="inv-intro-inner">
            <h1 id="inv-intro-title" className="inv-intro-title">
              Welcome to the build a powerful lizard page
            </h1>
            <p className="inv-intro-desc">
              Welcome to the Build a Powerful Lizard page! Below you&apos;ll find options to
              personalize your own special protector. Each sage is $35, made to order, and available
              for pickup or delivery in the Bay Area. Turn around time is generally 2 weeks.
              We&apos;re so glad you&apos;re here!
            </p>
          </div>
        </section>

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
                <div style={{ position: 'relative', zIndex: 1, width: '88%', height: '88%' }}>
                  <LizardImage species={lizard.species} alt={`${lizard.name} ceramic lizard wizard`} />
                </div>
              </div>

              <div className="inv-text">
                <h2 className="inv-name">{lizard.name}</h2>
                <p className="inv-traits">{lizard.traits}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Color Section ── */}
        <section className="inv-colors">
          <div className="inv-colors-inner">
            <h2 className="inv-colors-title">Available Colors</h2>

            <div className="inv-swatch-frame">
              {GLAZE_COLORS.map(({ name, hex }) => (
                <div key={name} className="inv-swatch">
                  <div className="inv-swatch-chip" style={{ background: hex }} title={name} />
                  <span className="inv-swatch-name">{name}</span>
                </div>
              ))}
            </div>

            <p className="inv-download-note">
              Download a species sketch below, mark it up with your ideas, then attach a screenshot in
              the form.
            </p>

            <div className="inv-species-grid">
              {SPECIES.map(({ name, image }) => (
                <div key={name} className="inv-species-card">
                  <div className="inv-species-sketch">
                    <img
                      src={image}
                      alt={`${name} species reference`}
                      className="inv-species-img"
                    />
                  </div>
                  <span className="inv-species-name">{name}</span>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => downloadSpecies(name, image)}
                  >
                    Download ↓
                  </button>
                </div>
              ))}
            </div>

            <SageCustomizeForm />

            <p className="inv-instagram">
              <a
                href="https://www.instagram.com/tulsi.and.friends/"
                target="_blank"
                rel="noopener noreferrer"
                className="inv-instagram-link"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
                Find us on Instagram at @tulsi.and.friends!
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
