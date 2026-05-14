interface WizardMarkProps {
  size?: number;
  primary?: string;
  accent?: string;
}

export function WizardMark({ size = 64, primary = "var(--primary)", accent = "var(--marigold)" }: WizardMarkProps) {
  return (
    <svg viewBox="0 0 64 80" width={size} height={size * 80 / 64} aria-hidden="true">
      <path d="M32 6 L54 70 Q 32 76 10 70 Z" fill={primary}/>
      <path d="M21 38 L43 38 L46 46 L18 46 Z" fill={accent}/>
      <path d="M32 16 L34 23 L41 25 L34 27 L32 34 L30 27 L23 25 L30 23 Z" fill="var(--bone)"/>
      <circle cx="24" cy="58" r="3.5" fill="var(--ink)"/>
      <circle cx="40" cy="60" r="3.5" fill="var(--ink)"/>
      <circle cx="25" cy="57" r="1.2" fill="var(--bone)"/>
      <circle cx="41" cy="59" r="1.2" fill="var(--bone)"/>
      <path d="M27 67 Q 32 70 37 67" stroke="var(--ink)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
