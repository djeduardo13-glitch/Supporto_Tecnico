// EDEN-BS8 — Traduction française (source officielle : eden-bs8-fr-r01, §5.5 Réglages)
// Contient UNIQUEMENT les textes. Images, touches et structure viennent de dati.js.

registraTraduzione("eden-bs8", "fr", {
  descrizione: "Réglages depuis le pupitre : auto-apprentissage, position horizontale, hauteur de suspension et inclinaison du chargement.",
  fonte: "Manuel EDEN-BS8 R01 · §5.5 Réglages",
  sezioni: [
    {
      titolo: "Auto-apprentissage",
      sottotitolo: "Détection des interrupteurs de fin de course mécaniques et des limites de mouvement du plateau.",
      condizioni: [{ testo: "Sans brancard fixé au plateau" }],
      passi: [{ testo: "Lancer le cycle d'auto-apprentissage du plateau." }],
      attenzione: "Appuyer sur n'importe quel bouton pendant le cycle d'apprentissage l'interrompt."
    },
    {
      titolo: "Position horizontale",
      sottotitolo: "Mémorisation de la position horizontale du plateau porte-brancard.",
      condizioni: [{ testo: "Avec brancard fixé au plateau" }, { testo: "Plateau porte-brancard en position horizontale basse" }],
      passi: [{ testo: "Enregistrer la position horizontale.", esito: "Signal sonore : position horizontale mémorisée." }]
    },
    {
      titolo: "Hauteur de suspension",
      sottotitolo: "Réglage et mémorisation de la hauteur de suspension (200–220 mm).",
      condizioni: [{ testo: "Avec brancard fixé au plateau" }],
      passi: [
        { testo: "Atteindre une hauteur de suspension comprise entre 200 et 220 mm." },
        { testo: "Mémoriser la hauteur de suspension.", esito: "Signal sonore : hauteur de suspension mémorisée." }
      ]
    },
    {
      titolo: "Inclinaison du chargement",
      sottotitolo: "Uniquement pour le modèle EDEN-BS8 070, avec brancard Spark.",
      etichetta: "Uniquement EDEN-BS8 070",
      condizioni: [{ testo: "Sans brancard fixé au plateau" }, { testo: "Plateau porte-brancard en position horizontale basse" }],
      passi: [
        { testo: "Passer en mode manuel, qui permet de déplacer le plateau même sans brancard." },
        { testo: "Incliner le plateau jusqu'à ce que l'embout du SPARK-FS soit à 2 cm sous la sphère Spark.", didascalia: "Embout du SPARK-FS 2 cm sous la sphère Spark" },
        { testo: "Enregistrer l'inclinaison du plateau.", esito: "Signal sonore : inclinaison mémorisée." },
        { testo: "Pour quitter sans enregistrer la programmation manuelle effectuée." }
      ]
    }
  ]
});
