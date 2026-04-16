import type { LangCode } from '@/lib/lang-store'
import { ACTIVE_LANGUAGES } from '@/lib/quiz-config'

export type Review = { photo: string; name: string; text: string; stars: number }

export const REVIEW_PHOTOS = [
  'https://i.pravatar.cc/96?img=47',
  'https://i.pravatar.cc/96?img=44',
  'https://i.pravatar.cc/96?img=53',
  'https://i.pravatar.cc/96?img=32',
  'https://i.pravatar.cc/96?img=56',
]

const EN_REVIEWS: Review[] = [
  {
    name: 'Elena, 41',
    text: 'I really enjoyed this plan. By following it, I was able to lose weight in 28 days. The meals were simple, tasty, and easy to make.',
    stars: 5,
    photo: REVIEW_PHOTOS[0],
  },
  {
    name: 'Marina, 33',
    text: 'The meals were easy to follow. It made the whole challenge feel much easier for me.',
    stars: 5,
    photo: REVIEW_PHOTOS[1],
  },
  {
    name: 'Daniel, 56',
    text: 'It fit into my busy life. This challenge was easy to follow, even on busy days.',
    stars: 5,
    photo: REVIEW_PHOTOS[2],
  },
  {
    name: 'Sarah, 38',
    text: 'It gave me a good start. This challenge helped me get back on track and take care of myself again.',
    stars: 5,
    photo: REVIEW_PHOTOS[3],
  },
]

