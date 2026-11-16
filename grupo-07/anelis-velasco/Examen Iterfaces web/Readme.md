BITACORA

La idea para mi portafolio es que sea una página web con más cosas visuales que para leer; quiero que se noten mis trabajos y que sea fácil de explorar. 

Referentes
Tomé como referencia estas 3 páginas:

https://spencergabor.work/
Esta es la página en la cual más me inspiré; me gustó que es muy dinámica pero simple a la vez. Tomo como referencia la estructura de la página de inicio,cómo está organizada y cómo interactúan las imágenes. 

https://www.thinker.cl/
De esta tomo como referencia cómo organizan las imágenes con los textos y algunas animaciones.

https://www.calvinpausania.com/autonomous
Tomé esta página como referencia para ver cómo se despliega el menú.


https://liamgillick.info/Film 
La tomé como referencia para ver cómo muestra sus proyectos audiovisuales. 

https://www.figma.com/design/lh6LE3qmr4NZFCFl5NB690/Sin-t%C3%ADtulo?node-id=0-1&m=dev&t=ZoU0xrvaq1nZQlHc-1 

PROCESO

Empecé diseñando mi portafolio en Figma, donde no tuve problemas hasta llegar a la parte del botón de hamburguesa desplegable, que no sabía cómo hacerlo, pero encontré una solución: 
Dupliqué la página completa y le puse un rectángulo con baja opacidad y ahí desplacé el botón hasta esa página con la opción de "navegar a" 


<img width="198" height="689" alt="Captura de pantalla 2026-11-16 a la(s) 12 15 47 p  m" src="https://github.com/user-attachments/assets/1bf23e3f-a75c-40d1-89ad-64441d7e1aae" />

Hice eso con todas las paginas de mi sitio web. 

VISUAL CODE 

HTML 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <!-- TIPOGRAFÍAS -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
<p>La Paz-BOLIVIA</p>

 <button class="menu-btn" id="menuBtn"
        aria-label="Abrir menú"
        aria-expanded="false">

        <span></span>
        <span></span>
        <span></span>

    </button>
    </header>

    <!--MENÚ DESPLEGABLE-->

<div class="menu-overlay" id="menuOverlay">

    <nav class="menu-links">

        <a href="#inicio">Home</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>

    </nav>

</div>
 <main id="inicio">
        <section class="nombre">
            <h1>
                Anelis .S Velasco .Y
            </h1>
            <div class="collage">
                <img src="./img/corazon.jpeg" alt="elefantes">
                <img src="./img/lobo.jpeg" alt="lobo">
                <img src="./img/cerigrafia.jpeg" alt="cerigrafia">
                <img src="./img/corazon.jpeg" alt="corazon">
            </div>
            <h2>
                DISEÑO GRÁFICO y 
                <br> 
                PRODUCCIÓN CROSS MEDIA 
            </h2>
      </section>
<section class="proyectos" id="proyectos">

    <h2>Proyectos</h2>

    <div class="categorias">

        <!-- PORTADAS -->
        <article class="portadas">

            <a href="#portadas">
                <img src="./img/Portadas.jpg"
                     alt="carta portadas">
                <span>Portadas</span>
            </a>
        </article>

        <!-- CARTELES -->
        <article class="carteles">

            <a href="#carteles">
                <img src="./img/Carteles.jpg"
                     alt="carta de carteles">
                <span>Carteles</span>
            </a>
        </article>

        <!-- PRODUCCIONES -->
        <article class="producciones">

            <a href="#producciones">
                <img src="./img/Producciones.jpg"
                     alt="carta de producciónes">
                <span>Producciones</span>
            </a>
        </article>
    </div>
</section>
</main>

<footer class="footer" id="contacto">

    <div class="franja-decorativa">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

    </div>

    <nav aria-label="Redes sociales">

        <a href="https://www.tiktok.com/" target="_blank">
            <i class="fa-brands fa-tiktok"></i>
        </a>

        <a href="https://www.instagram.com/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.whatsapp.com/" target="_blank">
            <i class="fa-brands fa-whatsapp"></i>
        </a>

        <a href="mailto:tuemail@gmail.com">
            <i class="fa-solid fa-at"></i>
        </a>

    </nav>

