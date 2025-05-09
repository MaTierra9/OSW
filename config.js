let topTitleDiv = "";

let titleDiv =
  '<h1 style="text-align:center">Rancho Calpa: El montaje detrás de la Operación Bastión</h1>';

let bylineDiv = '<p style="font-size: 13px"> Investigación y visualización: Ivan Ortiz | Publicado el 7 de mayo de 2025 </p>';

let descriptionDiv =
'<p style="background-color:#fafafa">Dos ranchos de lujo en el Estado de México exhiben un montaje detrás del último golpe a la Nueva Familia Michoacana, el tercer cartel más poderoso de México, y una red de complicidades y narcogobierno que operó impune durante los últimos cinco años.</p>' +
'<p style="background-color:#fafafa"> En marzo de 2025 autoridades estatales y federales capturaron 21 inmuebles usados por la Familia en el sur del Edomex, desde puntos de halconeo hasta mansiones de lujo. El operativo, llamado Operación Bastión, se presumió como un logro nacional frente al crimen organizado. Sin embargo, al menos dos de estas propiedades —los Ranchos Calpa y Las Piñuelas— ya habían sido cateados en 2020 y 2022, respectivamente. Pero su captura se presentó como si fuera reciente. Así lo revelan informes públicos y confidenciales de los #GuacamayaLeaks hallados por AD Noticias.</p>' +
'<p style="background-color:#fafafa">Los documentos, además, exhiben que algunos inmuebles eran propiedad de ex alcaldes mexiquenses, quienes actuaron como prestanombres del cartel. Ni el gobierno estatal ni el federal quisieron dar una postura al respecto ni una explicación sobre los ranchos asegurados años atrás, poniendo en entredicho la Operación Bastión.</p>' +

  '<p style="text-align:center">Haz scroll para continuar <br>▼</p>';

let footerDiv =
  '<br> Esta visualización fue creada usando <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';

let divChapter1 =
  '<img src="images/FM-Portada.jpg">' +
  "<p> El Estado de México está bajo el dominio de la Nueva Familia Michoacana. La organización criminal opera en 74 municipios a lo largo de la entidad, seis de cada 10. </p>"+
  "<p> En la llamada Tierra Caliente, en el sur del Edomex, la Familia controla delitos como el narcotráfico, trata de personas, minería ilegal y, sobre todo, la extorsión: la imposición de impuestos informales a pobladores y comerciantes mediante el cobro de piso. </p>";
  ;

  let divChapter2 =
  '<h3> 28 de marzo de 2025</h3>' +
  "<p>La Fiscalía General de Justicia del Estado de México (FGJEM) obtuvo órdenes de cateo para tomar 21 inmuebles usados por la Nueva Familia Michoacana en seis municipios de Tierra Caliente: Amatepec, Luvianos, Sultepec, Tejupilco, Temascaltepec y Tlatlaya.</p>" +
  "<p>Participaron también elementos del Ejército Nacional, la Secretaría de la Marina, la Guardia Nacional y la Secretaría de Seguridad del Estado de México.  El operativo, llamado Operación Bastión, se dio un par de meses después de que Estados Unidos declarará al cartel como una organización terrorista.</p>"+
  '<img src="images/OperacionBastionP1.png">';
  ;

let divChapter3 =
'<h3 style="text-align:center"> Los lujos de la Familia Michoacana</h3>'+
'<p style="text-align:center">Varios de los inmuebles servían como casas de seguridad, puntos de halconeo o de venta de droga. Pero otros eran ranchos para el descanso de los líderes de la organización, cuyos lujos se volvieron noticia nacional: Acabados en oro o maderas preciosas, piscinas, canchas de tenis o salas de cine.</p>' +
'<p style="text-align:center"> Algunos ranchos contaban con lagos artificiales que hacían de los inmuebles auténticos oasis en medio de las áridas barrancas mexiquenses. Unos más tenían un zoológico privado con animales exóticos vivos y disecados.</p>' +
'<img src="images/southfarm.png">' 

  ;
let divChapter4 =
  "<p>The main problem with the projects, according to McWilliams, is that they are not coordinated. Because wind farms are proposed by individual companies and funded commercially, he said there is lack of consultation among stakeholders that could have brought to light the projects’ pros and cons.</p>" 
 ;

 let divChapter5 =
 "<p>That was not the case in Rhode Island, where America’s first wind farm was constructed by Ørsted in 2016. At the time, McWilliams said the federal government, through the Bureau of Ocean Energy Management, stepped in to limit areas where windmills can be built in order to avoid disrupting wildlife.</p>" +
 "<p>“They immediately took off the table any shipping lanes…, whale migration quarters and waters less than 20 meters in depth because we knew that that’s where most of the waterfowl and waterbirds concentrate,” he explained.</p>";

;

