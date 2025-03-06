import { ThemeSelector } from "./themeSelector"
import { Separator } from "./ui/separator"
import { LocaleSelector } from "./localeSelector"
import HeaderLink from "./headerLink";

export async function Header() {
	return (
		<header className="container mx-auto py-4 bg-none flex justify-between items-center">
			<nav className="flex space-x-4 items-center">
				<HeaderLink localeKey="home" path="/" />
				<Separator decorative orientation="vertical" className="h-3" />
				<HeaderLink localeKey="projects" path="/projects" />
				<Separator decorative orientation="vertical" className="h-3" />
				<HeaderLink localeKey="fivem" path="/fivem" />
			</nav>
			<div className="flex space-x-2 items-center">
				<ThemeSelector />
				<Separator decorative orientation="vertical" className="h-5" />
				<LocaleSelector />
			</div>
		</header>
	)
}