// R-3L XP — Traduction française
// Contient UNIQUEMENT les textes. Images, touches et structure viennent de dati.js.
// L'ordre des sections et des étapes doit être le même que dans dati.js.

registraTraduzione("r-3l-xp", "fr", {
  descrizione: "Réglages depuis le clavier de commande : auto-apprentissage et hauteur de chargement.",

  // Nom affiché des touches (la clé est le nom italien utilisé dans dati.js)
  nomiTasti: {
    "Auto su": "Auto haut",
    "Auto giù": "Auto bas",
    "Testa su": "Tête haut",
    "Testa giù": "Tête bas",
    "Piedi su": "Pieds haut",
    "Piedi giù": "Pieds bas"
  },

  sezioni: [
    {
      titolo: "Auto-apprentissage",
      sottotitolo: "Cycle d'auto-apprentissage du plateau.",
      condizioni: [
        { testo: "Plateau fermé" }
      ],
      passi: [
        { testo: "Lancer le cycle d'auto-apprentissage." }
      ]
    },
    {
      titolo: "Hauteur de chargement",
      sottotitolo: "Réglage et mémorisation de l'inclinaison du support pour le chargement.",
      passi: [
        { testo: "Sortir complètement le plateau extractible." },
        { testo: "Incliner le support jusqu'à la position souhaitée." },
        { testo: "Mémoriser la position." }
      ]
    }
  ]
});
