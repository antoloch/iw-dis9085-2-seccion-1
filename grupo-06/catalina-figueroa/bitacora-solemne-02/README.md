# bitácora solemne-02
Trabajé principalmente en la sección runway, contact y about tanto del html como del css y una de las cosas que más me costó durante el proceso fue trabajar en el CSS. 
A veces tenía claro cómo quería que se viera la página, pero me costaba lograrlo al momento de escribir el código, sobre todo cuando tenía que ajustar tamaños, espacios o la posición de algunos elementos.
Por eso, le pedí ayuda a la IA sobre todo para el CSS. La usé principalmente para ir corrigiendo pequeños detalles hasta conseguir el resultado que buscaba. Le explicaba qué quería cambiar y probaba las soluciones que me daba, pero muchas veces el resultado no era exactamente lo que tenía en mente, así que tenía que volver a explicarle lo que necesitaba con más detalle. Esto me hizo darme cuenta de que era importante ser muy clara y específica con las instrucciones, sobre todo cuando quería modificar algo sin que cambiara el resto de la página.
Al principio no quería cambiar nada del html entonces probaba con distintas cosas en el css pero luego me di cuenta que debía cambiar ciertas cosas en el html para que funcionara perfectamente, por ejemplo para separar los párrafos en el texto del ABOUT. 
Estos son los códigos que probé en el css hasta conseguir el resultado final.
/* 1. Contenedor Principal */
.runway-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: 1457px;   
    margin: 0 auto;     
    padding: 20px;
    box-sizing: border-box;
}

/* 2. El Texto Superior Izquierdo */
.runway-logo {
    font-family: helvetica
    font-weight: bold;
    text-transform: uppercase;
    width: 15%;          
    font-size: 1.2rem;  
    padding-top: 10px;
}

/* 3. Bloque del Video */
.video-wrapper {
    width: 85%;         
    background-color: #000; 
}

/* 4. El Video (Esto hace la magia responsive) */
.video-wrapper video {
    width: 100%;      
    height: auto;      
    display: block;
}















.runway-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: 1457px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

.runway-text {
    font-family: sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    width: 15%;
    font-size: 1.2rem;
    padding-top: 10px;
}

.video-wrapper {
    position: relative;
    width: 85%;
    background-color: #000;
}

.video-wrapper video {
    width: 100%;
    height: auto;
    display: block;
}
.runway-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 136px;       /* El ancho exacto de Figma para el texto */
    height: 30px;       /* El alto exacto de Figma para el texto */
    flex-shrink: 0;     /* Evita que el texto se aplaste cuando el video crezca */
    
    color: #000;
    text-align: center;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 22px;    /* El tamaño de letra exacto de Figma */
    font-style: normal;
    font-weight: 500;   /* Grosor medio (ni muy fino, ni bold completo) */
    line-height: normal;

#runway.runway-section {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    width: 100% !important;
    max-width: 1457px !important;
    margin: 0 auto !important;
    padding: 20px !important;
    box-sizing: border-box !important;
}

#runway.runway-section h2 {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    margin: 0 !important; /* Elimina márgenes por defecto del h2 */
    width: 136px !important; /* Ancho de Figma */
    height: 30px !important; /* Alto de Figma */
    flex-shrink: 0 !important;
    
    color: #000 !important;
    text-align: center !important;
    font-family: 'Helvetica', Arial, sans-serif !important;
    font-size: 22px !important; 
    font-style: normal !important;
    font-weight: 500 !important; 
    line-height: normal !important;
}

#runway.runway-section video {
    width: calc(100% - 136px) !important;
    height: auto !important; 
    display: block !important;
}






/* 1. Contenedor Principal */
.about-section {
    display: flex;
    flex-direction: row; 
    align-items: flex-start;
    width: 100%;
    max-width: 91rem;
    margin: 0 auto;
    padding: 1.25rem;
    box-sizing: border-box;
    gap:1.25rem;
}

/* 2. "ABOUT" */
.about-section h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    width: 8.5rem;
    height: 1.9rem;
    flex-shrink: 0;
    
    color: #000;
    text-align: center;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

/* 3. Bloque */
.about-section h3,
.about-section p {
    font-family: 'Helvetica', Arial, sans-serif;
    color: #000;
    width: calc(50% - 78px);
    margin-left: auto;
}

/* subtítulo "ROBERT WUN" */
.about-section h3 {
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 0.125rem;
    margin: 0 0 1.25rem auto;
    text-transform: uppercase;
}

/* Ajustes de los párrafos de texto */
.about-section p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
}

/* 4. Contenedor de la Imagen (Columna Central) */
.about-section .about-image {
    width: 40%;
    flex-shrink: 0;
}

.about-section .about-image img {
    width: 100%;
    height: auto;
    display: block;
}

























