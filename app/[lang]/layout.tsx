import { notFound } from 'next/navigation'
import { TranslationOverridesProvider } from '@/components/TranslationOverridesProvider/TranslationOverridesProvider'
import SyncLangFromUrl from '@/components/SyncLangFromUrl/SyncLangFromUrl'
import { VALID_LANGS, getRuntimeTranslations } from '@/lib/admin/translation-source'
import type { LangCode } from '@/lib/lang-store'

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!VALID_LANGS.includes(lang as LangCode)) {
    notFound()
  }

  const langCode = lang as LangCode
  const initialOverrides = getRuntimeTranslations(langCode)

  return (
    <TranslationOverridesProvider value={{ [langCode]: initialOverrides }}>
      <SyncLangFromUrl lang={langCode} />
      {children}
    </TranslationOverridesProvider>
  )
}
