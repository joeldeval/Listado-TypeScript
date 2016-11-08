var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// Clase Padre
var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };

    Programa.prototype.getNombre = function () {
        return this.nombre;
    };

    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };

    Programa.prototype.getVersion = function () {
        return this.version;
    };
    return Programa;
})();

// Clase Hija
var EditorVideo = (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        _super.apply(this, arguments);
    }
    EditorVideo.prototype.setTimeLine = function (timeLine) {
        this.timeLine = timeLine;
    };

    EditorVideo.prototype.getTimeLine = function () {
        return this.timeLine;
    };

    EditorVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    };
    return EditorVideo;
})(Programa);

var editor = new EditorVideo();

// clase Padre
editor.setNombre("Camtasia Studio");
editor.setVersion(8);

// clase hija
editor.setTimeLine(4000);

console.log(editor.getAllData());

/// Logica del programa
var programas = [];

function guardar() {
    var nombre = document.getElementById("nombre").value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(8);

    programas.push(programa);

    var list = "";

    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }

    var listado = document.getElementById("listado");
    listado.innerHTML = list;

    document.getElementById("nombre").value = "";
}
