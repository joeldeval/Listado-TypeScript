/// Clase Padre
class Programa{

	public nombre: string
	public version: number

	setNombre(nombre:string){
		this.nombre = nombre
	}

	getNombre():string{
		return this.nombre
	}

	setVersion(version:number){
		this.version = version
	}

	getVersion():number{
		return this.version
	}

}

// Clase Hija
class EditorVideo extends Programa{
	
	public timeLine: number

	setTimeLine(timeLine:number){
		this.timeLine = timeLine
	}

	getTimeLine():number{
		return this.timeLine
	}

	getAllData():string{
		return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine()
	}
}

var editor = new EditorVideo()

// clase Padre
editor.setNombre("Camtasia Studio")
editor.setVersion(8)

// clase hija
editor.setTimeLine(4000)

console.log(editor.getAllData())


/// Logica del programa

var programas:Array<Programa> = []

function guardar(){
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa = new Programa();
	programa.setNombre(nombre)
	programa.setVersion(8)

	programas.push(programa)

	var list = "";

	for(var i = 0; i < programas.length; i++){
		list = list + "<li>" + programas[i].getNombre() + "</li>"
	}

	var listado = <HTMLElement> document.getElementById("listado")
	listado.innerHTML = list;

	(<HTMLInputElement>document.getElementById("nombre")).value = "";
}