import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getScopedI18n } from "@/locales/server"
import { CalendarIcon, ClockIcon, GithubIcon, User2Icon, UserCircle, UserCircle2, UserCircleIcon, UsersIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Project = {
	title: string,
	description: string,
	tech: string[],
	date: string,
	duration: string,
	teamSize: number,
	role: string,
	github: string,
	postId?: number
}

export default async function PortfolioPage() {
	const t = await getScopedI18n("portfolio")

	const projects: Project[] = [
		{
			title: t('projects.1.title'),
			description: t('projects.1.description'),
			date: t('projects.1.date'),
			duration: t('projects.1.duration'),
			role: t('projects.1.role'),
			tech: ["Express.js", "Vue", "Tailwind CSS", "TypeScript", "Netlify", "MySQL"],
			teamSize: 4,
			github: "https://github.com/TonybynMp4/InstaFlop"
		},
		{
			title: t('projects.0.title'),
			description: t('projects.0.description'),
			date: t('projects.0.date'),
			duration: t('projects.0.duration'),
			role: t('projects.0.role'),
			tech: ["Next.js", "React", "Tailwind CSS", "Netlify", "TypeScript"],
			teamSize: 1,
			github: "https://github.com/TonybynMp4/ynot-dev"
		},
		{
			title: t('projects.2.title'),
			description: t('projects.2.description'),
			date: t('projects.2.date'),
			duration: t('projects.2.duration'),
			role: t('projects.2.role'),
			tech: ["PHP", "Symfony"],
			teamSize: 4,
			github: "https://github.com/TonybynMp4/VaultPay"
		},
		{
			title: t('projects.3.title'),
			description: t('projects.3.description'),
			date: t('projects.3.date'),
			duration: t('projects.3.duration'),
			role: t('projects.3.role'),
			tech: ["PHP", "Alpine JS", "MySQL", "Markdown"],
			teamSize: 1,
			github: "https://github.com/TonybynMp4/EfreiNews"
		},
		{
			title: t('projects.4.title'),
			description: t('projects.4.description'),
			date: t('projects.4.date'),
			duration: t('projects.4.duration'),
			role: t('projects.4.role'),
			tech: ["Java"],
			teamSize: 1,
			github: "https://github.com/TonybynMp4/Java-RPG-Game"
		},
		{
			title: t('projects.5.title'),
			description: t('projects.5.description'),
			date: t('projects.5.date'),
			duration: t('projects.5.duration'),
			role: t('projects.5.role'),
			tech: ["PHP", "Mysql", "JavaScript", "HTML", "CSS"],
			teamSize: 1,
			github: "https://github.com/TonybynMp4/PixelParts"
		},
		{
			title: t('projects.6.title'),
			description: t('projects.6.description'),
			date: t('projects.6.date'),
			duration: t('projects.6.duration'),
			role: t('projects.6.role'),
			tech: ["HTML", "CSS"],
			teamSize: 3,
			github: "https://github.com/TonybynMp4/LesDunes"
		},
	]

	return (
		<main className="min-h-[80vh] mx-auto max-w-[80%] flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
			<p className="text-lg mb-8 max-w-2xl">
				{t("description")}
			</p>
			<section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<Card key={index} className="flex flex-col">
						<CardHeader className="pb-2">
							<CardTitle className="flex items-center justify-between">
								{project.title}
								<Badge className={project.teamSize === 1 ? "bg-primary text-secondary" : "bg-secondary text-primary"}>
									{project.teamSize === 1 ? t("projectInfo.teamSizes.solo") : t("projectInfo.teamSizes.group")}
								</Badge>
							</CardTitle>
							<CardDescription className="flex items-center gap-2 text-sm">
								<CalendarIcon className="h-4 w-4" />
								{project.date}
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-2">
							<p className="text-muted-foreground">{project.description}</p>
							<div className="flex items-center gap-2">
								<span><ClockIcon /></span>{project.duration}
							</div>
							<div className="flex items-center gap-2">
								<span><UserCircle /></span>{project.role}
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, techIndex) => (
									<Badge key={techIndex} variant="secondary" className="rounded-full">
										{tech}
									</Badge>
								))}
							</div>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline" size="sm" asChild>
								<Link href={project.github} target="_blank" rel="noopener noreferrer">
									<GithubIcon className="h-4 w-4 mr-2" />
									GitHub
								</Link>
							</Button>
							{project.postId && (
								<Button variant="secondary" size="sm" asChild>
									<Link href={`/blog/${project.postId}`}>View Case Study</Link>
								</Button>
							)}
						</CardFooter>
					</Card>
				))}
			</section>
		</main >
	)
}