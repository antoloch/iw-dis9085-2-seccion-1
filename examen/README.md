# Avance 1

## Links

- **Figma:** <https://www.figma.com/design/AMrK5AeX5KmZy4gzNrCmEm/examen-avance-1?node-id=0-1&t=OT3o6Z9XUIJ4prtH-1>

## 1. Descripción del proyecto

Mi proyecto es mi **portafolio personal** como diseñadora de producto, con un espacio de blog propio. El portafolio reúne cuatro trabajos de la carrera por ahora:

| # | Proyecto | Área | Año |
|---|---|---|---|
| 1 | El tincado: sintetizador de cuatro pasos | Electrónica aplicada al diseño | 2026 |
| 2 | Vitrina Sónica: sintetizador modular | Electrónica aplicada al diseño | 2026 |
| 3 | Torno Patero: fabricación de herramienta y torneado | Diseño de producto | 2024 |
| 4 | Réplica Silla Élé: ebanistería | Diseño de producto | 2025 |

**La idea.** Mi portafolio en PDF es sobrio y cerrado. Para la web quiero algo más personal: un sitio que sea mi portafolio y, a la vez, **un espacio propio tipo blog** que pueda ir editando y cambiando a medida que avanzo, con nuevos proyectos, procesos, ideas y notas. Quiero que se sienta mío y no como una vitrina terminada.

Visualmente busco colores llamativos, una tipografía con carácter y **mucha animación**: que se pueda interactuar con el sitio, que las cosas respondan al mouse y que moverse por él sea parte de la experiencia, sin perder una interfaz clara y agradable de usar. Cada proyecto tiene su propio color, y al pasar el mouse por una tarjeta el sitio se tiñe de ese color. Se que esto puede cambiar pero por ahora esa es mi propuesta.

El contenido (textos, fotos y datos) es real y viene de mis proyectos de la carrera, sin lorem ipsum. 

**Páginas previstas:** Inicio, Trabajo (portafolio), plantilla de Proyecto (una por cada trabajo), Blog (entradas que voy agregando) y Sobre mí.


## 2. Referentes

### Emele Collab — https://emelecollab.com
Lo que me gustó fue el **desenfoque y el movimiento** de las imágenes, y que el sitio se sienta vivo al recorrerlo. También me llamó la atención que se pueda ver el trabajo en tres vistas (lista, grilla y galería) y que el botón de contacto abra directamente un correo.
**Qué tomo:** el efecto de movimiento y desenfoque en las imágenes de los proyectos, y el botón de contacto que abre el correo (`mailto:`).

### Readymag — https://readymag.website/u2179522220/6089381/
Me encantó por su **interacción** y por sus colores. Su paleta es muy distinta a la que yo quiero.

**Qué tomo:** la forma en que se interactúa con el contenido, no los colores.

### ilovecreatives — https://ilovecreatives.com
Es un sitio con muchos referentes de **colores, interacción y mezcla de información** (cursos, perfiles, tienda, artículos y una sección de sitios favoritos, todo en una sola portada con un índice de secciones). Lo uso como fuente de inspiración.

**Qué tomo:** ideas para combinar información de distinta naturaleza en una misma página sin que se vea desordenada, y referencias de color e interacción ya que mis proyectos no siguen una linea continua de apariencia.

### Referentes iniciales (exploración)
Antes de elegir estos tres, exploré también a Liam Young (tarjetas flotantes y filtros por categoría), HAWRAF y Mia Brooks (tipografía enorme y navegación mínima). De ahí vienen las ideas de tarjetas que se pueden mover y del titulo gigante en la portada.


## 3. Proceso de diseño

### Cómo llegué al concepto
1. Partí de mi portafolio en PDF, que usé para identificar qué hay dentro de mi trabajo: electrónica, prototipos y materiales.
2. Mi primera idea fue un sitio sobrio en blanco, negro y azul. Después decidí que no quería tomar tanto mi portafolio como referente: quería algo más cool, con colores llamativos y mucha interacción.
3. Entre tres direcciones (divertido, eléctrico,artístico) elegí **electrico**.
4. Más adelante cambié el enfoque del sitio: en vez de una vitrina de proyectos, quiero que sea más personal, con mi portafolio y un blog que pueda ir editando, y con mucha animación para poder interactuar con él.

### Colores

Uso un fondo muy oscuro con texto claro, y cinco colores de alta saturación que funcionan como señal: cada proyecto tiene el suyo, y se "enciende" cuando el cursor pasa por encima. Regla de uso: aproximadamente 80% Noche y Hielo, y los colores de proyecto solo como bloques grandes o estados de interacción, de a uno por vez.

| Rol | Nombre | Hex | Dónde se usa | Texto encima |
|---|---|---|---|---|
| Fondo | Noche | `#0A0A1F` | Fondo de todas las páginas, texto sobre colores claros | Hielo |
| Texto | Hielo | `#F2F3FF` | Texto principal, bordes de botones y chips | n/a |
| Proyecto 1, El tincado | Azul eléctrico | `#2B3BFF` | Hover de su tarjeta, fondo de su página | Hielo |
| Proyecto 2, Vitrina Sónica | Naranja neón | `#FF4A1C` | Hover de su tarjeta y del botón, fondo de su página | Noche |
| Proyecto 3, Torno Patero | Violeta | `#7A3CFF` | Hover de su tarjeta, chip de filtro activo | Hielo |
| Proyecto 4, Silla Élé | Lima ácido | `#C8FF2E` | Hover de su tarjeta, estado pressed del botón | Noche |
| Línea y bordes | Hielo al 20% | `#F2F3FF` a 20% de opacidad | Bordes de tarjetas, chips y separadores | //// |

Los contrastes de la última columna son entre el texto y el color de fondo, y están elegidos para que se lea bien: el texto claro va sobre azul y violeta, y el texto oscuro sobre naranja y lima, porque el claro no se lee sobre esos dos. El azul y el violeta tienen poco contraste sobre Noche, así que los uso solo como fondo de bloques y nunca como color de texto.

### Tipografías

Las tres familias son de Google Fonts, gratuitas y disponibles en Figma y en la web.

| Familia | Pesos | Uso | Por qué |
|---|---|---|---|
| [Unbounded](https://fonts.google.com/specimen/Unbounded) | Medium y Bold | Títulos, botones y títulos de tarjeta | Es ancha, redondeada y futurista: le da carácter al sitio. Es muy ancha, así que la uso solo en titulares y no en párrafos largos |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Regular | Párrafos y texto corrido | Es neutra y clara, y equilibra a Unbounded en lecturas largas |
| [DM Mono](https://fonts.google.com/specimen/DM+Mono) | Regular, en mayúsculas | Etiquetas pequeñas (`01 / ELECTRÓNICA / 2026`), años y categorías | Aporta un toque técnico, ligado a mi trabajo con electrónica |

**Escala tipográfica**

| Estilo | Fuente y peso | Desktop (1440) | Mobile (390) | Interlineado |
|---|---|---|---|---|
| Display | Unbounded Bold | 96 | 36 | 100% |
| H1 | Unbounded Bold | 56 | 28 | 105% |
| H2 | Unbounded Medium | 32 | 20 | 115% |
| H3 (título de tarjeta) | Unbounded Medium | 22 | 18 | 120% |
| Botón | Unbounded Medium | 16 | 14 | 100% |
| Cuerpo | DM Sans Regular | 18 | 16 | 150% |
| Cuerpo pequeño | DM Sans Regular | 15 | 14 | 150% |
| Etiqueta | DM Mono Regular | 12 | 11 | 100% |


