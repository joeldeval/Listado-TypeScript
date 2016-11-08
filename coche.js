var Coche = (function () {
    function Coche(modelo) {
        if (typeof modelo === "undefined") { modelo = null; }
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null)
            this.modelo = "BMW Generico";
        else
            this.modelo = modelo;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };

    Coche.prototype.setColor = function (color) {
        this.color = color;
    };

    Coche.prototype.getModelo = function () {
        return this.modelo;
    };

    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };

    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };

    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };

    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
})();

var bocho = new Coche("Renault Clio");

// bocho.setColor("Rojo")
bocho.acelerar();
bocho.acelerar();
bocho.acelerar();

console.log("El color del Bocho es: " + bocho.getColor());
console.log("Modelo de Bocho: " + bocho.getModelo());
console.log("Velocidad de Bocho: " + bocho.getVelocidad());
bocho.frenar();

console.log("Velocidad de Bocho despues de frenar: " + bocho.getVelocidad());
