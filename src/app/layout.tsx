import "@/styles/globals.css";

import { type Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

import { ThemeProvider } from "@/components/themeProvider"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
export const metadata: Metadata = {
	title: "Ynot",
	description: "A personal portfolio website",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<NextIntlClientProvider messages={messages}>
						<Header />
						{children}
						<Footer />
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
