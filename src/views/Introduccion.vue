<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(:titulo="'Unidad 2. Introducción a la Revolución 4.0 en Ingeniería'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-12.col-xl-8.bg-azul-claro.p-4.p-xl-5(data-aos="fade-right")
        p.mb-4 En las últimas décadas, hemos sido testigos de una transformación radical en la forma en que vivimos y trabajamos. La convergencia de tecnologías digitales, físicas y biológicas ha dado lugar a una nueva era industrial: la Revolución 4.0. Esta revolución, caracterizada por la interconexión de sistemas ciberfísicos, la inteligencia artificial y el big data, está redefiniendo los procesos productivos y la forma en que interactuamos con el entorno.
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
  
    p.text-bold.mb-4 ¿Por qué es importante esta revolución?
    p.mb-4 La Revolución 4.0 representa una oportunidad única para mejorar la calidad de vida, impulsar la innovación y resolver algunos de los desafíos más apremiantes de nuestra sociedad, como el cambio climático y la escasez de recursos. Al finalizar esta unidad, serás capaz de:

    .row.mb-5.justify-content-center.card_hover(data-aos="zoom-in-up")
      .col-10.col-sm-9.col-md-6.col-xl-3.mb-4(data-aos="fade-up-right")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-column
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-2.svg', style="width: 68px")
          
          p.mb-0.text-center.text-small Comprender los conceptos clave de la Revolución 4.0, como el Internet de las Cosas, la inteligencia artificial y los sistemas ciberfísicos.
      .col-10.col-sm-9.col-md-6.col-xl-3.mb-4(data-aos="fade-up-down")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-column
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-3.svg', style="width: 68px")  
          p.mb-0.text-center.text-small Analizar el impacto de esta revolución en diversos sectores, como la industria, la salud y la sociedad en general.
      .col-10.col-sm-9.col-md-6.col-xl-3.mb-4(data-aos="fade-up-up")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-column
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-4.svg', style="width: 68px")  
          p.mb-0.text-center.text-small Identificar las oportunidades y los desafíos que plantea la Revolución 4.0.
      .col-10.col-sm-9.col-md-6.col-xl-3.mb-4(data-aos="fade-up-left")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100.flex-column
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-5.svg', style="width: 68px")  
          p.mb-0.text-center.text-small Evaluar las implicaciones éticas y sociales de estas nuevas tecnologías.

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-rosa-claro.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-6.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") A lo largo de esta unidad, exploraremos los fundamentos de la Revolución 4.0, sus principales tecnologías y sus aplicaciones más relevantes. A través de actividades como lecturas, videos, discusiones en línea y ejercicios prácticos, desarrollarás las habilidades necesarias para comprender y participar en este emocionante cambio tecnológico. La Revolución 4.0 es un campo en constante evolución, por lo que te invitamos a explorar más allá de los contenidos de esta unidad. Mantenerse actualizado sobre las últimas tendencias es fundamental y compartir sus hallazgos con los compañeros.


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
