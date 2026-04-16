'use client'

import { useEffect } from 'react'
import { useLangStore, type LangCode } from '@/lib/lang-store'

export default function SyncLangFromUrl({ lang }: { lang: LangCode }) {
  const storeLang = useLangStore((s) => s.lang)
  const setLang = useLangStore((s) => s.setLang)

  useEffect(() => {
    if (storeLang !== lang) {
      setLang(lang)
    }
  }, [lang, storeLang, setLang])

  return null
}
