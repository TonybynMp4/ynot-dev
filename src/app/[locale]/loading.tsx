import { LoaderIcon } from "lucide-react";

export default function Loading() {
	return (
		<main className="flex items-center justify-center h-screen">
			<LoaderIcon className="h-12 w-12 animate-spin animation-duration-1750" />
			<p className="ml-4 text-2xl text-muted-foreground">Chargement...</p>
		</main>
	);
}
