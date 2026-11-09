En Figma.
Partí en desktop y busqué las visuales como el fondo en movimiento al inicio de la página principal, adecuado según lo que queremos representar
y que siga la misma línea lógica de la página original, además de agregar sobre esta visual un efecto de vidrio esmerilado y las imágenes 
dentro de las casillas de la sección entradas fueron descargadas desde la página oficial también. En el final de la página también me encargué de descargar 
cada logo de marcas asociadas y organizarlas de manera fiel a la versión original. En la ventana de entradas tanto desktop y mobile me encargué de darle
un coloral fondo dentro de la paleta cromática que saqué de la página oficial, de diagramar las entradas y agregarles fotos y colores representativos según 
el tipo de categoría de compra además de agregar cada texto correspondiente a cada tipo de entrada. 
Tuve complicaciones al momento de intentar replicar la cuenta regresiva, busqué en muchos sitios por internet y también le pedí ayuda
a chat para saber como realizar eso dentro de Figma pero en verdad no existía una manera efectiva dentro del tiempo que tenemos.

Visual Studio Core
Aquí me encargué del html y css de la ventana de entradas. 
partí con la base que ya tenemos escrita de html, consideré que lo primero debería ser diagramar cada casilla o sea de tres en tres de manera vertical,
y la última clase que tuvimos habíamos visto cómo darle el espacio que queremos a los bloques (alineados a la izquierda, derecha o centrados)
y darle el ancho y alto que queremos y después lo fui acomodando según el tamaño de las fotos, esta parte fue en la que más me tardé porque en una me confundí 
y olvidé agregar una foto al css entonces tuve que hacerlo de nuevo. Una vez hecho eso agregué los textos entrada por entrada. 
Después me enfoque en el encabezado o sea el video del concierto y para eso le pedí ayuda a chat gpt, adjunté la imagen de figma y le pregunté 
que cómo podía hacer que el video se vea igual y me dijo:

Para un video que se reproduce como fondo del banner, lo mejor es usar la etiqueta <video> en HTML.
Paso 1. Guarda tu video
Dentro de la carpeta de tu proyecto, crea una carpeta llamada videos y guarda ahí el archivo. Por ejemplo:
Tu proyecto, index.html, entradas.css, videos/ y creamfields.mp4
Puedes usar un video en formato MP4, por ejemplo.
Paso 2. Cambia el banner en tu HTML 
Busca este bloque:
<header class="hero-banner">
    <div class="banner-overlay"></div>
</header> 
Y reemplázalo por:

<header class="hero-banner">
    <video class="banner-video" autoplay muted loop playsinline>
        <source src="videos/creamfields.mp4" type="video/mp4">
        Tu navegador no puede reproducir este video.
    </video>

    <div class="banner-overlay"></div>
</header>
Paso 3. Agrega estos estilos al CSS 
.hero-banner {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
    background-color: #1a052b;

.banner-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

.banner-overlay {
    position: absolute;
    inset: 0;
    background: rgba(20, 0, 30, 0.15);
    pointer-events: none;

Entonces me ayudó a agregar códigos correctos pero de todos modos modifiqué tamaños porque quedaba muy alargado de esa manera. 
Después en la parte del footer, existe un pequeño punteo con 3 links, algo que también vimos en las primeras clases así que no lo sentí ajeno,
pero si tuve otra complicación en la parte final de las redes sociales con que al tocar el logo me lleve directamente al sitio deseado, 
así que volví a pedirle ayuda a chat gpt y le pregunté cómo puedo poner los iconos oficiales y que al tocarlos me lleve directamente al link, y me dijo:

Tu HTML ya tiene los espacios preparados para los iconos. Lo que falta es cargar la biblioteca que les da forma.
Paso 1. Agrega Font Awesome a tu HTML.
Abre tu archivo HTML y busca la etiqueta <head>. Dentro encontrarás algo parecido a esto:
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creamfields 2027 - Entradas</title>
    <link rel="stylesheet" href="entradas.css">
</head>
Agrega el siguiente enlace antes de </head>, por ejemplo, justo debajo de tu CSS:
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
>
Así el navegador podrá cargar los iconos desde internet. 
Paso 2. Añade las redes sociales a tu HTML 
<div class="redes-sociales">
    <a href="#" aria-label="Facebook">
        <i class="fa-brands fa-facebook-f"></i>
    </a>

    <a href="#" aria-label="Instagram">
        <i class="fa-brands fa-instagram"></i>
    </a>

    <a href="#" aria-label="YouTube">
        <i class="fa-brands fa-youtube"></i>
    </a>

    <a href="#" aria-label="TikTok">
        <i class="fa-brands fa-tiktok"></i>
    </a>
</div>

Finalmente pegué los links de cada red social. 

¿Qué dificultades tuve y cómo las resolví? 

Utilicé el material complementario entregado en clase, pedí ayuda a chat gpt,
y mi compañera Camila sabe mucho también entonces en pequeñas dudas le preguntaba directamente a ella.

 ¿Qué aprendí?
Todo este ejercicio sirvió significativamente para seguir practicando a profundidad el manejo de códigos, 
amaba contar que estaba creando un sitio web en base a códigos y mi familia y amigas fuera de la u no entendían nada, 
lo mismo que me pasó en un principio y me sirvió para perder un poquito el miedo y encontrarle sentido a cada número, 
ya se como poner videos, agregar links a los logos, y pude entender bien bien la diferencia entre el html y el css 
porque en un punto supe rápidamente en  cuál de los dos debía editar algo que no quedaba bien :) 