let divChapter6 =

  "<p>“They immediately took off the table any shipping lanes…, whale migration quarters and waters less than 20 meters in depth because we knew that that’s where most of the waterfowl and waterbirds concentrate,” he explained.</p>";
  ;

  let divChapter7 =

  "<p>As pushback to wind farms grows, builders erecting these projects have started putting in place contingencies, not only to protect wildlife but also their investment. </p>" +
  "<p> In June, Ørsted announced an agreement with environmental organizations to protect the North Atlantic Right Whale, common near Long Island waters and is facing extinction. The agreement, among others, will see the company enforce measures to help keep whales away from project sites as well as minimize noise during construction to avoid disturbing animals in the area.</p>" +
  "<p> Such efforts will not completely eliminate wildlife risks posed by the projects, but can help mitigate them. In the end, Columbia’s Fell said offshore wind farms are still “net positive” for New York, which presently relies heavily on natural gas for its power. </p>" +
  // '<img src="images/southfarm.png">' +
  "<p> McWilliams agreed. “I’m saying the effect would still be positive, but just be careful where you put it,” he said.</p>" 
  ;
var config = {
  style: "mapbox://styles/adnoticias/cm9rpnk8w00jz01so789a7vkh",
  accessToken: "pk.eyJ1IjoiYWRub3RpY2lhcyIsImEiOiJjbTluM3dvMnUwY3pvMmpweXY5Nzlwb25sIn0.KmpjzY2cdB187bB1xNBsnA",
  showMarkers: true,
  markerColor: "#3FB1CE",
  theme: "adnoticias",
  backgroundImage: 'images/cover page1.png',
  use3dTerrain: true,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "overallMap",
      alignment: "left",
      hidden: true,
      chapterDiv: divChapter1,
      location: { 
        center: [-99.68780, 19.33646],
        zoom: 4.8,
        zoomSmall: 0,
        pitch: 31.50,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
        },
        {
          layer: 'FMMunicipios2020',
          opacity: 0
        },
        {
          layer: 'FMMunicipios2024',
          opacity: 0
        },
        {
          layer: 'ranchos-opb',
          opacity: 0
        },
        {
          layer: 'bases-halconeo-2020',
          opacity: 0
        },
        {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
        },
        {
          layer: 'rancho-calpa-p',
          opacity: 0
        },
        {
           layer: 'ataque-sep-2020',
          opacity:0
        }
      ],
      onChapterExit: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
        },
        {
          layer: 'FMMunicipios2020',
          opacity: 0
        },
        {
          layer: 'FMMunicipios2024',
          opacity: 1
        },
        {
          layer: 'ranchos-opb',
          opacity: 0
        },
        {
          layer: 'bases-halconeo-2020',
          opacity: 0
        },
        {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
        },
        {
          layer: 'rancho-calpa-p',
          opacity: 0
        },
        {
           layer: 'ataque-sep-2020',
          opacity:0
        }
      ],
    },
    {
      id: "capitulo-1",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: { 
        center: [-100.851752, 19.175943],
        zoom: 7.5,
        zoomSmall: 0,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
        },
        {
          layer: 'FMMunicipios2020',
          opacity: 0
        },
        {
          layer: 'FMMunicipios2024',
          opacity: 1
        },
        {
          layer: 'ranchos-opb',
          opacity: 0
        },
        {
          layer: 'bases-halconeo-2020',
          opacity: 0
        },
        {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
        },
        {
          layer: 'rancho-calpa-p',
          opacity: 0
        },
        {
           layer: 'ataque-sep-2020',
          opacity:0
        }
      ],
      onChapterExit: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
        },
        {
          layer: 'FMMunicipios2020',
          opacity: 0
        },
        {
          layer: 'FMMunicipios2024',
          opacity: 0
        },
        {
          layer: 'ranchos-opb',
          opacity: 1
        },
        {
          layer: 'bases-halconeo-2020',
          opacity: 0
        },
        {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
        },
        {
          layer: 'rancho-calpa-p',
          opacity: 0
        },
        {
           layer: 'ataque-sep-2020',
          opacity:0
        }
      ],
    },
    {
      id: "capitulo-2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-99.636270, 18.823303],
        zoom: 8.9,
        zoomSmall: 0,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 1
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 0
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
      onChapterExit: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 1
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 0
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
    },
    {
      id: "capitulo-3",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-100.196483, 18.705694],
        zoom: 10.05,
        zoomSmall: 0,
        pitch: 40.0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 1
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 0
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
      onChapterExit: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 1
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 0
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
    },
    {
      id: "capitulo-3.5",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-100.268679, 18.698405],
        zoom: 17.35,
        zoomSmall: 0,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 1
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 0
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 1
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
      onChapterExit: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 1
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 0
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 1
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
    },
   
    {
      id: "capitulo-4",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-100.268307, 18.698297],
        zoom: 17.35,
        zoomSmall: 0,
        pitch: 42.50,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 1
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 0
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 1
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
      onChapterExit: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 0
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 1
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 1
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
      
    },
    {
      id: "capitulo-5",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-100.200080, 18.642349],
        zoom: 10.75,
        zoomSmall: 0,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 0
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 1
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 1
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
      onChapterExit: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 0
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 1
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 1
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
      ],
    },

    {
      id: "capitulo 6",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-100.268679, 18.698405],
        zoom: 17.35,
        zoomSmall: 0,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 0
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 1
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 1
      },
      {
        layer: 'ataque-sep-2020',
       opacity:0
     }
          ],
      onChapterExit: [
        {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 0
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 1
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 1
      },
      {
        layer: 'ataque-sep-2020',
       opacity: 1
     }
      ],
    },
    {
      id: 'capitulo-7',
      alignment: 'left',
      hidden: false,
      title: 'Capitulo 7',
      image: './assets/geneva.jpg',
      description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
      location: {
          center: [-100.321193, 18.783406],
          zoom: 10.75,
          pitch: 0.0,
          bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
          {
              layer: 'MunicipiosEdomex',
              opacity: 1
          },
          {
              layer: 'FMMunicipios2020',
              opacity: 0
          },
          {
              layer: 'FMMunicipios2024',
              opacity: 0
          },
          {
              layer: 'ranchos-opb',
              opacity: 1
          },
          {
              layer: 'bases-halconeo-2020',
              opacity: 0
          },
          {
              layer: 'rancho-las-piuelas-p',
              opacity: 0
          },
          {
              layer: 'rancho-calpa-p',
              opacity: 1
          },
          {
            layer: 'ataque-sep-2020',
           opacity: 1
         }
      ],
      onChapterExit: []
  },
  {
    id: 'capitulo-8',
    alignment: 'left',
    hidden: false,
    title: 'Capitulo 8',
    image: './assets/geneva.jpg',
    description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
    location: {
        center: [-100.159645, 18.883581],
        zoom: 13.25,
        pitch: 0,
        bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [
        {
            layer: 'MunicipiosEdomex',
            opacity: 1
        },
        {
            layer: 'FMMunicipios2020',
            opacity: 0
        },
        {
            layer: 'FMMunicipios2024',
            opacity: 0
        },
        {
            layer: 'ranchos-opb',
            opacity: 0
        },
        {
            layer: 'bases-halconeo-2020',
            opacity: 1
        },
        {
            layer: 'rancho-las-piuelas-p',
            opacity: 0
        },
        {
            layer: 'rancho-calpa-p',
            opacity: 0
        },
        {
          layer: 'ataque-sep-2020',
         opacity: 1
       }
    ],
    onChapterExit: []
},
{
  id: 'capitulo-9',
  alignment: 'left',
  hidden: false,
  title: 'Capitulo 9',
  image: './assets/geneva.jpg',
  description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
  location: {
      center: [-100.142010, 18.880194],
      zoom: 17.5,
      pitch: 0,
      bearing: 0.00
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: '',
  onChapterEnter: [
      {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 0
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 1
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity: 1
     }
  ],
  onChapterExit: []
},
{
  id: 'capitulo-10',
  alignment: 'left',
  hidden: false,
  title: 'Capitulo 10',
  image: './assets/geneva.jpg',
  description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
  location: {
      center: [-100.150577, 18.949680],
      zoom: 11.0,
      pitch: 0,
      bearing: 0.00
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: '',
  onChapterEnter: [
      {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 0
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 1
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity: 1
     }
  ],
  onChapterExit: []
},
{
  id: 'capitulo-11',
  alignment: 'left',
  hidden: false,
  title: 'Capitulo 11',
  image: './assets/geneva.jpg',
  description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
  location: {
      center: [-100.094293, 18.966978],
      zoom: 14.6,
      pitch: 0,
      bearing: 0.00
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: '',
  onChapterEnter: [
      {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 0
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 1
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity: 1
     }
  ],
  onChapterExit: []
},
{
  id: 'capitulo-12',
  alignment: 'left',
  hidden: false,
  title: 'Capitulo 12',
  image: './assets/geneva.jpg',
  description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
  location: {
      center: [-100.050796, 19.015853],
      zoom: 14.65,
      pitch: 0,
      bearing: 0.00
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: '',
  onChapterEnter: [
      {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 0
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 1
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity: 1
     }
  ],
  onChapterExit: []
},
{
  id: 'capitulo-13',
  alignment: 'left',
  hidden: false,
  title: 'Capitulo 13',
  image: './assets/geneva.jpg',
  description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
  location: {
      center: [-100.257873, 18.679871],
      zoom: 10.25,
      pitch: 0,
      bearing: 0.00
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: '',
  onChapterEnter: [
      {
          layer: 'MunicipiosEdomex',
          opacity: 1
      },
      {
          layer: 'FMMunicipios2020',
          opacity: 0
      },
      {
          layer: 'FMMunicipios2024',
          opacity: 0
      },
      {
          layer: 'ranchos-opb',
          opacity: 1
      },
      {
          layer: 'bases-halconeo-2020',
          opacity: 0
      },
      {
          layer: 'rancho-las-piuelas-p',
          opacity: 0
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity: 1
     }
  ],
  onChapterExit: []
}

  ],
};