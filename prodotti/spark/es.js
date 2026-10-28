// SPARK — Traducción al español (traducción interna, no oficial: pendiente de revisión)
registraTraduzione("spark", "es", {
  descrizione: "Puesta a cero de la máquina y configuración de la altura de carga desde la pantalla.",
  fonte: "Hoja de instrucciones puesta a cero · IS000039 R00",
  sezioni: [
    {
      titolo: "Puesta a cero de la máquina",
      sottotitolo: "Calibración del cero de ruedas, zona de cabeza y zona de piernas.",
      condizioni: [{ testo: "PIN de acceso: 151010" }],
      passi: [
        { fase: "Acceso a la calibración", testo: "Pulse simultáneamente las dos empuñaduras y ajuste la altura mediante la palanca SUBIR/BAJAR." },
        { testo: "Baje completamente el plano del Spark." },
        { testo: "Seleccione el icono Ajustes en la pantalla." },
        { testo: "Introduzca el PIN de acceso 151010 y seleccione el icono de confirmación." },
        { testo: "En la pantalla de parámetros, seleccione el icono Casa." },
        { testo: "En la pantalla de inicio, seleccione el icono Medida (compás)." },
        { testo: "Se abre la pantalla de calibración, desde la que se puede realizar la puesta a cero de cada componente del Spark: las cuatro ruedas, la zona de la cabeza y la zona de las piernas." },
        { fase: "Cero de los componentes", notaFase: "Para cada componente: seleccione el icono correspondiente y mantenga pulsada la flecha hacia abajo hasta que se emita la señal acústica. A continuación, suelte la flecha y deseleccione el icono.", testo: "Patas lado cabeza: seleccione el icono del torso y mantenga pulsada la flecha hacia abajo.", esito: "Señal acústica: puesta a cero completada. Suelte la flecha y deseleccione el icono del torso." },
        { testo: "Patas lado pies: seleccione el icono de las piernas y mantenga pulsada la flecha hacia abajo.", esito: "Señal acústica: puesta a cero completada. Suelte la flecha y deseleccione el icono de las piernas." },
        { testo: "Rueda derecha lado pies: seleccione el icono de la rueda y mantenga pulsada la flecha hacia abajo.", esito: "Señal acústica: puesta a cero completada. Suelte la flecha y deseleccione el icono de la rueda." },
        { testo: "Rueda izquierda lado pies: seleccione el icono de la rueda y mantenga pulsada la flecha hacia abajo.", esito: "Señal acústica: puesta a cero completada. Suelte la flecha y deseleccione el icono de la rueda." },
        { testo: "Rueda izquierda lado cabeza: seleccione el icono de la rueda y mantenga pulsada la flecha hacia abajo.", esito: "Señal acústica: puesta a cero completada. Suelte la flecha y deseleccione el icono de la rueda." },
        { testo: "Rueda derecha lado cabeza: seleccione el icono de la rueda y mantenga pulsada la flecha hacia abajo.", esito: "Señal acústica: puesta a cero completada. Suelte la flecha y deseleccione el icono de la rueda." },
        { fase: "Guardado y salida", testo: "Deseleccione todos los iconos y mantenga pulsado el icono Medida (calibre) para memorizar los nuevos parámetros." },
        { testo: "Seleccione el icono Casa para volver a la pantalla principal." },
        { testo: "Seleccione el icono Ambulancia." },
        { testo: "Seleccione el icono Engranaje." },
        { testo: "Seleccione la flecha Atrás." }
      ]
    },
    {
      titolo: "Altura de carga",
      sottotitolo: "Ajuste y memorización de la altura de carga (IS000039).",
      condizioni: [{ testo: "Cota requerida: 20 mm entre la esfera de la cabeza giroscópica y el fondo del receptáculo" }, { testo: "PIN de acceso: 151010" }],
      passi: [
        { fase: "Ajuste de la altura", testo: "Extraiga completamente el receptáculo y el conjunto de corredera intermedia del conjunto de corredera base, comprobando que estén completamente desenganchados." },
        { testo: "Pulse simultáneamente las dos empuñaduras y ajuste la altura mediante la ruedecilla SUBIR/BAJAR." },
        { testo: "Coloque el Spark a una altura que permita obtener 20 mm entre la esfera de la cabeza giroscópica y el fondo del receptáculo." },
        { fase: "Guardado", testo: "Seleccione el botón Ajustes para acceder al menú de parámetros." },
        { testo: "Introduzca el PIN de acceso 151010 y seleccione el botón de confirmación." },
        { testo: "Seleccione el botón Casa y, a continuación, el botón Ambulancia." },
        { testo: "Mantenga pulsado el botón Altura de carga hasta que se emita la señal acústica.", esito: "Señal acústica: altura de carga memorizada." },
        { fase: "Salida", testo: "Seleccione el botón Engranaje para volver a la página de inicio." },
        { testo: "Seleccione la flecha Atrás." }
      ]
    },
    {
      titolo: "Pies",
      sottotitolo: "Kits de montaje de los pies: lado cabeza y lado pies.",
      ricambi: [
        { nome: "Kit de montaje del pie lado cabeza", lato: "Lado cabeza", nota: "Lado opuesto a la pantalla · pie sin palanca" },
        { nome: "Kit de montaje del pie lado pies", lato: "Lado pies", nota: "Lado de la pantalla · pie con palanca" }
      ]
    }
  ]
});
