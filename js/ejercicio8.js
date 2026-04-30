const notas = [7,4,6,9,3,6,7,9,10,2];

const mostrarNotas = () => {
    let resultado="| ";
    console.log("Todas las notas:");
    notas.forEach(nota => resultado += nota += " | ");

    console.log(resultado);
};

//notas aprobadas
const aprobadas = () => {
    let resultado ="| ";
    console.log ("Notas aprobadas:");
    notas.forEach(nota => {
        if (nota >=6)
        {resultado += nota + " | ";}

    });
    console.log(resultado);
};

//notas desaprobadas
const desaprobadas = () => {
    let resultado = "| ";
    console.log("Notas desaprobadas:");
    notas.forEach(nota => {
        if (nota < 6)
        {resultado += nota + " | ";}
    });

    console.log(resultado);
};

//promedio
const promedio = () =>{
let suma = 0;
notas.forEach(nota => suma +=nota);
const promedio = suma / notas.length;
console.log ("Promedio general:", promedio);
};


//cantidad de notas aprobadas
const cantAprobadas = () => 
{
    let contador = 0;
    notas.forEach(nota =>{
    if (nota >= 6)
        {contador++;}
    });
    console.log("Cantidad de notas aprobadas:", contador);
};

mostrarNotas();
aprobadas();
desaprobadas();
promedio();
cantAprobadas();