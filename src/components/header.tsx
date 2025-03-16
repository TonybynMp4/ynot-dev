import { ThemeSelector } from "./themeSelector"
import { Separator } from "./ui/separator"
import { LocaleSelector } from "./localeSelector"
import HeaderLink from "./headerLink";
import { Gamepad2Icon, HomeIcon, ListCheckIcon } from "lucide-react";

export async function Header() {
	return (
		<header className="flex justify-between bg-none space-x-4 items-center py-4 px-2 text-xs sm:text-base border-b border-primary">
			<nav className="flex space-x-2 sm:space-x-4 items-center ml-2 sm:ml-8">
				<HeaderLink localeKey="home" path="/">
					<HomeIcon />
				</HeaderLink>
				<Separator decorative orientation="vertical" className="h-3" />
				<HeaderLink localeKey="projects" path="/projects">
					<ListCheckIcon />
				</HeaderLink>
				<Separator decorative orientation="vertical" className="h-3" />
				<HeaderLink localeKey="fivem" path="/fivem">
					<Gamepad2Icon />
				</HeaderLink>
			</nav>
			<div className="flex space-x-2 items-center mr-2 sm:mr-8">
				<ThemeSelector />
				<Separator decorative orientation="vertical" className="h-5" />
				<LocaleSelector />
			</div>
		</header>
	)
}