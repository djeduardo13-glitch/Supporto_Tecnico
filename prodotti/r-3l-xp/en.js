// R-3L XP — English translation (internal, unofficial: to be checked)
registraTraduzione("r-3l-xp", "en", {
  descrizione: "Adjustments from the control panel: automatic learning and loading height.",
  nomiTasti: { "Auto su": "Auto up", "Auto giù": "Auto down", "Testa su": "Head up", "Testa giù": "Head down", "Piedi su": "Feet up", "Piedi giù": "Feet down" },
  sezioni: [
    {
      titolo: "Automatic learning",
      sottotitolo: "Automatic learning cycle of the platform.",
      condizioni: [{ testo: "No stretcher attached" }, { testo: "Platform closed" }],
      passi: [{ testo: "Start the automatic learning cycle." }]
    },
    {
      titolo: "Loading height",
      sottotitolo: "Setting and storing the support tilt for loading.",
      condizioni: [{ testo: "No stretcher attached" }],
      passi: [
        { testo: "Fully extend the extractable tray." },
        { testo: "Tilt the support to the desired position." },
        { testo: "Store the position." }
      ]
    }
  ]
});
