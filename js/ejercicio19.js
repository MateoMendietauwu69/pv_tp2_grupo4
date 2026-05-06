const parrafo = document.getElementById("texto");
const boton = document.getElementById("btn");

boton.addEventListener("click", function() {
    parrafo.textContent = "Texto cambiado";
});