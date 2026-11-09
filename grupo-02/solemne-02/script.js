/*  Interacciones
   1. Cuenta regresiva 
   2. Carrusel  
   3. Controles del video en la página de Entradas */

/* Cuenta regresiva */
(function cuentaRegresiva() {
  const destino = new Date("2027-08-26T12:00:00+01:00"); 
  const salida = document.getElementById("cuenta");
  if (!salida) return;

  const dos = (n) => String(n).padStart(2, "0");

  function actualizar() {
    let resto = Math.max(0, Math.floor((destino - new Date()) / 1000));
    const dias = Math.floor(resto / 86400); resto %= 86400;
    const horas = Math.floor(resto / 3600); resto %= 3600;
    const minutos = Math.floor(resto / 60);
    const segundos = resto % 60;
   
    salida.textContent = `${String(dias).padStart(3, " ")} : ${dos(horas)}  : ${dos(minutos)}  :  ${dos(segundos)}`;
  }

  actualizar();
  setInterval(actualizar, 1000);
})();

/* Carrusel */
(function carrusel() {
  const pista = document.getElementById("pista");
  if (!pista) return;

  const PASO = 76.625;        // dos fotos con su separación
  const ESPERA = 1500;        // tiempo que se queda quieta cada vista
  const DURACION = 600;       // duración del desplazamiento
  const totalVistas = Math.ceil(pista.children.length / 2);

  // Copia de las dos primeras fotos al final, para que el ciclo sea continuo
  pista.appendChild(pista.children[0].cloneNode(true));
  pista.appendChild(pista.children[1].cloneNode(true));

  let vista = 0;
  let temporizador;

  function mover(animar) {
    pista.style.transition = animar ? `transform ${DURACION}ms cubic-bezier(.65, 0, .35, 1)` : "none";
    pista.style.transform = `translateX(${-vista * PASO}rem)`;
  }

  function siguiente() {
    vista += 1;
    mover(true);
    if (vista === totalVistas) {
      // vuelve al inicio 
      setTimeout(() => { vista = 0; mover(false); }, DURACION + 20);
    }
  }

  function iniciar() { detener(); temporizador = setInterval(siguiente, ESPERA); }
  function detener() { clearInterval(temporizador); }

  // Se pausa mientras el mouse está encima
  pista.parentElement.addEventListener("mouseenter", detener);
  pista.parentElement.addEventListener("mouseleave", iniciar);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) iniciar();
})();

/* video de la página de Entradas: play/pausa y sonido */
(function controlesVideo() {
  const video = document.getElementById("video-hero");
  const play = document.getElementById("boton-play");
  const sonido = document.getElementById("boton-sonido");
  if (!video || !play || !sonido) return;

  function pintar() {
    const enPausa = video.paused;
    play.querySelector("img").src = enPausa ? "assets/img/icono-play.png" : "assets/img/icono-pausa.png";
    play.setAttribute("aria-label", enPausa ? "Reproducir video" : "Pausar video");
    sonido.querySelector("img").src = video.muted ? "assets/img/icono-silencio.png" : "assets/img/icono-sonido.png";
    sonido.setAttribute("aria-label", video.muted ? "Activar sonido" : "Silenciar");
  }

  play.addEventListener("click", () => { video.paused ? video.play().catch(() => {}) : video.pause(); });
  sonido.addEventListener("click", () => { video.muted = !video.muted; pintar(); });
  video.addEventListener("play", pintar);
  video.addEventListener("pause", pintar);
  pintar();
})();
