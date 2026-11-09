Bitácora de proceso solemne 02:
Tanto el html como el css lo hicimos en conjunto trabajando al mismo tiempo en live session de
vs code y repartiendonos tareas.

HTML: Lo desarrollamos completo antes de hacer el css.
- Fui la encargada de desarrollar la galéria de miniaturas de la página principal.
  En un principio no tuve mayores dificultades, ya que recordaba los códigos básicos
  que habíamos trabajado en clases. Una vez hecho el primero, repetí el código 24 veces más, cambiando
  el numero de cada imagen y look.

- Para resolver la distribución de imágenes, revisé el material de aprendizaje css que Natassja
  compartió por Discord:
  https://lenguajecss.com/css/grid/grid-template-areas/
  
  Pero no me sirvió mucho porque explica grid para cajas y textos, pero no para imágenes, por lo
  que busqué otra y encontré esta:
  https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/
  en la cual basé los códigos de la galería.
  
- Lo que sí, al princupio olvidé enlacar cada miniatura a la sección que se redirigía, me di
  cuenta de esto cuando comenzamos a trabajar en el css, por lo que agregué enlaces internos mediante
  la etiqueta <a> y los identificadores de cada sección.

- Una vez que cada uno terminó su parte del html, me preocupé de leerlo completo para ver si había algún error
  y me di cuenta que casi todos los nombres de las clases tenían espacios, o mayúsculas o tildes, y recordé las
  instrucciones dadas en clase por lo que en conjunto cambiamos cada espacio por un guión.

CSS:
- Durante esta estaá tuve varias dudas relacionadas con la distribución de los elementos, sus
  tamaños, los márgenes y la forma de mantener la composición visual del referente. Para resolverlas
  revisé las presentaciones de clases y utilicé chatgpt para resolver propiedades.

Desarrollo de la primera pantalla:
- Incluye la galería de miniaturas, el nav bar y el titulo principal h1.
- Para la galería de miniaturas, la dificultad fue que necesitaba que las imágenes quedaran alineadas
  y con una separación uniforme. También quería que cada miniatura mantuviera su forma cuadrada sin
  deformar las fotografías.

- # Consulta IA: Hacer galería de miniaturas con display grid
  
  **Prompt usado:** Necesito ubicar las 25 miniaturas dentro del tamaño de la pantalla sin hacer scroll
  y con gap uniformes entre columnas y filas.

  **Código usado:**
  ```css
  .gallery {
  display: grid;
  grid-template-columns: repeat (5, minmax (0, 1fr));
  gap: 1.2rem
  }

  .miniatura {
  width: 100%;
  aspect-ratio: 1/1;
  margin: 0;
  }

  .miniatura img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
  ```

  **Sugerencias aceptadas:** Acepté la solución porque permitía mantener una distribución
  regular y evitar que las imágenes se deformaran. Aprendí que css grid facilita la organización
  de muchos elementos sin tener que pocisionarlos uno por uno.

- #Consulta IA: Estados interactivos de las miniaturas

  **Codigo antes:**
  ```css
  <figure class="miniatura">
  <a href="#look-1">
  <img src="assets/1.jpg" class="look-1" alt="L1 Colección">
  </a>
  </figure>
  ```

  **Prompt usado:** Quiero que las miniaturas muestren un texto al pasar el cursos y que cambien de
  apariencia al presionarlas como la imagen de referencia (captura prototipo de figma).

  **Codigo después:**
  ```css
  <figure class="miniatura">
  <a href="#look-1">
  <img src="assets/1.jpg" class="look-1" alt="L1 Colección">
  <span class="miniatura-texto">LOOK 1</span>
  </a>
  </figure>
  ```
  **Sugerencia aceptada:** Incorporé el elemento `<span> ` con el nombre de cada look dentro del
  enlace y utilicé :hover y :active para modificar la apariencia del texto superpuesto.

- #Consulta IA: Estados del navbar

   **Codigo antes:**
  ```css
  .menu a:hover {
  text-decoration: underline;
  opacity: 0.5;
  }

  .menu a:active {
  font-weight: 700;
  opacity: 1;
  {
  ```

  **Prompt usado:** Quiero que el navbar tenga tres estados como en la imagen de referencia
  (captura de prototipo de figma) predeterminado, hover con subrayado y active con la palabra
  en negrita. Además, la clase de active no está funcionando.

  **Codigo después:**
  ```css
  .menu a:hover {
  text-decoration: underline;
  opacity: 0.5;
  }

  .menu a:active
  .menu a:hover:active{
  font-weight: 700;
  text-decoration: none;
  opacity: 1;
  {
  ```
  **Sugerencia aceptada:** Usar `text-decoration: none` para que en active no estuviera el
  subrayado y `.menu a:hover:active { ` para que me tomara bien la clase.

- #Consulta a Janis: Problema con la posición del scroll al actualizar la página.

  Consulté a Janis por medio de Discord una dificultad que teníamos respecto a que el navegador
  tomaba de referencia la última posición de scroll y cuando refrescábamos la página, volvía a ese
  lugar en vez de empezar desde el inicio.

  **Codigo usado:**
  ```html
  <script>
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
  </script>
  ```
  **Sugerencia aceptada:** Acepté probar esta solución para controlar la posición inicial
  de la página y aprendí que el comportamiento del scroll también puede estar relacionado
  con la restauración de pocisión que realiza el navegador.

 

  

  

  

  
