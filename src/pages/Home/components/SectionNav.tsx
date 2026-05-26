import { HOME_SECTIONS } from '../constants';

interface SectionNavProps {
  activeIdx: number;
  onSelect: (idx: number) => void;
}

function SectionNavDots({ activeIdx, onSelect }: SectionNavProps) {
  return (
    <>
      {HOME_SECTIONS.map((label, i) => (
        <button
          key={label}
          className={`hp-nav-dot${activeIdx === i ? ' active' : ''}`}
          onClick={() => onSelect(i)}
          aria-label={label}
          title={label}
        />
      ))}
    </>
  );
}

export function SectionNav({ activeIdx, onSelect }: SectionNavProps) {
  return (
    <>
      <nav className="hp-nav" aria-label="Page sections">
        <SectionNavDots activeIdx={activeIdx} onSelect={onSelect} />
      </nav>
      <nav className="hp-mobile-nav" aria-label="Page sections">
        <SectionNavDots activeIdx={activeIdx} onSelect={onSelect} />
      </nav>
    </>
  );
}
