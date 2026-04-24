'use client'
import { useEffect, useState } from 'react'
import type { LangCode } from './lang-store'
import { useInitialTranslationOverrides } from '@/components/TranslationOverridesProvider/TranslationOverridesProvider'
import type { QuizStep } from './quiz-data'
import type {
  StepPageTranslations,
  ResultTranslations,
  Results28Translations,
  WellnessTranslations,
  LoadingTranslations,
} from './i18n'
import type { Review } from './reviews-data'
import type { PaywallStory } from './paywall-stories-data'

const runtimeCache: Partial<Record<LangCode, Record<string, string>>> = {}
const inFlight: Partial<Record<LangCode, Promise<Record<string, string>>>> = {}

async function loadRuntimeTranslations(lang: LangCode): Promise<Record<string, string>> {
  if (!inFlight[lang]) {
    inFlight[lang] = fetch(`/api/translations/${lang}`, {
      cache: 'no-store',
      credentials: 'same-origin',
    })
      .then(async (res) => {
        if (!res.ok) return {}
        return (await res.json()) as Record<string, string>
      })
      .catch(() => ({}))
      .finally(() => {
        delete inFlight[lang]
      })
  }

  const data = await inFlight[lang]!
  runtimeCache[lang] = data
  return data
}

export function useTranslationOverrides(lang: LangCode): Record<string, string> {
  const initialOverrides = useInitialTranslationOverrides(lang)
  const [overrides, setOverrides] = useState<Record<string, string>>(initialOverrides)

  useEffect(() => {
    let cancelled = false

    if (Object.keys(initialOverrides).length > 0) {
      runtimeCache[lang] = initialOverrides
    }

    if (runtimeCache[lang]) {
      setOverrides(runtimeCache[lang] as Record<string, string>)
    }

    void loadRuntimeTranslations(lang).then((data) => {
      if (!cancelled) setOverrides(data)
    })

    return () => {
      cancelled = true
    }
  }, [lang, initialOverrides])

  return overrides
}

// ─── Section helpers ───────────────────────────────────────────────────────

/** Flat string-only sections: intro, ui, loading, email */
export function applyFlatSection<T>(base: T, ov: Record<string, string>, prefix: string): T {
  const entries = Object.entries(ov).filter(([k]) => k.startsWith(prefix))
  if (!entries.length) return base
  return { ...(base as object), ...Object.fromEntries(entries.map(([k, v]) => [k.slice(prefix.length), v])) } as T
}

