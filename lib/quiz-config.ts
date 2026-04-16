import type { LangCode } from './lang-store'

// ─── BRAND ────────────────────────────────────────────────────────────────────
export const BRAND_NAMES: Record<LangCode, string> = {
  en: 'Zero Carbs Challenge',
  lt: 'Zero Carbs Challenge',
  lv: 'Zero Carbs Challenge',
  ro: 'Zero Carbs Challenge',
  cz: 'Zero Carbs Challenge',
  dk: 'Zero Carbs Challenge',
  gr: 'Zero Carbs Challenge',
  hu: 'Zero Carbs Challenge',
  hr: 'Zero Carbs Challenge',
  il: 'Zero Carbs Challenge',
  jp: 'Zero Carbs Challenge',
  ru: 'Zero Carbs Challenge',
  sk: 'Zero Carbs Challenge',
  tw: 'Zero Carbs Challenge',
}
export const BRAND_APP_NAME = 'Zero Carbs Challenge'
export const BRAND_SUPPORT_EMAIL = 'hello@zercarbs.com'

// ─── LANGUAGES ────────────────────────────────────────────────────────────────
export const ACTIVE_LANGUAGES: { code: LangCode; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
  { code: 'lv', label: 'Latviešu', flag: '🇱🇻' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
  { code: 'cz', label: 'Čeština', flag: '🇨🇿' },
  { code: 'dk', label: 'Dansk', flag: '🇩🇰' },
  { code: 'gr', label: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'hu', label: 'Magyar', flag: '🇭🇺' },
  { code: 'hr', label: 'Hrvatski', flag: '🇭🇷' },
  { code: 'il', label: 'עברית', flag: '🇮🇱' },
  { code: 'jp', label: '日本語', flag: '🇯🇵' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'sk', label: 'Slovenčina', flag: '🇸🇰' },
  { code: 'tw', label: '繁體中文', flag: '🇹🇼' },
]

// ─── URLS ─────────────────────────────────────────────────────────────────────
const BASE = 'https://www.zerocarbsplan.app'

export const QUIZ_URLS = {
  privacyPolicy:      (lang: string) => `${BASE}/${lang}-carb-privacy-policy`,
  termsOfService:     (lang: string) => `${BASE}/${lang}-carbs-terms-of-services`,
  cookiePolicy:       (lang: string) => `${BASE}/${lang}-carbs-cookie-policy`,
  moneyBackGuarantee: (lang: string) => `${BASE}/${lang}-carbs-money-back-guarantee`,
  subscriptionTerms:  (lang: string) => `${BASE}/${lang}-carbs-subscription-terms`,
  checkout: (lang: string, slug: string, planId: string) =>
    `${BASE}/${lang}-carbs-${slug}-${planId}`,
} as const

// ─── PAGE META ────────────────────────────────────────────────────────────────
export const PAGE_META = {
  title: 'Personalized Zero Carbs Challenge — Lose Weight in 28 Days',
  description: 'A simple, personalized plan to reduce cravings, detox your body and lose weight.',
} as const

// ─── RESULT PAGE ──────────────────────────────────────────────────────────────
// Zercarb uses WeightChart — no profile field cards needed
export const RESULT_PROFILE_FIELDS: Array<{
  key: string; label: string; stepIndex: number; icon: string
}> = []

// ─── VISUAL THEME ─────────────────────────────────────────────────────────────
export const THEME = {
  primaryColor:   '#232d43',
  primaryPale:    '#e9ecf2',
  backgroundColor:'#f8f7f4',
  cardColor:      '#eeecea',
  borderColor:    '#e4e2dd',
  textColor:      '#1a1a18',
  textSecondary:  '#a0a09a',
  errorColor:     '#e05555',
  successColor:   '#4dbf7a',
  radiusCard:     '12px',
  radiusBtn:      '8px',
  fontFamily:     'Inter',
} as const
