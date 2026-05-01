import type { LangCode } from '@/lib/lang-store'
import { ACTIVE_LANGUAGES } from '@/lib/quiz-config'

export type Review = { photo: string; name: string; title?: string; text: string; stars: number }

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
    title: 'I really enjoyed this plan',
    text: 'I really liked the Personalized Zero Carbs Challenge. By following the plan, I was able to lose weight in 28 days. The app was easy to use, and the meals were simple, tasty, and easy to make.',
    stars: 5,
    photo: REVIEW_PHOTOS[0],
  },
  {
    name: 'Marina, 33',
    title: 'The meals were easy to follow',
    text: 'I liked that the meals were simple and did not take much time to make. It made the whole challenge feel easier for me.',
    stars: 5,
    photo: REVIEW_PHOTOS[1],
  },
  {
    name: 'Daniel, 56',
    title: 'It fit into my busy life',
    text: 'I do not have a lot of free time, so I needed something simple. This challenge was easy to follow, even on busy days.',
    stars: 5,
    photo: REVIEW_PHOTOS[2],
  },
  {
    name: 'Sarah, 38',
    title: 'It gave me a good start',
    text: 'This challenge helped me get back on track. It gave me the push I needed to start taking care of myself again.',
    stars: 5,
    photo: REVIEW_PHOTOS[3],
  },
]

