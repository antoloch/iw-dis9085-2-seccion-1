# Bitácora de Proceso Individual — Solemne 2

## ¿Qué hice en el sitio?

Para esta entrega trabajamos en equipo dividiéndonos las tareas según las fortalezas de cada uno. Todo partió desde la propuesta gráfica que diseñamos en Figma para la marca **MAREA**. A partir de ese prototipo, un integrante de nuestro grupo se encargó de armar la versión inicial del sitio web pensado para pantallas de escritorio (*desktop*). 

Con esa base lista, mi rol principal dentro del grupo fue **tomar ese código base y asumir el desafío de adaptar la página completa a una versión mobile totalmente responsive**.

De manera concreta, mis tareas en el proyecto fueron:

* **Armar el formato en diseño y la versión mobile:** Mi trabajo principal consistió en definir la diagramación visual y estructurar el diseño adaptado a celulares, ajustando la escala, el tamaño y la proporción de las fotos de los productos para que no se vieran desproporcionadas ni diminutas en pantallas pequeñas.
* **Analizar la base Desktop:** Revisé el código que armó mi compañero para entender cómo estaban estructuradas las secciones, clases e imágenes originales.
* **Reestructurar el HTML para Mobile:** Noté que para pasar el sitio a celular el código original quedaba un poco desorganizado, así que lo reordené usando etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`) y contenedores más claros.
* **Maquetación con Flexbox:** Cambié el flujo horizontal de la pantalla grande a una distribución vertical usando Flexbox (`display: flex`, `flex-direction: column`, `gap`).
* **Redimensionar imágenes y componentes:** Ajusté las fotos de los productos y la portada para que tomaran un tamaño simétrico y protagónico en smartphones, además de escalar el botón "Comprar" del encabezado.
* **Trazos vectoriales (SVG):** Mantuve e integré las olas divisoras en SVG para conservar la identidad gráfica del proyecto en celulares.
* **Navegación e interactividad:** Vinculé los botones, imágenes y el menú inferior usando enlaces de ancla (`<a>` con `#id`) y scroll suave (`scroll-behavior: smooth`) para facilitar la experiencia de usuario en una sola página.

---

## ¿Qué dificultades tuve y cómo las resolví?

Adaptar la página desde la versión de escritorio a celular fue bastante más complejo de lo que me imaginaba en un principio. Pasar de un espacio ancho donde todo cabe cómodamente a una pantalla vertical estrecha requirió reestructurar varias partes del código.

### Dificultad 1: Código inicial desorganizado e imágenes que se veían diminutas en mobile
* **El problema:** Al tomar la base de escritorio y aplicar las primeras pruebas para celular, el contenido se desordenaba y las imágenes de los productos (Corriente, Erosión, Oleaje) quedaban excesivamente pequeñas o desalineadas. El HTML original no tenía contenedores pensados para comportamiento móvil, lo que hacía muy difícil manejar los estilos.
* **Recursos utilizados:** Apuntes de clase sobre el modelo de caja y Flexbox (UDP), consultas en **MDN Web Docs** y apoyo de mi equipo.
* **Cómo lo solucioné:** En lugar de forzar parches en el CSS, decidí reestructurar el HTML. Agrupé cada producto en una tarjeta contenedora limpia y luego apliqué reglas flexibles en el CSS.

**Código base original (Desktop):**
`<div class="galeria-desktop"><img src="corriente.png" class="foto-fija"><p class="descripcion">Producto Corriente</p></div>`

**Código reestructurado (Mobile):**
`<section id="coleccion" class="contenedor-productos"><article class="tarjeta-producto"><div class="contenedor-img"><img src="corriente.png" alt="Producto Corriente"></div><h3>Corriente</h3><p>Pieza cerámica inspirada en el movimiento marino.</p><a href="#contacto" class="btn-comprar">Comprar</a></article></section>`

**Ajuste en CSS para imágenes simétricas y adaptables:**
`.contenedor-img img { width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 8px; }`

### Screenshot Figma Desktop 
<img width="603" height="553" alt="image" src="https://github.com/user-attachments/assets/696ac01d-e5c9-48c5-8209-da712fbfe3b8" />

### Screenshot Figma Mobile 
<img width="408" height="847" alt="image" src="https://github.com/user-attachments/assets/4a3f91da-1c38-442d-b7be-cc6d7df17d80" />


---

### Dificultad 2: Las curvas en SVG se pixelaban o se cortaban
* **El problema:** Las líneas divisoras con forma de ola que venían del prototipo de Figma no se adaptaban bien al ancho estrecho del celular. Se veían cortadas en los bordes o con trazos demasiado gruesos según la pantalla.
* **Recursos utilizados:** Documentación técnica de **MDN Web Docs (SVG scaling)**.
* **Cómo lo solucioné:** Limpié el código SVG e integré los vectores directamente en el marcado HTML configurando la propiedad `preserveAspectRatio="none"` y un alto fijo en CSS.

**Código aplicado para SVG adaptable:**
`<svg viewBox="0 0 500 40" preserveAspectRatio="none" class="divisor-ola"><path d="M0,20 C150,40 350,0 500,20 L500,40 L0,40 Z" fill="none" stroke="#000" stroke-width="2"/></svg>`

**Estilos CSS aplicados:**
`.divisor-ola { width: 100%; height: 20px; display: block; }`

### Screenshot figma como deberia quedar linea divisoria 

<img width="408" height="847" alt="image" src="https://github.com/user-attachments/assets/a0bd2d29-4195-4a58-b4cc-b56c1631bf2d" />

### Screenshot como fue pasarlo por codigo al prototipo final 

