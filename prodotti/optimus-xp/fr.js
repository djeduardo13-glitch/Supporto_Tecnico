// OPTIMUS-XP — Traduction française (source officielle : optimus-xp-fr-r01, §5.5 Réglages)
registraTraduzione("optimus-xp", "fr", {
  descrizione: "Réglages depuis le pupitre et schéma électrique.",
  fonte: "Manuel OPTIMUS-XP R01 · §5.5 Réglages",
  nomiTasti: { "Molleggio": "Suspension", "Freccia su": "Flèche haut", "LED": "LED", "Freccia giù": "Flèche bas" },
  sezioni: [
    {
      titolo: "Auto-apprentissage des fins de course",
      sottotitolo: "Détection automatique de la fin de course haute et de la fin de course basse.",
      passi: [{
        testo: "Maintenir enfoncés simultanément les deux boutons jusqu'à l'émission d'un signal sonore et jusqu'à ce que la LED devienne jaune.",
        esito: "La table s'abaisse complètement puis se soulève complètement pour trouver les deux fins de course."
      }]
    },
    {
      titolo: "Hauteur de suspension",
      sottotitolo: "Réglage et mémorisation de la hauteur de suspension.",
      condizioni: [{ testo: "Valeur recommandée : 200 mm au total, mesurés du plateau en acier inoxydable au plancher" }],
      passi: [
        { testo: "Atteindre la hauteur de suspension souhaitée." },
        { testo: "Mémoriser la hauteur de suspension.", esito: "Signal sonore : hauteur de suspension mémorisée." }
      ]
    },
    {
      titolo: "Schéma électrique",
      sottotitolo: "Dessin N° SE000018 · Rév. 00 · Prog. PSL25-375 · Publié le 22/08/25",
      fogli: [
        { titolo: "Feuille 2", descrizione: "Raccordement des câbles : LED et capteurs" },
        { titolo: "Feuille 3", descrizione: "Câblage sur le châssis : centrale, moteur et connecteurs" },
        { titolo: "Feuille 4", descrizione: "Barres LED et capteurs sur le plateau" }
      ],
      file: [{ nome: "Schéma électrique Optimus-XP (PDF)" }]
    }
  ]
});
