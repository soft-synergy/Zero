'use client'

import { createContext, useContext } from 'react'
import type { LangCode } from '@/lib/lang-store'

type OverridesByLang = Partial<Record<LangCode, Record<string, string>>>

const TranslationOverridesContext = createContext<OverridesByLang>({})

export function TranslationOverridesProvider({
  value,
  children,
}: {
  value: OverridesByLang
  children: React.ReactNode
}) {
  return (
    <TranslationOverridesContext.Provider value={value}>
      {children}
    </TranslationOverridesContext.Provider>
  )
}

export function useInitialTranslationOverrides(lang: LangCode): Record<string, string> {
  const ctx = useContext(TranslationOverridesContext)
  return ctx[lang] ?? {}
}
