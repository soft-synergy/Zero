'use client'
import { useEffect, useState } from 'react'
import styles from './BMICard.module.css'

// ─── types ────────────────────────────────────────────────────────
export interface BMICardT {
  title: string
  catUnderweight: string
  catNormal: string
  catOverweight: string
  catObese: string
  healthyLabel: string
  risksLabel: string
  descUnderweight: string
  descNormal: string
  descRisks: string
  labelLifestyle: string
  labelExercise: string
  labelWorkout: string
}

interface Props {
  bmi: number
  gender?: 'men' | 'women' | null
  lifestyle?: string
  exercise?: string
  workoutFrequency?: string
  t?: Partial<BMICardT>
}

interface Category {
  label: string
  accent: string
  bg: string
  descriptionLabel: string
  description: string
}

const DEFAULT_T: BMICardT = {
  title: 'Body Mass Index (BMI)',
  catUnderweight: 'Underweight',
  catNormal: 'Normal',
  catOverweight: 'Overweight',
  catObese: 'Obese',
  healthyLabel: 'Healthy BMI:',
  risksLabel: 'Risks of unhealthy BMI:',
  descUnderweight: 'Your BMI is below the healthy range. Building strength and healthy eating habits will be your priority.',
  descNormal: 'Good starting BMI to tone up and get your dream body.',
  descRisks: 'High blood pressure, increased risk of heart attack, stroke, type 2 diabetes, chronic back and joint pain.',
  labelLifestyle: 'Lifestyle',
  labelExercise: 'Exercise',
  labelWorkout: 'Workout frequency',
}

// ─── helpers ──────────────────────────────────────────────────────
function getCategory(bmi: number, labels: BMICardT): Category {
  if (bmi < 18.5) return {
    label: labels.catUnderweight,
    accent: '#4a9eff',
    bg: '#e8f4ff',
    descriptionLabel: labels.healthyLabel,
    description: labels.descUnderweight,
  }
  if (bmi < 25) return {
    label: labels.catNormal,
    accent: '#3d9e52',
    bg: '#eaf3ea',
    descriptionLabel: labels.healthyLabel,
    description: labels.descNormal,
  }
  if (bmi < 30) return {
    label: labels.catOverweight,
    accent: '#c97020',
    bg: '#fdeee4',
    descriptionLabel: labels.risksLabel,
    description: labels.descRisks,
  }
  return {
    label: labels.catObese,
    accent: '#cc3333',
    bg: '#fce5e2',
    descriptionLabel: labels.risksLabel,
    description: labels.descRisks,
  }
}

/** Maps BMI to needle rotation in degrees.
 *  BMI 15 → -78° (left), BMI 27.5 → 0° (top), BMI 40 → +78° (right)
 *  Capped at ±78° so the needle never lies flat at the arc edges. */
function getNeedleAngle(bmi: number): number {
  const clamped = Math.max(15, Math.min(40, bmi))
  return ((clamped - 15) / 25) * 156 - 78
}

function getPhoto(bmi: number, gender?: 'men' | 'women' | null): string {
  if (gender === 'women') {
    if (bmi >= 30) return '/images/woman/body type_BMI is in a high range..png'
    if (bmi >= 25) return '/images/woman/body_type_women_IF OBESE.png'
    return '/images/woman/body_type_women_before_normal.png'
  }
  if (bmi >= 30) return '/images/man/body type_before (Obese).png'
  if (bmi >= 25) return '/images/man/Body_type_before_(overweight).png'
  return '/images/man/body_type_men_before (normal).png'
}

// ─── gauge constants ──────────────────────────────────────────────
const CX = 100, CY = 100
const R_OUTER = 80, R_INNER = 58
const R_MID = (R_OUTER + R_INNER) / 2        // 69
const STROKE_W = R_OUTER - R_INNER            // 22
const TOTAL_ARC = Math.PI * R_MID             // ≈ 216.8

// The gauge arc path goes LEFT→TOP→RIGHT (top semicircle, sweep=1 = clockwise in SVG screen)
function arcPath(r: number) {
  return `M ${CX - r} ${CY} A ${r} ${r} 0 0 1 ${CX + r} ${CY}`
}

// BMI range the gauge represents: 15 – 40
const BMI_MIN = 15, BMI_SPAN = 25

const ZONES = [
  { from: 15,   to: 18.5, color: '#6ac5e8' },   // underweight – teal
  { from: 18.5, to: 25,   color: '#52b567' },   // normal – green
  { from: 25,   to: 30,   color: '#e89a30' },   // overweight – amber
  { from: 30,   to: 40,   color: '#d94040' },   // obese – red
]

function zoneStyle(from: number, to: number) {
  const start = ((from - BMI_MIN) / BMI_SPAN) * TOTAL_ARC
  const len   = ((to - from)     / BMI_SPAN) * TOTAL_ARC
  return {
    strokeDasharray: `${len.toFixed(2)} ${(TOTAL_ARC + 4).toFixed(2)}`,
    strokeDashoffset: (-start).toFixed(2),
    strokeWidth: STROKE_W,
    fill: 'none',
  }
}

// ─── icon components ──────────────────────────────────────────────
function IconLifestyle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
      <circle cx="12" cy="7" r="3.5" fill="#e8a090" opacity=".9"/>
      <path d="M5 19c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#e8a090" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7"/>
    </svg>
  )
}

