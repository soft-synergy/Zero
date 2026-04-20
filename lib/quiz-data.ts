export type QuestionType =
  | 'single'
  | 'multi'
  | 'input-number'
  | 'input-text'
  | 'input-date'
  | 'interstitial'
  | 'target-zones'
  | 'age-insight'
  | 'weight-goal'
  | 'bmi-card'
  | 'plan-loading'

export interface InterstitialContent {
  images: string[]
  imagesMen?: string[]
  imagesWomen?: string[]
  headline: string
  body: string
  note?: string
  circular?: boolean
  fullWidthTop?: boolean
}

export interface QuizOption {
  id: string
  label: string
  image?: string
  imageMen?: string
  imageWomen?: string
  zoneTop?: string
  zoneLeft?: string
}

export interface QuizStep {
  step: number
  question: string
  subtitle?: string
  type: QuestionType
  options?: QuizOption[]
  unit?: string
  units?: string[]
  placeholder?: string
  hint?: string
  hintTitle?: string
  showBMICard?: boolean
  showGoalCard?: boolean
  skippable?: boolean
  requiresConsent?: boolean
  buttonLabel?: string
  validation?: { min: number; max: number }
  interstitial?: InterstitialContent
  exclusion?: boolean
}

export const HEIGHT_STEP = 10
export const WEIGHT_STEP = 11
export const GOAL_WEIGHT_STEP = 12
export const TOTAL_STEPS = 21
export const QUIZ_PHASE1_END = 21

