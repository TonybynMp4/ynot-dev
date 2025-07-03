import en from "./en";
import fr from "./fr";

const locales = {
	'fr': fr,
	'en': en
};

export type Locale = keyof typeof locales;
export default locales;