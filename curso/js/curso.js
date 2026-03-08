// ══════════════════════════════════════
// STATIC DATA — GLOSARIO
// ══════════════════════════════════════
const GLOSSARY=[
  {term:'BITCOIN',color:'#F7931A',def:'Sistema de dinero digital descentralizado creado en 2008. Solo habrá 21 millones de Bitcoin en toda la historia humana.',eg:'En México, más de 500 negocios ya aceptan Bitcoin como pago.',tags:['SATOSHI','BLOCKCHAIN','WALLET']},
  {term:'SATOSHI / SAT',color:'#F7931A',def:'La unidad más pequeña de Bitcoin. 1 Bitcoin = 100,000,000 satoshis. Con $50 pesos puedes comprar miles.',eg:'Con $1,500 pesos de cumpleaños tienes ~83,000 sats (precio referencial).',tags:['BITCOIN','LIGHTNING','HALVING']},
  {term:'LIGHTNING NETWORK',color:'#F7931A',def:'Red de pagos sobre Bitcoin. Envía dinero al instante con comisiones de centavos a cualquier parte del mundo.',eg:'Chicago→Mérida en 2 segundos vs 3 días y 9% de comisión por Western Union.',tags:['BITCOIN','REMESAS','SATOSHI']},
  {term:'WALLET / CARTERA',color:'#F7931A',def:'App que guarda tus llaves privadas. NO guarda los Bitcoin, sino las llaves para acceder a ellos en el blockchain.',eg:'Phoenix, Blink y Muun son wallets no-custodiales recomendadas en México.',tags:['SEED PHRASE','CUSTODIA','LLAVE PRIVADA']},
  {term:'SEED PHRASE',color:'#F7931A',def:'12 o 24 palabras que son la llave maestra de tu wallet. NUNCA en digital. SIEMPRE en papel o metal físico.',eg:'Si pierdes tu celular pero tienes las 12 palabras, recuperas todo tu Bitcoin.',tags:['WALLET','CUSTODIA','LLAVE PRIVADA']},
  {term:'INFLACIÓN',color:'#C0392B',def:'Aumento sostenido de precios que hace que el dinero valga menos. El peso mexicano: inflación acumulada ~1,300% desde 1995.',eg:'Lo que costaba $100 en 1995, hoy cuesta ~$1,400 pesos.',tags:['REMESAS','BITCOIN','INTERMEDIARIO']},
  {term:'REMESAS',color:'#2980B9',def:'Dinero enviado por migrantes a sus familias. México recibe $63,313 millones USD al año (Banxico 2024).',eg:'Don Memo mandaba dinero desde Chicago a Oaxaca cada quincena. Perdió $21,600 USD en comisiones.',tags:['LIGHTNING','INFLACIÓN','INTERMEDIARIO']},
  {term:'BLOCKCHAIN',color:'#F7931A',def:'Registro público, inmutable y descentralizado de todas las transacciones de Bitcoin. Hackeado: 0 veces en 15 años.',eg:'Como un cuaderno contable copiado en 17,000 computadoras. Nadie puede borrar una página.',tags:['BITCOIN','DESCENTRALIZACIÓN','HASH']},
  {term:'CUSTODIA',color:'#F7931A',def:'"Not your keys, not your coins." Si un exchange guarda tus llaves, ellos controlan tu dinero. Self-custody = libertad.',eg:'Phoenix (no-custodial): tú controlas. Bitso (custodial): ellos controlan.',tags:['WALLET','SEED PHRASE','LLAVE PRIVADA']},
  {term:'DESCENTRALIZACIÓN',color:'#16A085',def:'Sin dueño central. Bitcoin no tiene CEO, no tiene oficinas, no puede ser apagado. +17,000 nodos globales.',eg:'Como el internet: nadie lo controla, todos lo usan. Uptime: 99.98% desde 2009.',tags:['BITCOIN','BLOCKCHAIN','NODO']},
  {term:'MINERÍA',color:'#D4A017',def:'Proceso competitivo donde computadoras resuelven problemas matemáticos para agregar bloques al blockchain y recibir Bitcoin.',eg:'Los mineros son los notarios del sistema. Hashrate 2025: ~700 Exahashes/segundo.',tags:['BLOCKCHAIN','BITCOIN','PROOF OF WORK','HALVING']},
  {term:'HALVING',color:'#F7931A',def:'Reducción a la mitad de la recompensa minera cada ~4 años (210,000 bloques). Controla la emisión de los 21 millones.',eg:'2009: 50 BTC/bloque | 2024: 3.125 BTC/bloque | 2028 proyectado: 1.5625 BTC.',tags:['BITCOIN','MINERÍA','SATOSHI']},
  {term:'HASH',color:'#F7931A',def:'Código matemático único de 64 caracteres. Cualquier cambio en los datos produce un hash completamente diferente.',eg:'Cada bloque tiene su hash. Lo puedes verificar ahora mismo en mempool.space.',tags:['BLOCKCHAIN','MINERÍA']},
  {term:'PROOF OF WORK',color:'#D4A017',def:'Mecanismo de consenso que exige gasto computacional real para agregar bloques. Hace que atacar la red sea económicamente inviable.',eg:'Costo estimado de un ataque 51%: >$20,000 millones USD. Por eso Bitcoin es seguro.',tags:['MINERÍA','BLOCKCHAIN','HASHRATE']},
  {term:'LLAVE PRIVADA',color:'#F7931A',def:'Número secreto de 256 bits que demuestra propiedad de tus bitcoins. Su pérdida es irreversible. NUNCA compartir.',eg:'La dirección Bitcoin es tu "número de cuenta". La llave privada NUNCA se comparte.',tags:['WALLET','SEED PHRASE','CUSTODIA']},
  {term:'NODO',color:'#16A085',def:'Computadora con copia completa del blockchain. Verifica y propaga transacciones. No tienen dueño ni jefe.',eg:'Bitnodes.io: +17,000 nodos activos en más de 100 países en 2025.',tags:['BLOCKCHAIN','DESCENTRALIZACIÓN','BITCOIN']},
  {term:'WHITEPAPER',color:'#D4A017',def:'Documento técnico de 9 páginas publicado por Satoshi Nakamoto el 31 Oct 2008. Describe el sistema Bitcoin completo.',eg:'"Bitcoin: A Peer-to-Peer Electronic Cash System." Disponible gratis en bitcoin.org',tags:['BITCOIN','SATOSHI NAKAMOTO']},
  {term:'HODL',color:'#F7931A',def:'Estrategia de mantener Bitcoin a largo plazo sin vender. Originalmente un error tipográfico de "hold" en un foro.',eg:'Quienes compraron en 2015 y hicieron HODL multiplicaron su inversión más de 400x.',tags:['BITCOIN','CUSTODIA']},
];

// ══════════════════════════════════════
// BADGES
// ══════════════════════════════════════
const BADGES=[
  {icon:'💡',name:'DESPERTANDO',desc:'Completaste la introducción',ch:0},
  {icon:'✈️',name:'VIAJERO DEL TIEMPO',desc:'Completaste el módulo 1',ch:1},
  {icon:'⚡',name:'PLEBEYAN',desc:'Completaste el módulo 2',ch:2},
  {icon:'🔑',name:'SOBERANO',desc:'Completaste el módulo 3',ch:3},
  {icon:'🗺️',name:'BITCOINER MX',desc:'Completaste el módulo 4',ch:4},
  {icon:'🏆',name:'LA DECISIÓN',desc:'Terminaste el curso completo',ch:5},
];

