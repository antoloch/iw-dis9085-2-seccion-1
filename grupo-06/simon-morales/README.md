(2/10)
¿Qué hice en el sitio?
	Ayudé a construir el archivo de Figma y a organizar la sección de looks.

¿Qué dificultades tuve y cómo las resolví? (Indica qué recursos usaste: IA, MDN, material complementario entregado en clase, compañeros, ayudante, etc.)
	Tuve complicaciones menores en cuanto a el uso de auto-layout y cómo ordenar por medio de componentes los elementos de fotos y texto.

¿Qué aprendí?
	Aprendí a colocar videos en Figma y a generar contenedores más complicados, con mayor cantidad de elementos interiores.



(12/10)
¿Qué hice en el sitio?
	Programé la sección de looks de la página web en el archivo html del grupo.

¿Qué dificultades tuve y cómo las resolví? (Indica qué recursos usaste: IA, MDN, material complementario entregado en clase, compañeros, ayudante, etc.)
	Me complicó la organización de los elementos y las etiquetas, por lo que recurrí a material de clase subido a Drive y a mis compañeras para poder resolver mis dudas.

¿Qué aprendí?
	Aprendí a distinguir de mejor manera el uso de contenedores en html, además de atajos como el de encontrar y reemplazar que me sirvieron al usar códigos repetidos y extensos.



(24/10)
¿Qué hice en el sitio?
	Apoyé en la escritura del archivo css del grupo, en la creación de estilos de la sección de looks y en las miniaturas del inicio.

¿Qué dificultades tuve y cómo las resolví? (Indica qué recursos usaste: IA, MDN, material complementario entregado en clase, compañeros, ayudante, etc.)
	Tuve complicaciones en la categorización de estilos y en cómo darle características a las imágenes, tanto en tamaño como en posición. Me apoyé en material complementario de la case por medio de Discord y Drive, también de hacer uso de IA en caso de organización de contenedores.

## Consulta IA: Configuración contenedores look en css

**Código antes:**
```html
<section id="look-1" class="looks-conjunto-izq">
	<div class="look-individual">
		<div class="look-imagen-grande">
			<img src="assets/TIME 1.avif" class="look-grande" alt="Foto 1 L1">
		</div>
	</div>
	<div class="look-dos-imagenes">
		<h2>Look 21</h2>
		<div class="dos-imagenes">
			<img src="assets/TIME 2.avif" class="look-pequeno" alt="Foto 2 L1">
			<img src="assets/TIME 3.avif" class="look-pequeno" alt="Foto 3 L1">
		</div>
	</div>
</section>
```

**Prompt usado:**
> Estoy programando una página web y tengo problemas con el css. Quiero generar una composición donde un contenedor alineado hacia la izquierda (o derecha, dependiendo del caso) y al lado superior, el cual tenga dentro otra imagen y un contenedor que contiene un h2 y un otro contenedor con dos imágenes pequeñas. Todos los contenedores de looks están dentro de otro de class "looks-total" y estos looks individuales se repiten 25 veces hacia abajo.

**Código después:**
```css
.looks-total {
    display: flex;
    flex-direction: column;
    gap: 6rem; /* Espacio vertical entre cada look */
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
}

/* Alineación de bloques a la izquierda o derecha */
.looks-conjunto-izq {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

.looks-conjunto-der {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

/* Estructura principal de cada Look */
.look-individual {
    display: flex;
    align-items: flex-start; /* Alinea la parte superior del título con la foto grande */
    gap: 1.5rem; /* Espacio estrecho entre la foto grande y el grupo de fotos pequeñas */
}

/* Imagen grande */
.look-imagen-grande {
    width: 350px; /* Tamaño controlado de la imagen grande */
    flex-shrink: 0;
}

.look-grande {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
}

/* Columna de título + dos imágenes */
.look-dos-imagenes {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: auto; /* Se elimina el width de 52.5rem que creaba el espacio enorme */
}

.look-dos-imagenes h2 {
    margin: 0;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 500;
}

/* Contenedor de las dos imágenes pequeñas */
.dos-imagenes {
    display: flex;
    gap: 1.5rem;
}

/* Imágenes pequeñas */
.look-pequeno {
    width: 220px; /* Tamaño fijo/proporcional de las fotos secundarias */
    height: auto;
    display: block;
    object-fit: cover;
}
```
1. **Acepté** el orden de los elementos en el código y la estructuración de cada uno.
2. **Rechacé** el uso de pixeles como unidades de medida, cambiándolos a rem.
3. **Modifiqué** levemente los espacios entre looks, haciéndolos un poco más grandes.
4. Más tarde **agregué** animaciones a los elementos, regidos por el scroll.

¿Qué aprendí?
	Aprendí varias etiquetas de estilos disponibles en css como lo son grid junto con el uso de márgenes y padding, además de cómo incorporar animaciones en los elementos al hacer scroll dentro de la página web.
