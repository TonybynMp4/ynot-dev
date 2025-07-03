import locales from '@/i18n/locales/index';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = 'JSONLocales';
const INDENT_SIZE = 2;

// S'assurer que le dossier de sortie existe
if (!fs.existsSync(OUTPUT_DIR)) {
	fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Générer les fichiers JSON pour chaque locale
Object.entries(locales).forEach(([localeKey, localeData]) => {
	try {
		const outputPath = path.join(OUTPUT_DIR, `${localeKey}.json`);
		const jsonContent = JSON.stringify(localeData, null, INDENT_SIZE);

		fs.writeFileSync(outputPath, jsonContent, 'utf8');
		console.log(`✅ Généré avec succès : ${outputPath}`);

		// Statistiques optionnelles
		const stats = getTranslationStats(localeData);
		console.log(`   📊 ${stats.totalKeys} clés traduites, ${stats.totalCharacters} caractères`);

	} catch (error) {
		console.error(`❌ Erreur lors de la génération de ${localeKey}.json:`, error);
	}
});

/**
 * Calcule des statistiques sur les traductions
*/

interface TranslationObject {
	[key: string | number]: Translation | TranslationObject | TranslationObject[] | (string | string[])[];
}
type Translation = string | string[];

type TranslationStats = {
	totalKeys: number;
	totalCharacters: number;
};

function getTranslationStats(obj: TranslationObject, prefix = ''): TranslationStats {
	let totalKeys = 0;
	let totalCharacters = 0;

	for (const [key, value] of Object.entries(obj)) {
		if (typeof value === 'string') {
			totalKeys++;
			totalCharacters += value.length;
		} else if (Array.isArray(value)) {
			const array = value;
			totalKeys += array.length;
			totalCharacters += array.reduce((sum, item) => {
				if (typeof item === 'string') {
					return sum + item.length;
				} else if (Array.isArray(item)) {
					return sum + item.reduce((subSum, subItem) => subSum + (typeof subItem === 'string' ? subItem.length : 0), 0);
				}
				return sum;
			}, 0);
		} else if (typeof value === 'object' && value !== null) {
			const nestedStats = getTranslationStats(value, `${prefix}${key}.`);
			totalKeys += nestedStats.totalKeys;
			totalCharacters += nestedStats.totalCharacters;
		}
	}

	return { totalKeys, totalCharacters };
}

console.log('\n🎉 Génération des fichiers JSON terminée !');