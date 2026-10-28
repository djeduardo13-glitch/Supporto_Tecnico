// Logica dell'app: carica i prodotti, mostra elenco, schede e ricerca, in più lingue.
// Funziona aprendo index.html direttamente (doppio clic), senza server.
//
// Lingue: l'italiano è in prodotti/<cartella>/dati.js.
// Le altre lingue sono in prodotti/<cartella>/<lingua>.js (es. fr.js) e
// sostituiscono solo i testi; immagini, pulsanti e struttura restano quelli di dati.js.

(function () {
  const CONFIG = window.CONFIG || { nomeApp: "Supporto Tecnico - STEM" };
  const LINGUE = CONFIG.lingue || ["it"];
  const prodotti = {};      // id -> dati (italiano)
  const traduzioni = {};    // id -> { fr: {...} }
  const cartelle = {};      // id -> nome cartella
  let cartellaInCorso = null;
  let lingua = leggiLingua();

  // Nome dell'app nella lingua attiva (config.js: testo unico oppure { it, en, fr, es })
  const nomeApp = () => { const n = CONFIG.nomeApp; return typeof n === "string" ? n : (n[lingua] || n.it); };

  // ---------- Testi dell'interfaccia ----------
  const UI = {
    it: {
      prodotti: "Prodotti", cerca: "Cerca in tutti i prodotti…", nessunProdotto: "Nessun prodotto",
      homeSotto: "Le informazioni più importanti di ogni prodotto, sempre a portata di mano.",
      apri: "Apri", aggiornato: "Aggiornato", primaDi: "Condizioni preliminari", premi: "Premere",
      insieme2s: "simultaneamente per 2 secondi", insieme: "simultaneamente", oppure: "o", annulla: "Annullamento",
      ricerca: "Ricerca", risultati: "risultati", nessunaSezione: "Nessuna sezione ancora.",
      sezioni: "Sezioni", pulsantiera: "Pulsantiera", pulsanti: "pulsanti", senzaCategoria: "Senza categoria",
      menu: "Apri elenco prodotti", traduzioneMancante: "Traduzione non ancora disponibile: testo in italiano.",
      finoBeep: "simultaneamente fino al segnale acustico", ingrandisci: "Tocca per ingrandire", chiudi: "Chiudi",
      zoomPiu: "Ingrandisci", zoomMeno: "Riduci", adatta: "Adatta allo schermo", documenti: "Documenti",
      schede: "Schede istruzioni", passo: "Passo", di: "di", passo1: "passo", passiN: "passi", fogliN: "fogli",
      doc1: "documento", docN: "documenti", precedente: "Indietro", successivo: "Avanti", fine: "Fine", tuttiPassi: "Tutti i passi",
      nota: "Nota", soloIt: "Disponibile solo in italiano", apriScheda: "Apri", nonUff: "Traduzione non ufficiale, da verificare", scaricaPdf: "Scarica PDF", schedaIstr: "Scheda istruzioni", assistenza: "Assistenza clienti", pagina: "Pagina",
      ricambi: "Ricambi", codice1: "codice", codiciN: "codici"
    },
    fr: {
      prodotti: "Produits", cerca: "Rechercher dans tous les produits…", nessunProdotto: "Aucun produit",
      homeSotto: "Les informations essentielles de chaque produit, toujours à portée de main.",
      apri: "Ouvrir", aggiornato: "Mis à jour le", primaDi: "Conditions préalables", premi: "Appuyer",
      insieme2s: "simultanément pendant 2 secondes", insieme: "simultanément", oppure: "ou", annulla: "Annulation",
      ricerca: "Recherche", risultati: "résultats", nessunaSezione: "Aucune section pour le moment.",
      sezioni: "Sections", pulsantiera: "Clavier de commande", pulsanti: "touches", senzaCategoria: "Sans catégorie",
      menu: "Ouvrir la liste des produits", traduzioneMancante: "Traduction pas encore disponible : texte en italien.",
      finoBeep: "simultanément jusqu'au signal sonore", ingrandisci: "Touchez pour agrandir", chiudi: "Fermer",
      zoomPiu: "Agrandir", zoomMeno: "Réduire", adatta: "Ajuster à l'écran", documenti: "Documents",
      schede: "Fiches d'instructions", passo: "Étape", di: "sur", passo1: "étape", passiN: "étapes", fogliN: "feuilles",
      doc1: "document", docN: "documents", precedente: "Précédent", successivo: "Suivant", fine: "Terminé", tuttiPassi: "Toutes les étapes",
      nota: "Note", soloIt: "Disponible uniquement en italien", apriScheda: "Ouvrir", nonUff: "Traduction non officielle, à vérifier", scaricaPdf: "Télécharger le PDF", schedaIstr: "Fiche d'instructions", assistenza: "Service client", pagina: "Page",
      ricambi: "Pièces détachées", codice1: "référence", codiciN: "références"
    },
    es: {
      prodotti: "Productos", cerca: "Buscar en todos los productos…", nessunProdotto: "Ningún producto",
      homeSotto: "La información más importante de cada producto, siempre a mano.",
      apri: "Abrir", aggiornato: "Actualizado el", primaDi: "Condiciones previas", premi: "Pulse",
      insieme2s: "simultáneamente durante 2 segundos", insieme: "simultáneamente", oppure: "o", annulla: "Anulación",
      ricerca: "Búsqueda", risultati: "resultados", nessunaSezione: "Todavía no hay secciones.",
      sezioni: "Secciones", pulsantiera: "Botonera", pulsanti: "botones", senzaCategoria: "Sin categoría",
      menu: "Abrir la lista de productos", traduzioneMancante: "Traducción aún no disponible: texto en italiano.",
      finoBeep: "simultáneamente hasta la señal acústica", ingrandisci: "Toque para ampliar", chiudi: "Cerrar",
      zoomPiu: "Ampliar", zoomMeno: "Reducir", adatta: "Ajustar a la pantalla", documenti: "Documentos",
      schede: "Fichas de instrucciones", passo: "Paso", di: "de", passo1: "paso", passiN: "pasos", fogliN: "hojas",
      doc1: "documento", docN: "documentos", precedente: "Anterior", successivo: "Siguiente", fine: "Terminar", tuttiPassi: "Todos los pasos",
      nota: "Nota", soloIt: "Disponible solo en italiano", apriScheda: "Abrir", nonUff: "Traducción no oficial, pendiente de revisión", scaricaPdf: "Descargar PDF", schedaIstr: "Ficha de instrucciones", assistenza: "Atención al cliente", pagina: "Página",
      ricambi: "Recambios", codice1: "código", codiciN: "códigos"
    },
    en: {
      prodotti: "Products", cerca: "Search all products…", nessunProdotto: "No products",
      homeSotto: "The most important information on every product, always at hand.",
      apri: "Open", aggiornato: "Updated", primaDi: "Preconditions", premi: "Press",
      insieme2s: "simultaneously for 2 seconds", insieme: "simultaneously", oppure: "or", annulla: "Cancellation",
      ricerca: "Search", risultati: "results", nessunaSezione: "No sections yet.",
      sezioni: "Sections", pulsantiera: "Control panel", pulsanti: "buttons", senzaCategoria: "No category",
      menu: "Open product list", traduzioneMancante: "Translation not available yet: text in Italian.",
      finoBeep: "simultaneously until the audible signal", ingrandisci: "Tap to enlarge", chiudi: "Close",
      zoomPiu: "Zoom in", zoomMeno: "Zoom out", adatta: "Fit to screen", documenti: "Documents",
      schede: "Instruction sheets", passo: "Step", di: "of", passo1: "step", passiN: "steps", fogliN: "sheets",
      doc1: "document", docN: "documents", precedente: "Back", successivo: "Next", fine: "Done", tuttiPassi: "All steps",
      nota: "Note", soloIt: "Available in Italian only", apriScheda: "Open", nonUff: "Unofficial translation, to be checked", scaricaPdf: "Download PDF", schedaIstr: "Instruction sheet", assistenza: "Customer service", pagina: "Page",
      ricambi: "Spare parts", codice1: "part number", codiciN: "part numbers"
    }
  };
  const t = (k) => (UI[lingua] && UI[lingua][k]) || UI.it[k] || k;

  // ---------- Registrazione dati ----------
  window.registraProdotto = function (p) {
    if (!p || !p.id) return;
    prodotti[p.id] = p;
    cartelle[p.id] = cartellaInCorso;
  };
  window.registraTraduzione = function (id, lng, dati) {
    (traduzioni[id] = traduzioni[id] || {})[lng] = dati;
  };

  const $ = (s) => document.querySelector(s);
  const esc = (x) => String(x ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const br = (x) => esc(x).replace(/\n/g, "<br>");
  const slug = (x) => String(x || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  function leggiLingua() {
    let l = null;
    try { l = localStorage.getItem("lingua"); } catch (e) { /* file locale senza storage */ }
    return LINGUE.includes(l) ? l : LINGUE[0];
  }
  function salvaLingua(l) { try { localStorage.setItem("lingua", l); } catch (e) {} }

  // Unisce i testi tradotti sopra i dati italiani (stessa struttura, per posizione).
  function unisci(base, tr) {
    if (tr === undefined || tr === null) return base;
    if (Array.isArray(base)) return base.map((v, i) => unisci(v, Array.isArray(tr) ? tr[i] : undefined));
    if (base && typeof base === "object") {
      const out = {};
      for (const k of Object.keys(base)) {
        if (k === "pulsanti" || k === "pulsantiera") out[k] = base[k];
        else if (k === "immagini" && Array.isArray(tr[k])) out[k] = tr[k];   // immagini nella lingua: sostituiscono tutte quelle italiane
        else out[k] = unisci(base[k], tr[k]);
      }
      return out;
    }
    return typeof tr === typeof base ? tr : base;
  }

  // Prodotto nella lingua attiva (+ flag se manca la traduzione)
  function loc(p) {
    if (lingua === "it") return p;
    const tr = traduzioni[p.id] && traduzioni[p.id][lingua];
    if (!tr) return Object.assign({}, p, { _manca: true });
    const out = unisci(p, tr);
    out._nomiTasti = tr.nomiTasti || {};
    out.sezioni = (out.sezioni || []).map((s, i) => {
      const ts = tr.sezioni && tr.sezioni[i];
      if (!ts) return Object.assign({}, s, { _manca: true });
      return (ts.nonUfficiale || tr.nonUfficiale) ? Object.assign({}, s, { _nonUff: true }) : s;
    });
    return out;
  }
  const nomeTasto = (p, k) => (p._nomiTasti && p._nomiTasti[k]) || k;

  // ---------- Icone (SVG a tratto) ----------
  const ICONE = {
    senza: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M6 6l12 12"/></svg>',
    con: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16 9.5"/></svg>',
    // stato barella (condizioni tipo "con"/"senza"): barella stilizzata + bollino ✓ / ✕
    barellaCon: '<svg viewBox="0 0 40 28" aria-hidden="true"><rect x="2" y="11" width="27" height="4" rx="2"/><path d="M5.5 11V8h6.5v3M8.5 15v5.5M23 15v5.5"/><circle cx="8.5" cy="23.3" r="2.3"/><circle cx="23" cy="23.3" r="2.3"/><circle class="bollino" cx="32" cy="8" r="7.2"/><path class="segno" d="M28.6 8.2l2.3 2.3 4.4-4.6"/></svg>',
    barellaSenza: '<svg viewBox="0 0 40 28" aria-hidden="true"><rect x="2" y="11" width="27" height="4" rx="2"/><path d="M5.5 11V8h6.5v3M8.5 15v5.5M23 15v5.5"/><circle cx="8.5" cy="23.3" r="2.3"/><circle cx="23" cy="23.3" r="2.3"/><circle class="bollino" cx="32" cy="8" r="7.2"/><path class="segno" d="M29.2 5.2l5.6 5.6M34.8 5.2l-5.6 5.6"/></svg>',
    info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/></svg>',
    tempo: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9.5 2.5h5"/></svg>',
    beep: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
    attenzione: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5L2.5 20h19z"/><path d="M12 10v4.5M12 17v.01"/></svg>',
    esci: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5H5v14h4M15 8l4 4-4 4M19 12H9"/></svg>',
    importante: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v6.5M12 16.8v.01"/></svg>',
    schema: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h4v6h6M15 13l2 2-2 2M7 9v-.01"/></svg>',
    cavi: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h5a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h5"/><path d="M4 4v6M20 14v6"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4M11 8v6M8 11h6"/></svg>',
    pdf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h4"/></svg>',
    scarica: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    ricambi: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3.5 17.2a1.8 1.8 0 0 0 2.6 2.6l5.8-5.8a4 4 0 0 0 5.1-5.4l-2.5 2.5-2.3-.6-.6-2.3z"/></svg>',
    indietro: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    freccia: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>'
  };

  // ---------- Caricamento ----------
  function caricaScript(src) {
    return new Promise((ok) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => ok(true);
      s.onerror = () => ok(false);   // file lingua mancante: va bene, si usa l'italiano
      document.body.appendChild(s);
    });
  }

  async function caricaTutto() {
    const v = Date.now();
    for (const cartella of window.ELENCO_PRODOTTI || []) {
      cartellaInCorso = cartella;
      await caricaScript(`prodotti/${cartella}/dati.js?v=${v}`);
      for (const l of LINGUE.filter((x) => x !== "it")) await caricaScript(`prodotti/${cartella}/${l}.js?v=${v}`);
    }
    cartellaInCorso = null;
  }

  // ---------- Elenco laterale ----------
  function ordinati() {
    return Object.values(prodotti).map(loc).sort((a, b) => a.nome.localeCompare(b.nome));
  }

  function disegnaElenco() {
    const lista = ordinati();
    $("#contaProdotti").textContent = lista.length;
    let html = "";
    for (const p of lista) {
      html += `<li><a href="#/${encodeURIComponent(p.id)}" data-id="${esc(p.id)}">${esc(p.nome)}</a></li>`;
    }
    $("#elencoProdotti").innerHTML = html || `<li class="vuoto">${t("nessunProdotto")}</li>`;
  }

  function evidenziaAttivo(id) {
    document.querySelectorAll("#elencoProdotti a").forEach((a) =>
      a.classList.toggle("attivo", a.dataset.id === id));
  }

  // ---------- Pulsantiera con pulsanti evidenziati ----------
  function pulsantieraHTML(p, base, evidenziati) {
    const pl = p.pulsantiera;
    if (!pl) return "";
    const W = pl.larghezza, H = pl.altezza, r = pl.raggio || 30;

    // raggruppa lettere che stanno sullo stesso pulsante (es. A e F)
    const perPosizione = {};
    for (const l of evidenziati) {
      const pos = pl.pulsanti[l];
      if (!pos) continue;
      const k = pos.join(",");
      (perPosizione[k] = perPosizione[k] || { pos, nomi: [] }).nomi.push(nomeTasto(p, l));
    }
    const rigaAlta = Math.min(...Object.values(pl.pulsanti).map((q) => q[1]));

    // targhette: sopra per la riga alta, sotto per le altre
    const fs = Math.max(15, W * 0.032);
    const bh = Math.round(fs * 1.6);
    const tag = Object.values(perPosizione).map(({ pos: [x, y], nomi }) => {
      const testo = nomi.join("·");
      const sopra = y === rigaAlta;
      const bw = testo.length <= 1 ? bh - 2 : fs + testo.length * fs * 0.62;
      return { x, y, testo, sopra, bw, cx: x, by: sopra ? y - r - bh - 6 : y + r + 6 };
    });
    // se due targhette della stessa fila si sovrappongono, si scostano di lato (restando nell'immagine)
    const gap = 6, m = 2;
    for (const fila of [tag.filter((q) => q.sopra), tag.filter((q) => !q.sopra)]) {
      fila.sort((a, b) => a.x - b.x);
      for (let giro = 0; giro < 30; giro++) {
        let mosso = false;
        for (let i = 1; i < fila.length; i++) {
          const a = fila[i - 1], b = fila[i];
          const sov = a.cx + a.bw / 2 + gap - (b.cx - b.bw / 2);
          if (sov > 0.5) { a.cx -= sov / 2; b.cx += sov / 2; mosso = true; }
        }
        for (const q of fila) {
          const c = Math.min(Math.max(q.cx, m + q.bw / 2), W - m - q.bw / 2);
          if (c !== q.cx) { q.cx = c; mosso = true; }
        }
        if (!mosso) break;
      }
    }

    let svg = "";
    for (const { x, y, testo, sopra, bw, cx, by } of tag) {
      const ly1 = sopra ? by + bh : y + r + 2, ly2 = sopra ? y - r - 2 : by;
      const lx1 = sopra ? cx : x, lx2 = sopra ? x : cx;
      svg += `
        <circle class="alone" cx="${x}" cy="${y}" r="${r + 4}"/>
        <circle class="anello" cx="${x}" cy="${y}" r="${r + 2}"/>
        <line class="filo" x1="${lx1}" y1="${ly1}" x2="${lx2}" y2="${ly2}"/>
        <rect class="targhetta" x="${cx - bw / 2}" y="${by}" width="${bw}" height="${bh}" rx="4"/>
        <text class="lettera" x="${cx}" y="${by + bh / 2 + 1}" style="font-size:${fs}px">${esc(testo)}</text>`;
    }
    const alt = `${t("pulsantiera")}, ${t("pulsanti")} ${evidenziati.map((l) => nomeTasto(p, l)).join(", ")}`;
    return `
      <figure class="pulsantiera">
        <div class="pulsantiera-box" style="aspect-ratio:${W}/${H}">
          <img src="${esc(base + pl.immagine)}" alt="${esc(alt)}">
          <svg viewBox="0 0 ${W} ${H}" aria-hidden="true">${svg}</svg>
        </div>
      </figure>`;
  }

  function azioneHTML(p, passo) {
    const ps = passo.pulsanti || [];
    if (!ps.length) return "";
    const tasto = (l) => `<kbd class="tasto">${esc(nomeTasto(p, l))}</kbd>`;
    let tasti, nota = "";
    switch (passo.modo) {
      case "insieme2s":
        tasti = ps.map(tasto).join('<span class="piu">+</span>');
        nota = `<span class="chip chip-tempo">${ICONE.tempo}${t("insieme2s")}</span>`;
        break;
      case "finoBeep":
        tasti = ps.map(tasto).join('<span class="piu">+</span>');
        nota = `<span class="chip chip-tempo">${ICONE.tempo}${t("finoBeep")}</span>`;   // altoparlante solo sull'esito
        break;
      case "insieme":
        tasti = ps.map(tasto).join('<span class="piu">+</span>');
        nota = `<span class="chip">${t("insieme")}</span>`;
        break;
      case "oppure":
        tasti = ps.map(tasto).join(`<span class="piu">${t("oppure")}</span>`);
        break;
      default:
        tasti = ps.map(tasto).join(" ");
    }
    return `<div class="azione"><span class="azione-label">${t("premi")}</span>${tasti}${nota}</div>`;
  }

  // Condizioni "con"/"senza" = stato della barella: sempre per prime, a tutta larghezza e ben evidenti.
  const eBarella = (c) => c.tipo === "con" || c.tipo === "senza";
  const iconaCond = (c) => eBarella(c) ? (c.tipo === "con" ? ICONE.barellaCon : ICONE.barellaSenza) : (ICONE[c.tipo] || ICONE.info);
  const ordinaCond = (s) => (s.condizioni || []).filter(eBarella).concat((s.condizioni || []).filter((c) => !eBarella(c)));

  function condizioniHTML(s) {
    const cond = ordinaCond(s).map((c) =>
      `<li class="cond cond-${esc(c.tipo || "info")}${eBarella(c) ? " cond-barella" : ""}">${iconaCond(c)}<span>${esc(c.testo)}</span></li>`).join("");
    return cond ? `<ul class="condizioni"><li class="cond-titolo">${t("primaDi")}</li>${cond}</ul>` : "";
  }

  function passoHTML(ps, s, p, base) {
    const conTasti = ps.pulsanti && ps.pulsanti.length && p.pulsantiera;
    const foto = [].concat(ps.immagine ? [{ src: ps.immagine, didascalia: ps.didascalia }] : [],
      (ps.immagini || []).map((x) => typeof x === "string" ? { src: x } : x));
    const conMedia = conTasti || foto.length;
    const fotoHTML = foto.map((f) => `
          <figure class="extra">
            <button type="button" class="zoomabile" data-src="${esc(base + f.src)}" data-titolo="${esc(`${s.titolo} · ${ps.num || ""}`)}" aria-label="${t("ingrandisci")}">
              <img src="${esc(base + f.src)}" alt="${esc(f.didascalia || ps.testo || "")}">
              <span class="foglio-zoom">${ICONE.zoom}</span>
            </button>
            ${f.didascalia ? `<figcaption>${esc(f.didascalia)}</figcaption>` : ""}
          </figure>`).join("");
    return `
      <div class="passo ${ps.tipoPasso === "alternativa" ? "passo-alt" : ""} ${conMedia ? "" : "passo-solo"} ${conTasti ? "ha-tasti" : foto.length ? "ha-foto" : ""}">
        <div class="passo-testo">
          ${ps.tipoPasso === "alternativa" ? `<div class="passo-head"><span class="chip chip-alt">${ICONE.esci}${t("annulla")}</span></div>` : ""}
          <p>${br(ps.testo)}</p>
          ${ps.nota ? `<p class="nota-passo"><strong>${t("nota")}:</strong> ${br(ps.nota)}</p>` : ""}
          ${azioneHTML(p, ps)}
          ${ps.esito ? `<div class="esito">${ICONE[ps.esitoIcona] || ICONE.beep}<span>${esc(ps.esito)}</span></div>` : ""}
        </div>
        ${conMedia ? `<div class="passo-media">
          ${conTasti ? pulsantieraHTML(p, base, ps.pulsanti) : ""}
          ${foto.length ? `<div class="foto ${foto.length > 1 ? "foto-multi" : ""}">${fotoHTML}</div>` : ""}
        </div>` : ""}
      </div>`;
  }

  // fase e nota di fase valide per ogni passo (si "trascinano" finché non ne arriva una nuova)
  function fasiPassi(passi) {
    let fase = "", nota = "";
    return passi.map((ps) => {
      if (ps.fase) { fase = ps.fase; nota = ps.notaFase || ""; }
      else if (ps.notaFase) nota = ps.notaFase;
      return { fase, nota, inizio: !!ps.fase };
    });
  }

  function testaSezione(s, icona) {
    return `
        <header class="sez-head">
          <span class="sez-num sez-icona">${icona}</span>
          <div>
            <h2>${esc(s.titolo)}</h2>
            ${s.sottotitolo ? `<p class="sez-sotto">${esc(s.sottotitolo)}</p>` : ""}
          </div>
        </header>`;
  }

  function sezioneAvvisi(s, idSez) {
    const avvisi = (s.avvisi || []).map((a) => `
      <div class="avviso avviso-${esc(a.tipo || "attenzione")}">
        <span class="avviso-icona">${a.tipo === "importante" ? ICONE.importante : ICONE.attenzione}</span>
        <div><strong>${esc(a.titolo || "")}</strong><p>${br(a.testo)}</p></div>
      </div>`).join("");
    return `<section class="sezione-istr" id="${idSez}">${testaSezione(s, ICONE.cavi)}<div class="avvisi">${avvisi}</div></section>`;
  }

  function sezioneSchema(s, idSez, base) {
    const fogli = (s.fogli || []).map((f, i) => `
      <button type="button" class="foglio" data-src="${esc(base + f.immagine)}" data-titolo="${esc(`${s.titolo} · ${f.titolo || ""}`)}">
        <span class="foglio-img"><img src="${esc(base + f.immagine)}" alt="${esc(`${f.titolo || ""} – ${f.descrizione || ""}`)}" loading="lazy"><span class="foglio-zoom">${ICONE.zoom}${t("ingrandisci")}</span></span>
        <span class="foglio-testo"><strong>${esc(f.titolo || "")}</strong><span>${esc(f.descrizione || "")}</span></span>
      </button>`).join("");
    const file = (s.file || []).map((f) =>
      `<a class="doc" href="${esc(base + f.percorso)}" target="_blank" rel="noopener">${ICONE.pdf}<span>${esc(f.nome)}</span></a>`).join("");
    return `<section class="sezione-istr" id="${idSez}">${testaSezione(s, ICONE.schema)}
      <div class="fogli">${fogli}</div>
      ${file ? `<div class="docs">${file}</div>` : ""}
    </section>`;
  }

  function sezioneDocumenti(s, idSez, base) {
    const file = (s.file || []).map((f) =>
      `<a class="doc" href="${esc(base + f.percorso)}" target="_blank" rel="noopener">${ICONE.pdf}<span>${esc(f.nome)}</span></a>`).join("");
    return `<section class="sezione-istr" id="${idSez}">${testaSezione(s, ICONE.pdf)}<div class="docs">${file}</div></section>`;
  }

  // Ricambi: una foto unica (sempre in italiano, non si traduce) + legenda dei codici tradotta sotto.
  //   ricambi: [{ codice, nome, lato, nota, colore, etichettaFoto }] — "etichettaFoto" = scritta sulla foto,
  //   mostrata tra parentesi nelle altre lingue per collegare la legenda alla foto.
  function sezioneRicambi(s, idSez, base) {
    const foto = s.immagine ? `
      <figure class="ric-foto">
        <button type="button" class="zoomabile" data-src="${esc(base + s.immagine)}" data-titolo="${esc(s.titolo)}" aria-label="${t("ingrandisci")}">
          <img src="${esc(base + s.immagine)}" alt="${esc(s.titolo)}">
          <span class="foglio-zoom">${ICONE.zoom}${t("ingrandisci")}</span>
        </button>
      </figure>` : "";
    const voci = (s.ricambi || []).map((r) => `
      <li class="ricambio" style="--c:${esc(r.colore || "#004682")}">
        ${r.lato ? `<span class="ric-lato">${esc(r.lato)}</span>` : ""}
        <strong class="ric-codice">${esc(r.codice)}</strong>
        <span class="ric-nome">${esc(r.nome)}</span>
        ${r.nota ? `<span class="ric-nota">${esc(r.nota)}</span>` : ""}
        ${lingua !== "it" && r.etichettaFoto ? `<span class="ric-it" lang="it">${esc(r.etichettaFoto)}</span>` : ""}
      </li>`).join("");
    return `<section class="sezione-istr" id="${idSez}">${testaSezione(s, ICONE.ricambi)}${foto}<ul class="ricambi">${voci}</ul></section>`;
  }

  // ---------- Visore immagini (zoom e trascinamento) ----------
  function apriVisore(src, titolo) {
    const v = document.createElement("div");
    v.className = "visore";
    v.setAttribute("role", "dialog");
    v.setAttribute("aria-modal", "true");
    v.setAttribute("aria-label", titolo);
    v.innerHTML = `
      <div class="visore-barra">
        <span class="visore-titolo">${esc(titolo)}</span>
        <button type="button" data-az="meno" aria-label="${t("zoomMeno")}">−</button>
        <button type="button" data-az="adatta" aria-label="${t("adatta")}">⤢</button>
        <button type="button" data-az="piu" aria-label="${t("zoomPiu")}">+</button>
        <button type="button" data-az="chiudi" aria-label="${t("chiudi")}">✕</button>
      </div>
      <div class="visore-area"><img src="${esc(src)}" alt="${esc(titolo)}" draggable="false"></div>`;
    document.body.appendChild(v);
    document.body.classList.add("visore-aperto");
    const area = v.querySelector(".visore-area"), img = v.querySelector("img");
    let scala = 1, base = 1, tx = 0, ty = 0;
    const applica = () => { img.style.transform = `translate(${tx}px, ${ty}px) scale(${scala})`; };
    const adatta = () => {
      const r = area.getBoundingClientRect();
      base = Math.min(r.width / img.naturalWidth, r.height / img.naturalHeight);
      scala = base; tx = (r.width - img.naturalWidth * scala) / 2; ty = (r.height - img.naturalHeight * scala) / 2; applica();
    };
    const zoomA = (nuova, cx, cy) => {
      nuova = Math.max(base, Math.min(nuova, base * 8));
      tx = cx - (cx - tx) * (nuova / scala); ty = cy - (cy - ty) * (nuova / scala); scala = nuova; applica();
    };
    const centro = () => { const r = area.getBoundingClientRect(); return [r.width / 2, r.height / 2]; };
    if (img.complete) adatta(); else img.onload = adatta;
    const chiudi = () => { v.remove(); document.body.classList.remove("visore-aperto"); document.removeEventListener("keydown", tasti); };
    const tasti = (e) => { if (e.key === "Escape") chiudi(); };
    document.addEventListener("keydown", tasti);
    v.querySelector(".visore-barra").addEventListener("click", (e) => {
      const az = e.target.closest("button")?.dataset.az;
      if (az === "chiudi") chiudi();
      if (az === "adatta") adatta();
      if (az === "piu") zoomA(scala * 1.5, ...centro());
      if (az === "meno") zoomA(scala / 1.5, ...centro());
    });
    area.addEventListener("wheel", (e) => {
      e.preventDefault();
      const r = area.getBoundingClientRect();
      zoomA(scala * (e.deltaY < 0 ? 1.2 : 1 / 1.2), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    // trascinamento e pizzico (puntatori)
    const punti = new Map(); let distIniz = 0, scalaIniz = 1;
    area.addEventListener("pointerdown", (e) => { area.setPointerCapture(e.pointerId); punti.set(e.pointerId, [e.clientX, e.clientY]);
      if (punti.size === 2) { const [a, b] = [...punti.values()]; distIniz = Math.hypot(a[0] - b[0], a[1] - b[1]); scalaIniz = scala; } });
    area.addEventListener("pointermove", (e) => {
      if (!punti.has(e.pointerId)) return;
      const prec = punti.get(e.pointerId); punti.set(e.pointerId, [e.clientX, e.clientY]);
      if (punti.size === 1) { tx += e.clientX - prec[0]; ty += e.clientY - prec[1]; applica(); }
      else if (punti.size === 2) {
        const [a, b] = [...punti.values()]; const r = area.getBoundingClientRect();
        zoomA(scalaIniz * Math.hypot(a[0] - b[0], a[1] - b[1]) / distIniz, (a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top);
      }
    });
    const su = (e) => punti.delete(e.pointerId);
    area.addEventListener("pointerup", su); area.addEventListener("pointercancel", su);
    area.addEventListener("dblclick", (e) => { const r = area.getBoundingClientRect(); zoomA(scala * 2, e.clientX - r.left, e.clientY - r.top); });
    v.querySelector('[data-az="chiudi"]').focus();
  }

  // ---------- Sezioni generiche ----------
  function sezioneGenerica(s, idx, base) {
    const id = `s${idx + 1}`;
    let corpo = "";
    switch (s.tipo) {
      case "tabella": {
        const testa = s.intestazioni ? `<thead><tr>${s.intestazioni.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>` : "";
        const righe = (s.righe || []).map((r) => {
          if (!s.intestazioni && r.length === 2) return `<tr><th scope="row">${esc(r[0])}</th><td>${br(r[1])}</td></tr>`;
          return `<tr>${r.map((c) => `<td>${br(c)}</td>`).join("")}</tr>`;
        }).join("");
        corpo = `<div class="tab-wrap"><table class="${s.intestazioni ? "griglia" : "chiave-valore"}">${testa}<tbody>${righe}</tbody></table></div>`;
        break;
      }
      case "lista":
        corpo = `<ul class="lista">${(s.voci || []).map((v) => `<li>${br(v)}</li>`).join("")}</ul>`;
        break;
      case "documenti":
        corpo = `<ul class="documenti">${(s.file || []).map((f) => {
          const ext = (f.percorso.split(".").pop() || "").toUpperCase();
          return `<li><a href="${esc(base + f.percorso)}" target="_blank" rel="noopener"><span class="ext">${esc(ext)}</span>${esc(f.nome)}</a></li>`;
        }).join("")}</ul>`;
        break;
      case "nota":
        return `<section class="sezione nota" id="${id}"><h3>${esc(s.titolo)}</h3><p>${br(s.testo)}</p></section>`;
      default:
        corpo = `<p>${br(s.testo)}</p>`;
    }
    return `<section class="sezione" id="${id}"><h3>${esc(s.titolo)}</h3>${corpo}</section>`;
  }

  // ---------- Viste ----------
  function vistaHome() {
    evidenziaAttivo(null);
    const lista = ordinati();
    $("#contenuto").innerHTML = `
      <div class="hero hero-home">
        <h1>${esc(nomeApp())}</h1>
        <p class="hero-sotto">${t("homeSotto")}</p>
      </div>
      <div class="griglia-card">
        ${lista.map((p) => {
          const cop = p.copertina || (p.pulsantiera && p.pulsantiera.immagine);
          const img = cop ? `<img src="${esc(`prodotti/${cartelle[p.id]}/${cop}`)}" alt="">` : "";
          return `
          <a class="card" href="#/${encodeURIComponent(p.id)}">
            ${img ? `<div class="card-img">${img}</div>` : ""}
            <strong>${esc(p.titoloPagina || p.nome)}</strong>
            <span class="card-vai">${t("apri")} ${ICONE.freccia}</span>
          </a>`; }).join("")}
      </div>`;
  }

  const iconaScheda = (s, n) => s.tipo === "istruzione" ? `<span class="sch-num">${n}</span>`
    : `<span class="sch-num sez-icona">${s.tipo === "schema" ? ICONE.schema : s.tipo === "avvisi" ? ICONE.importante : s.tipo === "collegamento" ? ICONE.link : s.tipo === "ricambi" ? ICONE.ricambi : ICONE.pdf}</span>`;

  function infoScheda(s) {
    if (s.tipo === "istruzione") { const n = (s.passi || []).length; return `${n} ${n === 1 ? t("passo1") : t("passiN")}`; }
    if (s.tipo === "schema") { const n = (s.fogli || []).length; return `${n} ${t("fogliN")}`; }
    if (s.tipo === "documenti") { const n = (s.file || []).length; return `${n} ${n === 1 ? t("doc1") : t("docN")}`; }
    if (s.tipo === "ricambi") { const n = (s.ricambi || []).length; return `${n} ${n === 1 ? t("codice1") : t("codiciN")}`; }
    if (s.tipo === "collegamento") { const q = prodotti[(s.vai || "").split("/")[0]]; return q ? esc(q.nome) : ""; }
    return "";
  }

  function vistaProdotto(id) {
    if (!prodotti[id]) return vistaHome();
    const p = loc(prodotti[id]);
    evidenziaAttivo(id);
    const base = `prodotti/${cartelle[id]}/`;
    const sezioni = p.sezioni || [];
    let nIstr = 0;
    // Intestazione: a destra la foto della sola pulsantiera (se c'è), altrimenti la copertina.
    const heroPuls = !!(p.pulsantiera && p.pulsantiera.immagine);
    const heroImg = heroPuls ? p.pulsantiera.immagine : p.copertina;
    // le schede tengono il numero di sezione originale (link #/id/sN); i ricambi vanno in un blocco a parte
    const tutte = sezioni.map((s, i) => ({ s, i, n: s.tipo === "istruzione" ? ++nIstr : 0 }));
    const scheda = ({ s, i, n }) => {
      const cond = ordinaCond(s).slice(0, 2).map((c) => `<span class="mini cond-${esc(c.tipo || "info")}${eBarella(c) ? " cond-barella" : ""}">${iconaCond(c)}${esc(c.testo)}</span>`).join("");
      return `
      <a class="scheda-card" href="${s.tipo === "collegamento" ? `#/${s.vai}` : `#/${encodeURIComponent(id)}/s${i + 1}`}">
        ${iconaScheda(s, n)}
        <span class="sch-corpo">
          <strong>${esc(s.titolo)}${s.etichetta ? ` <span class="etichetta">${esc(s.etichetta)}</span>` : ""}</strong>
          ${s.sottotitolo ? `<span class="sch-sotto">${esc(s.sottotitolo)}</span>` : ""}
          ${cond ? `<span class="sch-cond">${cond}</span>` : ""}
          ${s._manca ? `<span class="sch-cond"><span class="mini">${t("soloIt")}</span></span>` : ""}
          ${s._nonUff ? `<span class="sch-cond"><span class="mini">${t("nonUff")}</span></span>` : ""}
        </span>
        <span class="sch-info">${infoScheda(s)}${ICONE.freccia}</span>
      </a>`;
    };
    const schede = tutte.filter((x) => x.s.tipo !== "ricambi");
    const ricambi = tutte.filter((x) => x.s.tipo === "ricambi");
    $("#contenuto").innerHTML = `
      ${p._manca ? `<div class="avviso-lingua">${t("traduzioneMancante")}</div>` : ""}
      <div class="hero ${heroImg ? "hero-foto" : ""}">
        <div class="hero-testo">
          <h1>${esc(p.titoloPagina || p.nome)}</h1>
        </div>
        ${heroImg ? `<img class="hero-img ${heroPuls ? "hero-puls" : ""}" src="${esc(base + heroImg)}" alt="${esc(heroPuls ? `${t("pulsantiera")} ${p.nome}` : p.nome)}">` : ""}
      </div>
      ${schede.length || !ricambi.length ? `<h2 class="titolo-blocco">${t("schede")}</h2>
      <div class="schede">
        ${schede.map(scheda).join("") || `<p class="vuoto">${t("nessunaSezione")}</p>`}
      </div>` : ""}
      ${ricambi.length ? `<h2 class="titolo-blocco">${t("ricambi")}</h2>
      <div class="schede">${ricambi.map(scheda).join("")}</div>` : ""}`;
  }

  function vistaScheda(id, sNum, pNum) {
    if (!prodotti[id]) return vistaHome();
    const p = loc(prodotti[id]);
    const sezioni = p.sezioni || [];
    const si = Math.min(Math.max(parseInt(sNum, 10) || 1, 1), sezioni.length) - 1;
    const s = sezioni[si];
    if (!s) return vistaProdotto(id);
    evidenziaAttivo(id);
    const base = `prodotti/${cartelle[id]}/`;
    const nIstr = sezioni.slice(0, si + 1).filter((x) => x.tipo === "istruzione").length;
    const indietro = `<a class="indietro" href="#/${encodeURIComponent(id)}">${ICONE.indietro}${esc(p.nome)}</a>`;
    const testa = `
      <header class="scheda-head">
        ${iconaScheda(s, nIstr)}
        <div>
          <h1>${esc(s.titolo)} ${s.etichetta ? `<span class="etichetta">${esc(s.etichetta)}</span>` : ""}</h1>
          ${s.sottotitolo ? `<p class="sez-sotto">${esc(s.sottotitolo)}</p>` : ""}
        </div>
      </header>`;

    if (s.tipo !== "istruzione") {
      const corpo = s.tipo === "avvisi" ? sezioneAvvisi(s, "x") : s.tipo === "schema" ? sezioneSchema(s, "x", base)
        : s.tipo === "documenti" ? sezioneDocumenti(s, "x", base) : s.tipo === "ricambi" ? sezioneRicambi(s, "x", base)
        : sezioneGenerica(s, si, base);
      $("#contenuto").innerHTML = `${indietro}<div class="scheda scheda-semplice">${testa}${s._manca ? `<div class="avviso-lingua">${t("soloIt")}</div>` : ""}${s._nonUff ? `<div class="avviso-lingua">${t("nonUff")}</div>` : ""}${corpo.replace(/<header class="sez-head">[\s\S]*?<\/header>/, "")}</div>`;
      return;
    }

    const passi = s.passi || [];
    const N = passi.length;
    const pi = Math.min(Math.max(parseInt(pNum, 10) || 1, 1), N) - 1;
    const fasi = fasiPassi(passi);
    const link = (k) => `#/${encodeURIComponent(id)}/s${si + 1}/p${k + 1}`;
    const ps = passi[pi];

    const elenco = passi.map((x, k) => `
        ${fasi[k].inizio ? `<li class="ep-fase">${esc(fasi[k].fase)}</li>` : ""}
        <li><a href="${link(k)}" class="${k === pi ? "attivo" : k < pi ? "fatto" : ""}" ${k === pi ? 'aria-current="step"' : ""}>
          <span class="ep-num">${esc(x.num || k + 1)}</span><span class="ep-testo">${esc(x.testo)}</span></a></li>`).join("");

    const nav = N > 1 ? `
      <nav class="passo-nav" aria-label="${t("passo")}">
        ${pi > 0 ? `<a class="btn btn-sec" href="${link(pi - 1)}">${ICONE.indietro}${t("precedente")}</a>` : `<span></span>`}
        ${pi < N - 1 ? `<a class="btn" href="${link(pi + 1)}">${t("successivo")}${ICONE.freccia}</a>`
          : `<a class="btn btn-fine" href="#/${encodeURIComponent(id)}">${ICONE.con}${t("fine")}</a>`}
      </nav>` : "";

    const pdfKey = `${lingua}/${id}-s${si + 1}`;
    const pdfBtn = (window.PDF_DISPONIBILI || []).includes(pdfKey)
      ? `<a class="btn btn-sec btn-pdf" href="pdf/${pdfKey}.pdf" download>${ICONE.scarica}${t("scaricaPdf")}</a>` : "";
    $("#contenuto").innerHTML = `
      <div class="riga-indietro">${indietro}${pdfBtn}</div>
      <div class="scheda">
        ${testa}
        ${condizioniHTML(s)}
        ${s._manca ? `<div class="avviso-lingua">${t("soloIt")}</div>` : ""}
        ${s._nonUff ? `<div class="avviso-lingua">${t("nonUff")}</div>` : ""}
        ${s.attenzione ? `<div class="attenzione">${ICONE.attenzione}<span>${esc(s.attenzione)}</span></div>` : ""}
        ${(s.importante || []).map((x) => `<div class="avviso avviso-importante"><span class="avviso-icona">${ICONE.importante}</span><div><p>${br(x)}</p></div></div>`).join("")}
        <div class="scheda-grid ${N > 1 ? "" : "uno"}">
          ${N > 1 ? `
          <details class="elenco-passi" ${window.innerWidth > 960 ? "open" : ""}>
            <summary>${t("tuttiPassi")} <span class="badge">${N}</span></summary>
            <ol>${elenco}</ol>
          </details>` : ""}
          <div class="passo-attivo">
            ${N > 1 ? `
            <div class="avanzamento">
              <span class="av-riga"><span><strong>${t("passo")} ${esc(ps.num || pi + 1)}</strong> ${t("di")} ${N}${fasi[pi].fase ? ` · ${esc(fasi[pi].fase)}` : ""}</span>
                <span class="mini-nav">
                  ${pi > 0 ? `<a href="${link(pi - 1)}" aria-label="${t("precedente")}">${ICONE.indietro}</a>` : `<span class="off">${ICONE.indietro}</span>`}
                  ${pi < N - 1 ? `<a href="${link(pi + 1)}" aria-label="${t("successivo")}">${ICONE.freccia}</a>` : `<span class="off">${ICONE.freccia}</span>`}
                </span></span>
              <span class="barra"><span style="width:${((pi + 1) / N) * 100}%"></span></span>
            </div>` : ""}
            ${fasi[pi].nota ? `<div class="nota-fase">${ICONE.info}<span>${esc(fasi[pi].nota)}</span></div>` : ""}
            ${passoHTML(ps, s, p, base)}
            ${nav}
          </div>
        </div>
      </div>`;
  }

  // ---------- Versione stampabile (per generare i PDF) ----------
  function vistaStampa(id, sNum) {
    document.body.classList.add("modo-stampa");
    if (!prodotti[id]) return;
    const p = loc(prodotti[id]);
    const sezioni = p.sezioni || [];
    const si = Math.min(Math.max(parseInt(sNum, 10) || 1, 1), sezioni.length) - 1;
    const s = sezioni[si];
    const base = `prodotti/${cartelle[id]}/`;
    const nIstr = sezioni.slice(0, si + 1).filter((x) => x.tipo === "istruzione").length;
    const passi = s.passi || [];
    const fasi = fasiPassi(passi);
    const corpo = passi.map((ps, k) => `
        ${fasi[k].inizio ? `<h3 class="st-fase">${esc(fasi[k].fase)}</h3>` : ""}
        ${ps.notaFase ? `<div class="nota-fase">${ICONE.info}<span>${esc(ps.notaFase)}</span></div>` : ""}
        <div class="st-passo">
          ${passi.length > 1 ? `<span class="st-num">${esc(ps.num || k + 1)}</span>` : ""}
          ${passoHTML(ps, s, p, base)}
        </div>`).join("");
    $("#contenuto").innerHTML = `
      <article class="stampa ${passi.length <= 3 ? "st-ampio" : ""}">
        <header class="st-testa">
          <img src="app/img/logo-stem.png" alt="STEM" class="st-logo">
          <div class="st-prodotto"><span>${t("schedaIstr")}</span><strong>${esc(p.nome)}</strong></div>
        </header>
        <div class="st-titolo">
          <span class="sch-num">${nIstr}</span>
          <div>
            <h1>${esc(s.titolo)} ${s.etichetta ? `<span class="etichetta">${esc(s.etichetta)}</span>` : ""}</h1>
            ${s.sottotitolo ? `<p>${esc(s.sottotitolo)}</p>` : ""}
          </div>
        </div>
        ${condizioniHTML(s)}
        ${s.attenzione ? `<div class="attenzione">${ICONE.attenzione}<span>${esc(s.attenzione)}</span></div>` : ""}
        ${(s.importante || []).map((x) => `<div class="avviso avviso-importante"><span class="avviso-icona">${ICONE.importante}</span><div><p>${br(x)}</p></div></div>`).join("")}
        <div class="st-passi">${corpo}</div>
        <footer class="st-piede">
          <span><strong>${t("assistenza")}:</strong> <a href="mailto:${esc(CONFIG.email || "")}">${esc(CONFIG.email || "")}</a></span>
          <span>${p.fonte ? esc(p.fonte) : ""}</span>
        </footer>
      </article>`;
    document.title = `${p.nome} - ${s.titolo}`;
    document.body.dataset.pronto = "1";
  }

  // ---------- Ricerca ----------
  // righe ricercabili di una sezione: { r: testo, k: indice passo (o -1) }
  function righeSezione(p, s) {
    const r = [];
    const add = (x, k = -1) => { if (x) r.push({ r: x, k }); };
    add(s.titolo); add(s.sottotitolo); add(s.testo);
    (s.righe || []).forEach((x) => add(x.join(" · ")));
    (s.voci || []).forEach((v) => add(v));
    (s.file || []).forEach((f) => add(f.nome));
    (s.condizioni || []).forEach((c) => add(c.testo));
    (s.passi || []).forEach((ps, k) => {
      add(ps.testo, k); add(ps.esito, k); add(ps.fase, k); add(ps.notaFase, k);
      if (ps.pulsanti) ps.pulsanti.forEach((x) => { if (x.length > 1) add(nomeTasto(p, x), k); });
    });
    add(s.attenzione);
    (s.avvisi || []).forEach((a) => add(a.testo));
    (s.fogli || []).forEach((f) => add(`${f.titolo} · ${f.descrizione}`));
    (s.ricambi || []).forEach((x) => add([x.codice, x.nome, x.lato, x.nota].filter(Boolean).join(" · ")));
    return r;
  }

  function vistaRicerca(q) {
    evidenziaAttivo(null);
    const termine = q.toLowerCase();
    const risultati = [];
    for (const p of ordinati()) {
      if (`${p.nome} ${p.titoloPagina || ""} ${p.descrizione || ""}`.toLowerCase().includes(termine))
        risultati.push({ p, s: null, i: -1, k: -1, r: p.titoloPagina || p.nome });
      (p.sezioni || []).forEach((s, i) => {
        const visti = new Set();
        righeSezione(p, s).filter((x) => x.r.toLowerCase().includes(termine)).forEach((x) => {
          const chiave = x.r + "|" + x.k; if (visti.has(chiave)) return; visti.add(chiave);
          risultati.push({ p, s, i, k: x.k, r: x.r });
        });
      });
    }
    const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    const evid = (x) => esc(x).replace(re, (m) => `<mark>${m}</mark>`);
    $("#contenuto").innerHTML = `
      <div class="hero hero-home"><h1>${t("ricerca")}: “${esc(q)}”</h1><p class="hero-sotto">${risultati.length} ${t("risultati")}</p></div>
      <ul class="risultati">${risultati.map(({ p, s, i, k, r }) => {
        const href = `#/${encodeURIComponent(p.id)}${s ? "/s" + (i + 1) : ""}${k >= 0 ? "/p" + (k + 1) : ""}`;
        const passo = k >= 0 ? ` › ${t("passo")} ${esc(s.passi[k].num || k + 1)}` : "";
        return `
        <li><a href="${href}">
          <span class="ris-dove">${esc(p.nome)}${s ? " › " + esc(s.titolo) : ""}${passo}</span>
          <span class="ris-testo">${evid(r)}</span></a></li>`; }).join("")}</ul>`;
  }

  // ---------- Lingua ----------
  function applicaLingua() {
    document.documentElement.lang = lingua;
    document.title = nomeApp();
    $("#appTitle").textContent = nomeApp();
    $("#cerca").placeholder = t("cerca");
    $("#cerca").setAttribute("aria-label", t("cerca"));
    $("#menuBtn").setAttribute("aria-label", t("menu"));
    $("#sidebarTitolo").firstChild.textContent = t("prodotti") + " ";
    const sel = document.querySelector("#lingue select"); if (sel) sel.value = lingua;
    document.querySelectorAll("#lingue button").forEach((b) => {
      const attivo = b.dataset.lng === lingua;
      b.classList.toggle("attivo", attivo);
      b.setAttribute("aria-pressed", attivo);
    });
    disegnaElenco();
  }

  function disegnaLingue() {
    const box = $("#lingue");
    if (LINGUE.length < 2) { box.hidden = true; return; }
    box.innerHTML = LINGUE.map((l) => `<button type="button" data-lng="${l}">${l.toUpperCase()}</button>`).join("") +
      `<select class="lingue-select" aria-label="Lingua">${LINGUE.map((l) => `<option value="${l}">${l.toUpperCase()}</option>`).join("")}</select>`;
    box.querySelector("select").addEventListener("change", (e) => {
      lingua = e.target.value; salvaLingua(lingua); applicaLingua();
      const q = $("#cerca").value.trim();
      if (q.length >= 2) vistaRicerca(q); else route(true);
    });
    box.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b || b.dataset.lng === lingua) return;
      lingua = b.dataset.lng;
      salvaLingua(lingua);
      applicaLingua();
      const q = $("#cerca").value.trim();
      if (q.length >= 2) vistaRicerca(q); else route(true);
    });
  }

  // ---------- Navigazione ----------
  function route(mantieniScroll) {
    const [id, sez, passo] = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    const y = window.scrollY;
    if (id === "stampa") {            // #/stampa/<prodotto>/s<n>/<lingua>
      const parti = location.hash.replace(/^#\/?/, "").split("/");
      if (parti[3] && UI[parti[3]]) lingua = parti[3];
      document.documentElement.lang = lingua;
      return vistaStampa(parti[1], (parti[2] || "s1").slice(1));
    }
    if (!id) vistaHome();
    else if (sez && /^s\d+$/.test(sez)) vistaScheda(id, sez.slice(1), passo && /^p\d+$/.test(passo) ? passo.slice(1) : 1);
    else vistaProdotto(id);
    if (mantieniScroll === true) window.scrollTo(0, y);
    else if (passo) { const pa = document.querySelector(".passo-attivo"); if (pa && pa.getBoundingClientRect().top < 0) pa.scrollIntoView({ block: "start" }); }
    else window.scrollTo(0, 0);
    document.querySelector(".elenco-passi a.attivo")?.scrollIntoView({ block: "nearest" });
    document.body.classList.remove("menu-aperto");
  }

  function avvia() {
    disegnaLingue();
    applicaLingua();
    window.addEventListener("hashchange", () => route());
    $("#cerca").addEventListener("input", (e) => {
      const q = e.target.value.trim();
      if (q.length >= 2) vistaRicerca(q); else route();
    });
    $("#contenuto").addEventListener("click", (e) => {
      const f = e.target.closest(".foglio, .zoomabile");
      if (f) apriVisore(f.dataset.src, f.dataset.titolo);
    });
    $("#menuBtn").addEventListener("click", () => document.body.classList.toggle("menu-aperto"));
    document.addEventListener("keydown", (e) => {
      if (document.querySelector(".visore") || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
      const nav = document.querySelector(".passo-nav");
      if (!nav) return;
      if (e.key === "ArrowRight") nav.querySelector(".btn:not(.btn-sec):not(.btn-fine)")?.click();
      if (e.key === "ArrowLeft") nav.querySelector(".btn-sec")?.click();
    });
    const lista = Object.keys(prodotti);
    if (!location.hash && lista.length === 1) location.hash = `#/${encodeURIComponent(lista[0])}`;
    route();
  }

  caricaTutto().then(avvia);
})();
