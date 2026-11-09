# bitácora solemne-02

● ¿Qué hice en el sitio?

fui la encargada de realizar el css de nuestra página web, si bien me toco agregar unos pequeños detalles del html, mayoritariamente hice el css.
La primera clase que comenzamos a desarrollar con mis compañeras fue nuestra solemne. Conocimos la IA Claude y lo increíble que era en cuanto a la generación de código para crear la página web. Primero partimos pidiendo un HTML completo para ver cómo lo hacía; cuando nos lo entregó, quedó casi igual a nuestra maqueta de Figma. Ahí nos dimos cuenta de que nos había agregado todo en uno: HTML y CSS. Conociendo bien cómo funcionaba todo, nos separamos las tareas y partimos desde cero.

● ¿Qué dificultades tuve y cómo las resolví?

Primero partí agregando el prompt que dejaron las profesoras en GitHub para realizar la base del CSS. Al comienzo no me funcionaba porque mi archivo CSS se llamaba estilo(1) y al ponerlo dentro de la carpeta no aparecía nada. Revisando mis actividades anteriores de las clases pasadas, me di cuenta de que para que se enlazara bien debía quitar ese paréntesis y agregar .css; finalmente resultó bien.
A medida que iba avanzando, comencé a leer todo lo que me explicaba la IA sobre lo que hizo con el CSS y empecé a agregar las imágenes.
Al principio no me aparecían las imágenes en las secciones, así que pensé que era un problema del CSS. Luego me di cuenta de que los nombres de las imágenes en la carpeta no correspondían con los del HTML, así que comencé a renombrarlos y aparecieron al guardar. Así continué con todas las imágenes.
Después, en la sección «TUS MARCAS FAVORITAS», sentía que las imágenes quedaban flotando. Fui a Figma y al diseño original le agregué un borde rosado a las imágenes para que se notara claramente que pertenecían a una misma sección. Luego abrí la herramienta «Inspeccionar» en el navegador y revisé el CSS de los elementos para ajustarlo en mi código.
Algunos códigos CSS que me dio la IA no coincidían con el color, ya que creo varios mirando lo que era mi png de figma, los cuales no correspondian a los que habiamos puesto en nuestro UI KIT, la tipografía, la cual la IA habia puesto una Arial y no la OPEN SANS o el tamaño. Por ello, a partir de Figma comencé a modificar el CSS según correspondía, guiándome desde el UI Kit hasta los códigos CSS en la ventana de inspección. Me di cuenta de que estaba cambiando casi todo a píxeles (px), por lo que cambié la unidad de medida en Figma a rem y empecé a corregirlo.
Uno de los mayores errores que corregí fue el carrusel de skincare, ya que los colores y las formas no eran exactamente iguales a nuestra maqueta de Figma. A partir de los códigos CSS de Figma, fui haciendo ajustes para ser más fiel al diseño original.
En el diseño final había un margen excedente al lado derecho de toda la página web, así que en la regla body del CSS agregué:
CSS
body {
  margin: 0 auto; /* antes: margin: 0; ahora se centra */
  width: 100%;
}

Luego le pregunté a la IA cómo agregar una tipografía. Mi prompt fue:
«¿Cómo instalar una tipografía en el CSS o HTML?»
Y su respuesta fue:
Hay dos formas. La más fácil es usar Google Fonts, y la otra es usar un archivo de tipografía que tengas descargado.
Opción 1: Google Fonts (la más simple)
Paso 1. Entra a fonts.google.com, busca la tipografía (por ejemplo, Poppins) y elige los grosores que usas. En tu diseño: 500, 600 y 700.
Paso 2. Copia el código que te da Google en la sección "Embed" → <link>. Pégalo en el <head> de tu HTML, antes de <link rel="stylesheet" href="estilos.css">:
HTML
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Aura Glow</title>

Paso 3. En tu CSS ya está lista, no hay que cambiar nada. En la regla body de estilos.css ya dice:
CSS
font-family: "Poppins", Arial, sans-serif; /* tipo de letra */

Seguí las indicaciones de la IA para incluir la tipografía desde Google Fonts y quedó perfecta.
Una vez listo esto, me volvió a aparecer el error del margen derecho. Volví a preguntarle a la IA cuál sería el problema, ya que al achicar el zoom del navegador se distorsionaba un poco, aunque al 90 % la página se veía bien.
Le pregunté esto a la IA:
«Estoy creando una página web, te dejo mi HTML y mi CSS. Pasa que al verla al 90 % de zoom en Google Chrome se ve "bien", pero al achicarla se ve un margen blanco al lado derecho, ¿cómo puedo corregir ese error?»
Esta fue su respuesta:
Encontré la causa en tu CSS, en la regla del body:
CSS
body {
  margin: 0;
  width: 100%;
  max-width: 90rem; /* 90rem = 1440px */
  ...
}

Con max-width: 90rem el body nunca pasa de 1440 px. Al achicar el zoom, la ventana queda más ancha que eso, pero el body se queda pegado a la izquierda. El resto es el fondo blanco que ves a la derecha.
Solución: centrar el body
CSS
body {
  margin: 0 auto; /* centra el contenedor */
  width: 100%;
  max-width: 90rem;
  ...
}

Si prefieres que el pie de página o las franjas rosadas se estiren a todo el ancho de la pantalla, habría que quitar el max-width del body y ponerlo en un contenedor interno.
Problema corregido. Sin embargo, en el diseño final el footer y los banners quedaban cortados y no llegaban al borde de la pantalla, por lo que opté por eliminar la propiedad max-width: 90rem y el problema se solucionó.
Pensé que ya estaba todo listo, pero faltaban los puntos indicadores del carrusel del banner. Revisé el CSS y las reglas sí estaban, así que no entendía por qué no se mostraban. Revisé el contenido de las clases anteriores en Drive y no hallaba la causa. Le pregunté a la IA si podía identificar el error y me indicó que esos puntos no estaban agregados en el HTML. Efectivamente no estaban; los agregué en el código HTML y aparecieron correctamente.
Cuando creí haber terminado nuevamente, me di cuenta de que al final de la página no aparecían los íconos de las redes sociales. Descargué los íconos en PNG desde Figma y, recordando la situación anterior, revisé de inmediato si el código estaba en el HTML. Como no estaba, agregué la estructura necesaria junto a la ayuda de mi compañera JIAMIN:
HTML
<div class="pie-col">
  <h3>SOCIAL</h3>
  <a class="red" href="https://www.instagram.com/">
    <img src="imagenes/instagram.jpg" alt="Instagram"> Instagram
  </a>
  <a class="red" href="https://www.tiktok.com/">
    <img src="imagenes/tiktok.jpg" alt="TikTok"> TikTok
  </a>
  <a class="red" href="https://www.youtube.com/">
    <img src="imagenes/youtube.jpg" alt="YouTube"> YouTube
  </a>
  <a class="red" href="https://www.pinterest.com/">
    <img src="imagenes/pinterest.jpg" alt="Pinterest"> Pinterest
  </a>
</div>

Añadí las imágenes con sus nombres de archivo correspondientes para que se desplegarán de forma correcta en la web.

● ¿Qué aprendí?

Aprendí la importancia del CSS dentro del HTML, vi bien cuando tenia el HTML vacío, la página no se entendía, y era muy aburrida, darle el estilo cambia totalmente la interacción del usuario. Además también comprendí la importancia de los códigos puestos correctamente, si te falta solo uno ; el código no se ingresa correctamente y puede arruinarse, el detalle es super importante. Me divertí mucho haciéndolo, me impacta que al final lograra verse el diseño igual a la maqueta de FIGMA.

