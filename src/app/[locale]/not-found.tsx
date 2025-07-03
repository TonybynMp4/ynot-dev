import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
	return (
		<main>
			<section className="flex flex-col items-center gap-6 py-[30vh] mx-4">
				<div
					className="flex flex-wrap items-center bg-background text-primary justify-center gap-4"
				>
					<h1 className="text-3xl md:text-4xl font-bold text-center flex items-center">
						404
					</h1>
					<p className="border-l-4 border-destructive pl-4 text-lg">
						This page could not be found.
					</p>
				</div>
				<Button asChild variant="outline" className="mt-4">
					<Link href="/" className="flex items-center gap-2">
						<ArrowLeftIcon /> Retour à l&apos;accueil
					</Link>
				</Button>
			</section>
		</main>
	);
}
