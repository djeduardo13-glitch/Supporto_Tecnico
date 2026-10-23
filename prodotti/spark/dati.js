// SPARK — Supporto
// Fonti: "Foglio istruzioni 0 macchina" (docx) · IS000039 R00 del 30/03/26 "Configurazione altezza di carico Spark"
//
// Lo Spark si comanda dal display touch: ogni passo ha la sua foto (immagini: [...]).
// "fase" mostra un titoletto prima del passo, "notaFase" un riquadro informativo.

registraProdotto({
  id: "spark",
  nome: "Spark",
  categoria: "Spark",
  descrizione: "Azzeramento macchina e configurazione dell'altezza di carico dal display.",
  aggiornato: "2026-10-23",
  fonte: "Foglio istruzioni zero macchina · IS000039 R00",
  copertina: "img/copertina.webp",

  sezioni: [
    {
      titolo: "Zero macchina",
      sottotitolo: "Calibrazione dello zero di ruote, zona testa e zona gambe.",
      tipo: "istruzione",
      condizioni: [
        { testo: "PIN di accesso: 151010", tipo: "info" }
      ],
      passi: [
        { fase: "Accesso alla calibrazione", num: "1", testo: "Premere simultaneamente le due coste sensibili e regolare l'altezza mediante la levetta SU/GIÙ.", immagini: ["img/zero-01.jpg"] },
        { num: "2", testo: "Abbassare completamente il piano dello Spark.", immagini: ["img/zero-02.jpg"] },
        { num: "3", testo: "Selezionare l'icona Impostazioni sul display.", immagini: ["img/zero-03.jpg"] },
        { num: "4", testo: "Inserire il PIN di accesso 151010 e selezionare l'icona di conferma.", immagini: ["img/zero-04.jpg"] },
        { num: "5", testo: "Nella schermata dei parametri, selezionare l'icona Home.", immagini: ["img/zero-05.jpg"] },
        { num: "6", testo: "Nella schermata Home, selezionare l'icona Misura (compasso).", immagini: ["img/zero-06.jpg"] },
        { num: "7", testo: "Si apre la schermata di calibrazione, da cui è possibile eseguire l'azzeramento di ciascun componente dello Spark: le quattro ruote, la zona testa e la zona gambe.", immagini: ["img/zero-07.jpg"] },

        {
          fase: "Zero dei componenti",
          notaFase: "Per ciascun componente: selezionare la relativa icona e mantenere premuta la freccia Giù fino all'emissione del segnale acustico. Rilasciare quindi la freccia e deselezionare l'icona.",
          num: "8", testo: "Gambe lato testa: selezionare l'icona del busto e mantenere premuta la freccia Giù.",
          esito: "Segnale acustico: azzeramento completato. Rilasciare la freccia e deselezionare l'icona del busto.", immagini: ["img/zero-08.jpg"]
        },
        { num: "9", testo: "Gambe lato piedi: selezionare l'icona delle gambe e mantenere premuta la freccia Giù.", esito: "Segnale acustico: azzeramento completato. Rilasciare la freccia e deselezionare l'icona delle gambe.", immagini: ["img/zero-09.jpg"] },
        { num: "10", testo: "Ruota destra lato piedi: selezionare l'icona della ruota e mantenere premuta la freccia Giù.", esito: "Segnale acustico: azzeramento completato. Rilasciare la freccia e deselezionare l'icona della ruota.", immagini: ["img/zero-10.jpg"] },
        { num: "11", testo: "Ruota sinistra lato piedi: selezionare l'icona della ruota e mantenere premuta la freccia Giù.", esito: "Segnale acustico: azzeramento completato. Rilasciare la freccia e deselezionare l'icona della ruota.", immagini: ["img/zero-11.jpg"] },
        { num: "12", testo: "Ruota sinistra lato testa: selezionare l'icona della ruota e mantenere premuta la freccia Giù.", esito: "Segnale acustico: azzeramento completato. Rilasciare la freccia e deselezionare l'icona della ruota.", immagini: ["img/zero-12.jpg"] },
        { num: "13", testo: "Ruota destra lato testa: selezionare l'icona della ruota e mantenere premuta la freccia Giù.", esito: "Segnale acustico: azzeramento completato. Rilasciare la freccia e deselezionare l'icona della ruota.", immagini: ["img/zero-13.jpg"] },

        { fase: "Salvataggio e uscita", num: "14", testo: "Deselezionare tutte le icone e mantenere premuta l'icona Misura (calibro) per memorizzare i nuovi parametri.", immagini: ["img/zero-07.jpg"] },
        { num: "15", testo: "Selezionare l'icona Home per tornare alla schermata principale.", immagini: ["img/zero-07.jpg"] },
        { num: "16", testo: "Selezionare l'icona Ambulanza.", immagini: ["img/zero-06.jpg"] },
        { num: "17", testo: "Selezionare l'icona Ingranaggio.", immagini: ["img/zero-14.jpg"] },
        { num: "18", testo: "Selezionare la freccia Indietro.", immagini: ["img/zero-05.jpg"] }
      ]
    },
    {
      titolo: "Altezza di carico",
      sottotitolo: "Regolazione e memorizzazione dell'altezza di carico (IS000039).",
      tipo: "istruzione",
      condizioni: [
        { testo: "Quota richiesta: 20 mm tra la sfera del rostro e il piano inferiore del ricettacolo", tipo: "info" },
        { testo: "PIN di accesso: 151010", tipo: "info" }
      ],
      passi: [
        { fase: "Regolazione dell'altezza", num: "1", testo: "Estrarre completamente il ricettacolo e l'assieme slitta intermedio dall'assieme slitta base, verificando che risultino completamente sganciati.", immagini: ["img/carico-1.jpg"] },
        { num: "2", testo: "Premere simultaneamente le due coste sensibili e regolare l'altezza mediante la thumbwheel SU/GIÙ.", immagini: ["img/carico-2.jpg"] },
        { num: "3", testo: "Posizionare lo Spark a un'altezza tale da ottenere 20 mm tra la sfera del rostro e il piano inferiore del ricettacolo.", immagini: ["img/carico-3.jpg"] },

        { fase: "Salvataggio", num: "4", testo: "Selezionare il pulsante Impostazioni per accedere al menu dei parametri.", immagini: ["img/carico-4.jpg"] },
        { num: "5", testo: "Inserire il PIN di accesso 151010 e selezionare il pulsante di conferma.", immagini: ["img/carico-5.jpg"] },
        { num: "6", testo: "Selezionare il pulsante Home e successivamente il pulsante Ambulanza.", immagini: ["img/carico-6.jpg"] },
        { num: "7", testo: "Mantenere premuto il pulsante Altezza di carico fino all'emissione del segnale acustico.", esito: "Segnale acustico: altezza di carico memorizzata.", immagini: ["img/carico-7.jpg"] },

        { fase: "Uscita", num: "8", testo: "Selezionare il pulsante Ingranaggio per tornare alla pagina iniziale.", immagini: ["img/carico-8.jpg"] },
        { num: "9", testo: "Selezionare la freccia Indietro.", immagini: ["img/carico-9.jpg"] }
      ]
    }
  ]
});
