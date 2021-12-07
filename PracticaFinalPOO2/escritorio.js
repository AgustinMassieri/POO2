const Mueble = require("./mueble");
const Dimensiones = require("./dimensiones");

function Escritorio(id){
    
    Mueble.call(this, "Escritorio", new Dimensiones(25, 12, 15), "Negro", 2000, id);
}

Escritorio.prototype = Object.create(Mueble.prototype); 
Escritorio.prototype.constructor = Escritorio;

module.exports = Escritorio;