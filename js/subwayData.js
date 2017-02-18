//Subway Lines

L.geoJSON(subwayLines, {
	style:  function(feature) {
		return {
			color:feature.properties.color,
			weight: 5,
			opacity: 0.65
		}
	},
	filter: function(feature, layer) {
		return feature.properties.show_on_map;
	}
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 4,
    fillColor: "#ff7800",
    weight: 1,
    opacity: 0,
    fillOpacity: 1
};




L.geoJSON(subwayStations, {
	//pop up
	onEachFeature: function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.LINEA && feature.properties.ESTACION) {
        layer.bindPopup(
        	'Station: ' + feature.properties.ESTACION + ' - ' + feature.properties.LINEA + ' Line'
        	);
    }
},
	 //condictional colors on subway line
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, geojsonMarkerOptions);},
	style: function(feature) {
		switch (feature.properties.LINEA) {
              case 'A': return {fillColor: "#1e90ff"};
              case 'B': return {fillColor: "#b22222"};
              case 'C': return {fillColor: "#0000cd"};
              case 'D': return {fillColor: "#266a2e"};
              case 'E': return {fillColor: "#800080"};
              case 'H': return {fillColor: "#ffd700"};
          }
      },
}).addTo(map);


