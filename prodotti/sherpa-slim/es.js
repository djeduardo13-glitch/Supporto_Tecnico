// SHERPA SLIM — Traducción al español
// Fuente: Manual SHERPA SLIM R04 §5.3.6 Programación del producto (ES).
// Contiene SOLO los textos (y las imágenes en español). La estructura viene de dati.js.
// El orden de las secciones y de los pasos debe ser el mismo que en dati.js.
// Fichas 2: traducción interna, no oficial (pendiente de revisión).

registraTraduzione("sherpa-slim", "es", {
  descrizione: "Programación del sistema de carga asistida con la App STEM Global Service y con la camilla Spyke.",
  fonte: "Manual SHERPA SLIM R04 · §5.3.6 Programación del producto",

  sezioni: [
    {
      titolo: "Programación del producto",
      sottotitolo: "Aprendizaje de las posiciones de carga con la App STEM Global Service.",
      condizioni: [
        { testo: "App STEM Global Service con Bluetooth y GPS activados" }
      ],
      attenzione: "Durante la programación, los sistemas de bloqueo de seguridad de la correa se desactivan: preste especial atención a cualquier movimiento repentino de la camilla.",
      importante: [
        "El producto se utiliza con 3 tipos de camillas: desbloqueo de patas de dos mandos (un mando por pata), desbloqueo de patas de un mando (un mando para ambas patas) y desbloqueo de patas automático."
      ],
      passi: [
        { fase: "Preparación", testo: "Compruebe que el soporte esté ajustado a la altura de carga correcta para la camilla.", nota: "consulte el manual del soporte." },
        { testo: "Coloque la camilla en el suelo, frente al soporte." },
        { testo: "Coloque el soporte camilla en posición de carga / descarga.", nota: "consulte el manual del soporte." },
        { testo: "Encienda el producto con el botón ON/OFF (A).", esito: "Señal acústica: producto encendido.", immagini: ["img/es-s04.jpg"] },
        { testo: "Pulse el botón «Bajada» del panel de mandos instalado al lado del soporte camilla y desenrolle la correa hasta que alcance la camilla.", nota: "durante el desenrollado, la correa debe mantenerse en tensión.", immagini: ["img/es-s05.jpg"] },
        { testo: "Conecte la correa del producto a la camilla.", nota: "consulte la sección «Conexión camilla al producto»." },

        { fase: "Inicio del aprendizaje", testo: "Acceda a la App STEM «Global Service» y, cuando termine el escaneo de dispositivos cercanos, seleccione el Sherpa Slim que desea programar.", immagini: ["img/es-s07.jpg"] },
        { testo: "Seleccione «Modo de programación» y, desde el estado «Desactivado», elija «Habilitar».", immagini: ["img/es-s08.jpg"] },
        { testo: "Seleccione de nuevo «Modo de programación» (ahora «Activado») y elija «Comenzar programación».", esito: "Señal acústica: el producto entra en modo de aprendizaje. El LED del botón de encendido/apagado se apaga y los LED rojo y verde comienzan a parpadear.", immagini: ["img/es-s09.jpg"] },

        { fase: "Memorización de los puntos", testo: "Coloque la camilla a unos 40 cm del soporte.", nota: "el soporte de la camilla debe estar en posición de carga.", immagini: ["img/es-s10.jpg"] },
        { testo: "Seleccione «Guardar punto», active las opciones «Ascenso», «Descenso» y «Detener» y confirme con «Aceptar».", esito: "Señal acústica: punto memorizado.", immagini: ["img/es-s11.jpg"] },
        { testo: "Mediante el producto, suba la camilla a su soporte hasta que la primera pata esté a unos 4 cm del borde del soporte.", immagini: ["img/es-s12a.jpg", "img/es-s12b.jpg"] },
        { testo: "Seleccione «Guardar punto», configure las opciones «Ascenso», «Descenso» y «Detener» y confirme con «Aceptar».", esito: "Señal acústica: punto memorizado.", nota: "seleccione las opciones en función del resultado deseado: detener el movimiento o solo ralentizarlo (en este caso NO seleccione «Detener»), solo en la fase de carga, solo en la fase de descarga o en ambas fases.", immagini: ["img/es-s13.jpg"] },
        { testo: "Continúe subiendo la camilla hasta que la segunda pata esté a unos 4 cm del borde del soporte.", immagini: ["img/es-s14.jpg"] },
        { testo: "Seleccione «Guardar punto», configure las opciones «Ascenso», «Descenso» y «Detener» y confirme con «Aceptar».", esito: "Señal acústica: punto memorizado.", nota: "con el mismo procedimiento es posible memorizar otras 9 posiciones, para un total de 11 posiciones intermedias además del punto de inicio (camilla completamente fuera, paso 10) y del punto final (camilla completamente cargada, paso 16).", immagini: ["img/es-s15.jpg"] },

        { fase: "Fin del aprendizaje", testo: "Termine la subida de la camilla hasta que alcance la posición de bloqueo final y, a continuación, lleve el plano de apoyo de la camilla a la posición horizontal.", immagini: ["img/es-s16.jpg"] },
        { testo: "Seleccione «Finalizar programación».", esito: "Doble señal acústica y los LED rojo y verde del lateral del producto dejan de parpadear: la programación se ha completado correctamente.", nota: "el LED del botón de encendido/apagado indica si hay una programación en memoria: encendido = aprendizaje completado y programación memorizada; apagado = ninguna programación presente.", immagini: ["img/es-s17.jpg"] }
      ]
    },
    {
      titolo: "Programación Complete Care",
      sottotitolo: "Spyke, Sherpa Slim y EDEN04-XP: ajustes desde la App y programación desde la pantalla del Spyke.",
      condizioni: [{ testo: "Permisos adicionales de la App Global Service (concedidos por el Servicio Técnico STEM)" }],
      importante: ["Spyke, Sherpa Slim y EDEN04-XP forman el sistema integrado Complete Care: soporte de camilla, sistema de carga asistida y camilla se comunican entre sí para realizar operaciones de carga y descarga sincronizadas."],
      passi: [
        { fase: "Ajustes desde la App Global Service", testo: "Descargue y abra la App STEM Global Service (disponible en App Store y Google Play Store)." },
        { testo: "Acceda a la página del dispositivo Sherpa Slim (compruebe el número de serie del producto)." },
        { testo: "Seleccione «SOPORTE» y elija «AUTOMÁTICO» para el soporte de camilla EDEN04-XP." },
        { testo: "Seleccione «CAMILLA» y elija «Spyke».", nota: "este ajuste desactiva los botones del Sherpa Slim en la botonera lado pies del soporte. Es obligatorio, ya que las operaciones de carga y descarga con el Sherpa Slim deben controlarse exclusivamente con los botones IN/OUT de la pantalla del Spyke." },
        { testo: "Acceda a la página del dispositivo Spyke (compruebe el número de serie del producto)." },
        { testo: "Seleccione «ASOCIACIÓN SHERPA» y elija el Sherpa Slim detectado en el escaneo." },
        { testo: "Compruebe que la conexión sea correcta: el texto «Sherpa» en la pantalla del Spyke debe ser de color verde." },
        { fase: "Habilitación de la programación", notaFase: "Se requieren los permisos adicionales de la App Global Service, concedidos exclusivamente por el Servicio Técnico de STEM S.r.l.", testo: "Apague el Sherpa Slim mediante el interruptor I/O." },
        { testo: "Compruebe que la pantalla de la camilla Spyke esté en la pantalla principal." },
        { testo: "Abra la App Global Service y acceda a la página del dispositivo Spyke." },
        { testo: "Seleccione el icono + y, a continuación, el icono Ajustes.", nota: "estos iconos no son visibles para el usuario básico: es necesario solicitar los permisos adicionales al Servicio Técnico STEM." },
        { testo: "Seleccione «Habilitar la programación Sherpa Slim»." },
        { testo: "Vuelva a encender el Sherpa Slim mediante el interruptor I/O." },
        { fase: "Programación desde la pantalla del Spyke", testo: "Antes de empezar, compruebe que el Spyke y el plano extraíble del EDEN04-XP estén en posición de carga (plano extraído y a la altura de carga correcta) y que el Spyke esté enganchado a la correa del Sherpa Slim." },
        { testo: "Acceda al menú «Sherpa» seleccionando el icono de la pantalla." },
        { testo: "Acceda al menú «Cfg» (Configuración) para seleccionar el soporte de camilla." },
        { testo: "Seleccione «Eden XP» para el soporte EDEN04-XP y confirme con «Set»." },
        { testo: "Salga con «Exit» y acceda de nuevo al menú «Sherpa»." },
        { testo: "Acceda al menú «Prog» (Programación)." },
        { testo: "Primer punto: Spyke enganchado al Sherpa Slim, frente al EDEN04-XP, con el plano extraído y a la altura de carga correcta. Active las opciones Carga, Descarga y Stop y seleccione «Save»." },
        { testo: "Cargue el Spyke en el EDEN04-XP tirando de la palanca verde y pulsando el botón IN. Detenga la carga con las ruedas traseras todavía fuera de la plataforma, para ajustarlas y evitar que se atasquen." },
        { testo: "Segundo punto (ruedas traseras todavía fuera de la plataforma): active las opciones Carga y Stop y seleccione «Save».", nota: "con este punto el Sherpa Slim se detiene automáticamente, lo que permite bloquear la oscilación de las ruedas traseras antes de continuar la carga." },
        { testo: "Continúe la carga del Spyke hasta su inserción completa, tirando de la palanca verde y pulsando el botón IN.", esito: "Camilla enganchada correctamente: en la pantalla aparece el candado verde «10g»." },
        { testo: "Lleve el plano extraíble del EDEN04-XP a la posición horizontal mediante la flecha SUBIR de la botonera lado pies del soporte." },
        { testo: "Tercer punto, fin de la programación: con el Spyke completamente cargado y el EDEN04-XP en posición horizontal, seleccione «End»." },
        { testo: "Programación completada: seleccione «Exit» para volver a la pantalla principal." }
      ]
    },
    {
      titolo: "Después de la programación",
      sottotitolo: "Funcionamiento del Sherpa Slim y gestión de los soportes automáticos y semiautomáticos.",
      avvisi: [
        { titolo: "Funcionamiento", testo: "Una vez programado, el Sherpa Slim funciona siempre de la misma manera: se detiene únicamente en las posiciones memorizadas y según los modos configurados durante la programación.\nEl operador solo debe controlar las operaciones de carga y descarga mediante los mandos del producto (véase la sección 6)." },
        { titolo: "Soportes automáticos y semiautomáticos", testo: "Si la programación se ha realizado con una bancada para camilla automática o semiautomática, como «Eden-XP», «R-3L» y «Compact-EL» (tipo configurado en «Tipo de soporte» de la App Global Service), el movimiento del plano porta camilla también lo gestiona el Sherpa Slim." },
        { titolo: "Ejemplo 1 · Bancada automática (Eden-XP)", testo: "Durante la programación, además de la posición de la correa del Sherpa Slim, también se memoriza la altura del plano porta camilla: durante el funcionamiento, el Sherpa Slim lleva el plano a la altura memorizada para cada punto.\nEs posible ajustar manualmente la bancada a una altura diferente: el ajuste manual permanece activo durante un ciclo completo (hasta el retorno a cero de la correa del Sherpa Slim), tras lo cual se restablece la programación original." },
        { titolo: "Ejemplo 2 · Bancadas semiautomáticas (R-3L, Compact-EL)", testo: "Durante la programación es necesario memorizar un punto final «virtual» antes del «cero», seleccionando únicamente la opción «Ascenso»: corresponde al momento en que el plano debe volver a la posición horizontal. Normalmente coincide con el punto de desbloqueo de las patas lado pies (aunque también puede ser un punto posterior).\nPor lo tanto, es posible programar el mismo punto dos veces sin mover la camilla: la primera con las opciones deseadas (normalmente las tres: «Ascenso», «Descenso» y «Detener») y la segunda solo con la opción «Ascenso». De este modo, durante la carga, tras el desbloqueo de las patas lado pies y al reanudar la carga, el plano porta camilla también vuelve a la posición horizontal." }
      ]
    }
  ]
});
