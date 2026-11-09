# Bitácora solemne-02
## Pagina web para Diseño Abierto
## ¿Qué hice en el sitio?
Como parte del equipo, me encargué de la integración y correcta aplicación de la identidad tipográfica del proyecto. Específicamente, revisé el prototipo en Figma para identificar los pesos y estilos exactos de la fuente **Infra**, y configuré las reglas `@font-face` en CSS junto con la jerarquía de textos (títulos, subtítulos y párrafos) para asegurar que la apariencia visual fuera totalmente coherente con el diseño original.

## ¿Qué dificultades tuve y cómo las resolví?
Una de las principales dificultades fue vincular correctamente toda la familia de archivos locales .otf en la hoja de estilos y hacer que el navegador interpretará de forma precisa los pesos tipográficos específicos indicados en el diseño (como regular, medium y light). Para resolverlo, consulté los materiales de apoyo de la asignatura y realicé una consulta asistida con IA para estructurar el código de las fuentes.

## Consulta IA: declarar y aplicar los pesos tipográficos de Infra
Prompt usado:
¿Cómo declaro correctamente en CSS mediante @font-face los archivos .otf de una tipografía local y cómo configuro los font-weight para usar distintos pesos como regular, medium y light?

Tengo un código HTML que contiene el texto de una composición tipográfica basada en una imagen de referencia. Necesito que, a partir de mi código, me ayudes a desarrollar el CSS para reproducir el diseño de la imagen lo más fielmente posible.
La composición utiliza diferentes familias tipográficas, tamaños, pesos, inclinaciones y colores. Para las fuentes, considera Manrope como alternativa a Infra, además de Holtwood One SC y Calistoga, disponibles en Google Fonts. Respeta la jerarquía visual, las proporciones y la distribución de los elementos de la referencia.
No tengo claro cómo estructurar el CSS para conseguir esta composición y adaptar los textos al espacio disponible. Por ello, necesito que me expliques cómo aplicar las propiedades necesarias para controlar la posición, el tamaño, el espaciado y la alineación de cada elemento, utilizando recursos como Flexbox, CSS Grid, clamp() y media queries cuando sean convenientes.
Mantén el HTML original siempre que sea posible y desarrolla el CSS en un archivo independiente. El diseño debe conservar la mayor fidelidad posible a la referencia en pantallas grandes y adaptarse a tabletas y celulares sin perder legibilidad ni jerarquía visual.
El objetivo es comprender cómo trasladar una propuesta tipográfica a una estructura funcional mediante HTML y CSS, obteniendo un resultado responsive que pueda visualizar y ajustar en Visual Studio Code con Live Server.
Imagen de referencia: <img width="996" height="720" alt="image" src="https://github.com/user-attachments/assets/98bbc13a-5ce2-455b-b992-7f5c13b16fab" />

**Códigos antes:**

