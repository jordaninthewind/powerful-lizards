import type { CSSProperties, ReactNode } from 'react';

interface EyebrowRowProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function EyebrowRow({ children, style }: EyebrowRowProps) {
  return (
    <div className="eyebrow-row">
      <span className="t-eyebrow" style={style}>
        {children}
      </span>
    </div>
  );
}
