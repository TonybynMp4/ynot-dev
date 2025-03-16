import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "My portfolio of projects",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		children
	);
}
