"use client"
import { GlobeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { localeLabels, locales } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function LocaleSelector() {
	const t = useTranslations("header.locale")
	const router = useRouter();
	const pathname = usePathname();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="hover:border-primary">
					<GlobeIcon className="size-[1.2rem]" />
					<span className="sr-only">{t('sr_toggle')}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{locales.map((locale) => (
					<DropdownMenuItem key={locale} onClick={() => router.replace(pathname, {locale})}>
						{localeLabels[locale] || locale}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}