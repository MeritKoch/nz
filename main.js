// Koordinaten für die Karte definiert
let lat = -45.345275;
let lng = 170.826061;
let zoom = 13;

//neue Kartenvariante von leaflet, nicht mehr aus dem Tutorial
let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`
<strong>Moeraki Boulders</strong><br>
<em> <ul>
    <li>Breite: ${lat.toFixed(5)}</li>
    <li>Länge: ${lng.toFixed(5)} </li>
</ul> </em>
`).openPopup();

L.control.scale({
    imperial: false,
}).addTo(map);
