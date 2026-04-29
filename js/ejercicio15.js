/* Escribir una función llamada retornarMes, que reciba un número entero y si
corresponde a un mes del año devolver el nombre del mes, si no se cumple entonces
mostrar un mensaje que no es un mes. */
const retornarMes = (numero) => {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    if (numero >= 1 && numero <= 12) {
        return meses[numero - 1];
    } else {
        return "No es un mes válido";
    }
};
const num = parseInt(prompt("Ingrese un número del 1 al 12:"));
document.write(`<p>El número ingresado es: ${num}</p>`);
document.write(`<p>Resultado: ${retornarMes(num)}</p>`);