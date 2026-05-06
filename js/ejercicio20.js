//logica de negocio
Document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#form-carga");
    const resultado = document.querySelector("#resultado");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const inputNombre = document.querySelector("#nombre");
        const inputApellido = document.querySelector("#apellido");
        const inputLU = document.querySelector("#lu");

        const nombreVal = inputNombre.value;
        const apellidoVal = inputApellido.value;
        const luVal = inputLU.value;

        //console.log(inputNombre.id);

        contenedorResultado.innerHTML = ""; 

        const fichaInfo = document.createElement("div");
        fichaInfo.className = "info-box";

        fichaInfo.innerHTML = `
            <h3>Datos ingresados:</h3>
            <p><strong>Nombre:</strong> ${nombreVal}</p>
            <p><strong>Apellido:</strong> ${apellidoVal}</p>
            <p><strong>LU:</strong> ${luVal}</p>
        `;

        contenedorResultado.appendChild(fichaInfo);

        //formulario.reset();
    });
});




//Puede terner servicios o funciones

//import { servicioDavidPalacios } from "../services/servicesDavidPalacios";
//import { servicioMateoMendieta } from "../services/servicesMateoMendieta";
//import { servicioErickNeuman } from "../services/servicioErickNeuman";
//import { servicioMercadoLautaro } from "../services/servicesMercadoLautaro"; 

