// OPTIMUS-XP — Supporto
// Fonte: Manuale OPTIMUS-XP §5.5 Regolazioni (pag. 36) · Schema elettrico SE000018 rev. 00
//
// "pulsantiera": la foto (ricostruita in SVG) usata in TUTTE le istruzioni.
//   pulsanti = nome del tasto -> [x, y] del centro del pulsante sull'immagine.

registraProdotto({
  id: "optimus-xp",
  nome: "Optimus XP",
  categoria: "Optimus",
  descrizione: "Regolazioni dalla pulsantiera e schema elettrico.",
  aggiornato: "2026-10-23",
  fonte: "Manuale OPTIMUS-XP · §5.5 Regolazioni",

  copertina: "img/copertina.webp",

  pulsantiera: {
    immagine: "img/pulsantiera.svg",
    larghezza: 496,
    altezza: 237,
    raggio: 30,
    pulsanti: {
      "Molleggio":   [175, 93],
      "Freccia su":  [325, 93],
      "LED":         [175, 156.5],
      "Freccia giù": [325, 156.5]
    }
  },

  sezioni: [
    {
      titolo: "Autoapprendimento finecorsa",
      sottotitolo: "Corsa completa in discesa e poi in salita per acquisire i finecorsa inferiore e superiore.",
      tipo: "istruzione",
      condizioni: [
        { testo: "Senza barella agganciata", tipo: "senza" }
      ],
      passi: [
        {
          num: "1",
          testo: "Avviare il ciclo di autoapprendimento.",
          pulsanti: ["Freccia su", "Freccia giù"],
          modo: "finoBeep",
          esito: "Segnale acustico e LED giallo acceso: ciclo di autoapprendimento avviato."
        }
      ]
    },
    {
      titolo: "Altezza di molleggio",
      sottotitolo: "Impostazione e memorizzazione dell'altezza di molleggio.",
      tipo: "istruzione",
      condizioni: [
        { testo: "Valore consigliato: 200 mm complessivi, misurati dal piano in acciaio inox al pavimento", tipo: "info" }
      ],
      passi: [
        {
          num: "1",
          testo: "Portare il supporto all'altezza di molleggio desiderata.",
          pulsanti: ["Freccia su"],
          modo: "singolo"
        },
        {
          num: "2",
          testo: "Memorizzare l'altezza di molleggio.",
          pulsanti: ["Molleggio", "Freccia su"],
          modo: "insieme",
          esito: "Segnale acustico: altezza di molleggio memorizzata."
        }
      ]
    },
    {
      titolo: "Schema elettrico",
      sottotitolo: "Dis. N. SE000018 · Rev. 00 · Prog. PSL25-375 · Rilasciato 22/08/25",
      tipo: "schema",
      fogli: [
        { immagine: "img/schema-foglio2.png", titolo: "Foglio 2", descrizione: "Collegamenti cavi: LED e sensori" },
        { immagine: "img/schema-foglio3.png", titolo: "Foglio 3", descrizione: "Cablaggio sul telaio: centralina, motore e connettori" },
        { immagine: "img/schema-foglio4.png", titolo: "Foglio 4", descrizione: "Barre LED e sensori sul piano" }
      ],
      file: [
        { nome: "Schema elettrico Optimus-XP (PDF)", percorso: "documenti/Schema-elettrico-Optimus-XP.pdf" }
      ]
    }
  ]
});
