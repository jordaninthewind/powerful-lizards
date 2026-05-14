import type { SVGProps } from 'react';

type GlyphProps = SVGProps<SVGSVGElement> & { size?: number };

export function Star4({ size = 28, ...p }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" {...p}>
      <path d="M16 2 L18.5 13.5 30 16 18.5 18.5 16 30 13.5 18.5 2 16 13.5 13.5 Z"/>
    </svg>
  );
}

export function Lightning({ size = 24, ...p }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" {...p}>
      <path d="M19 2 L7 18 L14 18 L11 30 L25 12 L17 12 Z"/>
    </svg>
  );
}

export function Moon({ size = 24, ...p }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" {...p}>
      <path d="M22 4 a14 14 0 1 0 8 22 a11 11 0 0 1 -8 -22 z"/>
    </svg>
  );
}

export function Eye({ size = 24, ...p }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" {...p}>
      <path d="M2 16 C 7 7, 25 7, 30 16 C 25 25, 7 25, 2 16 Z"/>
      <circle cx="16" cy="16" r="4" fill="currentColor"/>
    </svg>
  );
}

export function Spiral({ size = 24, ...p }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" {...p}>
      <path d="M16 16 m -2 0 a 2 2 0 1 1 4 0 a 5 5 0 1 1 -10 0 a 9 9 0 1 1 18 0 a 13 13 0 1 1 -26 0"/>
    </svg>
  );
}

export function Droplet({ size = 24, ...p }: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" {...p}>
      <path d="M16 3 C 9 13, 5 19, 5 23 a 11 11 0 0 0 22 0 C 27 19, 23 13, 16 3 Z"/>
    </svg>
  );
}
