// SPARK — English translation (internal, unofficial: to be checked)
registraTraduzione("spark", "en", {
  descrizione: "Machine zeroing and loading height configuration from the display.",
  fonte: "Machine zero instruction sheet · IS000039 R00",
  sezioni: [
    {
      titolo: "Machine zeroing",
      sottotitolo: "Zero calibration of wheels, head area and legs area.",
      condizioni: [{ testo: "Access PIN: 151010" }],
      passi: [
        { fase: "Access to calibration", testo: "Press both handles simultaneously and adjust the height using the UP/DOWN lever." },
        { testo: "Lower the Spark platform completely." },
        { testo: "Select the Settings icon on the display." },
        { testo: "Enter the access PIN 151010 and select the confirm icon." },
        { testo: "In the parameters screen, select the Home icon." },
        { testo: "In the Home screen, select the Measure icon (compass)." },
        { testo: "The calibration screen opens, from which each component of the Spark can be zeroed: the four wheels, the head area and the legs area." },
        { fase: "Zeroing the components", notaFase: "For each component: select the corresponding icon and hold down the Down arrow until the audible signal is emitted. Then release the arrow and deselect the icon.", testo: "Head-side legs: select the torso icon and hold down the Down arrow.", esito: "Audible signal: zeroing completed. Release the arrow and deselect the torso icon." },
        { testo: "Foot-side legs: select the legs icon and hold down the Down arrow.", esito: "Audible signal: zeroing completed. Release the arrow and deselect the legs icon." },
        { testo: "Right wheel, foot side: select the wheel icon and hold down the Down arrow.", esito: "Audible signal: zeroing completed. Release the arrow and deselect the wheel icon." },
        { testo: "Left wheel, foot side: select the wheel icon and hold down the Down arrow.", esito: "Audible signal: zeroing completed. Release the arrow and deselect the wheel icon." },
        { testo: "Left wheel, head side: select the wheel icon and hold down the Down arrow.", esito: "Audible signal: zeroing completed. Release the arrow and deselect the wheel icon." },
        { testo: "Right wheel, head side: select the wheel icon and hold down the Down arrow.", esito: "Audible signal: zeroing completed. Release the arrow and deselect the wheel icon." },
        { fase: "Saving and exit", testo: "Deselect all icons and hold down the Measure icon (caliper) to store the new parameters." },
        { testo: "Select the Home icon to return to the main screen." },
        { testo: "Select the Ambulance icon." },
        { testo: "Select the Gear icon." },
        { testo: "Select the Back arrow." }
      ]
    },
    {
      titolo: "Loading height",
      sottotitolo: "Adjusting and storing the loading height (IS000039).",
      condizioni: [{ testo: "Required dimension: 20 mm between the gyroscopic head sphere and the bottom of the receptacle" }, { testo: "Access PIN: 151010" }],
      passi: [
        { fase: "Height adjustment", testo: "Fully pull out the receptacle and the intermediate slide assembly from the base slide assembly, checking that they are completely released." },
        { testo: "Press both handles simultaneously and adjust the height using the UP/DOWN thumbwheel." },
        { testo: "Position the Spark at a height that gives 20 mm between the gyroscopic head sphere and the bottom of the receptacle." },
        { fase: "Saving", testo: "Select the Settings button to access the parameters menu." },
        { testo: "Enter the access PIN 151010 and select the confirm button." },
        { testo: "Select the Home button and then the Ambulance button." },
        { testo: "Hold down the Loading height button until the audible signal is emitted.", esito: "Audible signal: loading height stored." },
        { fase: "Exit", testo: "Select the Gear button to return to the start page." },
        { testo: "Select the Back arrow." }
      ]
    }
  ]
});
