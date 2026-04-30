import type { LangCode } from '@/lib/lang-store'

export type PaywallStory = {
  photo: string
  name: string
  text: string
  stars: number
}

export const PAYWALL_STORIES: Record<LangCode, PaywallStory[]> = {
  en: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena, 41",
      text: "I used to feel heavy, bloated, and upset with myself all the time. I would do well for a few days, then go back to eating sweets and snacks at night. The Personalized Zero Carbs Challenge helped me keep things simple. I did not have to overthink every meal, and that made it much easier to stay on track. After a few weeks, I felt lighter, more in control, and much better in my clothes. The best part was feeling proud of myself again.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina, 33",
      text: "Before this, I always felt like I was starting over. I knew what to eat, but I could never stay consistent for long. What I liked most was that the plan felt personal and easy to follow. It gave me structure, but it did not feel too strict or confusing. I started seeing changes early, and that gave me real motivation. Now I feel calmer around food and much more confident in myself.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Daniel, 56",
      text: "I had low energy and felt uncomfortable in my body. I wanted something simple that I could actually follow in real life. The Personalized Zero Carbs Challenge helped me make better choices without feeling overwhelmed. The meals were easy, and the support made the process feel more manageable. Now I feel lighter, more active, and more in control of my habits. I only wish I had started sooner.",
      stars: 5
    }
  ],
  lt: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena, 41",
      text: "Visą laiką jaučiausi sunki, išsipūtusi ir nepasitenkinta savimi. Kelis dienas elgdavausi gerai, bet paskui vėl grįždavau prie saldumynų ir užkandžių naktį. Personalizuotas Zero Carbs iššūkis padėjo man viską supaprastinti. Nereikėjo permąstyti kiekvieno valgio, ir tai labai palengvino laikymąsi. Po kelių savaičių jaučiausi lengvesnė, labiau valdanti save ir daug geriau savo drabužiuose. Geriausia buvo vėl pasijusti savimi patenkinta.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina, 33",
      text: "Anksčiau visada jaučiausi tarsi vėl pradedu iš naujo. Žinojau, ką valgyti, bet niekada negalėjau ilgai išlikti nuosekli. Labiausiai man patiko tai, kad planas atrodė asmeniškas ir lengvai sekamas. Jis suteikė man struktūrą, bet nebuvo per griežtas ar klaidinantis. Pradėjau matyti pokyčius anksti, ir tai suteikė tikrą motyvaciją. Dabar jaučiuosi ramesnė maisto atžvilgiu ir daug labiau pasitikinti savimi.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Danielius, 56",
      text: "Turėjau mažai energijos ir jaučiausi nejaukiai savo kūne. Norėjau kažko paprasto, ką galėčiau tikrai vykdyti kasdieniame gyvenime. Personalizuotas Zero Carbs iššūkis padėjo man priimti geresnius sprendimus nepasijuntant priblokštam. Valgiai buvo paprasti, o palaikymas padėjo procesą pajusti lengviau valdomą. Dabar jaučiuosi lengvesnis, aktyvesnis ir labiau kontroliuojantis savo įpročius. Norėčiau tik, kad būčiau pradėjęs anksčiau.",
      stars: 5
    }
  ],
  lv: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena, 41",
      text: "Es visu laiku jutos smaga, uzpūtusies un neapmierināta ar sevi. Dažas dienas viss veicās labi, bet tad es atgriezos pie saldumiiem un uzkodām naktī. Personalizētais Zero Carbs izaicinājums man palīdzēja saglabāt vienkāršību. Man nevajadzēja pārdomāt katru ēdienreizi, un tas padarīja turpināšanu daudz vieglāku. Pēc dažām nedēļām jutos vieglāka, labāk kontrolējama un daudz labāk savos drēbēs. Labākā daļa bija atkal justies lepna par sevi.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina, 33",
      text: "Iepriekš man vienmēr šķita, ka sāku no jauna. Es zināju, ko ēst, bet nevarēju ilgi saglabāt konsekvenci. Man visvairāk patika tas, ka plāns šķita personisks un viegli ievērojams. Tas man deva struktūru, bet nejutās pārāk stingrs vai mulsinošs. Sāku agri redzēt izmaiņas, un tas deva īstu motivāciju. Tagad jūtos mierīgāka saistībā ar pārtiku un daudz pārliecinātāka par sevi.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Daniels, 56",
      text: "Man bija maz enerģijas un es jutos neērti savā ķermenī. Es gribēju kaut ko vienkāršu, ko varētu patiešām ievērot ikdienas dzīvē. Personalizētais Zero Carbs izaicinājums palīdzēja man pieņemt labākus lēmumus, nejūtoties pārņemtam. Maltītes bija vieglas, un atbalsts padarīja procesu sajūtami pārvaldāmu. Tagad jūtos vieglāks, aktīvāks un vairāk kontrolēju savus ieradumus. Es tikai vēlētos, ka būtu sācis agrāk.",
      stars: 5
    }
  ],
  ro: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena, 41",
      text: "Mă simțeam grea, balonată și nemulțumită de mine tot timpul. Mă descurcam bine câteva zile, apoi mă întorceam la dulciuri și gustări noaptea. Provocarea Personalizată Zero Carbohidrați m-a ajutat să păstrez lucrurile simple. Nu trebuia să mă gândesc prea mult la fiecare masă, și asta a făcut mult mai ușor să rămân pe drumul cel bun. După câteva săptămâni, m-am simțit mai ușoară, mai în control și mult mai bine în hainele mele. Cel mai bun lucru a fost să mă simt din nou mândră de mine.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina, 33",
      text: "Înainte, mereu simțeam că o iau de la capăt. Știam ce să mănânc, dar nu puteam să rămân consecventă mult timp. Ce mi-a plăcut cel mai mult a fost că planul s-a simțit personal și ușor de urmat. Mi-a oferit structură, dar nu a părut prea strict sau confuz. Am început să văd schimbări devreme, și asta mi-a dat motivație reală. Acum mă simt mai calmă în legătură cu mâncarea și mult mai încrezătoare în mine.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Daniel, 56",
      text: "Aveam energie scăzută și mă simțeam inconfortabil în corpul meu. Voiam ceva simplu pe care să îl pot urma cu adevărat în viața reală. Provocarea Personalizată Zero Carbohidrați m-a ajutat să fac alegeri mai bune fără să mă simt copleșit. Mesele au fost ușoare, iar suportul a făcut procesul mai gestionabil. Acum mă simt mai ușor, mai activ și mai în control cu privire la obiceiurile mele. Mi-aș dori doar să fi început mai devreme.",
      stars: 5
    }
  ],
  cz: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena, 41",
      text: "Celou dobu jsem se cítila těžce, nafouklě a nespokojená sama se sebou. Pár dní jsem se držela, ale pak jsem se vracela ke sladkostem a nočním svačinám. Personalizovaný Zero Carbs Challenge mi pomohl udržet věci jednoduché. Nemusela jsem přemýšlet nad každým jídlem, a to mi hodně usnadnilo zůstat na správné cestě. Po pár týdnech jsem se cítila lehčeji, měla jsem věci pod kontrolou a oblečení mi lépe sedělo. Nejlepší bylo znovu cítit na sebe hrdost.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina, 33",
      text: "Předtím jsem se vždy cítila, jako bych začínala znovu. Věděla jsem, co jíst, ale nikdy jsem nedokázala dlouho vydržet. Nejvíce se mi líbilo, že plán působil osobně a byl snadno sledovatelný. Dával mi strukturu, ale nepůsobil příliš přísně ani zmateně. Brzy jsem začala vidět změny, a to mi dalo skutečnou motivaci. Teď se cítím klidnější kolem jídla a mnohem sebejistější.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Daniel, 56",
      text: "Měl jsem málo energie a cítil se nepohodlně ve svém těle. Chtěl jsem něco jednoduchého, čeho se bych mohl skutečně držet v reálném životě. Personalizovaný Zero Carbs Challenge mi pomohl dělat lepší rozhodnutí, aniž bych se cítil zahlcen. Jídla byla snadná a podpora mi pomohla, aby celý proces byl zvládnutelný. Teď se cítím lehčeji, jsem aktivnější a lépe ovládám své zvyky. Jen bych si přál, abych začal dřív.",
      stars: 5
    }
  ],
  dk: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena, 41",
      text: "Jeg følte mig tung, oppustet og utilfreds med mig selv hele tiden. Jeg klarede mig godt i et par dage, men vendte så tilbage til slik og snacks om natten. The Personalized Zero Carbs Challenge hjalp mig med at holde tingene enkle. Jeg behøvede ikke at tænke for meget over hvert måltid, og det gjorde det meget nemmere at holde mig på rette spor. Efter et par uger følte jeg mig lettere, mere i kontrol og meget bedre i mit tøj. Det bedste var at føle mig stolt over mig selv igen.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina, 33",
      text: "Tidligere følte jeg altid, at jeg startede forfra. Jeg vidste, hvad jeg skulle spise, men kunne aldrig holde mig konsekvent i lang tid. Det, jeg godt kunne lide mest, var, at planen føltes personlig og nem at følge. Den gav mig struktur, men føltes ikke for streng eller forvirrende. Jeg begyndte tidligt at se forandringer, og det gav mig ægte motivation. Nu føler jeg mig roligere omkring mad og meget mere selvsikker.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Daniel, 56",
      text: "Jeg havde lavt energiniveau og følte mig utilpas i min krop. Jeg ønskede noget enkelt, som jeg rent faktisk kunne følge i det virkelige liv. The Personalized Zero Carbs Challenge hjalp mig med at træffe bedre valg uden at føle mig overvældet. Måltiderne var nemme, og supporten gjorde processen mere overskuelig. Nu føler jeg mig lettere, mere aktiv og mere i kontrol med mine vaner. Jeg ønsker bare, at jeg var startet tidligere.",
      stars: 5
    }
  ],
  gr: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Έλενα, 41",
      text: "Πάντα ένιωθα βαριά, φουσκωμένη και δυσαρεστημένη με τον εαυτό μου. Για μερικές μέρες τα κατάφερνα, αλλά μετά επέστρεφα στα γλυκά και τα σνακ τη νύχτα. Η Εξατομικευμένη Πρόκληση Μηδέν Υδατανθράκων με βοήθησε να διατηρώ τα πράγματα απλά. Δεν χρειαζόταν να σκέφτομαι υπερβολικά κάθε γεύμα, κι αυτό έκανε πολύ πιο εύκολο να παραμένω στο σωστό δρόμο. Μετά από μερικές εβδομάδες ένιωθα πιο ελαφριά, πιο ελεγχόμενη και πολύ καλύτερα στα ρούχα μου. Το καλύτερο ήταν να νιώσω ξανά περήφανη για τον εαυτό μου.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Μαρίνα, 33",
      text: "Πριν από αυτό, πάντα ένιωθα σαν να ξεκινούσα από την αρχή. Ήξερα τι να τρώω, αλλά δεν μπορούσα ποτέ να παραμείνω συνεπής για πολύ. Αυτό που μου άρεσε περισσότερο ήταν ότι το πρόγραμμα ένιωθε προσωπικό και εύκολο να ακολουθηθεί. Μου έδινε δομή, αλλά δεν ένιωθε πολύ αυστηρό ή μπερδεμένο. Άρχισα να βλέπω αλλαγές νωρίς, κι αυτό μου έδωσε πραγματικό κίνητρο. Τώρα νιώθω πιο ήρεμη με το φαγητό και πολύ πιο σίγουρη για τον εαυτό μου.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Δανιήλ, 56",
      text: "Είχα χαμηλή ενέργεια και ένιωθα άβολα στο σώμα μου. Ήθελα κάτι απλό που θα μπορούσα πραγματικά να ακολουθήσω στην πραγματική ζωή. Η Εξατομικευμένη Πρόκληση Μηδέν Υδατανθράκων με βοήθησε να κάνω καλύτερες επιλογές χωρίς να νιώθω καταβεβλημένος. Τα γεύματα ήταν εύκολα και η υποστήριξη έκανε τη διαδικασία πιο διαχειρίσιμη. Τώρα νιώθω πιο ελαφρύς, πιο δραστήριος και πιο ελεγχόμενος ως προς τις συνήθειές μου. Μόνο που θα ήθελα να είχα αρχίσει νωρίτερα.",
      stars: 5
    }
  ],
  hu: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena, 41",
      text: "Állandóan nehéznek, puffadtnak és elégedetlennek éreztem magam. Pár napig jól ment, de aztán visszatértem az édes ételekhez és az esti nassoláshoz. A személyre szabott Zero Carbs Challenge segített egyszerűen tartani a dolgokat. Nem kellett minden étkezésen töprengeni, és ez sokkal könnyebbé tette a kitartást. Néhány hét után könnyebbnek, magabiztosabbnak és sokkal jobban éreztem magam a ruhámban. A legjobb az volt, hogy ismét büszke lehettem magamra.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina, 33",
      text: "Korábban mindig úgy éreztem, hogy elölről kezdem. Tudtam, mit kell enni, de soha nem tudtam sokáig következetes maradni. A legjobban az tetszett, hogy a terv személyesnek tűnt és könnyen követhető volt. Adott nekem struktúrát, de nem érezte magát túl szigorúnak vagy zavarosnak. Korán kezdtem változásokat látni, és ez valódi motivációt adott. Most nyugodtabb vagyok az étellel kapcsolatban és sokkal magabiztosabb magamban.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Daniel, 56",
      text: "Alacsony energiaszintem volt és kényelmetlenül éreztem magam a bőrömben. Valami egyszerűt szerettem volna, amit ténylegesen tudok követni a való életben. A személyre szabott Zero Carbs Challenge segített jobb döntéseket hozni anélkül, hogy túlterheltnek éreztem volna magam. Az ételek könnyűek voltak, a támogatás pedig kezelhetőbbé tette a folyamatot. Most könnyebbnek, aktívabbnak érzem magam és jobban kontrollálom a szokásaimat. Csak azt kívánom, bárcsak hamarabb kezdtem volna.",
      stars: 5
    }
  ],
  hr: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena, 41",
      text: "Cijelo vrijeme sam se osjećala teško, napuhnuto i nezadovoljna sobom. Nekoliko dana bi mi dobro išlo, a onda bih se vratila slatkišima i grickalicama noću. Personalizirani Zero Carbs Challenge pomogao mi je da stvari ostanu jednostavne. Nisam morala previše razmišljati o svakom obroku, a to mi je znatno olakšalo da se držim plana. Nakon nekoliko tjedana osjećala sam se lakše, više pod kontrolom i puno bolje u svojoj odjeći. Najljepši dio bio je što sam se opet osjećala ponosnom na sebe.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina, 33",
      text: "Prije toga, uvijek sam imala osjećaj da počinjem ispočetka. Znala sam što jesti, ali nikada nisam mogla dugo ostati dosljedna. Najviše mi se svidjelo to što je plan izgledao osobno i lako za pratiti. Dao mi je strukturu, ali nije djelovao previše strogo ili zbunjujuće. Počela sam rano vidjeti promjene, i to mi je dalo pravu motivaciju. Sada se osjećam smirenije oko hrane i puno samopouzdanije u sebi.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Daniel, 56",
      text: "Imao sam malo energije i osjećao sam se nelagodno u svom tijelu. Htio sam nešto jednostavno što bih zaista mogao slijediti u stvarnom životu. Personalizirani Zero Carbs Challenge mi je pomogao donijeti bolje odluke bez osjećaja preopterećenosti. Obroci su bili lagani, a podrška je učinila proces lakše upravljivim. Sada se osjećam lakše, aktivnije i više kontroliram svoje navike. Samo žalim što nisam počeo ranije.",
      stars: 5
    }
  ],
  il: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "אלנה, 41",
      text: "כל הזמן הרגשתי כבדה, נפוחה ומאוכזבת מעצמי. הצלחתי כמה ימים, ואז חזרתי לממתקים ולנשנושים בלילה. אתגר ה-Zero Carbs המותאם אישית עזר לי לשמור על פשטות. לא הייתי צריכה לחשוב יותר מדי על כל ארוחה, וזה הקל הרבה יותר להישאר בדרך. אחרי כמה שבועות הרגשתי קלה יותר, שולטת יותר ומרגישה הרבה יותר טוב בבגדים שלי. החלק הכי טוב היה להרגיש שוב גאה בעצמי.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "מרינה, 33",
      text: "לפני זה, תמיד הרגשתי שאני מתחילה מחדש. ידעתי מה לאכול, אבל לא יכולתי להישאר עקבית לאורך זמן. מה שאהבתי הכי הרבה היה שהתוכנית הרגישה אישית וקלה למעקב. היא נתנה לי מבנה, אבל לא הרגישה נוקשה מדי או מבלבלת. התחלתי לראות שינויים מוקדם, וזה נתן לי מוטיבציה אמיתית. עכשיו אני מרגישה רגועה יותר סביב אוכל ובטוחה הרבה יותר בעצמי.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "דניאל, 56",
      text: "הייתה לי אנרגיה נמוכה והרגשתי לא בנוח בגוף שלי. רציתי משהו פשוט שאוכל באמת לעקוב אחריו בחיים האמיתיים. אתגר ה-Zero Carbs המותאם אישית עזר לי לקבל בחירות טובות יותר מבלי להרגיש מוצף. הארוחות היו קלות, והתמיכה הפכה את התהליך לניתן יותר לניהול. עכשיו אני מרגיש קל יותר, פעיל יותר ויש לי יותר שליטה על ההרגלים שלי. רק הלוואי שהייתי מתחיל מוקדם יותר.",
      stars: 5
    }
  ],
  jp: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "エレナ、41歳",
      text: "いつも体が重く、むくんで、自分自身に不満を感じていました。数日は頑張れても、夜になるとお菓子やスナックを食べてしまっていました。パーソナライズされたゼロカーブスチャレンジは、物事をシンプルに保つ手助けをしてくれました。毎食について深く考える必要がなくなり、継続することがずっと楽になりました。数週間後には体が軽くなり、自分をコントロールできるようになり、着ている服でも大きな変化を感じました。再び自分自身を誇りに思えたことが一番嬉しかったです。",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "マリーナ、33歳",
      text: "以前は、いつも最初からやり直している感じがしていました。何を食べればいいかは分かっていましたが、長続きすることができませんでした。一番気に入ったのは、プランが個人的でわかりやすいと感じたことです。構造を与えてくれましたが、厳しすぎたり混乱するような感じはありませんでした。早い段階で変化が見え始め、本物のやる気が生まれました。今は食べ物に対してより落ち着いていて、自分自身に対してずっと自信を持てるようになりました。",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "ダニエル、56歳",
      text: "エネルギーが低く、自分の体に不快感を感じていました。実生活で実際に続けられるシンプルなものが欲しかったのです。パーソナライズされたゼロカーブスチャレンジは、圧倒されることなく、より良い選択をするのを助けてくれました。食事は簡単で、サポートがあることでプロセスがより管理しやすく感じました。今は体が軽く、より活動的で、自分の習慣をよりコントロールできています。もっと早く始めればよかったと思うばかりです。",
      stars: 5
    }
  ],
  ru: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Елена, 41 год",
      text: "Я постоянно чувствовала тяжесть, вздутие и недовольство собой. Несколько дней всё шло хорошо, но потом я снова возвращалась к сладкому и ночным перекусам. Персонализированный Zero Carbs Challenge помог мне сохранять простоту. Мне не нужно было обдумывать каждый приём пищи, и это значительно облегчило соблюдение режима. Через несколько недель я почувствовала себя легче, увереннее и намного лучше в своей одежде. Лучшее — снова ощущать гордость за себя.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Марина, 33 года",
      text: "Раньше у меня всегда было ощущение, что я начинаю заново. Я знала, что есть, но никак не могла долго придерживаться режима. Больше всего мне понравилось, что план был личным и удобным для следования. Он давал мне структуру, но не казался слишком строгим или запутанным. Я начала замечать изменения уже на ранних этапах, и это дало мне настоящую мотивацию. Теперь я спокойнее отношусь к еде и гораздо увереннее чувствую себя.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Даниил, 56 лет",
      text: "У меня было мало энергии и я чувствовал себя некомфортно в своём теле. Я хотел что-то простое, чему я мог бы действительно следовать в реальной жизни. Персонализированный Zero Carbs Challenge помог мне делать лучший выбор, не чувствуя себя перегруженным. Блюда были простыми, а поддержка сделала процесс более управляемым. Теперь я чувствую себя легче, более активно и лучше контролирую свои привычки. Жаль только, что не начал раньше.",
      stars: 5
    }
  ],
  sk: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena, 41",
      text: "Celý čas som sa cítila ťažko, nafúknuto a nespokojná sama so sebou. Niekoľko dní sa mi darilo, ale potom som sa vracala k sladkostiam a nočným snackám. Personalizovaný Zero Carbs Challenge mi pomohol udržať veci jednoduché. Nemusela som premýšľať nad každým jedlom, a to mi uľahčilo zostať na správnej ceste. Po niekoľkých týždňoch som sa cítila ľahšie, viac pod kontrolou a oveľa lepšie sa cítila v oblečení. Najlepšou časťou bolo opäť sa cítiť na seba hrdá.",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina, 33",
      text: "Predtým som sa vždy cítila, akoby som začínala odznova. Vedela som, čo jesť, ale nikdy som nedokázala dlho vydržať. Najviac sa mi páčilo, že plán pôsobil osobne a ľahko sa sledoval. Dával mi štruktúru, ale nepôsobil príliš prísne ani mätúco. Skoro som začala vidieť zmeny, a to mi dalo skutočnú motiváciu. Teraz sa cítim pokojnejšia okolo jedla a oveľa sebavedomejšia.",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Daniel, 56",
      text: "Mal som málo energie a cítil som sa nepohodlne vo svojom tele. Chcel som niečo jednoduché, čoho sa skutočne môžem držať v reálnom živote. Personalizovaný Zero Carbs Challenge mi pomohol robiť lepšie rozhodnutia bez pocitu preťaženia. Jedlá boli ľahké a podpora mi pomohla, aby celý proces bol zvládnuteľný. Teraz sa cítim ľahšie, som aktívnejší a lepšie ovládam svoje zvyky. Len by som si prial, aby som začal skôr.",
      stars: 5
    }
  ],
  tw: [
    {
      photo: "/images/woman/results_chart_Elena 41, lost 12 kg.png",
      name: "Elena，41 歲",
      text: "我一直感到沉重、腹脹，對自己感到不滿。有幾天做得還不錯，但隨後又回到晚上吃甜食和零食的習慣。個性化的零碳水化合物挑戰幫助我保持簡單。我不需要過度思考每一餐，這讓我更容易保持在正確的軌道上。幾週後，我感到更輕盈、更有掌控感，穿衣服也更有自信。最棒的是再次為自己感到驕傲。",
      stars: 5
    },
    {
      photo: "/images/woman/results_chart_Marina 33, lost 18 kg.png",
      name: "Marina，33 歲",
      text: "在此之前，我總是感覺自己在重新開始。我知道該吃什麼，但就是無法長期保持一致。我最喜歡的是這個計畫感覺很個人化，也很容易遵循。它給了我結構，但不會感覺太嚴格或令人困惑。我很早就開始看到變化，這給了我真正的動力。現在我對食物感到更平靜，對自己也更有自信。",
      stars: 5
    },
    {
      photo: "/images/man/result chart_ Daniel 56, lost 21 kg.png",
      name: "Daniel，56 歲",
      text: "我的精力不足，在自己的身體裡感到不舒服。我想要一些在現實生活中可以實際遵循的簡單東西。個性化的零碳水化合物挑戰幫助我做出更好的選擇，而不會感到不知所措。飲食很簡單，支持讓整個過程感覺更易於管理。現在我感到更輕盈、更活躍，對自己的習慣也有更多的掌控。只希望我能早點開始。",
      stars: 5
    }
  ]
}