// ══════════════════════════════════════
// DIALOGS — GUIÓN COMPLETO
// ══════════════════════════════════════
const DIALOGS=[
  // ── INTRO ──
  {ch:0,sp:'DON MEMO',txt:'Mmm.',data:null,img:'curso/img/1.png'},
  {ch:0,sp:'DON MEMO',txt:'¿Sabes cuánto valía ese billete cuando nació tu papá?',data:null,img:'curso/img/1.png'},
  {ch:0,sp:'MATEO',txt:'¿Cien pesos?',data:null,img:'curso/img/2.png'},
  {ch:0,sp:'DON MEMO',txt:'Cien pesos... sí. Pero con esos cien pesos, cuando nació tu papá, podías comprar lo que hoy te cuesta cuatrocientos.',data:null,
  choices:[
    {txt:'A) ¿Entonces el dinero se devalúa solo?', nx:4},
    {txt:'B) ¿Cómo puede valer menos si nadie me lo quitó?', nx:4},
    {txt:'C) Abuelo, eso no tiene sentido...', nx:4}
  ],img:'curso/img/3.png'},
  {ch:0,sp:'DON MEMO',txt:'Exacto. Nadie te lo quitó. Y eso es lo más extraño de todo. El dinero puede perder valor solo... por cómo está hecho.',data:{col:'red',cat:'DATO REAL',txt:'Con $100 pesos de 1995 comprabas lo que hoy cuesta ~$1,400 pesos.',meta:'Intro · Dato 1',title:'EL PESO SE ENCOGE',detail:'Inflación acumulada 1995–2025: más del 1,300%. Fuente: INPC Banxico.',bars:[{lbl:'1995',pct:100,col:'#16A085'},{lbl:'2025',pct:7,col:'#C0392B'}],src:'Fuente: INPC Banxico'},img:'curso/img/4.png'},
  {ch:0,sp:'DON MEMO',txt:'Cuando yo era joven me fui al norte. A Chicago. Mandaba dinero a tu abuela cada mes. Muchos años. Y nunca entendí por qué, aunque yo trabajara más, acá siempre alcanzaba para menos.',data:null,img:'curso/img/5.png'},
  {ch:0,sp:'DON MEMO',txt:'Hasta que descubrí algo. Algo que nadie me enseñó en la escuela. Ni tu papá sabe. Casi nadie sabe.',data:null,img:'curso/img/6.png'},
  {ch:0,sp:'DON MEMO',txt:'Que el dinero... es una tecnología. Y como toda tecnología, puede estar mal diseñada. Y puede mejorarse.',data:null,
  choices:[
    {txt:'A) ¿Y Bitcoin es esa mejora?', nx:8},
    {txt:'B) ¿Entonces alguien ya lo arregló?', nx:8},
    {txt:'C) ¿Por qué nadie lo arregla entonces?', nx:8}
  ],img:'curso/img/7.png'},
  {ch:0,sp:'DON MEMO',txt:'Bitcoin... sí. Pero antes de hablar de Bitcoin, hay que entender bien por qué el dinero de ahorita falla. ¿Me das chance de contarte?',data:null,img:'curso/img/8.png'},
  // ── MÓDULO 1: ¿POR QUÉ EXISTE BITCOIN? ──
  {ch:1,sp:'DON MEMO',txt:'Mira este cuaderno. Veinte años mandando dinero a tu abuela. Western Union. MoneyGram. Cada quincena.',data:null,img:'curso/img/9.png'},
  {ch:1,sp:'DON MEMO',txt:'Quinientos dólares cada quince días. A veces menos, cuando no había mucho trabajo. Pero siempre mandaba.',data:{col:'blue',cat:'EJERCICIO',txt:'$45 comisión × 24 envíos × 20 años = $21,600 USD perdidos en intermediarios.',meta:'Módulo 1 · Ejercicio 1',title:'LO QUE COBRAN LOS INTERMEDIARIOS',detail:'Don Memo pagó 9% de comisión por envío. Con Bitcoin Lightning el mismo servicio cuesta menos de $0.01 USD por envío. En 20 años: ~$5 USD total en lugar de $21,600.',bars:[{lbl:'WU cobró',pct:100,col:'#C0392B'},{lbl:'Lightning',pct:0,col:'#16A085'}],src:'Banco Mundial, Western Union'},
  choices:[
    {txt:'A) ¿Y no podías mandar el dinero de otra forma?', nx:11},
    {txt:'B) Eso es mucho dinero perdido, abuelo...', nx:11},
    {txt:'C) ¿Cuánto te cobraban de comisión?', nx:11}
  ],img:'curso/img/10.png'},
  {ch:1,sp:'DON MEMO',txt:'No había de otra. Eso era lo que había: bancos y remesadoras. El sistema estaba diseñado así. Para que alguien siempre se quedara una parte en el camino. ¿Quieres ver en números cuánto perdía?',data:null,exercise:{type:'remesa',nx:12},img:'curso/img/11.png'},
  {ch:1,sp:'DON MEMO',txt:'¿Sabes qué es un intermediario? Alguien que se mete entre tú y la otra persona. Y por meterse... cobra. A veces te ayuda de verdad. A veces solo está ahí porque el sistema no funcionaría sin él. O eso dicen.',data:{col:'blue',cat:'DATO REAL',txt:'51% de adultos mexicanos sin cuenta bancaria. 37 millones fuera del sistema financiero.',meta:'Módulo 1 · Dato 1',title:'SISTEMA FINANCIERO EN MÉXICO',detail:'Banco emisor → Banco receptor → Banco corresponsal → Procesador → Remesadora. Cada eslabón cobra, tarda y puede decirte que no. México recibe $63,313M USD en remesas al año.',bars:[{lbl:'Con banco',pct:49,col:'#2980B9'},{lbl:'Sin banco',pct:51,col:'#C0392B'}],src:'Fuente: INEGI ENIF 2021, Banxico Feb 2025'},
  choices:[
    {txt:'A) ¿Como cuando el banco cobra por transferir?', nx:13},
    {txt:'B) ¿Y siempre tiene que haber uno?', nx:13},
    {txt:'C) ¿Y qué pasa si ese intermediario falla?', nx:13}
  ],img:'curso/img/12.png'},
  {ch:1,sp:'DON MEMO',txt:'¿Y sabes cuál es el verdadero problema? No solo que cobran. Es que pueden decirte que no. Pueden congelar tu dinero. Pueden cerrarte la cuenta. Tu dinero... pero ellos deciden.',data:null,img:'curso/img/13.jpg'},
  {ch:1,sp:'DON MEMO',txt:'Hasta que alguien encontró la forma de mandar valor de una persona a otra... sin que nadie estuviera en medio.',data:null,img:'curso/img/14.jpg'},
  {ch:1,sp:'DON MEMO',txt:'¿Cuánto cuesta una nieve ahí? Cuando yo tenía tu edad costaba tres pesos. Eso es. El dinero se encogió. No la nieve, no la tienda... el dinero. Y hay una palabra para eso.',data:null,img:'curso/img/15.png'},
  {ch:1,sp:'DON MEMO',txt:'Inflación. Cuando el gobierno necesita dinero, le dice al banco central: imprime más. Y el banco central imprime. Pero la cantidad de cosas que se pueden comprar no cambia de golpe. Entonces con más pesos persiguiendo las mismas cosas... los precios suben.',data:{col:'red',cat:'INFLACIÓN MX',txt:'$100 pesos de 2014 = poder adquisitivo de ~$55 pesos hoy. Inflación acumulada: ~82%.',meta:'Módulo 1 · Dato 2',title:'82% DE INFLACIÓN EN 10 AÑOS',detail:'Inflación acumulada 2014–2024: ~82%. Año más alto reciente: 2022 con 8.7% anual. El peso ha perdido más del 95% de su valor vs dólar en 40 años. Si guardas $1,500 pesos bajo el colchón 10 años, valen ~$920 en términos reales.',bars:[{lbl:'2014 $100',pct:100,col:'#16A085'},{lbl:'2024 $100',pct:55,col:'#C0392B'}],src:'Fuente: INPC Banxico SF61745'},
  choices:[
    {txt:'A) O sea que imprimir más dinero nos perjudica...', nx:17},
    {txt:'B) ¿Y el gobierno puede imprimir cuando quiera?', nx:17},
    {txt:'C) ¿Por eso todo está más caro cada año?', nx:17}
  ],img:'curso/img/16.png'},
  {ch:1,sp:'DON MEMO',txt:'Pruébalo con tus propios números.',data:null,exercise:{type:'inflacion',nx:18},img:'curso/img/17.png'},
  {ch:1,sp:'DON MEMO',txt:'Y el peor de los casos... no te avisaron. Nadie te preguntó si estabas de acuerdo en que tu dinero valiera menos. Por eso en 2008 alguien decidió hacer algo al respecto.',data:null,img:'curso/img/18.png'},
  {ch:1,sp:'DON MEMO',txt:'31 de octubre de 2008. El mundo financiero estaba colapsando. Bancos quebrando. Gobiernos rescatándolos con el dinero de la gente. En ese momento, alguien publicó un documento en internet.',data:null,img:'curso/img/19.png'},
  {ch:1,sp:'DON MEMO',txt:'Nadie sabe quién. Firmó con el nombre de Satoshi Nakamoto. Puede ser una persona. Puede ser un grupo. Hasta hoy nadie lo conoce.',data:{col:'orange',cat:'HISTORIA BTC',txt:'31 Oct 2008 · Satoshi Nakamoto publica el whitepaper. El resto es historia.',meta:'Módulo 1 · Dato 3',title:'EL NACIMIENTO DE BITCOIN',detail:'31 Oct 2008: Whitepaper. 3 Ene 2009: Genesis Block con mensaje "Chancellor on brink of second bailout for banks". 22 May 2010: 10,000 BTC por 2 pizzas. 2011: Satoshi desaparece. 2021: El Salvador adopta Bitcoin como moneda de curso legal.',bars:[{lbl:'Whitepaper',pct:100,col:'#F7931A'},{lbl:'Adopción',pct:100,col:'#D4A017'}],src:'Bitcoin Whitepaper, Satoshi Nakamoto 2008'},
  choices:[
    {txt:'A) ¿Y no es sospechoso que sea anónimo?', nx:21},
    {txt:'B) ¿Y qué proponía ese documento?', nx:21},
    {txt:'C) ¿En 2008? Justo cuando quebraron los bancos...', nx:21}
  ],img:'curso/img/20.png'},
  {ch:1,sp:'DON MEMO',txt:'El documento describía un sistema de dinero que funcionara sin bancos. Sin intermediarios. De persona a persona, directo. Y que nadie pudiera inflar porque tendría un límite fijo para siempre.',data:null,img:'curso/img/21.png'},
  {ch:1,sp:'DON MEMO',txt:'Y lo más curioso de todo... después de crear Bitcoin, Satoshi desapareció. Nunca tocó los bitcoins que minó al principio. Los dejó ahí. Quietos. Como si nunca hubieran sido suyos.',data:null,img:'curso/img/22.png'},
  {ch:1,sp:'DON MEMO',txt:'Yo creo... que quería demostrar que Bitcoin no era de nadie. Que era de todos. O de nadie. Depende cómo lo veas.',data:null,img:'curso/img/23.png'},
  // ── MÓDULO 2: QUÉ HACE ESPECIAL A BITCOIN ──
  {ch:2,sp:'DON MEMO',txt:'Bien. Ya sabes por qué existe Bitcoin. Los dos: intermediarios e inflación. ¿Y cómo resuelve la inflación si no hay banco central que lo controle?',data:null,img:'curso/img/24.png'},
  {ch:2,sp:'DON MEMO',txt:'Exacto. Hay una regla escrita en el código de Bitcoin desde el primer día. Una regla que nadie puede cambiar. Veintiún millones. Eso es todo lo que existirá de Bitcoin en toda la historia. Ni uno más.',data:{col:'orange',cat:'ESCASEZ',txt:'Solo existirán 21,000,000 Bitcoin. Para siempre. Matemáticamente imposible crear más.',meta:'Módulo 2 · Dato 1',title:'21 MILLONES. SIEMPRE.',detail:'Bitcoin ya minados: ~19.7M (93.8%). Bitcoin restantes: ~1.3M. Último bitcoin: ~año 2140. Ningún gobierno, empresa ni individuo puede cambiar este límite.',bars:[{lbl:'Minado',pct:94,col:'#F7931A'},{lbl:'Queda',pct:6,col:'#D4A017'}],src:'Bitcoin Core, bitnodes.io 2025'},
  choices:[
    {txt:'A) ¿Y si alguien intenta cambiar esa regla?', nx:26},
    {txt:'B) ¿Quién decidió ese número?', nx:26},
    {txt:'C) ¿Cómo saben que nadie va a hacer trampa?', nx:26}
  ],img:'curso/img/25.png'},
  {ch:2,sp:'DON MEMO',txt:'Cualquiera puede intentar cambiar el código. Pero si cambias las reglas de Bitcoin, los miles de computadoras que forman la red simplemente te ignoran. Tu versión de Bitcoin no es Bitcoin. Es otra cosa que nadie usa.',data:null,img:'curso/img/26.png'},
  {ch:2,sp:'DON MEMO',txt:'Ahora bien. ¿Tú tienes $1,500 pesos, verdad? Un Bitcoin se divide en cien millones de partes iguales. Cada una se llama satoshi, en honor a su creador. No necesitas un Bitcoin completo.',data:{col:'orange',cat:'SATOSHIS',txt:'1 Bitcoin = 100,000,000 satoshis. Con $1,500 pesos tienes ~83,333 sats.',meta:'Módulo 2 · Ejercicio',title:'¿CUÁNTOS SATS TIENES?',detail:'Si Bitcoin = $1,800,000 MXN: 1 sat = $0.018 MXN. Con $1,500 MXN: ~83,333 sats. Con $500 MXN: ~27,777 sats. Con $50 MXN: ~2,777 sats. ¡No necesitas un BTC completo!',bars:[{lbl:'Tu acceso',pct:100,col:'#F7931A'},{lbl:'Barrera',pct:0,col:'#C0392B'}],src:'CoinGecko, precio referencial'},
  choices:[
    {txt:'A) Espera, ¿puedo comprar una fracción de Bitcoin?', nx:28},
    {txt:'B) ¿Cuántos satoshis necesito para empezar?', nx:28},
    {txt:'C) ¿O sea que el precio no importa tanto?', nx:28}
  ],img:'curso/img/27.png'},
  {ch:2,sp:'DON MEMO',txt:'No necesitas ser rico para usar Bitcoin. Un sat es un sat. Calcula cuántos sats puedes tener con lo que tienes.',data:null,exercise:{type:'sats',nx:29},img:'curso/img/28.png'},
  {ch:2,sp:'DON MEMO',txt:'Y cada cuatro años la recompensa de los mineros se reduce a la mitad. Eso se llama halving. Es lo que garantiza el límite de los veintiún millones.',data:{col:'orange',cat:'HALVING',txt:'2009: 50 BTC/bloque → 2012: 25 → 2016: 12.5 → 2020: 6.25 → 2024: 3.125 BTC.',meta:'Módulo 2 · Dato 2',title:'EL HALVING: ESCASEZ PROGRAMADA',detail:'Cada 210,000 bloques (~4 años) la recompensa se reduce a la mitad. Proyección 2028: 1.5625 BTC/bloque. Este mecanismo controla matemáticamente la emisión total.',bars:[{lbl:'2009 50BTC',pct:100,col:'#D4A017'},{lbl:'2024 3.1',pct:6,col:'#F7931A'}],src:'Bitcoin Core, halvingclock.com'},img:'curso/img/29.png'},
  {ch:2,sp:'DON MEMO',txt:'Pregunta. Si Bitcoin no tiene banco... ¿quién revisa que nadie haga trampa? ¿Que nadie invente bitcoins de la nada o gaste el mismo dos veces?',data:null,
  choices:[
    {txt:'A) ¿Hay alguna empresa que lo supervisa?', nx:31},
    {txt:'B) ¿Muchas computadoras revisando al mismo tiempo?', nx:31},
    {txt:'C) ¿Y si hackean esas computadoras?', nx:31}
  ],img:'curso/img/30.png'},
  {ch:2,sp:'DON MEMO',txt:'Miles de computadoras. En todo el mundo. Cada una tiene una copia completa de todas las transacciones desde el primer día. Si alguien intenta hacer trampa, el resto lo detecta y lo rechaza.',data:{col:'green',cat:'DESCENTRALIZACIÓN',txt:'Nodos activos: +17,000 en más de 100 países. Uptime: 99.98% desde 2009.',meta:'Módulo 2 · Dato 3',title:'LA RED SIN DUEÑO',detail:'Si apagas el 90% de los nodos, el 10% restante sigue la cadena. Sin CEO, sin sede, sin apagado posible. El peso: lo controla Banxico. Bitcoin: nadie.',bars:[{lbl:'Nodos',pct:100,col:'#16A085'},{lbl:'Censurable',pct:0,col:'#C0392B'}],src:'bitnodes.io, 2025'},img:'curso/img/31.png'},
  {ch:2,sp:'DON MEMO',txt:'El peso mexicano: lo controla Banxico. Pueden imprimir más mañana. Tu cuenta bancaria: el banco puede congelarla. Bitcoin: nadie la controla. Ni el más poderoso gobierno del mundo puede confiscar tus bitcoin si tú tienes las llaves.',data:null,img:'curso/img/32.png'},
  {ch:2,sp:'DON MEMO',txt:'Mira. El oro era lo más cercano a un dinero duro. Pero pesa. No lo puedes mandar por internet. No se divide fácil. Bitcoin es como el oro... pero para el siglo veintiuno.',data:{col:'orange',cat:'COMPARATIVA',txt:'Solo Bitcoin tiene oferta fija, es portable globalmente y funciona 24/7 sin permiso.',meta:'Módulo 2 · Dato 4',title:'BITCOIN VS EL MUNDO',detail:'¿Oferta fija? Peso: NO | Oro: casi | Bitcoin: SÍ. ¿Confiscable? Peso: sí | Oro: sí | Bitcoin: no (con llaves). ¿Portable global? Solo Bitcoin. ¿24/7? Solo Bitcoin. ¿Divisible al extremo? Solo Bitcoin (hasta 0.00000001 BTC).',bars:[{lbl:'Bitcoin',pct:100,col:'#F7931A'},{lbl:'Peso',pct:10,col:'#C0392B'}],src:'Análisis propio'},img:'curso/img/33.png'},
  {ch:2,sp:'MATEO',txt:'Para guardar valor. Para mandar dinero sin intermediarios. Para que nadie te lo quite.',data:null,
  choices:[
    {txt:'A) ¿Entonces Bitcoin es como oro digital?', nx:35},
    {txt:'B) ¿Y qué pasa si se va la luz o el internet?', nx:35},
    {txt:'C) ¿Por qué no usamos oro entonces?', nx:35}
  ],img:'curso/img/34.png'},
  {ch:2,sp:'DON MEMO',txt:'Sí. Eso es. Eso es exactamente.',data:null,img:'curso/img/35.png'},
  // ── MÓDULO 3: CÓMO FUNCIONA BITCOIN ──
  {ch:3,sp:'DON MEMO',txt:'[12 años después — Mérida, Yucatán. Mateo tiene 25 años. Tiene una hamaquería frente al parque: "Aceptamos Bitcoin ₿"]',data:null,img:'curso/img/36.png'},
  {ch:3,sp:'DON MEMO',txt:'"Mateo... el dinero es una tecnología. Y como toda tecnología, puede mejorarse."',data:null,img:'curso/img/37.png'},
  {ch:3,sp:'DIEGO',txt:'Oye, ¿en serio aceptas Bitcoin aquí? ¿Cómo funciona eso? ¿No es eso de los hackers?',data:null,img:'curso/img/38.png'},
  {ch:3,sp:'MATEO',txt:'Siéntate, Diego. Te voy a contar algo. Esa fue exactamente la pregunta que me hice cuando tenía trece años.',data:null,img:'curso/img/39.png'},
  {ch:3,sp:'MATEO',txt:'Cuando mandas dinero por banco, el banco dice "sí, este dinero existe". Bitcoin resuelve eso sin árbitro. Con matemáticas. Y con miles de testigos al mismo tiempo.',data:null,img:'curso/img/40.png'},
  {ch:3,sp:'MATEO',txt:'Imagínate un cuaderno. Pero no uno solo. El mismo cuaderno, copiado idéntico en diecisiete mil computadoras alrededor del mundo. Cada vez que alguien manda Bitcoin, se anota en todos los cuadernos al mismo tiempo.',data:{col:'orange',cat:'BLOCKCHAIN',txt:'El blockchain: ~880,000 bloques. +1 billón de transacciones. Hackeado en 15 años: 0 veces.',meta:'Módulo 3 · Dato 1',title:'EL CUADERNO INDESTRUCTIBLE',detail:'Tamaño del historial: ~600 GB. Cada bloque tiene un "hash": código matemático único. Si cambias algo en una página vieja, su hash cambia y rompe toda la cadena posterior. Imposible en práctica.',bars:[{lbl:'Uptime',pct:99,col:'#F7931A'},{lbl:'Hacks',pct:0,col:'#16A085'}],src:'mempool.space, 2025'},img:'curso/img/41.png'},
  {ch:3,sp:'MATEO',txt:'Si alguien borra una página... los otros 17,000 cuadernos lo detectan. Además cada página tiene un hash: código matemático único que incluye el hash de la anterior. Encadenados. Puedes verificarlo en mempool.space.',data:null,
  choices:[
    {txt:'A) ¿O sea que es imposible modificar el pasado?', nx:43},
    {txt:'B) ¿Y si alguien apaga miles de computadoras?', nx:43},
    {txt:'C) ¿Quién decide cuál cuaderno tiene la verdad?', nx:43}
  ],img:'curso/img/42.png'},
  {ch:3,sp:'MATEO',txt:'Los mineros. Para escribir la siguiente página del cuaderno, tienes que ganar un concurso de dados. Un dado con mil millones de caras. El primero en sacar el número correcto escribe la página y recibe Bitcoin nuevo.',data:{col:'orange',cat:'MINERÍA',txt:'Hashrate: ~700 Exahashes/seg. Costo de ataque 51%: >$20,000M USD.',meta:'Módulo 3 · Dato 2',title:'LA SEGURIDAD EN NÚMEROS',detail:'El concurso requiere cálculos matemáticos reales. No puedes inventar la respuesta. Eso cuesta electricidad real. No hay atajo. Por eso "ser honesto es más barato que hacer trampa".',bars:[{lbl:'Costo ataque',pct:100,col:'#C0392B'},{lbl:'Viable',pct:0,col:'#16A085'}],src:'Hashrate Index, 2025'},
  choices:[
    {txt:'A) ¿Y si dos mineros ganan al mismo tiempo?', nx:44},
    {txt:'B) ¿Eso no gasta una barbaridad de electricidad?', nx:44},
    {txt:'C) ¿Y qué pasa si nadie quiere minar?', nx:44}
  ],img:'curso/img/43.png'},
  {ch:3,sp:'MATEO',txt:'Y cada cuatro años, la recompensa de los mineros se reduce a la mitad. El halving. 2009: 50 BTC. 2024: 3.125 BTC. Así se garantiza el límite de los 21 millones.',data:null,img:'curso/img/44.png'},
  {ch:3,sp:'MATEO',txt:'Mira. Esto es el blockchain en tiempo real: mempool.space. Cada bloque que aparece fue minado por alguien, en algún lugar del mundo, gastando electricidad real.',data:null,img:'curso/img/45.png'},
  {ch:3,sp:'MATEO',txt:'Desde el 3 de enero de 2009. Nunca ha parado. Ni un día. Ni una hora.',data:{col:'green',cat:'HISTORIA VIVA',txt:'Genesis Block: 3 Ene 2009. Uptime: 99.98%. Más de 15 años sin parar.',meta:'Módulo 3 · Dato 3',title:'15 AÑOS SIN PARAR',detail:'El blockchain de Bitcoin ha funcionado sin interrupciones desde el Genesis Block. Uptime: 99.98%. Bloques totales: ~880,000. Cada ~10 minutos, uno nuevo. Sin excepción.',bars:[{lbl:'Online',pct:99,col:'#16A085'},{lbl:'Offline',pct:0,col:'#C0392B'}],src:'Bitcoin Uptime Tracker, 2025'},img:'curso/img/46.png'},
  // ── MÓDULO 4: CÓMO USAR BITCOIN EN MÉXICO ──
  {ch:4,sp:'DIEGO',txt:'Ok. Ya entiendo más o menos cómo funciona. Pero... ¿cómo lo uso yo? ¿Dónde guardo mis bitcoins?',data:null,img:'curso/img/47.png'},
  {ch:4,sp:'MATEO',txt:'En una wallet. Pero antes: la wallet NO guarda bitcoins. Guarda tus llaves. No tus bitcoins. Tus llaves. La diferencia importa muchísimo.',data:{col:'green',cat:'TIPOS DE WALLET',txt:'Phoenix · Blink · Muun (Lightning no-custodial). Exchange: Bitso (solo comprar).',meta:'Módulo 4 · Dato 1',title:'TU PUERTA A BITCOIN',detail:'Móvil Lightning no-custodial: Phoenix, Blink, Muun — recomendadas para principiantes en México. Escritorio: Sparrow, Electrum. Hardware: Ledger, Trezor, ColdCard. Exchange: solo para comprar, nunca para guardar.',bars:[{lbl:'Self-custody',pct:100,col:'#16A085'},{lbl:'Riesgo custodial',pct:70,col:'#C0392B'}],src:'Phoenix, Blink, Muun, Ledger'},
  choices:[
    {txt:'A) ¿Entonces la wallet es como un llavero?', nx:49},
    {txt:'B) ¿Y si pierdo esa wallet?', nx:49},
    {txt:'C) ¿Cuál wallet me recomiendas para empezar?', nx:49}
  ],img:'curso/img/48.png'},
  {ch:4,sp:'MATEO',txt:'Tu llave privada es un número secreto que demuestra que esos bitcoins son tuyos. Quien tiene esa llave, tiene los bitcoins. Punto. Sin apelación. Sin servicio al cliente.',data:null,img:'curso/img/49.png'},
  {ch:4,sp:'DIEGO',txt:'¿Y si pierdo el celular?',data:null,img:'curso/img/50.png'},
  {ch:4,sp:'MATEO',txt:'Por eso existe la seed phrase. Doce palabras. Las generó mi wallet el día que la creé. Con estas doce palabras puedo recuperar todos mis bitcoins en cualquier dispositivo del mundo.',data:{col:'green',cat:'SEED PHRASE',txt:'12 palabras maestras. NUNCA digital. SIEMPRE en físico. MÚLTIPLES copias. NADIE la ve.',meta:'Módulo 4 · Dato 2',title:'LAS 12 PALABRAS QUE LO SON TODO',detail:'1. NUNCA en foto, nube, email o WhatsApp. 2. SIEMPRE en papel o metal. 3. MÚLTIPLES copias en lugares físicos distintos. 4. NADIE la ve: ni familia, ni pareja. 5. PRUÉBALA antes de depositar fondos reales.',bars:[{lbl:'Seguridad',pct:100,col:'#16A085'},{lbl:'Digital',pct:0,col:'#C0392B'}],src:'Bitcoin best practices, BIP39'},img:'curso/img/51.png'},
  {ch:4,sp:'MATEO',txt:'Mi abuelo me lo dijo antes de que yo entendiera. "Not your keys, not your coins, mijo." Ahora lo entiendo perfectamente. Quien tiene tus doce palabras, tiene tus bitcoins. No tú.',data:null,
  choices:[
    {txt:'A) ¿Y si alguien más ve esas palabras?', nx:53},
    {txt:'B) ¿Dónde se guarda eso con seguridad?', nx:53},
    {txt:'C) ¿No hay alguna forma más sencilla?', nx:53}
  ],img:'curso/img/52.png'},
  {ch:4,sp:'DIEGO',txt:'Oye, pero si una transacción tarda diez minutos... ¿cómo puedes cobrar en tu negocio?',data:null,img:'curso/img/53.png'},
  {ch:4,sp:'MATEO',txt:'Para eso existe Lightning. Lightning Network es una capa sobre Bitcoin que permite pagos instantáneos. Menos de un segundo. Comisión menor a un peso mexicano, sin importar el monto.',data:{col:'green',cat:'LIGHTNING',txt:'<1 segundo. Comisión: $0.001–$0.01 USD. Chicago→Mérida en 2 seg vs 3 días por Western Union.',meta:'Módulo 4 · Dato 3',title:'LIGHTNING NETWORK: PAGOS INSTANTÁNEOS',detail:'Don Memo perdió $21,600 USD en comisiones en 20 años. Con Lightning: ~$5 USD total. Nodos activos: >15,000 en el mundo. Capacidad: >5,000 BTC en canales.',bars:[{lbl:'Western Union',pct:100,col:'#C0392B'},{lbl:'Lightning',pct:1,col:'#16A085'}],src:'1ML.com, River Financial 2025'},img:'curso/img/54.png'},
  {ch:4,sp:'MATEO',txt:'500+ negocios en México aceptan Bitcoin. Bitso: exchange mexicano. Blink: wallet con pesos + Lightning. Bitcoin Beach Yucatán. Cajeros en CDMX, GDL y MTY. Regulación: Ley Fintech 2018.',data:{col:'green',cat:'MÉXICO HOY',txt:'500+ negocios. BTCMap.org. Bitso, Blink, cajeros. Regulación: CNBV Ley Fintech 2018.',meta:'Módulo 4 · Dato 4',title:'BITCOIN EN TU COLONIA',detail:'Encuentra negocios cercanos en BTCMap.org. Bitcoin Beach Yucatán: adopción local. Comunidades activas en Mérida, CDMX, Guadalajara y Monterrey. CNBV reconoce activos virtuales.',bars:[{lbl:'2022',pct:30,col:'#F7931A'},{lbl:'2025',pct:100,col:'#F7931A'}],src:'BTCMap.org, CNBV Ley Fintech 2018'},img:'curso/img/55.png'},
  {ch:4,sp:'MATEO',txt:'Al principio sí se confunden mis clientes. Por eso les explico. Igual que mi abuelo me explicó a mí en ese parque de ahí enfrente hace doce años.',data:null,
  choices:[
    {txt:'A) ¿Y por dónde empiezo yo?', nx:57},
    {txt:'B) ¿Qué pasa si Bitcoin baja de precio?', nx:57},
    {txt:'C) Me parece lógico. Voy a pensarlo.', nx:57}
  ],img:'curso/img/56.png'},
  {ch:4,sp:'MATEO',txt:'Descarga Phoenix o Blink. Crea tu wallet. Guarda tu seed phrase en papel. Encuentra el negocio Bitcoin más cercano en BTCMap.org. Y empieza con tus primeros sats.',data:null,img:'curso/img/57.png'},
  // ── CONCLUSIÓN ──
  {ch:5,sp:'MATEO',txt:'Don Memo murió hace tres años. Nunca vio su hamaquería. Pero sí vio algo mejor.',data:null,img:'curso/img/58.png'},
  {ch:5,sp:'DON MEMO',txt:'"¿Guardaste una parte, mijo?"',data:null,img:'curso/img/59.png'},
  {ch:5,sp:'MATEO',txt:'Le dije que sí. No guardé los $1,500 pesos. Los cambié a satoshis esa misma semana. Ciento cuarenta pesos de comisión en Bitso. Y los dejé ahí. Doce años de satoshis.',data:null,img:'curso/img/60.png'},
  {ch:5,sp:'MATEO',txt:'No me hice rico. No era ese el punto. El punto era entender. Entender que el dinero es una tecnología. Que puede mejorarse. Y que la mejora ya existe. Ahora es tu turno. ⚡🧡',data:null,img:'curso/img/61.png'},
  // ── MÓDULO BONUS: GRADUACIÓN ──
  {ch:6,sp:'MATEO',txt:'Eso fue lo que aprendí. No en un salón. No en un libro. En una banca de parque, con un viejito que olía a café y hablaba despacio.',data:null,img:'curso/img/62.png'},
  {ch:6,sp:'MATEO',txt:'Don Memo ya no está. Pero los sats siguen ahí. Y ahora tú también sabes lo que yo sé.',data:null,img:'curso/img/63.png'},
  {ch:6,sp:'MATEO',txt:'Gracias a él reforzamos lo esencial. Ahora tú decides si seguir o si con esto es suficiente. De cualquier forma... ya no eres el mismo.',data:null,img:'curso/img/64.png'}
];

