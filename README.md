# Don Memo y los Sats

Un curso interactivo de educacion financiera y Bitcoin para jovenes de Mexico, desarrollado como experiencia RPG en el navegador.

---

## Sobre el proyecto

Don Memo y los Sats es una aplicacion web educativa pensada para jovenes de 13 a 17 anos en Mexico. A traves de una narrativa en formato de videojuego de rol, el estudiante acompana a Mateo y a su abuelo Don Memo en conversaciones sobre el dinero, la inflacion, los intermediarios financieros y Bitcoin.

El proyecto nace de una pregunta concreta: como ensenarle a alguien que nunca ha tenido cuenta bancaria por que Bitcoin existe y para que sirve, sin sonar a curso universitario ni a publicidad de exchange.

La respuesta fue una historia. Don Memo mando remesas por veinte anos sin entender cuanto se perdia en el camino. Mateo tiene dieciseis anos y un telefono. La conversacion ocurre en un parque de Merida, Yucatan.

---

## Contenido del curso

El curso cubre cinco modulos y una conclusion, con 65 dialogos en total:

**Introduccion: El dinero**
Por que el peso vale menos cada ano. Que es la inflacion y como funciona en silencio. Por que millones de adultos en Mexico operan fuera del sistema bancario y no es cuestion de ignorancia.

**Modulo 1: Por que existe Bitcoin**
El costo real de las remesas. Lo que paso en 2008 y por que ese contexto importa. Como funciona la inflacion como impuesto invisible. Quien es Satoshi Nakamoto y por que nunca sabremos la respuesta.

**Modulo 2: Lo que hace especial a Bitcoin**
El limite de 21 millones y la matematica que lo garantiza. Los satoshis y la accesibilidad real. Que es la descentralizacion en la practica. El halving y como funciona la emision programada.

**Modulo 3: Como funciona Bitcoin**
El blockchain explicado con la metafora del cuaderno copiado. Proof of Work y por que el trabajo computacional real importa. Por que atacar Bitcoin es economicamente irracional. Los nodos como vigilantes del protocolo.

**Modulo 4: Como usar Bitcoin en Mexico**
Llaves privadas y lo que significa realmente poseer bitcoin. La diferencia entre custodia propia y custodia delegada. Lightning Network y los pagos instantaneos. El ecosistema Bitcoin en Mexico: regulacion, wallets, exchanges, comunidad.

**Conclusion y Bonus**
Don Memo nunca vio su hamaqueria. Mateo si la construyo. El estudiante recibe un certificado descargable y la opcion de continuar al curso avanzado.

---

## Mecanicas del juego

**Dialogos con eleccion.** Cada cierto numero de dialogos el estudiante elige entre tres opciones de respuesta. Todas llevan al mismo siguiente dialogo, pero las opciones estan disenadas para que el estudiante se identifique con una postura: curiosidad, escepticismo o contexto propio. La eleccion no penaliza ni premia: sirve para que el estudiante procese activamente lo que acaba de escuchar.

**Tarjetas de datos.** Cuando un personaje menciona un dato verificable, aparece una tarjeta en el panel izquierdo con graficas, cifras y fuente. Las tarjetas se acumulan durante la sesion y pueden consultarse en cualquier momento.

**Ejercicios interactivos.** Dos ejercicios calculan en tiempo real: cuanto perdio Don Memo en comisiones de Western Union en veinte anos, y cuanto poder adquisitivo pierde un billete guardado bajo el colchon.

**Briefing pre-examen.** Antes de cada examen aparece una secuencia de fichas de lectura educativa. El contenido amplia el contexto conceptual de la historia sin revelar las respuestas del examen. Funciona como un articulo de divulgacion sobre el tema del modulo.

**Trivia rapida.** Dos preguntas de calentamiento antes del examen formal.

**Examen por modulo.** Entre tres y cinco preguntas con tres vidas. Las opciones incorrectas son plausibles y estan disenadas para confundir a quien memorizo sin entender. Las respuestas correctas se distribuyen aleatoriamente en cada intento.

**Glosario.** 18 terminos clave con definicion, consultables en cualquier momento con busqueda por texto.

**Logros.** Seis insignias desbloqueables, una por modulo completado.

**Certificado.** Al completar el curso el estudiante puede escribir su nombre y descargar un certificado en formato imagen.

---

## Arquitectura tecnica

El proyecto es una aplicacion de una sola pagina sin dependencias de framework ni build tools. Funciona abriendo `curso.html` en cualquier navegador moderno.

