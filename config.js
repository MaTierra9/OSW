let topTitleDiv = "";

let titleDiv =
  '<h1 style="text-align:center">Rancho Calpa: La gentrificación de Airbnb en la CDMX</h1>';

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
'<p>Varios de los inmuebles servían como casas de seguridad, puntos de halconeo o de venta de droga. Pero otros eran ranchos para el descanso de los líderes de la organización, cuyos lujos se volvieron noticia nacional: Acabados en oro o maderas preciosas, piscinas, canchas de tenis o salas de cine.</p>' +
'<p>Algunos ranchos contaban con lagos artificiales que hacían de los inmuebles auténticos oasis en medio de las áridas barrancas mexiquenses. Unos más tenían animales exóticos.</p>' +
'<img src="images/southfarm.png">'+
'<section id="gallery"><div class="gallery-container"><figure class="gallery-item"><img src="images/Chapter_2_Image.jpg" alt="Imagen 1"><figcaption>Descripción de la imagen 1</figcaption></figure><figure class="gallery-item"><img src="images/Chapter_3_Image.jpg" alt="Imagen 2"><figcaption>Descripción de la imagen 2</figcaption></figure><figure class="gallery-item"><img src="images/Chapter_2_Image.jpg" alt="Imagen 3"><figcaption>Descripción de la imagen 3</figcaption></figure></div><nav class="gallery-navigation"><button class="nav-button prev-button">Anterior</button><button class="nav-button next-button">Siguiente</button></nav></section>';
;

let divChapter4 =
'<h3 style="text-align:center"> Rancho Las Piñuelas</h3>'+
'<p>Otro rancho lleno de lujos es el Rancho Calpa, ubicado en el sur del municipio de Amatepec, a la altura de la localidad Charco Hondo.</p>' +
'<p>De acuerdo con autoridades estatales y federales, el rancho era usado por las hijas del propio líder de la Nueva Familia Michoacana, José Alfredo Hurtado Olascoaga, quien ha tenido varios alias: “Señor Pez”, “El Fish”, “El Mojarro”, pero el más conocido es “El Pez”.</p>';
// Aquí hay que poner una foto de la entrada del rancho
;

let divChapter5 =
'<h3 style="text-align:center"> Rancho Calpa</h3>'+
'<p>Otro rancho lleno de lujos es el Rancho Calpa, ubicado en el sur del municipio de Amatepec, a la altura de la localidad Charco Hondo.</p>' +
'<p>De acuerdo con autoridades estatales y federales, el rancho era usado por las hijas del propio líder de la Nueva Familia Michoacana, José Alfredo Hurtado Olascoaga, quien ha tenido varios alias: “Señor Pez”, “El Fish”, “El Mojarro”, pero el más conocido es “El Pez”.</p>';
// Aquí hay que poner una foto de la entrada del rancho
;


 let divChapter6 =
 '<p>El rancho Calpa se componía de una casa al centro de un pequeño lago artificial, que convertía al lugar en un auténtico oasis escondido entre las áridas barrancas mexiquenses.</p>' +
 '<p> La propiedad contaba además con alberca al centro de la casa, un cine, una cancha de fútbol y vehículos tipo safari sin placas. Pero lo que más llamaba la atención del predio eran sus animales.</p>'+
'<p>Un zoológico personal albergaba el Rancho Calpa, habitado por venados, cebras, pavoreales, caballos y reses. El interior estaba adornado por una colección de osos, tigres y una boa, todos disecados.</p>';
// Aquí hay que poner carrusel o video del rancho. Sólo con lo que dice la operación bastión. 
;

let divChapter7 =
'<p style="text-align:center">La Operación Bastión se presumió como un logro nacional frente al crimen organizado, enmarcado en la reciente designación de la Nueva Familia Michoacana como una organización terrorista por parte del gobierno estadounidense.</p>'+
'<p style="text-align:center">Sin embargo, el Rancho Calpa ya había sido cateado por las autoridades cinco años atrás, en marzo de 2020. Pero su captura se presentó como si fuera reciente. Así lo revelan reportes confidenciales hallados por AD Noticias en la filtración de los #GuacamayaLeaks, la mayor filtración de información de las fuerzas armadas durante el sexenio de Andres Manuel López Obrador.</p>';
;

  let divChapter8 =
  "<p>As pushback to wind farms grows, builders erecting these projects have started putting in place contingencies, not only to protect wildlife but also their investment. </p>" +
  "<p> In June, Ørsted announced an agreement with environmental organizations to protect the North Atlantic Right Whale, common near Long Island waters and is facing extinction. The agreement, among others, will see the company enforce measures to help keep whales away from project sites as well as minimize noise during construction to avoid disturbing animals in the area.</p>" +
  "<p> Such efforts will not completely eliminate wildlife risks posed by the projects, but can help mitigate them. In the end, Columbia’s Fell said offshore wind farms are still “net positive” for New York, which presently relies heavily on natural gas for its power. </p>" +
  '<img src="images/southfarm.png">' +
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
      id: "capitulo-4",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-100.324192, 18.742293],
        zoom: 16.75,
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
          opacity: 1
      },
      {
          layer: 'rancho-calpa-p',
          opacity: 0
      },
      {
        layer: 'ataque-sep-2020',
       opacity: 0
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
      id: "capitulo-5",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
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
      id: "capitulo-6",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
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
      id: "capitulo-7",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [-100.267475, 18.698400],
        zoom: 16.75,
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
      id: "capitulo-8",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [-100.267475, 18.698400],
        zoom: 16.75,
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
      id: "capitulo-9",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
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
      id: "capitulo 10",
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
      id: 'capitulo-11',
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
    id: 'capitulo-12',
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
  id: 'capitulo-13',
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
  id: 'capitulo-14',
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
  id: 'capitulo-15',
  alignment: 'left',
  hidden: false,
  title: 'Capitulo 12',
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
  id: 'capitulo-16',
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
  id: 'capitulo-17',
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