const CH_START=[0,9,23,35,46,57,62];

// ══════════════════════════════════════
// BRIEFING DATA — Lectura previa al examen
// ══════════════════════════════════════
const BRIEFING_DATA={
  0:{
    speaker:'DON MEMO',
    title:'INTRO — EL DINERO',
    cards:[
      {icon:'📉',label:'EL DINERO QUE SE ENCOGE SOLO',
       text:'El dinero fiduciario —como el peso mexicano— no tiene respaldo fijo en ningún activo físico. Su valor depende de la confianza en el gobierno que lo emite y de cuánto de él existe en circulación. Cuando un banco central emite más billetes sin que la economía produzca más bienes o servicios, cada unidad monetaria existente vale menos. Este fenómeno no ocurre de golpe: es silencioso, acumulativo, y afecta más a quien no tiene activos que se aprecian. En países con instituciones débiles o alta deuda pública, este mecanismo puede acelerar hasta volverse irreversible en el corto plazo, destruyendo décadas de ahorro en meses.'},
      {icon:'🏗️',label:'POR QUÉ EL SISTEMA FINANCIERO EXCLUYE',
       text:'El sistema bancario fue diseñado para una población con ingresos estables, documentos formales y proximidad a sucursales. Para millones de personas —trabajadores informales, habitantes rurales, migrantes, personas sin historial crediticio— estos requisitos son barreras reales. La exclusión financiera no es solo inconveniente: significa pagar comisiones altas para recibir remesas, no poder ahorrar de forma segura y depender de prestamistas informales. En México, más de la mitad de los adultos opera completamente fuera del sistema bancario formal, no por elección sino por diseño de ese mismo sistema.'},
      {icon:'🔧',label:'EL DINERO COMO TECNOLOGÍA MEJORABLE',
       text:'A lo largo de la historia el dinero ha evolucionado: del trueque a las monedas metálicas, del oro al papel respaldado, del papel al dinero fiat, de los cheques a las transferencias electrónicas. Cada transición fue resistida y tardó décadas. Lo que todas estas versiones comparten es que son herramientas para registrar valor y transferirlo entre personas. Y como toda herramienta, pueden diseñarse mejor o peor. Las propiedades que hacen "bueno" al dinero incluyen resistencia a la devaluación, accesibilidad universal, transferibilidad sin intermediarios y verificabilidad sin necesidad de confiar en terceros.'},
    ]
  },
  1:{
    speaker:'DON MEMO',
    title:'MÓD.1 — ¿POR QUÉ EXISTE BITCOIN?',
    cards:[
      {icon:'🌐',label:'INTERMEDIARIOS: EL COSTO INVISIBLE',
       text:'Cada vez que el dinero pasa de una persona a otra a través del sistema financiero, existe al menos un intermediario que cobra por esa función. En una remesa internacional intervienen: el banco emisor, posiblemente un banco corresponsal, la empresa remesadora y el banco receptor. Cada uno aplica comisiones y tipos de cambio desfavorables. Pero el costo real va más allá del dinero: los intermediarios tienen el poder de negar, retrasar o revertir transacciones. Pueden congelar fondos por sospecha, cumplir órdenes gubernamentales de bloqueo, o simplemente quebrar. La dependencia de intermediarios no es solo cara —es una cesión permanente de control sobre el propio dinero.'},
      {icon:'🏦',label:'CRISIS DE 2008: CUANDO EL SISTEMA FALLÓ',
       text:'La crisis financiera de 2008 fue desencadenada por instrumentos financieros de alto riesgo que colapsaron cuando el mercado inmobiliario estadounidense se derrumbó. Los bancos más grandes del mundo resultaron insolventes. Los gobiernos, en lugar de dejar que quebraran, los rescataron con dinero público —billones de dólares de los contribuyentes. Los ejecutivos responsables conservaron sus bonos. Los ahorradores ordinarios perdieron empleos y casas. Este episodio planteó una pregunta fundamental: ¿por qué el sistema que gestiona el dinero de todos puede privatizar ganancias y socializar pérdidas? Ese contexto no fue accidental para quien diseñó Bitcoin en ese momento exacto.'},
      {icon:'📊',label:'INFLACIÓN: UN IMPUESTO QUE NADIE VOTA',
       text:'La inflación funciona como un impuesto implícito sobre el ahorro. Cuando un banco central aumenta la masa monetaria, quienes reciben primero el dinero nuevo —el gobierno, los bancos— pueden comprar antes de que los precios suban. Quienes lo reciben al final —trabajadores, pensionados, ahorradores— ya enfrentan precios más altos. A diferencia de los impuestos directos, la inflación no requiere aprobación legislativa, no genera recibo y sus efectos son difusos. Históricamente, los países con instituciones débiles han recurrido a ella como mecanismo de financiamiento encubierto que nadie autorizó formalmente.'},
      {icon:'👁️',label:'SATOSHI Y EL DINERO SIN DUEÑO',
       text:'El diseñador de Bitcoin eligió permanecer anónimo y eventualmente desaparecer —una decisión que contrasta radicalmente con cualquier otro sistema financiero o tecnológico. La mayoría de los proyectos tienen fundadores identificables que pueden ser presionados, comprados o eliminados. Al desaparecer sin transferir control a nadie, y al nunca mover los bitcoins que minó al inicio, Satoshi demostró que el sistema funciona sin él. Este diseño intencional —un creador que hace el sistema huérfano— es lo que permite que Bitcoin sea genuinamente descentralizado: no hay una cabeza que cortar para detenerlo.'},
    ]
  },
  2:{
    speaker:'DON MEMO',
    title:'MÓD.2 — LO QUE HACE ESPECIAL A BITCOIN',
    cards:[
      {icon:'🧮',label:'ESCASEZ PROGRAMADA: LA MATEMÁTICA DETRÁS',
       text:'La oferta monetaria de Bitcoin no la decide ningún comité ni banco central —está definida por una ecuación inscrita en su código desde el primer día. La emisión sigue una curva de reducción periódica: cada cierto número de bloques minados, la recompensa por bloque se reduce a la mitad. Esta progresión geométrica decreciente converge matemáticamente hacia un límite que no puede superarse. Ningún evento externo, ninguna presión política ni ningún consenso entre participantes puede alterar ese límite sin que los miles de nodos que verifican las reglas rechacen el cambio. La escasez de Bitcoin no es una promesa —es una consecuencia matemática del protocolo.'},
      {icon:'⚡',label:'DIVISIBILIDAD Y ACCESO UNIVERSAL',
       text:'Una crítica histórica al oro como dinero es que es difícil de dividir con precisión para transacciones pequeñas. El dinero digital puede diseñarse para ser divisible a cualquier nivel. Bitcoin está dividido en unidades tan pequeñas que permiten transacciones de cualquier tamaño, desde fracciones de centavo hasta millones de dólares, usando el mismo protocolo. Esta propiedad tiene implicaciones de inclusión importantes: no existe un monto mínimo para participar. La divisibilidad extrema elimina la barrera de entrada que el precio nominal de un bitcoin completo podría generar para la mayoría de la población.'},
      {icon:'🌍',label:'DESCENTRALIZACIÓN REAL VS. NOMINAL',
       text:'Muchos sistemas afirman ser descentralizados pero tienen puntos únicos de fallo: un dominio que puede bloquearse, una empresa que puede presionarse, un grupo de desarrolladores con acceso especial. La descentralización real implica que no existe ningún actor cuya eliminación pueda detener el sistema. Bitcoin lo logra porque cualquier persona puede correr un nodo con hardware básico, y la red solo requiere que la mayoría de nodos honestos sigan las reglas. No hay CEO, no hay sede, no hay lista de servidores que bloquear. El costo de atacar la red debe superar el beneficio —y ese costo es deliberadamente enorme.'},
      {icon:'⏳',label:'EL HALVING: EMISIÓN CONTROLADA EN EL TIEMPO',
       text:'El mecanismo que controla la emisión de nuevos bitcoins opera de forma completamente autónoma y predecible. Cada vez que la red alcanza cierto número de bloques minados, la recompensa que reciben los mineros se reduce exactamente a la mitad. Esto ocurre de manera cíclica a lo largo del tiempo, y cada evento reduce permanentemente la tasa de emisión de nuevos bitcoins. Este diseño significa que la oferta nueva decrece de forma sistemática y verificable por cualquier persona. No hay reunión de emergencia ni decisión discrecional: el ajuste es automático e inevitable, independientemente de lo que ocurra en la economía mundial.'},
    ]
  },
  3:{
    speaker:'MATEO',
    title:'MÓD.3 — CÓMO FUNCIONA BITCOIN',
    cards:[
      {icon:'🔗',label:'BLOCKCHAIN: REGISTRO INALTERABLE POR DISEÑO',
       text:'El blockchain es una base de datos estructurada en bloques encadenados criptográficamente. Cada bloque contiene transacciones, una marca de tiempo y una referencia matemática al bloque anterior. Esta referencia es un "hash" —un código de longitud fija que representa de forma única el contenido del bloque anterior. Si alguien intentara modificar una transacción pasada, el hash de ese bloque cambiaría, rompiendo su vínculo con el siguiente bloque, y así sucesivamente. Para falsificar una transacción confirmada habría que recalcular todos los bloques posteriores más rápido que toda la red honesta genera nuevos —una hazaña computacionalmente imposible en la práctica con la infraestructura actual.'},
      {icon:'⛏️',label:'PROOF OF WORK: SEGURIDAD CON COSTO REAL',
       text:'El mecanismo que protege Bitcoin requiere que los participantes que quieren agregar un bloque al registro gasten recursos computacionales reales —electricidad y hardware— para encontrar una solución a un problema matemático. Este trabajo no puede falsificarse ni atajarse: la única forma de encontrar la solución válida es intentar combinaciones masivamente hasta dar con ella. El primero en lograrlo propone el bloque y recibe como recompensa bitcoins nuevos más las comisiones de las transacciones incluidas. La dificultad del problema se ajusta automáticamente para mantener un ritmo constante, independientemente de cuánta potencia computacional esté activa.'},
      {icon:'🛡️',label:'¿POR QUÉ ES IRRACIONAL ECONÓMICAMENTE ATACAR BITCOIN?',
       text:'Un atacante que quisiera reescribir el historial de transacciones necesitaría acumular más poder computacional que toda la red honesta combinada. Ese hardware y esa electricidad tienen un costo real en el mundo físico, estimado en decenas de miles de millones de dólares para un ataque sostenido. Pero hay un problema adicional: si el ataque tuviera éxito y se hiciera público, el valor de Bitcoin colapsaría. El atacante habría gastado una fortuna para obtener activos que valen mucho menos. Bitcoin diseña la seguridad no sobre confianza en personas honestas, sino sobre hacer que la deshonestidad sea siempre más costosa que la honestidad.'},
      {icon:'📡',label:'NODOS: LOS VIGILANTES DEL PROTOCOLO',
       text:'Un nodo completo de Bitcoin descarga y verifica de forma independiente cada transacción y cada bloque desde el primero hasta hoy. No confía en nadie —valida todo por sí mismo. Esto significa que la seguridad del sistema no depende de que los mineros sean honestos: depende de que los nodos rechacen cualquier bloque que viole las reglas. Cualquier persona puede correr un nodo con hardware modesto. La existencia de miles de nodos independientes en todo el mundo significa que no hay un punto central de control o fallo. El consenso emerge de la verificación distribuida, no de la confianza centralizada.'},
    ]
  },
  4:{
    speaker:'MATEO',
    title:'MÓD.4 — CÓMO USAR BITCOIN EN MÉXICO',
    cards:[
      {icon:'🗝️',label:'LLAVES PRIVADAS: SOBERANÍA FINANCIERA EN CÓDIGO',
       text:'En Bitcoin no existe una cuenta con saldo que alguien administra por ti. Lo que existe son bitcoins asignados a direcciones públicas en el blockchain, y la capacidad de moverlos depende exclusivamente de quien posea la llave privada correspondiente. Una llave privada es un número generado aleatoriamente del que matemáticamente se deriva una dirección. El proceso es unidireccional: obtener la dirección desde la llave privada es trivial; hacer el camino inverso es computacionalmente imposible. Poseer la llave privada equivale a poseer los bitcoins —sin necesidad de que ninguna institución lo certifique o autorice.'},
      {icon:'📋',label:'CUSTODIA: EL RIESGO QUE MUCHOS IGNORAN',
       text:'Cuando usas un exchange o servicio custodial, no tienes bitcoins —tienes una promesa de que ese servicio te los entregará cuando los pidas. La diferencia parece sutil pero tiene consecuencias enormes: el servicio puede ser hackeado, puede quebrar, puede ser intervenido por autoridades o puede simplemente decidir no devolverte tus fondos. La historia de Bitcoin está llena de exchanges que fallaron llevándose los activos de sus usuarios. La auto-custodia —controlar tus propias llaves privadas— es la única forma de tener bitcoins reales, no promesas de bitcoins respaldadas por la reputación de un tercero.'},
      {icon:'🌩️',label:'LIGHTNING NETWORK: ESCALABILIDAD SIN SACRIFICAR SEGURIDAD',
       text:'El blockchain base de Bitcoin prioriza seguridad y descentralización sobre velocidad —cada transacción requiere confirmación de miles de nodos y tarda minutos. Para pagos cotidianos esto es impractical. Lightning Network resuelve esto creando canales de pago directos entre dos partes: las transacciones dentro del canal ocurren instantáneamente y sin costo, y solo se registran en el blockchain cuando el canal se abre o cierra. Esto permite miles de transacciones por segundo con comisiones de fracciones de centavo, manteniendo la seguridad del blockchain como respaldo de liquidación final para cualquier disputa.'},
      {icon:'🇲🇽',label:'EL ECOSISTEMA BITCOIN EN MÉXICO',
       text:'México tiene uno de los ecosistemas Bitcoin más activos de América Latina, impulsado en parte por ser el segundo receptor mundial de remesas. La regulación vigente reconoce los activos virtuales como método de pago sin otorgarles curso legal forzoso —pueden usarse libremente pero nadie está obligado a aceptarlos. Las ganancias por apreciación están sujetas a impuestos. Existen wallets que operan tanto en Bitcoin como en pesos digitales, exchanges regulados, cajeros automáticos en ciudades principales y una comunidad creciente de negocios que los aceptan. La barrera principal ya no es técnica ni legal —es educativa.'},
    ]
  },
};

