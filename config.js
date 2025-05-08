let topTitleDiv = "<h4>Publicado el 7 de mayo de 2025</h4>";

let titleDiv =
  '<h1 style="text-align:center">Rancho Palma: El montaje detrás de la Operación Bastión</h1>';

let bylineDiv = '<p style="font-size: 15px"> Investigación y visualización: Ivan Ortiz </p>';

let descriptionDiv =
"<p> Dos ranchos del Estado de México exhiben un montaje detrás del último golpe a la Familia Michoacana, el tercer cartel más poderoso de México. Y una red de narcogobierno que operó impune durante los últimos cinco años.</p>" +
"<p> En marzo de 2025 autoridades estatales y federales realizaron la operación Bastión. El operativo consistió en la toma de propiedades de la Familia en el sur del Edomex, región dominada por el grupo delincuencial. Desde puntos de halconeo hasta mansiones de lujo,  </p>" +
"<p> Aunque la Operación Bastión se planteó como un mensaje de intolerancia frente al crimen organziado, dos de estos inmuebles ya habían sido cateados años atrás; pero su captura se presentó como si fuera reciente. Así lo revelan informes públicos y confidenciales de los #GuacamayaLeaks hallados y analizados por AD Noticias.</p>" +
"<p> Los documentos, además, exhiben que los ranchos, usados por las hijas de El Pez, eran propiedad de ex presidentes municipales. Los ediles funcionaron como prestanombres de la Familia Michoacana.</p>" +
"<p> Ni el gobierno estatal ni el federal, incluyendo el Ejército, quisieron dar una postura al respecto, ni explicar porque los ranchos  </p>" +

  '<p style="text-align:center">Haz scroll para continuar <br>▼</p>';

let footerDiv =
  '<br> Esta visualización fue creada usando <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';

let divChapter1 =
  
  "<p>A finales de marzo de 2025 autoridades estatales y federales realizaron la Operación Bastión, una serie de cateos en 21 inmuebles presuntamente utilizados por la Nueva Familia Michoacana en el Estado de México. Sin embargo, dos de de estos ranchos, Calpa y Las Piñuelas, fueron asegurados en 2020 y 2022. Así lo revelan informes albergados los Guacamaya Leaks localizados por AD Noticias. Ni la Fiscalía ni el Gobierno Mexiquense ni el Ejército </p>";
  ;
let divChapter2 =
"<p>Of the five, South Fork wind farm by the joint venture of Danish firm Ørsted and Eversource Energy already began construction last February.  The farm, to be located 35 miles east of Long Island, is targeted to become operational by late 2023. Four others are at varying stages of development.</p>" +
'<img src="images/southfarm.png">' 

  ;
let divChapter3 =
  "<p>The main problem with the projects, according to McWilliams, is that they are not coordinated. Because wind farms are proposed by individual companies and funded commercially, he said there is lack of consultation among stakeholders that could have brought to light the projects’ pros and cons.</p>" 
 ;

 let divChapter4 =
 "<p>That was not the case in Rhode Island, where America’s first wind farm was constructed by Ørsted in 2016. At the time, McWilliams said the federal government, through the Bureau of Ocean Energy Management, stepped in to limit areas where windmills can be built in order to avoid disrupting wildlife.</p>" +
 "<p>“They immediately took off the table any shipping lanes…, whale migration quarters and waters less than 20 meters in depth because we knew that that’s where most of the waterfowl and waterbirds concentrate,” he explained.</p>";

;

let divChapter5 =

  "<p>“They immediately took off the table any shipping lanes…, whale migration quarters and waters less than 20 meters in depth because we knew that that’s where most of the waterfowl and waterbirds concentrate,” he explained.</p>";
  ;

  let divChapter6 =

  "<p>As pushback to wind farms grows, builders erecting these projects have started putting in place contingencies, not only to protect wildlife but also their investment. </p>" +
  "<p> In June, Ørsted announced an agreement with environmental organizations to protect the North Atlantic Right Whale, common near Long Island waters and is facing extinction. The agreement, among others, will see the company enforce measures to help keep whales away from project sites as well as minimize noise during construction to avoid disturbing animals in the area.</p>" +
  "<p> Such efforts will not completely eliminate wildlife risks posed by the projects, but can help mitigate them. In the end, Columbia’s Fell said offshore wind farms are still “net positive” for New York, which presently relies heavily on natural gas for its power. </p>" +
  // '<img src="images/southfarm.png">' +
  "<p> McWilliams agreed. “I’m saying the effect would still be positive, but just be careful where you put it,” he said.</p>" 
  ;
var config = {
  style: "mapbox://styles/adnoticias/cmaek5iex00pd01si658zh8or",
  accessToken: "pk.eyJ1IjoiYWRub3RpY2lhcyIsImEiOiJjbWFlamJ5enEwODR3MmpwenExN2J5cXNqIn0.K8wE_YrKJOW36r9_x_YG7Q",
  showMarkers: true,
  markerColor: "#3FB1CE",
  theme: "adnoticias",
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
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "incomeUnderlay",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-71.045935936999967, 40.719213229000047],
        zoom: 8.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //   layer: "windLeases",
        //   opacity: 1,
        //   duration: 300,
        // },
      ],
      onChapterExit: [
        // {
        //   layer: "medianIncome",
        //   opacity: 0,
        //   duration: 300,
        // },
      ],
    },
    {
      id: "elmhurstHospital",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-71.045935936999967, 40.719213229000047],
        zoom: 8.5,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,

        
      },

    

      onChapterExit: [
        // {
        //   layer: "windLeases",
        //   opacity: 0,
        //   duration: 300,
        // },
      ],
    },
   
    {
      id: "southBronx",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-71.542677, 41.142757],
        zoom: 10,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //   layer: "medianIncome",
        //   opacity: 1,
        //   duration: 300,
        // },
      ],
      onChapterExit: [
        // {
        //   layer: "medianIncome",
        //   opacity: 0,
        //   duration: 300,
        // },
      ],
      
    },
    {
      id: "southBronx",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-71.542677, 41.142757],
        zoom: 10,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //   layer: "medianIncome",
        //   opacity: 1,
        //   duration: 300,
        // },
      ],
      onChapterExit: [
        // {
        //   layer: "medianIncome",
        //   opacity: 0,
        //   duration: 300,
        // },
      ],
    },

    {
      id: "weekdayTrips",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-73.886201, 40.744566],
        zoom: 16,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //   layer: "medianIncome",
        //   opacity: 0,
        //   duration: 300,
        // },
      ],
      onChapterExit: [
        // {
        //   layer: "medianIncome",
        //   opacity: 0,
        //   duration: 300,
        // },
      ],
    },

  ],
};