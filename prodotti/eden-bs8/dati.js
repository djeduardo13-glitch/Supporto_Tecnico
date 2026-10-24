// EDEN-BS8 — Supporto
// Fonte: Manuale EDEN-BS8 R01 IT, §5.5 Regolazioni (pag. 38-39)
//
// "pulsantiera": la foto usata in TUTTE le istruzioni.
//   pulsanti = nome del tasto -> [x, y] del centro del pulsante sulla foto (pixel).
//   Nel manuale i tasti sono indicati con lettere: A e F = Molleggio, B = Testa su, C = Orizzontale,
//   D = Piedi su, E = Freccia su, G = Freccia giù. L'icona batteria è solo una spia (nessun nome).
//
// Tipo di sezione "istruzione":
//   condizioni: [{ testo, tipo: "senza" | "con" | "info" }]
//   passi: [{ num, testo, pulsanti: ["Testa su", "Piedi su"], modo: "insieme2s" | "insieme" | "singolo" | "oppure", esito, immagine }]
//   attenzione: testo nel riquadro di avviso

registraProdotto({
  id: "eden-bs8",
  nome: "Eden - BS8",
  categoria: "Eden",
  descrizione: "Regolazioni dalla pulsantiera: autoapprendimento, posizione orizzontale, molleggio e inclinazione di carico.",
  aggiornato: "2026-10-23",
  fonte: "Manuale EDEN-BS8 R01 · §5.5 Regolazioni",

  copertina: "img/copertina.webp",

  pulsantiera: {
    immagine: "img/pulsantiera.png",
    larghezza: 444,
    altezza: 213,
    raggio: 31,
    pulsanti: {
      "Stop":        [78, 75],
      "Orizzontale": [148, 75],
      "Molleggio":   [220, 75],
      "Freccia su":  [292, 75],
      "LED":         [78, 138],
      "Piedi su":    [148, 138],
      "Testa su":    [220, 138],
      "Freccia giù": [292, 138]
    }
  },

  sezioni: [
    {
      titolo: "Autoapprendimento",
      sottotitolo: "Rilevamento dei finecorsa meccanici e degli estremi di movimento del piano.",
      tipo: "istruzione",
      condizioni: [
        { testo: "Senza barella agganciata", tipo: "senza" }
      ],
      passi: [
        {
          num: "1",
          testo: "Avviare il ciclo di autoapprendimento del piano.",
          pulsanti: ["Molleggio", "Testa su"],
          modo: "insieme2s"
        }
      ],
      attenzione: "La pressione di un qualsiasi pulsante durante il ciclo di apprendimento ne provoca l'arresto."
    },
    {
      titolo: "Posizione orizzontale",
      sottotitolo: "Memorizzazione della posizione orizzontale del piano porta barella.",
      tipo: "istruzione",
      condizioni: [
        { testo: "Con barella agganciata", tipo: "con" },
        { testo: "Piano porta barella in posizione bassa orizzontale", tipo: "info" }
      ],
      passi: [
        {
          num: "1",
          testo: "Memorizzare la posizione orizzontale.",
          pulsanti: ["Orizzontale", "Piedi su"],
          modo: "insieme2s",
          esito: "Segnale acustico: posizione orizzontale memorizzata."
        }
      ]
    },
    {
      titolo: "Altezza di molleggio",
      sottotitolo: "Impostazione e memorizzazione dell'altezza di molleggio (200–220 mm).",
      tipo: "istruzione",
      condizioni: [
        { testo: "Con barella agganciata", tipo: "con" }
      ],
      passi: [
        {
          num: "1",
          testo: "Portare il piano a un'altezza di molleggio compresa tra 200 e 220 mm.",
          pulsanti: ["Freccia su"],
          modo: "singolo"
        },
        {
          num: "2",
          testo: "Memorizzare l'altezza di molleggio.",
          pulsanti: ["Freccia su", "Molleggio"],
          modo: "insieme2s",
          esito: "Segnale acustico: altezza di molleggio memorizzata."
        }
      ]
    },
    {
      titolo: "Inclinazione di carico",
      sottotitolo: "Solo per il modello EDEN-BS8 070, con barella Spark.",
      tipo: "istruzione",
      etichetta: "Solo EDEN-BS8 070",
      condizioni: [
        { testo: "Senza barella agganciata", tipo: "senza" },
        { testo: "Piano porta barella in posizione bassa orizzontale", tipo: "info" }
      ],
      passi: [
        {
          num: "4a",
          testo: "Attivare la modalità manuale, che consente di movimentare il piano anche in assenza di barella.",
          pulsanti: ["Orizzontale", "Testa su"],
          modo: "insieme2s"
        },
        {
          num: "4b",
          testo: "Inclinare il piano fino a portare l'imbocco dello SPARK-FS 2 cm al di sotto della sfera dello Spark.",
          pulsanti: ["Testa su", "Piedi su"],
          modo: "oppure",
          immagine: "img/spark-fs-2cm.png",
          didascalia: "Imbocco SPARK-FS 2 cm sotto la sfera dello Spark"
        },
        {
          num: "4c",
          testo: "Memorizzare l'inclinazione del piano.",
          pulsanti: ["Orizzontale", "Freccia su"],
          modo: "insieme2s",
          esito: "Segnale acustico: inclinazione memorizzata."
        },
        {
          num: "4d",
          testo: "Per uscire senza memorizzare la programmazione manuale.",
          pulsanti: ["Orizzontale", "Freccia giù"],
          modo: "insieme",
          tipoPasso: "alternativa"
        }
      ]
    }
  ]
});
