'use client'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter, useParams, usePathname } from 'next/navigation'
import styles from './page.module.css'
import interStyles from './interstitial.module.css'
import { QUIZ_STEPS, TOTAL_STEPS, QUIZ_PHASE1_END, HEIGHT_STEP, WEIGHT_STEP, GOAL_WEIGHT_STEP } from '@/lib/quiz-data'
import { useQuizStore } from '@/lib/quiz-store'
import { useLangStore } from '@/lib/lang-store'
import { getTranslatedSteps, useStepPageT, useIntroT } from '@/lib/i18n'
import { useTranslationOverrides, applyStepOverrides, applyStepPageOverrides } from '@/lib/use-translation-overrides'
import { QUIZ_URLS } from '@/lib/quiz-config'
import { calcBMI, getBMICategory, toCanonical, fromCanonical, splitFtIn } from '@/lib/bmi-utils'
import QuizHeader from '@/components/QuizHeader/QuizHeader'
import QuizFooter from '@/components/QuizFooter/QuizFooter'
import OptionCard from '@/components/OptionCard/OptionCard'
import TargetZones from '@/components/TargetZones/TargetZones'
import DatePicker from '@/components/DatePicker/DatePicker'
import WeightChart from '@/components/WeightChart/WeightChart'
import BMICard from '@/components/BMICard/BMICard'

const EXCLUSIVE_OPTION_IDS = new Set(['none'])
// HEIGHT_STEP and WEIGHT_STEP are imported from quiz-data

const AGE_INSIGHT_IMAGES = {
  men: {
    '20s': '/images/Men in their 20s.png',
    '30s': '/images/Men in their 30s.png',
    '40s': '/images/Men in their 40s.png',
    '50s': '/images/Man in ther 50s.png',
    '60s': '/images/man in their 60s.png',
    '70s': '/images/man in their 70s.png',
  },
  women: {
    '20s': '/images/step01_age_women_IN THEIR 18to29.png',
    '30s': '/images/Women in their 30s.png',
    '40s': '/images/Women in their 40s.png',
    '50s': '/images/step01_age_women_IN THEIR 50plus.png',
    '60s': '/images/step01_age_women_IN THEIR 60plus.png',
    '70s': '/images/step01_age_women_IN THEIR70plus.png',
  },
} as const

function getStepBmiImage(gender: 'men' | 'women' | null, category: string | null) {
  if (gender === 'men') {
    if (category === 'Obese') return '/images/results_bmi_card_obese_men.png'
    if (category === 'Overweight') return '/images/results_bmi_card_overweight_men.png'
    return '/images/results_bmi_card_normal_men.png'
  }

  if (category === 'Obese') return '/images/body_type_women_IF OBESE.png'
  if (category === 'Normal') return '/images/results_bmi_card_normal_woman.png'
  if (category === 'Overweight') return '/images/body_type_women_before_normal.png'
  return '/images/results_bmi_card_normal.png'
}

function getGoalImage(gender: 'men' | 'women' | null, key?: 'too-low' | 'a-lot' | 'moderate' | 'small') {
  if (key === 'too-low') return gender === 'men' ? '/images/body_type_men_before_normal.png' : '/images/body_type_women_before_normal.png'
  if (key === 'a-lot') return '/images/body_type_men_after_athletic.png'
  return gender === 'men' ? '/images/body_type_men_before_normal.png' : '/images/body_type_women_before_normal.png'
}

