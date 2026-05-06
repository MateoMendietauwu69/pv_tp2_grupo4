const input = document.getElementById("entrada");
const salida = document.getElementById("salida");

input.addEventListener("input", () => {

    salida.textContent= input.value;

})