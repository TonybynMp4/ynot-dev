"use client"

import { useScopedI18n } from "@/locales/client";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function HeaderLink({
	localeKey,
	path
}: {
	localeKey: "home" | "projects" | "fivem";
	path: string;
}) {
	const pathname = usePathname();
	const t = useScopedI18n("header.nav");

	const isActive = pathname === path;

	return (
		<Link
			href={path}
			className={`text-foreground hover:text-primary/50 ${isActive ? "text-primary" : ""}`}
		>
			{t(localeKey)}
		</Link>
	)
}