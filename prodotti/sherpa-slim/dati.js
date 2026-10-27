// SHERPA SLIM — Supporto
// Fonti: Manuale SHERPA SLIM §5.3.6 Programmazione del dispositivo (IT, pag. 45-49)
//        Manual SHERPA SLIM R04 §5.3.6 Programación del producto (ES, pag. 45-50)
//        Istruzioni di Programmazione SPYKE, SHERPA SLIM e EDEN04-XP R01 del 11/06/2025 (IT)
// Le immagini "it-*" sono quelle del manuale italiano; es.js le sostituisce con "es-*".

registraProdotto({
  id: "sherpa-slim",
  nome: "Sherpa Slim",
  categoria: "Sherpa",
  descrizione: "Programmazione del sistema di caricamento assistito mediante l'App STEM Global Service e la barella Spyke.",
  aggiornato: "2026-10-23",
  fonte: "Manuale SHERPA SLIM · §5.3.6 Programmazione del dispositivo",
  copertina: "img/copertina.webp",

  sezioni: [
    {
      titolo: "Programmazione del dispositivo",
      sottotitolo: "Apprendimento delle posizioni di carico mediante l'App STEM Global Service.",
      tipo: "istruzione",
      condizioni: [
        { testo: "App STEM Global Service con Bluetooth e GPS attivi", tipo: "info" }
      ],
      attenzione: "Durante la programmazione i sistemi di blocco di sicurezza della cinghia sono disabilitati: prestare particolare attenzione a eventuali movimenti improvvisi della barella.",
      importante: [
        "Il dispositivo è progettato per 3 tipologie di barelle: sblocco gambe a due comandi (un comando per gamba), sblocco gambe a un comando (un comando per entrambe le gambe) e sblocco gambe automatico."
      ],
      passi: [
        { fase: "Preparazione", num: "1", testo: "Verificare che il supporto sia regolato alla corretta altezza di carico per la barella.", nota: "fare riferimento al manuale del supporto." },
        { num: "2", testo: "Posizionare la barella a terra, di fronte al supporto." },
        { num: "3", testo: "Portare il supporto barella in posizione di carico/scarico.", nota: "fare riferimento al manuale del supporto." },
        { num: "4", testo: "Accendere il dispositivo mediante il pulsante ON/OFF (A).", esito: "Segnale acustico: dispositivo acceso.", immagini: ["img/it-s04.jpg"] },
        { num: "5", testo: "Premere il pulsante \"Discesa\" della pulsantiera installata a lato del supporto barella e svolgere la cinghia fino a raggiungere la barella.", nota: "durante lo svolgimento la cinghia deve essere mantenuta in tensione.", immagini: ["img/it-s05.jpg"] },
        { num: "6", testo: "Collegare la cinghia del dispositivo alla barella.", nota: "fare riferimento al paragrafo \"Collegamento barella a dispositivo\"." },

        { fase: "Avvio dell'apprendimento", num: "7", testo: "Avviare l'App STEM \"Global Service\" e, al termine della scansione dei dispositivi nelle vicinanze, selezionare lo Sherpa Slim da programmare.", immagini: ["img/it-s07.jpg"] },
        { num: "8", testo: "Selezionare \"Modalità apprendimento\" e, dallo stato \"Disabilitato\", scegliere \"Abilita\".", immagini: ["img/it-s08.jpg"] },
        { num: "9", testo: "Selezionare nuovamente \"Modalità apprendimento\" (ora \"Abilitato\") e scegliere \"Inizia apprendimento\".", esito: "Segnale acustico: il dispositivo entra nello stato \"Apprendimento\". Il LED del pulsante ON/OFF si spegne e i LED rosso e verde iniziano a lampeggiare.", immagini: ["img/it-s09.jpg"] },

        { fase: "Memorizzazione dei punti", num: "10", testo: "Portare la barella a una distanza di circa 40 cm dal supporto.", nota: "il supporto barella deve essere in posizione di carico.", immagini: ["img/it-s10.jpg"] },
        { num: "11", testo: "Selezionare \"Salva punto\", attivare le opzioni \"Salita\", \"Discesa\" e \"Ferma\" e confermare con \"Ok\".", esito: "Segnale acustico: punto memorizzato.", immagini: ["img/it-s11.jpg"] },
        { num: "12", testo: "Mediante il dispositivo, far risalire la barella sul supporto fino a quando la prima gamba si trova a circa 4 cm dal bordo del supporto.", immagini: ["img/it-s12a.jpg", "img/it-s12b.jpg"] },
        { num: "13", testo: "Selezionare \"Salva punto\", impostare le opzioni \"Salita\", \"Discesa\" e \"Ferma\" e confermare con \"Ok\".", esito: "Segnale acustico: punto memorizzato.", nota: "le opzioni vanno selezionate in funzione del risultato desiderato: arresto del movimento o solo rallentamento (in tal caso NON selezionare \"Ferma\"), solo in fase di carico, solo in fase di scarico o in entrambe le fasi.", immagini: ["img/it-s13.jpg"] },
        { num: "14", testo: "Proseguire la risalita della barella fino a quando la seconda gamba si trova a circa 4 cm dal bordo del supporto.", immagini: ["img/it-s14.jpg"] },
        { num: "15", testo: "Selezionare \"Salva punto\", impostare le opzioni \"Salita\", \"Discesa\" e \"Ferma\" e confermare con \"Ok\".", esito: "Segnale acustico: punto memorizzato.", nota: "con la stessa procedura è possibile memorizzare altre 9 posizioni, per un totale di 11 posizioni intermedie oltre al punto di inizio (barella completamente fuori, passo 10) e al punto di fine (barella completamente caricata, passo 16).", immagini: ["img/it-s15.jpg"] },

        { fase: "Fine apprendimento", num: "16", testo: "Completare la risalita della barella fino al raggiungimento della posizione di blocco finale, quindi portare il piano del supporto barella in posizione orizzontale.", immagini: ["img/it-s16.jpg"] },
        { num: "17", testo: "Selezionare \"Fine apprendimento\".", esito: "Doppio segnale acustico e arresto del lampeggio dei LED rosso e verde sul fianco del dispositivo: programmazione completata correttamente.", nota: "il LED del pulsante ON/OFF indica la presenza di una programmazione in memoria: acceso = apprendimento completato e programmazione memorizzata; spento = nessuna programmazione presente.", immagini: ["img/it-s17.jpg"] }
      ]
    },
    {
      titolo: "Programmazione Complete Care",
      sottotitolo: "Spyke, Sherpa Slim ed EDEN04-XP: impostazioni dall'App e programmazione dal display dello Spyke.",
      tipo: "istruzione",
      condizioni: [
        { testo: "Permessi aggiuntivi App Global Service (rilasciati dall'Assistenza Tecnica STEM)", tipo: "info" }
      ],
      importante: [
        "Spyke, Sherpa Slim ed EDEN04-XP costituiscono il sistema integrato Complete Care: supporto barella, sistema di caricamento assistito e barella comunicano tra loro per operazioni di carico e scarico sincronizzate."
      ],
      passi: [
        { fase: "Impostazioni dall'App Global Service", num: "1", testo: "Scaricare e avviare l'App STEM Global Service (disponibile su App Store e Google Play Store).", immagini: ["img/cc-a1.jpg"] },
        { num: "2", testo: "Accedere alla pagina del dispositivo Sherpa Slim (verificare il numero di serie del prodotto).", immagini: ["img/cc-a2.jpg"] },
        { num: "3", testo: "Selezionare \"SUPPORTO\" e scegliere \"AUTOMATICO\" per il supporto barella EDEN04-XP.", immagini: ["img/cc-a3a.jpg", "img/cc-a3b.jpg"] },
        { num: "4", testo: "Selezionare \"BARELLA\" e scegliere \"Spyke\".", nota: "questa impostazione disattiva i pulsanti dello Sherpa Slim sulla pulsantiera lato piedi del supporto. È obbligatoria, in quanto le operazioni di carico e scarico con lo Sherpa Slim devono essere comandate esclusivamente dai pulsanti IN/OUT del display dello Spyke.", immagini: ["img/cc-a4.jpg", "img/cc-a4p.jpg"] },
        { num: "5", testo: "Accedere alla pagina del dispositivo Spyke (verificare il numero di serie del prodotto).", immagini: ["img/cc-a5.jpg"] },
        { num: "6", testo: "Selezionare \"ASSOCIAZIONE SHERPA\" e scegliere lo Sherpa Slim rilevato dalla scansione.", immagini: ["img/cc-a6a.jpg", "img/cc-a6b.jpg"] },
        { num: "7", testo: "Verificare la corretta connessione: la scritta \"Sherpa\" sul display dello Spyke deve essere di colore verde.", immagini: ["img/cc-a7.jpg"] },

        { fase: "Abilitazione della programmazione", notaFase: "Sono necessari i permessi aggiuntivi dell'App Global Service, rilasciati esclusivamente dall'Assistenza Tecnica di STEM S.r.l.", num: "8", testo: "Spegnere lo Sherpa Slim mediante l'interruttore I/O.", immagini: ["img/cc-b1.jpg"] },
        { num: "9", testo: "Verificare che il display della barella Spyke sia nella schermata principale.", immagini: ["img/cc-b2.jpg"] },
        { num: "10", testo: "Avviare l'App Global Service e accedere alla pagina del dispositivo Spyke.", immagini: ["img/cc-b3.jpg"] },
        { num: "11", testo: "Selezionare l'icona +, quindi l'icona Impostazioni.", nota: "queste icone non sono visibili all'utente base: è necessario richiedere i permessi aggiuntivi all'Assistenza Tecnica STEM.", immagini: ["img/cc-b4.jpg"] },
        { num: "12", testo: "Selezionare \"Abilita la programmazione Sherpa Slim\".", immagini: ["img/cc-b5.jpg"] },
        { num: "13", testo: "Riaccendere lo Sherpa Slim mediante l'interruttore I/O.", immagini: ["img/cc-b1.jpg"] },

        { fase: "Programmazione dal display dello Spyke", num: "14", testo: "Prima di iniziare, verificare che lo Spyke e il piano estraibile dell'EDEN04-XP siano in posizione di carico (piano estratto e alla corretta altezza di carico) e che lo Spyke sia agganciato alla cinghia dello Sherpa Slim.", immagini: ["img/cc-pre1.jpg", "img/cc-pre2.jpg"] },
        { num: "15", testo: "Accedere al menu \"Sherpa\" selezionando l'icona sul display.", immagini: ["img/cc-c1.jpg"] },
        { num: "16", testo: "Accedere al menu \"Cfg\" (Configurazione) per selezionare il supporto barella.", immagini: ["img/cc-c2.jpg"] },
        { num: "17", testo: "Selezionare \"Eden XP\" per il supporto EDEN04-XP e confermare con \"Set\".", immagini: ["img/cc-c3.jpg"] },
        { num: "18", testo: "Uscire con \"Exit\" e accedere nuovamente al menu \"Sherpa\"." },
        { num: "19", testo: "Accedere al menu \"Prog\" (Programmazione).", immagini: ["img/cc-c5.jpg"] },
        { num: "20", testo: "Primo punto: Spyke agganciato allo Sherpa Slim, di fronte all'EDEN04-XP, con piano estratto e alla corretta altezza di carico. Attivare le opzioni Carico, Scarico e Stop e selezionare \"Save\".", immagini: ["img/cc-c6.jpg"] },
        { num: "21", testo: "Caricare lo Spyke sull'EDEN04-XP tirando la leva verde e premendo il pulsante IN. Arrestare il caricamento con le ruote posteriori ancora esterne al pianale, per regolarle ed evitare che si incastrino." },
        { num: "22", testo: "Secondo punto (ruote posteriori ancora esterne al pianale): attivare le opzioni Carico e Stop e selezionare \"Save\".", nota: "con questo punto lo Sherpa Slim si arresta automaticamente, consentendo di bloccare l'oscillazione delle ruote posteriori prima di proseguire il caricamento.", immagini: ["img/cc-c8.jpg"] },
        { num: "23", testo: "Proseguire il caricamento dello Spyke fino al completo inserimento, tirando la leva verde e premendo il pulsante IN.", esito: "Barella agganciata correttamente: sul display compare il lucchetto verde «10g».", esitoIcona: "con" },
        { num: "24", testo: "Portare il piano estraibile dell'EDEN04-XP in posizione orizzontale mediante la freccia SU della pulsantiera lato piedi del supporto.", immagini: ["img/cc-c10.jpg"] },
        { num: "25", testo: "Terzo punto, fine programmazione: con lo Spyke completamente caricato e l'EDEN04-XP in posizione orizzontale, selezionare \"End\".", immagini: ["img/cc-c11.jpg"] },
        { num: "26", testo: "Programmazione completata: selezionare \"Exit\" per tornare alla schermata principale del display." }
      ]
    },
    {
      titolo: "Dopo la programmazione",
      sottotitolo: "Funzionamento dello Sherpa Slim e gestione dei supporti automatici e semiautomatici.",
      tipo: "avvisi",
      avvisi: [
        { tipo: "importante", titolo: "Funzionamento", testo: "Una volta programmato, lo Sherpa Slim opera sempre nello stesso modo: si arresta esclusivamente nelle posizioni memorizzate e secondo le modalità impostate durante la programmazione.\nL'operatore deve unicamente comandare le operazioni di carico e scarico mediante i comandi del dispositivo (vedere sezione 6)." },
        { tipo: "importante", titolo: "Supporti automatici e semiautomatici", testo: "Se la programmazione è stata eseguita con un supporto barella automatico o semiautomatico, come Eden-XP, R-3L e Compact-EL (tipologia impostata in \"Tipo di supporto\" dell'App Global Service), anche il movimento del piano porta barella è gestito dallo Sherpa Slim." },
        { tipo: "esempio", titolo: "Esempio 1 · Supporto automatico (Eden-XP)", testo: "Durante la programmazione, oltre alla posizione della cinghia dello Sherpa Slim, viene memorizzata anche l'altezza del piano porta barella: in funzionamento, lo Sherpa Slim porta il piano all'altezza memorizzata per ciascun punto.\nÈ possibile regolare manualmente il supporto a un'altezza diversa: la regolazione manuale rimane attiva per un ciclo completo (fino al ritorno a zero della cinghia dello Sherpa Slim), dopodiché viene ripristinata la programmazione originale." },
        { tipo: "esempio", titolo: "Esempio 2 · Supporti semiautomatici (R-3L, Compact-EL)", testo: "Durante la programmazione è necessario memorizzare un punto finale \"virtuale\" prima dello \"zero\", selezionando unicamente l'opzione \"Salita\": corrisponde al momento in cui il piano deve tornare in posizione orizzontale. Normalmente coincide con il punto di sblocco delle gambe lato piedi (ma può essere anche un punto successivo).\nÈ quindi possibile programmare lo stesso punto due volte senza movimentare la barella: la prima con le opzioni desiderate (normalmente tutte e tre: \"Salita\", \"Discesa\" e \"Ferma\"), la seconda con la sola opzione \"Salita\". In questo modo, durante il carico, dopo lo sblocco delle gambe lato piedi e alla ripresa del caricamento, anche il piano porta barella torna in posizione orizzontale." }
      ]
    }
  ]
});
