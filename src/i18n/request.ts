import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './localeService';
import { defaultLocale, type Locale, locales } from './config';
import fr from './locales/fr';
import en from './locales/en';

export default getRequestConfig(async () => {
	const userLocale = (await getUserLocale());

	const locale = locales.includes(userLocale as Locale) ? userLocale : defaultLocale;
	const messages = {
		fr,
		en
	}[locale] ?? {};

	return {
		locale,
		messages
	};
});