import { env } from '@/env';
import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { type MetadataRoute } from 'next';
import { type Locale } from 'next-intl';

// Adapt this as necessary
const host = env.NEXT_PUBLIC_BASE_URL || 'https://y-not.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  // Adapt this as necessary
  return [...getEntries('/')];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      )
    }
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({locale, href});
  return host + pathname;
}