/** stepPage — has function fields */
export function applyStepPageOverrides(
  t: StepPageTranslations,
  ov: Record<string, string>
): StepPageTranslations {
  const o = (k: string) => ov[`stepPage.${k}`]
  return {
    ...t,
    bmi_checking: o('bmi_checking') ?? t.bmi_checking,
    bmi_underweight_body: o('bmi_underweight_body') ?? t.bmi_underweight_body,
    bmi_normal_body: o('bmi_normal_body') ?? t.bmi_normal_body,
    bmi_overweight_body: o('bmi_overweight_body') ?? t.bmi_overweight_body,
    bmi_obese_body: o('bmi_obese_body') ?? t.bmi_obese_body,
    goal_placeholder: o('goal_placeholder') ?? t.goal_placeholder,
    goal_weight_too_high: o('goal_weight_too_high') ?? t.goal_weight_too_high,
    goal_too_low: o('goal_too_low') ?? t.goal_too_low,
    goal_a_lot: o('goal_a_lot') ?? t.goal_a_lot,
    goal_moderate: o('goal_moderate') ?? t.goal_moderate,
    goal_small: o('goal_small') ?? t.goal_small,
    consent_text: o('consent_text') ?? t.consent_text,
    consent_privacy_link: o('consent_privacy_link') ?? t.consent_privacy_link,
    age_insight_20s_men_headline: o('age_insight_20s_men_headline') ?? t.age_insight_20s_men_headline,
    age_insight_20s_men_body: o('age_insight_20s_men_body') ?? t.age_insight_20s_men_body,
    age_insight_20s_women_headline: o('age_insight_20s_women_headline') ?? t.age_insight_20s_women_headline,
    age_insight_20s_women_body: o('age_insight_20s_women_body') ?? t.age_insight_20s_women_body,
    age_insight_30s_men_headline: o('age_insight_30s_men_headline') ?? t.age_insight_30s_men_headline,
    age_insight_30s_men_body: o('age_insight_30s_men_body') ?? t.age_insight_30s_men_body,
    age_insight_30s_women_headline: o('age_insight_30s_women_headline') ?? t.age_insight_30s_women_headline,
    age_insight_30s_women_body: o('age_insight_30s_women_body') ?? t.age_insight_30s_women_body,
    age_insight_40s_men_headline: o('age_insight_40s_men_headline') ?? t.age_insight_40s_men_headline,
    age_insight_40s_men_body: o('age_insight_40s_men_body') ?? t.age_insight_40s_men_body,
    age_insight_40s_women_headline: o('age_insight_40s_women_headline') ?? t.age_insight_40s_women_headline,
    age_insight_40s_women_body: o('age_insight_40s_women_body') ?? t.age_insight_40s_women_body,
    age_insight_50s_men_headline: o('age_insight_50s_men_headline') ?? t.age_insight_50s_men_headline,
    age_insight_50s_men_body: o('age_insight_50s_men_body') ?? t.age_insight_50s_men_body,
    age_insight_50s_women_headline: o('age_insight_50s_women_headline') ?? t.age_insight_50s_women_headline,
    age_insight_50s_women_body: o('age_insight_50s_women_body') ?? t.age_insight_50s_women_body,
    age_insight_60s_men_headline: o('age_insight_60s_men_headline') ?? t.age_insight_60s_men_headline,
    age_insight_60s_men_body: o('age_insight_60s_men_body') ?? t.age_insight_60s_men_body,
    age_insight_60s_women_headline: o('age_insight_60s_women_headline') ?? t.age_insight_60s_women_headline,
    age_insight_60s_women_body: o('age_insight_60s_women_body') ?? t.age_insight_60s_women_body,
    age_insight_70s_men_headline: o('age_insight_70s_men_headline') ?? t.age_insight_70s_men_headline,
    age_insight_70s_men_body: o('age_insight_70s_men_body') ?? t.age_insight_70s_men_body,
    age_insight_70s_women_headline: o('age_insight_70s_women_headline') ?? t.age_insight_70s_women_headline,
    age_insight_70s_women_body: o('age_insight_70s_women_body') ?? t.age_insight_70s_women_body,
    age_insight_prefix: o('age_insight_prefix')
      ? (decade: string, isMen: boolean) =>
          o('age_insight_prefix')!.replace('__DECADE__', decade).replace('__GENDER__', isMen ? 'Men' : 'Women')
      : t.age_insight_prefix,
    error_range: o('error_range')
      ? (mn: number, mx: number, u: string) =>
          o('error_range')!.replace('__MIN__', String(mn)).replace('__MAX__', String(mx)).replace('__UNIT__', u).trim()
      : t.error_range,
    bmi_underweight: o('bmi_underweight')
      ? (b: string) => o('bmi_underweight')!.replace('__BMI__', b)
      : t.bmi_underweight,
    bmi_normal: o('bmi_normal')
      ? (b: string) => o('bmi_normal')!.replace('__BMI__', b)
      : t.bmi_normal,
    bmi_overweight: o('bmi_overweight')
      ? (b: string) => o('bmi_overweight')!.replace('__BMI__', b)
      : t.bmi_overweight,
    bmi_obese: o('bmi_obese')
      ? (b: string) => o('bmi_obese')!.replace('__BMI__', b)
      : t.bmi_obese,
    char_count: o('char_count')
      ? (n: number) => o('char_count')!.replace('__N__', String(n))
      : t.char_count,
    bmi_card_title: o('bmi_card_title') ?? t.bmi_card_title,
    bmi_cat_underweight: o('bmi_cat_underweight') ?? t.bmi_cat_underweight,
    bmi_cat_normal: o('bmi_cat_normal') ?? t.bmi_cat_normal,
    bmi_cat_overweight: o('bmi_cat_overweight') ?? t.bmi_cat_overweight,
    bmi_cat_obese: o('bmi_cat_obese') ?? t.bmi_cat_obese,
    bmi_healthy_label: o('bmi_healthy_label') ?? t.bmi_healthy_label,
    bmi_risks_label: o('bmi_risks_label') ?? t.bmi_risks_label,
    bmi_desc_underweight: o('bmi_desc_underweight') ?? t.bmi_desc_underweight,
    bmi_desc_normal: o('bmi_desc_normal') ?? t.bmi_desc_normal,
    bmi_desc_risks: o('bmi_desc_risks') ?? t.bmi_desc_risks,
    bmi_label_lifestyle: o('bmi_label_lifestyle') ?? t.bmi_label_lifestyle,
    bmi_label_exercise: o('bmi_label_exercise') ?? t.bmi_label_exercise,
    bmi_label_workout: o('bmi_label_workout') ?? t.bmi_label_workout,
    bmi_lifestyle_active: o('bmi_lifestyle_active') ?? t.bmi_lifestyle_active,
    bmi_lifestyle_feet: o('bmi_lifestyle_feet') ?? t.bmi_lifestyle_feet,
    bmi_lifestyle_home: o('bmi_lifestyle_home') ?? t.bmi_lifestyle_home,
    bmi_lifestyle_sedentary: o('bmi_lifestyle_sedentary') ?? t.bmi_lifestyle_sedentary,
    bmi_exercise_often: o('bmi_exercise_often') ?? t.bmi_exercise_often,
    bmi_exercise_sometimes: o('bmi_exercise_sometimes') ?? t.bmi_exercise_sometimes,
    bmi_exercise_sort_of: o('bmi_exercise_sort_of') ?? t.bmi_exercise_sort_of,
    bmi_exercise_no: o('bmi_exercise_no') ?? t.bmi_exercise_no,
    bmi_workout_high: o('bmi_workout_high') ?? t.bmi_workout_high,
    bmi_workout_moderate: o('bmi_workout_moderate') ?? t.bmi_workout_moderate,
    bmi_workout_low: o('bmi_workout_low') ?? t.bmi_workout_low,
    weight_goal_estimated: o('weight_goal_estimated') ?? t.weight_goal_estimated,
    weight_goal_by: o('weight_goal_by') ?? t.weight_goal_by,
    weight_chart_label: o('weight_chart_label') ?? t.weight_chart_label,
    weight_goal_headline: o('weight_goal_headline')
      ? (g: string) => o('weight_goal_headline')!.replace('__GOAL__', g)
      : t.weight_goal_headline,
  }
}

