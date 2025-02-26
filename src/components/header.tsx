"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeSelector } from "./themeSelector"
import { Separator } from "./ui/separator"

export function Header() {
	const pathname = usePathname()

	return (
		<header className="container mx-auto py-4">
			<div className="flex justify-between items-center">
				<nav className="flex space-x-4">
					<Link
						href="/"
						className={`text-foreground hover:text-primary/50 ${
							pathname === "/" ? "text-primary" : ""
						}`}
					>
						Home
					</Link>
					<Separator decorative orientation="vertical" className="h-auto" />
					<Link
						href="/projects"
						className={`text-foreground hover:text-primary/50 ${
							pathname === "/projects" ? "text-primary" : ""
						}`}
					>
						Portfolio
					</Link>
					<Separator decorative orientation="vertical" className="h-auto" />
					<Link
						href="/fivem"
						className={`text-foreground hover:text-primary/50 ${
							pathname === "/fivem" ? "text-primary" : ""
						}`}
					>
						FiveM
					</Link>
				</nav>
				<ThemeSelector />
			</div>
		</header>
	)
}