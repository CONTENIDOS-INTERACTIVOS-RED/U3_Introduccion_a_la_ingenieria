<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Pensamiento Crítico y solución de problemas en ingeniería'" :subTitulo="'1. Pensamiento crítico y solución de problemas en ingeniería'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.position-relative.mb-0.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3
        .row.mb-5
          .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')  
          .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
            p 
            .d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-left")
              img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-12.svg', alt='Texto que describa la imagen')
              .d-flex.flex-column
                p.pe-xl-3.mb-0(data-aos="fade-up") La función de un ingeniero en el mundo real es mucho más amplia y fascinante de lo que muchos imaginan. En esencia, un ingeniero es un solucionador de problemas que aplica conocimientos científicos y matemáticos para diseñar, desarrollar, implementar y mejorar productos, sistemas y procesos que satisfacen las necesidades de la sociedad. Los ingenieros enfrentan desafíos complejos que requieren un pensamiento lógico, creativo y crítico debido a la naturaleza misma de su trabajo. 

    .row.mb-5
      .col-11.col-xl-10.col-xxl-8.mx-auto.-mt-50px.z-3(data-aos="fade-up")
        .tarjeta.bg-white.box-shadow.p-3.mb-0
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.ps-lg-4
              img(src="@/assets/componentes/pdf-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-2.text-small  Pensamiento crítico y solución de problemas en ingeniería
                  p.text-small.mb-0 Lo invitamos a conocer algunas de las razones por las cuales los ingenieros enfrentan situaciones donde el pensamiento crítico y creativo es fundamental, para lo cual lo invitamos a consultar el documento.
                .col-sm-auto
                  a.download-btn.boton.bg-morado.text-white(:href="obtenerLink('/downloads/Anexos_Pensamiento crítico.pdf')" target="_blank")
                    span.text-small.text-app Descargar
                    i.fas.fa-arrow-right.text-app

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        span La ingeniería, como disciplina fundamental para el desarrollo de la sociedad, se basa en la investigación y el análisis para abordar los desafíos más complejos. Este enfoque no solo permite identificar antecedentes y causas de los problemas, sino también diseñar soluciones innovadoras y sostenibles. A través de ejemplos prácticos y un estudio riguroso de datos, los ingenieros transforman el conocimiento en herramientas efectivas para la toma de decisiones, demostrando cómo la ciencia y la creatividad convergen para mejorar la calidad de vida y enfrentar los retos del futuro.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')


    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto ¿Sabías que la investigación en ingeniería es clave para resolver problemas complejos? 
          p.mb-5 En el documento Investigaciones clave en ingeniería: antecedentes, causas, soluciones e impacto, descubrirá cómo los ingenieros investigan antecedentes, causas y soluciones para desarrollar respuestas innovadoras. A través de ejemplos prácticos y análisis de datos, se muestra cómo la ingeniería utiliza la investigación para tomar decisiones informadas y efectivas.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Investigaciones clave en ingeniería.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Investigaciones clave en ingeniería: antecedentes, causas, soluciones e impacto
             

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/22325") Mestre, U. (2009). La formación de habilidades en estudiantes de ingeniería. Editorial Universitaria.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/NgIG029_IM4") Universidad continental (2019). El problema de la investigación [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

             

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
