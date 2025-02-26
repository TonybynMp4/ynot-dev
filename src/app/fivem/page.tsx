import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
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
	return (
		<main className="min-h-[75vh] mx-auto max-w-[80%] flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold mb-6">My FiveM Work</h1>
			<section>
				<h2 className="text-2xl font-semibold mb-4">
					A little bit of context
				</h2>
				<p className="text-lg mb-8 ml-8">
					In late 2021, Before starting my journey as a web developper, i started playing around with <TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<a href="https://fivem.net/" target="_blank" rel="noopener noreferrer" className="link">FiveM</a>
							</TooltipTrigger>
							<TooltipContent>
								A multiplayer modding platform for Grand Theft Auto V
							</TooltipContent>
						</Tooltip>
					</TooltipProvider> development.
					<br />
					At that point in time, I had played on a server for almost a year and got interested in the development side of things, so i started learning!
					<br />
					This allowed me to learn a lot about programing in general as it was my first experience. But i also got to work on a cool project with a great community of developers: <a className="link" href="https://qbox-project.github.io/" target="_blank" rel="noopener noreferrer">Qbox</a>.
				</p>

				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>
							<h3 className="text-xl font-semibold mb-4">
								Qbox & the fall of FiveM
							</h3>
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-lg mb-8 ml-8">
								After being in qbcore for a few months, the qbox project was created by a few members of the qbcore team.
								I joined the Qbox community relatively early, around two months after it forked from qbcore, and actively contributed to the framework and its resources until May 2024.
							</p>
							<p className="text-lg mb-8 ml-8">
								At some point i got to "join" the team and help with the development of the framework, which was a great experience.
								<br />
								Around that time, the future of FiveM became increasingly uncertain<sup><a href="#footnote-1" className="link">1</a></sup>, coupled with school, which made it difficult for me to stay motivated.
								<br />
								Combined with differing opinions on the project&apos;s direction, I ultimately decided to step away from the project.
							</p>
							<p className="text-lg mb-8 ml-8">
								I continued working on small resources for a few months, but eventually stopped altogether. <span className="italic text-sm">(Video games got me hooked again, woopsies)</span>
							</p>
							<p className="text-lg mb-8 ml-8">
								I still deeply respect and appreciate the project and its team, and value the skills I acquired during that time, particularly in using Git and GitHub effectively.
								<br />
								Much love to them; they're a really great group of people! <TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											(well, most of them at least eheh)
										</TooltipTrigger>
										<TooltipContent>
											Wink wink Manason
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</p>
							<Separator className="my-2 w-[50%]" />
							<ol className="list-decimal pl-5 space-y-4">
								<li id="footnote-1" className="text-md mb-4">
									<a href="https://fivem.team/" target="_blank" rel="noopener noreferrer" className="link">This document</a> explains the situation, but I and many others had heard rumors for years.
								</li>
							</ol>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
			<section>
				<h2 className="text-2xl font-semibold my-4">
					Projects
				</h2>
				<p className="text-lg mb-8 ml-8">
					Here are some of the projects I worked on during my time on FiveM!
				</p>

				{fivemProjects.map((project, index) => (
					<article
						key={index}
						className={cn([
							"flex flex-col md:flex-row gap-8 border p-4 my-4 rounded-lg",
							(index % 2 === 1) ? "md:flex-row-reverse" : "", // if odd, reverse children order
						])}
					>
						<div className="md:w-1/2 rounded-lg shadow-md w-full h-auto content-center">
							<img
								src={project.image ?? "https://placehold.co/500x250/dc4632/white"}
								alt={project.title}
								className="rounded-lg justify-self-center"
							/>
						</div>
						<div className="md:w-1/2 space-y-4 text-md">
							<h2 className="text-2xl font-semibold">{project.title}</h2>
							<p className="ml-8">{project.description}</p>
							<ul className="ml-8 list-disc pl-5 space-y-2">
								{project?.features?.map((feature, featureIndex) => (
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
		</main>
	)
}