export const QUIZ_STEPS: QuizStep[] = [
  {
    step: 1,
    question: "What's your age range?",
    type: 'single',
    options: [
      { id: '18-29', label: '18–29', imageMen: '/images/man/age_men_18to29_.png',        imageWomen: '/images/woman/age_women_18 to 29.png' },
      { id: '30-39', label: '30–39', imageMen: '/images/man/age_men_30 to 39.png',       imageWomen: '/images/woman/age_women_30 to 39.png' },
      { id: '40-49', label: '40–49', imageMen: '/images/man/age_men_40-49.png',           imageWomen: '/images/woman/age_women_40-49plus.png' },
      { id: '50+',   label: '50+',   imageMen: '/images/man/age_men_50plus.png',          imageWomen: '/images/woman/age_women_70 plus.png' },
    ],
  },
  {
    step: 2,
    question: 'What is your main goal?',
    type: 'single',
    options: [
      { id: 'lose-weight', label: 'Lose weight' },
      { id: 'get-fit',     label: 'Get fit' },
      { id: 'tone-up',     label: 'Tone up' },
    ],
  },
  {
    step: 3,
    question: 'Which routine sounds most like yours?',
    subtitle: 'Pick the one that matches you best',
    type: 'single',
    options: [
      { id: 'sitting', label: 'Mostly sitting' },
      { id: 'feet',    label: 'On my feet a lot' },
      { id: 'active',  label: 'Very active' },
      { id: 'home',    label: 'Mostly at home' },
    ],
  },
  {
    step: 4,
    question: 'How long has it been since you felt good about your weight?',
    type: 'single',
    options: [
      { id: 'year',      label: 'Within the last year' },
      { id: '1-3-years', label: 'About 1–3 years' },
      { id: '3plus',     label: 'More than 3 years' },
      { id: 'never',     label: "I can't remember ever feeling that way" },
    ],
  },
  {
    step: 5,
    question: 'How do you feel about exercise?',
    subtitle: 'Being active can help support your progress',
    type: 'single',
    options: [
      { id: 'no',        label: 'Not for me' },
      { id: 'sort-of',   label: 'Not really, but I stay active' },
      { id: 'sometimes', label: 'Sometimes' },
      { id: 'often',     label: 'Yes, often' },
    ],
  },
  {
    step: 6,
    question: "What's your energy usually like during the day?",
    subtitle: 'This challenge is designed to help you feel more steady and in control',
    type: 'single',
    options: [
      { id: 'drained',   label: 'I feel drained most of the day' },
      { id: 'pre-meal',  label: 'I get low on energy before meals' },
      { id: 'afternoon', label: 'I usually hit a slump in the afternoon' },
      { id: 'strong',    label: 'My energy stays strong all day' },
    ],
  },
  {
    step: 7,
    question: 'What clothes size do you wear now?',
    type: 'single',
    options: [
      { id: 'xs-s',   label: 'XS–S',   imageMen: '/images/man/size_men_XS-S.png',        imageWomen: '/images/woman/clothes_size_women_XS-S.png' },
      { id: 'm-l',    label: 'M–L',    imageMen: '/images/man/size_men_M-L.png',         imageWomen: '/images/woman/clothes_size_women_M-L.png' },
      { id: 'xl-2xl', label: 'XL–2XL', imageMen: '/images/man/size XL to 2XL man.png',  imageWomen: '/images/woman/clothes_size_women_XL-2XL.png' },
      { id: '3xl',    label: '3XL+',   imageMen: '/images/man/size 3XL+  man.png',       imageWomen: '/images/woman/clothes_size_women_XXL.png' },
    ],
  },
  {
    step: 8,
    question: 'What size would you like to wear?',
    type: 'single',
    options: [
      { id: 'xs-s', label: 'XS–S',                    imageMen: '/images/man/size_men_XS-S.png',       imageWomen: '/images/woman/clothes_size_women_XS-S.png' },
      { id: 'm-l',  label: 'M–L',                     imageMen: '/images/man/size_men_M-L.png',        imageWomen: '/images/woman/clothes_size_women_M-L.png' },
      { id: 'xl',   label: 'XL',                      imageMen: '/images/man/size_men_XL.png',         imageWomen: '/images/woman/clothes_size_women_XXL.png' },
      { id: 'none', label: 'Size is not my main goal', imageWomen: '/images/woman/clothes_size_women_3XL_plus.png', imageMen: '/images/man/Size is not my main goal.png' },
    ],
  },
  {
    step: 9,
    type: 'interstitial',
    question: '',
    interstitial: {
      images: ['/images/general/match the patterns pict.png'],
      headline: 'Your answers match the patterns we often see in users who reach their goals',
      body: 'Around 68% of our users reduce 1–2 clothing sizes in the first month.',
      note: 'Results from users who went down in clothing size over 3 months',
    },
    buttonLabel: 'Continue',
  },
  {
    step: 10,
    question: 'What is your height?',
    type: 'input-number',
    units: ['cm', 'in'],
    unit: 'cm',
    placeholder: '170',
    validation: { min: 100, max: 250 },
  },
  {
    step: 11,
    question: 'What is your current weight?',
    type: 'input-number',
    units: ['lbs', 'kg'],
    unit: 'lbs',
    placeholder: '175',
    validation: { min: 66, max: 660 },
  },
  {
    step: 12,
    question: 'What is your target weight?',
    type: 'input-number',
    units: ['lbs', 'kg'],
    unit: 'lbs',
    placeholder: '150',
    validation: { min: 66, max: 600 },
    showGoalCard: true,
  },
  {
    step: 13,
    question: 'How old are you?',
    type: 'input-number',
    unit: 'years',
    placeholder: '35',
    validation: { min: 18, max: 100 },
  },
  {
    step: 14,
    type: 'age-insight',
    question: '',
    buttonLabel: 'Continue',
  },
  {
    step: 15,
    question: 'Which of these sound like you?',
    subtitle: 'Choose all that fit',
    type: 'multi',
    options: [
      { id: 'late-night', label: 'I often eat late at night' },
      { id: 'sweets',     label: 'It is hard for me to stop eating sweets' },
      { id: 'soda',       label: 'I drink soft drinks often' },
      { id: 'alcohol',    label: 'I sometimes drink alcohol' },
      { id: 'fatty',      label: 'I enjoy fatty or salty foods' },
    ],
  },
  {
    step: 16,
    question: 'How many hours do you usually sleep?',
    type: 'single',
    options: [
      { id: 'less-5', label: 'Less than 5 hours' },
      { id: '5-6',    label: '5–6 hours' },
      { id: '7-8',    label: '7–8 hours' },
      { id: 'more-8', label: 'More than 8 hours' },
    ],
  },
  {
    step: 17,
    question: 'How much water do you drink each day?',
    subtitle: 'Only count plain water, not coffee, tea, or other drinks',
    type: 'single',
    options: [
      { id: 'coffee',   label: 'I mostly drink coffee or tea' },
      { id: 'less-2',   label: 'Less than 2 glasses' },
      { id: '2-6',      label: '2–6 glasses' },
      { id: '7-10',     label: '7–10 glasses' },
      { id: 'no-track', label: 'I do not track it' },
    ],
  },
  {
    step: 18,
    question: 'Which foods do you not want in your plan?',
    subtitle: 'Choose all that apply',
    type: 'multi',
    exclusion: true,
    options: [
      { id: 'none',    label: 'I eat all types of meat' },
      { id: 'chicken', label: 'Chicken or turkey',       image: '/images/step15_meat_chicken_whole.png' },
      { id: 'pork',    label: 'Pork',                    image: '/images/Food ingredients/ingredient_Pork.png' },
      { id: 'beef',    label: 'Beef',                    image: '/images/step15_meat_asparagus_side.png' },
      { id: 'fish',    label: 'Fish',                    image: '/images/Food ingredients/ingredient_salmon.png' },
      { id: 'lamb',    label: 'Lamb',                    image: '/images/Lamb.png' },
      { id: 'veal',    label: 'Veal',                    image: '/images/Food ingredients/ingredient_Veal.png' },
      { id: 'veg',     label: 'I am vegetarian' },
    ],
  },
  {
    step: 19,
    question: 'Which of these foods do you not like?',
    subtitle: 'Choose all that apply',
    type: 'multi',
    exclusion: true,
    options: [
      { id: 'none',        label: 'I like all of them' },
      { id: 'onions',      label: 'Onions',             image: '/images/Food ingredients/ingredient_onions.png' },
      { id: 'mushrooms',   label: 'Mushrooms',          image: '/images/Food ingredients/ingredient_mushrooms.png' },
      { id: 'eggs',        label: 'Eggs',               image: '/images/Food ingredients/ingredient_eggs.png' },
      { id: 'nuts',        label: 'Nuts',               image: '/images/Food ingredients/ingredient_nuts.png' },
      { id: 'cheese',      label: 'Cheese',             image: '/images/Food ingredients/ingredient_cheese.png' },
      { id: 'milk',        label: 'Milk',               image: '/images/Food ingredients/ingredient_milk.png' },
      { id: 'avocado',     label: 'Avocado',            image: '/images/Food ingredients/ingredient_avocado.png' },
      { id: 'seafood',     label: 'Seafood',            image: '/images/Food ingredients/ingredient_seafood_crab.png' },
      { id: 'olives',      label: 'Olives',             image: '/images/Food ingredients/ingredient_olives_green_plate.png' },
      { id: 'capers',      label: 'Capers',             image: '/images/Food ingredients/ingredient_olives_green_branch.png' },
      { id: 'coconut',     label: 'Coconut',            image: '/images/Food ingredients/ingredient_coconut.png' },
      { id: 'goat-cheese', label: 'Goat cheese',        image: '/images/Food ingredients/ingredient_goat_cheese.png' },
    ],
  },
  {
    step: 20,
    type: 'weight-goal',
    question: '',
    buttonLabel: 'Continue',
  },
  {
    step: 21,
    type: 'bmi-card',
    question: '',
    buttonLabel: 'Continue',
  },
]
