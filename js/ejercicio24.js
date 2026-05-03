const radios = document.querySelectorAll('input[name="lenguaje"]');
const parrafo = document.getElementById('resultado');
radios.forEach(boton => 
{
    boton.addEventListener('change', function() 
    {
        if (this.checked) 
        {
            parrafo.innerText = this.value;
            console.log("Opcion seleccionada: " + this.value);
        }
    });
});