</footer>
<script src="./js/script.js"></script>
</body>
</html>

Hice el html sin problema, separando todo en secciones, clases e ID para poder editarlo de manera más ordenada en los CSS. 
También utilicé la etiqueta <span>, que sirve para agrupar una pequeña parte de un texto o contenido, sin crear un bloque nuevo.
Utilicé la etiqueta target="_blank": abre el enlace en otra pestaña.

Para la parte de los iconos utilicé IA este fue el pront: 
Para la parte del footer son solo los iconos; que esos sean un enlace. Utilice iconos de figma que es Iconify 2 million Icons Library

RESPUESTA AI 

Entonces utilizaste Iconify, que es una biblioteca de iconos que puedes integrar en tu HTML.

Hay algo importante: los iconos de Iconify se pueden utilizar mediante etiquetas <iconify-icon>, pero necesitamos cargar su biblioteca para que funcionen.
1. Primero, agrega esto en tu <head>
<script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>
2. Código de tu footer
Por ejemplo, si elegiste los iconos de TikTok, Instagram, WhatsApp y correo:
<footer>

    <nav aria-label="Redes sociales">

        <a href="https://www.tiktok.com/" target="_blank">
            <iconify-icon icon="simple-icons:tiktok"></iconify-icon>
        </a>

        <a href="https://www.instagram.com/" target="_blank">
            <iconify-icon icon="mdi:instagram"></iconify-icon>
        </a>

        <a href="https://www.whatsapp.com/" target="_blank">
            <iconify-icon icon="mdi:whatsapp"></iconify-icon>
        </a>

        <a href="mailto:tuemail@gmail.com">
            <iconify-icon icon="mdi:email-outline"></iconify-icon>
        </a>

    </nav>

</footer>


3. ¿Cómo funciona?
- <iconify-icon>: muestra el icono.
- icon: indica qué icono queremos mostrar.
- <a>: convierte el icono en un enlace.
- href: indica a dónde nos lleva al hacer clic.

Aprendí y me di cuenta de que se pueden enlazar iconos directamente desde Figma. 

Use AI para el boton de hamburguesa. 

En mi código Html agregué la etiqueta de button. 
<header class="header">
    <p>La Paz-BOLIVIA</p>

    <button class="menu-btn" id="menuBtn"
        aria-label="Abrir menú"
        aria-expanded="false">

        <span></span>
        <span></span>
        <span></span>

    </button>
</header>

Agregue el menú desplegable
Justo después de cerrar el header y antes de main:
<!-- MENÚ DESPLEGABLE -->

<div class="menu-overlay" id="menuOverlay">

    <nav class="menu-links">

        <a href="#inicio">Home</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>

    </nav>

</div>

Cambié la etiqueta <main> por:
<main id="inicio">


Y la etiqueta <footer> por:
<footer class="footer" id="contacto">
  
y en los CSS la IA me dio este código:

/* ========================================
   MENU HAMBURGUESA
======================================== */

/* BOTÓN */

.menu-btn {
    position: fixed;
    top: 1.25rem;
    right: 1.5rem;

    width: 4.7rem;
    height: 4.7rem;

    background-color: #E8CFDC;
    border: none;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;
    z-index: 1002;

    transition: background-color 0.3s ease;
}

/* HOVER DEL BOTÓN */

.menu-btn:hover {
    background-color: #FFFFFF;
}

/* LINEAS NEGRAS */

.menu-btn span {
    display: block;
    width: 3rem;
    height: 0.35rem;

    background-color: #000000;
    border-radius: 2rem;

    transition: all 0.3s ease;
}

/* CAPA OSCURA */

.menu-overlay {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.88);

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    visibility: hidden;

    transition: opacity 0.4s ease,
                visibility 0.4s ease;

    z-index: 1001;
}

/* MENU ABIERTO */

.menu-overlay.active {
    opacity: 1;
    visibility: visible;
}

/* ENLACES */

.menu-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
}

.menu-links a {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.8rem, 6vw, 5rem);
    font-weight: 600;

    color: #FFFFFF;
    text-decoration: none;

    transition: color 0.3s ease,
                transform 0.3s ease;
}

