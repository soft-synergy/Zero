'use client'
import styles from './QuizHeader.module.css'
import { useRouter } from 'next/navigation'
import { useQuizStore } from '@/lib/quiz-store'
import { useLangStore } from '@/lib/lang-store'
import { useUITranslations } from '@/lib/i18n'
import { useTranslationOverrides, applyFlatSection } from '@/lib/use-translation-overrides'

interface Props {
  step?: number
  totalSteps?: number
  label?: string
  showBack?: boolean
  progress?: number
  hideProgress?: boolean
  overlay?: boolean
  onBack?: () => void
}

export default function QuizHeader({
  step,
  totalSteps,
  label,
  showBack = true,
  progress,
  hideProgress = false,
  overlay = false,
  onBack,
}: Props) {
  const router = useRouter()
  const setDirection = useQuizStore((s) => s.setDirection)
  const lang = useLangStore((s) => s.lang)
  const ov = useTranslationOverrides(lang)
  const t = applyFlatSection(useUITranslations(lang), ov, 'ui.')

  const pct =
    progress !== undefined
      ? progress
      : step && totalSteps
      ? (step / totalSteps) * 100
      : 100

  const handleBack = () => {
    if (onBack) {
      onBack()
      return
    }
    setDirection('backward')
    router.back()
  }

  const stepLabel = hideProgress ? '' : (label ?? (step && totalSteps ? `${step} / ${totalSteps}` : ''))

  return (
    <header className={overlay ? styles.headerOverlay : styles.header}>
      <div className={styles.headerTop}>
        {/* Left: back button */}
        <div className={styles.headerLeft}>
          {showBack ? (
            <button
              className={styles.btnBack}
              onClick={handleBack}
              aria-label={t.go_back}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : null}
        </div>

        {/* Center: logo */}
        <div className={styles.headerCenter}>
          <img src="/images/logo-new.png" alt="Logo" className={styles.logo} />
        </div>

        {/* Right: step counter */}
        <div className={styles.headerRight}>
          {stepLabel ? (
            <span className={styles.stepCounter} aria-live="polite">{stepLabel}</span>
          ) : null}
        </div>
      </div>
      {!hideProgress && (
        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-valuenow={Math.round(pct)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t.quiz_progress}
        >
          <div className={styles.progressFill} style={{ width: `${pct}%` }} />
        </div>
      )}
    </header>
  )
}
