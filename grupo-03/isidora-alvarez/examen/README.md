# **Bitácora de Examen:**

Isidora Álvarez

# **Descripción del Proyecto**

Portafolio web interactivo que refleja mi identidad como diseñadora industrial, integrando la materialidad de la madera y el mobiliario (como el banquito zapatero y la silla de madera), la fabricación textil  de contenedores, electrónica de taller, prototipado 3D y la programación de experiencias interactivas en la web.

# **Referencias Web de Inspiración**

> Bill Guo ([billguo.me](https://billguo.me/)) — Estructura de portafolios multidisciplinarios.
Qué tomo: los trabajos como colección de estampillas con borde perforado, serif grande en los títulos con etiquetas en mono mayúscula, y los filtros por categoría.

> Cindy Ly ([cindyly.design](https://www.cindyly.design/)) — Navegación visual y lúdica tipo escritorio.
Qué tomo: la portada con un objeto interactivo al centro, el dock flotante como navegación y las fotos y stickers que se arrastran en "sobre mí".

> Feather Computer ([feather.computer](https://feather.computer/)) — Organización táctil de espacio de taller y archivos.
Qué tomo: me gusto mucho la interactividad de la pagina, como se movían las cosas y su diseño. 

# **Nuevos referentes**

21st.dev — https://21st.dev/community/components	Miles de componentes de la comunidad (React, Tailwind)
Aceternity UI — https://ui.aceternity.com	Componentes animados y bloques para landings (React, Tailwind, Motion)
Motion Primitives — https://motion-primitives.com	Piezas de movimiento: texto, transiciones, scroll (React, Motion)
Skiper UI — https://skiper-ui.com	Componentes poco comunes, con parte gratuita (React)
Bencho — https://bencho.dev	Bloques interactivos y microinteracciones (React)
Shaders — https://shaders.com	Shaders abiertos (MIT), también para JavaScript sin framework, y editor gratuito
Designeer — https://designeer.xyz	Catálogo curado de referencias, recursos, herramientas y portafolios
mesh3d — https://mesh3d.gallery	Galería de sitios 3D (Three.js, WebGL)
save.design — https://save.design/explore	Galería de sitios que muestra qué tecnologías usan
Sitereel — https://sitereel.ai	Diseños con vista previa y el prompt de IA para generarlos


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

