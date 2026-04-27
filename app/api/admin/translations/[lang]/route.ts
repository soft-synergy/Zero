import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import type { LangCode } from '@/lib/lang-store'
import {
  VALID_LANGS,
  serializeAll,
  getAllSerializedTranslations,
  getRuntimeTranslations,
  writeRuntimeTranslations,
  writeTranslationSources,
} from '@/lib/admin/translation-source'

const DATA_DIR = path.join(process.cwd(), 'translations-data')
const INTRO_VISIBLE_KEYS = new Set<string>([
  'intro.headline',
  'intro.subheadline',
  'intro.choose_label',
  'intro.select_language',
  'intro.gender_men',
  'intro.gender_women',
  'intro.footer_manage',
  'intro.footer_about',
  'intro.footer_help',
  'intro.footer_privacy',
  'intro.footer_conditions',
  'intro.footer_disclaimer',
  'intro.footer_copy',
  'intro.footer_app_store_over',
  'intro.footer_app_store_main',
  'intro.footer_google_play_over',
  'intro.footer_google_play_main',
])

const UI_VISIBLE_KEYS = new Set<string>([
  'ui.continue',
  'ui.skip',
  'ui.go_back',
  'ui.quiz_progress',
])

const RESULT_VISIBLE_KEYS = new Set<string>([
  'result.header_label',
  'result.headline',
  'result.subtitle',
  'result.guide_text',
  'result.goal_line',
  'result.cta',
])

const RESULTS28_VISIBLE_KEYS = new Set<string>([
  'results28.header_label',
  'results28.headline',
])

const WELLNESS_VISIBLE_KEYS = new Set<string>([
  'wellness.header_label',
  'wellness.headline',
  'wellness.lifestyle_label',
  'wellness.eater_label',
  'wellness.motivation_label',
  'wellness.img_alt',
  'wellness.bmi_normal_msg',
  'wellness.bmi_overweight_msg',
  'wellness.bmi_obese_msg',
  'wellness.lifestyle.sedentary',
  'wellness.lifestyle.light',
  'wellness.lifestyle.moderate',
  'wellness.lifestyle.active',
  'wellness.eater.balanced',
  'wellness.eater.sweet',
  'wellness.eater.salty',
  'wellness.eater.emotional',
  'wellness.motivation.high',
  'wellness.motivation.moderate',
  'wellness.motivation.low',
])

const LOADING_VISIBLE_PREFIXES = ['loading.header_label', 'loading.title', 'loading.reviews.']

const EMAIL_VISIBLE_KEYS = new Set<string>([
  'email.header_label',
  'email.headline',
  'email.placeholder',
  'email.clear_aria',
  'email.consent_prefix',
  'email.consent_link',
  'email.consent_suffix',
  'email.cta',
  'email.privacy_note',
  // Used by non-[lang] email route, keep editable.
  'email.email_label',
  'email.privacy_link',
])

const PAYWALL_VISIBLE_PREFIXES = [
  'paywall.phoneMealTag',
  'paywall.phoneMealTitle',
  'paywall.phoneMealMeta',
  'paywall.phoneIngredientsTab',
  'paywall.phoneNutritionTab',
  'paywall.phoneIngredient1',
  'paywall.phoneIngredient1Qty',
  'paywall.phoneIngredient2',
  'paywall.phoneIngredient2Qty',
  'paywall.phoneIngredient3',
  'paywall.phoneIngredient3Qty',
  'paywall.phoneIngredient4',
  'paywall.phoneIngredient4Qty',
  'paywall.bodyFatHigh',
  'paywall.bodyFatLow',
  'paywall.bodyFatNormal',
  'paywall.fitnessLevelBeginner',
  'paywall.fitnessLevelAdvanced',
  'paywall.fitnessLevelIntermediate',
  'paywall.cta',
  'paywall.stickyTimerLabel',
  'paywall.stickyMinutesLabel',
  'paywall.stickySecondsLabel',
  'paywall.beforeLabel',
  'paywall.afterLabel',
  'paywall.bodyFatLabel',
  'paywall.fitnessLevelLabel',
  'paywall.pageTitle',
  'paywall.pageSub',
  'paywall.choosePlanAria',
  'paywall.plans.',
  'paywall.secretGiftPill',
  'paywall.savingsText',
  'paywall.trustSecureCheckout',
  'paywall.trustCancelAnytime',
  'paywall.trustInstantAccess',
  'paywall.secretGiftLead',
  'paywall.secretGiftTitle',
  'paywall.secretGiftBody',
  'paywall.whatYouGet',
  'paywall.features.',
  'paywall.ratingsHeadline',
  'paywall.ratingsSubline',
  'paywall.ratingsAppStore',
  'paywall.ratingsPlayStore',
  'paywall.ratingsQuote',
  'paywall.ratingsQuoteSource',
  'paywall.storiesHeading',
  'paywall.storiesSubheading',
  'paywall.stories.',
  'paywall.verifiedCustomer',
  'paywall.giftSectionTitle',
  'paywall.giftSectionHighlight',
  'paywall.giftSectionWorth',
  'paywall.giftSectionBody',
  'paywall.guaranteeTitle',
  'paywall.guaranteeBody',
  'paywall.guaranteePrefix',
  'paywall.guaranteeLinkLabel',
  'paywall.footerLanguageLabel',
  'paywall.footer',
]

