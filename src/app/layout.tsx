import "@/styles/globals.css";

import { type Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
	title: "Ynot",
	description: "A personal portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
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
