'use client'

import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useQuizStore } from '@/lib/quiz-store'
import { useLangStore, type LangCode } from '@/lib/lang-store'
import { useIntroT } from '@/lib/i18n'
import { LANGUAGES } from '@/lib/i18n'
import { QUIZ_URLS } from '@/lib/quiz-config'
import { useTranslationOverrides, applyFlatSection } from '@/lib/use-translation-overrides'

export default function IntroClient({ lang }: { lang: LangCode }) {
  const router = useRouter()
  const { setLang } = useLangStore()
  const { setGender, setDirection, reset } = useQuizStore()
  const _ov = useTranslationOverrides(lang)
  const t = applyFlatSection(useIntroT(lang), _ov, 'intro.')
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    setLang(lang)
  }, [lang, setLang])

  useEffect(() => {
    const onScroll = () => setShowFooter(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleGender = (g: 'men' | 'women') => {
    reset()
    setGender(g)
    setDirection('forward')
    router.push(`/${lang}/quiz/1`)
  }

  return (
    <div className={styles.page}>
      <img
        className={styles.heroImage}
        src="/images/QUIZ-20 (1).png"
        alt=""
        aria-hidden="true"
      />

      <h1 className={styles.headline}>{t.headline}</h1>
      <p className={styles.subheadline}>{t.subheadline}</p>

      <p className={styles.chooseLabel}>{t.choose_label}</p>

      <div className={styles.genderRow}>
        <button
          className={`${styles.genderBtn} ${styles.genderBtnMen}`}
          onClick={() => handleGender('men')}
        >
          <span className={styles.genderLabel}>{t.gender_men}</span>
        </button>
        <button
          className={`${styles.genderBtn} ${styles.genderBtnWomen}`}
          onClick={() => handleGender('women')}
        >
          <span className={styles.genderLabel}>{t.gender_women}</span>
        </button>
      </div>

      <div className={styles.scrollSpacer} aria-hidden="true" />

      <div className={`${styles.footerBand} ${showFooter ? styles.footerVisible : ''}`}>
        <footer className={styles.footer}>
          <nav className={styles.footerNav} aria-label="Footer">
            <a href="#">{t.footer_manage}</a>
            <a href="#">{t.footer_about}</a>
            <a href="#">{t.footer_help}</a>
            <a href={QUIZ_URLS.privacyPolicy(lang)}>{t.footer_privacy}</a>
            <a href={QUIZ_URLS.termsOfService(lang)}>{t.footer_conditions}</a>
          </nav>

          <div className={styles.footerLangSwitcher}>
            <label htmlFor="intro-lang-switcher">{t.choose_label}</label>
            <select
              id="intro-lang-switcher"
              value={lang}
              onChange={(e) => {
                const newLang = e.target.value as LangCode
                setLang(newLang)
                router.push(`/${newLang}`)
              }}
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.footerDivider} />

          <div className={styles.footerBottom}>
            <div className={styles.footerCopyBlock}>
              <p className={styles.footerDisclaimer}>
                {t.footer_disclaimer}
              </p>
              <p className={styles.footerCopy}>{t.footer_copy}</p>
            </div>

            <div className={styles.storeBadges} aria-hidden="true">
              <div className={styles.storeBadge}>
                <span className={styles.storeBadgeOver}>{t.footer_app_store_over}</span>
                <span className={styles.storeBadgeMain}>{t.footer_app_store_main}</span>
              </div>
              <div className={styles.storeBadge}>
                <span className={styles.storeBadgeOver}>{t.footer_google_play_over}</span>
                <span className={styles.storeBadgeMain}>{t.footer_google_play_main}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
