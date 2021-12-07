const Mueble = require("./mueble");
const Dimensiones = require("./dimensiones");

function Silla(id){
    
    Mueble.call(this, "Silla", new Dimensiones(4, 4, 4), "Marron", 500, id);
}

Silla.prototype = Object.create(Mueble.prototype); 
Silla.prototype.constructor = Silla;

module.exports = Silla;