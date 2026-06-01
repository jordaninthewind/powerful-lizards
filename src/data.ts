import type { Lizard, Palette, Pairing } from './types';

export const LIZARDS: Lizard[] = [
  {
    species: "lizard",
    name: "Newt Sage", num: "037", price: 54, status: "new",
    traits: "A noble protector inspired by the Eastern newt—a shapeshifting creature renowned for its remarkable three-stage life cycle: born in the water, emerging onto land, and ultimately returning home to the waters from which it came.",
    hat: "#F4B82A", accent: "#E84A3F", robe: "#F4B82A", robePattern: "stripes",
    motif: "dots", hand: "a worrier",
    swatch: { bgTop: "#FBE3A1", bgBottom: "#F4B82A", motif: "rgba(232,74,63,0.25)" },
  },
  {
    species: "newt",
    name: "Lizard Sage", num: "038", price: 62, status: "available",
    traits: "Inspired by the Anole lizard, this nimble protector has its own dance of leaps, balances, and head-bobs, springing between leaves and twigs, imparting wizardly messages along the way. Perfect for those wishing to channel self-expression and a sense of delight.",
    hat: "#F0A6BB", accent: "#E84A3F", robe: "#4FB5C7", robePattern: "dots",
    motif: "stars", hand: "sociable",
    swatch: { bgTop: "#BCE3E8", bgBottom: "#4FB5C7", motif: "rgba(240,166,187,0.40)" },
  },
  {
    species: "bearded-dragon",
    name: "Bearded Sage", num: "039", price: 68, status: "available",
    traits: "A friendly member of the coven inspired by the Bearded Dragon—an affable creature known for its beautiful beard and sweet disposition. Perfect for those looking to bring both regal presence and warmth to their home.",
    hat: "#F0A6BB", accent: "#E84A3F", robe: "#F4B82A", robePattern: "splotch",
    motif: "zigzag", hand: "the philosopher",
    swatch: { bgTop: "#C9D2A8", bgBottom: "#7B8B5C", motif: "rgba(232,74,63,0.20)" },
  },
];

/** Glaze colors shown on the inventory page — also drives site CSS tokens */
export const GLAZE_COLORS = [
  { name: 'Maroon', hex: '#722040' },
  { name: 'Dark Navy', hex: '#1B2A4A' },
  { name: 'Medium Blue', hex: '#3B6BB5' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#1A1A1A' },
  { name: 'Turquoise', hex: '#00979D' },
  { name: 'Light Blue', hex: '#87CEEB' },
  { name: 'Pink', hex: '#FFB6C1' },
  { name: 'Wisteria', hex: '#C9A0DC' },
  { name: 'Gray', hex: '#A9A9A9' },
  { name: 'Chartreuse', hex: '#AACC00' },
  { name: 'Dark Green', hex: '#1A5C2A' },
  { name: 'Mint Green', hex: '#90EED4' },
  { name: 'Burnt Orange', hex: '#CC5500' },
  { name: 'Canary Yellow', hex: '#FFD700' },
  { name: 'Deep Purple', hex: '#5B2C6F' },
  { name: 'Red', hex: '#CC2200' },
  { name: 'Chiffon Yellow', hex: '#FAF0A0' },
  { name: 'Key Lime Green', hex: '#CCE870' },
  { name: 'Periwinkle', hex: '#8B9DC3' },
  { name: 'Cantaloupe', hex: '#F5A623' },
  { name: 'Salmon Pink', hex: '#FA8072' },
  { name: 'Vanilla', hex: '#F5E6C8' },
  { name: 'Dark Celadon', hex: '#3A7D65' },
  { name: 'Tangerine Sherbet', hex: '#FFA07A' },
] as const;

export const PALETTES: Record<string, Palette> = {
  coral:    { name: 'Red',           primary: '#CC2200', deep: '#722040', soft: '#FA8072' },
  marigold: { name: 'Canary Yellow', primary: '#FFD700', deep: '#CC5500', soft: '#FAF0A0' },
  teal:     { name: 'Turquoise',     primary: '#00979D', deep: '#3A7D65', soft: '#90EED4' },
  plum:     { name: 'Deep Purple',   primary: '#5B2C6F', deep: '#722040', soft: '#C9A0DC' },
};

export const PAIRINGS: Record<string, Pairing> = {
  bricolage: { name: "Bricolage + Jakarta", display: '"Bricolage Grotesque", serif', sans: '"Plus Jakarta Sans", sans-serif' },
  storybook: { name: "DM Serif + DM Sans",  display: '"DM Serif Display", serif',   sans: '"DM Sans", sans-serif' },
  bold:      { name: "Newsreader + Geist",   display: '"Newsreader", serif',         sans: '"Geist", sans-serif' },
};

export const SWAP_FONTS_HREF = "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;700&family=Newsreader:opsz,wght@6..72,400;6..72,700&family=Geist:wght@400;500;700&display=swap";
