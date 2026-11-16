Bitácora / Portafolio

Link figma: https://www.figma.com/design/ObKZKYKrlAGHDHDiv9G2FQ/portafolio?node-id=4-5&t=LHoLE5P2Awa4Iusx-1
Sofíe Matus

Mi proyecto se trata de hacer mi portafolio web, con proyectos que he hecho durante la carrera y también incluyendo 
(aún no lo tengo bien claro) uno o dos fuera de la universidad.
En el portafolio fuera de proyectos, incluyo una breve descripción acerca de mí, de lo que he hecho y lo que me gusta hacer o llama la atención. La idea es hacerlo muy propio. 

Tipografías:
Logo - Pretty on the inside
Bajadas y subtítulos - BlinkMacSystemFont
Textos breves - Jrug Punk

REFERENCIAS PORTAFOLIO (posibilidades y el por qué)

https://sadti.xyz/

interactividad, jerarquías, la forma en que está dividido cada proyecto. tipografías.

https://gougoucore.com/

simple pero atractiva, vuelve a estar dividido por proyecto y te redirige hacia aquello.
tipografías y diagramación.

https://elimarigodesign.com/

tipo de interactividad, texturas, modo de redirigir.

https://thefolioarchivo.com/

tipografía, divisiones.

https://matthewvla.ch/

la manera en que está todo diagramado y cómo van apareciendo los trabajos cuando uno aprieta.
tipografía mono. diseño simplista. 

ACTUALIZADO: 
15 nov 2026
Pedí al agente que me pasara la página de figma a código html y css, pero no está ni un 50% parecida a la mía. Por lo tanto, ocuparé Claude. Otra cosa que me pasó es que quise cambiar el cursor inspirándome en la página: https://www.radelica.com/ y encontré esto <div id="radelica-custom-cursor" style="opacity: 0; transform: translate3d(836px, 51px, 0px) rotate(0deg);"></div> por lo tanto, quiero copiar lo mismo pero con un cursor distinto.

Intenté conectarme de figma a VS code con un figma MCP server pero tampoco se pudo.

# Consulta IA: crear el html/css/js
**Prompt usado:**
Agregué las tipografías como también imágenes, una grabación y una captura de pantalla de los componentes, es sólo el home, la primera página.
**Prompt usado anteriormente:**
Puedes pasar esta página a html, css y javascript. soy estudiante de diseño y quiero que me expliques, como también quiero agregar un cursor, dime si te tengo que mandar las imágenes o así está bien. 

**(esto lo había mandado antes pero no sirvió debido a que había mandado sólo el link de figma y no se pudo dar acceso)**

**Código después:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>sof.me | portafolio</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
<body>

  <!-- ENCABEZADO: logo + menú -->
  <header>
    <h1><a href="#">sof.me</a></h1>
    <nav aria-label="Principal">
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
      <a href="#sobre-mi">Sobre mí</a>
    </nav>
  </header>

  <main>
    <!-- Franja de flores (decorativa: alt vacío) -->
    <img src="img/flores.webp" alt="">

    <!-- Introducción: dibujos ASCII y texto inclinado -->
    <section id="sobre-mi" aria-label="Introducción">
      <!-- Dos dibujos hechos con caracteres braille. Cada <pre> guarda dos versiones (dos <span>):
           la estrella y la espiral. El CSS muestra una u otra según el mouse. Son decorativos: aria-hidden los oculta a lectores de pantalla -->
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>

      <p>
        <a href="https://open.spotify.com/playlist/3FNJq9FZgzpYKLD7PkDErb?si=bH_3JY9cQQWh3c8ct68zNw&amp;utm_source=copy-link&amp;pi=agOAfxNERdakf"
           target="_blank" rel="noopener">Escucha mientras ves el portafolio &lt;3</a>
      </p>
    </section>

    <!-- Proyectos: cada uno es un artículo con su figura -->
    <section id="proyectos">
      <h2>Proyectos</h2>

      <article>
        <figure>
          <img src="img/emu-ginger.webp" alt="Afiche amarillo y naranja con un puño y el texto ewu">
          <figcaption>Emu Ginger <span>Branding</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/between-ends.webp" alt="Celular mostrando el sitio del festival Between Ends">
          <figcaption>Between Ends <span>UX</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/familiario.webp" alt="Tablero del juego Familiario con instrucciones y figuras de familia">
          <figcaption>Familiario <span>Juego museo DDHH</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/portaencendedores.webp" alt="Portaencendedores de cuero amarillo y celeste con argollas">
          <figcaption>Portaencendedores <span>Marroquinería</span></figcaption>
        </figure>
      </article>
    </section>
  </main>

  <!-- PIE DE PÁGINA -->
  <footer id="contacto">
    <p><span>sof.me</span><span aria-hidden="true"></span><span>concepto visual</span></p>
    <!-- La franja que se desplaza: el JavaScript repite este texto muchas veces -->
    <a href="#contacto">hablemos :)</a>
  </footer>

  <!-- Cursor personalizado (espada) -->
  <img id="cursor" src="img/espada.png" alt="" aria-hidden="true">

</body>
</html>