function hasAllowedPrefix(key: string, prefixes: string[]): boolean {
  return prefixes.some((prefix) => key.startsWith(prefix))
}

function filterEditableTranslations(flat: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(flat).filter(([key]) => {
      if (key.startsWith('intro.')) return INTRO_VISIBLE_KEYS.has(key)
      if (key.startsWith('ui.')) return UI_VISIBLE_KEYS.has(key)
      if (key.startsWith('result.')) return RESULT_VISIBLE_KEYS.has(key)
      if (key.startsWith('results28.')) return RESULTS28_VISIBLE_KEYS.has(key)
      if (key.startsWith('wellness.')) return WELLNESS_VISIBLE_KEYS.has(key)
      if (key.startsWith('loading.')) return hasAllowedPrefix(key, LOADING_VISIBLE_PREFIXES)
      if (key.startsWith('email.')) return EMAIL_VISIBLE_KEYS.has(key)
      if (key.startsWith('paywall.')) return hasAllowedPrefix(key, PAYWALL_VISIBLE_PREFIXES)
      return true
    })
  )
}

function isAuthed(req: NextRequest): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'admin'
  const authHeader = req.headers.get('x-admin-token')
  if (authHeader === adminPassword) return true
  const token = req.cookies.get('admin_token')?.value
  return token === adminPassword
}

export interface HistoryEntry {
  filename: string
  timestamp: string
  author: string
  changeCount: number
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ lang: string }> }) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { lang } = await params
  if (!VALID_LANGS.includes(lang as LangCode)) {
    return NextResponse.json({ error: 'Invalid language' }, { status: 400 })
  }

  const langCode = lang as LangCode
  const enTranslationsFull = serializeAll('en')
  const currentTranslationsFull = langCode === 'en' ? enTranslationsFull : getRuntimeTranslations(langCode)
  const enTranslations = filterEditableTranslations(enTranslationsFull)
  const currentTranslations = filterEditableTranslations(currentTranslationsFull)

  const historyDir = path.join(DATA_DIR, 'history', langCode)
  const history: HistoryEntry[] = []
  if (fs.existsSync(historyDir)) {
    const files = fs.readdirSync(historyDir).filter((f) => f.endsWith('.json')).sort().reverse()
    for (const file of files) {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(historyDir, file), 'utf-8'))
        history.push({
          filename: file.replace('.json', ''),
          timestamp: data.timestamp ?? file.replace('.json', ''),
          author: data.author ?? 'Unknown',
          changeCount: Array.isArray(data.changes) ? data.changes.length : 0,
        })
      } catch {
        // skip malformed entries
      }
    }
  }

  return NextResponse.json({
    en: enTranslations,
    current: currentTranslations,
    overrides: null,
    history,
  })
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ lang: string }> }) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { lang } = await params
  if (!VALID_LANGS.includes(lang as LangCode)) {
    return NextResponse.json({ error: 'Invalid language' }, { status: 400 })
  }

  const body = await req.json().catch(() => ({}))
  const { overrides, author, changes } = body as {
    overrides: Record<string, string>
    author: string
    changes: Array<{ key: string; oldValue: string; newValue: string }>
  }

  if (!overrides || typeof overrides !== 'object') {
    return NextResponse.json({ error: 'Missing translation payload' }, { status: 400 })
  }

  const langCode = lang as LangCode
  const timestamp = new Date().toISOString()
  const expected = filterEditableTranslations(serializeAll(langCode))
  const sanitizedOverrides = filterEditableTranslations(overrides)
  const missingKeys = Object.keys(expected).filter((key) => !(key in sanitizedOverrides))
  if (missingKeys.length > 0) {
    return NextResponse.json(
      {
        error: `Incomplete translation payload: missing ${missingKeys.length} keys`,
        missingKeys: missingKeys.slice(0, 20),
      },
      { status: 400 }
    )
  }

  try {
    const flatByLang = getAllSerializedTranslations()
    const currentRuntime = getRuntimeTranslations(langCode)
    const mergedOverrides = {
      ...flatByLang[langCode],
      ...sanitizedOverrides,
    }
    const mergedRuntime = {
      ...currentRuntime,
      ...sanitizedOverrides,
    }

    flatByLang[langCode] = mergedOverrides
    // Keep save robust even if source-sync markers changed in i18n.ts.
    // Runtime overrides are the source of truth for quiz rendering.
    try {
      writeTranslationSources(flatByLang)
    } catch {
      // no-op: continue with runtime save
    }
    writeRuntimeTranslations(langCode, mergedRuntime)

    const historyDir = path.join(DATA_DIR, 'history', langCode)
    fs.mkdirSync(historyDir, { recursive: true })
    const safeTimestamp = timestamp.replace(/[:.]/g, '-')
    fs.writeFileSync(
      path.join(historyDir, `${safeTimestamp}.json`),
      JSON.stringify({ timestamp, author, changes, overrides: mergedRuntime }, null, 2),
      'utf-8'
    )

    return NextResponse.json({ success: true, timestamp })
  } catch (error) {
    console.error('Failed to save admin translations', error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to save translations',
        cwd: process.cwd(),
      },
      { status: 500 }
    )
  }
}