// ══════════════════════════════════════
// EXAM DATA
// ══════════════════════════════════════
const EXAM_DATA={
  0:{
    label:'INTRODUCCIÓN: EL DINERO',
    badge:{icon:'💡',name:'DESPERTANDO',desc:'Completaste la introducción'},
    qs:[
      {hint:'Recuerda el billete de $100 que Don Memo sacó del bolsillo...',
       q:'¿Qué pasó con el <span class="hi">valor del peso</span> desde 1995 a hoy?',
       opts:['Bajó ~30% en total por las crisis económicas','Perdió más del 1,000% de su poder adquisitivo','Bajó pero se recuperó con el TLCAN','Se devaluó solo durante el sexenio del error de diciembre'],ans:1,
       exp:'Con $100 pesos de 1995 comprabas lo que hoy cuesta ~$1,400 pesos. Inflación acumulada 1995–2025: más del 1,300%.'},
      {hint:'El dinero es como una app, dijo Don Memo...',
       q:'¿Cómo describe Don Memo al <span class="hi">dinero</span>?',
       opts:['Un contrato social respaldado por el Estado','Una reserva de valor natural como el oro','Una tecnología que puede estar mal diseñada y mejorarse','Un sistema neutral controlado por ningún actor'],ans:2,
       exp:'El dinero es una tecnología social. Como toda tecnología, tiene bugs y puede mejorarse. Bitcoin es esa mejora.'},
      {hint:'¿Qué porcentaje de mexicanos está fuera del sistema financiero?',
       q:'¿Cuántos adultos mexicanos NO tienen cuenta bancaria formal?',
       opts:['Cerca del 20%, principalmente en zonas rurales','Alrededor del 35%','Más del 50%, unos 37 millones de personas','Menos del 15% desde que llegó el SPEI'],ans:2,
       exp:'El 51% de los adultos mexicanos no tiene cuenta bancaria (INEGI ENIF 2021). Más de 37 millones excluidos del sistema financiero.'},
    ]
  },
  1:{
    label:'MÓDULO 1: ¿POR QUÉ EXISTE BITCOIN?',
    badge:{icon:'✈️',name:'VIAJERO DEL TIEMPO',desc:'Completaste el módulo 1'},
    qs:[
      {hint:'Recuerda el cuaderno de cuentas de Don Memo y los $500 por quincena...',
       q:'¿Cuánto perdió Don Memo en comisiones en <span class="hi">20 años</span> de remesas?',
       opts:['Unos $8,000 USD, sobre todo en los primeros años','$21,600 USD al ritmo de $45 por envío quincenal','Cerca de $40,000 USD contando los cambios de tipo de cambio','Menos de $3,000 USD porque Western Union bajó comisiones'],ans:1,
       exp:'$500 × 9% = $45 comisión × 24 envíos × 20 años = $21,600 USD. Con Lightning: ~$5 USD total en los mismos 20 años.'},
      {hint:'¿Cuándo y por qué nació Bitcoin?',
       q:'¿En qué contexto histórico nació Bitcoin el <span class="hi">31 de octubre de 2008</span>?',
       opts:['Tras el Y2K y el temor a fallos tecnológicos globales','Después del 11-S y la crisis de confianza en los gobiernos','Durante el colapso financiero global con rescates bancarios millonarios','En respuesta a la burbuja puntocom y el fraude de Enron'],ans:2,
       exp:'Bitcoin nació en plena crisis financiera de 2008. El Genesis Block incluyó el mensaje "Chancellor on brink of second bailout for banks".'},
      {hint:'¿Qué hace el banco central cuando el gobierno necesita dinero?',
       q:'¿Por qué ocurre la <span class="hi">inflación</span> según Don Memo?',
       opts:['Por el aumento de precios de importaciones y materias primas','Porque los empresarios suben precios para maximizar ganancias','Porque el banco central emite más dinero del que respaldó la economía','Por la especulación en mercados de futuros y derivados'],ans:2,
       exp:'Más dinero persiguiendo la misma cantidad de bienes = precios suben. Es consecuencia estructural del dinero fiduciario.'},
      {hint:'¿Quién es Satoshi Nakamoto?',
       q:'¿Qué hizo Satoshi Nakamoto después de crear Bitcoin?',
       opts:['Transfirió el control a la Fundación Bitcoin antes de retirarse','Minó solo durante 2 años y luego vendió todos sus BTC','Desapareció en 2011 sin mover nunca sus bitcoins','Sigue activo bajo seudónimo en el desarrollo del protocolo'],ans:2,
       exp:'Satoshi desapareció en 2011. Nunca tocó el ~millón de bitcoins que minó. Demostró que Bitcoin no pertenece a nadie.'},
      {hint:'¿Qué es un intermediario y qué puede hacer además de cobrar?',
       q:'¿Cuál es el problema MÁS GRAVE de los intermediarios financieros?',
       opts:['Sus altas comisiones encarecen el comercio internacional','Que pueden congelar tu dinero, cerrar tu cuenta o revertir operaciones sin tu permiso','Su lentitud para procesar transferencias internacionales','Que reportan tus movimientos al SAT sin avisarte'],ans:1,
       exp:'No solo cobran: pueden congelar tu dinero, cerrar tu cuenta, revertir operaciones. Tu dinero... pero ellos deciden.'},
    ]
  },
  2:{
    label:'MÓDULO 2: LO QUE HACE ESPECIAL A BITCOIN',
    badge:{icon:'⚡',name:'PLEBEYAN',desc:'Completaste el módulo 2'},
    qs:[
      {hint:'Don Memo levantó la mano y extendió los cinco dedos...',
       q:'¿Cuántos Bitcoin existirán <span class="hi">como máximo</span> en toda la historia?',
       opts:['100 millones, uno por cada satoshi posible','21 millones, codificado matemáticamente en el protocolo','Depende de los mineros activos en cada halving','No hay límite fijo, se ajusta cada 4 años'],ans:1,
       exp:'Solo existirán 21,000,000 Bitcoin. Está codificado matemáticamente. Ningún gobierno, empresa ni individuo puede cambiarlo.'},
      {hint:'Un bitcoin se divide en partes que se llaman satoshis...',
       q:'¿Cuántos <span class="hi">satoshis</span> tiene 1 Bitcoin?',
       opts:['1,000,000 (un millón), como los centavos del dólar','10,000,000 (diez millones)','100,000,000 (cien millones)','21,000,000, igual al suministro total'],ans:2,
       exp:'1 Bitcoin = 100,000,000 satoshis. Esta divisibilidad extrema elimina la barrera económica: no necesitas un BTC completo para empezar.'},
      {hint:'¿Qué pasa si alguien intenta cambiar las reglas de Bitcoin?',
       q:'Si alguien intenta cambiar el código de Bitcoin para crear más de 21M, ¿qué ocurre?',
       opts:['La propuesta debe aprobarse por mayoría de mineros y nodos','Los nodos que siguen las reglas originales rechazan esa versión automáticamente','Se genera un debate en la comunidad y se vota durante 6 meses','La Fundación Bitcoin decide si el cambio es válido'],ans:1,
       exp:'Cualquier nodo que viola las reglas es rechazado por la red. Tu versión modificada no es Bitcoin: es otra cosa que nadie usa.'},
      {hint:'¿Qué es el halving y cada cuánto ocurre?',
       q:'¿Cada cuánto tiempo ocurre el <span class="hi">halving</span> de Bitcoin?',
       opts:['Cada año calendario, en enero','Cada 2 años, sincronizado con las elecciones de EE.UU.','Cada ~4 años al completarse 210,000 bloques','Cada 10 años según el whitepaper original'],ans:2,
       exp:'El halving ocurre cada ~4 años. Reduce la recompensa de minería a la mitad. 2024: 3.125 BTC/bloque. Este mecanismo garantiza el límite de 21M.'},
      {hint:'¿Quién puede congelar tu cuenta de Bitcoin?',
       q:'¿Quién puede <span class="hi">confiscar tus bitcoins</span> si tú tienes tus llaves privadas?',
       opts:['Un juez federal con orden de embargo puede obligar al exchange','Banxico si emite un decreto de activos digitales','Nadie: ni gobierno, ni banco, ni el creador de tu wallet','Solo si te hackean la wallet con acceso físico al dispositivo'],ans:2,
       exp:'Bitcoin es descentralizado. +17,000 nodos globales, sin CEO ni sede. Nadie puede congelar tu Bitcoin si tú controlas tus llaves privadas.'},
    ]
  },
  3:{
    label:'MÓDULO 3: CÓMO FUNCIONA BITCOIN',
    badge:{icon:'🔑',name:'SOBERANO',desc:'Completaste el módulo 3'},
    qs:[
      {hint:'El cuaderno copiado idéntico en 17,000 computadoras...',
       q:'¿Qué es el <span class="hi">blockchain</span>?',
       opts:['Una base de datos privada que administra la Fundación Bitcoin','Registro distribuido, público e inmutable mantenido por miles de nodos independientes','El servidor principal donde se guardan las wallets de los usuarios','Un protocolo de cifrado para proteger transacciones bancarias'],ans:1,
       exp:'El blockchain es una base de datos distribuida, pública e inmutable. Lo mantienen +17,000 nodos. En 15 años: hackeado 0 veces. Uptime: 99.98%.'},
      {hint:'¿Por qué es imposible modificar transacciones ya confirmadas?',
       q:'¿Por qué es <span class="hi">prácticamente imposible</span> modificar una transacción ya confirmada en Bitcoin?',
       opts:['Porque cada transacción lleva la firma digital del emisor y no puede rehacerse','Cambiar un bloque altera su hash y rompe la cadena de todos los bloques posteriores','Porque los mineros verifican en tiempo real cualquier intento de fraude','Porque el protocolo bloquea automáticamente IPs sospechosas'],ans:1,
       exp:'Modificar un bloque cambia su hash, rompiendo la cadena de todos los bloques posteriores. Requeriría superar el poder computacional de toda la red.'},
      {hint:'¿Qué hace un minero y qué recibe?',
       q:'¿Qué recibe un <span class="hi">minero</span> por agregar un bloque válido al blockchain?',
       opts:['Un porcentaje de las transacciones que verificó, pagado por los usuarios','Bitcoin nuevo emitido por el protocolo más las comisiones de ese bloque','Tokens de gobernanza que le dan voto en decisiones del protocolo','Acceso preferente para minar los siguientes bloques'],ans:1,
       exp:'Los mineros verifican transacciones y las agregan al blockchain resolviendo un problema matemático. Reciben Bitcoin nuevo + comisiones. En 2024: 3.125 BTC por bloque.'},
      {hint:'¿Por qué el Proof of Work hace Bitcoin seguro?',
       q:'¿Por qué el <span class="hi">Proof of Work</span> hace Bitcoin seguro?',
       opts:['Porque requiere que los mineros tengan una identidad verificada y reputación','Porque atacar la red exige un gasto de energía real tan costoso que es económicamente inviable','Porque los bloques se encriptan con claves que solo los nodos conocen','Porque la velocidad de procesamiento hace imposible coordinar un ataque a tiempo'],ans:1,
       exp:'El PoW exige gasto real de energía. Un ataque 51% costaría >$20,000 millones USD. Ser honesto es siempre más barato que intentar hacer trampa.'},
      {hint:'¿Desde cuándo funciona Bitcoin sin parar?',
       q:'¿Desde cuándo funciona la red Bitcoin <span class="hi">sin interrupciones</span>?',
       opts:['Desde 2010, cuando se realizó la primera transacción comercial (las pizzas)','Desde el 3 de enero de 2009, cuando Satoshi minó el bloque génesis','Desde 2012 tras el primer halving que estabilizó la red','Desde 2013 cuando superó los primeros 1,000 nodos activos'],ans:1,
       exp:'La red Bitcoin funciona desde el Genesis Block el 3 de enero de 2009. Uptime: 99.98%. Más de 15 años sin parar un solo día.'},
    ]
  },
  4:{
    label:'MÓDULO 4: CÓMO USAR BITCOIN EN MÉXICO',
    badge:{icon:'🗺️',name:'BITCOINER MX',desc:'Completaste el módulo 4'},
    qs:[
      {hint:'Una wallet no guarda bitcoins, guarda algo diferente...',
       q:'¿Qué guarda realmente una <span class="hi">wallet</span> de Bitcoin?',
       opts:['Una copia local del blockchain con tus transacciones','Las llaves privadas que prueban que tú puedes gastar esos bitcoins','Un archivo cifrado con el saldo sincronizado desde el servidor','Tus datos KYC para poder operar en exchanges regulados'],ans:1,
       exp:'Los bitcoins existen en el blockchain. La wallet guarda las llaves privadas: las contraseñas matemáticas que demuestran que son tuyos.'},
      {hint:'"Not your keys, not your coins" dijo Don Memo...',
       q:'¿Qué significa <span class="hi">"not your keys, not your coins"</span>?',
       opts:['Que sin verificación de identidad no puedes recibir bitcoins','Si un tercero custodia tus llaves, él controla tus bitcoins y puede bloquearte o perderlos','Que debes memorizar tu contraseña para no perder acceso','Que las wallets de hardware son obligatorias para tener seguridad real'],ans:1,
       exp:'Si usas un exchange custodial, ellos tienen tus llaves. Pueden bloquearte, hackearse o quebrar. Solo la auto-custodia es verdadera soberanía financiera.'},
      {hint:'¿Por qué la seed phrase NUNCA debe estar en formato digital?',
       q:'¿Por qué NUNCA debes guardar tu <span class="hi">seed phrase</span> en foto, nube o WhatsApp?',
       opts:['Porque las 12 palabras pierden validez si se digitalizan','Cualquier archivo digital puede ser interceptado, hackeado o filtrado sin que te enteres','Porque los exchanges pueden detectarla y congelar tu cuenta','Porque viola los términos de servicio de Bitcoin y anula tu wallet'],ans:1,
       exp:'Foto, nube, email, WhatsApp: todo lo digital puede ser interceptado. Solo papel físico en lugar seguro protege tus 12 palabras maestras.'},
      {hint:'Lightning Network resuelve el problema de velocidad del blockchain base...',
       q:'¿Qué ventaja tiene <span class="hi">Lightning Network</span> sobre el blockchain base?',
       opts:['Mayor seguridad porque añade una segunda capa de verificación criptográfica','Pagos en menos de un segundo con comisiones de centavos, vs los ~10 minutos del blockchain','Mayor privacidad porque las transacciones no quedan en el registro público','Permite enviar más de 21M de sats por transacción sin restricciones'],ans:1,
       exp:'Lightning permite pagos cotidianos: menos de 1 segundo, comisiones de $0.001–$0.01 USD. Chicago→Mérida en 2 segundos vs 3 días por remesadora.'},
      {hint:'¿Cuál wallet es no-custodial (self-custody)?',
       q:'¿Cuál de estas opciones es una wallet <span class="hi">no-custodial</span> recomendada para México?',
       opts:['Bitso, porque está regulada por la CNBV y es la más segura','Binance, por su liquidez y respaldo internacional','Phoenix o Blink, donde tú controlas tus llaves privadas','Mercado Pago, porque ya la usan millones de mexicanos'],ans:2,
       exp:'Phoenix y Blink son no-custodiales: tú controlas tus llaves. Bitso y Binance son custodiales. Solo la auto-custodia te da soberanía financiera real.'},
    ]
  },
};

// ══════════════════════════════════════
// COURSE STATE
// ══════════════════════════════════════
const ST={idx:0,done:false,choices:null,notes:JSON.parse(localStorage.getItem('curso_dmn')||'[]'),examDone:{},seen:new Set(),pendingEx:null,pendingTrivia:null};
let twI=null;

// ══════════════════════════════════════
// EXAM STATE
// ══════════════════════════════════════
const ES={ch:0,qIdx:0,lives:3,score:0,streak:0,maxStreak:0,answers:[],startTime:0,attempts:1,answered:false};

function curExamCh(){return DIALOGS[ST.idx]?.ch||0;}

// ══════════════════════════════════════
// MÓDULO LABELS
// ══════════════════════════════════════
const MOD_LABELS=['INTRO — EL DINERO','MÓD.1 — ¿POR QUÉ BITCOIN?','MÓD.2 — LO QUE HACE ESPECIAL','MÓD.3 — CÓMO FUNCIONA','MÓD.4 — CÓMO USAR BTC','CONCLUSIÓN','BONUS — GRADUACIÓN'];

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════
function initStars(){}

