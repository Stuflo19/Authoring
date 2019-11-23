
var map = L.map('map').fitWorld();

// L.tileLayer('https://api.tiles.mapbox.com/v4/MapID/997/256/{z}/{x}/{y}.png?access_token={sk.eyJ1Ijoic3R1ZmxvIiwiYSI6ImNrMzh3aDRsZTA5dTUzZ3BidWxsb3NqdDEifQ.l30Hor2Z_Ec8s1nhqtb6MA}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18
// }).addTo(map);

//https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([56.45584517820995, -2.990673780441284]).addTo(map)

    .bindPopup('The Little Green Larder.<br><br> A small shop awaiting work to increase in size.<br> Run in order to reduce over wasted plastics and containers.')
    .openPopup();

L.marker([56.46026612542765, -2.97567218542099]).addTo(map)

		 .bindPopup('Dundee City Council Waste Management.<br><br> The Councils waste management site right in the center of Dundee.')
		 .openPopup();

L.polygon([
	[56.45584517820995, -2.990673780441284],
	[56.46026612542765, -2.97567218542099],
	[56.460403947559264,-2.9863929748535156]
]).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {

  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
  .bindPopup("You are " + radius + "Meters from this location").openPopup();

  L.circle(e.latlng, radius).addTo(map);

}

map.on('locationfound' , onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);
