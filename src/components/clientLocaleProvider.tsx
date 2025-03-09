"use client"

import { I18nProviderClient } from '@/locales/client'
import { type ReactNode } from 'react'

export default function ClientLocaleProvider(
{
	locale,
	children
} : {
	locale: string;
	children: ReactNode;
}) {
	return (
		<I18nProviderClient locale={locale}>
			{children}
		</I18nProviderClient>
	)
}