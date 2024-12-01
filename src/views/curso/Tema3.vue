<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Introducción a la Revolución 4.0 en Ingeniería'" :subTitulo="'3. Digitalización: conceptos simples de IoT '")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.mb-5
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-62.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La Internet de las Cosas, conocida como IoT, está transformando el entorno en formas que hace algunos años parecían sacadas de la ciencia ficción. Desde los hogares hasta las grandes fábricas, esta tecnología conecta dispositivos que interactúan entre sí y con las personas de manera inteligente, creando ecosistemas que optimizan tanto la vida cotidiana como los procesos industriales.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')  

    p.mb-4 Para profundizar en cómo funciona el IoT y sus implicaciones en distintos ámbitos, se invita a revisar este video, que explora los beneficios, desafíos y el inmenso potencial de esta tecnología innovadora. ¡Una oportunidad que no se puede perder!
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
    h2.mb-4 ¿Cómo funciona el IoT?
    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-azul-claro.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-67.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El Internet de las Cosas (IoT) permite conectar dispositivos físicos a la nube para recopilar y analizar datos en tiempo real, transformando industrias y ciudades a través de tecnologías interconectadas. Imagina una fábrica moderna donde cada máquina —desde robots de soldadura hasta sistemas de control de calidad— está equipada con sensores que capturan información constantemente. Estos datos se envían a la nube, donde se analizan con herramientas de inteligencia artificial, permitiendo a los ingenieros optimizar el funcionamiento de cada máquina, anticipar fallas y ajustar procesos.

    p.mb-4 Esta misma tecnología se aplica en diversas áreas como la agricultura y las ciudades inteligentes, donde sensores monitorean condiciones y adaptan recursos para optimizar resultados y mejorar la calidad de vida. Para entender mejor el funcionamiento del IoT, podemos usar una analogía arquitectónica de capas, donde cada nivel desempeña una función específica e interconectada:
    p.mb-3 <strong>Tabla 1 </strong> Funcionamiento de IoT

    .tabla-a.mb-5
      table
        thead
          tr
            th.text-center Capa
            th.text-center.border-left-gris Descripción
            th.text-center.border-left-gris Ejemplo
        tbody
          tr
            td.d-flex.text-bold Capa de Dispositivos  
            td.border-left-gris.border-right-gris Compuesta por sensores y actuadores que recolectan datos del entorno y ejecutan acciones según las instrucciones recibidas. Incluye también microcontroladores que procesan datos y toman decisiones locales.
            td.d-flex Un sensor de movimiento detecta a una persona y envía una señal a un microcontrolador, que enciende una luz.
          tr
            td.d-flex.text-bold Dirección del razonamiento  
            td.border-left-gris.border-right-gris Esta capa conecta los dispositivos entre sí y con la red externa. Protocolos como Wi-Fi, Bluetooth y Zigbee facilitan la comunicación, mientras que los gateways actúan como puentes hacia internet.
            td.d-flex Un gateway IoT recoge datos de sensores y los envía a la nube a través de una conexión Wi-Fi.
          tr
            td.d-flex.text-bold Capa de Plataforma
            td.border-left-gris.border-right-gris En la nube, los datos son procesados y analizados utilizando herramientas de big data y aprendizaje automático. Plataformas como AWS IoT Core y Azure IoT Hub proporcionan infraestructura para gestionar los dispositivos IoT.
            td.d-flex Un algoritmo analiza el consumo energético de un hogar y ajusta automáticamente la temperatura para optimizar el uso de energía.
          tr
            td.d-flex.text-bold Capa de Aplicación
            td.border-left-gris.border-right-gris Es la interfaz visible para los usuarios, donde pueden controlar los dispositivos IoT y visualizar los datos. Incluye aplicaciones móviles y web con interfaces intuitivas.
            td.d-flex Una aplicación móvil permite al usuario ajustar el termostato y controlar la iluminación en su hogar.

    p.text-bold.mb-4 Ejemplo completo: Invernadero inteligente
    p.mb-4 Un invernadero equipado con sensores mide temperatura, humedad, luz y nutrientes en el suelo. Estos datos se envían a la nube, donde un algoritmo determina si es necesario ajustar la iluminación o el riego. Los actuadores ejecutan estos cambios y el agricultor puede monitorear y ajustar los parámetros a través de una aplicación móvil.

    .row.bg-azul-claro.bg-full-width.py-4.mb-0
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Monitoreo de procesos industriales con IoT
          p.mb-4 ¿Sabía que el IoT está revolucionando la industria mediante el monitoreo en tiempo real?  Lo invitamos a leer el documento Monitoreo de procesos industriales con IoT,  descubrirá cómo el IoT optimiza procesos, reduce costos y mejora la eficiencia en sectores clave como la manufactura y la logística.

          p.mb-5  A través de ejemplos de éxito, explore cómo las empresas líderes aplican estas tecnologías para anticiparse a fallas y fortalecer su competitividad global.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>  ¿Sabía que el IoT está revolucionando la industria mediante el monitoreo en tiempo real?


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
