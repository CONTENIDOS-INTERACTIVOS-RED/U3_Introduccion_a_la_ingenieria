<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'unidad 3. Pensamiento Crítico y solución de problemas en ingeniería'" :subTitulo="'2. Generación de alternativas en la solución de problemas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-16.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Una vez identificada y analizada la información, comienza la etapa de pensar en todas las posibles soluciones. La generación de alternativas es una fase crucial en la resolución de problemas de ingeniería, pues permite explorar una amplia gama de posibilidades y encontrar soluciones innovadoras.
        p A continuación, se explora el brainstorming, una herramienta fundamental en el ámbito de la ingeniería. Este proceso colaborativo permite a los equipos multidisciplinarios generar ideas originales y encontrar respuestas innovadoras a problemas técnicos complejos:

    .bg-amarillo.bg-full-width.mb-4
      div.px-5.pb-md-3.py-4

        .row.mb-4
          .col-12.col-xl-6.d-flex(data-aos="fade-right")
            TarjetaAudio.color-primario.bg-white.my-auto(
            texto="<b>Brainstorming</b>, una herramienta fundamental en el ámbito de la ingeniería"
            tiempo
            :audio="require('../../assets/componentes/audios/podcast brainstorming_mezcla.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

          .col-4.mx-auto.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rosa-claro.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 <strong>Ejemplo práctico de ingeniería:</strong> Un ingeniero mecánico, desarrolla un nuevo modelo de bicicleta eléctrica para la ciudad que sea atractivo para los usuarios y contribuya a la movilidad urbana sostenible.

    h2.mb-4 Síntesis

    .row.mb-5
      .col-12.col-xl-8(data-aos="fade-right")
        p.mb-4 Combinar ideas para crear nuevas soluciones. Es de aclarar que la <strong>síntesis</strong> no es el primer paso en la resolución de problemas de ingeniería, sino más bien un paso intermedio donde se toman las ideas generadas en el brainstorming y se combinan de manera creativa para formar soluciones más completas y efectivas. 
        span La síntesis implica combinar una variedad de elementos, tanto técnicos como conceptuales, para desarrollar soluciones innovadoras. Estos elementos pueden incluir:
      .col-4.mx-auto.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    .bg-fondo-5.bg-full-width
      div.px-5.pb-md-3.py-4

        .row.justify-content-center.mb-4
          .col-11.col-md-4.col-xl-5.pe-xl-8.d-none.d-xl-block
            figure.mb-4.mb-md-0
              img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .col-11.col-xl-7
            SlyderF(columnas="col-12 col-lg-6 py-4 px-3")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Conocimientos teóricos
                  p.text-small.px-4.text-center.pb-2 Principios físicos, químicos, matemáticos y de otras disciplinas relevantes.
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Experiencia práctica
                  p.text-small.px-4.text-center.pb-2 Conocimiento de materiales, procesos de fabricación, y limitaciones del mundo real.
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Tendencias tecnológicas
                  p.text-small.px-4.text-center.pb-2 Incorporación de nuevas tecnologías como inteligencia artificial, IoT, realidad virtual, etc
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Necesidades del usuario
                  p.text-small.px-4.text-center.pb-2 Entender las necesidades, deseos y limitaciones de los usuarios finales.
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Restricciones
                  p.text-small.px-4.text-center.pb-2 Considerar factores como costos, tiempo, seguridad, regulaciones y sostenibilidad.
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Ideas creativas
                  p.text-small.px-4.text-center.pb-2 Conceptos innovadores y fuera de lo común.
            
        .row.mb-4
          .d-flex.align-items-center
            div.d-flex.align-items-center.bg-morado-1.px-3.py-4
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-27.svg', alt='Texto que describa la imagen')
              p.pe-xl-5.mb-0.text-white <strong>Ejemplo práctico de ingeniería:</strong> Un ingeniero biomédico fusiona conceptos de ingeniería de tejidos y robótica para desarrollar una prótesis inteligente.

    h2 Análisis de costos
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        p.mb-4 Para llevar a cabo una evaluación completa de alternativas, es esencial analizar los pros y los contras de cada opción disponible, centrándose en los aspectos económicos. En este proceso, el análisis de costos se convierte en una etapa crucial, ya que permite comparar las distintas soluciones y seleccionar la más viable. Este análisis implica estimar y evaluar todos los costos relacionados con cada alternativa, considerando factores iniciales, operacionales, y de producción para obtener una visión completa y precisa.
        span A continuación, se detallan los factores clave y los diferentes tipos de costos que intervienen en el análisis, así como las herramientas recomendadas para facilitar este proceso:
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
    p.mb-3 <strong>Tabla 1.</strong> Clasificación de costos en proyectos de ingeniería

    .tabla-a.mb-5
      table
        thead
          tr
            th.text-center.border-right-gris Tipo de costo y descripción
            th.text-center Ejemplo
        tbody
          tr
            td.d-flex
              div.d-flex
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Costos Iniciales:</strong> Gastos necesarios para la puesta en marcha de la alternativa seleccionada.
            td.border-left-gris 
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong> Inversión en equipos:</strong> Adquisición de maquinaria y herramientas. 
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong> Materiales:</strong> Compra de materias primas.
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong> Construcción:</strong> Gastos en nuevas instalaciones.
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong> Licencias y permisos:</strong> Trámites legales necesarios.
          tr
            td.d-flex
              div.d-flex
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong> Costos Operacionales:</strong> Costos continuos para mantener la operación en funcionamiento.
            td.border-left-gris 
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Energía:</strong> Consumo de electricidad, gas, agua.
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Mano de obra:</strong> Salarios y beneficios de empleados.
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Mantenimiento:</strong> Reparaciones preventivas y correctivas.
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Suministros:</strong> Compra de consumibles para la operación.
          
          tr
            td.d-flex
              div.d-flex
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Costos de Producción:</strong> Costos directamente asociados con el proceso productivo. 
            td.border-left-gris 
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Materiales directos:</strong> Insumos en producción.
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Mano de obra directa:</strong> Costos laborales específicos.
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Costos indirectos de fabricación:</strong> Gastos generales como alquiler y depreciación.

          tr
            td.d-flex
              div.d-flex
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Costos Financieros:</strong> Gastos relacionados con el financiamiento y la depreciación de los activos.
            td.border-left-gris 
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Intereses:</strong> Costos de financiamiento mediante créditos.
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Depreciación:</strong> Pérdida de valor de activos con el tiempo.
          tr
            td.d-flex
              div.d-flex
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Costos de Desmantelamiento:</strong> Gastos asociados al retiro de activos al finalizar su vida útil.
            td.border-left-gris 
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Retiro de equipos:</strong> Eliminación de maquinaria obsoleta. 
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Remediación ambiental:</strong> Costos para restauración del sitio en caso de contaminación.
          tr
            td.d-flex
              div.d-flex
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Costos Imprevistos:</strong> Fondos reservados para cubrir gastos no planificados.
            td.border-left-gris 
              div.d-flex.mb-2
                img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Contingencias:</strong> Provisión financiera para gastos inesperados.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-morado-1.px-3.py-4(data-aos="fade-up")
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-29.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0.text-white <strong>Ejemplo práctico de ingeniería:</strong> un ingeniero civil compara los costos de construcción de un túnel y un puente para conectar dos ciudades.

    .h2 Evaluación de riesgos
    p.mb-4 La evaluación de riesgos es esencial para identificar, analizar y gestionar los peligros asociados a cada alternativa. Este proceso ayuda a prevenir accidentes, minimizar pérdidas y garantizar la seguridad en el proyecto.


    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Evaluación de riesgos y su impacto en la gestión de proyectos en ingeniería
          p.mb-5  Lo invitamos a descubrir la importancia de la evaluación de riesgos en proyectos de ingeniería, un proceso clave para garantizar la seguridad, minimizar pérdidas y prevenir accidentes. Para profundizar en este tema, lo invitamos a consultar el documento.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Evaluación de riesgos.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Evaluación de riesgos y su impacto en la gestión de proyectos en ingeniería.

    h2 Análisis de beneficios
    p.mb-5 El análisis de beneficios permite evaluar cada alternativa en términos de eficiencia, sostenibilidad y alineación con los objetivos estratégicos del proyecto.
             
    .row.bg-rosa-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Análisis de beneficios: clave para la toma de decisiones en ingeniería
          p.mb-5  Lo invitamos a explorar la relevancia del análisis de beneficios en proyectos de ingeniería, una herramienta esencial para evaluar alternativas en términos de eficiencia, sostenibilidad y alineación con los objetivos estratégicos. Para profundizar en este tema, lo invitamos a consultar el documento.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Análisis de beneficios.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Análisis de beneficios: clave para la toma de decisiones en ingeniería.
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    p.mb-4 Este enfoque integral ayuda a identificar los riesgos y beneficios de cada alternativa, apoyando la toma de decisiones informadas que maximizan el valor para el proyecto y minimizan los riesgos.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-32.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 <strong>Ejemplo práctico de ingeniería:</strong> un ingeniero de software compara la usabilidad y la seguridad de diferentes plataformas para desarrollar una aplicación móvil.

    h2 Selección de la mejor alternativa

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        p En este paso, tras evaluar los pros y contras de cada posible solución, se elige la alternativa que mejor se adapta a las necesidades y restricciones de la empresa y del sector profesional. La selección de esta alternativa debe tener en cuenta su potencial para satisfacer los objetivos de la organización y aportar beneficios a la sociedad.
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    h2 Toma de decisiones
    p.mb-4 La toma de decisiones en ingeniería es esencial para elegir la alternativa que mejor se alinee con los criterios establecidos. Para garantizar que la elección sea adecuada, se consideran elementos clave:

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Criterios de evaluación") Factores técnicos (viabilidad, seguridad), económicos (costos y ROI), ambientales (impacto), sociales (empleo) y legales (cumplimiento normativo). 
          p(numero="2" titulo="Pesos de los criterios") Asignación de importancia relativa a cada criterio para reflejar su relevancia en el proyecto y establecer prioridades. 
          p(numero="3" titulo="Herramientas de análisis") Uso de matrices de decisión, análisis multicriterio y análisis de sensibilidad para evaluar alternativas y gestionar la incertidumbre. 
          p(numero="4" titulo="Factores humanos") Consideración de la percepción de stakeholders y la experiencia de expertos para incorporar perspectivas adicionales en la toma de decisiones.

    p.mb-4 El proceso incluye la identificación de alternativas, definición de criterios, asignación de pesos, evaluación, selección y, finalmente, implementación y seguimiento de la mejor opción.
    h2 Justificación
    p.mb-4 La justificación de la alternativa elegida es fundamental, ya que comunica los motivos de la decisión a las partes interesadas. Una justificación efectiva debe incluir:

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Alineación con los objetivos del proyecto")
            p La alternativa elegida debe contribuir directamente a los objetivos del proyecto y alinearse con la misión de la organización.
          .div(titulo="Evaluación de factores relevantes")
            p Debe mostrar que se consideraron factores técnicos, económicos, ambientales, sociales y legales en el análisis.
          .div(titulo="Claridad y concisión")
            p La explicación debe ser fácil de entender y evitar tecnicismos innecesarios.
          .div(titulo="Respaldo en datos y evidencias")
            p Incluir análisis y estudios que validen la decisión.
          .div(titulo="Anticipación de objeciones")
            p Responder a posibles preguntas y justificar por qué las desventajas de la alternativa seleccionada son aceptables.
          .div(titulo="Coherencia y persuasión")
            p La justificación debe ser convincente, reflejando los resultados de la evaluación de alternativas.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    h2 Implementación de la solución
    p.mb-4 Una vez seleccionada la mejor solución, es esencial planificar cuidadosamente su implementación para asegurar una ejecución eficaz y eficiente. 

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Implementación de soluciones: claves para una ejecución exitosa 
          p.mb-5  Lo invitamos a conocer la importancia de una planificación cuidadosa en la implementación de soluciones en proyectos de ingeniería, un paso esencial para garantizar una ejecución eficaz y eficiente. Para profundizar en este tema, lo invitamos a consultar el documento.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Implementación de soluciones.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Implementación de soluciones: claves para una ejecución exitosa 

    h2 Ejecución de la solución
    p.mb-4 La ejecución es la fase en la que se lleva a cabo el plan diseñado para implementar la solución. Este proceso dinámico requiere seguimiento constante y ajustes según sea necesario para asegurar su éxito.

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Seguimiento del plan
              p Monitoreo continuo mediante indicadores clave de desempeño (KPI), generación de informes periódicos y adaptabilidad para ajustar el plan ante cambios o desafíos nuevos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Gestión de recursos
              p Optimización de los recursos asignados y gestión de cambios en los mismos para asegurar su uso eficiente durante la ejecución.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Comunicación
              p Mantener a los stakeholders informados y facilitar la colaboración entre los equipos involucrados.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Gestión de riesgos
              p Monitoreo continuo de los riesgos y activación de planes de contingencia en caso de que se materialicen.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Control de calidad
              p Verificación de resultados para asegurar alineación con los objetivos y corrección de desviaciones detectadas.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Capacitación y desarrollo
              p Formación del personal para asegurar que cuenten con las habilidades necesarias y fomentar el desarrollo de competencias adicionales.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

    h2 Evaluación de los resultados
    p.mb-5 Al finalizar la implementación, es importante evaluar si la solución funcionó según lo esperado y si se pueden realizar mejoras. La evaluación de los resultados es esencial para la mejora continua en el ámbito de la ingeniería. 

    .bg-fondo-7.bg-full-width
      div.px-5.pb-md-3.py-4

        .row.justify-content-center.mb-4
          .col-11.col-md-4.col-xl-5.pe-xl-8.d-none.d-xl-block
            figure.mb-4.mb-md-0
              img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
          .col-11.col-xl-7
            SlyderF(columnas="col-12 col-lg-6 py-4 px-3")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Comparación con los <br>objetivos iniciales
                  p.text-small.px-4.text-center.pb-2 Revisión de los criterios de éxito y análisis de KPIs para confirmar si se cumplieron los objetivos.
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Evaluación de los resultados <br>obtenidos
                  p.text-small.px-4.text-center.pb-2 Recopilación y análisis de datos cuantitativos y cualitativos para evaluar el impacto de la solución.
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Identificación de efectos <br>no deseados
                  p.text-small.px-4.text-center.pb-2 Análisis de posibles efectos colaterales y verificación de cumplimiento con los requisitos ambientales y sociales.
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Comparación <br>con alternativas
                  p.text-small.px-4.text-center.pb-2 Evaluar si la solución elegida fue la mejor en comparación con otras opciones consideradas.
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Lecciones <br>aprendidas
                  p.text-small.px-4.text-center.pb-2 Identificación de áreas de mejora y documentación de aprendizajes para futuros proyectos.


    .bg-rosa-claro.bg-full-width.mb-4
      div.px-5.pb-md-3.py-4

        .row.mb-4
          .col-12.col-xl-7(data-aos="fade-right")
            h2.mb-5 Análisis de resultados
            p.mb-4 El análisis de resultados permite determinar si la solución fue efectiva y cumplió con los objetivos del proyecto. Aspectos clave incluyen:
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <strong>Comparación con los objetivos iniciales:</strong> Revisar si se cumplieron los criterios de éxito y los KPI.
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <strong>Evaluación del desempeño:</strong> Análisis de datos cuantitativos (eficiencia, productividad, costos) y cualitativos (feedback de usuarios).
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <strong>Identificación de áreas de mejora:</strong> Análisis de desviaciones y propuestas de mejoras.
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <strong>Lecciones aprendidas:</strong> Documentación de aprendizajes y transferencia de conocimiento al equipo.

          .col-5.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')

    h2 Impacto social, riesgos y presupuesto
    p.mb-4 Evaluar el impacto social, ambiental y económico es crucial para asegurar que la solución ingenieril aporte un beneficio general a la sociedad y el entorno.

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Identificación de los grupos de interés") Considerar el impacto en comunidades locales, usuarios directos y grupos vulnerables. 
          p(numero="2" titulo="Evaluación de beneficios sociales") Mejora de la calidad de vida, equidad y desarrollo comunitario. 
          p(numero="3" titulo="Minimización de impactos negativos") Identificación de riesgos ambientales, sociales y económicos para reducir impactos adversos. 
          p(numero="4" titulo="Participación ciudadana") Consultar a las comunidades y garantizar transparencia en el proceso. 
          p(numero="5" titulo="Sostenibilidad") Asegurar que la solución sea sostenible a nivel ambiental, económico y social. 

    
    .bg-fondo-4.bg-full-width
      div.px-5.pb-md-3.py-4

        h2 Gestión de riesgos
        p.mb-4 La gestión de riesgos es fundamental en la implementación de soluciones ingenieriles, garantizando el éxito del proyecto a través de la identificación y mitigación de riesgos.

        .row.mb-4.justify-content-center.card-hover
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100(data-aos="fade-right")
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-51.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Identificación de riesgos
              p.px-1.text-small.mb-0.d-flex.text-center Realizar un análisis detallado y clasificar los riesgos según probabilidad e impacto.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100(data-aos="fade-up")
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-52.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Evaluación de riesgos
              p.px-1.text-small.mb-0.d-flex.text-center Estimar la probabilidad e impacto de cada riesgo, usando matrices para priorizar acciones.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100(data-aos="fade-down")
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-53.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Mitigación de riesgos
              p.px-1.text-small.mb-0.d-flex.text-center Desarrollo de planes específicos para cada riesgo, incluyendo controles preventivos y correctivos.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100(data-aos="fade-left")
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-54.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Monitoreo y control
              p.px-1.text-small.mb-0.d-flex.text-center Definir indicadores de riesgo, realizar revisiones periódicas y mantener una comunicación continua.
    p.mb-4 Este enfoque metódico permite anticiparse a desafíos y tomar decisiones informadas, maximizando la efectividad de la solución implementada y asegurando su impacto positivo en el contexto real.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-55.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 <strong>Ejemplo práctico de ingeniería práctica:</strong> un ingeniero químico desarrolla un plan de emergencia para responder a un posible derrame químico.

    .bg-fondo-6.bg-full-width
      div.px-5.pb-md-3.py-4

        h2 Presupuesto
        p.mb-4 La gestión presupuestaria es fundamental para garantizar la viabilidad financiera y el éxito de cualquier proyecto de ingeniería. Un presupuesto bien estructurado asegura que los recursos se asignen de manera eficiente, permitiendo cumplir con los objetivos dentro de las limitaciones financieras. 

        .row.mb-5
          .col-11.col-xl-10.col-xxl-8.mx-auto.z-3(data-aos="fade-up")
            .tarjeta.bg-white.box-shadow.p-3.mb-0
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.ps-lg-4
                  img(src="@/assets/componentes/pdf-icon-circle.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-bold.mb-2.text-small  Aspectos claves para la gestión del presupuesto
                      p.text-small.mb-0  Lo invitamos a conocer  los aspectos clave para una gestión presupuestaria efectiva, para lo cual lo deberá consultar el documento.
                    .col-sm-auto
                      a.download-btn.boton.bg-morado.text-white(:href="obtenerLink('/downloads/Anexos_Aspectos clave para una gestión presupuestaria efectiva.pdf')" target="_blank")
                        span.text-small.text-app Descargar
                        i.fas.fa-arrow-right.text-app

        p.mb-4 Para la gestión presupuestaria, se pueden utilizar herramientas especializadas que facilitan el control y el seguimiento de los recursos:

        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Hoja de cálculo
                p.text-small.px-4.text-center.pb-2 Excel es una herramienta versátil y común para crear y gestionar presupuestos, proporcionando facilidad de uso y personalización.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Software de Gestión de Proyectos 
                p.text-small.px-4.text-center.pb-2 Herramientas como Microsoft Project y Primavera P6 ofrecen funcionalidades avanzadas que ayudan a gestionar tanto proyectos como presupuestos, mejorando el control de gastos y el seguimiento detallado.

    p.mb-4 Con el análisis de estos factores y el uso adecuado de herramientas, se puede gestionar el presupuesto de manera eficiente, asegurando que el proyecto se mantenga dentro de los límites financieros y alcance sus objetivos con éxito.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-morado-1.px-3.py-4(data-aos="fade-up")
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-58.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0.text-white <strong>Ejemplo práctico de ingeniería práctico:</strong> un ingeniero mecánico busca alternativas más económicas para fabricar un componente de una máquina.

    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto ¿Sabías qué  herramientas simples como los diagramas de flujo y el análisis de causa y efecto pueden transformar la resolución de problemas?
          p.mb-5 En este documento, <strong>Herramientas simples para la resolución de problemas</strong>, explorará cómo los diagramas de flujo facilitan la comprensión visual de procesos y cómo el análisis de causa y efecto permite identificar causas raíz de problemas. Ambas técnicas ofrecen una visión clara, ayudan a optimizar procesos y promueven la colaboración en equipo. Descubra cómo aplicar estas herramientas para abordar desafíos con precisión y tomar decisiones informadas.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Herramientas simples para la resolución de problemas.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>  ¿Sabías qué  herramientas simples como los diagramas de flujo y el análisis de causa y efecto pueden transformar la resolución de problemas?
      
    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/27335") Bertero, R. (2010). Problemas en el campo de las estructuras y de la energía. ANI - Academia Nacional de Ingeniería.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/GXnQu73_LE8") Keisen Consultores. (2020). Solución de problemas: El método general de 8 pasos [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario') 


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
