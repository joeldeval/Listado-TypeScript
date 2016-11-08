function holaMundo(nombre) {
    return "Hola mundo!! soy " + nombre;
}

var nombre = "Joel";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("contenido");
etiqueta.innerHTML = resultado;

// Variables y tipos
var nombre = "Joel";
var edad = 23;
var programador = true;
var lenguajes = ["PHP", "Javascript", "Python"];
nombre = "LETRAS";
etiqueta.innerHTML = nombre + " - " + edad;

//funciones y tipado
function devuelveNumero(numero) {
    return "El numero es: " + numero;
}

function devuelteString(texto) {
    if (texto == "hola") {
        var num = 69;
    } else {
        var num = 20;
    }

    return num;
}

// alert(devuelveNumero(10));
alert(devuelteString("hola"));
