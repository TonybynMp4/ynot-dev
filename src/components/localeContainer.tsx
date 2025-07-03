import { NextIntlClientProvider, useMessages} from "next-intl";

export default function LocaleContainer({
	children,
}: {
	children?: React.ReactNode;
}) {
	const messages = useMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	)
}