window.onload=()=>{
  initStars();
  applyThemeUI();
  buildGlossary();
  updBadges(0);
  renderNotes();
  fetchUSDMXN().then(fetchBTC);
  setInterval(fetchBTC,15000);
  setInterval(fetchUSDMXN,300000);
  drawMemo();

  const tutDone  = localStorage.getItem('curso_tut_done');
  const saved    = localStorage.getItem('curso_rpgname');
  const savedIdx = parseInt(localStorage.getItem('curso_idx')||'0');
  const savedExam= JSON.parse(localStorage.getItem('curso_examDone')||'{}');
  if(savedExam) Object.assign(ST.examDone, savedExam);

  if(!tutDone){
    // ── Primera vez: UINIK primero, tutorial oculto ──
    document.getElementById('rpgScreen').style.display='flex';
    document.getElementById('tutorialScreen').style.display='none';
    document.getElementById('returnScreen').style.display='none';
  } else if(!saved){
    // ── Vio tutorial pero nunca completó el rpg intro ──
    document.getElementById('tutorialScreen').style.display='none';
    document.getElementById('returnScreen').style.display='none';
    document.getElementById('rpgScreen').style.display='flex';
  } else if(savedIdx > 0){
    // ── Usuario regresa con progreso ──
    document.getElementById('tutorialScreen').style.display='none';
    document.getElementById('rpgScreen').style.display='none';
    showReturnScreen(savedIdx, savedExam);
  } else {
    // ── Ya visitó pero sin progreso (idx=0) ──
    document.getElementById('tutorialScreen').style.display='none';
    document.getElementById('returnScreen').style.display='none';
    document.getElementById('rpgScreen').style.display='flex';
  }
};

// ══════════════════════════════════════
// PANTALLA DE REGRESO
// ══════════════════════════════════════
function showReturnScreen(savedIdx, savedExam){
  const scr = document.getElementById('returnScreen');
  scr.style.display = 'flex';

  // Construir texto de progreso
  const d = DIALOGS[savedIdx] || DIALOGS[0];
  const ch = d.ch;
  const modName = MOD_LABELS[ch] || 'INTRO';
  const pct = Math.round((savedIdx / DIALOGS.length) * 100);
  const examCount = Object.keys(savedExam).length;

  document.getElementById('returnProgressText').innerHTML =
    `Ibas en el <b style="color:var(--btc);">${modName}</b><br>` +
    `Diálogo <b style="color:var(--text);">${savedIdx + 1}</b> de ${DIALOGS.length} · <b style="color:var(--btc);">${pct}% completado</b><br>` +
    (examCount > 0 ? `<span style="color:var(--green);">✓ ${examCount} examen${examCount>1?'es':''} completado${examCount>1?'s':''}</span>` : '');
}

function continueSession(){
  const savedIdx = parseInt(localStorage.getItem('curso_idx')||'0');
  ST.idx = (savedIdx > 0 && savedIdx < DIALOGS.length) ? savedIdx : 0;

  // Cerrar pantalla de regreso
  document.getElementById('returnScreen').style.display='none';

  // Desbloquear audio (gesto del usuario)
  _currentScene = -1; // forzar cambio de escena
  const d = DIALOGS[ST.idx];
  const a = document.getElementById('bgAudio');
  if(a){
    const scene = d ? d.ch : 0;
    const src = AUDIO_SCENES[scene] || '';
    if(src){ a.src=src; a.volume=_muted?0:_vol; a.play().catch(()=>{}); }
    _currentScene = scene;
    const lbl=['Intro','Módulo 1','Módulo 2','Módulo 3','Módulo 4','Conclusión'];
    const auEl=document.getElementById('auCurrent');
    if(auEl) auEl.textContent = lbl[scene]||'—';
  }

  // Restaurar tarjetas de los diálogos pasados
  restoreCards(ST.idx);

  showD(DIALOGS[ST.idx]);
  updProg();
}

function confirmRestart(){
  document.getElementById('restartWarning').style.display='block';
}

function doRestart(){
  // Borrar progreso (conservar notas)
  localStorage.removeItem('curso_idx');
  localStorage.removeItem('curso_examDone');
  localStorage.removeItem('curso_rpgname');
  localStorage.removeItem('curso_tut_done');
  ST.idx=0;
  ST.examDone={};
  ST.pendingEx=null;
  ST.pendingTrivia=null;

  document.getElementById('returnScreen').style.display='none';
  document.getElementById('restartWarning').style.display='none';

  // Mostrar tutorial desde el principio
  document.getElementById('tutorialScreen').style.display='flex';
  goTutSlide(0);
}

// ══════════════════════════════════════
// RESTAURAR TARJETAS AL CONTINUAR
// ══════════════════════════════════════
function restoreCards(upToIdx){
  // Recolectar todos los data de diálogos previos (en orden)
  const cards = [];
  for(let i=0; i <= upToIdx && i < DIALOGS.length; i++){
    if(DIALOGS[i].data) cards.push(DIALOGS[i].data);
  }
  if(cards.length === 0) return;

  // Limpiar estado vacío y mostrar lista
  document.getElementById('dcEmpty').style.display='none';
  const list = document.getElementById('dcList');
  list.style.display='flex';
  list.innerHTML='';

  // Agregar en orden inverso (más reciente arriba), sin animación de "NUEVO"
  [...cards].reverse().forEach(data => {
    const card = document.createElement('div');
    card.className='dc '+(data.col||'');
    const bars = data.bars.map(b=>
      `<div class="pbar-row"><span class="pbar-lbl" style="color:${b.col}">${b.lbl}</span><div class="pbar-track"><div class="pbar-fill" style="width:${b.pct}%;background:${b.col}"></div></div><span class="pbar-val" style="color:${b.col}">${b.pct}%</span></div>`
    ).join('');
    const cc = data.col==='red'?'var(--red)':data.col==='blue'?'var(--blue)':data.col==='green'?'var(--green)':'var(--btc)';
    card.innerHTML=`<div style="font-family:'Press Start 2P',monospace;font-size:6px;color:${cc};">${data.cat}</div><p>${data.txt}</p><div class="dc-meta">${data.meta}</div><span class="dc-more" onclick="togCard(this)">▶ VER MÁS</span><div class="dc-expand"><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text);margin-bottom:8px;">${data.title}</div><p>${data.detail}</p><div class="pbar-wrap">${bars}</div><div class="dc-src">📌 ${data.src}</div><span class="dc-more" onclick="togCard(this)" style="color:var(--text-muted);">✕ CERRAR</span></div>`;
    list.appendChild(card);
  });
}

// ══════════════════════════════════════
// PIXEL ART — Don Memo
// ══════════════════════════════════════
function drawMemo(){
  const c=document.getElementById('hintCanvas');if(!c)return;
  const x=c.getContext('2d'),s=2;
  x.fillStyle='#8B6914';x.fillRect(2*s,1*s,16*s,2*s);x.fillRect(4*s,3*s,12*s,3*s);
  x.fillStyle='#C68642';
  for(let i=4;i<16;i++)x.fillRect(i*s,6*s,s,s);
  for(let i=3;i<17;i++)x.fillRect(i*s,7*s,s,s);
  for(let i=3;i<17;i++)x.fillRect(i*s,8*s,s,s);
  for(let i=4;i<16;i++)x.fillRect(i*s,9*s,s,s);
  x.fillStyle='#2C1810';x.fillRect(5*s,7*s,2*s,s);x.fillRect(13*s,7*s,2*s,s);
  x.fillStyle='#ddd';for(let i=7;i<13;i++)x.fillRect(i*s,9*s,s,1);
  x.fillStyle='#7B8D42';
  for(let i=3;i<17;i++)x.fillRect(i*s,10*s,s,s);
  for(let i=2;i<18;i++)x.fillRect(i*s,11*s,s,s);
  for(let i=2;i<18;i++)x.fillRect(i*s,12*s,s,s);
  x.fillStyle='#C68642';x.fillRect(s,11*s,2*s,3*s);x.fillRect(17*s,11*s,2*s,3*s);
}

// ══════════════════════════════════════
// DIALOG ENGINE
// ══════════════════════════════════════
function showD(d){
  if(!d)return;
  ST.done=false;
  document.getElementById('cbox').style.display='none';
  document.getElementById('dhint').style.display='none';
  const nm=localStorage.getItem('curso_rpgname')||'Mijo';
  const spEl=document.getElementById('spk');
  spEl.textContent=d.sp==='TÚ'||d.sp==='MATEO'?'MATEO':d.sp==='DIEGO'?'DIEGO':d.sp;
  if(d.img){
    const gbg=document.getElementById('gbg');
    gbg.style.transition='opacity 0.4s';
    gbg.style.opacity='0';
    setTimeout(()=>{
      gbg.style.background=`linear-gradient(rgba(0,0,0,0.18),rgba(0,0,0,0.18)),url('${d.img}') center/cover no-repeat`;
      gbg.style.opacity='1';
    },200);
  }
  const spColors={'DON MEMO':'#fff','MATEO':'var(--btc)','DIEGO':'var(--blue)'};
  spEl.style.background=spColors[d.sp]||'#fff';
  spEl.style.color=d.sp==='DON MEMO'?'var(--darker)':'var(--darker)';
  const txt=d.txt.replace(/{n}/g,nm);
  const tEl=document.getElementById('dtxt');
  tEl.innerHTML='';
  if(twI)clearInterval(twI);
  let i=0;
  twI=setInterval(()=>{
    if(i<txt.length){tEl.innerHTML=txt.slice(0,++i)+'<span class="cur"></span>';}
    else{
      tEl.innerHTML=txt+(d.choices?'':'<span class="cur"></span>');
      clearInterval(twI);ST.done=true;ST.choices=d.choices||null;
      if(d.choices)setTimeout(()=>showChoices(d.choices),350);
      else document.getElementById('dhint').style.display='block';
      if(d.data)setTimeout(()=>addCard(d.data),700);
      checkChEnd(d);
      checkGraduation(d);
      if(d.exercise)ST.pendingEx=d.exercise;
    }
  },10);
  ST.seen.add(ST.idx);
  localStorage.setItem('curso_idx', ST.idx);
  localStorage.setItem('curso_examDone', JSON.stringify(ST.examDone));
  playSceneAudio(d.ch);
  const skipEl=document.getElementById('skipBadge');
  if(skipEl)skipEl.classList.toggle('vis',ST.seen.has(ST.idx+1)&&!DIALOGS[ST.idx]?.choices);
  updProg();updDots();
  const nl=document.getElementById('navModLabel');
  if(nl)nl.textContent=MOD_LABELS[d.ch]||'';
}

function checkChEnd(d){
  const ch=d.ch;
  const chDs=DIALOGS.filter(x=>x.ch===ch);
  if(d===chDs[chDs.length-1]&&EXAM_DATA[ch]&&!ST.examDone['ch'+ch]){
    ST.examDone['ch'+ch]=true;
    ST.pendingTrivia=ch;
  }
}

function showChoices(cs){
  const box=document.getElementById('cbox');box.style.display='flex';
  cs.forEach((c,i)=>{const b=document.getElementById('c'+i);b.textContent=c.txt;b.style.display='block';});
  for(let i=cs.length;i<3;i++)document.getElementById('c'+i).style.display='none';
}

function pick(i){
  const c=ST.choices[i];
  document.getElementById('cbox').style.display='none';
  ST.idx=c.nx!==undefined?c.nx:ST.idx+1;
  if(DIALOGS[ST.idx])showD(DIALOGS[ST.idx]);
}

function adv(){
  if(document.getElementById('exOverlay')?.classList.contains('on'))return;
  if(document.getElementById('briefingOverlay')?.style.display==='block')return;
  if(document.getElementById('triviaOverlay')?.style.display==='block')return;
  if(document.getElementById('examBackdrop')?.classList.contains('open'))return;
  const d=DIALOGS[ST.idx];
  if(!ST.done){
    if(d){
      const nm=localStorage.getItem('curso_rpgname')||'Mijo';
      document.getElementById('dtxt').innerHTML=d.txt.replace(/{n}/g,nm)+(d.choices?'':'<span class="cur"></span>');
      clearInterval(twI);ST.done=true;ST.choices=d.choices||null;
      if(!d.choices)document.getElementById('dhint').style.display='block';
      else setTimeout(()=>showChoices(d.choices),300);
      if(d.data)setTimeout(()=>addCard(d.data),400);
      checkChEnd(d);
      checkGraduation(d);
      if(d.exercise)ST.pendingEx=d.exercise;
    }return;
  }
  if(d&&d.choices)return;
  if(ST.pendingEx){const ex=ST.pendingEx;ST.pendingEx=null;openEx(ex.type,ex.nx);return;}
  if(ST.pendingTrivia!==null){const ch=ST.pendingTrivia;ST.pendingTrivia=null;openBriefing(ch,()=>openTrivia(ch));return;}
  if(ST.idx<DIALOGS.length-1){ST.idx++;showD(DIALOGS[ST.idx]);}
}

function goBack(){if(ST.idx>0){ST.idx--;showD(DIALOGS[ST.idx]);}}
function goStart(){ST.idx=0;showD(DIALOGS[0]);}
function jmpCh(i){const idx=CH_START[i];if(idx!==undefined){ST.idx=idx;showD(DIALOGS[ST.idx]);}}

// ══════════════════════════════════════
// PROGRESS
// ══════════════════════════════════════
function updProg(){
  const tot=DIALOGS.length,cur=ST.idx,pct=Math.round((cur/tot)*100);
  const ch=DIALOGS[ST.idx]?.ch||0;
  document.getElementById('pFill').style.width=pct+'%';
  document.getElementById('pPct').textContent=pct+'%';
  document.getElementById('cpN').textContent=ch;
  document.getElementById('pTime').textContent='⏱ ~'+Math.max(1,Math.round((tot-cur)*1.3))+' MIN';
  const circ=94.2;
  document.getElementById('donutC').style.strokeDashoffset=(circ-(pct/100)*circ);
  document.getElementById('donutPct').textContent=pct+'%';
  document.getElementById('donutSub').textContent=cur+'/'+tot+' diálogos';
  const dc=Math.max(0,[...new Set(DIALOGS.slice(0,cur+1).map(d=>d.ch))].length-1);
  document.getElementById('prTxt').textContent=dc+' de 6 módulos completados';
  document.getElementById('prFill').style.width=(dc/6*100)+'%';
  updPolaroids(ch);updBadges(ch);
}

function updPolaroids(curCh){
  for(let i=0;i<6;i++){
    const pol=document.getElementById('pol'+i);if(!pol)continue;
    pol.className='pol';
    const badge=pol.querySelector('.pol-badge');
    const cap=pol.querySelector('.pol-caption');
    if(i<curCh){pol.classList.add('done');if(badge){badge.className='pol-badge done';badge.textContent='✓';}if(cap)cap.style.color='var(--green)';}
    else if(i===curCh){pol.classList.add('current');if(badge){badge.className='pol-badge cur';badge.textContent='EN CURSO ▶';}if(cap)cap.style.color='var(--btc)';}
    else{pol.classList.add('locked');if(badge){badge.className='pol-badge';badge.textContent='';}if(cap)cap.style.color='';}
  }
}

function updDots(){
  const ch=DIALOGS[ST.idx]?.ch||0;
  const chDs=DIALOGS.filter(d=>d.ch===ch);
  const pos=ST.idx-CH_START[ch];
  const row=document.getElementById('dotRow');row.innerHTML='';
  chDs.forEach((_,i)=>{const d=document.createElement('div');d.className='dot'+(i<pos?' d':i===pos?' a':'');row.appendChild(d);});
}

// ══════════════════════════════════════
// DATA CARDS
// ══════════════════════════════════════
function addCard(data){
  document.getElementById('dcEmpty').style.display='none';
  const list=document.getElementById('dcList');list.style.display='flex';
  const card=document.createElement('div');
  card.className='dc '+(data.col||'');
  const bars=data.bars.map(b=>`<div class="pbar-row"><span class="pbar-lbl" style="color:${b.col}">${b.lbl}</span><div class="pbar-track"><div class="pbar-fill" style="width:${b.pct}%;background:${b.col}"></div></div><span class="pbar-val" style="color:${b.col}">${b.pct}%</span></div>`).join('');
  const cc=data.col==='red'?'var(--red)':data.col==='blue'?'var(--blue)':data.col==='green'?'var(--green)':'var(--btc)';
  card.innerHTML=`<span class="dc-badge">🔴 NUEVO</span><div style="font-family:'Press Start 2P',monospace;font-size:6px;color:${cc};">${data.cat}</div><p>${data.txt}</p><div class="dc-meta">${data.meta}</div><span class="dc-more" onclick="togCard(this)">▶ VER MÁS</span><div class="dc-expand"><div style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--text);margin-bottom:8px;">${data.title}</div><p>${data.detail}</p><div class="pbar-wrap">${bars}</div><div class="dc-src">📌 ${data.src}</div><span class="dc-more" onclick="togCard(this)" style="color:var(--text-muted);">✕ CERRAR</span></div>`;
  list.insertBefore(card,list.firstChild);
  setTimeout(()=>{const b=card.querySelector('.dc-badge');if(b)b.style.display='none';},4000);
  const pl=document.getElementById('pl');
  if(pl){pl.style.boxShadow='0 0 24px rgba(247,147,26,0.5)';setTimeout(()=>pl.style.boxShadow='',1400);}
  swTab(0);
}
function togCard(el){
  const exp=el.closest('.dc').querySelector('.dc-expand');if(!exp)return;
  exp.classList.toggle('on');
  const more=el.closest('.dc').querySelector('.dc-more:not(.dc-expand .dc-more)');
  if(exp.classList.contains('on')&&more)more.style.display='none';
  else if(more)more.style.display='inline-block';
}