/** result — has goal_line function */
export function applyResultOverrides(
  t: ResultTranslations,
  ov: Record<string, string>
): ResultTranslations {
  const o = (k: string) => ov[`result.${k}`]
  return {
    ...t,
    header_label: o('header_label') ?? t.header_label,
    headline: o('headline') ?? t.headline,
    subtitle: o('subtitle') ?? t.subtitle,
    guide_text: o('guide_text') ?? t.guide_text,
    cta: o('cta') ?? t.cta,
    goal_line: o('goal_line')
      ? (w: number, d: string, u?: string) => o('goal_line')!.replace('__W__', String(w)).replace('__D__', d).replace('__U__', u ?? 'kg')
      : t.goal_line,
  }
}

/** results28 — has week function */
export function applyResults28Overrides(
  t: Results28Translations,
  ov: Record<string, string>
): Results28Translations {
  const o = (k: string) => ov[`results28.${k}`]
  return {
    ...t,
    header_label: o('header_label') ?? t.header_label,
    your_weight: o('your_weight') ?? t.your_weight,
    now: o('now') ?? t.now,
    after_4_weeks: o('after_4_weeks') ?? t.after_4_weeks,
    keeping_it_off: o('keeping_it_off') ?? t.keeping_it_off,
    chart_note: o('chart_note') ?? t.chart_note,
    headline: o('headline') ?? t.headline,
    week: o('week')
      ? (n: number) => o('week')!.replace('__N__', String(n))
      : t.week,
  }
}

