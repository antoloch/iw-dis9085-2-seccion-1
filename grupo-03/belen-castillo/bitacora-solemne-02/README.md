# bitácora solemne-02
## ¿Qué hice en el sitio?
Como parte del equipo, me encargué de estructurar y diseñar la disposición visual de las menciones y ramos. Específicamente, trabajé en la organización de las imágenes de los proyectos de los talleres gráficos, industriales y de modas, logrando un diseño de grilla intercalada con ritmos asimétricos que reflejaran fielmente el prototipo original de Figma. Además de agregar el carrusel de imágenes que se presenta en el banner de fondo en el inicio de la página.

## ¿Qué dificultades tuve y cómo las resolví?
Una de las principales dificultades fue ordenar las imágenes de los proyectos de forma intercalada y con distintas alturas visuales sin recurrir a márgenes manuales complejos que rompieran la estructura de la caja. Para resolverlo, revisé los apuntes de clases sobre modelos de cajas y grillas en CSS, y consulté a la IA para aplicar transformaciones limpias basadas en unidades relativas.
En cuanto al carrusel de imágenes, no sabía muy bien cómo hacerme cargo del tiempo que pasa para que se desarrolle la animación del cambio de imagen, así que consulte a la IA y supe qué agregar en el CSS	

## Consultas IA: 

1. ordenar imágenes de proyectos de forma intercalada sin márgenes forzados

**Código antes:**
```css
.editorial-item {
    margin-bottom: 2rem;
}
```

Prompt usado:
¿Cómo puedo estructurar un diseño de imágenes de proyectos intercaladas en CSS usando una grilla y transformaciones para que tengan distintas alturas o desplazamientos sin usar márgenes manuales en cada elemento?
Código después:
```
CSS
.editorial-grid-intercalado {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem 2rem;
    align-items: start;
}

.item-offset-1 { transform: translateY(0rem); }
.item-offset-2 { transform: translateY(2.5rem); }
.item-offset-3 { transform: translateY(0rem); }
```

Sugerencias aceptadas: Utilizar una grilla limpia con gap uniforme y aplicar pequeños desplazamientos con transform: translateY en clases específicas (item-offset), logrando el efecto visual intercalado sin alterar el flujo de la caja.
Recursos utilizados:
Apuntes de clases (Clase 7 y 8 sobre Modelo de Cajas y Grillas).
Material de apoyo oficial: Unidades de medida (rem) y espaciados.
Documentación de MDN Web Docs (CSS Properties).
Lenguaje CSS (Manz.dev).

2. ¿Cómo puedo ponerle un tiempo al cambio de animación tipo crossfade a un carrusel de 4 imágenes en un código CSS?

Respuesta IA: Un carrusel de este tipo es una pila de fotos donde cada una sigue la misma receta de aparecer y desaparecer, pero con un retraso distinto para que se turnen. Para cambiar la velocidad solo ajustas tres cosas: la duración de la vuelta completa, el retraso de cada foto (que siempre es una fracción de esa vuelta), y qué tan largo es el fundido dentro de la receta. 

Para saber cuánto se queda cada una en pantalla:
tiempo por imagen = duración total ÷ cantidad de imágenes
20s ÷ 4 = 5s por imagen

El retraso (animation-delay) de cada imagen
```
css
.slide-1 { animation-delay: 0s; }
.slide-2 { animation-delay: 5s; }
.slide-3 { animation-delay: 10s; }
.slide-4 { animation-delay: 15s; }
```
Esto hace que cada imagen empiece su animación con diferencia de 5 segundos respecto a la anterior. Así se turnan en vez de aparecer todas a la vez.

## ¿Qué aprendí?
Aprendí a dominar la distribución espacial y visual mediante hojas de estilos CSS externas utilizando grillas y propiedades de transformación, logrando que la sección de proyectos mantuviera una jerarquía clara, estética y a hacer integrar una animación “Crossfade” a un carrusel de imágenes, manteniendo un tiempo de aparición para cada una. Todo adaptado a los requerimientos de la solemne
