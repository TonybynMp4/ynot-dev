import { getScopedI18n } from "@/locales/server"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

export async function Footer() {
	const t = await getScopedI18n("footer")

	return (
		<footer className="bg-background border-t mt-8">
			<div className="container mx-auto py-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p>&copy; {new Date().getFullYear()} Ynot. {/* {t("copyright")} */}</p>
					</div>
					<div className="flex space-x-4">
						<Link href="https://github.com/TonybynMp4" target="_blank" rel="noopener noreferrer">
							<GithubIcon className="w-6 h-6" />
						</Link>
						<Link href="https://linkedin.com/in/antonyBouyon" target="_blank" rel="noopener noreferrer">
							<LinkedinIcon className="w-6 h-6" />
						</Link>
						<Link href="https://x.com/Ynaugt" target="_blank" rel="noopener noreferrer">
							<TwitterIcon className="w-6 h-6" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}