// ══════════════════════════════════════
// TABS / NOTES / GLOSSARY / BADGES
// ══════════════════════════════════════
function swTab(n){for(let i=0;i<4;i++){document.getElementById('t'+i).classList.toggle('on',i===n);document.getElementById('tc'+i).classList.toggle('on',i===n);}}
function updCC(){document.getElementById('cc').textContent=document.getElementById('nta').value.length;}
function saveNote(){
  const v=document.getElementById('nta').value.trim();if(!v)return;
  ST.notes.unshift({txt:v,t:new Date().toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'}),id:Date.now()});
  localStorage.setItem('curso_dmn',JSON.stringify(ST.notes));
  document.getElementById('nta').value='';document.getElementById('cc').textContent='0';
  renderNotes();
  const btn=document.getElementById('saveBtn');btn.textContent='✓ GUARDADA';btn.classList.add('saved');
  setTimeout(()=>{btn.textContent='💾 GUARDAR';btn.classList.remove('saved');},1500);
}
function delNote(id){ST.notes=ST.notes.filter(n=>n.id!==id);localStorage.setItem('curso_dmn',JSON.stringify(ST.notes));renderNotes();}
function renderNotes(){
  const list=document.getElementById('ntList');
  if(!ST.notes.length){list.innerHTML='<div style="font-size:15px;color:var(--text-dim);text-align:center;margin-top:8px;">Sin notas aún</div>';return;}
  list.innerHTML='';
  ST.notes.forEach(n=>{const d=document.createElement('div');d.className='nt-item';d.innerHTML=`<button class="nt-del" onclick="delNote(${n.id})">✕</button><p>${n.txt}</p><div class="ntm">${n.t}</div>`;list.appendChild(d);});
}
function buildGlossary(){
  const list=document.getElementById('gloList');list.innerHTML='';
  GLOSSARY.forEach(t=>{
    const item=document.createElement('div');item.className='glo-item';
    item.innerHTML=`<div class="glo-hdr" onclick="togGlo(this)"><div class="glo-dot" style="background:${t.color}"></div><span class="glo-term">${t.term}</span><span class="glo-arrow">▼</span></div><div class="glo-body"><div class="glo-def">${t.def}</div><div class="glo-eg">${t.eg}</div><div class="glo-tags">${t.tags.map(tg=>`<span class="glo-tag" onclick="searchGlo('${tg}')">${tg}</span>`).join('')}</div></div>`;
    list.appendChild(item);
  });
  document.getElementById('gloCount').textContent=GLOSSARY.length+' términos';
}
function togGlo(hdr){hdr.classList.toggle('on');hdr.nextElementSibling.classList.toggle('on');}
function filterGlo(){
  const q=document.getElementById('gloSearch').value.toLowerCase();
  const list=document.getElementById('gloList');list.innerHTML='';
  const f=GLOSSARY.filter(t=>t.term.toLowerCase().includes(q)||t.def.toLowerCase().includes(q));
  f.forEach(t=>{const item=document.createElement('div');item.className='glo-item';item.innerHTML=`<div class="glo-hdr" onclick="togGlo(this)"><div class="glo-dot" style="background:${t.color}"></div><span class="glo-term">${t.term}</span><span class="glo-arrow">▼</span></div><div class="glo-body"><div class="glo-def">${t.def}</div><div class="glo-eg">${t.eg}</div><div class="glo-tags">${t.tags.map(tg=>`<span class="glo-tag" onclick="searchGlo('${tg}')">${tg}</span>`).join('')}</div></div>`;list.appendChild(item);});
  document.getElementById('gloCount').textContent=f.length+' términos';
}
function searchGlo(tag){document.getElementById('gloSearch').value=tag;filterGlo();swTab(2);}
function updBadges(curCh){
  curCh=curCh||DIALOGS[ST.idx]?.ch||0;
  const grid=document.getElementById('logGrid');grid.innerHTML='';let unlocked=0;
  BADGES.forEach(b=>{const on=curCh>=b.ch;if(on)unlocked++;const card=document.createElement('div');card.className='log-card '+(on?'unlock':'lock');card.innerHTML=`<div class="log-icon">${b.icon}</div><div class="log-name">${b.name}</div><div class="log-desc">${b.desc}</div>`;grid.appendChild(card);});
  document.getElementById('logTxt').textContent=unlocked+' de '+BADGES.length+' logros desbloqueados';
  document.getElementById('logBar').style.width=(unlocked/BADGES.length*100)+'%';
}

// ══════════════════════════════════════
// BTC PRICE
// ══════════════════════════════════════
let _usdMxn=17.5;
async function fetchUSDMXN(){
  try{
    const r=await fetch('https://api.frankfurter.app/latest?from=USD&to=MXN');
    const d=await r.json();
    _usdMxn=d.rates.MXN;
  }catch(e){}
}

async function fetchBTC(){
  try{
    const [priceRes,changeRes,fxRes]=await Promise.all([
      fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'),
      fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT'),
      fetch('https://api.frankfurter.app/latest?from=USD&to=MXN')
    ]);
    if(!priceRes.ok) throw new Error('HTTP '+priceRes.status);
    const priceData=await priceRes.json();
    const changeData=await changeRes.json();
    if(fxRes.ok){const fxData=await fxRes.json();_usdMxn=fxData.rates.MXN;}
    const usd=parseFloat(priceData.price);
    const ch=parseFloat(changeData.priceChangePercent);
    const p=Math.round(usd*_usdMxn);
    window._btcMXN=p;
    const fmt=p.toLocaleString('es-MX',{maximumFractionDigits:0});
    const tpEl=document.getElementById('tP');
    if(tpEl){tpEl.classList.add('flash');tpEl.textContent='$'+fmt+' MXN';setTimeout(()=>tpEl.classList.remove('flash'),400);}
    const navP=document.getElementById('navP');if(navP)navP.textContent='$'+fmt;
    const ce=document.getElementById('tC');if(ce){ce.textContent=(ch>=0?'▲':'▼')+Math.abs(ch).toFixed(2)+'%';ce.style.color=ch>=0?'var(--green)':'var(--red)';}
    const ts=document.getElementById('tS');if(ts)ts.textContent='1sat='+(p/1e8).toFixed(4)+' MXN';
    if(document.getElementById('exOverlay')?.classList.contains('on'))refreshExInputs();
  }catch(e){
    const n=document.getElementById('navP');if(n)n.textContent='sin conexión';
    try{
      const r=await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=mxn&include_24hr_change=true');
      const d=await r.json();const p=d.bitcoin.mxn,ch=d.bitcoin.mxn_24h_change;
      window._btcMXN=p;
      const fmt=p.toLocaleString('es-MX',{maximumFractionDigits:0});
      const tpEl=document.getElementById('tP');
      if(tpEl){tpEl.classList.add('flash');tpEl.textContent='$'+fmt+' MXN';setTimeout(()=>tpEl.classList.remove('flash'),400);}
      const navP=document.getElementById('navP');if(navP)navP.textContent='$'+fmt;
      const ce=document.getElementById('tC');if(ce){ce.textContent=(ch>=0?'▲':'▼')+Math.abs(ch).toFixed(2)+'%';}
      const ts=document.getElementById('tS');if(ts)ts.textContent='1sat='+(p/1e8).toFixed(4)+' MXN';
    }catch(e2){}
  }
}

// ══════════════════════════════════════
// EXAM ENGINE
// ══════════════════════════════════════
function openExam(ch){
  const data=EXAM_DATA[ch];if(!data)return;
  ES.ch=ch;ES.qIdx=0;ES.lives=3;ES.score=0;ES.streak=0;ES.maxStreak=0;
  ES.answers=[];ES.startTime=Date.now();ES.answered=false;ES.attempts=1;
  document.getElementById('examChLabel').textContent=data.label;
  document.getElementById('examResults').style.display='none';
  document.getElementById('examResults').classList.remove('show');
  document.getElementById('examBody').style.display='block';
  document.getElementById('examFeedback').classList.remove('show');
  document.getElementById('examFeedback').style.display='none';
  document.getElementById('gameOver').classList.remove('show');
  resetHearts();
  document.getElementById('examBackdrop').classList.add('open');
  document.body.classList.add('exam-open');
  loadQ();
}

function loadQ(){
  const data=EXAM_DATA[ES.ch];
  const q=data.qs[ES.qIdx];if(!q){showResults();return;}
  ES.answered=false;
  const tot=data.qs.length;
  document.getElementById('examProgFill').style.width=((ES.qIdx/tot)*100)+'%';
  document.getElementById('qBadge').textContent='[P.'+(ES.qIdx+1)+']';
  document.getElementById('qText').innerHTML=q.q;
  document.getElementById('hintTxt').textContent='"'+q.hint+'"';

  // ── Barajar opciones aleatoriamente ──
  const correctText = q.opts[q.ans];
  const shuffled = [...q.opts].sort(()=>Math.random()-0.5);
  const newAnsIdx = shuffled.indexOf(correctText);
  // Guardar en ES para que answerQ lo use
  ES.shuffledOpts = shuffled;
  ES.shuffledAns  = newAnsIdx;

  const wrap=document.getElementById('answersWrap');wrap.innerHTML='';
  ['A','B','C','D'].forEach((ltr,i)=>{
    if(i>=shuffled.length)return;
    const btn=document.createElement('button');
    btn.className='ans-btn';
    btn.innerHTML=`<div class="ans-left"><div class="ans-letter">${ltr}</div><div class="ans-text">${shuffled[i]}</div></div><div class="ans-icon"></div>`;
    btn.onclick=()=>answerQ(i);
    wrap.appendChild(btn);
  });
  const fb=document.getElementById('examFeedback');
  fb.classList.remove('show');fb.style.display='none';fb.classList.remove('wrong-fb');
}

function answerQ(idx){
  if(ES.answered)return;
  ES.answered=true;
  const q=EXAM_DATA[ES.ch].qs[ES.qIdx];
  const shuffled  = ES.shuffledOpts;
  const correctIdx= ES.shuffledAns;
  const ok = idx===correctIdx;
  ES.answers.push({q:q.q,ok,chosen:idx,correct:correctIdx,opts:shuffled});
  const btns=document.querySelectorAll('.ans-btn');
  btns.forEach((btn,i)=>{
    btn.disabled=true;
    if(i===correctIdx)btn.classList.add('correct');
    else if(i===idx&&!ok)btn.classList.add('wrong');
    else btn.classList.add('dim');
  });
  const fb=document.getElementById('examFeedback');
  if(ok){
    ES.score++;ES.streak++;ES.maxStreak=Math.max(ES.maxStreak,ES.streak);
    document.getElementById('fbTitle').className='fb-title ok';
    document.getElementById('fbTitle').textContent='⚡ ¡CORRECTO, MIJO!';
    document.getElementById('fbExp').textContent=q.exp;
    document.getElementById('fbReward').innerHTML='<div class="fb-sats">+10 SATS ⚡</div>';
    fb.classList.remove('wrong-fb');
  } else {
    ES.streak=0;loseHeart();
    document.getElementById('fbTitle').className='fb-title bad';
    document.getElementById('fbTitle').textContent='✗ CASI, MIJO...';
    document.getElementById('fbExp').textContent='Correcta: '+shuffled[correctIdx]+'. '+q.exp;
    document.getElementById('fbReward').innerHTML='<div class="fb-life">-1 ❤️</div>';
    fb.classList.add('wrong-fb');
    document.getElementById('examModal').classList.add('shaking');
    setTimeout(()=>document.getElementById('examModal').classList.remove('shaking'),400);
  }
  const isLast=ES.qIdx>=EXAM_DATA[ES.ch].qs.length-1;
  document.getElementById('btnCont').textContent=isLast?'VER RESULTADOS ▶':'CONTINUAR';
  fb.style.display='flex';fb.classList.add('show');
  if(ES.lives<=0)setTimeout(()=>document.getElementById('gameOver').classList.add('show'),500);
}

function nextQ(){
  if(ES.lives<=0)return;
  ES.qIdx++;
  if(ES.qIdx>=EXAM_DATA[ES.ch].qs.length){showResults();return;}
  const body=document.getElementById('examBody');
  const fb=document.getElementById('examFeedback');
  fb.classList.remove('show');fb.style.display='none';
  body.style.opacity='0';body.style.transform='translateY(8px)';
  setTimeout(()=>{
    loadQ();
    body.style.transition='opacity .2s,transform .2s';
    body.style.opacity='1';body.style.transform='translateY(0)';
    setTimeout(()=>{body.style.transition='';},200);
  },150);
}

function loseHeart(){
  ES.lives=Math.max(0,ES.lives-1);
  const hearts=document.querySelectorAll('.heart');
  for(let i=hearts.length-1;i>=0;i--){if(!hearts[i].classList.contains('lost')){hearts[i].classList.add('lost');break;}}
}
function resetHearts(){ES.lives=3;document.querySelectorAll('.heart').forEach(h=>h.classList.remove('lost'));}

function showResults(){
  const elapsed=Math.floor((Date.now()-ES.startTime)/1000);
  const tot=EXAM_DATA[ES.ch].qs.length;
  document.getElementById('examBody').style.display='none';
  document.getElementById('examFeedback').classList.remove('show');
  document.getElementById('examFeedback').style.display='none';
  document.getElementById('examProgFill').style.width='100%';
  const res=document.getElementById('examResults');
  res.style.display='block';res.classList.add('show');
  const pct=Math.round((ES.score/tot)*100);
  const col=pct>=80?'var(--btc)':pct>=60?'var(--gold)':'#888';
  document.getElementById('resBig').innerHTML=`<span style="font-family:'Press Start 2P',monospace;font-size:32px;color:${col};">${ES.score}</span><span style="font-family:'Press Start 2P',monospace;font-size:18px;color:var(--text-dim);"> / ${tot}</span>`;
  const icons=document.getElementById('resIcons');icons.innerHTML='';
  ES.answers.forEach(a=>{const d=document.createElement('div');d.className='res-icon '+(a.ok?'ok':'bad');d.textContent=a.ok?'✓':'✗';icons.appendChild(d);});
  const m=Math.floor(elapsed/60),s=elapsed%60;
  document.getElementById('resTime').textContent=m+'m '+s+'s';
  document.getElementById('resStreak').textContent=ES.maxStreak+' seg.';
  document.getElementById('resAttempts').textContent=ES.attempts;
  let msg='',mc='#888';
  if(ES.score===tot){msg='⚡ PERFECTO';mc='var(--btc)';}
  else if(pct>=60){msg='✓ BIEN HECHO';mc='var(--gold)';}
  else{msg='📖 SIGUE PRACTICANDO';mc='#888';}
  document.getElementById('resMsg').innerHTML=`<span style="font-family:'Press Start 2P',monospace;font-size:10px;color:${mc};">${msg}</span><br><span style="font-size:18px;color:var(--text-muted);">${pct>=60?'Casi lo tienes perfectamente, mijo.':'Don Memo tiene mucha paciencia.'}</span>`;
  const passed=pct>=60;
  const bd=EXAM_DATA[ES.ch]?.badge;
  if(bd){
    document.getElementById('resBadgeWrap').innerHTML=`<div class="res-badge ${passed?'':'locked'}"><div class="res-badge-icon">${bd.icon}</div><div class="res-badge-lbl">${passed?'LOGRO DESBLOQUEADO':'BLOQUEADO'}</div><div class="res-badge-name">${bd.name}</div><div class="res-badge-desc">${passed?bd.desc:'Necesitas '+Math.ceil(tot*0.6)+'/'+tot+' para desbloquear'}</div></div>`;
  }
  const act=document.getElementById('resActions');
  if(passed){act.innerHTML=`<button class="btn-rp" onclick="closeExam()">▶ CONTINUAR</button><button class="btn-rs" onclick="restartExam()">↩ REPASAR</button>`;}
  else{act.innerHTML=`<button class="btn-rp" onclick="restartExam()">↩ REPASAR CAPÍTULO</button><button class="btn-rs" onclick="closeExam()">▶ CONTINUAR IGUAL</button>`;}
  const rv=document.getElementById('resReview');rv.innerHTML='';
  ES.answers.forEach((a,i)=>{
    const d=document.createElement('div');d.className='rri';
    d.innerHTML=`<div class="rri-n ${a.ok?'ok':'bad'}">P.${i+1} ${a.ok?'✓':'✗'}</div><div><div class="rri-q">${EXAM_DATA[ES.ch].qs[i].q.replace(/<[^>]*>/g,'')}</div>${!a.ok?`<div class="rri-a" style="color:var(--red);">Tu respuesta: ${a.opts[a.chosen]}</div><div class="rri-a" style="color:var(--green);">Correcta: ${a.opts[a.correct]}</div>`:`<div class="rri-a" style="color:var(--green);">${a.opts[a.correct]}</div>`}</div>`;
    rv.appendChild(d);
  });
}

function togReview(){
  const rv=document.getElementById('resReview');rv.classList.toggle('open');
  document.querySelector('.btn-rev').textContent=rv.classList.contains('open')?'▲ OCULTAR RESPUESTAS':'▼ VER TODAS LAS RESPUESTAS';
}

function closeExam(){
  document.getElementById('examBackdrop').classList.remove('open');
  document.body.classList.remove('exam-open');
}

function restartExam(){
  ES.attempts++;
  document.getElementById('gameOver').classList.remove('show');
  document.getElementById('examResults').classList.remove('show');
  document.getElementById('examResults').style.display='none';
  document.getElementById('examBody').style.display='block';
  ES.qIdx=0;ES.lives=3;ES.score=0;ES.streak=0;ES.maxStreak=0;ES.answers=[];ES.startTime=Date.now();
  resetHearts();loadQ();
}

// ══════════════════════════════════════
// MOBILE
// ══════════════════════════════════════
function mobTab(n){
  for(let i=0;i<5;i++){const el=document.getElementById('mt'+i);if(el)el.classList.toggle('on',i===n);}
  const drawer=document.getElementById('drawer'),dc=document.getElementById('drawerContent');
  if(n===0){drawer.classList.remove('open');return;}
  drawer.classList.add('open');dc.innerHTML='';
  const src=n===1?'tc1':n===2?'pr':n===3?'tc2':'tc3';
  const clone=document.getElementById(src).cloneNode(true);
  clone.style.cssText='display:flex;width:100%;border:none;flex:1;flex-direction:column;overflow:auto;';
  if(n===3){
    const gloListClone=clone.querySelector('.glo-list');
    if(gloListClone){
      gloListClone.style.overflowY='auto';gloListClone.style.flex='1';gloListClone.innerHTML='';
      GLOSSARY.forEach(t=>{
        const item=document.createElement('div');item.className='glo-item';
        item.innerHTML=`<div class="glo-hdr" onclick="togGlo(this)"><div class="glo-dot" style="background:${t.color}"></div><span class="glo-term">${t.term}</span><span class="glo-arrow">▼</span></div><div class="glo-body"><div class="glo-def">${t.def}</div><div class="glo-eg">${t.eg}</div></div>`;
        gloListClone.appendChild(item);
      });
      const si=clone.querySelector('.glo-search');
      if(si)si.oninput=function(){const q=this.value.toLowerCase();gloListClone.querySelectorAll('.glo-item').forEach(item=>{const t=item.querySelector('.glo-term').textContent.toLowerCase();const d=item.querySelector('.glo-def').textContent.toLowerCase();item.style.display=(t.includes(q)||d.includes(q))?'':'none';});};
    }
  }
  dc.appendChild(clone);
}
function openDrawer(){
  const drawer=document.getElementById('drawer'),dc=document.getElementById('drawerContent');
  drawer.classList.add('open');dc.innerHTML='';
  const clone=document.getElementById('pl').cloneNode(true);
  clone.style.cssText='display:flex;width:100%;border:none;flex:1;flex-direction:column;overflow:hidden;';
  dc.appendChild(clone);
}
document.getElementById('drawer').addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});
document.addEventListener('keydown',e=>{
  const examOpen=document.getElementById('examBackdrop').classList.contains('open');
  const trivOpen=document.getElementById('triviaOverlay').style.display==='block';
  const exOpen=document.getElementById('exOverlay').classList.contains('on');
  const rpgOpen=document.getElementById('rpgScreen')?.style.display==='flex';
  const retOpen=document.getElementById('returnScreen')?.style.display==='flex';
  if(examOpen||trivOpen||exOpen||rpgOpen||retOpen)return;
  if(e.code==='Space'||e.code==='Enter'){e.preventDefault();adv();}
  if(e.code==='ArrowLeft')goBack();
  if(e.code==='ArrowRight')adv();
});