/* HOVER DE LOS ENLACES */

.menu-links a:hover {
    color: #E8CFDC;
    transform: scale(1.08);
}

/* RESPONSIVE */

@media (max-width: 37.5rem) {

    .menu-btn {
        width: 3.5rem;
        height: 3.5rem;
        top: 1rem;
        right: 5%;
        gap: 0.35rem;
    }

    .menu-btn span {
        width: 2.1rem;
        height: 0.22rem;
    }

    .menu-links a {
        font-size: clamp(2.5rem, 10vw, 3.5rem);
    }
}

Para esta parte igual me sugirió utilizar Java Script para que la pagina se vea mejor y mas fluida, este es el código: 


const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");

// ABRIR Y CERRAR MENU

menuBtn.addEventListener("click", () => {

    menuOverlay.classList.toggle("active");

    const menuAbierto = menuOverlay.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", menuAbierto);

    menuBtn.setAttribute(
        "aria-label",
        menuAbierto ? "Cerrar menú" : "Abrir menú"
    );

    document.body.style.overflow =
        menuAbierto ? "hidden" : "";

});

// CERRAR AL SELECCIONAR UNA OPCIÓN

const enlaces = document.querySelectorAll(".menu-links a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        menuOverlay.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        document.body.style.overflow = "";

    });

});

// CERRAR CON ESCAPE

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        menuOverlay.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        document.body.style.overflow = "";

    }

});

CSS
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: #000000;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
img {
    display: block;
    max-width: 100%;
}
a {
    text-decoration: none;
}
/*HEADER*/

.header {
    position: relative;
    width: 100%;
    padding: 2.8125rem 0;
    text-align: center;
}
.header p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    font-weight: 700;
}
/*PRESENTACIÓN */

.nombre {
    width: 100%;
    text-align: center;
}
.nombre h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.8125rem, 7vw, 5.625rem);
    font-weight: 700;
    margin-bottom: 1.5625rem;
}
/*COLLAGE DE IMÁGENES*/

.collage {
    position: relative;
    width: 100%;
    max-width: 53.125rem;
    height: 19.375rem;
    margin: 0 auto;
}
.collage img {
    position: absolute;
    width: 21%;
    height: 13.125rem;
    object-fit: cover;
    border-radius: 1.5625rem;
}
.collage img:nth-child(1) {
    left: 10%;
    top: 2.1875rem;
    transform: rotate(-43deg);
}
.collage img:nth-child(2) {
    left: 27%;
    top: 0;
    transform: rotate(0deg);
}
.collage img:nth-child(3) {
    left: 48%;
    top: 1.5625rem;
    transform: rotate(12deg);
}
.collage img:nth-child(4) {
    left: 70%;
    top: 1.25rem;
    transform: rotate(25deg);
}
.nombre h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5625rem, 5vw, 3.3125rem);
    font-weight: 700;
    line-height: 1.4;
    margin-top: 1.25rem;
    margin-bottom: 5.9375rem;
}

/*PROYECTOS*/

.proyectos {
    width: 100%;
    text-align: center;
    overflow: hidden;
}

.proyectos h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 7vw, 4.875rem);
    font-weight: 700;
    margin-bottom: 3.5rem;
}

/*CONTENEDOR DE CARTAS*/

.categorias {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(3rem, 8vw, 8rem);

    width: 100%;
    padding: 2rem 2rem 5rem;

    overflow: hidden;
}

/*CARTAS*/

.categorias article {
    flex: 0 0 clamp(13rem, 17vw, 17rem);
    position: relative;
}

.categorias article a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #000000;
}

.categorias article img {
    width: 100%;
    height: clamp(20rem, 25vw, 25rem);

    object-fit: cover;
    border-radius: 1.5rem;
}

/*INCLINACIÓN*/

.portadas {
    transform: rotate(-12deg);
}

.carteles {
    transform: rotate(0deg);
}

.producciones {
    transform: rotate(12deg);
}

/*BOTONES*/

