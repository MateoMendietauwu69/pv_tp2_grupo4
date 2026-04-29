/* 7. Declarar un array denominado nombres con al menos 6 nombres.
Mostrar los nombres del array y obtener el nombre más largo del array nombres.
Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length)
que indica su tamaño */

const nombres = ["Mateo", "Ignacio", "Lautaro", "Erick", "David", "Octavio"];
const mostrarNombres = () => {
    console.log("Nombres del array:");
    for (let i = 0; i < nombres.length; i++) {
        console.log(`${i + 1}. ${nombres[i]}`);
    }
};

const nobremaslagro = () => {
    let masLargo = nombres[0];
    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i].length > masLargo.length) {
            masLargo = nombres[i];
        }
    }
    return masLargo;
};

mostrarNombres();
console.log(`El nombre más largo es: ${nobremaslagro()} (${nobremaslagro().length} caracteres)`);