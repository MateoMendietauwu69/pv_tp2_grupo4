const bot = document.getElementById("boton");
const color =document.getElementById("op");

const colores = ["red", "lightgreen", "lightblue", "yellow", "orange", "purple", "gray", "pink", "blue", "white"];

let col = 0;

bot.addEventListener("click",function(){
    document.body.style.backgroundColor = colores[col];
    color.textContent = `el color cambió a ${colores[col]}`;
    col = col + 1;
    if (col >= 10 ){col = 0};
});

