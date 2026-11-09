Bitácora de Proceso - Solemne 2
¿Qué hice en el sitio?
Me encargué de hacer la estructura html de body y ajustar algunos códigos en la parte de CSS, además de investigar cómo se hace el carrusel para la parte de cambiando vidas.

¿Qué dificultades tuve y cómo las resolví?
No sabía cómo hacer el carrusel investigué cómo y la IA me ayudó, se me dificultó un poco el ajustar el tamaño de las imágenes pero viédo tutoriales lo logre. 


Damos una segunda oportunidad a quienes más lo necesitan

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Amor de Garritas</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800&family=Barlow+Condensed:wght@300;400;600;700&display=swap" rel="stylesheet">

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="./css/estilos.css">
</head>
<body>

  <!-- HEADER -->
  <header>
    <a href="#inicio" class="logo">
      <img src="./img/Logotipo Teal Amor de Garritas.png" alt="Amor de Garritas Logo">
    </a>
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#donar">Donar</a>
    </nav>
    <div class="header-accion">
      <a href="#adopta" class="boton-verde">Adoptar</a>
    </div>
  </header>

  <!-- INICIO -->
  <section id="inicio" class="seccion-inicio">
    <div class="banner-verde">
      <h1>Damos una segunda oportunidad a quienes más lo necesitan</h1>
      <p>En Amor de Garritas rescatamos, rehabilitamos y buscamos familias definitivas para perros y gatos en situación de abandono o maltrato. ¡Tú puedes transformar sus vidas!</p>
    </div>

    <!-- COLLAGE  -->
    <div class="collage">
      <img src="./img/gato1.png" alt="Gato 1" class="foto1">
      <img src="./img/WhatsApp Image 2026-10-26 at 00.06.07.jpeg" alt="Perro 1" class="foto2">
      <img src="./img/WhatsApp Image 2026-10-25 at 23.50.38.jpeg" alt="Perro 2" class="foto3">
      <img src="./img/WhatsApp Image 2026-10-25 at 23.49.56.jpeg" alt="Perro 3" class="foto4">
      <img src="./img/WhatsApp Image 2026-10-25 at 23.51.12.jpeg" alt="Gato 2" class="foto5">
      <img src="./img/Logotipo Teal Amor de Garritas.png" alt="" class="logo-mini">
    </div>
  </section>

  <!-- EN ADOPCION -->
  <section id="adopta" class="seccion">
    <div class="titulo-seccion">
      <span class="subtitulo">Adopta</span>
      <h2>MASCOTAS EN ADOPCIÓN</h2>
      <p class="bajada">Encuentra a tu nuevo mejor amigo</p>
    </div>

    <div class="grid-mascotas">
      <div class="tarjeta-mascota">
        <img src="./img/WhatsApp Image 2026-10-25 at 23.49.56.jpeg" alt="Charlotte">
        <h3>Charlotte</h3>
        <div class="datos-mascota">
          <span><span class="material-icons">pets</span> 2 años</span>
          <span><span class="material-icons">female</span> Hembra</span>
        </div>
        <p class="descripcion-mascota">Cariñosa y juguetona</p>
        <a href="#" target="_blank" class="boton-beige">Conocer más</a>
      </div>

      <div class="tarjeta-mascota">
        <img src="./img/WhatsApp Image 2026-10-25 at 23.50.38.jpeg" alt="Milo">
        <h3>Milo</h3>
        <div class="datos-mascota">
          <span><span class="material-icons">pets</span> 1 año</span>
          <span><span class="material-icons">male</span> Macho</span>
        </div>
        <p class="descripcion-mascota">Sociable y energético</p>
        <a href="#" target="_blank" class="boton-beige">Conocer más</a>
      </div>

      <div class="tarjeta-mascota">
        <img src="./img/WhatsApp Image 2026-10-25 at 23.51.12.jpeg" alt="Tom">
        <h3>Tom</h3>
        <div class="datos-mascota">
          <span><span class="material-icons">pets</span> 6 años</span>
          <span><span class="material-icons">male</span> Macho</span>
        </div>
        <p class="descripcion-mascota">Tranquilo y cuidador</p>
        <a href="#" target="_blank" class="boton-beige">Conocer más</a>
      </div>
    </div>

    <div class="contenedor-boton">
      <a href="#" target="_blank" class="boton-beige-grande">Ver todas las mascotas</a>
    </div>
  </section>

  <!-- ADOPTAR -->
  <section class="seccion-pasos">
    <h2>¿CÓMO ADOPTAR?</h2>
    <p class="subtitulo-pasos">Adoptar es más fácil de lo que imaginas</p>

    <div class="grid-pasos">
      <div class="paso">
        <div class="numero">01</div>
        <div class="icono"><span class="material-icons">search</span></div>
        <h3>ELIGE</h3>
        <p>Encuentra una mascota que conecte contigo</p>
      </div>

      <div class="flecha-paso"><span class="material-icons">arrow_forward</span></div>

      <div class="paso">
        <div class="numero">02</div>
        <div class="icono"><span class="material-icons">assignment</span></div>
        <h3>POSTULA</h3>
        <p>Completa nuestro formulario de inscripción</p>
      </div>

      <div class="flecha-paso"><span class="material-icons">arrow_forward</span></div>

      <div class="paso">
        <div class="numero">03</div>
        <div class="icono"><span class="material-icons">pets</span></div>
        <h3>CONOCE</h3>
        <p>Coordina un encuentro con tu nuevo amigo</p>
      </div>

      <div class="flecha-paso"><span class="material-icons">arrow_forward</span></div>

      <div class="paso">
        <div class="numero">04</div>
        <div class="icono"><span class="material-icons">home</span></div>
        <h3>ADOPTA</h3>
        <p>Dale un hogar lleno de amor</p>
      </div>
    </div>

    <div class="contenedor-boton">
      <a href="#" target="_blank" class="boton-verde">Adoptar</a>
    </div>
  </section>

  <!-- DUDAS -->
  <section class="banner-dudas">
    <div class="imagen-dudas">
      <img src="./img/WhatsApp Image 2026-10-25 at 23.51.49.jpeg" alt="Tienes dudas">
    </div>
    <div class="texto-dudas">
      <h2>¿Tienes dudas?</h2>
      <p>No te preocupes, estamos aquí para ayudarte en todo el proceso</p>
      <a href="#" target="_blank" class="boton-verde">Contáctanos</a>
    </div>
  </section>

  <!-- QUIENES SOMOS -->
  <section id="nosotros" class="seccion-nosotros">
    <h2>¿QUÍENES SOMOS?</h2>

    <div class="contenido-nosotros">
      <div class="texto-nosotros">
        <p>Fundación Amor de Garritas Chile rescata y protege animales en situación de abandono, brindándoles alimentación, cuidados y refugio. Su objetivo es darles una segunda oportunidad y encontrarles hogares responsables.</p>
      </div>
      <div class="imagen-nosotros">
        <img src="./img/WhatsApp Image 2026-10-25 at 23.52.45.jpeg" alt="Quienes somos">
      </div>
    </div>

    <div class="contenedor-boton">
      <a href="#" target="_blank" class="boton-beige-grande">Conocer más</a>
    </div>
  </section>

  <!-- PQ ES IMPORTANTE ADOPTAR -->
  <section class="seccion-importante">
    <div class="bloque-importante">
      <h2>¿Por qué es importante adoptar?</h2>
      <div class="caja-texto">
        <p>Adoptar brinda una segunda oportunidad a un animal que necesita un hogar y permite que los refugios sigan ayudando a otros. Además, implica asumir un compromiso con su cuidado, salud y bienestar durante toda su vida.</p>
      </div>
    </div>
    <div class="imagen-importante">
      <img src="./img/cats-4372525_1280.jpg" alt="Por qué es importante adoptar">
    </div>
  </section>

