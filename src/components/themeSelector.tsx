"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useScopedI18n } from "@/locales/client"
import {Fragment} from "react"

const options = [
	"light",
	"dark",
	"system"
] as const

export function ThemeSelector() {
	const { setTheme } = useTheme()
	const t = useScopedI18n("header.theme")

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">{t("sr_toggle")}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{options.map((option, k) => (
					<Fragment key={k}>
						<DropdownMenuItem key={option} onClick={() => setTheme(option)}>
							{t(option)}
						</DropdownMenuItem>
						{
							k < options.length - 1 && <DropdownMenuSeparator />
						}
					</Fragment>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

