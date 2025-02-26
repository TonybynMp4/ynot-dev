import "@/styles/globals.css";

import { type Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
	title: "Ynot",
	description: "A personal portfolio website",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="bg-background text-foreground">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					<main className="min-h-[80vh] mx-auto max-w-[80%]">
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
