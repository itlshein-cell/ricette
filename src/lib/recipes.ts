import carbonara from "@/assets/recipe-carbonara.jpg";
import pizza from "@/assets/recipe-pizza.jpg";
import tiramisu from "@/assets/recipe-tiramisu.jpg";
import risotto from "@/assets/recipe-risotto.jpg";
import lasagna from "@/assets/recipe-lasagna.jpg";
import bruschetta from "@/assets/recipe-bruschetta.jpg";
import pastaNorma from "@/assets/recipe-pasta-norma.jpg";

export type Category =
  | "Primi Piatti"
  | "Pizza"
  | "Risotto"
  | "Zuppa"
  | "Riso"
  | "Insalata"
  | "Verdure grigliate"
  | "Patate"
  | "Torte e Dolci";

export const CATEGORIES: Category[] = [
  "Primi Piatti",
  "Pizza",
  "Risotto",
  "Zuppa",
  "Riso",
  "Insalata",
  "Verdure grigliate",
  "Patate",
  "Torte e Dolci",
];

export type Variant = {
  slug: string;
  title: string;
  keywords: string[];
  intro: string;
  ingredients: string[];
  steps: string[];
  tip?: string;
};

export type Recipe = {
  slug: string;
  title: string;
  category: Category;
  region: string;
  time: string;
  difficulty: string;
  serves: number;
  image: string;
  excerpt: string;
  /** Long-form intro shown above the variants */
  intro?: string;
  ingredients: string[];
  steps: string[];
  /** Sub-recipes / variants of the same dish, rendered as sections on the page */
  variants?: Variant[];
};