/** wellness — nested lifestyle/eater/motivation objects */
export function applyWellnessOverrides(
  t: WellnessTranslations,
  ov: Record<string, string>
): WellnessTranslations {
  const o = (k: string) => ov[`wellness.${k}`]
  const lifestyleEntries = Object.entries(ov)
    .filter(([k]) => k.startsWith('wellness.lifestyle.'))
    .map(([k, v]) => [k.slice('wellness.lifestyle.'.length), v])
  return {
    ...t,
    header_label: o('header_label') ?? t.header_label,
    headline: o('headline') ?? t.headline,
    lifestyle_label: o('lifestyle_label') ?? t.lifestyle_label,
    eater_label: o('eater_label') ?? t.eater_label,
    motivation_label: o('motivation_label') ?? t.motivation_label,
    img_alt: o('img_alt') ?? t.img_alt,
    warning_title: o('warning_title') ?? t.warning_title,
    warning_desc: o('warning_desc') ?? t.warning_desc,
    bmi_normal_msg: o('bmi_normal_msg') ?? t.bmi_normal_msg,
    bmi_overweight_msg: o('bmi_overweight_msg') ?? t.bmi_overweight_msg,
    bmi_obese_msg: o('bmi_obese_msg') ?? t.bmi_obese_msg,
    lifestyle: lifestyleEntries.length
      ? { ...t.lifestyle, ...Object.fromEntries(lifestyleEntries) }
      : t.lifestyle,
    eater: {
      balanced: o('eater.balanced') ?? t.eater.balanced,
      sweet: o('eater.sweet') ?? t.eater.sweet,
      salty: o('eater.salty') ?? t.eater.salty,
      emotional: o('eater.emotional') ?? t.eater.emotional,
    },
    motivation: {
      high: o('motivation.high') ?? t.motivation.high,
      moderate: o('motivation.moderate') ?? t.motivation.moderate,
      low: o('motivation.low') ?? t.motivation.low,
    },
  }
}

/** loading — handles loading.* text keys and loading.reviews.N.* keys */
export function applyLoadingOverrides(
  t: LoadingTranslations,
  reviews: Review[],
  ov: Record<string, string>
): { t: LoadingTranslations; reviews: Review[] } {
  const newT = applyFlatSection(t, ov, 'loading.')
  const newReviews = [...reviews]
  for (const [k, v] of Object.entries(ov)) {
    if (k.startsWith('loading.reviews.')) {
      const parts = k.split('.')  // loading, reviews, N, field
      const idx = parseInt(parts[2])
      const field = parts[3]
      if (!isNaN(idx) && field) {
        newReviews[idx] = { ...newReviews[idx], [field]: field === 'stars' ? Number(v) : v }
      }
    }
  }
  return { t: newT, reviews: newReviews }
}

