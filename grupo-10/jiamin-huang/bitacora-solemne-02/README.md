# bitácora solemne-02
Bitácora personal creación de página web Aura Glow 

Junto a mi equipo desarrollamos Aura Glow, una página web de maquillaje y skincare con una estética suave, con el lema de resaltar la identidad. La idea es crear un sitio atractivo y fácil de usar, mostrando marcas favoritas, productos y una invitación a ser parte de una comunidad.
Primero partí creando bocetos e ideas de la web en bitácora, luego traspasarlo a figma , propuestas de colores y estructura general, luego con mis compañeras descartamos y seleccionamos colores, ver la organización de los botones e imágenes.
recopile imágenes que representaran el estilo de la marca y que combinara con los colores y cree los slogans, la estructura de columnas con imágenes y texto, el footer y en conjunto terminamos el diseño de la interfaz, nos ayudó a tener claro el resultado antes de programarlo. 

colaboré en los estilos generales en los estilos generales de la página, cuidando que los colores, los bordes redondeados y los espacios se mantuvieran iguales a los de figma.

mi trabajo principal fué encargarme del footer en conjunto con mi compañera que tiene tres columnas de Aura glow y suscripción, la de social y la de información. En la columna social usé un contenedor div con la clase pie - col, un título h3 y cuatro enlaces (a) con la clase red, uno para cada red social. Cada enlace lleva su icono y el nombre de la red.

estilos css:
.pie - col : con display: flex puse las tres columnas en una fila. puse el fondo lila y redondeé sólo las esquinas superiores con border - radius.

,pie - col a.red : para convertir loss enlaces de redes en botones tipo pildorausando border - radius,  y el fondo de color, con display: flex y align - items: center alinee el icono y el texto en la misma fila y con gap los separe.


dificultades:
Los botones de redes sociales usaban todo el ancho de la columna, usé align - self flex start para que midieran solo lo necesario.

el icono y el texto de cada red no quedaban alineados, apliqué display: flex con align - items : center y un gap de 0.8rem

dificultad para repartir bien el espacio entre tres columnas, consulté con claude como solucionar este problema y me recomendó para definir el ancho de cada columna y el espacio entre ellas en un solo lugar utilizar display: flex ; para poner las tres columnas en una sola fila y align - items: flex - start para alinear las columnas 

/* La caja del pie de página */
.pie {
  display: flex;                    /* pone las tres columnas en una fila */
  align-items: flex-start;          /* alinea las columnas arriba */
