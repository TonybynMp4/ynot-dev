export default {
	header: {
		nav: {
			home: "Home",
			projects: "Portfolio",
			fivem: "FiveM",
		},
		theme: {
			light: "Light",
			dark: "Dark",
			system: "System",
			sr_toggle: "Toggle theme"
		},
		locale: {
			sr_toggle: "Choose language"
		},
	},
	footer: {
		copyright: "All rights reserved."
	},
	home: {
		title: "Welcome to My Portfolio!",
		subtitle: {
			text: [
				"I'm a student full-stack developer and ",
				"used to be at least",
				" FiveM developer.",
				"I build stuff.. I guess."
			],
			tooltip: "I was until ~May 2024. Click to learn more!"
		},
		cta: "View My Projects",
		cards: {
			title: "Explore My Work",
			portfolio: {
				title: "Portfolio",
				description: "Discover my latest Web projects and learn more about what I can do.",
				cta: "View Web Projects"
			},
			fivem: {
				title: "FiveM Work",
				description: "Explore my work on the FiveM platform and learn more about my projects.",
				cta: "FiveM Projects"
			},
		},
	},
	portfolio: {
		title: "My Web Projects",
		description: "School projects, personal projects.. mostly school projects yeah..",
		projectInfo: {
			date: "Date",
			duration: "Duration",
			role: "My Role",
			teamSizes: {
				solo: "Solo",
				group: "Group"
			},
			readMore: "Read More"
		},
		projects: [
			{
				title: "Portfolio",
				description: "Well, this website!",
				date: "February 2025",
				duration: "1.5 whole night (for now lol)",
				role: "Full-stack Engineer, Designer, Team Leader",
			},
			{
				title: "Instaflop",
				description: "Social Media / Instagram clone",
				date: "February 2025",
				duration: "(spread over) 2 months",
				role: "Team Leader, Full-stack Developer",
			},
			{
				title: "VaultPay",
				description: "Online Banking Website",
				date: "January 2025",
				duration: "1 week",
				role: "Team Leader, Full-stack Developer, Designer",
			},
			{
				title: "EfreiNews",
				description: "School News Blog",
				date: "October 2024",
				duration: "15 hours",
				role: "Full-stack Developer",
			},
			{
				title: "Java RPG Game",
				description: "Text-based RPG Game",
				date: "September 2024",
				duration: "10 hours",
				role: "Developer",
			},
			{
				title: "PixelParts",
				description: "PC Parts E-commerce Website",
				date: "October 2024",
				duration: "40 hours",
				role: "Full-stack Developer",
			},
			{
				title: "Les Dunes",
				description: "Restaurant Website",
				date: "March 2024",
				duration: "5 hours",
				role: "Front-end Developer",
			},
		]
	},
	fivem: {
		title: "My FiveM Projects",
		context: {
			intro: {
				title: "A little bit of context",
				content: [
					"In late 2021, Before starting my journey as a web developper, i started playing around with ",
					"FiveM",
					" development.",
					"At that point in time, I had played on a server for almost a year and got interested in the development side of things, so i started learning!",
					"This allowed me to learn a lot about programing in general as it was my first experience. But i also got to work on a cool project with a great community of developers: ",
					"Qbox",

				],
				tooltip: "A multiplayer modding platform for Grand Theft Auto V",
			},
			qbox: {
				title: "Qbox & the fall of FiveM",
				content: [
					[
						"After being in the ",
						"qbcore",
							"Predecessor of Qbox, TLDR: the \"manager\" is a bad person and the developers ended up leaving the project.",
						" community for a few months, the qbox project was created by a few members of the qbcore team.",
					],
					[
						"I joined the Qbox community relatively early, around two months after it ",
						"forked",
							"Fork: copy of a project to modify it without affecting the original (and more or less \"own\" the new one)",
						" from qbcore, and actively contributed to the framework and its scripts until May 2024.",
					],
					"At some point i got to \"join\" the team and help with the development of the framework in a more direct manner, which was a great experience.",
					"Around that time, the future of FiveM became increasingly uncertain",
					", coupled with school, which made it difficult for me to stay motivated.",
					"Combined with differing opinions on the project's direction, I ultimately decided to step away from the project.",
					"I continued working on small resources for a few months, but eventually stopped altogether. ",
					"(Video games got me hooked again, woopsies)",
					"I still deeply respect and appreciate the project and its team, and value the skills I acquired during that time, particularly in using Git and GitHub effectively.",
					"Much love to them; they're a really great group of people! ",
					"well, most of them at least eheh",
					"Wink wink Manason"
				]
			},
			footnotes: [
				[
					"This document",
					" explains the situation, but I and many others had heard rumors for years."
				]
			]
		},
		projects: {
			title: "Projects",
			description: "Here are some of the projects I worked on during my time on FiveM!",
			cta: "Learn More",
		}
	},
} as const