// EDEN-BS8 — Traducción al español (fuente oficial: eden-bs8-es-r01, §5.5 Reglajes)

registraTraduzione("eden-bs8", "es", {
  descrizione: "Reglajes desde la botonera: autoaprendizaje, posición horizontal, altura de amortiguación e inclinación de carga.",
  fonte: "Manual EDEN-BS8 R01 · §5.5 Reglajes",
  nomiTasti: { "Stop": "Stop", "Orizzontale": "Horizontal", "Molleggio": "Amortiguación", "Freccia su": "Flecha arriba", "LED": "LED", "Piedi su": "Subir lado pies", "Testa su": "Subir lado cabeza", "Freccia giù": "Flecha abajo" },
  sezioni: [
    {
      titolo: "Autoaprendizaje",
      sottotitolo: "Detección de los finales de carrera mecánicos y de los límites de movimiento del plano.",
      condizioni: [{ testo: "Sin camilla fijada a la superficie" }],
      passi: [{ testo: "Inicie el ciclo de autoaprendizaje del plano." }],
      attenzione: "Al pulsar cualquier botón durante el ciclo de aprendizaje, este se detiene."
    },
    {
      titolo: "Posición horizontal",
      sottotitolo: "Memorización de la posición horizontal del plano porta camilla.",
      condizioni: [{ testo: "Con camilla fijada a la superficie" }, { testo: "Plano porta camilla en la posición horizontal inferior" }],
      passi: [{ testo: "Guarde la posición horizontal.", esito: "Señal acústica: posición horizontal guardada." }]
    },
    {
      titolo: "Altura de amortiguación",
      sottotitolo: "Ajuste y memorización de la altura de amortiguación (200–220 mm).",
      condizioni: [{ testo: "Con camilla fijada a la superficie" }],
      passi: [
        { testo: "Alcance una altura de amortiguación entre 200 y 220 mm." },
        { testo: "Memorice la altura de amortiguación.", esito: "Señal acústica: altura de amortiguación memorizada." }
      ]
    },
    {
      titolo: "Inclinación de carga",
      sottotitolo: "Solo para el modelo EDEN-BS8 070, con camilla Spark.",
      etichetta: "Solo EDEN-BS8 070",
      condizioni: [{ testo: "Sin camilla fijada a la superficie" }, { testo: "Plano porta camilla en la posición horizontal inferior" }],
      passi: [
        { testo: "Active el modo manual, que permite mover la mesa incluso sin camilla." },
        { testo: "Incline la mesa hasta que la boca del SPARK-FS quede 2 cm por debajo de la esfera Spark.", didascalia: "Boca del SPARK-FS 2 cm por debajo de la esfera Spark" },
        { testo: "Guarde la inclinación de la mesa.", esito: "Señal acústica: inclinación memorizada." },
        { testo: "Para salir sin guardar la programación manual." }
      ]
    }
  ]
});
