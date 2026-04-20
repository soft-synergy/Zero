'use client'

import { useEffect, useMemo, useState } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import styles from './page.module.css'
import { useQuizStore } from '@/lib/quiz-store'
import { calcBMI, getBMICategory } from '@/lib/bmi-utils'
import { useLangStore, type LangCode } from '@/lib/lang-store'
import { LANGUAGES } from '@/lib/i18n'
import { QUIZ_URLS } from '@/lib/quiz-config'
import { HEIGHT_STEP, WEIGHT_STEP } from '@/lib/quiz-data'
import { COPY } from '@/lib/paywall-copy'
import { PAYWALL_STORIES } from '@/lib/paywall-stories-data'
import { applyPaywallOverrides, applyStoriesOverrides, useTranslationOverrides } from '@/lib/use-translation-overrides'
import { PRICING, type Variant } from '@/lib/pricing-data'

const VALID_LANGS = new Set<string>(LANGUAGES.map((l) => l.code))
const GOAL_WEIGHT_STEP = WEIGHT_STEP + 1

function parsePrice(value: string): number {
  const normalized = value.replace(/[^0-9.,]/g, '').replace(',', '.')
  const parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) ? parsed : 0
}

const PLANS = [
  {
    id: '7d',
    name: '7-day plan',
    price: 'USD 7.69',
    oldPrice: 'USD 21.99',
    perDay: 'USD 1.09/day',
    renewalPrice: 'USD 21.99',
    renewalPeriod: '7 days',
    tag: null,
    gift: false,
  },
  {
    id: '1m',
    name: '1-month plan',
    price: 'USD 18.39',
    oldPrice: 'USD 38.99',
    perDay: 'USD 0.61/day',
    renewalPrice: 'USD 38.99',
    renewalPeriod: 'month',
    tag: 'Most popular: over 50% off',
    gift: false,
  },
  {
    id: '3m',
    name: '3-month plan',
    price: 'USD 28.59',
    oldPrice: 'USD 68.99',
    perDay: 'USD 0.31/day',
    renewalPrice: 'USD 68.99',
    renewalPeriod: '3 months',
    tag: null,
    gift: false,
  },
] as const

const STORIES = [
  {
    name: 'Elena 41, lost 12 kg',
    image: '/images/woman/results_chart_Elena 41, lost 12 kg.png',
    text: 'I used to feel heavy, bloated, and upset with myself all the time. I would do well for a few days, then go back to eating sweets and snacks at night. The Personalized Zero Carbs Challenge helped me keep things simple.',
  },
  {
    name: 'Marina 33, lost 18 kg',
    image: '/images/woman/results_chart_Marina 33, lost 18 kg.png',
    text: 'Before this, I always felt like I was starting over. I knew what to eat, but I could never stay consistent for long. What I liked most was that the plan felt personal and easy to follow.',
  },
  {
    name: 'Daniel 56, lost 21 kg',
    image: '/images/man/result chart_ Daniel 56, lost 21 kg.png',
    text: 'I had low energy and felt uncomfortable in my body. I wanted something simple that I could actually follow in real life. The Personalized Zero Carbs Challenge helped me make better choices without feeling overwhelmed.',
  },
] as const

type BmiCategory = 'Normal' | 'Underweight' | 'Overweight' | 'Obese'
type GoalVisual = 'athletic' | 'normal' | 'overweight'

function getCurrentVisual(gender: 'men' | 'women' | null, bmiCat: BmiCategory) {
  if (gender === 'women') {
    if (bmiCat === 'Obese') {
      return { image: '/images/woman/body_type_women_IF OBESE.png', bodyFat: 'High', level: 'Beginner', bars: 1 }
    }
    return { image: '/images/woman/body_type_women_before_normal.png', bodyFat: bmiCat === 'Overweight' ? 'High' : 'Normal', level: bmiCat === 'Normal' ? 'Intermediate' : 'Beginner', bars: bmiCat === 'Normal' ? 2 : 1 }
  }

  if (bmiCat === 'Obese') {
    return { image: '/images/man/body type_before (Obese).png', bodyFat: 'High', level: 'Beginner', bars: 1 }
  }
  if (bmiCat === 'Overweight') {
    return { image: '/images/man/Body_type_before_(overweight).png', bodyFat: 'High', level: 'Beginner', bars: 1 }
  }
  return { image: '/images/man/body_type_men_before (normal).png', bodyFat: 'Normal', level: 'Intermediate', bars: 2 }
}