// ══════════════════════════════════════
// TUTORIAL PRIMERA VEZ
// ══════════════════════════════════════
function closeTutorial(){
  document.getElementById('tutorialScreen').style.display='none';
  localStorage.setItem('curso_tut_done','1');
  localStorage.setItem('curso_rpgname','MATEO');
  // Audio ya fue desbloqueado en beginCourse() con el clic en UINIK
  // Ahora sí arrancamos la música de verdad
  const a=document.getElementById('bgAudio');
  if(a){a.volume=_vol;a.src=AUDIO_SCENES[0]||'';a.play().catch(()=>{});}
  _currentScene=0;
  ST.idx=0;
  showD(DIALOGS[0]);
  updProg();
}

// ══════════════════════════════════════
// RPG INTRO SCREEN
// ══════════════════════════════════════
function beginCourse(){
  const tutDone = localStorage.getItem('curso_tut_done');
  const scr = document.getElementById('rpgScreen');

  if(!tutDone){
    // ── Primera vez: el clic en UINIK abre el tutorial ──
    // Este clic ES el gesto del usuario — desbloquear audio silenciosamente
    const a = document.getElementById('bgAudio');
    if(a){
      a.volume=0;
      a.src=AUDIO_SCENES[0]||'';
      a.play().then(()=>{a.pause();a.currentTime=0;a.volume=_vol;}).catch(()=>{});
    }
    // Fade out UINIK → mostrar tutorial
    if(scr){scr.style.animation='rpgFadeOut .5s forwards';setTimeout(()=>{scr.style.display='none';document.getElementById('tutorialScreen').style.display='flex';goTutSlide(0);},500);}
  } else {
    // ── Ya vio el tutorial: arrancar curso directo ──
    localStorage.setItem('curso_rpgname','MATEO');
    _currentScene=0;
    ST.idx=0;
    if(scr){scr.style.animation='rpgFadeOut .5s forwards';setTimeout(()=>{scr.style.display='none';showD(DIALOGS[ST.idx]);updProg();},500);}
  }
}

// ══════════════════════════════════════
// SKIP SEEN DIALOG
// ══════════════════════════════════════
function skipSeen(){
  const d=DIALOGS[ST.idx];
  if(d&&d.choices)return;
  if(ST.pendingEx){const ex=ST.pendingEx;ST.pendingEx=null;openEx(ex.type,ex.nx);return;}
  if(ST.pendingTrivia!==null){const ch=ST.pendingTrivia;ST.pendingTrivia=null;openBriefing(ch,()=>openTrivia(ch));return;}
  if(ST.idx<DIALOGS.length-1){ST.idx++;showD(DIALOGS[ST.idx]);}
}

// ══════════════════════════════════════
// EJERCICIOS INTERACTIVOS
// ══════════════════════════════════════
const INFL={2000:8.96,2001:4.40,2002:5.70,2003:3.98,2004:5.19,2005:3.33,2006:4.05,
  2007:3.76,2008:6.53,2009:3.57,2010:4.40,2011:3.82,2012:3.57,2013:3.97,
  2014:4.08,2015:2.13,2016:3.36,2017:6.77,2018:4.83,2019:2.83,2020:3.15,
  2021:7.36,2022:8.70,2023:4.66};
const BTC_HIST={2009:1,2010:900,2011:4500,2012:900,2013:18000,2014:10000,2015:4000,
  2016:8500,2017:280000,2018:80000,2019:50000,2020:200000,2021:900000,2022:560000,2023:580000};

let _exNextIdx=null,_exType=null;
function openEx(type,nextIdx){
  _exNextIdx=nextIdx;_exType=type;
  const ov=document.getElementById('exOverlay');ov.classList.add('on');
  const body=document.getElementById('exBody');
  const nm=localStorage.getItem('curso_rpgname')||'Mijo';
  if(type==='inflacion'){
    document.getElementById('exTitle').textContent='CALCULADORA DE INFLACIÓN';
    body.innerHTML=`
      <div class="ex-section red">
        <div class="ex-lbl">💸 EL PESO VS EL TIEMPO</div>
        <div class="ex-row">
          <span style="font-size:16px;color:var(--text-muted);font-family:var(--vt)">¿Cuánto tienes?</span>
          <input class="ex-inp" id="infM" type="number" value="1500" min="1" max="1000000" oninput="calcInfl()"/>
          <span class="ex-unit">pesos MXN</span>
        </div>
        <div class="ex-row">
          <span style="font-size:16px;color:var(--text-muted);font-family:var(--vt)">¿Desde qué año?</span>
          <input class="ex-slider" id="infY" type="range" min="2000" max="2023" value="2015" oninput="document.getElementById('infYL').textContent=this.value;calcInfl()"/>
          <span class="ex-slider-val" id="infYL">2015</span>
        </div>
      </div>
      <div class="ex-vs">
        <div class="ex-card">
          <div class="ex-lbl">🏦 GUARDADO EN PESOS</div>
          <div class="ex-val bad" id="infPeso">$1,500</div>
          <div class="ex-sub" id="infPesoSub">poder adquisitivo hoy</div>
        </div>
        <div class="ex-card">
          <div class="ex-lbl">₿ COMPRADO EN BITCOIN</div>
          <div class="ex-val good" id="infBtc">calculando...</div>
          <div class="ex-sub">si lo hubieras invertido</div>
        </div>
      </div>
      <div class="ex-note" id="infNote">Mueve el slider para ver cómo pierde valor el peso</div>
      <button class="btn-done" onclick="doneEx()" style="margin-top:18px;width:100%;">ENTENDIDO, SIGUIENTE ▶</button>`;
    calcInfl();
  }
  else if(type==='sats'){
    document.getElementById('exTitle').textContent='CALCULADORA DE SATS';
    const p=window._btcMXN||1800000;
    body.innerHTML=`
      <div class="ex-section">
        <div class="ex-lbl">₿ CUÁNTOS SATS PUEDES TENER, ${nm.toUpperCase()}</div>
        <div class="ex-row">
          <span style="font-size:16px;color:var(--text-muted);">¿Cuánto pesos tienes?</span>
          <input class="ex-inp" id="satM" type="number" value="1500" min="1" max="1000000" oninput="calcSats()"/>
          <span class="ex-unit">pesos MXN</span>
        </div>
      </div>
      <div class="ex-vs">
        <div class="ex-card">
          <div class="ex-lbl">⚡ SATS QUE OBTIENES</div>
          <div class="ex-val good" id="satRes">—</div>
        </div>
        <div class="ex-card">
          <div class="ex-lbl">₿ FRACCIÓN DE BTC</div>
          <div class="ex-val" style="color:var(--gold)" id="satBtc">—</div>
        </div>
      </div>
      <div class="ex-note">BTC/MXN en vivo: <span id="satPrice">${p.toLocaleString('es-MX',{maximumFractionDigits:0})}</span></div>
      <button class="btn-done" onclick="doneEx()" style="margin-top:18px;width:100%;">ENTENDIDO, SIGUIENTE ▶</button>`;
    calcSats();
  }
  else if(type==='remesa'){
    document.getElementById('exTitle').textContent='SIMULADOR DE REMESAS';
    body.innerHTML=`
      <div class="ex-section red">
        <div class="ex-lbl">💸 COMO DON MEMO — MANDANDO DINERO A CASA</div>
        <div class="ex-row">
          <span style="font-size:16px;color:var(--text-muted);">¿Cuánto envías?</span>
          <input class="ex-inp" id="remM" type="number" value="500" min="1" max="50000" oninput="calcRem()"/>
          <span class="ex-unit">USD</span>
        </div>
      </div>
      <div class="ex-vs">
        <div class="ex-card">
          <div class="ex-lbl">🏦 WESTERN UNION</div>
          <div class="ex-val bad" id="remWU">—</div>
          <div class="ex-sub bad" id="remWUcom" style="color:var(--red)">—</div>
          <div class="ex-sub" style="color:var(--text-dim)">~3 días hábiles</div>
        </div>
        <div class="ex-card">
          <div class="ex-lbl">⚡ LIGHTNING NETWORK</div>
          <div class="ex-val good" id="remLN">—</div>
          <div class="ex-sub" style="color:var(--green)">comisión ~$0.001 USD</div>
          <div class="ex-sub" style="color:var(--text-dim)">&lt; 2 segundos</div>
        </div>
      </div>
      <div class="ex-note" id="remNote">Don Memo perdió $21,600 USD en 20 años de comisiones</div>
      <button class="btn-done" onclick="doneEx()" style="margin-top:18px;width:100%;">ENTENDIDO, SIGUIENTE ▶</button>`;
    calcRem();
  }
}
function calcInfl(){
  const m=parseFloat(document.getElementById('infM')?.value)||1500;
  const y=parseInt(document.getElementById('infY')?.value)||2015;
  let acum=1;for(let yr=y;yr<=2023;yr++){acum*=(1+(INFL[yr]||4)/100);}
  const perdida=Math.round(m/acum);
  const btcPrecAnt=BTC_HIST[y]||10000;
  const btcComp=m/btcPrecAnt;
  const btcVal=Math.round(btcComp*(window._btcMXN||1800000));
  document.getElementById('infPeso').textContent='$'+perdida.toLocaleString('es-MX')+' hoy';
  document.getElementById('infPesoSub').textContent='perdiste '+(Math.round((1-perdida/m)*100))+'% de poder adquisitivo';
  document.getElementById('infBtc').textContent='$'+btcVal.toLocaleString('es-MX');
  document.getElementById('infNote').textContent='$'+m.toLocaleString('es-MX')+' pesos de '+y+' = $'+perdida.toLocaleString('es-MX')+' de poder de compra hoy (inflación acum. '+Math.round((acum-1)*100)+'%)';
}
function calcSats(){
  const m=parseFloat(document.getElementById('satM')?.value)||1500;
  const p=window._btcMXN||1800000;
  const sats=Math.round((m/p)*1e8);
  const frac=(m/p);
  const sr=document.getElementById('satRes');if(sr)sr.textContent=sats.toLocaleString('es-MX')+' sats';
  const sb=document.getElementById('satBtc');if(sb)sb.textContent=frac.toFixed(8)+' BTC';
  const sp=document.getElementById('satPrice');if(sp)sp.textContent=p.toLocaleString('es-MX',{maximumFractionDigits:0});
}
function calcRem(){
  const m=parseFloat(document.getElementById('remM')?.value)||500;
  const com=m*0.085;
  const llega=m-com;
  document.getElementById('remWU').textContent='$'+llega.toFixed(2)+' USD';
  document.getElementById('remWUcom').textContent='pierdes $'+com.toFixed(2)+' USD (8.5%)';
  document.getElementById('remLN').textContent='$'+m.toFixed(2)+' USD';
  document.getElementById('remNote').textContent='En 20 años: '+Math.round(500*24*0.085*12/1000)+'K USD perdidos en comisiones vs $'+Math.round(500*24*0.00001)+' USD con Lightning';
}
function refreshExInputs(){if(_exType==='sats')calcSats();else if(_exType==='inflacion')calcInfl();}
function doneEx(){
  document.getElementById('exOverlay').classList.remove('on');
  if(_exNextIdx!==null){ST.idx=_exNextIdx;showD(DIALOGS[ST.idx]);_exNextIdx=null;_exType=null;}
}

// ══════════════════════════════════════
// TRIVIA RÁPIDA
// ══════════════════════════════════════
const TRIVIA={
  0:[{q:'¿Qué pierde el dinero con la inflación?',opts:['Tamaño físico','Poder adquisitivo','Color','Peso'],ans:1},
     {q:'¿En cuántos sats se divide 1 Bitcoin?',opts:['1,000','100,000','1,000,000','100,000,000'],ans:3}],
  1:[{q:'¿Qué cobra Western Union por enviar remesas?',opts:['Nada','~8-9%','~1%','~50%'],ans:1},
     {q:'¿Quién publicó el whitepaper de Bitcoin en 2008?',opts:['Elon Musk','El gobierno de EE.UU.','Satoshi Nakamoto','Warren Buffet'],ans:2}],
  2:[{q:'¿Cuántos Bitcoin existirán como máximo?',opts:['100 millones','21 millones','1 billón','Sin límite'],ans:1},
     {q:'¿Qué es el halving?',opts:['La inflación de Bitcoin','Reducción a la mitad de la recompensa minera cada 4 años','Un tipo de wallet','El precio de Bitcoin'],ans:1}],
  3:[{q:'¿Qué guarda el blockchain de Bitcoin?',opts:['Contraseñas','Fotos','Registro inmutable de transacciones','Datos personales'],ans:2},
     {q:'¿Cuántos nodos mantienen el blockchain de Bitcoin?',opts:['10','100','~17,000+','Solo 3'],ans:2}],
  4:[{q:'¿Qué guarda una wallet de Bitcoin?',opts:['Los bitcoins directamente','Las llaves privadas que prueban tu propiedad','Tu cuenta bancaria','Tu CURP'],ans:1},
     {q:'¿Cuánto tarda un pago con Lightning Network?',opts:['3 días','10 minutos','Menos de 1 segundo','1 hora'],ans:2}],
  5:[{q:'¿Qué significa "not your keys, not your coins"?',opts:['Que debes guardar llaves físicas','Sin controlar tus llaves, no controlas tus bitcoins','Que Bitcoin es caro','Nada importante'],ans:1}]
};

let _trivCh=0,_trivIdx=0,_trivScore=0,_trivAns=false;

function openBriefing(ch, afterFn){
  const b=BRIEFING_DATA[ch];
  if(!b){afterFn();return;}
  window._briefingAfter=afterFn;
  renderBriefingCard(ch,0);
}

