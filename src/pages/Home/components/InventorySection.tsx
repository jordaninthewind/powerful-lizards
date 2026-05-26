import { LizardCard } from '../../../components/LizardCard';
import { EyebrowRow } from '../../../components/EyebrowRow';
import { LIZARDS } from '../../../data';
import { SectionBackground } from './SectionBackground';

export function InventorySection() {
  const availableCount = LIZARDS.filter(l => l.status === 'available' || l.status === 'new').length;

  return (
    <section className="hp-section hp-section--inventory" aria-label="Recent inventory">
      <SectionBackground tone="paper" fx="dots-soft" />

      <div className="hp-section-inner hp-inventory-layout">
        <div className="hp-inventory-header hp-anim hp-d1">
          <EyebrowRow>Recent Inventory</EyebrowRow>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--s-4)', flexWrap: 'wrap' }}>
            <h2 className="t-h1" style={{ margin: 0 }}>
              Meet the
              <br />
              May coven.
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
  );
}