export const recipes: Recipe[] = [
  {
    slug: "pasta-alla-norma",
    title: "Pasta alla Norma",
    category: "Primi Piatti",
    region: "Sicilia",
    time: "45 min",
    difficulty: "Facile",
    serves: 4,
    image: pastaNorma,
    excerpt:
      "Il piatto simbolo della Sicilia: pasta, sugo di pomodoro, melanzane fritte e ricotta salata.",
    intro:
      "La Pasta alla Norma è uno dei piatti più iconici della cucina siciliana, nato a Catania in onore della celebre opera 'Norma' di Vincenzo Bellini. È un primo piatto semplice ma sorprendente, costruito su quattro pilastri imprescindibili: pasta al dente, sugo di pomodoro fresco e profumato, melanzane fritte croccanti fuori e morbide dentro, e una generosa grattugiata di ricotta salata. In questa pagina trovi la ricetta originale e le varianti più amate, dal sugo di melanzane alla siciliana fino alle versioni più moderne.",
    ingredients: [
      "400 g di pasta (rigatoni, sedani o spaghetti)",
      "2 melanzane lunghe",
      "500 g di pomodori pelati o passata",
      "100 g di ricotta salata",
      "2 spicchi d'aglio",
      "Basilico fresco",
      "Olio extravergine d'oliva",
      "Olio di semi per friggere",
      "Sale e pepe",
    ],
    steps: [
      "Lava le melanzane, tagliale a cubetti di circa 1,5 cm (o a fette spesse) e mettile in uno scolapasta con un pizzico di sale grosso. Lasciale spurgare per 30 minuti, così perderanno l'amaro e parte dell'acqua di vegetazione.",
      "Asciuga bene i cubetti con carta da cucina. Scalda abbondante olio di semi in una padella alta a 170°C e friggi le melanzane poche alla volta finché diventano dorate e croccanti. Scolale su carta assorbente e tieni da parte.",
      "In una padella ampia scalda 3 cucchiai d'olio extravergine con gli spicchi d'aglio in camicia. Quando l'aglio è dorato eliminalo, versa i pomodori pelati schiacciati e cuoci a fuoco medio per 15-20 minuti, finché il sugo si addensa. Aggiusta di sale e profuma con qualche foglia di basilico.",
      "Cuoci la pasta in abbondante acqua salata fino a un minuto prima del tempo di cottura indicato. Scolala conservando un mestolo di acqua di cottura.",
      "Versa la pasta nella padella con il sugo, aggiungi metà delle melanzane fritte e salta a fuoco vivo per 1 minuto, aggiungendo un goccio d'acqua di cottura per legare.",
      "Impiatta, completa con le restanti melanzane, una generosa spolverata di ricotta salata grattugiata e qualche foglia di basilico fresco. Servi subito.",
    ],
    variants: [
      {
        slug: "ricetta-originale",
        title: "Pasta alla Norma — Ricetta Originale Catanese",
        keywords: [
          "pasta alla norma ricetta originale",
          "pasta alla norma catanese",
          "ricetta tradizionale siciliana",
        ],
        intro:
          "La versione originale catanese prevede maccheroni (in dialetto 'maccarruna') o sedanini, melanzane fritte in olio di semi e ricotta salata stagionata DOP. Niente parmigiano: il vero sapore viene dalla ricotta salata, salina e sapida.",
        ingredients: [
          "400 g di maccheroni o sedani rigati",
          "2 melanzane viola lunghe",
          "600 g di pomodori San Marzano pelati",
          "120 g di ricotta salata DOP siciliana",
          "2 spicchi d'aglio",
          "Basilico genovese",
          "Olio di semi di arachide per friggere",
          "Olio extravergine d'oliva siciliano",
          "Sale grosso",
        ],
        steps: [
          "Taglia le melanzane a fette spesse 1 cm nel senso della lunghezza e mettile in salamoia con acqua e sale per 30 minuti per togliere l'amaro tipico.",
          "Strizza bene le fette, asciugale e friggile in olio di arachide bollente (180°C) finché sono dorate da entrambi i lati. Adagiale su carta assorbente.",
          "Per il sugo, fai imbiondire l'aglio in olio EVO, unisci i pomodori San Marzano schiacciati a mano e cuoci 20 minuti a fuoco medio con qualche foglia di basilico. Sala alla fine.",
          "Cuoci i maccheroni al dente in acqua salata. Scolali e mantecali nel sugo per un minuto.",
          "Servi nei piatti caldi: un letto di pasta condita, sopra le fette di melanzana fritte intere, abbondante ricotta salata grattugiata e basilico fresco. Mai mescolare le melanzane nel sugo: vanno disposte sopra.",
        ],
        tip:
          "La vera ricetta catanese non prevede né cipolla né zucchero: la dolcezza viene solo dal pomodoro maturo e dalle melanzane fritte.",
      },
      {
        slug: "sugo-melanzane-siciliano",
        title: "Sugo di Melanzane alla Siciliana",
        keywords: [
          "sugo di melanzane alla siciliana",
          "pasta sugo melanzane",
          "sugo di melanzane",
        ],
        intro:
          "Se vuoi un piatto più veloce e meno calorico, puoi preparare un sugo di melanzane saltate in padella anziché fritte. Le melanzane si sciolgono nel pomodoro creando una crema avvolgente perfetta per condire qualunque pasta corta.",
        ingredients: [
          "400 g di pasta corta (penne, rigatoni)",
          "2 melanzane medie",
          "500 g di passata di pomodoro",
          "1 cipolla rossa",
          "1 spicchio d'aglio",
          "Peperoncino fresco (facoltativo)",
          "Basilico",
          "Ricotta salata o pecorino",
          "Olio EVO, sale e pepe",
        ],
        steps: [
          "Taglia le melanzane a cubetti piccoli (1 cm) senza salarle. Tritura finemente cipolla e aglio.",
          "In una padella capiente scalda 4 cucchiai d'olio EVO, soffriggi cipolla e aglio per 3 minuti, poi unisci le melanzane. Cuoci a fuoco vivo per 8-10 minuti mescolando spesso, finché diventano morbide e leggermente caramellate.",
          "Aggiungi la passata di pomodoro, il peperoncino se ti piace, sala e cuoci a fuoco medio per 20 minuti, finché il sugo è denso e cremoso. A fine cottura aggiungi qualche foglia di basilico.",
          "Lessa la pasta al dente, scolala e versala in padella con il sugo, saltando per un paio di minuti.",
          "Impiatta con ricotta salata grattugiata o pecorino e una macinata di pepe nero.",
        ],
        tip:
          "Per un effetto ancora più cremoso, frulla metà del sugo con un mixer ad immersione prima di unire la pasta.",
      },
      {
        slug: "pasta-alla-norma-bianca",
        title: "Pasta alla Norma Bianca (senza pomodoro)",
        keywords: [
          "pasta alla norma bianca",
          "norma senza pomodoro",
          "variante moderna",
        ],
        intro:
          "Una rivisitazione contemporanea per chi non ama il pomodoro o vuole esaltare il sapore puro della melanzana: una Norma in bianco, cremosa e profumata, perfetta in estate.",
        ingredients: [
          "400 g di spaghetti",
          "2 melanzane",
          "200 ml di panna di mandorla o panna fresca",
          "Scorza di limone",
          "Basilico",
          "Ricotta salata",
          "Olio EVO, sale e pepe",
        ],
        steps: [
          "Taglia le melanzane a cubetti e friggile in olio caldo finché dorate. Scolale su carta assorbente.",
          "In una padella scalda la panna di mandorla con la scorza di limone grattugiata e un pizzico di sale. Lascia ridurre leggermente per 2 minuti.",
          "Cuoci gli spaghetti al dente, scolali e mantecali nella crema di mandorla aggiungendo metà delle melanzane.",
          "Servi con le restanti melanzane sopra, basilico fresco e ricotta salata grattugiata abbondante.",
        ],
      },
      {
        slug: "pasta-alla-norma-al-forno",
        title: "Pasta alla Norma al Forno",
        keywords: [
          "pasta alla norma al forno",
          "norma gratinata",
          "pasta al forno siciliana",
        ],
        intro:
          "La versione gratinata della Norma: perfetta per il pranzo della domenica o per portare un piatto della tradizione anche il giorno dopo, ancora più ricco e filante.",
        ingredients: [
          "400 g di rigatoni",
          "2 melanzane",
          "600 g di pomodori pelati",
          "200 g di mozzarella o caciocavallo",
          "100 g di ricotta salata",
          "Basilico, aglio, olio EVO, sale",
        ],
        steps: [
          "Prepara la pasta alla Norma classica come descritto sopra, ma cuoci la pasta molto al dente (2 minuti in meno).",
          "Trasferisci la pasta condita in una pirofila imburrata, alternando strati con mozzarella o caciocavallo a cubetti.",
          "Copri la superficie con abbondante ricotta salata grattugiata e qualche pezzetto di mozzarella.",
          "Inforna a 200°C per 15-20 minuti, finché si forma una crosta dorata in superficie.",
          "Lascia riposare 5 minuti prima di servire, così le porzioni reggono meglio al taglio.",
        ],
        tip:
          "Per una crosta più croccante, accendi il grill negli ultimi 3 minuti di cottura.",
      },
    ],
  },
  {
    slug: "spaghetti-alla-carbonara",
    title: "Spaghetti alla Carbonara",
    category: "Primi Piatti",
    region: "Lazio",
    time: "20 min",
    difficulty: "Facile",
    serves: 4,
    image: carbonara,
    excerpt: "Il classico romano con uova, guanciale, pecorino e pepe nero.",
    ingredients: [
      "400 g di spaghetti",
      "200 g di guanciale",
      "4 tuorli d'uovo",
      "100 g di pecorino romano",
      "Pepe nero macinato",
      "Sale q.b.",
    ],
    steps: [
      "Porta a ebollizione una pentola capiente d'acqua e salala con circa 10 g di sale grosso per litro. Quando bolle vivacemente, butta gli spaghetti e cuocili al dente seguendo il tempo indicato sulla confezione, mescolando ogni tanto per evitare che si attacchino.",
      "Mentre la pasta cuoce, taglia il guanciale a listarelle spesse circa mezzo centimetro, eliminando la cotenna esterna. Mettilo in una padella ampia e antiaderente a fuoco medio-basso, senza aggiungere olio: il grasso si scioglierà lentamente rendendo le strisce dorate e croccanti in 5-7 minuti. Spegni e tieni da parte, conservando il grasso fuso.",
      "In una ciotola capiente rompi i 4 tuorli, aggiungi il pecorino romano grattugiato finemente e una generosa macinata di pepe nero. Sbatti con una forchetta fino a ottenere una crema densa e omogenea. Se risulta troppo asciutta, aggiungi un cucchiaio di acqua di cottura della pasta per ammorbidirla.",
      "Scola gli spaghetti al dente conservando almeno una tazza di acqua di cottura. Versa la pasta nella padella con il guanciale (a fuoco spento) e mescola bene per insaporirla con il grasso.",
      "Adesso il passaggio chiave: con la padella lontana dal fuoco, versa il composto di uova e pecorino sulla pasta e mescola energicamente. Aggiungi acqua di cottura calda poco alla volta fino a ottenere una crema vellutata che avvolga ogni spaghetto. Il calore della pasta cuocerà delicatamente le uova senza farle strapazzare.",
      "Impiatta subito nei piatti caldi, completa con una spolverata generosa di pecorino, una macinata fresca di pepe nero e il guanciale croccante in superficie. Servi immediatamente, prima che la cremina perda la sua sericità.",
    ],
  },
  {
    slug: "lasagna-bolognese",
    title: "Lasagna alla Bolognese",
    category: "Primi Piatti",
    region: "Emilia-Romagna",
    time: "2 h",
    difficulty: "Avanzato",
    serves: 6,
    image: lasagna,
    excerpt: "Strati di sfoglia, ragù lento e besciamella vellutata.",
    ingredients: [
      "Sfoglia all'uovo",
      "Ragù alla bolognese",
      "Besciamella",
      "Parmigiano Reggiano",
      "Burro",
    ],
    steps: [
      "Prepara il ragù alla bolognese: in una casseruola fai un soffritto di sedano, carota e cipolla tritati finemente. Aggiungi 500 g di carne macinata mista (manzo e maiale) e fai rosolare bene a fuoco vivo. Sfuma con mezzo bicchiere di vino rosso, poi unisci 700 g di passata di pomodoro, sale, pepe e una foglia di alloro. Cuoci a fuoco bassissimo per almeno 2 ore, mescolando di tanto in tanto e aggiungendo brodo se si asciuga troppo.",
      "Prepara la besciamella: in un pentolino sciogli 80 g di burro, unisci 80 g di farina e mescola con una frusta per 1 minuto formando un roux. Versa a filo 1 litro di latte caldo continuando a mescolare per evitare grumi. Sala, profuma con noce moscata e cuoci a fuoco basso finché si addensa (5-7 minuti).",
      "Imburra una pirofila rettangolare e versa sul fondo qualche cucchiaio di besciamella. Disponi un primo strato di sfoglia all'uovo (se è secca, sbollentala 30 secondi in acqua salata).",
      "Distribuisci sopra qualche cucchiaio di ragù, poi besciamella e una spolverata generosa di parmigiano reggiano grattugiato. Ripeti gli strati (di solito 5-6 in totale) finendo con besciamella, ragù e abbondante parmigiano in superficie.",
      "Aggiungi qualche fiocchetto di burro sopra l'ultimo strato per favorire la doratura. Inforna nel forno preriscaldato a 180°C per circa 35-40 minuti, finché la superficie è dorata e gratinata.",
      "Sforna e lascia riposare almeno 10 minuti prima di tagliare le porzioni: in questo modo gli strati si compatteranno e sarà più facile servire fette ben definite.",
    ],
  },
  {
    slug: "pizza-margherita",
    title: "Pizza Margherita",
    category: "Pizza",
    region: "Campania",
    time: "1 h 30",
    difficulty: "Medio",
    serves: 2,
    image: pizza,
    excerpt: "Pomodoro San Marzano, mozzarella di bufala e basilico fresco.",
    ingredients: [
      "300 g di farina 00",
      "200 ml d'acqua",
      "5 g di lievito di birra",
      "Sale e olio extravergine",
      "Pomodori San Marzano",
      "Mozzarella di bufala",
      "Basilico fresco",
    ],
    steps: [
      "In una ciotola capiente sciogli il lievito di birra in 200 ml d'acqua tiepida (mai calda, altrimenti uccide i lieviti). Aggiungi un cucchiaino di sale e un filo d'olio extravergine, poi versa la farina poco alla volta mescolando con un cucchiaio di legno.",
      "Trasferisci l'impasto sul piano di lavoro infarinato e lavoralo energicamente con le mani per almeno 10 minuti, finché diventa liscio, elastico e non appiccicoso. Forma una palla, mettila in una ciotola unta, copri con pellicola e lascia lievitare in un luogo tiepido per almeno 1 ora, fino al raddoppio.",
      "Riprendi l'impasto, dividilo in 2 panetti e stendili con le mani su una teglia oleata o su carta forno, ottenendo dischi di circa 28 cm di diametro. Lascia un bordo leggermente più alto.",
      "Schiaccia i pomodori San Marzano con le mani in una ciotola, condisci con un pizzico di sale e un filo d'olio. Distribuisci il pomodoro sulla pizza con il dorso di un cucchiaio, lasciando libero il bordo.",
      "Inforna nella parte più bassa del forno preriscaldato a 250°C (massima potenza, statico) per circa 8 minuti, finché il bordo inizia a dorarsi.",
      "Sforna brevemente, distribuisci la mozzarella di bufala spezzettata a mano (precedentemente sgocciolata) e qualche foglia di basilico fresco. Rimetti in forno per altri 3-4 minuti, finché la mozzarella è fusa e fila. Servi subito con un altro filo d'olio a crudo.",
    ],
  },
  {
    slug: "risotto-ai-funghi",
    title: "Risotto ai Funghi Porcini",
    category: "Risotto",
    region: "Lombardia",
    time: "40 min",
    difficulty: "Medio",
    serves: 4,
    image: risotto,
    excerpt: "Cremoso, profumato, con funghi porcini e parmigiano stagionato.",
    ingredients: [
      "320 g di riso Carnaroli",
      "300 g di funghi porcini",
      "1 cipolla",
      "Brodo vegetale",
      "Vino bianco",
      "Burro e parmigiano",
    ],
    steps: [
      "Se usi funghi porcini secchi, mettili in ammollo in acqua tiepida per 20 minuti e conserva l'acqua filtrata. Se usi quelli freschi, puliscili delicatamente con un panno umido (mai sotto l'acqua corrente) e tagliali a fettine sottili. Trita finemente la cipolla.",
      "In una casseruola dal fondo spesso fai sciogliere una noce di burro con un filo d'olio. Aggiungi la cipolla tritata e lascia appassire dolcemente per 5 minuti senza farla colorire. Unisci i funghi e cuoci a fuoco vivace per 7-8 minuti finché rilasciano il loro profumo.",
      "Versa il riso Carnaroli nella casseruola e tostalo per 2-3 minuti mescolando, finché i chicchi diventano traslucidi ai bordi. Sfuma con mezzo bicchiere di vino bianco e lascia evaporare completamente l'alcol.",
      "Comincia ad aggiungere il brodo vegetale caldo un mestolo alla volta, mescolando spesso e aspettando che venga assorbito prima di aggiungerne altro. Continua per circa 18 minuti, finché il riso è al dente ma cremoso.",
      "Spegni il fuoco e procedi alla mantecatura: aggiungi una generosa noce di burro freddo e una manciata abbondante di parmigiano grattugiato. Mescola energicamente, copri con un coperchio e lascia riposare 2 minuti.",
      "Servi il risotto 'all'onda' (deve scivolare leggermente nel piatto) con una spolverata di prezzemolo fresco e altro parmigiano a piacere.",
    ],
  },
  {
    slug: "tiramisu-classico",
    title: "Tiramisù Classico",
    category: "Torte e Dolci",
    region: "Veneto",
    time: "30 min + riposo",
    difficulty: "Facile",
    serves: 6,
    image: tiramisu,
    excerpt: "Il dolce al cucchiaio più amato d'Italia, con mascarpone e caffè.",
    ingredients: [
      "500 g di mascarpone",
      "4 uova",
      "100 g di zucchero",
      "300 g di savoiardi",
      "Caffè espresso",
      "Cacao amaro",
    ],
    steps: [
      "Separa i tuorli dagli albumi mettendoli in due ciotole pulitissime e asciutte (anche una sola goccia di tuorlo impedisce agli albumi di montare). Monta i tuorli con metà dello zucchero usando le fruste elettriche per circa 5 minuti, finché diventano chiari, gonfi e spumosi.",
      "Unisci il mascarpone freddo di frigo poco alla volta ai tuorli montati, mescolando delicatamente con una spatola dal basso verso l'alto per ottenere una crema liscia e senza grumi.",
      "Monta gli albumi a neve ben ferma con il restante zucchero: devono formare picchi rigidi quando alzi le fruste. Incorporali alla crema di mascarpone con movimenti lenti e avvolgenti, sempre dal basso verso l'alto, per non smontarli.",
      "Prepara un caffè espresso forte (circa 300 ml), zuccheralo leggermente se preferisci, e lascialo intiepidire in un piatto fondo. Inzuppa rapidamente i savoiardi nel caffè, solo un secondo per lato: devono assorbire ma non sfaldarsi.",
      "In una pirofila rettangolare disponi un primo strato di savoiardi inzuppati, copri con metà della crema al mascarpone livellando con la spatola. Ripeti con un secondo strato di savoiardi e finisci con il resto della crema.",
      "Copri con pellicola e lascia riposare in frigorifero per almeno 4 ore, meglio se tutta la notte: il riposo è fondamentale per fare amalgamare i sapori. Prima di servire, spolvera con abbondante cacao amaro setacciato.",
    ],
  },
  {
    slug: "bruschetta-al-pomodoro",
    title: "Bruschetta al Pomodoro",
    category: "Verdure grigliate",
    region: "Toscana",
    time: "10 min",
    difficulty: "Facile",
    serves: 4,
    image: bruschetta,
    excerpt: "Pane abbrustolito, pomodori freschi, basilico e olio buono.",
    ingredients: [
      "Pane casereccio",
      "4 pomodori maturi",
      "Aglio",
      "Basilico",
      "Olio extravergine",
      "Sale",
    ],
    steps: [
      "Taglia il pane casereccio a fette spesse circa 1,5 cm. Tostale su una griglia rovente, in una padella di ghisa o sotto il grill del forno per 2-3 minuti per lato, finché sono dorate, croccanti fuori e ancora morbide all'interno.",
      "Sbuccia uno spicchio d'aglio e strofinalo energicamente sulla superficie ancora calda di ogni fetta di pane: il calore farà sprigionare tutto il profumo. Condisci con un filo generoso di olio extravergine d'oliva di buona qualità.",
      "Lava i pomodori maturi (meglio se San Marzano o cuore di bue), eliminane i semi in eccesso e tagliali a cubetti piccoli e regolari. Mettili in una ciotola e condiscili con sale, qualche foglia di basilico spezzettata a mano, un giro d'olio extravergine e, se ti piace, un pizzico di origano.",
      "Lascia insaporire i pomodori per 5 minuti a temperatura ambiente, in modo che rilascino i loro succhi naturali e si amalgamino i sapori.",
      "Distribuisci generosamente il composto di pomodoro sulle fette di pane tostato e servi immediatamente, prima che il pane si ammorbidisca. Completa con una foglia di basilico fresco e una macinata di pepe a piacere.",
    ],
  },
];

export const getRecipe = (slug: string) => recipes.find((r) => r.slug === slug);