USO DE IA 

  <!-- HISTORIAS FELICES -->
  <section class="seccion-historias">
    <h2>HISTORIAS FELICES</h2>

    <div class="carrusel-historias">

      <div class="slide-historia" id="historia1">
        <a href="#historia3" class="flecha-carrusel flecha-izq"><span class="material-icons">keyboard_double_arrow_left</span></a>
        <div class="tarjeta-historia">
          <p class="texto-historia">Adoptar fue la mejor decisión que tomamos. Llegó a nuestra casa y rápidamente se convirtió en parte de la familia.</p>
          <div class="foto-antes-despues">
            <span class="etiqueta">Antes</span>
            <img src="./img/WhatsApp Image 2026-10-26 at 00.06.37.jpeg" alt="Gato antes">
          </div>
          <div class="foto-antes-despues">
            <span class="etiqueta">Después</span>
            <img src="./img/WhatsApp Image 2026-10-26 at 00.06.49.jpeg" alt="Gato después">
          </div>
        </div>
        <a href="#historia2" class="flecha-carrusel flecha-der"><span class="material-icons">keyboard_double_arrow_right</span></a>
      </div>

      <div class="slide-historia" id="historia2">
        <a href="#historia1" class="flecha-carrusel flecha-izq"><span class="material-icons">keyboard_double_arrow_left</span></a>
        <div class="tarjeta-historia">
          <p class="texto-historia">Adoptar fue la mejor decisión que tomamos. Llegó a nuestra casa y rápidamente se convirtió en parte de la familia.</p>
          <div class="foto-antes-despues">
            <span class="etiqueta">Antes</span>
            <img src="./img/WhatsApp Image 2026-10-26 at 00.04.37.jpeg" alt="Perro antes">
          </div>
          <div class="foto-antes-despues">
            <span class="etiqueta">Después</span>
            <img src="./img/WhatsApp Image 2026-10-26 at 00.04.50.jpeg" alt="Perro después">
          </div>
        </div>
        <a href="#historia3" class="flecha-carrusel flecha-der"><span class="material-icons">keyboard_double_arrow_right</span></a>
      </div>

      <div class="slide-historia" id="historia3">
        <a href="#historia2" class="flecha-carrusel flecha-izq"><span class="material-icons">keyboard_double_arrow_left</span></a>
        <div class="tarjeta-historia">
          <p class="texto-historia">Adoptar fue la mejor decisión que tomamos. Llegó a nuestra casa y rápidamente se convirtió en parte de la familia.</p>
          <div class="foto-antes-despues">
            <span class="etiqueta">Antes</span>
            <img src="./img/WhatsApp Image 2026-10-26 at 00.01.58.jpeg" alt="Mascota antes">
          </div>
          <div class="foto-antes-despues">
            <span class="etiqueta">Después</span>
            <img src="./img/WhatsApp Image 2026-10-26 at 00.01.45.jpeg" alt="Mascota después">
          </div>
        </div>
        <a href="#historia1" class="flecha-carrusel flecha-der"><span class="material-icons">keyboard_double_arrow_right</span></a>
      </div>

    </div>
  </section>
 
  <!-- FOOTER -->
  <footer>
    <div class="logo-footer">
      <img src="./img/Logotipo Teal Amor de Garritas.png" alt="Amor de Garritas Logo Footer">
    </div>

    <div class="banner-footer">
      <div class="columna-footer">
        <h3>Contacto</h3>
        <p><i class="bi bi-telephone"></i> +56 9 3670 8624</p>
        <p><i class="bi bi-instagram"></i> @amordegarritas.cl</p>
      </div>

      <div class="columna-footer columna-links">
        <h3>Inicio</h3>
        <a href="#adopta">Adopta</a>
        <a href="#nosotros">Somos</a>
      </div>

      <div class="columna-footer columna-redes">
        <h3>Síguenos</h3>
        <a href="#"><i class="bi bi-youtube"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-facebook"></i></a>
      </div>
    </div>
  </footer>
</body>
</html>





