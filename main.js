
let map = L.map('map').setView([-45.345275, 170.826061], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([-45.345275, 170.826061]).addTo(map);
marker.bindPopup("<strong>Moeraki Boulders</strong><br><em>Neuseeland</em>").openPopup();

