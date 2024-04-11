// Koordinaten für die Karte definiert
let lat = -45.345275;
let lng = 170.826061;
let zoom = 13;

let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`
<strong>Moeraki Boulders</strong><br>
<em>
<ul>
<li>Breite: ${lat}</li>
<li>Länge: ${lng} </li>
</ul>
</em>
`).openPopup();