.categorias article a span {
    display: inline-block;

    background-color: #E8CFDC;
    color: #000000;

    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;

    padding: 0.75rem 1.5rem;
    margin-top: 1.5rem;

    border: 0.2rem solid transparent;
    border-radius: 3rem;

    transition: all 0.3s ease;
}

/*EFECTO HOVER*/

.categorias article a:hover span {
    background-color: #000000;
    color: #FFFFFF;
    border-color: #FFFFFF;
}



/*FOOTER*/

.footer {
    width: 100%;
    background-color: #000000;
    padding-bottom: 1.5rem;
}

/*FRANJAS*/

.franja-decorativa {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.25rem;

    width: 100%;
    min-height: 2.5rem;
    overflow: hidden;
    margin-bottom: 1.5rem;
}

.franja-decorativa span {
    display: block;
    flex: 0 0 9.5rem;
    height: 2rem;
    border: 0.25rem solid #FFFFFF;
}

.franja-decorativa span:nth-child(odd) {
    background-color: #58366B;
}

.franja-decorativa span:nth-child(even) {
    background-color: #E8CFDC;
}

/*ICONOS*/

.footer nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
}

.footer nav a {
    color: #FFFFFF;
    font-size: 4.5rem;
    text-decoration: none;
}

.footer nav a:hover {
    color: #E8CFDC;
}

/* ========================================
   RESPONSIVE - TABLETS Y CELULARES
======================================== */

@media (max-width: 37.5rem) {

    /* --------------------------------
       CONFIGURACIÓN GENERAL
    -------------------------------- */

    body {
        overflow-x: hidden;
    }


    /* --------------------------------
       HEADER
    -------------------------------- */

    .header {
        padding: 2rem 0;
    }

    .header p {
        font-size: 1rem;
    }

    .menu {
        width: 2.8rem;
        height: 2.4rem;
        top: 1.2rem;
        right: 5%;
        gap: 0.3rem;
    }

    .menu span {
        width: 1.8rem;
        height: 0.18rem;
    }


    /* --------------------------------
       NOMBRE
    -------------------------------- */

    .nombre h1 {
        font-size: clamp(2.3rem, 9vw, 3.5rem);
        padding: 0 0.5rem;
        margin-bottom: 1.5rem;
    }


    /* --------------------------------
       COLLAGE
    -------------------------------- */

    .collage {
        width: 100%;
        height: 14rem;
        margin: 0 auto;
    }

    .collage img {
        width: 24%;
        height: 8.5rem;
        border-radius: 1rem;
    }

    .collage img:nth-child(1) {
        left: 5%;
        top: 2rem;
        transform: rotate(-35deg);
    }

    .collage img:nth-child(2) {
        left: 25%;
        top: 0;
        transform: rotate(-5deg);
    }

    .collage img:nth-child(3) {
        left: 48%;
        top: 1rem;
        transform: rotate(12deg);
    }

    .collage img:nth-child(4) {
        left: 71%;
        top: 1.5rem;
        transform: rotate(25deg);
    }


    /* --------------------------------
       ESPECIALIDAD
    -------------------------------- */

    .nombre h2 {
        font-size: clamp(1.5rem, 5.5vw, 2rem);
        line-height: 1.5;
        padding: 0 0.5rem;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }


    /* --------------------------------
       PROYECTOS
    -------------------------------- */

    .proyectos {
        width: 100%;
        overflow: hidden;
    }

    .proyectos h2 {
        font-size: 3rem;
        margin-bottom: 2rem;
    }


    /* --------------------------------
       CARRUSEL
    -------------------------------- */

    .categorias {
        gap: 2rem;

        padding: 2rem calc((100vw - 12rem) / 2) 4rem;

        overflow-x: auto;
        overflow-y: hidden;

        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scroll-padding-inline: 50%;

        cursor: grab;
    }

    .categorias article {
        flex: 0 0 12rem;
        width: 12rem;
        scroll-snap-align: center;
    }

    .categorias article img {
        width: 100%;
        height: 18rem;
        border-radius: 1.2rem;
    }

    .portadas {
        transform: rotate(-10deg);
    }

    .carteles {
        transform: rotate(0deg);
    }

    .producciones {
        transform: rotate(10deg);
    }


    /* --------------------------------
       BOTONES DE PROYECTOS
    -------------------------------- */

    .categorias article a span {
        font-size: 1rem;
        padding: 0.65rem 1.2rem;
        margin-top: 1.2rem;
    }


    /* --------------------------------
       FOOTER
    -------------------------------- */

    .footer {
        padding-bottom: 1.2rem;
    }


    /* FRANJAS DECORATIVAS */

    .franja-decorativa {
        gap: 0.8rem;
        margin-bottom: 1.5rem;
    }

    .franja-decorativa span {
        flex: 0 0 7rem;
        height: 1.6rem;
        border: 0.25rem solid #FFFFFF;
    }


    /* ICONOS */

    .footer nav {
        gap: clamp(1rem, 5vw, 2rem);
        padding: 0 0.5rem;
    }

    .footer nav a {
        font-size: clamp(2rem, 9vw, 2.8rem);
    }

}


