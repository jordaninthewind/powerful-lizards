export const HOME_SECTIONS = ['Hero', 'About', 'Shop', 'Contact'] as const;

export type HomeSectionLabel = (typeof HOME_SECTIONS)[number];
