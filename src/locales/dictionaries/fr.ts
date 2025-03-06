import { title } from "process";

export default {
	header: {
		nav: {
			home: "Accueil",
			projects: "Portfolio",
			fivem: "FiveM",
		},
		theme: {
			light: "Clair",
			dark: "Sombre",
			system: "Système",
			sr_toggle: "Changer de thème"
		},
		locale: {
			sr_toggle: "Choisir la langue"
		},
	},
	footer: {
		copyright: "Tous droits réservés."
	},
	home: {
		title: "Bienvenue sur mon portfolio!",
		subtitle: {
			text: [
				"Je suis un étudiant en Développement full-stack et ",
				"du moins autrefois",
				" Développeur FiveM.",
				"I build stuff.. I guess."
			],
			tooltip: "Je l'étais jusqu'à peu près Mai 2024. Cliquez pour en savoir plus!"
		},
		cta: "Voir mes projets",
		cards: {
			title: "Explorez mon travail",
			portfolio: {
				title: "Portfolio",
				description: "Découvrez mes derniers projets Web et apprenez-en davantage sur ce que je peux faire.",
				cta: "En savoir plus"
			},
			fivem: {
				title: "Projets FiveM",
				description: "Explorez mon travail sur la plateforme FiveM et apprenez-en davantage sur mes projets.",
				cta: "En savoir plus"
			},
		},
	},
	portfolio: {
		title: "Mes projets Web",
		description: "Projets scolaires, projets personnels.. Mais surtout des projets scolaires..",
		projectInfo: {
				date: "Date",
				duration: "Durée",
				role: "Mon rôle",
				teamSizes: {
					solo: "Solo",
					group: "Groupe"
				}
			},
		projects: [
			{
				title: "Portfolio",
				description: "Bah.. ce site en fait!",
				date: "Fevrier 2025",
				duration: "Une nuit et demi",
				role: "Développeur full-stack, Designer, Chef de projet..",
			},
		]
	},
	fivem: {
		title: "Mes projets FiveM",
	},
  } as const