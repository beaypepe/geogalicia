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
  cabeceraTexto: "GEOGALICIA - ROTEIRO LAB ATLÁNTICO",

  /* ---------- Introducción ---------- */
  introTitulo: "¿Qué es esta página?",
  intro: `Esta página es una forma sencilla de compartir las instrucciones del proyecto GeoGalicia: Roteiro Lab Atlántico entre los 29 equipos participantes.

Su único propósito es que todos podamos crear nuestros Adventure Labs fácilmente, con los mismos datos y el mismo estilo.

Aquí encontraréis el mapa con los 61 puntos del geoart, las coordenadas en formato geocaching y, paso a paso, todo lo que hay que rellenar en la app de Adventure Lab.

📊 Además, tenemos una hoja de cálculo de Google en la que se están asignando los labs a cada equipo: allí también se podrán ir poniendo las temáticas, las preguntas, las respuestas, etc. Podéis acceder desde este enlace: https://docs.google.com/spreadsheets/d/1UKiFDh26PM1axQFUR7TOIsJeGAA0PPr8CaXlUGUBFZk/edit?usp=sharing`,

  whatsapp: `📱 El grupo de WhatsApp se mantiene para comunicarnos entre todos: cualquier duda, propuesta o decisión se habla allí, y lo que se acuerde se irá reflejando en esta página.`,

  /* ---------- Mapa y listado de coordenadas ---------- */
  mapaTitulo: "El geoart: 61 puntos que dibujan «GALICIA»",
  mapaSub: "Haz clic en cualquier punto para ver su número y sus coordenadas. Con el control de capas (arriba a la derecha) puedes alternar entre el mapa callejero de OpenStreetMap y la vista de satélite.",
  listaTitulo: "Coordenadas de los 61 puntos",
  listaNota: "En formato geocaching, listas para copiar. Cada fila tiene su botón y, arriba, puedes copiarlas todas de una vez.",

  /* ---------- Aviso del plazo ---------- */
  plazoTitulo: "🗓️ Pongámonos de acuerdo en un plazo",
  plazo: `Ya estamos todos listos para crear nuestros Adventure Labs, así que es el momento de hablar por el grupo de WhatsApp para ver si nos ponemos de acuerdo en una fecha tope que nos permita tener rematado el lab y publicarlo.

Además, se podría aprovechar para crear un evento en Santiago para presentar el proyecto. Estaría bien que la gente propusiera fechas para que podamos asistir cuantos más mejor, teniendo en cuenta que para crear el evento se necesitan 15 días de antelación para enviarlo a revisión.

¡Dad vuestra opinión en el grupo!`,

  /* ---------- Votación del idioma ---------- */
  votacionTitulo: "🗳️ Primera votación: ¿en qué idioma hacemos los labs?",
  votacion: `Antes de empezar a crear los labs hay que decidir si los haremos en castellano o en gallego. Esta decisión se tomará por el grupo de WhatsApp: esta página solo lo deja dicho para que todo el mundo lo tenga claro.

Para que conste, los labs de Catalunya (por lo menos las etapas que hemos visto, que no son todas) están en catalán, así que estaría bien votarlo para dar uniformidad a todo el geoart. También existe la opción de hacerlos bilingües, en gallego y castellano.

Cuando se haya decidido, lo pondremos en esta página.`,

  /* ---------- Instrucciones: Adventure Lab ---------- */
  instruccionesLabTitulo: "Instrucciones para el Adventure Lab",
  labNombreTitulo: "Nombre del Adventure Lab",
  labNombreValor: "GeoGalicia: Roteiro Lab Atlántico #XX",
  labNombreTexto: `Poned como nombre del lab: «GeoGalicia: Roteiro Lab Atlántico #XX».

XX son los dos dígitos del número de vuestro lab (del 01 al 61): cada uno ya sabe qué números ha de utilizar. Por ejemplo, si vuestro lab es el número 7, el nombre será «GeoGalicia: Roteiro Lab Atlántico #07».`,

  labDescripcionTitulo: "Descripción del Adventure Lab",
  labDescripcionTexto: `La descripción es común para todos los labs y ya está acordada (esta es la versión en castellano que se propuso hace tiempo). Si en la votación del idioma sale el gallego, habrá que traducirla; y si alguien quiere proponer otra cosa, que lo diga por el grupo de WhatsApp.

El texto está listo para copiar y pegar tal cual en vuestro lab:`,

  labImagenTitulo: "Imagen de portada",
  labImagenTexto: `La imagen de portada es común y ya está lista: es la imagen cuadrada de 1080×1080 que se propuso y se eligió en el grupo de WhatsApp.

Cada uno la sube a su lab tal cual. Si alguien quiere proponer otra imagen, que lo diga por el grupo de WhatsApp.

Haz clic sobre la imagen para verla ampliada y poder descargarla.`,

  labTemaTitulo: "Tema del Adventure",
  labTemaTexto: `Marcad los temas que se ajusten a vuestro lab; dependerá del tema de lab que tenga cada uno. Por ejemplo, si vuestro lab habla de gastronomía gallega, marcad la opción «Comida y Bebida»; si habla del Camino de Santiago, podéis marcar «Camino».

Esta parte ya es acorde a cada lab: cada uno marca lo que quiera.`,

  labInicioTitulo: "Ubicación de inicio del Adventure",
  labInicioTexto: `En el campo «Ubicación de inicio del Adventure» de la app tenéis que pegar las coordenadas del punto del geoart que os corresponda, es decir, las de vuestro número de lab.

Elegid vuestro número en el desplegable y se mostrarán las coordenadas de inicio de vuestro lab, listas para copiar:`,

  /* ---------- Instrucciones: etapas ---------- */
  instruccionesEtapasTitulo: "Instrucciones para las etapas",
  etapaSecuencialTitulo: "¿Etapas secuenciales o no secuenciales?",
  etapaSecuencialTexto: `Hay que decidir si las 5 etapas de cada lab serán secuenciales o no secuenciales. Aquí solo lo dejamos señalado: la decisión se tomará en el grupo de WhatsApp.

Como referencia: el geoart de Portugal está formado por etapas secuenciales y el de Catalunya por etapas no secuenciales. Estaría bien ponernos de acuerdo para que todas sean iguales, secuenciales o no.`,

  etapaNombreTitulo: "Nombre de la etapa",
  etapaNombreTexto: `Cada uno pondrá el nombre que quiera a cada etapa, acorde con la pregunta o la temática que vaya a utilizar. Ha de ser un texto de 50 caracteres como máximo.`,

  etapaDescripcionTitulo: "Descripción de la etapa",
  etapaDescripcionTexto: `Cada uno pondrá lo que quiera en la descripción de su etapa: un texto de 2000 caracteres como máximo, en el idioma que se haya votado.

Consejo: la mayoría de la gente se saltará esta descripción, sobre todo si la ven muy larga. Haced una descripción corta, ya que así aumentarán las posibilidades de que la gente la lea.`,

  etapaImagenTitulo: "Imagen de la etapa",
  etapaImagenTexto: `También habrá que poner una imagen en cada etapa. Cada uno es libre de colocar la imagen que quiera, siempre que esté relacionada con su etapa.`,

  etapaCoordenadasTitulo: "Coordenadas de la etapa — propuesta de BeayPepe",
  etapaCoordenadasTexto: `⚠️ Esta es una PROPUESTA personal de BeayPepe: todavía no se ha comentado en el grupo, así que habrá que ponerse de acuerdo en esto.

La idea es que las etapas de TODOS los labs estén en la Plaza del Obradoiro, con las mismas cinco coordenadas, formando una X en el centro de la plaza.

Además, si le ponemos un radio de 100 metros a cada etapa, se podrá hacer desde cualquier punto de la plaza, incluso bajo los soportales del Concello, por si acaso alguien quiere hacer el geoart un día de lluvia (cosa bastante habitual en Santiago).

Luego viene la distancia, que en principio será de 100 metros, y así se podrá hacer desde cualquier punto de la plaza. Si la gente prefiere otra distancia para que se pueda hacer desde alguna cafetería cercana, es cuestión de proponerlo en el grupo de WhatsApp.`,

  etapaDistanciaTitulo: "Distancia",
  etapaDistanciaTexto: `La distancia será de 100 metros, o más si se decide en el grupo de WhatsApp. Con 100 metros se podrá hacer desde cualquier punto de la plaza; si se prefiere una distancia mayor (por ejemplo, para completarlo desde alguna cafetería cercana), es cuestión de proponerlo en el grupo.`,

  etapaPreguntaTitulo: "Tipo de pregunta",
  etapaPreguntaTexto: `Pondremos todas las etapas con «Opción múltiple»: habrá que poner hasta cuatro respuestas, de las cuales solo una será correcta. Si se quieren poner solo dos o tres respuestas, también se puede.`,

  etapaCompletadoTitulo: "Imagen y mensaje de ubicación completada",
  etapaCompletadoTexto: `La imagen de ubicación completada puede ser la misma que la de la etapa o la que cada uno quiera. El mensaje de ubicación completada también podrá ser lo que cada uno quiera.`,

  etapaGuardarTitulo: "Crear o actualizar la ubicación",
  etapaGuardarTexto: `Con todos los datos rellenos, solo hay que darle al botón «Crear la ubicación» (o «Actualizar la ubicación» si ya estaba creada anteriormente) y ya quedará guardado.`,

  /* ---------- Pie de página ---------- */
  pieTexto: "GeoGalicia: Roteiro Lab Atlántico — proyecto colaborativo de 29 equipos · 61 Adventure Labs dibujando «GALICIA» sobre el Atlántico. Las decisiones se toman en el grupo de WhatsApp; esta página se actualiza con lo que se acuerde."
};