/* CELULARES*/

@media (max-width: 22.5rem) {

    .nombre h1 {
        font-size: 2.1rem;
    }

    .nombre h2 {
        font-size: 1.35rem;
    }

    .collage {
        height: 12rem;
    }

    .collage img {
        height: 7rem;
    }

    .proyectos h2 {
        font-size: 2.5rem;
    }

    .categorias article {
        flex-basis: 11rem;
        width: 11rem;
    }

    .categorias article img {
        height: 16rem;
    }

    .footer nav {
        gap: 0.8rem;
    }

    .footer nav a {
        font-size: 1.9rem;
    }

}

/* ========================================
   MENU HAMBURGUESA
======================================== */

/* BOTÓN */

.menu-btn {
    position: fixed;
    top: 1.25rem;
    right: 1.5rem;

    width: 4.7rem;
    height: 4.7rem;

    background-color: #E8CFDC;
    border: none;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;
    z-index: 1002;

    transition: background-color 0.3s ease;
}

/* HOVER DEL BOTÓN */

.menu-btn:hover {
    background-color: #FFFFFF;
}

/* LINEAS NEGRAS */

.menu-btn span {
    display: block;
    width: 3rem;
    height: 0.35rem;

    background-color: #000000;
    border-radius: 2rem;

    transition: all 0.3s ease;
}

/* CAPA OSCURA */

.menu-overlay {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.88);

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    visibility: hidden;

    transition: opacity 0.4s ease,
                visibility 0.4s ease;

    z-index: 1001;
}

/* MENU ABIERTO */

.menu-overlay.active {
    opacity: 1;
    visibility: visible;
}

/* ENLACES */

.menu-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
}

.menu-links a {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.8rem, 6vw, 5rem);
    font-weight: 600;

    color: #FFFFFF;
    text-decoration: none;

    transition: color 0.3s ease,
                transform 0.3s ease;
}

/* HOVER DE LOS ENLACES */

.menu-links a:hover {
    color: #E8CFDC;
    transform: scale(1.08);
}

/* RESPONSIVE */

@media (max-width: 37.5rem) {

    .menu-btn {
        width: 3.5rem;
        height: 3.5rem;
        top: 1rem;
        right: 5%;
        gap: 0.35rem;
    }

    .menu-btn span {
        width: 2.1rem;
        height: 0.22rem;
    }

    .menu-links a {
        font-size: clamp(2.5rem, 10vw, 3.5rem);
    }

}

En esta parte utilicé AI para que sea responsive: 
Prompt:Me puedes dar los códigos para que todo sea adaptable a móvil?

AI 

CSS adaptable a móviles
Ve al final de tu archivo style.css.

Busca el bloque anterior que comienza con @media (max-width: 37.5rem) y reemplázalo completamente por este código. Así evitamos que dos versiones de estilos móviles se contradigan.

/* ========================================
   RESPONSIVE - TABLETS Y CELULARES
======================================== */