function renderBriefingCard(ch,idx){
  const b=BRIEFING_DATA[ch];
  const card=b.cards[idx];
  const total=b.cards.length;
  const isLast=(idx>=total-1);
  const ov=document.getElementById('briefingOverlay');
  ov.style.display='block';

  const dots=b.cards.map((_,i)=>`<div style="width:10px;height:10px;background:${i<=idx?'var(--btc)':'var(--surface)'};border:2px solid ${i<=idx?'var(--btc)':'var(--border)'};" ></div>`).join('');
  const pct=Math.round(((idx+1)/total)*100);

  ov.innerHTML=`
  <div style="display:flex;align-items:center;justify-content:center;min-height:100%;padding:20px;box-sizing:border-box;background:var(--darker);">
    <div style="width:100%;max-width:560px;background:var(--surface);border:3px solid var(--btc);box-shadow:0 0 0 1px var(--darker),6px 6px 0 var(--darker);">

      <!-- HEADER -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:2px solid var(--border);background:var(--surface2);">
        <div style="display:flex;flex-direction:column;gap:5px;">
          <span style="font-family:'Press Start 2P',monospace;font-size:7px;color:var(--btc);letter-spacing:1px;">📖 LECTURA PREVIA</span>
          <span style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--text);">${b.title}</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
          <span style="font-family:'Press Start 2P',monospace;font-size:6px;color:var(--text-dim);">FICHA ${idx+1} / ${total}</span>
          <div style="display:flex;gap:4px;">${dots}</div>
        </div>
      </div>

      <!-- BARRA PROGRESO -->
      <div style="height:4px;background:var(--surface2);"><div style="height:100%;width:${pct}%;background:var(--btc);transition:width .3s;"></div></div>

      <!-- CUERPO -->
      <div style="padding:22px 22px 18px;display:flex;flex-direction:column;gap:18px;">

        <!-- Hint del speaker — estilo exam-hint -->
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--darker);border-left:3px solid var(--btc);padding:12px 16px;">
          <canvas id="bfSprite" width="36" height="46" style="flex-shrink:0;image-rendering:pixelated;"></canvas>
          <div style="display:flex;flex-direction:column;gap:5px;padding-top:2px;">
            <span style="font-family:'Press Start 2P',monospace;font-size:6px;color:var(--btc);">${b.speaker}:</span>
            <span style="font-family:'VT323',monospace;font-size:19px;color:var(--text-muted);line-height:1.4;font-style:italic;">"${card.label}"</span>
          </div>
        </div>

        <!-- Badge icono + título -->
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:26px;line-height:1;">${card.icon}</span>
          <span style="font-family:'Press Start 2P',monospace;font-size:8px;color:var(--text);line-height:1.7;">${card.label}</span>
        </div>

        <!-- Texto ficha — VT323 como respuestas del examen -->
        <div style="font-family:'VT323',monospace;font-size:21px;color:var(--text);line-height:1.6;background:var(--surface2);border:1px solid var(--border);padding:16px 18px;">
          ${card.text}
        </div>

      </div>

      <!-- BOTÓN -->
      <div style="padding:0 22px 22px;">
        <button id="bfBtn"
          style="font-family:'Press Start 2P',monospace;font-size:9px;background:${isLast?'#16A085':'var(--btc)'};color:${isLast?'#fff':'#000'};border:none;padding:16px 20px;cursor:pointer;box-shadow:4px 4px 0 #000;width:100%;letter-spacing:1px;"
          onmousedown="this.style.transform='translate(2px,2px)';this.style.boxShadow='2px 2px 0 #000'"
          onmouseup="this.style.transform='';this.style.boxShadow='4px 4px 0 #000'">
          ${isLast?'LISTO — AL QUIZ ▶':'SIGUIENTE FICHA ▶'}
        </button>
      </div>

    </div>
  </div>`;

  // Sprite de Don Memo/Mateo
  setTimeout(()=>{
    const c=document.getElementById('bfSprite');
    if(!c)return;
    const ctx=c.getContext('2d');
    const p=(x,y,w,h,col)=>{ctx.fillStyle=col;ctx.fillRect(x,y,w,h);};
    const s=2;
    p(4*s,0,5*s,s,'#F7931A');
    p(3*s,s,7*s,4*s,'#F3CBA8');
    p(3*s,s,s,2*s,'#5C3317');p(9*s,s,s,2*s,'#5C3317');
    p(4*s,3*s,s,s,'#2C1810');p(8*s,3*s,s,s,'#2C1810');
    p(4*s,5*s,5*s,s,'#8B5E3C');
    p(2*s,6*s,9*s,5*s,'#4A3728');
    p(0,7*s,2*s,3*s,'#F3CBA8');p(11*s,7*s,2*s,3*s,'#F3CBA8');
    p(3*s,11*s,3*s,3*s,'#2C1810');p(7*s,11*s,3*s,3*s,'#2C1810');
  },30);

  // Click botón
  setTimeout(()=>{
    const btn=document.getElementById('bfBtn');
    if(!btn)return;
    btn.onclick=()=>{
      if(isLast){
        document.getElementById('briefingOverlay').style.display='none';
        if(window._briefingAfter)window._briefingAfter();
      } else {
        ov.style.opacity='0';
        ov.style.transition='opacity .15s';
        setTimeout(()=>{ov.style.opacity='1';renderBriefingCard(ch,idx+1);},150);
      }
    };
  },30);
}

function openTrivia(ch){
  _trivCh=ch;_trivIdx=0;_trivScore=0;_trivAns=false;
  document.getElementById('triviaOverlay').style.display='block';
  renderTriviaQ();
}

function renderTriviaQ(){
  const qs=TRIVIA[_trivCh]||[];
  if(_trivIdx>=qs.length){renderTriviaEnd();return;}
  const q=qs[_trivIdx];
  _trivAns=false;
  const ov=document.getElementById('triviaOverlay');
  ov.innerHTML='';
  const wrap=document.createElement('div');
  wrap.style.cssText='min-height:100%;display:flex;align-items:center;justify-content:center;padding:24px;';
  const box=document.createElement('div');
  box.style.cssText='width:100%;max-width:500px;display:flex;flex-direction:column;align-items:center;gap:16px;';
  const hd=document.createElement('div');
  hd.style.cssText="font-family:'Press Start 2P',monospace;font-size:8px;color:#F7931A;text-align:center;";
  hd.textContent='TRIVIA — ANTES DEL EXAMEN';
  box.appendChild(hd);
  const prog=document.createElement('div');
  prog.style.cssText="font-family:'Press Start 2P',monospace;font-size:6px;color:var(--text-dim);text-align:center;";
  prog.textContent='Pregunta '+(_trivIdx+1)+' de '+qs.length;
  box.appendChild(prog);
  const qEl=document.createElement('div');
  qEl.style.cssText="font-family:'VT323',monospace;font-size:26px;color:var(--text);text-align:center;line-height:1.4;width:100%;";
  qEl.textContent=q.q;
  box.appendChild(qEl);
  const fb=document.createElement('div');
  fb.style.cssText="font-family:'VT323',monospace;font-size:22px;text-align:center;padding:4px 0;min-height:28px;";
  box.appendChild(fb);
  const grid=document.createElement('div');
  grid.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;';
  const letras=['A','B','C','D'];
  q.opts.forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.style.cssText="font-family:'Press Start 2P',monospace;font-size:7px;background:var(--dark);border:3px solid var(--border);color:var(--text-muted);padding:12px 10px;cursor:pointer;text-align:left;line-height:1.6;width:100%;";
    btn.innerHTML='<b style="color:#F7931A">'+letras[i]+')</b> '+opt;
    btn.onclick=()=>{
      if(_trivAns)return;
      _trivAns=true;
      const correct=(i===q.ans);
      if(correct)_trivScore++;
      grid.querySelectorAll('button').forEach((b,idx)=>{
        if(idx===q.ans)b.style.cssText=b.style.cssText+'border-color:#16A085;color:#16A085;background:rgba(22,160,133,.2);';
        else if(idx===i&&!correct)b.style.cssText=b.style.cssText+'border-color:#C0392B;color:#C0392B;background:rgba(192,57,43,.2);';
      });
      fb.textContent=correct?'CORRECTO — +1 punto':'INCORRECTO — era '+letras[q.ans];
      fb.style.color=correct?'#16A085':'#C0392B';
      nextWrap.style.display='block';
    };
    grid.appendChild(btn);
  });
  box.appendChild(grid);
  const nextWrap=document.createElement('div');
  nextWrap.style.cssText='display:none;width:100%;margin-top:8px;';
  const isLast=(_trivIdx+1>=qs.length);
  const nextBtn=document.createElement('button');
  nextBtn.style.cssText="font-family:'Press Start 2P',monospace;font-size:8px;background:"+(isLast?'#16A085':'#F7931A')+";color:"+(isLast?'#fff':'#000')+";border:none;padding:14px 24px;cursor:pointer;box-shadow:3px 3px 0 #000;width:100%;";
  nextBtn.textContent=isLast?'IR AL EXAMEN ▶':'SIGUIENTE ▶';
  nextBtn.onclick=()=>{if(isLast){doneTrivia();}else{_trivIdx++;renderTriviaQ();}};
  nextWrap.appendChild(nextBtn);
  box.appendChild(nextWrap);
  wrap.appendChild(box);
  ov.appendChild(wrap);
}

function renderTriviaEnd(){
  const qs=TRIVIA[_trivCh]||[];
  const ov=document.getElementById('triviaOverlay');
  ov.innerHTML='<div style="min-height:100%;display:flex;align-items:center;justify-content:center;padding:24px;"><div style="text-align:center;max-width:400px;">'
    +'<div style="font-family:\'Press Start 2P\',monospace;font-size:10px;color:#F7931A;margin-bottom:20px;">TRIVIA COMPLETA</div>'
    +'<div style="font-family:\'VT323\',monospace;font-size:28px;color:var(--text);margin-bottom:20px;">'+_trivScore+' / '+qs.length+' correctas</div>'
    +'<button onclick="doneTrivia()" style="font-family:\'Press Start 2P\',monospace;font-size:8px;background:#16A085;color:var(--text);border:none;padding:14px 28px;cursor:pointer;box-shadow:3px 3px 0 #000;width:100%;">IR AL EXAMEN ▶</button>'
    +'</div></div>';
}

function doneTrivia(){
  document.getElementById('triviaOverlay').style.display='none';
  openExam(_trivCh);
}

// ══════════════════════════════════════
// AUDIO
// ══════════════════════════════════════
const AUDIO_SCENES={
  0:'https://cdn.pixabay.com/audio/2024/01/16/audio_a80a56d0cf.mp3',
  1:'https://cdn.pixabay.com/audio/2023/10/02/audio_b9eb58c21b.mp3',
  2:'https://cdn.pixabay.com/audio/2024/03/11/audio_27a9e6a21e.mp3',
  3:'https://cdn.pixabay.com/audio/2023/11/13/audio_347d22f4a8.mp3',
  4:'https://cdn.pixabay.com/audio/2024/02/15/audio_a10b4e6c12.mp3',
  5:'https://cdn.pixabay.com/audio/2023/09/25/audio_c6e8f3a1b5.mp3',
  6:'https://cdn.pixabay.com/audio/2024/01/16/audio_a80a56d0cf.mp3'
};
let _muted=false,_vol=0.7,_currentScene=-1;

function toggleAudioPanel(){
  const p=document.getElementById('audioPanel');
  p.classList.toggle('on');
  document.getElementById('audioBtn').classList.toggle('active');
  if(p.classList.contains('on')){
    setTimeout(()=>document.addEventListener('click',closeAudioPanel,{once:true}),100);
  }
}
function closeAudioPanel(e){
  const p=document.getElementById('audioPanel');
  if(!p.contains(e.target)&&e.target.id!=='audioBtn')p.classList.remove('on');
}
function setVolume(v){
  _vol=v/100;
  const a=document.getElementById('bgAudio');
  if(a)a.volume=_muted?0:_vol;
  document.getElementById('volVal').textContent=v;
}
function toggleMute(){
  _muted=!_muted;
  const a=document.getElementById('bgAudio');
  if(a)a.volume=_muted?0:_vol;
  const btn=document.getElementById('muteBtn');
  btn.classList.toggle('on',_muted);
  btn.textContent=_muted?'🔇 SILENCIADO':'🔇 SILENCIAR';
  document.getElementById('audioBtn').textContent=_muted?'--':'VOL';
}
function playSceneAudio(scene){
  if(scene===_currentScene)return;
  _currentScene=scene;
  const src=AUDIO_SCENES[scene]||'';
  const a=document.getElementById('bgAudio');
  if(!a)return;
  const lbl=['Intro','Módulo 1','Módulo 2','Módulo 3','Módulo 4','Conclusión'];
  document.getElementById('auCurrent').textContent=src?lbl[scene]||'—':'Sin pista ('+lbl[scene]+')';
  if(!src){a.pause();return;}
  a.src=src;a.volume=_muted?0:_vol;
  a.play().catch(()=>{});
}

// ══════════════════════════════════════
// TUTORIAL CARRUSEL
// ══════════════════════════════════════
let _tutSlide=0;
function goTutSlide(n){
  document.getElementById('tslide-'+_tutSlide).style.display='none';
  document.getElementById('tdot-'+_tutSlide).style.background='#333';
  _tutSlide=n;
  document.getElementById('tslide-'+_tutSlide).style.display='block';
  document.getElementById('tdot-'+_tutSlide).style.background='var(--btc)';
  const prev=document.getElementById('tutPrevBtn');
  const next=document.getElementById('tutNextBtn');
  prev.style.visibility=_tutSlide===0?'hidden':'visible';
  if(_tutSlide===3){
    next.textContent='ENTENDIDO — COMENZAR ▶';
    next.style.background='var(--green)';
    next.style.color='#fff';
  } else {
    next.textContent='SIGUIENTE ▶';
    next.style.background='var(--btc)';
    next.style.color='#000';
  }
}
function tutNav(dir){
  const next=_tutSlide+dir;
  if(next>3){closeTutorial();return;}
  if(next<0)return;
  goTutSlide(next);
}

// ══════════════════════════════════════
// GRADUACIÓN
// ══════════════════════════════════════
function checkGraduation(d){
  if(d.ch===6&&DIALOGS.indexOf(d)===DIALOGS.length-1){
    setTimeout(()=>{
      document.getElementById('gradScreen').style.display='block';
      const n=localStorage.getItem('curso_rpgname')||'';
      if(n){
        document.getElementById('certName').value=n;
      }
    },1800);
  }
}

function downloadCert(){
  const name=(document.getElementById('certName').value||'').trim()||'Estudiante';
  const canvas=document.getElementById('certCanvas');
  const ctx=canvas.getContext('2d');
  const W=900,H=636;
  ctx.fillStyle='#05050F';ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='#F7931A';ctx.lineWidth=6;ctx.strokeRect(10,10,W-20,H-20);
  ctx.strokeStyle='#D4A017';ctx.lineWidth=2;ctx.strokeRect(18,18,W-36,H-36);
  [
    [18,18,1,1],[W-34,18,-1,1],[18,H-34,1,-1],[W-34,H-34,-1,-1]
  ].forEach(([x,y,sx,sy])=>{
    ctx.fillStyle='#F7931A';
    ctx.fillRect(x,y,sx*20,4);ctx.fillRect(x,y,4,sy*20);
    ctx.fillRect(x+sx*8,y+sy*8,sx*8,4);ctx.fillRect(x+sx*8,y+sy*8,4,sy*8);
  });
  ctx.fillStyle='#F7931A';ctx.font='bold 52px monospace';ctx.textAlign='center';ctx.fillText('₿',W/2,88);
  ctx.fillStyle='#F7931A';ctx.font='bold 13px "Courier New",monospace';ctx.textAlign='center';
  ctx.fillText('UINIK TEAM — CERTIFICADO DE CONCLUSIÓN',W/2,130);
  ctx.strokeStyle='#F7931A';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(60,145);ctx.lineTo(W-60,145);ctx.stroke();
  ctx.fillStyle='#aaaaaa';ctx.font='11px "Courier New",monospace';ctx.fillText('Este documento certifica que',W/2,175);
  ctx.fillStyle='#ffffff';ctx.font='bold 32px "Courier New",monospace';
  let fontSize=32;
  while(ctx.measureText(name).width>700&&fontSize>16){fontSize-=2;ctx.font=`bold ${fontSize}px "Courier New",monospace`;}
  ctx.fillText(name,W/2,228);
  const nw=Math.min(ctx.measureText(name).width+60,600);
  ctx.strokeStyle='#D4A017';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(W/2-nw/2,240);ctx.lineTo(W/2+nw/2,240);ctx.stroke();
  ctx.fillStyle='#aaaaaa';ctx.font='11px "Courier New",monospace';ctx.fillText('ha completado satisfactoriamente el curso',W/2,270);
  ctx.fillStyle='#ffffff';ctx.font='bold 16px "Courier New",monospace';ctx.fillText('DON MEMO Y LOS SATS',W/2,298);
  ctx.fillStyle='#F7931A';ctx.font='11px "Courier New",monospace';ctx.fillText('Conocimientos Principales de Bitcoin',W/2,320);
  ctx.strokeStyle='var(--dark)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(60,340);ctx.lineTo(W-60,340);ctx.stroke();
  ctx.fillStyle='#444444';ctx.font='9px "Courier New",monospace';
  ['Este certificado no está avalado por ninguna institución pública','ni por los organizadores del hackathon. att: Uinik Team'].forEach((line,i)=>ctx.fillText(line,W/2,368+i*16));
  ctx.fillStyle='#16A085';ctx.font='bold 10px "Courier New",monospace';ctx.fillText('MÓDULOS COMPLETADOS',W/2,428);
  const mods=['INTRO','MÓD.1','MÓD.2','MÓD.3','MÓD.4','CONCLUSIÓN'];
  const mw=120,gap=8,totalW=mods.length*(mw+gap)-gap;
  const startX=(W-totalW)/2;
  mods.forEach((m,i)=>{
    const bx=startX+i*(mw+gap);
    ctx.fillStyle='#0D1A0D';ctx.fillRect(bx,438,mw,26);
    ctx.strokeStyle='#16A085';ctx.lineWidth=1;ctx.strokeRect(bx,438,mw,26);
    ctx.fillStyle='#16A085';ctx.font='7px "Courier New",monospace';ctx.textAlign='center';ctx.fillText(m,bx+mw/2,455);
  });
  const today=new Date();
  const dateStr=today.toLocaleDateString('es-MX',{year:'numeric',month:'long',day:'numeric'});
  ctx.textAlign='left';ctx.fillStyle='#555';ctx.font='9px "Courier New",monospace';ctx.fillText('Fecha: '+dateStr,60,510);
  ctx.textAlign='right';ctx.fillStyle='#F7931A';ctx.font='bold 10px "Courier New",monospace';ctx.fillText('UINIK TEAM',W-60,510);
  ctx.fillStyle='#555';ctx.font='8px "Courier New",monospace';ctx.fillText('uinik.btc',W-60,524);
  ctx.strokeStyle='#333';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(W-200,530);ctx.lineTo(W-60,530);ctx.stroke();
  ctx.textAlign='center';ctx.fillStyle='#222';ctx.font='8px "Courier New",monospace';
  ctx.fillText('Generado en: Don Memo y los Sats — Curso de Bitcoin para jóvenes de México',W/2,608);
  const link=document.createElement('a');
  link.download='certificado-bitcoin-'+name.replace(/\s+/g,'-').toLowerCase()+'.png';
  link.href=canvas.toDataURL('image/png');link.click();
}

// ══════════════════════════════════════
// THEME TOGGLE
// ══════════════════════════════════════
function toggleTheme(){
  const html=document.documentElement;
  const isLight=html.classList.toggle('light');
  localStorage.setItem('uinik-theme',isLight?'light':'dark');
  const btn=document.getElementById('themeToggle');
  if(btn)btn.textContent=isLight?'🌑 MODO':'🌙 MODO';
}
function applyThemeUI(){
  const isLight=document.documentElement.classList.contains('light');
  const btn=document.getElementById('themeToggle');
  if(btn)btn.textContent=isLight?'🌑 MODO':'🌙 MODO';
}
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',e=>{
  if(!localStorage.getItem('uinik-theme')){
    const nowLight=!e.matches;
    const html=document.documentElement;
    nowLight?html.classList.add('light'):html.classList.remove('light');
    applyThemeUI();
  }
});