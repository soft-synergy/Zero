import { LangCode } from '@/lib/lang-store'

export type Variant = 'base' | 'nb2' | 'nb3'

export interface PlanPricing {
  price: string
  oldPrice: string
  perDay: string
  renewalPrice: string
}

export type PricingMap = Record<LangCode, Record<'7d' | '1m' | '3m', Record<Variant, PlanPricing>>>

// Heuristics derived from the EN pricing:
// 7d: price $7.69, old $21.99 (factor ~2.85), perDay $1.09 (price/7)
// 1m: price $18.39, old $38.99 (factor ~2.1), perDay $0.61 (price/30)
// 3m: price $28.59, old $68.99 (factor ~2.4), perDay $0.31 (price/90)

function buildPlan(
  priceValue: number,
  currencyTag: string,
  variant: Variant,
  days: number,
  oldFactor: number,
  currencyPosition: 'before' | 'after' | 'jp' = 'before',
  decimalSymbol: string = '.'
): PlanPricing {
  const fmt = (v: number) => {
    // some currencies shouldn't have decimals if integer
    if (['HUF', 'JPY', 'TWD', 'ILS'].includes(currencyTag) || (['RON', 'DKK', 'CZK'].includes(currencyTag) && Math.round(v) === v)) {
      v = Math.round(v)
      return currencyPosition === 'before' ? `${currencyTag}${v}` : currencyPosition === 'jp' ? `${v} ${currencyTag}` : `${v} ${currencyTag}`
    }
    const str = v.toFixed(2).replace('.', decimalSymbol)
    return currencyPosition === 'before' ? `${currencyTag}${str}` : currencyPosition === 'jp' ? `${str} ${currencyTag}` : `${str} ${currencyTag}`
  }
  
  // Actually, we should calculate the oldPrice base from the 'base' price so it doesn't change across variants!
  return {
    price: fmt(priceValue),
    oldPrice: '', // calculated later
    perDay: fmt(priceValue / days) + (currencyTag === '$' ? '/day' : ''), // simplified, will adjust in component
    renewalPrice: '', // calculated later
  }
}

// Data from user's table
const rawData: Record<string, { cur: string, pos: 'before'|'after'|'jp', sep: string, 
  rates: [number, number, number, number, number, number, number, number, number] }> = {
  en: { cur: 'USD ', pos: 'before', sep: '.', rates: [7.69, 5.71, 4.17, 18.39, 10.13, 7.41, 28.59, 17.93, 13.11] },
  lt: { cur: '€', pos: 'after', sep: ',', rates: [7.69, 5.71, 4.17, 18.39, 10.13, 7.41, 28.59, 17.93, 13.11] },
  lv: { cur: '€', pos: 'after', sep: ',', rates: [7.69, 5.71, 4.17, 18.39, 10.13, 7.41, 28.59, 17.93, 13.11] },
  il: { cur: '₪', pos: 'before', sep: '.', rates: [27, 20, 15, 66, 37, 27, 103, 66, 48] },
  sk: { cur: '€', pos: 'after', sep: ',', rates: [7.69, 5.71, 4.17, 18.39, 10.13, 7.41, 28.59, 17.93, 13.11] },
  ro: { cur: 'lei', pos: 'after', sep: ',', rates: [39, 29, 21, 94, 52, 38, 147, 93, 68] },
  hu: { cur: 'Ft', pos: 'after', sep: ',', rates: [2953, 2193, 1603, 7031, 3890, 2842, 10010, 6982, 5102] },
  gr: { cur: '€', pos: 'after', sep: ',', rates: [7.69, 5.71, 4.17, 18.39, 10.13, 7.41, 28.59, 17.93, 13.11] },
  hr: { cur: '€', pos: 'after', sep: ',', rates: [7.69, 5.71, 4.17, 18.39, 10.13, 7.41, 28.59, 17.93, 13.11] },
  dk: { cur: 'kr', pos: 'after', sep: ',', rates: [57, 42, 31, 137, 76, 55, 214, 136, 99] },
  tw: { cur: 'NT$', pos: 'before', sep: '.', rates: [283, 210, 154, 678, 374, 273, 1054, 672, 490] },
  cz: { cur: 'Kč', pos: 'after', sep: ',', rates: [188, 140, 102, 449, 249, 182, 699, 446, 326] },
  ru: { cur: '€', pos: 'after', sep: ',', rates: [7.69, 5.71, 4.17, 18.39, 10.13, 7.41, 28.59, 17.93, 13.11] },
  jp: { cur: '円', pos: 'jp', sep: '.', rates: [1414, 1051, 768, 3369, 1864, 1362, 5257, 3346, 2445] },
}

export const PRICING: PricingMap = {} as PricingMap

for (const [lang, data] of Object.entries(rawData)) {
  const { cur, pos, sep, rates } = data as any
  const old7d = rates[0] * 2.859
  const old1m = rates[3] * 2.12
  const old3m = rates[6] * 2.413

  const build = (rBaseIdx: number, oldVal: number, days: number, txtDay: string) => {
    const vBase = buildPlan(rates[rBaseIdx], cur, 'base', days, 1, pos, sep)
    const vNb2 = buildPlan(rates[rBaseIdx+1], cur, 'nb2', days, 1, pos, sep)
    const vNb3 = buildPlan(rates[rBaseIdx+2], cur, 'nb3', days, 1, pos, sep)
    
    // Calculate the 'oldPrice' string using the same formatting but based on oldVal
    const fmtOld = buildPlan(oldVal, cur, 'base', 1, 1, pos, sep).price
    
    vBase.oldPrice = fmtOld
    vNb2.oldPrice = fmtOld
    vNb3.oldPrice = fmtOld

    vBase.renewalPrice = fmtOld
    vNb2.renewalPrice = fmtOld
    vNb3.renewalPrice = fmtOld

    // Format perDay properly for localization
    vBase.perDay = `${vBase.perDay.replace(cur, cur.trim()).replace('/day', '')} / ${txtDay}`
    vNb2.perDay = `${vNb2.perDay.replace(cur, cur.trim()).replace('/day', '')} / ${txtDay}`
    vNb3.perDay = `${vNb3.perDay.replace(cur, cur.trim()).replace('/day', '')} / ${txtDay}`

    return { base: vBase, nb2: vNb2, nb3: vNb3 }
  }

  // translation for "day"
  const dayStr = lang === 'en' ? 'day' :
                 lang === 'lt' ? 'd.' :
                 lang === 'lv' ? 'd.' :
                 lang === 'il' ? 'יום' :
                 lang === 'sk' ? 'deň' :
                 lang === 'ro' ? 'zi' :
                 lang === 'hu' ? 'nap' :
                 lang === 'gr' ? 'ημέρα' :
                 lang === 'hr' ? 'dan' :
                 lang === 'dk' ? 'dag' :
                 lang === 'tw' ? '天' :
                 lang === 'cz' ? 'den' :
                 lang === 'ru' ? 'день' :
                 lang === 'jp' ? '日' : 'day';

  PRICING[lang as LangCode] = {
    '7d': build(0, old7d, 7, dayStr),
    '1m': build(3, old1m, 30, dayStr),
    '3m': build(6, old3m, 90, dayStr),
  }
}
