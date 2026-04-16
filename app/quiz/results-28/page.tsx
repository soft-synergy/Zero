'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import QuizHeader from '@/components/QuizHeader/QuizHeader'
import QuizFooter from '@/components/QuizFooter/QuizFooter'
import { useQuizStore } from '@/lib/quiz-store'
import { useLangStore } from '@/lib/lang-store'
import { useResults28T } from '@/lib/i18n'
import { useTranslationOverrides, applyResults28Overrides } from '@/lib/use-translation-overrides'

function WeightCurve() {
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
  const setDirection = useQuizStore((s) => s.setDirection)
  const lang = useLangStore((s) => s.lang)
  const ov = useTranslationOverrides(lang)
  const t = applyResults28Overrides(useResults28T(lang), ov)

  const handleContinue = () => {
    setDirection('forward')
    router.push('/quiz/paywall')
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
