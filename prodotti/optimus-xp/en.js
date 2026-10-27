// OPTIMUS-XP — English translation (official source: optimus-xp-en-r01, §5.5 Adjustments)
registraTraduzione("optimus-xp", "en", {
  descrizione: "Adjustments from the control panel and wiring diagram.",
  fonte: "OPTIMUS-XP manual R01 · §5.5 Adjustments",
  nomiTasti: { "Molleggio": "Suspension", "Freccia su": "Up arrow", "LED": "LED", "Freccia giù": "Down arrow" },
  sezioni: [
    {
      titolo: "Automatic learning of end stops",
      sottotitolo: "Full downward and then upward travel to detect the lower and upper end stops.",
      condizioni: [{ testo: "No stretcher attached" }],
      passi: [{
        testo: "Start the automatic learning cycle.",
        esito: "Audible signal and yellow LED on: automatic learning cycle started."
      }]
    },
    {
      titolo: "Suspension height",
      sottotitolo: "Setting and storing the suspension height.",
      condizioni: [{ testo: "Recommended value: 200 mm total, measured from the stainless steel platform to the floor" }],
      passi: [
        { testo: "Reach the desired suspension height." },
        { testo: "Store the suspension height.", esito: "Audible signal: suspension height stored." }
      ]
    },
    {
      titolo: "Wiring diagram",
      sottotitolo: "Dwg. No. SE000018 · Rev. 00 · Prog. PSL25-375 · Released 22/08/25",
      fogli: [
        { titolo: "Sheet 2", descrizione: "Cable connections: LEDs and sensors" },
        { titolo: "Sheet 3", descrizione: "Wiring on the frame: control unit, motor and connectors" },
        { titolo: "Sheet 4", descrizione: "LED bars and sensors on the platform" }
      ],
      file: [{ nome: "Optimus-XP wiring diagram (PDF)" }]
    }
  ]
});
