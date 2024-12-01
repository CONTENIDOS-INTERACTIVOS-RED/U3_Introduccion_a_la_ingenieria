<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'unidad 3. Pensamiento Crítico y solución de problemas en ingeniería'" :subTitulo="'3. Ética y responsabilidad social en la ingeniería 4.0'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.mb-5

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-rosa-claro.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") Los ingenieros son agentes de cambio, y sus decisiones tienen consecuencias reales en la vida de las personas y en el planeta. Este es el ejemplo práctico de la labor de seis ingenieros clave en la evolución de la ingeniería. Se presenta un breve recorrido histórico que abarca desde los inicios de la ingeniería hasta la era de la Industria 4.0, destacando la transformación de los desafíos éticos a lo largo del tiempo.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="10.3%" y="81%" numero="+")
        .h5.mb-2 Alan Turing
        p Creó las bases teóricas para el desarrollo de las computadoras. Revolucionó la informática y la inteligencia artificial
      .tarjeta.bg-white.p-4(x="26.3%" y="81%" numero="+")
        .h5.mb-2 Nikola Tesla
        p Pionero de la corriente alterna y sistemas de energía eléctrica. Transformó la forma en que usamos la electricidad.
      .tarjeta.bg-white.p-4(x="42.3%" y="81%" numero="+")
        .h5.mb-2 Alessandro Volta
        p Inventó la primera batería eléctrica, sentando las bases para la electrónica y la energía portátil.
      .tarjeta.bg-white.p-4(x="58%" y="81%" numero="+")
        .h5.mb-2 Emily Roebling
        p Líder técnica en la construcción del Puente de Brooklyn, demostrando que las mujeres podían sobresalir en ingeniería.
      .tarjeta.bg-white.p-4(x="73.8%" y="81%" numero="+")
        .h5.mb-2 Margaret Hamilton
        p Desarrolló el software de navegación para las misiones Apollo, clave para el éxito de los primeros viajes a la Luna.
      .tarjeta.bg-white.p-4(x="89.6%" y="81%" numero="+")
        .h5.mb-2 Katherine Johnson
        p Realizó cálculos cruciales para las misiones espaciales de la NASA, contribuyendo a los primeros viajes tripulados al espacio.

    p.mb-4 Cada uno de estos ingenieros, en su tiempo, enfrentó desafíos y tomó decisiones que marcaron un antes y un después en la historia de la humanidad. En la era de la Industria 4.0, los ingenieros se enfrentan a desafíos éticos aún más complejos. La inteligencia artificial, la biotecnología y la nanotecnología ofrecen un potencial inmenso, pero también plantean riesgos. ¿Cómo garantizar que estas tecnologías se utilicen para el bien común y no para perpetuar desigualdades o dañar el medio ambiente? Al diseñar soluciones tecnológicas, se debe considerar no solo su eficiencia y funcionalidad, sino también su impacto social y ambiental. Recordemos que los ingenieros son agentes de cambio.
    h2 ¿Qué significa ser un ingeniero ético?

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-rosa-claro.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-62.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La ética en la ingeniería va más allá de la seguridad y la honestidad; implica una preocupación por el impacto social y ambiental de los proyectos. Un ingeniero ético debe considerar si sus diseños benefician a todos por igual, si son sostenibles y si respetan los derechos humanos. Ser ético en esta profesión no es un concepto abstracto; se concreta a través de ejemplos de la vida real, con casos exitosos donde los ingenieros han priorizado el bienestar social y otros en los que decisiones equivocadas han tenido consecuencias negativas.
        span Los códigos de ética de las asociaciones de ingenieros son guías fundamentales que establecen los principios y valores que deben orientar la práctica profesional. Al conocer y aplicar estos códigos, los ingenieros pueden tomar decisiones más responsables y éticas. 
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')  

    .bg-amarillo.p-4.mb-4
      span La ética en la ingeniería 4.0 integra principios como la justicia, la equidad, la sostenibilidad y el respeto por los derechos humanos. Implica una reflexión profunda sobre el impacto de las acciones y una búsqueda constante de soluciones que beneficien tanto a la sociedad como al planeta.

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Casos prácticos de ética en ingeniería 
          p.mb-5 Este documento explora cómo la ética impacta el desarrollo tecnológico en la ingeniería. Un caso positivo muestra la inteligencia artificial en salud, respetando principios de transparencia y equidad, mientras que un caso negativo destaca un algoritmo de selección de personal que discrimina por falta de controles de sesgo. Estos ejemplos subrayan la importancia de integrar la ética en el diseño tecnológico, abordando temas clave como IA, sostenibilidad y privacidad. Además, se presentan competencias y herramientas prácticas esenciales para promover la ética en la ingeniería actual.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Casos prácticos de ética en ingeniería 



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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
