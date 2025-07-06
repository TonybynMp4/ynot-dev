import "@/styles/globals.css";

import { type Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/themeProvider";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
export const metadata: Metadata = {
	title: {
		default: "Ynot",
		template: "Ynot | %s"
	},
	icon: {
		icon: "/favicon.ico",
	},
	category: "portfolio",
    keywords: [
		"Ynot", "Y-not", "dev", "portfolio", "projects", "web development", "software development", "developer", "full stack development", "frontend development", "backend development", "full stack", "frontend", "backend", "Développeur", "javascript", "typescript", "react", "next.js", "node.js", "express", "MySQL", "postgresql", "sql", "database", "api", "rest api", "css", "html", "tailwind",
	],
	description: "Ynot's portfolio",
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params
}: Readonly<{ children: React.ReactNode, params: Promise<{ locale: string }> }>) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<meta name="google-site-verification" content="v7ACOTonya3IyLeyDbTJERuNPGL98r4f4l6vozdSa3g" />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<NextIntlClientProvider>
						<Header />
						{children}
						<Footer />
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
