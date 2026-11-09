# bitácora solemne-02
# Bitácora Clases 06, 07 y 08

# Clase 06: De Figma al Navegador

En esta clase comprendí cómo un diseño creado en Figma puede transformarse en una página web real mediante código.

Aprendimos que una página web está formada principalmente por tres tecnologías:

- **CSS:** controla la apariencia visual.
- **JavaScript:** agrega comportamiento e interactividad.
- **HTML:** define la estructura y el contenido.

También conocimos **Visual Studio Code**, un editor de código que facilita el desarrollo gracias al resaltado de sintaxis y herramientas para detectar errores. Además, aprendimos sobre **GitHub**, una plataforma utilizada para almacenar proyectos y trabajar colaborativamente.

- Las etiquetas HTML tienen apertura, contenido y cierre.
- Es importante utilizar etiquetas de forma semántica para organizar correctamente la información.
- HTML entrega la estructura, mientras que CSS se encarga de la parte visual.
- Se pueden crear títulos, párrafos, imágenes, enlaces y listas utilizando distintas etiquetas.


# Clase 07: Estructura HTML y Fundamentos de CSS

En esta sesión aprendimos la estructura básica de una página web.

## Estructura principal de HTML

```html
<html>
    <head>
    </head>

    <body>
    </body>
</html>
```

Dentro del body existen etiquetas que ayudan a organizar mejor el contenido:

- `header`: encabezado.
- `main`: contenido principal.
- `footer`: información final del sitio.

### CSS

Aprendimos que CSS permite modificar:

- Colores.
- Tipografías.
- Bordes.
- Espaciados.
- Fondos.
- Tamaños.

## Modelo de Caja (Box Model)

Uno de los conceptos más importantes fue entender que prácticamente todos los elementos funcionan como cajas.

Estas cajas están compuestas por:

1. **Contenido**.
2. **Padding** (espacio interior).
3. **Border** (borde).
4. **Margin** (espacio exterior).

Comprender esta estructura resultó fundamental para posicionar elementos correctamente dentro de una página.


# Clase 08: Display y Flexbox

Esta fue una de las clases más importantes para el desarrollo de la single page, ya que permitió organizar elementos de manera más eficiente.

## Tipos de Display

### Block

Ocupa todo el ancho disponible y comienza en una nueva línea.

```css
display: block;
```

### Inline

Ocupa únicamente el espacio de su contenido.

```css
display: inline;
```

### Inline-block

Permite mantener elementos en línea respetando tamaños y padding.

```css
display: inline-block;
```

### None

Oculta completamente un elemento.

```css
display: none;
```

---

# Flexbox

Aprendimos a utilizar Flexbox para organizar elementos dentro de un contenedor.

```css
display: flex;
```

Con esta propiedad es posible controlar:

- Dirección de los elementos.
- Separación entre ellos.
- Distribución del espacio.
- Alineación vertical y horizontal.

## Propiedades más utilizadas

### Dirección

```css
flex-direction: row;
```

o

```css
flex-direction: column;
```

### Alineación

```css
justify-content: center;
align-items: center;
```

### Espaciado

```css
gap: 1.5rem;
```

### Adaptación

```css
flex-wrap: wrap;
```

Esta propiedad permite que los elementos bajen a otra línea cuando no existe suficiente espacio.


# Uso de IA Actividad 2 

## Consulta 1: adaptar tipografía y colores a una imagen de referencia

**Qué necesitaba:** que la ficha de la silla Wassily se viera inspirada en una foto de referencia (título "WASSILY" en negro y "CHAIR" en rojo, fondo gris cálido, silla roja y negra). No sabía qué colores eran exactamente ni qué tipo de letra usar.

**Código inicial:**

```css
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #111111;
    background: #b5121b;
}
```

**Prompt:**

"¿Puedes cambiar los colores y la tipografía para que estén más inspirados en esta foto?" 

**Sugerencias aceptadas:**
- Cambiar el fondo rojo (`#b5121b`) por un gris cálido, porque coincide con el fondo de la foto, y usar el rojo solo como acento.
- Cambiar Arial por una tipografía geométrica tipo Futura (con Century Gothic y Trebuchet MS como alternativas), porque se parece más a la letra del título de la foto y tiene estética Bauhaus.
- Definir la paleta como variables CSS (`--fondo`, `--rojo`, `--negro`, `--blanco`) para reutilizar los colores en toda la página.

**Resultado:**

```css
body {
  margin: 0;
  font-family: 'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif;
  color: var(--negro);
  background: var(--fondo);
}
```
## Consulta 2: centrar el texto destacado

**Qué necesitaba:** que el párrafo con la clase `.destacado` (el recuadro rojo de la sección Descripción) quedara con el texto centrado.

**Código inicial:**

```css
.destacado {
  background: var(--rojo);
  color: var(--blanco);
  padding: 1rem;
  font-weight: bold;
}
```

**Prompt:**

"¿Cómo centro el texto .destacado?"

**Sugerencias aceptadas:**
- Agregar `text-align: center;` a `.destacado`, porque centra el texto dentro del recuadro rojo sin cambiar el resto del diseño.

**Resultado:**

```css
.destacado {
  background: var(--rojo);
  color: var(--blanco);
  padding: 1rem;
  font-weight: bold;
  text-align: center;
}
```

# Proceso Proyecto 2, solemne 2 

Lo primero que realizamos fue decidir en qué queríamos enfocarnos para desarrollar la single page. Como grupo, elegimos la feria de arte e ilustración chilena **Click Feria**.

Luego, elaboramos un boceto inicial de la página para posteriormente diseñarlo en Figma. Desarrollamos versiones mobile y desktop, considerando wireframes de baja y alta fidelidad.

Después de presentar la propuesta, recibimos comentarios de la profesora relacionadas principalmente con detalles pequeños del diseño. Con esas correcciones realizadas, actualizamos el Figma y comenzamos a utilizar **HTML y CSS**.

La principal dificultad estuvo relacionada con **CSS**. En las clases entendía los contenidos, pero a veces me costaba retener toda la información y recordar cómo aplicarla al momento de programar.

Además, al comienzo fue complicado lograr que la página web se viera lo más parecida posible al diseño realizado en Figma. Muchas veces los elementos no quedaban en la misma posición, con los mismos tamaños o distribuciones que en el prototipo. Cuando avanzaba en el proyecto, fui comprendiendo mejor cómo funcionaban HTML y CSS, especialmente en aspectos relacionados con el posicionamiento, la organización de elementos y el uso de estilos.

Para resolver mis dudas, utilicé el material complementario entregado en clases y también herramientas de inteligencia artificial, como Claude, que me ayudó con explicaciones paso a paso. Lo utilicé principalmente como una guía de aprendizaje. 

# Aprendizajes

Gracias a este proyecto, pude profundizar mis conocimientos en **HTML y CSS**, comprendiendo mejor cómo ambos lenguajes trabajan en conjunto para construir sitios web. También aprendí a interpretar y trasladar diseños desde Figma a código.

