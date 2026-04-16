import type { LangCode } from '@/lib/lang-store'
import { REVIEW_PHOTOS } from '@/lib/reviews-data'

export type PaywallStory = {
  photo: string
  name: string
  text: string
  stars: number
}

export const PAYWALL_STORIES: Record<LangCode, PaywallStory[]> = {
  en: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena, 41", text: "I felt heavy and bloated all the time. This plan helped me keep things simple and stay consistent.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina, 33", text: "I liked that it felt personal and easy to follow. Seeing changes early kept me motivated.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Daniel, 56", text: "I wanted something simple that worked in real life. The meals were easy and the support helped a lot.", stars: 5 }
  ],
  lt: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena, 41", text: "Visą laiką jaučiausi pavargusi ir išsipūtusi. Šis planas padėjo man laikytis režimo ir jaustis geriau.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina, 33", text: "Man patiko, kad planas buvo asmeniškas ir lengvai suprantamas. Pirmieji pokyčiai skatino judėti pirmyn.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Danielius, 56", text: "Ieškojau kažko paprasto, kas veiktų gyvenime. Receptai buvo lengvi, o palaikymas man labai padėjo.", stars: 5 }
  ],
  lv: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena, 41", text: "Es visu laiku jutos smaga un uzpūtusies. Šis plāns man palīdzēja saglabāt vienkāršību un būt konsekventai.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina, 33", text: "Man patika, ka tas šķita personisks un viegli saprotams. Agras izmaiņas motivēja mani turpināt.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Daniels, 56", text: "Es gribēju kaut ko vienkāršu, kas darbojas reālajā dzīvē. Maltītes bija vieglas un atbalsts ļoti palīdzēja.", stars: 5 }
  ],
  ro: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena, 41", text: "Mă simțeam greoaie și balonată tot timpul. Acest plan m-a ajutat să păstrez lucrurile simple și să fiu consecventă.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina, 33", text: "Mi-a plăcut faptul că s-a simțit personalizat și ușor de urmărit. Faptul că am văzut schimbări timpurii m-a menținut motivată.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Daniel, 56", text: "Mi-am dorit ceva simplu care să funcționeze în viața reală. Mesele au fost ușoare, iar asistența a ajutat mult.", stars: 5 }
  ],
  cz: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena, 41", text: "Neustále jsem se cítila těžce a nafouknutě. Tento plán mi pomohl udržet věci jednoduché a být důsledná.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina, 33", text: "Líbilo se mi, že to bylo osobní a snadno srozumitelné. Viditelné změny již v začátcích mě motivovaly pokračovat.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Daniel, 56", text: "Chtěl jsem něco jednoduchého, co funguje v reálném životě. Recepty byly lehké a podpora mi velmi pomohla.", stars: 5 }
  ],
  dk: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena, 41", text: "Jeg følte mig tung og oppustet hele tiden. Denne plan hjalp mig med at holde tingene enkle og forblive vedholdende.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina, 33", text: "Jeg kunne godt lide, at det føltes personligt og nemt at følge. At se forandringer tidligt holdt mig motiveret.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Daniel, 56", text: "Jeg ønskede noget enkelt, der virkede i det virkelige liv. Måltiderne var nemme, og supporten hjalp meget.", stars: 5 }
  ],
  gr: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Έλενα, 41", text: "Ένιωθα βαριά και φουσκωμένη όλη την ώρα. Αυτό το πρόγραμμα με βοήθησε να κρατήσω τα πράγματα απλά και να παραμείνω συνεπής.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Μαρίνα, 33", text: "Μου άρεσε που το ένιωθα προσωπικό και ήταν εύκολο να το ακολουθήσω. Βλέποντας αλλαγές από νωρίς, διατήρησα το κίνητρό μου.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Δανιήλ, 56", text: "Ήθελα κάτι απλό που να λειτουργεί στην πραγματική ζωή. Τα γεύματα ήταν εύκολα και η υποστήριξη βοήθησε πολύ.", stars: 5 }
  ],
  hu: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena, 41", text: "Állandóan nehéznek och puffadtnak éreztem magam. Ez a terv segített egyszerűen tartani a dolgokat och következetesnek maradni.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina, 33", text: "Tetszett, hogy személyesnek érződött och könnyű volt követni. Az, hogy korán láttam változásokat, motivált maradtam.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Daniel, 56", text: "Olyasmit akartam, ami egyszerű och működik a való életben. Az ételek könnyűek voltak, a támogatás pedig sokat segített.", stars: 5 }
  ],
  hr: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena, 41", text: "Osjećala sam se teško i napuhnuto cijelo vrijeme. Ovaj plan mi je pomogao da stvari ostanu jednostavne i budem dosljedna.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina, 33", text: "Svidjelo mi se što se osjećalo personalizirano i lako za pratiti. To što sam rano vidjela promjene držalo me motiviranom.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Daniel, 56", text: "Želio sam nešto jednostavno što funkcionira u stvarnom životu. Obroci su bili lagani, a podrška je puno pomogla.", stars: 5 }
  ],
  il: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "אלנה, 41", text: "הרגשתי כבדה ונפוחה כל הזמן. התוכנית הזו עזרה לי לשמור על דברים פשוטים ולהישאר עקבית.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "מרינה, 33", text: "אהבתי את זה שזה הרגיש מותאם אישית וקל למעקב. לראות שינויים בשלב מוקדם נתן לי מוטיבציה להמשיך.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "דניאל, 56", text: "רציתי משהו פשוט שעובד בחיים האמיתיים. הארוחות היו קלות והתמיכה עזרה מאוד.", stars: 5 }
  ],
  jp: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "エレナ、41歳", text: "常に体が重く、膨満感を感じていました。このプランのおかげで、シンプルに、そして継続することができました。", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "マリーナ、33歳", text: "自分専用に感じられ、続けやすかったです。早い段階で変化が見られたので、モチベーションを維持できました。", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "ダニエル、56歳", text: "実生活で役立つシンプルなものを求めていました。食事は簡単で、サポートも非常に役立ちました。", stars: 5 }
  ],
  ru: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Елена, 41 год", text: "Я постоянно чувствовала тяжесть и вздутие. Этот план помог мне упростить задачу и сохранять дисциплину.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Марина, 33 года", text: "Мне понравилось, что программа была персонализированной и ей было легко следовать. Ранние изменения мотивировали меня продолжать.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Даниил, 56 лет", text: "Я хотел что-то простое, что работает в реальной жизни. Блюда были легкими в приготовлении, а поддержка очень помогла.", stars: 5 }
  ],
  sk: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena, 41", text: "Neustále som sa cítila ťažko a nafúknuto. Tento plán mi pomohol udržať veci jednoduché a byť dôsledná.", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina, 33", text: "Páčilo sa mi, že to bolo osobné a ľahko zrozumiteľné. Viditeľné zmeny už v začiatkoch ma motivovali pokračovať.", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Daniel, 56", text: "Chcel som niečo jednoduché, čo funguje v reálnom živote. Recepty boli ľahké a podpora mi veľmi pomohla.", stars: 5 }
  ],
  tw: [
    { photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png", name: "Elena，41 歲", text: "我一直感到沉重和浮腫。這個計畫幫助我保持簡單並保持一致。", stars: 5 },
    { photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png", name: "Marina，33 歲", text: "我喜歡它那種個人化且易於遵循的感覺。儘早看到變化讓我保持了動力。", stars: 5 },
    { photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png", name: "Daniel， 56 歲", text: "我想要一些在現實生活中行之有效的簡單東西。飯菜很容易準備，而且支援非常有幫助。", stars: 5 }
  ]
}
