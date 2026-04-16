'use client'
import { useEffect, useRef } from 'react'
import styles from './BMIScale.module.css'
import { getBMIMarkerPercent } from '@/lib/bmi-utils'
import { useLangStore, type LangCode } from '@/lib/lang-store'

interface Props {
  bmi: number
}

export default function BMIScale({ bmi }: Props) {
  const lang = useLangStore((s) => s.lang)
  const markerRef = useRef<HTMLDivElement>(null)
  const scaleRef = useRef<HTMLDivElement>(null)
  const pct = getBMIMarkerPercent(bmi)
  const copy: Partial<Record<LangCode, { title: string; normal: string; tooltip: string; labels: [string, string, string] }>> = {
    en: { title: 'Body-Mass-Index (BMI)', normal: 'Normal', tooltip: 'Your BMI is', labels: ['Normal', 'Overweight', 'Obese'] },
    // Add languages here: pl: { title: '...', normal: '...', tooltip: '...', labels: ['...', '...', '...'] },
  }
  const t = copy[lang] ?? copy.en!

  useEffect(() => {
    if (!markerRef.current || !scaleRef.current) return
    const w = scaleRef.current.offsetWidth
    const px = (pct / 100) * w
    markerRef.current.style.transform = `translateX(${px}px)`
  }, [pct])

  const normalBmi = 21.5

  return (
    <div className={styles.bmiCard}>
      <div className={styles.bmiCardTop}>
        <span className={styles.bmiLabel}>{t.title}</span>
        <span className={styles.bmiValue}>{t.normal} - {normalBmi}</span>
      </div>
      <div className={styles.bmiScaleWrap}>
        <div ref={markerRef} className={styles.bmiMarkerWrap}>
          <div className={styles.bmiTooltip}>
            {t.tooltip}
            <br />
            {bmi.toFixed(2)}
          </div>
          <div className={styles.bmiMarkerDot} />
        </div>
        <div ref={scaleRef} className={styles.bmiScaleBar} />
      </div>
      <div className={styles.bmiScaleLabels}>
        <span>{t.labels[0]}</span>
        <span>{t.labels[1]}</span>
        <span>{t.labels[2]}</span>
      </div>
    </div>
  )
}
