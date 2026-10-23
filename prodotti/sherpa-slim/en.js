// SHERPA SLIM — English translation
// Sheet 1: official source (Sherpa Slim manual EN, §5.3.6 Device programming).
// Sheets 2 and 3: internal translation, unofficial (to be checked).

registraTraduzione("sherpa-slim", "en", {
  descrizione: "Programming the assisted loading system with the STEM Global Service app and the Spyke stretcher.",
  fonte: "SHERPA SLIM manual · §5.3.6 Device programming",
  sezioni: [
    {
      titolo: "Device programming",
      sottotitolo: "Learning the loading positions with the STEM Global Service app.",
      condizioni: [{ testo: "STEM Global Service app with Bluetooth and GPS enabled" }],
      attenzione: "During programming, the safety belt locking systems are disabled: pay particular attention to any sudden movements of the stretcher.",
      importante: ["The device is designed for 3 types of stretchers: two-control leg release (one control per leg), single-control leg release (one control for both legs) and automatic leg release."],
      passi: [
        { fase: "Preparation", testo: "Make sure that the support is adjusted to the correct stretcher loading height.", nota: "refer to the support manual." },
        { testo: "Place the stretcher on the ground, in front of the support." },
        { testo: "Place the stretcher support in loading/unloading position.", nota: "refer to the support manual." },
        { testo: "Switch on the device using the ON/OFF button (A).", esito: "Audible signal: device switched on.", immagini: ["img/en-s04.jpg"] },
        { testo: "Press the \"Down movement\" button on the push-button panel on the side of the stretcher support and unwind the belt until it reaches the stretcher.", nota: "during unwinding, the belt must be kept tensioned.", immagini: ["img/en-s05.jpg"] },
        { testo: "Connect the device belt to the stretcher.", nota: "refer to the section \"Connecting the stretcher to the device\"." },
        { fase: "Starting the learning", testo: "Open the STEM \"Global Service\" app and, once the scan for nearby devices is complete, select the Sherpa Slim to be programmed.", immagini: ["img/en-s07.jpg"] },
        { testo: "Select \"Programming mode\" and, from the \"Disabled\" status, choose \"Enable\".", immagini: ["img/en-s08.jpg"] },
        { testo: "Select \"Programming mode\" again (now \"Enabled\") and choose \"Start programming\".", esito: "Audible signal: the device enters \"Programming mode\". The ON/OFF button LED turns off and the red and green LEDs start flashing.", immagini: ["img/en-s09.jpg"] },
        { fase: "Storing the points", testo: "Move the stretcher to approximately 40 cm from the support.", nota: "the stretcher support must be in the loading position.", immagini: ["img/en-s10.jpg"] },
        { testo: "Select \"Save point\", enable the \"Ascent\", \"Descent\" and \"Stop\" options and confirm with \"Ok\".", esito: "Audible signal: point stored.", immagini: ["img/en-s11.jpg"] },
        { testo: "Using the device, lift the stretcher onto the support until the first leg is approximately 4 cm from the support edge.", immagini: ["img/en-s12.jpg"] },
        { testo: "Select \"Save point\", set the \"Ascent\", \"Descent\" and \"Stop\" options and confirm with \"Ok\".", esito: "Audible signal: point stored.", nota: "select the options according to the desired result: stopping the movement or only slowing it down (in that case DO NOT select \"Stop\"), only during loading, only during unloading or in both phases.", immagini: ["img/en-s13.jpg"] },
        { testo: "Continue lifting the stretcher until the second leg is approximately 4 cm from the support edge.", immagini: ["img/en-s14.jpg"] },
        { testo: "Select \"Save point\", set the \"Ascent\", \"Descent\" and \"Stop\" options and confirm with \"Ok\".", esito: "Audible signal: point stored.", nota: "using the same procedure, 9 more positions can be stored, for a total of 11 intermediate positions in addition to the start point (stretcher completely out, step 10) and the end point (stretcher fully loaded, step 16).", immagini: ["img/en-s15.jpg"] },
        { fase: "End of learning", testo: "Complete the lifting of the stretcher until it reaches the final locking position, then bring the stretcher support plane to the horizontal position.", immagini: ["img/en-s16.jpg"] },
        { testo: "Select \"End programming\".", esito: "Double audible signal and the red and green LEDs on the side of the device stop flashing: programming completed successfully.", nota: "the ON/OFF button LED indicates whether a programme is stored: on = learning completed and programme stored; off = no programme stored.", immagini: ["img/en-s17.jpg"] }
      ]
    },
    {
      titolo: "Complete Care programming",
      sottotitolo: "Spyke, Sherpa Slim and EDEN04-XP: settings from the app and programming from the Spyke display.",
      condizioni: [{ testo: "Additional Global Service app permissions (granted by STEM Technical Support)" }],
      importante: ["Spyke, Sherpa Slim and EDEN04-XP make up the integrated Complete Care system: stretcher support, assisted loading system and stretcher communicate with each other for synchronised loading and unloading operations."],
      passi: [
        { fase: "Settings from the Global Service app", testo: "Download and open the STEM Global Service app (available on the App Store and Google Play Store)." },
        { testo: "Access the Sherpa Slim device page (check the product serial number)." },
        { testo: "Select \"SUPPORT\" and choose \"AUTOMATIC\" for the EDEN04-XP stretcher support." },
        { testo: "Select \"STRETCHER\" and choose \"Spyke\".", nota: "this setting disables the Sherpa Slim buttons on the foot-side push-button panel of the support. It is mandatory, as loading and unloading with the Sherpa Slim must be controlled exclusively with the IN/OUT buttons on the Spyke display." },
        { testo: "Access the Spyke device page (check the product serial number)." },
        { testo: "Select \"SHERPA PAIRING\" and choose the Sherpa Slim detected by the scan." },
        { testo: "Check that the connection is correct: the word \"Sherpa\" on the Spyke display must be green." },
        { fase: "Enabling programming", notaFase: "The additional Global Service app permissions are required; they are granted exclusively by STEM S.r.l. Technical Support.", testo: "Switch off the Sherpa Slim using the I/O switch." },
        { testo: "Check that the Spyke stretcher display is on the main screen." },
        { testo: "Open the Global Service app and access the Spyke device page." },
        { testo: "Select the + icon, then the Settings icon.", nota: "these icons are not visible to the basic user: the additional permissions must be requested from STEM Technical Support." },
        { testo: "Select \"Enable Sherpa Slim programming\"." },
        { testo: "Switch the Sherpa Slim back on using the I/O switch." },
        { fase: "Programming from the Spyke display", testo: "Before starting, check that the Spyke and the EDEN04-XP extractable tray are in the loading position (tray extended and at the correct loading height) and that the Spyke is hooked to the Sherpa Slim belt." },
        { testo: "Access the \"Sherpa\" menu by selecting the icon on the display." },
        { testo: "Access the \"Cfg\" (Configuration) menu to select the stretcher support." },
        { testo: "Select \"Eden XP\" for the EDEN04-XP support and confirm with \"Set\"." },
        { testo: "Exit with \"Exit\" and access the \"Sherpa\" menu again." },
        { testo: "Access the \"Prog\" (Programming) menu." },
        { testo: "First point: Spyke hooked to the Sherpa Slim, in front of the EDEN04-XP, with the tray extended and at the correct loading height. Enable the Load, Unload and Stop options and select \"Save\"." },
        { testo: "Load the Spyke onto the EDEN04-XP by pulling the green lever and pressing the IN button. Stop loading while the rear wheels are still outside the platform, in order to adjust them and prevent them from getting stuck." },
        { testo: "Second point (rear wheels still outside the platform): enable the Load and Stop options and select \"Save\".", nota: "with this point the Sherpa Slim stops automatically, allowing the swivel of the rear wheels to be locked before loading continues." },
        { testo: "Continue loading the Spyke until it is fully inserted, pulling the green lever and pressing the IN button.", esito: "Stretcher correctly hooked: the green «10g» padlock appears on the display." },
        { testo: "Bring the EDEN04-XP extractable tray to the horizontal position using the UP arrow on the foot-side push-button panel of the support." },
        { testo: "Third point, end of programming: with the Spyke fully loaded and the EDEN04-XP in the horizontal position, select \"End\"." },
        { testo: "Programming completed: select \"Exit\" to return to the main screen of the display." }
      ]
    },
    {
      titolo: "After programming",
      sottotitolo: "Sherpa Slim operation and management of automatic and semi-automatic supports.",
      avvisi: [
        { titolo: "Operation", testo: "Once programmed, the Sherpa Slim always operates in the same way: it stops exclusively at the stored positions and according to the modes set during programming.\nThe operator only has to control loading and unloading operations using the device controls (see section 6)." },
        { titolo: "Automatic and semi-automatic supports", testo: "If programming was carried out with an automatic or semi-automatic stretcher support, such as Eden-XP, R-3L and Compact-EL (type set in \"Support type\" in the Global Service app), the movement of the stretcher support plane is also managed by the Sherpa Slim." },
        { titolo: "Example 1 · Automatic support (Eden-XP)", testo: "During programming, in addition to the position of the Sherpa Slim belt, the height of the stretcher support plane is also stored: in operation, the Sherpa Slim brings the plane to the height stored for each point.\nThe support can be manually adjusted to a different height: the manual adjustment remains active for one complete cycle (until the Sherpa Slim belt returns to zero), after which the original programming is restored." },
        { titolo: "Example 2 · Semi-automatic supports (R-3L, Compact-EL)", testo: "During programming, a \"virtual\" end point must be stored before the \"zero\", selecting the \"Ascent\" option only: it corresponds to the moment when the plane must return to the horizontal position. It normally coincides with the release point of the foot-side legs (but it can also be a later point).\nThe same point can therefore be programmed twice without moving the stretcher: the first time with the desired options (normally all three: \"Ascent\", \"Descent\" and \"Stop\"), the second time with the \"Ascent\" option only. In this way, during loading, after the foot-side legs are released and loading resumes, the stretcher support plane also returns to the horizontal position." }
      ]
    }
  ]
});
