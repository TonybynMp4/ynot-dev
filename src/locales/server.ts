import { createI18nServer } from 'next-international/server'

export const { getCurrentLocale, getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import('./dictionaries/en'),
  fr: () => import('./dictionaries/fr')
})