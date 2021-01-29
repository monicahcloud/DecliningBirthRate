console.log("This is my first map");

let map = L.map("map").setView([37.8, -96], 4);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    id: "mapbox/light-v9",
    // attribution: ...,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY,
  }
).addTo(map);

L.geoJson(statesData).addTo(map);

function getColor(d) {
  return d > 1000
    ? "#800026"
    : d > 500
    ? "#BD0026"
    : d > 200
    ? "#E31A1C"
    : d > 100
    ? "#FC4E2A"
    : d > 50
    ? "#FD8D3C"
    : d > 20
    ? "#FEB24C"
    : d > 10
    ? "#FED976"
    : "#FFEDA0";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 1,
    opacity: 1,
    color: "#238443",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}
L.geoJson(statesData, { style: style }).addTo(map);

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7,
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}
function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature,
  });
}
geojson = L.geoJson(statesData, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(map);

let info = L.control();
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML =
    "<h4>Number of Births Per State</h4>" +
    (props
      ? "<b>" + props.name + "</b><br />" + props.density + " species count"
      : "Hover over a state");
};
info.addTo(map);

let legend = L.control({ position: "bottomright" });
legend.onAdd = function (map) {
  let div = L.DomUtil.create("div", "info legend"),
    grades = [0, 1900, 2600, 3300, 4000, 4700, 5400, 6100],
    labels = [];

  for (let i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' +
      getColor(grades[i] + 1) +
      '"></i> ' +
      grades[i] +
      (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
  }
  return div;
};
legend.addTo(map);

// // Data for table
// var year2016 = [59151,11209,84520,38274,488827,66613,36015,10992,9858,225022,130042,18059,22482,154445,83091,39403,38053,55449,63178,12702,73136,71317,113315,69749,37928,74705,12282,26589,36260,12262,102647,24692,234283,120779,11383,138085,52592,45535,139409,10798,57342,12275,80807,398047,50464,5754,102460,90505,19072,66615,7379]
// var year2017= [58941,10445,81872,37520,471658,64382,35221,10847,9560,223630,129243,17517,22181,149390,82170,38430,36519,54752,61018,12294,71641,70702,111426,68595,37357,73034,11799,25821,35756,12110,101250,23767,229737,120125,10737,136832,50214,43631,137745,10638,57029,12134,81016,382050,48585,5652,100391,87562,18675,64975,6894]
// var states = ["Alabama","Alaska","Arizona","Arkansas","California"," Colorado","Connecticut","Connecticut","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming",];
// var year2018 =  [57761,10086,80723,37018,454920,62885,34725,10614,9212,221542,126172,16972,21403,144815,81646,37785,36261,53922,59615,12308,71080,69109,110032,67344,37000,73269,11513,25488,35682,11995,101223,23039,226238,118954,10636,135134,49800,42188,135673,10506,56669,11893,80751,378624,47209,5431,99843,86085,18241,64098,6562]
// var year2019 = [58615,9822,79375,36564,446479,62869,34258,10562,9079,220002,126371,16797,22063,140128,80859,37649,35395,53069,58941,11772,70178,69117,107886,66027,36636,72127,11079,24755,35072,11839,99585,22960,221539,118725,10454,134461,49143,41858,134230,10175,57038,11449,80450,377599,46826,5360,97429,84895,18128,63270,6565 ]

// // Create the Trace
// var trace1 = {
//     x: year2016,year2017, year2018, year2019
//     y: states,
//     type: "bar"
//   };
  
//   // Create the data array for the plot
//   var data = [trace1];
  
//   // Define the plot layout
//   var layout = {
//     title: "Births per State",
//     xaxis: { title: "Years" },
//     yaxis: { title: "States" }
//   };
  
//   // Plot the chart to a div tag with id "bar-plot"
//   Plotly.newPlot("bar-plot", data, layout);
  

