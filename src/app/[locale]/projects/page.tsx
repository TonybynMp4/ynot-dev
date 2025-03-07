import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getScopedI18n } from "@/locales/server"

type Project = {
	title: string,
	description: string,
	tech: string[],
	date: string,
	duration: string,
	teamSize: number,
	role: string,
}

export default async function PortfolioPage() {
	const t = await getScopedI18n("portfolio")

	const projects: Project[] = [
		{
			title: t('projects.0.title'),
			description: t('projects.0.description'),
			date: t('projects.0.date'),
			duration: t('projects.0.duration'),
			role: t('projects.0.role'),
			tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Netlify"],
			teamSize: 1
		}
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
						<CardHeader>
							<CardTitle className="flex items-center justify-between">
								{project.title}
								<Badge className={project.teamSize === 1 ? "bg-primary text-secondary" : "bg-secondary text-primary"}>
									{project.teamSize === 1 ? t("projectInfo.teamSizes.solo") : t("projectInfo.teamSizes.group")}
								</Badge>
							</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent className="flex-grow">
							<p>
								<strong>{t("projectInfo.date")}:</strong> {project.date}
							</p>
							<p>
								<strong>{t("projectInfo.duration")}:</strong> {project.duration}
							</p>
							<p>
								<strong>{t("projectInfo.role")}:</strong> {project.role}
							</p>
						</CardContent>
						<CardFooter className="flex flex-wrap gap-2">
							{project.tech.map((tech, techIndex) => (
								<Badge key={techIndex} variant="secondary">
									{tech}
								</Badge>
							))}
						</CardFooter>
					</Card>
				))}
			</section>
		</main >
	)
}