/* 1. Contenedor Principal */
.about-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: 91.0625rem; 
    margin: 0 auto;
    padding: 1.25rem;    
    box-sizing: border-box;
    gap: 1.25rem;       
}

/* 2. "ABOUT" */
.about-section h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    width: 8.5rem;          
    height: 1.875rem;      
    flex-shrink: 0;
    
    color: #000;
    text-align: center;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 1.375rem;  
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

/* 3. Bloque que envuelve los Párrafos y el H3 (Columna Derecha) */
body .about-section h3,
body .about-section p {
    font-family: 'Helvetica', Arial, sans-serif;
    width: calc(50% - 4.875rem); 
    margin-left: auto;
}

/* 4. "ROBERT WUN" */
body .about-section h3 {
    font-size: 3rem;      
    font-weight: 300;
    letter-spacing: 0.125rem;
    margin: 0 0 1.25rem auto;
    text-transform: uppercase;
    position: relative;
    

}

.about-section h3::before {
    content: "ROBERT";
    color: #fff;
    position: absolute;
    left: 0;
}


.about-section h3::after {
    content: "WUN";
    color: #000; 
    position: absolute;

}

/* 5. Ajustes de los párrafos de texto */
.about-section p {
    color: #000;
    font-size: 0.875rem;   
    line-height: 1.6;
    margin-bottom: 1.25rem;
}

/* 6. Contenedor de la Imagen (Columna Central) */
.about-section .about-image {
    width: 40%;
    flex-shrink: 0;
}

.about-section .about-image img {
    width: 100%;
    height: auto;
    display: block;
}










.about-section {
    display: grid;
    grid-template-columns: 8.5rem 1fr 28rem; /* Columna 1: Título lateral (136px) | Columna 2: Texto continuo | Columna 3: Foto */
    column-gap: 2.5rem;
    align-items: flex-start;
    width: 100%;
    max-width: 91.0625rem; /* 1457px */
    margin: 0 auto;
    padding: 1.25rem;
    box-sizing: border-box;
}

/* 1. Título lateral "ABOUT" (Alineado a la izquierda, igual que RUNWAY) */
.about-section h2 {
    grid-column: 1;
    margin: 0;
    width: 8.5rem;
    height: 1.875rem;
    color: #000;
    text-align: center;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 1.375rem; /* 22px */
    font-weight: 500;
    line-height: normal;
}

/* 2. Todo el contenido de texto va en la columna central (Columna 2) */
.about-section h3,
.about-section p {
    grid-column: 2; /* Obliga a que compartan la misma y única columna de texto */
    margin: 0 0 1.25rem 0;
    font-family: 'Helvetica', Arial, sans-serif;
    color: #000;
}

/* Título "ROBERT WUN" integrado al inicio de la columna de texto */
.about-section h3 {
    font-size: 3rem; /* 48px */
    font-weight: 300;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
}

/* Párrafos continuos */
.about-section p {
    font-size: 0.875rem; /* 14px */
    line-height: 1.6;
}

/* 3. La Imagen enviada a la derecha (Columna 3) */
.about-section .about-image {
    grid-column: 3; /* Envía la imagen al extremo derecho */
    grid-row: 1 / span 10; /* Hace que flote a la derecha mientras el texto baja a la izquierda */
    width: 100%;
}

.about-section .about-image img {
    width: 100%;
    height: auto;
    display: block;
}


/* 1. Sección about Contenedor Principal  */
.about-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: 91.0625rem; 
    margin: 0 auto;
    padding: 1.25rem;    
    box-sizing: border-box;
    gap: 2rem; 
}

/* 2. Título lateral "ABOUT" */
.about-section h2 {
    margin: 0;
    width: 8.5rem;
    height: 1.875rem;      
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 1.375rem;  
    font-weight: 500;
    line-height: normal;
}

/* 3. Contenedor de la Imagen (Columna Central) */
.about-section .about-image {
    width: 40%;
    flex-shrink: 0;
    position: relative;
}

.about-section .about-image img {
    width: 100%;
    height: auto;
    display: block;
}

/* 4. Columna de Contenido Derecho (bloque de texto) */
.about-section .about-content {
    width: 32rem; 
    display: flex;
    flex-direction: column;
}

/* 5. Título "ROBERT WUN"  */
.about-section .about-content h3 {
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 3rem; 
    font-weight: 300;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    margin: 0 0 2.5rem 0;
    position: relative;
    color: transparent;
}

/* ROBERT en blanco */
.about-section .about-content h3::before {
    content: "ROBERT";
    color: #fff;
    position: absolute;
    right: 100%;
    margin-right: 2rem; 
}

/* WUN en negro */
.about-section .about-content h3::after {
    content: "WUN";
    color: #000;
    position: absolute;
    left: 0;
    top: 0;
}

/* 6.  4 párrafos independientes */
.about-section .about-content p {
    color: #000;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 0.875rem;   
    line-height: 1.6;
    margin: 0 0 1.875rem 0;


