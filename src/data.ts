import type { Lizard, Palette, Pairing } from './types';

export const LIZARDS: Lizard[] = [
  {
    name: "Nim", num: "037", price: 54, status: "new",
    traits: "Marigold robe · red pointed hat · slightly concerned",
    hat: "#F4B82A", accent: "#E84A3F", robe: "#F4B82A", robePattern: "stripes",
    motif: "dots", hand: "a worrier",
    swatch: { bgTop: "#FBE3A1", bgBottom: "#F4B82A", motif: "rgba(232,74,63,0.25)" },
  },
  {
    name: "Pip", num: "038", price: 62, status: "available",
    traits: "Sky robe · pink-striped cap · sociable, in a quiet way",
    hat: "#F0A6BB", accent: "#E84A3F", robe: "#4FB5C7", robePattern: "dots",
    motif: "stars", hand: "sociable",
    swatch: { bgTop: "#BCE3E8", bgBottom: "#4FB5C7", motif: "rgba(240,166,187,0.40)" },
  },
  {
    name: "Mossward", num: "039", price: 68, status: "available",
    traits: "Sage frog · pink cone hat · contemplating the pond",
    hat: "#F0A6BB", accent: "#E84A3F", robe: "#F4B82A", robePattern: "splotch",
    motif: "zigzag", hand: "the philosopher",
    swatch: { bgTop: "#C9D2A8", bgBottom: "#7B8B5C", motif: "rgba(232,74,63,0.20)" },
  },
  {
    name: "Tess", num: "040", price: 58, status: "reserved",
    traits: "Terracotta robe with blue stars · cone hat · twitchy",
    hat: "#FFF8E8", accent: "#E84A3F", robe: "#C9683B", robePattern: "stars",
    motif: "dots", hand: "twitchy ✦",
    swatch: { bgTop: "#ECC3A0", bgBottom: "#C9683B", motif: "rgba(79,181,199,0.35)" },
  },
  {
    name: "Brindle", num: "041", price: 72, status: "sold",
    traits: "Sage robe · orange splotches · went home last Tuesday",
    hat: "#E84A3F", accent: "#F4B82A", robe: "#7B8B5C", robePattern: "splotch",
    motif: "stripes", hand: null,
    swatch: { bgTop: "#C9D2A8", bgBottom: "#7B8B5C", motif: "rgba(244,184,42,0.30)" },
  },
  {
    name: "Olwen", num: "042", price: 64, status: "available",
    traits: "Rose robe · marigold trim · gentle, would like a window seat",
    hat: "#F4B82A", accent: "#E84A3F", robe: "#F0A6BB", robePattern: "dots",
    motif: "stars", hand: "gentle",
    swatch: { bgTop: "#FAD2DD", bgBottom: "#F0A6BB", motif: "rgba(244,184,42,0.40)" },
  },
];

export const PALETTES: Record<string, Palette> = {
  coral:    { name: "Coral primary",    primary: "#E84A3F", deep: "#B83227", soft: "#F8C7B6" },
  marigold: { name: "Marigold primary", primary: "#F4B82A", deep: "#C8901C", soft: "#FBE3A1" },
  teal:     { name: "Teal primary",     primary: "#4FB5C7", deep: "#2E8C9D", soft: "#BCE3E8" },
  plum:     { name: "Plum primary",     primary: "#6E4A6B", deep: "#4D2F4B", soft: "#E0CADE" },
};

export const PAIRINGS: Record<string, Pairing> = {
  bricolage: { name: "Bricolage + Jakarta", display: '"Bricolage Grotesque", serif', sans: '"Plus Jakarta Sans", sans-serif' },
  storybook: { name: "DM Serif + DM Sans",  display: '"DM Serif Display", serif',   sans: '"DM Sans", sans-serif' },
  bold:      { name: "Newsreader + Geist",   display: '"Newsreader", serif',         sans: '"Geist", sans-serif' },
};

export const SWAP_FONTS_HREF = "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;700&family=Newsreader:opsz,wght@6..72,400;6..72,700&family=Geist:wght@400;500;700&display=swap";
