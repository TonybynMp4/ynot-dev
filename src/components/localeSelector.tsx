"use client"
import { GlobeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"
import { setUserLocale } from "@/i18n/localeService"

export function LocaleSelector() {
	const t = useTranslations("header.locale")

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">{t('sr_toggle')}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setUserLocale('en')}>English</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => setUserLocale('fr')}>Français</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

