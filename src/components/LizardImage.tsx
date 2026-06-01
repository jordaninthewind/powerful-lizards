import type { CSSProperties } from 'react';
import type { LizardSpecies } from '../types';

const LIZARD_COVEN_SRC = '/assets/lizard-coven.png';
const NEWT_COVEN_SRC = '/assets/newt-coven.png';
const BEARDED_DRAGON_COVEN_SRC = '/assets/bearded-dragon-coven.png';

const DEFAULT_ALTS: Record<LizardSpecies, string> = {
  lizard: 'Five ceramic lizard wizards on a black background',
  newt: 'Five ceramic newt wizards on a white background',
  'bearded-dragon': 'Five ceramic bearded dragon wizards on a white background',
};

export function getLizardImageSrc(species: LizardSpecies): string {
  switch (species) {
    case 'lizard':
      return LIZARD_COVEN_SRC;
    case 'newt':
      return NEWT_COVEN_SRC;
    case 'bearded-dragon':
      return BEARDED_DRAGON_COVEN_SRC;
  }
}

interface LizardImageProps {
  species: LizardSpecies;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

export function LizardImage({ species, alt, className, style }: LizardImageProps) {
  return (
    <img
      src={getLizardImageSrc(species)}
      alt={alt ?? DEFAULT_ALTS[species]}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        display: 'block',
        ...style,
      }}
    />
  );
}
