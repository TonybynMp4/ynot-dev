import { ThemeSelector } from "./themeSelector"
import { Separator } from "./ui/separator"
import { LocaleSelector } from "./localeSelector"
import HeaderLink from "./headerLink";

export async function Header() {
	return (
		<header className="container py-4 bg-none flex justify-between space-x-4 items-center px-2 mx-auto text-xs sm:text-base">
			<nav className="flex space-x-2 sm:space-x-4 items-center">
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