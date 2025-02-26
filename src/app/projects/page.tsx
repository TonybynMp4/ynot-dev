import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Project = {
	title: string,
	description: string,
	tech: string[],
	date: string,
	duration: string,
	teamSize: number,
	role: string,
}

const projects: Project[] = [
	{
		title: "Portfolio Website",
		description: "Well, this website!",
		tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Netlify"],
		date: "February 2025",
		duration: "1 whole night (for now lol)",
		teamSize: 1,
		role: "Full-stack Engineer, Designer, Team Lead"
	},
]

export default function ProjectsPage() {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-6">My Projects</h1>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<Card key={index} className="flex flex-col">
						<CardHeader>
							<CardTitle className="flex items-center justify-between">
								{project.title}
								<Badge className={project.teamSize === 1 ? "bg-primary text-secondary" : "bg-secondary text-primary"}>
									{project.teamSize === 1 ? "Solo" : "Group"}
								</Badge>
							</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent className="flex-grow">
							<p>
								<strong>Date:</strong> {project.date}
							</p>
							<p>
								<strong>Duration:</strong> {project.duration}
							</p>
							<p>
								<strong>My Role:</strong> {project.role}
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
			</div>
		</div>
	)
}