¿Qué hice?
1. Cambie el código para no tener el div class en ciertos puntos. 
2. Hice la parte de boletería modo responsive y que se ajustara al formato, ya que el anterior se veía muy disperso. 
3. Ajuste el color para adecuarlo a la maqueta de figma.

¿Qué aprendí?
1. Tenía nociones acerca del div class y que no se puede ocupar en todo. Aprendí a cómo funciona lo semántico y cómo aplicarlo. 
2. Aprendí que hay funciones específicas para adecuar los botones, cajas, junto con la grilla como la flexbox. 
3. Aprendí que si se puede agregar tipografías muy específicas al código, como también variaciones del color que pueden ser cónicas, gradientes, etc.
4. Finalmente hay muchas funciones que se pueden hacer con código y ahora sé cuál es la diferencia entre figma y codificación: el primero es para hacer una maqueta web y el segundo es una página real.

¿Qué dificultades tuve y cómo las resolví?
1. Tuve dificultades con el color ya que al principio quedaba sin gradiente y se veía muy plano, por lo que ocupé IA para saber cómo poner el gradiente cónico que teníamos en Figma.
2. No supe bien cómo cambiar el div class a un listado, a pesar de tenerlo claro, pero el código ya estaba listo junto con el css, antes de recurrir a la IA busqué en las páginas y presentaciones de clase, pero preferí ocupar IA para no arruinar o desordenar lo que ya estaba hecho en el código.


