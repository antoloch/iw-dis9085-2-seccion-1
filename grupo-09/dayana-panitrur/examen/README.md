# Bitácora de examen

Avance bitácora 

## Descripción del Proyecto 

### Portafolio

#### Concepto y Objetivo: 
Este portafolio es un espacio para mostrar cómo conviven dos mundos que he abarcado a lo largo de mi carrera: el diseño industrial explorando entre formas, materiales, prototipado y la interacción digital en la realización de sitios web, plataformas interactivas y electrónica. Con esto quiero mostrar el resultado final de mis entregas, el proceso creativo y experimental detrás de cada proyecto, con el objetivo de conectar con personas, prácticas, estudios y colectivos creativos con los que pueda colaborar.

## Sitios web de referencia.

Para este proyecto elegí 4 referentes para varias cosas.

1. Este es cómo tiene organizado, el cursor, el estilo gráfico de pixel, la reactividad que tienen los elementos, etc.
> https://christendijoux.com/lab

2. referente de lo que quiero hacer para presentar mis proyectos.
> https://unveil.fr/

3. referente para el header, no quiero que sea gigante y ocupe toda mi vision y de como está organizada la pag en general.
> https://a24.raviklaassens.com/

Y por último, encontré un portafolio que está super creativo.

4. estaría interesante realizar algo que pudiese ser reactivo.
> https://sethlukin.com/

## Figma