```css
/* ==========================================================
   1. FUENTES
   @font-face le enseña al navegador dónde está cada tipografía.
   ========================================================== */
@font-face { font-family: "Blink";      src: url("../fonts/BlinkMacSystemFont.ttf"); }
@font-face { font-family: "JRUG";       src: url("../fonts/JRUG_PUNK.ttf"); }
@font-face { font-family: "Poti";       src: url("../fonts/poti.ttf"); }
@font-face { font-family: "Mieszkanie"; src: url("../fonts/mieszkanie9.otf"); }
/* Fuente pequeña solo con los caracteres braille de los dibujos (basada en DejaVu Sans) */
@font-face { font-family: "Braille";    src: url("../fonts/braille.ttf"); }

/* ==========================================================
   2. VARIABLES
   Cambias un valor aquí y se actualiza en toda la página.
   ========================================================== */
:root {
  /* #000000 al 50 % de opacidad: es el único color de toda la página */
  --color: rgb(0 0 0 / 50%);
  --color-suave: rgb(0 0 0 / 15%);   /* negro al 15 %: logo y estrella, como en tu Figma */
  --negro: #000;                     /* negro al 100 %: tipografía JRUG y franja "hablemos" */
  --fondo: #fff;

  --fuente-texto: "Blink", system-ui, sans-serif;     /* menú, subtítulos, "concepto visual" */
  --fuente-logo: "Poti", cursive;                     /* logo sof.me */
  --fuente-titulos: "JRUG", cursive;                  /* nombres de proyectos y texto inclinado */
  --fuente-hablemos: "Mieszkanie", cursive;           /* franja "hablemos :)" */
  --fuente-braille: "Blink", "Braille", monospace;    /* dibujos ASCII: Blink, y "Braille" para los puntos */
}

/* ==========================================================
   3. BASE (versión móvil primero)
   ========================================================== */
/* Al hacer clic en un enlace del menú (#proyectos, #contacto...), la página se desliza
   suavemente hasta ahí en vez de saltar. Solo si la persona no pidió "reducir movimiento". */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

body {
  margin: 0;
  background: var(--fondo);
  color: var(--color);
  font-family: var(--fuente-texto);
}

a {
  color: inherit;
  text-decoration: none;
}

/* Encabezado */
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 1rem;
}

h1 {
  margin: 0;
  font: 400 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

nav {
  display: flex;
  gap: 1.2rem;
  font-size: 0.8rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

nav a:hover {
  text-decoration: underline;   /* el subrayado que se ve en tu diseño */
}

/* Banner de flores: ocupa todo el ancho y se recorta con object-fit */
main > img {
  display: block;
  width: 100%;
  height: 20vw;
  object-fit: cover;
  opacity: 0.5;                 /* las flores se ven al 50 % */
}

/* Introducción: dibujos braille y texto inclinado */
#sobre-mi {
  position: relative;
  height: 100vw;
}

#sobre-mi pre {
  position: absolute;
  margin: 0;
  white-space: pre;             /* respeta los saltos de línea y los espacios */
  font-family: var(--fuente-braille);
  letter-spacing: -0.085em;     /* ajusta el ancho de cada celda braille al de tu Figma */
  user-select: none;
}

/* El tamaño de letra y el interlineado están calculados para que cada dibujo mida lo mismo que en tu Figma */
#sobre-mi pre:first-of-type {
  left: 3vw;
  top: 52vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi pre:last-of-type {
  right: 3vw;
  top: 6vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi p {
  position: absolute;
  left: 50%;
  top: 47vw;
  margin: 0;
  white-space: nowrap;
  transform: translate(-50%, -50%) rotate(-13deg);  /* centrado y luego inclinado */
  font: 0.8rem var(--fuente-titulos);
  color: var(--negro);
}

/* Sombra suave debajo del texto, solo al pasar el cursor.
   Valores: desplazamiento horizontal, vertical, desenfoque y color. */
#sobre-mi p a {
  transition: text-shadow 0.3s;
}

#sobre-mi p a:hover {
  text-shadow: 0 0.4em 0.4em rgb(0 0 0 / 35%);
}

/* Cada dibujo guarda dos versiones (los dos <span>) una encima de la otra.
   Por defecto se ve la estrella; con el mouse encima aparece la espiral. */
#sobre-mi pre span {
  transition: opacity 0.25s;
}

#sobre-mi pre span:last-child {
  position: absolute;           /* se coloca encima de la estrella */
  top: 0;
  left: -0.647em;               /* quita la celda en blanco que tiene la espiral a la izquierda */
  opacity: 0;                   /* invisible hasta el hover */
}

#sobre-mi pre:hover span:first-child { opacity: 0; }
#sobre-mi pre:hover span:last-child  { opacity: 1; }

/* Proyectos: en móvil van uno debajo del otro */
#proyectos {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1.5rem 4rem;
}

/* El h2 existe para los lectores de pantalla, pero no se ve en tu diseño */
#proyectos h2 {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}

figure {
  margin: 0;
}

figure img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  transform-origin: bottom;     /* crece desde el borde de abajo: no choca con el texto */
}

/* Al pasar el mouse, la imagen crece un poquito */
figure img:hover {
  transform: scale(1.05);
}

figcaption {
  margin-top: 0.5rem;
  font: 0.9rem var(--fuente-titulos);
  color: var(--negro);          /* el título (JRUG) va en negro 100 % */
}

figcaption span {
  display: block;
  color: var(--color);          /* el subtítulo (tipografía del sistema) va al 50 % */
  font: 0.8rem var(--fuente-texto);
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

/* Pie de página */
footer p {
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 2rem 0 5rem 1.5rem;
  font: 0.8rem/1 var(--fuente-texto);
  letter-spacing: -0.02em;
}

/* 1. el logo */
footer p span:first-child {
  font: 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

/* 2. la estrella, dibujada con CSS (un recorte en forma de estrella) */
footer p span:nth-child(2) {
  width: 0.9rem;
  height: 0.9rem;
  margin: 0.5rem 1rem 0;
  background: var(--color-suave);
  clip-path: polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* 3. "concepto visual" */
footer p span:last-child {
  margin-top: 0.7rem;
}

/* "hablemos :)" es una franja fija abajo de la pantalla.
   overflow: hidden recorta lo que se sale, y la pista adentro se desplaza. */
footer a {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  z-index: 5;
  overflow: hidden;
  white-space: nowrap;
  font: 1.1rem/1.4 var(--fuente-hablemos);
  color: var(--negro);          /* la franja va en negro 100 % */
}

/* La pista (la crea el JavaScript) contiene el texto repetido */
footer a > span {
  display: inline-block;
  animation: desplazar 40s linear infinite;
}

/* Cada repetición del texto */
footer a > span > span {
  display: inline-block;
  padding-right: 3rem;          /* el espacio entre un "hablemos" y el siguiente */
}

/* La pista tiene el texto repetido dos veces: al moverse justo la mitad (-50%),
   queda igual que al principio y el salto no se nota, así parece infinito. */
@keyframes desplazar {
  to { transform: translateX(-50%); }
}

footer a:hover > span {
  animation-play-state: paused; /* se detiene al pasar el mouse */
}

/* Si la persona pidió menos movimiento en su sistema, no se mueve */
@media (prefers-reduced-motion: reduce) {
  footer a > span { animation: none; }
  figure img,
  #sobre-mi p a,
  #sobre-mi pre span { transition: none; }
}

/* El cursor de la espada solo existe en pantallas con mouse */
#cursor {
  display: none;
}

/* ==========================================================
   4. ESCRITORIO (pantallas de 700px o más)
   Las medidas están en vw (1vw = 1 % del ancho de la pantalla),
   así el diseño se escala igual que tu frame de Figma.
   ========================================================== */
@media (min-width: 700px) {

  header {
    display: grid;
    grid-template-columns: 31.4% 34.3% 1fr;   /* logo | menú | espacio vacío */
    gap: 0;                                   /* sin espacio entre columnas */
    height: 8vw;
    padding: 0;
  }

  h1 {
    margin: 1.1vw 0 0 6.8vw;
    font-size: 3.74vw;
  }

  nav {
    grid-column: 2;
    justify-content: space-between;
    padding-top: 1.15vw;
    font-size: 1.38vw;
  }

  main > img { height: 6.24vw; }

  /* Introducción */
  #sobre-mi { height: 54.5vw; }

  #sobre-mi pre:first-of-type {
    left: 2.7vw;
    top: 20.6vw;
    font-size: 1.389vw;         /* 24px de un frame de 1728px de ancho */
    line-height: 1.125;
  }

  #sobre-mi pre:last-of-type {
    right: 3.4vw;
    top: 5.6vw;
    font-size: 1.389vw;
    line-height: 1.125;
  }

  #sobre-mi p {
    left: 49.8%;
    top: 19.7vw;
    font-size: 1.05vw;
  }

  /* Proyectos: cada uno se coloca con porcentajes sobre el contenedor,
     usando las posiciones medidas en tu Figma */
  #proyectos {
    display: block;
    position: relative;
    padding: 0;
    aspect-ratio: 1459 / 1747;   /* altura total de la sección */
  }

  #proyectos article {
    position: absolute;
  }

  #proyectos article:nth-of-type(1) { left: 9.7%;  top: 0;     width: 33.9%; }  /* Emu Ginger */
  #proyectos article:nth-of-type(2) { left: 61.6%; top: 8.8%;  width: 28%; }    /* Between Ends */
  #proyectos article:nth-of-type(3) { left: 15.8%; top: 45.7%; width: 23%; }    /* Familiario */
  #proyectos article:nth-of-type(4) { left: 53.5%; top: 69.3%; width: 30.8%; }  /* Portaencendedores */

  figcaption {
    margin-top: 0.8vw;
    font-size: 1.06vw;
  }

  figcaption span { font-size: 1.14vw; }

  footer { height: 18.8vw; }

  footer p {
    padding: 9.2vw 0 0 35.14vw;
    font-size: 1.09vw;
  }

  footer p span:first-child { font-size: 3.74vw; }

  footer p span:nth-child(2) {
    width: 1.4vw;
    height: 1.45vw;
    margin: 0.69vw 1.95vw 0 1.23vw;
  }

  footer p span:last-child { margin-top: 0.89vw; }

  footer a {
    bottom: 1vw;
    font-size: 1.28vw;
  }

  footer a > span > span { padding-right: 6.9vw; }
}

/* ==========================================================
   5. CURSOR DE ESPADA
   Solo si el dispositivo tiene un mouse (no en celulares).
   ========================================================== */
@media (hover: hover) and (pointer: fine) {

  body,
  a {
    cursor: none;               /* oculta el cursor real */
  }

  #cursor {
    display: block;
    position: fixed;            /* se mueve respecto a la ventana */
    top: 0;
    left: 0;
    width: 85px;                /* la imagen está hecha al doble (170px) para verse nítida */
    opacity: 0;                 /* invisible hasta que se mueva el mouse */
    pointer-events: none;       /* los clics pasan a través de la espada */
    z-index: 9999;
  }
}

´´´script
// ============================================================
// 1. FRANJA "hablemos :)" QUE SE DESPLAZA (marquee)
// ============================================================
// El HTML solo tiene el texto una vez. Aquí lo repetimos para llenar la pantalla.
const franja = document.querySelector('footer a');
const texto = franja.textContent.trim();

franja.setAttribute('aria-label', texto);   // los lectores de pantalla leen "hablemos :)" una sola vez
franja.textContent = '';                    // vaciamos el enlace

const pista = document.createElement('span');
pista.setAttribute('aria-hidden', 'true');  // las copias son solo decoración

// 24 copias = dos grupos iguales de 12. El CSS mueve la pista justo la mitad (-50%),
// y como las dos mitades son idénticas, al reiniciar no se nota el salto.
for (let i = 0; i < 24; i++) {
  const copia = document.createElement('span');
  copia.textContent = texto;
  pista.append(copia);
}
franja.append(pista);

// ============================================================
// 2. CURSOR DE ESPADA
// ============================================================
// Buscamos la imagen de la espada en el HTML (la que tiene id="cursor")
const cursor = document.querySelector('#cursor');

// Cada vez que el mouse se mueve, el navegador nos avisa con el evento "mousemove"
document.addEventListener('mousemove', (evento) => {
  cursor.style.opacity = 1;   // ahora sí se muestra

  // clientX y clientY son la posición del mouse en la ventana.
  // Con transform movemos la espada exactamente hasta ahí.
  cursor.style.transform = `translate3d(${evento.clientX}px, ${evento.clientY}px, 0)`;
});

// Si el mouse sale de la ventana, escondemos la espada
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0;
});

## Consulta IA: crear cursor

**Prompt usado:**

Quiero que el cursor sea esta imagen también y que el hablemos vaya rotando y nunca se quite de la pantalla, que esté completo siempre. Podrías mandarme el código de nuevo

**Código después:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>sof.me | portafolio</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
<body>

  <!-- ENCABEZADO: logo + menú -->
  <header>
    <h1><a href="#">sof.me</a></h1>
    <nav aria-label="Principal">
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
      <a href="#sobre-mi">Sobre mí</a>
    </nav>
  </header>

  <main>
    <!-- Franja de flores (decorativa: alt vacío) -->
    <img src="img/flores.webp" alt="">

    <!-- Introducción: dibujos ASCII y texto inclinado -->
    <section id="sobre-mi" aria-label="Introducción">
      <!-- Dos dibujos hechos con caracteres braille. Cada <pre> guarda dos versiones (dos <span>):
           la estrella y la espiral. El CSS muestra una u otra según el mouse. Son decorativos: aria-hidden los oculta a lectores de pantalla -->
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>

      <p>
        <a href="https://open.spotify.com/playlist/3FNJq9FZgzpYKLD7PkDErb?si=bH_3JY9cQQWh3c8ct68zNw&amp;utm_source=copy-link&amp;pi=agOAfxNERdakf"
           target="_blank" rel="noopener">Escucha mientras ves el portafolio &lt;3</a>
      </p>
    </section>

    <!-- Proyectos: cada uno es un artículo con su figura -->
    <section id="proyectos">
      <h2>Proyectos</h2>

      <article>
        <figure>
          <img src="img/emu-ginger.webp" alt="Afiche amarillo y naranja con un puño y el texto ewu">
          <figcaption>Emu Ginger <span>Branding</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/between-ends.webp" alt="Celular mostrando el sitio del festival Between Ends">
          <figcaption>Between Ends <span>UX</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/familiario.webp" alt="Tablero del juego Familiario con instrucciones y figuras de familia">
          <figcaption>Familiario <span>Juego museo DDHH</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/portaencendedores.webp" alt="Portaencendedores de cuero amarillo y celeste con argollas">
          <figcaption>Portaencendedores <span>Marroquinería</span></figcaption>
        </figure>
      </article>
    </section>
  </main>

  <!-- PIE DE PÁGINA -->
  <footer id="contacto">
    <p><span>sof.me</span><span aria-hidden="true"></span><span>concepto visual</span></p>
    <!-- La franja que se desplaza: el JavaScript repite este texto muchas veces -->
    <a href="#contacto">hablemos :)</a>
  </footer>

  <!-- Cursor personalizado (espada) -->
  <img id="cursor" src="img/espada.png" alt="" aria-hidden="true">

</body>
</html>

´´´css
/* ==========================================================
   1. FUENTES
   @font-face le enseña al navegador dónde está cada tipografía.
   ========================================================== */
@font-face { font-family: "Blink";      src: url("../fonts/BlinkMacSystemFont.ttf"); }
@font-face { font-family: "JRUG";       src: url("../fonts/JRUG_PUNK.ttf"); }
@font-face { font-family: "Poti";       src: url("../fonts/poti.ttf"); }
@font-face { font-family: "Mieszkanie"; src: url("../fonts/mieszkanie9.otf"); }
/* Fuente pequeña solo con los caracteres braille de los dibujos (basada en DejaVu Sans) */
@font-face { font-family: "Braille";    src: url("../fonts/braille.ttf"); }

/* ==========================================================
   2. VARIABLES
   Cambias un valor aquí y se actualiza en toda la página.
   ========================================================== */
:root {
  /* #000000 al 50 % de opacidad: es el único color de toda la página */
  --color: rgb(0 0 0 / 50%);
  --color-suave: rgb(0 0 0 / 15%);   /* negro al 15 %: logo y estrella, como en tu Figma */
  --negro: #000;                     /* negro al 100 %: tipografía JRUG y franja "hablemos" */
  --fondo: #fff;

  --fuente-texto: "Blink", system-ui, sans-serif;     /* menú, subtítulos, "concepto visual" */
  --fuente-logo: "Poti", cursive;                     /* logo sof.me */
  --fuente-titulos: "JRUG", cursive;                  /* nombres de proyectos y texto inclinado */
  --fuente-hablemos: "Mieszkanie", cursive;           /* franja "hablemos :)" */
  --fuente-braille: "Blink", "Braille", monospace;    /* dibujos ASCII: Blink, y "Braille" para los puntos */
}

/* ==========================================================
   3. BASE (versión móvil primero)
   ========================================================== */
/* Al hacer clic en un enlace del menú (#proyectos, #contacto...), la página se desliza
   suavemente hasta ahí en vez de saltar. Solo si la persona no pidió "reducir movimiento". */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

body {
  margin: 0;
  background: var(--fondo);
  color: var(--color);
  font-family: var(--fuente-texto);
}

a {
  color: inherit;
  text-decoration: none;
}

/* Encabezado */
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 1rem;
}

h1 {
  margin: 0;
  font: 400 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

nav {
  display: flex;
  gap: 1.2rem;
  font-size: 0.8rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

nav a:hover {
  text-decoration: underline;   /* el subrayado que se ve en tu diseño */
}

/* Banner de flores: ocupa todo el ancho y se recorta con object-fit */
main > img {
  display: block;
  width: 100%;
  height: 20vw;
  object-fit: cover;
  opacity: 0.5;                 /* las flores se ven al 50 % */
}

/* Introducción: dibujos braille y texto inclinado */
#sobre-mi {
  position: relative;
  height: 100vw;
}

#sobre-mi pre {
  position: absolute;
  margin: 0;
  white-space: pre;             /* respeta los saltos de línea y los espacios */
  font-family: var(--fuente-braille);
  letter-spacing: -0.085em;     /* ajusta el ancho de cada celda braille al de tu Figma */
  user-select: none;
}

/* El tamaño de letra y el interlineado están calculados para que cada dibujo mida lo mismo que en tu Figma */
#sobre-mi pre:first-of-type {
  left: 3vw;
  top: 52vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi pre:last-of-type {
  right: 3vw;
  top: 6vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi p {
  position: absolute;
  left: 50%;
  top: 47vw;
  margin: 0;
  white-space: nowrap;
  transform: translate(-50%, -50%) rotate(-13deg);  /* centrado y luego inclinado */
  font: 0.8rem var(--fuente-titulos);
  color: var(--negro);
}

/* Sombra suave debajo del texto, solo al pasar el cursor.
   Valores: desplazamiento horizontal, vertical, desenfoque y color. */
#sobre-mi p a {
  transition: text-shadow 0.3s;
}

#sobre-mi p a:hover {
  text-shadow: 0 0.4em 0.4em rgb(0 0 0 / 35%);
}

/* Cada dibujo guarda dos versiones (los dos <span>) una encima de la otra.
   Por defecto se ve la estrella; con el mouse encima aparece la espiral. */
#sobre-mi pre span {
  transition: opacity 0.25s;
}

#sobre-mi pre span:last-child {
  position: absolute;           /* se coloca encima de la estrella */
  top: 0;
  left: -0.647em;               /* quita la celda en blanco que tiene la espiral a la izquierda */
  opacity: 0;                   /* invisible hasta el hover */
}

#sobre-mi pre:hover span:first-child { opacity: 0; }
#sobre-mi pre:hover span:last-child  { opacity: 1; }

/* Proyectos: en móvil van uno debajo del otro */
#proyectos {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1.5rem 4rem;
}

/* El h2 existe para los lectores de pantalla, pero no se ve en tu diseño */
#proyectos h2 {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}

figure {
  margin: 0;
}

figure img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  transform-origin: bottom;     /* crece desde el borde de abajo: no choca con el texto */
}

/* Al pasar el mouse, la imagen crece un poquito */
figure img:hover {
  transform: scale(1.05);
}

figcaption {
  margin-top: 0.5rem;
  font: 0.9rem var(--fuente-titulos);
  color: var(--negro);          /* el título (JRUG) va en negro 100 % */
}

figcaption span {
  display: block;
  color: var(--color);          /* el subtítulo (tipografía del sistema) va al 50 % */
  font: 0.8rem var(--fuente-texto);
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

/* Pie de página */
footer p {
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 2rem 0 5rem 1.5rem;
  font: 0.8rem/1 var(--fuente-texto);
  letter-spacing: -0.02em;
}

/* 1. el logo */
footer p span:first-child {
  font: 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

/* 2. la estrella, dibujada con CSS (un recorte en forma de estrella) */
footer p span:nth-child(2) {
  width: 0.9rem;
  height: 0.9rem;
  margin: 0.5rem 1rem 0;
  background: var(--color-suave);
  clip-path: polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* 3. "concepto visual" */
footer p span:last-child {
  margin-top: 0.7rem;
}

/* "hablemos :)" es una franja fija abajo de la pantalla.
   overflow: hidden recorta lo que se sale, y la pista adentro se desplaza. */
footer a {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  z-index: 5;
  overflow: hidden;
  white-space: nowrap;
  font: 1.1rem/1.4 var(--fuente-hablemos);
  color: var(--negro);          /* la franja va en negro 100 % */
}

/* La pista (la crea el JavaScript) contiene el texto repetido */
footer a > span {
  display: inline-block;
  animation: desplazar 40s linear infinite;
}

/* Cada repetición del texto */
footer a > span > span {
  display: inline-block;
  padding-right: 3rem;          /* el espacio entre un "hablemos" y el siguiente */
}

/* La pista tiene el texto repetido dos veces: al moverse justo la mitad (-50%),
   queda igual que al principio y el salto no se nota, así parece infinito. */
@keyframes desplazar {
  to { transform: translateX(-50%); }
}

footer a:hover > span {
  animation-play-state: paused; /* se detiene al pasar el mouse */
}

/* Si la persona pidió menos movimiento en su sistema, no se mueve */
@media (prefers-reduced-motion: reduce) {
  footer a > span { animation: none; }
  figure img,
  #sobre-mi p a,
  #sobre-mi pre span { transition: none; }
}

/* El cursor de la espada solo existe en pantallas con mouse */
#cursor {
  display: none;
}

/* ==========================================================
   4. ESCRITORIO (pantallas de 700px o más)
   Las medidas están en vw (1vw = 1 % del ancho de la pantalla),
   así el diseño se escala igual que tu frame de Figma.
   ========================================================== */
@media (min-width: 700px) {

  header {
    display: grid;
    grid-template-columns: 31.4% 34.3% 1fr;   /* logo | menú | espacio vacío */
    gap: 0;                                   /* sin espacio entre columnas */
    height: 8vw;
    padding: 0;
  }

  h1 {
    margin: 1.1vw 0 0 6.8vw;
    font-size: 3.74vw;
  }

  nav {
    grid-column: 2;
    justify-content: space-between;
    padding-top: 1.15vw;
    font-size: 1.38vw;
  }

  main > img { height: 6.24vw; }

  /* Introducción */
  #sobre-mi { height: 54.5vw; }

  #sobre-mi pre:first-of-type {
    left: 2.7vw;
    top: 20.6vw;
    font-size: 1.389vw;         /* 24px de un frame de 1728px de ancho */
    line-height: 1.125;
  }

  #sobre-mi pre:last-of-type {
    right: 3.4vw;
    top: 5.6vw;
    font-size: 1.389vw;
    line-height: 1.125;
  }

  #sobre-mi p {
    left: 49.8%;
    top: 19.7vw;
    font-size: 1.05vw;
  }

  /* Proyectos: cada uno se coloca con porcentajes sobre el contenedor,
     usando las posiciones medidas en tu Figma */
  #proyectos {
    display: block;
    position: relative;
    padding: 0;
    aspect-ratio: 1459 / 1747;   /* altura total de la sección */
  }

  #proyectos article {
    position: absolute;
  }

  #proyectos article:nth-of-type(1) { left: 9.7%;  top: 0;     width: 33.9%; }  /* Emu Ginger */
  #proyectos article:nth-of-type(2) { left: 61.6%; top: 8.8%;  width: 28%; }    /* Between Ends */
  #proyectos article:nth-of-type(3) { left: 15.8%; top: 45.7%; width: 23%; }    /* Familiario */
  #proyectos article:nth-of-type(4) { left: 53.5%; top: 69.3%; width: 30.8%; }  /* Portaencendedores */

  figcaption {
    margin-top: 0.8vw;
    font-size: 1.06vw;
  }

  figcaption span { font-size: 1.14vw; }

  footer { height: 18.8vw; }

  footer p {
    padding: 9.2vw 0 0 35.14vw;
    font-size: 1.09vw;
  }

  footer p span:first-child { font-size: 3.74vw; }

  footer p span:nth-child(2) {
    width: 1.4vw;
    height: 1.45vw;
    margin: 0.69vw 1.95vw 0 1.23vw;
  }

  footer p span:last-child { margin-top: 0.89vw; }

  footer a {
    bottom: 1vw;
    font-size: 1.28vw;
  }

  footer a > span > span { padding-right: 6.9vw; }
}

/* ==========================================================
   5. CURSOR DE ESPADA
   Solo si el dispositivo tiene un mouse (no en celulares).
   ========================================================== */
@media (hover: hover) and (pointer: fine) {

  body,
  a {
    cursor: none;               /* oculta el cursor real */
  }

  #cursor {
    display: block;
    position: fixed;            /* se mueve respecto a la ventana */
    top: 0;
    left: 0;
    width: 85px;                /* la imagen está hecha al doble (170px) para verse nítida */
    opacity: 0;                 /* invisible hasta que se mueva el mouse */
    pointer-events: none;       /* los clics pasan a través de la espada */
    z-index: 9999;
  }
}

´´´js
// ============================================================
// 1. FRANJA "hablemos :)" QUE SE DESPLAZA (marquee)
// ============================================================
// El HTML solo tiene el texto una vez. Aquí lo repetimos para llenar la pantalla.
const franja = document.querySelector('footer a');
const texto = franja.textContent.trim();

franja.setAttribute('aria-label', texto);   // los lectores de pantalla leen "hablemos :)" una sola vez
franja.textContent = '';                    // vaciamos el enlace

const pista = document.createElement('span');
pista.setAttribute('aria-hidden', 'true');  // las copias son solo decoración

// 24 copias = dos grupos iguales de 12. El CSS mueve la pista justo la mitad (-50%),
// y como las dos mitades son idénticas, al reiniciar no se nota el salto.
for (let i = 0; i < 24; i++) {
  const copia = document.createElement('span');
  copia.textContent = texto;
  pista.append(copia);
}
franja.append(pista);

// ============================================================
// 2. CURSOR DE ESPADA
// ============================================================
// Buscamos la imagen de la espada en el HTML (la que tiene id="cursor")
const cursor = document.querySelector('#cursor');

// Cada vez que el mouse se mueve, el navegador nos avisa con el evento "mousemove"
document.addEventListener('mousemove', (evento) => {
  cursor.style.opacity = 1;   // ahora sí se muestra

  // clientX y clientY son la posición del mouse en la ventana.
  // Con transform movemos la espada exactamente hasta ahí.
  cursor.style.transform = `translate3d(${evento.clientX}px, ${evento.clientY}px, 0)`;
});

// Si el mouse sale de la ventana, escondemos la espada
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0;
});

### Consulta IA: correcciones del código

¡Hola, Sofía! Esa animación se llama marquee o ticker: una franja con texto que se desplaza sin parar, en bucle.
No pude ver el código de esa franja. Al abrir la página solo me llegó el esqueleto de Readymag y casi nada del contenido, porque Readymag lo dibuja con JavaScript en tu navegador. Así que lo que sigue es cómo se hace normalmente y cómo comprobarlo tú misma.
La idea

Hay una franja que recorta lo que se sale (overflow: hidden).
Dentro hay una pista con el texto repetido (por ejemplo “branding · contenido · web · branding · contenido · web...”).
La pista se mueve hacia la izquierda con una animación.
Cuando ya se movió justo el ancho de una repetición, vuelve al inicio. Como el texto es igual, el salto no se nota y parece infinito.
Versión sencilla solo con HTML y CSS
html

<div class="marquee">
  <p class="marquee__pista">
    <span>branding · contenido web · </span>
    <span>branding · contenido web · </span>
  </p>
</div>
css

.marquee {
  overflow: hidden;
  white-space: nowrap;
}

.marquee__pista {
  display: inline-block;
  animation: desplazar 10s linear infinite;
}

@keyframes desplazar {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
-50% mueve la pista justo la mitad, que es una repetición del texto. Por eso el bucle no se corta.
linear evita que se frene al final de cada vuelta.
white-space: nowrap impide que el texto baje a otra línea.
transform es mejor que left para animar, porque se mueve más suave.
Con JavaScript
Si la animación reacciona al scroll o cambia de velocidad, entonces hay JS. La idea es sumar un poco a la posición en cada fotograma:
js

let x = 0;
const pista = document.querySelector('.marquee__pista');

function animar() {
  x -= 1;
  pista.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animar);
}
animar();
Esto me habías dicho anteriormente, fuera de esto, la tipografía no está bien puesta como también los códigos de color, tienen que estar todos en 
#000000 pero de un 50% , te volví a mandar la imagen en png de las flores y el hablemos que está con la tipografía mieszkanie9

mandé a más detalle todo y los sciii son:

⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠉⠀

el primero

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀ ⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀ ⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀ ⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀ ⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀ ⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀ ⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀

el segundo

**Código después:**

´´´html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>sof.me | portafolio</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
<body>

  <!-- ENCABEZADO: logo + menú -->
  <header>
    <h1><a href="#">sof.me</a></h1>
    <nav aria-label="Principal">
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
      <a href="#sobre-mi">Sobre mí</a>
    </nav>
  </header>

  <main>
    <!-- Franja de flores (decorativa: alt vacío) -->
    <img src="img/flores.webp" alt="">

    <!-- Introducción: dibujos ASCII y texto inclinado -->
    <section id="sobre-mi" aria-label="Introducción">
      <!-- Dos dibujos hechos con caracteres braille. Cada <pre> guarda dos versiones (dos <span>):
           la estrella y la espiral. El CSS muestra una u otra según el mouse. Son decorativos: aria-hidden los oculta a lectores de pantalla -->
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>

      <p>
        <a href="https://open.spotify.com/playlist/3FNJq9FZgzpYKLD7PkDErb?si=bH_3JY9cQQWh3c8ct68zNw&amp;utm_source=copy-link&amp;pi=agOAfxNERdakf"
           target="_blank" rel="noopener">Escucha mientras ves el portafolio &lt;3</a>
      </p>
    </section>

    <!-- Proyectos: cada uno es un artículo con su figura -->
    <section id="proyectos">
      <h2>Proyectos</h2>

      <article>
        <figure>
          <img src="img/emu-ginger.webp" alt="Afiche amarillo y naranja con un puño y el texto ewu">
          <figcaption>Emu Ginger <span>Branding</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/between-ends.webp" alt="Celular mostrando el sitio del festival Between Ends">
          <figcaption>Between Ends <span>UX</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/familiario.webp" alt="Tablero del juego Familiario con instrucciones y figuras de familia">
          <figcaption>Familiario <span>Juego museo DDHH</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/portaencendedores.webp" alt="Portaencendedores de cuero amarillo y celeste con argollas">
          <figcaption>Portaencendedores <span>Marroquinería</span></figcaption>
        </figure>
      </article>
    </section>
  </main>

  <!-- PIE DE PÁGINA -->
  <footer id="contacto">
    <p><span>sof.me</span><span aria-hidden="true"></span><span>concepto visual</span></p>
    <!-- La franja que se desplaza: el JavaScript repite este texto muchas veces -->
    <a href="#contacto">hablemos :)</a>
  </footer>

  <!-- Cursor personalizado (espada) -->
  <img id="cursor" src="img/espada.png" alt="" aria-hidden="true">

</body>
</html>

´´´css
/* ==========================================================
   1. FUENTES
   @font-face le enseña al navegador dónde está cada tipografía.
   ========================================================== */
@font-face { font-family: "Blink";      src: url("../fonts/BlinkMacSystemFont.ttf"); }
@font-face { font-family: "JRUG";       src: url("../fonts/JRUG_PUNK.ttf"); }
@font-face { font-family: "Poti";       src: url("../fonts/poti.ttf"); }
@font-face { font-family: "Mieszkanie"; src: url("../fonts/mieszkanie9.otf"); }
/* Fuente pequeña solo con los caracteres braille de los dibujos (basada en DejaVu Sans) */
@font-face { font-family: "Braille";    src: url("../fonts/braille.ttf"); }

/* ==========================================================
   2. VARIABLES
   Cambias un valor aquí y se actualiza en toda la página.
   ========================================================== */
:root {
  /* #000000 al 50 % de opacidad: es el único color de toda la página */
  --color: rgb(0 0 0 / 50%);
  --color-suave: rgb(0 0 0 / 15%);   /* negro al 15 %: logo y estrella, como en tu Figma */
  --negro: #000;                     /* negro al 100 %: tipografía JRUG y franja "hablemos" */
  --fondo: #fff;

  --fuente-texto: "Blink", system-ui, sans-serif;     /* menú, subtítulos, "concepto visual" */
  --fuente-logo: "Poti", cursive;                     /* logo sof.me */
  --fuente-titulos: "JRUG", cursive;                  /* nombres de proyectos y texto inclinado */
  --fuente-hablemos: "Mieszkanie", cursive;           /* franja "hablemos :)" */
  --fuente-braille: "Blink", "Braille", monospace;    /* dibujos ASCII: Blink, y "Braille" para los puntos */
}

/* ==========================================================
   3. BASE (versión móvil primero)
   ========================================================== */
/* Al hacer clic en un enlace del menú (#proyectos, #contacto...), la página se desliza
   suavemente hasta ahí en vez de saltar. Solo si la persona no pidió "reducir movimiento". */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

body {
  margin: 0;
  background: var(--fondo);
  color: var(--color);
  font-family: var(--fuente-texto);
}

a {
  color: inherit;
  text-decoration: none;
}

/* Encabezado */
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 1rem;
}

h1 {
  margin: 0;
  font: 400 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

nav {
  display: flex;
  gap: 1.2rem;
  font-size: 0.8rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

nav a:hover {
  text-decoration: underline;   /* el subrayado que se ve en tu diseño */
}

/* Banner de flores: ocupa todo el ancho y se recorta con object-fit */
main > img {
  display: block;
  width: 100%;
  height: 20vw;
  object-fit: cover;
  opacity: 0.5;                 /* las flores se ven al 50 % */
}

/* Introducción: dibujos braille y texto inclinado */
#sobre-mi {
  position: relative;
  height: 100vw;
}

#sobre-mi pre {
  position: absolute;
  margin: 0;
  white-space: pre;             /* respeta los saltos de línea y los espacios */
  font-family: var(--fuente-braille);
  letter-spacing: -0.085em;     /* ajusta el ancho de cada celda braille al de tu Figma */
  user-select: none;
}

/* El tamaño de letra y el interlineado están calculados para que cada dibujo mida lo mismo que en tu Figma */
#sobre-mi pre:first-of-type {
  left: 3vw;
  top: 52vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi pre:last-of-type {
  right: 3vw;
  top: 6vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi p {
  position: absolute;
  left: 50%;
  top: 47vw;
  margin: 0;
  white-space: nowrap;
  transform: translate(-50%, -50%) rotate(-13deg);  /* centrado y luego inclinado */
  font: 0.8rem var(--fuente-titulos);
  color: var(--negro);
}

/* Sombra suave debajo del texto, solo al pasar el cursor.
   Valores: desplazamiento horizontal, vertical, desenfoque y color. */
#sobre-mi p a {
  transition: text-shadow 0.3s;
}

#sobre-mi p a:hover {
  text-shadow: 0 0.4em 0.4em rgb(0 0 0 / 35%);
}

/* Cada dibujo guarda dos versiones (los dos <span>) una encima de la otra.
   Por defecto se ve la estrella; con el mouse encima aparece la espiral. */
#sobre-mi pre span {
  transition: opacity 0.25s;
}

#sobre-mi pre span:last-child {
  position: absolute;           /* se coloca encima de la estrella */
  top: 0;
  left: -0.647em;               /* quita la celda en blanco que tiene la espiral a la izquierda */
  opacity: 0;                   /* invisible hasta el hover */
}

#sobre-mi pre:hover span:first-child { opacity: 0; }
#sobre-mi pre:hover span:last-child  { opacity: 1; }

/* Proyectos: en móvil van uno debajo del otro */
#proyectos {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1.5rem 4rem;
}

/* El h2 existe para los lectores de pantalla, pero no se ve en tu diseño */
#proyectos h2 {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}

figure {
  margin: 0;
}

figure img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  transform-origin: bottom;     /* crece desde el borde de abajo: no choca con el texto */
}

/* Al pasar el mouse, la imagen crece un poquito */
figure img:hover {
  transform: scale(1.05);
}

figcaption {
  margin-top: 0.5rem;
  font: 0.9rem var(--fuente-titulos);
  color: var(--negro);          /* el título (JRUG) va en negro 100 % */
}

figcaption span {
  display: block;
  color: var(--color);          /* el subtítulo (tipografía del sistema) va al 50 % */
  font: 0.8rem var(--fuente-texto);
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

/* Pie de página */
footer p {
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 2rem 0 5rem 1.5rem;
  font: 0.8rem/1 var(--fuente-texto);
  letter-spacing: -0.02em;
}

/* 1. el logo */
footer p span:first-child {
  font: 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

/* 2. la estrella, dibujada con CSS (un recorte en forma de estrella) */
footer p span:nth-child(2) {
  width: 0.9rem;
  height: 0.9rem;
  margin: 0.5rem 1rem 0;
  background: var(--color-suave);
  clip-path: polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* 3. "concepto visual" */
footer p span:last-child {
  margin-top: 0.7rem;
}

/* "hablemos :)" es una franja fija abajo de la pantalla.
   overflow: hidden recorta lo que se sale, y la pista adentro se desplaza. */
footer a {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  z-index: 5;
  overflow: hidden;
  white-space: nowrap;
  font: 1.1rem/1.4 var(--fuente-hablemos);
  color: var(--negro);          /* la franja va en negro 100 % */
}

/* La pista (la crea el JavaScript) contiene el texto repetido */
footer a > span {
  display: inline-block;
  animation: desplazar 40s linear infinite;
}

/* Cada repetición del texto */
footer a > span > span {
  display: inline-block;
  padding-right: 3rem;          /* el espacio entre un "hablemos" y el siguiente */
}

/* La pista tiene el texto repetido dos veces: al moverse justo la mitad (-50%),
   queda igual que al principio y el salto no se nota, así parece infinito. */
@keyframes desplazar {
  to { transform: translateX(-50%); }
}

footer a:hover > span {
  animation-play-state: paused; /* se detiene al pasar el mouse */
}

/* Si la persona pidió menos movimiento en su sistema, no se mueve */
@media (prefers-reduced-motion: reduce) {
  footer a > span { animation: none; }
  figure img,
  #sobre-mi p a,
  #sobre-mi pre span { transition: none; }
}

/* El cursor de la espada solo existe en pantallas con mouse */
#cursor {
  display: none;
}

/* ==========================================================
   4. ESCRITORIO (pantallas de 700px o más)
   Las medidas están en vw (1vw = 1 % del ancho de la pantalla),
   así el diseño se escala igual que tu frame de Figma.
   ========================================================== */
@media (min-width: 700px) {

  header {
    display: grid;
    grid-template-columns: 31.4% 34.3% 1fr;   /* logo | menú | espacio vacío */
    gap: 0;                                   /* sin espacio entre columnas */
    height: 8vw;
    padding: 0;
  }

  h1 {
    margin: 1.1vw 0 0 6.8vw;
    font-size: 3.74vw;
  }

  nav {
    grid-column: 2;
    justify-content: space-between;
    padding-top: 1.15vw;
    font-size: 1.38vw;
  }

  main > img { height: 6.24vw; }

  /* Introducción */
  #sobre-mi { height: 54.5vw; }

  #sobre-mi pre:first-of-type {
    left: 2.7vw;
    top: 20.6vw;
    font-size: 1.389vw;         /* 24px de un frame de 1728px de ancho */
    line-height: 1.125;
  }

  #sobre-mi pre:last-of-type {
    right: 3.4vw;
    top: 5.6vw;
    font-size: 1.389vw;
    line-height: 1.125;
  }

  #sobre-mi p {
    left: 49.8%;
    top: 19.7vw;
    font-size: 1.05vw;
  }

  /* Proyectos: cada uno se coloca con porcentajes sobre el contenedor,
     usando las posiciones medidas en tu Figma */
  #proyectos {
    display: block;
    position: relative;
    padding: 0;
    aspect-ratio: 1459 / 1747;   /* altura total de la sección */
  }

  #proyectos article {
    position: absolute;
  }

  #proyectos article:nth-of-type(1) { left: 9.7%;  top: 0;     width: 33.9%; }  /* Emu Ginger */
  #proyectos article:nth-of-type(2) { left: 61.6%; top: 8.8%;  width: 28%; }    /* Between Ends */
  #proyectos article:nth-of-type(3) { left: 15.8%; top: 45.7%; width: 23%; }    /* Familiario */
  #proyectos article:nth-of-type(4) { left: 53.5%; top: 69.3%; width: 30.8%; }  /* Portaencendedores */

  figcaption {
    margin-top: 0.8vw;
    font-size: 1.06vw;
  }

  figcaption span { font-size: 1.14vw; }

  footer { height: 18.8vw; }

  footer p {
    padding: 9.2vw 0 0 35.14vw;
    font-size: 1.09vw;
  }

  footer p span:first-child { font-size: 3.74vw; }

  footer p span:nth-child(2) {
    width: 1.4vw;
    height: 1.45vw;
    margin: 0.69vw 1.95vw 0 1.23vw;
  }

  footer p span:last-child { margin-top: 0.89vw; }

  footer a {
    bottom: 1vw;
    font-size: 1.28vw;
  }

  footer a > span > span { padding-right: 6.9vw; }
}

/* ==========================================================
   5. CURSOR DE ESPADA
   Solo si el dispositivo tiene un mouse (no en celulares).
   ========================================================== */
@media (hover: hover) and (pointer: fine) {

  body,
  a {
    cursor: none;               /* oculta el cursor real */
  }

  #cursor {
    display: block;
    position: fixed;            /* se mueve respecto a la ventana */
    top: 0;
    left: 0;
    width: 85px;                /* la imagen está hecha al doble (170px) para verse nítida */
    opacity: 0;                 /* invisible hasta que se mueva el mouse */
    pointer-events: none;       /* los clics pasan a través de la espada */
    z-index: 9999;
  }
}

´´´script
// ============================================================
// 1. FRANJA "hablemos :)" QUE SE DESPLAZA (marquee)
// ============================================================
// El HTML solo tiene el texto una vez. Aquí lo repetimos para llenar la pantalla.
const franja = document.querySelector('footer a');
const texto = franja.textContent.trim();

franja.setAttribute('aria-label', texto);   // los lectores de pantalla leen "hablemos :)" una sola vez
franja.textContent = '';                    // vaciamos el enlace

const pista = document.createElement('span');
pista.setAttribute('aria-hidden', 'true');  // las copias son solo decoración

// 24 copias = dos grupos iguales de 12. El CSS mueve la pista justo la mitad (-50%),
// y como las dos mitades son idénticas, al reiniciar no se nota el salto.
for (let i = 0; i < 24; i++) {
  const copia = document.createElement('span');
  copia.textContent = texto;
  pista.append(copia);
}
franja.append(pista);

// ============================================================
// 2. CURSOR DE ESPADA
// ============================================================
// Buscamos la imagen de la espada en el HTML (la que tiene id="cursor")
const cursor = document.querySelector('#cursor');

// Cada vez que el mouse se mueve, el navegador nos avisa con el evento "mousemove"
document.addEventListener('mousemove', (evento) => {
  cursor.style.opacity = 1;   // ahora sí se muestra

  // clientX y clientY son la posición del mouse en la ventana.
  // Con transform movemos la espada exactamente hasta ahí.
  cursor.style.transform = `translate3d(${evento.clientX}px, ${evento.clientY}px, 0)`;
});

// Si el mouse sale de la ventana, escondemos la espada
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0;
});

##### Consulta IA: correcciones

**Prompt usado:**

como puedo poner que las flores se vean en un 50% de opacidad? y lo otro, como puedo poner que al hacer click en la estrella de ascii art se convierta en ⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀de modo hover? 
cómo puedo hacer tambien que cuando al hacer click en las imagenes se pongan un poco mas grandes de modo hover también? por ultimo, quiero que la tipografia jrug punk tenga 100% negro y sólo la parte de abajo tenga 50% (que va con la tipografía mac)

**Código después:**

´´´html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>sof.me | portafolio</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
<body>

  <!-- ENCABEZADO: logo + menú -->
  <header>
    <h1><a href="#">sof.me</a></h1>
    <nav aria-label="Principal">
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
      <a href="#sobre-mi">Sobre mí</a>
    </nav>
  </header>

  <main>
    <!-- Franja de flores (decorativa: alt vacío) -->
    <img src="img/flores.webp" alt="">

    <!-- Introducción: dibujos ASCII y texto inclinado -->
    <section id="sobre-mi" aria-label="Introducción">
      <!-- Dos dibujos hechos con caracteres braille. Cada <pre> guarda dos versiones (dos <span>):
           la estrella y la espiral. El CSS muestra una u otra según el mouse. Son decorativos: aria-hidden los oculta a lectores de pantalla -->
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>

      <p>
        <a href="https://open.spotify.com/playlist/3FNJq9FZgzpYKLD7PkDErb?si=bH_3JY9cQQWh3c8ct68zNw&amp;utm_source=copy-link&amp;pi=agOAfxNERdakf"
           target="_blank" rel="noopener">Escucha mientras ves el portafolio &lt;3</a>
      </p>
    </section>

    <!-- Proyectos: cada uno es un artículo con su figura -->
    <section id="proyectos">
      <h2>Proyectos</h2>

      <article>
        <figure>
          <img src="img/emu-ginger.webp" alt="Afiche amarillo y naranja con un puño y el texto ewu">
          <figcaption>Emu Ginger <span>Branding</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/between-ends.webp" alt="Celular mostrando el sitio del festival Between Ends">
          <figcaption>Between Ends <span>UX</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/familiario.webp" alt="Tablero del juego Familiario con instrucciones y figuras de familia">
          <figcaption>Familiario <span>Juego museo DDHH</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/portaencendedores.webp" alt="Portaencendedores de cuero amarillo y celeste con argollas">
          <figcaption>Portaencendedores <span>Marroquinería</span></figcaption>
        </figure>
      </article>
    </section>
  </main>

  <!-- PIE DE PÁGINA -->
  <footer id="contacto">
    <p><span>sof.me</span><span aria-hidden="true"></span><span>concepto visual</span></p>
    <!-- La franja que se desplaza: el JavaScript repite este texto muchas veces -->
    <a href="#contacto">hablemos :)</a>
  </footer>

  <!-- Cursor personalizado (espada) -->
  <img id="cursor" src="img/espada.png" alt="" aria-hidden="true">

</body>
</html>

´´´css
/* ==========================================================
   1. FUENTES
   @font-face le enseña al navegador dónde está cada tipografía.
   ========================================================== */
@font-face { font-family: "Blink";      src: url("../fonts/BlinkMacSystemFont.ttf"); }
@font-face { font-family: "JRUG";       src: url("../fonts/JRUG_PUNK.ttf"); }
@font-face { font-family: "Poti";       src: url("../fonts/poti.ttf"); }
@font-face { font-family: "Mieszkanie"; src: url("../fonts/mieszkanie9.otf"); }
/* Fuente pequeña solo con los caracteres braille de los dibujos (basada en DejaVu Sans) */
@font-face { font-family: "Braille";    src: url("../fonts/braille.ttf"); }

/* ==========================================================
   2. VARIABLES
   Cambias un valor aquí y se actualiza en toda la página.
   ========================================================== */
:root {
  /* #000000 al 50 % de opacidad: es el único color de toda la página */
  --color: rgb(0 0 0 / 50%);
  --color-suave: rgb(0 0 0 / 15%);   /* negro al 15 %: logo y estrella, como en tu Figma */
  --negro: #000;                     /* negro al 100 %: tipografía JRUG y franja "hablemos" */
  --fondo: #fff;

  --fuente-texto: "Blink", system-ui, sans-serif;     /* menú, subtítulos, "concepto visual" */
  --fuente-logo: "Poti", cursive;                     /* logo sof.me */
  --fuente-titulos: "JRUG", cursive;                  /* nombres de proyectos y texto inclinado */
  --fuente-hablemos: "Mieszkanie", cursive;           /* franja "hablemos :)" */
  --fuente-braille: "Blink", "Braille", monospace;    /* dibujos ASCII: Blink, y "Braille" para los puntos */
}

/* ==========================================================
   3. BASE (versión móvil primero)
   ========================================================== */
/* Al hacer clic en un enlace del menú (#proyectos, #contacto...), la página se desliza
   suavemente hasta ahí en vez de saltar. Solo si la persona no pidió "reducir movimiento". */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

body {
  margin: 0;
  background: var(--fondo);
  color: var(--color);
  font-family: var(--fuente-texto);
}

a {
  color: inherit;
  text-decoration: none;
}

/* Encabezado */
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 1rem;
}

h1 {
  margin: 0;
  font: 400 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

nav {
  display: flex;
  gap: 1.2rem;
  font-size: 0.8rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

nav a:hover {
  text-decoration: underline;   /* el subrayado que se ve en tu diseño */
}

/* Banner de flores: ocupa todo el ancho y se recorta con object-fit */
main > img {
  display: block;
  width: 100%;
  height: 20vw;
  object-fit: cover;
  opacity: 0.5;                 /* las flores se ven al 50 % */
}

/* Introducción: dibujos braille y texto inclinado */
#sobre-mi {
  position: relative;
  height: 100vw;
}

#sobre-mi pre {
  position: absolute;
  margin: 0;
  white-space: pre;             /* respeta los saltos de línea y los espacios */
  font-family: var(--fuente-braille);
  letter-spacing: -0.085em;     /* ajusta el ancho de cada celda braille al de tu Figma */
  user-select: none;
}

/* El tamaño de letra y el interlineado están calculados para que cada dibujo mida lo mismo que en tu Figma */
#sobre-mi pre:first-of-type {
  left: 3vw;
  top: 52vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi pre:last-of-type {
  right: 3vw;
  top: 6vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi p {
  position: absolute;
  left: 50%;
  top: 47vw;
  margin: 0;
  white-space: nowrap;
  transform: translate(-50%, -50%) rotate(-13deg);  /* centrado y luego inclinado */
  font: 0.8rem var(--fuente-titulos);
  color: var(--negro);
}

/* Sombra suave debajo del texto, solo al pasar el cursor.
   Valores: desplazamiento horizontal, vertical, desenfoque y color. */
#sobre-mi p a {
  transition: text-shadow 0.3s;
}

#sobre-mi p a:hover {
  text-shadow: 0 0.4em 0.4em rgb(0 0 0 / 35%);
}

/* Cada dibujo guarda dos versiones (los dos <span>) una encima de la otra.
   Por defecto se ve la estrella; con el mouse encima aparece la espiral. */
#sobre-mi pre span {
  transition: opacity 0.25s;
}

#sobre-mi pre span:last-child {
  position: absolute;           /* se coloca encima de la estrella */
  top: 0;
  left: -0.647em;               /* quita la celda en blanco que tiene la espiral a la izquierda */
  opacity: 0;                   /* invisible hasta el hover */
}

#sobre-mi pre:hover span:first-child { opacity: 0; }
#sobre-mi pre:hover span:last-child  { opacity: 1; }

/* Proyectos: en móvil van uno debajo del otro */
#proyectos {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1.5rem 4rem;
}

/* El h2 existe para los lectores de pantalla, pero no se ve en tu diseño */
#proyectos h2 {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}

figure {
  margin: 0;
}

figure img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  transform-origin: bottom;     /* crece desde el borde de abajo: no choca con el texto */
}

/* Al pasar el mouse, la imagen crece un poquito */
figure img:hover {
  transform: scale(1.05);
}

figcaption {
  margin-top: 0.5rem;
  font: 0.9rem var(--fuente-titulos);
  color: var(--negro);          /* el título (JRUG) va en negro 100 % */
}

figcaption span {
  display: block;
  color: var(--color);          /* el subtítulo (tipografía del sistema) va al 50 % */
  font: 0.8rem var(--fuente-texto);
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

/* Pie de página */
footer p {
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 2rem 0 5rem 1.5rem;
  font: 0.8rem/1 var(--fuente-texto);
  letter-spacing: -0.02em;
}

/* 1. el logo */
footer p span:first-child {
  font: 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

/* 2. la estrella, dibujada con CSS (un recorte en forma de estrella) */
footer p span:nth-child(2) {
  width: 0.9rem;
  height: 0.9rem;
  margin: 0.5rem 1rem 0;
  background: var(--color-suave);
  clip-path: polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* 3. "concepto visual" */
footer p span:last-child {
  margin-top: 0.7rem;
}

/* "hablemos :)" es una franja fija abajo de la pantalla.
   overflow: hidden recorta lo que se sale, y la pista adentro se desplaza. */
footer a {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  z-index: 5;
  overflow: hidden;
  white-space: nowrap;
  font: 1.1rem/1.4 var(--fuente-hablemos);
  color: var(--negro);          /* la franja va en negro 100 % */
}

/* La pista (la crea el JavaScript) contiene el texto repetido */
footer a > span {
  display: inline-block;
  animation: desplazar 40s linear infinite;
}

/* Cada repetición del texto */
footer a > span > span {
  display: inline-block;
  padding-right: 3rem;          /* el espacio entre un "hablemos" y el siguiente */
}

/* La pista tiene el texto repetido dos veces: al moverse justo la mitad (-50%),
   queda igual que al principio y el salto no se nota, así parece infinito. */
@keyframes desplazar {
  to { transform: translateX(-50%); }
}

footer a:hover > span {
  animation-play-state: paused; /* se detiene al pasar el mouse */
}

/* Si la persona pidió menos movimiento en su sistema, no se mueve */
@media (prefers-reduced-motion: reduce) {
  footer a > span { animation: none; }
  figure img,
  #sobre-mi p a,
  #sobre-mi pre span { transition: none; }
}

/* El cursor de la espada solo existe en pantallas con mouse */
#cursor {
  display: none;
}

/* ==========================================================
   4. ESCRITORIO (pantallas de 700px o más)
   Las medidas están en vw (1vw = 1 % del ancho de la pantalla),
   así el diseño se escala igual que tu frame de Figma.
   ========================================================== */
@media (min-width: 700px) {

  header {
    display: grid;
    grid-template-columns: 31.4% 34.3% 1fr;   /* logo | menú | espacio vacío */
    gap: 0;                                   /* sin espacio entre columnas */
    height: 8vw;
    padding: 0;
  }

  h1 {
    margin: 1.1vw 0 0 6.8vw;
    font-size: 3.74vw;
  }

  nav {
    grid-column: 2;
    justify-content: space-between;
    padding-top: 1.15vw;
    font-size: 1.38vw;
  }

  main > img { height: 6.24vw; }

  /* Introducción */
  #sobre-mi { height: 54.5vw; }

  #sobre-mi pre:first-of-type {
    left: 2.7vw;
    top: 20.6vw;
    font-size: 1.389vw;         /* 24px de un frame de 1728px de ancho */
    line-height: 1.125;
  }

  #sobre-mi pre:last-of-type {
    right: 3.4vw;
    top: 5.6vw;
    font-size: 1.389vw;
    line-height: 1.125;
  }

  #sobre-mi p {
    left: 49.8%;
    top: 19.7vw;
    font-size: 1.05vw;
  }

  /* Proyectos: cada uno se coloca con porcentajes sobre el contenedor,
     usando las posiciones medidas en tu Figma */
  #proyectos {
    display: block;
    position: relative;
    padding: 0;
    aspect-ratio: 1459 / 1747;   /* altura total de la sección */
  }

  #proyectos article {
    position: absolute;
  }

  #proyectos article:nth-of-type(1) { left: 9.7%;  top: 0;     width: 33.9%; }  /* Emu Ginger */
  #proyectos article:nth-of-type(2) { left: 61.6%; top: 8.8%;  width: 28%; }    /* Between Ends */
  #proyectos article:nth-of-type(3) { left: 15.8%; top: 45.7%; width: 23%; }    /* Familiario */
  #proyectos article:nth-of-type(4) { left: 53.5%; top: 69.3%; width: 30.8%; }  /* Portaencendedores */

  figcaption {
    margin-top: 0.8vw;
    font-size: 1.06vw;
  }

  figcaption span { font-size: 1.14vw; }

  footer { height: 18.8vw; }

  footer p {
    padding: 9.2vw 0 0 35.14vw;
    font-size: 1.09vw;
  }

  footer p span:first-child { font-size: 3.74vw; }

  footer p span:nth-child(2) {
    width: 1.4vw;
    height: 1.45vw;
    margin: 0.69vw 1.95vw 0 1.23vw;
  }

  footer p span:last-child { margin-top: 0.89vw; }

  footer a {
    bottom: 1vw;
    font-size: 1.28vw;
  }

  footer a > span > span { padding-right: 6.9vw; }
}

/* ==========================================================
   5. CURSOR DE ESPADA
   Solo si el dispositivo tiene un mouse (no en celulares).
   ========================================================== */
@media (hover: hover) and (pointer: fine) {

  body,
  a {
    cursor: none;               /* oculta el cursor real */
  }

  #cursor {
    display: block;
    position: fixed;            /* se mueve respecto a la ventana */
    top: 0;
    left: 0;
    width: 85px;                /* la imagen está hecha al doble (170px) para verse nítida */
    opacity: 0;                 /* invisible hasta que se mueva el mouse */
    pointer-events: none;       /* los clics pasan a través de la espada */
    z-index: 9999;
  }
}

´´´script
// ============================================================
// 1. FRANJA "hablemos :)" QUE SE DESPLAZA (marquee)
// ============================================================
// El HTML solo tiene el texto una vez. Aquí lo repetimos para llenar la pantalla.
const franja = document.querySelector('footer a');
const texto = franja.textContent.trim();

franja.setAttribute('aria-label', texto);   // los lectores de pantalla leen "hablemos :)" una sola vez
franja.textContent = '';                    // vaciamos el enlace

const pista = document.createElement('span');
pista.setAttribute('aria-hidden', 'true');  // las copias son solo decoración

// 24 copias = dos grupos iguales de 12. El CSS mueve la pista justo la mitad (-50%),
// y como las dos mitades son idénticas, al reiniciar no se nota el salto.
for (let i = 0; i < 24; i++) {
  const copia = document.createElement('span');
  copia.textContent = texto;
  pista.append(copia);
}
franja.append(pista);

// ============================================================
// 2. CURSOR DE ESPADA
// ============================================================
// Buscamos la imagen de la espada en el HTML (la que tiene id="cursor")
const cursor = document.querySelector('#cursor');

// Cada vez que el mouse se mueve, el navegador nos avisa con el evento "mousemove"
document.addEventListener('mousemove', (evento) => {
  cursor.style.opacity = 1;   // ahora sí se muestra

  // clientX y clientY son la posición del mouse en la ventana.
  // Con transform movemos la espada exactamente hasta ahí.
  cursor.style.transform = `translate3d(${evento.clientX}px, ${evento.clientY}px, 0)`;
});

// Si el mouse sale de la ventana, escondemos la espada
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0;
});

###### Consulta IA: link playlist y sombreado

**Prompt usado:**
Puedes hacer que el link de portafolio tenga sombreado de esta manera y también lleve a este link https://open.spotify.com/playlist/3FNJq9FZgzpYKLD7PkDErb?si=bH_3JY9cQQWh3c8ct68zNw&utm_source=copy-link&pi=agOAfxNERdakf
acá esta flores
puedes hacer también que lo de proyectos redirija hacia abajo de manera smooth?

**Código después:**

´´´html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>sof.me | portafolio</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
<body>

  <!-- ENCABEZADO: logo + menú -->
  <header>
    <h1><a href="#">sof.me</a></h1>
    <nav aria-label="Principal">
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
      <a href="#sobre-mi">Sobre mí</a>
    </nav>
  </header>

  <main>
    <!-- Franja de flores (decorativa: alt vacío) -->
    <img src="img/flores.webp" alt="">

    <!-- Introducción: dibujos ASCII y texto inclinado -->
    <section id="sobre-mi" aria-label="Introducción">
      <!-- Dos dibujos hechos con caracteres braille. Cada <pre> guarda dos versiones (dos <span>):
           la estrella y la espiral. El CSS muestra una u otra según el mouse. Son decorativos: aria-hidden los oculta a lectores de pantalla -->
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>

      <p>
        <a href="https://open.spotify.com/playlist/3FNJq9FZgzpYKLD7PkDErb?si=bH_3JY9cQQWh3c8ct68zNw&amp;utm_source=copy-link&amp;pi=agOAfxNERdakf"
           target="_blank" rel="noopener">Escucha mientras ves el portafolio &lt;3</a>
      </p>
    </section>

    <!-- Proyectos: cada uno es un artículo con su figura -->
    <section id="proyectos">
      <h2>Proyectos</h2>

      <article>
        <figure>
          <img src="img/emu-ginger.webp" alt="Afiche amarillo y naranja con un puño y el texto ewu">
          <figcaption>Emu Ginger <span>Branding</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/between-ends.webp" alt="Celular mostrando el sitio del festival Between Ends">
          <figcaption>Between Ends <span>UX</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/familiario.webp" alt="Tablero del juego Familiario con instrucciones y figuras de familia">
          <figcaption>Familiario <span>Juego museo DDHH</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/portaencendedores.webp" alt="Portaencendedores de cuero amarillo y celeste con argollas">
          <figcaption>Portaencendedores <span>Marroquinería</span></figcaption>
        </figure>
      </article>
    </section>
  </main>

  <!-- PIE DE PÁGINA -->
  <footer id="contacto">
    <p><span>sof.me</span><span aria-hidden="true"></span><span>concepto visual</span></p>
    <!-- La franja que se desplaza: el JavaScript repite este texto muchas veces -->
    <a href="#contacto">hablemos :)</a>
  </footer>

  <!-- Cursor personalizado (espada) -->
  <img id="cursor" src="img/espada.png" alt="" aria-hidden="true">

</body>
</html>

´´´css
/* ==========================================================
   1. FUENTES
   @font-face le enseña al navegador dónde está cada tipografía.
   ========================================================== */
@font-face { font-family: "Blink";      src: url("../fonts/BlinkMacSystemFont.ttf"); }
@font-face { font-family: "JRUG";       src: url("../fonts/JRUG_PUNK.ttf"); }
@font-face { font-family: "Poti";       src: url("../fonts/poti.ttf"); }
@font-face { font-family: "Mieszkanie"; src: url("../fonts/mieszkanie9.otf"); }
/* Fuente pequeña solo con los caracteres braille de los dibujos (basada en DejaVu Sans) */
@font-face { font-family: "Braille";    src: url("../fonts/braille.ttf"); }

/* ==========================================================
   2. VARIABLES
   Cambias un valor aquí y se actualiza en toda la página.
   ========================================================== */
:root {
  /* #000000 al 50 % de opacidad: es el único color de toda la página */
  --color: rgb(0 0 0 / 50%);
  --color-suave: rgb(0 0 0 / 15%);   /* negro al 15 %: logo y estrella, como en tu Figma */
  --negro: #000;                     /* negro al 100 %: tipografía JRUG y franja "hablemos" */
  --fondo: #fff;

  --fuente-texto: "Blink", system-ui, sans-serif;     /* menú, subtítulos, "concepto visual" */
  --fuente-logo: "Poti", cursive;                     /* logo sof.me */
  --fuente-titulos: "JRUG", cursive;                  /* nombres de proyectos y texto inclinado */
  --fuente-hablemos: "Mieszkanie", cursive;           /* franja "hablemos :)" */
  --fuente-braille: "Blink", "Braille", monospace;    /* dibujos ASCII: Blink, y "Braille" para los puntos */
}

/* ==========================================================
   3. BASE (versión móvil primero)
   ========================================================== */
/* Al hacer clic en un enlace del menú (#proyectos, #contacto...), la página se desliza
   suavemente hasta ahí en vez de saltar. Solo si la persona no pidió "reducir movimiento". */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

body {
  margin: 0;
  background: var(--fondo);
  color: var(--color);
  font-family: var(--fuente-texto);
}

a {
  color: inherit;
  text-decoration: none;
}

/* Encabezado */
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 1rem;
}

h1 {
  margin: 0;
  font: 400 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

nav {
  display: flex;
  gap: 1.2rem;
  font-size: 0.8rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

nav a:hover {
  text-decoration: underline;   /* el subrayado que se ve en tu diseño */
}

/* Banner de flores: ocupa todo el ancho y se recorta con object-fit */
main > img {
  display: block;
  width: 100%;
  height: 20vw;
  object-fit: cover;
  opacity: 0.5;                 /* las flores se ven al 50 % */
}

/* Introducción: dibujos braille y texto inclinado */
#sobre-mi {
  position: relative;
  height: 100vw;
}

#sobre-mi pre {
  position: absolute;
  margin: 0;
  white-space: pre;             /* respeta los saltos de línea y los espacios */
  font-family: var(--fuente-braille);
  letter-spacing: -0.085em;     /* ajusta el ancho de cada celda braille al de tu Figma */
  user-select: none;
}

/* El tamaño de letra y el interlineado están calculados para que cada dibujo mida lo mismo que en tu Figma */
#sobre-mi pre:first-of-type {
  left: 3vw;
  top: 52vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi pre:last-of-type {
  right: 3vw;
  top: 6vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi p {
  position: absolute;
  left: 50%;
  top: 47vw;
  margin: 0;
  white-space: nowrap;
  transform: translate(-50%, -50%) rotate(-13deg);  /* centrado y luego inclinado */
  font: 0.8rem var(--fuente-titulos);
  color: var(--negro);
}

/* Sombra suave debajo del texto, solo al pasar el cursor.
   Valores: desplazamiento horizontal, vertical, desenfoque y color. */
#sobre-mi p a {
  transition: text-shadow 0.3s;
}

#sobre-mi p a:hover {
  text-shadow: 0 0.4em 0.4em rgb(0 0 0 / 35%);
}

/* Cada dibujo guarda dos versiones (los dos <span>) una encima de la otra.
   Por defecto se ve la estrella; con el mouse encima aparece la espiral. */
#sobre-mi pre span {
  transition: opacity 0.25s;
}

#sobre-mi pre span:last-child {
  position: absolute;           /* se coloca encima de la estrella */
  top: 0;
  left: -0.647em;               /* quita la celda en blanco que tiene la espiral a la izquierda */
  opacity: 0;                   /* invisible hasta el hover */
}

#sobre-mi pre:hover span:first-child { opacity: 0; }
#sobre-mi pre:hover span:last-child  { opacity: 1; }

/* Proyectos: en móvil van uno debajo del otro */
#proyectos {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1.5rem 4rem;
}

/* El h2 existe para los lectores de pantalla, pero no se ve en tu diseño */
#proyectos h2 {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}

figure {
  margin: 0;
}

figure img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  transform-origin: bottom;     /* crece desde el borde de abajo: no choca con el texto */
}

/* Al pasar el mouse, la imagen crece un poquito */
figure img:hover {
  transform: scale(1.05);
}

figcaption {
  margin-top: 0.5rem;
  font: 0.9rem var(--fuente-titulos);
  color: var(--negro);          /* el título (JRUG) va en negro 100 % */
}

figcaption span {
  display: block;
  color: var(--color);          /* el subtítulo (tipografía del sistema) va al 50 % */
  font: 0.8rem var(--fuente-texto);
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

/* Pie de página */
footer p {
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 2rem 0 5rem 1.5rem;
  font: 0.8rem/1 var(--fuente-texto);
  letter-spacing: -0.02em;
}

/* 1. el logo */
footer p span:first-child {
  font: 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

/* 2. la estrella, dibujada con CSS (un recorte en forma de estrella) */
footer p span:nth-child(2) {
  width: 0.9rem;
  height: 0.9rem;
  margin: 0.5rem 1rem 0;
  background: var(--color-suave);
  clip-path: polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* 3. "concepto visual" */
footer p span:last-child {
  margin-top: 0.7rem;
}

/* "hablemos :)" es una franja fija abajo de la pantalla.
   overflow: hidden recorta lo que se sale, y la pista adentro se desplaza. */
footer a {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  z-index: 5;
  overflow: hidden;
  white-space: nowrap;
  font: 1.1rem/1.4 var(--fuente-hablemos);
  color: var(--negro);          /* la franja va en negro 100 % */
}

/* La pista (la crea el JavaScript) contiene el texto repetido */
footer a > span {
  display: inline-block;
  animation: desplazar 40s linear infinite;
}

/* Cada repetición del texto */
footer a > span > span {
  display: inline-block;
  padding-right: 3rem;          /* el espacio entre un "hablemos" y el siguiente */
}

/* La pista tiene el texto repetido dos veces: al moverse justo la mitad (-50%),
   queda igual que al principio y el salto no se nota, así parece infinito. */
@keyframes desplazar {
  to { transform: translateX(-50%); }
}

footer a:hover > span {
  animation-play-state: paused; /* se detiene al pasar el mouse */
}

/* Si la persona pidió menos movimiento en su sistema, no se mueve */
@media (prefers-reduced-motion: reduce) {
  footer a > span { animation: none; }
  figure img,
  #sobre-mi p a,
  #sobre-mi pre span { transition: none; }
}

/* El cursor de la espada solo existe en pantallas con mouse */
#cursor {
  display: none;
}

/* ==========================================================
   4. ESCRITORIO (pantallas de 700px o más)
   Las medidas están en vw (1vw = 1 % del ancho de la pantalla),
   así el diseño se escala igual que tu frame de Figma.
   ========================================================== */
@media (min-width: 700px) {

  header {
    display: grid;
    grid-template-columns: 31.4% 34.3% 1fr;   /* logo | menú | espacio vacío */
    gap: 0;                                   /* sin espacio entre columnas */
    height: 8vw;
    padding: 0;
  }

  h1 {
    margin: 1.1vw 0 0 6.8vw;
    font-size: 3.74vw;
  }

  nav {
    grid-column: 2;
    justify-content: space-between;
    padding-top: 1.15vw;
    font-size: 1.38vw;
  }

  main > img { height: 6.24vw; }

  /* Introducción */
  #sobre-mi { height: 54.5vw; }

  #sobre-mi pre:first-of-type {
    left: 2.7vw;
    top: 20.6vw;
    font-size: 1.389vw;         /* 24px de un frame de 1728px de ancho */
    line-height: 1.125;
  }

  #sobre-mi pre:last-of-type {
    right: 3.4vw;
    top: 5.6vw;
    font-size: 1.389vw;
    line-height: 1.125;
  }

  #sobre-mi p {
    left: 49.8%;
    top: 19.7vw;
    font-size: 1.05vw;
  }

  /* Proyectos: cada uno se coloca con porcentajes sobre el contenedor,
     usando las posiciones medidas en tu Figma */
  #proyectos {
    display: block;
    position: relative;
    padding: 0;
    aspect-ratio: 1459 / 1747;   /* altura total de la sección */
  }

  #proyectos article {
    position: absolute;
  }

  #proyectos article:nth-of-type(1) { left: 9.7%;  top: 0;     width: 33.9%; }  /* Emu Ginger */
  #proyectos article:nth-of-type(2) { left: 61.6%; top: 8.8%;  width: 28%; }    /* Between Ends */
  #proyectos article:nth-of-type(3) { left: 15.8%; top: 45.7%; width: 23%; }    /* Familiario */
  #proyectos article:nth-of-type(4) { left: 53.5%; top: 69.3%; width: 30.8%; }  /* Portaencendedores */

  figcaption {
    margin-top: 0.8vw;
    font-size: 1.06vw;
  }

  figcaption span { font-size: 1.14vw; }

  footer { height: 18.8vw; }

  footer p {
    padding: 9.2vw 0 0 35.14vw;
    font-size: 1.09vw;
  }

  footer p span:first-child { font-size: 3.74vw; }

  footer p span:nth-child(2) {
    width: 1.4vw;
    height: 1.45vw;
    margin: 0.69vw 1.95vw 0 1.23vw;
  }

  footer p span:last-child { margin-top: 0.89vw; }

  footer a {
    bottom: 1vw;
    font-size: 1.28vw;
  }

  footer a > span > span { padding-right: 6.9vw; }
}

/* ==========================================================
   5. CURSOR DE ESPADA
   Solo si el dispositivo tiene un mouse (no en celulares).
   ========================================================== */
@media (hover: hover) and (pointer: fine) {

  body,
  a {
    cursor: none;               /* oculta el cursor real */
  }

  #cursor {
    display: block;
    position: fixed;            /* se mueve respecto a la ventana */
    top: 0;
    left: 0;
    width: 85px;                /* la imagen está hecha al doble (170px) para verse nítida */
    opacity: 0;                 /* invisible hasta que se mueva el mouse */
    pointer-events: none;       /* los clics pasan a través de la espada */
    z-index: 9999;
  }
}

´´´script
// ============================================================
// 1. FRANJA "hablemos :)" QUE SE DESPLAZA (marquee)
// ============================================================
// El HTML solo tiene el texto una vez. Aquí lo repetimos para llenar la pantalla.
const franja = document.querySelector('footer a');
const texto = franja.textContent.trim();

franja.setAttribute('aria-label', texto);   // los lectores de pantalla leen "hablemos :)" una sola vez
franja.textContent = '';                    // vaciamos el enlace

const pista = document.createElement('span');
pista.setAttribute('aria-hidden', 'true');  // las copias son solo decoración

// 24 copias = dos grupos iguales de 12. El CSS mueve la pista justo la mitad (-50%),
// y como las dos mitades son idénticas, al reiniciar no se nota el salto.
for (let i = 0; i < 24; i++) {
  const copia = document.createElement('span');
  copia.textContent = texto;
  pista.append(copia);
}
franja.append(pista);

// ============================================================
// 2. CURSOR DE ESPADA
// ============================================================
// Buscamos la imagen de la espada en el HTML (la que tiene id="cursor")
const cursor = document.querySelector('#cursor');

// Cada vez que el mouse se mueve, el navegador nos avisa con el evento "mousemove"
document.addEventListener('mousemove', (evento) => {
  cursor.style.opacity = 1;   // ahora sí se muestra

  // clientX y clientY son la posición del mouse en la ventana.
  // Con transform movemos la espada exactamente hasta ahí.
  cursor.style.transform = `translate3d(${evento.clientX}px, ${evento.clientY}px, 0)`;
});

// Si el mouse sale de la ventana, escondemos la espada
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0;
});

####### Consulta IA: correcciones

**Prompt usado:**
Puedes hacer que between ends no choque con el texto cuando se haga el efecto hover? y lo otro, puedes hacer que el pixel art esté con la tipografia blinkmacsystemfont? y que esté en un tamaño de 24, como también puedes igualar la parte de abajo tal cual como está en figma? la animación está bien, pero el texto de abajo está en 50% y yo lo quiero en 100% de negro, lo otro es que el escucha mientras ves mi portafolio quiero que ese sombreado sea solo al pasar el cursor

**Código después:**

´´´html

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>sof.me | portafolio</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
<body>

  <!-- ENCABEZADO: logo + menú -->
  <header>
    <h1><a href="#">sof.me</a></h1>
    <nav aria-label="Principal">
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
      <a href="#sobre-mi">Sobre mí</a>
    </nav>
  </header>

  <main>
    <!-- Franja de flores (decorativa: alt vacío) -->
    <img src="img/flores.webp" alt="">

    <!-- Introducción: dibujos ASCII y texto inclinado -->
    <section id="sobre-mi" aria-label="Introducción">
      <!-- Dos dibujos hechos con caracteres braille. Cada <pre> guarda dos versiones (dos <span>):
           la estrella y la espiral. El CSS muestra una u otra según el mouse. Son decorativos: aria-hidden los oculta a lectores de pantalla -->
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>
      <pre aria-hidden="true"><span>⢸⡿⢦⣄⠀⢀⣠⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣷⠀⠉⠛⠛⠉⢰⡇⠀⠀⠘⣷⣦⣾⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣰⠿⠀⠀⠀⠀⠀⢿⡁⠀⢀⣴⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀
⣴⣿⣁⡀⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⢿⠃⠀⢀⣤⡀⠀⠀⠀⠀
⠀⠈⠉⠛⣿⡀⠀⣰⠟⠛⠛⠛⠛⠀⠀⠀⠀⣠⡾⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣷⣼⠏⠀⠀⠀⢻⣟⠻⠿⢶⡾⠋⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⠃⠀⣴⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠻⢶⣤⣀⠀
⠀⠀⠀⠀⠀⠘⢷⣾⣿⣤⣄⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⢀⣉⣿⠿
⠀⠀⠀⠀⠀⢀⣾⠿⣿⡏⠉⢠⣾⠃⠀⠀⠀⠀⠀⢀⣾⠛⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⣿⡷⠿⠟⠛⢿⣦⡀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀</span><span>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤⠀⠀
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇⠀⠀⠀
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨⠀⠀
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆⠀
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁⠀⠀⠀⠀</span></pre>

      <p>
        <a href="https://open.spotify.com/playlist/3FNJq9FZgzpYKLD7PkDErb?si=bH_3JY9cQQWh3c8ct68zNw&amp;utm_source=copy-link&amp;pi=agOAfxNERdakf"
           target="_blank" rel="noopener">Escucha mientras ves el portafolio &lt;3</a>
      </p>
    </section>

    <!-- Proyectos: cada uno es un artículo con su figura -->
    <section id="proyectos">
      <h2>Proyectos</h2>

      <article>
        <figure>
          <img src="img/emu-ginger.webp" alt="Afiche amarillo y naranja con un puño y el texto ewu">
          <figcaption>Emu Ginger <span>Branding</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/between-ends.webp" alt="Celular mostrando el sitio del festival Between Ends">
          <figcaption>Between Ends <span>UX</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/familiario.webp" alt="Tablero del juego Familiario con instrucciones y figuras de familia">
          <figcaption>Familiario <span>Juego museo DDHH</span></figcaption>
        </figure>
      </article>

      <article>
        <figure>
          <img src="img/portaencendedores.webp" alt="Portaencendedores de cuero amarillo y celeste con argollas">
          <figcaption>Portaencendedores <span>Marroquinería</span></figcaption>
        </figure>
      </article>
    </section>
  </main>

  <!-- PIE DE PÁGINA -->
  <footer id="contacto">
    <p><span>sof.me</span><span aria-hidden="true"></span><span>concepto visual</span></p>
    <!-- La franja que se desplaza: el JavaScript repite este texto muchas veces -->
    <a href="#contacto">hablemos :)</a>
  </footer>

  <!-- Cursor personalizado (espada) -->
  <img id="cursor" src="img/espada.png" alt="" aria-hidden="true">

</body>
</html>

´´´css

/* ==========================================================
   1. FUENTES
   @font-face le enseña al navegador dónde está cada tipografía.
   ========================================================== */
@font-face { font-family: "Blink";      src: url("../fonts/BlinkMacSystemFont.ttf"); }
@font-face { font-family: "JRUG";       src: url("../fonts/JRUG_PUNK.ttf"); }
@font-face { font-family: "Poti";       src: url("../fonts/poti.ttf"); }
@font-face { font-family: "Mieszkanie"; src: url("../fonts/mieszkanie9.otf"); }
/* Fuente pequeña solo con los caracteres braille de los dibujos (basada en DejaVu Sans) */
@font-face { font-family: "Braille";    src: url("../fonts/braille.ttf"); }

/* ==========================================================
   2. VARIABLES
   Cambias un valor aquí y se actualiza en toda la página.
   ========================================================== */
:root {
  /* #000000 al 50 % de opacidad: es el único color de toda la página */
  --color: rgb(0 0 0 / 50%);
  --color-suave: rgb(0 0 0 / 15%);   /* negro al 15 %: logo y estrella, como en tu Figma */
  --negro: #000;                     /* negro al 100 %: tipografía JRUG y franja "hablemos" */
  --fondo: #fff;

  --fuente-texto: "Blink", system-ui, sans-serif;     /* menú, subtítulos, "concepto visual" */
  --fuente-logo: "Poti", cursive;                     /* logo sof.me */
  --fuente-titulos: "JRUG", cursive;                  /* nombres de proyectos y texto inclinado */
  --fuente-hablemos: "Mieszkanie", cursive;           /* franja "hablemos :)" */
  --fuente-braille: "Blink", "Braille", monospace;    /* dibujos ASCII: Blink, y "Braille" para los puntos */
}

/* ==========================================================
   3. BASE (versión móvil primero)
   ========================================================== */
/* Al hacer clic en un enlace del menú (#proyectos, #contacto...), la página se desliza
   suavemente hasta ahí en vez de saltar. Solo si la persona no pidió "reducir movimiento". */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

body {
  margin: 0;
  background: var(--fondo);
  color: var(--color);
  font-family: var(--fuente-texto);
}

a {
  color: inherit;
  text-decoration: none;
}

/* Encabezado */
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 1rem;
}

h1 {
  margin: 0;
  font: 400 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

nav {
  display: flex;
  gap: 1.2rem;
  font-size: 0.8rem;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

nav a:hover {
  text-decoration: underline;   /* el subrayado que se ve en tu diseño */
}

/* Banner de flores: ocupa todo el ancho y se recorta con object-fit */
main > img {
  display: block;
  width: 100%;
  height: 20vw;
  object-fit: cover;
  opacity: 0.5;                 /* las flores se ven al 50 % */
}

/* Introducción: dibujos braille y texto inclinado */
#sobre-mi {
  position: relative;
  height: 100vw;
}

#sobre-mi pre {
  position: absolute;
  margin: 0;
  white-space: pre;             /* respeta los saltos de línea y los espacios */
  font-family: var(--fuente-braille);
  letter-spacing: -0.085em;     /* ajusta el ancho de cada celda braille al de tu Figma */
  user-select: none;
}

/* El tamaño de letra y el interlineado están calculados para que cada dibujo mida lo mismo que en tu Figma */
#sobre-mi pre:first-of-type {
  left: 3vw;
  top: 52vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi pre:last-of-type {
  right: 3vw;
  top: 6vw;
  font-size: 2.8vw;
  line-height: 1.125;
}

#sobre-mi p {
  position: absolute;
  left: 50%;
  top: 47vw;
  margin: 0;
  white-space: nowrap;
  transform: translate(-50%, -50%) rotate(-13deg);  /* centrado y luego inclinado */
  font: 0.8rem var(--fuente-titulos);
  color: var(--negro);
}

/* Sombra suave debajo del texto, solo al pasar el cursor.
   Valores: desplazamiento horizontal, vertical, desenfoque y color. */
#sobre-mi p a {
  transition: text-shadow 0.3s;
}

#sobre-mi p a:hover {
  text-shadow: 0 0.4em 0.4em rgb(0 0 0 / 35%);
}

/* Cada dibujo guarda dos versiones (los dos <span>) una encima de la otra.
   Por defecto se ve la estrella; con el mouse encima aparece la espiral. */
#sobre-mi pre span {
  transition: opacity 0.25s;
}

#sobre-mi pre span:last-child {
  position: absolute;           /* se coloca encima de la estrella */
  top: 0;
  left: -0.647em;               /* quita la celda en blanco que tiene la espiral a la izquierda */
  opacity: 0;                   /* invisible hasta el hover */
}

#sobre-mi pre:hover span:first-child { opacity: 0; }
#sobre-mi pre:hover span:last-child  { opacity: 1; }

/* Proyectos: en móvil van uno debajo del otro */
#proyectos {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1.5rem 4rem;
}

/* El h2 existe para los lectores de pantalla, pero no se ve en tu diseño */
#proyectos h2 {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}

figure {
  margin: 0;
}

figure img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  transform-origin: bottom;     /* crece desde el borde de abajo: no choca con el texto */
}

/* Al pasar el mouse, la imagen crece un poquito */
figure img:hover {
  transform: scale(1.05);
}

figcaption {
  margin-top: 0.5rem;
  font: 0.9rem var(--fuente-titulos);
  color: var(--negro);          /* el título (JRUG) va en negro 100 % */
}

figcaption span {
  display: block;
  color: var(--color);          /* el subtítulo (tipografía del sistema) va al 50 % */
  font: 0.8rem var(--fuente-texto);
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

/* Pie de página */
footer p {
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 2rem 0 5rem 1.5rem;
  font: 0.8rem/1 var(--fuente-texto);
  letter-spacing: -0.02em;
}

/* 1. el logo */
footer p span:first-child {
  font: 2rem/1 var(--fuente-logo);
  letter-spacing: 0.24em;
  color: var(--color-suave);
}

/* 2. la estrella, dibujada con CSS (un recorte en forma de estrella) */
footer p span:nth-child(2) {
  width: 0.9rem;
  height: 0.9rem;
  margin: 0.5rem 1rem 0;
  background: var(--color-suave);
  clip-path: polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* 3. "concepto visual" */
footer p span:last-child {
  margin-top: 0.7rem;
}

/* "hablemos :)" es una franja fija abajo de la pantalla.
   overflow: hidden recorta lo que se sale, y la pista adentro se desplaza. */
footer a {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  z-index: 5;
  overflow: hidden;
  white-space: nowrap;
  font: 1.1rem/1.4 var(--fuente-hablemos);
  color: var(--negro);          /* la franja va en negro 100 % */
}

/* La pista (la crea el JavaScript) contiene el texto repetido */
footer a > span {
  display: inline-block;
  animation: desplazar 40s linear infinite;
}

/* Cada repetición del texto */
footer a > span > span {
  display: inline-block;
  padding-right: 3rem;          /* el espacio entre un "hablemos" y el siguiente */
}

/* La pista tiene el texto repetido dos veces: al moverse justo la mitad (-50%),
   queda igual que al principio y el salto no se nota, así parece infinito. */
@keyframes desplazar {
  to { transform: translateX(-50%); }
}

footer a:hover > span {
  animation-play-state: paused; /* se detiene al pasar el mouse */
}

/* Si la persona pidió menos movimiento en su sistema, no se mueve */
@media (prefers-reduced-motion: reduce) {
  footer a > span { animation: none; }
  figure img,
  #sobre-mi p a,
  #sobre-mi pre span { transition: none; }
}

/* El cursor de la espada solo existe en pantallas con mouse */
#cursor {
  display: none;
}

/* ==========================================================
   4. ESCRITORIO (pantallas de 700px o más)
   Las medidas están en vw (1vw = 1 % del ancho de la pantalla),
   así el diseño se escala igual que tu frame de Figma.
   ========================================================== */
@media (min-width: 700px) {

  header {
    display: grid;
    grid-template-columns: 31.4% 34.3% 1fr;   /* logo | menú | espacio vacío */
    gap: 0;                                   /* sin espacio entre columnas */
    height: 8vw;
    padding: 0;
  }

  h1 {
    margin: 1.1vw 0 0 6.8vw;
    font-size: 3.74vw;
  }

  nav {
    grid-column: 2;
    justify-content: space-between;
    padding-top: 1.15vw;
    font-size: 1.38vw;
  }

  main > img { height: 6.24vw; }

  /* Introducción */
  #sobre-mi { height: 54.5vw; }

  #sobre-mi pre:first-of-type {
    left: 2.7vw;
    top: 20.6vw;
    font-size: 1.389vw;         /* 24px de un frame de 1728px de ancho */
    line-height: 1.125;
  }

  #sobre-mi pre:last-of-type {
    right: 3.4vw;
    top: 5.6vw;
    font-size: 1.389vw;
    line-height: 1.125;
  }

  #sobre-mi p {
    left: 49.8%;
    top: 19.7vw;
    font-size: 1.05vw;
  }

  /* Proyectos: cada uno se coloca con porcentajes sobre el contenedor,
     usando las posiciones medidas en tu Figma */
  #proyectos {
    display: block;
    position: relative;
    padding: 0;
    aspect-ratio: 1459 / 1747;   /* altura total de la sección */
  }

  #proyectos article {
    position: absolute;
  }

  #proyectos article:nth-of-type(1) { left: 9.7%;  top: 0;     width: 33.9%; }  /* Emu Ginger */
  #proyectos article:nth-of-type(2) { left: 61.6%; top: 8.8%;  width: 28%; }    /* Between Ends */
  #proyectos article:nth-of-type(3) { left: 15.8%; top: 45.7%; width: 23%; }    /* Familiario */
  #proyectos article:nth-of-type(4) { left: 53.5%; top: 69.3%; width: 30.8%; }  /* Portaencendedores */

  figcaption {
    margin-top: 0.8vw;
    font-size: 1.06vw;
  }

  figcaption span { font-size: 1.14vw; }

  footer { height: 18.8vw; }

  footer p {
    padding: 9.2vw 0 0 35.14vw;
    font-size: 1.09vw;
  }

  footer p span:first-child { font-size: 3.74vw; }

  footer p span:nth-child(2) {
    width: 1.4vw;
    height: 1.45vw;
    margin: 0.69vw 1.95vw 0 1.23vw;
  }

  footer p span:last-child { margin-top: 0.89vw; }

  footer a {
    bottom: 1vw;
    font-size: 1.28vw;
  }

  footer a > span > span { padding-right: 6.9vw; }
}

/* ==========================================================
   5. CURSOR DE ESPADA
   Solo si el dispositivo tiene un mouse (no en celulares).
   ========================================================== */
@media (hover: hover) and (pointer: fine) {

  body,
  a {
    cursor: none;               /* oculta el cursor real */
  }

  #cursor {
    display: block;
    position: fixed;            /* se mueve respecto a la ventana */
    top: 0;
    left: 0;
    width: 85px;                /* la imagen está hecha al doble (170px) para verse nítida */
    opacity: 0;                 /* invisible hasta que se mueva el mouse */
    pointer-events: none;       /* los clics pasan a través de la espada */
    z-index: 9999;
  }
}

´´´script

// ============================================================
// 1. FRANJA "hablemos :)" QUE SE DESPLAZA (marquee)
// ============================================================
// El HTML solo tiene el texto una vez. Aquí lo repetimos para llenar la pantalla.
const franja = document.querySelector('footer a');
const texto = franja.textContent.trim();

franja.setAttribute('aria-label', texto);   // los lectores de pantalla leen "hablemos :)" una sola vez
franja.textContent = '';                    // vaciamos el enlace

const pista = document.createElement('span');
pista.setAttribute('aria-hidden', 'true');  // las copias son solo decoración

// 24 copias = dos grupos iguales de 12. El CSS mueve la pista justo la mitad (-50%),
// y como las dos mitades son idénticas, al reiniciar no se nota el salto.
for (let i = 0; i < 24; i++) {
  const copia = document.createElement('span');
  copia.textContent = texto;
  pista.append(copia);
}
franja.append(pista);

// ============================================================
// 2. CURSOR DE ESPADA
// ============================================================
// Buscamos la imagen de la espada en el HTML (la que tiene id="cursor")
const cursor = document.querySelector('#cursor');

// Cada vez que el mouse se mueve, el navegador nos avisa con el evento "mousemove"
document.addEventListener('mousemove', (evento) => {
  cursor.style.opacity = 1;   // ahora sí se muestra

  // clientX y clientY son la posición del mouse en la ventana.
  // Con transform movemos la espada exactamente hasta ahí.
  cursor.style.transform = `translate3d(${evento.clientX}px, ${evento.clientY}px, 0)`;
});

// Si el mouse sale de la ventana, escondemos la espada
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0;
});
