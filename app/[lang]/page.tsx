import { notFound } from 'next/navigation'
import type { LangCode } from '@/lib/lang-store'
import { LANGUAGES } from '@/lib/i18n'
import IntroClient from './IntroClient'

const VALID_LANGS = new Set<string>(LANGUAGES.map((l) => l.code))

export default function IntroLangPage({
  params,
}: {
  params: { lang: string }
}) {
  if (!VALID_LANGS.has(params.lang)) notFound()

  return <IntroClient lang={params.lang as LangCode} />
}
