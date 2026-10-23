// EDEN-BS8 — English translation (official source: eden-bs8-en-r01, §5.5 Adjustments)

registraTraduzione("eden-bs8", "en", {
  descrizione: "Adjustments from the control panel: automatic learning, horizontal position, suspension height and loading tilt.",
  fonte: "EDEN-BS8 manual R01 · §5.5 Adjustments",
  sezioni: [
    {
      titolo: "Automatic learning",
      sottotitolo: "Detection of the mechanical limit switches and of the stretcher tray movement limits.",
      condizioni: [{ testo: "No stretcher attached to the stretcher tray" }],
      passi: [{ testo: "Start the automatic self-learning cycle of the stretcher tray." }],
      attenzione: "Pressing any button during the learning cycle stops it."
    },
    {
      titolo: "Horizontal position",
      sottotitolo: "Saving the horizontal position of the stretcher tray.",
      condizioni: [{ testo: "Stretcher attached to the stretcher tray" }, { testo: "Stretcher tray in the lower horizontal position" }],
      passi: [{ testo: "Save the horizontal position.", esito: "Audible signal: horizontal position saved." }]
    },
    {
      titolo: "Suspension height",
      sottotitolo: "Setting and saving the suspension height (200–220 mm).",
      condizioni: [{ testo: "Stretcher attached to the stretcher tray" }],
      passi: [
        { testo: "Reach a suspension height between 200 and 220 mm." },
        { testo: "Save the suspension height.", esito: "Audible signal: suspension height saved." }
      ]
    },
    {
      titolo: "Tilting for stretcher loading",
      sottotitolo: "Only for model EDEN-BS8 070, with Spark stretcher.",
      etichetta: "Only EDEN-BS8 070",
      condizioni: [{ testo: "No stretcher attached to the stretcher tray" }, { testo: "Stretcher tray in the lower horizontal position" }],
      passi: [
        { testo: "Enter manual mode, which allows the stretcher tray to be moved even without a stretcher." },
        { testo: "Tilt the stretcher tray until the SPARK-FS mouthpiece is 2 cm below the Spark sphere.", didascalia: "SPARK-FS mouthpiece 2 cm below the Spark sphere" },
        { testo: "Save the stretcher tray tilt.", esito: "Audible signal: tilt saved." },
        { testo: "To exit without saving the manual programming." }
      ]
    }
  ]
});