function getGoalVisual(current: BmiCategory, target: BmiCategory): GoalVisual {
  if (target === 'Underweight' || target === 'Normal') return 'athletic'
  if (target === 'Overweight') return 'normal'
  
  // If target is Obese, but they started Obese, let's at least show the normal (overweight image) visual to present some progress!
  if (current === 'Obese') return 'normal'
  
  return 'overweight'
}

function getTargetVisual(gender: 'men' | 'women' | null, visual: GoalVisual) {
  if (gender === 'women') {
    if (visual === 'athletic') {
      return { image: '/images/woman/results_bmi_card_normal_woman.png', bodyFat: 'Low', level: 'Advanced', bars: 3 }
    }
    if (visual === 'normal') {
      return { image: '/images/woman/results_bmi_card_normal_woman.png', bodyFat: 'Normal', level: 'Intermediate', bars: 2 }
    }
    return { image: '/images/woman/body type_BMI is in a high range..png', bodyFat: 'High', level: 'Beginner', bars: 1 }
  }

  if (visual === 'athletic') {
    return { image: '/images/man/body_type_men_after (athletic).png', bodyFat: 'Low', level: 'Advanced', bars: 3 }
  }
  if (visual === 'normal') {
    return { image: '/images/man/body_type_after (normal).png', bodyFat: 'Normal', level: 'Intermediate', bars: 2 }
  }
  return { image: '/images/man/body_type_ after (overweight).png', bodyFat: 'High', level: 'Beginner', bars: 1 }
}

