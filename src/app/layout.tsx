import "@/styles/globals.css";

import { type Metadata } from "next";
import {getLocale} from 'next-intl/server';

import { ThemeProvider } from "@/components/themeProvider"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
export const metadata: Metadata = {
	title: {
		default: "Ynot",
		template: "Ynot | %s"
	},
    keywords: [
		"Ynot", "Y-not", "dev", "portfolio", "projects", "web development", "software development", "developer", "full stack development", "frontend development", "backend development", "full stack", "frontend", "backend", "Développeur", "javascript", "typescript", "react", "next.js", "node.js", "express", "MySQL", "postgresql", "sql", "database", "api", "rest api", "css", "html", "tailwind",
	],
	description: "Ynot's portfolio",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();

	return (
		<html lang={locale}>
			<head>
				<meta name="google-site-verification" content="v7ACOTonya3IyLeyDbTJERuNPGL98r4f4l6vozdSa3g" />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