function IconExercise() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
      <rect x="2" y="11" width="4.5" height="2" rx="1" fill="#7ba7d4"/>
      <rect x="17.5" y="11" width="4.5" height="2" rx="1" fill="#7ba7d4"/>
      <rect x="6.5" y="9" width="2" height="6" rx="1" fill="#4a7fbf"/>
      <rect x="15.5" y="9" width="2" height="6" rx="1" fill="#4a7fbf"/>
      <rect x="8.5" y="10" width="7" height="4" rx="1.5" fill="#5a8fcc"/>
    </svg>
  )
}

function IconWorkout() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
      <rect x="3" y="4" width="18" height="16" rx="3" stroke="#9b6fc4" strokeWidth="1.5" fill="none" opacity=".5"/>
      <rect x="8" y="2" width="2" height="4" rx="1" fill="#9b6fc4"/>
      <rect x="14" y="2" width="2" height="4" rx="1" fill="#9b6fc4"/>
      <path d="M7 11h10M7 15h6" stroke="#9b6fc4" strokeWidth="1.5" strokeLinecap="round" opacity=".8"/>
    </svg>
  )
}

// ─── main component ───────────────────────────────────────────────
export default function BMICard({
  bmi,
  gender,
  lifestyle = '',
  exercise = '',
  workoutFrequency = '',
  t: tProp,
}: Props) {
  const labels: BMICardT = { ...DEFAULT_T, ...tProp }
  const [ready, setReady] = useState(false)
  const cat = getCategory(bmi, labels)
  const angle = getNeedleAngle(bmi)
  const photo = getPhoto(bmi, gender)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120)
    return () => clearTimeout(t)
  }, [bmi])

  return (
    <div className={styles.card}>

      {/* ── colored header ── */}
      <div className={styles.header} style={{ background: cat.bg }}>
        <p className={styles.bmiTitle}>{labels.title}</p>
        <h2 className={styles.bmiCategory} style={{ color: cat.accent }}>{cat.label}</h2>

        {/* SVG gauge */}
        <div className={styles.gaugeWrap}>
          <svg viewBox="0 0 200 105" className={styles.gaugeSvg} aria-hidden="true" overflow="visible">
            <defs>
              <filter id="needle-shadow">
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="rgba(0,0,0,0.2)" />
              </filter>
            </defs>

            {/* background track */}
            <path
              d={arcPath(R_MID)}
              fill="none"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth={STROKE_W}
              strokeLinecap="butt"
            />

            {/* colored zones (left → right = underweight → obese) */}
            {ZONES.map((z) => (
              <path
                key={z.from}
                d={arcPath(R_MID)}
                stroke={z.color}
                style={zoneStyle(z.from, z.to)}
              />
            ))}

            {/* zone dividers */}
            {[18.5, 25, 30].map((v) => {
              const a = Math.PI * (1 - (v - BMI_MIN) / BMI_SPAN)
              const x1 = CX + R_INNER * Math.cos(a), y1 = CY - R_INNER * Math.sin(a)
              const x2 = CX + R_OUTER * Math.cos(a), y2 = CY - R_OUTER * Math.sin(a)
              return <line key={v} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="2"/>
            })}

            {/* needle — rect whose BOTTOM sits exactly at the pivot (0,0 in local coords).
                fill-box makes transform-origin relative to the rect itself, so
                'center bottom' = (0,0) = gauge center. Immune to SVG scaling. */}
            <g transform={`translate(${CX} ${CY})`}>
              <rect
                x={-1.5}
                y={-(R_OUTER - 6)}
                width={3}
                height={R_OUTER - 6}
                rx={1.5}
                fill="#1a1a18"
                filter="url(#needle-shadow)"
                style={{
                  transform: `rotate(${ready ? angle : -90}deg)`,
                  transformBox: 'fill-box',
                  transformOrigin: 'center bottom',
                  transition: ready ? 'transform 1.2s cubic-bezier(0.34, 1.4, 0.64, 1)' : 'none',
                }}
              />
            </g>

            {/* center hub */}
            <circle cx={CX} cy={CY} r="8"  fill="white" />
            <circle cx={CX} cy={CY} r="4"  fill="#1a1a18" />
            <circle cx={CX} cy={CY} r="1.5" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── white body ── */}
      <div className={styles.body}>
        <p className={styles.description}>
          <strong>{cat.descriptionLabel}</strong>{' '}{cat.description}
        </p>

        <div className={styles.infoList}>
          {[
            { Icon: IconLifestyle, label: labels.labelLifestyle, value: lifestyle },
            { Icon: IconExercise,  label: labels.labelExercise, value: exercise },
            { Icon: IconWorkout,   label: labels.labelWorkout,  value: workoutFrequency },
          ].map(({ Icon, label, value }) => (
            <div key={label} className={styles.infoRow}>
              <div className={styles.infoIconWrap}><Icon /></div>
              <div>
                <span className={styles.infoLabel}>{label}</span>
                <span className={styles.infoValue}>{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* person photo */}
        <div className={styles.photoWrap}>
          <img
            src={photo}
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center' }}
          />
        </div>
      </div>
    </div>
  )
}
