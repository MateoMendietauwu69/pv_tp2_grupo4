document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#campoTexto");
    const visor = document.querySelector("#visorTexto");

    input.addEventListener("input", () => {
        const largo = input.value.length;
        visor.textContent = input.value || "Esperando contenido...";

        console.log("Largo actual:", largo); 

        if (largo > 20) {
            // Aplicamos el color directamente
            visor.style.setProperty("background-color", "#ff4d4d", "important");
            visor.style.color = "white";
        } else {
            visor.style.setProperty("background-color", "#e2e3e5", "important");
            visor.style.color = "#333";
        }
    });
});