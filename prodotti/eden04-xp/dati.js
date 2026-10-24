// EDEN04-XP — Supporto
// Fonte: Manuale EDEN04-XP §5.5.1 Regolazione altezza di carico (pag. 37-38)
//
// "pulsantiera": immagine ricostruita in SVG, usata in tutte le istruzioni con i tasti.
//   pulsanti = nome del tasto -> [x, y] del centro del pulsante sull'immagine (stessi tasti dell'Eden-BS8;
//   l'icona batteria è solo una spia). Le lettere A, B, H nei testi sono le etichette delle foto.

registraProdotto({
  id: "eden04-xp",
  nome: "EDEN04-XP",
  categoria: "Eden",
  descrizione: "Regolazione dell'altezza di carico e programmazione con Spyke e Sherpa Slim.",
  aggiornato: "2026-10-23",
  fonte: "Manuale EDEN04-XP · §5.5.1 Regolazione altezza di carico",

  copertina: "img/copertina.webp",

  pulsantiera: {
    immagine: "img/pulsantiera.svg",
    larghezza: 622,
    altezza: 302,
    raggio: 38,
    pulsanti: {
      "Stop":        [117, 111],
      "Orizzontale": [216, 111],
      "Molleggio":   [316, 111],
      "Freccia su":  [415, 111],
      "LED":         [117, 196],
      "Piedi su":    [216, 196],
      "Testa su":    [316, 196],
      "Freccia giù": [415, 196]
    }
  },

  sezioni: [
    {
      titolo: "Altezza di carico",
      sottotitolo: "Regolazione e memorizzazione dell'altezza di carico della barella.",
      tipo: "istruzione",
      passi: [
        {
          num: "1",
          testo: "Tirare la leva di sgancio (A) del piano estraibile.",
          nota: "in questo modo il dispositivo si posiziona in basso per consentire la fuoriuscita del piano estraibile.",
          immagini: ["img/ed-s1.jpg"]
        },
        {
          num: "2",
          testo: "Tirare nuovamente la leva (A) e accompagnare l'uscita del piano fino all'aggancio in posizione \"tutto estratto\".",
          immagini: ["img/ed-s2.jpg"]
        },
        {
          num: "3",
          testo: "Regolare l'altezza di carico (H) mediante i pulsanti lato piedi (B).",
          nota: "avvicinare la barella e ottimizzare l'inclinazione per agevolare il caricamento.",
          immagini: ["img/ed-s3.jpg", "img/ed-h.jpg"]
        },
        {
          num: "4",
          testo: "Memorizzare la posizione desiderata premendo simultaneamente le due frecce della pulsantiera di comando.",
          pulsanti: ["Freccia su", "Freccia giù"],
          modo: "insieme"
        }
      ]
    },
    {
      titolo: "Programmazione Complete Care",
      sottotitolo: "Programmazione integrata di Spyke, Sherpa Slim ed EDEN04-XP.",
      tipo: "collegamento",
      vai: "sherpa-slim/s2"
    }
  ]
});
