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
		context: {
			intro: {
				title: "Un peu de contexte",
				content: [
					"En fin 2021, Avant de commencer mon parcours en tant que développeur web, j'ai commencé par jouer avec le développement sur ",
					"FiveM",
					".",
					"À ce moment-là, j'avais joué sur un serveur pendant presque un an et était devenu intéressé a la partie développement, alors j'ai commencé à apprendre!",
					"Cela m'a permis d'apprendre beaucoup sur la programmation en général car c'était ma première expérience. Mais j'ai aussi pu travailler sur un projet cool avec une super communauté de développeurs: ",
					"Qbox",
				],
				tooltip: "Une plateforme multijoueur pour Grand Theft Auto V",
			},
			qbox: {
				title: "Qbox & la descente aux enfers de FiveM",
				content: [
					[
						"Après avoir été dans la communauté de ",
						"qbcore",
							"Predecesseur de Qbox. En bref: le \"manager\" est une mauvaise personne et les développeurs ont fini par quitter le projet.",
						" pendant quelques mois, le projet qbox a été créé par quelques membres de l'équipe qbcore.",
					],
					[
						"J'ai rejoint la communauté Qbox relativement tôt, environ deux mois après son ",
						"fork",
							"Fork: copie d'un projet pour le modifier sans affecter l'original (et plus ou moins se \"l'approprier\")",
						" de qbcore, et j'ai activement contribué au framework et à ses scripts jusqu'en mai 2024.",
					],
					"Au bout d'un moment, j'ai pu \"rejoindre\" l'équipe et aider au développement du framework plus directement, ce qui a été une super expérience.",
					"Autour de cette période, l'avenir de FiveM devenait de plus en plus incertain",
					", ce qui, combiné à mon entrée à l'EFREI, a rendu difficile pour moi de rester motivé au sein du projet.",
					"Tout cela combiné à des opinions divergentes sur la direction du projet, j'ai finalement décidé de me retirer du projet.",
					"J'ai continué à travailler sur de petits scripts pendant quelques mois, mais j'ai fini par arrêter complètement.",
					"(J'ai replongé dans les jeux vidéo, oups..)",
					"J'ai toujours énormément de respect et d'appréciation pour le projet et son équipe, et je valorise beaucoup les compétences que j'ai acquises pendant ce temps, notamment dans l'utilisation de Git et GitHub de manière plus ou moins professionnelle.",
					"Coeur sur eux, ces personnes sont vraiment géniales!",
					"Enfin, la plupart d'entre eux en tout cas eheh",
					"Wink wink Manason"
				]
			},
			footnotes: [
				[
					"Ce document",
					" explique la situation, mais moi et beaucoup d'autres avions entendu des rumeurs depuis des années."
				]
			]
		},
		projects: {
			title: "Projets",
			description: "Voici quelques-uns des projets sur lesquels j'ai travaillé pendant mon temps sur FiveM!",
			cta: "En savoir plus",
		}
	},
  } as const