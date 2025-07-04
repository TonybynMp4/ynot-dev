import { Spinner } from "@/components/ui/kibo-ui/spinner";

export default function Loading() {
	return (
		<main className="flex items-center justify-center h-screen">
			<Spinner variant="bars" className="size-24" />
		</main>
	);
}
