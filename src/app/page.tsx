"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export default function Home() {
	return (
		<main className="min-h-[80vh] mx-auto max-w-[80%] flex flex-col items-center justify-center gap-16">
			<section className="text-center">
				<h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio!</h1>
				<p className="text-xl mb-8 max-w-2xl">
					I&apos;m a student full-stack developer and (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Link href="/fivem" className="underline italic text-primary/80">used to be at least</Link>
							</TooltipTrigger>
							<TooltipContent>
								I was until ~May 2024, click to learn more.
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					) FiveM developer.
					<br />
					I build stuff.. I guess.
				</p>
				<Button asChild>
					<Link href="/projects">View My Projects</Link>
				</Button>
			</section>

			<section className="w-full max-w-4xl bg-background/80 rounded-xl p-8">
				<h2 className="text-2xl font-semibold mb-4">Explore My Work</h2>
				<div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
					<Card>
						<CardHeader>
							<CardTitle>Portfolio</CardTitle>
							<CardDescription>Discover my latest projects and learn more about what i can do.</CardDescription>
						</CardHeader>
						<CardFooter>
							<Button asChild variant="outline">
								<Link href="/projects">View Projects</Link>
							</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>FiveM Work</CardTitle>
							<CardDescription>Explore my work on the FiveM platform and learn more about my projects.</CardDescription>
						</CardHeader>
						<CardFooter>
							<Button asChild variant="outline">
								<Link href="/fivem">FiveM Projects</Link>
							</Button>
						</CardFooter>
					</Card>
				</div>
			</section>
		</main>
	)
}