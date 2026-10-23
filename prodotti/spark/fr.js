// SPARK — Traduction française
// Contient UNIQUEMENT les textes. Images et structure viennent de dati.js.
// L'ordre des sections et des étapes doit être le même que dans dati.js.

registraTraduzione("spark", "fr", {
  descrizione: "Mise à zéro de la machine et configuration de la hauteur de chargement depuis l'écran.",
  fonte: "Fiche d'instructions mise à zéro · IS000039 R00",

  sezioni: [
    {
      titolo: "Mise à zéro de la machine",
      sottotitolo: "Étalonnage du zéro des roues, de la zone tête et de la zone jambes.",
      condizioni: [
        { testo: "Code PIN d'accès : 151010" }
      ],
      passi: [
        { fase: "Accès à l'étalonnage", testo: "Appuyer simultanément sur les deux poignées et régler la hauteur à l'aide du levier HAUT/BAS." },
        { testo: "Abaisser complètement le plateau du Spark." },
        { testo: "Sélectionner l'icône Paramètres sur l'écran." },
        { testo: "Saisir le code PIN d'accès 151010 et sélectionner l'icône de confirmation." },
        { testo: "Dans l'écran des paramètres, sélectionner l'icône Maison." },
        { testo: "Dans l'écran d'accueil, sélectionner l'icône Mesure (compas)." },
        { testo: "L'écran d'étalonnage s'ouvre ; il permet d'effectuer la mise à zéro de chaque composant du Spark : les quatre roues, la zone tête et la zone jambes." },

        {
          fase: "Zéro des composants",
          notaFase: "Pour chaque composant : sélectionner l'icône correspondante et maintenir enfoncée la flèche vers le bas jusqu'à l'émission du signal sonore. Relâcher ensuite la flèche et désélectionner l'icône.",
          testo: "Jambes côté tête : sélectionner l'icône du buste et maintenir enfoncée la flèche vers le bas.",
          esito: "Signal sonore : mise à zéro terminée. Relâcher la flèche et désélectionner l'icône du buste."
        },
        { testo: "Jambes côté pieds : sélectionner l'icône des jambes et maintenir enfoncée la flèche vers le bas.", esito: "Signal sonore : mise à zéro terminée. Relâcher la flèche et désélectionner l'icône des jambes." },
        { testo: "Roue droite côté pieds : sélectionner l'icône de la roue et maintenir enfoncée la flèche vers le bas.", esito: "Signal sonore : mise à zéro terminée. Relâcher la flèche et désélectionner l'icône de la roue." },
        { testo: "Roue gauche côté pieds : sélectionner l'icône de la roue et maintenir enfoncée la flèche vers le bas.", esito: "Signal sonore : mise à zéro terminée. Relâcher la flèche et désélectionner l'icône de la roue." },
        { testo: "Roue gauche côté tête : sélectionner l'icône de la roue et maintenir enfoncée la flèche vers le bas.", esito: "Signal sonore : mise à zéro terminée. Relâcher la flèche et désélectionner l'icône de la roue." },
        { testo: "Roue droite côté tête : sélectionner l'icône de la roue et maintenir enfoncée la flèche vers le bas.", esito: "Signal sonore : mise à zéro terminée. Relâcher la flèche et désélectionner l'icône de la roue." },

        { fase: "Enregistrement et sortie", testo: "Désélectionner toutes les icônes et maintenir enfoncée l'icône Mesure (pied à coulisse) pour mémoriser les nouveaux paramètres." },
        { testo: "Sélectionner l'icône Maison pour revenir à l'écran principal." },
        { testo: "Sélectionner l'icône Ambulance." },
        { testo: "Sélectionner l'icône Engrenage." },
        { testo: "Sélectionner la flèche Retour." }
      ]
    },
    {
      titolo: "Hauteur de chargement",
      sottotitolo: "Réglage et mémorisation de la hauteur de chargement (IS000039).",
      condizioni: [
        { testo: "Cote requise : 20 mm entre la sphère de la tête gyroscopique et le fond du réceptacle" },
        { testo: "Code PIN d'accès : 151010" }
      ],
      passi: [
        { fase: "Réglage de la hauteur", testo: "Sortir complètement le réceptacle et l'ensemble glissière intermédiaire de l'ensemble glissière de base, en vérifiant qu'ils sont complètement décrochés." },
        { testo: "Appuyer simultanément sur les deux poignées et régler la hauteur à l'aide de la molette HAUT/BAS." },
        { testo: "Positionner le Spark à une hauteur permettant d'obtenir 20 mm entre la sphère de la tête gyroscopique et le fond du réceptacle." },

        { fase: "Enregistrement", testo: "Sélectionner le bouton Paramètres pour accéder au menu des paramètres." },
        { testo: "Saisir le code PIN d'accès 151010 et sélectionner le bouton de confirmation." },
        { testo: "Sélectionner le bouton Maison, puis le bouton Ambulance." },
        { testo: "Maintenir enfoncé le bouton Hauteur de chargement jusqu'à l'émission du signal sonore.", esito: "Signal sonore : hauteur de chargement mémorisée." },

        { fase: "Sortie", testo: "Sélectionner le bouton Engrenage pour revenir à la page d'accueil." },
        { testo: "Sélectionner la flèche Retour." }
      ]
    }
  ]
});
