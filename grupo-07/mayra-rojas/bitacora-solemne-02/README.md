# bitácora solemne-02
Sitio web para la fundación Amor de Garritas, que rescata y busca hogar para perros y gatos en situación de abandono o maltrato.

Mayra Rojas:

¿Qué hice en el sitio?
Header fijo (sticky) con logo, menú de navegación (Inicio, Nosotros, Donar) y botón "Adoptar". Se queda arriba mientras se hace scroll, y usé scroll-padding-top para que al hacer clic en un enlace la sección no quede tapada por el header.
Inicio: banner verde con el título y la bajada, y al lado un collage de fotos posicionadas con position: absolute y porcentajes.
Mascotas en adopción: tarjetas con foto, nombre, edad, sexo y botón "Conocer más". Usé flexbox con flex-wrap para que se acomoden solas.
¿Cómo adoptar?: los 4 pasos con número, ícono y flechas entre ellos.
¿Tienes dudas?, ¿Quiénes somos? y ¿Por qué es importante adoptar?: bloques de imagen + texto con colores beige y verde de la paleta.
Historias felices: carrusel con fotos de "antes" y "después" de animales adoptados.
Footer con contacto, enlaces y redes sociales.
Diseño responsive. En escritorio todo está en rem y el tamaño base escala con el ancho de la pantalla (font-size: calc(100vw / 119)), así el diseño se mantiene proporcional al de Figma. En pantallas más chicas el tamaño pasa a ser fijo y los bloques se reordenan: el collage pasa abajo del banner, las tarjetas pasan a 2 y luego a 1 por fila, y los pasos quedan uno bajo otro.
Los textos y las fotos del sitio son de la fundación, y los colores y tipografías son los del diseño.

¿Qué dificultades tuve y cómo las resolví?

Que el diseño de escritorio se viera igual al de Figma. Al principio mis medidas en píxeles no se adaptaban a distintos tamaños de pantalla. Lo resolví pasando todo a rem y haciendo que el font-size del html dependiera del ancho de la ventana, y después ajustando bloque por bloque comparando con el diseño.
2. El responsive. Fue lo más largo, porque había que revisar cada sección en tres anchos distintos. Lo hice solo con flexbox y media queries, cambiando flex-direction, flex-wrap y los tamaños de imagen. Fui probando en el navegador achicando la ventana y corrigiendo lo que se rompía.
3. El carrusel de historias felices. Esta fue la parte que más me costó y no la hice yo: la resolvió mi compañera. Yo intenté armarlo, pero no logré que las historias cambiaran y que además se pudiera avanzar con las flechas.
Las 3 historias están una sobre otra (position: absolute) con opacity: 0.
Una animación @keyframes les cambia la opacidad cada cierto tiempo, y con animation-delay (0s, 3s y 6s) se van turnando solas.
Las flechas son enlaces a #historia1, #historia2 y #historia3, y con la pseudo-clase :target la historia elegida se muestra y detiene la animación.
Con :hover en el carrusel la animación se pausa para poder leer.
Entender cómo funciona esto me sirvió harto, aunque la solución final fue de ella.

¿Qué aprendí?

A estructurar una página con secciones claras en HTML y a ponerles clases con nombres que se entiendan, porque después en el CSS es más fácil encontrar todo.
A usar flexbox en serio y a combinarlo con media queries para que una misma página funcione en computador y celular.
Que usar rem y no px hace mucho más simple escalar un diseño completo.
Que hay cosas que parecen necesitar JavaScript, como un carrusel, y se pueden hacer solo con CSS usando :target y @keyframes.
Que hay que probar y revisar constantemente: cambiar algo en un lugar a veces rompe otro, y la forma más rápida de darse cuenta es mirar el resultado en el navegador a cada paso.
A trabajar en equipo, dividir las partes difíciles y entender el código de la compañera. Además de adecuarnos a resolver rápidamente sin nuestra tercera compañera que

