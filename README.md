# GeoGalicia: Roteiro Lab Atlántico

Página de instrucciones del proyecto **GeoGalicia: Roteiro Lab Atlántico**, un geoart colaborativo de geocaching.

## 🌐 Web

https://beaypepe.github.io/geogalicia/

## ¿De qué va el proyecto?

**GeoGalicia: Roteiro Lab Atlántico** es un geoart colaborativo de geocaching en el que **29 equipos** crean **61 Adventure Labs** que, unidos, dibujan la palabra **GALICIA** sobre el Atlántico, frente a la costa noroeste de Galicia.

La coordinación del día a día (a qué equipo le toca cada lab, temáticas, preguntas, fechas, votaciones…) se hace en el **grupo de WhatsApp** del proyecto y en una hoja de cálculo compartida. Esta página web es el **manual común**: reúne, de forma sencilla, los datos y las instrucciones para que los 61 Adventure Labs se creen con los mismos datos y el mismo estilo. En la web encontraréis:

- el **mapa del geoart** con los 61 puntos y sus coordenadas en formato geocaching, con la posibilidad de alternar entre el mapa de OpenStreetMap y la vista de satélite;
- las **instrucciones paso a paso para crear cada Adventure Lab**: nombre («GeoGalicia #XX», siendo XX el número del lab de cada equipo), descripción común ya acordada (en gallego y en castellano), imagen de portada común, temas y coordenadas de inicio (con un desplegable que devuelve las de vuestro lab, listas para copiar);
- las **instrucciones paso a paso para crear las 5 etapas** de cada lab, todas ubicadas en el mismo sitio —el **Parque Central de Galicia** (Centro Geodésico de Galicia)—, con sus coordenadas, el radio de 200 metros, el tipo de pregunta recomendado y el resto de campos de la app.

Los Adventure Labs se harán mayoritariamente en **gallego** (idioma elegido por votación en el grupo), aunque cada equipo es libre de hacerlo en castellano, bilingüe o con más idiomas.

El estado del momento —progreso de los labs, fechas del evento de presentación, votaciones abiertas…— se consulta en la propia web y en el grupo de WhatsApp.

## Cómo está construida la página

Es un sitio web **estático**: solo HTML, CSS y JavaScript, sin servidor ni base de datos detrás. Se publica con [GitHub Pages](https://pages.github.com/) a partir de la rama `main` de este repositorio.

| Archivo / carpeta | Qué contiene |
| --- | --- |
| `index.html` | Estructura de la página: secciones, textos largos y metadatos para compartir |
| `css/estilos.css` | Diseño: colores, tipografías y adaptado a móviles |
| `js/app.js` | Lógica de la página: mapas, botones de copiar, selectores, carga de datos |
| `datos/puntos.txt` | Los 61 puntos del geoart, uno por línea (formato: `nº \| coordenadas`) |
| `datos/etapas.txt` | Coordenadas y radio de las 5 etapas comunes |
| `datos/descripcion.txt` | Descripción común de los labs, en gallego |
| `datos/descripcion-es.txt` | La misma descripción, en castellano |
| `datos/textos.js` | Textos de la página (títulos, pie…) editables sin tocar el HTML |
| `images/` | Imagen de portada común (1080×1080) y favicons |
| `fonts/` | Fuente Uralita, usada en la cabecera |
| `version.txt` | Número de versión: si cambia, la web se recarga sola sin caché |

Algunas notas:

- Los mapas se dibujan con [Leaflet](https://leafletjs.com/) usando los mapas de OpenStreetMap y los de satélite de Esri; por eso la página necesita conexión a internet.
- El mapa del geoart, el mapa de las etapas y todos los listados de coordenadas **se generan solos** a partir de `datos/puntos.txt` y `datos/etapas.txt`: para corregir un punto basta con editar su línea (o añadir/quitar una).
- Los textos cortos (títulos, pie de página) se leen de `datos/textos.js`; los textos largos se editan en `index.html`, y se mantiene una copia en sincronía en `datos/textos.js`.

## Cómo proponer cambios

> **Ojo:** se trata de código. Para modificar la página hacen falta **conocimientos de HTML, CSS y JavaScript**. Los archivos de la carpeta `datos/` son texto plano y se editan con calma, pero `index.html`, `css/estilos.css` y `js/app.js` son código de verdad.

Dicho esto, este es el proceso, paso a paso, y está pensado para que pueda seguirlo alguien con pocos conocimientos de GitHub:

### 1. Crea una cuenta en GitHub

Si no la tienes todavía, regístrate gratis en <https://github.com/join>.

### 2. Haz un *fork* del repositorio

Entra en <https://github.com/beaypepe/geogalicia> y pulsa el botón **Fork** (arriba a la derecha). GitHub creará una copia completa del proyecto en tu cuenta (por ejemplo, `tu-usuario/geogalicia`). A partir de ese momento solo modificas **tu copia**, que no afecta a la web.

### 3. Edita el archivo que toque

En tu copia, abre el archivo que quieras modificar y pulsa el **lápiz ✏️** que aparece arriba a la derecha de la vista del archivo. Así se abre el editor web de GitHub y puedes editar sin instalar nada:

- Para los archivos de `datos/` es la forma más cómoda.
- Para `index.html`, `css/` o `js/` también sirve; si el cambio es largo, es más cómodo trabajar en local: descarga el repositorio (botón verde **Code** → *Download ZIP*), edita con un editor de código (por ejemplo, [Visual Studio Code](https://code.visualstudio.com/)) y sube después los cambios a tu copia (`git add .`, `git commit -m "mensaje"`, `git push`).

Mientras editas:

- Conserva el formato de los archivos de datos: en `puntos.txt` y `etapas.txt`, una línea por coordenada (`nº | coordenadas`), y no borres los comentarios que empiezan por `#` (sirven para documentar el archivo).
- No cambies nombres de archivos ni de carpetas: el código los referencia por nombre.
- Si puedes, prueba el resultado en local: desde la raíz del proyecto ejecuta `python3 -m http.server` y abre `http://localhost:8000` en el navegador. (No vale con abrir `index.html` directamente como archivo: los datos se cargan por red y habría que servir la carpeta con un servidor cualquiera.)

### 4. Guarda el cambio (*commit*)

En el editor web, al final de la página, escribe un **mensaje** que explique brevemente qué has cambiado (por ejemplo, «Corrijo la coordenada del punto 23») y pulsa **Commit changes**.

### 5. Abre una *pull request*

Una pull request es una **propuesta** de cambio: no se toca la web hasta que se revisa y se aprueba.

- Si has editado desde la web de GitHub, al confirmar el commit aparecerá un recuadro con la opción **Compare & pull request**: pulsa **Create pull request**.
- Si has trabajado en local, ve al repositorio original (beaypepe/geogalicia), entra en la pestaña **Pull requests** y pulsa **New pull request**: deja como *base* la rama `main` del repositorio original y como *compare* tu rama `main` (la de tu fork), y pulsa **Create pull request**.

Añade un título claro y una descripción breve de lo que hace el cambio.

### 6. Avisa a Pepe

Avisa en el grupo de WhatsApp del proyecto (o directamente a [Pepe](https://jltaboada.com)) para que pueda revisar la pull request. Si se pide algún ajuste, se hace en tu copia y la misma pull request se actualiza sola.

### 7. Revisión y publicación

Cuando Pepe revise y apruebe la pull request, se fusiona (*merge*) en la rama `main` y la web de GitHub Pages se actualiza a los pocos minutos.

### Recomendaciones

- Es más fácil de revisar **un cambio por pull request** que diez a la vez.
- Si el cambio toca `datos/puntos.txt` o `datos/etapas.txt`, comprueba que el mapa y los listados se siguen viendo bien.
- `version.txt` y los parámetros `?v=` de `index.html` los gestiona el mantenedor junto con la publicación: no hace falta tocarlos.