function StepContent({
  stepNum,
  navigate,
  ov,
  lang,
}: {
  stepNum: number
  navigate: (dir: 'forward' | 'backward') => void
  ov: Record<string, string>
  lang: import('@/lib/lang-store').LangCode
}) {
  const { answers, gender, weightUnit, setAnswer, setWeightUnit } = useQuizStore()
  const rawT = useStepPageT(lang)
  const introT = useIntroT(lang)
  const t = useMemo(() => applyStepPageOverrides(rawT, ov), [rawT, ov])
  const translatedSteps = useMemo(() => getTranslatedSteps(lang).map((s) => applyStepOverrides(s, ov)), [lang, ov])
  const stepData = translatedSteps.find((s) => s.step === stepNum)

  const savedAnswer = answers[stepNum]
  const canonicalUnit = stepData?.units?.[0] ?? stepData?.unit ?? ''

  const [inputUnit, setInputUnit] = useState<string>(() => {
    // Default weight to kg, height to cm
    if (stepData?.units?.includes('kg') && canonicalUnit === 'lbs') return 'kg'
    return canonicalUnit
  })
  const [inputValue, setInputValue] = useState<string>(() => {
    if (typeof savedAnswer === 'string' && stepData?.type === 'input-number' && savedAnswer) return savedAnswer
    return ''
  })
  // ft+in dual inputs for height step (when unit is 'in' and canonical is 'cm')
  const [ftValue, setFtValue] = useState<string>(() => {
    if (stepData?.units?.includes('in') && canonicalUnit === 'cm' && typeof savedAnswer === 'string' && savedAnswer) {
      const totalIn = Number(savedAnswer) / 2.54
      return String(Math.floor(totalIn / 12))
    }
    return ''
  })
  const [inchValue, setInchValue] = useState<string>(() => {
    if (stepData?.units?.includes('in') && canonicalUnit === 'cm' && typeof savedAnswer === 'string' && savedAnswer) {
      const totalIn = Number(savedAnswer) / 2.54
      return String(Math.round(totalIn % 12))
    }
    return ''
  })
  const [textValue, setTextValue] = useState<string>(
    typeof savedAnswer === 'string' && stepData?.type === 'input-text' ? savedAnswer : ''
  )
  const [dateValue, setDateValue] = useState<string>(
    typeof savedAnswer === 'string' && stepData?.type === 'input-date' ? savedAnswer : ''
  )
  const [selected, setSelected] = useState<string[]>(
    Array.isArray(savedAnswer) ? savedAnswer : savedAnswer ? [savedAnswer as string] : []
  )
  const [consentChecked, setConsentChecked] = useState(false)

  const liveBMI = useMemo<number | null>(() => {
    if (!stepData?.showBMICard) return null
    const canonical = toCanonical(inputValue, inputUnit, canonicalUnit)
    const weightLbs = Number(canonical)
    const heightCm = Number(answers[HEIGHT_STEP])
    if (!weightLbs || !heightCm) return null
    return calcBMI(weightLbs, heightCm)
  }, [inputValue, inputUnit, canonicalUnit, stepData?.showBMICard, answers])

  const goalAnalysis = useMemo<{ key: 'too-low' | 'a-lot' | 'moderate' | 'small'; pct: number } | null>(() => {
    if (!stepData?.showGoalCard) return null
    const canonical = toCanonical(inputValue, inputUnit, canonicalUnit)
    const goalLbs = Number(canonical)
    const currentLbs = Number(answers[WEIGHT_STEP])
    const heightCm = Number(answers[HEIGHT_STEP])
    if (!goalLbs || !currentLbs || !heightCm) return null
    const goalBmi = calcBMI(goalLbs, heightCm)
    const pct = ((currentLbs - goalLbs) / currentLbs) * 100
    if (goalBmi < 18.5) return { key: 'too-low', pct }
    if (pct > 20) return { key: 'a-lot', pct }
    if (pct > 8) return { key: 'moderate', pct }
    return { key: 'small', pct: Math.max(0, pct) }
  }, [inputValue, inputUnit, canonicalUnit, stepData?.showGoalCard, answers])

  if (!stepData) return null

  const isSingle = stepData.type === 'single'
  const isMulti = stepData.type === 'multi'
  const isInput = stepData.type === 'input-number'
  const isTextInput = stepData.type === 'input-text'
  const isDateInput = stepData.type === 'input-date'
  const isInterstitial = stepData.type === 'interstitial'
  const isTargetZones = stepData.type === 'target-zones'
  const hasUnitToggle = isInput && (stepData.units?.length ?? 0) > 1
  const isFtIn = isInput && inputUnit === 'in' && canonicalUnit === 'cm'

  // For ft+in mode, compute total inches as the effective input value
  const activeInputValue = isFtIn
    ? (ftValue || inchValue ? String(Number(ftValue || 0) * 12 + Number(inchValue || 0)) : '')
    : inputValue

  const handleToggle = (id: string) => {
    if (isSingle) {
      setSelected([id])
      setAnswer(stepNum, id)
      setTimeout(() => navigate('forward'), 50)
    } else {
      setSelected((prev) => {
        let next: string[]
        if (EXCLUSIVE_OPTION_IDS.has(id)) {
          next = prev.includes(id) ? [] : [id]
        } else {
          const withoutExclusive = prev.filter((x) => !EXCLUSIVE_OPTION_IDS.has(x))
          next = withoutExclusive.includes(id)
            ? withoutExclusive.filter((x) => x !== id)
            : [...withoutExclusive, id]
        }
        queueMicrotask(() => setAnswer(stepNum, next))
        return next
      })
    }
  }

  const handleUnitSwitch = (newUnit: string) => {
    if (newUnit === inputUnit || !stepData.units) return
    const canonical = toCanonical(activeInputValue, inputUnit, canonicalUnit)
    setInputUnit(newUnit)
    if (newUnit === 'in') {
      const totalIn = Number(fromCanonical(canonical, 'in', 'cm'))
      if (totalIn > 0) {
        setFtValue(String(Math.floor(totalIn / 12)))
        setInchValue(String(Math.round(totalIn % 12)))
      }
    } else {
      setInputValue(fromCanonical(canonical, newUnit, canonicalUnit))
    }
  }

  // ── Step 1: age selection — custom arch-card layout ────────────────────
  if (stepNum === 1 && stepData.options) {
    return (
      <main className={styles.ageMain}>
        <div className={styles.ageHeader}>
          <p className={styles.ageBadge}>{introT.badge_quiz}</p>
          <h1 className={styles.ageTitle}>{introT.headline}</h1>
          <p className={styles.ageSubtitle}>{introT.age_question}</p>
        </div>
        <div className={styles.ageGridWrap}>
          <div className={styles.ageGrid}>
            {stepData.options.map((opt) => {
              const img = gender === 'men' ? (opt.imageMen ?? opt.imageWomen) : (opt.imageWomen ?? opt.imageMen)
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={styles.ageCard}
                  onClick={() => handleToggle(opt.id)}
                >
                  <div className={styles.ageCardArch}>
                    {img && <img src={img} alt="" aria-hidden="true" className={styles.ageCardImg} />}
                  </div>
                  <span className={styles.ageCardLabel}>{opt.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </main>
    )
  }

  // ── Age insight: dynamic interstitial based on age + gender ───────────────
  if (stepData.type === 'age-insight') {
    const age = Number(answers[13]) || 0
    const decade = age < 30 ? '20s' : age < 40 ? '30s' : age < 50 ? '40s' : age < 60 ? '50s' : age < 70 ? '60s' : '70s'
    const isMen = gender === 'men'

    const insightData: Record<string, { headline: string; body: string }> = {
      '20s': {
        headline: isMen ? t.age_insight_20s_men_headline : t.age_insight_20s_women_headline,
        body: isMen ? t.age_insight_20s_men_body : t.age_insight_20s_women_body,
      },
      '30s': {
        headline: isMen ? t.age_insight_30s_men_headline : t.age_insight_30s_women_headline,
        body: isMen ? t.age_insight_30s_men_body : t.age_insight_30s_women_body,
      },
      '40s': {
        headline: isMen ? t.age_insight_40s_men_headline : t.age_insight_40s_women_headline,
        body: isMen ? t.age_insight_40s_men_body : t.age_insight_40s_women_body,
      },
      '50s': {
        headline: isMen ? t.age_insight_50s_men_headline : t.age_insight_50s_women_headline,
        body: isMen ? t.age_insight_50s_men_body : t.age_insight_50s_women_body,
      },
      '60s': {
        headline: isMen ? t.age_insight_60s_men_headline : t.age_insight_60s_women_headline,
        body: isMen ? t.age_insight_60s_men_body : t.age_insight_60s_women_body,
      },
      '70s': {
        headline: isMen ? t.age_insight_70s_men_headline : t.age_insight_70s_women_headline,
        body: isMen ? t.age_insight_70s_men_body : t.age_insight_70s_women_body,
      },
    }
    const insight = insightData[decade] ?? insightData['40s']
    return (
      <>
        <main className={interStyles.main}>
          <div className={interStyles.imageCircleWrap}>
            <img src={AGE_INSIGHT_IMAGES[isMen ? 'men' : 'women'][decade]} alt="" aria-hidden="true" className={interStyles.imageCircle} />
          </div>
          <div className={interStyles.body}>
            <h1 className={interStyles.headline}>{insight.headline}</h1>
            <p className={interStyles.para}>{insight.body}</p>
          </div>
        </main>
        <QuizFooter onClick={() => navigate('forward')} sticky={false} label={stepData.buttonLabel} />
      </>
    )
  }

  // ── Weight goal projection ──────────────────────────────────────────────────
  if (stepData.type === 'weight-goal') {
    const rawCurrent = String(answers[11] ?? '')
    const rawGoal = String(answers[12] ?? '')
    const unit = weightUnit ?? 'lbs'

    // Answers for weight steps are already stored in canonical lbs.
    // Do not convert again based on display unit, otherwise values get multiplied.
    const currentLbs = rawCurrent ? Number(rawCurrent) : 175
    const goalLbs = rawGoal ? Number(rawGoal) : 150

    // Display goal weight in user's unit
    const goalDisplay = unit === 'kg'
      ? `${Math.round(Number(fromCanonical(String(goalLbs), 'kg', 'lbs')))} kg`
      : `${Math.round(goalLbs)} lbs`

    // Projected date: ~1 lb/week loss rate
    const weeksNeeded = Math.max(4, Math.ceil(Math.abs(currentLbs - goalLbs) / 1))
    const goalDate = new Date()
    goalDate.setDate(goalDate.getDate() + weeksNeeded * 7)
    const monthName = goalDate.toLocaleString('en-US', { month: 'long' })
    const goalDateStr = `${monthName} ${goalDate.getFullYear()}`

    return (
      <>
        <main className={interStyles.main} style={{ gap: 16, paddingTop: 100, paddingBottom: 20 }}>
          <div style={{ textAlign: 'center', width: 'calc(100% - 40px)', maxWidth: 540 }}>
            <p style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.3, color: 'var(--color-text)', margin: 0, letterSpacing: '-0.02em' }}
              dangerouslySetInnerHTML={{ __html: t.weight_goal_headline(`<span style="display:block;font-size:20px;font-weight:700;margin-top:6px;letter-spacing:-0.01em;color:var(--color-primary)">${goalDisplay}</span>`) }}
            />
          </div>

          <WeightChart
            startWeight={currentLbs}
            goalWeight={goalLbs}
            goalDate={goalDateStr}
            unit={unit}
            label={t.weight_chart_label}
          />

          <div style={{
            background: 'var(--color-primary)',
            borderRadius: 14,
            padding: '12px 24px',
            textAlign: 'center',
            width: 'calc(100% - 40px)',
            maxWidth: 540,
            boxSizing: 'border-box',
          }}>
            <p style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginBottom: 2, marginTop: 0 }}>
              {t.weight_goal_estimated}
            </p>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>
              {goalDisplay} {t.weight_goal_by} {goalDateStr}
            </p>
          </div>
        </main>
        <QuizFooter onClick={() => navigate('forward')} sticky={false} label={stepData.buttonLabel} />
      </>
    )
  }

  // ── BMI card step ──────────────────────────────────────────────────
  if (stepData.type === 'bmi-card') {
    const heightCm = Number(answers[HEIGHT_STEP]) || 170
    const weightLbs = Number(answers[WEIGHT_STEP]) || 175
    const bmi = calcBMI(weightLbs, heightCm)

    const routineAns = String(answers[3] ?? '')
    const lifestyle =
      routineAns === 'active' ? t.bmi_lifestyle_active
        : routineAns === 'feet' ? t.bmi_lifestyle_feet
          : routineAns === 'home' ? t.bmi_lifestyle_home
            : t.bmi_lifestyle_sedentary

    const exerciseAns = String(answers[5] ?? '')
    const exercise =
      exerciseAns === 'often' ? t.bmi_exercise_often
        : exerciseAns === 'sometimes' ? t.bmi_exercise_sometimes
          : exerciseAns === 'sort-of' ? t.bmi_exercise_sort_of
            : t.bmi_exercise_no

    const workoutFreq =
      exerciseAns === 'often' ? t.bmi_workout_high
        : exerciseAns === 'sometimes' ? t.bmi_workout_moderate
          : t.bmi_workout_low

    return (
      <>
        <main className={styles.main} style={{ paddingBottom: 32 }}>
          <div className={styles.content}>
            <BMICard
              bmi={bmi}
              gender={gender}
              lifestyle={lifestyle}
              exercise={exercise}
              workoutFrequency={workoutFreq}
              t={{
                title: t.bmi_card_title,
                catUnderweight: t.bmi_cat_underweight,
                catNormal: t.bmi_cat_normal,
                catOverweight: t.bmi_cat_overweight,
                catObese: t.bmi_cat_obese,
                healthyLabel: t.bmi_healthy_label,
                risksLabel: t.bmi_risks_label,
                descUnderweight: t.bmi_desc_underweight,
                descNormal: t.bmi_desc_normal,
                descRisks: t.bmi_desc_risks,
                labelLifestyle: t.bmi_label_lifestyle,
                labelExercise: t.bmi_label_exercise,
                labelWorkout: t.bmi_label_workout,
              }}
            />
          </div>
        </main>
        <QuizFooter onClick={() => navigate('forward')} sticky={false} label={stepData.buttonLabel} />
      </>
    )
  }

  if (isInterstitial && stepData.interstitial) {
    const { imagesMen, imagesWomen, headline, body, note, circular, fullWidthTop } = stepData.interstitial
    const images = (gender === 'men' ? imagesMen : imagesWomen) ?? stepData.interstitial.images
    const isPair = images.length >= 2
    return (
      <>
        <main className={interStyles.main}>
          {fullWidthTop ? (
            <div className={interStyles.imageTopFull}>
              <img src={images[0]} alt="" aria-hidden="true" />
            </div>
          ) : circular ? (
            <div className={interStyles.imageCircleWrap}>
              <img src={images[0]} alt="" aria-hidden="true" className={interStyles.imageCircle} />
            </div>
          ) : (
            <div className={`${interStyles.imageCard} ${isPair ? interStyles.pair : ''}`}>
              {images.map((src, i) => (
                <img key={i} src={src} alt="" aria-hidden="true" />
              ))}
            </div>
          )}
          {note && <p className={interStyles.note}>{note}</p>}
          <div className={interStyles.body}>
            <h1 className={interStyles.headline}>{headline}</h1>
            <p className={interStyles.para}>{body}</p>
          </div>
        </main>
        <QuizFooter onClick={() => navigate('forward')} sticky={false} />
      </>
    )
  }

  const handleContinue = () => {
    if (isInput) {
      setAnswer(stepNum, toCanonical(activeInputValue, inputUnit, canonicalUnit))
      if (stepNum === WEIGHT_STEP) setWeightUnit(inputUnit)
    } else if (isTextInput) setAnswer(stepNum, textValue.trim())
    else if (isDateInput && dateValue) setAnswer(stepNum, dateValue)
    navigate('forward')
  }

  const handleSkip = () => navigate('forward')

  const inputNum = Number(toCanonical(activeInputValue, inputUnit, canonicalUnit))
  const isValidInput = activeInputValue.trim().length > 0 && !isNaN(inputNum) && inputNum > 0
  const isValidText = textValue.trim().length >= 2

  const inputError: string | null = (() => {
    if (!isInput || !activeInputValue.trim()) return null
    if (!isValidInput) return null
    if (stepData.validation) {
      const { min, max } = stepData.validation
      const displayMin = Math.round(Number(fromCanonical(String(min), inputUnit, canonicalUnit)))
      const displayMax = Math.round(Number(fromCanonical(String(max), inputUnit, canonicalUnit)))
      const unit = inputUnit || stepData.unit || ''
      if (inputNum < min || inputNum > max) return t.error_range(displayMin, displayMax, unit)
    }
    if (stepNum === GOAL_WEIGHT_STEP) {
      const currentLbs = Number(answers[WEIGHT_STEP])
      if (currentLbs > 0 && inputNum >= currentLbs) return t.goal_weight_too_high
    }
    return null
  })()

  const baseCanContinue = isInput
    ? isValidInput && !inputError
    : isTextInput ? isValidText
      : isDateInput ? (!!dateValue || !!stepData.skippable)
        : selected.length > 0
  const canContinue = stepData.requiresConsent ? (baseCanContinue && consentChecked) : baseCanContinue

  if (isTargetZones && stepData.options) {
    return (
      <>
        <main className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.question}>{stepData.question}</h1>
            <TargetZones
              options={stepData.options}
              selected={selected}
              onToggle={(id) => {
                setSelected((prev) => {
                  const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
                  queueMicrotask(() => setAnswer(stepNum, next))
                  return next
                })
              }}
            />
          </div>
        </main>
        <QuizFooter disabled={selected.length === 0} onClick={handleContinue} />
      </>
    )
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.question}>{stepData.question}</h1>
          {stepData.subtitle && <p className={styles.subtitle}>{stepData.subtitle}</p>}

          {(isSingle || isMulti) && stepData.options && (
            <div className={styles.optionsGroup} role={isSingle ? 'radiogroup' : 'group'}>
              {stepData.options.map((opt, i) => {
                const genderImage = gender === 'men' ? (opt.imageMen ?? opt.imageWomen) : (opt.imageWomen ?? opt.imageMen)
                const resolvedOpt = (opt.imageMen || opt.imageWomen) ? { ...opt, image: genderImage ?? opt.image } : opt
                return (
                  <OptionCard
                    key={opt.id}
                    option={resolvedOpt}
                    selected={selected.includes(opt.id)}
                    onToggle={() => handleToggle(opt.id)}
                    animationDelay={0.05 + i * 0.05}
                    type={isSingle ? 'single' : 'multi'}
                    exclusion={!!stepData.exclusion}
                    positive={EXCLUSIVE_OPTION_IDS.has(opt.id)}
                  />
                )
              })}
            </div>
          )}

          {isInput && (
            <>
              {hasUnitToggle && (
                <div className={styles.unitToggle}>
                  {stepData.units!.map((u) => (
                    <button
                      key={u}
                      className={`${styles.unitBtn} ${inputUnit === u ? styles.unitBtnActive : ''}`}
                      onClick={() => handleUnitSwitch(u)}
                      type="button"
                    >
                      {u}
                    </button>
                  ))}
                </div>
              )}

              {isFtIn ? (
                <div className={styles.ftInWrap}>
                  <div className={styles.ftInField}>
                    <input
                      className={`${styles.numberInput} ${inputError ? styles.numberInputError : ''}`}
                      type="number" inputMode="numeric"
                      placeholder="0" value={ftValue}
                      onChange={(e) => setFtValue(e.target.value)}
                      min="0" max="9" autoFocus
                    />
                    <span className={styles.inputUnit}>ft</span>
                  </div>
                  <div className={styles.ftInField}>
                    <input
                      className={`${styles.numberInput} ${inputError ? styles.numberInputError : ''}`}
                      type="number" inputMode="numeric"
                      placeholder="0" value={inchValue}
                      onChange={(e) => setInchValue(e.target.value)}
                      min="0" max="11"
                    />
                    <span className={styles.inputUnit}>in</span>
                  </div>
                </div>
              ) : (
                <div className={styles.inputWrap}>
                  <input
                    className={`${styles.numberInput} ${inputError ? styles.numberInputError : ''}`}
                    type="number"
                    inputMode="decimal"
                    placeholder={stepData.placeholder ?? ''}
                    value={inputValue}
                    onChange={(e) => {
                      const val = e.target.value
                      // Auto-switch: single digit 4–8 in cm mode looks like feet → switch to ft/in
                      if (stepData?.units?.includes('in') && canonicalUnit === 'cm' && val.length === 1) {
                        const num = Number(val)
                        if (num >= 4 && num <= 8) {
                          setInputUnit('in')
                          setFtValue(val)
                          setInchValue('')
                          return
                        }
                      }
                      setInputValue(val)
                    }}
                    autoFocus
                  />
                  <span className={styles.inputUnit}>{hasUnitToggle ? inputUnit : stepData.unit}</span>
                </div>
              )}
              {inputError && <p className={styles.inputErrorMsg}>{inputError}</p>}

              {stepData.hint && (
                <div className={styles.hintCard}>
                  <span className={styles.hintIcon} aria-hidden="true" />
                  <div className={styles.hintBody}>
                    {stepData.hintTitle && <p className={styles.hintTitle}>{stepData.hintTitle}</p>}
                    <p className={styles.hintText}>{stepData.hint}</p>
                  </div>
                </div>
              )}

              {stepData.showBMICard && (() => {
                const cat = liveBMI ? getBMICategory(liveBMI) : null
                const catClass = cat === 'Underweight' ? styles.bmiCardUnderweight
                  : cat === 'Normal' ? styles.bmiCardNormal
                    : cat === 'Overweight' ? styles.bmiCardOverweight
                      : cat === 'Obese' ? styles.bmiCardObese : ''
                return (
                  <div className={`${styles.bmiLiveCard} ${catClass} ${liveBMI ? styles.bmiLiveCardVisible : ''}`}>
                    {liveBMI && cat ? (
                      <>
                        <img
                          src={getStepBmiImage(gender, cat)}
                          alt=""
                          aria-hidden="true"
                          className={styles.bmiCardImage}
                        />
                        <div className={styles.bmiCardContent}>
                          <p className={styles.bmiCardTitle}>
                            {cat === 'Underweight' && t.bmi_underweight(liveBMI.toFixed(1))}
                            {cat === 'Normal' && t.bmi_normal(liveBMI.toFixed(1))}
                            {cat === 'Overweight' && t.bmi_overweight(liveBMI.toFixed(1))}
                            {cat === 'Obese' && t.bmi_obese(liveBMI.toFixed(1))}
                          </p>
                          <p className={styles.bmiCardBody}>
                            {cat === 'Underweight' && t.bmi_underweight_body}
                            {cat === 'Normal' && t.bmi_normal_body}
                            {cat === 'Overweight' && t.bmi_overweight_body}
                            {cat === 'Obese' && t.bmi_obese_body}
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className={styles.bmiLivePlaceholder}>{t.bmi_checking}</p>
                    )}
                  </div>
                )
              })()}

              {stepData.showGoalCard && (() => {
                const visibleAnalysis = goalAnalysis?.key === 'too-low' ? null : goalAnalysis
                return (
                  <div className={`${styles.goalCard} ${visibleAnalysis ? styles.goalCardVisible : ''}`}>
                    {visibleAnalysis ? (
                      <>
                        <img
                          src={getGoalImage(gender, visibleAnalysis.key)}
                          alt=""
                          aria-hidden="true"
                          className={styles.goalCardImage}
                        />
                        <div className={styles.goalCardContent}>
                          <p className={styles.goalDesc}>
                            {visibleAnalysis.key === 'a-lot' && t.goal_a_lot}
                            {visibleAnalysis.key === 'moderate' && t.goal_moderate}
                            {visibleAnalysis.key === 'small' && t.goal_small}
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className={styles.bmiLivePlaceholder}>{t.goal_placeholder}</p>
                    )}
                  </div>
                )
              })()}
            </>
          )}

          {isTextInput && (
            <div className={styles.textInputWrap}>
              <input
                className={styles.textInput}
                type="text"
                placeholder={stepData.placeholder ?? ''}
                value={textValue}
                maxLength={20}
                onChange={(e) => setTextValue(e.target.value)}
                autoFocus
                autoComplete="given-name"
              />
              <span className={styles.charCount}>{t.char_count(textValue.length)}</span>
            </div>
          )}

          {isDateInput && (
            <div className={styles.dateInputWrap}>
              <DatePicker value={dateValue} onChange={setDateValue} />
            </div>
          )}

          {isInput && stepData.requiresConsent && (
            <div
              className={styles.consentRow}
              onClick={() => setConsentChecked((v) => !v)}
              role="checkbox"
              aria-checked={consentChecked}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setConsentChecked((v) => !v) } }}
            >
              <div className={`${styles.consentCheck} ${consentChecked ? styles.consentChecked : ''}`} aria-hidden="true">
                {consentChecked && (
                  <svg viewBox="0 0 14 14" fill="none" width="14" height="14">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className={styles.consentText}>
                {t.consent_text} <a href={QUIZ_URLS.privacyPolicy(lang)} onClick={(e) => e.stopPropagation()}>{t.consent_privacy_link}</a>
              </span>
            </div>
          )}
        </div>
      </main>

      {(isMulti || isInput || isTextInput || isDateInput) && (
        <QuizFooter
          disabled={!canContinue}
          onClick={handleContinue}
          onSkip={isDateInput && stepData.skippable ? handleSkip : undefined}
          label={stepData.buttonLabel}
        />
      )}
    </>
  )
}

