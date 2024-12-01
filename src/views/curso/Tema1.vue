<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Introducción a la Revolución 4.0 en Ingeniería'" :subTitulo="'1. ¿Qué es la Revolución 4.0?'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg-fondo-4.bg-full-width
      div.px-5.pb-md-3.py-4

        p.mb-4 La convergencia de tecnologías digitales, físicas y biológicas ha inaugurado una nueva era industrial: la Revolución 4.0. Este paradigma, impulsado por la interconexión de sistemas ciberfísicos, la inteligencia artificial y el big data, está redefiniendo procesos productivos y la interacción con el entorno. A continuación, se describen las tres áreas clave de tecnología que la caracterizan:

        .row.mb-5
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Tecnologías digitales
                p.text-small.px-4.text-center.pb-2 Incluyen el internet de las cosas (IoT), la inteligencia artificial (IA), big data, la computación en la nube y la ciberseguridad. Facilitan la conexión e intercambio de información entre dispositivos y sistemas.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Tecnologías físicas
                p.text-small.px-4.text-center.pb-2 Comprenden la automatización industrial, la robótica, la fabricación aditiva (impresión 3D) y la realidad aumentada. Permiten la creación y manipulación de objetos físicos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Tecnologías biológicas
                p.text-small.px-4.text-center.pb-2 Abarcan la biotecnología, la ingeniería genética y la neurociencia, permitiendo la modificación y comprensión de sistemas biológicos.

    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo-1.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-10.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La integración de estas tecnologías ha creado entornos en los que sistemas físicos y digitales funcionan de manera seamless, dando lugar a sistemas ciberfísicos. En estos, la inteligencia artificial y el big data actúan como el “cerebro y sistema nervioso”, mientras que las transformaciones en los procesos y la interacción con el entorno son las “consecuencias” de esta integración.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')  

    h2.mb-4 Sistemas ciberfísicos
    p.mb-4 Los sistemas ciberfísicos  combinan componentes computacionales y físicos, permitiendo monitoreo y control a través de internet, lo cual incrementa la eficiencia y flexibilidad en los procesos productivos. Algunos ejemplos son:


    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="28%" y="86%" numero="+")
        .h5.mb-2 Fábricas inteligentes
        p A partir de una idea, los ingenieros desarrollan planos detallados, crean modelos y prototipos, y supervisan la construcción de proyectos.
      .tarjeta.bg-white.p-4(x="50.5%" y="67%" numero="+")
        .h5.mb-2 Ciudades inteligentes
        p Sistemas de transporte, energía y gestión de residuos interconectados para optimizar la funcionalidad urbana.
      .tarjeta.bg-white.p-4(x="72%" y="86%" numero="+")
        .h5.mb-2 Productos inteligentes
        p Equipados con sensores y conectividad IoT, estos productos recopilan datos y ofrecen servicios personalizados.

    h2.mb-5 Inteligencia artificial y big data
    p.mb-4 La inteligencia artificial desempeña un rol clave en la Revolución 4.0 al permitir que las máquinas aprendan de datos y tomen decisiones de manera autónoma. Big data aporta los datos necesarios para entrenar los algoritmos de IA. Entre las aplicaciones destacan:

    .row.mb-5.justify-content-center.card_hover(data-aos="zoom-in-up")
      .col-10.col-sm-9.col-md-6.col-xl-4.mb-4(data-aos="fade-up-right")
        .custom-image-card.d-flex.align-items-.justify-content-center.p-3.h-100
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-13.svg', style="width: 68px")
          .d-flex.flex-column.ps-3
            p.mb-3.text-bold Aprendizaje automático. 
            p.mb-0.text-small Permite que las máquinas aprendan a partir de datos sin ser programadas explícitamente.
      .col-10.col-sm-9.col-md-6.col-xl-4.mb-4(data-aos="fade-up-left")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-14.svg', style="width: 68px")  
          .d-flex.flex-column.ps-3
            p.mb-3.text-bold Visión por computadora.
            p.mb-0.text-small Habilita a las máquinas para interpretar y entender el entorno visual.
      .col-10.col-sm-9.col-md-6.col-xl-4.mb-4(data-aos="fade-down-right")
        .custom-image-card.d-flex.justify-content-center.p-3.h-100
          img.mx-auto.mb-3(src='@/assets/curso/unidad/img-15.svg', style="width: 68px")
          .d-flex.flex-column.ps-3
            p.mb-3.text-bold Procesamiento del lenguaje natural
            p.mb-0.text-small Capacita a las máquinas para comprender y generar lenguaje humano.
          
    h2.mb-5 La fábrica del futuro: inteligente y sostenible

    p.mb-4 La Revolución 4.0 también está transformando la producción y el consumo de bienes y servicios, impulsando fábricas inteligentes que ofrecen cambios significativos como:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Mayor personalización
              p Los productos se adaptan a las necesidades específicas de los consumidores.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Mayor eficiencia
              p La optimización de procesos reduce costos y aumenta la productividad.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Mayor flexibilidad
              p Los sistemas de producción responden rápidamente a cambios en la demanda.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Nuevos modelos de negocio
              p Basados en la economía colaborativa y suscripciones, diversifican las oportunidades de mercado.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    p.mb-5 La Revolución 4.0 impulsa una transformación profunda de la sociedad y la economía. Los ingenieros son agentes clave en este cambio, responsables de diseñar, desarrollar e implementar soluciones tecnológicas innovadoras que definen el futuro. Con este enfoque, el rol del ingeniero se centra en aprovechar estas tecnologías para anticipar las necesidades, tomar decisiones en tiempo real y liderar la innovación en cada ámbito.
    h2.mb-5 Conceptos clave de la Revolución 4.0

    p.mb-4 La Revolución 4.0 es un campo en evolución constante. A continuación, algunos conceptos clave generales y específicos en los que se basa:

    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Realidad aumentada y virtual", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Realidad aumentada y virtual
            p(data-aos="fade-up") Permiten superponer información digital al mundo real o crear entornos inmersivos, útiles en capacitación, diseño y mantenimiento de equipos.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Robótica colaborativa", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Robótica colaborativa
            p(data-aos="fade-up") Los cobots trabajan de forma segura con humanos, mejorando flexibilidad y eficiencia.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ciberseguridad", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Ciberseguridad
            p(data-aos="fade-up") Con la creciente interconexión, es fundamental para proteger datos y asegurar la continuidad operativa.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Cadena de suministro inteligente", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Cadena de suministro inteligente
            p(data-aos="fade-up") La integración de IoT y blockchain ofrece visibilidad y trazabilidad, mejorando eficiencia y seguridad.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Plataformas de desarrollo de bajo código", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Plataformas de desarrollo de bajo código
            p(data-aos="fade-up") Facilitan la creación rápida de aplicaciones, acelerando la implementación de soluciones.

    h2.mb-5 Conceptos específicos en la Revolución 4.0
    p.mb-4 En el marco de la Revolución 4.0, ciertos conceptos específicos se destacan por su capacidad para transformar distintos aspectos de la producción, gestión de datos y optimización de recursos. A continuación, se presentan estos conceptos junto con sus aplicaciones y descripciones.

    .bg-fondo-5.bg-full-width
      div.px-5.pb-md-3.py-4
        .row.justify-content-center.mb-5
          .d-none.d-xl-block.col-11.col-lg-4.col-xxl-4
            img.h-xxl-100(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
          .col-10.col-md-8.col-lg-10.col-xl-8.col-xxl-8
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-27.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Internet de las cosas (IoT)
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Integración de sensores y dispositivos que recopilan y envían datos a través de internet.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-28.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Edge computing
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Procesamiento de datos cercano a donde se generan, reduciendo latencia y mejorando eficiencia.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-29.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center LoRaWAN
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Tecnología de comunicación de largo alcance y bajo consumo, ideal para redes de sensores IoT.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-30.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Inteligencia artificial
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Uso de algoritmos avanzados para que las máquinas tomen decisiones basadas en datos.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-31.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Machine learning
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Algoritmos que permiten a las máquinas aprender y mejorar su rendimiento.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-32.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Deep learning
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Subcampo del machine learning que emplea redes neuronales para resolver problemas complejos.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-33.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Visión por computadora
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Tecnología que capacita a las máquinas para interpretar y analizar imágenes y videos.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-34.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Big data
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Gestión de grandes volúmenes de datos para analizar y descubrir patrones. 
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-35.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Data lakes
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Almacenes sin estructura para grandes volúmenes de datos de diversas fuentes.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-36.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Data mining
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Proceso de descubrimiento de patrones ocultos en grandes conjuntos de datos.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-37.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Manufactura aditiva
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Tecnología de producción que crea piezas a través de capas de material, como en la impresión 3D.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-38.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Impresión 3D en metal
                    p.px-4.mb-3.text-small.text-center Fabricación de piezas metálicas complejas con alta precisión mediante impresión en tres dimensiones.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-39.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Materiales compuestos
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Combinación de materiales para crear piezas con propiedades específicas y personalizadas.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-40.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Gemelos digitales
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Modelos virtuales de sistemas físicos que permiten simular y optimizar su funcionamiento.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-41.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Modelado de sistemas
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Creación de modelos virtuales detallados de sistemas físicos para análisis y simulación.
              .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
                .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
                  div.box-shadow.ms-3.h-100.bg-white(style="borderRadius: 0px 0px 18px 18px") 
                    img(src='@/assets/curso/unidad/img-42.png' alt='AvatarTop')
                    p.my-3.px-4.text-bold.text-center Mantenimiento predictivo
                    p.px-4.mb-4.mb-xl-5.text-small.text-center Uso de datos de gemelos digitales para anticipar fallas y realizar mantenimiento preventivo.
        p.mb-4 Estos conceptos abarcan el amplio espectro de la Revolución 4.0, representando el avance de tecnologías que modifican las estructuras productivas y sociales, con ingenieros a la vanguardia de esta transformación global.

        .row.bg-azul-claro.bg-full-width.py-4.mb-4
          div.px-5.pb-md-3.py-4.d-flex
            .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
              img.h-100(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
            .col-12.col-xl-7.col-xxl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-right")
              h2.mb-4.pb-2  ¿Sabía que la Revolución 4.0 está transformando la ingeniería?
              p.mb-5 Este documento: <strong>Revolución 4.0: un nuevo paradigma para la ingeniería</strong>, explora cómo tecnologías como la inteligencia artificial, la robótica y los gemelos digitales están revolucionando el diseño, la producción y el mantenimiento en distintos sectores. Descubra cómo estos avances están impulsando procesos más eficientes y sostenibles, preparando a la ingeniería para un futuro lleno de posibilidades.
              a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
                img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
                p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Revolución 4.0: un nuevo paradigma para la ingeniería

    h2 La transformación de la ingeniería en la Revolución 4.0
    p La Revolución 4.0 ha cambiado profundamente la práctica de la ingeniería, posicionando a los ingenieros como arquitectos de futuros digitales. Ahora, los profesionales de esta área no solo diseñan y construyen; también impulsan la innovación y solucionan problemas en un mundo conectado, gracias a herramientas avanzadas como la inteligencia artificial, el big data, y la automatización. Esta evolución ha transformado desde el diseño hasta el mantenimiento de productos y sistemas, permitiendo un enfoque más dinámico y eficiente en todos los procesos.  

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