/** paywall — handles all flat keys including functions, arrays, nested objects */
export function applyPaywallOverrides<T extends Record<string, unknown>>(
  copy: T,
  ov: Record<string, string>
): T {
  const prefix = 'paywall.'
  const entries = Object.entries(ov).filter(([k]) => k.startsWith(prefix))
  if (!entries.length) return copy
  const patch: Record<string, unknown> = {}

  for (const [k, v] of entries) {
    const key = k.slice(prefix.length)

    // Functions with placeholders
    if (key === 'personalHeading') {
      patch[key] = (name: string) =>
        name ? v.replace('__NAME__', name) : v.replace(/^__NAME__[,，、]?\s*/, '')
    } else if (key === 'discount') {
      patch[key] = (val: string) => v.replace('__V__', val)
    } else if (key === 'perDay') {
      patch[key] = (val: string) => v.replace('__V__', val)
    } else if (key === 'consentBody') {
      patch[key] = (today: string, renew: string) => v.replace('__TODAY__', today).replace('__RENEW__', renew)
    } else if (key === 'fitnessAgeValue') {
      patch[key] = (years: number) => v.replace('__YEARS__', String(years))
    }
    // Arrays: bullets.0, bullets.1, etc.
    else if (key.startsWith('bullets.')) {
      const idx = parseInt(key.slice('bullets.'.length))
      const bullets = [...((patch.bullets as string[]) ?? (copy as Record<string, unknown>).bullets as string[])]
      bullets[idx] = v
      patch.bullets = bullets
    }
    // plans.0.name, plans.0.desc, plans.0.badge
    else if (key.startsWith('plans.')) {
      const parts = key.split('.')  // ['plans', '0', 'name']
      const idx = parseInt(parts[1])
      const field = parts[2]
      const plans = [...((patch.plans as { name: string; desc: string; badge: string | null }[]) ?? (copy as Record<string, unknown>).plans as { name: string; desc: string; badge: string | null }[])]
      plans[idx] = { ...plans[idx], [field]: field === 'badge' ? (v || null) : v }
      patch.plans = plans
    }
    // features.0.title, features.0.desc
    else if (key.startsWith('features.')) {
      const parts = key.split('.')
      const idx = parseInt(parts[1])
      const field = parts[2]
      const features = [...((patch.features as { title: string; desc: string }[]) ?? (copy as Record<string, unknown>).features as { title: string; desc: string }[])]
      features[idx] = { ...features[idx], [field]: v }
      patch.features = features
    }
    // goalLabels.lose-weight, etc.
    else if (key.startsWith('goalLabels.')) {
      const labelKey = key.slice('goalLabels.'.length)
      patch.goalLabels = { ...((patch.goalLabels as Record<string, string>) ?? (copy as Record<string, unknown>).goalLabels as Record<string, string>), [labelKey]: v }
    }
    else if (key.startsWith('sleepLabels.')) {
      const labelKey = key.slice('sleepLabels.'.length)
      patch.sleepLabels = { ...((patch.sleepLabels as Record<string, string>) ?? (copy as Record<string, unknown>).sleepLabels as Record<string, string>), [labelKey]: v }
    }
    else if (key.startsWith('fitnessLabels.')) {
      const labelKey = key.slice('fitnessLabels.'.length)
      patch.fitnessLabels = { ...((patch.fitnessLabels as Record<string, string>) ?? (copy as Record<string, unknown>).fitnessLabels as Record<string, string>), [labelKey]: v }
    }
    // bmi.Normal.title, bmi.Normal.text
    else if (key.startsWith('bmi.')) {
      const parts = key.split('.')  // ['bmi', 'Normal', 'title'|'text']
      const cat = parts[1]
      const field = parts[2]
      const bmi = { ...((patch.bmi as Record<string, unknown>) ?? (copy as Record<string, unknown>).bmi as Record<string, unknown>) }
      const catObj = { ...(bmi[cat] as Record<string, unknown> ?? {}) }
      if (field === 'text') {
        catObj.text = (b: string) => v.replace('__BMI__', b)
      } else {
        catObj[field] = v
      }
      bmi[cat] = catObj
      patch.bmi = bmi
    }
    // stories.0.name, etc. — handled separately via applyStoriesOverrides
    else if (key.startsWith('stories.')) {
      // skip — stories are patched separately
    }
    // reviews.0.name, etc. — skip, reviews are read-only in admin
    else if (!key.startsWith('reviews.')) {
      // Simple string fields
      patch[key] = v
    }
  }

  return { ...(copy as object), ...patch } as T
}

/** paywall stories — patches stories.N.name/text/photo/stars from overrides */
export function applyStoriesOverrides(stories: PaywallStory[], ov: Record<string, string>): PaywallStory[] {
  const result = [...stories]
  for (const [k, v] of Object.entries(ov)) {
    if (!k.startsWith('paywall.stories.')) continue
    const parts = k.split('.')  // ['paywall', 'stories', N, field]
    const idx = parseInt(parts[2])
    const field = parts[3]
    if (!isNaN(idx) && field && result[idx]) {
      result[idx] = { ...result[idx], [field]: field === 'stars' ? Number(v) : v }
    }
  }
  return result
}

/** quiz steps */
export function applyStepOverrides(step: QuizStep, ov: Record<string, string>): QuizStep {
  const pfx = `steps.${step.step}.`
  if (!Object.keys(ov).some((k) => k.startsWith(pfx))) return step
  const g = (key: string) => ov[pfx + key]
  return {
    ...step,
    ...(g('question') ? { question: g('question')! } : {}),
    ...(g('subtitle') ? { subtitle: g('subtitle')! } : {}),
    ...(g('placeholder') ? { placeholder: g('placeholder')! } : {}),
    ...(g('hint') ? { hint: g('hint')! } : {}),
    ...(g('hintTitle') ? { hintTitle: g('hintTitle')! } : {}),
    ...(g('buttonLabel') ? { buttonLabel: g('buttonLabel')! } : {}),
    options: step.options?.map((opt) => ({
      ...opt,
      label: g(`options.${opt.id}`) ?? opt.label,
    })),
    interstitial: step.interstitial
      ? {
          ...step.interstitial,
          headline: g('interstitial.headline') ?? step.interstitial.headline,
          body: g('interstitial.body') ?? step.interstitial.body ?? '',
          ...(step.interstitial.note !== undefined || g('interstitial.note')
            ? { note: g('interstitial.note') ?? step.interstitial.note }
            : {}),
        }
      : undefined,
  }
}
