let miblob = null;
// crear blob
function crearBlob() {
    let texto = "Hola, este es un ejemplo de Blob en JavaScript.";
    miblob = new Blob([texto], { type: "text/plain" });

    document.getElementById("resultado").innerHTML = "Blob creado con éxito.";
}

//descargar bolb

function descargarblob() {
    if (miblob === null){
        alert("Primero debes crear el blob.");
        return;
    }
}
let url = URL.createObjectURL(miblob);
let enlace = document.createElement("a");

enlace.href = url;
enlace.download = "archivo.txt";
enllace.click();
URLrevokeObjectURL(url);
document.getElementById("resultado").innerHTML = "Blob descargado con éxito.";

// Utilizar slice()
function usarSlice() {

    if (miBlob === null) {
        alert("Primero tenés que crear el Blob.");
        return;
    }

    let parteBlob = miBlob.slice(0, 10);

    parteBlob.text().then(function(texto) {

        document.getElementById("resultado").innerHTML =
            "Resultado de slice(): <br><br>" + texto;

    });
}