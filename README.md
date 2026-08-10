# GeoGalicia: Roteiro Lab Atlántico

Página de instrucciones para los 29 equipos participantes en el geoart
de 61 Adventure Labs que dibuja la palabra **GALICIA** sobre el Atlántico.

## Estructura del proyecto

```
geogalicia/
├── index.html            → Página principal (estructura y textos visibles)
├── css/
│   └── estilos.css       → Estilos (fondos blancos, letras oscuras)
├── js/
│   └── app.js            → Lógica: mapas, listados, botones de copiar
├── fonts/
│   └── uralita.otf       → Fuente de la cabecera
├── datos/
│   ├── textos.js         → Todos los textos de la página (editables)
│   ├── puntos.txt        → Coordenadas de los 61 puntos del geoart
│   ├── descripcion.txt   → Descripción común del Adventure Lab
│   └── etapas.txt        → Coordenadas de las 5 etapas (propuesta)
└── images/
    └── logo.png          → Imagen de portada común (1080×1080)
```

## Cómo se edita

**No hace falta tocar el HTML para cambiar textos ni datos:**

| Qué quieres cambiar                        | Dónde se edita        |
| ------------------------------------------ | --------------------- |
| Cualquier texto de la página               | `datos/textos.js`     |
| Descripción común del Adventure Lab        | `datos/descripcion.txt` |
| Coordenadas de los 61 puntos               | `datos/puntos.txt`    |
| Coordenadas y radio de las 5 etapas        | `datos/etapas.txt`    |
| Imagen de portada                          | `images/logo.png`     |
| Fuente de la cabecera (Uralita)            | `fonts/uralita.otf`   |

> **Importante sobre los textos:** el contenido visible también está
> incrustado en `index.html` para que la página se vea bien en cualquier
> sitio (incluso sin JavaScript). Pero la fuente de verdad al cargar la
> página es `datos/textos.js`: **edita siempre los textos en
> `datos/textos.js`**, no a mano dentro del HTML, porque al abrir la
> página los textos del archivo sobrescriben al HTML. Cuando se cambie
> un texto en `textos.js`, hay que actualizar también la copia del HTML
> para que ambas coincidan (lo puede hacer el administrador de la web).

### datos/puntos.txt
Una línea por punto: `número | coordenadas en formato geocaching`.
Las líneas que empiezan por `#` son comentarios.

### datos/etapas.txt
Una línea por etapa: `nº de etapa | coordenadas | radio en metros`.

### datos/textos.js
Un objeto `window.TEXTOS` con todos los textos. Se puede editar con
tranquilidad: los textos largos usan varias líneas y una línea en blanco
separa párrafos.

## Cómo publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `geogalicia`).
2. Sube **el contenido de esta carpeta** (index.html, css/, js/, datos/, images/).
3. En el repositorio: *Settings → Pages → Source: Deploy from a branch →
   rama `main` → carpeta `/ (root)`* y guarda.
4. En unos minutos la página estará en
   `https://TU_USUARIO.github.io/geogalicia/`.

La página necesita servirse por HTTP (fetch de los archivos de `datos/`),
así que **no funciona abierta como archivo local** (`file://`): usa
GitHub Pages o un servidor local cualquiera (`python3 -m http.server`).

## Notas técnicas

- Mapas: [Leaflet](https://leafletjs.com/) (desde CDN) con las capas
  OpenStreetMap (callejero) y Esri World Imagery (satélite).
- Todos los datos se cargan en tiempo de ejecución desde `datos/`.
- Los botones 📋 copian texto sin formato.