```
/
  curso.html          -- HTML principal
  curso/
    js/
      curso.js        -- Toda la logica del curso (~1,600 lineas)
    css/
      curso.css       -- Estilos del curso
    img/
      1.png ... 64.png  -- Escenas pixel art (13 y 14 son .jpg)
```

### Persistencia

Todo el estado del usuario se guarda en `localStorage` bajo las siguientes claves:

| Clave | Contenido |
|---|---|
| `uinik-theme` | Tema claro u oscuro |
| `curso_tut_done` | Si el usuario ya vio el tutorial |
| `curso_rpgname` | Nombre del personaje (fijo: MATEO) |
| `curso_idx` | Indice del dialogo actual |
| `curso_examDone` | Objeto con examenes completados por capitulo |
| `curso_dmn` | Array de notas guardadas por el usuario |

### Datos en tiempo real

El precio de Bitcoin se obtiene de Binance y el tipo de cambio USD/MXN de Frankfurter. Ambos se muestran en el ticker del navbar y en los ejercicios interactivos. Si Binance falla, hay fallback a CoinGecko.

### Audio

Musica lofi distinta por modulo, obtenida de Pixabay bajo licencia CC0. El audio se desbloquea en el primer clic del usuario para cumplir con las politicas del navegador.

### Paleta de colores

El diseno usa una paleta llamada Tobacco and Mahogany, definida en variables CSS:

```css
--btc: #F7931A
--dark: #260F08
--surface: #2E1810
--text: #F1EADA
--gold: #B59E7D
```

### Flujo de pantallas

```
Primera vez:
  UINIK STUDIOS --> Tutorial (4 slides) --> Curso

Regresa con progreso:
  Pantalla de regreso --> Continuar o reiniciar

Regresa sin progreso:
  UINIK STUDIOS --> Curso directo
```

---

## Estructura de datos principal

Los 65 dialogos se definen en el array `DIALOGS`. Cada entrada puede tener:

- `ch`: numero de capitulo (0-6)
- `sp`: nombre del personaje que habla
- `txt`: texto del dialogo
- `img`: imagen de escena correspondiente
- `data`: objeto con tarjeta de dato real (opcional)
- `choices`: array de tres opciones con texto y destino (opcional)
- `exercise`: objeto que activa un ejercicio interactivo (opcional)

El indice de inicio de cada capitulo se define en `CH_START = [0, 9, 23, 35, 46, 57, 62]`.

---

## Homepage

La pagina de inicio (`index.html`) sirve como landing page del proyecto. Su contenido:

---

**Don Memo y los Sats**
*Un curso de Bitcoin para jovenes de Mexico*
Merida, Yucatan · 2026

Un abuelo. Un nieto. Una conversacion que nadie les enseno en la escuela.

Don Memo paso veinte anos mandando remesas desde Chicago. Nunca entendio del todo por que, aunque trabajara mas, aca siempre alcanzaba para menos. Ahora sabe la respuesta. Y se la esta contando a Mateo.

**Que aprenderas:**

- Por que el dinero pierde valor y quien decide cuanto
- Como funciona el sistema financiero y por que excluye a millones
- Que es Bitcoin, por que existe y quien lo creo
- Como funciona tecnicamente sin necesitar saber programar
- Como usarlo en Mexico hoy: wallets, Lightning, regulacion, comunidad

**El formato:**

No es un video. No es un PDF. Es una historia con dialogos, ejercicios interactivos, examenes por modulo y un certificado al terminar. Dura aproximadamente 90 minutos.

**Para quien es:**

Jovenes de 13 a 17 anos en Mexico. No se requiere conocimiento previo de finanzas ni de tecnologia. Solo curiosidad.

**Iniciar el curso**

---

## Estado del proyecto

El curso basico esta completo y funcional. Pendientes documentados:

- Conectar la URL del curso avanzado en la pantalla de graduacion
- Conectar el logo en la pantalla de UINIK STUDIOS
- Crear la pagina del curso avanzado (`curso_avanzado.html`)
- Prueba end-to-end en dispositivos moviles

---

## Creditos

Desarrollado por el equipo Uinik como proyecto de educacion financiera para jovenes en Mexico.

Las imagenes de escena son pixel art original generado para el proyecto. La musica es CC0 de Pixabay. Los datos financieros provienen de Banxico, INEGI, CoinGecko y Binance.

El certificado de conclusion no esta avalado por ninguna institucion publica. Es un reconocimiento personal.

---

*Uinik Studios · Merida, Yucatan · 2026*