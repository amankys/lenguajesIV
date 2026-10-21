function abrirubicacion() {
    let nombre = document.getElementById("nombre de la ubicacion").value;
    let latitud = document.getElementById("latitud").value;
    let longitud = document.getElementById("longitud").value;

    let url = "https://www.google.com/maps?q=" + latitud + "," + longitud;

    window.open(url, "_blank");
}