export const REVIEWS: Record<LangCode, Review[]> = {
  en: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", title: "I really enjoyed this plan", text: "I really liked the Personalized Zero Carbs Challenge. By following the plan, I was able to lose weight in 28 days. The app was easy to use, and the meals were simple, tasty, and easy to make.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", title: "The meals were easy to follow", text: "I liked that the meals were simple and did not take much time to make. It made the whole challenge feel easier for me.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", title: "It fit into my busy life", text: "I do not have a lot of free time, so I needed something simple. This challenge was easy to follow, even on busy days.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", title: "It gave me a good start", text: "This challenge helped me get back on track. It gave me the push I needed to start taking care of myself again.", stars: 5 }
  ],
  lt: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", title: "Man labai patiko šis planas", text: "Man labai patiko individualizuotas Zero Carbs iššūkis. Laikydamasi plano, per 28 dienas numečiau svorio. Programėlė buvo lengvai naudojama, o patiekalai – paprasti, skanūs ir nesudėtingai paruošiami.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", title: "Patiekalai buvo lengvai suprantami", text: "Man patiko, kad patiekalai buvo paprasti ir nereikalavo daug laiko. Dėl to visas iššūkis man buvo daug lengvesnis.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Danielius, 56", title: "Tai puikiai tiko mano užimtam gyvenimui", text: "Neturiu daug laisvo laiko, todėl man reikėjo kažko paprasto. Šį iššūkį buvo lengva laikytis net ir tomis dienomis, kai labai užimta.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sara, 38", title: "Tai suteikė puikią pradžią", text: "Šis iššūkis padėjo man grįžti į vėžes. Jis davė man impulsą, kurio reikėjo, kad vėl pradėčiau rūpintis savimi.", stars: 5 }
  ],
  lv: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", title: "Man ļoti patika šis plāns", text: "Man ļoti patika personalizētais Zero Carbs izaicinājums. Sekojot plānam, es spēju zaudēt svaru 28 dienās. Lietotne bija ērta, un maltītes bija vienkāršas, garšīgas un viegli pagatavojamas.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", title: "Maltītes bija viegli saprotamas", text: "Man patika, ka maltītes bija vienkāršas un neaizņēma daudz laika. Tas padarīja visu izaicinājumu daudz vieglāku man.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniels, 56", title: "Tas iederējās manā aizņemtajā dzīvē", text: "Man nav daudz brīvā laika, tāpēc man bija vajadzīgs kaut kas vienkāršs. Šim izaicinājumam bija viegli sekot pat saspringtās dienās.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sāra, 38", title: "Tas man sniedza labu sākumu", text: "Šis izaicinājums palīdzēja man atgriezties pareizā ceļā. Tas man deva vajadzīgo stimulu, lai sāktu atkal parūpēties par sevi.", stars: 5 }
  ],
  ro: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", title: "Mi-a plăcut mult acest plan", text: "Mi-a plăcut foarte mult Provocarea personalizată Zero Carbs. Urmând planul, am reușit să slăbesc în 28 de zile. Aplicația a fost ușor de folosit, iar mesele au fost simple, gustoase și ușor de preparat.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", title: "Mesele au fost ușor de urmărit", text: "Mi-a plăcut că mesele erau simple și nu necesitau mult timp. Asta a făcut întreaga provocare să pară mai ușoară pentru mine.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", title: "S-a integrat în viața mea agitată", text: "Nu am mult timp liber, așa că aveam nevoie de ceva simplu. Această provocare a fost ușor de urmat, chiar și în zilele aglomerate.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", title: "Mi-a oferit un început bun", text: "Această provocare m-a ajutat să revin pe drumul cel bun. Mi-a dat impulsul de care aveam nevoie pentru a începe să am grijă din nou de mine.", stars: 5 }
  ],
  cz: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", title: "Tento plán se mi opravdu líbil", text: "Opravdu se mi líbila personalizovaná výzva Zero Carbs. Díky dodržování plánu jsem dokázala zhubnout za 28 dní. Aplikace se snadno používala a jídla byla jednoduchá, chutná a snadno se připravovala.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", title: "Jídla byla snadno sledovatelná", text: "Líbilo se mi, že jídla byla jednoduchá a nepotřebovala mnoho času. Díky tomu se celá výzva zdála pro mě mnohem jednodušší.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", title: "Zapadlo to do mého rušného života", text: "Nemám mnoho volného času, takže jsem potřeboval/a něco jednoduchého. Tuto výzvu bylo snadné dodržovat i během rušných dní.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", title: "Dalo mi to dobrý start", text: "Tato výzva mi pomohla vrátit se na správnou cestu. Dala mi impuls, který jsem potřeboval/a, abych znovu začal/a o sebe pečovat.", stars: 5 }
  ],
  dk: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", title: "Jeg nød virkelig denne plan", text: "Jeg kunne virkelig godt lide den personlige Zero Carbs-udfordring. Ved at følge planen lykkedes det mig at tabe mig på 28 dage. Appen var nem at bruge, og måltiderne var enkle, velsmagende og nemme at lave.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", title: "Måltiderne var nemme at følge", text: "Jeg kunne lide, at måltiderne var enkle og ikke tog meget tid. Det fik hele udfordringen til at virke lettere for mig.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", title: "Det passede ind i mit travle liv", text: "Jeg har ikke meget fritid, så jeg havde brug for noget enkelt. Denne udfordring var nem at følge, selv på travle dage.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", title: "Det gav mig en god start", text: "Denne udfordring hjalp mig med at komme tilbage på sporet. Den gav mig det skub, jeg havde brug for til at begynde at passe på mig selv igen.", stars: 5 }
  ],
  gr: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Έλενα, 41", title: "Μου άρεσε πολύ αυτό το πρόγραμμα", text: "Μου άρεσε πολύ η εξατομικευμένη πρόκληση Zero Carbs. Ακολουθώντας το πρόγραμμα, κατάφερα να χάσω βάρος σε 28 μέρες. Η εφαρμογή ήταν εύχρηστη και τα γεύματα ήταν απλά, νόστιμα και εύκολα στην προετοιμασία.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Μαρίνα, 33", title: "Τα γεύματα ήταν εύκολα στην παρασκευή", text: "Μου άρεσε που τα γεύματα ήταν απλά και δεν χρειάζονταν πολύ χρόνο. Αυτό έκανε την όλη πρόκληση να φαίνεται πιο εύκολη για μένα.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Δανιήλ, 56", title: "Ταίριαξε στην πολυάσχολη ζωή μου", text: "Δεν έχω πολύ ελεύθερο χρόνο, οπότε χρειαζόμουν κάτι απλό. Αυτή η πρόκληση ήταν εύκολη να ακολουθηθεί, ακόμη και σε πολυάσχολες μέρες.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Σάρα, 38", title: "Μου έδωσε μια καλή αρχή", text: "Αυτή η πρόκληση με βοήθησε να επιστρέψω στον σωστό δρόμο. Μου έδωσε την ώθηση που χρειαζόμουν για να αρχίσω πάλι να φροντίζω τον εαυτό μου.", stars: 5 }
  ],
  hu: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", title: "Nagyon élveztem ezt a tervet", text: "Nagyon tetszett a személyre szabott Zero Carbs kihívás. A tervet követve sikerült 28 nap alatt fogynom. Az alkalmazás könnyen kezelhető volt, az ételek pedig egyszerűek, finomak és könnyen elkészíthetők.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", title: "Könnyű volt az étrendet követni", text: "Tetszett, hogy az ételek egyszerűek voltak és nem igényeltek sok időt. Ez az egész kihívást sokkal könnyebbé tette számomra.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", title: "Belefért a zsúfolt hétköznapjaimba is", text: "Nincs sok szabadidőm, ezért valami egyszerűre volt szükségem. Ezt a kihívást könnyű volt követni még a zsúfolt napokon is.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", title: "Jó kezdést adott nekem", text: "Ez a kihívás segített visszatalálni a helyes útra. Megadta azt a lökést, amire szükségem volt ahhoz, hogy újra elkezdjem magamra figyelni.", stars: 5 }
  ],
  hr: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", title: "Zaista sam uživala u ovom planu", text: "Zaista mi se svidio personalizirani Zero Carbs izazov. Slijedeći plan, uspjela sam smršaviti u 28 dana. Aplikacija je bila jednostavna za korištenje, a obroci su bili jednostavni, ukusni i laki za pripremu.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", title: "Obroci su bili jednostavni za pratiti", text: "Svidjelo mi se što su obroci bili jednostavni i nisu trebali puno vremena. To je cijeli izazov učinilo lakšim za mene.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", title: "Uklopilo se u moj užurbani život", text: "Nemam puno slobodnog vremena, pa mi je trebalo nešto jednostavno. Ovaj izazov bilo je lako pratiti, čak i u zaposlenim danima.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", title: "Dalo mi je dobar početak", text: "Ovaj izazov pomogao mi je da se vratim na pravi put. Dao mi je poticaj koji sam trebala za ponovni početak brige o sebi.", stars: 5 }
  ],
  il: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "אלנה, 41", title: "ממש נהניתי מהתוכנית הזו", text: "ממש אהבתי את אתגר Zero Carbs המותאם אישית. בעקבות התוכנית, הצלחתי לרדת במשקל תוך 28 ימים. האפליקציה הייתה קלה לשימוש, והארוחות היו פשוטות, טעימות וקלות להכנה.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "מרינה, 33", title: "היה קל לעקוב אחר הארוחות", text: "אהבתי שהארוחות היו פשוטות ולא לקחו הרבה זמן. זה הפך את כל האתגר לקל יותר עבורי.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "דניאל, 56", title: "זה השתלב בחיים העמוסים שלי", text: "אין לי הרבה זמן פנוי, אז הייתי צריך/ה משהו פשוט. היה קל לעקוב אחר האתגר הזה, אפילו בימים לחוצים.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "שרה, 38", title: "זה נתן לי התחלה טובה", text: "האתגר הזה עזר לי לחזור למסלול. הוא נתן לי את הדחיפה שהייתי צריך/ה כדי להתחיל לדאוג לעצמי שוב.", stars: 5 }
  ],
  jp: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "エレナ、41歳", title: "このプランを本当に楽しみました", text: "パーソナライズされたZero Carbs チャレンジがとても気に入りました。プランに従うことで、28日間で体重を減らすことができました。アプリは使いやすく、食事はシンプルで美味しく、作りやすかったです。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "マリーナ、33歳", title: "食事管理がしやすかったです", text: "食事がシンプルで時間がかからないのが良かったです。それがチャレンジ全体を私にとってより簡単に感じさせてくれました。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "ダニエル、56歳", title: "忙しい生活にフィットしました", text: "あまり自由な時間がないので、シンプルなものが必要でした。このチャレンジは忙しい日でも続けやすかったです。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "サラ、38歳", title: "良いスタートが切れました", text: "このチャレンジのおかげで、元の軌道に戻ることができました。再び自分を大切にするために必要な後押しをしてくれました。", stars: 5 }
  ],
  ru: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Елена, 41 год", title: "Этот план мне очень понравился", text: "Мне очень понравился персонализированный челлендж Zero Carbs. Следуя плану, я смогла сбросить вес за 28 дней. Приложение было удобным, а блюда — простыми, вкусными и лёгкими в приготовлении.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Марина, 33 года", title: "Блюда были простыми в приготовлении", text: "Мне понравилось, что блюда были простыми и не занимали много времени. Это сделало весь челлендж намного проще для меня.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Даниил, 56 лет", title: "Это вписалось в мою насыщенную жизнь", text: "У меня не так много свободного времени, поэтому мне нужно было что-то простое. Этому челленджу было легко следовать даже в самые загруженные дни.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Сара, 38 лет", title: "Это дало мне хороший старт", text: "Этот челлендж помог мне вернуться в нужное русло. Он дал мне толчок, который был нужен, чтобы снова начать заботиться о себе.", stars: 5 }
  ],
  sk: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena, 41", title: "Tento plán sa mi naozaj páčil", text: "Naozaj sa mi páčila personalizovaná výzva Zero Carbs. Vďaka dodržiavaniu plánu sa mi podarilo schudnúť za 28 dní. Aplikácia bola ľahko ovládateľná a jedlá boli jednoduché, chutné a ľahko sa pripravovali.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina, 33", title: "Jedlá bolo ľahko dodržiavateľné", text: "Páčilo sa mi, že jedlá boli jednoduché a nepotrebovali veľa času. Vďaka tomu sa celá výzva zdala oveľa jednoduchšia.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel, 56", title: "Zapadlo to do môjho uponáhľaného života", text: "Nemám veľa voľného času, takže som potreboval/a niečo jednoduché. Túto výzvu bolo ľahké dodržiavať aj počas rušných dní.", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah, 38", title: "Dal mi to dobrý štart", text: "Táto výzva mi pomohla vrátiť sa na správnu cestu. Dala mi impulz, ktorý som potreboval/a, aby som znovu začal/a o seba dbať.", stars: 5 }
  ],
  tw: [
    { photo: "https://i.pravatar.cc/96?img=47", name: "Elena，41 歲", title: "我非常喜歡這個計畫", text: "我非常喜歡個人化的 Zero Carbs 挑戰。透過遵循計畫，我能夠在 28 天內減輕體重。應用程式易於使用，飯菜簡單、美味且易於製作。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=44", name: "Marina，33 歲", title: "飯菜很容易上手", text: "我喜歡飯菜簡單且不需要太多時間。這讓整個挑戰對我來說感覺更容易了。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=53", name: "Daniel，56 歲", title: "它融入了我忙碌的生活", text: "我沒有很多空閒時間，所以我需要一些簡單的東西。即使在忙碌的日子裡，這個挑戰也很容易遵循。", stars: 5 },
    { photo: "https://i.pravatar.cc/96?img=32", name: "Sarah，38 歲", title: "它給了我一個很好的開始", text: "這個挑戰幫助我回到正軌。它給了我所需要的推動力，讓我重新開始照顧自己。", stars: 5 }
  ]
}
