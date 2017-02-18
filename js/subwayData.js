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


//Subway station
L.geoJSON(subwayStations, {
     style: function(feature) {
     	console.log(feature.properties.LINEA);
         switch (feature.properties.LINEA) {
             case 'A': return {color: "#ff0000"};
             case 'B':   return {color: "#0000ff"};
         }
     }


}).addTo(map);


