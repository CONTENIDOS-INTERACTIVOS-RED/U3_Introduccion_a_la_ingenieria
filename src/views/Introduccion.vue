<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(:titulo="'unidad 3. Pensamiento Crítico y solución de problemas en ingeniería'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .bg-fondo-3.bg-full-width
      div.px-5.pb-md-3.py-4

        .row.mb-5
          .col-12.col-xl-7.col-xxl-8.d-flex.flex-column(data-aos="fade-right")
            .d-flex.align-items-start.bg-azul.p-4.mb-4
              img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
              .d-flex.flex-column
                p.pe-xl-3.mb-0(data-aos="fade-up") En esta unidad, lograrán comprender cómo se resuelve un problema. Aprenderás las herramientas y técnicas que utilizan los ingenieros para enfrentar desafíos desde diferentes perspectivas.
            p.text-bold.mb-4 ¿Por qué es importante esto? 
            p.mb-0  Porque la capacidad de resolver problemas es una habilidad esencial en cualquier profesión, pero especialmente en la ingeniería. Serás capaz de:
          .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  

        .row.mb-4.justify-content-center.card-hover
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-3.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Identificar problemas con precisión
              p.px-1.text-small.mb-0.d-flex.text-center Aprenderán a distinguir entre síntomas y causas raíz.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Generar ideas creativas
              p.px-1.text-small.mb-0.d-flex.text-center Desarrollarán un pensamiento lateral para encontrar soluciones innovadoras.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Evaluar alternativas
              p.px-1.text-small.mb-0.d-flex.text-center Tomarán decisiones informadas basadas en datos y análisis.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-6.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Implementar soluciones efectivas
              p.px-1.text-small.mb-0.d-flex.text-center Llevarán sus ideas a la práctica de manera exitosa.

    p.mb-2.text-bold ¿Cómo se va a lograrlo?
    p.mb-4 A lo largo de esta unidad, se explorará los siguientes temas:


    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold El proceso de resolución de problemas
              p Paso a paso, desde la identificación del problema hasta la evaluación de los resultados.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Técnicas de pensamiento crítico
              p Aprenderás a analizar información, evaluar argumentos y tomar decisiones fundamentadas.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Herramientas para la resolución de problemas
              p Descubrirás diagramas, matrices y otras herramientas útiles para visualizar y organizar información.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Casos prácticos
              p Aplicaremos los conceptos aprendidos a situaciones reales de ingeniería, como el diseño de un nuevo producto o la optimización de un proceso.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')





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
