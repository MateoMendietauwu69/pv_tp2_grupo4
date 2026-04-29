let notas = [5,6,3,1,7,10,8,2,8,9];

let suma = 0;
let aprobadas = 0;

console.log("Todas las notas:");

for(let i=0; i< notas.length; i++){
    console.log(notas[i]);
    suma+=notas[i];
    if(notas[i]>= 6)
    {
        aprobadas++;
    }
}

//aprobadas
console.log("Notas aprobadas:");
for(let i=0;i<notas.length;i++)
{
    if(notas[i]>=6)
    {
        console.log(notas[i]);
    }

}

//desaprobadas
console.log("Notas desaprobadas:");
for(let i=0;i<notas.length;i++)
{   if(notas[i]<6)
    {
        console.log(notas[i]);
    }
}

//promedio
let promedio = suma / notas.length;
console.log("Promedio general:", promedio);

//cant aprobadas
console.log("Cantidad de notas aprobadas:", aprobadas);