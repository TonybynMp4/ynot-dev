import "@/styles/globals.css";

import { type Metadata } from "next";

import { ThemeProvider } from "@/components/themeProvider"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import ClientLocaleProvider from "@/components/clientLocaleProvider";

export const metadata: Metadata = {
	title: "Ynot",
	description: "A personal portfolio website",
};

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const { locale } = params

	return (

				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<ClientLocaleProvider locale={locale}>
						<Header />
						{children}
						<Footer />
					</ClientLocaleProvider>
				</ThemeProvider>

	);
}
