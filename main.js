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

//Maßstab
L.control.scale({
    imperial: false,
}).addTo(map);

//GeoJSON definiert
let jsonPunkt = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
    },
    "properties": {
        "name": "Moeraki Boulders"
    }
};

//Leaflet einfügen
L.geoJSON(jsonPunkt, {}).bindPopup(function (layer) {
    return `
    <h2>${layer.feature.properties.name}
    <h2>
    <em> <ul>
        <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(5)}</li>
        <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(5)} </li>
    </ul> </em>
    `;
}).addTo(map);
