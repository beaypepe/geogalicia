/* ============================================================
   GEOGALICIA: ROTEIRO LAB ATLÁNTICO
   Textos de la página (editables sin tocar el HTML)

   Cómo editar: cambia aquí cualquier texto y recarga la página.
   El nombre del lab, la descripción común y las coordenadas
   están en los archivos de la carpeta datos/:
     - datos/descripcion.txt      (descripción común en gallego)
     - datos/descripcion-es.txt   (la misma descripción en castellano)
     - datos/puntos.txt        (coordenadas de los 61 puntos)
     - datos/etapas.txt        (coordenadas de las 5 etapas)

   Para textos largos se pueden usar varias líneas:
   una línea en blanco separa párrafos.
   ============================================================ */

window.TEXTOS = {

  /* ---------- Cabecera ---------- */
  cabeceraTexto: "GEOGALICIA: ROTEIRO LAB ATLÁNTICO",

  /* ---------- Introducción ---------- */
  introTitulo: "¿Qué es esta página?",
  intro: `Esta página es una forma sencilla de compartir las instrucciones del proyecto GeoGalicia: Roteiro Lab Atlántico entre los 29 equipos participantes.

Su único propósito es que todos podamos crear nuestros Adventure Labs fácilmente, con los mismos datos y el mismo estilo.

Aquí encontraréis el mapa con los 61 puntos del geoart, las coordenadas en formato geocaching y, paso a paso, todo lo que hay que rellenar en la app de Adventure Lab.

📊 Además, tenemos una hoja de cálculo de Google en la que se están asignando los labs a cada equipo y donde se irán poniendo las temáticas, las preguntas, las respuestas, etc. El enlace a la hoja ya está en el grupo de WhatsApp: preferimos no publicarlo aquí para que las respuestas no las vea cualquiera.`,

  whatsapp: `El grupo de WhatsApp se mantiene para comunicarnos entre todos: cualquier duda, propuesta o decisión se habla allí, y lo que se acuerde se irá reflejando en esta página.`,

  /* ---------- Mapa y listado de coordenadas ---------- */
  mapaTitulo: "El geoart: 61 puntos que dibujan «GALICIA»",
  mapaSub: "Haz clic en cualquier punto para ver su número y sus coordenadas. Con el control de capas (arriba a la derecha) puedes alternar entre el mapa callejero de OpenStreetMap y la vista de satélite.",
  listaTitulo: "Coordenadas de los 61 puntos",
  listaNota: "En formato geocaching, listas para copiar. Cada fila tiene su botón y, arriba, puedes copiarlas todas de una vez.",

  /* ---------- Últimos coletazos: labs pendientes y evento de presentación ---------- */
  plazoTitulo: "🏁 Últimos coletazos",
  plazo: `Llevamos un tiempo sin saber nada de Lucky13Nacho, así que hay que decidir qué hacemos con los labs que tenía asignados. De los dos que le correspondían, uno ya lo ha cogido GeoBalea, y nos queda el otro. Sería buena idea esperar un poco más a ver si Lucky13Nacho da señales de vida y hace él el lab que le corresponde, y si al final no sabemos nada de él, a ver si alguien se ofrece a hacer el que falta y así cerramos definitivamente la historia de los labs de Lucky13Nacho.

Y por lo que respecta al evento de presentación, en el grupo de WhatsApp se ha hablado de celebrarlo aprovechando el Adventure Day 2026 (https://www.geocaching.com/blog/2026/09/adventure-day-2026-2/), que este año se celebra del 25 al 29 de noviembre. Como ya sabéis, será en el Parque Central de Galicia. Queda por decidir el día exacto: lo lógico sería el sábado 28 o el domingo 29, así que lo pondremos a votación en el grupo.

Y para ir moviéndonos, dos temas a tener en cuenta: El primero, sobre los plazos: nos faltan poco más de dos meses, y de aquí al evento aún queda votar el día, crearlo, enviarlo a revisión (con al menos 15 días de antelación) y esperar a que lo publiquen. Así que, si queremos hacer un poco de difusión para que venga gente, convendría tenerlo publicado cuanto antes.

El segundo, sobre la descripción del evento: no debería hablarse del geoart de labs, sino de una gran sorpresa que se presentará ese día. Tampoco hay que decirlo todo: con apuntar que se podrán completar ubicaciones de Adventure Lab y que el souvenir del Adventure Day se conseguirá de sobra, la gente se hará una idea de que habrá Adventure Labs… pero sin llegar a decirlo.`,

  /* ---------- Votación del idioma (ya decidido) ---------- */
  votacionTitulo: "🗳️ Idioma de los labs: se decidió el gallego",
  votacion: `En el grupo de WhatsApp se ha votado y la mayoría ha decidido que los Adventure Labs se hagan en gallego. Aun así, hay gente que lo va a hacer en castellano y gente que lo va a hacer bilingüe, así que, en resumen: que cada uno haga lo que quiera.

El que lo quiera en gallego y el que lo quiera en castellano tienen más abajo la descripción común en los dos idiomas, lista para copiar; el que lo quiera bilingüe, que ponga las dos; y si alguien quiere añadir más idiomas, que lo haga.

La versión de referencia sigue siendo la gallega, y la castellana es su traducción. Y si alguien quiere aportar algo o dar su opinión, el grupo de WhatsApp está para eso.`,

  /* ---------- Instrucciones: Adventure Lab ---------- */
  instruccionesLabTitulo: "Instrucciones para el Adventure Lab",
  labNombreTitulo: "Nombre del Adventure Lab",
  labNombreValor: "GeoGalicia #XX",
  labNombreTexto: `Poned como nombre del lab: «GeoGalicia #XX».

XX son los dos dígitos del número de vuestro lab (del 01 al 61): cada uno ya sabe qué números ha de utilizar. Por ejemplo, si vuestro lab es el número 7, el nombre será «GeoGalicia #07».`,

  labDescripcionTitulo: "Descripción del Adventure Lab",
  labDescripcionTexto: `La descripción es común para todos los labs y ya está acordada: la versión de referencia está en gallego, el idioma elegido por mayoría en el grupo de WhatsApp.

Aquí tenéis las dos versiones: en gallego y en castellano (la misma descripción, traducida). Cada uno copia la que quiera; quien lo haga bilingüe, que pegue las dos.

Si alguien quiere proponer algún cambio en cualquiera de las dos, que lo diga por el grupo de WhatsApp. Los textos están listos para copiar y pegar tal cual en vuestro lab:`,

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
  etapaSecuencialTexto: `En el grupo de WhatsApp se ha votado y se ha decidido que cada cual decida si su lab es secuencial o no secuencial, tal y como estaba previsto.

Un apunte importante: todas las etapas se harán desde un único punto, sin necesidad de moverse del sitio. Así que, en la práctica, daría igual hacer el lab secuencial o no.

La única razón para decantarse por el secuencial sería si, por algún motivo, queremos que las preguntas tengan un orden. Por ejemplo, si queremos preguntar algo sobre los años xacobeos, que primero se pregunte por el de 1993, luego por el de 1999, luego saltemos al 2010, luego al 2021-2022 y por último 2027: así quedarían por orden cronológico, y aquí sí tendría sentido hacerlo secuencial.

En cambio, para preguntar sobre platos de la gastronomía gallega da igual preguntar primero por los pimientos de Padrón y luego por el pulpo á feira que al revés.`,

  etapaNombreTitulo: "Nombre de la etapa",
  etapaNombreTexto: `Cada uno pondrá el nombre que quiera a cada etapa, acorde con la pregunta o la temática que vaya a utilizar. Ha de ser un texto de 50 caracteres como máximo.`,

  etapaDescripcionTitulo: "Descripción de la etapa",
  etapaDescripcionTexto: `Cada uno pondrá lo que quiera en la descripción de su etapa: un texto de 2000 caracteres como máximo, en el idioma que se haya votado.

Consejo: la mayoría de la gente se saltará esta descripción, sobre todo si la ven muy larga. Haced una descripción corta, ya que así aumentarán las posibilidades de que la gente la lea.`,

  etapaImagenTitulo: "Imagen de la etapa",
  etapaImagenTexto: `También habrá que poner una imagen en cada etapa. Cada uno es libre de colocar la imagen que quiera, siempre que esté relacionada con su etapa.`,

  etapaCoordenadasTitulo: "Coordenadas de la etapa — Parque Central de Galicia",
  etapaCoordenadasTexto: `La ubicación de las etapas es el Parque Central de Galicia, en el Centro Geodésico de Galicia: así lo eligió la mayoría en el grupo de WhatsApp.

Las cinco etapas de TODOS los labs estarán en este parque, con las mismas coordenadas, a pocos metros unas de otras.

Con un radio de 200 metros en cada etapa se podrá resolver desde cualquier punto del parque, incluido el merendero cubierto que hay para hacerlo a cubierto.

En el mapa de abajo podéis ver las cinco coordenadas, con un zoom de 17 para que se vea bien. Si alguien quiere aportar algo o dar su opinión, el grupo de WhatsApp está para eso.`,

  etapaDistanciaTitulo: "Distancia",
  etapaDistanciaTexto: `La distancia de cada etapa será de 200 metros: con 100 metros quedaba bastante justo para poder hacerlo desde el merendero cubierto del Parque Central de Galicia, así que hemos ampliado el radio a 200 metros.

Con 200 metros se podrá resolver cada etapa desde cualquier punto del parque, incluido el merendero cubierto.`,

  etapaPreguntaTitulo: "Tipo de pregunta",
  etapaPreguntaTexto: `Pondremos todas las etapas con «Opción múltiple»: habrá que poner hasta cuatro respuestas, de las cuales solo una será correcta. Si se quieren poner solo dos o tres respuestas, también se puede.`,

  etapaCompletadoTitulo: "Imagen y mensaje de ubicación completada",
  etapaCompletadoTexto: `La imagen de ubicación completada puede ser la misma que la de la etapa o la que cada uno quiera. El mensaje de ubicación completada también podrá ser lo que cada uno quiera.`,

  etapaGuardarTitulo: "Crear o actualizar la ubicación",
  etapaGuardarTexto: `Con todos los datos rellenos, solo hay que darle al botón «Crear la ubicación» (o «Actualizar la ubicación» si ya estaba creada anteriormente) y ya quedará guardado.`,

  /* ---------- Pie de página ---------- */
  pieTexto1: "GeoGalicia: Roteiro Lab Atlántico — proyecto colaborativo de 29 equipos · 61 Adventure Labs dibujando «GALICIA» sobre el Atlántico.",
  pieTexto2: "Las decisiones se toman en el grupo de WhatsApp; esta página se actualiza con lo que se acuerde."
};