<img width="1560" height="708" alt="image" src="https://github.com/user-attachments/assets/1f130f3a-af10-4dc0-bd97-3968873520de" />

##### Finalmente no pude lograr igualar la linea divisoria, intenté de muchas maneras el poder colocar la linea curva, ya que primeramente solo me dejaba lineas rectas, después dejaba pixelada la línea por lo que le pedí a la IA, gemini,  un poco de ayuda y finalmente creó la linea curva pero no con el mismo grosor que le dimos en el figma. 
---

### Dificultad 3: El botón "Comprar" del header ocupaba demasiado espacio
* **El problema:** Al juntar el logotipo con el menú y el botón de compra en la barra superior móvil, el botón quedaba gigante y rompía la alineación vertical.
* **Declaración del uso de Inteligencia Artificial (IA):** Consulté con una IA para buscar ideas sobre cómo achicar el botón dentro del contenedor Flexbox sin romper la barra.

> **Prompt de consulta utilizado:**  
> *"Las líneas de onda en SVG se nos ven pixeladas y el botón 'Comprar' del header quedó muy grande en la pantalla del celular. ¿Cómo podemos hacer que las ondas se vean nítidas y achicar el botón para que mantenga una buena jerarquía visual?"*

* **Lo que tuve que corregir a mano:** El código que me dio la IA reducía los márgenes, pero el botón seguía viéndose desalineado respecto al centro del logo de MAREA. Tuve que ajustar manualmente los valores en la hoja de estilos.

**Código corregido manualmente en CSS:**
`.header-inferior { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 1rem; }`  
`.boton-comprar-header { padding: 0.25rem 0.65rem; font-size: 0.65rem; line-height: 1; display: inline-block; }`

### Boton Final 

<img width="372" height="332" alt="image" src="https://github.com/user-attachments/assets/ed2fd3f2-13d4-4220-943e-62c4afaac33a" />

### Boton en Figma 

<img width="409" height="216" alt="image" src="https://github.com/user-attachments/assets/28d36b54-f770-4f82-8c79-402ca21c7498" />

##### La IA me sugirió reducir el padding y ajustar el tamaño del texto para achicar el botón, pero al aplicar el código el resultado no se veía igual al prototipo de Figma. Estuve probando varios estilos en CSS y, si bien logré adecuar el tamaño del botón para que no se viera gigante, finalmente no pude separarlo más del logo de MAREA como me hubiese gustado. Aunque no quedó exactamente igual al diseño original por esa falta de espacio entre ambos elementos, al menos conseguí una versión funcional que no desforma la barra superior en pantallas móviles.


---

## 3. ¿Qué aprendí?

Hacer este traspaso de escritorio a celular y trabajar codo a codo con mi grupo me dejó aprendizajes muy concretos y valiosos:

1. **Adaptar no es solo achicar:** Aprendí que adaptar un sitio a mobile no consiste en simplemente encoger lo que se diseñó para computadora. Significa entender que el usuario está interactuando con una pantalla vertical y táctil, por lo que la distribución del espacio y los tamaños deben pensarse para que sean cómodos de tocar y leer.
2. **Un HTML ordenado te salva la vida en CSS:** Si la estructura de etiquetas está desorganizada o llena de divs sin sentido, intentar arreglar todo con CSS o Media Queries es muy difícil. Reestructurar el HTML a tiempo me ahorró horas de frustración al aplicar Flexbox.
3. **Manejo de imágenes y vectores responsivos:** Comprendí el uso práctico de `aspect-ratio: 1 / 1` junto con `object-fit: cover` para lograr que las fotos de productos se vean cuadradas y proporcionadas en cualquier teléfono. Además, aprendí a configurar el atributo `preserveAspectRatio="none"` en los SVG para que las ondas decorativas se adapten al ancho del celular sin deformarse.
4. **Criterio propio y uso real de la Inteligencia Artificial:** Confirmé que herramientas como la IA son un excelente apoyo cuando te quedas atascado en un detalle técnico, pero no te entregan una solución perfecta lista para usar. Siempre es indispensable probar el código uno mismo en la pantalla, corregir los desfases a mano y verificar que el resultado calce con el prototipo de Figma.

---

https://github.com/user-attachments/assets/3d914126-2330-4ee9-b71d-c254d28a13a9

###### se organizó este trabajo a modo git hub, para más orden :)
Uso de herramientas :
# FIGMA
# VSC
# GEMINI 
# TUTORIALES YOUTUBE: https://www.google.com/search?q=como+cambiar+un+codigo+de+desktop+a+mobile+con+vscode&sca_esv=a729b046d7660124&udm=vids&biw=1422&bih=621&sxsrf=APpeQnsIB3tT-3G1rGDXkNKx8rivleLjeA%3A1793024391140&ei=h2HfavSDCNPa1sQP69ih-QM&oq=como+cambiar+un+codigo+de+desktop+a+mobile+CON+VSC&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLXZpZGVvIjJjb21vIGNhbWJpYXIgdW4gY29kaWdvIGRlIGRlc2t0b3AgYSBtb2JpbGUgQ09OIFZTQyoFCAAYoAEyBRAhGKABMgUQIRigAUjDHVDpA1isE3ABeACQAQCYAWygAYAFqgEDNy4xuAEDyAEA-AEBmAIJoAK8BcICBRAAGO8FwgIIEAAYgAQYogTCAgUQIRifBcICBBAhGBWYAwCIBgGSBwM2LjOgB8YgsgcDNS4zuAe0BcIHBTAuNS40yAchgAgB&sclient=gws-wiz-modeless-video#fpstate=ive&vld=cid:6e7433db,vid:SUkdHhIefnY,st:0


