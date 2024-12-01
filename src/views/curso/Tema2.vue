<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Introducción a la Revolución 4.0 en Ingeniería'" :subTitulo="'2. Impacto de la automatización en la ingeniería'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    p.mb-4 La automatización ha tomado un rol esencial en la ingeniería moderna, proporcionando una ventaja competitiva en términos de eficiencia, precisión y escalabilidad. La capacidad de automatizar tareas no solo mejora la productividad, sino que también ofrece mayor flexibilidad para adaptarse a diversas demandas de producción y de personalización.

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Eficiencia
              p Reduce el margen de error en tareas repetitivas, lo que mejora la productividad y permite ahorrar tiempo.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Precisión
              p Asegura resultados de alta calidad en procesos automatizados.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Escalabilidad
              p Permite gestionar grandes volúmenes de datos y realizar cálculos complejos con rapidez.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Flexibilidad
              p Se adapta a diversas necesidades y puede personalizarse según cada proyecto.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Innovación
              p Libera tiempo y creatividad al eliminar tareas rutinarias, permitiendo la exploración de nuevas ideas.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')

    h2 Aplicación de la automatización en la ingeniería
    p.mb-4 La automatización se aplica en diferentes etapas de la ingeniería, revolucionando desde el diseño hasta la gestión de proyectos. A continuación se muestran algunos ejemplos de aplicación.

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b").acordion-2
          .div(titulo="Diseño")
            p Software CAD paramétrico, generación automática de documentación, simulaciones virtuales.
          .div(titulo="Producción")
            p Robots industriales, líneas de montaje automatizadas, control de calidad automatizado.
          .div(titulo="Análisis de datos")
            p Aprendizaje automático para identificar patrones y decisiones basadas en datos.
          .div(titulo="Gestión de proyectos")
            p Herramientas que automatizan planificación, seguimiento y comunicación.


    .bg-fondo-4.bg-full-width.mb-0
      div.px-5.pb-md-3.py-4

        h2 Tipos de automatización en la industria
        p.mb-4 Existen diversos tipos de automatización, cada uno diseñado para optimizar procesos específicos de producción. Estos sistemas se clasifican según su capacidad de adaptación y flexibilidad.

        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Automatización fija.
                p.text-small.px-4.text-center.pb-2 Ideal para tareas repetitivas, garantiza consistencia y calidad al eliminar la variabilidad humana. Reduce costos de mano de obra, pero es rígida y no se adapta fácilmente a cambios en el diseño del producto o volúmenes de producción.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-down")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Automatización programable
                p.text-small.px-4.text-center.pb-2 Ofrece mayor flexibilidad; permite reprogramar robots industriales para realizar diversas tareas y adaptarse a cambios en la demanda. Requiere programación especializada y es más compleja de implementar.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Automatización flexible. 
                p.text-small.px-4.text-center.pb-2 Impulsada por IA y IoT, se adapta en tiempo real a cambios en el entorno de producción. Permite una optimización continua, aunque requiere mayor inversión inicial.

    h2 Componentes clave de la automatización
    p.mb-4 La automatización se sustenta en varios componentes esenciales: sensores, actuadores y controladores. Cada uno juega un rol específico en la creación de sistemas automatizados eficientes y precisos.

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sensores", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Sensores
            p(data-aos="fade-up") Actúan como los "ojos y oídos" del sistema, recolectando información del entorno y traduciéndola para el controlador.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Controlador", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Controlador
            p(data-aos="fade-up") Es el "cerebro" del sistema, procesa la información, toma decisiones basadas en un programa y envía comandos a los actuadores.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Actuadores", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Actuadores
            p(data-aos="fade-up") Actúan como los "músculos" del sistema, ejecutando acciones físicas como mover un brazo robótico o encender un motor.

    .bg-fondo-6.bg-full-width.mb-0
      div.px-5.pb-md-3.py-4

        h2 Ejemplos prácticos de automatización
        p.mb-4 Estos ejemplos muestran cómo los sensores, actuadores y controladores trabajan en conjunto para optimizar procesos.
        .row.mb-4
          .col-10.col-md-6.col-lg-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center.px-4 Control de nivel en un tanque de agua
                p.text-small.px-4.text-center.pb-2.px-4 Un sensor detecta el nivel de agua bajo y envía la información al controlador. Este, siguiendo un programa predefinido, envía una señal a una válvula para que se abra y llene el tanque.
          .col-10.col-md-6.col-lg-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center.px-4 Sistema de llenado avanzado en una planta de procesamiento
                p.text-small.px-4.text-center.pb-2.px-4 Un sensor de nivel monitorea el líquido en el tanque, un sensor de flujo mide la velocidad de entrada, y un sensor de calidad verifica los estándares. Un controlador PID ajusta la velocidad de una bomba y la posición de una válvula para mantener el nivel adecuado y activar alarmas en caso de anomalías.

    h2 Lenguajes de programación en automatización
    p.mb-4 Para programar y controlar sistemas automatizados, se utilizan lenguajes de programación que varían en función del nivel de abstracción y cercanía al hardware.

    .row.mb-5.justify-content-center.card_hover(data-aos="zoom-in-up")
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-right")
        .custom-image-card.d-flex.align-items-.justify-content-center.p-3.h-100
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-58.svg', style="width: 68px")
          .d-flex.flex-column.ps-3
            p.mb-3.text-bold Lenguajes de bajo nivel
            p.mb-0.text-small Ofrecen control detallado del hardware, como en PLC Ladder Logic, ideal para tareas que requieren rendimiento y precisión. Su complejidad es alta, y se vinculan con arquitecturas específicas.
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-left")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-59.svg', style="width: 68px")  
          .d-flex.flex-column.ps-3
            p.mb-3.text-bold Lenguajes de alto nivel
            p.mb-0.text-small Facilitan la programación al enfocarse en la lógica del problema y son portables. Ejemplos incluyen Python, C++, Java y MATLAB, que son ideales para análisis de datos, automatización de tareas y desarrollo de aplicaciones científicas.

    h2 Aplicaciones de automatización en distintas ingenierías
    p.mb-4 Cada rama de la ingeniería ha adoptado la automatización para mejorar la eficiencia y la precisión en sus áreas específicas de aplicación.

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Ingeniería Civil")
            p.mb-4 <strong>Ciudades inteligentes:</strong> Gestionan tráfico, energía y servicios públicos.
            p.mb-0 <strong>Construcción automatizada:</strong> Uso de robots y drones en la construcción y mantenimiento.
          .div(titulo="Ingeniería Mecánica")
            p.mb-4 <strong>Vehículos autónomos:</strong> Sensores y IA para navegación y toma de decisiones.
            p.mb-0 <strong>Fabricación aditiva:</strong> Impresión 3D para crear piezas complejas.
          .div(titulo="Ingeniería Eléctrica")
            p.mb-4 <strong>Redes inteligentes:</strong> Integración de energía renovable y gestión eficiente de la red.
            p.mb-0 <strong>Robótica industrial:</strong> Robots para tareas repetitivas y peligrosas.
          .div(titulo="Ingeniería Química")
            p.mb-4 <strong>Procesos automatizados:</strong> Control de reacciones químicas para mayor eficiencia.
            p.mb-0 <strong>Diseño de fármacos:</strong> IA para acelerar el descubrimiento de medicamentos.
          .div(titulo="Ingeniería Aeroespacial")
            p.mb-4 <strong>Satélites autónomos:</strong> Tareas de observación y comunicación de forma independiente.
            p.mb-0 <strong>Vehículos espaciales reutilizables:</strong> Reducción de costos en exploración espacial.
          .div(titulo="Ingeniería Biomédica")
            p.mb-4 <strong>Prótesis inteligentes:</strong> Controladas por el cerebro para mejorar la movilidad.
            p.mb-0 <strong>Diagnóstico asistido:</strong> Análisis de imágenes médicas mediante IA.

    .row.mb-0
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul-claro.px-3.py-4(data-aos="fade-up")
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-61.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Esta transformación ha ampliado enormemente el alcance de la ingeniería, donde el conocimiento técnico se combina con la capacidad de adaptación y la creatividad. La Revolución 4.0 no solo ha redefinido la ingeniería; también ha creado un nuevo estándar de habilidades para los profesionales que desean liderar la innovación en este mundo cada vez más digital y conectado.

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
