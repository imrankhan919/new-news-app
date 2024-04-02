import { useReducer } from "react";
import { createContext } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const initialState = {
    allNews: [
      {
        source: { id: null, name: "Daily Geek Show" },
        author: "contact@dailygeekshow.com (DGS), DGS",
        title: "Le robot humanoïde 1X est maintenant capable de plier le linge",
        description:
          "Dans une nouvelle vidéo, on peut voir le robot humanoïde Eve en train de plier du linge.\nThe post Le robot humanoïde 1X est maintenant capable de plier le linge appeared first on Daily Geek Show.",
        url: "https://dailygeekshow.com/robot-humanoide-1x-linge/",
        urlToImage:
          "https://dailygeekshow.com/wp-content/uploads/2024/03/une-robot-linge.jpg",
        publishedAt: "2024-04-01T10:30:00Z",
        content:
          "Il y a à peine un mois, les robots Eve accomplissaient des tâches de base comme ramasser des objets et franchir les portes. Aujourdhui, ces machines à apprentissage rapide ont atteint un tout autre n… [+1529 chars]",
      },
      {
        source: { id: null, name: "Marketscreener.com" },
        author: null,
        title:
          "Futures rise as signs of softening inflation bolster rate cut hopes",
        description:
          "(marketscreener.com) \n \n * Futures up: Dow 0.28%, S&P 0.33%, Nasdaq 0.48%\n \n April 1 -\n U.S. stock index futures rose on Monday after the latest\ninflation print showed moderating consumer prices, bolstering\nhopes of an early interest rate cut by the Federal R…",
        url: "https://www.marketscreener.com/quote/stock/SPIRIT-AIRLINES-INC-39143167/news/Futures-rise-as-signs-of-softening-inflation-bolster-rate-cut-hopes-46328705/",
        urlToImage:
          "https://www.marketscreener.com/images/reuters/2023-03/2023-03-23T054134Z_1_LYNXMPEJ2M041_RTROPTP_3_USA-FED-INVESTORS.JPG",
        publishedAt: "2024-04-01T10:26:17Z",
        content:
          "(For a Reuters live blog on U.S., UK and European stock\r\nmarkets, click or type LIVE/ in a news window.)\r\n* Futures up: Dow 0.28%, S&P 0.33%, Nasdaq 0.48%\r\nApril 1 (Reuters) -\r\nU.S. stock index f… [+2591 chars]",
      },
      {
        source: { id: null, name: "Insurance Journal" },
        author: "Admin",
        title:
          "US Finalizes New Tailpipe Emissions Limits for Heavy Duty Vehicles",
        description:
          "The U.S. government said on Friday it was finalizing tighter tailpipe emissions standards for heavy duty vehicles like semi-trucks and buses, but the new rules would not be as strict as initially proposed in 2023. The Environmental Protection Agency (EPA) …",
        url: "https://www.insurancejournal.com/news/national/2024/04/01/767286.htm",
        urlToImage:
          "https://www.insurancejournal.com/app/uploads/2024/04/motor-vehicle-traffic-on-interstate-76-in-philadelphia-AP-scaled.jpg",
        publishedAt: "2024-04-01T10:21:51Z",
        content:
          "The U.S. government said on Friday it was finalizing tighter tailpipe emissions standards for heavy duty vehicles like semi-trucks and buses, but the new rules would not be as strict as initially pro… [+3417 chars]",
      },
      {
        source: { id: null, name: "Electrek" },
        author: "Jennifer Mossalgue",
        title:
          "Xiaomi EV buyers will have to wait up to seven months for the SU7",
        description:
          "Chinese smartphone giant Xiaomi is alerting potential buyers of its new SU7 sedan that they could have a seven-month wait ahead before getting the car – a sign of strong demand for an EV that is directly gunning for the Tesla Model 3.\n\n\n\n more…",
        url: "http://electrek.co/2024/04/01/xiaomi-ev-buyers-will-have-to-wait-up-to-seven-months-for-the-su7/",
        urlToImage:
          "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/02/Xiaomi-EV-SU7-front.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2024-04-01T10:18:59Z",
        content:
          "Chinese smartphone giant Xiaomi is alerting potential buyers of its new SU7 sedan that they could have a seven-month wait ahead before getting the car a sign of strong demand for an EV that is direct… [+2772 chars]",
      },
      {
        source: { id: null, name: "NDTV News" },
        author: null,
        title:
          'Musk Joins Disney As "Chief DEI Officer", Internet Says April Fools Prank',
        description:
          "Elon Musk demanded the firing of Disney CEO Bob Iger in response to Disney's decision to pull advertisements from his social media platform in December.",
        url: "https://www.ndtv.com/world-news/elon-musk-joins-disney-as-chief-dei-officer-internet-calls-it-april-fools-prank-5351539",
        urlToImage:
          "https://c.ndtvimg.com/2024-02/frr9q5p_elon-musk-reuters_625x300_02_February_24.jpeg",
        publishedAt: "2024-04-01T10:18:17Z",
        content:
          "Disney has not commented on Mr Musk's post.\r\nBillionaire Elon Musk announced that he has joined Disney as Chief Diversity, Equity and Inclusion (DEI) Officer. He took to X (formerly Twitter) and wrot… [+2164 chars]",
      },
      {
        source: { id: null, name: "Investing.com" },
        author: "Reuters",
        title: "Would-be Tesla buyers snub company as Musk's reputation dips",
        description:
          "Would-be Tesla buyers snub company as Musk's reputation dips",
        url: "https://www.investing.com/news/economy/wouldbe-tesla-buyers-snub-company-as-musks-reputation-dips-3359179",
        urlToImage:
          "https://i-invdn-com.investing.com/news/LYNXMPECAT103_L.jpg",
        publishedAt: "2024-04-01T10:12:16Z",
        content:
          "By Hyunjoo Jin and Nick Carey\r\nSAN FRANCISCO/LONDON (Reuters) - The ranks of would-be Tesla (NASDAQ:TSLA) buyers in the United States are shrinking, according to a survey by market intelligence firm … [+5234 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "finance.yahoo.com",
        title:
          "Cathie Wood's Ark Invest Has 14% of Its Portfolio Invested in 2 Growth Stocks",
        description:
          "Cathie Wood is the lead portfolio manager at Ark Invest, an asset management firm that runs a series of thematic index funds focused on disruptive technologies, everything from artificial intelligence and robotics to blockchain and DNA sequencing. Wood ranked…",
        url: "https://biztoc.com/x/50d59c7851cc3eb7",
        urlToImage: "https://c.biztoc.com/p/50d59c7851cc3eb7/s.webp",
        publishedAt: "2024-04-01T10:10:06Z",
        content:
          "Cathie Wood is the lead portfolio manager at Ark Invest, an asset management firm that runs a series of thematic index funds focused on disruptive technologies, everything from artificial intelligenc… [+292 chars]",
      },
      {
        source: { id: null, name: "Paul Tan's Automotive News" },
        author: "Mick Chan",
        title:
          "2024 Tesla Model 3 Performance ‘Highland’ EV spied under covers – more powerful variant to debut soon?",
        description:
          "It appears that the latest iteration of the Tesla Model 3 Performance is set to make its debut soon, courtesy of a post by X/Twitter user Chris Cheng. The event appears to be being staged […]\nThe post 2024 Tesla Model 3 Performance ‘Highland’ EV spied under c…",
        url: "https://paultan.org/2024/04/01/2024-tesla-model-3-performance-highland-ev-spied-under-covers-more-powerful-variant-to-debut-soon/",
        urlToImage:
          "https://paultan.org/image/2024/04/2024-Tesla-Model-3-Performance-Highland-spied-4-e1711962975465-1200x630.jpg",
        publishedAt: "2024-04-01T10:09:34Z",
        content:
          "It appears that the latest iteration of the Tesla Model 3 Performance is set to make its debut soon, courtesy of a post by X/Twitter user Chris Cheng. The event appears to be being staged somewhere i… [+1850 chars]",
      },
      {
        source: { id: "marca", name: "Marca" },
        author: "Carlos Espinosa",
        title:
          "Colas de varias horas para recargar los coches eléctricos esta Semana Santa",
        description:
          "Un buen número de conductores vivió este pasado domingo la peor cara de la conducción eléctrica, al tener que esperar varias horas en los súper cargadores de Tesla para recargar sus coches.  Leer",
        url: "https://www.marca.com/coches-y-motos/trafico/2024/04/01/660a82dfe2704e6d918b45b0.html",
        urlToImage:
          "https://phantom-marca.unidadeditorial.es/13218f8e16e86cc4381f2e39a6ab8227/resize/1200/f/webp/assets/multimedia/imagenes/2024/04/01/17119645938695.jpg",
        publishedAt: "2024-04-01T10:08:39Z",
        content:
          "Un buen número de conductores de coches eléctricos han pasado este domingo de Semana Santa varias horas esperando para poder recargar su vehículo. Y, cómo no, las imágenes de las largas colas no han … [+1037 chars]",
      },
      {
        source: { id: null, name: "Investing.com" },
        author: "Investing.com",
        title:
          "Wells Fargo reiterates Tesla stock rating, concerned on delivery growth",
        description:
          "Wells Fargo reiterates Tesla stock rating, concerned on delivery growth",
        url: "https://www.investing.com/news/company-news/wells-fargo-reiterates-tesla-stock-rating-concerned-on-delivery-growth-93CH-3359155",
        urlToImage:
          "https://i-invdn-com.investing.com/news/LYNXNPEBA30A1_L.jpg",
        publishedAt: "2024-04-01T10:08:16Z",
        content:
          "On Monday, Wells Fargo reiterated its underweight rating on Tesla Inc (NASDAQ:TSLA) with a steady price target of $125.00. The firm's stance reflects concerns over Tesla's delivery growth, which is e… [+3171 chars]",
      },
      {
        source: { id: null, name: "Yahoo Entertainment" },
        author: null,
        title: "Would-be Tesla buyers snub company as Musk's reputation dips",
        description: null,
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0313c308-e5b4-4d2b-9d23-206bdcb519a3",
        urlToImage: null,
        publishedAt: "2024-04-01T10:07:51Z",
        content:
          "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]",
      },
      {
        source: { id: null, name: "Europapress.es" },
        author: null,
        title:
          "Uno de cada cinco coches eléctricos matriculados en Europa en febrero fue fabricado en China",
        description:
          "Uno de cada cinco vehículo eléctricos de batería (BEV, por sus siglas en inglés) matriculados en Europa (20%) en febrero y en los dos primeros meses de este año fueron fabricados en China, ocupando el tercer puesto en la cuota de mercado de este tipo de autom…",
        url: "https://www.europapress.es/motor/sector-00644/noticia-cada-cinco-coches-electricos-matriculados-europa-febrero-fue-fabricado-china-20240401120407.html",
        urlToImage:
          "https://img.europapress.es/fotoweb/fotonoticia_20240401120407_1200.jpg",
        publishedAt: "2024-04-01T10:04:07Z",
        content:
          "Tesla sigue dominando el mercado de vehículos eléctricos, con el Model Y y el Model 3\r\n MADRID, 1 Abr. (EUROPA PRESS) - \r\n Uno de cada cinco vehículo eléctricos de batería (BEV, por sus siglas en ing… [+6118 chars]",
      },
      {
        source: { id: null, name: "Www.abc.es" },
        author: "(abc)",
        title:
          "Uno de cada cuatro coches eléctricos vendidos en Europa será «Made in China»",
        description:
          "Sólo el 17% de los coches eléctricos vendidos en Europa son vehículos compactos del segmento B, que son más baratos, frente al 37% de los nuevos motores de combustión. Los fabricantes de automóviles están frenando la adopción de vehículos eléctricos al priori…",
        url: "https://www.abc.es/motor/economia/cuatro-coches-electricos-vendidos-europa-made-china-20240401120307-nt.html",
        urlToImage:
          "https://s3.abcstatics.com/abc/www/multimedia/motor/2024/04/01/parking-electrico-U02866081601hZL-1024x512@diario_abc.jpg",
        publishedAt: "2024-04-01T10:03:07Z",
        content:
          "Sólo el 17% de los coches eléctricos vendidos en Europa son vehículos compactos del segmento B, que son más baratos, frente al 37% de los nuevos motores de combustión. Los fabricantes de automóviles … [+121 chars]",
      },
      {
        source: { id: null, name: "ETF Daily News" },
        author: "MarketBeat News",
        title:
          "Direxion Daily TSLA Bear 1X Shares (NASDAQ:TSLS) Sees Large Drop in Short Interest",
        description:
          "Direxion Daily TSLA Bear 1X Shares (NASDAQ:TSLS – Get Free Report) was the target of a significant decrease in short interest in March. As of March 15th, there was short interest totalling 143,000 shares, a decrease of 16.5% from the February 29th total of 17…",
        url: "https://www.etfdailynews.com/2024/04/01/direxion-daily-tsla-bear-1x-shares-nasdaqtsls-sees-large-drop-in-short-interest/",
        urlToImage:
          "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/generic-stocks5.jpg&w=240&h=240&zc=2",
        publishedAt: "2024-04-01T10:02:42Z",
        content:
          "Direxion Daily TSLA Bear 1X Shares (NASDAQ:TSLS – Get Free Report) was the target of a significant decrease in short interest in March. As of March 15th, there was short interest totalling 143,000 sh… [+2553 chars]",
      },
      {
        source: { id: null, name: "Techreport.com" },
        author: "Lora Pance",
        title:
          "Elon Musk’s Latest Venture: Launching a Cryptocurrency for Interplanetary Trade",
        description:
          "Insider reveals the tech mogul Elon Musk is launching interplanetary crypto, a move anticipated by the community for years. Is this ambitious venture feasible, and when will we see the...\nThe post Elon Musk’s Latest Venture: Launching a Cryptocurrency for Int…",
        url: "https://techreport.com/crypto-news/elon-musk-launches-interplanetary-crypto/",
        urlToImage:
          "https://techreport.com/wp-content/uploads/2024/04/musk.jpg?_t=1711965631",
        publishedAt: "2024-04-01T10:00:30Z",
        content:
          "Insider reveals the tech mogul Elon Musk is launching interplanetary crypto, a move anticipated by the community for years. Is this ambitious venture feasible, and when will we see the official annou… [+3466 chars]",
      },
      {
        source: { id: null, name: "Mother Jones" },
        author: "Julia Métraux",
        title:
          "Disabled Drivers Can’t Use Many Electric Car Chargers. It Doesn’t Have to Be This Way.",
        description:
          "Rolling up to a Tesla charging port, Illinois Republican state Sen. Dan McConchie grimaced that wheelchair users like him couldn’t use it—or any of the others at the gas station where he filmed his Instagram reel. They’d all been placed on a raised surface th…",
        url: "https://www.motherjones.com/environment/2024/04/disabled-drivers-ev-chargers-accessible-electric-cars/",
        urlToImage:
          "https://www.motherjones.com/wp-content/uploads/2024/03/20240326_ev-stations-inaccessable_2000b.jpg?w=1200&h=630&crop=1",
        publishedAt: "2024-04-01T10:00:28Z",
        content:
          "Mother Jones; Lori Van Buren/Albany Times Union/Getty\r\nRolling up to a Tesla charging port, Illinois Republican state Sen. Dan McConchie grimaced that wheelchair users like him couldn’t use itor any … [+8760 chars]",
      },
      {
        source: { id: null, name: "Marketscreener.com" },
        author: null,
        title: "Would-be Tesla buyers snub company as Musk's reputation dips",
        description:
          "(marketscreener.com) The ranks of\nwould-be Tesla buyers in the United States are shrinking,\naccording to a survey by market intelligence firm Caliber, which\nattributed the drop in part to CEO Elon Musk's polarizing\npersona.\n While Tesla continued to post stro…",
        url: "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Would-be-Tesla-buyers-snub-company-as-Musk-s-reputation-dips-46328560/",
        urlToImage:
          "https://www.marketscreener.com/images/reuters/2024-03/2024-03-06T022421Z_1_LYNXNPEK25028_RTROPTP_3_USA-ELECTION-TRUMP-MUSK.JPG",
        publishedAt: "2024-04-01T10:00:00Z",
        content:
          "SAN FRANCISCO/LONDON, April 1 (Reuters) - The ranks of\r\nwould-be Tesla buyers in the United States are shrinking,\r\naccording to a survey by market intelligence firm Caliber, which\r\nattributed the dro… [+5422 chars]",
      },
      {
        source: { id: null, name: "Aps.org" },
        author: "Chu-Tian Gao, Yu Gao, Yiming Liu, and Sichun Sun",
        title:
          "Novel high-frequency gravitational waves detection with split cavity",
        description:
          "Gravitational waves can generate electromagnetic effects inside a strong electric or magnetic field within the Standard Model and general relativity. Here we propose using a quarterly split cavity and LC (inductor and capacitor) resonance circuit to detect a …",
        url: "https://link.aps.org/doi/10.1103/PhysRevD.109.084004",
        urlToImage: null,
        publishedAt: "2024-04-01T10:00:00Z",
        content:
          "Figure 4\r\nProjected sensitivity to the stress of a GW signal, with coherent factor Q\r\n=\r\n10\r\n6\r\nand 10\r\n3\r\n, corresponding to narrowband searches. For comparison, existing experimental limits from AB… [+140 chars]",
      },
      {
        source: { id: null, name: "Motor.ru" },
        author: "Мария Руцкая",
        title: "Электрокар Xiaomi придется ждать от четырех до семи месяцев",
        description:
          "Электрокар Xiaomi придется ждать от четырех до семи месяцев. Китайский производитель смартфонов и «умной» техники в минувший четверг запустил продажи своего первого автомобиля — электроседана SU7. Первенец техногиганта, который оказался более чем вдвое дешевл…",
        url: "https://motor.ru/news/xiaomi-queue-01-04-2024.htm",
        urlToImage:
          "https://motor.ru/imgs/2024/04/01/07/6417147/60e42836809036a7548fbf895f8b48274f55c4bd.png",
        publishedAt: "2024-04-01T09:58:14Z",
        content:
          "Xiaomi Car, , SU7 18-21 , 4-5 . 299- , «» 5,28 «» 700 . 215 900 (2,8 ).\r\n SU7 Pro , SU7 Max c 673- 27-30 (6-7 ). 100 SU7 Max 2,78 800 101 -. 299 900 , 3,9 .",
      },
      {
        source: { id: null, name: "Digitimes" },
        author: "DIGITIMES",
        title: "Tesla China price hike meets slew of cuts from other carmakers",
        description:
          "China's automakers are piling in to take advantage of Tesla Inc.'s recent price hike and defend against Xiaomi Corp.'s disruptive market entry, offering sweeteners such as subsidies and coupons to lure would-be car buyers.",
        url: "https://www.digitimes.com/news/a20240401VL211.html",
        urlToImage:
          "https://img.digitimes.com/newsshow/20240401vl211_files/2_2b.jpg",
        publishedAt: "2024-04-01T09:43:28Z",
        content:
          "Save my User ID and Password\r\nSome subscribers prefer to save their log-in information so they do not have to enter their User ID and Password each time they visit the site. To activate this function… [+307 chars]",
      },
      {
        source: { id: "der-tagesspiegel", name: "Der Tagesspiegel" },
        author: "Der Tagesspiegel",
        title:
          "Über Ostern im Süden auf Stufe vier erhöht: Waldbrandgefahr in Brandenburg steigt wieder",
        description:
          "Noch lassen durchgängig hohe Temperaturen auf sich warten, doch Behörden haben die Waldbrandgefahr längst im Visier.",
        url: "https://www.tagesspiegel.de/berlin/uber-ostern-im-suden-auf-stufe-vier-erhoht-waldbrandgefahr-in-brandenburg-steigt-wieder-11448212.html",
        urlToImage:
          "https://www.tagesspiegel.de/images/waldbrandlage-in-brandenburg-gefahr-nimmt-zu2/alternates/BASE_16_9_W1400/waldbrandlage-in-brandenburg---gefahr-nimmt-zu.jpeg",
        publishedAt: "2024-04-01T09:40:49Z",
        content:
          "Die Waldbrandgefahr in Brandenburg hat sich über Ostern im Süden leicht erhöht. Im Landkreis Spree-Neiße und der kreisfreien Stadt Cottbus wurde nach Stufe drei am Sonntag Gefahrenstufe vier ausgeruf… [+1836 chars]",
      },
      {
        source: { id: null, name: "Hipertextual" },
        author: "Rubén Chicharro",
        title:
          "El Xiaomi SU7 es un éxito: arrasa en ventas y ya mete miedo a Tesla y Porsche",
        description:
          "El Xiaomi SU7, el primer vehículo eléctrico del fabricante de smartphones chino que pretende competir contra el Tesla Model S a un precio incluso inferior al del Model 3, está arrasando en ventas tan solo unas horas después de que la compañía abriese las rese…",
        url: "http://hipertextual.com/2024/04/el-xiaomi-su7-es-un-exito-arrasa-en-ventas-y-ya-mete-miedo-a-tesla-y-porsche",
        urlToImage:
          "https://imgs.hipertextual.com/wp-content/uploads/2024/02/Xiaomi-SU7-Max-09.jpg",
        publishedAt: "2024-04-01T09:37:03Z",
        content:
          "El Xiaomi SU7, el primer vehículo eléctrico del fabricante de smartphones chino que pretende competir contra el Tesla Model S a un precio incluso inferior al del Model 3, está arrasando en ventas tan… [+2319 chars]",
      },
      {
        source: { id: null, name: "Overclockers.ru" },
        author: "Алексей Сычёв",
        title:
          "Tesla удивила многих, подняв цены на свои кроссоверы Model Y в Китае",
        description:
          "Пусть всего на пару процентов, но остальные-то их снижают.",
        url: "https://overclockers.ru/hardnews/show/133120/tesla-udivila-mnogih-podnyav-ceny-na-svoi-krossovery-model-y-v-kitae",
        urlToImage:
          "https://overclockers.ru/st/images/preview/XBNSl9BdnVuOSXB8.jpg",
        publishedAt: "2024-04-01T09:28:00Z",
        content:
          "Tesla , , Model Y $700. Model 3 , Bloomberg. , , .\r\n NIO $138 , . , .\r\nXPeng $3000, Chery . Tesla , . , Tesla , , .",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "coingape.com",
        title:
          "Elon Musk’s Cryptic Comment Over Disney & Bob Iger Sparks Speculation",
        description:
          "Elon Musk, the enigmatic CEO of Tesla and owner of the social media giant X, formerly known as Twitter, has once again ignited a storm of speculation with his latest remarks on the social media platform. This time, Elon Musk’s target was Disney and its CEO, B…",
        url: "https://biztoc.com/x/df735fc7b7b401db",
        urlToImage: "https://c.biztoc.com/p/df735fc7b7b401db/s.webp",
        publishedAt: "2024-04-01T09:22:05Z",
        content:
          "Elon Musk, the enigmatic CEO of Tesla and owner of the social media giant X, formerly known as Twitter, has once again ignited a storm of speculation with his latest remarks on the social media platf… [+284 chars]",
      },
      {
        source: { id: null, name: "Marketscreener.com" },
        author: null,
        title:
          "News Highlights: Top Global Markets News of the Day - Monday at 5 AM ET",
        description:
          "(marketscreener.com) \nExpect Many Rate Cuts? Arguing One and Done. \n \n\n The Wall Street consensus is that the Federal Reserve is poised to make multiple rate cuts in 2024. Current conditions undermine that. \n\n \nThe Stock Market's Magnificent Seven Is Now the …",
        url: "https://www.marketscreener.com/quote/commodity/WTI-2355639/news/News-Highlights-Top-Global-Markets-News-of-the-Day-Monday-at-5-AM-ET-46328358/",
        urlToImage:
          "https://www.marketscreener.com/images/reuters/2016-03-25T085819Z_3_LYNXNPEC2N19H_RTROPTP_2_USA-ECONOMY-OIL.JPG",
        publishedAt: "2024-04-01T09:15:41Z",
        content:
          "Expect Many Rate Cuts? Arguing One and Done. \r\nThe Wall Street consensus is that the Federal Reserve is poised to make multiple rate cuts in 2024. Current conditions undermine that. \r\nThe Stock Marke… [+1866 chars]",
      },
      {
        source: { id: null, name: "Amazon.de" },
        author: null,
        title:
          "Ottocast U2AIR PRO Wireless CarPlay Adapter Kompatibel mit Autos ab 2016 & iPhone iOS 10+, Adapter Konvertiert Kabelgebundenes CarPlay in Drahtloses, Plug-und-Play, 5 GHz Wi-Fi, USB C/ A & USB C/ C",
        description:
          "Dienstag ab 10:19 Uhr: Ottocast U2AIR PRO Wireless CarPlay Adapter Kompatibel mit Autos ab 2016 & iPhone iOS 10+, Adapter Konvertiert Kabelgebundenes CarPlay in Drahtloses, Plug-und-Play, 5 GHz Wi-Fi, USB C/ A & USB C/ C (regulärer Amazon Preis: 89,99 Euro) -…",
        url: "https://www.amazon.de/dp/B0CQY8HF1J?tag=winfudedasonl-21&linkCode=ogi&th=1&psc=1",
        urlToImage: null,
        publishedAt: "2024-04-01T09:09:53Z",
        content:
          "Adaptador CarPlay OTTOCAST U2AIR PROOttocast es una Marca de referencia en la Fabricación de Dispositivos y Accesorios CarPlay.En este caso, nos presentan el Nuevo OttoCast U2Air Pro. Es un 30% más r… [+2901 chars]",
      },
      {
        source: { id: null, name: "[Removed]" },
        author: null,
        title: "[Removed]",
        description: "[Removed]",
        url: "https://removed.com",
        urlToImage: null,
        publishedAt: "1970-01-01T00:00:00Z",
        content: "[Removed]",
      },
      {
        source: { id: null, name: "Bolsamania.com" },
        author: "redaccion@bolsamania.com (María Campillo)",
        title:
          "Wall Street anticipa compras moderadas tras el PCE y las palabras de Powell",
        description:
          "Wall Street anticipa compras moderadas este lunes tras el signo mixto del jueves y después de poner fin a un mes de marzo y a un primer trimestre del año alcistas, que permitieron al S&P 500 registrar su mejor arranque de curso desde 2019. El viernes, con el …",
        url: "https://www.bolsamania.com/noticias/mercados/wall-street-lunes-pce-palabras-powell--16526787.html",
        urlToImage:
          "https://img1.s3wfg.com/web/img/images_uploaded/d/a/photo-d-archives-d-un-panneau-de-wall-street-a-new-york-aux-etats-unis_rsz.jpg",
        publishedAt: "2024-04-01T09:08:52Z",
        content:
          "Wall Street anticipa compras moderadas este lunes tras el signo mixto del jueves y después de poner fin a un mes de marzo y a un primer trimestre del año alcistas, que permitieron al S&P 500 regi… [+3058 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "notateslaapp.com",
        title:
          "Tesla Transitions FSD from Beta to Supervised with Release of v12.3.3: Semantics or Legitimate Upgrade?",
        description:
          "Tesla Transitions FSD from Beta to Supervised with Release of v12.3.3: Semantics or Legitimate Upgrade? Tesla has finally taken the training wheels off, well, almost. After years of including the word “Beta” every time Full Self-Driving is mentioned, the comp…",
        url: "https://biztoc.com/x/a80ae1165565acc5",
        urlToImage: "https://c.biztoc.com/p/a80ae1165565acc5/og.webp",
        publishedAt: "2024-04-01T09:02:06Z",
        content:
          "Tesla Transitions FSD from Beta to Supervised with Release of v12.3.3: Semantics or Legitimate Upgrade?Tesla has finally taken the training wheels off, well, almost. After years of including the word… [+305 chars]",
      },
      {
        source: { id: null, name: "Securityaffairs.com" },
        author: "Pierluigi Paganini",
        title: "Info stealer attacks target macOS users",
        description:
          "Experts warn of info stealer malware, including Atomic Stealer, targeting Apple macOS users via malicious ads and rogue websites. Jamf Threat Labs researchers analyzed info stealer malware attacks targeting macOS users via malicious ads and rogue websites. On…",
        url: "https://securityaffairs.com/161287/malware/info-stealer-malware-macos.html",
        urlToImage:
          "https://securityaffairs.com/wp-content/uploads/2024/03/image-28.png",
        publishedAt: "2024-04-01T09:01:06Z",
        content:
          "Info stealer attacks target macOS users\r\n | Security Affairs newsletter Round 465 by Pierluigi Paganini INTERNATIONAL EDITION\r\n | DinodasRAT Linux variant targets users worldwide\r\n | AT&T confirm… [+56875 chars]",
      },
      {
        source: { id: null, name: "El Financiero" },
        author: "Jonathan Ruiz Torre",
        title: "Van por las cajeras",
        description:
          "Rápidamente veremos que quienes quedan en esa zona de cobro son los más serviciales, aquellos quienes puedan comunicarse mejor con los clientes.",
        url: "https://www.elfinanciero.com.mx/opinion/jonathan-ruiz/2024/04/01/van-por-las-cajeras/",
        urlToImage:
          "https://www.elfinanciero.com.mx/resizer/BkCosa_Aw_iE3faCGivbL-xJv4k=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/UEZ4RXBCCBA5LJG2FPNX2A2OMI.jpg",
        publishedAt: "2024-04-01T09:00:00Z",
        content:
          "En el Costco uno ya no tiene que hacer fila para pedir y pagar comida. Una decena de máquinas se encarga de tomar pedidos y cobrar, luego de que clientes salivando pican con los dedos una pantalla qu… [+3636 chars]",
      },
      {
        source: { id: null, name: "Www.is.fi" },
        author: "Harry Kuurio",
        title:
          "Toyota kikkaili itsensä tilastokärkeen erikoisella tavalla – ”Mielenkiintoista olisi kyllä tietää, että mistä on kyse”",
        description:
          "Toyota on tehnyt Suomessa erikoisen tilastointiratkaisun suositun Corolla-mallinsa suhteen.",
        url: "https://www.is.fi/autot/art-2000010325178.html",
        urlToImage:
          "https://is.mediadelivery.fi/img/some/default/31179817a4b288aafd1bf7b3d4745f83.jpg",
        publishedAt: "2024-04-01T09:00:00Z",
        content:
          "Toyota on tehnyt Suomessa erikoisen tilastointiratkaisun suositun Corolla-mallinsa suhteen.Suomen ensirekisteröintitilastojen henkilöautojen ykköstilan nappasi viime vuonna ikisuosikkimme Toyota Coro… [+3576 chars]",
      },
      {
        source: { id: null, name: "Meneame.net" },
        author: "Quepasapollo",
        title:
          "El atasco de Semana Santa que nadie esperaba y que será cada vez más frecuente",
        description:
          "La operación retorno de Semana Santa supone un problema para todos los conductores por los atascos de regreso, pero algunos automovilistas los están sufriendo en particular. Los propietarios de Tesla se han encontrado con largas colas en las estaciones de sup…",
        url: "https://www.meneame.net/m/actualidad/atasco-semana-santa-nadie-esperaba-sera-cada-vez-mas-frecuente",
        urlToImage: "https://meneame.net/img/logo_meneame.png",
        publishedAt: "2024-04-01T08:55:29Z",
        content:
          "¿que nadie esperaba? Creo que ese es uno de los grandes miedos a la hora de comprar un eléctrico, lo incómodo que es hacer grandes distancias, y más en periodos de vacaciones\r\nAñado: Problemas del pr… [+10 chars]",
      },
      {
        source: { id: null, name: "Elconfidencialdigital.com" },
        author: "Comunicae",
        title:
          "Social Energy® garantiza por contrato 3 años de factura de luz a 0€",
        description:
          "Confidencial Digital. Contenidos confidenciales en español orientado a personas informadas que hoy en día desean estar aún más informadas",
        url: "https://www.elconfidencialdigital.com/articulo/comunicados/social-energy-garantiza-contrato-3-anos-factura-luz-0E/20240401085237751991.html",
        urlToImage: null,
        publishedAt: "2024-04-01T08:52:37Z",
        content:
          "En abril, la Triple Revolución Solar llega a España de la mano de Social Energy®. Es una empresa de capital español 100% que lidera el autoconsumo residencial con más de 8.000 clientes en toda España… [+3308 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "barrons.com",
        title: "These Stocks Are Moving the Most Today",
        description:
          "AT&T says personal data from millions of account holders has been leaked on the dark web, Super Micro Computer, the top stock in the S&P 500 in the first quarter, kicks off the second with gains, and Tesla rises ahead of first-quarter deliveries.#att #supermi…",
        url: "https://biztoc.com/x/5f0e232fa960d120",
        urlToImage: "https://c.biztoc.com/p/5f0e232fa960d120/s.webp",
        publishedAt: "2024-04-01T08:52:06Z",
        content:
          "AT&T says personal data from millions of account holders has been leaked on the dark web, Super Micro Computer, the top stock in the S&P 500 in the first quarter, kicks off the second with ga… [+124 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "barrons.com",
        title:
          "Stock Market Today: Dow Futures Rise; AT&T, Super Micro, Tesla, and Other Premarket Movers, Bitcoin; and More",
        description:
          "AT&T says personal data from millions of account holders has been leaked on the dark web, Super Micro Computer, the top stock in the S&P 500 in the first quarter, kicks off the second with gains, and Tesla rises ahead of first-quarter deliveries.#att #supermi…",
        url: "https://biztoc.com/x/d3b969c7d7d97abf",
        urlToImage: "https://c.biztoc.com/p/d3b969c7d7d97abf/s.webp",
        publishedAt: "2024-04-01T08:52:06Z",
        content:
          "AT&T says personal data from millions of account holders has been leaked on the dark web, Super Micro Computer, the top stock in the S&P 500 in the first quarter, kicks off the second with ga… [+124 chars]",
      },
      {
        source: { id: null, name: "N-tv.de" },
        author: "n-tv NACHRICHTEN",
        title:
          "China-Newcomer im Fahrbericht: Xpeng P7 und Xpeng G9 - zwei Neue auf dem deutschen Markt",
        description:
          "Die Welle an chinesischen Newcomern ebbt nicht ab. Neuer Hoffnungsträger ist VWs Partner Xpeng. Der gehört bisher noch zu den eher kleinen Anbietern. Werden sich nun Xpeng P7 und Xpeng G9 auf dem Markt etablieren können? Zumindest die Bord-Software hebt sie v…",
        url: "https://www.n-tv.de/auto/Xpeng-P7-und-Xpeng-G9-zwei-Neue-auf-dem-deutschen-Markt-article24842068.html",
        urlToImage:
          "https://bilder4.n-tv.de/img/incoming/crop24842083/5441322565-cImg_16_9-w1200/01-Xpeng-P7-Performance-Wing-Credits-XPENG-Motors-Germany.jpg",
        publishedAt: "2024-04-01T08:45:29Z",
        content:
          "Die Welle an chinesischen Newcomern ebbt nicht ab. Neuer Hoffnungsträger ist VWs Partner Xpeng. Der gehört bisher noch zu den eher kleinen Anbietern. Werden sich nun Xpeng P7 und Xpeng G9 auf dem Mar… [+8831 chars]",
      },
      {
        source: { id: null, name: "Meneame.net" },
        author: "Quepasapollo",
        title:
          "Las redes estallan contra las interminables colas de coches eléctricos para cargar los vehículos Tesla",
        description:
          'Este vídeo concretamente, tal y como aseguran las redes sociales, pertenecen a una gasolinera de la carretera de Valencia en la que aseguran, se han visto colas de espera de hasta 2 horas para poder cargar sus coches en los "supercagadores" de Tesla.etiquetas…',
        url: "https://www.meneame.net/m/actualidad/redes-estallan-contra-interminables-colas-coches-electricos",
        urlToImage: "https://meneame.net/img/logo_meneame.png",
        publishedAt: "2024-04-01T08:43:39Z",
        content:
          'Empiezo leyendo y...Reacción en masa contra la Agenda 2030 y sus políticas verdes\r\nbufff.\r\nLuego he pasado a su sección de sucesos, un buen semáforo para discernir "quien es quien", y la primera noti… [+143 chars]',
      },
      {
        source: { id: null, name: "Marketscreener.com" },
        author: null,
        title: "Xiaomi sees strong demand for debut EV",
        description:
          "(marketscreener.com) STORY: Xiaomi looks to be enjoying a strong debut in the market for electric cars. https://www.marketscreener.com/news/latest/Xiaomi-sees-strong-demand-for-debut-EV--46328413/?utm_medium=RSS&utm_content=20240401",
        url: "https://www.marketscreener.com/news/latest/Xiaomi-sees-strong-demand-for-debut-EV-46328413/",
        urlToImage:
          "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
        publishedAt: "2024-04-01T08:43:23Z",
        content:
          "STORY: Xiaomi looks to be enjoying a strong debut in the market for electric cars. \r\n Better known as a phone maker, the firm launched its first EV last week. \r\nThe SU7 sedan is priced from just unde… [+943 chars]",
      },
      {
        source: { id: null, name: "Bolsamania.com" },
        author: "redaccion@bolsamania.com (Álvaro Estévez)",
        title:
          "Tesla cumple con lo prometido y sube los precios de su Model Y en EEUU",
        description:
          "Quien avisa no es traidor. Tesla ha cumplido con lo prometido y ha subido en 1.000 dólares el precio de su Model Y en Estados Unidos desde este 1 de abril. Tras conocerse esta noticia, la compañía sube con moderación en la preapertura de Wall Street.",
        url: "https://www.bolsamania.com/noticias/empresas/tesla-cumple-prometido-sube-precios-model-y-eeuu--16526710.html",
        urlToImage:
          "https://img1.s3wfg.com/web/img/images_uploaded/4/7/ep_archivo_-_tesla_model_y.jpg",
        publishedAt: "2024-04-01T08:39:55Z",
        content:
          "Quien avisa no es traidor. Tesla ha cumplido con lo prometido y ha subido en 1.000 dólares el precio de su Model Y en Estados Unidos desde este 1 de abril. Tras conocerse esta noticia, la compañía su… [+2371 chars]",
      },
      {
        source: { id: null, name: "Haber7.com" },
        author: "Özgür Gündüz",
        title: "Tesla'dan zam kararı",
        description:
          "Tesla, ABD'de satışta olan Model Y otomobillerinin fiyatlarına zam yaptığını duyurdu.",
        url: "https://ekonomi.haber7.com/ekonomi/haber/3411532-tesladan-zam-karari",
        urlToImage:
          "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2024/14/tesladan_zam_karari_1711960630_1096.jpg",
        publishedAt: "2024-04-01T08:37:00Z",
        content:
          "Dünyann en büyük elektrikli otomobil üreticilerinden Tesla, resmi web sitesini güncelleyerek Model Y'nin Amerika Birleik Devletleri'ndeki tüm versiyonlarnn fiyatnda 1.000 dolarlk bir art yapldn duyur… [+339 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "finance.yahoo.com",
        title:
          'Down More Than 50%, This "Magnificent Seven" Stock Is a Screaming Buy',
        description:
          'From groundbreaking technological advancements to disruptive business models, each member of the "Magnificent Seven" has carved a niche for itself in the global economy. This group of megacap companies, consisting of Apple, Amazon, Alphabet, Microsoft, Meta P…',
        url: "https://biztoc.com/x/a12b1899f2c7c697",
        urlToImage: "https://c.biztoc.com/p/a12b1899f2c7c697/s.webp",
        publishedAt: "2024-04-01T08:32:05Z",
        content:
          'From groundbreaking technological advancements to disruptive business models, each member of the "Magnificent Seven" has carved a niche for itself in the global economy. This group of megacap compani… [+286 chars]',
      },
      {
        source: { id: null, name: "Paul Tan's Automotive News" },
        author: "Jonathan Lee",
        title:
          "Tesla Cybertruck makes ASEAN debut in Thailand on April 6 – is the electric pick-up coming to Malaysia?",
        description:
          "This just in – Tesla Thailand has announced that the Cybertruck will make an appearance at Tesla Center Ramkhamhaeng in Bangkok starting this Saturday, April 6. The Land of Smiles is the world’s biggest pick-up […]\nThe post Tesla Cybertruck makes ASEAN debut …",
        url: "https://paultan.org/2024/04/01/tesla-cybertruck-makes-asean-debut-in-thailand-on-april-6-is-the-electric-pick-up-coming-to-malaysia/",
        urlToImage:
          "https://paultan.org/image/2024/04/Tesla-Cybertruck-Thailand-teaser-e1711959384176-1200x630.jpeg",
        publishedAt: "2024-04-01T08:30:08Z",
        content:
          "This just in Tesla Thailand has announced that the Cybertruck will make an appearance at Tesla Center Ramkhamhaeng in Bangkok starting this Saturday, April 6. The Land of Smiles is the world’s bigges… [+2968 chars]",
      },
      {
        source: { id: null, name: "Daily Beast" },
        author: "Anthony L. Fisher",
        title:
          "Elon Musk Has Entered the ‘Please Clap’ Stage of His Megalomania",
        description:
          "Photo Illustration by Elizabeth Brockway/The Daily Beast/Getty\r\nRemember when Jeb Bush ran for president? (No one will judge you harshly if you don’t.) The son of a former president, the brother of another, and a successful two-term governor—Jeb was the GOP m…",
        url: "https://www.thedailybeast.com/elon-musk-has-entered-the-please-clap-stage-of-his-megalomania",
        urlToImage:
          "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/f_auto,q_auto/v1711739083/240329-elon-please-clap-hero-1_j9gka4",
        publishedAt: "2024-04-01T08:17:58Z",
        content:
          "Remember when Jeb Bush ran for president? (No one will judge you harshly if you dont.) The son of a former president, the brother of another, and a successful two-term governorJeb was the GOP moneys … [+5878 chars]",
      },
      {
        source: { id: null, name: "[Removed]" },
        author: null,
        title: "[Removed]",
        description: "[Removed]",
        url: "https://removed.com",
        urlToImage: null,
        publishedAt: "1970-01-01T00:00:00Z",
        content: "[Removed]",
      },
      {
        source: { id: null, name: "Faz.net" },
        author: "Carlotta Roch, Jakob Krembzow",
        title:
          "Diese Aprilscherze aus den vergangenen Jahren waren besonders gut",
        description:
          "Eine Lotterie erlässt Verkehrssündern Punkte in Flensburg, Tesla ist bankrott und aus Volkswagen wird Voltswagen: Der 1. April verleitet manch einen zu Scherzen – wir haben ein paar besonders witzige ausgewählt.",
        url: "https://www.faz.net/aktuell/gesellschaft/menschen/die-besten-aprilscherze-eine-auswahl-19620639.html",
        urlToImage:
          "https://media1.faz.net/ppmedia/aktuell/2137541293/1.9620993/facebook_teaser/bitte-lachen-in-roger-moores.jpg",
        publishedAt: "2024-04-01T08:09:32Z",
        content:
          "Siesta im Ikea\r\nEin Besuch bei Ikea kann sich schon mal in die Länge ziehen. Umso mehr müssen sich laufmüde Kunden 2015 über die Ankündigung von Ikea Deutschland gefreut haben, dass der schwedische M… [+4644 chars]",
      },
      {
        source: { id: null, name: "GlobeNewswire" },
        author: "Research and Markets",
        title:
          "Global and China Software-Defined Vehicles Industry Research 2024: Intelligent Driving Architectures, Safety and Open Source Developments",
        description:
          'Dublin, April 01, 2024 (GLOBE NEWSWIRE) -- The "Software-defined Vehicle Research Report, 2023-2024 - Industry Panorama and Strategy" report has been added to ResearchAndMarkets.com\'s offering.',
        url: "https://www.globenewswire.com/news-release/2024/04/01/2855005/28124/en/Global-and-China-Software-Defined-Vehicles-Industry-Research-2024-Intelligent-Driving-Architectures-Safety-and-Open-Source-Developments.html",
        urlToImage:
          "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
        publishedAt: "2024-04-01T08:08:00Z",
        content:
          'Dublin, April 01, 2024 (GLOBE NEWSWIRE) -- The "Software-defined Vehicle Research Report, 2023-2024 - Industry Panorama and Strategy" report has been added to ResearchAndMarkets.com\'s offering.\r\nWith… [+4293 chars]',
      },
      {
        source: { id: null, name: "Yanisvaroufakis.eu" },
        author: "Yanis Varoufakis",
        title: "TECHNOFEUDALISM reviewed by Geert Lovink",
        description:
          "A meme is spreading: capitalism is dead. We’re toiling around in its carcass. Nothing appears as it seems in this zombie state of affairs. But why didn’t we notice? There’s confusion all over. Climate, Covid, Ukraine, Gaza. Is history accelerating, or, rather…",
        url: "https://www.yanisvaroufakis.eu/2024/04/01/technofeudalism-reviewed-by-geert-lovink/",
        urlToImage:
          "https://www.yanisvaroufakis.eu/wp-content/uploads/2024/04/geert-2.jpg",
        publishedAt: "2024-04-01T08:03:32Z",
        content:
          "But why didnt we notice? Theres confusion all over. Climate, Covid, Ukraine, Gaza. Is history accelerating, or, rather the opposite, stagnating, even regressing? In his latest book Techno Feudalism, … [+18921 chars]",
      },
      {
        source: { id: null, name: "Www.dn.se" },
        author: null,
        title:
          "Insändare. Svar: Strejken mot Tesla har stort stöd bland svenskar",
        description:
          "Joakim Nordh och Jörgen Fransson, IF Metall Östra Skaraborg: Vi strejkar för att svenska modellen fortfarande ska vara den bästa modellen på arbetsmarknaden",
        url: "https://www.dn.se/insandare/svar-strejken-mot-tesla-har-stort-stod-bland-svenskar/",
        urlToImage:
          "https://cached-images.bonnier.news/gcs/bilder/dn-mly/6a35b1e1-99f8-44c4-8b5a-53363de15c41.jpeg?interpolation=lanczos-none&fit=around%7C1024:576&crop=1024:h;center,top&output-quality=80",
        publishedAt: "2024-04-01T08:03:10Z",
        content:
          "Svar på insändaren i Dagens Nyheter med rubriken Ge upp fackets kamp mot Tesla:\r\nInsändarskribenten har helt rätt i att Teslastrejken nu närmar sig fem månader, vilket med svenska mått är en väldigt … [+1463 chars]",
      },
      {
        source: { id: null, name: "Xataka.com" },
        author: "Ricardo Aguilar",
        title:
          "Lo que no te mata te hace más fuerte y Huawei es el ejemplo: la compañía dispara sus ingresos y vuelve a la carga",
        description:
          "Huawei registró en 2023 el mayor crecimiento en ingresos de los últimos cuatro años de la compañía. El beneficio neto se disparó un 144,5% en 2023 hasta los 87.000 millones de yuanes (12 millones de dólares), según detalla su reporte anual para inversores y a…",
        url: "https://www.xataka.com/empresas-y-economia/que-no-te-mata-te-hace-fuerte-huawei-ejemplo-compania-dispara-sus-ingresos-vuelve-a-carga",
        urlToImage: "https://i.blogs.es/da7936/p60-pro-xataka/840_560.jpeg",
        publishedAt: "2024-04-01T08:00:10Z",
        content:
          "Huawei registró en 2023 el mayor crecimiento en ingresos de los últimos cuatro años de la compañía. El beneficio neto se disparó un 144,5% en 2023 hasta los 87.000 millones de yuanes (12 millones de … [+2843 chars]",
      },
      {
        source: { id: null, name: "Investing.com" },
        author: "Investing.com",
        title: "Tesla lifts US prices of Model Y vehicles by $1,000",
        description: "Tesla lifts US prices of Model Y vehicles by $1,000",
        url: "https://www.investing.com/news/stock-market-news/tesla-lifts-us-prices-of-model-y-vehicles-by-1000-432SI-3358963",
        urlToImage:
          "https://i-invdn-com.investing.com/news/LYNXNPEF1P0T6_L.jpg",
        publishedAt: "2024-04-01T08:00:02Z",
        content:
          "On Monday, Tesla (NASDAQ:TSLA) took to its website to announce a $1,000 price hike for all its Model Y variants in the United States. \r\nThe adjustment brings the starting price of the Model Y base va… [+1338 chars]",
      },
      {
        source: { id: null, name: "Webrazzi.com" },
        author: "Candeğer Muradoğlu",
        title: "Otonom araç teknolojisi: Şirketler ve gelişmeler",
        description:
          "2000'lerin ilk yıllarında The Defense Advanced Research Projects Agency (DARPA) tarafından düzenlenen yarışmalar, otonom araçların geliştirilmesi için bir itici güç oldu. Bu yarışmalar, birçok teknoloji şirketinin ve araştırma grubunun otonom araç teknolojile…",
        url: "https://webrazzi.com/2024/04/01/otonom-arac-teknolojisi-sirketler-ve-gelismeler/",
        urlToImage:
          "https://cdn.webrazzi.com/uploads/2024/04/otonom-arac-23.png",
        publishedAt: "2024-04-01T08:00:00Z",
        content:
          "2000'lerin ilk yllarnda The Defense Advanced Research Projects Agency (DARPA) tarafndan düzenlenen yarmalar, otonom araçlarn gelitirilmesi için bir itici güç oldu. Bu yarmalar, birçok teknoloji irket… [+13125 chars]",
      },
      {
        source: { id: null, name: "Droidsans.com" },
        author: "popiko",
        title:
          "Tesla Model Y รุ่น HW 3.0 ลดราคาอีกรอบ สูงสุด 150,000 บาท และวางขายรุ่น HW 4.0 พร้อมตัวเลือกสีใหม่",
        description:
          "Tesla ประกาศลดราคารถยนต์ไฟฟ้า Tesla Model Y เฉพาะรุ่น HW 3.0 ซึ่งครั้งนี้ถือเป็นการประกาศลดราคาครั้งที่ 2 แล้ว โดยราคาเริ่มต้นจะอยู่ที่ 1,699,000 บาท พร้อมทั้งเปิดราคา Tesla Model Y รุ่น HW 4.0 ตามมาแบบติด ๆ ซึ่งวางขายในราคาเริ่มต้น 1,749,000 บาท และได้เพิ่มฟ…",
        url: "https://droidsans.com/tesla-model-y-hw-3-0-and-new-hw-4-0-price/",
        urlToImage:
          "https://images.droidsans.com/wp-content/uploads/2024/04/Tesla-Model-Y.png",
        publishedAt: "2024-04-01T07:59:27Z",
        content:
          "Tesla Tesla Model Y HW 3.0 2 1,699,000 Tesla Model Y HW 4.0 1,749,000 \r\n<ul><li>Tesla Model Y 1,699,000 \r\n ( 50,000 )</li><li>Tesla Model Y Long Range 1,949,000 \r\n ( 100,000 )</li><li>Tesla Model Y P… [+781 chars]",
      },
      {
        source: { id: null, name: "HYPEBEAST" },
        author: "info@hypebeast.com (Hypebeast)",
        title: "Xiaomi's SU7 EV Sees an Almost Instant Sell-Out",
        description:
          "Xiaomi has officially launched into the electric vehicle (EV) market with the SU7, a sleek addition to the EV world that merges innovative technology with eye-catching design, first revealed in late 2023. The vehicle comes in two versions: a dual-motor all-wh…",
        url: "https://hypebeast.com/2024/4/xiaomi-su7-ev-sold-out-2024-info",
        urlToImage:
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F04%2F01%2Fxiaomi-su7-ev-sold-out-2024-info-tw.jpg?w=1080&cbr=1&q=90&fit=max",
        publishedAt: "2024-04-01T07:53:14Z",
        content:
          "Xiaomi has officially launched into the electric vehicle (EV) market with the SU7, a sleek addition to the EV world that merges innovative technology with eye-catching design, first revealed in late … [+1917 chars]",
      },
      {
        source: { id: null, name: "Moneycontrol" },
        author: "Reuters",
        title: "Tesla raises prices of Model Y cars in US by $1,000",
        description:
          "The Model Y base variant will now cost $44,990, while the long range and performance variants are priced at $49,990 and $53,490, respectively, according to the Tesla website.",
        url: "https://www.moneycontrol.com/news/world/tesla-raises-prices-of-model-y-cars-in-us-by-1000-12554561.html",
        urlToImage:
          "https://images.moneycontrol.com/static-mcnews/2024/03/tesla-1738969_1280-653x435.jpg",
        publishedAt: "2024-04-01T07:49:38Z",
        content:
          "Tesla on Monday raised prices for all Model Y cars in the United States by $1,000, according to its website.\r\nThe Model Y base variant will now cost $44,990, while the long range and performance vari… [+202 chars]",
      },
      {
        source: { id: null, name: "Hibridosyelectricos.com" },
        author: "Javier Gómara",
        title:
          "Este enorme SUV eléctrico se convierte en el mejor coche del año 2024 en todo el mundo",
        description:
          "Por todo el mundo se celebran grandes ceremonias que otorgan premios más o menos importantes dentro de la industria del automóvil. Los galardones suponen un respaldo para las marcas a nivel de imagen, aunque también pueden convertirse en un argumento más de v…",
        url: "https://www.hibridosyelectricos.com/coches/kia-ev9-coche-ano-en-mundo_73460_102.html",
        urlToImage:
          "https://www.hibridosyelectricos.com/uploads/s1/65/74/93/kia-ev9-detalle_17_2000x1126.jpeg",
        publishedAt: "2024-04-01T07:47:39Z",
        content:
          "Por todo el mundo se celebran grandes ceremonias que otorgan premios más o menos importantes dentro de la industria del automóvil. Los galardones suponen un respaldo para las marcas a nivel de imagen… [+4041 chars]",
      },
      {
        source: { id: null, name: "Mail.ru" },
        author: "Газета.Ру",
        title: "Угнанная Tesla разрядилась во время погони",
        description:
          "Автомобиль Tesla журналистки FOX 11 Сьюзен Хисаруне, который угнали с парковки в Лос-Анджелесе, разрядился во время погони. Об этом сообщает издание NEWS.ru в Telegram-канале.",
        url: "https://auto.mail.ru/article/92372-ugnannaya-tesla-razryadilas-vo-vremya-pogoni/",
        urlToImage:
          "https://resizer.mail.ru/p/c6063d62-e59d-5c26-b8b7-ebd5a42e46f8/AQAB-KN4m9eG-WgNK9OwZbXnm5OwNP7Bf6kWYouTMfE8ijKiDGCE0J6KTCFb-insNWOhtqEeopyY6ubzFCjdGDeKLSQ.png",
        publishedAt: "2024-04-01T07:44:45Z",
        content: ",  . ,    , « ».   — Tesla  20  .",
      },
      {
        source: { id: null, name: "Ixbt.com" },
        author: "jin@ixbt.com (Jin)",
        title: "Tesla выпустила Cyberhammer. Новинку уже продают на eBay",
        description:
          "Спустя пару месяцев после того как стало известно, что Tesla готовится выпустить фитнес-молот для тренировок в стиле Cybertruck под названием Cyberhammer, новинка уже появилась на eBay. Фитнес-молот или кувалда для кроссфита обычно используют с большой шиной …",
        url: "https://www.ixbt.com/news/2024/04/01/tesla-cyberhammer-ebay.html",
        urlToImage:
          "https://www.ixbt.com/img/n1/news/2024/3/1/Снимок%20экрана%202024-04-01%20103923_large.jpg",
        publishedAt: "2024-04-01T07:35:00Z",
        content:
          ", Tesla - Cybertruck Cyberhammer, eBay.\r\n- . , . - , .\r\n , Tesla , CyberHammer. , Tesla. 800 .\r\nCyberHammer , Cybertruck. Franz, Tesla (Franz von Holzhausen), Cybertruck 2019 .\r\n CyberHammers eBay . … [+21 chars]",
      },
      {
        source: { id: "der-tagesspiegel", name: "Der Tagesspiegel" },
        author: "Der Tagesspiegel",
        title:
          "Kritik am Berliner Senat: BUND fordert mehr Anstrengungen für saubere Luft",
        description:
          "Die Umweltschützer vom BUND werfen dem schwarz-roten Senat vor, das Thema Luftreinhaltung nicht ernst genug zu nehmen. Sie machen sich für mehr Tempo-30-Zonen an Hauptstraßen stark.",
        url: "https://www.tagesspiegel.de/berlin/kritik-am-berliner-senat-bund-fordert-mehr-anstrengungen-fur-saubere-luft-11447852.html",
        urlToImage:
          "https://www.tagesspiegel.de/images/tempo-30-fur-bessere-luft/alternates/BASE_16_9_W1400/tempo-30-fuer-bessere-luft.jpeg",
        publishedAt: "2024-04-01T07:33:56Z",
        content:
          "Der Bund für Umwelt und Naturschutz (BUND) Berlin hat den Senat aufgefordert, sich ambitionierte Ziel bei der Luftreinhaltung zu setzen. Dazu gehöre, Geschwindigkeitsbeschränkungen auf Tempo 30 auf z… [+2311 chars]",
      },
      {
        source: { id: null, name: "Hibridosyelectricos.com" },
        author: "Alberto Pérez",
        title:
          "Mazda firma (por fin) la esperada asociación clave para sus futuros coches eléctricos",
        description:
          "En los últimos meses (e incluso años) se han dejado ver una multitud de rumores sobre qué se sacará Mazda de la manga para sus próximos coches eléctricos. Sin embargo, pese a estas muchas filtraciones, en ninguna se hacía mención a quién sería el suministrado…",
        url: "https://www.hibridosyelectricos.com/coches/mazda-firma-por-fin-esperada-asociacion-clave-sus-futuros-coches-electricos_73459_102.html",
        urlToImage:
          "https://www.hibridosyelectricos.com/uploads/s1/65/74/45/mazda-panasonic_17_2000x1126.jpeg",
        publishedAt: "2024-04-01T07:23:40Z",
        content:
          "En los últimos meses (e incluso años) se han dejado ver una multitud de rumores sobre qué se sacará Mazda de la manga para sus próximos coches eléctricos. Sin embargo, pese a estas muchas filtracione… [+2972 chars]",
      },
      {
        source: { id: null, name: "Inside.com.tw" },
        author: "精選轉貼",
        title:
          "我嘗試算了電動車碳排放量比油車少多少，好奇的話，你也可以自己算看看",
        description:
          "本文比較台灣最暢銷的電動車 Tesla Model Y、以及最暢銷的燃油車 Toyota Corolla Cross 汽油版和油電版，結論是有差！但也沒一些人想像那麼巨大。",
        url: "https://www.inside.com.tw/article/34637-electric-vehicle-carbon-emissions",
        urlToImage:
          "https://bucket-img.tnlmedia.com/cabinet/files/consoles/1/teams/1/2022/10/nHNFfM8dyKYtSRZlVYa9bbkfH8f1ajrwjdk91Da4.jpg?w=1200&h=630&fit=crop&auto=compress",
        publishedAt: "2024-04-01T07:21:00Z",
        content:
          "FacebookINSIDE \r\n2023 Tesla Model Y Toyota Corolla Cross \r\n Tesla Model Y 100 8.0 Toyota Corolla Cross 100 17.6 55% Toyota Corolla Cross 100 11.6 31%\r\n 2022 10 Tesla Model Y Long Range 6.2 6.2 100 / … [+916 chars]",
      },
      {
        source: { id: null, name: "Investing.com" },
        author: "Reuters",
        title: "Tesla raises prices of Model Y cars in US by $1,000",
        description: "Tesla raises prices of Model Y cars in US by $1,000",
        url: "https://www.investing.com/news/stock-market-news/tesla-raises-prices-of-model-y-cars-in-us-by-1000-3358943",
        urlToImage:
          "https://i-invdn-com.investing.com/news/LYNXMPEB2805O_L.jpg",
        publishedAt: "2024-04-01T07:20:39Z",
        content:
          "(Reuters) - Tesla (NASDAQ:TSLA) on Monday raised prices for all Model Y cars in the United States by $1,000, according to its website.\r\nThe Model Y base variant will now cost $44,990, while the long … [+228 chars]",
      },
      {
        source: { id: null, name: "Yahoo Entertainment" },
        author: null,
        title: "Tesla raises prices of Model Y cars in US by $1,000",
        description: null,
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_57512f19-cea6-49df-81bf-2d3264b223eb",
        urlToImage: null,
        publishedAt: "2024-04-01T07:19:39Z",
        content:
          "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]",
      },
      {
        source: { id: null, name: "L'Usine Nouvelle" },
        author: "L'Usine Nouvelle",
        title:
          "Légère baisse des immatriculations sur le marché français au mois de mars 2024",
        description:
          "La Plateforme automobile a fait état lundi 1er avril d’immatriculations de voitures neuves dans l’Hexagone au mois de mars en diminution de 1,47% en rythme annuel avec 180 024 véhicules écoulés. Une tendance qui s’explique en partie par les ventes de Stellant…",
        url: "https://www.usinenouvelle.com/article/legere-baisse-des-immatriculations-sur-le-marche-francais-au-mois-de-mars-2024.N2210680",
        urlToImage:
          "https://www.usinenouvelle.com/mediatheque/4/4/9/001508944_896x598_c.JPG",
        publishedAt: "2024-04-01T07:16:00Z",
        content:
          "Les ventes de véhicules particuliers sessoufflent dans lHexagone. Les immatriculations de voitures neuves en France ont diminué en mars de 1,47% en rythme annuel, selon les données communiquées lundi… [+3012 chars]",
      },
      {
        source: { id: null, name: "Marketscreener.com" },
        author: null,
        title: "Tesla raises prices of Model Y cars in US by $1,000",
        description:
          "(marketscreener.com) Tesla on Monday raised\nprices for all Model Y cars in the United States by $1,000,\naccording to its website.\n The Model Y base variant will now cost $44,990, while the\nlong range and performance variants are priced at $49,990 and\n$53,490,…",
        url: "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Tesla-raises-prices-of-Model-Y-cars-in-US-by-1-000-46327992/",
        urlToImage:
          "https://www.marketscreener.com/images/reuters/2024-04/2024-04-01T071939Z_1_LYNXNPEK300FH_RTROPTP_3_AUTOS-ELECTRIC.JPG",
        publishedAt: "2024-04-01T07:15:56Z",
        content:
          "April 1 (Reuters) - Tesla on Monday raised\r\nprices for all Model Y cars in the United States by $1,000,\r\naccording to its website.\r\nThe Model Y base variant will now cost $44,990, while the\r\nlong ran… [+298 chars]",
      },
      {
        source: { id: null, name: "Marketscreener.com" },
        author: null,
        title:
          "News Highlights: Top Global Markets News of the Day - Monday at 3 AM ET",
        description:
          "(marketscreener.com) \nExpect Many Rate Cuts? Arguing One and Done. \n \n\n The Wall Street consensus is that the Federal Reserve is poised to make multiple rate cuts in 2024. Current conditions undermine that. \n\n \nThe Stock Market's Magnificent Seven Is Now the …",
        url: "https://www.marketscreener.com/quote/commodity/WTI-2355639/news/News-Highlights-Top-Global-Markets-News-of-the-Day-Monday-at-3-AM-ET-46327986/",
        urlToImage:
          "https://www.marketscreener.com/images/reuters/2017-02-08T030825Z_1_LYNXMPED17043_RTROPTP_2_OIL-ARBITRAGE.JPG",
        publishedAt: "2024-04-01T07:15:20Z",
        content:
          "Expect Many Rate Cuts? Arguing One and Done. \r\nThe Wall Street consensus is that the Federal Reserve is poised to make multiple rate cuts in 2024. Current conditions undermine that. \r\nThe Stock Marke… [+1866 chars]",
      },
      {
        source: { id: null, name: "Onliner.by" },
        author: "Onliner",
        title:
          "Запас хода электрокара от Xiaomi сравнили с конкурентами  (дополнено)",
        description:
          "Компания Xiaomi вывела на китайский рынок свой первый автомобиль. Электрокар SU7 доступен в трех вариантах исполнения по цене 215 900–299 900 юаней (29 900–41 500 долларов). Заявленный запас хода на одном заряде составляет 800 километров. Но каков реальный по…",
        url: "https://auto.onliner.by/2024/04/01/pervyj-avtomobil-xiaomi",
        urlToImage:
          "https://content.onliner.by/news/default/afb991a799feea8f011824938b891395.jpg",
        publishedAt: "2024-04-01T07:06:43Z",
        content:
          "Xiaomi . SU7 215 900299 900 (29 90041 500 ). 800 . ?\r\n SU7 ,  Dongchendi 643 . , , , Tesla Model 3 AWD Long Range Nio ET5 (568 455 ).  Tesla CLTC 713 ,  Nio  650 .\r\n 100 /  Xiaomi . 3,24 . Nio ET5 3,… [+667 chars]",
      },
      {
        source: { id: null, name: "Abertoatedemadrugada.com" },
        author: "Carlos Martins",
        title: "Xiaomi SU7 já tem 7 meses de espera",
        description:
          "Tal como se fazia prever, quem quiser um Xiaomi SU7 já terá que se sujeitar com um prazo de entrega que vai de três a sete meses, dependendo do modelo",
        url: "https://abertoatedemadrugada.com/2024/04/xiaomi-su7-ja-tem-7-meses-de-espera.html",
        urlToImage:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBsgyKL06ul21QrihBiUQ1WvzFDq1Oz0BS9MQqLsu-t1od9_kCwYnO_bgZrrS7IBbbARgV9K042bhCoDumWrEPCRcAwhj0oiQJoMRjCRYyoVay1OFNN12XA3lipyaWOxkr5nmU0cXJEVRJfmv6R-mBENuK7ywcs0b4K9Il33SLkYhZPutUzSrj4VQazKqw/w1200-h630-p-k-no-nu/xiaomisu7.jpg",
        publishedAt: "2024-04-01T07:00:00Z",
        content:
          "Tal como se fazia prever, quem quiser um Xiaomi SU7 já terá que se sujeitar com um prazo de entrega que vai de três a sete meses, dependendo do modelo.\n\n\nDepois de muita espera, a Xiaomi revelou ofic… [+1605 chars]",
      },
      {
        source: { id: null, name: "Ixbt.com" },
        author: "jin@ixbt.com (Jin)",
        title:
          "Японский лунный модуль SLIM снова «заснул». Только в этот раз он может не «проснуться»",
        description:
          "Японский лунный модуль SLIM перевели в спящий режим перед заходом солнца в кратере Сиори на Луне, о чем пишет ТАСС со ссылкой на Японское агентство аэрокосмических исследований (JAXA). Функциональность датчиков и оборудования SLIM теряется, что подтвердили ра…",
        url: "https://www.ixbt.com/news/2024/04/01/japonskij-lunnyj-modul-slim-snova-zasnul-tolko-v-jetot-raz-on-mozhet-ne-prosnutsja.html",
        urlToImage:
          "https://www.ixbt.com/img/n1/news/2024/3/1/2024-01-19t131500z_1267341786_rc20l5a1pgbm_rtrmadp_3_japan-space_fb5_large.jpg",
        publishedAt: "2024-04-01T07:00:00Z",
        content:
          "SLIM , (JAXA).\r\n SLIM , , , .\r\n 20 , - 29 . 1 , 26 .\r\n1 JAXA , 28 , , .\r\n1 2024 10:00\r\n: Jin\r\n| : \r\n| : , \r\nGoogle . «» 500 \r\n<ul><li> SLIM «». «»: </li><li> 09:40Google . «» 500 . Google Podcasts</l… [+1655 chars]",
      },
      {
        source: { id: null, name: "Hibridosyelectricos.com" },
        author: "Javier Gómara",
        title:
          "Más potente que un Taycan, más grande que un Model 3 y más barato que un KIA, así es el coche de Xiaomi",
        description:
          "Vivimos una auténtica revolución en lo que a oferta de movilidad se refiere. Patinetes, bicis y otros formatos han llegado a nuestra vida para demostrar que hay muchas soluciones a nuestro alcance. Esta nueva era ha permitido a muchas empresas dar el salto. E…",
        url: "https://www.hibridosyelectricos.com/coches/precio-xiaomi-su7_73458_102.html",
        urlToImage:
          "https://www.hibridosyelectricos.com/uploads/s1/65/74/13/xiaomi-su7-trasera_17_2000x1126.jpeg",
        publishedAt: "2024-04-01T06:44:51Z",
        content:
          "Vivimos una auténtica revolución en lo que a oferta de movilidad se refiere. Patinetes, bicis y otros formatos han llegado a nuestra vida para demostrar que hay muchas soluciones a nuestro alcance. E… [+4163 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "benzinga.com",
        title:
          "Xiaomi's Tesla Model S Rival SU7 EV Hit By Massive 7-Month Delivery Delay",
        description:
          "Chinese tech giant Xiaomi has informed potential buyers of its new SU7 electric sedan about a possible delivery delay of up to seven months. What Happened: Xiaomi started accepting orders for the SU7 on Thursday, with the vehicle’s starting price set at $29,8…",
        url: "https://biztoc.com/x/e15d9ade90c0879c",
        urlToImage: "https://c.biztoc.com/p/e15d9ade90c0879c/s.webp",
        publishedAt: "2024-04-01T06:24:04Z",
        content:
          "Chinese tech giant Xiaomi has informed potential buyers of its new SU7 electric sedan about a possible delivery delay of up to seven months.What Happened: Xiaomi started accepting orders for the SU7 … [+295 chars]",
      },
      {
        source: { id: null, name: "Business Today" },
        author: "Reuters",
        title:
          "China's SAIC aims to slash jobs at GM, VW ventures and EV unit, sources say",
        description:
          "China's SAIC Motor plans to cut thousands of jobs in joint ventures with General Motors and Volkswagen, and its Rising Auto electric car unit, amid a price war, electric vehicle rise, and struggling economy.",
        url: "https://www.businesstoday.in/latest/world/story/chinas-saic-aims-to-slash-jobs-at-gm-vw-ventures-and-ev-unit-sources-say-423679-2024-04-01",
        urlToImage:
          "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202404/660a526c57ecc-saic-motor-plans-job-cuts-at-gm-and-volkswagen-ventures-amid-electric-vehicle-market-shift-012130705-16x9.jpg",
        publishedAt: "2024-04-01T06:22:06Z",
        content:
          "China's SAIC Motor 600104.SS aims to cut thousands of jobs this year at its joint ventures with General Motors and Volkswagen and at an electric-car unit, two people with knowledge of the matter told… [+4900 chars]",
      },
      {
        source: { id: null, name: "Technews.tw" },
        author: "MoneyDJ",
        title: "車市吹逆風，傳上汽合資企業、電動車部門將裁員",
        description:
          "電動車市場市況不妙，市場傳出，中國汽車製造巨頭上汽集團（SAIC Motor）計劃於今年在與通用（GM）、福斯（Volkswagen）攜手設立的合資企業和旗下電動車部門大幅裁員。 路透報導，兩名消息人士透露，上汽計劃於今年在上汽通用（SAIC-GM）裁員30%、在上汽大眾（SAIC Volkswag...",
        url: "https://finance.technews.tw/2024/04/01/saic-gm-and-saic-volkswagen-to-lay-off-employees/",
        urlToImage:
          "https://img.technews.tw/wp-content/uploads/2020/12/07102729/csvw_SAIC-Volkswagen-Automotive.jpg",
        publishedAt: "2024-04-01T06:15:08Z",
        content:
          "SAIC MotorGMVolkswagen\r\nSAIC-GM30%SAIC Volkswagen10%Rising Auto\r\n2024\r\n20241-216%\r\nTesla\r\n202429%329175.792022Q4500\r\nWedbush SecuritiesDan Ives\r\n MoneyDJ",
      },
      {
        source: { id: null, name: "Ixbt.com" },
        author: "jin@ixbt.com (Jin)",
        title: "АвтоВАЗ запустил обновлённую программу «Lada Страхование»",
        description:
          "АвтоВАЗ объявляет о запуске обновленной программы «Lada Страхование», предлагая с 1 апреля покупателям автомобилей три разновидности полисов. «Полное КАСКО» предусматривает максимальную защиту от всех рисков, «Оптимальное КАСКО» покрывает защиту от угона и то…",
        url: "https://www.ixbt.com/news/2024/04/01/avtovaz-zapustil-obnovljonnuju-programmu-lada-strahovanie.html",
        urlToImage:
          "https://www.ixbt.com/img/n1/news/2024/3/1/72dea23c90_lada-strahovanie_large.png",
        publishedAt: "2024-04-01T06:15:00Z",
        content:
          "«Lada », 1 .\r\n« » , « » , , « » .\r\n , 86 «Lada ».\r\n , . 2024 , Lada .\r\n8 . .\r\nXiaomi « » , , \r\n<ul><li> «Lada »: </li><li> 09:08 Xiaomi « » , , . 67 </li><li> 09:00 Leica Snapdragon 8s Gen 3. Xiaomi … [+1455 chars]",
      },
      {
        source: { id: null, name: "[Removed]" },
        author: null,
        title: "[Removed]",
        description: "[Removed]",
        url: "https://removed.com",
        urlToImage: null,
        publishedAt: "1970-01-01T00:00:00Z",
        content: "[Removed]",
      },
      {
        source: { id: null, name: "[Removed]" },
        author: null,
        title: "[Removed]",
        description: "[Removed]",
        url: "https://removed.com",
        urlToImage: null,
        publishedAt: "1970-01-01T00:00:00Z",
        content: "[Removed]",
      },
      {
        source: { id: null, name: "[Removed]" },
        author: null,
        title: "[Removed]",
        description: "[Removed]",
        url: "https://removed.com",
        urlToImage: null,
        publishedAt: "1970-01-01T00:00:00Z",
        content: "[Removed]",
      },
      {
        source: { id: null, name: "Habr.com" },
        author: "MR_VF",
        title: "Насколько близко мы подошли к созданию терминатора?",
        description:
          "Хладнокровная машина, не знающая печали и жалости. Неумолимо и прямолинейно выполняющая поставленную ей задачу до конца. Таким запомнился зрителю терминатор из одноимённого фильма. Согласно его сценарию, бездушная машина прибыла к нам из будущего. И вот, имен…",
        url: "https://habr.com/ru/articles/802599/#post-content-body",
        urlToImage:
          "https://habrastorage.org/getpro/habr/upload_files/949/ae4/3eb/949ae43ebf02e5d80277bf499135bfc1.jpg",
        publishedAt: "2024-04-01T06:02:07Z",
        content:
          ", . . . , . , , . \r\n , , 1984 , - , . , ?\r\n , 1984 - , . , ? , 1 2024 , . \r\n. , , , .\r\n , . , , , . . , , , ChatGPT, YandexGPT, RuGPT LLAMA , , , , .\r\n , , , , , , . C , , , , , , , . ... , , , , , .… [+1513 chars]",
      },
      {
        source: { id: null, name: "Paul Tan's Automotive News" },
        author: "Izwaashura Sadali",
        title:
          "Tesla Model Y kini dapat warna baharu Quicksilver di Malaysia – RM7,500; semuanya enam pilihan warna",
        description:
          "Tesla Malaysia telah mengemaskini pilihan warna untuk Tesla Model Y, kini ditambah dengan rona Quicksilver. Ia menyertai pilihan warna sedia ada termasuk Pearl White Multi-Coat, Deep Blue Metallic, Solid Black, Stealth Grey dan Ultra Red. Dengan pertambahan r…",
        url: "https://paultan.org/2024/04/01/tesla-model-y-kini-dapat-warna-baharu-quicksilver-di-malaysia-rm7500-semuanya-enam-pilihan-warna/",
        urlToImage:
          "https://paultan.org/image/2024/04/Tesla-Model-Y-Quicksilver-colour-for-Malaysia-BM-630x330.jpeg",
        publishedAt: "2024-04-01T06:01:05Z",
        content:
          "Tesla Malaysia telah mengemaskini pilihan warna untuk Tesla Model Y, kini ditambah dengan rona Quicksilver. Ia menyertai pilihan warna sedia ada termasuk Pearl White Multi-Coat, Deep Blue Metallic, S… [+916 chars]",
      },
      {
        source: { id: null, name: "Adevarul.ro" },
        author: "Afrodita Cicovschi",
        title:
          "XTB: Precedent în „uber-izarea prețurilor”. Cum pot cartofii prăjiți să influențeze valoarea acțiunilor",
        description:
          "Prețurile stabilite dinamic fac parte dintr-o strategie utilizată frecvent în industria aviatică, a hotelurilor sau în cazul aplicațiilor de tip „ridesharing”.",
        url: "https://adevarul.ro/economie/xtb-precedent-in-uber-izarea-preturilor-cum-2351437.html",
        urlToImage:
          "https://cdn.adh.reperio.news/image-0/0d34e3a7-5eee-4503-9c6f-0cf9e1d6fd17/index.jpeg?p=f%3Djpeg%26w%3D1200%26h%3D630%26r%3Dcover",
        publishedAt: "2024-04-01T06:00:44Z",
        content:
          "Preurile stabilite dinamic fac parte dintr-o strategie utilizat frecvent în industria aviatic, a hotelurilor sau în cazul aplicaiilor de tip ridesharing.\r\nÎns atunci când un lan de fast-food a adopta… [+5869 chars]",
      },
      {
        source: { id: null, name: "Naturalnews.com" },
        author: "Ava Grace",
        title:
          "Tech startup working on building a robot that uses AI-powered “brain”",
        description:
          "Artificial intelligence and robotics startup Physical Intelligence is working on bringing AI to the physical world through a robot with a brain. Over the past 15 years or so, AI systems that work entirely in software have grown far more sophisticated than the…",
        url: "https://www.naturalnews.com/2024-04-01-tech-startup-building-robot-ai-powered-brain.html",
        urlToImage:
          "https://www.naturalnews.com/wp-content/uploads/sites/91/2024/04/Army-Robot-3D-Rendering-Ai-Android-Artificial.jpg",
        publishedAt: "2024-04-01T06:00:00Z",
        content:
          "Artificial intelligence and robotics startup Physical Intelligence is working on bringing AI to the physical world through a robot with a brain.\r\nOver the past 15 years or so, AI systems that work en… [+5282 chars]",
      },
      {
        source: { id: null, name: "L'Express" },
        author: "Sébastien Julian",
        title:
          "Tarifs autoroutiers et poids des voitures : la proposition choc d'une députée Renaissance",
        description:
          "Une proposition de loi veut faire la chasse aux gros modèles dans les flottes d’entreprises et instaurer des prix sur l'autoroute moins élevés pour les véhicules bien remplis.",
        url: "https://www.lexpress.fr/environnement/tarifs-autoroutiers-et-poids-des-voitures-la-proposition-choc-dune-deputee-renaissance-K7CO37GTAZB6DHWZH7VGCA6YCI/",
        urlToImage:
          "https://www.lexpress.fr/resizer/7uZnPiS3_yIcLK_ggUu-N5I9Uno=/1200x630/filters:focal(1106x894:1116x904)/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/S6CHPNYEYFCCFMGCRJQSG5KDVU.jpg",
        publishedAt: "2024-04-01T06:00:00Z",
        content:
          'Ce nest encore quune proposition de loi sobrement intitulée "Transformation du parc automobile français". Mais à force de gagner en notoriété, elle pourrait bien servir de base à une future réglement… [+3687 chars]',
      },
      {
        source: { id: null, name: "Meneame.net" },
        author: "O9Aspce",
        title:
          "Colas de hasta 2 horas en los supercargadores de Tesla en la carretera de Valencia",
        description:
          "En un suceso que refleja la creciente adopción del vehículo eléctrico, propietarios de Tesla se enfrentaron a una larga cola de espera en una estación de carga en la carretera de Valencia. Este acontecimiento tuvo lugar en el marco del retorno de las vacacion…",
        url: "https://www.meneame.net/m/actualidad/colas-hasta-2-horas-supercargadores-tesla-carretera-valencia",
        urlToImage: "https://meneame.net/img/logo_meneame.png",
        publishedAt: "2024-04-01T05:56:59Z",
        content:
          "Pues dos horas me parece muy poco... Esperaba muchísimo más. Lo mismo es que la gente aguanta dos horas y luego se pira, a no ser que esté completamemnte necesitada de recarga...",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "bbc.co.uk",
        title: "Xiaomi: Electric car buyers told they face up to 6-month wait",
        description:
          "Just days after Chinese smartphone maker Xiaomi launched its first electric vehicle (EV), buyers have been told they may have to wait up to six months for their car to be delivered. The company previously said pre-orders had hit 88,898 within 24 hours of it s…",
        url: "https://biztoc.com/x/f74434229a53cbbc",
        urlToImage: "https://c.biztoc.com/p/f74434229a53cbbc/s.webp",
        publishedAt: "2024-04-01T05:48:04Z",
        content:
          "Just days after Chinese smartphone maker Xiaomi launched its first electric vehicle (EV), buyers have been told they may have to wait up to six months for their car to be delivered.The company previo… [+281 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "fool.com",
        title:
          '1 "Magnificent Seven" Stock to Buy Hand Over Fist, and 1 to Avoid Like the Plague',
        description:
          'The S&P 500 continues to rocket higher in the first three months of 2024, fueled in part by the continued outperformance of the "Magnificent Seven." The seven monster stocks accounted for practically all of the S&P 500\'s positive performance in the first half…',
        url: "https://biztoc.com/x/2ae4aa719e2e60bc",
        urlToImage: "https://c.biztoc.com/p/2ae4aa719e2e60bc/og.webp",
        publishedAt: "2024-04-01T05:46:05Z",
        content:
          'The S&P 500 continues to rocket higher in the first three months of 2024, fueled in part by the continued outperformance of the "Magnificent Seven."The seven monster stocks accounted for practica… [+289 chars]',
      },
      {
        source: { id: "bbc-news", name: "BBC News" },
        author: "https://www.facebook.com/bbcnews",
        title: "Xiaomi electric car buyers face up to 6-month wait",
        description:
          "The firm previously said SU7 pre-orders had hit 88,898 within 24 hours of it starting to take orders.",
        url: "https://www.bbc.co.uk/news/business-68705711",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/A451/production/_133056024_2c2a95eb3d8ef470db1c3293778b1d2aedbfedef.jpg",
        publishedAt: "2024-04-01T05:41:28Z",
        content:
          "Just days after Chinese smartphone maker Xiaomi launched its first electric vehicle (EV), buyers have been told they may have to wait up to six months for their car to be delivered.\r\nScreen grabs on … [+2421 chars]",
      },
      {
        source: { id: null, name: "Aajtak.in" },
        author: "aajtak.in",
        title:
          "केजरीवाल का iPhone अनलॉक कराने Apple के पास पहुंची ED, जानिए क्या बोली कंपनी?",
        description:
          "Delhi CM Arvind Kejriwal को लेकर नई जानकारी सामने आई है. जहां ED Apple के पास पहुंची है और उसने केजरीवाल के iPhone को खोलने में मदद मांगी है, तो कंपनी ने इस पर अपना जवाब दिया. दरअसल, ED तथाकथित शराब घोटाले को लेकर जांच कर रही है और भ्रष्टाचार के सबूत खोज रही …",
        url: "https://www.aajtak.in/technology/tech-news/story/arvind-kejriwal-iphone-password-ed-contact-apple-to-access-data-delhi-cm-in-liquor-scam-ttec-1909312-2024-04-01",
        urlToImage:
          "https://akm-img-a-in.tosshub.com/aajtak/images/story/202404/660a4b609265f-iphone-015127291-16x9.jpg",
        publishedAt: "2024-04-01T05:34:39Z",
        content:
          "CM (ED) . , ED . \r\n , iPhone Switch Off   . ED Apple .\r\nApple iPhone . Android iPhone . iPhone . \r\nApple ED ?\r\n ED Apple , . ED , . \r\n : Xiaomi SU7: , Tesla \r\n  \r\n CM 15 . . 15 , .\r\n : UP , 4 , ?\r\n ,… [+8 chars]",
      },
      {
        source: { id: null, name: "InvestorsObserver" },
        author: "InvestorsObserver",
        title: "Li Auto reports a big increase in Q1 deliveries",
        description:
          "2024-04-01 05:33:46 ET           Li Auto Inc (NASDAQ: LI) is in focus today after reporting a substantial year-on-year growth in deliveries for its first quarter.     Li Auto delivered over 80,000 vehicles in Q1     The EV maker based out of Beijing, C...",
        url: "https://www.investorsobserver.com/news/qm-news/5768221692277005",
        urlToImage:
          "https://s3.amazonaws.com/images.investorsobserver.com/io-logo-800x450.jpg",
        publishedAt: "2024-04-01T05:33:46Z",
        content:
          "News HomeMentioned in this article\r\n2024-04-01 05:33:46 ET\r\nLi Auto Inc (NASDAQ: LI) is in focus today after reporting a substantial year-on-year growth in deliveries for its first quarter.\r\nThe EV m… [+1277 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "benzinga.com",
        title:
          "'It's Like Magic,' Says Elon Musk As Tesla's Supervised FSD Opens To Rave Reviews On One-Month Free-Trialing",
        description:
          "As Tesla, Inc.’s TSLA full-self driving software moves from beta-testing to a supervised version and is made available in the United States for a month-long free trialing, CEO Elon Musk and Tesla executives commented on the software. What Happened: Tesla infl…",
        url: "https://biztoc.com/x/608a3c293c2be67e",
        urlToImage: "https://c.biztoc.com/p/608a3c293c2be67e/og.webp",
        publishedAt: "2024-04-01T05:18:04Z",
        content:
          "As Tesla, Inc.s TSLA full-self driving software moves from beta-testing to a supervised version and is made available in the United States for a month-long free trialing, CEO Elon Musk and Tesla exec… [+286 chars]",
      },
      {
        source: { id: null, name: "Marketscreener.com" },
        author: null,
        title:
          "News Highlights: Top Global Markets News of the Day - Monday at 1 AM ET",
        description:
          "(marketscreener.com) \nThe Stock Market's Magnificent Seven Is Now the Fab Four \n \n\n Some investors say it is a bullish signal that the market is rallying without the likes of Apple and Tesla because it means other groups are taking part. \n\n \nChina's Recovery …",
        url: "https://www.marketscreener.com/quote/currency/AUSTRALIAN-DOLLAR-US-DOLL-2373531/news/News-Highlights-Top-Global-Markets-News-of-the-Day-Monday-at-1-AM-ET-46327366/",
        urlToImage:
          "https://www.marketscreener.com/images/reuters/2015-12-01T215500Z_1006950001_LYNXMPEBB02PS_RTROPTP_2_CBUSINESS-US-CANADA-FOREX.JPG",
        publishedAt: "2024-04-01T05:15:36Z",
        content:
          "The Stock Market's Magnificent Seven Is Now the Fab Four \r\nSome investors say it is a bullish signal that the market is rallying without the likes of Apple and Tesla because it means other groups are… [+1925 chars]",
      },
      {
        source: { id: null, name: "Paul Tan's Automotive News" },
        author: "Danny Tan",
        title:
          "2024 smart #1 review – could this be the smartest EV choice if you’re transitioning from a premium ICE car?",
        description:
          "Considering an EV as the family’s next second car? There are no shortage of options if you’re thinking of making the switch from petrol power to batteries today. The BYD Atto 3 led the first […]\nThe post 2024 smart #1 review – could this be the smartest EV ch…",
        url: "https://paultan.org/2024/04/01/2024-smart-1-review-could-this-be-the-smartest-ev-choice-if-youre-transitioning-from-a-premium-ice-car/",
        urlToImage:
          "https://paultan.org/image/2024/01/2023_Smart_1_Malaysia_Ext-2-1200x801.jpg",
        publishedAt: "2024-04-01T05:06:51Z",
        content:
          "Considering an EV as the family’s next second car? There are no shortage of options if you’re thinking of making the switch from petrol power to batteries today.\r\nThe BYD Atto 3 led the first wave, t… [+14858 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "fool.com",
        title:
          'Want to Own All the "Magnificent Seven" Stocks? Buy One of These Vanguard ETFs',
        description:
          "Investing can be tedious. That's especially the case when you want to buy multiple stocks. It's not difficult, but it can take a while. That's where exchange-traded funds (ETFs) come in handy. You can buy many stocks in one fell swoop. With the so-called \"Mag…",
        url: "https://biztoc.com/x/323c03461ea03b06",
        urlToImage: "https://c.biztoc.com/p/323c03461ea03b06/og.webp",
        publishedAt: "2024-04-01T05:04:07Z",
        content:
          "Investing can be tedious. That's especially the case when you want to buy multiple stocks. It's not difficult, but it can take a while. That's where exchange-traded funds (ETFs) come in handy. You ca… [+272 chars]",
      },
      {
        source: { id: null, name: "Onliner.by" },
        author: "Onliner",
        title:
          "Tesla c дисками на «лобовухе» и малиновый пиджак. Девяностые прорвались в современность в нашем фотопроекте",
        description:
          "Девяностые — это стиль! Девяностые — это культурный код! Да, именно так мы считаем 30 лет спустя, в то время как наши родители ни о чем таком и не подозревали, а просто носили олимпийки, пользовались пейджерами и жили жизнь. Тем не менее что-то бессмертное, р…",
        url: "https://people.onliner.by/2024/04/01/devyanostye-vs-sovremennost",
        urlToImage:
          "https://content.onliner.by/news/1400x5616/186a35d500f9ade4325269415f43b538.jpg",
        publishedAt: "2024-04-01T05:00:39Z",
        content:
          "! ! , 30 , , , . - , . : , ? ? , , ? .\r\n, . : . «» , «» , 1994-. «» , . . : . !\r\n. - \r\n, , . : . 2024 : -, , . . 30 ?\r\n, . . . -, , . . .\r\n, , « , », . . . . « » .\r\n «» . , - «», . IKEA . - , .\r\n , .… [+870 chars]",
      },
      {
        source: { id: null, name: "InvestorsObserver" },
        author: "InvestorsObserver",
        title:
          "4 Stocks with Exposure to the Growing Asian and Middle Eastern EV Markets",
        description:
          "(NewsDirect)     There’s been a lot of recent news about automakers cutting back on or delaying production of electric vehicles (EVs) due to slowing consumer demand. One of the main culprits responsible for the weakening demand is high interest ...",
        url: "https://www.investorsobserver.com/news/qm-pr/6346739482332441",
        urlToImage:
          "https://s3.amazonaws.com/images.investorsobserver.com/io-logo-800x450.jpg",
        publishedAt: "2024-04-01T05:00:00Z",
        content:
          "News HomeMentioned in this article\r\n(NewsDirect)\r\nThere’s been a lot\r\nof recent news about automakers cutting back on or delaying production\r\nof electric vehicles (EVs) due to slowing consumer demand… [+14939 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "scmp.com",
        title:
          "What price war? Tesla raises price of its Model Y electric car in China",
        description:
          "Tesla kept the prices of its Model 3 vehicles assembled at the Gigafactory in Shanghai unchanged. The Long Range version went up in price by 5,000 yuan, or 1.7 per cent, to 304,900 yuan, while the Performance edition saw an increase of 5,000 yuan, or 1.4 per …",
        url: "https://biztoc.com/x/c5ede32784ad6fd0",
        urlToImage: "https://c.biztoc.com/p/c5ede32784ad6fd0/s.webp",
        publishedAt: "2024-04-01T04:54:05Z",
        content:
          "Tesla kept the prices of its Model 3 vehicles assembled at the Gigafactory in Shanghai unchanged.The Long Range version went up in price by 5,000 yuan, or 1.7 per cent, to 304,900 yuan, while the Per… [+291 chars]",
      },
      {
        source: { id: null, name: "Freerepublic.com" },
        author: "Epoch Times",
        title:
          "Have We Reached Peak ESG? Corporate America Fools Around And Finds Out",
        description:
          "“Go woke, go broke.”This catchphrase has become more than a clever play on words. Like all clichés that make their way into common social expression, it’s a cliché because it’s generally true, at least in its sentiment.It was just a few years ago that the cor…",
        url: "https://freerepublic.com/focus/f-news/4228169/posts",
        urlToImage: null,
        publishedAt: "2024-04-01T04:27:15Z",
        content:
          "Skip to comments.\r\nHave We Reached Peak ESG? Corporate America Fools Around And Finds OutEpoch Times ^\r\n | 03/31/2024\r\n | James Gorrie\r\nPosted on 03/31/2024 9:27:15 PM PDT by SeekAndFind\r\nGo woke, go… [+4677 chars]",
      },
      {
        source: { id: null, name: "Paul Tan's Automotive News" },
        author: "Gerard Lye",
        title:
          "Tesla Model Y gets new Quicksilver colour option in Malaysia – RM7,500; palette now includes six colours",
        description:
          "Tesla Malaysia has updated the colour options for the Tesla Model Y again, this time adding a new Quicksilver hue. This joins the existing Pearl White Multi-Coat, Deep Blue Metallic, Solid Black, Stealth Grey and […]\nThe post Tesla Model Y gets new Quicksilve…",
        url: "https://paultan.org/2024/04/01/tesla-model-y-gets-new-quicksilver-colour-option-in-malaysia/",
        urlToImage:
          "https://paultan.org/image/2024/04/Tesla-Model-Y-Quicksilver-colour-for-Malaysia-630x330.jpeg",
        publishedAt: "2024-04-01T04:16:26Z",
        content:
          "Tesla Malaysia has updated the colour options for the Tesla Model Y again, this time adding a new Quicksilver hue. This joins the existing Pearl White Multi-Coat, Deep Blue Metallic, Solid Black, Ste… [+912 chars]",
      },
      {
        source: { id: null, name: "Paul Tan's Automotive News" },
        author: "Jonathan Lee",
        title:
          "2024 BYD Seal in Malaysia – full galleries of Premium, Performance; up to 530 PS, 570 km range; fr RM180k",
        description:
          "Just over a month on from its launch, we’ve gotten our hands on the BYD Seal. The handsome new electric sedan is shown here in both Premium and Performance AWD versions, giving you an opportunity […]\nThe post 2024 BYD Seal in Malaysia – full galleries of Prem…",
        url: "https://paultan.org/2024/04/01/2024-byd-seal-in-malaysia-full-galleries-of-premium-performance-up-to-530-ps-570-km-range-fr-rm180k/",
        urlToImage:
          "https://paultan.org/image/2024/04/2024_BYD_Seal_Premium_Performance_Malaysia-1-1200x801.jpg",
        publishedAt: "2024-04-01T03:44:00Z",
        content:
          "Just over a month on from its launch, we’ve gotten our hands on the BYD Seal. The handsome new electric sedan is shown here in both Premium and Performance AWD versions, giving you an opportunity to … [+4285 chars]",
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "wsj.com",
        title: "The Stock Market's Magnificent Seven Is Now the Fab Four",
        description:
          "Some investors say it is a bullish signal that the market is rallying without the likes of Apple and Tesla because it means other groups are taking part. #apple #tesla",
        url: "https://biztoc.com/x/67f9ef99c26df894",
        urlToImage: "https://c.biztoc.com/273/og.png",
        publishedAt: "2024-04-01T03:10:04Z",
        content:
          "Some investors say it is a bullish signal that the market is rallying without the likes of Apple and Tesla because it means other groups are taking part.\r\n#apple#tesla\r\nThis story appeared on wsj.com… [+12 chars]",
      },
      {
        source: { id: null, name: "Alphafreepress.gr" },
        author: "Ευτυχία Παπούλια",
        title: "Τσιπάκι στον εγκέφαλο για τυφλούς: Το νέο βήμα της Neuralink",
        description:
          "Τσιπάκι στον εγκέφαλο για τυφλούς: Η Neuralink δεν έχει αναφερθεί στις τεχνικές λεπτομέρειες",
        url: "https://www.alphafreepress.gr/2024/04/01/kosmos/tsipaki-ston-egkefalo-gia-tyflous-to-neo-vima-tis-neuralink/",
        urlToImage:
          "https://www.alphafreepress.gr/wp-content/uploads/2024/04/8-scaled.jpg",
        publishedAt: "2024-04-01T03:06:54Z",
        content:
          "Neuralink , . « Blindsight Neuralink Telepathy», X ( Twitter).  Tesla SpaceX  Blindsight  . , «  Nintendo», . Neuralink .\r\n 29 . , . , .\r\n« , », 29. 2022, Blindsight . « » .\r\n Neuralink , . , ,    .\r… [+96 chars]",
      },
    ],
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  return (
    <NewsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
