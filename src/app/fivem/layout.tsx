import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Fivem",
	description: "My fiveM projects",
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
