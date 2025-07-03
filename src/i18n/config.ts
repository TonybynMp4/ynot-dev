export type Locale = (typeof locales)[number];

export const locales = ['en', 'fr'] as const;
export const localeLabels: Record<Locale, string> = {
	fr: 'Français',
	en: 'English',
};

export const defaultLocale: Locale = 'fr';