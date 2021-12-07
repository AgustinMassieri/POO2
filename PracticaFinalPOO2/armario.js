const Mueble = require("./mueble");
const Dimensiones = require("./dimensiones");

function Armario(id){
    
    Mueble.call(this, "Armario", new Dimensiones(10, 20, 30), "Marron", 30000, id);
}

Armario.prototype = Object.create(Mueble.prototype); 
Armario.prototype.constructor = Armario;

module.exports = Armario;