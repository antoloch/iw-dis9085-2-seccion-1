# **Bitácora de Examen:**

Isidora Álvarez

# **Descripción del Proyecto**

Portafolio web interactivo que refleja mi identidad como diseñadora industrial, integrando la materialidad de la madera y el mobiliario (como el banquito zapatero y la silla de madera), la fabricación textil  de contenedores, electrónica de taller, prototipado 3D y la programación de experiencias interactivas en la web.

# **Referencias Web de Inspiración**

Bill Guo ([billguo.me](https://billguo.me)): estructura de portafolios multidisciplinarios

**Qué tomo:** los trabajos como colección de estampillas, la jerarquía tipográfica y los filtros por categoría.

**Dónde lo uso:** cada proyecto es una estampilla con borde perforado, una foto al centro y un pie con título y tipo de proyecto. Las estampillas están levemente inclinadas, como si estuvieran pegadas a mano.
> Hover de las estampillas: al pasar el mouse la estampilla se endereza, sube, crece un poco y el borde se pone azul río. Con eso el clic se siente como "tomar" la estampilla para abrir el proyecto.
* **Lo que cambié:** él muestra las estampillas en grilla. Yo las dejé en una sola fila con scroll horizontal, para que se recorran como una tira de estampillas.

### Cindy Ly ([cindyly.design](https://www.cindyly.design/)): navegación visual y lúdica tipo escritorio

**Qué tomo:** la portada con un objeto interactivo, el dock flotante y los elementos que se pueden mover.

**Dónde lo uso:**
* **Portada:** a la derecha del titular está la ventana `pieza-interactiva`, que muestra la foto de un proyecto. El botón "ver otra ↻" la cambia por otra y, al hacer clic en la foto, se abre ese proyecto. Es el "objeto para jugar" de entrada.
  > Dock flotante: abajo de la pantalla hay un dock fijo con tres accesos (trabajos, sobre mí y contacto). Se marca en azul según la sección en que estás y muestra el nombre al pasar el mouse. En mobile reemplaza al menú.
  > Elementos arrastrables: en la portada y en "sobre mí" las ventanas (`notas.txt`, `sobre-mi.txt`, `contacto`, `explorando.txt`, `fuera-del-taller.txt`) se pueden arrastrar con el mouse o el dedo, como las fotos y stickers de su sitio.
  > Lo que no tomé: el llavero colgante de su portada. Lo descarté porque se parecía demasiado a su trabajo (ver "Uso de IA").

### Feather Computer ([feather.computer](https://feather.computer/)): organización táctil de espacio y archivos

**Qué tomo:** la interactividad de la página, cómo se mueven las cosas y la idea de ordenar el contenido como archivos en un escritorio.

**Dónde lo uso:**
* **Contenido como archivos:** cada bloque de texto es una ventana con nombre de archivo en la barra superior (`notas.txt`, `sobre-mi.txt`, `descripcion.txt`, `foto-01.jpeg`, `boceto-01.jpg`). Las habilidades también son "archivos": `madera.txt`, `prototipado.txt`, `web.txt`, `electronica.txt`.
* **Barra de menú tipo sistema operativo:** arriba hay una barra con mi nombre, los enlaces y un reloj con la fecha y la hora, como la barra de un computador.
* **Movimiento:** las ventanas se pueden tomar y soltar, se traen al frente al tocarlas y vuelven a su lugar con doble clic. Al hacer scroll los elementos aparecen de forma suave y las páginas cambian con un fundido.
* **Vista de cada proyecto:** el detalle también se arma como un escritorio con varias ventanas: la foto principal, la ficha técnica, la descripción, la galería y la fila de "proceso — bocetos y croquis".

# **Nuevos referentes**

Estos referentes los sumé para la versión 2, más cercana a la estética Y2K y a la web experimental.

| Referente | Qué es | Dónde se usa en el portafolio |
|---|---|---|
| Aceternity UI — [ui.aceternity.com](https://ui.aceternity.com) | Componentes animados y bloques para landings (React, Tailwind, Motion) | Inspiró las **ventanas flotantes**: tarjetas con sombra profunda que reaccionan al hover (el borde se pone azul y la sombra crece) y que se pueden arrastrar. |
| Motion Primitives — [motion-primitives.com](https://motion-primitives.com) | Piezas de movimiento: texto, transiciones, scroll (React, Motion) | Inspiró el **titular dinámico**: la última palabra de "diseño para lo que se *toca / usa / habita / sostiene*" sale y entra con desenfoque y fundido. También las apariciones al hacer scroll y el fundido al cambiar de página. |
| 21st.dev — [21st.dev/community/components](https://21st.dev/community/components) | Miles de componentes de la comunidad (React, Tailwind) | *por completar* |
| Skiper UI — [skiper-ui.com](https://skiper-ui.com) | Componentes poco comunes, con parte gratuita (React) | *por completar* |
| Bencho — [bencho.dev](https://bencho.dev) | Bloques interactivos y microinteracciones (React) | *por completar* |
| Shaders — [shaders.com](https://shaders.com) | Shaders abiertos (MIT), también para JavaScript sin framework, y editor gratuito | *por completar* |
| Designeer — [designeer.xyz](https://designeer.xyz) | Catálogo curado de referencias, recursos, herramientas y portafolios | *por completar* |
| mesh3d — [mesh3d.gallery](https://mesh3d.gallery) | Galería de sitios 3D (Three.js, WebGL) | *por completar* |
| save.design — [save.design/explore](https://save.design/explore) | Galería de sitios que muestra qué tecnologías usan | *por completar* |
| Sitereel — [sitereel.ai](https://sitereel.ai) | Diseños con vista previa y el prompt de IA para generarlos | *por completar* |

> Nota: el portafolio está hecho en HTML, CSS y JavaScript sin frameworks. De estas librerías tomé ideas visuales y de movimiento, no código: no usé React ni Tailwind.

# **Link del Proyecto**

Figma: https://www.figma.com/design/ADbrbFWVOeJkBakvKcFPj6/Portafolio?node-id=13-2&t=e0T13zWepxYbe2lY-1

# **Uso de IA**

* **Para qué la usé:** me ayudó a ver qué ideas podía usar a partir de mis referentes y mis gustos, a elegir una paleta con mis imágenes de Pinterest.
* **Qué ajusté y por qué:**
  - Cambié el llavero colgante de la portada que quería hacer al inicio, porque se parecía demasiado al de Cindy Ly, y no quería copiarla.
  - Elegí la paleta A porque me gusta el azul y era la más parecida a mis gustos.
  - Pedí agregar el junk journaling, porque son cosas que me gustan y hacen que el portafolio se sienta mío.

### Uso de IA: estampillas

* **Prompt:**
* "Ayúdame a crear una estampilla en Figma para este proyecto, con borde perforado, inclinada como en Bill Guo, con estado hover y versión desktop y mobile."
* **Qué me entregó:** ayuda para hacer la idea que tenía de usar estampillas:
  * Un componente con auto layout, con variantes para desktop y mobile y los estados Default, Hover y Pressed.
  * El borde perforado, hecho con un trazo punteado del color del fondo y extremos redondos que "muerden" el borde blanco.
  * Propiedades para cambiar el número, la categoría, el título y el año desde el panel derecho.
  * Interacciones en el prototipo: cambia al pasar el mouse y al apretar.
* **Qué ajusté y por qué:** la inclinación se la doy a cada estampilla por separado, para que todas queden distintas, como en mi referente.

# ** TRABAJOS A USAR**
(no estoy segura al 100% de usar todos estros trabajos)

> Banca zapatero
> Banca de madera
> Lampara
> Intervención Artística
> Silla de madera
> Bolso
> Sinte
> Comedero para mascotas
> Interacción Digital: Multirealidades.sys y experimentos web en GitHub Pages (Three.js, MediaPipe, MQTT).

# **Tipografias**

> Instrument Serif: [fonts.google.com/specimen/Instrument+Serif](https://fonts.google.com/specimen/Instrument+Serif?preview.script=Latn)

> DM Sans: [fonts.google.com/specimen/DM+Sans](https://fonts.google.com/specimen/DM+Sans?preview.script=Latn)

> DM Mono: [fonts.google.com/specimen/DM+Mono](https://fonts.google.com/specimen/DM+Mono?preview.script=Latn)


# **Actualización post Avance 1**

### Versión 2: cambio de diseño

Después del Avance 1 hice una **versión 2** del portafolio y cambié el diseño hacia una estética más **Y2K**. Ahora la interfaz se arma con ventanas flotantes estilo macOS clásico, con barra superior, botones y nombre de archivo (`notas.txt`, `sobre-mi.txt`). También sumé un dock flotante para navegar, destellos y etiquetas tipo píldora.

Lo que **mantuve** fueron las estampillas de los proyectos, con su borde perforado, porque son la base de cómo quiero mostrar mis trabajos. En esta versión van todas en una sola fila con scroll horizontal.

# **Nueva paleta de colores**
<img width="965" height="295" alt="image" src="https://github.com/user-attachments/assets/6cb5d04f-e461-40c3-b96c-7e92e901152f" />

### Feedback aplicado

En la revisión del Avance 1 recibí una sola observación y la apliqué: mover la sección **"Sobre mí"** al final de la página. Ahora el sitio parte con la portada, sigue directo con los trabajos y cierra con "Sobre mí" y el contacto. Así quien visita ve primero los proyectos y conoce a la autora después, lo que le da más protagonismo al portafolio y hace más claro el recorrido.

### Feedback no aplicado

También me sugirieron asegurar que el diseño y los componentes se mantuvieran al exportar la página como PDF. Decidí **no aplicar** esta sugerencia.

La profesora y la rúbrica del curso piden un desarrollo **interactivo y web funcional, publicado en GitHub Pages**. El portafolio se diseñó para usarse en el navegador:

* las ventanas flotantes se arrastran;
* el titular cambia de palabra solo;
* las estampillas de los proyectos se deslizan en una fila horizontal;
* hay filtros por categoría;
* la página cambia con transiciones al abrir cada proyecto.

Un PDF es estático y no puede mostrar nada de esto. Adaptar el sitio para que se vea bien impreso o exportado significaría diseñar pensando en un formato que el encargo no pide y que va en contra de lo interactivo del proyecto. Por eso preferí dedicar el tiempo a que la experiencia web funcione bien en desktop y en mobile.

### Uso de IA

Hasta esta fecha usé IA solo como **soporte técnico para programar y calibrar las estampillas de los proyectos**.Ya que anterior mente tenia las estampillas en 3 filas y no me gustaba como se veia. El objetivo era que se movieran horizontalmente de forma fluida, en una sola fila, con el mouse, la rueda y el touch. La dirección de arte, la estructura del sitio, la selección de proyectos y las decisiones de diseño son mías.

<img width="373" height="582" alt="image" src="https://github.com/user-attachments/assets/b7d48b51-0b16-4b87-b250-bc4fd9b2d51f" />

<img width="837" height="495" alt="image" src="https://github.com/user-attachments/assets/f2e5ee2f-5978-4862-9e4f-a2d1b6227f07" />

