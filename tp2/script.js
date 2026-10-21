const map = L.map('map').setView([-24.7821, -65.4232], 13);

// Darle altura al mapa
document.getElementById('map').style.height = '400px';

// Agregar OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap contributors'
}).addTo(map);

// Obtener ubicación del navegador
navigator.geolocation.getCurrentPosition(

    function(position) {

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        console.log("Latitud:", lat);
        console.log("Longitud:", lng);

        // Centrar el mapa en la ubicación actual
        map.setView([lat, lng], 15);

        // Mostrar marcador
        L.marker([lat, lng]).addTo(map)
            .bindPopup("Tu ubicación actual")
            .openPopup();
    },

    function(error) {
        console.log("Error al obtener la ubicación:", error);
    }

);