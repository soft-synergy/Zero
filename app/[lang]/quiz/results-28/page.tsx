'use client'
import { useRouter, useParams } from 'next/navigation'
import styles from '@/app/quiz/results-28/page.module.css'
import QuizHeader from '@/components/QuizHeader/QuizHeader'
import QuizFooter from '@/components/QuizFooter/QuizFooter'
import { useQuizStore } from '@/lib/quiz-store'
import type { LangCode } from '@/lib/lang-store'
import { useResults28T } from '@/lib/i18n'
import { useTranslationOverrides, applyResults28Overrides } from '@/lib/use-translation-overrides'

function WeightCurve() {
  // Steep diagonal: start (35,20) → orange transition (140,68) → yellow after4weeks (215,114) → green end (320,155)
  return (
    <div className={styles.chartWrap}>
      <div className={styles.chartInner}>
        <img
          src="/images/Zrzut ekranu 2026-04-15 o 13.35.18.png"
          alt=""
          aria-hidden="true"
          className={styles.chartSvg}
        />
      </div>
    </div>
  )
}

export default function Results28Page() {
  const router = useRouter()
  const params = useParams()
  const routeLang = params.lang as LangCode
  const setDirection = useQuizStore((s) => s.setDirection)
  const ov = useTranslationOverrides(routeLang)
  const t = applyResults28Overrides(useResults28T(routeLang), ov)

  const base = `/${routeLang}`

  const handleContinue = () => {
    setDirection('forward')
    router.push(`${base}/quiz/paywall`)
  }

  return (
    <>
      <QuizHeader label={t.header_label} showBack={false} hideProgress={true} />
      <main className={styles.main}>
        <div className={styles.content}>
          <WeightCurve />
          <h1 className={styles.headline}>{t.headline}</h1>
        </div>
      </main>
      <QuizFooter onClick={handleContinue} />
    </>
  )
}
