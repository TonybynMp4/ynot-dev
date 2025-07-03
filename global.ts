import { locales } from '@/i18n/config';
import fr from '@/i18n/locales/fr';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof fr;
  }
}