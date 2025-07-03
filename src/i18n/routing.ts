import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./config";

export const routing = defineRouting({
	locales: locales,
	defaultLocale: defaultLocale,
	localePrefix: "never",
	alternateLinks: true,
	localeCookie: {
		maxAge: 60 * 60 * 24 * 7
	}
});