export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Qué es la Revolución 4.0?',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Impacto de la automatización en la ingeniería',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Digitalización: conceptos simples de IoT ',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Introducción a la ingenieria_U2.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cárdenas López, Juan Camilo - López Garzón, Wilmar Ferney. (2019). Tecnología internet of things (IoT) y el big data. Mare Ingenii. Ingenierías, 1 (1), 74-79. Fundación Universitaria San Mateo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente',
    },
    {
      referencia:
        'Cartagena, J. (s.f.). Industria 4.0 la 4ª revolución industrial.',
      link: '',
    },
    {
      referencia:
        'García Moreno, Emilio. (2020). Automatización de procesos industriales: robótica y automática. Editorial de la Universidad Politécnica de Valencia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente',
    },
    {
      referencia:
        'José William Ugalde Vicuña, Luis Enrique Soto Chávez. (2022). Desarrollo de competencias técnicas en la práctica de la ingeniería en la revolución industrial 4.0. AlfaPublicaciones.',
      link: 'https://elicit.com/notebook',
    },
    {
      referencia:
        'Pérez Calle, Ricardo. (2024). Economía, derecho y empresa ante una nueva era: digitalización, IA, y competitividad en un entorno global. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente',
    },
    {
      referencia: 'Pocho Costa. (s.f.). Inteligencia artificial.',
      link: 'https://open.spotify.com/show/6Ej4jertUixuVlqG8gYYEX',
    },
    {
      referencia:
        'Web 1.0, 2.0, 3.0 y 4.0 Diferencias y Características - La Evolución De La Web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Automatización',
      significado:
        'Uso de tecnologías para realizar tareas de forma automática',
    },
    {
      termino: 'AWS IoT Core',
      significado:
        'Conector que permite conectar una gran cantidad de dispositivos de diferentes tipos y protocolos',
    },
    {
      termino: 'Azure IoT Hub',
      significado:
        'Facilitador de gestión de un gran número de dispositivos, incluyendo tareas como la configuración, actualización y monitoreo',
    },
    {
      termino: 'Big data',
      significado:
        'Grandes volúmenes de datos que requieren tecnologías especiales para su análisis',
    },
    {
      termino: 'Ciberfísicos',
      significado:
        'Sistemas que combinan componentes físicos y digitales, como fábricas inteligentes',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'Protección de sistemas informáticos, redes y datos contra ataques',
    },
    {
      termino: 'Controlador PID',
      significado:
        'Es un mecanismo de control muy común en la industria y en diversos sistemas automatizados',
    },
    {
      termino: 'Ethernet o fieldbus',
      significado:
        'Es una tecnología de comunicación utilizadas en redes industriales, pero cada una tiene sus propias características y aplicaciones',
    },
    {
      termino: 'Fabricación aditiva',
      significado: 'Sinónimo de impresión 3D',
    },
    {
      termino: 'Google Cloud IoT Core',
      significado:
        'Es un servicio gestionado que forma parte de la plataforma en la nube de Google',
    },
    {
      termino: 'Impresión 3D',
      significado:
        'Tecnología que crea objetos tridimensionales a partir de un modelo digital',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'Capacidad de las máquinas para imitar la inteligencia humana',
    },
    {
      termino: 'Internet de las cosas (IoT)',
      significado: 'Red de dispositivos físicos conectados a internet',
    },
    {
      termino: 'Machine learning',
      significado:
        'Subcampo de la inteligencia artificial enfocado en el aprendizaje automático',
    },
    {
      termino: 'Neurociencia',
      significado: 'Estudio del sistema nervioso',
    },
    {
      termino: 'Plataformas digitales',
      significado:
        'Entornos virtuales que facilitan la interacción y el intercambio de información',
    },
    {
      termino: 'Realidad aumentada',
      significado: 'Tecnología que superpone elementos virtuales al mundo real',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
