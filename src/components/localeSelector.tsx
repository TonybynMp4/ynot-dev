"use client"
import { GlobeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useChangeLocale, useScopedI18n } from "@/locales/client"

export function LocaleSelector() {
	const changeLocale = useChangeLocale()
	const t = useScopedI18n("header.locale")

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">{t('sr_toggle')}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => changeLocale('en')}>English</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => changeLocale('fr')}>Français</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

