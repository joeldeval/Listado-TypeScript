var plantilla = <HTMLElement>document.getElementById('plantilla');

var lienzo = plantilla.getContext("2d");

var lineas:number = 30;
var linea:number = 0;
var yi:number, xf:number;
var colorcito:string = "#e91e1e";

for(linea = 0; linea < lineas; linea++){
	yi = 10 * linea;
	xf = 10 * (linea + 1);
	dibujarLinea(colorcito, 0, yi, xf, 300);
	dibujarLinea(colorcito, 300, yi, xf, 0);
}


dibujarLinea(colorcito, 1, 1, 1, 299)
dibujarLinea(colorcito, 1, 299, 299, 299)

dibujarLinea(colorcito, 10, 10, 280, 280)
dibujarLinea(colorcito, 11, 11, 281, 281)
dibujarLinea(colorcito, 12, 12, 282, 282)

function dibujarLinea(color:string, xinicial:number, yinicial:number, xfinal:number, yfinal:number)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}