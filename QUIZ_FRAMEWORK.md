# Quiz Framework — Przewodnik tworzenia nowych quizów

> **Zasada numer jeden:** Nowy quiz = kopia repo + edycja `lib/quiz-config.ts` + `app/globals.css` + pliki tłumaczeń. Nic więcej nie powinno wymagać zmian w komponentach.

---

## Spis treści

1. [Architektura systemu](#1-architektura-systemu)
2. [Jak stworzyć nowy quiz — krok po kroku](#2-jak-stworzyć-nowy-quiz--krok-po-kroku)
3. [Konfiguracja: lib/quiz-config.ts](#3-konfiguracja-libquiz-configts)
4. [Motyw wizualny: app/globals.css](#4-motyw-wizualny-appglobalscss)
5. [Tłumaczenia i języki](#5-tłumaczenia-i-języki)
6. [Struktura kroków quizu](#6-struktura-kroków-quizu)
7. [Widoki — co i jak edytować](#7-widoki--co-i-jak-edytować)
8. [Paywall i checkout](#8-paywall-i-checkout)
9. [Panel admina](#9-panel-admina)
10. [Najczęstsze problemy z historii git](#10-najczęstsze-problemy-z-historii-git)
11. [Checklist przed deploym](#11-checklist-przed-deploym)

---

## 1. Architektura systemu

```
lib/quiz-config.ts      ← JEDYNE ŹRÓDŁO PRAWDY (marka, URL-e, języki, meta)
lib/i18n.ts             ← tłumaczenia wszystkich stron quizu (14 języków)
lib/paywall-copy.ts     ← tłumaczenia paywall (oddzielny plik — duży)
lib/quiz-data.ts        ← struktura kroków (pytania, typy, opcje)
lib/brand.ts            ← lokalizacja nazwy marki (importuje z quiz-config)
lib/reviews-data.ts     ← recenzje użytkowników
lib/paywall-stories-data.ts ← success stories na paywallu
app/globals.css         ← CSS custom properties (kolory, fonty, radii)
app/layout.tsx          ← font Google Fonts + metadata (z quiz-config)
```

### Przepływ danych

```
quiz-config.ts
    ├─→ brand.ts (nazwy marki)
    ├─→ i18n.ts (lista aktywnych języków)
    ├─→ layout.tsx (meta title/description)
    └─→ komponenty (URL-e: privacy, terms, checkout...)
```

---

## 2. Jak stworzyć nowy quiz — krok po kroku

### Krok 1: Sklonuj repo

```bash
git clone <repo> my-new-quiz
cd my-new-quiz
npm install
```

### Krok 2: Edytuj `lib/quiz-config.ts`

To jest **jedyne miejsce** gdzie zmieniasz:
- Nazwy marki we wszystkich językach
- Email supportu
- Aktywne języki
- Wszystkie URL-e (privacy, terms, checkout)
- Meta title i description

Szczegóły w sekcji [3](#3-konfiguracja-libquiz-configts).

### Krok 3: Dostosuj motyw w `app/globals.css`

Zmień CSS custom properties w bloku `:root { ... }`:

```css
--color-primary:    #b53e5a;   /* ← zmień na kolor swojej marki */
--color-bg:         #f8f7f4;   /* ← tło strony */
--color-card:       #eeecea;   /* ← tło kart */
```

Szczegóły w sekcji [4](#4-motyw-wizualny-appglobalscss).

### Krok 4: Zmień font (opcjonalne)

W `app/layout.tsx`:

```tsx
import { Inter } from 'next/font/google'  // ← zmień font
const myFont = Inter({
  subsets: ['latin'],
  variable: '--font-dm-sans',   // zostaw tę samą zmienną CSS
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
```

> **Uwaga:** `--font-dm-sans` to nazwa zmiennej CSS używanej w `globals.css`. Możesz ją zmienić, ale pamiętaj o aktualizacji w `globals.css` (`font-family: var(--font-dm-sans, ...)`).

### Krok 5: Dostosuj strukturę quizu

Edytuj `lib/quiz-data.ts` — zmień pytania, kolejność, typy pól, opcje odpowiedzi.

Szczegóły w sekcji [6](#6-struktura-kroków-quizu).

### Krok 6: Przetłumacz treści

Edytuj `lib/i18n.ts` — klucze dla każdego języka muszą być kompletne.  
Edytuj `lib/paywall-copy.ts` — tłumaczenia paywall.

Szczegóły w sekcji [5](#5-tłumaczenia-i-języki).

### Krok 7: Podmień obrazy

Wszystkie obrazy są w `public/images/`. Nazwy plików odwołują się do nich w `lib/quiz-data.ts` i komponentach.

### Krok 8: Ustaw hasło admina

W `.env`:
```
ADMIN_PASSWORD=twoje-haslo
```

### Krok 9: Walidacja przed commitem

```bash
node scripts/validate-i18n.js
```

Sprawdza:
- Kompletność tłumaczeń we wszystkich językach
- Brak hardcoded angielskich stringów w komponentach
- TypeScript

---

## 3. Konfiguracja: `lib/quiz-config.ts`

### Sekcja: marka (`BRAND_NAMES`, `BRAND_APP_NAME`, `BRAND_SUPPORT_EMAIL`)

```ts
export const BRAND_NAMES: Record<LangCode, string> = {
  en: 'My App',
  lt: 'Mano programa',
  // ... dla każdego aktywnego języka
}

export const BRAND_APP_NAME = 'My App'
export const BRAND_SUPPORT_EMAIL = 'hello@myapp.com'
```

`BRAND_NAMES` zastępuje automatycznie każde wystąpienie "Tai Chi Coach" / "TAICHI COACH" w tłumaczeniach. Mechanizm jest w `lib/brand.ts`.

### Sekcja: języki (`ACTIVE_LANGUAGES`)

```ts
export const ACTIVE_LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'pl', label: 'Polski',  flag: '🇵🇱' },
  // tylko te języki, które chcesz obsługiwać
]
```

> **Aby dodać nowy język** (np. `pl`):
> 1. Dodaj `'pl'` do unii `LangCode` w `lib/lang-store.ts`
> 2. Dodaj tłumaczenia w `lib/i18n.ts` (wszystkie sekcje: `intro`, `ui`, `stepPage`, `result`, itd.)
> 3. Dodaj tłumaczenia w `lib/paywall-copy.ts`
> 4. Dodaj recenzje w `lib/reviews-data.ts`
> 5. Dodaj do `ACTIVE_LANGUAGES` tutaj

### Sekcja: URL-e (`QUIZ_URLS`)

```ts
export const QUIZ_URLS = {
  privacyPolicy:       'https://myapp.com/privacy',
  termsOfService:      'https://myapp.com/terms',
  cookiePolicy:        'https://myapp.com/cookies',
  moneyBackGuarantee:  'https://myapp.com/refund',
  checkout: (lang, slug, planId) =>
    `https://myapp.com/${lang}-checkout-${slug}-${planId}`,
}
```

Te URL-e pojawiają się na:
- Stronie intro (consent checkbox) → `termsOfService`, `cookiePolicy`, `privacyPolicy`
- Stronie ze zgodą zdrowotną (step z requiresConsent) → `privacyPolicy`
- Stronie email → `privacyPolicy`
- Paywall → wszystkie 4 + `checkout`

### Sekcja: metadane (`PAGE_META`)

```ts
export const PAGE_META = {
  title: 'My Quiz — 28-Day Challenge',
  description: 'Your personalized challenge description',
}
```

---

## 4. Motyw wizualny: `app/globals.css`

Cały wygląd quizu sterowany jest przez CSS custom properties w bloku `:root`:

```css
:root {
  /* ─── ZMIEŃ TE WARTOŚCI DLA NOWEGO QUIZU ─── */
  --color-primary:        #b53e5a;   /* kolor główny: przyciski, progress, zaznaczenie */
  --color-primary-dark:   #b53e5a;   /* hover state (zwykle to samo) */
  --color-primary-hover:  #b53e5a;   /* hover state */
  --color-primary-pale:   #e8f5ee;   /* jasne tło "aktywnej" karty */

  --color-bg:             #f8f7f4;   /* tło strony */
  --color-bg-white:       #ffffff;
  --color-bg-subtle:      #f8f7f4;

  --color-card:           #eeecea;   /* tło kart opcji */
  --color-border:         #e4e2dd;   /* krawędzie */

  --color-text:           #1a1a18;   /* tekst główny */
  --color-text-mid:       #555552;
  --color-text-secondary: #a0a09a;
  --color-text-soft:      #999994;

  --radius-card:          12px;      /* zaokrąglenie kart */
  --radius-btn:           8px;       /* zaokrąglenie przycisków */

  /* ─── NIE ZMIENIAJ (semantic) ─── */
  --color-error:          #e05555;
  --color-success:        #4dbf7a;
  --color-warning-bg:     #FFF0C0;
}
```

> **Wskazówka:** `--color-primary` pojawia się na: przyciskach CTA, pasku postępu, zaznaczonych kartach opcji, kropce aktywnej w planie cenowym. To najważniejsza zmienna — zmień ją jako pierwszą.

### Zmiana layoutu/animacji widoków

Każda strona ma swój plik `page.module.css` — np.:
- `app/[lang]/quiz/[step]/page.module.css` — ekran pytania
- `app/[lang]/quiz/paywall/page.module.css` — paywall
- `app/[lang]/quiz/result/page.module.css` — ekran wyników

Możesz edytować te pliki bezpośrednio. Są to lokalne klasy CSS Modules — zmiany w jednym nie wpłyną na inne strony.

---

## 5. Tłumaczenia i języki

### Struktura pliku `lib/i18n.ts`

Każda sekcja quizu ma swój blok tłumaczeń:

| Sekcja (prefix admin) | Hook                | Strona              |
|-----------------------|---------------------|---------------------|
| `intro.*`             | `useIntroT(lang)`   | Strona startowa      |
| `ui.*`                | `useUIT(lang)`      | QuizHeader/Footer    |
| `steps.*`             | `getTranslatedSteps(lang)` | Kroki quizu   |
| `stepPage.*`          | `useStepPageT(lang)` | Meta krok (BMI)    |
| `loading.*`           | `useLoadingT(lang)` | Loading screen       |
| `result.*`            | `useResultT(lang)`  | Wyniki              |
| `results28.*`         | `useResults28T(lang)` | Wyniki 28 dni     |
| `wellness.*`          | `useWellnessT(lang)` | Wellness profile   |
| `email.*`             | `useEmailT(lang)`   | Email capture       |

**Paywall** jest w osobnym pliku: `lib/paywall-copy.ts` (prefix `paywall.*` w adminie).

### Dodawanie języka — przykład dla polskiego

**1. `lib/lang-store.ts`** — dodaj do unii typów:
```ts
export type LangCode = 'en' | 'lt' | ... | 'pl'  // ← dodaj 'pl'
```

**2. `lib/quiz-config.ts`** — dodaj do `ACTIVE_LANGUAGES`:
```ts
{ code: 'pl', label: 'Polski', flag: '🇵🇱' }
```

**3. `lib/brand.ts`** — dodaj nazwę marki (przez `quiz-config.ts`):
```ts
// w quiz-config.ts → BRAND_NAMES:
pl: 'Mój Quiz',
```

**4. `lib/i18n.ts`** — w każdej funkcji `useXxxT` dodaj blok `case 'pl': return { ... }` z kompletem kluczy.

**5. `lib/paywall-copy.ts`** — dodaj `pl:` do każdego obiektu tłumaczeń.

**6. `lib/reviews-data.ts`** — dodaj `pl:` z recenzjami.

**7. Walidacja:**
```bash
node scripts/validate-i18n.js
```

### Wyłączanie języka

Usuń go z `ACTIVE_LANGUAGES` w `lib/quiz-config.ts`. Tłumaczenia mogą zostać w plikach — nie szkodzą.

---

## 6. Struktura kroków quizu

Edytuj `lib/quiz-data.ts`. Każdy krok to obiekt `QuizStep`:

```ts
{
  step: 3,
  question: 'What are your main goals?',   // klucz kroku (override w i18n.ts)
  subtitle: 'Select all that apply',
  type: 'multi',                           // typ pola
  options: [
    { id: 'lose-weight', label: 'Lose weight', emoji: '🎯' },
    { id: 'improve-fitness', label: 'Improve fitness', emoji: '💪' },
  ],
}
```

### Typy kroków

| Typ | Opis | Przykład użycia |
|-----|------|-----------------|
| `single` | Wybór jednej opcji (radio) | Płeć, typ sylwetki |
| `multi` | Wielokrotny wybór (checkbox) | Cele, problemy zdrowotne |
| `input-number` | Liczba (waga, wzrost, wiek) | Waga aktualna, docelowa |
| `input-text` | Tekst | Imię |
| `input-date` | Data (flatpickr) | Data urodzenia |
| `interstitial` | Pełnoekranowy ekran informacyjny | Powitanie, przejście |
| `target-zones` | Interaktywny schemat ciała | Strefy docelowe |

### Dodawanie kroku interstitial

```ts
{
  step: 28,
  type: 'interstitial',
  question: '',
  interstitial: {
    images: ['/images/my-image.png'],
    headline: 'Your plan is ready!',
    body: 'Based on your answers...',
    circular: true,         // okrągłe przycięcie obrazu
    fullWidthTop: false,    // pełna szerokość u góry
  },
  buttonLabel: 'See my plan',
}
```

---

## 7. Widoki — co i jak edytować

### Widok pytania (`app/[lang]/quiz/[step]/page.tsx` + `page.module.css`)

Domyślny layout ekranu pytania:
1. `QuizHeader` — pasek postępu + przycisk wstecz (z `lib/i18n.ts` → `ui.*`)
2. Treść pytania z opcjami (z `lib/quiz-data.ts` + `lib/i18n.ts` → `steps.*`)
3. `QuizFooter` — przycisk "Dalej" / "Pomiń"

**Co edytować:**
- Treść pytań → `lib/i18n.ts` sekcja `steps`
- Layout wizualny → `page.module.css`
- Typy inputów, walidacja → `lib/quiz-data.ts`

### Widok intro (`app/[lang]/page.tsx`)

Strona startowa z wyborem grupy wiekowej. Edytowalna przez:
- Tekst → `lib/i18n.ts` sekcja `intro`
- Obraz → `public/images/person-intro.png` (podmień plik, zachowaj nazwę lub zmień w `page.tsx`)
- Layout → `app/[lang]/page.module.css`

### Widok paywall (`app/quiz/paywall/PaywallContent.tsx`)

Jedyny komponent współdzielony przez 4 warianty:
- `/quiz/paywall` — główny
- `/quiz/paywall-nb` — wariant "non-buyer"
- `/quiz/paywall-nb2` / `-nb3` — kolejne warianty

Różnią się tylko `checkoutSlug` prop:
```tsx
<PaywallContent checkoutSlug="email-checkout" />
```

**Co edytować:**
- Plany cenowe (ceny, nazwy, opisy) → w `PaywallContent.tsx` stała `PLANS`
- Teksty copy → `lib/paywall-copy.ts`
- URL checkout → `lib/quiz-config.ts` → `QUIZ_URLS.checkout`
- Success stories → `lib/paywall-stories-data.ts`

### Widok wyników (`app/[lang]/quiz/result/`, `results-28/`)

- Teksty → `lib/i18n.ts` sekcja `result` / `results28`
- Wykres wagi → komponent `WeightChart` (wylicza dane z odpowiedzi ze store)
- BMI → komponent `BMIScale`

### Widok loading (`app/[lang]/quiz/loading-screen/`, `plan-loading/`)

- Teksty + recenzje w karuzeli → `lib/i18n.ts` sekcja `loading` + `lib/reviews-data.ts`
- Czas ładowania / animacja → bezpośrednio w pliku strony

---

## 8. Paywall i checkout

### URL checkout

Format URL jest zdefiniowany w `lib/quiz-config.ts`:

```ts
checkout: (lang, slug, planId) =>
  `https://myapp.com/${lang}-tcwalk-${slug}-${planId}`
```

Przykład wygenerowanego URL: `https://myapp.com/en-tcwalk-checkout-28d`

### Plany cenowe

Stała `PLANS` w `PaywallContent.tsx`:

```ts
const PLANS = [
  { id: '28d', discount: '83%', total: '€8.80', origTotal: '€51.67', perDay: '€0.31' },
  { id: '12w', discount: '75%', total: '€18.08', origTotal: '€72.34', perDay: '€0.21' },
  { id: '24w', discount: '70%', total: '€27.17', origTotal: '€90.58', perDay: '€0.16' },
]
```

Nazwy planów i opisy są w tłumaczeniach (`lib/paywall-copy.ts` → `plans[].name` / `plans[].desc`).

---

## 9. Panel admina

### Dostęp

URL: `/admin`  
Hasło: zmienna środowiskowa `ADMIN_PASSWORD` w `.env`

### Co można edytować przez admin

Admin pozwala edytować **wszystkie teksty quizu w czasie rzeczywistym** bez redeploya.  
Zmiany są zapisywane do `translations-data/current/[lang].json` (gitignorowane — nie nadpisują się przy deployu).

Sekcje w adminie (w kolejności flow quizu):
1. **Intro** — strona startowa
2. **Steps** — kroki 1–30
3. **StepPage** — meta-teksty kroków (BMI, walidacja)
4. **Loading** — ekrany ładowania + recenzje w karuzeli
5. **Result** — ekran wyników
6. **Results 28** — wyniki 28-dniowe
7. **Wellness** — profil wellness
8. **Email** — capture email
9. **Paywall** — paywall + success stories
10. **UI** — przyciski, nagłówki (Dalej, Wstecz, Pomiń)

### Jak działają override'y

System override'ów: `lib/use-translation-overrides.ts`

1. Przy każdym załadowaniu strony quizu → `GET /api/translations/[lang]`
2. API zwraca flat JSON z kluczami jak `intro.headline`, `paywall.cta`
3. `applyFlatSection()` / `applyPaywallOverrides()` nakłada overrides na bazowe tłumaczenia

---

## 10. Najczęstsze problemy z historii git

Te błędy pojawiły się podczas tworzenia obecnego quizu. Traktuj to jako listę ostrzeżeń.

### Problem: Admin edits nie aktualizują quizu w real-time
**Przyczyna:** Hook `useTranslationOverrides` miał stale `started` flag — nie re-fetchował po nawigacji.  
**Rozwiązanie:** Flaga `fetching` w Zustand zamiast module-level; każde montowanie strony triggeruje fresh fetch.  
**Plik:** `lib/use-translation-overrides.ts`

### Problem: Tłumaczenia z admina nadpisywane przez deploy
**Przyczyna:** `translations-data/` było śledzone przez git — push nadpisywał produkcyjne zmiany.  
**Rozwiązanie:** `translations-data/` dodane do `.gitignore`.  
**Plik:** `.gitignore`

### Problem: Paywall stories nie stosowały override'ów
**Przyczyna:** `PAYWALL_STORIES` był ładowany bezpośrednio z stałej, z pominięciem systemu override'ów.  
**Rozwiązanie:** Dodano `applyStoriesOverrides()` wołane w `PaywallContent`.  
**Plik:** `lib/use-translation-overrides.ts`, `PaywallContent.tsx`

### Problem: Recenzje na loading i paywall były powiązane
**Przyczyna:** Oba widoki używały tych samych kluczy `reviews.*` w adminie.  
**Rozwiązanie:** Loading używa `loading.reviews.*`, paywall stories używa `paywall.stories.*` — dwa niezależne zestawy.  
**Pliki:** `lib/reviews-data.ts`, `lib/paywall-stories-data.ts`

### Problem: Hardcoded angielski tekst w komponentach
**Przyczyna:** Kopiowanie kodu bez tłumaczenia kluczy, szybkie poprawki bezpośrednio w JSX.  
**Rozwiązanie:** Pre-commit hook `scripts/validate-i18n.js` wyłapuje hardcoded EN strings w komponentach.  
**Zasada:** Żaden string użytkownikowy nie powinien być w JSX na twardo — tylko klucze z `t.xxx`.

### Problem: URL checkout i privacy hardcoded w 5 plikach
**Przyczyna:** Brak centralnej konfiguracji — każdy komponent miał własną kopię URL.  
**Rozwiązanie:** Wszystkie URL-e są teraz wyłącznie w `lib/quiz-config.ts → QUIZ_URLS`.

### Problem: Next.js build error — `params` async w page props
**Przyczyna:** Next.js 14+ wymaga async params w server components, ale paywall był `'use client'` i używał `useParams()` hook zamiast props.  
**Rozwiązanie:** Wydzielenie `PaywallContent` jako osobnego komponentu klienckiego.

### Problem: Pasek językowy nie zmieniał języka na paywallu
**Przyczyna:** Paywall czytał `lang` z URL params ale nie synchronizował ze store'em.  
**Rozwiązanie:** `useEffect(() => setLang(langFromUrl), [langFromUrl])` przy montowaniu.

---

## 11. Checklist przed deploym

```
[ ] lib/quiz-config.ts — zmienione BRAND_NAMES, QUIZ_URLS, PAGE_META
[ ] app/globals.css — zmieniony --color-primary i pozostałe zmienne marki
[ ] app/layout.tsx — poprawny font (jeśli zmieniony)
[ ] lib/i18n.ts — kompletne tłumaczenia dla wszystkich aktywnych języków
[ ] lib/paywall-copy.ts — kompletne tłumaczenia paywall
[ ] lib/reviews-data.ts — recenzje w każdym aktywnym języku
[ ] lib/quiz-data.ts — struktura kroków gotowa
[ ] public/images/ — wszystkie obrazy podmienione
[ ] .env — ADMIN_PASSWORD ustawiony
[ ] translations-data/ — NIE w git (sprawdź .gitignore)
[ ] node scripts/validate-i18n.js — brak błędów
[ ] npx tsc --noEmit — brak błędów TypeScript
[ ] npm run build — build przechodzi
```

---

## Szybka mapa plików

| Chcę zmienić... | Edytuję... |
|----------------|-----------|
| Nazwę marki | `lib/quiz-config.ts` → `BRAND_NAMES` |
| URL polityki prywatności | `lib/quiz-config.ts` → `QUIZ_URLS.privacyPolicy` |
| URL checkout | `lib/quiz-config.ts` → `QUIZ_URLS.checkout` |
| Email supportu | `lib/quiz-config.ts` → `BRAND_SUPPORT_EMAIL` |
| Aktywne języki | `lib/quiz-config.ts` → `ACTIVE_LANGUAGES` |
| Kolor główny | `app/globals.css` → `--color-primary` |
| Font | `app/layout.tsx` → import z `next/font/google` |
| Meta title/description | `lib/quiz-config.ts` → `PAGE_META` |
| Pytania quizu | `lib/quiz-data.ts` |
| Tłumaczenia kroków | `lib/i18n.ts` |
| Tłumaczenia paywall | `lib/paywall-copy.ts` |
| Plany cenowe (kwoty) | `app/quiz/paywall/PaywallContent.tsx` → `PLANS` |
| Success stories | `lib/paywall-stories-data.ts` |
| Recenzje (karuzela) | `lib/reviews-data.ts` |
| Obrazy | `public/images/` |
| Hasło admina | `.env` → `ADMIN_PASSWORD` |