export const REVIEWS: Record<LangCode, Review[]> = {
  en: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", text: "I really enjoyed this plan. By following it, I was able to lose weight in 28 days. The meals were simple, tasty, and easy to make.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", text: "The meals were easy to follow. It made the whole challenge feel much easier for me.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", text: "It fit into my busy life. This challenge was easy to follow, even on busy days.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", text: "It gave me a good start. This challenge helped me get back on track and take care of myself again.", stars: 5 }
  ],
  lt: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", text: "Man labai patiko šis planas. Laikydamasi jo, per 28 dienas numečiau svorio. Patiekalai buvo paprasti, skanūs ir lengvai paruošiami.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", text: "Patiekalų receptai buvo lengvai suprantami. Dėl to man šis iššūkis buvo daug lengvesnis.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Danielius, 56", text: "Tai puikiai tiko mano užimtam gyvenimo būdui. Iššūkio laikytis buvo lengva net ir tomis dienomis, kai trūko laiko.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sara, 38", text: "Tai suteikė puikią pradžią. Šis iššūkis padėjo man vėl pasirūpinti savimi ir grįžti prie sveikų įpročių.", stars: 5 }
  ],
  lv: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", text: "Man ļoti patika šis plāns. Sekojot tam, es spēju zaudēt svaru 28 dienās. Maltītes bija vienkāršas, garšīgas un viegli pagatavojamas.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", text: "Maltītes bija viegli saprotamas. Tas man padarīja visu izaicinājumu daudz vieglāku.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniels, 56", text: "Tas iederējās manā aizņemtajā dzīvē. Šim izaicinājumam bija viegli sekot pat saspringtās dienās.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sāra, 38", text: "Tas man sniedza labu sākumu. Šis izaicinājums palīdzēja man atgriezties uz pareizā ceļa un atkal parūpēties par sevi.", stars: 5 }
  ],
  ro: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", text: "Mi-a plăcut mult acest plan. Urmându-l, am reușit să slăbesc în 28 de zile. Mesele au fost simple, gustoase și ușor de preparat.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", text: "Mesele au fost ușor de urmărit. Mi-au făcut întreaga provocare mult mai ușoară.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", text: "S-a integrat în viața mea agitată. Această provocare a fost ușor de urmat, chiar și în zilele ocupate.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", text: "Mi-a oferit un început bun. Această provocare m-a ajutat să revin pe drumul cel bun și să am grijă de mine din nou.", stars: 5 }
  ],
  cz: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", text: "Tento plán jsem si opravdu užila. Pomohl mi zhubnout za 28 dní. Jídla byla jednoduchá, chutná a snadno se připravovala.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", text: "Recepty byly srozumitelné. Díky tomu byla celá výzva pro mě mnohem jednodušší.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", text: "Zapadlo to do mého uspěchaného života. Tuto výzvu bylo snadné dodržovat i během rušných dní.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", text: "Dalo mi to dobrý start. Tato výzva mi pomohla vrátit se na správnou cestu a opět se o sebe starat.", stars: 5 }
  ],
  dk: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", text: "Jeg nød virkelig denne plan. Ved at følge den kunne jeg tabe mig på 28 dage. Måltiderne var enkle, velsmagende og nemme at lave.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", text: "Måltiderne var nemme at følge. Det gjorde hele udfordringen meget lettere for mig.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", text: "Det passede ind i mit travle liv. Denne udfordring var nem at følge, selv på travle dage.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", text: "Det gav mig en god start. Denne udfordring hjalp mig med at komme tilbage på sporet og passe på mig selv igen.", stars: 5 }
  ],
  gr: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Έλενα, 41", text: "Μου άρεσε πολύ αυτό το πρόγραμμα. Ακολουθώντας το, κατάφερα να χάσω βάρος σε 28 μέρες. Τα γεύματα ήταν απλά, νόστιμα και εύκολα στην προετοιμασία.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Μαρίνα, 33", text: "Τα γεύματα ήταν εύκολα στην παρασκευή. Έκανε την όλη πρόκληση να φαίνεται πολύ πιο εύκολη για μένα.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Δανιήλ, 56", text: "Ταίριαξε στην πολυάσχολη ζωή μου. Αυτή η πρόκληση ήταν εύκολη να την ακολουθήσω, ακόμη και σε πολυάσχολες μέρες.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Σάρα, 38", text: "Μου έδωσε μια καλή αρχή. Αυτή η πρόκληση με βοήθησε να μπω ξανά σε πρόγραμμα και να φροντίσω ξανά τον εαυτό μου.", stars: 5 }
  ],
  hu: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", text: "Nagyon élveztem ezt a tervet. A követésével 28 nap alatt fogytam. Az ételek egyszerűek, finomak och könnyen elkészíthetők voltak.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", text: "Könnyű volt tartani az étkezéseket. Az egész kihívás így sokkal egyszerűbbnek tűnt.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", text: "Belefért a pörgős hétköznapjaimba is. Még a zsúfolt napokon is könnyű volt követni.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", text: "Jó kezdést adott. Segített visszatalálni a helyes útra och újra jobban odafigyelni magamra.", stars: 5 }
  ],
  hr: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", text: "Zaista sam uživala u ovom planu. Slijedeći ga, uspjela sam smršaviti u 28 dana. Obroci su bili jednostavni, ukusni i laki za pripremu.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", text: "Obroci su bili jednostavni za pratiti. Čitav izazov mi se činio mnogo lakšim.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", text: "Uklopilo se u moj užurbani život. Ovaj izazov bilo je lako pratiti, čak i u zaposlenim danima.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", text: "Dalo mi je dobar početak. Ovaj izazov pomogao mi je da se vratim na pravi put i ponovno brinem o sebi.", stars: 5 }
  ],
  il: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "אלנה, 41", text: "ממש נהניתי מהתוכנית הזו. בזכותה הצלחתי לרדת במשקל בתוך 28 ימים. הארוחות היו פשוטות, טעימות וקלות להכנה.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "מרינה, 33", text: "היה קל מאוד לעקוב אחר הארוחות. זה הפך את כל האתגר להרבה יותר פשוט עבורי.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "דניאל, 56", text: "זה השתלב בחיים העמוסים שלי. היה קל לעקוב אחר האתגר הזה, אפילו בימים לחוצים.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "שרה, 38", text: "זה נתן לי התחלה טובה. האתגר הזה עזר לי לחזור למסלול ולדאוג לעצמי שוב.", stars: 5 }
  ],
  jp: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "エレナ、41歳", text: "このプランを本当に楽しみました。これに従うことで、28日間で体重を減らすことができました。食事はシンプルで美味しく、作りやすかったです。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "マリーナ、33歳", text: "食事管理がしやすかったです。そのおかげでチャレンジ全体がとても楽に感じられました。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "ダニエル、56歳", text: "忙しい生活にフィットしました。忙しい日でも、このチャレンジは続けやすかったです。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "サラ、38歳", text: "良いスタートが切れました。このチャレンジのおかげで、元の軌道に戻り、再び自分を大切にすることができました。", stars: 5 }
  ],
  ru: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Елена, 41 год", text: "Мне очень понравился этот план. Следуя ему, я смогла сбросить вес за 28 дней. Блюда были простыми, вкусными и легкими в приготовлении.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Марина, 33 года", text: "Блюдам было легко следовать. Это сделало весь челлендж намного проще для меня.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Даниил, 56 лет", text: "Это вписалось в мою насыщенную жизнь. Этому челленджу было легко следовать даже в самые загруженные дни.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Сара, 38 лет", text: "Это дало мне хороший старт. Этот челлендж помог мне вернуться в колею и снова начать заботиться о себе.", stars: 5 }
  ],
  sk: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", text: "Tento plán som si naozaj užila. Pomohol mi schudnúť za 28 dní. Jedlá boli jednoduché, chutné a ľahko sa pripravovali.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", text: "Recepty boli zrozumiteľné. Vďaka tomu bola celá výzva pre mňa oveľa jednoduchšia.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", text: "Zapadlo to do môjho uponáhľaného života. Túto výzvu bolo ľahké dodržiavať aj počas rušných dní.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", text: "Dalo mi to dobrý štart. Táto výzva mi pomohla vrátiť sa na správnu cestu a opäť sa o seba starať.", stars: 5 }
  ],
  tw: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena，41 歲", text: "我非常喜歡這個計畫。透過遵循它，我能夠在 28 天內減輕體重。飯菜很簡單、美味且易於製作。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina，33 歲", text: "飯菜很容易上手。這讓整個挑戰對我來說變得容易得多。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel，56 歲", text: "它融入了我忙碌的生活。即使在忙碌的日子裡，這個挑戰也很容易遵循。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah，38 歲", text: "它給了我一個很好的開始。這個挑戰幫助我回到正軌並再次照顧好自己。", stars: 5 }
  ]
}
