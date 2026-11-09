# between ends

Sitio single page del festival ficticio **between ends** (07, 08 y 09 de noviembre, Santiago). Está hecho con HTML, CSS y un poco de JavaScript, a partir de un diseño en Figma para escritorio (1440 px).

> **Cómo abrirlo:** descarga el repositorio completo y abre `index.html` en el navegador. Todos los archivos (CSS, tipografía e imágenes) deben quedar en la misma carpeta.

## Contenido del repositorio

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura del sitio: `header`, `main` con sus `section`, y `footer`. |
| `style.css` | Todos los estilos. Usa flexbox, unidades `rem` y `%`, y cada regla está comentada en español. |
| `ProggyClean.ttf` | Tipografía del diseño, cargada con `@font-face`. |
| `logotipo.png` | Logo de between ends. |
| `img1.png` a `img22.png` | Portadas de álbumes que se mueven en la parte superior. |
| `redbull.png`, `santander.png`, `cocacola.png` | Logos de auspiciadores del footer. |

---

## Proceso 

> Como grupo muchos de nuestros tiempos no calzaban, ya sea por trabajo, universidad, entre otros. Cada una iba revisando el código y probándolo a medida que se le iba haciendo un cambio, trabajamos súper 

### El sitio

Entre todos pasamos el diseño de Figma a un sitio funcional. Lo que se hizo, en orden:

1. **Diseño en Figma.** Hicimos el diseño en conjunto, en versión de escritorio de 1440 px, y lo usamos como guía para construir el sitio.
2. **Estructura en HTML.** Armamos el `header` con el menú, el `main` con las secciones (banner, portadas, line up, boletería y playlist) y el `footer`. En este caso yo me encargué del footer.
3. **Estilos en CSS.** Se escribió una hoja externa con selectores de clase. Todo el diseño usa flexbox, y los tamaños están en `rem` y `%`.
4. **Tipografía y colores.** Usamos la fuente ProggyClean y la paleta del grupo: azul `#1576BB`, morado `#450B69`, blanco y negro.
5. **Line up.** Cada día tiene una barra de fecha y tres columnas de escenarios (Main Stage, Stage 2 y Warehouse), con fondo en degradado.
6. **Portadas con movimiento.** Las 22 portadas rebotan dentro de su cuadro, como el logo de un DVD, y no salen de él. Programamos el script para que respete la configuración de accesibilidad “Reducir movimiento” del dispositivo: si la persona la tiene activada, las portadas quedan quietas. 
7. **Boletería.** Tres entradas con precio normal y con descuento, y botones de compra ubicados en zigzag como en el diseño.
8. **Playlist.** Reproductor de Spotify incrustado.
9. **Footer.** Botón de compra, menú, redes, contacto y logos de auspiciadores en blanco.
10. **Revisión final.** Revisamos el sitio con la rúbrica y corregimos detalles (explicados abajo).

### ¿Qué dificultades tuve y cómo las resolví?

| Dificultad | Causa | Cómo se resolvió |
|---|---|---|
| La página se veía sin estilos (letra Times y enlaces azules). | El archivo CSS se llamaba `style-2.css`, pero el HTML lo buscaba como `style.css`. | Renombramos el archivo a `style.css`. Aprendimos que el nombre del archivo y el `href` deben coincidir exactamente. |
| Las portadas se salían de su zona, pasaban sobre el Line Up y la página se movía hacia los lados. | Para que el movimiento tenga un borde donde rebotar, el cuadro necesita `position`, y mi primera versión usaba solo flexbox. | Usamos `position: relative` en `.covers`, `position: absolute` en cada portada y `overflow: hidden` para cortar lo que se sale. (Esto lo consultamos con la IA) |
| Hice el cambio en una copia equivocada del código y "no pasaba nada". | Estaba editando un archivo distinto al que abría el navegador. | Comprobé qué archivo abría el navegador y recargué sin caché con Cmd + Shift + R. |
| El texto se veía muy pequeño. | ProggyClean es una fuente de píxeles y se ve más chica que otras con el mismo tamaño. | Subimos los `font-size` de los textos pequeños (artistas, menú, precios y footer). |
| Los colores no coincidían con los del grupo. | Los primeros colores se pusieron a ojo, mirando el PNG. | Reemplazamos todos por los cuatro colores de la paleta. |
| Los logos de auspiciadores eran negros sobre el fondo negro del footer. | Las imágenes originales eran oscuras. | Aplicamos `filter: brightness(0) invert(1)` para verlos blancos sin editar las imágenes. |
| La boletería no se parecía al diseño: los botones estaban separados de las entradas. | En el HTML original los botones estaban en otra sección. | Reorganizamos el HTML con filas (`.fila`) que contienen una entrada y un botón, para ubicarlos en zigzag con flexbox. Esta parte la hizo So jeje |
| Detalles al revisar con la rúbrica. | Quedaban un estilo `px` escrito directo en el HTML, y enlaces de compra con el año equivocado. | Movimos el redondeo del reproductor al CSS en `rem` y cambiamos los enlaces de 2025 a 2026. |
| Para la entrega, el sitio tenía que abrir desde `index.html`. | El archivo se llamaba `index-corregido.html`. | Lo renombramos a `index.html` y subimos todos los archivos al repositorio. |