function ArrowGraphic() {
  return (
    <svg viewBox="0 0 170 230" className={styles.arrowGraphic} aria-hidden="true">
      {[0, 28, 56].map((offset) => (
        <path
          key={offset}
          d={`M ${50 + offset} 20 L ${100 + offset} 115 L ${50 + offset} 210`}
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}

function ProgressBars({ count }: { count: number }) {
  return (
    <div className={styles.progressBars} aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span key={n} className={`${styles.progressBar} ${n <= count ? styles.progressBarActive : ''}`} />
      ))}
    </div>
  )
}



function SealIcon() {
  return (
    <svg viewBox="0 0 120 120" className={styles.sealIcon} aria-hidden="true">
      <circle cx="60" cy="50" r="30" fill="#0d5a4d" />
      <circle cx="60" cy="50" r="22" fill="none" stroke="#fff" strokeWidth="4" />
      <path d="M48 50l8 8 17-18" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 80l4 32 15-16 15 16 4-32" fill="#0d5a4d" />
    </svg>
  )
}



export function PaywallContent({ checkoutSlug = 'checkout' }: { checkoutSlug?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const { answers, gender, _hydrated } = useQuizStore()
  const { lang: storeLang, setLang } = useLangStore()
  const params = useParams()
  const [selected, setSelected] = useState<(typeof PLANS)[number]['id']>('1m')
  const [secondsLeft, setSecondsLeft] = useState(15 * 60)

  useEffect(() => {
    const urlLang = params?.lang as string | undefined
    if (urlLang && VALID_LANGS.has(urlLang) && urlLang !== storeLang) {
      setLang(urlLang as LangCode)
    }
  }, [params?.lang, storeLang, setLang])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const lang = (() => {
    const urlLang = params?.lang as string | undefined
    return (urlLang && VALID_LANGS.has(urlLang) ? urlLang : storeLang) as LangCode
  })()
  const ov = useTranslationOverrides(lang)
  const copy = useMemo(() => applyPaywallOverrides(COPY[lang] ?? COPY.en, ov), [lang, ov])
  const stories = useMemo(() => applyStoriesOverrides(PAYWALL_STORIES[lang] ?? PAYWALL_STORIES.en, ov), [lang, ov])

  const variant: Variant = checkoutSlug?.includes('offer2') ? 'nb3' : checkoutSlug?.includes('offer1') ? 'nb2' : 'base'

  const handleLangChange = (newLang: LangCode) => {
    setLang(newLang)
    const nextPath = pathname.replace(/^\/[^/]+/, `/${newLang}`)
    router.push(nextPath)
  }

  const selectedPlan = PLANS.find((plan) => plan.id === selected) ?? PLANS[1]
  const checkoutUrl = QUIZ_URLS.checkout(lang, checkoutSlug, selectedPlan.id)

  const heightCm = Number(answers[HEIGHT_STEP]) || 175
  const weightLbs = Number(answers[WEIGHT_STEP]) || 210
  const targetWeightLbs = Number(answers[GOAL_WEIGHT_STEP]) || Math.max(150, weightLbs - 35)
  const currentBmi = calcBMI(weightLbs, heightCm)
  const targetBmi = calcBMI(targetWeightLbs, heightCm)
  const currentCat = getBMICategory(currentBmi) as BmiCategory
  const targetCat = getBMICategory(targetBmi) as BmiCategory

  const currentVisual = getCurrentVisual(gender, currentCat)
  const targetVisual = getTargetVisual(gender, getGoalVisual(currentCat, targetCat))
  const currentBodyFatLabel =
    currentVisual.bodyFat === 'High' ? copy.bodyFatHigh : currentVisual.bodyFat === 'Low' ? copy.bodyFatLow : copy.bodyFatNormal
  const targetBodyFatLabel =
    targetVisual.bodyFat === 'High' ? copy.bodyFatHigh : targetVisual.bodyFat === 'Low' ? copy.bodyFatLow : copy.bodyFatNormal
  const mapLevel = (level: string) =>
    level === 'Beginner'
      ? copy.fitnessLevelBeginner
      : level === 'Advanced'
      ? copy.fitnessLevelAdvanced
      : copy.fitnessLevelIntermediate

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const seconds = String(secondsLeft % 60).padStart(2, '0')
  const isUrgent = secondsLeft <= 5 * 60

  const legalCopy = useMemo(() => {
    const selectedPricing = PRICING[lang]?.[selectedPlan.id as '7d'|'1m'|'3m']?.[variant] ?? PRICING.en[selectedPlan.id as '7d'|'1m'|'3m'].base
    return copy.consentBody(
      selectedPricing.price,
      selectedPricing.renewalPrice
    )
  }, [selectedPlan.id, lang, variant, copy])

  if (!_hydrated) return null

  return (
    <>
      <div className={styles.stickyOffer}>
        <div className={styles.stickyInner}>
          <span className={styles.stickyBrand}>{copy.cta}</span>
          <div className={styles.stickyTimerBlock}>
            <span className={styles.stickyTimerLabel}>{copy.stickyTimerLabel}</span>
            <div className={`${styles.stickyTimer} ${isUrgent ? styles.stickyTimerUrgent : ''}`} aria-live="polite">
              <strong>{minutes}:{seconds}</strong>
              <span>{copy.stickyMinutesLabel}</span>
              <span>{copy.stickySecondsLabel}</span>
            </div>
          </div>
          <a href={checkoutUrl} className={styles.stickyCta}>{copy.cta}</a>
        </div>
      </div>

      <main className={styles.page}>
        <section className={styles.heroSheet}>
          <div className={styles.beforeAfterCard}>
            <div className={styles.beforeAfterTop}>
              <div className={styles.beforeAfterFigure}>
                <span className={`${styles.figureBadge} ${styles.figureBadgeLight}`}>{copy.beforeLabel}</span>
                <img src={currentVisual.image} alt="" aria-hidden="true" />
              </div>
              <ArrowGraphic />
              <div className={styles.beforeAfterFigure}>
                <span className={`${styles.figureBadge} ${styles.figureBadgeDark}`}>{copy.afterLabel}</span>
                <img src={targetVisual.image} alt="" aria-hidden="true" />
              </div>
            </div>

            <div className={styles.beforeAfterBottom}>
              <div className={styles.metricColumn}>
                <div className={styles.metricBlock}>
                  <h3>{copy.bodyFatLabel}</h3>
                  <p>{currentBodyFatLabel}</p>
                </div>
                <div className={styles.metricBlock}>
                  <h3>{copy.fitnessLevelLabel}</h3>
                  <p>{mapLevel(currentVisual.level)}</p>
                </div>
                <ProgressBars count={currentVisual.bars} />
              </div>
              <div className={styles.metricColumn}>
                <div className={styles.metricBlock}>
                  <h3>{copy.bodyFatLabel}</h3>
                  <p>{targetBodyFatLabel}</p>
                </div>
                <div className={styles.metricBlock}>
                  <h3>{copy.fitnessLevelLabel}</h3>
                  <p>{mapLevel(targetVisual.level)}</p>
                </div>
                <ProgressBars count={targetVisual.bars} />
              </div>
            </div>
          </div>

          <section className={styles.pricingSection}>
            <h1 className={styles.heroTitle}>{copy.pageTitle}</h1>
            <h2 className={styles.heroSubtitle}>{copy.pageSub}</h2>

            <div className={styles.planList} role="radiogroup" aria-label={copy.choosePlanAria}>
              {PLANS.map((plan, index) => {
                const active = selected === plan.id
                const translatedPlan = copy.plans[index] ?? copy.plans[0]
                const pricing = PRICING[lang]?.[plan.id as '7d'|'1m'|'3m']?.[variant] ?? PRICING.en[plan.id as '7d'|'1m'|'3m'].base
                const fullPrice = parsePrice(pricing.oldPrice)
                const introPrice = parsePrice(pricing.price)
                const savings = Math.max(0, fullPrice - introPrice)
                const discountPercent = fullPrice > 0 ? Math.round((savings / fullPrice) * 100) : 0
                return (
                  <button
                    key={plan.id}
                    type="button"
                    className={`${styles.planCard} ${translatedPlan?.badge ? styles.planCardWithRibbon : ''} ${active ? styles.planCardActive : ''}`}
                    onClick={() => setSelected(plan.id)}
                    role="radio"
                    aria-checked={active}
                    aria-label={`${translatedPlan?.name ?? plan.name}, ${plan.price}`}
                  >
                    {translatedPlan?.badge && <div className={styles.planRibbon}>{translatedPlan.badge}</div>}
                    <div className={styles.planMainRow}>
                      <div className={styles.planLeft}>
                        <span className={`${styles.planRadio} ${active ? styles.planRadioActive : ''}`} />
                        <div>
                          <h3>{translatedPlan?.name ?? plan.name}</h3>
                          <p className={styles.planPriceRow}>
                            <span className={styles.planPriceOld}>{pricing.oldPrice}</span>
                            <span>{pricing.price}</span>
                          </p>
                        </div>
                      </div>
                      <p className={styles.planDayPrice}>{pricing.perDay}</p>
                    </div>
                    {discountPercent > 0 && (
                      <p className={styles.planSavings}>
                        {copy.savingsText
                          .replace('__AMOUNT__', pricing.oldPrice.replace(/[0-9.,]+/, savings.toFixed(0))) /* Fallback visual replace */
                          .replace('__PERCENT__', String(discountPercent))}
                      </p>
                    )}
                  </button>
                )
              })}
            </div>

            <a href={checkoutUrl} className={styles.primaryCta} aria-label={`${copy.cta} - ${selectedPlan.name}`}>{copy.cta}</a>
            <div className={styles.purchaseSignals} aria-hidden="true">
              <span>{copy.trustSecureCheckout}</span>
              <span>{copy.trustCancelAnytime}</span>
              <span>{copy.trustInstantAccess}</span>
            </div>
            <div className={styles.moneyBackRow}>
              {copy.moneyBackRow}
            </div>
          </section>
        </section>

        <section className={styles.featureBand}>
          <div className={styles.bandInner}>
            <div className={styles.featureCopy}>
              <h2>{copy.whatYouGet}</h2>
              {copy.features.map((feature) => (
                <div key={feature.title} className={styles.featureItem}>
                  <span className={styles.featureCheck} />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className={styles.guaranteeSection}>
          <div className={styles.guaranteeCard}>
            <h2>{copy.guaranteeTitle}</h2>
            <p>{copy.guaranteeBody}</p>
            <p>{copy.guaranteePrefix} <a href={QUIZ_URLS.moneyBackGuarantee(lang)}>{copy.guaranteeLinkLabel}</a></p>
            <SealIcon />
          </div>
        </section>

        <footer className={styles.pageFooter}>
          <div className={styles.footerLangRow}>
            <label htmlFor="paywall-lang-select">{copy.footerLanguageLabel}</label>
            <select
              id="paywall-lang-select"
              className={styles.footerLangSelect}
              value={lang}
              onChange={(e) => handleLangChange(e.target.value as LangCode)}
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.label}
                </option>
              ))}
            </select>
          </div>
          <p>{copy.footer}</p>
        </footer>
      </main>
    </>
  )
}
