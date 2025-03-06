import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { getScopedI18n } from "@/locales/server"

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
		image: "https://42a7luf39b.ufs.sh/f/7FQN8DivdGH6ZFhWfduBgOSzK2rmMtDb1JI9wfHNC4qP75hY",
		link: "https://github.com/qbox-Project",
	},
	{
		title: "y_hud",
		description: "A basic, but feature-rich HUD for the qbox framework.",
		features: ["Player HUD", "Statuses, Voicechat integration, Compass", "Vehicle HUD", "Speedometer, Lights, Fuel gauge, Seatbelt & Nitro support"],
		image: "https://42a7luf39b.ufs.sh/f/7FQN8DivdGH6PwHrYTnIISGBQajtRECucZlTKOWFxrV1YyNi",
		link: "https://github.com/Ynot-Workshop/y_hud/",
	},
	{
		title: "y_customs",
		description: "A vehicle customization script allowing players to customize their vehicles with a variety of options.",
		features: ["\"Exclusive\" chameleon colors", "Performance parts", "Cosmetic parts", "Liveries, etc..."],
		image: "https://42a7luf39b.ufs.sh/f/7FQN8DivdGH6jiuEiHUPaDIxOXbSstCdEVHB2RMleUNYovGZ",
		link: "https://github.com/Ynot-Workshop/y_customs"
	},

	{
		title: "y_dispatch",
		description: "A simple dispatch system for emergency services. A complete remake in React with tons of features was planned but i never got around to finishing it. \n(image is not great but that's all i got)",
		features: ["Calls", "Exports", "Dispatching system"],
		image: "https://42a7luf39b.ufs.sh/f/7FQN8DivdGH6HFPkOlVO7H9QYEDP01WIMZ2XuyGtbcejzTFB",
		link: "https://github.com/TonybynMp4/y_dispatch"
	},
]

export default async function FiveMPage() {
	const t = await getScopedI18n("fivem")

	return (
		<main className="min-h-[75vh] mx-auto max-w-[80%] flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
			<section>
				<h2 className="text-2xl font-semibold mb-4">
					{t("context.intro.title")}
				</h2>
				<p className="text-lg mb-8 ml-8">
					{t("context.intro.content.0")}<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<a href="https://fivem.net/" target="_blank" rel="noopener noreferrer" className="link">{t("context.intro.content.1")}</a>
							</TooltipTrigger>
							<TooltipContent>
								{t("context.intro.tooltip")}
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>{t("context.intro.content.2")}
					<br />
					{t("context.intro.content.3")}
					<br />
					{t("context.intro.content.4")}<a className="link" href="https://qbox-project.github.io/" target="_blank" rel="noopener noreferrer">{t("context.intro.content.5")}</a>.
				</p>

				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>
							<h3 className="text-xl font-semibold mb-4">
								{t("context.qbox.title")}
							</h3>
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-lg mb-8 ml-8">
								{t("context.qbox.content.0.0")}<TooltipProvider>
									<Tooltip>
										<TooltipTrigger className="underline decoration-dotted">
											{t("context.qbox.content.0.1")}<sup><a href="#footnote-2" className="link">2</a></sup>
										</TooltipTrigger>
										<TooltipContent>
											{t("context.qbox.content.0.2")}
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>{t("context.qbox.content.0.3")}
								<br />
								{t("context.qbox.content.1.0")}<TooltipProvider>
									<Tooltip>
										<TooltipTrigger className="underline decoration-dotted">
											{t("context.qbox.content.1.1")}<sup><a href="#footnote-3" className="link">3</a></sup>
										</TooltipTrigger>
										<TooltipContent>
											{t("context.qbox.content.1.2")}
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>{t("context.qbox.content.1.3")}
							</p>
							<p className="text-lg mb-8 ml-8">
								{t("context.qbox.content.2")}
								<br />
								{t("context.qbox.content.3")}<sup><a href="#footnote-1" className="link">1</a></sup>{t("context.qbox.content.4")}
								<br />
								{t("context.qbox.content.5")}
							</p>
							<p className="text-lg mb-8 ml-8">
								{t("context.qbox.content.6")}<span className="italic text-sm">{t("context.qbox.content.7")}</span>
							</p>
							<p className="text-lg mb-8 ml-8">
								{t("context.qbox.content.8")}
								<br />
								{t("context.qbox.content.9")}<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											{t("context.qbox.content.10")}
										</TooltipTrigger>
										<TooltipContent>
											{t("context.qbox.content.11")}
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</p>
							<Separator className="my-2 w-[50%]" />
							<ol className="list-decimal pl-5 space-y-4">
								<li id="footnote-1" className="text-md mb-4">
									<a href="https://fivem.team/" target="_blank" rel="noopener noreferrer" className="link">{t('context.footnotes.0.0')}</a>{t('context.footnotes.0.1')}
								</li>
								<li id="footnote-2" className="text-md mb-4">
									{t("context.qbox.content.0.2")}
								</li>
								<li id="footnote-3" className="text-md mb-4">
									{t("context.qbox.content.1.2")}
								</li>
							</ol>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
			<section>
				<h2 className="text-2xl font-semibold my-4">
					{t("projects.title")}
				</h2>
				<p className="text-lg mb-8 ml-8">
					{t("projects.description")}
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
									{t("projects.cta")}
								</a>
							</Button>
						</div>
					</article>
				))}
			</section>
		</main>
	)
}