let array=[2,4,6,8,10,12,20,30];
let suma=0;
for(let j=0; j<8; j++)
{
    console.log(array[j]);
    suma=suma + array[j];
}
console.log("El promedio de edades es: " + (suma/array.length));