export default function QuizStepPage() {
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const { setDirection, setCurrentStep } = useQuizStore()
  const { lang: storeLang, setLang } = useLangStore()
  const urlLang = (params.lang as string | undefined) ?? storeLang
  const lang = urlLang as import('@/lib/lang-store').LangCode

  // Sync URL lang into the store so step pages always use the correct language
  // even when navigated to directly (without going through the intro page first).
  useEffect(() => {
    if (urlLang && urlLang !== storeLang) setLang(lang)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlLang])

  const ov = useTranslationOverrides(lang)

  const [stepNum, setStepNum] = useState(Number(params.step))

  useEffect(() => {
    setCurrentStep(stepNum)
  }, [stepNum, setCurrentStep])

  useEffect(() => {
    const stepFromPath = Number(pathname.match(/\/quiz\/(\d+)/)?.[1])
    if (stepFromPath && stepFromPath !== stepNum) setStepNum(stepFromPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    const nextStep = QUIZ_STEPS.find((s) => s.step === stepNum + 1)
    if (!nextStep?.options) return
    nextStep.options.forEach((opt) => {
      ;[opt.image, opt.imageMen, opt.imageWomen].filter(Boolean).forEach((src) => {
        const img = new Image()
        img.src = src as string
      })
    })
  }, [stepNum])

  const navigate = useCallback(
    (direction: 'forward' | 'backward') => {
      setDirection(direction)
      const base = `/${lang}/quiz`
      if (direction === 'forward') {
        if (QUIZ_PHASE1_END && stepNum === QUIZ_PHASE1_END) {
          // step 21 = bmi-card → go directly to plan-loading ring/reviews page
          router.push(`${base}/plan-loading`)
        } else if (stepNum >= TOTAL_STEPS) {
          router.push(`${base}/loading-screen`)
        } else {
          const next = stepNum + 1
          setStepNum(next)
          window.history.pushState(null, '', `${base}/${next}`)
          window.scrollTo(0, 0)
        }
      } else {
        if (stepNum <= 1) {
          router.push(`/${lang}`)
        } else {
          const prev = stepNum - 1
          setStepNum(prev)
          window.history.pushState(null, '', `${base}/${prev}`)
          window.scrollTo(0, 0)
        }
      }
    },
    [stepNum, router, setDirection, lang]
  )

  const currentStepData = QUIZ_STEPS.find((s) => s.step === stepNum)
  const isAgeStep = stepNum === 1
  const isInterstitialStep = currentStepData?.type === 'interstitial' || currentStepData?.type === 'weight-goal' || currentStepData?.type === 'bmi-card'
  const questionSteps = QUIZ_STEPS.filter((s) => s.type !== 'interstitial' && s.type !== 'weight-goal' && s.type !== 'bmi-card')
  const questionStepNum = questionSteps.findIndex((s) => s.step === stepNum) + 1
  const questionTotal = questionSteps.length

  return (
    <>
      <QuizHeader
        step={isInterstitialStep || isAgeStep ? undefined : questionStepNum || undefined}
        totalSteps={isInterstitialStep || isAgeStep ? undefined : questionTotal}
        hideProgress={isInterstitialStep || isAgeStep}
        overlay={isInterstitialStep || isAgeStep}
        onBack={() => navigate('backward')}
      />
      <StepContent key={stepNum} stepNum={stepNum} navigate={navigate} ov={ov} lang={lang} />
    </>
  )
}
