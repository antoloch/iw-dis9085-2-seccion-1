# Clase 28-09
## Consulta a la IA: Cambiar el tamaño de una imagen

**Prompt: como puedo cambiar el tamaño de una imagen en html** 

IA

```css
.mi-imagen {
    width: 50%;
}
```
Crear una clase donde está la imagen .imagen

VS CODE

```css
<div>
 <img src="jack-skellington.png" alt="Fotografía de Jack Skellington" class="imagen">
</div>
```

Luego en la página de style.css

```css
.imagen{
    width: 100%;
}
```

Al final no lo usé porque la imagen no quedaba centrada, y al principio no entendía por qué la imagen se veía tan grande,
pero al final era porque la imagen era en archivo png y lo que yo creía era el fondo de la imagen, en realidad era el fondo de la página jeje

Le saqué la modificación de tamaño y la imagen quedaba bien.

**otras opciones y por qué no las utilicé**

En html:

```css
<img src="imagen.jpg" width="300" height="200">

Para mantener la proporción solo especificar el ancho:

<img src="imagen.jpg" width="300">
```

En css:

```css
<img src="imagen.jpg" class="mi-imagen">

.mi-imagen {
    width: 300px;
    height: auto;
}
```

No utilice las de html porque prefería tener las cosas relacionadas a la apariencia en el css, y no probé la opción de css porque creí que era más sencillo
usar la opción de porcentaje.





