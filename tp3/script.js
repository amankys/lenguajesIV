const archivo = document.getElementById("imagenInput");
const btnSubir = document.getElementById("btnSubir");

const nombre = document.getElementById("nombre");
const tipo = document.getElementById("tipo");
const tamano = document.getElementById("tamano");
const imagen = document.getElementById("imagen");


// Cuando hacemos clic en "Subir archivo"
btnSubir.addEventListener("click", function () {
    archivo.click();
});


// Cuando seleccionamos una imagen
archivo.addEventListener("change", function () {

    const file = archivo.files[0];

    if (!file) {
        return;
    }

    // Comprobar que sea una imagen
    if (!file.type.startsWith("image/")) {
        alert("Por favor, selecciona una imagen.");
        return;
    }

    // Mostrar los datos
    nombre.textContent = "Nombre: " + file.name;
    tipo.textContent = "Tipo: " + file.type;
    tamano.textContent = "Tamaño: " + file.size + " bytes";

    // Mostrar la imagen
    const lector = new FileReader();

    lector.onload = function (evento) {
        imagen.src = evento.target.result;
    };

    lector.readAsDataURL(file);
});