**Código antes:**
   HTTP - min-width: 8rem;           /* Ancho mínimo para que no se aplasten */} /* Los títulos de columna: MENÚ, REDES, CONTACTO, AUSPICIA */.footer-col h4 {    font-size: 0.85rem;        /* Tamaño pequeño */    font-weight: normal;       /* Sin negrita */    text-transform: uppercase; /* Mayúsculas */} /* Las listas de enlaces del footer */.footer-col ul {    display: flex;             /* Activa flexbox */    flex-direction: column;    /* Apila los enlaces */    gap: 1.5rem;               /* Espacio generoso entre enlaces, como en el diseño */} /* Los enlaces del footer */.footer-col a {    color: #FFFFFF;            /* Blanco de la paleta */} /* Al pasar el mouse sobre un enlace del footer */.footer-col a:hover {    text-decoration: underline; /* Se subraya para que se note que es un enlace */} /* La caja con los logos de auspiciadores */.sponsors {    display: flex;             /* Activa flexbox */    flex-direction: column;    /* Apila los logos */    gap: 1rem;                 /* Espacio entre logos */} /* Cada logo de auspiciador */.sponsors img {    width: 7rem;                        /* Todos con el mismo ancho */    filter: brightness(0) invert(1);    /* Primero pone el logo en negro puro y luego lo invierte a blanco */} /* El texto legal del final */.footer-legal {    margin-top: 3rem;          /* Separa el texto legal de las columnas */    font-size: 1rem;           /* Tamaño del texto legal */    color: #FFFFFF;            /* Blanco de la paleta */} /* ---------- 9. ACCESIBILIDAD ---------- */ /* Cuando alguien navega con teclado y un enlace queda seleccionado */a:focus-visible {    outline: 0.15rem solid #1576BB; /* Dibuja un contorno azul para ver dónde estás */    outline-offset: 0.2rem;         /* Lo separa un poco del elemento */ }
   CSS - <p class="footer-legal">© 2026 Between ends. Todos los derechos reservados.<br>            <a href="#">Términos y condiciones</a> • <a href="#">Política de privacidad</a>        </p>    </footer>     <script>        window.addEventListener('load', () => {            // Si la persona tiene activado "reducir movimiento", no animamos            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;             const box = document.querySelector('.covers');            const speed = () => (Math.random() * 0.6 + 0.3) * (Math.random() < 0.5 ? -1 : 1);             const items = [...box.querySelectorAll('img')].map(el => {                const x = el.offsetLeft;                const y = el.offsetTop;                // pasamos la posición a transform para mover todo con un solo método                el.style.left = '0';                el.style.top = '0';                return { el, x, y, vx: speed(), vy: speed() };            });             function animate() {                const maxX = box.clientWidth;                const maxY = box.clientHeight;                 items.forEach(it => {                    const w = it.el.offsetWidth;                    const h = it.el.offsetHeight;                     it.x += it.vx;                    it.y += it.vy;                     // rebote como el logo del DVD                    if (it.x <= 0 || it.x + w >= maxX) {                        it.vx *= -1;                        it.x = Math.max(0, Math.min(it.x, maxX - w));                    }                    if (it.y <= 0 || it.y + h >= maxY) {                        it.vy *= -1;                        it.y = Math.max(0, Math.min(it.y, maxY - h));                    }                     it.el.style.transform = `translate(${it.x}px, ${it.y}px)`;                });                 requestAnimationFrame(animate);            }             animate();        });    </script></body></html>
             
**Prompt usado:**
cómo puedo hacer este difuminado de colores en estas secciones
así esta el css por el momento y el html te lo mando actualizado también

**Código después:**

En tu imagen el degradado azul ↔ morado aparece en tres lugares: el menú, los textos del banner (la fecha y la frase) y el logo. Cada uno se resuelve distinto.
Texto con degradado (menú y banner)
El color de CSS solo acepta un color sólido, así que el truco es poner el degradado como fondo y recortarlo con la forma de las letras:
background: linear-gradient(...) pone el degradado detrás del texto.
background-clip: text hace que el fondo solo se vea donde hay letras.
-webkit-text-fill-color: transparent vuelve transparente el relleno de las letras, para que se vea el degradado que hay debajo.
Paso 1: agrega una regla nueva
Pégala al final de la sección 2 (Banner), antes de /* ---------- 3. PORTADAS ---------- */:
css
/* Texto con degradado (menú y textos del banner) */
.nav-links a,
.banner-text p {
    background: linear-gradient(180deg, #1576BB 0%, #450B69 100%); /* El degradado de la paleta */
    background-clip: text;                /* El fondo solo se ve dentro de las letras */
    -webkit-background-clip: text;        /* Lo mismo, para Safari y navegadores más antiguos */
    -webkit-text-fill-color: transparent; /* Letras transparentes para que se vea el degradado */
}
Paso 2: borra el color que ya no sirve
En la regla .banner-text p:last-child, borra esta línea:
css
color: #1576BB;    /* Azul de la paleta */
Con las letras transparentes no tiene efecto, y solo confunde cuando vuelvas a leer el código.
Cómo cambiar la dirección o la intensidad
En tu imagen, la frase “Tres días, tres escenarios…” va de morado arriba a azul abajo. Eso es al revés de la regla de arriba. Para invertirla, agrega esto debajo:
css
.banner-text p:last-child {
    background-image: linear-gradient(180deg, #450B69 0%, #1576BB 100%); /* Morado arriba, azul abajo */
}
Aquí tienes que escribir background-image y no background. La forma corta background borra el background-clip: text que pusiste antes, y el texto se vería como un rectángulo de color. Es un error muy común.
Otras cosas que puedes probar:
90deg hace el degradado de izquierda a derecha, en vez de arriba hacia abajo.
Si en un texto de una sola línea el degradado casi no se nota, es porque ese cambio de color ocurre en muy poco espacio. Ahí conviene un degradado horizontal (90deg).
El logo
El logo es una imagen (logotipo.png), y CSS no puede cambiarle el color a los píxeles de un <img>. Entonces el degradado tiene que venir dentro del archivo. Lo más simple es exportarlo desde Figma ya con el degradado, como PNG con fondo transparente o como SVG. Si ya está así, no tienes que hacer nada. Por tu captura, parece que es el caso.
Un detalle de tu CSS
En la regla .ticket, la línea de min-width y la de padding quedaron pegadas en una sola línea:
css
min-width: 16rem;          /* Pero nunca se achica más de 16rem */    padding: 0.8rem 1rem 1rem; ...
Funciona, porque el comentario se cierra antes del padding. Pero conviene separarlas con un Enter para que no se pierda de vista en el futuro.
Si el degradado no se ve donde esperabas, dime en cuál de los textos y lo ajustamos. También puede ser que quisieras degradado en algo distinto a lo que te expliqué, y lo vemos.

**Código antes:**
  CSS:     min-width: 8rem;           /* Ancho mínimo para que no se aplasten */} /* Los títulos de columna: MENÚ, REDES, CONTACTO, AUSPICIA */.footer-col h4 {    font-size: 0.85rem;        /* Tamaño pequeño */    font-weight: normal;       /* Sin negrita */    text-transform: uppercase; /* Mayúsculas */} /* Las listas de enlaces del footer */.footer-col ul {    display: flex;             /* Activa flexbox */    flex-direction: column;    /* Apila los enlaces */    gap: 1.5rem;               /* Espacio generoso entre enlaces, como en el diseño */} /* Los enlaces del footer */.footer-col a {    color: #FFFFFF;            /* Blanco de la paleta */} /* Al pasar el mouse sobre un enlace del footer */.footer-col a:hover {    text-decoration: underline; /* Se subraya para que se note que es un enlace */} /* La caja con los logos de auspiciadores */.sponsors {    display: flex;             /* Activa flexbox */    flex-direction: column;    /* Apila los logos */    gap: 1rem;                 /* Espacio entre logos */} /* Cada logo de auspiciador */.sponsors img {    width: 7rem;                        /* Todos con el mismo ancho */    filter: brightness(0) invert(1);    /* Primero pone el logo en negro puro y luego lo invierte a blanco */} /* El texto legal del final */.footer-legal {    margin-top: 3rem;          /* Separa el texto legal de las columnas */    font-size: 1rem;           /* Tamaño del texto legal */    color: #FFFFFF;            /* Blanco de la paleta */} /* ---------- 9. ACCESIBILIDAD ---------- */ /* Cuando alguien navega con teclado y un enlace queda seleccionado */a:focus-visible {    outline: 0.15rem solid #1576BB; /* Dibuja un contorno azul para ver dónde estás */    outline-offset: 0.2rem;         /* Lo separa un poco del elemento */}
  
**Prompt usado:**
 por qué me marca error en el css
 
**Respuesta:**
Casi seguro es esta regla que agregaste (sección 2, al final):
css
.nav-links a,
.banner-text p {
    background: linear-gradient(180deg, #1576BB 0%, #450B69 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
Te falta la línea estándar background-clip: text;. En mi regla anterior había dos: la normal y la que empieza con -webkit-, y al copiarla quedó solo la segunda. VS Code lo marca con un aviso del tipo “Also define the standard property ‘background-clip’ for compatibility”. Es un aviso de compatibilidad, no algo que rompa la página: en tu navegador el degradado debería verse igual. Aun así, conviene arreglarlo.
Cómo corregirlo
Deja la regla así (agrega una línea y cambia el comentario, que quedó apuntando a una línea que ya no existe):
css
.nav-links a,
.banner-text p {
    background: linear-gradient(180deg, #1576BB 0%, #450B69 100%); /* El degradado de la paleta */
    background-clip: text;                /* El fondo solo se ve dentro de las letras */
    -webkit-background-clip: text;        /* Lo mismo, para Safari y navegadores más antiguos */
    -webkit-text-fill-color: transparent; /* Letras transparentes para que se vea el degradado */
}
El orden importa: background va antes que background-clip, porque la forma corta background borra el recorte si viene después.
Revisé el resto del archivo y no vi otras llaves sin cerrar ni errores de escritura. La regla de .ticket que tenía el padding pegado al comentario ya quedó separada.
Si el error que ves es otro, dime qué texto exacto aparece al pasar el mouse sobre la línea subrayada (o en qué número de línea está) y lo revisamos.

**Código antes:**
    min-width: 8rem;           /* Ancho mínimo para que no se aplasten */} /* Los títulos de columna: MENÚ, REDES, CONTACTO, AUSPICIA */.footer-col h4 {    font-size: 0.85rem;        /* Tamaño pequeño */    font-weight: normal;       /* Sin negrita */    text-transform: uppercase; /* Mayúsculas */} /* Las listas de enlaces del footer */.footer-col ul {    display: flex;             /* Activa flexbox */    flex-direction: column;    /* Apila los enlaces */    gap: 1.5rem;               /* Espacio generoso entre enlaces, como en el diseño */} /* Los enlaces del footer */.footer-col a {    color: #FFFFFF;            /* Blanco de la paleta */} /* Al pasar el mouse sobre un enlace del footer */.footer-col a:hover {    text-decoration: underline; /* Se subraya para que se note que es un enlace */} /* La caja con los logos de auspiciadores */.sponsors {    display: flex;             /* Activa flexbox */    flex-direction: column;    /* Apila los logos */    gap: 1rem;                 /* Espacio entre logos */} /* Cada logo de auspiciador */.sponsors img {    width: 7rem;                        /* Todos con el mismo ancho */    filter: brightness(0) invert(1);    /* Primero pone el logo en negro puro y luego lo invierte a blanco */} /* El texto legal del final */.footer-legal {    margin-top: 3rem;          /* Separa el texto legal de las columnas */    font-size: 1rem;           /* Tamaño del texto legal */    color: #FFFFFF;            /* Blanco de la paleta */} /* ---------- 9. ACCESIBILIDAD ---------- */ /* Cuando alguien navega con teclado y un enlace queda seleccionado */a:focus-visible {    outline: 0.15rem solid #1576BB; /* Dibuja un contorno azul para ver dónde estás */    outline-offset: 0.2rem;         /* Lo separa un poco del elemento */ }
    
**Prompt usado:**
como se puede hacer que el degradado de fondo del line up quede así? así está en figma y ya corregi lo del codigo de css que me enviaste

**Respuesta:**

El problema está en la regla .lineup, en la línea del degradado. Después del comentario quedó un punto suelto (.) al final, probablemente al copiar y pegar:
css
background: conic-gradient(from 215deg at 32% 38%, #2F4A9F 0%, #1576BB 40%, #450B69 100%); /* Degradado angular, como en Figma */.
Ese . no pertenece a ningún lado y el editor no sabe qué hacer con él. Por eso a veces un solo carácter de más genera dos mensajes de error en el mismo lugar, y casi seguro son esos dos.
Cómo corregirlo
Borra el punto (y el espacio que queda después del comentario). La línea debe terminar así:
css
background: conic-gradient(from 215deg at 32% 38%, #2F4A9F 0%, #1576BB 40%, #450B69 100%); /* Degradado angular, como en Figma */
Revisé el resto del archivo y no encontré otras llaves sin cerrar ni comentarios abiertos. Guarda y mira si los errores desaparecen.
Si te sigue marcando algo, pasa el mouse sobre la línea subrayada en rojo y dime el número de línea y el mensaje exacto que aparece, así veo si es otro caso.
Un detalle para ordenar más adelante (no es un error)
En la sección 2, la regla .banner-text p:last-child está antes de la regla compartida .nav-links a, .banner-text p. Hoy funciona, pero solo porque la primera es más específica. Si algún día el degradado de esa frase no se ve como esperas, mueve la regla p:last-child para que quede después de la compartida. Así se lee más claro: primero lo general, luego la excepción.

**Código antes:**
    min-width: 8rem;           /* Ancho mínimo para que no se aplasten */} /* Los títulos de columna: MENÚ, REDES, CONTACTO, AUSPICIA */.footer-col h4 {    font-size: 0.85rem;        /* Tamaño pequeño */    font-weight: normal;       /* Sin negrita */    text-transform: uppercase; /* Mayúsculas */} /* Las listas de enlaces del footer */.footer-col ul {    display: flex;             /* Activa flexbox */    flex-direction: column;    /* Apila los enlaces */    gap: 1.5rem;               /* Espacio generoso entre enlaces, como en el diseño */} /* Los enlaces del footer */.footer-col a {    color: #FFFFFF;            /* Blanco de la paleta */} /* Al pasar el mouse sobre un enlace del footer */.footer-col a:hover {    text-decoration: underline; /* Se subraya para que se note que es un enlace */} /* La caja con los logos de auspiciadores */.sponsors {    display: flex;             /* Activa flexbox */    flex-direction: column;    /* Apila los logos */    gap: 1rem;                 /* Espacio entre logos */} /* Cada logo de auspiciador */.sponsors img {    width: 7rem;                        /* Todos con el mismo ancho */    filter: brightness(0) invert(1);    /* Primero pone el logo en negro puro y luego lo invierte a blanco */} /* El texto legal del final */.footer-legal {    margin-top: 3rem;          /* Separa el texto legal de las columnas */    font-size: 1rem;           /* Tamaño del texto legal */    color: #FFFFFF;            /* Blanco de la paleta */} /* ---------- 9. ACCESIBILIDAD ---------- */ /* Cuando alguien navega con teclado y un enlace queda seleccionado */a:focus-visible {    outline: 0.15rem solid #1576BB; /* Dibuja un contorno azul para ver dónde estás */    outline-offset: 0.2rem;         /* Lo separa un poco del elemento */ }
    
**Prompt usado:**
quedo demasiado marcado el azul con el morado

**Respuesta y Código después:**

Pasa porque en el degradado que te di, el primer color (azul, 0%) y el último (morado, 100%) son distintos. Un degradado angular da la vuelta completa, así que en el punto donde el círculo se cierra el color salta de golpe de morado a azul. Esa es la raya dura que ves bajando en diagonal desde el centro.
Cómo arreglarlo
El primer y el último color deben ser el mismo. Así el círculo cierra sin corte, y el morado queda en medio del giro en vez de al final.
En la regla .lineup, cambia esta línea:
css
background: conic-gradient(from 215deg at 32% 38%, #2F4A9F 0%, #1576BB 40%, #450B69 100%); /* Degradado angular, como en Figma */
por esta:
css
background: conic-gradient(from 0deg at 32% 38%, #1576BB 0%, #2F4A9F 25%, #450B69 60%, #2F4A9F 80%, #1576BB 100%); /* Degradado angular sin corte */
Con esto, yendo en el sentido del reloj desde arriba, el color cambia así:
Arriba (0%): azul de la paleta.
A la derecha (25%): azul más oscuro.
Abajo a la izquierda (60%): el morado.
A la izquierda (80%): vuelve al azul oscuro.
De nuevo arriba (100%): azul de la paleta, igual que al principio.
Para ajustarlo a tu gusto
Dónde queda el morado: cambia el 60%. Se mide como una vuelta: 25% es la derecha, 50% es abajo, 75% es la izquierda.
Qué tan fuerte es el morado: si sigue muy intenso, cambia 
#450B69 por un morado más suave, como 
#3A1C7C.
Qué tan marcado se ve el cambio: si todavía se nota demasiado el “abanico”, acerca los colores entre sí. Por ejemplo, cambia el 
#2F4A9F por uno más parecido a los vecinos.
El punto central: donde se juntan todos los colores (el 32% 38%) siempre se ve un pequeño “pellizco”, porque ahí confluyen todos. En Figma también pasa. Si quieres que se note menos, sube el valor del segundo número (por ejemplo 32% 20%) para llevarlo hacia arriba.
Guarda y recarga. Si el morado queda en un lado distinto al de tu diseño, dime hacia dónde debería ir y ajustamos solo el porcentaje.

/* =========================================================
   between ends — style.css
   Solo flexbox, unidades rem y %. Sin grid.
   (position solo se usa en las portadas, para el encuadre)
   Base de cálculo: 1rem = 16px (diseño de escritorio 1440px = 90rem)

   PALETA DEL GRUPO
   Azul:   #1576BB
   Morado: #450B69
   Blanco: #FFFFFF
   Negro:  #000000
   ========================================================= */

/* Carga la tipografía ProggyClean desde el archivo de la carpeta */
@font-face {
    font-family: "ProggyClean";            /* El nombre con el que la vas a usar en el resto del CSS */
    src: url("ProggyClean.ttf") format("truetype"); /* Dónde está el archivo y de qué tipo es */
    font-weight: normal;                   /* Esta fuente solo existe en peso normal */
    font-style: normal;                    /* Y sin cursiva */
    font-display: swap;                    /* Muestra texto con otra letra mientras carga la fuente */
}

/* ---------- 0. BASE ---------- */

/* Aplica a TODOS los elementos */
* {
    box-sizing: border-box; /* El padding y el borde se cuentan dentro del ancho, así nada se desborda */
    margin: 0;              /* Quita los márgenes que el navegador pone por defecto */
    padding: 0;             /* Quita los espacios internos por defecto */
}

/* Controla el tamaño base del texto */
html {
    font-size: 100%; /* Respeta el tamaño de letra del navegador (normalmente 16px = 1rem) */
}

/* El cuerpo de toda la página */
body {
    font-family: "ProggyClean", "Courier New", Courier, monospace; /* Usa ProggyClean; si falla, usa Courier */
    font-size: 1rem;           /* Tamaño de texto normal */
    line-height: 1.5;          /* Espacio entre líneas, para que se lea cómodo */
    color: #1576BB;            /* Azul de la paleta para el texto de la parte blanca */
    background-color: #FFFFFF; /* Fondo blanco */
}

/* Todas las imágenes */
img {
    max-width: 100%; /* Nunca se pasan del ancho de su contenedor */
    height: auto;    /* Mantienen su proporción al achicarse */
    display: block;  /* Evita el huequito que deja una imagen al estar "en línea" */
}

/* Todos los enlaces */
a {
    color: inherit;          /* Usan el mismo color del texto que los rodea */
    text-decoration: none;   /* Sin subrayado */
}

/* Todas las listas */
ul {
    list-style: none; /* Quita las viñetas */
}

/* ---------- 1. BARRA DE NAVEGACIÓN ---------- */

/* La franja de arriba que contiene el menú */
.navbar {
    padding: 2rem 0 1rem; /* Espacio arriba y abajo del menú, nada a los lados */
}

/* La lista de enlaces (Line up, Boletería, Playlist) */
.nav-links {
    display: flex;                   /* Pone los enlaces en fila */
    justify-content: space-around;   /* Reparte los 3 enlaces con espacio parejo, como en el diseño */
    align-items: center;             /* Los alinea al centro vertical */
    font-size: 1.3rem;               /* Tamaño del texto del menú */
}

/* ---------- 2. BANNER ---------- */

/* La sección grande con el logo y el texto */
.banner {
    display: flex;                   /* Activa flexbox para ordenar logo y texto */
    flex-direction: column;          /* Los apila uno debajo del otro */
    align-items: center;             /* Los centra horizontalmente */
    padding: 3rem 5% 2rem;           /* Aire arriba, a los lados y abajo */
}

/* La caja que envuelve al logo */
.logo {
    width: 60%;       /* El logo ocupa un poco más de la mitad del ancho, como en Figma */
    max-width: 50rem; /* Pero no crece más de 50rem en pantallas enormes */
}

/* El título h1 que contiene la imagen del logo */
.logo h1 {
    font-size: 1rem;  /* Tamaño neutro: el h1 solo sirve de envoltorio de la imagen */
    line-height: 0;   /* Quita el espacio extra de texto alrededor de la imagen */
}

/* La imagen del logo */
.logo img {
    width: 100%; /* Se estira hasta llenar la caja .logo */
}

/* La caja con la fecha y la frase */
.banner-text {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila los dos párrafos */
    align-items: center;       /* Los centra */
    text-align: center;        /* Centra el texto si pasa a dos líneas */
    width: 100%;               /* Usa todo el ancho disponible */
}

/* Cada párrafo del banner */
.banner-text p {
    max-width: 30rem; /* Limita el ancho para que la frase se corte en dos líneas como en el diseño */
}

/* El primer párrafo: la fecha y la ciudad */
.banner-text p:first-child {
    font-size: 1.3rem;      /* Tamaño de la fecha */
    margin: 1rem 0 5rem;    /* Separa la fecha del logo (arriba) y de la frase (abajo) */
}

/* El segundo párrafo: "Tres días, tres escenarios..." */
.banner-text p:last-child {
    font-size: 1.6rem; /* Un poco más grande que la fecha */
    background-image: linear-gradient(180deg, #450B69 0%, #1576BB 100%); /* Morado arriba, azul abajo */
}

/* Texto con degradado (menú y textos del banner) */
.nav-links a,
.banner-text p {
    background: linear-gradient(180deg, #1576BB 0%, #450B69 100%); /* El degradado de la paleta */
    background-clip: text;                /* El fondo solo se ve dentro de las letras */
    -webkit-background-clip: text;        /* Lo mismo, para Safari y navegadores más antiguos */
    -webkit-text-fill-color: transparent; /* Letras transparentes para que se vea el degradado */
}

/* ---------- 3. PORTADAS ---------- */

/* El cuadro donde viven y rebotan las portadas */
.covers {
    position: relative;  /* Marca este cuadro como referencia: las portadas se ubican dentro de él */
    width: 100%;         /* Ocupa todo el ancho de la página */
    height: 75rem;       /* Alto fijo: es el "encuadre" donde las portadas pueden moverse */
    overflow: hidden;    /* Lo que se salga del cuadro se corta, nunca invade el Line Up */
}

/* Cada portada */
.covers img {
    position: absolute;  /* Se ubica dentro del cuadro con los left/top que ya tiene tu HTML */
    width: 8rem;         /* Tamaño de cada portada (unos 128px) */
    aspect-ratio: 1 / 1; /* Las hace cuadradas */
    object-fit: cover;   /* Rellena el cuadrado sin deformar la imagen */
}

/* ---------- 4. LINE UP ---------- */

/* Toda la sección Line Up, con el fondo degradado azul a morado */
.lineup {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila el título y los 3 días */
    padding: 3rem 6% 4rem;     /* Aire alrededor: 6% a los lados, como en Figma */
    color: #FFFFFF;            /* Todo el texto en blanco */
    background: conic-gradient(from 0deg at 32% 38%, #1576BB 0%, #2F4A9F 25%, #450B69 60%, #2F4A9F 80%, #1576BB 100%); /* Degradado angular sin corte */ 
}

/* El título "Line Up" */
.lineup h2 {
    font-size: 3.5rem;         /* Título grande */
    font-weight: normal;       /* Sin negrita, como en el diseño */
    text-transform: uppercase; /* Lo muestra en mayúsculas */
    margin-bottom: 2rem;       /* Separa el título del primer día */
}

/* Cada día (fecha + 3 escenarios) */
.lineup article {
    display: flex;             /* Activa flexbox */
    flex-wrap: wrap;           /* Permite que la fecha ocupe una fila y los escenarios otra */
    justify-content: space-between; /* Separa los 3 escenarios entre sí */
    gap: 1.5rem 3%;            /* Espacio entre la fecha y los escenarios, y entre escenarios */
    margin-bottom: 4rem;       /* Espacio entre un día y el siguiente */
}

/* La caja de la fecha */
.lineup article > header {
    display: flex;             /* Activa flexbox */
    justify-content: center;   /* Centra la barra de fecha */
    width: 100%;               /* Ocupa toda una fila para que los escenarios queden debajo */
}

/* La barra con el texto "07 de noviembre" */
.lineup header h3 {
    width: 40%;                /* La barra mide el 40% del ancho */
    padding: 0.6rem 1rem;      /* Espacio dentro de la barra */
    font-size: 1.4rem;         /* Tamaño de texto */
    font-weight: normal;       /* Sin negrita */
    text-align: center;        /* Texto centrado */
    text-transform: uppercase; /* Mayúsculas */
    background: linear-gradient(180deg, #1576BB 0%, #450B69 100%); /* Degradado de tu azul a tu morado */
}

/* Las tres columnas de escenarios */
.lineup article section {
    flex: 1;                   /* Las tres columnas se reparten el ancho por igual */
    min-width: 0;              /* Evita que una columna se ensanche por un texto largo */
}

/* El nombre del escenario: MAIN STAGE, STAGE 2, WAREHOUSE */
.lineup h4 {
    font-size: 1.9rem;                   /* Más grande que los artistas */
    font-weight: normal;                 /* Los títulos vienen en negrita, aquí no */
    text-transform: uppercase;           /* Mayúsculas */
    padding-bottom: 0.4rem;              /* Espacio entre el texto y la línea */
    margin-bottom: 0.8rem;               /* Espacio entre la línea y el primer artista */
    border-bottom: 0.2rem solid #FFFFFF; /* Línea blanca debajo del título del escenario */
}

/* La lista de artistas */
.lineup ul {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila los nombres uno debajo del otro */
    gap: 0.2rem;               /* Pequeño espacio entre artistas */
}

/* Cada artista */
.lineup li {
    font-size: 1.3rem;         /* Tamaño de los artistas */
    text-transform: uppercase; /* Mayúsculas */
}


/* ---------- 5. BOLETERÍA ---------- */

/* Toda la sección de entradas */
.boleteria {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    
    padding: 3rem 6% 5rem;
    gap: 1.5rem;               /* Espacio entre cada entrada */
    color: #000000;            /* Texto negro */
}

/* El título "Boletería" */
.boleteria h2 {
    font-size: 2.2rem;         /* Tamaño del título */
    font-weight: normal;       /* Sin negrita */
    text-transform: uppercase; /* Mayúsculas */
}

/* La fila con los tres tickets */
.tickets {
    display: flex;             /* Activa flexbox */
    flex-wrap: wrap;           /* En pantallas angostas, los tickets bajan */
    gap: 1.5rem;               /* Espacio entre un cuadro y otro */
}

/* La fila con los dos botones */
.botones {
    display: flex;             /* Activa flexbox */
    flex-wrap: wrap;           /* En pantallas angostas, el segundo botón baja */
    gap: 1.5rem;               /* Espacio entre botones */
}

/* Cada entrada (parece un ticket) */
.ticket {
    flex: 1 1 16rem;           /* Los tres se reparten el ancho por igual y bajan si no caben */    
    padding: 0.8rem 1rem 1rem; /* Espacio dentro del ticket */
    border: 0.1rem solid #000000; /* Borde negro fino */
    background-color: #FFFFFF; /* Fondo blanco */
}

/* El título de cada entrada: "x 1 día" */
.ticket h3 {
    font-size: 2.4rem;                   /* Texto grande */
    font-weight: normal;                 /* Sin negrita */
    text-align: center;                  /* Centrado */
    padding-bottom: 0.5rem;              /* Espacio antes de la línea */
    margin-bottom: 0.8rem;               /* Espacio después de la línea */
    border-bottom: 0.1rem solid #000000; /* Línea negra debajo del título */
}

/* Las líneas de precio */
.ticket p {
    font-size: 1.2rem;         /* Tamaño del texto de precios */
}


/* ---------- 6. BOTONES DE COMPRA ---------- */

/* La caja de cada botón (el degradado va aquí) */
.button-box {
    display: flex;             /* Activa flexbox */
    flex: 1 1 14rem;           /* Los dos botones se reparten el ancho por igual */
    border-radius: 0.6rem;     /* Esquinas redondeadas */
    background: linear-gradient(135deg, #1576BB 0%, #450B69 100%); /* Degradado de tu azul a tu morado */
}

/* El enlace dentro del botón */
.button-box a {
    display: flex;             /* Activa flexbox para centrar el texto */
    justify-content: center;   /* Centra el texto horizontalmente */
    align-items: center;       /* Centra el texto verticalmente */
    width: 100%;               /* Todo el botón es clicable */
    padding: 1.2rem 1rem;      /* Tamaño cómodo del botón */
    font-size: 1.9rem;         /* Texto grande */
    text-align: center;        /* Centra si el texto pasa a dos líneas */
    color: #FFFFFF;            /* Texto blanco */
}

/* ---------- 7. PLAYLIST ---------- */

/* La sección de la playlist */
.playlist {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila título y reproductor */
    gap: 1rem;                 /* Espacio entre título y reproductor */
    padding: 2rem 6% 5rem;     /* Aire alrededor */
    color: #000000;            /* Texto negro */
}

/* El título "Playlist" */
.playlist h2 {
    font-size: 2.2rem;         /* Tamaño del título */
    font-weight: normal;       /* Sin negrita */
    text-transform: uppercase; /* Mayúsculas */
}

/* El reproductor de Spotify */
.playlist iframe {
    width: 100%;               /* Ocupa todo el ancho */
    border: 0;                 /* Sin borde */
    border-radius: 0.75rem;    /* Esquinas redondeadas (equivale a 12px) */
}

/* ---------- 8. FOOTER ---------- */

/* Todo el pie de página, con fondo negro */
footer {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila las 3 partes: arriba, centro y legal */
    padding: 2rem 6% 1.5rem;   /* Aire alrededor */
    color: #FFFFFF;            /* Texto blanco */
    background-color: #000000; /* Fondo negro */
    font-size: 1.1rem;         /* Tamaño del texto del footer */
}

/* La franja de arriba: "¿Listos para los tres días?" + botón */
.footer-top {
    display: flex;                   /* Activa flexbox */
    justify-content: space-between;  /* Texto a la izquierda, botón a la derecha */
    align-items: center;             /* Alineados verticalmente */
    gap: 1rem;                       /* Espacio mínimo entre ellos */
    margin-bottom: 4rem;             /* Separa esta franja del resto */
}

/* El botón "Comprar entradas" del footer */
.footer-cta {
    padding: 0.5rem 1.5rem;          /* Espacio dentro del botón */
    border-radius: 0.3rem;           /* Esquinas redondeadas pequeñas */
    background: linear-gradient(135deg, #1576BB 0%, #450B69 100%); /* Mismo degradado de los otros botones */
    color: #FFFFFF;                  /* Texto blanco */
}

/* La parte central: logo + columnas de enlaces */
.footer-main {
    display: flex;                   /* Activa flexbox */
    flex-wrap: wrap;                 /* En pantallas angostas las columnas bajan */
    justify-content: space-between;  /* Reparte las columnas a lo ancho */
    gap: 2rem 3%;                    /* Espacio entre columnas */
}

/* La columna del logo y los datos del evento */
.footer-info {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila logo, fecha y lugar */
    gap: 1.2rem;               /* Espacio entre cada elemento */
    width: 25%;                /* Ocupa un cuarto del ancho */
    min-width: 12rem;          /* Pero no menos de 12rem */
}

/* El logo pequeño del footer */
.footer-info img {
    width: 40%;                /* Más pequeño que en el banner */
    min-width: 6rem;           /* Pero siempre legible */
}

/* Cada columna de enlaces (Menú, Redes, Contacto) */
.footer-col {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila los elementos */
    gap: 0.8rem;               /* Espacio entre elementos */
    min-width: 8rem;           /* Ancho mínimo para que no se aplasten */
}

/* Los títulos de columna: MENÚ, REDES, CONTACTO, AUSPICIA */
.footer-col h4 {
    font-size: 0.85rem;        /* Tamaño pequeño */
    font-weight: normal;       /* Sin negrita */
    text-transform: uppercase; /* Mayúsculas */
}

/* Las listas de enlaces del footer */
.footer-col ul {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila los enlaces */
    gap: 1.5rem;               /* Espacio generoso entre enlaces, como en el diseño */
}

/* Los enlaces del footer */
.footer-col a {
    color: #FFFFFF;            /* Blanco de la paleta */
}

/* Al pasar el mouse sobre un enlace del footer */
.footer-col a:hover {
    text-decoration: underline; /* Se subraya para que se note que es un enlace */
}

/* La caja con los logos de auspiciadores */
.sponsors {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila los logos */
    gap: 1rem;                 /* Espacio entre logos */
}

/* Cada logo de auspiciador */
.sponsors img {
    width: 7rem;                        /* Todos con el mismo ancho */
    filter: brightness(0) invert(1);    /* Primero pone el logo en negro puro y luego lo invierte a blanco */
}

/* El texto legal del final */
.footer-legal {
    margin-top: 3rem;          /* Separa el texto legal de las columnas */
    font-size: 1rem;           /* Tamaño del texto legal */
    color: #FFFFFF;            /* Blanco de la paleta */
}

/* ---------- 9. ACCESIBILIDAD ---------- */

/* Cuando alguien navega con teclado y un enlace queda seleccionado */
a:focus-visible {
    outline: 0.15rem solid #1576BB; /* Dibuja un contorno azul para ver dónde estás */
    outline-offset: 0.2rem;         /* Lo separa un poco del elemento */
}

**Código antes:**
 <!DOCTYPE html><html lang="es"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>between ends</title>    <link rel="stylesheet" href="style.css"></head><body>    <header class="navbar">        <nav aria-label="Navegación principal">            <ul class="nav-links">                <li><a href="#LineUp">Line Up</a></li>                <li><a href="#boleteria">Boletería</a></li>                <li><a href="#playlist">Playlist</a></li>            </ul>        </nav>    </header>     <main>        <!-- BANNER -->        <section class="banner">            <div class="logo">                <h1><img src="logotipo.png" alt="between ends"></h1>            </div>            <div class="banner-text">                <p>07, 08 y 09 de noviembre - Santiago</p>                <p>Tres días, tres escenarios, un solo lugar donde todo se cruza</p>            </div>        </section>         <!-- PORTADAS ANIMADAS -->        <section class="covers">            <img src="img1.png" alt="" style="left:20.8%; top:2%">            <img src="img2.png" alt="" style="left:38.4%; top:11.3%">            <img src="img3.png" alt="" style="left:67%; top:5.3%">            <img src="img4.png" alt="" style="left:9.6%; top:16.9%">            <img src="img5.png" alt="" style="left:50.7%; top:16.9%">            <img src="img6.png" alt="" style="left:73.6%; top:15.2%">            <img src="img7.png" alt="" style="left:27.1%; top:32.3%">            <img src="img8.png" alt="" style="left:6.7%; top:37.2%">            <img src="img9.png" alt="" style="left:35.6%; top:42.1%">            <img src="img10.png" alt="" style="left:52.2%; top:35.8%">            <img src="img11.png" alt="" style="left:75%; top:35.1%">            <img src="img12.png" alt="" style="left:59.6%; top:43.2%">            <img src="img13.png" alt="" style="left:17.4%; top:55.2%">            <img src="img14.png" alt="" style="left:78.4%; top:51.5%">            <img src="img15.png" alt="" style="left:46.2%; top:59.5%">            <img src="img16.png" alt="" style="left:81.6%; top:60.3%">            <img src="img17.png" alt="" style="left:13.3%; top:66.1%">            <img src="img18.png" alt="" style="left:63.6%; top:65.6%">            <img src="img19.png" alt="" style="left:39%; top:71.4%">            <img src="img20.png" alt="" style="left:51.4%; top:81.5%">            <img src="img21.png" alt="" style="left:22.5%; top:84.5%">            <img src="img22.png" alt="" style="left:80.7%; top:83.4%">        </section>         <!-- LINE UP -->
   
**Prompt usado:**
este html tiene demasiado div class, como se puede modificar esto? con una semántica mejor para realmente aprender acerca de interface web

**Código después y respuesta:**

Reemplaza desde <!-- LINE UP --> hasta su </section>:
html
        <!-- LINE UP -->
        <section class="lineup" id="lineup">
            <h2>Line Up</h2>

            <!-- Viernes -->
            <article>
                <header>
                    <h3><time datetime="2026-11-07">07 de noviembre</time></h3>
                </header>
                <section>
                    <h4>MAIN STAGE</h4>
                    <ul>
                        <li>ROSARIO ALFONSO</li>
                        <li>CLAIRO</li>
                        <li>SADE</li>
                        <li>BJÖRK</li>
                    </ul>
                </section>
                <section>
                    <h4>STAGE 2</h4>
                    <ul>
                        <li>JULIETA VENEGAS</li>
                        <li>ALEX ANWANDTER</li>
                        <li>FIONA APPLE</li>
                        <li>CAROLINE POLACHEK</li>
                    </ul>
                </section>
                <section>
                    <h4>WAREHOUSE</h4>
                    <ul>
                        <li>AKRIILA</li>
                        <li>THE SUNDAYS</li>
                        <li>COCTEAU TWINS</li>
                        <li>SILVANA ESTRADA</li>
                        <li>DANIEL CAESAR</li>
                        <li>CONAN GRAY</li>
                    </ul>
                </section>
            </article>

            <!-- Sábado -->
            <article>
                <header>
                    <h3><time datetime="2026-11-08">08 de noviembre</time></h3>
                </header>
                <section>
                    <h4>MAIN STAGE</h4>
                    <ul>
                        <li>JAVIERA MENA</li>
                        <li>KALI UCHIS</li>
                        <li>CHARLI XCX</li>
                        <li>SHAKIRA</li>
                    </ul>
                </section>
                <section>
                    <h4>STAGE 2</h4>
                    <ul>
                        <li>JUDELINE</li>
                        <li>SEN SENRA</li>
                        <li>C. TANGANA</li>
                        <li>AZEALIA BANKS</li>
                        <li>LADY GAGA</li>
                    </ul>
                </section>
                <section>
                    <h4>WAREHOUSE</h4>
                    <ul>
                        <li>SIXSEX</li>
                        <li>RUSOWSKY</li>
                        <li>ÑENGO FLOW</li>
                        <li>JOWELL &amp; RANDY</li>
                        <li>PLAN B</li>
                        <li>ELADIO CARRIÓN</li>
                    </ul>
                </section>
            </article>

            <!-- Domingo -->
            <article>
                <header>
                    <h3><time datetime="2026-11-09">09 de noviembre</time></h3>
                </header>
                <section>
                    <h4>MAIN STAGE</h4>
                    <ul>
                        <li>5 SECONDS OF SUMMER</li>
                        <li>ONE DIRECTION</li>
                        <li>CHAPPELL ROAN</li>
                        <li>ARCTIC MONKEYS</li>
                    </ul>
                </section>
                <section>
                    <h4>STAGE 2</h4>
                    <ul>
                        <li>PANIC! AT THE DISCO</li>
                        <li>SLEEPING WITH SIRENS</li>
                        <li>PIERCE THE VEIL</li>
                        <li>ONE OK ROCK</li>
                        <li>BABYMETAL</li>
                    </ul>
                </section>
                <section>
                    <h4>WAREHOUSE</h4>
                    <ul>
                        <li>NUÑEZ BRICEÑO</li>
                        <li>DELLAFUENTE</li>
                        <li>CHICO TRUJILLO</li>
                        <li>SANTA FERIA</li>
                        <li>YUNG BEEF</li>
                        <li>ARCA</li>
                    </ul>
                </section>
            </article>
        </section>

B2. Sección 4 (Line Up)
No toques .lineup ni .lineup h2. Borra todo lo que viene después de .lineup h2 hasta el final de la sección (de .lineup-container hasta .main-stage p:first-child...) y pega esto:
css
/* Cada día (fecha + 3 escenarios) */
.lineup article {
    display: flex;             /* Activa flexbox */
    flex-wrap: wrap;           /* Permite que la fecha ocupe una fila y los escenarios otra */
    justify-content: space-between; /* Separa los 3 escenarios entre sí */
    gap: 1.5rem 3%;            /* Espacio entre la fecha y los escenarios, y entre escenarios */
    margin-bottom: 4rem;       /* Espacio entre un día y el siguiente */
}

/* La caja de la fecha */
.lineup article > header {
    display: flex;             /* Activa flexbox */
    justify-content: center;   /* Centra la barra de fecha */
    width: 100%;               /* Ocupa toda una fila para que los escenarios queden debajo */
}

/* La barra con el texto "07 de noviembre" */
.lineup header h3 {
    width: 40%;                /* La barra mide el 40% del ancho */
    padding: 0.6rem 1rem;      /* Espacio dentro de la barra */
    font-size: 1.4rem;         /* Tamaño de texto */
    font-weight: normal;       /* Sin negrita */
    text-align: center;        /* Texto centrado */
    text-transform: uppercase; /* Mayúsculas */
    background: linear-gradient(180deg, #1576BB 0%, #450B69 100%); /* Degradado de tu azul a tu morado */
}

/* Las tres columnas de escenarios */
.lineup article section {
    flex: 1;                   /* Las tres columnas se reparten el ancho por igual */
    min-width: 0;              /* Evita que una columna se ensanche por un texto largo */
}

/* El nombre del escenario: MAIN STAGE, STAGE 2, WAREHOUSE */
.lineup h4 {
    font-size: 1.9rem;                   /* Más grande que los artistas */
    font-weight: normal;                 /* Los títulos vienen en negrita, aquí no */
    text-transform: uppercase;           /* Mayúsculas */
    padding-bottom: 0.4rem;              /* Espacio entre el texto y la línea */
    margin-bottom: 0.8rem;               /* Espacio entre la línea y el primer artista */
    border-bottom: 0.2rem solid #FFFFFF; /* Línea blanca debajo del título del escenario */
}

/* La lista de artistas */
.lineup ul {
    display: flex;             /* Activa flexbox */
    flex-direction: column;    /* Apila los nombres uno debajo del otro */
    gap: 0.2rem;               /* Pequeño espacio entre artistas */
}

/* Cada artista */
.lineup li {
    font-size: 1.3rem;         /* Tamaño de los artistas */
    text-transform: uppercase; /* Mayúsculas */
}

