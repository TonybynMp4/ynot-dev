import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { getTranslations } from "next-intl/server"
import Link from "next/link"

const cards = [
	{scope: 'portfolio', href: '/projects'},
	{scope: 'fivem', href: '/fivem'}
] as const

export default async function Home() {
	const t = await getTranslations("home")

	return (
		<main className="min-h-[80vh] mx-auto py-16 flex flex-col items-center justify-center gap-16 bg-gradient-to-br to-60% from-[#EF935A] to-[#15162c] ">
			<section className="text-center mx-4 lg:mx-0 text-white">
				<h1 className="font-bold mb-4" id="Ynot">
					Ynot
				</h1>
				<h2 className="text-2xl font-bold mb-4">{t("title")}</h2>
				<p className="text-sm sm:text-lg mb-8 max-w-2xl">
					{t("subtitle.text.0")}
					(
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Link href="/fivem" className="underline italic text-primary/80">{t("subtitle.text.1")}</Link>
							</TooltipTrigger>
							<TooltipContent>
								{t("subtitle.tooltip")}
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					) {t("subtitle.text.2")}
					<br />
					&ldquo;{t("subtitle.text.3")}&rdquo;
				</p>
				<Button asChild>
					<Link href="/projects">{t("cta")}</Link>
				</Button>
			</section>

			<section className="max-w-3xl bg-background/80 rounded-xl p-2 lg:p-4 mx-4 lg:mx-0">
				<h2 className="text-2xl font-semibold mb-4">{t("cards.title")}</h2>
				<div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
					{
						cards.map(({scope, href}, key) => (
							<Card key={key}>
								<CardHeader>
									<CardTitle>{t(`cards.${scope}.title`)}</CardTitle>
									<CardDescription>{t(`cards.${scope}.description`)}</CardDescription>
								</CardHeader>
								<CardFooter>
									<Button asChild variant="outline">
										<Link href={href}>{t(`cards.${scope}.cta`)}</Link>
									</Button>
								</CardFooter>
							</Card>
						))
					}
				</div>
			</section>
		</main>
	)
}