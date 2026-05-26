type SectionTone = 'cream' | 'paper' | 'ink' | 'deep';
type SectionFx = 'dots' | 'dots-soft' | 'stars' | 'zigzag';

interface SectionBackgroundProps {
  tone: SectionTone;
  fx: SectionFx;
}

export function SectionBackground({ tone, fx }: SectionBackgroundProps) {
  return (
    <div className={`hp-bg hp-bg--${tone}`}>
      <div className={`hp-bg-fx hp-bg-fx--${fx}`} />
    </div>
  );
}
