# bitácora solemne-02

# Proceso 

# ¿De que es la pagina?
La pagina decidimos hacerla de diseño abierto 2026 de la Escuela de Diseño, Universidad Diego Portales.

---
# *Partimos diseñando un prototipo en figma para hacernos una idea de lo que queriamos realizar.

https://www.figma.com/design/Cedf2poMobkvKeO5EyN85q/Dise%C3%B1o-Abierto?node-id=0-1&t=6yQy3IdBw2SHGX38-1

---

## 1. ¿Qué hice en el sitio?

> Orden de la página (HTML): Organicé todo el contenido usando las etiquetas básicas y necesarias de HTML para separar las distintas partes.
 > Diseño y Estilos (CSS):Creé la hoja de estilos (style.css) basándome en el diseño que teníamos en Figma. Usé colores exactos, tamaños con medidas proporcionales
   (rem y %) y las tipografías que seleccionamos, en este caso quisimos usar INFRA.

**Funcionamiento interactivo:** 
> Programe el botón "VISÍTANOS" y el menú del celular (menú hamburguesa) para que abran y cierren con animaciones fluidas tanto en desktop y en mobile. 
  > Todo este código para que el sitio funcione se escribió directamente dentro del mismo archivo HTML (en lugar de crear un archivo `.js` aparte).
    Lo hicimos así por que la ia nos recomendo que era mucho mas rapido y facil de hacer, al tenerlo todo juntito en el HTML, evitamos que el navegador
    se equivoque buscando archivos externos y nos aseguramos de que el sitio cargue rápido y sin fallos.

---

## 2. ¿Qué dificultades tuve y cómo las resolví?

**Dificultad 1-Lograr que el botón "VISÍTANOS" hiciera el efecto:** Costo mucho hacer que el botón hiciera bien la animación de expansión y mostrara la palabra "VISÍTANOS"
de forma fluida tanto al pasar el mouse como al tocarlo, ya que al principio la transición se rompía o no desplegaba el texto como queríamos.
  * *Cómo lo resolví:* Ajuste los tiempos de transición en el CSS, las propiedades de desbordamiento (overflow: hidden) y los anchos máximos, asegurando
     que la animación funcionara sin errores.
* **Dificultad 2-La programación del menú hamburguesa en mobile:** Lograr que el menú lateral *drawer* apareciera de manera limpia desde el borde en celulares, ocultando
  la barra clásica de escritorio y asegurando que se cerrara automáticamente al hacer clic en cualquier opción, requirió bastante prueba y error.
  * *Cómo lo resolví:* Vincule eventos de clic específicos para el botón, para la capa oscura de fondo (*overlay*) y para cada enlace del menú, asegurando que la transición
     fuera suave y sin fallar en ninguna vista.
    
---

## 3. Uso de la Inteligencia Artificial (IA)
Usamos IA solo como un apoyo puntual y en momentos específicos, como por ejemplo configurar el botón "VISÍTANOS" y armar la parte del menú hamburguesa para que funcionara bien 
tanto en mobile como en desktop.

**Los mensajes (prompts) que le enviamos a la IA:**

*Prompt para el botón interactivo:*
    > *"¿Cómo puedo hacer un botón en CSS y HTML que por defecto se vea como un círculo con un ícono de flecha, y que al pasar el mouse o hacer clic se expanda de forma 
        fluida hacia la derecha mostrando texto adentro con una transición suave?"*

*Prompt para el menú hamburguesa:*
    > *"¿Cómo puedo programar en el HTML/CSS/JS un menú lateral desplegable (drawer) para mobile que se active con un botón de hamburguesa, y que además cierre el menú 
         automáticamente cuando el usuario haga clic en cualquiera de sus opciones?"*

*Lo que tuvimos que corregir:*
  La IA entregaba códigos con nombres de clases genéricos como .button o .menu- Lo que hicimos fue adaptar y corregir manualmente todas las etiquetas para enlazarlas con 
  los IDs y nombres reales de nuestro proyecto .btn-visitanos, #btn-hamburger, #mobile-drawer, para que funcionara perfecto con nuestros propios estilos.
---

## 4. ¿Qué aprendí?
* Aprendí a manteniendo un orden limpio y claro en el código.
* Entendí cómo usar una hoja de estilos para darle el aspecto visual exacto que pide un proyecto de diseño.
* Que si algo no esta saliendo bien es mejor tomarse un rrespiro y despues continuar.
* Que la Ia no siempre ayuda y a veces puede arruinar el trabajo y es mejor buscar por otros medios el como solucionar los problemas

