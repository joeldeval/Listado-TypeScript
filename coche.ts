interface CocheBase{

	getModelo():string
	getColor():string
	getVelocidad():number

}

class Coche implements CocheBase{
	
	public color: string
	public modelo: string
	public velocidad: number

	constructor(modelo:any = null){
		this.color = "Blanco"
		this.velocidad = 0
		if(modelo == null)
			this.modelo = "BMW Generico"
		else
			this.modelo = modelo
	}

	public getColor():string{
		return this.color
	}

	public setColor(color:string){
		this.color = color
	}

	public getModelo():string{
		return this.modelo
	}

	public setModelo(modelo:string){
		this.modelo = modelo
	}

	public getVelocidad():number{
		return this.velocidad
	}

	public acelerar(){
		this.velocidad++
	}

	public frenar(){
		this.velocidad--
	}

}

var bocho = new Coche("Renault Clio")

// bocho.setColor("Rojo")
bocho.acelerar()
bocho.acelerar()
bocho.acelerar()


console.log("El color del Bocho es: "+bocho.getColor())
console.log("Modelo de Bocho: "+bocho.getModelo())
console.log("Velocidad de Bocho: "+bocho.getVelocidad())
bocho.frenar();

console.log("Velocidad de Bocho despues de frenar: "+bocho.getVelocidad())
