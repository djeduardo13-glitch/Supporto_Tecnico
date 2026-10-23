// SHERPA SLIM — Traduction française
// Fiche 1 : source officielle (manuel Sherpa Slim FR, §5.3.6 Programmation du dispositif).
// Fiches 2 et 3 : traduction interne, non officielle (à vérifier).

registraTraduzione("sherpa-slim", "fr", {
  descrizione: "Programmation du système de chargement assisté avec l'application STEM Global Service et le brancard Spyke.",
  fonte: "Manuel SHERPA SLIM · §5.3.6 Programmation du dispositif",
  sezioni: [
    {
      titolo: "Programmation du dispositif",
      sottotitolo: "Apprentissage des positions de chargement avec l'application STEM Global Service.",
      condizioni: [{ testo: "Application STEM Global Service avec Bluetooth et GPS activés" }],
      attenzione: "Pendant la programmation, les systèmes de verrouillage de sécurité de la sangle sont désactivés : prêter une attention particulière à tout mouvement brusque du brancard.",
      importante: ["Le dispositif est conçu pour 3 types de brancards : déverrouillage des jambes à deux commandes (une commande par jambe), déverrouillage des jambes à une commande (une commande pour les deux jambes) et déverrouillage automatique des jambes."],
      passi: [
        { fase: "Préparation", testo: "Vérifier que le support est réglé à la bonne hauteur de chargement par rapport au brancard.", nota: "se reporter au manuel du support." },
        { testo: "Poser le brancard au sol, devant le support." },
        { testo: "Placer le support de brancard en position de chargement/déchargement.", nota: "se reporter au manuel du support." },
        { testo: "Allumer le dispositif à l'aide du bouton ON/OFF (A).", esito: "Signal sonore : dispositif allumé.", immagini: ["img/fr-s04.jpg"] },
        { testo: "Appuyer sur le bouton « Descente » du panneau de contrôle situé sur le côté du support de brancard et dérouler la sangle jusqu'à atteindre le brancard.", nota: "pendant le déroulement, la sangle doit être maintenue tendue.", immagini: ["img/fr-s05.jpg"] },
        { testo: "Connecter la sangle du dispositif au brancard.", nota: "se reporter au paragraphe « Raccordement du brancard au dispositif »." },
        { fase: "Démarrage de l'apprentissage", testo: "Ouvrir l'application STEM « Global Service » et, une fois la recherche des appareils à proximité terminée, sélectionner le Sherpa Slim à programmer.", immagini: ["img/fr-s07.jpg"] },
        { testo: "Sélectionner « Mode programmation » et, depuis l'état « Désactivé », choisir « Activer ».", immagini: ["img/fr-s08.jpg"] },
        { testo: "Sélectionner à nouveau « Mode programmation » (désormais « Activé ») et choisir « Démarrer programmation ».", esito: "Signal sonore : le dispositif passe en mode « Programmation ». La LED du bouton ON/OFF s'éteint et les LED rouge et verte commencent à clignoter.", immagini: ["img/fr-s09.jpg"] },
        { fase: "Mémorisation des points", testo: "Amener le brancard à environ 40 cm du support.", nota: "le support de brancard doit être en position de chargement.", immagini: ["img/fr-s10.jpg"] },
        { testo: "Sélectionner « Enregistrer le point », activer les options « Montée », « Descente » et « Arrêt » et confirmer avec « OK ».", esito: "Signal sonore : point mémorisé.", immagini: ["img/fr-s11.jpg"] },
        { testo: "À l'aide du dispositif, faire remonter le brancard sur son support jusqu'à ce que la première jambe se trouve à environ 4 cm du bord du support.", immagini: ["img/fr-s12.jpg"] },
        { testo: "Sélectionner « Enregistrer le point », définir les options « Montée », « Descente » et « Arrêt » et confirmer avec « OK ».", esito: "Signal sonore : point mémorisé.", nota: "sélectionner les options en fonction du résultat souhaité : arrêt du mouvement ou simple ralentissement (dans ce cas, NE PAS sélectionner « Arrêt »), uniquement au chargement, uniquement au déchargement ou dans les deux phases.", immagini: ["img/fr-s13.jpg"] },
        { testo: "Poursuivre la remontée du brancard jusqu'à ce que la deuxième jambe se trouve à environ 4 cm du bord du support.", immagini: ["img/fr-s14.jpg"] },
        { testo: "Sélectionner « Enregistrer le point », définir les options « Montée », « Descente » et « Arrêt » et confirmer avec « OK ».", esito: "Signal sonore : point mémorisé.", nota: "selon la même procédure, il est possible de mémoriser 9 positions supplémentaires, soit au total 11 positions intermédiaires en plus du point de départ (brancard complètement sorti, étape 10) et du point d'arrivée (brancard entièrement chargé, étape 16).", immagini: ["img/fr-s15.jpg"] },
        { fase: "Fin de l'apprentissage", testo: "Terminer la remontée du brancard jusqu'à la position finale de verrouillage, puis mettre le plan du support de brancard en position horizontale.", immagini: ["img/fr-s16.jpg"] },
        { testo: "Sélectionner « Terminer programmation ».", esito: "Double signal sonore et arrêt du clignotement des LED rouge et verte sur le côté du dispositif : programmation terminée avec succès.", nota: "la LED du bouton ON/OFF indique la présence d'une programmation en mémoire : allumée = apprentissage terminé et programmation mémorisée ; éteinte = aucune programmation présente.", immagini: ["img/fr-s17.jpg"] }
      ]
    },
    {
      titolo: "Programmation Complete Care",
      sottotitolo: "Spyke, Sherpa Slim et EDEN04-XP : réglages depuis l'application et programmation depuis l'écran du Spyke.",
      condizioni: [{ testo: "Autorisations supplémentaires de l'application Global Service (accordées par l'Assistance technique STEM)" }],
      importante: ["Spyke, Sherpa Slim et EDEN04-XP forment le système intégré Complete Care : support de brancard, système de chargement assisté et brancard communiquent entre eux pour des opérations de chargement et de déchargement synchronisées."],
      passi: [
        { fase: "Réglages depuis l'application Global Service", testo: "Télécharger et ouvrir l'application STEM Global Service (disponible sur l'App Store et le Google Play Store)." },
        { testo: "Accéder à la page du dispositif Sherpa Slim (vérifier le numéro de série du produit)." },
        { testo: "Sélectionner « SUPPORT » et choisir « AUTOMATIQUE » pour le support de brancard EDEN04-XP." },
        { testo: "Sélectionner « BRANCARD » et choisir « Spyke ».", nota: "ce réglage désactive les boutons du Sherpa Slim sur le pupitre côté pieds du support. Il est obligatoire, car le chargement et le déchargement avec le Sherpa Slim doivent être commandés exclusivement par les boutons IN/OUT de l'écran du Spyke." },
        { testo: "Accéder à la page du dispositif Spyke (vérifier le numéro de série du produit)." },
        { testo: "Sélectionner « ASSOCIATION SHERPA » et choisir le Sherpa Slim détecté par la recherche." },
        { testo: "Vérifier que la connexion est correcte : l'inscription « Sherpa » sur l'écran du Spyke doit être de couleur verte." },
        { fase: "Activation de la programmation", notaFase: "Les autorisations supplémentaires de l'application Global Service sont nécessaires ; elles sont accordées exclusivement par l'Assistance technique de STEM S.r.l.", testo: "Éteindre le Sherpa Slim à l'aide de l'interrupteur I/O." },
        { testo: "Vérifier que l'écran du brancard Spyke affiche l'écran principal." },
        { testo: "Ouvrir l'application Global Service et accéder à la page du dispositif Spyke." },
        { testo: "Sélectionner l'icône +, puis l'icône Paramètres.", nota: "ces icônes ne sont pas visibles pour l'utilisateur de base : il est nécessaire de demander les autorisations supplémentaires à l'Assistance technique STEM." },
        { testo: "Sélectionner « Activer la programmation Sherpa Slim »." },
        { testo: "Rallumer le Sherpa Slim à l'aide de l'interrupteur I/O." },
        { fase: "Programmation depuis l'écran du Spyke", testo: "Avant de commencer, vérifier que le Spyke et le plateau sortant de l'EDEN04-XP sont en position de chargement (plateau sorti et à la bonne hauteur de chargement) et que le Spyke est accroché à la sangle du Sherpa Slim." },
        { testo: "Accéder au menu « Sherpa » en sélectionnant l'icône sur l'écran." },
        { testo: "Accéder au menu « Cfg » (Configuration) pour sélectionner le support de brancard." },
        { testo: "Sélectionner « Eden XP » pour le support EDEN04-XP et confirmer avec « Set »." },
        { testo: "Quitter avec « Exit » et accéder de nouveau au menu « Sherpa »." },
        { testo: "Accéder au menu « Prog » (Programmation)." },
        { testo: "Premier point : Spyke accroché au Sherpa Slim, devant l'EDEN04-XP, plateau sorti et à la bonne hauteur de chargement. Activer les options Chargement, Déchargement et Stop et sélectionner « Save »." },
        { testo: "Charger le Spyke sur l'EDEN04-XP en tirant le levier vert et en appuyant sur le bouton IN. Arrêter le chargement lorsque les roues arrière sont encore hors du plancher, afin de les régler et d'éviter qu'elles ne se coincent." },
        { testo: "Deuxième point (roues arrière encore hors du plancher) : activer les options Chargement et Stop et sélectionner « Save ».", nota: "avec ce point, le Sherpa Slim s'arrête automatiquement, ce qui permet de bloquer l'orientation des roues arrière avant de poursuivre le chargement." },
        { testo: "Poursuivre le chargement du Spyke jusqu'à son insertion complète, en tirant le levier vert et en appuyant sur le bouton IN.", esito: "Brancard correctement accroché : le cadenas vert « 10g » apparaît sur l'écran." },
        { testo: "Mettre le plateau sortant de l'EDEN04-XP en position horizontale à l'aide de la flèche HAUT du pupitre côté pieds du support." },
        { testo: "Troisième point, fin de la programmation : avec le Spyke entièrement chargé et l'EDEN04-XP en position horizontale, sélectionner « End »." },
        { testo: "Programmation terminée : sélectionner « Exit » pour revenir à l'écran principal." }
      ]
    },
    {
      titolo: "Après la programmation",
      sottotitolo: "Fonctionnement du Sherpa Slim et gestion des supports automatiques et semi-automatiques.",
      avvisi: [
        { titolo: "Fonctionnement", testo: "Une fois programmé, le Sherpa Slim fonctionne toujours de la même manière : il s'arrête exclusivement aux positions mémorisées et selon les modes définis pendant la programmation.\nL'opérateur doit uniquement commander les opérations de chargement et de déchargement à l'aide des commandes du dispositif (voir la section 6)." },
        { titolo: "Supports automatiques et semi-automatiques", testo: "Si la programmation a été effectuée avec un support de brancard automatique ou semi-automatique, comme Eden-XP, R-3L et Compact-EL (type défini dans « Type de support » de l'application Global Service), le mouvement du plan porte-brancard est également géré par le Sherpa Slim." },
        { titolo: "Exemple 1 · Support automatique (Eden-XP)", testo: "Pendant la programmation, en plus de la position de la sangle du Sherpa Slim, la hauteur du plan porte-brancard est également mémorisée : en fonctionnement, le Sherpa Slim amène le plan à la hauteur mémorisée pour chaque point.\nIl est possible de régler manuellement le support à une hauteur différente : le réglage manuel reste actif pendant un cycle complet (jusqu'au retour à zéro de la sangle du Sherpa Slim), après quoi la programmation d'origine est rétablie." },
        { titolo: "Exemple 2 · Supports semi-automatiques (R-3L, Compact-EL)", testo: "Pendant la programmation, il est nécessaire de mémoriser un point final « virtuel » avant le « zéro », en sélectionnant uniquement l'option « Montée » : il correspond au moment où le plan doit revenir en position horizontale. Il coïncide normalement avec le point de déverrouillage des jambes côté pieds (mais il peut également s'agir d'un point ultérieur).\nIl est donc possible de programmer deux fois le même point sans déplacer le brancard : la première fois avec les options souhaitées (normalement les trois : « Montée », « Descente » et « Arrêt »), la seconde avec la seule option « Montée ». Ainsi, pendant le chargement, après le déverrouillage des jambes côté pieds et à la reprise du chargement, le plan porte-brancard revient lui aussi en position horizontale." }
      ]
    }
  ]
});
