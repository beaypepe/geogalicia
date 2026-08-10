/* ============================================================
   GEOGALICIA: ROTEIRO LAB ATLÁNTICO
   Textos de la página (editables sin tocar el HTML)

   Cómo editar: cambia aquí cualquier texto y recarga la página.
   El nombre del lab, la descripción común y las coordenadas
   están en los archivos de la carpeta datos/:
     - datos/descripcion.txt   (descripción común del Adventure Lab)
     - datos/puntos.txt        (coordenadas de los 61 puntos)
     - datos/etapas.txt        (coordenadas de las 5 etapas)

   Para textos largos se pueden usar varias líneas:
   una línea en blanco separa párrafos.
   ============================================================ */

window.TEXTOS = {

  /* ---------- Cabecera ---------- */
  titulo: "GeoGalicia",
  subtitulo: "Roteiro Lab Atlántico",

  /* ---------- Introducción ---------- */
  introTitulo: "¿Qué es esta página?",
  intro: `Bienvenido a la página de GeoGalicia: Roteiro Lab Atlántico. Este proyecto reúne a 29 equipos de geocaching para crear un geoart de 61 Adventure Labs que, juntos, dibujan la palabra GALICIA sobre las aguas del Atlántico, frente a la costa noroeste de Galicia.

Esta página tiene un único propósito: compartir de forma sencilla las instrucciones para que todos los participantes podamos crear nuestros Adventure Labs fácilmente, con los mismos datos y el mismo estilo.

Aquí encontrarás el mapa con los 61 puntos, las coordenadas en formato geocaching y, paso a paso, todo lo que hay que rellenar en cada campo de la app de Adventure Lab, tanto para el lab como para cada una de sus cinco etapas.

Los textos y los datos están guardados en archivos separados (carpeta «datos/»), para que sea muy fácil actualizarlos cuando el grupo acuerde algún cambio.`,

  whatsapp: `📱 El grupo de WhatsApp se mantiene como canal de comunicación entre los 29 equipos: esta página solo reúne las instrucciones y los datos de referencia. Cualquier duda, propuesta o decisión se habla en el grupo, y lo que se acuerde se irá reflejando aquí.`,

  /* ---------- Mapa y listado de coordenadas ---------- */
  mapaTitulo: "El geoart: 61 puntos que dibujan «GALICIA»",
  mapaSub: "Haz clic en cualquier punto para ver su número y sus coordenadas. Con el control de capas (arriba a la derecha) puedes alternar entre el mapa callejero de OpenStreetMap y la vista de satélite.",
  listaTitulo: "Coordenadas de los 61 puntos",
  listaNota: "En formato geocaching, listas para copiar. Cada fila tiene su botón y, arriba, puedes copiarlas todas de una vez.",

  /* ---------- Aviso del plazo (importante: que aparezca antes de las instrucciones) ---------- */
  plazoTitulo: "🗓️ Antes de nada: pongámonos de acuerdo en un plazo",
  plazo: `Ya estamos todos listos para crear nuestros Adventure Labs. Es muy importante acordar una fecha tope para tener los 61 labs y sus etapas creados, y ponernos de acuerdo para publicar todas las etapas más o menos a la vez.

Por favor, opinad en el grupo de WhatsApp para elegir la fecha que mejor venga a todos.`,

  /* ---------- Votación del idioma ---------- */
  votacionTitulo: "🗳️ Primera votación: ¿en qué idioma hacemos los labs?",
  votacion: `Antes de empezar, proponemos un primer dato a votar en el grupo de WhatsApp: si queremos hacer los Adventure Labs en gallego o en castellano.

Para que conste, los labs de Catalunya (por lo menos las etapas que hemos visto, que no son todas) están en catalán. Estaría bien votarlo para dar uniformidad a todo el geoart.

También existe la opción de hacerlos bilingües, en gallego y castellano. ¡Votad en el grupo!`,

  /* ---------- Instrucciones: Adventure Lab ---------- */
  instruccionesLabTitulo: "Instrucciones para el Adventure Lab",
  labNombreTitulo: "Nombre del Adventure Lab",
  labNombreValor: "GeoGalicia: Roteiro Lab Atlántico #XX",
  labNombreTexto: `Poned como nombre del lab: «GeoGalicia: Roteiro Lab Atlántico #XX», donde XX es el número del lab (cada uno ya sabe qué números ha de utilizar). El «#XX» no se cambia por nada más: solo el número correspondiente a vuestro punto.`,

  labDescripcionTitulo: "Descripción del Adventure Lab",
  labDescripcionTexto: `La descripción es común para todos los labs y ya está acordada (esta es una versión en castellano que se propuso hace tiempo). Si en la votación sale el gallego, habrá que traducirla; y si alguien quiere proponer otra cosa, que lo diga por el grupo de WhatsApp.

El texto está en el archivo datos/descripcion.txt, listo para copiar:`,
  labDescripcionNota: `📄 Descripción común (archivo datos/descripcion.txt)`,

  labImagenTitulo: "Imagen de portada",
  labImagenTexto: `La imagen de portada es común y ya está lista: es el archivo images/logo.png, una imagen cuadrada de 1080×1080 px que se propuso y se eligió en el grupo de WhatsApp.

Cada uno la sube a su lab tal cual. Si alguien quiere proponer otra imagen, que lo diga por el grupo de WhatsApp.`,

  labTemaTitulo: "Tema del Adventure",
  labTemaTexto: `Marcad los temas que se ajusten a vuestro lab (el builder permite marcar hasta 3). Depende de la temática de cada uno: por ejemplo, si habláis de gastronomía gallega, marcad «Comida y bebida»; si habláis del Camino de Santiago, «Camino».

Aquí tenéis la lista completa de temas, con los que podéis marcar los vuestros para decidir; la selección final se hace en la app.`,

  labInicioTitulo: "Ubicación de inicio del Adventure",
  labInicioTexto: `En el campo «Ubicación de inicio del Adventure» pegad las coordenadas del punto del geoart que os corresponda, es decir, las de vuestro número de lab.

Las tenéis todas en el mapa y en el listado de la parte de arriba, con botón de copiar.`,

  /* ---------- Instrucciones: etapas ---------- */
  instruccionesEtapasTitulo: "Instrucciones para las etapas",
  etapaSecuencialTitulo: "¿Etapas secuenciales o no secuenciales?",
  etapaSecuencialTexto: `Hay que decidir si las 5 etapas serán secuenciales o no secuenciales. Aquí solo lo dejamos señalado: la decisión se tomará en el grupo de WhatsApp.

Como referencia: el geoart de Portugal está formado por etapas secuenciales y el de Catalunya por etapas no secuenciales. Estaría bien ponernos de acuerdo para que todas sean iguales, secuenciales o no.`,

  etapaNombreTitulo: "Nombre de la etapa",
  etapaNombreTexto: `Un texto de 50 caracteres como máximo. Cada uno pondrá el nombre que quiera para cada etapa, acorde con la pregunta o la temática que vaya a utilizar.`,

  etapaDescripcionTitulo: "Descripción de la etapa",
  etapaDescripcionTexto: `Un texto de 2000 caracteres como máximo, en el idioma que se haya votado.

Importante: la mayoría de la gente se saltará esta descripción, sobre todo si la ven muy larga. Haced una descripción corta: así aumentarán mucho las posibilidades de que la lean.`,

  etapaImagenTitulo: "Imagen de la etapa",
  etapaImagenTexto: `Cada uno es libre de colocar la imagen que quiera, siempre que esté relacionada con su etapa.`,

  etapaCoordenadasTitulo: "Coordenadas de la etapa — propuesta de BeayPepe",
  etapaCoordenadasTexto: `Esta es una PROPUESTA, todavía no se ha hablado en el grupo, así que habrá que discutirla: la idea es que las etapas de TODOS los labs estén en la Plaza del Obradoiro, con las mismas cinco coordenadas, formando una X en el centro de la plaza.

Con un radio de 100 metros por etapa, se podrá hacer desde cualquier punto de la plaza, incluso bajo los soportales del Concello, por si acaso alguien quiere hacer el geoart un día de lluvia (cosa bastante habitual en Santiago).

Las coordenadas están en el archivo datos/etapas.txt y en el mapa de abajo (zoom 17):`,

  etapaDistanciaTitulo: "Distancia",
  etapaDistanciaTexto: `En principio, la distancia será de 100 metros, y así se podrá hacer desde cualquier punto de la plaza.

Si la gente prefiere otra distancia (por ejemplo, para poder completarlo desde alguna cafetería cercana), es cuestión de proponerlo en el grupo de WhatsApp.`,

  etapaPreguntaTitulo: "Tipo de pregunta",
  etapaPreguntaTexto: `Pondremos todas las etapas con «Opción múltiple»: hasta cuatro respuestas, de las cuales solo una será correcta (si se quieren poner solo dos o tres respuestas, también se puede).`,

  etapaCompletadoTitulo: "Imagen y mensaje de ubicación completada",
  etapaCompletadoTexto: `La imagen de ubicación completada puede ser la misma que la de la etapa o la que cada uno quiera. El mensaje de ubicación completada también es libre.`,

  etapaGuardarTitulo: "Crear o actualizar la ubicación",
  etapaGuardarTexto: `Con todos los datos rellenos, solo hay que crear (o actualizar) la ubicación y ya quedará guardado.`,

  /* ---------- Pie de página ---------- */
  pieTexto: "GeoGalicia: Roteiro Lab Atlántico — proyecto colaborativo de 29 equipos · 61 Adventure Labs dibujando «GALICIA» sobre el Atlántico. Las decisiones se toman en el grupo de WhatsApp; esta página se actualiza con lo que se acuerde.",

  /* ---------- Temas oficiales del Adventure Lab ---------- */
  temas: [
    "Arquitectura", "Arte y barrio", "Camino", "Ciencia",
    "Comida y bebida", "Deporte", "Educación", "Ejercicio",
    "Entretenimiento", "Fauna", "Historia", "Homenaje",
    "Humor", "Interior", "Juegos", "Misterio", "Música",
    "Narración", "Naturaleza", "Para niños", "Parque",
    "Recorrido a pie", "Recorrido en coche", "Serie",
    "Sostenibilidad", "Tecnología", "Terror", "Turismo",
    "Viaje", "Otro"
  ]
};
