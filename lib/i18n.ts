import type { LangCode } from './lang-store'
import { QUIZ_STEPS } from './quiz-data'
import type { QuizStep } from './quiz-data'
import { localizeBrandValue } from './brand'
import { ACTIVE_LANGUAGES } from './quiz-config'

export const LANGUAGES = ACTIVE_LANGUAGES

// ─── HOW TO ADD A NEW LANGUAGE ────────────────────────────────────────────────
// 1. Add the code to LangCode in lang-store.ts:      export type LangCode = 'en' | 'pl'
// 2. Add it to ACTIVE_LANGUAGES in quiz-config.ts:   { code: 'pl', label: 'Polski', flag: '🇵🇱' }
// 3. Add it to BRAND_NAMES in quiz-config.ts:        pl: 'Moja Marka'
// 4. Copy each EN_* const below, rename to PL_*, translate strings
// 5. Uncomment the `case 'pl': return PL_*` lines in each useXxxT() function
// 6. Add the new lang to COPY in paywall-copy.ts and REVIEWS in reviews-data.ts
// ─────────────────────────────────────────────────────────────────────────────

interface IntroTranslations {
  badge_quiz: string
  badge_tag: string
  headline: string
  subheadline: string
  choose_label: string
  gender_men: string
  gender_women: string
  age_group_label: string
  age_question: string
  img_alt: string
  lang_button_aria: string
  consent_prefix: string
  consent_tos: string
  consent_cookie: string
  consent_privacy: string
  consent_comma: string
  consent_and: string
  consent_error: string
  footer_manage: string
  footer_about: string
  footer_help: string
  footer_privacy: string
  footer_conditions: string
  footer_disclaimer: string
  footer_copy: string
  footer_app_store_over: string
  footer_app_store_main: string
  footer_google_play_over: string
  footer_google_play_main: string
  age_18_29: string
  age_30_39: string
  age_40_49: string
  age_50_plus: string
}

export interface UITranslations {
  continue: string
  skip: string
  go_back: string
  quiz_progress: string
}

export interface StepPageTranslations {
  error_range: (min: number, max: number, unit: string) => string
  bmi_checking: string
  bmi_underweight: (bmi: string) => string
  bmi_underweight_body: string
  bmi_normal: (bmi: string) => string
  bmi_normal_body: string
  bmi_overweight: (bmi: string) => string
  bmi_overweight_body: string
  bmi_obese: (bmi: string) => string
  bmi_obese_body: string
  goal_placeholder: string
  goal_weight_too_high: string
  goal_too_low: string
  goal_a_lot: string
  goal_moderate: string
  goal_small: string
  consent_text: string
  consent_privacy_link: string
  char_count: (n: number) => string
  age_insight_20s_men_headline: string
  age_insight_20s_men_body: string
  age_insight_20s_women_headline: string
  age_insight_20s_women_body: string
  age_insight_30s_men_headline: string
  age_insight_30s_men_body: string
  age_insight_30s_women_headline: string
  age_insight_30s_women_body: string
  age_insight_40s_men_headline: string
  age_insight_40s_men_body: string
  age_insight_40s_women_headline: string
  age_insight_40s_women_body: string
  age_insight_50s_men_headline: string
  age_insight_50s_men_body: string
  age_insight_50s_women_headline: string
  age_insight_50s_women_body: string
  age_insight_60s_men_headline: string
  age_insight_60s_men_body: string
  age_insight_60s_women_headline: string
  age_insight_60s_women_body: string
  age_insight_70s_men_headline: string
  age_insight_70s_men_body: string
  age_insight_70s_women_headline: string
  age_insight_70s_women_body: string
  // BMI card
  bmi_card_title: string
  bmi_cat_underweight: string
  bmi_cat_normal: string
  bmi_cat_overweight: string
  bmi_cat_obese: string
  bmi_healthy_label: string
  bmi_risks_label: string
  bmi_desc_underweight: string
  bmi_desc_normal: string
  bmi_desc_risks: string
  bmi_label_lifestyle: string
  bmi_label_exercise: string
  bmi_label_workout: string
  bmi_lifestyle_active: string
  bmi_lifestyle_feet: string
  bmi_lifestyle_home: string
  bmi_lifestyle_sedentary: string
  bmi_exercise_often: string
  bmi_exercise_sometimes: string
  bmi_exercise_sort_of: string
  bmi_exercise_no: string
  bmi_workout_high: string
  bmi_workout_moderate: string
  bmi_workout_low: string
  // Weight goal step
  weight_goal_headline: (goalDisplay: string) => string
  weight_goal_estimated: string
  weight_goal_by: string
  weight_chart_label: string
}

export interface ResultTranslations {
  header_label: string
  headline: string
  subtitle: string
  guide_text?: string
  goal_line?: (weight: number, date: string, unit?: string) => string
  cta: string
}

export interface Results28Translations {
  header_label: string
  your_weight: string
  now: string
  after_4_weeks: string
  keeping_it_off: string
  week: (n: number) => string
  chart_note: string
  headline: string
}

export interface WellnessTranslations {
  header_label: string
  headline: string
  lifestyle_label: string
  eater_label: string
  motivation_label: string
  img_alt: string
  warning_title: string
  warning_desc: string
  bmi_normal_msg: string
  bmi_overweight_msg: string
  bmi_obese_msg: string
  lifestyle: Record<string, string>
  eater: { balanced: string; sweet: string; salty: string; emotional: string }
  motivation: { high: string; moderate: string; low: string }
}

export type LoadingTranslations = {
  header_label: string
  title: string
  [key: string]: string
}

export interface EmailTranslations {
  header_label: string
  headline: string
  email_label: string
  placeholder: string
  clear_aria: string
  consent_prefix: string
  consent_link: string
  consent_suffix: string
  cta: string
  privacy_note: string
  privacy_link: string
}

interface QuizStepT {
  question?: string
  subtitle?: string
  placeholder?: string
  hintTitle?: string
  hint?: string
  buttonLabel?: string
  options?: Record<string, string>
  interstitial?: { headline?: string; body?: string; note?: string }
}

// ─── EN TRANSLATIONS ──────────────────────────────────────────────────────────

const EN_INTRO: IntroTranslations = {
  badge_quiz: 'Quick 1-minute assessment',
  badge_tag: 'Personalized Zero Carbs Challenge',
  headline: 'Tailored to Your Body and Lifestyle',
  subheadline: 'A simple, personalized plan to reduce cravings, detox your body and lose weight',
  choose_label: 'Choose your personalized challenge:',
  gender_men: 'For Men',
  gender_women: 'For Women',
  age_group_label: 'Select your age range',
  age_question: "What's your age range?",
  img_alt: 'Person ready to start the challenge',
  lang_button_aria: 'Language: English',
  consent_prefix: 'By continuing, you agree to our',
  consent_tos: 'Terms of Service',
  consent_cookie: 'Cookie Policy',
  consent_privacy: 'Privacy Policy',
  consent_comma: ',',
  consent_and: 'and',
  consent_error: 'Please accept the terms before continuing.',
  footer_manage: 'Manage my subscription',
  footer_about: 'About us',
  footer_help: 'Help & Support',
  footer_privacy: 'Privacy Policy',
  footer_conditions: 'General conditions',
  footer_disclaimer: "NoCarbsChallenge's website, app, services, and products are meant to support general health. This product is not intended to diagnose, treat, cure, or prevent any disease. It should not be substituted for medical advice or medical intervention. Please consult a qualified healthcare provider when making medical decisions.",
  footer_copy: '© 2026 NoCarbsChallenge. All Rights Reserved.',
  footer_app_store_over: 'Download on the',
  footer_app_store_main: 'App Store',
  footer_google_play_over: 'GET IT ON',
  footer_google_play_main: 'Google Play',
  age_18_29: '18–29',
  age_30_39: '30–39',
  age_40_49: '40–49',
  age_50_plus: '50+',
}

// Add new languages below:
// const PL_INTRO: IntroTranslations = { ... }

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
// The following block is managed by scripts/standalone-sync.js
// DO NOT EDIT MANUALLY between the markers.

const EN_UI: UITranslations = {
  continue: 'Continue',
  skip: 'Skip this question',
  go_back: 'Go back',
  quiz_progress: 'Quiz progress',
}

const EN_STEP_PAGE: StepPageTranslations = {
  error_range: (mn, mx, u) => `Please enter a value between ${mn} and ${mx} ${u}`,
  bmi_checking: 'Calculating your BMI. This helps us create the right plan for your body.',
  bmi_underweight: (b) => `Your BMI is ${b}, which is below the usual range`,
  bmi_underweight_body: 'You may benefit from gentle strength work and balanced nutrition.',
  bmi_normal: (b) => `Your BMI is ${b}, which is in a healthy range`,
  bmi_normal_body: 'You are on the right track. Keep going with your routine.',
  bmi_overweight: (b) => `Your BMI is ${b}, which is considered overweight`,
  bmi_overweight_body: 'Your weight needs more attention. We will use your score to tailor a plan to your needs and goals.',
  bmi_obese: (b) => `Your BMI is ${b}, which is considered obesity`,
  bmi_obese_body: 'Your weight may affect your health. We will use your score to build a plan that fits your needs.',
  goal_placeholder: 'Enter your goal weight to see your personalized guidance',
  goal_weight_too_high: 'Your goal weight must be lower than your current weight.',
  goal_too_low: 'Your goal may be too low for your body. A healthy BMI usually falls between 18.5 and 24.9.',
  goal_a_lot: 'That is a big goal, and that is okay. We will help you reach it step by step.',
  goal_moderate: 'This is a realistic goal. Steady progress can improve your health.',
  goal_small: 'You are already close to your goal. Small changes can still make a real difference.',
  consent_text: 'I allow my health data to be used to create a personalized plan.',
  consent_privacy_link: 'Privacy Policy',
  char_count: (n) => `${n}/20`,
  age_insight_20s_men_headline: 'Build a Strong Base',
  age_insight_20s_men_body: 'Reaching and keeping a healthy weight can help you build strength and create a strong base for the future.',
  age_insight_20s_women_headline: 'Build Healthy Habits Early',
  age_insight_20s_women_body: 'Working toward a healthy weight can help you feel healthier, stronger, and more confident in your body.',
  age_insight_30s_men_headline: 'Stay Strong and Active',
  age_insight_30s_men_body: 'Keeping a healthy weight can support your strength and energy as work and life become more demanding.',
  age_insight_30s_women_headline: 'Support Your Health',
  age_insight_30s_women_body: 'Working toward a healthy weight can help you build healthier habits and feel stronger in your body.',
  age_insight_40s_men_headline: 'Keep Your Strength',
  age_insight_40s_men_body: 'Staying at a healthy weight can help you keep your muscle, energy, and overall health.',
  age_insight_40s_women_headline: 'Feel Strong and Full of Energy',
  age_insight_40s_women_body: 'Working toward a healthy weight can help you feel more active, support your health, and improve your energy.',
  age_insight_50s_men_headline: 'Support Your Health',
  age_insight_50s_men_body: 'Reaching and keeping a healthy weight can help you protect your health, strength, and energy for the years ahead.',
  age_insight_50s_women_headline: 'Support Your Health and Energy',
  age_insight_50s_women_body: 'Understanding your body and working toward a healthy weight can help support your health and energy over time.',
  age_insight_60s_men_headline: 'Stay Independent',
  age_insight_60s_men_body: 'Keeping a healthy weight can help you stay strong, active, and more independent.',
  age_insight_60s_women_headline: 'Take Care of Your Health',
  age_insight_60s_women_body: 'Working toward a healthy weight can help you support your health, strength, and well-being as you get older.',
  age_insight_70s_men_headline: 'Keep Moving with Confidence',
  age_insight_70s_men_body: 'Staying at a healthy weight can help support your health, strength, and independence for longer.',
  age_insight_70s_women_headline: 'Stay Strong and Well',
  age_insight_70s_women_body: 'Working toward a healthy weight can help support your health, strength, and independence over time.',
  // BMI card
  bmi_card_title: 'Body Mass Index (BMI)',
  bmi_cat_underweight: 'Underweight',
  bmi_cat_normal: 'Normal',
  bmi_cat_overweight: 'Overweight',
  bmi_cat_obese: 'Obese',
  bmi_healthy_label: 'Healthy BMI:',
  bmi_risks_label: 'Risks of unhealthy BMI:',
  bmi_desc_underweight: 'Your BMI is below the healthy range. Building strength and healthy eating habits will be your priority.',
  bmi_desc_normal: 'Good starting BMI to tone up and get your dream body.',
  bmi_desc_risks: 'High blood pressure, increased risk of heart attack, stroke, type 2 diabetes, chronic back and joint pain.',
  bmi_label_lifestyle: 'Lifestyle',
  bmi_label_exercise: 'Exercise',
  bmi_label_workout: 'Workout frequency',
  bmi_lifestyle_active: 'Very active',
  bmi_lifestyle_feet: 'Lightly active',
  bmi_lifestyle_home: 'Home-based',
  bmi_lifestyle_sedentary: 'Mostly sedentary',
  bmi_exercise_often: 'Regular exercise',
  bmi_exercise_sometimes: 'Moderate',
  bmi_exercise_sort_of: 'Light activity',
  bmi_exercise_no: 'Low activity',
  bmi_workout_high: 'High',
  bmi_workout_moderate: 'Moderate',
  bmi_workout_low: 'Low',
  // Weight goal step
  weight_goal_headline: (g: string) => `With the Personalized Zero Carbs Challenge, you can work toward your goal weight of ${g}`,
  weight_goal_estimated: 'Estimated goal',
  weight_goal_by: 'by',
  weight_chart_label: 'Weight journey',
}

const EN_RESULT: ResultTranslations = {
  header_label: 'Your results',
  headline: 'Your Personalized Zero Carbs Challenge is ready',
  subtitle: 'Based on your answers, here is your 28-day plan.',
  guide_text: 'What you can achieve in 28 days with Zero Carbs Challenge',
  goal_line: (weight, date, unit) => `Goal: ${weight} ${unit ?? 'lbs'} by ${date}`,
  cta: 'Get my Zero Carbs plan',
}

const EN_RESULTS28: Results28Translations = {
  header_label: 'Your 4-week projection',
  your_weight: 'Your weight',
  now: 'Now',
  after_4_weeks: 'After 4 weeks',
  keeping_it_off: 'Keeping it off',
  week: (n) => `Week ${n}`,
  chart_note: 'Individual results may vary.',
  headline: 'A 4-week plan can be the start of lasting change.',
}

const EN_WELLNESS: WellnessTranslations = {
  header_label: 'Your profile',
  headline: 'Here is your personal profile',
  lifestyle_label: 'Activity Level',
  eater_label: 'Eating Pattern',
  motivation_label: 'Energy Level',
  img_alt: 'Body profile illustration',
  warning_title: 'Health note',
  warning_desc: 'Zero Carbs Challenge is a dietary support tool. Please consult a professional if you have existing health conditions.',
  bmi_normal_msg: 'Your BMI is in a healthy range. This is a great place to start if you want to get more toned and improve your shape.',
  bmi_overweight_msg: 'Your BMI is above the healthy range. This can raise the risk of high blood pressure and other conditions.',
  bmi_obese_msg: 'Your BMI is in a high range. This can increase the risk of high blood pressure, heart problems, and type 2 diabetes.',
  lifestyle: {
    sedentary: 'Sedentary',
    light: 'Lightly active',
    moderate: 'Moderately active',
    active: 'Very active',
  },
  eater: { balanced: 'Balanced eater', sweet: 'Sweet tooth', salty: 'Salty snacker', emotional: 'Emotional eater' },
  motivation: { high: 'High energy', moderate: 'Moderate energy', low: 'Low energy' },
}

const EN_LOADING: LoadingTranslations = {
  header_label: 'Preparing your results',
  title: 'Analyzing your answers…',
}

const EN_EMAIL: EmailTranslations = {
  header_label: 'Almost there',
  headline: 'Enter your email to view your challenge',
  email_label: 'Your email',
  placeholder: 'Enter your email',
  clear_aria: 'Clear email',
  consent_prefix: 'I agree to the',
  consent_link: 'Privacy Policy',
  consent_suffix: 'and to receive updates by email',
  cta: 'See my results',
  privacy_note: 'We care about your privacy and keep your personal information safe. We will also send your results to your email so you can check them anytime.',
  privacy_link: 'Privacy Policy',
}

