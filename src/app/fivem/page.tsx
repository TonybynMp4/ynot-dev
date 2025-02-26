import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type Project = {
	title: string,
	description: string,
	features?: string[],
	link: string,
	image?: string,
}

const fivemProjects: Project[] = [
	{
		title: "Qbox Project",
		description: "An Open Source Community project for FiveM, a framework providing a solid foundation for roleplay servers. Building on qbcore's legacy, it aims to elevate code practices, performance, and feature quality.",
		features: ["High performance", "Feature-rich", "Easy to use", "Highly customizable", "Open-source", "Community-driven", "Improved code quality"],
		link: "https://github.com/qbox-Project",
	},
	{
		title: "y_hud",
		description: "A basic, but feature-rich HUD for the qbox framework.",
		features: ["Player HUD", "Statuses, Voicechat integration, Compass", "Vehicle HUD", "Speedometer, Lights, Fuel gauge, Seatbelt & Nitro support"],
		link: "https://github.com/Ynot-Workshop/y_hud/",
	},
	{
		title: "y_customs",
		description: "A vehicle customization script allowing players to customize their vehicles with a variety of options.",
		features: ["\"Exclusive\" chameleon colors", "Performance parts", "Cosmetic parts", "Liveries, etc..."],
		link: "https://github.com/Ynot-Workshop/y_customs"
	},

	{
		title: "y_dispatch",
		description: "A simple dispatch system for emergency services. A complete remake in React with tons of features was planned but i never got around to finishing it.",
		features: ["Calls", "Exports", "Dispatching system"],
		link: "https://github.com/TonybynMp4/y_dispatch"
	},
]

export default function FiveMPage() {
	return <>
		<h1 className="text-5xl font-bold mb-6">My FiveM Work</h1>
		<section>
			<h2 className="text-4xl font-semibold mb-4">
				A little bit of context
			</h2>
			<p className="text-xl mb-8 ml-8">
				Before being starting my journey as a web developper, I played around with <a href="https://fivem.net/" target="_blank" rel="noopener noreferrer" className="link">FiveM</a>, a multiplayer modification framework for Grand Theft Auto V.
				This allowed me to learn a lot about Lua, SQL and JavaScript. But also to work on a cool project with a great community of developers, <a href="https://qbox-project.github.io/" target="_blank" rel="noopener noreferrer">Qbox</a>.
			</p>
			<h3 className="text-2xl font-semibold mb-4">
				Qbox
			</h3>
			<p className="text-xl mb-8 ml-8">
				I joined the Qbox project relatively early, around two months after it forked from qbcore, and actively contributed to the framework and its resources until May 2024.
				<br />
				Around that time, the future of FiveM became increasingly uncertain<sup><a href="#footnote-1" className="link">1</a></sup>, which made it difficult for me to stay motivated.
				Combined with differing opinions on the project's direction, I ultimately decided to step away.
				I continued working on small resources for a few months, but eventually stopped altogether.
				<br />
				I still have a lot of respect & love for the project and the team, these guys are really cool! (most of them at least eheh)
			</p>
			<Separator className="my-2 w-[50%]" />
			<ol className="list-decimal pl-5 space-y-4">
				<li id="footnote-1" className="text-md mb-4">
					<a href="https://fivem.team/" target="_blank" rel="noopener noreferrer" className="link">This document</a> explains the situation, but I and many others had heard rumors for years.
				</li>
			</ol>
		</section>
		<section>
			<h2 className="text-4xl font-semibold mb-4">
				Projects
			</h2>
			<p className="text-xl mb-8 ml-8">
				Here are some of the projects I worked on during my time on FiveM!
			</p>

			{fivemProjects.map((project, index) => (
				<article
					key={index}
					className={cn([
						"flex flex-col md:flex-row gap-8 border p-4 my-4",
						(index % 2 === 1) ? "md:flex-row-reverse" : "", // if odd, reverse children order
					])}
				>
					<div className="md:w-1/2 rounded-lg shadow-md w-full h-auto">
						<img
							src={project.image || "https://placehold.co/500x250/dc4632/white"}
							alt={project.title}
							className="rounded-lg justify-self-center"
						/>
					</div>
					<div className="md:w-1/2 space-y-4 text-md">
						<h2 className="text-2xl font-semibold">{project.title}</h2>
						<p className="ml-8">{project.description}</p>
						<ul className="ml-8 list-disc pl-5 space-y-2">
							{project.features && project.features.map((feature, featureIndex) => (
								<li key={featureIndex}>{feature}</li>
							))}
						</ul>
						<Button asChild variant="default" className="ml-8 mt-6">
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								View Project
							</a>
						</Button>
					</div>
				</article>
			))}
		</section>

	</>
}