[Ir al prototipo](https://www.figma.com/design/SvdCCedXN1f5jIqTT5qNZ4/Portafolio?node-id=0-1&t=pDz3LbQ6ww3e1dWU-1)

En el inicio quiero tener mi nombre en un estilo pixeleado o logo como portada, igual no tengo ningún nombre artístico ni nada. Así que por ahora aún estoy viendo si hago que ocupe mucho espacio o poco.

En la parte del "sobre mí" estoy redactando aún: soy diseñadora en 3er año de formación, trabajando en llevar a cabo la intersección entre el objeto, la fabricación digital y las interfaces de interacción.

Para la parte de proyectos quiero consultar primero y confirmar sobre como debo realizar lo que tengo en mente, para ver si es posible hacerlo o cambio a una idea más simple.

## Avance 16 de noviembre

Después de muchas instancias de indecisión logré llegar a ideas concretas, guiándome tanto de mis referentes como de otras cosas (interacciones sobre todo) que vi en internet.
 Cómo lo de que mi fondo en *Home* sea reactivo cuando se pase el cursor y el carrusel de los proyectos.

### Modificaciones / implementaciones

#### UI Kit

En el UI Kit agregué mi logo, que al principio lo iba a hacer en Ilustrator, pero finalmente lo hice en Figma con la tipografía *Pixelify Sans* y las primeras letras de mi nombre y apellido en una cursiva *Baskervville* y les dejé un grado de inclinación para que quedase en diagonal.

#### Paleta de colores

Usé mis colores favoritos para la web y algunos neutros para ciertos elementos.

| Color | HEX | Nombre |
|---|---|---|
| <img src="/imagenes/FFFEFC.png" width="16"> | `#FFFEFC` | Blanco roto |
| <img src="/imagenes/E5E5E5.png" width="16"> | `#E5E5E5` | Gris claro |
| <img src="/imagenes/73716B.png" width="16"> | `#73716B` | Gris topo |
| <img src="/imagenes/AAC49E.png" width="16"> | `#AAC49E` | Verde |
| <img src="/imagenes/1A1A1A.png" width="16"> | `#1A1A1A` | Negro |
| <img src="/imagenes/142BFF.png" width="16"> | `#142BFF` | Azul eléctrico |

#### Estilos tipográficos

Agregué 6 estilos tipográficos.

**Headline 1:** Lexend SemiBold, 40 px
**Headline 2:** Lexend Medium, 36 px
**Headline 3:** Lexend Medium, 24 px
**Body 1:** Lexend Regular, 24 px
**Body 2:** Lexend Regular, 20 px
**Body 3:** Lexend Light, 18 px

#### Consultas con IA

La herramienta que usé fue Claude conectado a Figma para lograr cosas que eran complejas de hacer, como por ejemplo el carrusel de proyectos que rescaté de mi [referente de carrusel de proyectos](https://unveil.fr)

#### 1. Carrusel de proyectos
**Consulta:** carrusel de proyectos que funcione como unveil.fr, con la sensación de ir sacando vinilos, en vista casi isométrica cómo el de la referencia, 12 proyectos con portadas *placeholder* ("Proyecto uno" a "Proyecto doce") y el nombre del proyecto a la derecha del vinilo. Versión desktop y mobile.
**Proceso:**
- Primero fue realizar el análisis de la referencia en el navegador como la disposición, hover y scroll.
- Luego pedí a Claude la previsualización interactiva antes de llevarlo a Figma, para probar el movimiento, que era lo que más me estaba costando hacer, ya que había que hacer un proceso repetitivo de todas las posibles variantes de manera visual.
- Una vez logrado en desktop, en mobile se corrigió el desplazamiento del vinilo para que salga desde el mismo lugar "físicamente".

**Resultado en Figma:**
- Pila en diagonal con vinilos de bordes verticales rectos y borde superior inclinado 11°; los vinilos sobrepasan los bordes del frame para que no se vea el final de la pila.
- Componente `Vinilo` con variantes Estado (Reposo / Activo) × Dispositivo (Desktop / Mobile), propiedad de texto para el nombre y autolayout interno.
- Componentes `Carrusel proyectos – Desktop` (1280×800) y `Carrusel proyectos – Mobile` (393×852), con instancias en el espacio bajo el recuadro azul del UI Kit y en el frame *iPhone 16 - 1*.
- Capas nombradas y ordenadas (`Pila de vinilos`, `Vinilo · Proyecto uno`, `Zona · Proyecto uno`, etc.).
- Interacciones con Smart Animate: hover en desktop y tap en mobile; el vinilo se desliza a la derecha, queda sobre los demás y muestra su nombre.

#### 2. Corrección: más de un vinilo activo a la vez
**Consulta:** al pasar el cursor se sacaban varios proyectos al mismo tiempo.
**Solución:**
- El carrusel pasó a tener una variante por vinilo activo (Ninguno, Proyecto uno, Proyecto dos…), de modo que solo uno puede estar afuera.
- Zonas invisibles de hover/tap del tamaño de cada portada, en el mismo orden que la pila.
- Pendiente para la versión web: scroll en diagonal y que el vinilo se saque al detenerse.

#### 3. Cursor tipo bounding box (referente: christendijoux.com/lab)
**Consulta:** cursor con forma de *bounding box* y números pequeños a su lado que representen datos en tiempo real (ubicación, tamaño, identidad), con datos de ejemplo por ahora.
**Proceso:** revisión del cursor del referente y previsualización interactiva de los estados (libre, sobre un objeto, clic).
**Resultado en Figma:** ícono estático en la sección *Íconos* del UI Kit, sin interacción por ahora.
- Componente `Cursor / Bounding box` con autolayout: `Etiqueta ID` ("ID 00 · CURSOR"), `Caja` y `Coordenadas` ("X 0420 Y 0233").
- Caja de 26×26 px con contorno de 0,5 px al 25 %, 4 esquinas de 7×7 px hechas con trazos solo en dos lados (1,5 px) y un punto central de 3×3 px.
- Color #142BFF de la paleta; tipografía IBM Plex Mono Medium de 9 px.

#### 4. Construcción de la caja del cursor
**Consulta:** cómo se construyó la caja del cursor y si ya existía.
**Respuesta:** se creó desde cero en el archivo. Las esquinas son frames con trazo por lado individual (panel *Stroke* → lados individuales), y la caja y las esquinas van sin autolayout para que queden fijas.