const intro: Record<LangCode, IntroTranslations> = {
  en: { badge_quiz:"Quick 1-minute assessment", badge_tag:"Personalized Zero Carbs Challenge", headline:"Tailored to Your Body and Lifestyle", subheadline:"A simple, personalized plan to reduce cravings, detox your body and lose weight", choose_label:"Choose your personalized challenge:", gender_men:"For Men", gender_women:"For Women", age_group_label:"Select your age range", age_question:"What's your age range?", img_alt:"Person ready to start the challenge", lang_button_aria:"Language: English", consent_prefix:"By continuing, you agree to our", consent_tos:"Terms of Service", consent_cookie:"Cookie Policy", consent_privacy:"Privacy Policy", consent_comma:",", consent_and:"and", consent_error:"Please accept the terms before continuing.", footer_manage:"Manage my subscription", footer_about:"About us", footer_help:"Help & Support", footer_privacy:"Privacy Policy", footer_conditions:"General conditions", footer_disclaimer:"NoCarbsChallenge's website, app, services, and products are meant to support general health. This product is not intended to diagnose, treat, cure, or prevent any disease. It should not be substituted for medical advice or medical intervention. Please consult a qualified healthcare provider when making medical decisions.", footer_copy:"© 2026 NoCarbsChallenge. All Rights Reserved.", footer_app_store_over:"Download on the", footer_app_store_main:"App Store", footer_google_play_over:"GET IT ON", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  lt: { badge_quiz:"Greitas 1 minutės įvertinimas", badge_tag:"Individualizuotas beangliavandenis iššūkis", headline:"Pritaikyta jūsų kūnui ir gyvenimo būdui", subheadline:"Paprastas, individualizuotas planas, padėsiantis sumažinti alkį, detoksikuoti organizmą ir atsikratyti viršsvorio", choose_label:"Pasirinkite savo asmeninį iššūkį:", gender_men:"Vyrams", gender_women:"Moterims", age_group_label:"Pasirinkite savo amžiaus grupę", age_question:"Kokia jūsų amžiaus grupė?", img_alt:"Asmuo pasiruošęs pradėti iššūkį", lang_button_aria:"Kalba: Lietuvių", consent_prefix:"Tęsdami jūs sutinkate su mūsų", consent_tos:"Paslaugų teikimo sąlygomis", consent_cookie:"Slapukų politika", consent_privacy:"Privatumo politika", consent_comma:",", consent_and:"ir", consent_error:"Prieš tęsdami sutikite su sąlygomis.", footer_manage:"Valdyti prenumeratą", footer_about:"Apie mus", footer_help:"Pagalba ir palaikymas", footer_privacy:"Privatumo politika", footer_conditions:"Bendrosios sąlygos", footer_disclaimer:"NoCarbsChallenge svetainė, programėlė, paslaugos ir produktai yra skirti bendrai sveikatai palaikyti. Šis produktas nėra skirtas diagnozuoti, gydyti ar užkirsti kelią bet kokiai ligai. Jis neturėtų būti naudojamas kaip medicininės konsultacijos ar intervencijos pakaitalas. Priimdami medicininius sprendimus, pasitarkite su kvalifikuotu sveikatos priežiūros specialistu.", footer_copy:"© 2026 NoCarbsChallenge. Visos teisės saugomos.", footer_app_store_over:"Atsisiųskite iš", footer_app_store_main:"App Store", footer_google_play_over:"GAUTI IŠ", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  lv: { badge_quiz:"Ātra 1 minūtes novērtēšana", badge_tag:"Personalizēts Zero Carbs izaicinājums", headline:"Pielāgots jūsu ķermenim un dzīvesveidam", subheadline:"Vienkāršs, personalizēts plāns, lai samazinātu tieksmi pēc ēdiena, detoksicētu organismu un zaudētu svaru", choose_label:"Izvēlieties savu personalizēto izaicinājumu:", gender_men:"Vīriešiem", gender_women:"Sievietēm", age_group_label:"Izvēlieties savu vecuma grupu", age_question:"Kāds ir jūsu vecums?", img_alt:"Persona gatava sākt izaicinājumu", lang_button_aria:"Valoda: Latviešu", consent_prefix:"Turpinot, jūs piekrītat mūsu", consent_tos:"Pakalpojuma sniegšanas noteikumiem", consent_cookie:"Sīkdatņu politikai", consent_privacy:"Privātuma politikai", consent_comma:",", consent_and:"un", consent_error:"Lūdzu, apstipriniet noteikumus pirms turpināšanas.", footer_manage:"Pārvaldīt manu abonementu", footer_about:"Par mums", footer_help:"Palīdzība un atbalsts", footer_privacy:"Privātuma politika", footer_conditions:"Vispārīgie noteikumi", footer_disclaimer:"NoCarbsChallenge vietne, lietotne, pakalpojumi un produkti ir paredzēti vispārējās veselības atbalstam. Šis produkts nav paredzēts slimību diagnosticēšanai, ārstēšanai vai profilaksei. To nedrīkst izmantot medicīniskas konsultācijas vai iejaukšanās vietā. Lūdzu, konsultējieties ar kvalificētu veselības aprūpes speciālistu, pieņemot medicīniskus lēmumus.", footer_copy:"© 2026 NoCarbsChallenge. Visas tiesības aizsargātas.", footer_app_store_over:"Lejupielādēt", footer_app_store_main:"App Store", footer_google_play_over:"SAŅEMT NO", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  ro: { badge_quiz:"Evaluare rapidă de 1 minut", badge_tag:"Provocarea personalizată Fără Carbohidrați", headline:"Adaptat corpului și stilului tău de viață", subheadline:"Un plan simplu și personalizat pentru a reduce poftele, a detoxifia organismul și a pierde în greutate", choose_label:"Alege provocarea ta personalizată:", gender_men:"Pentru bărbați", gender_women:"Pentru femei", age_group_label:"Alege intervalul de vârstă", age_question:"În ce interval de vârstă te afli?", img_alt:"Persoană pregătită să înceapă provocarea", lang_button_aria:"Limba: Română", consent_prefix:"Continuând, ești de acord cu", consent_tos:"Termenii de utilizare", consent_cookie:"Politica de module cookie", consent_privacy:"Politica de confidențialitate", consent_comma:",", consent_and:"și", consent_error:"Te rugăm să accepți termenii înainte de a continua.", footer_manage:"Gestionează abonamentul", footer_about:"Despre noi", footer_help:"Ajutor și asistență", footer_privacy:"Politica de confidențialitate", footer_conditions:"Condiții generale", footer_disclaimer:"Site-ul, aplicația, serviciile și produsele NoCarbsChallenge sunt menite să susțină sănătatea generală. Acest produs nu este destinat să diagnosticheze, să trateze, să vindece sau să prevină nicio boală. Nu ar trebui să fie utilizat ca înlocuitor pentru sfatul medicului sau intervenția medicală. Te rugăm să consulți un profesionist calificat în domeniul sănătății atunci când iei decizii medicale.", footer_copy:"© 2026 NoCarbsChallenge. Toate drepturile rezervate.", footer_app_store_over:"Descărcați de pe", footer_app_store_main:"App Store", footer_google_play_over:"DISPONIBIL PE", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  cz: { badge_quiz:"Rychlý 1minutový test", badge_tag:"Personalizovaná výzva bez sacharidů", headline:"Přizpůsobeno Vašemu tělu a životnímu stylu", subheadline:"Jednoduchý, personalizovaný plán pro snížení chutí, detoxikaci těla a hubnutí", choose_label:"Vyberte si svou osobní výzvu:", gender_men:"Pro muže", gender_women:"Pro ženy", age_group_label:"Vyberte svou věkovou skupinu", age_question:"V jaké věkové skupině se nacházíte?", img_alt:"Osoba připravená začít výzvu", lang_button_aria:"Jazyk: Čeština", consent_prefix:"Pokračováním souhlasíte s našimi", consent_tos:"Smluvními podmínkami", consent_cookie:"Zásadami používání souborů cookie", consent_privacy:"Zásadami ochrany osobních údajov", consent_comma:",", consent_and:"a", consent_error:"Před pokračováním přijměte smluvní podmínky.", footer_manage:"Spravovat předplatné", footer_about:"O nás", footer_help:"Pomoc a podpora", footer_privacy:"Zásady ochrany osobních údajů", footer_conditions:"Všeobecné podmínky", footer_disclaimer:"Webová stránka, aplikace, služby a produkty NoCarbsChallenge jsou určeny k podpoře celkového zdraví. Tento produkt není určen k diagnostice, léčbě nebo prevenci jakékoli nemoci. Neměl by být používán jako náhrada za lékařskou radu nebo lékařský zásah. Při přijímání lékařských rozhodnutí se poraďte s kvalifikovaným zdravotnickým pracovníkem.", footer_copy:"© 2026 NoCarbsChallenge. Všechna práva vyhrazena.", footer_app_store_over:"Stáhněte v", footer_app_store_main:"App Store", footer_google_play_over:"DOSTUPNÉ NA", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  dk: { badge_quiz:"Hurtig 1-minuts vurdering", badge_tag:"Personlig Zero Carbs-udfordring", headline:"Tilpasset din krop og livsstil", subheadline:"En enkel, personlig plan til at reducere cravings, støtte kroppen og tabe dig", choose_label:"Vælg din personlige udfordring:", gender_men:"Til mænd", gender_women:"Til kvinder", age_group_label:"Vælg din aldersgruppe", age_question:"Hvilken aldersgruppe er du i?", img_alt:"Person klar til at starte udfordringen", lang_button_aria:"Sprog: dansk", consent_prefix:"Ved at fortsætte accepterer du vores", consent_tos:"Brugsvilkår", consent_cookie:"Cookiepolitik", consent_privacy:"Privatlivspolitik", consent_comma:",", consent_and:"og", consent_error:"Accepter venligst vilkårene, før du fortsætter.", footer_manage:"Administrér mit abonnement", footer_about:"Om os", footer_help:"Hjælp og support", footer_privacy:"Privatlivspolitik", footer_conditions:"Generelle vilkår", footer_disclaimer:"NoCarbsChallenge’ hjemmeside, app, tjenester og produkter er beregnet til at støtte generel sundhed. Produktet er ikke beregnet til at diagnosticere, behandle, helbrede eller forebygge sygdom. Det bør ikke erstatte lægefaglig rådgivning eller medicinsk behandling. Kontakt en kvalificeret sundhedsprofessionel, når du træffer medicinske beslutninger.", footer_copy:"© 2026 NoCarbsChallenge. Alle rettigheder forbeholdes.", footer_app_store_over:"Hent i", footer_app_store_main:"App Store", footer_google_play_over:"HENT PÅ", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  gr: { badge_quiz:"Γρήγορη αξιολόγηση 1 λεπτού", badge_tag:"Εξατομικευμένη Πρόκληση Μηδενικών Υδατανθράκων", headline:"Προσαρμοσμένο στο Σώμα και τον Τρόπο Ζωής σας", subheadline:"Ένα απλό, εξατομικευμένο πρόγραμμα για να μειώσετε τις λιγούρες, να αποτοξινώσετε το σώμα σας και να χάσετε βάρος", choose_label:"Επιλέξτε την εξατομικευμένη σας πρόκληση:", gender_men:"Για Άνδρες", gender_women:"Για Γυναίκες", age_group_label:"Επιλέξτε το ηλικιακό σας εύρος", age_question:"Ποιο είναι το ηλικιακό σας εύρος;", img_alt:"Άτομο έτοιμο να ξεκινήσει την πρόκληση", lang_button_aria:"Γλώσσα: Ελληνικά", consent_prefix:"Συνεχίζοντας, συμφωνείτε με τους", consent_tos:"Όρους Χρήσης", consent_cookie:"Πολιτική Cookies", consent_privacy:"Πολιτική Απορρήτου", consent_comma:",", consent_and:"και", consent_error:"Παρακαλούμε αποδεχτείτε τους όρους πριν συνεχίσετε.", footer_manage:"Διαχείριση της συνδρομής μου", footer_about:"Σχετικά με εμάς", footer_help:"Βοήθεια & Υποστήριξη", footer_privacy:"Πολιτική Απορρήτου", footer_conditions:"Γενικοί όροι", footer_disclaimer:"Ο ιστότοπος, η εφαρμογή, οι υπηρεσίες και τα προϊόντα του NoCarbsChallenge προορίζονται για την υποστήριξη της γενικής υγείας. Αυτό το προϊόν δεν προορίζεται για τη διάγνωση, θεραπεία, ίαση ή πρόληψη οποιασδήποτε νόσου. Δεν πρέπει να αντικαθιστά την ιατρική συμβουλή ή παρέμβαση. Παρακαλούμε συμβουλευτείτε έναν εξειδικευμένο πάροχο υγείας κατά τη λήψη ιατρικών αποφάσεων.", footer_copy:"© 2026 NoCarbsChallenge. Με την επιφύλαξη παντός δικαιώματος.", footer_app_store_over:"Λήψη στο", footer_app_store_main:"App Store", footer_google_play_over:"ΑΠΟΚΤΗΣΤΕ ΤΟ ΣΤΟ", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  hu: { badge_quiz:"Gyors, 1 perces felmérés", badge_tag:"Személyre szabott Zero Carbs kihívás", headline:"A testedhez és életmódodhoz igazítva", subheadline:"Egyszerű, személyre szabott terv a sóvárgás csökkentésére, a szervezet támogatására és a fogyásra", choose_label:"Válaszd ki a személyre szabott kihívásodat:", gender_men:"Férfiaknak", gender_women:"Nőknek", age_group_label:"Válaszd ki a korcsoportodat", age_question:"Melyik korcsoportba tartozol?", img_alt:"A kihívás elkezdésére kész személy", lang_button_aria:"Nyelv: magyar", consent_prefix:"A folytatással elfogadod a(z)", consent_tos:"Felhasználási feltételeket", consent_cookie:"Cookie-szabályzatot", consent_privacy:"Adatvédelmi szabályzatot", consent_comma:",", consent_and:"és a(z)", consent_error:"Kérjük, folytatás előtt fogadd el a feltételeket.", footer_manage:"Előfizetésem kezelése", footer_about:"Rólunk", footer_help:"Súgó és támogatás", footer_privacy:"Adatvédelmi szabályzat", footer_conditions:"Általános feltételek", footer_disclaimer:"A NoCarbsChallenge weboldala, alkalmazása, szolgáltatásai és termékei az általános egészség támogatását szolgálják. Ez a termék nem diagnosztizál, nem kezel, nem gyógyít és nem előz meg betegségeket. Nem helyettesíti az orvosi tanácsadást vagy az orvosi beavatkozást. Egészségügyi döntések meghozatala előtt konzultálj szakképzett egészségügyi szakemberrel.", footer_copy:"© 2026 NoCarbsChallenge. Minden jog fenntartva.", footer_app_store_over:"Letöltés:", footer_app_store_main:"App Store", footer_google_play_over:"ELÉRHETŐ:", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  hr: { badge_quiz:"Brza 1-minutna analiza", badge_tag:"Personalizirani izazov bez ugljikohidrata", headline:"Prilagođeno vašem tijelu i načinu života", subheadline:"Jednostavan, personalizirani plan za smanjenje žudnje za hranom, detoksikaciju tijela i gubitak težine", choose_label:"Odaberite svoj personalizirani izazov:", gender_men:"Za muškarce", gender_women:"Za žene", age_group_label:"Odaberite svoju dobnu skupinu", age_question:"Koji je vaš dobni raspon?", img_alt:"Osoba spremna za početak izazova", lang_button_aria:"Jezik: Hrvatski", consent_prefix:"Nastavkom se slažete s našim", consent_tos:"Uvjetima pružanja usluge", consent_cookie:"Pravilima o kolačićima", consent_privacy:"Pravilima privatnosti", consent_comma:",", consent_and:"i", consent_error:"Molimo prihvatite uvjete prije nastavka.", footer_manage:"Upravljanje pretplatom", footer_about:"O nama", footer_help:"Pomoć i podrška", footer_privacy:"Pravila privatnosti", footer_conditions:"Opći uvjeti", footer_disclaimer:"Web stranica, aplikacija, usluge i proizvodi NoCarbsChallenge namijenjeni su podršci općem zdravlju. Ovaj proizvod nije namijenjen dijagnosticiranju, liječenju ili prevenciji bilo koje bolesti. Ne smije se koristiti kao zamjena za liječnički savjet ili medicinsku intervenciju. Molimo konzultirajte se s kvalificiranim zdravstvenim djelatnikom pri donošenju medicinskih odluka.", footer_copy:"© 2026 NoCarbsChallenge. Sva prava pridržana.", footer_app_store_over:"Preuzmite na", footer_app_store_main:"App Store-u", footer_google_play_over:"DOSTUPNO NA", footer_google_play_main:"Google Play-u", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  il: { badge_quiz:"הערכה מהירה של דקה", badge_tag:"אתגר אפס פחמימות מותאם אישית", headline:"מותאם לגוף ולאורח החיים שלך", subheadline:"תוכנית פשוטה ומותאמת אישית להפחתת חשקים, ניקוי רעלים מהגוף וירידה במשקל", choose_label:"בחר את האתגר המותאם אישית שלך:", gender_men:"לגברים", gender_women:"לנשים", age_group_label:"בחר את קבוצת הגיל שלך", age_question:"מהי קבוצת הגיל שלך?", img_alt:"אדם מוכן להתחיל את האתגר", lang_button_aria:"שפה: עברית", consent_prefix:"בהמשך, אתה מסכים ל", consent_tos:"תנאי השימוש", consent_cookie:"מדיניות הקוקיז", consent_privacy:"מדיניות הפרטיות", consent_comma:",", consent_and:"ו", consent_error:"אנא אשר את התנאים לפני שתמשיך.", footer_manage:"נהל את המנוי שלי", footer_about:"אודותינו", footer_help:"עזרה ותמיכה", footer_privacy:"מדיניות פרטיות", footer_conditions:"תנאים כלליים", footer_disclaimer:"אתר, אפליקציה, שירותים ומוצרים של NoCarbsChallenge נועדו לתמוך בבריאות הכללית. מוצר זה אינו מיועד לאבחן, לטפל, לרפא או למנוע כל מחלה. אין להשתמש בו כתחליף לייעוץ רפואי או להתערבות רפואית. אנא התייעץ עם איש מקצוע מוסמך בתחום הבריאות בעת קבלת החלטות רפואיות.", footer_copy:"© 2026 NoCarbsChallenge. כל הזכויות שמורות.", footer_app_store_over:"הורד ב", footer_app_store_main:"App Store", footer_google_play_over:"זמין ב", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  jp: { badge_quiz:"1分のクイック診断", badge_tag:"パーソナライズされたZero Carbs チャレンジ", headline:"あなたの体とライフスタイルに合わせたプラン", subheadline:"食欲を抑え、体を整え、体重を減らすためのシンプルでパーソナライズされたプラン", choose_label:"パーソナライズされたチャレンジを選択してください：", gender_men:"男性用", gender_women:"女性用", age_group_label:"年齢層を選択してください", age_question:"あなたの年齢層は？", img_alt:"チャレンジを開始する準備ができている人", lang_button_aria:"言語：日本語", consent_prefix:"続行することで、当社の", consent_tos:"利用規約", consent_cookie:"クッキーポリシー", consent_privacy:"プライバシーポリシー", consent_comma:"、", consent_and:"および", consent_error:"続行する前に規約に同意してください。", footer_manage:"購読の管理", footer_about:"当社について", footer_help:"ヘルプ＆サポート", footer_privacy:"プライバシーポリシー", footer_conditions:"一般条件", footer_disclaimer:"NoCarbsChallengeのウェブサイト、アプリ、サービス、および製品は、一般的な健康をサポートすることを目的としています。本製品は、いかなる疾患の診断、治療、治癒、または予防を目的としたものでもありません。医師のアドバイスや医療介入の代わりとして使用しないでください。医療上の決定を下す際は、資格のある医療提供者に相談してください。", footer_copy:"© 2026 NoCarbsChallenge. 無断複写・転載を禁じます。", footer_app_store_over:"ダウンロード", footer_app_store_main:"App Store", footer_google_play_over:"手に入れよう", footer_google_play_main:"Google Play", age_18_29:"18–29歳", age_30_39:"30–39歳", age_40_49:"40–49歳", age_50_plus:"50歳以上" },
  ru: { badge_quiz:"Быстрый 1-минутный тест", badge_tag:"Персонализированный челлендж «Без углеводов»", headline:"С учетом особенностей вашего тела и образа жизни", subheadline:"Простой персонализированный план для снижения тяги к еде, детоксикации организма и снижения веса", choose_label:"Выберите свой персонализированный челлендж:", gender_men:"Для мужчин", gender_women:"Для женщин", age_group_label:"Выберите свой возрастной диапазон", age_question:"Ваш возрастной диапазон?", img_alt:"Человек, готовый начать челлендж", lang_button_aria:"Язык: Русский", consent_prefix:"Продолжая, вы соглашаетесь с нашими", consent_tos:"Условиями обслуживания", consent_cookie:"Политикой использования файлов cookie", consent_privacy:"Политикой конфиденциальности", consent_comma:",", consent_and:"и", consent_error:"Пожалуйста, примите условия перед продолжением.", footer_manage:"Управление подпиской", footer_about:"О нас", footer_help:"Помощь и поддержка", footer_privacy:"Политика конфиденциальности", footer_conditions:"Общие условия", footer_disclaimer:"Веб-сайт, приложение, услуги и продукты NoCarbsChallenge предназначены для поддержания общего состояния здоровья. Этот продукт не предназначен для диагностики, лечения или профилактики каких-либо заболеваний. Его не следует использовать в качестве замены медицинской консультации или медицинского вмешательства. Пожалуйста, консультируйтесь с квалифицированным медицинским работником при принятии медицинских решений.", footer_copy:"© 2026 NoCarbsChallenge. Все права защищены.", footer_app_store_over:"Загрузите в", footer_app_store_main:"App Store", footer_google_play_over:"ДОСТУПНО В", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  sk: { badge_quiz:"Rýchly 1-minútový test", badge_tag:"Personalizovaná výzva bez sacharidov", headline:"Prispôsobené vášmu telu a životnému štýlu", subheadline:"Jednoduchý, personalizovaný plán na zníženie chutí na jedlo, detoxikáciu tela a chudnutie", choose_label:"Vyberte si svoju osobnú výzvu:", gender_men:"Pre mužov", gender_women:"Pre ženy", age_group_label:"Vyberte svoju vekovú skupinu", age_question:"V akej vekovej skupine sa nachádzate?", img_alt:"Osoba pripravená začať výzvu", lang_button_aria:"Jazyk: Slovenčina", consent_prefix:"Pokračovaním súhlasíte s našimi", consent_tos:"Zmluvnými podmienkami", consent_cookie:"Zásadami používania súborov cookie", consent_privacy:"Zásadami ochrany osobných údajov", consent_comma:",", consent_and:"a", consent_error:"Pred pokračovaním prijmite zmluvné podmienky.", footer_manage:"Spravovať predplatné", footer_about:"O nás", footer_help:"Pomoc a podpora", footer_privacy:"Zásady ochrany osobných údajov", footer_conditions:"Všeobecné podmienky", footer_disclaimer:"Webová stránka, aplikácia, služby a produkty NoCarbsChallenge sú určené na podporu celkového zdravia. Tento produkt nie je určený na diagnostiku, liečbu alebo prevenciu akejkoľvek choroby. Nemal by sa používať ako náhrada za lekársku radu alebo lekársky zásah. Pri prijímaní lekárskych rozhodnutí sa poraďte s kvalifikovaným zdravotníckym pracovníkom.", footer_copy:"© 2026 NoCarbsChallenge. Všetky práva vyhradené.", footer_app_store_over:"Stiahnite v", footer_app_store_main:"App Store", footer_google_play_over:"DOSTUPNÉ NA", footer_google_play_main:"Google Play", age_18_29:"18–29", age_30_39:"30–39", age_40_49:"40–49", age_50_plus:"50+" },
  tw: { badge_quiz:"1分鐘快速評估", badge_tag:"個人化 Zero Carbs 挑戰", headline:"為您的體質與生活方式量身定制", subheadline:"一個簡單且個人化的計畫，幫助您減少食慾、排毒並減輕體重", choose_label:"選擇您的個人化挑戰：", gender_men:"男性專用", gender_women:"女性專用", age_group_label:"選擇您的年齡範圍", age_question:"您的年齡範圍是多少？", img_alt:"準備好開始挑戰的人", lang_button_aria:"語言：繁體中文", consent_prefix:"繼續即表示您同意我們的", consent_tos:"服務條款", consent_cookie:"Cookie 政策", consent_privacy:"隱私權政策", consent_comma:"、", consent_and:"以及", consent_error:"請於繼續前接受條款。", footer_manage:"管理我的訂閱", footer_about:"關於我們", footer_help:"說明與支援", footer_privacy:"隱私權政策", footer_conditions:"一般條款", footer_disclaimer:"NoCarbsChallenge 的網站、應用程式、服務和產品旨在支援一般健康。本產品不旨在診斷、治療、治癒或預防任何疾病。不應替代醫療建議或醫療干預。做出醫療決定時，請諮詢合格的醫療服務提供者。", footer_copy:"© 2026 NoCarbsChallenge. 保留所有權利。", footer_app_store_over:"於此下載", footer_app_store_main:"App Store", footer_google_play_over:"立即取得", footer_google_play_main:"Google Play", age_18_29:"18–29 歲", age_30_39:"30–39 歲", age_40_49:"40–49 歲", age_50_plus:"50 歲以上" }
}

const ui: Record<LangCode, UITranslations> = {
  en: { continue:"Continue", skip:"Skip this question", go_back:"Go back", quiz_progress:"Quiz progress" },
  lt: { continue:"Tęsti", skip:"Praleisti šį klausimą", go_back:"Grįžti", quiz_progress:"Apklausos eiga" },
  lv: { continue:"Turpināt", skip:"Izlaist šo jautājumu", go_back:"Atgriezties", quiz_progress:"Viktorīnas progress" },
  ro: { continue:"Continuă", skip:"Sari peste această întrebare", go_back:"Înapoi", quiz_progress:"Progresul evaluării" },
  cz: { continue:"Pokračovat", skip:"Přeskočit tuto otázku", go_back:"Zpět", quiz_progress:"Průběh testu" },
  dk: { continue:"Fortsæt", skip:"Spring dette spørgsmål over", go_back:"Gå tilbage", quiz_progress:"Quiz-status" },
  gr: { continue:"Συνέχεια", skip:"Παράλειψη αυτής της ερώτησης", go_back:"Επιστροφή", quiz_progress:"Πρόοδος κουίζ" },
  hu: { continue:"Tovább", skip:"Kérdés kihagyása", go_back:"Vissza", quiz_progress:"Kvíz állása" },
  hr: { continue:"Nastavi", skip:"Preskoči ovo pitanje", go_back:"Vrati se", quiz_progress:"Napredak analize" },
  il: { continue:"המשך", skip:"דלג על השאלה", go_back:"חזור", quiz_progress:"התקדמות השאלון" },
  jp: { continue:"続行", skip:"質問をスキップ", go_back:"戻る", quiz_progress:"進捗状況" },
  ru: { continue:"Продолжить", skip:"Пропустить вопрос", go_back:"Назад", quiz_progress:"Прогресс теста" },
  sk: { continue:"Pokračovať", skip:"Preskočiť túto otázku", go_back:"Späť", quiz_progress:"Priebeh testu" },
  tw: { continue:"繼續", skip:"跳過此問題", go_back:"返回", quiz_progress:"問卷進度" }
}

const stepPage: Record<LangCode, StepPageTranslations> = {
    en: EN_STEP_PAGE,


  lt: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Įveskite reikšmę nuo __MIN__ iki __MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Skaičiuojame jūsų KMI. Tai padės sudaryti tinkamą planą jūsų kūnui.",
      bmi_underweight: (b) => "Jūsų KMI yra __BMI__, tai yra mažiau nei įprasta".replace("__BMI__", String(b)),
      bmi_underweight_body: "Jums gali būti naudingi lengvi jėgos pratimai ir subalansuota mityba.",
      bmi_normal: (b) => "Jūsų KMI yra __BMI__, tai yra sveikas diapazonas".replace("__BMI__", String(b)),
      bmi_normal_body: "Einate teisingu keliu. Tęskite savo rutiną.",
      bmi_overweight: (b) => "Jūsų KMI yra __BMI__, tai laikoma viršsvoriu".replace("__BMI__", String(b)),
      bmi_overweight_body: "Jūsų svoriui reikia skirti daugiau dėmesio. Pasinaudosime šiuo rezultatu, kad pritaikytume planą jūsų poreikiams ir tikslams.",
      bmi_obese: (b) => "Jūsų KMI yra __BMI__, tai laikoma nutukimu".replace("__BMI__", String(b)),
      bmi_obese_body: "Jūsų svoris gali turėti įtakos sveikatai. Pasinaudosime jūsų rezultatu sudarydami planą, kuris jums tiktų.",
      goal_placeholder: "Įveskite norimą svorį, kad pamatytumėte asmenines rekomendacijas",
      goal_weight_too_high: "Jūsų tikslo svoris turi būti mažesnis už dabartinį.",
      goal_too_low: "Jūsų tikslas gali būti per mažas jūsų kūnui. Sveikas KMI paprastai yra tarp 18,5 ir 24,9.",
      goal_a_lot: "Tai didelis tikslas, ir tai normalu. Padėsime jums jį pasiekti žingsnis po žingsnio.",
      goal_moderate: "Tai realus tikslas. Nuosekli pažanga gali pagerinti jūsų sveikatą.",
      goal_small: "Jūs jau arti savo tikslo. Net nedideli pokyčiai gali duoti apčiuopiamų rezultatų.",
      consent_text: "Leidžiu naudoti mano sveikatos duomenis asmeniniam planui sudaryti.",
      consent_privacy_link: "Privatumo politika",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  lv: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Lūdzu, ievadiet vērtību starp __MIN__ un __MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Aprēķinām jūsu ĶMI. Tas palīdz mums izveidot pareizo plānu jūsu ķermenim.",
      bmi_underweight: (b) => "Jūsu ĶMI ir __BMI__, kas ir zem parastā diapazona".replace("__BMI__", String(b)),
      bmi_underweight_body: "Jums varētu nākt par labu viegli spēka vingrinājumi un sabalansēts uzturs.",
      bmi_normal: (b) => "Jūsu ĶMI ir __BMI__, kas ir veselīgā diapazonā".replace("__BMI__", String(b)),
      bmi_normal_body: "Jūs esat uz pareizā ceļa. Turpiniet savu rutīnu.",
      bmi_overweight: (b) => "Jūsu ĶMI ir __BMI__, kas tiek uzskatīts par lieko svaru".replace("__BMI__", String(b)),
      bmi_overweight_body: "Jūsu svaram ir nepieciešama lielāka uzmanība. Mēs izmantosim jūsu rezultātu, lai pielāgotu plānu jūsu vajadzībām un mērķiem.",
      bmi_obese: (b) => "Jūsu ĶMI ir __BMI__, kas tiek uzskatīts par aptaukošanos".replace("__BMI__", String(b)),
      bmi_obese_body: "Jūsu svars var ietekmēt jūsu veselību. Mēs izmantosim jūsu rezultātu, lai izveidotu plānu, kas atbilst jūsu vajadzībām.",
      goal_placeholder: "Ievadiet savu mērķa svaru, lai redzētu personīgos ieteikumus",
      goal_weight_too_high: "Mērķa svaram jābūt mazākam par pašreizējo svaru.",
      goal_too_low: "Jūsu mērķis var būt pārāk zems jūsu ķermenim. Veselīgs ĶMI parasti ir starp 18.5 un 24.9.",
      goal_a_lot: "Tas ir liels mērķis, un tas ir normāli. Mēs palīdzēsim jums to sasniegt soli pa solim.",
      goal_moderate: "Šis ir reāls mērķis. Stabils progress var uzlabot jūsu veselību.",
      goal_small: "Jūs jau esat tuvu savam mērķim. Pat nelielas izmaiņas var sniegt reālu atšķirību.",
      consent_text: "Es atļauju izmantot manus veselības datus, lai izveidotu personalizētu plānu.",
      consent_privacy_link: "Privātuma politika",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  ro: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Te rugăm să introduci o valoare între __MIN__ și __MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Calculăm IMC-ul tău. Aceasta ne ajută să creăm planul potrivit pentru corpul tău.",
      bmi_underweight: (b) => "IMC-ul tău este de __BMI__, ceea ce este sub intervalul obișnuit".replace("__BMI__", String(b)),
      bmi_underweight_body: "Ai putea beneficia de exerciții ușoare de forță și o nutriție echilibrată.",
      bmi_normal: (b) => "IMC-ul tău este de __BMI__, ceea ce este într-un interval sănătos".replace("__BMI__", String(b)),
      bmi_normal_body: "Ești pe drumul cel bun. Continuă-ți rutina.",
      bmi_overweight: (b) => "IMC-ul tău este de __BMI__, ceea ce este considerat supraponderal".replace("__BMI__", String(b)),
      bmi_overweight_body: "Greutatea ta necesită mai multă atenție. Vom folosi scorul tău pentru a adapta planul la nevoile și obiectivele tale.",
      bmi_obese: (b) => "IMC-ul tău este de __BMI__, ceea ce este considerat obezitate".replace("__BMI__", String(b)),
      bmi_obese_body: "Greutatea ta îți poate afecta sănătatea. Vom folosi scorul tău pentru a construi un plan care ți se potrivește.",
      goal_placeholder: "Introdu greutatea ideală pentru a vedea îndrumările personalizate",
      goal_weight_too_high: "Greutatea ideală trebuie să fie mai mică decât greutatea actuală.",
      goal_too_low: "Obiectivul tău ar putea fi prea mic pentru corpul tău. Un IMC sănătos este de obicei între 18,5 și 24,9.",
      goal_a_lot: "Este un obiectiv mare și este în regulă. Te vom ajuta să îl atingi pas cu pas.",
      goal_moderate: "Acesta este un obiectiv realist. Un progres constant îți poate îmbunătăți sănătatea.",
      goal_small: "Ești deja aproape de obiectivul tău. Micile schimbări pot face totuși o diferență reală.",
      consent_text: "Permit utilizarea datelor mele de sănătate pentru a crea un plan personalizat.",
      consent_privacy_link: "Politica de confidențialitate",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  cz: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Zadejte hodnotu v rozmezí od __MIN__ do __MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Počítáme Váš BMI. Pomůže nám to vytvořit správný plán pro Vaše tělo.",
      bmi_underweight: (b) => "Váš BMI je __BMI__, což je pod normálním rozmezím".replace("__BMI__", String(b)),
      bmi_underweight_body: "Mohlo by Vám pomoci mírné silové cvičení a vyvážená výživa.",
      bmi_normal: (b) => "Váš BMI je __BMI__, což je v zdravém rozmezí".replace("__BMI__", String(b)),
      bmi_normal_body: "Jste na správné cestě. Pokračujte ve své rutině.",
      bmi_overweight: (b) => "Váš BMI je __BMI__, což se považuje za nadváhu".replace("__BMI__", String(b)),
      bmi_overweight_body: "Vaše váha si vyžaduje více pozornosti. Váš výsledek použijeme k přizpůsobení plánu Vašim potřebám a cílům.",
      bmi_obese: (b) => "Váš BMI je __BMI__, což se považuje za obezitu".replace("__BMI__", String(b)),
      bmi_obese_body: "Vaše váha může ovlivnit Vaše zdraví. Váš výsledek použijeme k sestavení plánu, který Vám bude vyhovovat.",
      goal_placeholder: "Zadejte cílovou váhu pro zobrazení osobních pokynů",
      goal_weight_too_high: "Cieľová váha musí být nižší než současná váha.",
      goal_too_low: "Váš cíl může být pro Vaše tělo příliš nízký. Zdravý BMI se obvykle pohybuje mezi 18,5 a 24,9.",
      goal_a_lot: "Je to velký cíl a je to v pořádku. Pomůžeme Vám ho dosáhnout krok za krokem.",
      goal_moderate: "Toto je realistický cíl. Stabilní pokrok může zlepšit Vaše zdraví.",
      goal_small: "K cíli už máte blízko. I malé změny mohou přinést skutečný rozdíl.",
      consent_text: "Souhlasím s použitím mých údajů o zdraví k vytvoření personalizovaného plánu.",
      consent_privacy_link: "Zásady ochrany osobních údajov",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  dk: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Indtast venligst en værdi mellem __MIN__ og __MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Beregner dit BMI. Det hjælper os med at lave den rigtige plan til din krop.",
      bmi_underweight: (b) => "Dit BMI er __BMI__, hvilket er under det normale område".replace("__BMI__", String(b)),
      bmi_underweight_body: "Du kan have gavn af mild styrketræning og afbalanceret ernæring.",
      bmi_normal: (b) => "Dit BMI er __BMI__, hvilket er i det sunde område".replace("__BMI__", String(b)),
      bmi_normal_body: "Du er på rette vej. Fortsæt bare med dine rutiner.",
      bmi_overweight: (b) => "Dit BMI er __BMI__, hvilket betragtes som overvægt".replace("__BMI__", String(b)),
      bmi_overweight_body: "Din vægt kræver mere opmærksomhed. Vi bruger din score til at skræddersy en plan til dine behov og mål.",
      bmi_obese: (b) => "Dit BMI er __BMI__, hvilket betragtes som svær overvægt".replace("__BMI__", String(b)),
      bmi_obese_body: "Din vægt kan påvirke dit helbred. Vi bruger din score til at opbygge en plan, der passer til dine behov.",
      goal_placeholder: "Indtast din målvægt for at se din personlige vejledning",
      goal_weight_too_high: "Din målvægt skal være lavere end din nuværende vægt.",
      goal_too_low: "Dit mål kan være for lavt for din krop. Et sundt BMI ligger normalt mellem 18,5 og 24,9.",
      goal_a_lot: "Det er et stort mål, og det er helt okay. Vi hjælper dig med at nå det trin for trin.",
      goal_moderate: "Dette er et realistisk mål. Stabile fremskridt kan forbedre dit helbred.",
      goal_small: "Du er allerede tæt på dit mål. Små ændringer kan stadig gøre en stor forskel.",
      consent_text: "Jeg giver tilladelse til, at mine helbredsdata bruges til at oprette en personlig plan.",
      consent_privacy_link: "Privatlivspolitik",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  gr: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Παρακαλώ εισάγετε μια τιμή μεταξύ __MIN__ και __MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Υπολογισμός του ΔΜΣ σας. Αυτό μας βοηθά να δημιουργήσουμε το σωστό πρόγραμμα για το σώμα σας.",
      bmi_underweight: (b) => "Ο ΔΜΣ σας είναι __BMI__, που είναι κάτω από το φυσιολογικό όριο".replace("__BMI__", String(b)),
      bmi_underweight_body: "Μπορεί να ωφεληθείτε από ήπια άσκηση ενδυνάμωσης και ισορροπημένη διατροφή.",
      bmi_normal: (b) => "Ο ΔΜΣ σας είναι __BMI__, που είναι σε υγιές επίπεδο".replace("__BMI__", String(b)),
      bmi_normal_body: "Είστε στο σωστό δρόμο. Συνεχίστε με τη ρουτίνα σας.",
      bmi_overweight: (b) => "Ο ΔΜΣ σας είναι __BMI__, που θεωρείται υπέρβαρο".replace("__BMI__", String(b)),
      bmi_overweight_body: "Το βάρος σας χρειάζεται περισσότερη προσοχή. Θα χρησιμοποιήσουμε τη βαθμολογία σας για να προσαρμόσουμε ένα πρόγραμμα στις ανάγκες και τους στόχους σας.",
      bmi_obese: (b) => "Ο ΔΜΣ σας είναι __BMI__, που θεωρείται παχυσαρκία".replace("__BMI__", String(b)),
      bmi_obese_body: "Το βάρος σας μπορεί να επηρεάσει την υγεία σας. Θα χρησιμοποιήσουμε τη βαθμολογία σας για να δημιουργήσουμε ένα πρόγραμμα που ταιριάζει στις ανάγκες σας.",
      goal_placeholder: "Εισάγετε το βάρος-στόχο σας για να δείτε την εξατομικευμένη καθοδήγηση",
      goal_weight_too_high: "Το βάρος-στόχος σας πρέπει να είναι χαμηλότερο από το τωρινό σας βάρος.",
      goal_too_low: "Ο στόχος σας μπορεί να είναι πολύ χαμηλός για το σώμα σας. Ένας υγιής ΔΜΣ συνήθως κυμαίνεται μεταξύ 18,5 και 24,9.",
      goal_a_lot: "Αυτός είναι ένας μεγάλος στόχος, και αυτό είναι εντάξει. Θα σας βοηθήσουμε να τον φτάσετε βήμα-βήμα.",
      goal_moderate: "Αυτός είναι ένας ρεαλιστικός στόχος. Η σταθερή πρόοδος μπορεί να βελτιώσει την υγεία σας.",
      goal_small: "Είστε ήδη κοντά στο στόχο σας. Μικρές αλλαγές μπορούν να κάνουν πραγματική διαφορά.",
      consent_text: "Επιτρέπω τη χρήση των δεδομένων υγείας μου για τη δημιουργία ενός εξατομικευμένου προγράμματος.",
      consent_privacy_link: "Πολιτική Απορρήτου",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  hu: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Kérjük, adj meg egy értéket __MIN__ és __MAX__ __UNIT__ között".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Kiszámoljuk a BMI-det. Ez segít, hogy a testedhez illő tervet készítsünk.",
      bmi_underweight: (b) => "A BMI-d __BMI__, ami a szokásos tartomány alatt van".replace("__BMI__", String(b)),
      bmi_underweight_body: "Kíméletes erősítés és kiegyensúlyozott táplálkozás hasznos lehet számodra.",
      bmi_normal: (b) => "A BMI-d __BMI__, ami egészséges tartományban van".replace("__BMI__", String(b)),
      bmi_normal_body: "Jó úton jársz. Folytasd a rutinodat.",
      bmi_overweight: (b) => "A BMI-d __BMI__, ami túlsúlynak számít".replace("__BMI__", String(b)),
      bmi_overweight_body: "A testsúlyod több figyelmet igényel. Az eredményed alapján a tervet a céljaidhoz és igényeidhez igazítjuk.",
      bmi_obese: (b) => "A BMI-d __BMI__, ami elhízásnak számít".replace("__BMI__", String(b)),
      bmi_obese_body: "A testsúlyod hatással lehet az egészségedre. Az eredményed alapján olyan tervet készítünk, ami illik hozzád.",
      goal_placeholder: "Add meg a céltestsúlyod, és megjelenik a személyre szabott útmutatás",
      goal_weight_too_high: "A céltestsúlyodnak alacsonyabbnak kell lennie a jelenleginél.",
      goal_too_low: "A célod lehet, hogy túl alacsony. Az egészséges BMI általában 18,5 és 24,9 között van.",
      goal_a_lot: "Ez nagy cél, és ez rendben van. Lépésről lépésre segítünk elérni.",
      goal_moderate: "Ez reális cél. A folyamatos, stabil haladás javíthatja az egészségedet.",
      goal_small: "Már közel vagy a célodhoz. A kis változtatások is sokat számíthatnak.",
      consent_text: "Engedélyezem, hogy az egészségügyi adataimat személyre szabott terv készítéséhez felhasználják.",
      consent_privacy_link: "Adatvédelmi szabályzat",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  hr: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Molimo unesite vrijednost između __MIN__ i __MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Izračunavamo vaš BMI. To nam pomaže stvoriti pravi plan za vaše tijelo.",
      bmi_underweight: (b) => "Vaš BMI je __BMI__, što je ispod uobičajenog raspona".replace("__BMI__", String(b)),
      bmi_underweight_body: "Možda biste imali koristi od laganog vježbe snage i uravnotežene prehrane.",
      bmi_normal: (b) => "Vaš BMI je __BMI__, što je u zdravom rasponu".replace("__BMI__", String(b)),
      bmi_normal_body: "Na pravom ste putu. Samo nastavite sa svojom rutinom.",
      bmi_overweight: (b) => "Vaš BMI je __BMI__, što se smatra prekomjernom težinom".replace("__BMI__", String(b)),
      bmi_overweight_body: "Vaša težina zahtijeva više pažnje. Iskoristit ćemo vaš rezultat kako bismo plan prilagodili vašim potrebama i ciljevima.",
      bmi_obese: (b) => "Vaš BMI je __BMI__, što se smatra pretilošću".replace("__BMI__", String(b)),
      bmi_obese_body: "Vaša težina može utjecati na vaše zdravlje. Iskoristit ćemo vaš rezultat za izradu plana koji odgovara vašim potrebama.",
      goal_placeholder: "Unesite svoju ciljanu težinu kako biste vidjeli personalizirane upute",
      goal_weight_too_high: "Vaša ciljana težina mora biti manja od vaše trenutne težine.",
      goal_too_low: "Vaš cilj bi mogao biti prenizak za vaše tijelo. Zdrav BMI obično pada između 18,5 i 24,9.",
      goal_a_lot: "To je velik cilj, i to je u redu. Pomoći ćemo vam da ga postignete korak po korak.",
      goal_moderate: "Ovo je realan cilj. Stabilan napredak može poboljšati vaše zdravlje.",
      goal_small: "Već ste blizu svom cilju. Male promjene i dalje mogu činiti stvarnu razliku.",
      consent_text: "Dopuštam korištenje mojih zdravstvenih podataka za izradu personaliziranog plana.",
      consent_privacy_link: "Pravila privatnosti",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  il: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "אנא הזן ערך בין __MIN__ ל-__MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "מחשבים את ה-BMI שלך. זה עוזר לנו ליצור את התוכנית הנכונה לגוף שלך.",
      bmi_underweight: (b) => "ה-BMI שלך הוא __BMI__, שזה מתחת לטווח הרגיל".replace("__BMI__", String(b)),
      bmi_underweight_body: "תוכל להפיק תועלת מתרגילי כוח קלים ותזונה מאוזנת.",
      bmi_normal: (b) => "ה-BMI שלך הוא __BMI__, שזה בטווח הבריא".replace("__BMI__", String(b)),
      bmi_normal_body: "את/ה בדרך הנכונה. פשוט המשך/י בשגרה שלך.",
      bmi_overweight: (b) => "ה-BMI שלך הוא __BMI__, שנחשב לעודף משקל".replace("__BMI__", String(b)),
      bmi_overweight_body: "המשקל שלך דורש יותר תשומת לב. נשתמש בתוצאה שלך כדי להתאים את התוכנית לצרכים ולמטרות שלך.",
      bmi_obese: (b) => "ה-BMI שלך הוא __BMI__, שנחשב להשמנת יתר".replace("__BMI__", String(b)),
      bmi_obese_body: "המשקל שלך עלול להשפיע על הבריאות שלך. נשתמש בתוצאה שלך כדי לבנות תוכנית שתתאים לך.",
      goal_placeholder: "הזן את משקל היעד שלך כדי לראות הנחיות מותאמות אישית",
      goal_weight_too_high: "משקל היעד שלך חייב להיות נמוך מהמשקל הנוכחי.",
      goal_too_low: "היעד שלך עשוי להיות נמוך מדי עבור הגוף שלך. BMI בריא נע בדרך כלל בין 18.5 ל-24.9.",
      goal_a_lot: "זו מטרה גדולה, וזה בסדר גמור. נעזור לך להשיג אותה צעד אחר צעד.",
      goal_moderate: "זו מטרה ריאלית. התקדמות יציבה יכולה לשפר את הבריאות שלך.",
      goal_small: "את/ה כבר קרוב/ה ליעד שלך. שינויים קטנים עדיין יכולים לעשות הבדל אמיתי.",
      consent_text: "אני מאשר/ת להשתמש בנתוני הבריאות שלי ליצירת תוכנית מותאמת אישית.",
      consent_privacy_link: "מדיניות פרטיות",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  jp: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "__MIN__から__MAX__ __UNIT__の間の値を入力してください".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "BMIを計算しています。これにより、あなたの体に合ったプランを作成できます。",
      bmi_underweight: (b) => "あなたのBMIは__BMI__で、通常より低い範囲です".replace("__BMI__", String(b)),
      bmi_underweight_body: "適度な筋肉トレーニングとバランスの取れた栄養が効果的かもしれません。",
      bmi_normal: (b) => "あなたのBMIは__BMI__で、健康的な範囲内です".replace("__BMI__", String(b)),
      bmi_normal_body: "順調です。今のルーチンを続けましょう。",
      bmi_overweight: (b) => "あなたのBMIは__BMI__で、過体重と見なされます".replace("__BMI__", String(b)),
      bmi_overweight_body: "体重管理により注意を払う必要があります。あなたのスコアを使用して、ニーズと目標に合わせたプランを作成します。",
      bmi_obese: (b) => "あなたのBMIは__BMI__で、肥満と見なされます".replace("__BMI__", String(b)),
      bmi_obese_body: "現在の体重が健康に影響を与える可能性があります。あなたのスコアを使用して、ニーズに合ったプランを構築します。",
      goal_placeholder: "目標体重を入力して、パーソナライズされたガイダンスを確認してください",
      goal_weight_too_high: "目標体重は現在の体重より低くなければなりません。",
      goal_too_low: "目標が体に対して低すぎる可能性があります。健康的なBMIは通常18.5から24.9の間です。",
      goal_a_lot: "大きな目標ですが、大丈夫です。一歩ずつ、達成をサポートします。",
      goal_moderate: "これは現実的な目標です。着実な進歩が健康を改善します。",
      goal_small: "すでに目標に近づいています。小さな変化でも大きな違いを生むことができます。",
      consent_text: "パーソナライズされたプランを作成するために、健康データを使用することを許可します。",
      consent_privacy_link: "プライバシーポリシー",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  ru: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Пожалуйста, введите значение от __MIN__ до __MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Рассчитываем ваш ИМТ. Это поможет нам составить правильный план для вашего тела.",
      bmi_underweight: (b) => "Ваш ИМТ составляет __BMI__, что ниже обычного диапазона".replace("__BMI__", String(b)),
      bmi_underweight_body: "Вам могут быть полезны умеренные силовые тренировки и сбалансированное питание.",
      bmi_normal: (b) => "Ваш ИМТ составляет __BMI__, что находится в здоровом диапазоне".replace("__BMI__", String(b)),
      bmi_normal_body: "Вы на правильном пути. Просто продолжайте в том же духе.",
      bmi_overweight: (b) => "Ваш ИМТ составляет __BMI__, что считается избыточным весом".replace("__BMI__", String(b)),
      bmi_overweight_body: "Вашему весу требуется больше внимания. Мы используем ваши результаты, чтобы адаптировать план к вашим потребностям и целям.",
      bmi_obese: (b) => "Ваш ИМТ составляет __BMI__, что считается ожирением".replace("__BMI__", String(b)),
      bmi_obese_body: "Ваш вес может влиять на ваше здоровье. Мы используем ваши результаты для составления плана, который вам подойдет.",
      goal_placeholder: "Введите свой целевой вес, чтобы увидеть персональные рекомендации",
      goal_weight_too_high: "Ваш целевой вес должен быть меньше текущего.",
      goal_too_low: "Ваша цель может быть слишком низкой для вашего тела. Здоровый ИМТ обычно находится в пределах от 18,5 до 24,9.",
      goal_a_lot: "Это большая цель, и это нормально. Мы поможем вам достичь ее шаг за шагом.",
      goal_moderate: "Это реалистичная цель. Стабильный прогресс может улучшить ваше здоровье.",
      goal_small: "Вы уже близки к своей цели. Небольшие изменения все равно могут иметь большое значение.",
      consent_text: "Я разрешаю использовать мои данные о здоровье для создания персонализированного плана.",
      consent_privacy_link: "Политика конфиденциальности",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  sk: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "Zadajte hodnotu v rozmedzí od __MIN__ do __MAX__ __UNIT__".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "Počítame váš BMI. Pomôže nám to vytvoriť správny plán pre vaše telo.",
      bmi_underweight: (b) => "Váš BMI je __BMI__, čo je pod normálnym rozmedzím".replace("__BMI__", String(b)),
      bmi_underweight_body: "Mohlo by vám pomôcť mierne silové cvičenie a vyvážená výživa.",
      bmi_normal: (b) => "Váš BMI je __BMI__, čo je v zdravom rozmedzí".replace("__BMI__", String(b)),
      bmi_normal_body: "Ste na správnej ceste. Pokračujte vo svojej rutine.",
      bmi_overweight: (b) => "Váš BMI je __BMI__, čo sa považuje za nadváhu".replace("__BMI__", String(b)),
      bmi_overweight_body: "Vaša váha si vyžaduje viac pozornosti. Váš výsledok použijeme na prispôsobenie plánu vašim potrebám a cieľom.",
      bmi_obese: (b) => "Váš BMI je __BMI__, čo sa považuje za obezitu".replace("__BMI__", String(b)),
      bmi_obese_body: "Vaša váha môže ovplyvniť vaše zdravie. Váš výsledok použijeme na zostavenie plánu, ktorý vám bude vyhovovať.",
      goal_placeholder: "Zadajte cieľovú váhu pre zobrazenie osobných pokynov",
      goal_weight_too_high: "Cieľová váha musí byť nižšia ako súčasná váha.",
      goal_too_low: "Váš cieľ môže byť pre vaše telo príliš nízky. Zdravý BMI sa zvyčajne pohybuje medzi 18,5 a 24,9.",
      goal_a_lot: "Je to veľký cieľ a je to v poriadku. Pomôžeme vám ho dosiahnuť krok za krokom.",
      goal_moderate: "Toto je realistický cieľ. Stabilný pokrok môže zlepšiť vaše zdravie.",
      goal_small: "K cieľu už máte blízko. Aj malé zmeny môžu priniesť skutočný rozdiel.",
      consent_text: "Súhlasím s použitím mojich údajov o zdraví na vytvorenie personalizovaného plánu.",
      consent_privacy_link: "Zásady ochrany osobných údajov",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    },
  tw: {
      ...EN_STEP_PAGE,
      error_range: (mn, mx, u) => "請輸入介於 __MIN__ 到 __MAX__ __UNIT__ 之間的值".replace("__MIN__", String(mn)).replace("__MAX__", String(mx)).replace("__UNIT__", String(u)),
      bmi_checking: "正在計算您的 BMI。這有助於我們為您的體質建立正確的計畫。",
      bmi_underweight: (b) => "您的 BMI 為 __BMI__，低於正常範圍".replace("__BMI__", String(b)),
      bmi_underweight_body: "適度的肌力訓練與均衡飲食可能對您有益。",
      bmi_normal: (b) => "您的 BMI 為 __BMI__，處於健康範圍".replace("__BMI__", String(b)),
      bmi_normal_body: "您正步入正軌。請繼續保持您的日常習慣。",
      bmi_overweight: (b) => "您的 BMI 為 __BMI__，被視為過重".replace("__BMI__", String(b)),
      bmi_overweight_body: "您的體重需要更多關注。我們將使用您的得分來為您的需求與目標量身定制計畫。",
      bmi_obese: (b) => "您的 BMI 為 __BMI__，被視為肥胖".replace("__BMI__", String(b)),
      bmi_obese_body: "您的體重可能會影響您的健康。我們將使用您的得分來建立符合您需求的計畫。",
      goal_placeholder: "輸入您的目標體重以查看個人化指南",
      goal_weight_too_high: "您的目標體重必須低於您目前的體重。",
      goal_too_low: "您的目標可能對您的身體來說太低。健康的 BMI 通常介於 18.5 到 24.9 之間。",
      goal_a_lot: "這是一個大目標，這沒關係。我們將引導您逐步達成。",
      goal_moderate: "這是一個切實可行的目標。穩定進展可以改善您的健康。",
      goal_small: "您已經接近目標。微小的改變仍然可以帶來真正的不同。",
      consent_text: "我允許將我的健康數據用於建立個人化計畫。",
      consent_privacy_link: "隱私權政策",
      char_count: (n) => "__N__/20".replace("__N__", String(n)),
    }
}

const result: Record<LangCode, ResultTranslations> = {
  en: {
      header_label: "Your results",
      headline: "Your Personalized Zero Carbs Challenge is ready",
      subtitle: "Based on your answers, here is your 28-day plan.",
      guide_text: "What you can achieve in 28 days with Zero Carbs Challenge",
      goal_line: (w, d, u) => "Goal: __W__ __U__ by __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Get my Zero Carbs plan",
    },
  lt: {
      header_label: "Jūsų rezultatai",
      headline: "Jūsų asmeninis beangliavandenis iššūkis paruoštas",
      subtitle: "Remiantis jūsų atsakymais, sudarytas 28 dienų planas.",
      guide_text: "Ką galite pasiekti per 28 dienas su beangliavandeniu iššūkiu",
      goal_line: (w, d, u) => "Tikslas: __W__ __U__ iki __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Gauti mano beangliavandenį planą",
    },
  lv: {
      header_label: "Jūsu rezultāti",
      headline: "Jūsu personalizētais Zero Carbs izaicinājums ir gatavs",
      subtitle: "Pamatojoties uz jūsu atbildēm, šeit ir jūsu 28 dienu plāns.",
      guide_text: "Ko jūs varat sasniegt 28 dienās ar Zero Carbs izaicinājumu",
      goal_line: (w, d, u) => "Mērķis: __W__ __U__ līdz __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Saņemt manu Zero Carbs plānu",
    },
  ro: {
      header_label: "Rezultatele tale",
      headline: "Provocarea ta personalizată Fără Carbohidrați este gata",
      subtitle: "Pe baza răspunsurilor tale, iată planul tău de 28 de zile.",
      guide_text: "Ce poți obține în 28 de zile cu Provocarea Fără Carbohidrați",
      goal_line: (w, d, u) => "Obiectiv: __W__ __U__ până în __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Obține planul meu Fără Carbohidrați",
    },
  cz: {
      header_label: "Vaše výsledky",
      headline: "Vaše personalizovaná výzva bez sacharidov je připravena",
      subtitle: "Na základě Vašich odpovědí je zde Váš 28denní plán.",
      guide_text: "Čeho můžete dosáhnout za 28 dní s výzvou bez sacharidů",
      goal_line: (w, d, u) => "Cíl: __W__ __U__ do __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Získat můj plán bez sacharidů",
    },
  dk: {
      header_label: "Dine resultater",
      headline: "Din personlige Zero Carbs-udfordring er klar",
      subtitle: "Baseret på dine svar er her din 28-dages plan.",
      guide_text: "Hvad du kan opnå på 28 dage med Zero Carbs-udfordringen",
      goal_line: (w, d, u) => "Mål: __W__ __U__ inden __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Hent min Zero Carbs-plan",
    },
  gr: {
      header_label: "Τα αποτελέσματά σας",
      headline: "Η Εξατομικευμένη Πρόκληση Μηδενικών Υδατανθράκων είναι έτοιμη",
      subtitle: "Με βάση τις απαντήσεις σας, εδώ είναι το πρόγραμμά σας για 28 ημέρες.",
      guide_text: "Τι μπορείτε να πετύχετε σε 28 ημέρες με την Πρόκληση Μηδενικών Υδατανθράκων",
      goal_line: (w, d, u) => "Στόχος: __W__ __U__ έως __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Αποκτήστε το πρόγραμμα Zero Carbs",
    },
  hu: {
      header_label: "Eredményeid",
      headline: "Elkészült a személyre szabott Zero Carbs kihívás",
      subtitle: "Válaszaid alapján itt a 28 napos terved.",
      guide_text: "Mit érhetsz el 28 nap alatt a Zero Carbs kihívás segítségével",
      goal_line: (w, d, u) => "Cél: __W__ __U__ __D__-ig".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Kérem a Zero Carbs tervemet",
    },
  hr: {
      header_label: "Vaši rezultati",
      headline: "Vaš personalizirani izazov bez ugljikohidrata je spreman",
      subtitle: "Na temelju vaših odgovora, evo vašeg 28-dnevnog plana.",
      guide_text: "Što možete postići u 28 dana uz izazov bez ugljikohidrata",
      goal_line: (w, d, u) => "Cilj: __W__ __U__ do __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Preuzmi moj plan bez ugljikohidrata",
    },
  il: {
      header_label: "התוצאות שלך",
      headline: "אתגר אפס פחמימות המותאם אישית שלך מוכן",
      subtitle: "בהתבסס על התשובות שלך, הנה התוכנית שלך ל-28 ימים.",
      guide_text: "מה ניתן להשיג ב-28 ימים עם אתגר אפס פחמימות",
      goal_line: (w, d, u) => "יעד: __W__ __U__ עד __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "קבל/י את תוכנית אפס הפחמימות שלי",
    },
  jp: {
      header_label: "結果",
      headline: "パーソナライズされたZero Carbs チャレンジの準備ができました",
      subtitle: "あなたの回答に基づいた28日間のプランがこちらです。",
      guide_text: "Zero Carbs チャレンジの28日間で達成できること",
      goal_line: (w, d, u) => "目標：__D__までに__W__ __U__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Zero Carbs チャレンジを開始する",
    },
  ru: {
      header_label: "Ваши результаты",
      headline: "Ваш персонализированный челлендж «Без углеводов» готов",
      subtitle: "На основе ваших ответов подготовлен ваш план на 28 дней.",
      guide_text: "Чего вы можете достичь за 28 дней с челленджем «Без углеводов»",
      goal_line: (w, d, u) => "Цель: __W__ __U__ к __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Получить план «Без углеводов»",
    },
  sk: {
      header_label: "Vaše výsledky",
      headline: "Vaša personalizovaná výzva bez sacharidov je pripravená",
      subtitle: "Na základe vašich odpovedí je tu váš 28-dňový plán.",
      guide_text: "Čo môžete dosiahnuť za 28 dní s výzvou bez sacharidov",
      goal_line: (w, d, u) => "Cieľ: __W__ __U__ do __D__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "Získať môj plán bez sacharidov",
    },
  tw: {
      header_label: "您的結果",
      headline: "您的個人化 Zero Carbs 挑戰已準備就緒",
      subtitle: "根據您的回答，這是您的 28 天計畫。",
      guide_text: "在 28 天的 Zero Carbs 挑戰中您可以實現哪些目標",
      goal_line: (w, d, u) => "目標：__D__ 之前達成 __W__ __U__".replace("__W__", String(w)).replace("__D__", String(d)).replace("__U__", String(u)),
      cta: "取得我的 Zero Carbs 計畫",
    }
}

const results28: Record<LangCode, Results28Translations> = {
  en: {
      header_label: "Your 4-week projection",
      your_weight: "Your weight",
      now: "Now",
      after_4_weeks: "After 4 weeks",
      keeping_it_off: "Keeping it off",
      week: (n) => "Week __N__".replace("__N__", String(n)),
      chart_note: "Individual results may vary.",
      headline: "A 4-week plan can be the start of lasting change.",
    },
  lt: {
      header_label: "Jūsų 4 savaičių prognozė",
      your_weight: "Jūsų svoris",
      now: "Dabar",
      after_4_weeks: "Po 4 savaičių",
      keeping_it_off: "Svorio palaikymas",
      week: (n) => "__N__ savaitė".replace("__N__", String(n)),
      chart_note: "Individualūs rezultatai gali skirtis.",
      headline: "4 savaičių planas gali tapti ilgalaikių pokyčių pradžia.",
    },
  lv: {
      header_label: "Jūsu 4 nedēļu prognoze",
      your_weight: "Jūsu svars",
      now: "Tagad",
      after_4_weeks: "Pēc 4 nedēļām",
      keeping_it_off: "Svara saglabāšana",
      week: (n) => "__N__. nedēļa".replace("__N__", String(n)),
      chart_note: "Individuālie rezultāti var atšķirties.",
      headline: "4 nedēļu plāns var būt sākums ilgstošām pārmaiņām.",
    },
  ro: {
      header_label: "Prognoza ta pe 4 săptămâni",
      your_weight: "Greutatea ta",
      now: "Acum",
      after_4_weeks: "După 4 săptămâni",
      keeping_it_off: "Menținerea greutății",
      week: (n) => "Săptămâna __N__".replace("__N__", String(n)),
      chart_note: "Rezultatele individuale pot varia.",
      headline: "Un plan de 4 săptămâni poate fi începutul unei schimbări durabile.",
    },
  cz: {
      header_label: "Vaše 4týdenní prognóza",
      your_weight: "Vaše váha",
      now: "Nyní",
      after_4_weeks: "Po 4 týdnech",
      keeping_it_off: "Udržení váhy",
      week: (n) => "__N__. týden".replace("__N__", String(n)),
      chart_note: "Individuální výsledky se mohou lišit.",
      headline: "4týdenní plán může být začátkem trvalé změny.",
    },
  dk: {
      header_label: "Din 4-ugers prognose",
      your_weight: "Din vægt",
      now: "Nu",
      after_4_weeks: "Efter 4 uger",
      keeping_it_off: "Hold vægten nede",
      week: (n) => "Uge __N__".replace("__N__", String(n)),
      chart_note: "Individuelle resultater kan variere.",
      headline: "En 4-ugers plan kan være starten på en varig forandring.",
    },
  gr: {
      header_label: "Η πρόβλεψή σας για 4 εβδομάδες",
      your_weight: "Το βάρος σας",
      now: "Τώρα",
      after_4_weeks: "Μετά από 4 εβδομάδες",
      keeping_it_off: "Διατήρηση της απώλειας",
      week: (n) => "Εβδομάδα __N__".replace("__N__", String(n)),
      chart_note: "Τα ατομικά αποτελέσματα μπορεί να διαφέρουν.",
      headline: "Ένα πρόγραμμα 4 εβδομάδων μπορεί να είναι η αρχή για μόνιμη αλλαγή.",
    },
  hu: {
      header_label: "4 hetes előrejelzésed",
      your_weight: "Testsúlyod",
      now: "Most",
      after_4_weeks: "4 hét múlva",
      keeping_it_off: "Megtartás",
      week: (n) => "__N__. hét".replace("__N__", String(n)),
      chart_note: "Az egyéni eredmények eltérhetnek.",
      headline: "Egy 4 hetes terv a tartós változás kezdete lehet.",
    },
  hr: {
      header_label: "Vaša 4-tjedna projekcija",
      your_weight: "Vaša težina",
      now: "Sada",
      after_4_weeks: "",
      keeping_it_off: "Održavanje težine",
      week: (n) => "".replace("__N__", String(n)),
      chart_note: "Individualni rezultati mogu varirati.",
      headline: "4-tjedni plan može biti početak trajne promjene.",
    },
  il: {
      header_label: "התחזית שלך ל-4 שבועות",
      your_weight: "המשקל שלך",
      now: "עכשיו",
      after_4_weeks: "אחרי 4 שבועות",
      keeping_it_off: "שמירה על המשקל",
      week: (n) => "שבוע __N__".replace("__N__", String(n)),
      chart_note: "התוצאות האישיות עשויות להשתנות.",
      headline: "תוכנית של 4 שבועות יכולה להיות ההתחלה של שינוי מתמשך.",
    },
  jp: {
      header_label: "4週間の予測",
      your_weight: "あなたの体重",
      now: "現在",
      after_4_weeks: "4週間後",
      keeping_it_off: "維持期間",
      week: (n) => "第__N__週".replace("__N__", String(n)),
      chart_note: "個人差があります。",
      headline: "4週間のプランは、持続的な変化の始まりになります。",
    },
  ru: {
      header_label: "Ваш прогноз на 4 недели",
      your_weight: "Ваш вес",
      now: "Сейчас",
      after_4_weeks: "Через 4 недели",
      keeping_it_off: "Удержание веса",
      week: (n) => "Неделя __N__".replace("__N__", String(n)),
      chart_note: "Индивидуальные результаты могут отличаться.",
      headline: "4-недельный план может стать началом долгосрочных перемен.",
    },
  sk: {
      header_label: "Vaša 4-týždňová prognóza",
      your_weight: "Vaša váha",
      now: "Teraz",
      after_4_weeks: "Po 4 týždňoch",
      keeping_it_off: "Udržanie váhy",
      week: (n) => "__N__. týždeň".replace("__N__", String(n)),
      chart_note: "Individuálne výsledky sa môžu líšiť.",
      headline: "4-týždňový plán môže byť začiatkom trvalej zmeny.",
    },
  tw: {
      header_label: "您的 4 週進度預測",
      your_weight: "您的體重",
      now: "現在",
      after_4_weeks: "4 週後",
      keeping_it_off: "持續保持",
      week: (n) => "第 __N__ 週".replace("__N__", String(n)),
      chart_note: "個人結果可能有所不同。",
      headline: "一個 4 週的計畫可以成為持久改變的開始。",
    }
}

const wellness: Record<LangCode, WellnessTranslations> = {
  en: {
      header_label: "Your profile",
      headline: "Here is your personal profile",
      lifestyle_label: "Activity Level",
      eater_label: "Eating Pattern",
      motivation_label: "Energy Level",
      img_alt: "Body profile illustration",
      warning_title: "Health note",
      warning_desc: "Zero Carbs Challenge is a dietary support tool. Please consult a professional if you have existing health conditions.",
      bmi_normal_msg: "Your BMI is in a healthy range. This is a great place to start if you want to get more toned and improve your shape.",
      bmi_overweight_msg: "Your BMI is above the healthy range. This can raise the risk of high blood pressure and other conditions.",
      bmi_obese_msg: "Your BMI is in a high range. This can increase the risk of high blood pressure, heart problems, and type 2 diabetes.",
      lifestyle: { sedentary:"Sedentary", light:"Lightly active", moderate:"Moderately active", active:"Very active" },
      eater: { balanced:"Balanced eater", sweet:"Sweet tooth", salty:"Salty snacker", emotional:"Emotional eater" },
      motivation: { high:"High energy", moderate:"Moderate energy", low:"Low energy" },
    },
  lt: {
      header_label: "Jūsų profilis",
      headline: "Tai jūsų asmeninis profilis",
      lifestyle_label: "Aktyvumo lygis",
      eater_label: "Mitybos įpročiai",
      motivation_label: "Energijos lygis",
      img_alt: "Kūno profilio iliustracija",
      warning_title: "Patarimas dėl sveikatos",
      warning_desc: "Beangliavandenis iššūkis yra mitybos palaikymo priemonė. Jei turite sveikatos nusiskundimų, pasitarkite su specialistu.",
      bmi_normal_msg: "Jūsų KMI yra sveiko diapazono ribose. Tai puiki pradžia, jei norite sutvirtinti kūną ir pagerinti savo formą.",
      bmi_overweight_msg: "Jūsų KMI viršija sveiką normą. Tai gali padidinti aukšto kraujospūdžio ir kitų ligų riziką.",
      bmi_obese_msg: "Jūsų KMI yra didelis. Tai gali padidinti aukšto kraujospūdžio, širdies ligų ir 2 tipo diabeto riziką.",
      lifestyle: { sedentary:"Pasyvus", light:"Mažai aktyvus", moderate:"Vidutiniškai aktyvus", active:"Labai aktyvus" },
      eater: { balanced:"Subalansuotas", sweet:"Mėgstantis saldumynus", salty:"Mėgstantis sūrų maistą", emotional:"Emocinis valgytojas" },
      motivation: { high:"Daug energijos", moderate:"Vidutiniškai energijos", low:"Mažai energijos" },
    },
  lv: {
      header_label: "Jūsu profils",
      headline: "Šis ir jūsu personīgais profils",
      lifestyle_label: "Aktivitātes līmenis",
      eater_label: "Ēšanas veids",
      motivation_label: "Enerģijas līmenis",
      img_alt: "Ķermeņa profila ilustrācija",
      warning_title: "Piezīme par veselību",
      warning_desc: "Zero Carbs izaicinājums ir uztura atbalsta rīks. Lūdzu, konsultējieties ar speciālistu, ja jums ir veselības traucējumi.",
      bmi_normal_msg: "Jūsu ĶMI ir veselīgā diapazonā. Šis ir lielisks sākums, ja vēlaties kļūt tvirtāks/-a un uzlabot savu formu.",
      bmi_overweight_msg: "Jūsu ĶMI ir virs veselīgā diapazona. Tas var palielināt augsta asinsspiediena un citu stāvokļu risku.",
      bmi_obese_msg: "Jūsu ĶMI ir augstā diapazonā. Tas var palielināt augsta asinsspiediena, sirds problēmu un 2. tipa diabēta risku.",
      lifestyle: { sedentary:"Mazkustīgs", light:"Viegli aktīvs", moderate:"Mēreni aktīvs", active:"Ļoti aktīvs" },
      eater: { balanced:"Sabalansēts ēdājs", sweet:"Saldummīlis", salty:"Sāļo uzkodu cienītājs", emotional:"Emocionālais ēdājs" },
      motivation: { high:"Augsta enerģija", moderate:"Mērena enerģija", low:"Zema enerģija" },
    },
  ro: {
      header_label: "Profilul tău",
      headline: "Iată profilul tău personal",
      lifestyle_label: "Nivel de activitate",
      eater_label: "Model alimentar",
      motivation_label: "Nivel de energie",
      img_alt: "Ilustrație profil corporal",
      warning_title: "Notă privind sănătatea",
      warning_desc: "Provocarea Fără Carbohidrați este un instrument de sprijin nutrițional. Te rugăm să consulți un specialist dacă ai probleme de sănătate existente.",
      bmi_normal_msg: "IMC-ul tău este într-un interval sănătos. Acesta este un punct de plecare excelent dacă dorești să fii mai tonifiat(ă) și să îți îmbunătățești forma fizică.",
      bmi_overweight_msg: "IMC-ul tău este peste intervalul sănătos. Acest lucru poate crește riscul de tensiune arterială ridicată și de alte afecțiuni.",
      bmi_obese_msg: "IMC-ul tău este într-un interval ridicat. Acest lucru poate crește riscul de tensiune arterială ridicată, probleme cardiace și diabet de tip 2.",
      lifestyle: { sedentary:"Sedentar", light:"Ușor activ", moderate:"Moderat activ", active:"Foarte activ" },
      eater: { balanced:"Echilibrat", sweet:"Pasiune pentru dulciuri", salty:"Pasiune pentru sărat", emotional:"Mâncat pe fond emoțional" },
      motivation: { high:"Energie ridicată", moderate:"Energie moderată", low:"Energie scăzută" },
    },
  cz: {
      header_label: "Váš profil",
      headline: "Zde je Váš osobní profil",
      lifestyle_label: "Úroveň aktivity",
      eater_label: "Stravovací návyky",
      motivation_label: "Úroveň energie",
      img_alt: "Ilustrace profilu postavy",
      warning_title: "Zdravotní poznámka",
      warning_desc: "Výzva bez sacharidů je nástroj pro podporu stravování. Pokud máte zdravotní problémy, poraďte se s odborníkem.",
      bmi_normal_msg: "Vaše BMI je v zdravém rozmezí. Je to skvělý začátek, pokud chcete zpevnit postavu a zlepšit si formu.",
      bmi_overweight_msg: "Vaše BMI je nad zdravým rozmezím. To může zvýšit riziko vysokého krevního tlaku a jiných onemocnění.",
      bmi_obese_msg: "Vaše BMI je v vysokém rozmezí. To může zvýšit riziko vysokého krevního tlaku, srdečních problémů a cukrovky 2. typu.",
      lifestyle: { sedentary:"Sedavý", light:"Mírně aktivní", moderate:"Středně aktivní", active:"Velmi aktivní" },
      eater: { balanced:"Vyvážený", sweet:"Milovník sladkého", salty:"Milovník slaného", emotional:"Emocionální stravování" },
      motivation: { high:"Vysoká energie", moderate:"Střední energie", low:"Nízká energie" },
    },
  dk: {
      header_label: "Din profil",
      headline: "Her er din personlige profil",
      lifestyle_label: "Aktivitetsniveau",
      eater_label: "Spisemønster",
      motivation_label: "Energiniveau",
      img_alt: "Illustration af kropsprofil",
      warning_title: "Sundhedsnote",
      warning_desc: "Zero Carbs-udfordringen er et værktøj til koststøtte. Kontakt venligst en professionel, hvis du har eksisterende helbredsproblemer.",
      bmi_normal_msg: "Dit BMI er i det sunde område. Dette er et godt sted at starte, hvis du gerne vil være mere tonet og forbedre din form.",
      bmi_overweight_msg: "Dit BMI er over det sunde område. Dette kan øge risikoen for højt blodtryk og andre tilstande.",
      bmi_obese_msg: "Dit BMI er i det høje område. Dette kan øge risikoen for højt blodtryk, hjerteproblemer og type 2-diabetes.",
      lifestyle: { sedentary:"Stillesiddende", light:"Let aktiv", moderate:"Moderat aktiv", active:"Meget aktiv" },
      eater: { balanced:"Afbalanceret", sweet:"Lidenskab for sødt", salty:"Lidenskab for salt", emotional:"Følelsesmæssig spiser" },
      motivation: { high:"Høj energi", moderate:"Moderat energi", low:"Lav energi" },
    },
  gr: {
      header_label: "Το προφίλ σας",
      headline: "Εδώ είναι το προσωπικό σας προφίλ",
      lifestyle_label: "Επίπεδο Δραστηριότητας",
      eater_label: "Διατροφικό Μοτίβο",
      motivation_label: "Επίπεδο Ενέργειας",
      img_alt: "Απεικόνιση προφίλ σώματος",
      warning_title: "Σημείωση υγείας",
      warning_desc: "Το Zero Carbs Challenge είναι ένα εργαλείο υποστήριξης διατροφής. Παρακαλούμε συμβουλευτείτε έναν ειδικό εάν έχετε υπάρχουσες παθήσεις υγείας.",
      bmi_normal_msg: "Ο ΔΜΣ σας είναι σε υγιές επίπεδο. Αυτό είναι ένα εξαιρετικό σημείο εκκίνησης αν θέλετε να αποκτήσετε μεγαλύτερη γράμμωση και να βελτιώσετε τη σιλουέτα σας.",
      bmi_overweight_msg: "Ο ΔΜΣ σας είναι πάνω από το υγιές όριο. Αυτό μπορεί να αυξήσει τον κίνδυνο υψηλής αρτηριακής πίεσης και άλλων παθήσεων.",
      bmi_obese_msg: "Ο ΔΜΣ σας είναι σε υψηλό επίπεδο. Αυτό μπορεί να αυξήσει τον κίνδυνο υψηλής αρτηριακής πίεσης, καρδιακών προβλημάτων και διαβήτη τύπου 2.",
      lifestyle: { sedentary:"Καθιστικός", light:"Ελαφρώς δραστήριος/α", moderate:"Μέτρια δραστήριος/α", active:"Πολύ δραστήριος/α" },
      eater: { balanced:"Ισορροπημένος/η", sweet:"Λάτρης των γλυκών", salty:"Λάτρης των αλμυρών σνακ", emotional:"Συναισθηματικός/ή στο φαγητό" },
      motivation: { high:"Υψηλή ενέργεια", moderate:"Μέτρια ενέργεια", low:"Χαμηλή ενέργεια" },
    },
  hu: {
      header_label: "Profilod",
      headline: "Itt a személyes profilod",
      lifestyle_label: "Aktivitási szint",
      eater_label: "Étkezési minta",
      motivation_label: "Energiaszint",
      img_alt: "Testprofil illusztráció",
      warning_title: "Egészségügyi megjegyzés",
      warning_desc: "A Zero Carbs kihívás étrendi támogató eszköz. Ha meglévő egészségügyi problémád van, konzultálj szakemberrel.",
      bmi_normal_msg: "A BMI-d egészséges tartományban van. Remek kiindulópont, ha feszesedni szeretnél och javítani az alakodon.",
      bmi_overweight_msg: "A BMI-d az egészséges tartomány felett van. Ez növelheti a magas vérnyomás och más problémák kockázatát.",
      bmi_obese_msg: "A BMI-d magas tartományban van. Ez növelheti a magas vérnyomás, a szívproblémák och a 2-es típusú cukorbetegség kockázatát.",
      lifestyle: { sedentary:"Ülő", light:"Enyhén aktív", moderate:"Közepesen aktív", active:"Nagyon aktív" },
      eater: { balanced:"Kiegyensúlyozottan étkező", sweet:"Édesszájú", salty:"Sós nassoló", emotional:"Érzelmi evő" },
      motivation: { high:"Magas energia", moderate:"Közepes energia", low:"Alacsony energia" },
    },
  hr: {
      header_label: "Vaš profil",
      headline: "Ovo je vaš osobni profil",
      lifestyle_label: "Razina aktivnosti",
      eater_label: "Obrazac prehrane",
      motivation_label: "Razina energije",
      img_alt: "Ilustracija profila tijela",
      warning_title: "Napomena o zdravlju",
      warning_desc: "Izazov bez ugljikohidrata je alat za podršku prehrani. Molimo konzultirajte stručnjaka ako imate postojeće zdravstvene probleme.",
      bmi_normal_msg: "Vaš BMI je u zdravom rasponu. Ovo je izvrsno mjesto za početak ako želite biti toniraniji i poboljšati svoj oblik.",
      bmi_overweight_msg: "Vaš BMI je iznad zdravog raspona. To može povećati rizik od visokog krvnog tlaka i drugih stanja.",
      bmi_obese_msg: "Vaš BMI je u visokom rasponu. To može povećati rizik od visokog krvnog tlaka, srčanih problema i dijabetesa tipa 2.",
      lifestyle: { sedentary:"Sjedilački", light:"Lagano aktivno", moderate:"Umjereno aktivno", active:"Vrlo aktivno" },
      eater: { balanced:"Uravnotežena prehrana", sweet:"Ljubitelj slatkog", salty:"Ljubitelj slanih grickalica", emotional:"Emocionalno prejedanje" },
      motivation: { high:"Visoka energija", moderate:"Umjerena energija", low:"Niska energija" },
    },
  il: {
      header_label: "הפרופיל שלך",
      headline: "הנה הפרופיל האישי שלך",
      lifestyle_label: "רמת פעילות",
      eater_label: "דפוס אכילה",
      motivation_label: "רמת אנרגיה",
      img_alt: "איור פרופיל גוף",
      warning_title: "הערה בריאותית",
      warning_desc: "אתגר אפס פחמימות הוא כלי תמיכה תזונתי. אנא התייעץ/י עם איש מקצוע אם יש לך בעיות בריאותיות קיימות.",
      bmi_normal_msg: "ה-BMI שלך בטווח הבריא. זו נקודת התחלה מצוינת אם את/ה רוצה להיות חטוב/ה יותר ולשפר את המראה שלך.",
      bmi_overweight_msg: "ה-BMI שלך מעל הטווח הבריא. זה עלול להגביר את הסיכון ללחץ דם גבוה ומצבים אחרים.",
      bmi_obese_msg: "ה-BMI שלך בטווח גבוה. זה עלול להגביר את הסיכון ללחץ דם גבוה, בעיות לב וסוכרת מסוג 2.",
      lifestyle: { sedentary:"יושבני", light:"פעיל קלות", moderate:"פעיל במידה מתונה", active:"פעיל מאוד" },
      eater: { balanced:"מאוזן", sweet:"תשוקה למתוק", salty:"תשוקה למלוח", emotional:"אכילה רגשית" },
      motivation: { high:"אנרגיה גבוהה", moderate:"אנרגיה מתונה", low:"אנרגיה נמוכה" },
    },
  jp: {
      header_label: "あなたのプロフィール",
      headline: "これがあなたの個人プロフィールです",
      lifestyle_label: "活動レベル",
      eater_label: "食生活のパターン",
      motivation_label: "エネルギーレベル",
      img_alt: "体型プロフィールのイラスト",
      warning_title: "健康上のご注意",
      warning_desc: "Zero Carbs チャレンジは食事療法のサポートツールです。持病がある場合は専門家に相談してください。",
      bmi_normal_msg: "あなたのBMIは健康的な範囲内です。体を引き締め、体型を改善したい場合に最適なスタート地点です。",
      bmi_overweight_msg: "あなたのBMIは健康的な範囲を超えています。これにより、高血圧やその他の症状のリスクが高まる可能性があります。",
      bmi_obese_msg: "あなたのBMIは高い範囲にあります。これにより、高血圧、心臓病、および2型糖尿病のリスクが高まる可能性があります。",
      lifestyle: { sedentary:"座りがち", light:"ライト", moderate:"適度", active:"アクティブ" },
      eater: { balanced:"バランス重視", sweet:"甘党", salty:"塩味好き", emotional:"感情的食い" },
      motivation: { high:"高い活力", moderate:"適度な活力", low:"低い活力" },
    },
  ru: {
      header_label: "Ваш профиль",
      headline: "Вот ваш персональный профиль",
      lifestyle_label: "Уровень активности",
      eater_label: "Тип питания",
      motivation_label: "Уровень энергии",
      img_alt: "Иллюстрация профиля тела",
      warning_title: "Медицинская заметка",
      warning_desc: "Челлендж «Без углеводов» — это инструмент поддержки питания. Проконсультируйтесь со специалистом, если у вас есть заболевания.",
      bmi_normal_msg: "Ваш ИМТ находится в здоровом диапазоне. Это отличное место для начала, если вы хотите подтянуть тело и улучшить фигуру.",
      bmi_overweight_msg: "Ваш ИМТ выше здорового диапазона. Это может повысить риск высокого кровяного давления и других заболеваний.",
      bmi_obese_msg: "Ваш ИМТ находится в высоком диапазоне. Это может повысить риск высокого кровяного давления, проблем с сердцем и диабета 2 типа.",
      lifestyle: { sedentary:"Сидячий", light:"Легкий", moderate:"Умеренный", active:"Активный" },
      eater: { balanced:"Сбалансированный", sweet:"Сладкоежка", salty:"Любитель соленого", emotional:"Эмоциональное переедание" },
      motivation: { high:"Высокая энергия", moderate:"Средняя энергия", low:"Низкая энергия" },
    },
  sk: {
      header_label: "Váš profil",
      headline: "Tu je váš osobný profil",
      lifestyle_label: "Úroveň aktivity",
      eater_label: "Stravovacie návyky",
      motivation_label: "Úroveň energie",
      img_alt: "Ilustrácia profilu postavy",
      warning_title: "Zdravotná poznámka",
      warning_desc: "Výzva bez sacharidov je nástroj na podporu stravovania. Ak máte zdravotné problémy, poraďte sa s odborníkom.",
      bmi_normal_msg: "Vaše BMI je v zdravom rozmedzí. Je to skvelý začiatok, ak chcete spevniť postavu a zlepšiť si formu.",
      bmi_overweight_msg: "Vaše BMI je nad zdravým rozmedzím. To môže zvýšiť riziko vysokého krvného tlaku a iných ochorení.",
      bmi_obese_msg: "Vaše BMI je vo vysokom rozmedzí. To môže zvýšiť riziko vysokého krvného tlaku, srdcových problémov a cukrovky 2. typu.",
      lifestyle: { sedentary:"Sedavý", light:"Mierne aktívny", moderate:"Stredne aktívny", active:"Veľmi aktívny" },
      eater: { balanced:"Vyvážený", sweet:"Milovník sladkého", salty:"Milovník slaného", emotional:"Emocionálne stravovanie" },
      motivation: { high:"Vysoká energia", moderate:"Stredná energia", low:"Nízka energia" },
    },
  tw: {
      header_label: "您的個人檔案",
      headline: "這是您的個人檔案",
      lifestyle_label: "活動等級",
      eater_label: "進食模式",
      motivation_label: "精力等級",
      img_alt: "身體檔案插圖",
      warning_title: "健康備註",
      warning_desc: "Zero Carbs 挑戰是一個飲食支援工具。如果您已有健康狀況，請諮詢專業人士。",
      bmi_normal_msg: "您的 BMI 處於健康範圍。如果您想塑造體態並改善體形，這是一個很好的起點。",
      bmi_overweight_msg: "您的 BMI 超過健康範圍。這可能會增加高血壓和其他狀況的風險。",
      bmi_obese_msg: "您的 BMI 處於較高範圍。這可能會增加高血壓、心臟問題與 2 型糖尿病的風險。",
      lifestyle: { sedentary:"久坐", light:"輕微活躍", moderate:"中等活躍", active:"非常活躍" },
      eater: { balanced:"飲食均衡者", sweet:"甜食愛好者", salty:"鹹食愛好者", emotional:"情緒化進食者" },
      motivation: { high:"高精力", moderate:"中等精力", low:"低精力" },
    }
}

const loading: Record<LangCode, LoadingTranslations> = {
  en: { header_label:"Preparing your results", title:"Analyzing your answers…", "reviews.0.name":"Elena, 41", "reviews.0.text":"I really enjoyed this plan. By following it, I was able to lose weight in 28 days. The meals were simple, tasty, and easy to make.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina, 33", "reviews.1.text":"The meals were easy to follow. It made the whole challenge feel much easier for me.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Daniel, 56", "reviews.2.text":"It fit into my busy life. This challenge was easy to follow, even on busy days.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sarah, 38", "reviews.3.text":"It gave me a good start. This challenge helped me get back on track and take care of myself again.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  lt: { header_label:"Ruošiami jūsų rezultatai", title:"Analizuojami jūsų atsakymai…", "reviews.0.name":"Elena, 41", "reviews.0.text":"Man labai patiko šis planas. Laikydamasi jo, per 28 dienas numečiau svorio. Patiekalai buvo paprasti, skanūs ir lengvai paruošiami.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina, 33", "reviews.1.text":"Patiekalų receptai buvo lengvai suprantami. Dėl to man šis iššūkis buvo daug lengvesnis.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Danielius, 56", "reviews.2.text":"Tai puikiai tiko mano užimtam gyvenimo būdui. Iššūkio laikytis buvo lengva net ir tomis dienomis, kai trūko laiko.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sara, 38", "reviews.3.text":"Tai suteikė puikią pradžią. Šis iššūkis padėjo man vėl pasirūpinti savimi ir grįžti prie sveikų įpročių.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  lv: { header_label:"Sagatavojam jūsu rezultātus", title:"Analizējam jūsu atbildes…", "reviews.0.name":"Elena, 41", "reviews.0.text":"Man ļoti patika šis plāns. Sekojot tam, es spēju zaudēt svaru 28 dienās. Maltītes bija vienkāršas, garšīgas un viegli pagatavojamas.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina, 33", "reviews.1.text":"Maltītes bija viegli saprotamas. Tas man padarīja visu izaicinājumu daudz vieglāku.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Daniels, 56", "reviews.2.text":"Tas iederējās manā aizņemtajā dzīvē. Šim izaicinājumam bija viegli sekot pat saspringtās dienās.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sāra, 38", "reviews.3.text":"Tas man sniedza labu sākumu. Šis izaicinājums palīdzēja man atgriezties uz pareizā ceļa un atkal parūpēties par sevi.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  ro: { header_label:"Pregătim rezultatele tale", title:"Analizăm răspunsurile tale…", "reviews.0.name":"Elena, 41", "reviews.0.text":"Mi-a plăcut mult acest plan. Urmându-l, am reușit să slăbesc în 28 de zile. Mesele au fost simple, gustoase și ușor de preparat.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina, 33", "reviews.1.text":"Mesele au fost ușor de urmărit. Mi-au făcut întreaga provocare mult mai ușoară.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Daniel, 56", "reviews.2.text":"S-a integrat în viața mea agitată. Această provocare a fost ușor de urmat, chiar și în zilele ocupate.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sarah, 38", "reviews.3.text":"Mi-a oferit un început bun. Această provocare m-a ajutat să revin pe drumul cel bun și să am grijă de mine din nou.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  cz: { header_label:"Připravujeme Vaše výsledky", title:"Analyzujeme Vaše odpovědi...", "reviews.0.name":"Elena, 41", "reviews.0.text":"Tento plán jsem si opravdu užila. Pomohl mi zhubnout za 28 dní. Jídla byla jednoduchá, chutná a snadno se připravovala.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina, 33", "reviews.1.text":"Recepty byly srozumitelné. Díky tomu byla celá výzva pro mě mnohem jednodušší.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Daniel, 56", "reviews.2.text":"Zapadlo to do mého uspěchaného života. Tuto výzvu bylo snadné dodržovat i během rušných dní.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sarah, 38", "reviews.3.text":"Dalo mi to dobrý start. Tato výzva mi pomohla vrátit se na správnou cestu a opět se o sebe starat.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  dk: { header_label:"Forbereder dine resultater", title:"Analyserer dine svar…", "reviews.0.name":"Elena, 41", "reviews.0.text":"Jeg nød virkelig denne plan. Ved at følge den kunne jeg tabe mig på 28 dage. Måltiderne var enkle, velsmagende og nemme at lave.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina, 33", "reviews.1.text":"Måltiderne var nemme at følge. Det gjorde hele udfordringen meget lettere for mig.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Daniel, 56", "reviews.2.text":"Det passede ind i mit travle liv. Denne udfordring var nem at følge, selv på travle dage.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sarah, 38", "reviews.3.text":"Det gav mig en god start. Denne udfordring hjalp mig med at komme tilbage på sporet og passe på mig selv igen.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  gr: { header_label:"Προετοιμασία των αποτελεσμάτων σας", title:"Ανάλυση των απαντήσεών σας…", "reviews.0.name":"Έλενα, 41", "reviews.0.text":"Μου άρεσε πολύ αυτό το πρόγραμμα. Ακολουθώντας το, κατάφερα να χάσω βάρος σε 28 μέρες. Τα γεύματα ήταν απλά, νόστιμα και εύκολα στην προετοιμασία.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Μαρίνα, 33", "reviews.1.text":"Τα γεύματα ήταν εύκολα στην παρασκευή. Έκανε την όλη πρόκληση να φαίνεται πολύ πιο εύκολη για μένα.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Δανιήλ, 56", "reviews.2.text":"Ταίριαξε στην πολυάσχολη ζωή μου. Αυτή η πρόκληση ήταν εύκολη να την ακολουθήσω, ακόμη και σε πολυάσχολες μέρες.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Σάρα, 38", "reviews.3.text":"Μου έδωσε μια καλή αρχή. Αυτή η πρόκληση με βοήθησε να μπω ξανά σε πρόγραμμα και να φροντίσω ξανά τον εαυτό μου.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  hu: { header_label:"Eredményeid előkészítése", title:"Válaszaid elemzése…", "reviews.0.name":"Elena, 41", "reviews.0.text":"Nagyon élveztem ezt a tervet. A követésével 28 nap alatt fogytam. Az ételek egyszerűek, finomak och könnyen elkészíthetők voltak.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina, 33", "reviews.1.text":"Könnyű volt tartani az étkezéseket. Az egész kihívás így sokkal egyszerűbbnek tűnt.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Daniel, 56", "reviews.2.text":"Belefért a pörgős hétköznapjaimba is. Még a zsúfolt napokon is könnyű volt követni.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sarah, 38", "reviews.3.text":"Jó kezdést adott. Segített visszatalálni a helyes útra och újra jobban odafigyelni magamra.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  hr: { header_label:"Priprema vaših rezultata", title:"Analiza vaših odgovora…", "reviews.0.name":"Elena, 41", "reviews.0.text":"Zaista sam uživala u ovom planu. Slijedeći ga, uspjela sam smršaviti u 28 dana. Obroci su bili jednostavni, ukusni i laki za pripremu.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina, 33", "reviews.1.text":"Obroci su bili jednostavni za pratiti. Čitav izazov mi se činio mnogo lakšim.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Daniel, 56", "reviews.2.text":"Uklopilo se u moj užurbani život. Ovaj izazov bilo je lako pratiti, čak i u zaposlenim danima.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sarah, 38", "reviews.3.text":"Dalo mi je dobar početak. Ovaj izazov pomogao mi je da se vratim na pravi put i ponovno brinem o sebi.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  il: { header_label:"מכינים את התוצאות שלך", title:"מנתחים את התשובות שלך...", "reviews.0.name":"אלנה, 41", "reviews.0.text":"ממש נהניתי מהתוכנית הזו. בזכותה הצלחתי לרדת במשקל בתוך 28 ימים. הארוחות היו פשוטות, טעימות וקלות להכנה.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"מרינה, 33", "reviews.1.text":"היה קל מאוד לעקוב אחר הארוחות. זה הפך את כל האתגר להרבה יותר פשוט עבורי.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"דניאל, 56", "reviews.2.text":"זה השתלב בחיים העמוסים שלי. היה קל לעקוב אחר האתגר הזה, אפילו בימים לחוצים.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"שרה, 38", "reviews.3.text":"זה נתן לי התחלה טובה. האתגר הזה עזר לי לחזור למסלול ולדאוג לעצמי שוב.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  jp: { header_label:"結果を準備しています", title:"回答を分析中…", "reviews.0.name":"エレナ、41歳", "reviews.0.text":"このプランを本当に楽しみました。これに従うことで、28日間で体重を減らすことができました。食事はシンプルで美味しく、作りやすかったです。", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"マリーナ、33歳", "reviews.1.text":"食事管理がしやすかったです。そのおかげでチャレンジ全体がとても楽に感じられました。", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"ダニエル、56歳", "reviews.2.text":"忙しい生活にフィットしました。忙しい日でも、このチャレンジは続けやすかったです。", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"サラ、38歳", "reviews.3.text":"良いスタートが切れました。このチャレンジのおかげで、元の軌道に戻り、再び自分を大切にすることができました。", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  ru: { header_label:"Подготовка ваших результатов", title:"Анализируем ваши ответы…", "reviews.0.name":"Елена, 41 год", "reviews.0.text":"Мне очень понравился этот план. Следуя ему, я смогла сбросить вес за 28 дней. Блюда были простыми, вкусными и легкими в приготовлении.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Марина, 33 года", "reviews.1.text":"Блюдам было легко следовать. Это сделало весь челлендж намного проще для меня.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Даниил, 56 лет", "reviews.2.text":"Это вписалось в мою насыщенную жизнь. Этому челленджу было легко следовать даже в самые загруженные дни.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Сара, 38 лет", "reviews.3.text":"Это дало мне хороший старт. Этот челлендж помог мне вернуться в колею и снова начать заботиться о себе.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  sk: { header_label:"Pripravujeme vaše výsledky", title:"Analyzujeme vaše odpovede...", "reviews.0.name":"Elena, 41", "reviews.0.text":"Tento plán som si naozaj užila. Pomohol mi schudnúť za 28 dní. Jedlá boli jednoduché, chutné a ľahko sa pripravovali.", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina, 33", "reviews.1.text":"Recepty boli zrozumiteľné. Vďaka tomu bola celá výzva pre mňa oveľa jednoduchšia.", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Daniel, 56", "reviews.2.text":"Zapadlo to do môjho uponáhľaného života. Túto výzvu bolo ľahké dodržiavať aj počas rušných dní.", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sarah, 38", "reviews.3.text":"Dalo mi to dobrý štart. Táto výzva mi pomohla vrátiť sa na správnu cestu a opäť sa o seba starať.", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" },
  tw: { header_label:"正在準備您的結果", title:"正在分析您的回答…", "reviews.0.name":"Elena，41 歲", "reviews.0.text":"我非常喜歡這個計畫。透過遵循它，我能夠在 28 天內減輕體重。飯菜很簡單、美味且易於製作。", "reviews.0.stars":"5", "reviews.0.photo":"https://i.pravatar.cc/96?img=47", "reviews.1.name":"Marina，33 歲", "reviews.1.text":"飯菜很容易上手。這讓整個挑戰對我來說變得容易得多。", "reviews.1.stars":"5", "reviews.1.photo":"https://i.pravatar.cc/96?img=44", "reviews.2.name":"Daniel，56 歲", "reviews.2.text":"它融入了我忙碌的生活。即使在忙碌的日子裡，這個挑戰也很容易遵循。", "reviews.2.stars":"5", "reviews.2.photo":"https://i.pravatar.cc/96?img=53", "reviews.3.name":"Sarah，38 歲", "reviews.3.text":"它給了我一個很好的開始。這個挑戰幫助我回到正軌並再次照顧好自己。", "reviews.3.stars":"5", "reviews.3.photo":"https://i.pravatar.cc/96?img=32" }
}

const email: Record<LangCode, EmailTranslations> = {
  en: { header_label:"Almost there", headline:"Enter your email to view your challenge", email_label:"Your email", placeholder:"Enter your email", clear_aria:"Clear email", consent_prefix:"I agree to the", consent_link:"Privacy Policy", consent_suffix:"and to receive updates by email", cta:"See my results", privacy_note:"We care about your privacy and keep your personal information safe. We will also send your results to your email so you can check them anytime.", privacy_link:"Privacy Policy" },
  lt: { header_label:"Beveik baigta", headline:"Įveskite savo el. paštą, kad pamatytumėte iššūkį", email_label:"Jūsų el-paštas", placeholder:"Įveskite savo el. paštą", clear_aria:"Išvalyti laukelį", consent_prefix:"Sutinku su", consent_link:"Privatumo politika", consent_suffix:"ir gauti naujienas el. paštu", cta:"Žiūrėti mano rezultatus", privacy_note:"Mes saugome jūsų privatumą ir asmeninę informaciją. Taip pat nusiųsime rezultatus į jūsų el. paštą, kad galėtumėte juos peržiūrėti bet kuriuo metu.", privacy_link:"Privatumo politika" },
  lv: { header_label:"Gandrīz gatavs", headline:"Ievadiet e-pastu, lai skatītu savu izaicinājumu", email_label:"Jūsu e-pasts", placeholder:"Ievadiet savu e-pastu", clear_aria:"Notīrīt e-pastu", consent_prefix:"Es piekrītu", consent_link:"Privātuma politikai", consent_suffix:"un saņemt jaunumus e-pastā", cta:"Skatīt manus rezultātus", privacy_note:"Mums rūp jūsu privātums un mēs rūpīgi glabājam jūsu personisko informāciju. Mēs arī nosūtīsim jūsu rezultātus uz e-pastu, lai jūs varētu tos pārbaudīt jebkurā laikā.", privacy_link:"Privātuma politika" },
  ro: { header_label:"Aproape gata", headline:"Introdu e-mailul pentru a-ți vedea provocarea", email_label:"E-mailul tău", placeholder:"Introdu e-mailul tău", clear_aria:"Șterge e-mailul", consent_prefix:"Sunt de acord cu", consent_link:"Politica de confidențialitate", consent_suffix:"și să primesc noutăți prin e-mail", cta:"Vezi rezultatele mele", privacy_note:"Ne pasă de confidențialitatea ta și păstrăm informațiile personale în siguranță. Îți vom trimite rezultatele și pe e-mail, astfel încât să le poți verifica oricând.", privacy_link:"Politica de confidențialitate" },
  cz: { header_label:"Téměř hotovo", headline:"Zadejte e-mail, abyste si mohli prohlédnout svou výzvu", email_label:"Váš e-mail", placeholder:"Zadejte Váš e-mail", clear_aria:"Vymazat e-mail", consent_prefix:"Souhlasím se", consent_link:"Zásadami ochrany osobních údajov", consent_suffix:"a dostáváním novinek e-mailem", cta:"Zobrazit moje výsledky", privacy_note:"Záleží nám na Vašem soukromí a Vaše osobní údaje uchováváme v bezpečí. Výsledky Vám pošleme i na e-mail, abyste si je mohli kdykoli zkontrolovat.", privacy_link:"Zásady ochrany osobních údajov" },
  dk: { header_label:"Næsten færdig", headline:"Indtast din e-mail for at se din udfordring", email_label:"Din e-mail", placeholder:"Indtast din e-mail", clear_aria:"Ryd e-mail", consent_prefix:"Jeg accepterer", consent_link:"Privatlivspolitikken", consent_suffix:"og at modtage opdateringer via e-mail", cta:"Se mine resultater", privacy_note:"Vi passer på dit privatliv og holder dine personlige oplysninger sikre. Vi sender også dine resultater til din e-mail, så du kan tjekke dem når som helst.", privacy_link:"Privatlivspolitik" },
  gr: { header_label:"Σχεδόν τελειώσαμε", headline:"Εισάγετε το email σας για να δείτε την πρόκλησή σας", email_label:"Το email σας", placeholder:"Εισάγετε το email σας", clear_aria:"Εκκαθάριση email", consent_prefix:"Συμφωνώ με την", consent_link:"Πολιτική Απορρήτου", consent_suffix:"και να λαμβάνω ενημερώσεις μέσω email", cta:"Δείτε τα αποτελέσματά μου", privacy_note:"Νοιαζόμαστε για το απόρρητό σας και διατηρούμε τις προσωπικές σας πληροφορίες ασφαλείς. Θα στείλουμε επίσης τα αποτελέσματά σας στο email σας, ώστε να μπορείτε να τα ελέγξετε ανά πάσα στιγμή.", privacy_link:"Πολιτική Απορρήτου" },
  hu: { header_label:"Már majdnem kész", headline:"Add meg az e-mail címed, hogy megnézhesd a kihívásodat", email_label:"E-mail címed", placeholder:"Add meg az e-mail címed", clear_aria:"E-mail törlése", consent_prefix:"Elfogadom a(z)", consent_link:"Adatvédelmi szabályzatot", consent_suffix:"és hozzájárulok, hogy e-mailben frissítéseket kapjak", cta:"Eredményeim megtekintése", privacy_note:"Fontos számunkra a magánszférád, och biztonságban tartjuk a személyes adataidat. Az eredményeidet e-mailben is elküldjük, hogy bármikor visszanézhesd.", privacy_link:"Adatvédelmi szabályzat" },
  hr: { header_label:"Još malo", headline:"Unesite svoju e-poštu za pregled izazova", email_label:"Vaša e-pošta", placeholder:"Unesite svoju e-poštu", clear_aria:"Očisti e-poštu", consent_prefix:"Slažem se s", consent_link:"Pravilima privatnosti", consent_suffix:"i primanjem ažuriranja putem e-pošte", cta:"Vidi moje rezultate", privacy_note:"Stalo nam je do vaše privatnosti i vaše osobne podatke čuvamo na sigurnom. Također ćemo poslati vaše rezultate na vašu e-poštu kako biste ih mogli provjeriti bilo kada.", privacy_link:"Pravila privatnosti" },
  il: { header_label:"כמעט סיימנו", headline:"הזן אימייל כדי לראות את האתגר שלך", email_label:"האימייל שלך", placeholder:"הזן את האימייל שלך", clear_aria:"נקה אימייל", consent_prefix:"אני מסכים ל", consent_link:"מדיניות הפרטיות", consent_suffix:"ולקבלת עדכונים באימייל", cta:"ראה/י את התוצאות שלי", privacy_note:"הפרטיות שלך חשובה לנו ואנו שומרים על המידע האישי שלך בטוח. נשלח את התוצאות שלך גם לאימייל כדי שתוכל/י לבדוק אותן בכל עת.", privacy_link:"מדיניות פרטיות" },
  jp: { header_label:"あと少しです", headline:"メールアドレスを入力して、チャレンジを確認してください", email_label:"メールアドレス", placeholder:"メールアドレスを入力", clear_aria:"メールアドレスをクリア", consent_prefix:"私は、", consent_link:"プライバシーポリシー", consent_suffix:"に同意し、メールでアップデートを受け取ることに同意します", cta:"結果を見る", privacy_note:"私たちはあなたのプライバシーを尊重し、個人情報を安全に保ちます。また、いつでも確認できるように結果をメールでお送りします。", privacy_link:"プライバシーポリシー" },
  ru: { header_label:"Почти готово", headline:"Введите email, чтобы увидеть свой челлендж", email_label:"Ваш email", placeholder:"Введите ваш email", clear_aria:"Очистить email", consent_prefix:"Я согласен с", consent_link:"Политикой конфиденциальности", consent_suffix:"и на получение обновлений по email", cta:"Посмотреть мои результаты", privacy_note:"Мы заботимся о вашей конфиденциальности и храним ваши личные данные в безопасности. Мы также отправим ваши результаты на email, чтобы вы могли проверить их в любое время.", privacy_link:"Политика конфиденциальности" },
  sk: { header_label:"Takmer hotovo", headline:"Zadajte e-mail, aby ste si mohli pozrieť svoju výzvu", email_label:"Váš e-mail", placeholder:"Zadajte váš e-mail", clear_aria:"Vymazať e-mail", consent_prefix:"Súhlasím so", consent_link:"Zásadami ochrany osobných údajov", consent_suffix:"a dostávaním noviniek e-mailom", cta:"Zobraziť moje výsledky", privacy_note:"Záleží nám na vašom súkromí a vaše osobné údaje uchovávame v bezpečí. Výsledky vám pošleme aj na e-mail, aby ste si ich mohli kedykoľvek skontrolovať.", privacy_link:"Zásady ochrany osobných údajov" },
  tw: { header_label:"即將完成", headline:"輸入您的電子郵件以查看您的挑戰", email_label:"您的電子郵件", placeholder:"輸入您的電子郵件", clear_aria:"清除電子郵件", consent_prefix:"我同意", consent_link:"隱私權政策", consent_suffix:"並同意透過電子郵件接收更新資訊", cta:"查看我的結果", privacy_note:"我們重視您的隱私，並確保您的個人資訊安全。我們也會將結果發送到您的電子郵件，以便您隨時查看。", privacy_link:"隱私權政策" }
}

const quizSteps: Record<LangCode, Record<number, QuizStepT>> = {
  en: {
    1: { question:"What's your age range?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"What is your main goal?", options:{ "lose-weight":"Lose weight", "get-fit":"Get fit", "tone-up":"Tone up" } },
    3: { question:"Which routine sounds most like yours?", subtitle:"Pick the one that matches you best", options:{ sitting:"Mostly sitting", feet:"On my feet a lot", active:"Very active", home:"Mostly at home" } },
    4: { question:"How long has it been since you felt good about your weight?", options:{ year:"Within the last year", "1-3-years":"About 1–3 years", "3plus":"More than 3 years", never:"I can't remember ever feeling that way" } },
    5: { question:"How do you feel about exercise?", subtitle:"Being active can help support your progress", options:{ no:"Not for me", "sort-of":"Not really, but I stay active", sometimes:"Sometimes", often:"Yes, often" } },
    6: { question:"What's your energy usually like during the day?", subtitle:"This challenge is designed to help you feel more steady and in control", options:{ drained:"I feel drained most of the day", "pre-meal":"I get low on energy before meals", afternoon:"I usually hit a slump in the afternoon", strong:"My energy stays strong all day" } },
    7: { question:"What clothes size do you wear now?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"What size would you like to wear?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Size is not my main goal" } },
    9: { buttonLabel:"Continue", interstitial:{ headline:"Your answers match the patterns we often see in users who reach their goals", body:"Around 68% of our users reduce 1–2 clothing sizes in the first month.", note:"Results from users who went down in clothing size over 3 months" } },
    10: { question:"What is your height?", placeholder:"170" },
    11: { question:"What is your current weight?", placeholder:"175" },
    12: { question:"What is your target weight?", placeholder:"150" },
    13: { question:"How old are you?", placeholder:"35" },
    14: { buttonLabel:"Continue" },
    15: { question:"Which of these sound like you?", subtitle:"Choose all that fit", options:{ "late-night":"I often eat late at night", sweets:"It is hard for me to stop eating sweets", soda:"I drink soft drinks often", alcohol:"I sometimes drink alcohol", fatty:"I enjoy fatty or salty foods" } },
    16: { question:"How many hours do you usually sleep?", options:{ "less-5":"Less than 5 hours", "5-6":"5–6 hours", "7-8":"7–8 hours", "more-8":"More than 8 hours" } },
    17: { question:"How much water do you drink each day?", subtitle:"Only count plain water, not coffee, tea, or other drinks", options:{ coffee:"I mostly drink coffee or tea", "less-2":"Less than 2 glasses", "2-6":"2–6 glasses", "7-10":"7–10 glasses", "no-track":"I do not track it" } },
    18: { question:"Which foods do you not want in your plan?", subtitle:"Choose all that apply", options:{ none:"I eat all types of meat", chicken:"Chicken or turkey", pork:"Pork", beef:"Beef", fish:"Fish", lamb:"Lamb", veal:"Veal", veg:"I am vegetarian" } },
    19: { question:"Which of these foods do you not like?", subtitle:"Choose all that apply", options:{ none:"I like all of them", onions:"Onions", mushrooms:"Mushrooms", eggs:"Eggs", nuts:"Nuts", cheese:"Cheese", milk:"Milk", avocado:"Avocado", seafood:"Seafood", olives:"Olives", capers:"Capers", coconut:"Coconut", "goat-cheese":"Goat cheese" } },
    20: { buttonLabel:"Continue" },
    21: { buttonLabel:"Continue" }
  },
  lt: {
    1: { question:"Kokia jūsų amžiaus grupė?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Koks jūsų pagrindinis tikslas?", options:{ "lose-weight":"Numesti svorio", "get-fit":"Sustiprėti", "tone-up":"Padailinti kūno linijas" } },
    3: { question:"Kokia kasdienė rutina jums labiausiai tinka?", subtitle:"Pasirinkite variantą, kuris jus geriausiai apibūdina", options:{ sitting:"Daugiausia sėdimas darbas", feet:"Daug laiko praleidžiu ant kojų", active:"Labai aktyvus gyvenimo būdas", home:"Daugiausia laiko namuose" } },
    4: { question:"Kiek laiko praėjo nuo tada, kai buvote patenkinti savo svoriu?", options:{ year:"Per pastaruosius metus", "1-3-years":"Prieš metus ar tris", "3plus":"Daugiau nei prieš 3 metus", never:"Nepamenu, kada buvau patenkintas/-a" } },
    5: { question:"Ką manote apie sportą?", subtitle:"Aktyvumas gali padėti pasiekti geresnių rezultatų", options:{ no:"Tai ne man", "sort-of":"Nelabai, bet stengiuosi judėti", sometimes:"Kartais sportuoju", often:"Taip, dažnai" } },
    6: { question:"Koks jūsų energijos lygis dienos metu?", subtitle:"Šis iššūkis padės jums jaustis energingesniems ir kontroliuoti savo savijautą", options:{ drained:"Didžiąją dienos dalį jaučiuosi išsekęs/-usi", "pre-meal":"Energijos lygis nukrenta prieš valgį", afternoon:"Paprastai jaučiu nuovargį po pietų", strong:"Jaučiuosi energingas/-a visą dieną" } },
    7: { question:"Kokio dydžio drabužius dėvite dabar?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Kokio dydžio drabužius norėtumėte dėvėti?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Dydis nėra pagrindinis mano tikslas" } },
    9: { buttonLabel:"Tęsti", interstitial:{ headline:"Jūsų atsakymai sutampa su rezultatais kitų vartotojų, kurie sekmingai pasiekė savo tikslus", body:"Apie 68 % mūsų vartotojų per pirmąjį mėnesį sumažina drabužių dydį 1–2 numeriais.", note:"Rezultatai asmenų, kurie per 3 mėnesius sumažino drabužių dydį" } },
    10: { question:"Koks jūsų ūgis?", placeholder:"170" },
    11: { question:"Koks jūsų dabartinis svoris?", placeholder:"75" },
    12: { question:"Koks jūsų tikslo svoris?", placeholder:"60" },
    13: { question:"Kiek jums metų?", placeholder:"35" },
    14: { buttonLabel:"Tęsti" },
    15: { question:"Kuris iš šių teiginių jums tinka?", subtitle:"Pasirinkite visus tinkančius variantus", options:{ "late-night":"Dažnai valgau vėlai vakare", sweets:"Man sunku nustoti valgyti saldumynus", soda:"Dažnai geriu gazuotus gėrimus", alcohol:"Kartais vartoju alkoholį", fatty:"Mėgstu riebų arba sūrų maistą" } },
    16: { question:"Kiek valandų paprastai miegate?", options:{ "less-5":"Mažiau nei 5 valandas", "5-6":"5–6 valandas", "7-8":"7–8 valandas", "more-8":"Daugiau nei 8 valandas" } },
    17: { question:"Kiek vandens išgeriate kasdien?", subtitle:"Skaičiuokite tik gryną vandenį, be kavos, arbatos ar kitų gėrimų", options:{ coffee:"Daugiausia geriu kavą arba arbatą", "less-2":"Mažiau nei 2 stiklines", "2-6":"2–6 stiklines", "7-10":"7–10 stiklinių", "no-track":"Neskaičiuoju" } },
    18: { question:"Kokių produktų nenorite matyti savo plane?", subtitle:"Pasirinkite visus tinkančius variantus", options:{ none:"Valgau visas mėsos rūšis", chicken:"Vištieną arba kalakutieną", pork:"Kiaulieną", beef:"Jautieną", fish:"Žuvį", lamb:"Avieną", veal:"Veršieną", veg:"Esu vegetaras/-ė" } },
    19: { question:"Kurių produktų nemėgstate?", subtitle:"Pasirinkite visus tinkančius variantus", options:{ none:"Mėgstu juos visus", onions:"Svogūnus", mushrooms:"Grybus", eggs:"Kiaušinius", nuts:"Riešutus", cheese:"Sūrį", milk:"Pieną", avocado:"Avokadą", seafood:"Jūros gėrybes", olives:"Alyvuoges", capers:"Kaperius", coconut:"Kokosą", "goat-cheese":"Ožkos sūrį" } },
    20: { buttonLabel:"Tęsti" },
    21: { buttonLabel:"Tęsti" }
  },
  lv: {
    1: { question:"Kāds ir jūsu vecums?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Kāds ir jūsu galvenais mērķis?", options:{ "lose-weight":"Zaudēt svaru", "get-fit":"Iegūt formu", "tone-up":"Nostiprināt ķermeni" } },
    3: { question:"Kāda rutīna vislabāk raksturo jūsējo?", subtitle:"Izvēlieties to, kas jums vislabāk atbilst", options:{ sitting:"Pārsvarā sēdus stāvoklī", feet:"Daudz laika pavadu kājās", active:"Ļoti aktīvs/-a", home:"Pārsvarā mājās" } },
    4: { question:"Cik ilgs laiks pagājis, kopš pēdējo reizi bijāt apmierināti ar savu svaru?", options:{ year:"Pēdējā gada laikā", "1-3-years":"Aptuveni pirms 1–3 gadiem", "3plus":"Vairāk nekā pirms 3 gadiem", never:"Neatceros, ka jebkad būtu tā juties/-usies" } },
    5: { question:"Kāds ir jūsu viedoklis par vingrošanu?", subtitle:"Aktivitātes var palīdzēt atbalstīt jūsu progresu", options:{ no:"Nav priekš manis", "sort-of":"Ne gluži, bet esmu aktīvs/-a", sometimes:"Dažreiz", often:"Jā, bieži" } },
    6: { question:"Kāds parasti ir jūsu enerģijas līmenis dienas laikā?", subtitle:"Šis izaicinājums ir izstrādāts, lai palīdzētu jums justies stabilāk un kontrolēt situāciju", options:{ drained:"Lielāko dienas daļu jūtos izsmelts/-a", "pre-meal":"Enerģija samazinās pirms ēdienreizēm", afternoon:"Pēcpusdienā parasti uznāk nespēks", strong:"Enerģija saglabājas visu dienu" } },
    7: { question:"Kādu apģērba izmēru jūs nēsājat šobrīd?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Kādu izmēru jūs vēlētos nēsāt?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Izmērs nav mans galvenais mērķis" } },
    9: { buttonLabel:"Turpināt", interstitial:{ headline:"Jūsu atbildes sakrīt ar modeļiem, kurus bieži redzam lietotājiem, kuri sasniedz savus mērķus", body:"Aptuveni 68% mūsu lietotāju samazina apģērba izmēru par 1–2 numuriem pirmajā mēnesī.", note:"Rezultāti no lietotājiem, kuri 3 mēnešu laikā samazināja apģērba izmēru" } },
    10: { question:"Kāds ir jūsu augums?", placeholder:"170" },
    11: { question:"Kāds ir jūsu pašreizējais svars?", placeholder:"75" },
    12: { question:"Kāds ir jūsu mērķa svars?", placeholder:"60" },
    13: { question:"Cik jums ir gadu?", placeholder:"35" },
    14: { buttonLabel:"Turpināt" },
    15: { question:"Kas no šī visvairāk atbilst jums?", subtitle:"Izvēlieties visu, kas atbilst", options:{ "late-night":"Es bieži ēdu vēlu vakarā", sweets:"Man ir grūti pārtraukt ēst saldumus", soda:"Es bieži dzeru gāzētos dzērienus", alcohol:"Es dažreiz lietoju alkoholu", fatty:"Man garšo trekni vai sāļi ēdieni" } },
    16: { question:"Cik stundas jūs parasti guļat?", options:{ "less-5":"Mazāk par 5 stundām", "5-6":"5–6 stundas", "7-8":"7–8 stundas", "more-8":"Vairāk nekā 8 stundas" } },
    17: { question:"Cik daudz ūdens jūs dzerat katru dienu?", subtitle:"Skaitiet tikai tīru ūdeni, nevis kafiju, tēju vai citus dzērienus", options:{ coffee:"Es galvenokārt dzeru kafiju vai tēju", "less-2":"Mazāk par 2 glāzēm", "2-6":"2–6 glāzes", "7-10":"7–10 glāzes", "no-track":"Es tam nesekoju līdzi" } },
    18: { question:"Kādus produktus jūs nevēlaties savā plānā?", subtitle:"Izvēlieties visu, kas atbilst", options:{ none:"Es ēdu visu veidu gaļu", chicken:"Vistas vai tītara gaļa", pork:"Cūkgaļa", beef:"Liellopu gaļa", fish:"Zivis", lamb:"Jēra gaļa", veal:"Teļa gaļa", veg:"Esmu veģetārietis/-e" } },
    19: { question:"Kuri no šiem produktiem jums negaršo?", subtitle:"Izvēlieties visu, kas atbilst", options:{ none:"Man garšo tie visi", onions:"Sīpoli", mushrooms:"Sēnes", eggs:"Olas", nuts:"Rieksti", cheese:"Siers", milk:"Piens", avocado:"Avokado", seafood:"Jūras veltes", olives:"Olīvas", capers:"Kaperi", coconut:"Kokosrieksts", "goat-cheese":"Kazu siers" } },
    20: { buttonLabel:"Turpināt" },
    21: { buttonLabel:"Turpināt" }
  },
  ro: {
    1: { question:"În ce interval de vârstă te afli?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Care este obiectivul tău principal?", options:{ "lose-weight":"Să pierd în greutate", "get-fit":"Să fiu în formă", "tone-up":"Să îmi tonifiez corpul" } },
    3: { question:"Care rutină se aseamănă cel mai mult cu a ta?", subtitle:"Alege-o pe cea care ți se potrivește cel mai bine", options:{ sitting:"Mai mult sedentară", feet:"Multe ore în picioare", active:"Foarte activă", home:"Mai mult acasă" } },
    4: { question:"De cât timp nu te-ai mai simțit confortabil cu greutatea ta?", options:{ year:"În ultimul an", "1-3-years":"Aproximativ 1–3 ani", "3plus":"Mai mult de 3 ani", never:"Nu-mi aduc aminte să mă fi simțit vreodată așa" } },
    5: { question:"Ce părere ai despre exercițiile fizice?", subtitle:"Activitatea fizică poate susține progresul tău", options:{ no:"Nu e pentru mine", "sort-of":"Nu chiar, dar mă mișc", sometimes:"Uneori", often:"Da, des" } },
    6: { question:"Cum este nivelul tău de energie în timpul zilei?", subtitle:"Această provocare este concepută pentru a te ajuta să te simți mai stabil și sub control", options:{ drained:"Mă simt epuizat(ă) în cea mai mare parte a zilei", "pre-meal":"Nivelul de energie scade înainte de mese", afternoon:"De obicei am o scădere de energie după-amiaza", strong:"Energia mea rămâne ridicată toată ziua" } },
    7: { question:"Ce mărime porți la haine acum?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Ce mărime ți-ai dori să porți?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Mărimea nu este obiectivul meu principal" } },
    9: { buttonLabel:"Continuă", interstitial:{ headline:"Răspunsurile tale corespund tiparelor pe care le vedem adesea la utilizatorii care își ating obiectivele", body:"Aproximativ 68% dintre utilizatorii noștri scad 1–2 mărimi la haine în prima lună.", note:"Rezultate de la utilizatorii care au scăzut în mărime pe parcursul a 3 luni" } },
    10: { question:"Ce înălțime ai?", placeholder:"170" },
    11: { question:"Care este greutatea ta actuală?", placeholder:"75" },
    12: { question:"Care este greutatea ta ideală?", placeholder:"60" },
    13: { question:"Câți ani ai?", placeholder:"35" },
    14: { buttonLabel:"Continuă" },
    15: { question:"Care dintre acestea ți se potrivește?", subtitle:"Alege tot ce se aplică", options:{ "late-night":"Mănânc des târziu în noapte", sweets:"Mi-e greu să mă opresc din mâncat dulciuri", soda:"Beau des băuturi carbogazoase", alcohol:"Consum uneori alcool", fatty:"Îmi plac mâncărurile grase sau sărate" } },
    16: { question:"Câte ore dormi de obicei?", options:{ "less-5":"Mai puțin de 5 ore", "5-6":"5–6 ore", "7-8":"7–8 ore", "more-8":"Mai mult de 8 ore" } },
    17: { question:"Câtă apă bei în fiecare zi?", subtitle:"Numără doar apa simplă, nu cafeaua, ceaiul sau alte băuturi", options:{ coffee:"Beau în principal cafea sau ceai", "less-2":"Mai puțin de 2 pahare", "2-6":"2–6 pahare", "7-10":"7–10 pahare", "no-track":"Nu țin evidența" } },
    18: { question:"Ce alimente nu dorești în planul tău?", subtitle:"Alege tot ce se aplică", options:{ none:"Mănânc toate tipurile de carne", chicken:"Pui sau curcan", pork:"Porc", beef:"Vită", fish:"Pește", lamb:"Miel", veal:"Vițel", veg:"Sunt vegetarian(ă)" } },
    19: { question:"Pe care dintre aceste alimente nu le agreezi?", subtitle:"Alege tot ce se aplică", options:{ none:"Îmi plac toate", onions:"Ceapă", mushrooms:"Ciuperci", eggs:"Ouă", nuts:"Nuci", cheese:"Brânză", milk:"Lapte", avocado:"Avocado", seafood:"Fructe de mare", olives:"Măsline", capers:"Capere", coconut:"Cocos", "goat-cheese":"Brânză de capră" } },
    20: { buttonLabel:"Continuă" },
    21: { buttonLabel:"Continuă" }
  },
  cz: {
    1: { question:"V jaké věkové skupině se nacházíte?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Jaký je Váš hlavní cíl?", options:{ "lose-weight":"Zhubnout", "get-fit":"Dostat se do formy", "tone-up":"Zpevnit postavu" } },
    3: { question:"Která rutina nejlépe popisuje tu Vaši?", subtitle:"Vyberte tu, která Vám nejvíce vyhovuje", options:{ sitting:"Většinou sedavá", feet:"Hodně času na nohou", active:"Velmi aktivní", home:"Většinou doma" } },
    4: { question:"Jak dlouho je to od té doby, co jste byli spokojeni se svou váhou?", options:{ year:"Během posledního roku", "1-3-years":"Přibližně 1–3 roky", "3plus":"Více než 3 roky", never:"Nepamatuji si, že bych se někdy tak cítil(a)" } },
    5: { question:"Jaký je Váš názor na cvičení?", subtitle:"Fyzická aktivita může pomoci podpořit Váš pokrok", options:{ no:"To není nic pro mě", "sort-of":"Ne tak docela, ale hýbu se", sometimes:"Někdy", often:"Ano, často" } },
    6: { question:"Jaká je Vaše typická hladina energie během dne?", subtitle:"Tato výzva je navržena tak, aby Vám pomohla cítit se stabilněji a mít kontrolu", options:{ drained:"Většinu dne se cítím vyčerpaný(á)", "pre-meal":"Pociťuji únavu před jídlem", afternoon:"Odpoledne mívám útlum", strong:"Moje energie zůstává silná po celý den" } },
    7: { question:"Jakou velikost oblečení momentálně nosíte?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Jakou velikost byste chtěli nosit?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Velikost není mým hlavním cílem" } },
    9: { buttonLabel:"Pokračovat", interstitial:{ headline:"Vaše odpovědi se shodují se vzorci, které často vidíme u uživatelů dosahujících svých cílů", body:"Přibližně 68 % našich uživatelů klesne o 1–2 velikosti oblečení během prvního měsíce.", note:"Výsledky od uživatelů, kteří za 3 měsíce klesli o velikost oblečení" } },
    10: { question:"Jaká je Vaše výška?", placeholder:"170" },
    11: { question:"Jaká je Vaše současná váha?", placeholder:"75" },
    12: { question:"Jaká je Vaše cílová váha?", placeholder:"60" },
    13: { question:"Kolik je Vám let?", placeholder:"35" },
    14: { buttonLabel:"Pokračovat" },
    15: { question:"Co z následujícího Vás nejlépe vystihuje?", subtitle:"Vyberte vše, co platí", options:{ "late-night":"Často jím pozdě večer", sweets:"Je pro mě těžké přestat jíst sladkosti", soda:"Často piji slazené sycené nápoje", alcohol:"Někdy piji alkohol", fatty:"Mám rád(a) tučná nebo slaná jídla" } },
    16: { question:"Kolik hodin obvykle spíte?", options:{ "less-5":"Méně než 5 hodín", "5-6":"5–6 hodín", "7-8":"7–8 hodín", "more-8":"Více než 8 hodín" } },
    17: { question:"Kolik vody vypijete každý den?", subtitle:"Počítejte pouze čistou vodu, ne kávu, čaj ani jiné nápoje", options:{ coffee:"Piji hlavně kávu nebo čaj", "less-2":"Méně než 2 sklenice", "2-6":"2–6 sklenic", "7-10":"7–10 sklenic", "no-track":"Nesleduji to" } },
    18: { question:"Které potraviny nechcete mít ve svém plánu?", subtitle:"Vyberte vše, co platí", options:{ none:"Jím všechny druhy masa", chicken:"Kuřecí nebo krůtí maso", pork:"Vepřové maso", beef:"Hovězí maso", fish:"Ryby", lamb:"Jehněčí maso", veal:"Telecí maso", veg:"Jsem vegetarián(ka)" } },
    19: { question:"Které z těchto potravin nemáte rádi?", subtitle:"Vyberte vše, co platí", options:{ none:"Mám rád(a) všechny", onions:"Cibule", mushrooms:"Houby", eggs:"Vejce", nuts:"Ořechy", cheese:"Sýr", milk:"Mléko", avocado:"Avokádo", seafood:"Mořské plody", olives:"Olivy", capers:"Kapary", coconut:"Kokos", "goat-cheese":"Kozí sýr" } },
    20: { buttonLabel:"Pokračovat" },
    21: { buttonLabel:"Pokračovat" }
  },
  dk: {
    1: { question:"Hvilken aldersgruppe er du i?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Hvad er dit primære mål?", options:{ "lose-weight":"Tabe mig", "get-fit":"Komme i form", "tone-up":"Stramme op" } },
    3: { question:"Hvilken rutine minder mest om din?", subtitle:"Vælg den, der passer bedst på dig", options:{ sitting:"Mest stillesiddende", feet:"Jeg er meget på benene", active:"Meget aktiv", home:"Mest derhjemme" } },
    4: { question:"Hvor længe er det siden, du havde det godt med din vægt?", options:{ year:"Inden for det seneste år", "1-3-years":"Ca. 1–3 år", "3plus":"Mere end 3 år", never:"Jeg kan ikke huske, hvornår jeg sidst havde det sådan" } },
    5: { question:"Hvad synes du om motion?", subtitle:"At være aktiv kan støtte dine fremskridt", options:{ no:"Det er ikke mig", "sort-of":"Ikke rigtigt, men jeg holder mig i gang", sometimes:"Nogle gange", often:"Ja, ofte" } },
    6: { question:"Hvordan er dit energiniveau typisk i løbet af dagen?", subtitle:"Denne udfordring er lavet til at hjælpe dig med at føle dig mere stabil og have mere kontrol", options:{ drained:"Jeg føler mig drænet det meste af dagen", "pre-meal":"Jeg får lav energi før måltider", afternoon:"Jeg rammer ofte et dyk om eftermiddagen", strong:"Jeg har god energi hele dagen" } },
    7: { question:"Hvilken tøjstørrelse bruger du nu?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Hvilken størrelse vil du gerne bruge?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Størrelse er ikke mit primære mål" } },
    9: { buttonLabel:"Fortsæt", interstitial:{ headline:"Dine svar matcher mønstre, vi ofte ser hos brugere, der når deres mål", body:"Omkring 68% af vores brugere går 1–2 tøjstørrelser ned i den første måned.", note:"Resultater fra brugere, der gik ned i tøjstørrelse over 3 måneder" } },
    10: { question:"Hvad er din højde?", placeholder:"170" },
    11: { question:"Hvad er din nuværende vægt?", placeholder:"175" },
    12: { question:"Hvad er din målvægt?", placeholder:"150" },
    13: { question:"Hvor gammel er du?", placeholder:"35" },
    14: { buttonLabel:"Fortsæt" },
    15: { question:"Hvilke af disse passer på dig?", subtitle:"Vælg alle, der passer", options:{ "late-night":"Jeg spiser ofte sent om aftenen", sweets:"Det er svært for mig at stoppe med at spise sødt", soda:"Jeg drikker ofte sodavand", alcohol:"Jeg drikker nogle gange alkohol", fatty:"Jeg kan lide fed eller salt mad" } },
    16: { question:"Hvor mange timer sover du typisk?", options:{ "less-5":"Mindre end 5 timer", "5-6":"5–6 timer", "7-8":"7–8 timer", "more-8":"Mere end 8 timer" } },
    17: { question:"Hvor meget vand drikker du hver dag?", subtitle:"Tæl kun rent vand, ikke kaffe, te eller andre drikkevarer", options:{ coffee:"Jeg drikker mest kaffe eller te", "less-2":"Mindre end 2 glas", "2-6":"2–6 glas", "7-10":"7–10 glas", "no-track":"Jeg tracker det ikke" } },
    18: { question:"Hvilke fødevarer ønsker du ikke i din plan?", subtitle:"Vælg alle, der er relevante", options:{ none:"Jeg spiser alle typer kød", chicken:"Kylling eller kalkun", pork:"Svinekød", beef:"Oksekød", fish:"Fisk", lamb:"Lammekød", veal:"Kalvekød", veg:"Jeg er vegetar" } },
    19: { question:"Hvilke af disse fødevarer kan du ikke lide?", subtitle:"Vælg alle, der er relevante", options:{ none:"Jeg kan lide dem alle", onions:"Løg", mushrooms:"Svampe", eggs:"Æg", nuts:"Nødder", cheese:"Ost", milk:"Mælk", avocado:"Avocado", seafood:"Skaldyr", olives:"Oliven", capers:"Kapers", coconut:"Kokos", "goat-cheese":"Gedeost" } },
    20: { buttonLabel:"Fortsæt" },
    21: { buttonLabel:"Fortsæt" }
  },
  gr: {
    1: { question:"Ποιο είναι το ηλικιακό σας εύρος;", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Ποιος είναι ο κύριος στόχος σας;", options:{ "lose-weight":"Απώλεια βάρους", "get-fit":"Βελτίωση φυσικής κατάστασης", "tone-up":"Γράμμωση" } },
    3: { question:"Ποια ρουτίνα μοιάζει περισσότερο με τη δική σας;", subtitle:"Επιλέξτε αυτή που σας ταιριάζει καλύτερα", options:{ sitting:"Κυρίως καθιστική", feet:"Πολλή ώρα ορθοστασία", active:"Πολύ δραστήρια", home:"Κυρίως στο σπίτι" } },
    4: { question:"Πόσος καιρός έχει περάσει από τότε που νιώσατε καλά με το βάρος σας;", options:{ year:"Μέσα στον τελευταίο χρόνο", "1-3-years":"Περίπου 1–3 χρόνια", "3plus":"Περισσότερα από 3 χρόνια", never:"Δεν θυμάμαι να έχω νιώσει ποτέ έτσι" } },
    5: { question:"Πώς νιώθετε για την άσκηση;", subtitle:"Το να είστε δραστήριοι μπορεί να βοηθήσει στην πρόοδό σας", options:{ no:"Δεν είναι για μένα", "sort-of":"Όχι ιδιαίτερα, αλλά παραμένω δραστήριος/α", sometimes:"Μερικές φορές", often:"Ναι, συχνά" } },
    6: { question:"Πώς είναι συνήθως η ενέργειά σας κατά τη διάρκεια της ημέρας;", subtitle:"Αυτή η πρόκληση είναι σχεδιασμένη για να σας βοηθήσει να νιώθετε πιο σταθεροί και να έχετε τον έλεγχο", options:{ drained:"Νιώθω εξαντλημένος/η το μεγαλύτερο μέρος της ημέρας", "pre-meal":"Η ενέργειά μου πέφτει πριν τα γεύματα", afternoon:"Συνήθως έχω πτώση ενέργειας το απόγευμα", strong:"Η ενέργειά μου παραμένει υψηλή όλη μέρα" } },
    7: { question:"Τι νούμερο ρούχα φοράτε τώρα;", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Τι νούμερο θα θέλατε να φοράτε;", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Το νούμερο δεν είναι ο κύριος στόχος μου" } },
    9: { buttonLabel:"Συνέχεια", interstitial:{ headline:"Οι απαντήσεις σας ταιριάζουν με τα πρότυπα που βλέπουμε συχνά σε χρήστες που πετυχαίνουν τους στόχους τους", body:"Περίπου το 68% των χρηστών μας μειώνουν 1–2 νούμερα ρούχων τον πρώτο μήνα.", note:"Αποτελέσματα από χρήστες που κατέβηκαν νούμερο ρούχων σε 3 μήνες" } },
    10: { question:"Ποιο είναι το ύψος σας;", placeholder:"170" },
    11: { question:"Ποιο είναι το τωρινό σας βάρος;", placeholder:"175" },
    12: { question:"Ποιο είναι το βάρος-στόχος σας;", placeholder:"150" },
    13: { question:"Πόσο χρονών είστε;", placeholder:"35" },
    14: { buttonLabel:"Συνέχεια" },
    15: { question:"Ποια από αυτά σας αντιπροσωπεύουν;", subtitle:"Επιλέξτε όσα ταιριάζουν", options:{ "late-night":"Συχνά τρώω αργά το βράδυ", sweets:"Δυσκολεύομαι να σταματήσω να τρώω γλυκά", soda:"Πίνω συχνά αναψυκτικά", alcohol:"Μερικές φορές πίνω αλκοόλ", fatty:"Μου αρέσουν τα λιπαρά ή αλμυρά φαγητά" } },
    16: { question:"Πόσες ώρες κοιμάστε συνήθως;", options:{ "less-5":"Λιγότερο από 5 ώρες", "5-6":"5–6 ώρες", "7-8":"7–8 ώρες", "more-8":"Περισσότερες από 8 ώρες" } },
    17: { question:"Πόσο νερό πίνετε κάθε μέρα;", subtitle:"Υπολογίστε μόνο το σκέτο νερό, όχι καφέ, τσάι ή άλλα ροφήματα", options:{ coffee:"Πίνω κυρίως καφέ ή τσάι", "less-2":"Λιγότερο από 2 ποτήρια", "2-6":"2–6 ποτήρια", "7-10":"7–10 ποτήρια", "no-track":"Δεν το παρακολουθώ" } },
    18: { question:"Ποια τρόφιμα δεν θέλετε στο πρόγραμμά σας;", subtitle:"Επιλέξτε όλα όσα ισχύουν", options:{ none:"Τρώω όλα τα είδη κρέατος", chicken:"Κοτόπουλο ή γαλοπούλα", pork:"Χοιρινό", beef:"Μοσχάρι", fish:"Ψάρι", lamb:"Αρνί", veal:"Μοσχαράκι γάλακτος", veg:"Είμαι χορτοφάγος" } },
    19: { question:"Ποια από αυτά τα τρόφιμα δεν σας αρέσουν;", subtitle:"Επιλέξτε όλα όσα ισχύουν", options:{ none:"Μου αρέσουν όλα", onions:"Κρεμμύδια", mushrooms:"Μανιτάρια", eggs:"Αυγά", nuts:"Ξηροί καρποί", cheese:"Τυρί", milk:"Γάλα", avocado:"Αβοκάντο", seafood:"Θαλασσινά", olives:"Ελιές", capers:"Κάπαρη", coconut:"Καρύδα", "goat-cheese":"Κατσικίσιο τυρί" } },
    20: { buttonLabel:"Συνέχεια" },
    21: { buttonLabel:"Συνέχεια" }
  },
  hu: {
    1: { question:"Melyik korcsoportba tartozol?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Mi a fő célod?", options:{ "lose-weight":"Fogyni szeretnék", "get-fit":"Formába lendülni", "tone-up":"Feszesedni" } },
    3: { question:"Melyik leírás illik rád leginkább?", subtitle:"Válaszd azt, amelyik a legjobban rád igaz", options:{ sitting:"Többnyire ülök", feet:"Sokat vagyok talpon", active:"Nagyon aktív vagyok", home:"Többnyire otthon vagyok" } },
    4: { question:"Mennyi ideje érzed úgy, hogy elégedett vagy a testsúlyoddal?", options:{ year:"Az elmúlt egy évben", "1-3-years":"Kb. 1–3 éve", "3plus":"Több mint 3 éve", never:"Nem is emlékszem, mikor éreztem így" } },
    5: { question:"Hogy állsz a mozgással?", subtitle:"Az aktivitás támogathatja a fejlődésedet", options:{ no:"Nem nekem való", "sort-of":"Nem igazán, de igyekszem aktív maradni", sometimes:"Néha", often:"Igen, gyakran" } },
    6: { question:"Milyen általában az energiaszinted napközben?", subtitle:"A kihívás célja, hogy stabilabban érezd magad és nagyobb kontrollod legyen", options:{ drained:"A nap nagy részében kimerült vagyok", "pre-meal":"Étkezések előtt gyakran leesik az energiám", afternoon:"Délután általában jön egy mélypont", strong:"Egész nap jó az energiám" } },
    7: { question:"Mekkora ruhaméretet hordasz most?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Mekkora méretet szeretnél hordani?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"A méret nem a fő célom" } },
    9: { buttonLabel:"Tovább", interstitial:{ headline:"A válaszaid olyan mintákat mutatnak, amelyeket gyakran látunk a céljaikat elérő felhasználóknál", body:"Felhasználóink kb. 68%-a 1–2 ruhaméretet csökken az első hónapban.", note:"Eredmények olyan felhasználóktól, akik 3 hónap alatt csökkentettek ruhaméretet" } },
    10: { question:"Mekkora a magasságod?", placeholder:"170" },
    11: { question:"Mennyi a jelenlegi testsúlyod?", placeholder:"175" },
    12: { question:"Mennyi a céltestsúlyod?", placeholder:"150" },
    13: { question:"Hány éves vagy?", placeholder:"35" },
    14: { buttonLabel:"Tovább" },
    15: { question:"Melyik állítás illik rád?", subtitle:"Válaszd ki az összeset, ami igaz", options:{ "late-night":"Gyakran eszem késő este", sweets:"Nehéz abbahagynom az édességevést", soda:"Gyakran iszom üdítőt", alcohol:"Néha iszom alkoholt", fatty:"Szeretem a zsíros vagy sós ételeket" } },
    16: { question:"Hány órát alszol általában?", options:{ "less-5":"Kevesebb mint 5 órát", "5-6":"5–6 órát", "7-8":"7–8 órát", "more-8":"Több mint 8 órát" } },
    17: { question:"Mennyi vizet iszol naponta?", subtitle:"Csak a sima vizet számold, ne a kávét, teát vagy más italokat", options:{ coffee:"Többnyire kávét vagy teát iszom", "less-2":"Kevesebb mint 2 pohárral", "2-6":"2–6 pohárral", "7-10":"7–10 pohárral", "no-track":"Nem követem" } },
    18: { question:"Melyik ételeket nem szeretnéd a tervedben?", subtitle:"Válaszd ki az összeset, ami igaz", options:{ none:"Mindenféle húst eszem", chicken:"Csirke vagy pulyka", pork:"Sertéshús", beef:"Marhahús", fish:"Hal", lamb:"Bárány", veal:"Borjú", veg:"Vegetáriánus vagyok" } },
    19: { question:"Melyik ételeket nem szereted?", subtitle:"Válaszd ki az összeset, ami igaz", options:{ none:"Mindet szeretem", onions:"Hagyma", mushrooms:"Gomba", eggs:"Tojás", nuts:"Diófélék", cheese:"Sajt", milk:"Tej", avocado:"Avokádó", seafood:"Tenger gyümölcsei", olives:"Olívabogyó", capers:"Kaporbogyó", coconut:"Kókusz", "goat-cheese":"Kecskesajt" } },
    20: { buttonLabel:"Tovább" },
    21: { buttonLabel:"Tovább" }
  },
  hr: {
    1: { question:"Koji je vaš dobni raspon?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Koji je vaš glavni cilj?", options:{ "lose-weight":"Izgubiti težinu", "get-fit":"Doći u formu", "tone-up":"Učvrstiti tijelo" } },
    3: { question:"Koja rutina najbolje opisuje vašu?", subtitle:"Odaberite onu koja vam najbolje odgovara", options:{ sitting:"Uglavnom sjedenje", feet:"Često na nogama", active:"Vrlo aktivno", home:"Uglavnom kod kuće" } },
    4: { question:"Koliko je prošlo otkako ste se osjećali zadovoljno svojom težinom?", options:{ year:"Unutar zadnjih godinu dana", "1-3-years":"Otprilike 1–3 godine", "3plus":"Više od 3 godine", never:"Ne sjećam se da sam se ikada tako osjećao/la" } },
    5: { question:"Što mislite o vježbanju?", subtitle:"Biti aktivan može pomoći u podršci vašem napretku", options:{ no:"Nije za mene", "sort-of":"Ne baš, ali ostajem aktivan/na", sometimes:"Ponekad", often:"Da, često" } },
    6: { question:"Kakva vam je energija obično tijekom dana?", subtitle:"Ovaj izazov je osmišljen kako bi vam pomogao da se osjećate stabilnije i pod kontrolom", options:{ drained:"Osjećam se iscrpljeno većinu dana", "pre-meal":"Ponekad imam malo energije prije obroka", afternoon:"Obično osjetim pad energije poslijepodne", strong:"Moja energija ostaje snažna cijeli dan" } },
    7: { question:"Koju veličinu odjeće trenutno nosite?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Koju biste veličinu željeli nositi?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Veličina nije moj glavni cilj" } },
    9: { buttonLabel:"Nastavi", interstitial:{ headline:"Vaši odgovori odgovaraju obrascima koje često vidimo kod korisnika koji ostvaruju svoje ciljeve", body:"Oko 68% naših korisnika smanji 1–2 veličine odjeće u prvom mjesecu.", note:"Rezultati korisnika koji su smanjili veličinu odjeće tijekom 3 mjeseca" } },
    10: { question:"Koja je vaša visina?", placeholder:"170" },
    11: { question:"Koja je vaša trenutna težina?", placeholder:"75" },
    12: { question:"Koja je vaša ciljana težina?", placeholder:"60" },
    13: { question:"Koliko imate godina?", placeholder:"35" },
    14: { buttonLabel:"Nastavi" },
    15: { question:"Što od navedenog najbolje opisuje vas?", subtitle:"Odaberite sve što odgovara", options:{ "late-night":"Često jedem kasno navečer", sweets:"Teško mi je prestati jesti slatkiše", soda:"Često pijem gazirana pića", alcohol:"Ponekad pijem alkohol", fatty:"Uživam u masnoj ili slanoj hrani" } },
    16: { question:"Koliko sati obično spavate?", options:{ "less-5":"Manje od 5 sati", "5-6":"5–6 sati", "7-8":"7–8 sati", "more-8":"Više od 8 sati" } },
    17: { question:"Koliko vode popijete svaki dan?", subtitle:"Brojite samo običnu vodu, a ne kavu, čaj ili druga pića", options:{ coffee:"Uglavnom pijem kavu ili čaj", "less-2":"Manje od 2 čaše", "2-6":"2–6 čaša", "7-10":"7–10 čaša", "no-track":"Ne pratim unos vode" } },
    18: { question:"Koju hranu ne želite u svom planu?", subtitle:"Odaberite sve što se odnosi na vas", options:{ none:"Jedem sve vrste mesa", chicken:"Piletinu ili puretinu", pork:"Svinjetinu", beef:"Govedinu", fish:"Ribu", lamb:"Janjetinu", veal:"Teletinu", veg:"Ja sam vegetarijanac/ka" } },
    19: { question:"Koju od ovih namirnica ne volite?", subtitle:"Odaberite sve što se odnosi na vas", options:{ none:"Volim ih sve", onions:"Luk", mushrooms:"Gljive", eggs:"Jaja", nuts:"Orašasti plodovi", cheese:"Sir", milk:"Mlijeko", avocado:"Avokado", seafood:"Plodovi mora", olives:"Masline", capers:"Kapari", coconut:"Kokos", "goat-cheese":"Kozji sir" } },
    20: { buttonLabel:"Nastavi" },
    21: { buttonLabel:"Nastavi" }
  },
  il: {
    1: { question:"מהי קבוצת הגיל שלך?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"מה המטרה העיקרית שלך?", options:{ "lose-weight":"לרדת במשקל", "get-fit":"להיכנס לכושר", "tone-up":"לעצב את הגוף" } },
    3: { question:"איזו שגרה הכי מתארת את שלך?", subtitle:"בחר את המתאימה לך ביותר", options:{ sitting:"בעיקר ישיבה", feet:"הרבה שעות על הרגליים", active:"פעילה מאוד", home:"בעיקר בבית" } },
    4: { question:"כמה זמן עבר מאז שהרגשת בנוח עם המשקל שלך?", options:{ year:"במהלך השנה האחרונה", "1-3-years":"לפני כ-1–3 שנים", "3plus":"יותר מ-3 שנים", never:"אני לא זוכר/ת שהרגשתי כך אי פעם" } },
    5: { question:"מה דעתך על פעילות גופנית?", subtitle:"להיות פעיל יכול לעזור לתמוך בהתקדמות שלך", options:{ no:"זה לא בשבילי", "sort-of":"לא ממש, אבל אני בתנועה", sometimes:"לפעמים", often:"כן, לעיתים קרובות" } },
    6: { question:"איך רמת האנרגיה שלך בדרך כלל במהלך היום?", subtitle:"האתגר הזה נועד לעזור לך להרגיש יציב/ה יותר ובשליטה", options:{ drained:"אני מרגיש/ה מותש/ת רוב היום", "pre-meal":"האנרגיה שלי צונחת לפני הארוחות", afternoon:"בדרך כלל יש לי נפילת אנרגיה אחר הצהריים", strong:"האנרגיה שלי נשארת חזקה כל היום" } },
    7: { question:"איזו מידת בגדים את/ה לובש/ת עכשיו?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"איזו מידה היית רוצה ללבוש?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"מידה היא לא המטרה העיקרית שלי" } },
    9: { buttonLabel:"המשך", interstitial:{ headline:"התשובות שלך תואמות דפוסים שאנו רואים לעתים קרובות אצל משתמשים המשיגים את מטרותיהם", body:"כ-68% מהמשתמשים שלנו יורדים 1–2 מידות בגדים בחודש הראשון.", note:"תוצאות ממשתמשים שירדו במידת הבגדים במהלך 3 חודשים" } },
    10: { question:"מה הגובה שלך?", placeholder:"170" },
    11: { question:"מה המשקל הנוכחי שלך?", placeholder:"75" },
    12: { question:"מה משקל היעד שלך?", placeholder:"60" },
    13: { question:"בן/בת כמה את/ה?", placeholder:"35" },
    14: { buttonLabel:"המשך" },
    15: { question:"מה מהבאים הכי מתאים לך?", subtitle:"בחר את כל מה שרלוונטי", options:{ "late-night":"אני מרבה לאכול מאוחר בלילה", sweets:"קשה לי להפסיק לאכול מתוקים", soda:"אני שותה לעיתים קרובות משקאות מוגזים", alcohol:"אני שותה לפעמים אלכוהול", fatty:"אני נהנה/ית מאוכל שומני או מלוח" } },
    16: { question:"כמה שעות את/ה ישן/ה בדרך כלל?", options:{ "less-5":"פחות מ-5 שעות", "5-6":"5–6 שעות", "7-8":"7–8 שעות", "more-8":"יותר מ-8 שעות" } },
    17: { question:"כמה מים את/ה שותה בכל יום?", subtitle:"ספור/י רק מים נקיים, לא קפה, תה או משקאות אחרים", options:{ coffee:"אני שותה בעיקר קפה או תה", "less-2":"פחות מ-2 כוסות", "2-6":"2–6 כוסות", "7-10":"7–10 כוסות", "no-track":"אני לא עוקב/ת אחרי זה" } },
    18: { question:"אילו מאכלים אינך רוצה בתוכנית שלך?", subtitle:"בחר את כל מה שרלוונטי", options:{ none:"אני אוכל/ת את כל סוגי הבשר", chicken:"עוף או הודו", pork:"חזיר", beef:"בקר", fish:"דגים", lamb:"כבש", veal:"עגל", veg:"אני צמחוני/ת" } },
    19: { question:"אילו מהמאכלים האלו אינך אוהב/ת?", subtitle:"בחר את כל מה שרלוונטי", options:{ none:"אני אוהב/ת את כולם", onions:"בצל", mushrooms:"פטריות", eggs:"ביצים", nuts:"אגוזים", cheese:"גבינה", milk:"חלב", avocado:"אבוקדו", seafood:"פירות ים", olives:"זיתים", capers:"צלפים", coconut:"קוקוס", "goat-cheese":"גבינת עזים" } },
    20: { buttonLabel:"המשך" },
    21: { buttonLabel:"המשך" }
  },
  jp: {
    1: { question:"あなたの年齢層は？", options:{ "18-29":"18–29歳", "30-39":"30–39歳", "40-49":"40–49歳", "50+":"50歳以上" } },
    2: { question:"主な目標は何ですか？", options:{ "lose-weight":"体重を減らす", "get-fit":"フィットネス向上", "tone-up":"体を引き締める" } },
    3: { question:"あなたのルーチンに最も近いものはどれですか？", subtitle:"最も当てはまるものを選択してください", options:{ sitting:"主に座り仕事", feet:"立ち仕事が多い", active:"非常にアクティブ", home:"主に自宅" } },
    4: { question:"自分の体重に満足してからどのくらい経ちますか？", options:{ year:"過去1年以内", "1-3-years":"約1〜3年前", "3plus":"3年以上前", never:"満足した記憶がない" } },
    5: { question:"運動についてどう感じていますか？", subtitle:"アクティブに過ごすことが進歩をサポートします", options:{ no:"自分には向いていない", "sort-of":"あまり好きではないが、活動的ではある", sometimes:"時々する", often:"はい、頻繁にしている" } },
    6: { question:"日中のエネルギー状態は通常どのような感じですか？", subtitle:"このチャレンジは、あなたがより安定し、自分をコントロールできていると感じられるように設計されています", options:{ drained:"一日の大半、疲れ果てていると感じる", "pre-meal":"食事の前にエネルギーが不足する", afternoon:"通常、午後に活力が落ちる", strong:"一日中エネルギーが持続する" } },
    7: { question:"現在着ている服のサイズは？", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL以上" } },
    8: { question:"どのサイズを着たいですか？", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"サイズは主な目標ではない" } },
    9: { buttonLabel:"続行", interstitial:{ headline:"あなたの回答は、目標を達成したユーザーによく見られるパターンと一致しています", body:"ユーザーの約68%が、最初の1ヶ月で服のサイズを1〜2サイズダウンさせています。", note:"3ヶ月間で服のサイズをダウンさせたユーザーの結果" } },
    10: { question:"身長は？", placeholder:"170" },
    11: { question:"現在の体重は？", placeholder:"75" },
    12: { question:"目標体重は？", placeholder:"60" },
    13: { question:"年齢は？", placeholder:"35" },
    14: { buttonLabel:"続行" },
    15: { question:"あなたに当てはまるものはどれですか？", subtitle:"当てはまるものをすべて選択してください", options:{ "late-night":"夜遅くに食べることが多い", sweets:"甘いものを食べるのがやめられない", soda:"ソフトドリンクをよく飲む", alcohol:"時々アルコールを飲む", fatty:"脂っこいものや塩辛いものが好き" } },
    16: { question:"通常、何時間睡眠をとっていますか？", options:{ "less-5":"5時間未満", "5-6":"5〜6時間", "7-8":"7〜8時間", "more-8":"8時間以上" } },
    17: { question:"毎日どれくらい水を飲みますか？", subtitle:"コーヒー、紅茶、その他の飲料を除いた水のみをカウントしてください", options:{ coffee:"主にコーヒーや紅茶を飲む", "less-2":"コップ2杯未満", "2-6":"コップ2〜6杯", "7-10":"コップ7〜10杯", "no-track":"記録していない" } },
    18: { question:"プランに入れたくない食べ物はどれですか？", subtitle:"当てはまるものをすべて選択してください", options:{ none:"すべての種類の肉を食べる", chicken:"鶏肉または七面鳥", pork:"豚肉", beef:"牛肉", fish:"魚", lamb:"ラム肉", veal:"子牛肉", veg:"ベジタリアンです" } },
    19: { question:"嫌いな食べ物はどれですか？", subtitle:"当てはまるものをすべて選択してください", options:{ none:"すべて好き", onions:"玉ねぎ", mushrooms:"きのこ", eggs:"卵", nuts:"ナッツ", cheese:"チーズ", milk:"牛乳", avocado:"アボカド", seafood:"シーフード", olives:"オリーブ", capers:"ケッパー", coconut:"ココナッツ", "goat-cheese":"ヤギのチーズ" } },
    20: { buttonLabel:"続行" },
    21: { buttonLabel:"続行" }
  },
  ru: {
    1: { question:"Ваш возрастной диапазон?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Какова ваша основная цель?", options:{ "lose-weight":"Сбросить вес", "get-fit":"Прийти в форму", "tone-up":"Подтянуть тело" } },
    3: { question:"Какой распорядок дня больше всего похож на ваш?", subtitle:"Выберите наиболее подходящий вариант", options:{ sitting:"В основном сидячий", feet:"Много времени на ногах", active:"Очень активный", home:"В основном дома" } },
    4: { question:"Как давно вы чувствовали себя довольными своим весом?", options:{ year:"В течение последнего года", "1-3-years":"Примерно 1–3 года назад", "3plus":"Более 3 лет назад", never:"Не помню, чтобы когда-либо так себя чувствовал(а)" } },
    5: { question:"Как вы относитесь к физическим упражнениям?", subtitle:"Активный образ жизни поможет поддержать ваш прогресс", options:{ no:"Не для меня", "sort-of":"Не совсем, но я стараюсь быть активным(ой)", sometimes:"Иногда", often:"Да, часто" } },
    6: { question:"Каков ваш уровень энергии в течение дня?", subtitle:"Этот челлендж разработан, чтобы помочь вам чувствовать себя более стабильно и уверенно", options:{ drained:"Я чувствую себя истощенным(ой) большую часть дня", "pre-meal":"У меня падает уровень энергии перед едой", afternoon:"Обычно я чувствую упадок сил во второй половине дня", strong:"Моя энергия остается на высоком уровне весь день" } },
    7: { question:"Какой размер одежды вы носите сейчас?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Какой размер вы хотели бы носить?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Размер — не главная моя цель" } },
    9: { buttonLabel:"Продолжить", interstitial:{ headline:"Ваши ответы совпадают с паттернами, которые мы часто видим у пользователей, достигающих своих целей", body:"Около 68% наших пользователей уменьшают свой размер одежды на 1–2 размера в первый месяц.", note:"Результаты пользователей, которые уменьшили размер одежды в течение 3 месяцев" } },
    10: { question:"Какой у вас рост?", placeholder:"170" },
    11: { question:"Какой у вас текущий вес?", placeholder:"75" },
    12: { question:"Какой ваш целевой вес?", placeholder:"60" },
    13: { question:"Сколько вам лет?", placeholder:"35" },
    14: { buttonLabel:"Продолжить" },
    15: { question:"Что из этого больше всего похоже на вас?", subtitle:"Выберите все подходящие варианты", options:{ "late-night":"Я часто ем поздно ночью", sweets:"Мне трудно перестать есть сладости", soda:"Я часто пью газировку", alcohol:"Я иногда употребляю алкоголь", fatty:"Я люблю жирную или соленую пищу" } },
    16: { question:"Сколько часов вы обычно спите?", options:{ "less-5":"Менее 5 часов", "5-6":"5–6 часов", "7-8":"7–8 часов", "more-8":"Более 8 часов" } },
    17: { question:"Сколько воды вы выпиваете каждый день?", subtitle:"Считайте только чистую воду, без учета кофе, чая и других напитков", options:{ coffee:"Я в основном пью кофе или чай", "less-2":"Менее 2 стаканов", "2-6":"2–6 стаканов", "7-10":"7–10 стаканов", "no-track":"Я не слежу за этим" } },
    18: { question:"Какие продукты вы не хотите видеть в своем плане?", subtitle:"Выберите все подходящие варианты", options:{ none:"Я ем все виды мяса", chicken:"Курица или индейка", pork:"Свинина", beef:"Говядина", fish:"Рыба", lamb:"Баранина", veal:"Телятина", veg:"Я вегетарианец(ка)" } },
    19: { question:"Какие из этих продуктов вам не нравятся?", subtitle:"Выберите все подходящие варианты", options:{ none:"Мне нравятся все они", onions:"Лук", mushrooms:"Грибы", eggs:"Яйца", nuts:"Орехи", cheese:"Сыр", milk:"Молоко", avocado:"Авокадо", seafood:"Морепродукты", olives:"Оливки", capers:"Каперсы", coconut:"Кокос", "goat-cheese":"Козий сыр" } },
    20: { buttonLabel:"Продолжить" },
    21: { buttonLabel:"Продолжить" }
  },
  sk: {
    1: { question:"V akej vekovej skupine sa nachádzate?", options:{ "18-29":"18–29", "30-39":"30–39", "40-49":"40–49", "50+":"50+" } },
    2: { question:"Aký je váš hlavný cieľ?", options:{ "lose-weight":"Schudnúť", "get-fit":"Dostať sa do formy", "tone-up":"Spevniť postavu" } },
    3: { question:"Ktorá rutina najlepšie opisuje tú vašu?", subtitle:"Vyberte tú, ktorá vám najviac vyhovuje", options:{ sitting:"Väčšinou sedavá", feet:"Veľa času na nohách", active:"Veľmi aktívna", home:"Väčšinou doma" } },
    4: { question:"Ako dlho je to odvtedy, čo ste boli spokojní so svojou váhou?", options:{ year:"Za posledný rok", "1-3-years":"Približne 1 – 3 roky", "3plus":"Viac ako 3 roky", never:"Nepamätám si, že by som sa niekedy tak cítil(a)" } },
    5: { question:"Aký je váš názor na cvičenie?", subtitle:"Fyzická aktivita môže pomôcť podporiť váš pokrok", options:{ no:"To nie je nič pre mňa", "sort-of":"Nie celkom, ale hýbem sa", sometimes:"Niekedy", often:"Áno, často" } },
    6: { question:"Aká je vaša typická hladina energie počas dňa?", subtitle:"Táto výzva je navrhnutá tak, aby vám pomohla cítiť sa stabilnejšie a mať kontrolu", options:{ drained:"Väčšinu dňa sa cítim vyčerpaný(á)", "pre-meal":"Pociťujem únavu pred jedlom", afternoon:"Popoludní mávam útlm", strong:"Moja energia zostáva silná po celý deň" } },
    7: { question:"Akú veľkosť oblečenia momentálne nosíte?", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL+" } },
    8: { question:"Akú veľkosť by ste chceli nosiť?", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"Veľkosť nie je mojím hlavným cieľom" } },
    9: { buttonLabel:"Pokračovať", interstitial:{ headline:"Vaše odpovede sa zhodujú so vzorcami, ktoré často vidíme u používateľov dosahujúcich svoje ciele", body:"Približne 68 % našich používateľov klesne o 1 – 2 veľkosti oblečenia počas prvého mesiaca.", note:"Výsledky od používateľov, ktorí za 3 mesiace klesli o veľkosť oblečenia" } },
    10: { question:"Aká je vaša výška?", placeholder:"170" },
    11: { question:"Aká je vaša súčasná váha?", placeholder:"75" },
    12: { question:"Aká je vaša cieľová váha?", placeholder:"60" },
    13: { question:"Koľko máte rokov?", placeholder:"35" },
    14: { buttonLabel:"Pokračovať" },
    15: { question:"Čo z nasledovného vás najlepšie vystihuje?", subtitle:"Vyberte všetko, čo platí", options:{ "late-night":"Často jem neskoro večer", sweets:"Je pre mňa ťažké prestať jesť sladkosti", soda:"Často pijem sladené sýtené nápoje", alcohol:"Niekedy pijem alkohol", fatty:"Mám rád(a) tučné alebo slané jedlá" } },
    16: { question:"Koľko hodín zvyčajne spíte?", options:{ "less-5":"Menej ako 5 hodín", "5-6":"5 – 6 hodín", "7-8":"7 – 8 hodín", "more-8":"Viac ako 8 hodín" } },
    17: { question:"Koľko vody vypijete každý deň?", subtitle:"Počítajte iba čistú vodu, nie kávu, čaj ani iné nápoje", options:{ coffee:"Pijem hlavne kávu alebo čaj", "less-2":"Menej ako 2 poháre", "2-6":"2 – 6 pohárov", "7-10":"7 – 10 pohárov", "no-track":"Nesledujem to" } },
    18: { question:"Ktoré potraviny nechcete mať vo svojom pláne?", subtitle:"Vyberte všetko, čo platí", options:{ none:"Jem všetky druhy mäsa", chicken:"Kuracie alebo morčacie mäso", pork:"Bravčové mäso", beef:"Hovädzie mäso", fish:"Ryby", lamb:"Jahňacie mäso", veal:"Teľacie mäso", veg:"Som vegetarián(ka)" } },
    19: { question:"Ktoré z týchto potravín nemáte radi?", subtitle:"Vyberte všetko, čo platí", options:{ none:"Mám rád(a) všetky", onions:"Cibuľa", mushrooms:"Huby", eggs:"Vajcia", nuts:"Orechy", cheese:"Syr", milk:"Mlieko", avocado:"Avokádo", seafood:"Morské plody", olives:"Olivy", capers:"Kapary", coconut:"Kokos", "goat-cheese":"Kozí syr" } },
    20: { buttonLabel:"Pokračovať" },
    21: { buttonLabel:"Pokračovať" }
  },
  tw: {
    1: { question:"您的年齡範圍是多少？", options:{ "18-29":"18–29 歲", "30-39":"30–39 歲", "40-49":"40–49 歲", "50+":"50 歲以上" } },
    2: { question:"您的主要目標是什麼？", options:{ "lose-weight":"減輕體重", "get-fit":"鍛鍊體能", "tone-up":"塑造體態" } },
    3: { question:"哪種日常生活習慣最像您的？", subtitle:"挑選最符合您的一項", options:{ sitting:"大多坐著", feet:"經常站立", active:"非常活躍", home:"大多在家" } },
    4: { question:"距离上次您對自己體重感到滿意過了多久？", options:{ year:"在過去一年內", "1-3-years":"大約 1–3 年前", "3plus":"超過 3 年", never:"我不記得曾有過那樣的感覺" } },
    5: { question:"您對運動有何感想？", subtitle:"保持活躍有助於支援您的進度", options:{ no:"不適合我", "sort-of":"不完全喜歡，但我會保持活動", sometimes:"有時候", often:"是的，經常" } },
    6: { question:"您在一天中的體力狀況通常如何？", subtitle:"此挑戰旨在幫助您感到更穩定且更有掌控力", options:{ drained:"我大部分時間都感到精疲力竭", "pre-meal":"我在飯前體力會變差", afternoon:"我通常在下午會遇到倦怠期", strong:"我整天都保持充沛的體力" } },
    7: { question:"您現在穿什麼尺寸的衣服？", options:{ "xs-s":"XS–S", "m-l":"M–L", "xl-2xl":"XL–2XL", "3xl":"3XL 以上" } },
    8: { question:"您想穿什麼尺寸的？", options:{ "xs-s":"XS–S", "m-l":"M–L", xl:"XL", none:"尺寸不是我的主要目標" } },
    9: { buttonLabel:"繼續", interstitial:{ headline:"您的回答與我們常在達成目標的使用者身上看到的模式相符", body:"約 68% 的使用者在第一個月內減少了 1–2 個服裝尺寸。", note:"來自在 3 個月內減少服裝尺寸的使用者結果" } },
    10: { question:"您的身高是多少？", placeholder:"170" },
    11: { question:"您目前的體重是多少？", placeholder:"75" },
    12: { question:"您的目標體重是多少？", placeholder:"60" },
    13: { question:"您幾歲？", placeholder:"35" },
    14: { buttonLabel:"繼續" },
    15: { question:"以下哪項聽起來像您？", subtitle:"選擇所有符合的項", options:{ "late-night":"我經常在深夜進食", sweets:"我很難停止吃甜食", soda:"我經常喝軟性飲料", alcohol:"我有時會喝酒", fatty:"我喜歡油膩或鹹的食物" } },
    16: { question:"您通常睡幾個小時？", options:{ "less-5":"少於 5 小時", "5-6":"5–6 小時", "7-8":"7–8 小時", "more-8":"超過 8 小時" } },
    17: { question:"您每天喝多少水？", subtitle:"僅計算純水，不包括咖啡、茶或其他飲料", options:{ coffee:"我大多喝咖啡或茶", "less-2":"少於 2 杯", "2-6":"2–6 杯", "7-10":"7–10 杯", "no-track":"我不追蹤進度" } },
    18: { question:"您的計畫中不想包含哪些食物？", subtitle:"選擇所有適用的項", options:{ none:"我吃所有類型的肉類", chicken:"雞肉或火雞肉", pork:"豬肉", beef:"牛肉", fish:"魚類", lamb:"羊肉", veal:"小牛肉", veg:"我是素食者" } },
    19: { question:"以下哪些食物是您不喜歡的？", subtitle:"選擇所有適用的項", options:{ none:"我都喜歡", onions:"洋蔥", mushrooms:"蘑菇", eggs:"雞蛋", nuts:"堅果", cheese:"起司", milk:"牛奶", avocado:"酪梨", seafood:"海鮮", olives:"橄欖", capers:"酸豆", coconut:"椰子", "goat-cheese":"山羊起司" } },
    20: { buttonLabel:"繼續" },
    21: { buttonLabel:"繼續" }
  }
}

// END OF MANAGED BLOCK



// ─── EXPORT HOOKS ─────────────────────────────────────────────────────────────

export function useIntroT(lang: LangCode): IntroTranslations {
  return localizeBrandValue(intro[lang] ?? intro.en, lang)
}

export function useUITranslations(lang: LangCode): UITranslations {
  return localizeBrandValue(ui[lang] ?? ui.en, lang)
}

export function useStepPageT(lang: LangCode): StepPageTranslations {
  return localizeBrandValue(stepPage[lang] ?? stepPage.en, lang)
}

export function useResultT(lang: LangCode): ResultTranslations {
  return localizeBrandValue(result[lang] ?? result.en, lang)
}

export function useResults28T(lang: LangCode): Results28Translations {
  return localizeBrandValue(results28[lang] ?? results28.en, lang)
}

export function useWellnessT(lang: LangCode): WellnessTranslations {
  return localizeBrandValue(wellness[lang] ?? wellness.en, lang)
}

export function useLoadingT(lang: LangCode): LoadingTranslations {
  return localizeBrandValue(loading[lang] ?? loading.en, lang)
}

export function useEmailT(lang: LangCode): EmailTranslations {
  return localizeBrandValue(email[lang] ?? email.en, lang)
}

export function getTranslatedSteps(lang: LangCode): QuizStep[] {
  const tArr = quizSteps[lang] ?? quizSteps.en
  return QUIZ_STEPS.map((step) => {
    const s = tArr[step.step]
    const base = localizeBrandValue(step, lang)
    if (!s) return base
    return {
      ...base,
      ...s,
      options: base.options?.map((opt) => ({
        ...opt,
        label: s.options?.[opt.id] ?? opt.label,
      })),
      interstitial: base.interstitial ? { ...base.interstitial, ...s.interstitial } : undefined,
    }
  })
}
