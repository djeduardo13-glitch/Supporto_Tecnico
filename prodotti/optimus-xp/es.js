// OPTIMUS-XP — Traducción al español (fuente oficial: optimus-xp-es-r01, §5.5 Regulaciones)
registraTraduzione("optimus-xp", "es", {
  descrizione: "Regulaciones desde la botonera y esquema eléctrico.",
  fonte: "Manual OPTIMUS-XP R01 · §5.5 Regulaciones",
  nomiTasti: { "Molleggio": "Amortiguación", "Freccia su": "Flecha arriba", "LED": "LED", "Freccia giù": "Flecha abajo" },
  sezioni: [
    {
      titolo: "Autoaprendizaje de los finales de carrera",
      sottotitolo: "Detección automática del final de carrera alto y del final de carrera bajo.",
      passi: [{
        testo: "Mantenga pulsados simultáneamente los dos botones hasta que se emita una señal acústica y el led se ponga amarillo.",
        esito: "El soporte baja completamente y luego se eleva completamente para ubicar los dos finales de carrera."
      }]
    },
    {
      titolo: "Altura de amortiguación",
      sottotitolo: "Ajuste y memorización de la altura de amortiguación.",
      condizioni: [{ testo: "Valor recomendado: 200 mm en total, medidos desde la superficie de acero inoxidable hasta el suelo" }],
      passi: [
        { testo: "Alcance la altura de amortiguación deseada." },
        { testo: "Memorice la altura de amortiguación.", esito: "Señal acústica: altura de amortiguación memorizada." }
      ]
    },
    {
      titolo: "Esquema eléctrico",
      sottotitolo: "Dib. N.º SE000018 · Rev. 00 · Prog. PSL25-375 · Emitido el 22/08/25",
      fogli: [
        { titolo: "Hoja 2", descrizione: "Conexiones de cables: LED y sensores" },
        { titolo: "Hoja 3", descrizione: "Cableado en el bastidor: centralita, motor y conectores" },
        { titolo: "Hoja 4", descrizione: "Barras LED y sensores en el plano" }
      ],
      file: [{ nome: "Esquema eléctrico Optimus-XP (PDF)" }]
    }
  ]
});