**Recursos que usé:** Claude (inteligencia artificial), la rúbrica del curso y el material de clases.

### Uso de inteligencia artificial

Usamos **Claude** (Anthropic) para dos cosas: escribir el CSS comentado a partir del diseño y el HTML, y agregar el movimiento a las portadas y corregir errores del código. El resultado no funcionó a la primera, así que hubo que probarlo, entender qué fallaba y pedir ajustes.

**Prompt 1 (CSS desde el diseño):**

> Adjunto png de mi diseño en Figma (escritorio de 1440 px) y mi HTML. Escribe el CSS para que la página se vea como el png. Usa solo flexbox, unidades rem y %. No uses grid, position ni frameworks. Comenta cada regla en español explicando qué hace, en lenguaje simple.

*Qué tuve que corregir:* el CSS venía con una fuente genérica (Courier) y colores aproximados, así que cambié la tipografía a ProggyClean y los colores a nuestra paleta. Además, subí los tamaños de letra porque se veían pequeños.

**Prompt 2 (portadas dentro del encuadre):**

> Le pedí que las portadas no se salieran del encuadre en la versión de escritorio, porque se movían por encima del Line Up.

*Qué tuve que corregir:* la solución que funcionó necesitaba `position`, que la consigna original no permitía. Tuve que entender por qué era necesario y dejarlo registrado. Además, al principio edité un archivo equivocado y por eso creí que no funcionaba.

**Prompt 3 (movimiento de las portadas):**

> No quiero que se salgan del encuadre en el desktop.

*Qué tuve que corregir:* Qué tuve que corregir: el movimiento funcionaba, pero las portadas se salían de su cuadro, pasaban por encima del Line Up y hacían que toda la página se moviera hacia los lados. Lo resolví dándole al contenedor `.covers` un `position: relative` y un alto fijo, a cada portada un `position: absolute`, y agregando `overflow: hidden` para que todo lo que se salga del cuadro se corte. Así las portadas rebotan solo dentro de su zona

### ¿Qué aprendí?

- **Flexbox:** cómo usar `justify-content`, `align-items`, `flex-wrap` y `gap` para ordenar secciones completas, y por qué siempre hay que dejar el CSS comentado.
- **Unidades `rem` y `%`:** escalan mejor que los píxeles y hacen que el diseño se adapte a distintos tamaños.
- **Cuándo se necesita `position`:** para ubicar elementos dentro de un cuadro y animarlos sin que se salgan.
- **Rutas y nombres de archivos:** una letra distinta en un nombre puede dejar el sitio sin estilos.
- **Especificidad en CSS:** cuando dos reglas tocan la misma propiedad, gana la más específica, no la que está más abajo.
- **Usar la IA con criterio:** Claude no ve mi carpeta ni mi navegador, así que hay que probar todo, revisar el resultado y explicar bien qué falla.

---
## Créditos

- Tipografía: ProggyClean.
- Portadas de álbumes y logos de marcas: usados solo con fines académicos; pertenecen a sus respectivos autores y marcas.
- Asistencia de IA: Claude (Anthropic), declarada en la bitácora.
