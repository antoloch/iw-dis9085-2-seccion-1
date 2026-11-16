# BAZR
## Link de figma:
https://www.figma.com/design/pzG5bZtHLw9pE1yLshPiK2/Horacio-Garc%C3%ADa-Jorge?node-id=1-3&t=i305Epk206d1zOoA-1

### Sobre el proyecto
El proyecto Bazar surge a través de un video de internet donde un usuario de Google maps marca diferentes cafeterías dentro de su ciudad y genera una ruta para conocerla, a través de estos registros, el usuario además expresaba su deseo por expandir estas rutas a otras ciudades, por lo que surgió la idea de realizar una página web que funcionara de una forma similar a este ejercicio. 

Bazr busca ser una recopilación de fotos, descripciones y comentarios de una ciudad, de forma que cuando otros usuarios lo deseen puedan acceder a esta información y descubrir lugares nuevos o incluso recordar lugares con los que ya han interactuado anteriormente, la página se compondrá de dos grandes apartados “Cafeterías con personalidad”, y “Gráfica Callejera”. Estos apartados serán similares a una galería de fotos, de cafeterías a lo largo de la ciudad, y de rincones, posters, fachadas, etc.

Como visión futura, espero poder ampliar este archivo digital a otras ciudades, haciendo un gran compilado de lugares, al que las personas puedan acceder.


La página funciona a través de cuatro secciones base permitirán al usuario responder las preguntas que se consideran importantes al momento de interactuar con la página, ¿Qué es BAZR?, ¿Cómo funciona?, ¿Qué contiene?.

- *Inicio*

- *Acerca de*

- *Gráfica callejera*

- *Cafeterías con personalidad*

## Moodboard
El moodboard explora la estética que se quiere utilizar dentro de la página, además de algunos botones que se quieren utilizar con ayuda de JavasScript

<img width="1920" height="1080" alt="Copia de Copia de moodboard 2026" src="https://github.com/user-attachments/assets/261f87d8-60db-4953-a62b-9ca8ff652a90" />

## Referentes

- [Cosmos](https://www.cosmos.so/)
  
  Cosmos fue parte importante del proceso de desarrollo tanto de la idea como de la estética que se desea incorporar en la página web, la página de inicio es uno de los referentes que se utilizó para pensar en la diagramación de la propia página de inicio de la página BAZR.
- [Are.na / MyMind](https://access.mymind.com/everything)

  MyMind funcionó como punto de referencia para realizar una galería de imágenes o un compilado de estas mismas, la forma de presentar los contenidos en Bazar, específicamente “Gráfica Callejera”, aspira a ser similar a la forma en que se presenta dentro del tablero de MyMind.
- [Awwwards](https://www.awwwards.com/)

## Uso de IA
**Proceso HTML**
***Prompt:***

Ayúdame a crear el html paso a paso para no olvidar ningún apartado, comienzo con:
<!DOCTYPE html>
<html lang="es">
<head>
<title>BAZR</title>

Después de esto ya debería entrar con el body o aún faltan elementos dentro de el header?

***Respuesta:***
Aún faltan elementos esenciales dentro de la etiqueta <head> antes de cerrarla y pasar al <body> (nota: el <header> va dentro del <body>, mientras que <head> es la cabecera de metadatos del documento).
Para que tu página BAZR se vea bien en celulares, cargue tildes/eñes sin errores y esté lista para estilos e íconos, asegúrate de incluir estas etiquetas dentro del <head>:
Paso 1: Completar el <head>
Codificación de caracteres (charset): Evita que las tildes o la "ñ" aparezcan como símbolos raros.
Diseño adaptable (viewport): Indispensable para que el sitio no se vea diminuto en dispositivos móviles.
Favicon (opcional): El ícono pequeño que aparece en la pestaña del navegador junto a "BAZR".
Hojas de estilo (CSS): Aquí enlazas tu archivo de estilos o tipografías (como Google Fonts).
Descripción (meta description): El resumen que muestra Google en los resultados de búsqueda.

A partir de mis apuntes de clase y otros ejercicios comencé a escribir el código, ¿puedes revisarlo para determinar si faltan contenidos?
<!DOCTYPE html>
<html lang="es">
<head>
  <title>BAZR</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--CSS-->
  <link rel="stylesheet" href="Style.css">

  <!--Google Fonts-->
  <link rel="preeconect" href="https://fonts.googleapis.com">
  <link rel="preeconect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</head>

<body>
    <!--Encabezado/Cabecera-->
    <header>
      <h1>BAZR.</h1>
      <nav>
        <a href="Index.html">Inicio</a>
        <!--Falta agregar flecha para regresar-->
      </nav>
    </header>

    <main>
      <!--Inicio-->
      <section>

        <h2>Siempre hay algo que descubrir</h2>
        <p>El lugar para quienes disfrutran EXPLORAR</p>

        <!--falta flecha de botón-->
        <button>EXPLORAR</button>

      </section>


      <!--ACERCA DE-->
      <section>
        <h2>ACERCA DE</h2>
        <P>Descubre lugares interesantes, rincones escondidos y detalles de la ciudad que quizás nunca habías notado.</P>
      </section>

    </main>

</body>

</html>

Respuesta:
1. Correcciones técnicas en lo que ya escribiste
Error de ortografía en preconnect: Escribiste rel="preeconect" (con doble e y una c). Debe ser rel="preconnect" para que el navegador precargue las fuentes correctamente.
Mayúsculas en nombres de archivo y etiquetas:
En <a href="Index.html"> y href="Style.css", asegúrate de que los nombres coincidan exactamente con tus archivos reales (en la web se recomienda usar todo en minúsculas: index.html y style.css para evitar errores en servidores).
En la sección "ACERCA DE", escribiste <P> en mayúscula; aunque los navegadores lo entienden, por convención de HTML5 siempre se escribe en minúscula (<p>).
Error tipográfico en texto: En el primer párrafo dice "disfrutran" en lugar de "disfrutan".


  Awwwards fue un referente más específico, el botón que permite dar refresh que aparece en la parte inferior izquierda era una herramienta que quería implementar en la página web
- <img width="1000" height="500" alt="image" src="https://github.com/user-attachments/assets/f804684b-9508-444c-8d8a-4733da5ef985" />


