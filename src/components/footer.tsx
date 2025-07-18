import { Link } from "@/i18n/navigation";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function Footer() {
	const t = await getTranslations("footer")

	return (
		<footer className="bg-background border-t border-primary">
			<div className="container mx-auto py-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p>&copy; {new Date().getFullYear()} Ynot. {t("copyright")}</p>
					</div>
					<div className="flex space-x-4">
						<Link href="https://github.com/TonybynMp4" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
							<GithubIcon className="w-6 h-6" />
						</Link>
						<Link href="https://linkedin.com/in/antonyBouyon" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
							<LinkedinIcon className="w-6 h-6" />
						</Link>
						<Link href="https://x.com/Ynaugt" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
							<TwitterIcon className="w-6 h-6" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}