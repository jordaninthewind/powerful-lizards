export interface Lizard {
  name: string;
  num: string;
  price: number;
  status: 'new' | 'available' | 'reserved' | 'sold';
  traits: string;
  hat: string;
  accent: string;
  robe: string;
  robePattern: 'dots' | 'stars' | 'stripes' | 'splotch';
  motif: 'dots' | 'stars' | 'zigzag' | 'stripes';
  hand: string | null;
  swatch: {
    bgTop: string;
    bgBottom: string;
    motif: string;
  };
}

export interface Palette {
  name: string;
  primary: string;
  deep: string;
  soft: string;
}

export interface Pairing {
  name: string;
  display: string;
  sans: string;
}
