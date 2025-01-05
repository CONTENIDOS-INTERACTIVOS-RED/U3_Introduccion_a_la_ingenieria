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

    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Casos prácticos de ética en ingeniería 
          p.mb-5 Este documento explora cómo la ética impacta el desarrollo tecnológico en la ingeniería. Un caso positivo muestra la inteligencia artificial en salud, respetando principios de transparencia y equidad, mientras que un caso negativo destaca un algoritmo de selección de personal que discrimina por falta de controles de sesgo. Estos ejemplos subrayan la importancia de integrar la ética en el diseño tecnológico, abordando temas clave como IA, sostenibilidad y privacidad. Además, se presentan competencias y herramientas prácticas esenciales para promover la ética en la ingeniería actual.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Casos prácticos.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Casos prácticos de ética en ingeniería 

    .bg-full-width.border-top-9-azul.mb-5
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/27394") Vedia, L. (2012). Comportamiento ético individual y organizacional en la práctica de ingeniería. ANI.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/bcJ9HOsswQo") Diego, enseñando sobre la IA (2021). Ética y Responsabilidad Social en la Ingeniería 4.0 [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Enfoque Ingenieril y Diseño de Sistemas',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Los problemas de ingeniería suelen ser multidisciplinarios, lo que significa que:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se pueden resolver con conocimientos de una sola área',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Requieren de conocimientos de diversas áreas como física, química y matemáticas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son muy sencillos de resolver',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No necesitan de un enfoque sistemático',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Por qué es importante el pensamiento crítico en la ingeniería?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para tomar decisiones basadas en emociones',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para evitar analizar las diferentes opciones',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para evaluar las ventajas y desventajas de cada solución',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para no considerar las consecuencias de las acciones',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'La innovación constante en ingeniería se debe a:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La falta de cambios en la tecnología',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La necesidad de encontrar soluciones a problemas nuevos y cambiantes',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La resistencia a adoptar nuevas ideas',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La falta de recursos', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes factores NO es una consideración importante al diseñar un sistema de ingeniería?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El costo del sistema', esCorrecta: false },
            { id: 'b', texto: 'El impacto ambiental', esCorrecta: false },
            { id: 'c', texto: 'La estética del sistema', esCorrecta: true },
            {
              id: 'd',
              texto: 'La funcionalidad del sistema',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Al diseñar un sistema de purificación de agua para una comunidad rural, ¿cuál de los siguientes factores NO se debería considerar?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La calidad del agua de la fuente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La capacidad de producción del sistema',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El costo de operación y mantenimiento',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El color del tanque de almacenamiento',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