@media (max-width: 37.5rem) {

    /* --------------------------------
       CONFIGURACIÓN GENERAL
    -------------------------------- */

    body {
        overflow-x: hidden;
    }


    /* --------------------------------
       HEADER
    -------------------------------- */

    .header {
        padding: 2rem 0;
    }

    .header p {
        font-size: 1rem;
    }

    .menu {
        width: 2.8rem;
        height: 2.4rem;
        top: 1.2rem;
        right: 5%;
        gap: 0.3rem;
    }

    .menu span {
        width: 1.8rem;
        height: 0.18rem;
    }


    /* --------------------------------
       NOMBRE
    -------------------------------- */

    .nombre h1 {
        font-size: clamp(2.3rem, 9vw, 3.5rem);
        padding: 0 0.5rem;
        margin-bottom: 1.5rem;
    }


    /* --------------------------------
       COLLAGE
    -------------------------------- */

    .collage {
        width: 100%;
        height: 14rem;
        margin: 0 auto;
    }

    .collage img {
        width: 24%;
        height: 8.5rem;
        border-radius: 1rem;
    }

    .collage img:nth-child(1) {
        left: 5%;
        top: 2rem;
        transform: rotate(-35deg);
    }

    .collage img:nth-child(2) {
        left: 25%;
        top: 0;
        transform: rotate(-5deg);
    }

    .collage img:nth-child(3) {
        left: 48%;
        top: 1rem;
        transform: rotate(12deg);
    }

    .collage img:nth-child(4) {
        left: 71%;
        top: 1.5rem;
        transform: rotate(25deg);
    }


    /* --------------------------------
       ESPECIALIDAD
    -------------------------------- */

    .nombre h2 {
        font-size: clamp(1.5rem, 5.5vw, 2rem);
        line-height: 1.5;
        padding: 0 0.5rem;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }


    /* --------------------------------
       PROYECTOS
    -------------------------------- */

    .proyectos {
        width: 100%;
        overflow: hidden;
    }

    .proyectos h2 {
        font-size: 3rem;
        margin-bottom: 2rem;
    }


    /* --------------------------------
       CARRUSEL
    -------------------------------- */

    .categorias {
        gap: 2rem;

        padding: 2rem calc((100vw - 12rem) / 2) 4rem;

        overflow-x: auto;
        overflow-y: hidden;

        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scroll-padding-inline: 50%;

        cursor: grab;
    }

    .categorias article {
        flex: 0 0 12rem;
        width: 12rem;
        scroll-snap-align: center;
    }

    .categorias article img {
        width: 100%;
        height: 18rem;
        border-radius: 1.2rem;
    }

    .portadas {
        transform: rotate(-10deg);
    }

    .carteles {
        transform: rotate(0deg);
    }

    .producciones {
        transform: rotate(10deg);
    }


    /* --------------------------------
       BOTONES DE PROYECTOS
    -------------------------------- */

    .categorias article a span {
        font-size: 1rem;
        padding: 0.65rem 1.2rem;
        margin-top: 1.2rem;
    }


    /* --------------------------------
       FOOTER
    -------------------------------- */

    .footer {
        padding-bottom: 1.2rem;
    }


    /* FRANJAS DECORATIVAS */

    .franja-decorativa {
        gap: 0.8rem;
        margin-bottom: 1.5rem;
    }

    .franja-decorativa span {
        flex: 0 0 7rem;
        height: 1.6rem;
        border: 0.25rem solid #FFFFFF;
    }


    /* ICONOS */

    .footer nav {
        gap: clamp(1rem, 5vw, 2rem);
        padding: 0 0.5rem;
    }

    .footer nav a {
        font-size: clamp(2rem, 9vw, 2.8rem);
    }

}


/* ========================================
   CELULARES PEQUEÑOS
======================================== */

@media (max-width: 22.5rem) {

    .nombre h1 {
        font-size: 2.1rem;
    }

    .nombre h2 {
        font-size: 1.35rem;
    }

    .collage {
        height: 12rem;
    }

    .collage img {
        height: 7rem;
    }

    .proyectos h2 {
        font-size: 2.5rem;
    }

    .categorias article {
        flex-basis: 11rem;
        width: 11rem;
    }

    .categorias article img {
        height: 16rem;
    }

    .footer nav {
        gap: 0.8rem;
    }

    .footer nav a {
        font-size: 1.9rem;
    }

}
