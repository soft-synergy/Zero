'use client'
import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import styles from '@/app/quiz/email/page.module.css'
import QuizHeader from '@/components/QuizHeader/QuizHeader'
import { useQuizStore } from '@/lib/quiz-store'
import type { LangCode } from '@/lib/lang-store'
import { useEmailT } from '@/lib/i18n'
import { useTranslationOverrides, applyFlatSection } from '@/lib/use-translation-overrides'
import { QUIZ_URLS } from '@/lib/quiz-config'

export default function EmailPage() {
  const router = useRouter()
  const params = useParams()
  const routeLang = params.lang as LangCode
  const setDirection = useQuizStore((s) => s.setDirection)
  const ov = useTranslationOverrides(routeLang)
  const t = applyFlatSection(useEmailT(routeLang), ov, 'email.')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const base = `/${routeLang}/quiz`

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const canSubmit = isValid && agreed

  const handleContinue = () => {
    if (!canSubmit) return
    setDirection('forward')
    router.push(`${base}/results-28`)
  }

  return (
    <>
      <QuizHeader label={t.header_label} showBack={false} hideProgress={true} />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.headline}>{t.headline}</h1>

          <div className={styles.inputWrap}>
            <span className={styles.inputIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <input
              className={styles.emailInput}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            {email && (
              <button className={styles.clearBtn} onClick={() => setEmail('')} type="button" aria-label={t.clear_aria}>
                ✕
              </button>
            )}
          </div>

          <label className={styles.consentRow}>
            <div className={`${styles.checkbox} ${agreed ? styles.checkboxChecked : ''}`} aria-hidden="true">
              {agreed && (
                <svg viewBox="0 0 14 14" fill="none" width="10" height="10">
                  <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <input
              type="checkbox"
              className={styles.checkboxHidden}
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className={styles.consentText}>
              {t.consent_prefix}{' '}
              <a href={QUIZ_URLS.privacyPolicy(routeLang)} className={styles.privacyLink} onClick={(e) => e.stopPropagation()}>
                {t.consent_link}
              </a>{' '}
              {t.consent_suffix}
            </span>
          </label>

          <button
            className={styles.submitBtn}
            disabled={!canSubmit}
            onClick={handleContinue}
            type="button"
          >
            {t.cta}
          </button>

          <p className={styles.privacyNote}>{t.privacy_note}</p>
        </div>
      </main>
    </>
  )
}
