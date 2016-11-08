function holaMundo(nombre){
	return "Hola mundo!! soy " + nombre;
}

var nombre = "Joel";
var resultado = holaMundo(nombre);
var etiqueta = <HTMLElement>document.getElementById("contenido");
etiqueta.innerHTML = resultado;

// Variables y tipos
var nombre:string = "Joel";
var edad:number = 23;
var programador:boolean = true;
var lenguajes: Array<string> = ["PHP", "Javascript", "Python"];
nombre = "LETRAS";
etiqueta.innerHTML = nombre+ " - "+edad;


//funciones y tipado

function devuelveNumero(numero:number):string{
	return "El numero es: "+numero;
}

function devuelteString(texto:string):number{
	if(texto == "hola"){
		var num = 69;
	}else{
		var num = 20;
	}

	return num;
}

// alert(devuelveNumero(10));
alert(devuelteString("hola"));