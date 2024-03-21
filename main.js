
var map = L.map('map').setView([63.988611, -19.063889], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([63.988611, -19.063889]).addTo(map);
marker.bindPopup("<strong>Landmannalaugar</strong><br><em>Island</em>").openPopup();
