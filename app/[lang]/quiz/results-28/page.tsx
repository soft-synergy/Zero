'use client'
import { useRouter, useParams } from 'next/navigation'
import styles from '@/app/quiz/results-28/page.module.css'
import QuizHeader from '@/components/QuizHeader/QuizHeader'
import QuizFooter from '@/components/QuizFooter/QuizFooter'
import { useQuizStore } from '@/lib/quiz-store'
import type { LangCode } from '@/lib/lang-store'
import { useResults28T, type Results28Translations } from '@/lib/i18n'
import { useTranslationOverrides, applyResults28Overrides } from '@/lib/use-translation-overrides'

function WeightCurve({ t }: { t: Results28Translations }) {
  return (
    <div className={styles.chartWrap}>
      <div className={styles.chartInner}>
        <svg
          className={styles.chartSvg}
          viewBox="0 0 320 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="r28lineGrad" x1="30" y1="0" x2="310" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#E05A3A" />
              <stop offset="40%"  stopColor="#F0B040" />
              <stop offset="75%"  stopColor="#7DBF52" />
              <stop offset="100%" stopColor="#5CAA6F" />
            </linearGradient>
            <linearGradient id="r28areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#7DBF52" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#7DBF52" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[40, 90, 140, 190].map(x => (
            <line key={x} x1={x} y1="10" x2={x} y2="165" stroke="#D0E8D8" strokeWidth="1" />
          ))}
          {[50, 90, 130].map(y => (
            <line key={y} x1="20" y1={y} x2="310" y2={y} stroke="#D0E8D8" strokeWidth="1" />
          ))}

          {/* Area fill */}
          <path
            className={styles.chartArea}
            d="M 30,28 C 80,28 100,65 140,90 C 180,115 210,138 255,150 C 278,156 292,159 308,160 L 308,165 L 30,165 Z"
            fill="url(#r28areaGrad)"
          />

          {/* Curved line */}
          <path
            className={styles.chartLine}
            d="M 30,28 C 80,28 100,65 140,90 C 180,115 210,138 255,150 C 278,156 292,159 308,160"
            stroke="url(#r28lineGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dot: start (Your weight) */}
          <g className={styles.dotStart}>
            <circle cx="30" cy="28" r="7" fill="white" stroke="#E05A3A" strokeWidth="2.5" />
          </g>

          {/* Dot: mid (After 4 weeks) */}
          <g className={styles.dotMid}>
            <circle cx="200" cy="130" r="7" fill="white" stroke="#F0B040" strokeWidth="2.5" />
          </g>

          {/* Dot: end (Keeping it off) */}
          <g className={styles.dotEnd}>
            <circle cx="308" cy="160" r="9" fill="#5CAA6F" stroke="#3d8f54" strokeWidth="2" />
            <circle cx="308" cy="160" r="3.5" fill="white" />
          </g>

          {/* Label: Your weight */}
          <g className={styles.lblStart}>
            <rect x="38" y="14" rx="8" ry="8" width="90" height="24" fill="white"
              style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.13))' }} />
            <text x="83" y="30" textAnchor="middle" fill="#E05A3A"
              fontFamily="var(--font-dm-sans),sans-serif" fontSize="11" fontWeight="700">
              {t.your_weight}
            </text>
          </g>

          {/* Label: After 4 weeks */}
          <g className={styles.lblMid}>
            <rect x="130" y="104" rx="8" ry="8" width="100" height="24" fill="white"
              style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.13))' }} />
            <text x="180" y="120" textAnchor="middle" fill="#C08A20"
              fontFamily="var(--font-dm-sans),sans-serif" fontSize="11" fontWeight="700">
              {t.after_4_weeks}
            </text>
          </g>

          {/* Label: Keeping it off */}
          <g className={styles.lblEnd}>
            <rect x="206" y="134" rx="8" ry="8" width="100" height="24" fill="white"
              style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.13))' }} />
            <text x="256" y="150" textAnchor="middle" fill="#3d8f54"
              fontFamily="var(--font-dm-sans),sans-serif" fontSize="11" fontWeight="700">
              {t.keeping_it_off}
            </text>
          </g>
        </svg>
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
          <WeightCurve t={t} />
          <p className={styles.chartNote}>{t.chart_note}</p>
          <h1 className={styles.headline}>{t.headline}</h1>
        </div>
      </main>
      <QuizFooter onClick={handleContinue} />
    </>
  )
}

