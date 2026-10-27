// R-3L XP — Supporto
//
// "pulsantiera": la foto usata in TUTTE le istruzioni.
//   pulsanti = nome del tasto -> [x, y] del centro del pulsante sulla foto (pixel).

registraProdotto({
  id: "r-3l-xp",
  nome: "R-3L XP",
  categoria: "R-3L",
  descrizione: "Regolazioni dalla pulsantiera: autoapprendimento e altezza di carico.",
  aggiornato: "2026-10-23",

  copertina: "img/copertina.webp",

  pulsantiera: {
    immagine: "img/pulsantiera.png",
    larghezza: 590,
    altezza: 282,
    raggio: 36,
    pulsanti: {
      "Auto su":   [198, 94],
      "Auto giù":  [198, 182],
      "Testa su":  [294, 94],
      "Testa giù": [294, 182],
      "Piedi su":  [389, 94],
      "Piedi giù": [389, 182]
    }
  },

  sezioni: [
    {
      titolo: "Autoapprendimento",
      sottotitolo: "Ciclo di autoapprendimento del piano.",
      tipo: "istruzione",
      condizioni: [
        { testo: "Senza barella agganciata", tipo: "senza" },
        { testo: "Piano chiuso", tipo: "info" }
      ],
      passi: [
        {
          num: "1",
          testo: "Avviare il ciclo di autoapprendimento.",
          pulsanti: ["Testa su", "Testa giù"],
          modo: "insieme"
        }
      ]
    },
    {
      titolo: "Altezza di carico",
      sottotitolo: "Impostazione e memorizzazione dell'inclinazione del supporto per il carico.",
      tipo: "istruzione",
      passi: [
        {
          num: "1",
          testo: "Estrarre completamente il piano estraibile."
        },
        {
          num: "2",
          testo: "Inclinare il supporto fino alla posizione desiderata.",
          pulsanti: ["Testa su", "Testa giù"],
          modo: "oppure"
        },
        {
          num: "3",
          testo: "Memorizzare la posizione.",
          pulsanti: ["Piedi su", "Piedi giù"],
          modo: "insieme"
        }
      ]
    }
  ]
});
