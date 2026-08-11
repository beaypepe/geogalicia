/* ============================================================
   GEOGALICIA: ROTEIRO LAB ATLÁNTICO — lógica de la página
   - Carga los textos desde datos/textos.js (window.TEXTOS)
   - Lee los datos desde: datos/puntos.txt, datos/descripcion.txt,
     datos/etapas.txt
   - Construye los mapas (Leaflet), el listado de coordenadas,
     y activa los botones de copiar.
   ============================================================ */

'use strict';

(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Utilidades de texto ---------- */

  function escapar(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Convierte las URLs en enlaces clicables (después de escapar) */
  function enlazar(texto) {
    return String(texto).replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );
  }

  /* Convierte un texto en párrafos: línea en blanco = párrafo nuevo */
  function aHtml(texto) {
    return String(texto)
      .split(/\n\s*\n/)
      .map((p) => '<p>' + enlazar(escapar(p).replace(/\n/g, '<br>')) + '</p>')
      .join('');
  }

  /* Rellena un elemento con texto largo y guarda el texto original
     para que el botón de copiar lo copie tal cual. */
  function rellenarLargo(sel, texto) {
    const el = $(sel);
    if (!el) return;
    el.innerHTML = aHtml(texto);
    el.dataset.textoRaw = String(texto);
  }

  /* Rellena un elemento con texto corto (sin párrafos) */
  function rellenarCorto(sel, texto) {
    const el = $(sel);
    if (!el) return;
    el.textContent = String(texto);
    el.dataset.textoRaw = String(texto);
  }

  /* ---------- Copiar al portapapeles ---------- */

  function copiarTexto(texto, boton) {
    const restaurar = () => {
      if (!boton) return;
      const original = boton.dataset.original || boton.textContent;
      boton.textContent = '✓ ¡Copiado!';
      boton.classList.add('copiado');
      setTimeout(() => {
        boton.textContent = original;
        boton.classList.remove('copiado');
      }, 1800);
    };

    const copiaTemporal = () => {
      const ta = document.createElement('textarea');
      ta.value = texto;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) restaurar();
      else alert('No se ha podido copiar el texto. Selecciónalo manualmente.');
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto).then(restaurar).catch(copiaTemporal);
    } else {
      copiaTemporal();
    }
  }

  /* Un único manejador para todos los botones de copiar
     (también los que se crean dinámicamente y los popups del mapa). */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-copiar-texto], [data-copiar]');
    if (!btn) return;

    let texto = null;
    if (btn.dataset.copiarTexto !== undefined && btn.dataset.copiarTexto !== '') {
      texto = btn.dataset.copiarTexto;
    } else if (btn.dataset.copiar) {
      const el = document.getElementById(btn.dataset.copiar);
      if (el) {
        texto = el.dataset.textoRaw !== undefined
          ? el.dataset.textoRaw
          : (el.innerText || el.textContent);
      }
    }
    if (texto === null || texto === undefined) return;
    texto = String(texto).trim();

    if (btn.dataset.original === undefined) btn.dataset.original = btn.textContent;
    copiarTexto(texto, btn);
  });

  /* ---------- Coordenadas ---------- */

  /* Convierte «N43° 15.150 W9° 17.369» (formato geocaching) a lat/lng */
  function parsearCoordenada(txt) {
    const reLat = /([NS])\s*(\d{1,3})\s*°\s*(\d{1,2}(?:\.\d+)?)/i;
    const reLon = /([EW])\s*(\d{1,3})\s*°\s*(\d{1,2}(?:\.\d+)?)/i;
    const m1 = reLat.exec(txt);
    const m2 = reLon.exec(txt);
    if (!m1 || !m2) return null;
    const lat = (m1[1].toUpperCase() === 'N' ? 1 : -1) * (parseFloat(m1[2]) + parseFloat(m1[3]) / 60);
    const lng = (m2[1].toUpperCase() === 'E' ? 1 : -1) * (parseFloat(m2[2]) + parseFloat(m2[3]) / 60);
    return { lat: +lat.toFixed(6), lng: +lng.toFixed(6), cruda: txt.trim() };
  }

  function leerPuntos(texto) {
    return texto.split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'))
      .map((l) => {
        const partes = l.split('|').map((s) => s.trim());
        if (partes.length < 2) return null;
        const coord = parsearCoordenada(partes[1]);
        if (!coord) return null;
        const num = (partes[0].replace(/\D/g, '') || '?').padStart(2, '0');
        return { num: num, ...coord };
      })
      .filter(Boolean);
  }

  function leerEtapas(texto) {
    return texto.split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'))
      .map((l) => {
        const partes = l.split('|').map((s) => s.trim());
        if (partes.length < 2) return null;
        const coord = parsearCoordenada(partes[1]);
        if (!coord) return null;
        return {
          num: partes[0].replace(/\D/g, '') || '?',
          radio: parseInt(partes[2], 10) || 100,
          ...coord
        };
      })
      .filter(Boolean);
  }

  /* ---------- Textos de la página ---------- */

  function volcarTextos() {
    const T = window.TEXTOS || {};

    $$('[data-texto]').forEach((el) => {
      const clave = el.dataset.texto;
      if (T[clave] === undefined) return;
      const valor = String(T[clave]);
      const esTextoPlano = /^H[1-6]$/.test(el.tagName) || el.tagName === 'P';
      if (esTextoPlano) {
        el.textContent = valor;
      } else {
        el.innerHTML = aHtml(valor);
      }
      el.dataset.textoRaw = valor;
    });

    const valorNombre = $('#valor-nombre-lab');
    if (valorNombre && T.labNombreValor !== undefined) {
      valorNombre.textContent = T.labNombreValor;
      valorNombre.dataset.textoRaw = String(T.labNombreValor);
    }
  }

  /* ---------- Listados de coordenadas ---------- */

  function construirFila(ol, num, cruda, claseNum) {
    const li = document.createElement('li');
    li.className = 'fila-coord';

    const badge = document.createElement('span');
    badge.className = 'fila-num' + (claseNum ? ' ' + claseNum : '');
    badge.textContent = num;

    const txt = document.createElement('span');
    txt.className = 'fila-coords';
    txt.textContent = cruda;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn-copiar btn-mini';
    btn.textContent = '📋';
    btn.title = 'Copiar coordenadas';
    btn.setAttribute('aria-label', 'Copiar coordenadas de ' + num);
    btn.dataset.copiarTexto = cruda;

    li.append(badge, txt, btn);
    ol.appendChild(li);
  }

  function construirListaPuntos(puntos) {
    const ol = $('#lista-puntos');
    if (!ol) return;
    ol.innerHTML = '';
    puntos.forEach((p) => construirFila(ol, p.num, p.cruda));

    const btnTodas = $('#btn-copiar-todas');
    if (btnTodas) {
      btnTodas.dataset.copiarTexto = puntos
        .map((p) => 'GeoGalicia #' + p.num + ': ' + p.cruda)
        .join('\n');
    }
  }

  /* Selector de número de lab → coordenadas de inicio */
  function construirSelectorInicio(puntos) {
    const sel = $('#select-punto');
    if (!sel || !puntos.length) return;
    puntos.forEach((p) => {
      const op = document.createElement('option');
      op.value = p.num;
      op.textContent = 'GeoGalicia #' + p.num;
      sel.appendChild(op);
    });
    const resultado = $('#inicio-resultado');
    const coords = $('#inicio-coords');
    const btn = $('#btn-copiar-inicio');
    sel.addEventListener('change', () => {
      const p = puntos.find((x) => x.num === sel.value);
      if (!p) { resultado.hidden = true; return; }
      coords.textContent = p.cruda;
      btn.dataset.copiarTexto = p.cruda;
      resultado.hidden = false;
    });
  }

  /* ---------- Mapas (Leaflet) ---------- */

  function capasBase() {
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    const satelite = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 19,
        attribution: 'Im&aacute;genes &copy; Esri &mdash; Maxar, Earthstar Geographics'
      }
    );
    return {
      osm: osm,
      satelite: satelite,
      control: { 'Mapa callejero (OpenStreetMap)': osm, 'Satélite (Esri World Imagery)': satelite }
    };
  }

  function construirMapaGeoart(puntos) {
    const div = $('#mapa-geoart');
    if (!div) return;
    if (typeof L === 'undefined') {
      div.innerHTML = '<p class="error-mapa">No se pudo cargar la librería de mapas (Leaflet). Comprueba la conexión a internet.</p>';
      return;
    }
    if (!puntos.length) {
      div.innerHTML = '<p class="error-mapa">No se pudieron leer los puntos de datos/puntos.txt.</p>';
      return;
    }

    const base = capasBase();
    const mapa = L.map(div, { layers: [base.osm], scrollWheelZoom: true });
    L.control.layers(base.control, null, { position: 'topright' }).addTo(mapa);

    const bounds = [];
    puntos.forEach((p) => {
      const ll = [p.lat, p.lng];
      bounds.push(ll);
      const icono = L.divIcon({
        className: 'icono-punto',
        html: '<span class="punto-num">' + p.num + '</span>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
      const contenido =
        '<div class="popup-lab">' +
        '<div class="popup-titulo"><strong>GeoGalicia #' + p.num + '</strong></div>' +
        '<div class="popup-coords">' + escapar(p.cruda) + '</div>' +
        '<button type="button" class="btn-copiar btn-mini" data-copiar-texto="' + escapar(p.cruda) + '">📋 Copiar coordenadas</button>' +
        '</div>';
      L.marker(ll, { icon: icono }).addTo(mapa).bindPopup(contenido, { maxWidth: 300 });
    });

    if (bounds.length) mapa.fitBounds(L.latLngBounds(bounds).pad(0.15));
    mapas.push(mapa);
    return mapa;
  }

  function construirMapaEtapas(etapas) {
    const div = $('#mapa-etapas');
    if (!div) return;
    if (typeof L === 'undefined') {
      div.innerHTML = '<p class="error-mapa">No se pudo cargar la librería de mapas (Leaflet).</p>';
      return;
    }
    if (!etapas.length) return;

    const base = capasBase();
    const mapa = L.map(div, { layers: [base.osm], scrollWheelZoom: false });
    L.control.layers(base.control, null, { position: 'topright' }).addTo(mapa);

    etapas.forEach((e) => {
      const ll = [e.lat, e.lng];
      const icono = L.divIcon({
        className: 'icono-punto',
        html: '<span class="punto-num punto-etapa">' + e.num + '</span>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
      L.marker(ll, { icon: icono })
        .addTo(mapa)
        .bindPopup(
          '<strong>Etapa ' + e.num + '</strong><br>' +
          '<div class="popup-coords">' + escapar(e.cruda) + '</div>' +
          'Radio: ' + e.radio + ' m'
        );
      const circulo = L.circle(ll, {
        radius: e.radio,
        color: '#d97706',
        weight: 2,
        fillColor: '#d97706',
        fillOpacity: 0.08
      }).addTo(mapa);
      circulosEtapas.push(circulo);
    });

    // Zoom 17 para que la X de la Plaza del Obradoiro se vea bien
    const centro = [
      etapas.reduce((s, e) => s + e.lat, 0) / etapas.length,
      etapas.reduce((s, e) => s + e.lng, 0) / etapas.length
    ];
    mapa.setView(centro, 17);
    mapas.push(mapa);
    return mapa;
  }

  function construirEtapas(etapas) {
    if (!etapas || !etapas.length) return;

    const ol = $('#lista-etapas');
    if (ol) {
      ol.innerHTML = '';
      etapas.forEach((e) => construirFila(ol, e.num, e.cruda, 'fila-etapa'));
    }

    const btnTodas = $('#btn-copiar-etapas');
    if (btnTodas) {
      btnTodas.dataset.copiarTexto = etapas
        .map((e) => 'Etapa ' + e.num + ': ' + e.cruda + ' (radio ' + e.radio + ' m)')
        .join('\n');
    }

    construirMapaEtapas(etapas);
    configurarSelectorRadio(etapas[0].radio);
  }

  /* Selector del radio de los círculos del mapa de etapas */
  function configurarSelectorRadio(radioInicial) {
    const sel = $('#select-radio');
    if (!sel) return;
    const input = $('#radio-custom');
    const nota = $('#nota-radio');
    const opciones = [50, 100, 200, 300, 400, 500];

    function aplicar(valor) {
      const v = Math.max(20, Math.min(500, Math.round(Number(valor) || 100)));
      circulosEtapas.forEach((c) => c.setRadius(v));
      if (nota) nota.textContent = 'Radio seleccionado: ' + v + ' m — así se ve hasta dónde llega cada círculo.';
    }

    sel.addEventListener('change', () => {
      if (sel.value === 'custom') {
        input.hidden = false;
        input.focus();
        aplicar(input.value || 100);
      } else {
        input.hidden = true;
        aplicar(sel.value);
      }
    });

    input.addEventListener('input', () => {
      const v = parseInt(input.value, 10);
      if (!isNaN(v)) aplicar(v);
    });

    // Valor inicial: el radio de las etapas (100 m)
    if (opciones.indexOf(radioInicial) !== -1) {
      sel.value = String(radioInicial);
    } else {
      sel.value = 'custom';
      input.hidden = false;
      input.value = radioInicial;
    }
    aplicar(radioInicial);
  }

  /* ---------- Carga de datos (siempre sin caché) ---------- */

  /* Carga datos/textos.js forzando la última versión (sin caché).
     Si falla, se siguen usando los textos incrustados en el HTML. */
  async function cargarTextos() {
    try {
      const res = await fetch('datos/textos.js?t=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) throw new Error('textos.js');
      const texto = await res.text();
      (0, eval)(texto); // define window.TEXTOS en el ámbito global
    } catch (err) {
      console.warn('No se pudo recargar datos/textos.js; se usan los textos del HTML.', err);
    }
  }

  async function cargarDatos() {
    try {
      const t = Date.now();
      const sinCaché = { cache: 'no-store' };
      const [puntosTexto, descripcion, etapasTexto] = await Promise.all([
        fetch('datos/puntos.txt?t=' + t, sinCaché).then((r) => { if (!r.ok) throw new Error('puntos.txt'); return r.text(); }),
        fetch('datos/descripcion.txt?t=' + t, sinCaché).then((r) => { if (!r.ok) throw new Error('descripcion.txt'); return r.text(); }),
        fetch('datos/etapas.txt?t=' + t, sinCaché).then((r) => { if (!r.ok) throw new Error('etapas.txt'); return r.text(); })
      ]);

      rellenarLargo('#descripcion-texto', descripcion);

      const puntos = leerPuntos(puntosTexto);
      const etapas = leerEtapas(etapasTexto);

      construirListaPuntos(puntos);
      construirSelectorInicio(puntos);
      construirMapaGeoart(puntos);
      construirEtapas(etapas);
    } catch (err) {
      const banner = $('#banner-error');
      if (banner) banner.classList.add('visible');
      console.error('Error cargando datos:', err);
    }
  }

  /* ---------- Arranque ---------- */

  const mapas = [];
  const circulosEtapas = [];
  function iniciar() {
    cargarTextos()
      .then(volcarTextos)
      .then(cargarDatos)
      .then(() => {
        // Recalcular el tamaño de los mapas una vez cargados todos los recursos
        setTimeout(() => mapas.forEach((m) => m && m.invalidateSize()), 250);
      })
      .catch((err) => console.error(err));

    // Modal de la imagen de portada: ampliar y descargar
    const imgPortada = $('#img-portada');
    const modal = $('#modal-portada');
    if (imgPortada && modal) {
      const cerrar = () => { modal.hidden = true; };
      imgPortada.addEventListener('click', () => { modal.hidden = false; });
      const btnCerrar = $('#btn-cerrar-modal');
      if (btnCerrar) btnCerrar.addEventListener('click', cerrar);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) cerrar();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') cerrar();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', iniciar);
  window.addEventListener('load', () => mapas.forEach((m) => m && m.invalidateSize()));
})();
