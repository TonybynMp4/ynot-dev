"use client"

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function HeaderLink({
	children,
	localeKey,
	path
}: {
	children?: React.ReactNode;
	localeKey: "home" | "projects" | "fivem";
	path: string;
}) {
	const pathname = usePathname();
	const t = useTranslations("header.nav");
	const isActive = pathname === path;

	return (
		<div>
			<Link
				href={path}
				className={`text-foreground hover:text-primary/50 hidden sm:block ${isActive ? "text-primary" : ""}`}
				>
					{t(localeKey)}
			</Link>
			<Link
				href={path}
				className={`text-foreground hover:text-primary/50 block sm:hidden ${isActive ? "text-primary" : ""}`}
			>
				{children}
			</Link>
		</div>
	)
}