**Código antes:**
```css
body {
    font-family: sans-serif;
}



Prompt usado:
¿Cómo declaro correctamente en CSS mediante @font-face los archivos .otf de una tipografía local y cómo configuro los font-weight para usar distintos pesos como regular, medium y light?
Código después:
CSS
@font-face {
    font-family: 'Infra';
    src: url('tipografias/InfraRegular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Infra';
    src: url('tipografias/InfraMedium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
}
Segundo codigo (tipografías variadas):
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --rojo: #A60303;
    --azul: #6B80BF;
    --gris: #252022;
    --negro: #000000;
    --blanco: #ffffff;
}

body {
    min-height: 100vh;
    background: var(--blanco);
    font-family: "Manrope", sans-serif;
}

/* Lienzo responsive */

.poster {
    width: min(100%, 1160px);
    min-height: 100vh;
    margin: 0 auto;
    padding: clamp(24px, 5vw, 60px) clamp(16px, 4vw, 46px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: clamp(12px, 2vw, 24px);
}

/* Cada línea organiza sus palabras sin superponerlas */

.line {
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: clamp(5px, 1vw, 12px);
    row-gap: 4px;
    width: 100%;
    min-width: 0;
    text-align: center;
}

/* Evita cortes internos extraños en las palabras */

.line span {
    display: inline-block;
    max-width: 100%;
    min-width: 0;
    line-height: 1.05;
    overflow-wrap: anywhere;
}

/* =====================================================
   LÍNEA 1: “Mención de DISEÑO”
   ===================================================== */

.line-one {
    align-items: baseline;
    gap: clamp(3px, 0.6vw, 8px);
}

/* Comillas */

.quote {
    font-family: "Manrope", sans-serif;
    font-size: clamp(28px, 7vw, 76px);
    font-weight: 800;
    color: var(--gris);
    line-height: 0.7 !important;
}

/* Mención: alternativa a Infra Regular */

.mencion {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 400;
    letter-spacing: -0.055em;
    color: var(--negro);
}

/* de: alternativa a Infra Light Italic */

.de {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 300;
    font-style: italic;
    letter-spacing: -0.055em;
    color: #42373B;
}

/* DISEÑO: alternativa a Infra Black */

.diseno {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 800;
    letter-spacing: -0.055em;
    color: var(--rojo);
}

/* =====================================================
   LÍNEA 2: GRÁFICO
   ===================================================== */

.line-two {
    align-items: center;
}

.grafico {
    font-family: "Holtwood One SC", serif;
    font-size: clamp(42px, 8.5vw, 96px);
    font-weight: 400;
    letter-spacing: -0.035em;
    color: var(--azul);
    line-height: 1 !important;
}

/* =====================================================
   LÍNEA 3: Ramos: Taller Editorial
   ===================================================== */

.line-three {
    gap: clamp(5px, 1vw, 12px);
}

/* Ramos: Infra Light */

.ramos {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 300;
    letter-spacing: -0.055em;
    color: var(--negro);
}

/* Taller: Infra Regular */

.taller-one {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 400;
    letter-spacing: -0.055em;
    color: var(--gris);
}

/* Editorial: Infra Light Italic */

.editorial {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 300;
    font-style: italic;
    letter-spacing: -0.055em;
    color: var(--gris);
}

/* =====================================================
   LÍNEA 4: y Publicaciones, Taller
   ===================================================== */

.line-four {
    gap: clamp(5px, 1vw, 12px);
}

/* y: Infra Light */

.y {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 300;
    color: var(--negro);
}

/* Publicaciones: Calistoga */

.publicaciones {
    font-family: "Calistoga", serif;
    font-size: clamp(30px, 6.5vw, 72px);
    font-weight: 400;
    letter-spacing: -0.035em;
    color: var(--rojo);
}

/* Taller: Infra ExtraBold */

.taller-two {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 800;
    letter-spacing: -0.055em;
    color: var(--negro);
}

/* =====================================================
   LÍNEA 5: Diseño Gráfico II
   ===================================================== */

.line-five {
    gap: clamp(5px, 1vw, 12px);
}

/* Diseño: Infra Light Italic */

.diseno-final {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 300;
    font-style: italic;
    letter-spacing: -0.055em;
    color: var(--negro);
}

/* Gráfico II: Infra Medium */

.grafico-final {
    font-size: clamp(27px, 6.8vw, 76px);
    font-weight: 500;
    letter-spacing: -0.055em;
    color: var(--negro);
}

Sugerencias aceptadas: Declarar cada variante de la fuente en el CSS especificando con precisión su font-family, src, font-weight y font-style para aplicarlas mediante clases y selectores en todo el sitio.
Recursos utilizados:
Chat GPT
Gemini

Sugerencias aceptadas: Declarar cada variante de la fuente en el CSS especificando con precisión su font-family, src, font-weight y font-style para aplicarlas mediante clases y selectores en todo el sitio.
Recursos utilizados:
Apuntes de clases sobre estilos CSS y tipografías.
Material de apoyo oficial: Propiedades de texto y fuentes.
Documentación de MDN Web Docs (@font-face).
Lenguaje CSS (Manz.dev).
¿Qué aprendí?
Aprendí a gestionar tipografías personalizadas en un sitio web mediante código CSS puro, comprendiendo la importancia de alinear los pesos tipográficos con el sistema de diseño establecido en Figma.
Aprendí a realizar diferentes estilos en tipografías a partir de IA, lo cual parecia ademas de imposible en un principio, demasiado trabajo. 

